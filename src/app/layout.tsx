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
      <body className="min-h-full bg-zinc-50 text-zinc-900">
        <Nav />
        <main className="mx-auto w-full max-w-5xl px-6 py-8">{children}</main>
      </body>
    </html>
  );
}
