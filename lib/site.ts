import type { Metadata } from "next";

export const siteConfig = {
  name: "Distill",
  shortName: "Distill",
  title: "Distill — AI-powered SaaS spend optimisation for growing teams",
  description:
    "Distill finds wasted SaaS spend, overlap, and renewal risk so SMBs can cut costs, consolidate tools, and renegotiate from a position of clarity.",
  url: process.env.NEXT_PUBLIC_APP_URL || "https://stacksmart.io",
  domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "stacksmart.io",
  ogImage: "/opengraph-image",
  contactEmail: "hello@stacksmart.io",
  twitterHandle: "@stacksmart",
};

export function absoluteUrl(path = "") {
  return new URL(path, siteConfig.url).toString();
}

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
} = {}): Metadata {
  const resolvedTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.title;
  const resolvedDescription = description || siteConfig.description;
  const url = absoluteUrl(path);

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    metadataBase: new URL(siteConfig.url),
    alternates: { canonical: path || "/" },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
      images: [{ url: absoluteUrl(siteConfig.ogImage), width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
      images: [absoluteUrl(siteConfig.ogImage)],
      creator: siteConfig.twitterHandle,
    },
  };
}
