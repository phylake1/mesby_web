import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Loader from "@/components/Loader";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const stapel = localFont({
  src: [
    { path: "./fonts/Stapel-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Stapel-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Stapel-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Stapel-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-stapel",
});

export const metadata: Metadata = {
  title: "Mesby Yapı | Gayrimenkul ve İnşaat Projeleri",
  description:
    "Mesby Yapı; konut projeleri geliştirir ve satılık daire ilanlarını sizler için bir araya getirir. Projelerimizi keşfedin, hayalinizdeki eve ulaşın.",
  keywords: [
    "Mesby Yapı",
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
    <html
      lang="tr"
      className={`${montserrat.variable} ${stapel.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Loader />
        <Navbar />
        <SocialSidebar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
