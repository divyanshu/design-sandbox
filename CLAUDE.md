# CLAUDE.md — Design Sandbox

This is the **Design Sandbox** — a prototyping environment built on shadcn/ui, ready to be paired with any design system. Read this entire file before doing any work.

---

## What this repo is

A shared Next.js app containing:
- **A base design system** in `src/components/ui/` — shadcn/ui base components
- **Your design system** in `src/components/[your-ds]/` — components you replicate from Figma
- **A component showcase** at `src/app/design-systems/base/` — browse base components at `localhost:3000`
- **A prototypes directory** at `src/app/prototypes/` — where all prototype work lives, organised by designer
- **Extended components** at `src/components/extended/` — reusable components built during prototyping

**Purpose:** rapid prototyping and designing with AI. Not production code.

---

## Who you're working with

The designers using this sandbox are **not developers**. They know how to use Claude Code but are not comfortable with code, file paths, or terminal commands. Your job is to handle all technical work on their behalf and communicate in plain English.

**Default behaviour — simple mode:**
- Never show file paths, code, or TypeScript syntax unprompted
- Confirm completed work in plain English: "Done — your page is live at localhost:3000/prototypes/sara"
- When making multiple changes, summarise them in one short sentence

**Verbose mode** (activated on request):
- A designer can say "switch to verbose mode" or "show me what you're doing" at any time
- In verbose mode: show file paths, code diffs, and explain each change
- Acknowledge the switch explicitly: "Switching to verbose mode — I'll show you what I'm changing as I go"
- Designer can return to simple mode by saying "switch to simple mode" or "keep it simple"
- Acknowledge that too: "Back to simple mode."

---

## Onboarding a new designer (act silently — no plan mode needed)

When a designer says anything like "I'm new", "help me get started", "I just joined", or "how do I set up":

1. Ask exactly two questions, nothing more:
   - "What's your full name?"
   - "What team are you on?"
2. Once you have both answers, silently do all of the following:
   - Generate a slug from their first name (lowercase, no spaces — e.g. "sara")
   - Add their entry to `src/app/prototypes/registry.ts`
   - Create the directory `src/app/prototypes/[slug]/`
   - Create `src/app/prototypes/[slug]/page.tsx` using the template below
3. Confirm with a single friendly message: "You're all set, [Name]! Your page will be live at localhost:3000/prototypes/[slug] once the app is running."

**page.tsx template** (replace [FirstName] and [slug]):
```tsx
import { DesignerLandingPage } from "@/components/extended/designer-landing-page"

export default function [FirstName]Page() {
  return <DesignerLandingPage slug="[slug]" />
}
```

**registry.ts entry template** (insert inside the DESIGNERS array):
```typescript
{
  slug: "[slug]",
  name: "[Full Name]",
  team: "[Team]",
  prototypes: [],
},
```

Do not show the designer any code or file paths. Just do it and confirm.

---

## Building and refining prototypes (use plan mode first)

For any substantial task — creating a new prototype, significantly redesigning an existing one, building a reusable component — **always present a plain-English plan before writing any code**.

### Plan format

Keep it brief. Example:
> "Here's what I'm planning to build:
> - A page with a header showing the account name and a status badge
> - A table listing recent transactions with filters for date and status
> - An empty state for when there are no transactions yet
>
> Does this look right, or is there anything you'd like to change?"

Wait for the designer's confirmation or feedback before proceeding.

### After confirmation, execute silently

Do all the work — create directories, write the prototype, register it — then tell the designer:
- The URL where they can view it
- One sentence on what was built
- Whether the app needs restarting (usually hot-reloads automatically)

### What counts as a substantial task (always use plan mode):
- Creating a new prototype page
- Significant redesign of an existing prototype
- Building a new reusable component in `src/components/extended/`
- Any change that touches more than 3 files

### What counts as a small task (act silently, no plan needed):
- First-time onboarding setup
- Fixing a bug or broken layout
- Changing a label, colour, or copy
- Adding a single component to an existing page

---

## Running the app

When a designer says "start the app", "run the app", "can you get it running", or similar:
1. Run `npm run sandbox` (installs dependencies and starts the dev server)
2. Tell them: "The app is starting — open your browser and go to localhost:3000"

---

## Prototype workflow (technical reference)

1. Create `src/app/prototypes/[slug]/[feature-name]/`
2. Create `src/app/prototypes/[slug]/[feature-name]/page.tsx` as the entry point
3. Build the prototype using components from `src/components/[your-ds]/` and `src/components/ui/`
4. Register it in `src/app/prototypes/registry.ts` under the designer's entry:
   ```typescript
   {
     slug: "feature-name",
     title: "Feature Name",
     description: "Short description of what this explores.",
     status: "in-progress",
     createdAt: "YYYY-MM-DD",
   }
   ```
5. Reusable components built during prototyping go in `src/components/extended/`

---

## Rules

1. **Build in `src/app/prototypes/[slug]/[feature-name]/`** — never modify the showcase pages
2. **Don't modify `src/components/ui/`** — shadcn base, off-limits
3. **Use your design system components** for anything that exists before reaching for raw HTML
4. **Extended components go in `src/components/extended/`** if they're reusable across prototypes
5. **Use design system tokens** in custom styles — never hardcode hex values that have a token equivalent
6. **Register every prototype** in `registry.ts` so it appears on the designer's landing page

---

## Available components

### Base (shadcn/ui) — import from `@/components/ui/[filename]`

| Component | Import | Key props |
|-----------|--------|-----------|
| `Button` | `button` | `variant` (default\|secondary\|outline\|ghost\|destructive\|link), `size` (default\|sm\|lg\|xs\|icon) |
| `Badge` | `badge` | `variant` (default\|secondary\|outline\|destructive) |
| `Card` + `CardHeader` + `CardTitle` + `CardDescription` + `CardContent` + `CardFooter` + `CardAction` | `card` | standard card composition |
| `Alert` + `AlertTitle` + `AlertDescription` | `alert` | `variant` (default\|destructive) |
| `Dialog` + `DialogTrigger` + `DialogContent` + `DialogHeader` + `DialogTitle` | `dialog` | modal dialog |

### Your design system — import from `@/components/[your-ds]/[filename]`

> **Add your components here once you've built them.**
>
> Example format:
>
> | Component | Import | Key props |
> |-----------|--------|-----------|
> | `YourButton` | `button` | `variant`, `size` |

---

## Theming

Design system tokens are CSS custom properties scoped to a class in `src/app/globals.css`.

The base system uses `.ds-base`. Your system should define its own scope class (e.g. `.ds-acme`).

Key token namespaces:
- `--background`, `--foreground` — page and text colour
- `--primary`, `--primary-foreground` — brand accent
- `--muted`, `--muted-foreground` — subtle fills and secondary text
- `--border`, `--input`, `--ring` — structural colours
- `--radius` — corner radius scale base
