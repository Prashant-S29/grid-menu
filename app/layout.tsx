import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import MENU from "@/clientComponents/menu";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Responsive Menu",
  description: "Crafted by Code-Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MENU />
        {children}
      </body>
    </html>
  );
}
