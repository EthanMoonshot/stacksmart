export default function PageSkeleton({ title = "Loading..." }: { title?: string }) {
  return (
    <div className="space-y-6">
      <div>
        <div className="h-8 w-56 animate-pulse rounded bg-dark-800" />
        <div className="mt-3 h-4 w-80 animate-pulse rounded bg-dark-900" />
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="card">
            <div className="h-4 w-24 animate-pulse rounded bg-dark-800" />
            <div className="mt-4 h-8 w-32 animate-pulse rounded bg-dark-800" />
            <div className="mt-3 h-4 w-20 animate-pulse rounded bg-dark-900" />
          </div>
        ))}
      </div>
      <div className="card py-16 text-center text-dark-500">{title}</div>
    </div>
  );
}
