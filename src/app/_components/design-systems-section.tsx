"use client"

import Link from "next/link"
import { LayersIcon } from "lucide-react"

type DesignSystem = {
  slug: string
  name: string
  description: string
  componentCount?: number
  fidelity?: string
  status: "active" | "coming-soon"
  href?: string
  accent: string
}

const SYSTEMS: DesignSystem[] = [
  {
    slug: "base",
    name: "Base System",
    description: "shadcn/ui components with a soft violet token set — pastel violet surfaces, airy neutrals, generous spacing. A starting point for any design direction.",
    componentCount: 6,
    fidelity: "Foundation",
    status: "active",
    href: "/design-systems/base",
    accent: "#7C3AED",
  },
  // Add your replicated design system here once you've built it:
  // {
  //   slug: "your-ds",
  //   name: "Your Design System",
  //   description: "Components replicated from your Figma library.",
  //   componentCount: 0,
  //   status: "active",
  //   href: "/design-systems/your-ds",
  //   accent: "#your-brand-color",
  // },
]

export function DesignSystemsSection() {
  return (
    <div id="design-systems" className="py-14">

      {/* Section header */}
      <div className="mb-8">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-2">
          Design Systems
        </p>
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Component libraries</h2>
        <p className="text-sm text-[var(--muted-foreground)] mt-1.5 max-w-sm">
          Themed component sets for prototyping. Add your own replicated system alongside the base.
        </p>
      </div>

      <div className="flex flex-col gap-3">

        {SYSTEMS.map((system) => (
          <Link
            key={system.slug}
            href={system.href!}
            className="group relative flex items-center gap-6 rounded-xl border border-[var(--border)] bg-[var(--card)] px-6 py-5 hover:shadow-sm transition-all duration-200 overflow-hidden"
          >
            {/* Top accent bar */}
            <div
              className="absolute inset-x-0 top-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              style={{ background: `linear-gradient(to right, ${system.accent}, ${system.accent}99)` }}
            />

            {/* Icon */}
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${system.accent}18` }}
            >
              <LayersIcon className="w-5 h-5" style={{ color: system.accent }} />
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2.5 mb-1">
                <p className="font-semibold text-[var(--foreground)]">{system.name}</p>
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 leading-none">
                  Active
                </span>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed max-w-lg">
                {system.description}
              </p>
            </div>

            {/* Meta + arrow */}
            <div className="flex items-center gap-6 shrink-0">
              {system.componentCount !== undefined && (
                <div className="text-right hidden sm:block">
                  <p className="text-lg font-bold text-[var(--foreground)] tabular-nums leading-none">{system.componentCount}</p>
                  <p className="text-[11px] text-[var(--muted-foreground)] mt-1">components</p>
                </div>
              )}
              {system.fidelity && (
                <div className="text-right hidden md:block">
                  <p className="text-lg font-bold text-[var(--foreground)] leading-none">{system.fidelity}</p>
                  <p className="text-[11px] text-[var(--muted-foreground)] mt-1">fidelity</p>
                </div>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16" height="16" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round"
                className="text-[var(--muted-foreground)] group-hover:translate-x-0.5 transition-all duration-200"
              >
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}

        {/* Coming soon */}
        <div className="flex items-center gap-6 rounded-xl border border-dashed border-[var(--border)] px-6 py-5 opacity-40 select-none cursor-default">
          <div className="w-11 h-11 rounded-xl bg-[var(--muted)] flex items-center justify-center shrink-0">
            <LayersIcon className="w-5 h-5 text-[var(--muted-foreground)]" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-[var(--foreground)]">Add your design system</p>
            <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
              Replicate your Figma components into src/components/[your-ds]/ and register them here.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
