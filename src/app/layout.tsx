"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import Navbar from "./components/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en" className="h-full">
      <body
        className={(clsx(inter.className), "h-full flex flex-col bg-blue-200")}
      >
        <div className="py-2">
          <Navbar pathname={pathname} />
        </div>
        <div className="flex-1 bg-blue-100 m-2 p-2 rounded-lg shadow-md shadow-cyan-900">
          {children}
        </div>
      </body>
    </html>
  );
}
