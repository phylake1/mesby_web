import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BuildingArt from "@/components/BuildingArt";
import ProjectCard from "@/components/ProjectCard";
import { FaWhatsapp } from "react-icons/fa";
import { getProjectBySlug, projects } from "@/lib/projects";
import { whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Mesby İnşaat`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="relative flex h-80 items-end overflow-hidden bg-neutral-950 pt-16">
        <BuildingArt art={project.art} className="absolute inset-0 h-full w-full opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="container-page relative z-10 pb-10">
          <Link
            href="/projeler"
            className="text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-white"
          >
            ← Tüm Projeler
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-white/80">{project.location}</p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-16 lg:grid-cols-3 lg:py-20">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-6 border-b border-neutral-200 pb-8 text-sm">
            <div>
              <p className="text-neutral-400">Durum</p>
              <p className="mt-1 font-semibold text-neutral-950">
                {project.status}
              </p>
            </div>
            <div>
              <p className="text-neutral-400">Teslim Yılı</p>
              <p className="mt-1 font-semibold text-neutral-950">
                {project.year}
              </p>
            </div>
            <div>
              <p className="text-neutral-400">Daire Sayısı</p>
              <p className="mt-1 font-semibold text-neutral-950">
                {project.unitCount}
              </p>
            </div>
          </div>

          <h2 className="mt-8 text-xl font-bold text-neutral-950">
            Proje Hakkında
          </h2>
          <p className="mt-4 leading-relaxed text-neutral-600">
            {project.description}
          </p>

          <h2 className="mt-10 text-xl font-bold text-neutral-950">
            Proje Özellikleri
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-neutral-600"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-950" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <aside className="lg:col-span-1">
          <div className="rounded-2xl border border-neutral-200 p-6">
            <h3 className="text-lg font-bold text-neutral-950">
              Bu Proje İçin Bilgi Alın
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Satış ofisimizle iletişime geçin, size en uygun daire
              seçeneklerini sunalım.
            </p>
            <a
              href={whatsappLink(`Merhaba, ${project.title} hakkında bilgi almak istiyorum.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1FBE5A]"
            >
              <FaWhatsapp size={18} />
              WhatsApp ile Yazın
            </a>
            <Link
              href="/iletisim"
              className="mt-3 flex w-full items-center justify-center rounded-full border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:border-neutral-950"
            >
              İletişim Bilgileri
            </Link>
          </div>
        </aside>
      </section>

      {otherProjects.length > 0 && (
        <section className="bg-neutral-50 py-16 lg:py-20">
          <div className="container-page">
            <h2 className="text-2xl font-bold text-neutral-950">
              Diğer Projelerimiz
            </h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
