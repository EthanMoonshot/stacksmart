interface AppHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function AppHeader({ title, subtitle, action }: AppHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 border-b border-dark-700/80 pb-6 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-dark-400">StackSmart workspace</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h1>
        {subtitle && <p className="mt-2 max-w-2xl text-sm leading-6 text-dark-300">{subtitle}</p>}
      </div>
      {action && <div className="sm:flex-shrink-0">{action}</div>}
    </div>
  );
}
