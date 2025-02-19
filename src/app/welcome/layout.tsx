import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import "../../Styles/splash.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="splash-header"><Header/></div>
        {children}
        </body>
    </html>
  );
}
