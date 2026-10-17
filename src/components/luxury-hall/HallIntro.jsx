/**
 * Introductory copy for the Refined Living section.
 *
 * `data-split="done"` opts the heading out of the site-wide ScrollReveal word
 * splitter, which would otherwise fade each word in on its own observer and
 * fight the pinned timeline this section runs on.
 */
export function HallIntro({ titleId, variant = "overlay" }) {
  return (
    <div className={`lux-hall__intro lux-hall__intro--${variant}`}>
      <p className="lux-hall__eyebrow">
        <span className="lux-hall__eyebrow-rule" aria-hidden="true" />
        The Art of Refined Living
      </p>
      <h2 id={titleId} className="lux-hall__title" data-split="done">
        Ordinary Spaces. Extraordinary Living.
      </h2>
      <p className="lux-hall__lede">
        Every detail thoughtfully crafted. Every space transformed into an experience.
      </p>
    </div>
  );
}

export default HallIntro;
