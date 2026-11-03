"use client";

import type { PointerEvent } from "react";

function updateTilt(event: PointerEvent<HTMLDivElement>) {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const bounds = event.currentTarget.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - 0.5;
  const y = (event.clientY - bounds.top) / bounds.height - 0.5;
  event.currentTarget.style.setProperty("--manifesto-tilt-x", `${x * 7}deg`);
  event.currentTarget.style.setProperty("--manifesto-tilt-y", `${y * -6}deg`);
}

function resetTilt(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.setProperty("--manifesto-tilt-x", "0deg");
  event.currentTarget.style.setProperty("--manifesto-tilt-y", "0deg");
}

/** An original, CSS-built study in expansion and tension. */
export function ManifestoSculpture() {
  return (
    <div
      aria-label="Escultura abstracta de vidrio ahumado y acrílico en tensión"
      className="manifesto-sculpture"
      data-manifesto-sculpture
      onPointerLeave={resetTilt}
      onPointerMove={updateTilt}
      role="img"
    >
      <div className="manifesto-sculpture__stage">
        <div className="manifesto-sculpture__glow" />
        <div className="manifesto-sculpture__shadow" />
        <div className="manifesto-sculpture__ribbon manifesto-sculpture__ribbon--back" />
        <div className="manifesto-sculpture__smoke manifesto-sculpture__smoke--one" />
        <div className="manifesto-sculpture__smoke manifesto-sculpture__smoke--two" />
        <div className="manifesto-sculpture__ribbon manifesto-sculpture__ribbon--front"><span /></div>
        <div className="manifesto-sculpture__filament" />
        <div className="manifesto-sculpture__reflection" />
        <p>Expansión<br />en tensión</p>
      </div>
    </div>
  );
}
