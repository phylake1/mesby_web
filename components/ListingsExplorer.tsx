"use client";

import { useMemo, useState } from "react";
import ListingCard from "./ListingCard";
import { Listing } from "@/lib/types";

type SortOption = "yeni" | "fiyat-artan" | "fiyat-azalan";

export default function ListingsExplorer({
  listings,
}: {
  listings: Listing[];
}) {
  const [roomFilter, setRoomFilter] = useState<string>("Tümü");
  const [sort, setSort] = useState<SortOption>("yeni");

  const roomOptions = useMemo(
    () => ["Tümü", ...Array.from(new Set(listings.map((l) => l.rooms)))],
    [listings],
  );

  const visibleListings = useMemo(() => {
    let result = listings;
    if (roomFilter !== "Tümü") {
      result = result.filter((l) => l.rooms === roomFilter);
    }
    result = [...result].sort((a, b) => {
      if (sort === "fiyat-artan") return a.price - b.price;
      if (sort === "fiyat-azalan") return b.price - a.price;
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });
    return result;
  }, [listings, roomFilter, sort]);

  return (
    <div>
      <div className="flex flex-col gap-4 rounded-2xl border border-neutral-200 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-2">
          {roomOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setRoomFilter(option)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                roomFilter === option
                  ? "bg-neutral-950 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {option}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-sm text-neutral-500">
          Sırala:
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="rounded-full border border-neutral-200 px-3 py-2 text-sm text-neutral-950 focus:outline-none"
          >
            <option value="yeni">En Yeni</option>
            <option value="fiyat-artan">Fiyat (Artan)</option>
            <option value="fiyat-azalan">Fiyat (Azalan)</option>
          </select>
        </label>
      </div>

      <p className="mt-6 text-sm text-neutral-500">
        {visibleListings.length} ilan bulundu
      </p>

      {visibleListings.length > 0 ? (
        <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visibleListings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      ) : (
        <div className="mt-6 rounded-2xl border border-dashed border-neutral-300 p-12 text-center text-neutral-500">
          Bu kriterlere uygun ilan bulunamadı.
        </div>
      )}
    </div>
  );
}
