import HallIntro from "./HallIntro";
import HallCraftLink from "./HallCraftLink";
import { SCENE_SEQUENCE } from "./scenes";

/**
 * Reduced-motion presentation of the same five acts.
 *
 * No pinning, no scroll binding and no transform work — the stages are laid
 * out as an editorial sequence so the content stays fully available with
 * motion switched off. Decorative frames are CSS backgrounds rather than
 * <img> elements, which also keeps them out of the site-wide reveal observer.
 */
export function LuxuryHallStatic({ titleId }) {
  return (
    <div className="lux-hall__static">
      <HallIntro titleId={titleId} variant="flow" />

      <ol className="lux-hall__stages">
        {SCENE_SEQUENCE.map((scene) => (
          <li key={scene.number} className="lux-hall__stage-item">
            <div
              className="lux-hall__stage-frame"
              role="img"
              aria-label={scene.alt}
              style={{
                backgroundImage: `url("${scene.src}")`,
                backgroundPosition: scene.focus,
              }}
            />

            <div className="lux-hall__stage-copy">
              <p className="lux-hall__caption-act">
                <span className="lux-hall__caption-rule" aria-hidden="true" />
                Act {scene.number}
              </p>
              <h3 className="lux-hall__stage-title" data-split="done">
                {scene.title}
              </h3>
              <p className="lux-hall__caption-text">{scene.caption}</p>
            </div>
          </li>
        ))}
      </ol>

      <div className="lux-hall__static-close">
        <HallCraftLink />
      </div>
    </div>
  );
}

export default LuxuryHallStatic;
