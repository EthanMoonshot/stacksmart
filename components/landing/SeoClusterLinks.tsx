import Link from "next/link";

type ClusterLink = {
  href: string;
  title: string;
  description: string;
};

export default function SeoClusterLinks({
  eyebrow = "Related guides",
  title = "Keep exploring this topic",
  description = "If this page is useful, these related pages will help you compare options, pressure-test the fit, and move toward a decision.",
  links,
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  links: ClusterLink[];
}) {
  return (
    <section className="border-t border-dark-800/80 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">{eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">{title}</h2>
          <p className="mt-3 text-sm leading-7 text-dark-300">{description}</p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-2xl border border-dark-700 bg-dark-900/70 p-5 transition hover:border-brand-500/40 hover:bg-dark-900"
            >
              <h3 className="text-base font-semibold text-white group-hover:text-brand-300">{link.title}</h3>
              <p className="mt-2 text-sm leading-7 text-dark-300">{link.description}</p>
              <span className="mt-4 inline-flex text-sm font-medium text-brand-300">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
