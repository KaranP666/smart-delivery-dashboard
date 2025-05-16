// src/app/api/partners/route.ts

import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const partners = await prisma.deliveryPartner.findMany();
    return NextResponse.json(partners);
  } catch (error) {
    console.error('Error fetching partners:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
