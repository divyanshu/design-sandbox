"use client"

import Link from "next/link"
import { LayoutTemplateIcon } from "lucide-react"

type Template = {
  slug: string
  name: string
  description: string
  href: string
  status: "active" | "draft"
  accent: string
}

export const TEMPLATES: Template[] = [
  // Add your page composition templates here:
  // {
  //   slug: "my-template",
  //   name: "My Template",
  //   description: "Short description of what this template demonstrates.",
  //   href: "/templates/my-template",
  //   status: "active",
  //   accent: "#7C3AED",
  // },
]

export function TemplatesSection() {
  return (
    <div id="templates" className="py-14 border-t border-[var(--border)]">

      {/* Section header */}
      <div className="mb-8">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-2">
          Templates
        </p>
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Page compositions</h2>
        <p className="text-sm text-[var(--muted-foreground)] mt-1.5 max-w-sm">
          Full pages assembled from your design system components. Shared across all designers.
        </p>
      </div>

      <div className="flex flex-col gap-3">

        {/* Active templates */}
        {TEMPLATES.map((template) => (
          <Link
            key={template.slug}
            href={template.href}
            className="group relative flex items-center gap-6 rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-5 hover:shadow-sm transition-all duration-200 overflow-hidden"
          >
            {/* Top accent bar */}
            <div
              className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: `linear-gradient(to right, ${template.accent}, ${template.accent}99)` }}
            />

            {/* Icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${template.accent}18` }}
            >
              <LayoutTemplateIcon className="w-5 h-5" style={{ color: template.accent }} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 mb-1">
                <p className="font-semibold text-[var(--foreground)]">{template.name}</p>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 leading-none">
                  Active
                </span>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-lg">
                {template.description}
              </p>
            </div>

            {/* Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16" height="16" viewBox="0 0 24 24"
              fill="none" stroke="currentColor" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              className="text-[var(--muted-foreground)] group-hover:translate-x-0.5 shrink-0 transition-all duration-200"
            >
              <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        ))}

        {/* Coming soon / empty */}
        <div className="flex items-center gap-6 rounded-xl border border-dashed border-[var(--border)] px-6 py-5 opacity-40 select-none cursor-default">
          <div className="w-11 h-11 rounded-xl bg-[var(--muted)] flex items-center justify-center shrink-0">
            <LayoutTemplateIcon className="w-5 h-5 text-[var(--muted-foreground)]" />
          </div>
          <div>
            <p className="font-semibold text-[var(--foreground)]">
              {TEMPLATES.length === 0 ? "No templates yet" : "More templates coming"}
            </p>
            <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
              {TEMPLATES.length === 0
                ? "Add page composition templates to the TEMPLATES array in templates-section.tsx."
                : "Additional page compositions will appear here."}
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
