import type { Metadata } from "next";
import Link from "next/link";
import BuildingArt from "@/components/BuildingArt";
import ProjectCard from "@/components/ProjectCard";
import { fetchProjects } from "@/lib/api";

export const revalidate = 60;

const PAGE_SIZE = 12;

export const metadata: Metadata = {
  title: "Projelerimiz | Mesby Yapı",
  description:
    "Mesby Yapı'nın İstanbul'daki tamamlanan, devam eden ve yakında satışa çıkacak konut projeleri.",
};

export default async function ProjelerPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const requestedPage = Math.max(1, Number(pageParam) || 1);

  const allProjects = await fetchProjects();
  const totalPages = Math.max(1, Math.ceil(allProjects.length / PAGE_SIZE));
  const currentPage = Math.min(requestedPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageProjects = allProjects.slice(start, start + PAGE_SIZE);

  return (
    <>
      <section className="relative flex h-72 items-center overflow-hidden bg-neutral-950 pt-16">
        <BuildingArt
          art={4}
          className="absolute inset-0 h-full w-full opacity-70"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Mesby Yapı
          </span>
          <h1 className="mt-3 text-4xl font-bold text-white sm:text-5xl">
            Projelerimiz
          </h1>
          <p className="mt-3 max-w-xl text-white/80">
            İstanbul&apos;un farklı bölgelerinde hayata geçirdiğimiz ve
            geliştirmeye devam ettiğimiz konut projeleri.
          </p>
        </div>
      </section>

      <section className="container-page py-16 lg:py-20">
        {pageProjects.length === 0 ? (
          <p className="text-center text-neutral-500">
            Şu anda listelenecek bir proje bulunmuyor.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {pageProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav
            aria-label="Sayfalama"
            className="mt-12 flex items-center justify-center gap-2"
          >
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={p === 1 ? "/projeler" : `/projeler?page=${p}`}
                className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  p === currentPage
                    ? "bg-neutral-950 text-white"
                    : "border border-neutral-200 text-neutral-600 hover:border-neutral-950"
                }`}
              >
                {p}
              </Link>
            ))}
          </nav>
        )}
      </section>
    </>
  );
}
