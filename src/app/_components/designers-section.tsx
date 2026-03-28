"use client"

import Link from "next/link"
import { UserIcon } from "lucide-react"
import { DESIGNERS } from "@/app/prototypes/registry"

export function DesignersSection() {
  return (
    <div id="designers" className="py-14 border-b border-[var(--border)]">

      {/* Section header */}
      <div className="mb-8">
        <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-[var(--muted-foreground)] mb-2">
          Designers
        </p>
        <h2 className="text-2xl font-bold text-[var(--foreground)]">Prototype spaces</h2>
        <p className="text-sm text-[var(--muted-foreground)] mt-1.5 max-w-sm">
          Each designer has their own space. Browse their work or start your own.
        </p>
      </div>

      {DESIGNERS.length === 0 ? (
        <div className="rounded-xl border border-dashed border-[var(--border)] px-8 py-14 text-center">
          <div className="w-10 h-10 rounded-full bg-[var(--muted)] flex items-center justify-center mx-auto mb-4">
            <UserIcon className="w-5 h-5 text-[var(--muted-foreground)]" />
          </div>
          <p className="text-sm font-semibold text-[var(--foreground)]">No designers yet</p>
          <p className="text-xs text-[var(--muted-foreground)] mt-1.5">
            Open Claude Code and say <span className="font-medium text-[var(--foreground)]">"I&apos;m new, help me get started"</span>
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

          {/* Designer cards */}
          {DESIGNERS.map((designer) => (
            <Link
              key={designer.slug}
              href={`/prototypes/${designer.slug}`}
              className="group relative flex flex-col gap-5 rounded-xl border border-[var(--border)] bg-[var(--card)] p-6 hover:border-[var(--ring)] hover:shadow-sm transition-all duration-200 overflow-hidden"
            >
              {/* Top accent bar — slides in on hover */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#895ED3] to-[#7043B7] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-full bg-[var(--muted)] flex items-center justify-center shrink-0">
                  <UserIcon className="w-4 h-4 text-[var(--muted-foreground)]" />
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14" height="14" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"
                  className="text-[var(--muted-foreground)] group-hover:text-[#895ED3] group-hover:translate-x-0.5 transition-all duration-200 mt-0.5"
                >
                  <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              <div className="flex-1">
                <p className="font-semibold text-[var(--foreground)]">{designer.name}</p>
                {designer.team && (
                  <p className="text-xs text-[var(--muted-foreground)] mt-0.5">{designer.team}</p>
                )}
              </div>

              <div className="flex items-baseline gap-1.5 pt-4 border-t border-[var(--border)]">
                <span className="text-xl font-bold text-[var(--foreground)] tabular-nums leading-none">
                  {designer.prototypes.length}
                </span>
                <span className="text-xs text-[var(--muted-foreground)]">
                  {designer.prototypes.length === 1 ? "prototype" : "prototypes"}
                </span>
              </div>
            </Link>
          ))}

          {/* Add yourself card */}
          <div className="flex flex-col gap-5 rounded-xl border border-dashed border-[var(--border)] p-6 opacity-50 select-none cursor-default">
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-full bg-[var(--muted)] flex items-center justify-center shrink-0">
                <UserIcon className="w-4 h-4 text-[var(--muted-foreground)]" />
              </div>
            </div>
            <div className="flex-1">
              <p className="font-semibold text-[var(--foreground)]">Add yourself</p>
              <p className="text-xs text-[var(--muted-foreground)] mt-0.5 leading-relaxed">
                Tell Claude <span className="font-medium">"I&apos;m new"</span> to get set up in seconds
              </p>
            </div>
            <div className="pt-4 border-t border-[var(--border)]">
              <p className="text-xs text-[var(--muted-foreground)]">Claude Code · 2 questions</p>
            </div>
          </div>

        </div>
      )}
    </div>
  )
}
