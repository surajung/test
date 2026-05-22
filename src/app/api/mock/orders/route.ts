import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    success: true,
    data: [
      { id: "ORD-1001", status: "Paid", amount: 120.0 },
      { id: "ORD-1002", status: "Pending", amount: 68.5 },
      { id: "ORD-1003", status: "Failed", amount: 44.9 },
    ],
  });
}
