import type { Metadata } from "next";
import BuildingArt from "@/components/BuildingArt";
import ListingsComingSoon from "@/components/ListingsComingSoon";
import { SITE_BANNER } from "@/lib/media";

export const metadata: Metadata = {
  title: "İstanbul'da Satılık Daire ve Konut İlanları",
  description:
    "Mesby Yapı'nın İstanbul'daki konut projelerinden satılık daire ilanlarını inceleyin; sahibinden.com mağazamızdaki güncel ilanlara ulaşabilirsiniz.",
  alternates: {
    canonical: "/ilanlar",
  },
};

export default function IlanlarPage() {
  return (
    <>
      <section className="relative flex h-72 items-center overflow-hidden bg-neutral-950 pt-16">
        <BuildingArt
          art={SITE_BANNER}
          className="absolute inset-0 h-full w-full opacity-70"
          alt="Mesby Yapı İstanbul satılık daire ilanları"
        />{" "}
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Mesby Yapı
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Satılık Daireler
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            Güncel ilanlarımızın tamamına sahibinden.com mağazamızdan da
            ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        <ListingsComingSoon />
      </section>
    </>
  );
}
