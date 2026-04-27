import { siteConfig, absoluteUrl } from "@/lib/site";

interface CompetitorJsonLdOptions {
  competitor: string;
  path: string;
  title: string;
  description: string;
  faqs: { question: string; answer: string }[];
}

export function buildCompetitorJsonLd({
  competitor,
  path,
  title,
  description,
  faqs,
}: CompetitorJsonLdOptions) {
  const pageUrl = absoluteUrl(path);

  const webPage = {
    "@type": "WebPage",
    "@id": pageUrl,
    url: pageUrl,
    name: title,
    description,
    isPartOf: { "@id": absoluteUrl("/") },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: absoluteUrl("/"),
    },
  };

  const breadcrumb = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${competitor} Alternative`,
        item: pageUrl,
      },
    ],
  };

  const faqPage =
    faqs.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  const graph = [webPage, breadcrumb, ...(faqPage ? [faqPage] : [])];

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
