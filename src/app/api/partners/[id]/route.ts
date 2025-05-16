import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;
    const data = await req.json();

    const updatedPartner = await prisma.deliveryPartner.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        status: data.status,
        currentLoad: data.currentLoad,
        areas: data.areas,
        shiftStart: data.shift.start,
        shiftEnd: data.shift.end,
        rating: data.metrics.rating,
        completedOrders: data.metrics.completedOrders,
        cancelledOrders: data.metrics.cancelledOrders,
      },
    });

    return NextResponse.json(updatedPartner);
  } catch (error) {
    console.error('Error updating partner:', error);
    return new NextResponse('Failed to update partner', { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = params.id;

    await prisma.deliveryPartner.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error('Error deleting partner:', error);
    return new NextResponse('Failed to delete partner', { status: 500 });
  }
}
