import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Mesby İnşaat | Gayrimenkul ve İnşaat Projeleri",
  description:
    "Mesby İnşaat; konut projeleri geliştirir ve satılık daire ilanlarını sizler için bir araya getirir. Projelerimizi keşfedin, hayalinizdeki eve ulaşın.",
  keywords: [
    "Mesby İnşaat",
    "gayrimenkul",
    "inşaat projeleri",
    "satılık daire",
    "konut projeleri",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Navbar />
        <SocialSidebar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
