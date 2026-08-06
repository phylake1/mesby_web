import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Gallery from "@/components/Gallery";
import ListingCard from "@/components/ListingCard";
import { formatDate, formatPrice } from "@/lib/format";
import { getListingById, listings, SAHIBINDEN_STORE_URL } from "@/lib/listings";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return listings.map((listing) => ({ id: listing.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) return {};
  return {
    title: `${listing.title} | Mesby Yapı`,
    description: listing.description,
  };
}

export default async function ListingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const listing = getListingById(id);
  if (!listing) notFound();

  const otherListings = listings.filter((l) => l.id !== id).slice(0, 3);

  return (
    <>
      <section className="border-b border-neutral-100 bg-neutral-50 pt-24 pb-8">
        <div className="container-page">
          <Link
            href="/ilanlar"
            className="text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-neutral-950"
          >
            ← Tüm İlanlar
          </Link>
          <div className="mt-4 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
            <div>
              <h1 className="text-3xl font-bold text-neutral-950 sm:text-4xl">
                {listing.title}
              </h1>
              <p className="mt-2 text-neutral-500">
                {listing.district}, {listing.city}
              </p>
            </div>
            <p className="text-2xl font-bold text-neutral-950 sm:text-3xl">
              {formatPrice(listing.price)}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page grid gap-12 py-10 lg:grid-cols-3 lg:pb-20">
        <div className="min-w-0 lg:col-span-2">
          <Gallery images={listing.images} alt={listing.title} />

          <div className="mt-10 grid grid-cols-2 gap-6 border-b border-neutral-200 pb-8 text-sm sm:grid-cols-4">
            <div>
              <p className="text-neutral-400">Oda Sayısı</p>
              <p className="mt-1 font-semibold text-neutral-950">
                {listing.rooms}
              </p>
            </div>
            <div>
              <p className="text-neutral-400">Metrekare</p>
              <p className="mt-1 font-semibold text-neutral-950">
                {listing.m2} m²
              </p>
            </div>
            <div>
              <p className="text-neutral-400">Kat</p>
              <p className="mt-1 font-semibold text-neutral-950">
                {listing.floor}
              </p>
            </div>
            <div>
              <p className="text-neutral-400">Bina Yaşı</p>
              <p className="mt-1 font-semibold text-neutral-950">
                {listing.buildingAge}
              </p>
            </div>
          </div>

          <h2 className="mt-8 text-xl font-bold text-neutral-950">
            İlan Açıklaması
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-600">
            {listing.description}
          </p>

          <h2 className="mt-10 text-xl font-bold text-neutral-950">
            Özellikler
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {listing.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-neutral-600"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                {feature}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-xs text-neutral-400">
            İlan tarihi: {formatDate(listing.publishedAt)}
          </p>
        </div>

        <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-lg font-bold text-neutral-950">
              Bu İlan İçin Bilgi Alın
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Bu ilanın tüm detaylarına ve güncel durumuna sahibinden.com
              mağazamızdan da ulaşabilirsiniz.
            </p>
            <a
              href={whatsappLink(`Merhaba, "${listing.title}" ilanı hakkında bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1FBE5A]"
            >
              <FaWhatsapp size={18} />
              WhatsApp ile Yazın
            </a>
            <a
              href={SAHIBINDEN_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex w-full items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:border-neutral-950"
            >
              Sahibinden&apos;de Görüntüle
            </a>
          </div>
        </aside>
      </section>

      {otherListings.length > 0 && (
        <section className="bg-neutral-50 py-16 lg:py-20">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-neutral-950">
              Diğer İlanlarımız
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherListings.map((l) => (
                <ListingCard key={l.id} listing={l} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
