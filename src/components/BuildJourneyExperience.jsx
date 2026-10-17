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
    caption: "Every residence begins on paper — structure, proportion and light, set out as a plan.",
    src: "/build-journey/build-01.jpg",
    alt: "Architectural drawing of a modern villa.",
  },
  {
    number: "02",
    title: "The Foundation",
    caption: "The plot is prepared and the concrete foundation is laid to the drawing.",
    src: "/build-journey/build-02.jpg",
    alt: "Construction site with foundation and formwork.",
  },
  {
    number: "03",
    title: "The Structure",
    caption: "Columns, beams and slabs rise — the skeleton of the house takes form.",
    src: "/build-journey/build-03.jpg",
    alt: "Concrete structural frame of a two-storey house.",
  },
  {
    number: "04",
    title: "The Build",
    caption: "Walls, openings and the roof go up as the drawing becomes a building.",
    src: "/build-journey/build-04.jpg",
    alt: "House under construction with walls and roof structure.",
  },
  {
    number: "05",
    title: "The Residence",
    caption: "The completed villa — the plan, now a place to live.",
    src: "/build-journey/build-05.jpg",
    alt: "Finished modern luxury villa at dusk.",
  },
];

const COUNT = SCENES.length;
const FADE = 0.16;

function weights(progress) {
  const p = Math.min(1, Math.max(0, progress));
  const step = 1 / (COUNT - 1);
  const ramp = (i) => {
    if (i === 0) return 1;
    if (i >= COUNT) return 0;
    return Math.min(1, Math.max(0, (p - (i * step - FADE)) / FADE));
  };
  return SCENES.map((_, i) => ramp(i) - ramp(i + 1));
}

function sceneIndex(progress) {
  const p = Math.min(1, Math.max(0, progress));
  const step = 1 / (COUNT - 1);
  let index = 0;
  for (let i = 1; i < COUNT; i += 1) {
    if (p >= i * step - FADE / 2) index = i;
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
      image.src = "";
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

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(media.matches);
    onChange();
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduced) return undefined;

    const section = sectionRef.current;
    const pin = pinRef.current;
    const stage = stageRef.current;
    if (!section || !pin || !stage) return undefined;

    const stopPreload = preload(SCENES.map((item) => item.src));
    let target = 0;
    let current = 0;
    let settled = true;
    let index = 0;

    const apply = (progress) => {
      const w = weights(progress);
      pin.style.setProperty("--lux-progress", progress.toFixed(4));
      stage.style.setProperty("--lux-zoom", (1 + 0.045 * progress).toFixed(4));
      frameRefs.current.forEach((frame, i) => {
        if (!frame) return;
        frame.style.setProperty("--lux-weight", (w[i] ?? 0).toFixed(4));
        frame.style.setProperty("--lux-shift", `${((progress - i / (COUNT - 1)) * 18).toFixed(2)}px`);
      });
      const next = sceneIndex(progress);
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
      if (Math.abs(delta) > 0.22) current = target;
      else if (Math.abs(delta) < 0.0005) {
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
    <section className={`lux-exp${reduced ? " lux-exp--static" : ""}`} aria-labelledby={titleId}>
      <div ref={sectionRef} className="lux-exp__scroll">
        <div ref={pinRef} className="lux-exp__pin">
          <div ref={stageRef} className="lux-exp__stage">
            <div className="lux-exp__frames">
              {SCENES.map((item, i) => (
                <div
                  key={item.number}
                  ref={(node) => {
                    frameRefs.current[i] = node;
                  }}
                  className={`lux-exp__frame${reduced && i === COUNT - 1 ? " is-visible" : ""}`}
                  style={i === 0 && !reduced ? { "--lux-weight": 1 } : undefined}
                >
                  <img
                    src={item.src}
                    alt={reduced && i === COUNT - 1 ? item.alt : ""}
                    className="hero-bg-img"
                    draggable="false"
                    {...(i === 0 ? { fetchPriority: "high" } : { loading: "lazy", decoding: "async" })}
                  />
                </div>
              ))}
            </div>
            <div className="lux-exp__scrim" aria-hidden="true" />
            <div className="lux-exp__vignette" aria-hidden="true" />
          </div>

          <div className="lux-exp__ui">
            <div>
              <p className="lux-exp__eyebrow">
                <span className="lux-exp__eyebrow-rule" aria-hidden="true" />
                From Plan To Place
              </p>
              <h2 id={titleId} className="lux-exp__title" data-split="done">
                Drawing. Structure. Home.
              </h2>
              <p className="lux-exp__lede">
                Scroll to watch a residence rise from the drawing into a completed house.
              </p>
            </div>

            <div className="lux-exp__rail" aria-hidden="true">
              <span className="lux-exp__rail-fill" />
            </div>

            <div className="lux-exp__footer">
              <div>
                <p className="lux-exp__caption">
                  <span className="lux-exp__act">Stage {scene.number}</span>
                  <span className="lux-exp__act-title">{scene.title}</span>
                  <span className="lux-exp__act-text">{scene.caption}</span>
                </p>
                <Link to="/process" className="lux-exp__craft">
                  View Our Process
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Link>
              </div>
              <p className="lux-exp__meter" aria-label={`Stage ${scene.number} of ${String(COUNT).padStart(2, "0")}`}>
                <strong>{scene.number}</strong> / {String(COUNT).padStart(2, "0")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
