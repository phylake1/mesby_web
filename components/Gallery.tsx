"use client";

import { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BuildingArt from "./BuildingArt";

export default function Gallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [next, prev]);

  return (
    <div>
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
        <BuildingArt art={images[index]} className="h-full w-full" />

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Önceki görsel"
              onClick={prev}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              type="button"
              aria-label="Sonraki görsel"
              onClick={next}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/70"
            >
              <FaChevronRight size={14} />
            </button>
            <span className="absolute bottom-4 right-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
              {index + 1} / {total}
            </span>
          </>
        )}
      </div>

      {total > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {images.map((image, i) => (
            <button
              key={image}
              type="button"
              aria-label={`${alt} - görsel ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`relative aspect-[4/3] h-16 shrink-0 overflow-hidden rounded-lg transition-opacity ${
                i === index
                  ? "ring-2 ring-neutral-950"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <BuildingArt art={image} className="h-full w-full" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
