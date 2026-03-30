interface AppHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export default function AppHeader({ title, subtitle, action }: AppHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">{title}</h1>
        {subtitle && <p className="mt-1 max-w-2xl text-sm text-dark-400">{subtitle}</p>}
      </div>
      {action && <div className="sm:flex-shrink-0">{action}</div>}
    </div>
  );
}
