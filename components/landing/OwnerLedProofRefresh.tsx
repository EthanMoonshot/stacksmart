import TrackLink from "@/components/analytics/TrackLink";

type ProofItem = {
  label: string;
  finding: string;
  action: string;
};

type OwnerLedProofRefreshProps = {
  eyebrow?: string;
  title: string;
  summary: string;
  proofItems: ProofItem[];
  boundaries: string[];
  primaryHref?: string;
  secondaryHref?: string;
  location: string;
};

export default function OwnerLedProofRefresh({
  eyebrow = "2026 owner-led SMB proof refresh",
  title,
  summary,
  proofItems,
  boundaries,
  primaryHref = "/demo",
  secondaryHref = "/software-subscription-audit-checklist",
  location,
}: OwnerLedProofRefreshProps) {
  return (
    <section className="border-y border-dark-800/80 bg-dark-900/50 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-300">{eyebrow}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">{title}</h2>
          <p className="mt-4 text-sm leading-7 text-dark-300">{summary}</p>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {proofItems.map((item) => (
            <div key={item.label} className="rounded-2xl border border-dark-700 bg-dark-950/70 p-5 shadow-sm shadow-black/20">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-dark-400">{item.label}</p>
              <p className="mt-3 text-sm leading-6 text-dark-200">{item.finding}</p>
              <p className="mt-4 inline-flex rounded-full border border-brand-400/30 bg-brand-400/10 px-3 py-1 text-xs font-semibold text-brand-200">
                Action: {item.action}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-brand-400/20 bg-dark-950/80 p-6">
          <h3 className="text-base font-semibold text-white">What StackSmart needs — and what it avoids</h3>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-dark-300 sm:grid-cols-2">
            {boundaries.map((boundary) => (
              <li key={boundary} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                <span>{boundary}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <TrackLink
              href={primaryHref}
              event="homepage_cta_clicked"
              props={{ target: primaryHref.replace("/", "") || "home", location: `${location}_proof_refresh_primary` }}
              className="btn-primary text-sm"
            >
              See the sample action report
            </TrackLink>
            <TrackLink
              href={secondaryHref}
              event="homepage_cta_clicked"
              props={{ target: secondaryHref.replace("/", "") || "home", location: `${location}_proof_refresh_secondary` }}
              className="btn-secondary text-sm"
            >
              Use the audit checklist
            </TrackLink>
          </div>
        </div>
      </div>
    </section>
  );
}
