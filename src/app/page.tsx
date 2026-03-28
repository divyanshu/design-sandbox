"use client"

import { LayoutGridIcon } from "lucide-react"
import { ThemeToggle } from "./_components/theme-toggle"
import { DesignersSection } from "./_components/designers-section"
import { DesignSystemsSection } from "./_components/design-systems-section"
import { TemplatesSection } from "./_components/templates-section"
import { DESIGNERS } from "@/app/prototypes/registry"
import { TEMPLATES } from "./_components/templates-section"

export default function HomePage() {
  const designerCount = DESIGNERS.length
  const templateCount = TEMPLATES.length

  return (
    <div className="min-h-screen bg-[var(--background)]">

      {/* ── Sticky header ─────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--background)]">
        <div className="max-w-6xl mx-auto px-10 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <LayoutGridIcon className="w-5 h-5 text-[var(--foreground)] shrink-0" />
            <span className="text-sm font-bold text-[var(--foreground)] tracking-tight">Design Sandbox</span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="border-b border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-10 py-20">
          <h1 className="text-6xl font-bold text-[var(--foreground)] leading-[1.08] tracking-tight">
            Design<br />
            <span className="text-[var(--muted-foreground)]">Sandbox.</span>
          </h1>
          <p className="mt-7 text-base text-[var(--muted-foreground)] leading-relaxed max-w-md">
            A shared prototyping environment. Describe what you want to build — Claude builds it using your design system components.
          </p>

          {/* Stats row */}
          <div className="flex items-center gap-8 mt-12">
            <div>
              <p className="text-3xl font-bold text-[var(--foreground)] tabular-nums leading-none">{designerCount}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-1.5 tracking-wide">
                {designerCount === 1 ? "designer" : "designers"}
              </p>
            </div>
            <div className="w-px h-8 bg-[var(--border)]" />
            <div>
              <p className="text-3xl font-bold text-[var(--foreground)] tabular-nums leading-none">{templateCount}</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-1.5 tracking-wide">
                {templateCount === 1 ? "template" : "templates"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content sections ──────────────────────────────────────────────── */}
      <div className="max-w-6xl mx-auto px-10 pb-24">
        <DesignersSection />
        <DesignSystemsSection />
        <TemplatesSection />
      </div>

    </div>
  )
}
