"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import BuildingArt from "./BuildingArt";

const SLIDES = [
  {
    art: 1,
    kicker: "Mesby İnşaat",
    title: "Değer Yaratan Konut Projeleri",
    text: "İstanbul'un gözde bölgelerinde, sağlam mühendislik ve zamansız mimari anlayışıyla hayat bulan projeler.",
    ctaHref: "/projeler",
    ctaLabel: "Projelerimizi İnceleyin",
  },
  {
    art: 3,
    kicker: "Satılık Daireler",
    title: "Hayalinizdeki Eve Bir Adım Uzaktasınız",
    text: "Güncel satılık daire ilanlarımızı keşfedin, sahibinden.com üzerinden detaylarına anında ulaşın.",
    ctaHref: "/ilanlar",
    ctaLabel: "İlanları Görüntüleyin",
  },
  {
    art: 5,
    kicker: "Güven ve Kalite",
    title: "Sağlam Temeller, Güvenilir Gelecek",
    text: "Depreme dayanıklı yapı teknolojisi ve titiz kalite kontrol süreçleriyle inşa ediyoruz.",
    ctaHref: "/hakkimizda",
    ctaLabel: "Hakkımızda",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-neutral-950">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <BuildingArt art={slide.art} className="absolute inset-0 h-full w-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        </div>
      ))}

      <div className="container-page relative z-10 flex h-full flex-col items-start justify-center">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.title}
            className={`max-w-2xl transition-all duration-700 ${
              i === index
                ? "static opacity-100"
                : "absolute opacity-0"
            }`}
          >
            <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
              {slide.kicker}
            </span>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/80 sm:text-lg">
              {slide.text}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href={slide.ctaHref}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
              >
                {slide.ctaLabel}
              </Link>
              <Link
                href="/ilanlar"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Satılık Daireler
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex items-center justify-center gap-6">
        <button
          type="button"
          aria-label="Önceki"
          onClick={prev}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 sm:flex"
        >
          ‹
        </button>
        <div className="flex items-center gap-2">
          {SLIDES.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`${i + 1}. slayt`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-3 bg-white/40"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Sonraki"
          onClick={next}
          className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white/10 sm:flex"
        >
          ›
        </button>
      </div>
    </section>
  );
}
