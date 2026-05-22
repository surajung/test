import { NextRequest, NextResponse } from "next/server";

type Body = {
  email?: string;
  password?: string;
};

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as Body;

  if (body.email === "demo@surajung.com" && body.password === "password123") {
    return NextResponse.json({
      success: true,
      token: "dummy-token-12345",
      user: { id: "u1", name: "Demo User" },
    });
  }

  return NextResponse.json(
    { success: false, message: "Invalid email or password" },
    { status: 401 },
  );
}
