import BuildingArt from "./BuildingArt";
import { Listing } from "@/lib/types";
import { formatDate, formatPrice } from "@/lib/format";
import { SAHIBINDEN_STORE_URL } from "@/lib/listings";

export default function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-xl">
      <div className="relative h-48 overflow-hidden">
        <BuildingArt
          art={listing.art}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        {listing.isNew && (
          <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-neutral-950">
            Yeni İlan
          </span>
        )}
        <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
          {listing.rooms}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          {listing.district}, {listing.city}
        </p>
        <h3 className="mt-2 line-clamp-1 text-lg font-bold text-neutral-950">
          {listing.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-500">
          <span>{listing.m2} m²</span>
          <span>{listing.floor}</span>
          <span>Bina Yaşı: {listing.buildingAge}</span>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4">
          <div>
            <p className="text-lg font-bold text-neutral-950">
              {formatPrice(listing.price)}
            </p>
            <p className="text-xs text-neutral-400">
              {formatDate(listing.publishedAt)}
            </p>
          </div>
          <a
            href={SAHIBINDEN_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-neutral-950 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-neutral-800"
          >
            Sahibinden&apos;de Gör
          </a>
        </div>
      </div>
    </div>
  );
}
