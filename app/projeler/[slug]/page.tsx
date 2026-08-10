import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Gallery from "@/components/Gallery";
import ProjectCard from "@/components/ProjectCard";
import { FaWhatsapp } from "react-icons/fa";
import { fetchProjectById, fetchProjects } from "@/lib/api";
import { canonicalUrl, whatsappLink } from "@/lib/site";
import { SITE_OG_IMAGE } from "@/lib/media";
import { Project } from "@/lib/types";

export const revalidate = 60;

function projectOgImage(project: Project) {
  const first = project.images[0];
  return first && /^https?:\/\//.test(first) ? first : SITE_OG_IMAGE;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await fetchProjectById(slug);
  if (!project) return {};
  const path = `/projeler/${project.slug}`;
  return {
    title: `${project.title} - ${project.location}`,
    description: project.summary,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${project.title} - ${project.location}`,
      description: project.summary,
      url: path,
      images: [{ url: projectOgImage(project), width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      images: [projectOgImage(project)],
    },
  };
}

function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: project.title,
    description: project.description,
    url: canonicalUrl(`/projeler/${project.slug}`),
    image: project.images.filter((img) => /^https?:\/\//.test(img)),
    address: {
      "@type": "PostalAddress",
      addressLocality: project.location,
      addressCountry: "TR",
    },
    numberOfAccommodationUnits: project.unitCount,
    amenityFeature: project.features.map((feature) => ({
      "@type": "LocationFeatureSpecification",
      name: feature,
    })),
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await fetchProjectById(slug);
  if (!project) notFound();

  const allProjects = await fetchProjects();
  const otherProjects = allProjects.filter((p) => p.slug !== slug).slice(0, 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd(project)) }}
      />

      <section className="border-b border-neutral-100 bg-neutral-50 pt-24 pb-8">
        <div className="container-page">
          <Link
            href="/projeler"
            className="text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-neutral-950"
          >
            ← Tüm Projeler
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-neutral-950 sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-2 text-neutral-500">{project.location}</p>
        </div>
      </section>

      <section className="container-page grid gap-12 py-10 lg:grid-cols-3 lg:pb-20">
        <div className="min-w-0 lg:col-span-2">
          <Gallery images={project.images} alt={project.title} />

          <div className="mt-10 flex flex-wrap gap-6 border-b border-neutral-200 pb-8 text-sm">
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
              href={whatsappLink(
                `Merhaba, ${project.title} hakkında bilgi almak istiyorum.`,
              )}
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
