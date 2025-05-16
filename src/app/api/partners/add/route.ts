// src/app/api/partners/add/route.ts

import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const partner = await prisma.deliveryPartner.create({
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

    return NextResponse.json(partner);
  } catch (error) {
    console.error('Error adding partner:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
