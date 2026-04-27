import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllSlugs, getPostBySlug } from "@/lib/blog";
import { buildMetadata } from "@/lib/site";
import Navbar from "@/components/landing/Navbar";
import TrackLink from "@/components/analytics/TrackLink";
import { BlogContent } from "./blog-content";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-dark-950">
      <Navbar />

      <article className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-dark-400 transition-colors hover:text-brand-400"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to blog
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-0.5 text-xs font-medium text-brand-400">
              {post.category}
            </span>
            <span className="text-xs text-dark-400">{post.readTime}</span>
            <time dateTime={post.date} className="text-xs text-dark-500">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>

          <h1 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-dark-300">
            {post.description}
          </p>
        </header>

        {/* Markdown content */}
        <BlogContent content={post.content} />

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-brand-500/20 bg-gradient-to-br from-brand-500/5 to-teal-500/5 p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-white">
            Ready to find your hidden SaaS savings?
          </h2>
          <p className="mt-2 text-sm text-dark-300">
            StackSmart automatically discovers every subscription and shows you
            exactly where to cut.
          </p>
          <TrackLink
            href="/demo"
            event="homepage_cta_clicked"
            props={{ target: "demo", location: `blog_${post.slug}_cta_primary` }}
            className="mt-5 inline-block rounded-lg bg-brand-500 px-6 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            View Sample Report
          </TrackLink>
        </div>
      </article>
    </div>
  );
}
