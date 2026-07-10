import type { Metadata } from "next";
import BuildingArt from "@/components/BuildingArt";
import ListingsExplorer from "@/components/ListingsExplorer";
import { listings, SAHIBINDEN_STORE_URL } from "@/lib/listings";

export const metadata: Metadata = {
  title: "Satılık Daireler | Mesby İnşaat",
  description:
    "Mesby İnşaat'ın sahibinden.com üzerinde yayınladığı güncel satılık daire ilanları.",
};

export default function IlanlarPage() {
  return (
    <>
      <section className="relative flex h-72 items-center overflow-hidden bg-neutral-950 pt-16">
        <BuildingArt art={6} className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Mesby İnşaat
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
        <div className="mb-10 flex flex-col items-start justify-between gap-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:flex-row sm:items-center">
          <p className="text-sm text-neutral-600">
            Bu sayfadaki ilanlar demo amaçlıdır. Güncel ve tüm ilanlarımız için
            sahibinden.com mağazamızı ziyaret edebilirsiniz.
          </p>
          <a
            href={SAHIBINDEN_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Sahibinden Mağazamız
          </a>
        </div>

        <ListingsExplorer listings={listings} />
      </section>
    </>
  );
}
