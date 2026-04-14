import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getAllSlugs } from "@/lib/blog";

const routes = ["", "/pricing", "/privacy", "/terms", "/blog"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified: now,
    changeFrequency: route === "" ? "weekly" : route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/pricing" ? 0.9 : route === "/blog" ? 0.8 : 0.7,
  }));

  const blogPages: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url: absoluteUrl(`/blog/${slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...blogPages];
}
