"use client"

import { useEffect, useState } from "react"
import { SunIcon, MoonIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const stored = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const dark = stored ? stored === "dark" : prefersDark
    setIsDark(dark)
    document.documentElement.classList.toggle("dark", dark)
  }, [])

  const toggle = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle("dark", next)
    localStorage.setItem("theme", next ? "dark" : "light")
  }

  // placeholder while unmounted to avoid layout shift
  if (!mounted) return <div className="w-8 h-8 shrink-0" />

  return (
    <button
      onClick={toggle}
      className={cn(
        "flex items-center justify-center w-8 h-8 rounded-md transition-colors shrink-0",
        "text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--accent)]",
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />}
    </button>
  )
}
