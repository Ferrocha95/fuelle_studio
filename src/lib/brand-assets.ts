/**
 * Brand asset registry.
 *
 * Preserve the supplied raster reference for review. The supplied SVG is the
 * approved application asset with its original white canvas; never redraw,
 * trace, crop, or recolor either file.
 */
export const logoAssets = {
  approvedReference: {
    file: "referencias/FUELLE STUDIO - LOGOTIPO PRINCIPAL OFICIAL - original JPEG.jpeg",
    dimensions: { width: 1600, height: 552 },
    status: "reference-only",
  },
  approvedMaster: {
    file: "referencias/Diseño sin título.svg",
    status: "approved-svg-white-canvas",
  },
  application: {
    onLight: "SVG oficial con su lienzo blanco original, sin fondo añadido por la interfaz.",
    onDark: "SVG oficial con su lienzo blanco original, sin recolor ni inversión.",
  },
} as const;

export type LogoSurface = "light" | "dark";
