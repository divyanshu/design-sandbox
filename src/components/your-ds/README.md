# Your Design System Components

This folder is where you replicate components from your Figma design system.

## Convention

Rename this folder to match your org or system (e.g. `acme`, `nova`, `carbon`).

Each file maps to one component group:

```
src/components/your-ds/
  button.tsx
  card.tsx
  badge.tsx
  text-field.tsx
  ...
```

Components are imported in prototypes as:

```tsx
import { YourButton } from "@/components/your-ds/button"
```

## How to replicate a component

1. Find the component in Figma and note its variants, props, and states
2. Build it in this folder using shadcn base components (`@/components/ui/`) as primitives
3. Style it using your design system's CSS token variables (defined in `src/app/globals.css`)
4. Document it in the `CLAUDE.md` component table so Claude knows how to use it

## Tokens

Define your design system's CSS custom properties in `src/app/globals.css` under a
scoped class (e.g. `.ds-your-name`) so they coexist with the base system tokens.

The base system (`.ds-base`) is already there as a reference example.
