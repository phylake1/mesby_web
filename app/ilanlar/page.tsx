import type { Metadata } from "next";
import BuildingArt from "@/components/BuildingArt";
import ListingsComingSoon from "@/components/ListingsComingSoon";
import { SITE_BANNER } from "@/lib/media";

export const metadata: Metadata = {
  title: "Satılık Daireler | Mesby Yapı",
  description:
    "Mesby Yapı'nın sahibinden.com üzerinde yayınladığı güncel satılık daire ilanları.",
};

export default function IlanlarPage() {
  return (
    <>
      <section className="relative flex h-72 items-center overflow-hidden bg-neutral-950 pt-16">
        <BuildingArt
          art={SITE_BANNER}
          className="absolute inset-0 h-full w-full opacity-70"
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
