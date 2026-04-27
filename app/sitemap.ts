import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { getAllSlugs } from "@/lib/blog";

const routes = [
  "",
  "/pricing",
  "/privacy",
  "/terms",
  "/blog",
  "/saas-spend-audit-tool",
  "/reduce-saas-spend-small-business",
  "/software-subscription-audit-checklist",
  "/cledara-alternative",
  "/spendesk-alternative",
  "/zylo-alternative",
  "/vendr-alternative",
  "/jira-cost-small-team",
  "/best-saas-spend-management-tools",
  "/saas-cost-optimization-software",
  "/saas-subscription-management-software",
  "/how-to-audit-software-subscriptions",
  "/torii-alternative",
  "/zluri-alternative",
  "/productiv-alternative",
  "/spendflo-alternative",
  "/tropic-alternative",
  "/cloudeagle-alternative",
  "/sastrify-alternative",
  "/vertice-alternative",
  "/airbase-alternative",
  "/saas-spend-management",
  "/saas-management-software",
  "/saas-renewal-management",
];

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
