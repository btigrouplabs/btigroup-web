import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "BTI Group",
  description: "BTI Group - Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] mq750:items-center mq750:justify-start">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
