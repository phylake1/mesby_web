import type { Metadata } from "next";
import BuildingArt from "@/components/BuildingArt";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projelerimiz | Mesby İnşaat",
  description:
    "Mesby İnşaat'ın İstanbul'daki tamamlanan, devam eden ve yakında satışa çıkacak konut projeleri.",
};

export default function ProjelerPage() {
  return (
    <>
      <section className="relative flex h-72 items-center overflow-hidden bg-neutral-950 pt-16">
        <BuildingArt art={4} className="absolute inset-0 h-full w-full opacity-70" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container-page relative z-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/80">
            Mesby İnşaat
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
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
