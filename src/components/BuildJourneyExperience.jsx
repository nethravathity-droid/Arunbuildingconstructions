import { useEffect, useId, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./LuxuryHallExperience.css";

gsap.registerPlugin(ScrollTrigger);

const SCENES = [
  {
    number: "01",
    title: "The Drawing",
    caption:
      "Every exceptional residence begins on paper — with thoughtful planning, balanced proportions, and an understanding of light.",
    src: "/build-journey/build-01.jpg",
    alt: "Architectural drawings for a modern residential building.",
  },
  {
    number: "02",
    title: "The Foundation",
    caption:
      "The ground is prepared, measurements are verified, and the foundation establishes the strength of the structure.",
    src: "/build-journey/build-02.jpg",
    alt: "Residential construction site with foundation and formwork.",
  },
  {
    number: "03",
    title: "The Structure",
    caption:
      "Columns, beams, and concrete slabs rise to create the framework that brings the architectural vision to life.",
    src: "/build-journey/build-03.jpg",
    alt: "Concrete structural framework of a two-storey residence.",
  },
  {
    number: "04",
    title: "The Build",
    caption:
      "Walls, windows, roofing, and essential details take shape as the construction progresses towards completion.",
    src: "/build-journey/build-04.jpg",
    alt: "Residential building under construction with walls and roof.",
  },
  {
    number: "05",
    title: "The Residence",
    caption:
      "A considered design becomes a finished residence — a space created for comfort, character, and everyday living.",
    src: "/build-journey/build-05.jpg",
    alt: "Completed modern luxury residence illuminated at dusk.",
  },
];

const COUNT = SCENES.length;
const FADE = 0.16;

function clamp(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

function weights(progress) {
  const p = clamp(progress);
  const step = 1 / (COUNT - 1);

  const ramp = (i) => {
    if (i === 0) return 1;
    if (i >= COUNT) return 0;

    return clamp((p - (i * step - FADE)) / FADE);
  };

  return SCENES.map((_, i) => ramp(i) - ramp(i + 1));
}

function sceneIndex(progress) {
  const p = clamp(progress);
  const step = 1 / (COUNT - 1);

  let index = 0;

  for (let i = 1; i < COUNT; i += 1) {
    if (p >= i * step - FADE / 2) {
      index = i;
    }
  }

  return index;
}

function preload(sources) {
  const images = sources.map((src) => {
    const image = new Image();
    image.decoding = "async";
    image.src = src;
    return image;
  });

  return () => {
    images.forEach((image) => {
      image.onload = null;
      image.onerror = null;
    });
  };
}

export default function BuildJourneyExperience() {
  const titleId = useId();

  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const stageRef = useRef(null);
  const frameRefs = useRef([]);

  const [active, setActive] = useState(0);
  const [reduced, setReduced] = useState(false);

  const scene = SCENES[active];

  // Respect the visitor's motion preferences.
  useEffect(() => {
    const media = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const onChange = () => setReduced(media.matches);

    onChange();
    media.addEventListener("change", onChange);

    return () => {
      media.removeEventListener("change", onChange);
    };
  }, []);

  // Scroll-driven cinematic construction journey.
  useEffect(() => {
    const section = sectionRef.current;
    const pin = pinRef.current;
    const stage = stageRef.current;

    if (!section || !pin || !stage) return undefined;

    // Static fallback for reduced-motion preferences.
    if (reduced) {
      frameRefs.current.forEach((frame, i) => {
        if (!frame) return;

        frame.style.setProperty(
          "--lux-weight",
          i === COUNT - 1 ? "1" : "0"
        );

        frame.style.setProperty("--lux-shift", "0px");
      });

      stage.style.setProperty("--lux-zoom", "1");

      setActive(COUNT - 1);

      return undefined;
    }

    const stopPreload = preload(
      SCENES.map((item) => item.src)
    );

    let target = 0;
    let current = 0;
    let settled = true;
    let index = 0;

    const apply = (progress) => {
      const p = clamp(progress);
      const sceneWeights = weights(p);

      pin.style.setProperty(
        "--lux-progress",
        p.toFixed(4)
      );

      stage.style.setProperty(
        "--lux-zoom",
        (1 + 0.045 * p).toFixed(4)
      );

      frameRefs.current.forEach((frame, i) => {
        if (!frame) return;

        frame.style.setProperty(
          "--lux-weight",
          (sceneWeights[i] ?? 0).toFixed(4)
        );

        const shift =
          (p - i / (COUNT - 1)) * 18;

        frame.style.setProperty(
          "--lux-shift",
          `${shift.toFixed(2)}px`
        );
      });

      const next = sceneIndex(p);

      if (next !== index) {
        index = next;
        setActive(next);
      }
    };

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

    apply(current);

    const tick = () => {
      if (settled) return;

      const delta = target - current;

      if (Math.abs(delta) > 0.22) {
        current = target;
      } else if (Math.abs(delta) < 0.0005) {
        current = target;
        apply(current);
        settled = true;
        return;
      } else {
        current += delta * 0.16;
      }

      apply(current);
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      trigger.kill();
      stopPreload();
    };
  }, [reduced]);

  return (
    <section
      className={`lux-exp${reduced ? " lux-exp--static" : ""}`}
      aria-labelledby={titleId}
    >
      <div
        ref={sectionRef}
        className="lux-exp__scroll"
      >
        <div
          ref={pinRef}
          className="lux-exp__pin"
        >
          {/* CINEMATIC BACKGROUND STAGE */}
          <div
            ref={stageRef}
            className="lux-exp__stage"
          >
            <div className="lux-exp__frames">
              {SCENES.map((item, i) => (
                <div
                  key={item.number}
                  ref={(node) => {
                    frameRefs.current[i] = node;
                  }}
                  className={`lux-exp__frame${
                    reduced && i === COUNT - 1
                      ? " is-visible"
                      : ""
                  }`}
                  style={
                    i === 0 && !reduced
                      ? { "--lux-weight": 1 }
                      : undefined
                  }
                >
                  <img
                    src={item.src}
                    alt=""
                    aria-hidden="true"
                    className="hero-bg-img"
                    draggable="false"
                    fetchPriority={i === 0 ? "high" : "auto"}
                    loading={i === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
              ))}
            </div>

            {/* DARK OVERLAY */}
            <div
              className="lux-exp__scrim"
              aria-hidden="true"
            />

            {/* CINEMATIC EDGE SHADING */}
            <div
              className="lux-exp__vignette"
              aria-hidden="true"
            />
          </div>

          {/* CONTENT OVERLAY */}
          <div className="lux-exp__ui">
            <div className="lux-exp__intro">
              <p className="lux-exp__eyebrow">
                <span
                  className="lux-exp__eyebrow-rule"
                  aria-hidden="true"
                />
                From Plan To Place
              </p>

              <h2
                id={titleId}
                className="lux-exp__title"
              >
                Drawing. Structure. Home.
              </h2>

              <p className="lux-exp__lede">
                Every great residence tells a story.
                Follow the journey from the first drawing
                to the finished home.
              </p>
            </div>

            {/* PROGRESS INDICATOR */}
            <div
              className="lux-exp__rail"
              aria-hidden="true"
            >
              <span className="lux-exp__rail-fill" />

              {SCENES.map((item, i) => (
                <span
                  key={item.number}
                  className={`lux-exp__rail-point${
                    i <= active ? " is-active" : ""
                  }`}
                  style={{
                    "--point-position": `${(i / (COUNT - 1)) * 100}%`,
                  }}
                />
              ))}
            </div>

            {/* STAGE INFORMATION */}
            <div className="lux-exp__footer">
              <div className="lux-exp__details">
                <p className="lux-exp__caption">
                  <span className="lux-exp__act">
                    Stage {scene.number}
                  </span>

                  <span className="lux-exp__act-title">
                    {scene.title}
                  </span>

                  <span
                    className="lux-exp__act-text"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {scene.caption}
                  </span>
                </p>

                <Link
                  to="/process"
                  className="lux-exp__craft"
                >
                  Explore Our Process

                  <ArrowRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </Link>
              </div>

              {/* STAGE COUNTER */}
              <p
                className="lux-exp__meter"
                aria-label={`Stage ${scene.number} of ${String(
                  COUNT
                ).padStart(2, "0")}`}
              >
                <strong>{scene.number}</strong>
                <span aria-hidden="true"> / </span>
                {String(COUNT).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
