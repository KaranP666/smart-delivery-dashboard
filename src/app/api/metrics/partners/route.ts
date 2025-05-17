import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Get all partners
    const partners = await prisma.deliveryPartner.findMany({
      orderBy: { name: 'asc' },
    });

    // For each partner, compute stats
    const metrics = await Promise.all(
      partners.map(async (partner) => {
        const assignments = await prisma.assignment.findMany({
          where: { partnerId: partner.id },
          include: {
            order: true,
          },
        });

        const totalAssigned = assignments.length;
        const delivered = assignments.filter((a) => a.order?.status === 'delivered').length;
        const cancelled = partner.cancelledOrders;
        const successRatio = totalAssigned > 0 ? (delivered / totalAssigned) * 100 : 0;

        return {
          name: partner.name,
          email: partner.email,
          totalAssigned,
          delivered,
          cancelled,
          successRatio: Math.round(successRatio * 100) / 100, // round to 2 decimals
        };
      })
    );

    return NextResponse.json(metrics);
  } catch (error) {
    console.error('Error generating metrics:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
