# Design Sandbox

A shared prototyping environment for design teams, powered by [shadcn/ui](https://ui.shadcn.com/) and [Next.js](https://nextjs.org/). Clone it, plug in your own design system tokens, and start prototyping with AI.

**Purpose:** rapid prototyping and designing with AI — not production code.

---

## Getting started

```bash
git clone https://github.com/divyanshu/design-sandbox.git
cd design-sandbox
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to browse the base component showcase.

---

## Building a prototype

1. **Branch** — always work on a branch:
   ```bash
   git checkout -b prototype/your-feature-name
   ```

2. **Create your prototype directory** — prototypes are nested under your designer folder:
   ```
   src/app/prototypes/[your-slug]/[feature-name]/page.tsx
   ```

3. **Launch Claude Code** — it will read `CLAUDE.md` and know exactly which components are available and how to use them. Just describe what you want to build.

4. **Browse components** at `localhost:3000` to see what's available before asking Claude to build.

5. **PR back to main** when done — describe what you built and whether anything should be promoted to the shared `extended/` library.

---

## Bring your own design system

The sandbox is built to be extended. To add your own design system:

1. **Add your components** in `src/components/your-ds/` (replace `your-ds` with your system's name)
2. **Add your tokens** as CSS custom properties in `src/app/globals.css`, scoped under your own class (e.g. `.ds-acme`)
3. **Update `CLAUDE.md`** with your component inventory so Claude knows what's available

The base shadcn/ui components in `src/components/ui/` are always available as a foundation.

---

## Modes

The showcase header has a dark mode toggle (sun/moon icon) that switches between light and dark theme.

---

## Repo structure

```
src/
├── components/
│   ├── your-ds/       ← Your design system components
│   ├── extended/      ← Reusable components built during prototyping
│   └── ui/            ← Base shadcn components — DO NOT MODIFY
└── app/
    ├── page.tsx       ← Homepage (localhost:3000)
    ├── design-systems/base/  ← Component showcase
    ├── prototypes/    ← Prototype work, organised per designer
    │   ├── registry.ts       ← Register designers and their prototypes
    │   └── [designer-slug]/
    │       ├── page.tsx      ← Designer's landing page
    │       └── [feature-name]/
    │           └── page.tsx  ← Individual prototype
    └── globals.css    ← Design tokens (light + dark)
```

---

## For teams

Each designer gets their own space under `src/app/prototypes/[name]/`. Designers can onboard themselves by telling Claude Code "I'm new, help me get started" — it handles all the setup automatically.

See [GETTING_STARTED.md](./GETTING_STARTED.md) for a step-by-step guide aimed at designers who are new to the terminal.
