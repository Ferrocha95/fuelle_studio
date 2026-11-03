## Fuelle Studio

Technical foundation for Fuelle Studio's official site. This repository currently contains architecture, design tokens, route shells, and reusable base components only; the immersive Home is intentionally not built yet.

### Stack

- Next.js App Router + TypeScript
- Tailwind CSS
- GSAP for the editorial motion system; CSS and React state for microinteractions

### Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Use `npm run lint` and `npm run build` to verify the project.

### Structure

- `src/app`: App Router routes for Home, Servicios, Proyectos, El estudio, and Contacto.
- `src/components`: shared layout, UI primitives, and guarded logo-review/application components.
- `src/lib/site-config.ts`: navigation and brand constants.
- `src/lib/brand-assets.ts`: approved-logo reference status and the guarded light/dark application slots.
- `src/app/globals.css`: color, type, accessibility, and reduced-motion tokens.

The approved historical logo reference is a non-transparent JPEG, while `referencias/Diseño sin título.svg` is the approved SVG application asset with its supplied white canvas. The `/identidad` route documents both. Do not trace, redraw, or replace the mark with type.

---

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
