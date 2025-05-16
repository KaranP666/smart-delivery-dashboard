import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST() {
  try {
    // 1. Get all pending orders
    const pendingOrders = await prisma.order.findMany({
      where: { status: 'pending' },
    });

    const now = new Date();
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTime = `${String(currentHour).padStart(2, '0')}:${String(currentMinute).padStart(2, '0')}`;

    const results = [];

    for (const order of pendingOrders) {
      // 2. Find eligible delivery partners
      const eligiblePartners = await prisma.deliveryPartner.findMany({
        where: {
          status: 'active',
          currentLoad: { lt: 3 },
          areas: { has: order.area },
          shiftStart: { lte: currentTime },
          shiftEnd: { gte: currentTime },
        },
        orderBy: [
          { currentLoad: 'asc' },
          { rating: 'desc' },
        ],
      });

      if (eligiblePartners.length === 0) {
        results.push({ orderId: order.id, assigned: false, reason: 'No available partner' });
        continue;
      }

      const selectedPartner = eligiblePartners[0];

      // 3. Create assignment record
      await prisma.assignment.create({
        data: {
          orderId: order.id,
          partnerId: selectedPartner.id,
          status: 'success',
        },
      });

      // 4. Update order and partner
      await prisma.order.update({
        where: { id: order.id },
        data: {
          status: 'assigned',
          assignedTo: selectedPartner.id,
        },
      });

      await prisma.deliveryPartner.update({
        where: { id: selectedPartner.id },
        data: {
          currentLoad: selectedPartner.currentLoad + 1,
        },
      });

      results.push({ orderId: order.id, assigned: true, partnerId: selectedPartner.id });
    }

    return NextResponse.json({ status: 'success', results });
  } catch (error) {
    console.error('Order assignment failed:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
