import type { Metadata } from "next";
import localFont from "next/font/local";

import "./globals.css";

const myFont = localFont({
  src: "../fonts/Satoshi-Regular.otf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ardilla",
  description: "Ardilla",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
