export function HeroArt() {
  return (
    <div aria-hidden="true" className="hero-art" data-hero-art>
      <div className="hero-art__loop">
        <svg fill="none" viewBox="0 0 540 540" xmlns="http://www.w3.org/2000/svg">
          <path d="M76 270C76 163.962 161.962 78 268 78C339.676 78 397.88 136.123 397.88 207.8C397.88 279.476 339.776 337.58 268.1 337.58C217.48 337.58 176.44 378.62 176.44 429.24C176.44 479.86 217.48 520.9 268.1 520.9C370.993 520.9 454.4 437.493 454.4 334.6" stroke="currentColor" strokeLinecap="square" strokeWidth="60" />
          <path d="M113 85H427" stroke="var(--color-charcoal)" strokeWidth="2" />
          <path d="M270 20V145" stroke="var(--color-charcoal)" strokeWidth="2" />
          <circle cx="270" cy="270" fill="var(--color-charcoal)" r="8" />
          <circle className="hero-art__satellite" cx="428" cy="334" fill="var(--color-ivory)" r="12" />
        </svg>
      </div>
      <span className="hero-art-note hero-art-note--top">Vector de impulso</span>
      <span className="hero-art-note hero-art-note--bottom">01 / 01</span>
    </div>
  );
}
