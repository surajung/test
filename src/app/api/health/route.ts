import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "test.surajung.com",
    timestamp: new Date().toISOString(),
  });
}
