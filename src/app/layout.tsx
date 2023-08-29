import "./globals.css";
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import { Toaster } from "react-hot-toast";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ModalProviders from "@/providers/Modal-Providers";

const font = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roi E-commerce",
  description: "Buy used mobile phones in Dubai, United Arab Emirates (UAE)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProviders />
        <Toaster />
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
