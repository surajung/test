import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "테스트 사이트",
  description: "test.surajung.com 외부 확인용 더미 프론트엔드",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="apple-shell min-h-full">
        <Nav />
        {children}
      </body>
    </html>
  );
}
