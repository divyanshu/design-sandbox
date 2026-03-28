"use client"

import Link from "next/link"
import { ArrowLeftIcon, ClockIcon, CheckCircleIcon, FileIcon } from "lucide-react"
import { DESIGNERS, type PrototypeStatus } from "@/app/prototypes/registry"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const STATUS_CONFIG: Record<PrototypeStatus, { label: string; variant: "default" | "secondary" | "outline" | "destructive"; icon: React.ReactNode }> = {
  draft: {
    label: "Draft",
    variant: "outline",
    icon: <FileIcon className="w-3 h-3" />,
  },
  "in-progress": {
    label: "In progress",
    variant: "secondary",
    icon: <ClockIcon className="w-3 h-3" />,
  },
  complete: {
    label: "Complete",
    variant: "default",
    icon: <CheckCircleIcon className="w-3 h-3" />,
  },
}

interface DesignerLandingPageProps {
  slug: string
}

export function DesignerLandingPage({ slug }: DesignerLandingPageProps) {
  const designer = DESIGNERS.find((d) => d.slug === slug)

  if (!designer) {
    return (
      <div className="min-h-screen bg-[var(--background)] flex items-center justify-center">
        <p className="text-sm text-[var(--muted-foreground)]">
          Designer &ldquo;{slug}&rdquo; not found in the registry.{" "}
          <Link href="/" className="underline hover:text-[var(--foreground)]">
            Back to sandbox
          </Link>
        </p>
      </div>
    )
  }

  const { name, team, prototypes } = designer

  return (
    <div className="min-h-screen bg-[var(--background)]">

      {/* ── Page header ─────────────────────────────────────────────────────── */}
      <div className="border-b border-[var(--border)] px-10 py-6">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] hover:text-[var(--foreground)] mb-5 transition-colors"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5" />
          Back to sandbox
        </Link>

        <div className="flex items-center gap-4">
          {/* Initial avatar */}
          <div className="w-10 h-10 rounded-full bg-[var(--primary)] text-[var(--primary-foreground)] flex items-center justify-center text-sm font-semibold shrink-0">
            {name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">{name}</h1>
            {team && (
              <p className="text-sm text-[var(--muted-foreground)] mt-0.5">{team}</p>
            )}
          </div>
          <div className="ml-auto">
            <span className="text-xs text-[var(--muted-foreground)]">
              {prototypes.length} {prototypes.length === 1 ? "prototype" : "prototypes"}
            </span>
          </div>
        </div>
      </div>

      {/* ── Prototype grid ──────────────────────────────────────────────────── */}
      <div className="px-10 py-8">
        {prototypes.length === 0 ? (

          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-12 h-12 rounded-xl bg-[var(--muted)] flex items-center justify-center mb-4">
              <FileIcon className="w-5 h-5 text-[var(--muted-foreground)]" />
            </div>
            <h2 className="text-base font-semibold text-[var(--foreground)] mb-1">No prototypes yet</h2>
            <p className="text-sm text-[var(--muted-foreground)] max-w-sm leading-relaxed">
              Prototypes you create will appear here. Add your first prototype to the registry and build its page under your folder.
            </p>
          </div>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {prototypes.map((proto) => {
              const statusCfg = proto.status ? STATUS_CONFIG[proto.status] : null
              return (
                <Card key={proto.slug}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-sm">{proto.title}</CardTitle>
                      {statusCfg && (
                        <Badge variant={statusCfg.variant} className={cn("shrink-0 gap-1")}>
                          {statusCfg.icon}
                          {statusCfg.label}
                        </Badge>
                      )}
                    </div>
                    {proto.createdAt && (
                      <p className="text-[11px] text-[var(--muted-foreground)]">{proto.createdAt}</p>
                    )}
                  </CardHeader>
                  <CardContent className="flex-1">
                    <CardDescription>{proto.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Link href={`/prototypes/${slug}/${proto.slug}`} className="w-full">
                      <Button variant="outline" size="sm" className="w-full">
                        Open prototype
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              )
            })}
          </div>

        )}
      </div>
    </div>
  )
}
