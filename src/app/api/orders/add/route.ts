import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const newOrder = await prisma.order.create({
      data: {
        orderNumber: data.orderNumber,
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerAddress: data.customerAddress,
        area: data.area,
        items: data.items,
        status: data.status,
        scheduledFor: data.scheduledFor,
        totalAmount: data.totalAmount,
        assignedTo: data.assignedTo || null,
      },
    });

    return NextResponse.json(newOrder);
  } catch (error) {
    console.error('Add Order Error:', error);
    return new NextResponse('Failed to add order', { status: 500 });
  }
}
