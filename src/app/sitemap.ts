import type { MetadataRoute } from "next";
import { projects } from "@/content/projects";
import { site } from "@/content/site";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: site.url, lastModified: now, priority: 1 },
    { url: `${site.url}/insights`, lastModified: now, priority: 0.6 },
    ...projects.map((p) => ({ url: `${site.url}/projects/${p.slug}`, lastModified: now, priority: 0.8 })),
    ...getAllPosts().map((p) => ({ url: `${site.url}/insights/${p.slug}`, lastModified: new Date(p.date), priority: 0.5 })),
  ];
}
