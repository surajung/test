import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test Site",
  description: "External verification site for test.surajung.com",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="apple-shell min-h-full">
        <Nav />
        {children}
      </body>
    </html>
  );
}
