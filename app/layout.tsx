import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialSidebar from "@/components/SocialSidebar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Loader from "@/components/Loader";
import { SITE, SITE_NAME, SITE_URL } from "@/lib/site";
import { SITE_OG_IMAGE } from "@/lib/media";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mesby Yapı | İstanbul'da Güvenilir İnşaat ve Konut Projeleri",
    template: "%s | Mesby Yapı",
  },
  description:
    "Mesby Yapı, İstanbul'un farklı ilçelerinde güvenilir mühendislikle konut projeleri geliştiren bir inşaat firmasıdır. Projelerimizi keşfedin.",
  keywords: [
    "Mesby Yapı",
    "Mesby İnşaat",
    "İstanbul inşaat firması",
    "gayrimenkul",
    "inşaat projeleri",
    "satılık daire",
    "konut projeleri",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: "Mesby Yapı | İstanbul'da Güvenilir İnşaat ve Konut Projeleri",
    description:
      "Mesby Yapı, İstanbul'un farklı ilçelerinde güvenilir mühendislikle konut projeleri geliştiren bir inşaat firmasıdır.",
    images: [{ url: SITE_OG_IMAGE, width: 795, height: 795, alt: SITE_NAME }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mesby Yapı | İstanbul'da Güvenilir İnşaat ve Konut Projeleri",
    description:
      "Mesby Yapı, İstanbul'un farklı ilçelerinde güvenilir mühendislikle konut projeleri geliştiren bir inşaat firmasıdır.",
    images: [SITE_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Mesby Yapı, İstanbul'da konut projeleri geliştiren bir inşaat ve gayrimenkul firmasıdır.",
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address,
    addressLocality: SITE.district,
    addressRegion: SITE.city,
    addressCountry: "TR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phoneDisplay,
    email: SITE.email,
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: ["Turkish"],
  },
  sameAs: [SITE.social.instagram, SITE.social.facebook, SITE.social.sahibinden],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
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
