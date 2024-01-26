import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  return NextResponse.json({
    now: Date.now(),
  });
}

export async function POST() {
  return NextResponse.json({
    now: Date.now(),
  });
}