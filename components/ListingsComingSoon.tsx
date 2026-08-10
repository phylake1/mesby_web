import { SITE } from "@/lib/site";

export default function ListingsComingSoon() {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-gradient-to-b from-neutral-50 to-white px-6 py-16 text-center sm:py-20">
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFDD00] text-2xl font-black text-neutral-950">
        S
      </span>
      <h3 className="mt-6 text-xl font-bold text-neutral-950 sm:text-2xl">
        İlanlarımız Çok Yakında Burada
      </h3>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500">
        Sahibinden.com üzerindeki satılık daire ilanlarımız, API entegrasyonu
        tamamlandığında doğrudan bu sayfada da gösterilecektir. O zamana kadar
        güncel ilanlarımıza sahibinden.com mağazamızdan ulaşabilirsiniz.
      </p>
      <a
        href={SITE.social.sahibinden}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#FFDD00] px-6 py-3 text-sm font-bold text-neutral-950 transition-colors hover:bg-[#F0D000]"
      >
        Sahibinden Mağazamızı Ziyaret Edin
      </a>
    </div>
  );
}
