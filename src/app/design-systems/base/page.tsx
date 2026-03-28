"use client"

import Link from "next/link"
import { ArrowLeftIcon, BellIcon } from "lucide-react"
import { ThemeToggle } from "@/app/_components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// ─── Data ──────────────────────────────────────────────────────────────────────

const COLOUR_SWATCHES = [
  { name: "Primary",     role: "Amber 700 · 400",    cssVar: "--primary" },
  { name: "Background",  role: "Base surface",        cssVar: "--background" },
  { name: "Card",        role: "Elevated surface",    cssVar: "--card" },
  { name: "Secondary",   role: "Control bg",          cssVar: "--secondary" },
  { name: "Muted",       role: "Subtle fill",         cssVar: "--muted" },
  { name: "Accent",      role: "Warm tint",           cssVar: "--accent" },
  { name: "Destructive", role: "Error / danger",      cssVar: "--destructive" },
  { name: "Border",      role: "Dividers & outlines", cssVar: "--border" },
]

const TYPE_SCALE = [
  { tag: "Display", className: "text-5xl font-bold tracking-tight leading-tight",        sample: "The quick brown fox" },
  { tag: "H1",      className: "text-3xl font-bold tracking-tight",                      sample: "Heading one" },
  { tag: "H2",      className: "text-2xl font-semibold",                                 sample: "Heading two" },
  { tag: "H3",      className: "text-xl font-semibold",                                  sample: "Heading three" },
  { tag: "H4",      className: "text-base font-semibold",                                sample: "Heading four" },
  { tag: "Body",    className: "text-base leading-relaxed",                              sample: "Body text — comfortable reading for long-form content and UI descriptions." },
  { tag: "Small",   className: "text-sm text-[var(--muted-foreground)]",                 sample: "Small — captions, helper copy, timestamps, metadata." },
  { tag: "Mono",    className: "text-sm font-mono text-[var(--muted-foreground)]",       sample: "const theme = 'warm-editorial'" },
]

const NOTIFICATIONS = [
  { initials: "AB", name: "Alice Burke",  action: "commented on", target: "Design tokens v2",       time: "2m ago",    badge: "New",   badgeVariant: "default"     as const },
  { initials: "JM", name: "James Moore",  action: "approved",     target: "PR #448",                time: "1h ago",    badge: "Done",  badgeVariant: "secondary"   as const },
  { initials: "SR", name: "Sara Reyes",   action: "flagged",      target: "Accessibility issue",    time: "3h ago",    badge: "Alert", badgeVariant: "destructive" as const },
  { initials: "TK", name: "Tom Kim",      action: "published",    target: "Sprint retrospective",   time: "Yesterday", badge: null,    badgeVariant: "outline"     as const },
]

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function BaseDesignSystemPage() {
  return (
    <div className="ds-base min-h-screen bg-[var(--background)] text-[var(--foreground)]">

      {/* ── Breadcrumb bar ──────────────────────────────────────────────────── */}
      <div className="sticky top-0 z-10 flex items-center gap-1.5 px-4 py-2 bg-[var(--secondary)] border-b border-[var(--border)] text-xs text-[var(--muted-foreground)]">
        <Link href="/" className="hover:text-[var(--foreground)] transition-colors inline-flex items-center gap-1">
          <ArrowLeftIcon className="w-3 h-3" />
          Sandbox
        </Link>
        <span>/</span>
        <span>Design Systems</span>
        <span>/</span>
        <span className="text-[var(--foreground)] font-medium">Base</span>
        <div className="ml-auto">
          <ThemeToggle />
        </div>
      </div>

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative bg-[var(--foreground)] overflow-hidden">
        {/* Decorative violet glows */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-violet-500/[0.10] blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-72 h-72 rounded-full bg-purple-600/[0.07] blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-8 pt-16 pb-14">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-violet-300 mb-6">
            Base Design System · v1.0
          </p>
          <h1 className="text-[clamp(2.75rem,6vw,4.5rem)] font-bold tracking-tight text-[var(--background)] leading-[1.05] mb-6">
            Soft<br />Violet
          </h1>
          <p className="text-base text-[var(--background)]/50 max-w-md leading-relaxed mb-10">
            A clean, expressive foundation built on shadcn/ui — pastel violet
            tones, airy surfaces, and generous space. A modern break from
            brand-specific design systems.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Violet-tinted surfaces", "Violet-600 primary", "0.5rem radius", "Light + dark", "shadcn/ui"].map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1.5 rounded-full border border-[var(--background)]/15 text-[var(--background)]/45 select-none"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Violet gradient separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />
      </section>

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <div className="max-w-4xl mx-auto px-8 py-16 space-y-20">

        {/* ── Colour ── */}
        <section>
          <SectionLabel>Colour</SectionLabel>
          <h2 className="text-2xl font-bold mb-1.5">Semantic palette</h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-8">
            Every colour decision expressed as a CSS custom property. Swap
            these ~8 values and the entire system rethemes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-7">
            {COLOUR_SWATCHES.map((s) => (
              <div key={s.name}>
                <div
                  className="h-20 rounded-xl mb-3 ring-1 ring-[var(--border)]"
                  style={{ background: `var(${s.cssVar})` }}
                />
                <p className="text-sm font-semibold">{s.name}</p>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{s.role}</p>
                <p className="text-[11px] font-mono text-[var(--muted-foreground)] mt-0.5 opacity-60">{s.cssVar}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Typography ── */}
        <section>
          <SectionLabel>Typography</SectionLabel>
          <h2 className="text-2xl font-bold mb-1.5">Type scale</h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-8">
            System UI stack — no custom fonts required.
          </p>
          <div className="divide-y divide-[var(--border)]">
            {TYPE_SCALE.map((t) => (
              <div key={t.tag} className="grid grid-cols-[4.5rem_1fr] gap-6 py-5 items-baseline">
                <span className="text-[11px] font-mono text-[var(--muted-foreground)] self-start pt-0.5">
                  {t.tag}
                </span>
                <span className={t.className}>{t.sample}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Actions ── */}
        <section>
          <SectionLabel>Components</SectionLabel>
          <h2 className="text-2xl font-bold mb-1.5">Actions</h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-8">Button variants and sizes.</p>
          <div className="space-y-8">
            <div>
              <MonoLabel>Variants</MonoLabel>
              <div className="flex flex-wrap gap-3 items-center mt-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <div>
              <MonoLabel>Sizes</MonoLabel>
              <div className="flex flex-wrap gap-3 items-center mt-3">
                <Button size="lg">Large</Button>
                <Button size="default">Default</Button>
                <Button size="sm">Small</Button>
                <Button size="xs">Extra small</Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Badges ── */}
        <section>
          <h2 className="text-2xl font-bold mb-1.5">Badges</h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-6">Status and categorical labels.</p>
          <div className="flex flex-wrap gap-3 items-center">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </section>

        {/* ── Cards ── */}
        <section>
          <h2 className="text-2xl font-bold mb-1.5">Cards</h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-6">
            Surface containers with consistent structure.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Info card */}
            <Card>
              <CardHeader>
                <CardTitle>Project Alpha</CardTitle>
                <CardDescription>Last deployed 3 hours ago</CardDescription>
                <CardAction>
                  <Badge variant="secondary">Stable</Badge>
                </CardAction>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                  A clean surface for grouping related content with consistent spacing,
                  typography, and border treatment.
                </p>
              </CardContent>
              <CardFooter className="gap-2">
                <Button size="sm">Open project</Button>
                <Button size="sm" variant="ghost">Dismiss</Button>
              </CardFooter>
            </Card>

            {/* Form card */}
            <Card>
              <CardHeader>
                <CardTitle>Notification preferences</CardTitle>
                <CardDescription>Choose how you'd like to be notified</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Email address</label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full h-8 rounded-lg border border-[var(--input)] bg-transparent px-3 text-sm placeholder:text-[var(--muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--ring)] transition-shadow"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium">Frequency</label>
                  <select className="w-full h-8 rounded-lg border border-[var(--input)] bg-[var(--background)] px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--ring)]">
                    <option>Immediately</option>
                    <option>Daily digest</option>
                    <option>Weekly summary</option>
                  </select>
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button className="flex-1">Save preferences</Button>
                <Button variant="outline">Cancel</Button>
              </CardFooter>
            </Card>

          </div>
        </section>

        {/* ── Composition ── */}
        <section>
          <SectionLabel>Composition</SectionLabel>
          <h2 className="text-2xl font-bold mb-1.5">System in context</h2>
          <p className="text-sm text-[var(--muted-foreground)] mb-6">
            Components working together in a realistic UI pattern.
          </p>

          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center gap-2">
                <BellIcon className="w-4 h-4 text-[var(--muted-foreground)]" />
                Notifications
              </CardTitle>
              <CardDescription>4 unread this week</CardDescription>
              <CardAction>
                <Button variant="ghost" size="sm">Mark all read</Button>
              </CardAction>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-[var(--border)]">
                {NOTIFICATIONS.map((n, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3.5 px-4 py-4 hover:bg-[var(--accent)] transition-colors cursor-default"
                  >
                    {/* Avatar */}
                    <div className="w-8 h-8 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center text-xs font-semibold shrink-0 mt-0.5">
                      {n.initials}
                    </div>
                    {/* Text */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{n.name}</span>
                        <span className="text-[var(--muted-foreground)]"> {n.action} </span>
                        <span className="font-medium">{n.target}</span>
                      </p>
                      <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{n.time}</p>
                    </div>
                    {/* Badge */}
                    {n.badge && (
                      <Badge variant={n.badgeVariant} className="shrink-0 mt-0.5">
                        {n.badge}
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <p className="text-xs text-[var(--muted-foreground)]">Showing 4 of 12</p>
              <Button variant="outline" size="sm">View all</Button>
            </CardFooter>
          </Card>
        </section>

        {/* ── Theming note ── */}
        <section className="pb-8">
          <div className="rounded-2xl bg-[var(--accent)] border border-[var(--border)] px-8 py-7 flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-violet-400/20 flex items-center justify-center shrink-0 mt-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-violet-500" />
            </div>
            <div>
              <p className="font-semibold mb-1">More themes coming</p>
              <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                Soft Violet is the first aesthetic. Future variations — warm editorial, cool minimal —
                will swap the{" "}
                <code className="text-xs font-mono bg-[var(--muted)] px-1.5 py-0.5 rounded">
                  .ds-base
                </code>{" "}
                token values while keeping the same component API intact.
              </p>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}

// ─── Helpers ───────────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-2">
      {children}
    </p>
  )
}

function MonoLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-mono text-[var(--muted-foreground)]">{children}</p>
  )
}
