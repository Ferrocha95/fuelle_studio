<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Fuelle Studio project rules

## Scope and stack

- Use Next.js App Router, TypeScript, Tailwind CSS, and GSAP. Add Motion only when CSS and React state cannot deliver the required interaction without a quality loss. Introduce Three.js only after a documented need is approved.
- Keep components modular and route-specific content in `src/app`; shared UI belongs in `src/components`; configuration belongs in `src/lib`.
- Preserve responsive behavior, semantic HTML, keyboard access, visible focus states, and `prefers-reduced-motion` support.

## Brand system

- Base colors: charcoal `#0F0F0F`, ivory `#F7F3EA`, orange `#FF6A00`, taupe `#C9B7A7`, and occasional blue `#2A5BFF`.
- Reference typefaces are Sora and Inter. Do not add external font loading without confirming the asset/licensing decision.
- The concept is “Ideas que toman impulso”. Keep the visual language editorial, experimental, and premium; do not introduce generic template motifs.
- The supplied primary-logo JPEG remains an approved historical visual reference. Never generate, redraw, trace, or reinterpret its geometry or lettering.
- `referencias/Diseño sin título.svg` is the approved application asset. It contains its supplied white canvas; use it through `BrandLogo` and preserve its geometry, lettering, colors, and canvas. Do not alter the SVG file or create substitute artwork.
- Use `BrandLogo` for application slots and `ApprovedLogoReference` only for review. Do not substitute its lettering with a font.

## Content guardrails

- Do not add founders' names, faces, or personal data.
- Do not invent clients, testimonials, project results, or case studies.
- Do not show prices. Do not market Branding as an approved commercial service.
- Do not build quote-request flows or send quotations.

## Delivery guardrails

- Do not deploy, publish, create a remote Site, or change access settings without an explicit request.
- Before introducing scroll or interface motion, implement it progressively and respect reduced-motion preferences.
