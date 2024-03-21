import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GonzaloMB",
  description: "GonzaloMB portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/GMB-Logo-Light.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
