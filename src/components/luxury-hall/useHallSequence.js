import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  CAMERA_PUSH_SCALE,
  FRAME_DRIFT_PIXELS,
  SCENE_COUNT,
  SCENE_SEQUENCE,
  activeSceneIndex,
  sceneWeights,
  smoothstep,
} from "./scenes";
import { preloadFrames } from "./preloadFrames";

gsap.registerPlugin(ScrollTrigger);

/** Fraction of the remaining distance covered each frame — cinematic inertia. */
const SMOOTHING = 0.14;

/** Below this delta the sequence is settled and stops writing styles. */
const SETTLED_DELTA = 0.0004;

/** Jumps larger than this (anchor links, restores) snap instead of gliding. */
const SNAP_DELTA = 0.25;

const INTRO_UNTIL = 0.055;
const OUTRO_FROM = 0.9;

/**
 * Pins the hall viewport and drives the transformation from scroll position.
 *
 * Every animated value is written as a CSS custom property on `pin`, `stage`
 * or the individual frames, so these imperative per-frame updates can never be
 * undone by a React re-render, and no layout is measured while animating.
 */
export function useHallSequence({ sectionRef, pinRef, stageRef, frameRefs }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const stage = stageRef.current;

    if (!section || !pin || !stage) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const stopPreload = preloadFrames(SCENE_SEQUENCE.map((scene) => scene.src));
    const step = 1 / (SCENE_COUNT - 1);

    const applyProgress = (progress) => {
      const frames = frameRefs.current;
      const weights = sceneWeights(progress);

      pin.style.setProperty("--lux-progress", progress.toFixed(4));
      stage.style.setProperty("--lux-zoom", (1 + CAMERA_PUSH_SCALE * smoothstep(progress)).toFixed(4));

      for (let index = 0; index < frames.length; index += 1) {
        const frame = frames[index];
        if (!frame) continue;
        frame.style.setProperty("--lux-weight", (weights[index] ?? 0).toFixed(4));
        frame.style.setProperty("--lux-shift", `${((progress - index * step) * FRAME_DRIFT_PIXELS).toFixed(2)}px`);
      }

      const phase = progress < INTRO_UNTIL ? "intro" : progress > OUTRO_FROM ? "outro" : "act";
      if (pin.dataset.phase !== phase) pin.dataset.phase = phase;

      const index = activeSceneIndex(progress);
      if (index !== activeIndexRef.current) {
        activeIndexRef.current = index;
        setActiveIndex(index);
      }
    };

    ScrollTrigger.config({ ignoreMobileResize: true });

    let target = 0;
    let current = 0;
    let settled = false;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      pin,
      pinSpacing: false,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        target = self.progress;
        settled = false;
      },
    });

    target = trigger.progress;
    current = trigger.progress;
    pin.dataset.active = "true";
    applyProgress(current);

    const tick = () => {
      if (settled) return;

      const delta = target - current;

      if (Math.abs(delta) > SNAP_DELTA) {
        current = target;
      } else if (Math.abs(delta) < SETTLED_DELTA) {
        current = target;
        applyProgress(current);
        settled = true;
        return;
      } else {
        current += delta * SMOOTHING;
      }

      applyProgress(current);
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      trigger.kill();
      stopPreload();
      pin.removeAttribute("data-phase");
      pin.removeAttribute("data-active");
    };
  }, [sectionRef, pinRef, stageRef, frameRefs]);

  return activeIndex;
}

export default useHallSequence;
