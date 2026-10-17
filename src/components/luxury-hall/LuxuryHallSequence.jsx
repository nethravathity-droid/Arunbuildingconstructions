import { useRef } from "react";
import HallIntro from "./HallIntro";
import HallCraftLink from "./HallCraftLink";
import { ACT_SCROLL_VH, SCENE_COUNT, SCENE_SEQUENCE } from "./scenes";
import { useHallSequence } from "./useHallSequence";

/**
 * Pinned, scroll-driven transformation.
 *
 * The order of the stage children is deliberate and is the whole visual
 * recipe: photographic frames, then the light bloom and golden wash that build
 * as the reveal progresses, then the legibility scrim, the vignette and the
 * hairline frame on top.
 */
export function LuxuryHallSequence({ titleId }) {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const stageRef = useRef(null);
  const frameRefs = useRef([]);

  const activeIndex = useHallSequence({ sectionRef, pinRef, stageRef, frameRefs });
  const activeScene = SCENE_SEQUENCE[activeIndex] ?? SCENE_SEQUENCE[0];

  return (
    <section
      ref={sectionRef}
      className="lux-hall__scroll"
      style={{ "--lux-act-vh": `${ACT_SCROLL_VH}vh` }}
    >
      <div ref={pinRef} className="lux-hall__pin" data-active="false" data-phase="intro">
        <div ref={stageRef} className="lux-hall__stage">
          <div className="lux-hall__frames" aria-hidden="true">
            {SCENE_SEQUENCE.map((scene, index) => (
              <div
                key={scene.number}
                ref={(node) => {
                  frameRefs.current[index] = node;
                }}
                className="lux-hall__frame"
              >
                <div
                  className="lux-hall__plate"
                  style={{
                    backgroundImage: `url("${scene.src}")`,
                    backgroundPosition: scene.focus,
                    filter: scene.filter,
                  }}
                />
              </div>
            ))}
          </div>

          <div className="lux-hall__bloom" aria-hidden="true" />
          <div className="lux-hall__gold" aria-hidden="true" />
          <div className="lux-hall__scrim" aria-hidden="true" />
          <div className="lux-hall__vignette" aria-hidden="true" />
          <div className="lux-hall__edge" aria-hidden="true" />
        </div>

        <div className="lux-hall__ui">
          <HallIntro titleId={titleId} />

          <ol className="lux-hall__captions" aria-label="Stages of the transformation">
            {SCENE_SEQUENCE.map((scene, index) => (
              <li
                key={scene.number}
                className={`lux-hall__caption${index === activeIndex ? " is-active" : ""}`}
                aria-hidden={index !== activeIndex}
              >
                <p className="lux-hall__caption-act">
                  <span className="lux-hall__caption-rule" aria-hidden="true" />
                  Act {scene.number}
                </p>
                <p className="lux-hall__caption-title">{scene.title}</p>
                <p className="lux-hall__caption-text">{scene.caption}</p>
              </li>
            ))}
          </ol>

          <p className="lux-hall__meter" aria-label={`Act ${activeScene.number} of ${SCENE_COUNT}`}>
            <span className="lux-hall__meter-current" data-split="done">
              {activeScene.number}
            </span>
            <span className="lux-hall__meter-divider" aria-hidden="true">
              /
            </span>
            <span className="lux-hall__meter-total">{String(SCENE_COUNT).padStart(2, "0")}</span>
          </p>

          <div className="lux-hall__rail" aria-hidden="true">
            <span className="lux-hall__rail-track" />
            <span className="lux-hall__rail-fill" />
          </div>

          <div className="lux-hall__close">
            <HallCraftLink />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LuxuryHallSequence;
