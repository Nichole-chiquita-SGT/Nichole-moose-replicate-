import type { Metadata } from "next";
import {Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll"
import ResizeReload from "@/app/components/ResizeReload";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Moose | Replica Nichole",
  description: "Replica of Moose social media website",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ResizeReload/>
        <SmoothScroll/>
        {children}
      </body>
    </html>
  );
}
