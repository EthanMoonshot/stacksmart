"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function BlogContent({ content }: { content: string }) {
  return (
    <div className="prose-blog">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }) => (
            <h1 className="mb-6 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-4 mt-12 font-display text-2xl font-semibold text-white">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-3 mt-8 font-display text-xl font-semibold text-white">
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-5 text-base leading-relaxed text-dark-200">
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="mb-5 space-y-2 pl-5 text-dark-200">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-5 list-decimal space-y-2 pl-5 text-dark-200">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-base leading-relaxed text-dark-200 marker:text-brand-500">
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="text-dark-100">{children}</em>
          ),
          blockquote: ({ children }) => (
            <blockquote className="my-6 border-l-2 border-brand-500/40 pl-5 text-dark-300">
              {children}
            </blockquote>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-brand-400 underline decoration-brand-500/30 underline-offset-2 transition-colors hover:text-brand-300"
              target={href?.startsWith("http") ? "_blank" : undefined}
              rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {children}
            </a>
          ),
          hr: () => <hr className="my-10 border-white/5" />,
          code: ({ children }) => (
            <code className="rounded bg-dark-800 px-1.5 py-0.5 font-mono text-sm text-brand-300">
              {children}
            </code>
          ),
          table: ({ children }) => (
            <div className="mb-5 overflow-x-auto">
              <table className="w-full text-sm text-dark-200">{children}</table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border-b border-white/10 px-3 py-2 text-left font-semibold text-white">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-white/5 px-3 py-2">{children}</td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
