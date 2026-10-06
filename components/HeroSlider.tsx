"use client";

import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import BuildingArt from "./BuildingArt";
import { HERO_MEDIA } from "@/lib/media";

const SLIDE_DURATION = 8000; // ms

const ARMONI_URL = "https://armoni.mesbyyapi.com";

type Slide = {
  art: string;
  kicker: string;
  title: string;
  text: string;
  ctaHref: string;
  ctaLabel: string;
  // İkinci buton isteğe bağlı; yoksa slaytta tek buton görünür.
  secondaryHref?: string;
  secondaryLabel?: string;
  // Harici (alt alan adı) bağlantılar next/link yerine düz <a> ile açılır.
  external?: boolean;
  // Sayfada tek <h1> olmalı; sıra değişse de SEO başlığı Mesby slaytında kalır.
  h1?: boolean;
};

const SLIDES: Slide[] = [
  {
    art: HERO_MEDIA.slide2,
    kicker: "Satılık Daireler",
    title: "Hayalinizdeki Eve Bir Adım Uzaktasınız",
    text: "Arnavutköy'de her katta yalnızca 6 daire. Armoni Evleri'nin kat planlarını ve 2+1 daire tiplerini inceleyin.",
    ctaHref: ARMONI_URL,
    ctaLabel: "Projeyi İnceleyin",
    external: true,
  },
  {
    art: HERO_MEDIA.slide1,
    kicker: "Mesby Yapı",
    title: "Değer Yaratan Konut Projeleri",
    text: "İstanbul'un gözde bölgelerinde, sağlam mühendislik ve zamansız mimari anlayışıyla hayat bulan projeler.",
    ctaHref: "/projeler",
    ctaLabel: "Projelerimizi İnceleyin",
    secondaryHref: "/ilanlar",
    secondaryLabel: "Satılık Daireler",
    h1: true,
  },
];

function SlideLink({
  href,
  external,
  className,
  children,
}: {
  href: string;
  external?: boolean;
  className: string;
  children: React.ReactNode;
}) {
  return external ? (
    <a href={href} className={className}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % SLIDES.length);
  }, []);

  const prev = () => {
    setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
  };

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  // Aktif slide'a geçildiğinde videoyu baştan başlat, diğerlerini durdur.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === index) {
        video.currentTime = 0;
        video.play().catch(() => {
          // Tarayıcı otomatik oynatmayı engellerse sessizce yut, kritik değil.
        });
      } else {
        video.pause();
      }
    });
  }, [index]);

  return (
    <section className="relative h-[92vh] min-h-[560px] w-full overflow-hidden bg-neutral-950">
      {SLIDES.map((slide, i) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <BuildingArt
            ref={(el) => {
              videoRefs.current[i] = el;
            }}
            art={slide.art}
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        </div>
      ))}

      <div className="container-page relative z-10 flex h-full flex-col items-start justify-center">
        {SLIDES.map((slide, i) => {
          // Sayfada tek bir <h1> olması için sadece h1 işaretli slayt h1, diğerleri
          // (görsel olarak aynı boyutta kalması gereken) h2 olarak render edilir.
          const Heading = slide.h1 ? "h1" : "h2";
          return (
          <div
            key={slide.title}
            className={`max-w-2xl transition-all duration-700 ${
              i === index ? "static opacity-100" : "absolute opacity-0"
            }`}
          >
            <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-white/90">
              {slide.kicker}
            </span>
            <Heading className="mt-6 text-balance text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              {slide.title}
            </Heading>
            <p className="mt-5 max-w-lg text-base text-white/80 sm:text-lg">
              {slide.text}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <SlideLink
                href={slide.ctaHref}
                external={slide.external}
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-neutral-200"
              >
                {slide.ctaLabel}
              </SlideLink>
              {slide.secondaryHref && (
                <SlideLink
                  href={slide.secondaryHref}
                  external={slide.external}
                  className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {slide.secondaryLabel}
                </SlideLink>
              )}
            </div>
          </div>
          );
        })}
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
