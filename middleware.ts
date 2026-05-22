import { NextRequest, NextResponse } from "next/server";

function unauthorizedResponse() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  });
}

export function middleware(request: NextRequest) {
  const user = process.env.BASIC_AUTH_USER;
  const password = process.env.BASIC_AUTH_PASSWORD;

  if (!user || !password) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");
  if (!authHeader?.startsWith("Basic ")) {
    return unauthorizedResponse();
  }

  const token = authHeader.split(" ")[1];
  const decoded = Buffer.from(token, "base64").toString("utf-8");
  const [inputUser, inputPassword] = decoded.split(":");

  if (inputUser === user && inputPassword === password) {
    return NextResponse.next();
  }

  return unauthorizedResponse();
}

export const config = {
  matcher: ["/:path*"],
};
