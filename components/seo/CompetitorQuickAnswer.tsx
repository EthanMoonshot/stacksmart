interface CompetitorQuickAnswerProps {
  competitor: string;
  shortAnswer: string;
  bestFit: string;
  chooseWhen: string[];
}

export default function CompetitorQuickAnswer({
  competitor,
  shortAnswer,
  bestFit,
  chooseWhen,
}: CompetitorQuickAnswerProps) {
  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-dark-700 bg-dark-900/50 p-6 sm:p-8">
          <p className="text-xs uppercase tracking-[0.18em] text-brand-300">
            Short answer
          </p>
          <p className="mt-3 text-base leading-7 text-dark-200">
            {shortAnswer}
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-white">
                Best fit
              </p>
              <p className="mt-2 text-sm leading-7 text-dark-300">
                {bestFit}
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Choose StackSmart over {competitor} when
              </p>
              <ul className="mt-2 space-y-2">
                {chooseWhen.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm leading-7 text-dark-300"
                  >
                    <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
