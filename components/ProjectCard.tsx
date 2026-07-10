import Link from "next/link";
import BuildingArt from "./BuildingArt";
import { Project } from "@/lib/types";

const STATUS_STYLES: Record<Project["status"], string> = {
  "Devam Ediyor": "bg-neutral-950 text-white",
  Tamamlandı: "bg-neutral-200 text-neutral-700",
  Yakında: "bg-white text-neutral-950 border border-neutral-950",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <BuildingArt
          art={project.art}
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${STATUS_STYLES[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <div className="p-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
          {project.location}
        </p>
        <h3 className="mt-2 text-xl font-bold text-neutral-950">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-neutral-500">{project.summary}</p>
        <div className="mt-5 flex items-center justify-between border-t border-neutral-100 pt-4 text-sm text-neutral-500">
          <span>{project.unitCount}</span>
          <span className="font-semibold text-neutral-950 transition-transform group-hover:translate-x-1">
            Detaylar →
          </span>
        </div>
      </div>
    </Link>
  );
}
