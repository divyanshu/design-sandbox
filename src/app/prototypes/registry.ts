/**
 * Design Sandbox — Designer Registry
 *
 * When you initialize as a new designer:
 * 1. Add your entry to the DESIGNERS array below
 * 2. Create your folder:     src/app/prototypes/[your-slug]/
 * 3. Create your page:       src/app/prototypes/[your-slug]/page.tsx
 *    (use the DesignerLandingPage component from @/components/extended/designer-landing-page)
 * 4. Add your prototypes to the `prototypes` array in your entry here
 *
 * Your prototypes live at: /prototypes/[your-slug]/[prototype-slug]
 */

export type PrototypeStatus = "draft" | "in-progress" | "complete"

export type PrototypeMeta = {
  /** URL path segment — must match the folder name inside your designer folder */
  slug: string
  title: string
  description: string
  status?: PrototypeStatus
  /** ISO date string, e.g. "2026-03-19" */
  createdAt?: string
}

export type DesignerConfig = {
  /** Folder name under src/app/prototypes/, e.g. "sara" */
  slug: string
  /** Display name, e.g. "Sara Jones" */
  name: string
  /** Optional team shown on your landing page */
  team?: string
  prototypes: PrototypeMeta[]
}

// ─── Add your entry here when you initialize ──────────────────────────────────

export const DESIGNERS: DesignerConfig[] = [
  // {
  //   slug: "your-name",
  //   name: "Your Name",
  //   team: "Your Team",
  //   prototypes: [],
  // },
]
