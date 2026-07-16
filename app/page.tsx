import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import HeroSlider from "@/components/HeroSlider";
import SectionHeader from "@/components/SectionHeader";
import StatsStrip from "@/components/StatsStrip";
import ProjectCard from "@/components/ProjectCard";
import ListingCard from "@/components/ListingCard";
import BuildingArt from "@/components/BuildingArt";
import { projects } from "@/lib/projects";
import { listings } from "@/lib/listings";
import { whatsappLink } from "@/lib/site";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);
  const featuredListings = listings.slice(0, 3);

  return (
    <>
      <HeroSlider />

      <StatsStrip />

      <section className="container-page py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-[420px]">
            <BuildingArt art={2} className="h-full w-full" />
          </div>
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
              Hakkımızda
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold text-neutral-950 sm:text-4xl">
              Sağlam Mühendislik, Zamansız Mimari
            </h2>
            <p className="mt-5 text-neutral-500">
              Mesby İnşaat olarak İstanbul&apos;un farklı bölgelerinde,
              yaşam kalitesini önceleyen konut projeleri geliştiriyoruz.
              Her projede güvenlik, kalite ve estetiği bir araya getirerek
              müşterilerimize uzun ömürlü değer sunmayı hedefliyoruz.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-neutral-600">
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                Deprem yönetmeliğine uygun, mühendislik odaklı yapılar
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                Anahtar teslim proje yönetimi
              </li>
              <li className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-neutral-950" />
                Şeffaf satış ve sonrası destek süreci
              </li>
            </ul>
            <Link
              href="/hakkimizda"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-neutral-50 py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              kicker="İnşaat Projelerimiz"
              title="Devam Eden ve Tamamlanan Projeler"
              description="Farklı bölgelerde hayata geçirdiğimiz ve geliştirmeye devam ettiğimiz konut projelerimizden bir seçki."
            />
            <Link
              href="/projeler"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-neutral-950 hover:underline"
            >
              Tüm Projeler →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-page">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              kicker="Satılık Daireler"
              title="Güncel Sahibinden İlanlarımız"
              description="Sahibinden.com üzerinde yayınladığımız satılık daire ilanlarımızın bir kısmını burada da bulabilirsiniz."
            />
            <Link
              href="/ilanlar"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-neutral-950 hover:underline"
            >
              Tüm İlanlar →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredListings.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-20 text-white lg:py-24">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-balance text-3xl font-bold sm:text-4xl">
            Projelerimiz veya satılık dairelerimiz hakkında konuşalım
          </h2>
          <p className="max-w-xl text-neutral-400">
            Sorularınız için bize WhatsApp üzerinden ulaşabilir veya iletişim
            bilgilerimizden bize yazabilirsiniz.
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappLink("Merhaba, Mesby İnşaat projeleri hakkında bilgi almak istiyorum.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1FBE5A]"
            >
              <FaWhatsapp size={18} />
              WhatsApp ile Yazın
            </a>
            <Link
              href="/iletisim"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              İletişim Bilgileri
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
