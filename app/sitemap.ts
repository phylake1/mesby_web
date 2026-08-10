import type { MetadataRoute } from "next";
import { fetchProjects } from "@/lib/api";
import { SITE_URL } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/projeler`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/ilanlar`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/hakkimizda`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/iletisim`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const projects = await fetchProjects();
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${SITE_URL}/projeler/${project.slug}`,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes];
}
