import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/site";
import Navbar from "@/components/landing/Navbar";

export const metadata = buildMetadata({
  title: "Blog",
  description:
    "Practical guides on cutting SaaS costs, auditing your software stack, and managing subscriptions for small and medium businesses.",
  path: "/blog",
});

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />

      <main className="mx-auto max-w-5xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        <header className="mb-16 text-center">
          <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            The StackSmart{" "}
            <span className="bg-gradient-to-r from-brand-400 to-teal-400 bg-clip-text text-transparent">
              Blog
            </span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-dark-300">
            Practical guides to help SMBs cut SaaS waste, negotiate better
            renewals, and keep their software stack lean.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group rounded-2xl border border-white/5 bg-dark-900/50 p-6 transition-all hover:border-brand-500/30 hover:bg-dark-900/80 hover:shadow-[0_0_30px_rgba(59,130,246,0.06)]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-0.5 text-xs font-medium text-brand-400">
                  {post.category}
                </span>
                <span className="text-xs text-dark-400">{post.readTime}</span>
              </div>

              <h2 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-brand-400">
                {post.title}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-dark-300">
                {post.description}
              </p>

              <time
                dateTime={post.date}
                className="mt-4 block text-xs text-dark-500"
              >
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
