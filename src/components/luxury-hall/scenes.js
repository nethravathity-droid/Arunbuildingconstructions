/**
 * Frame sequence and progress maths for the Luxury Hall scroll experience.
 *
 * Each entry is one act of the transformation film. The experience crossfades
 * between frames as the section is scrolled, so for a true single-room morph
 * every `src` must be rendered from the SAME camera position, lens and room
 * geometry. Swapping the frames is a data-only change: edit this array.
 */

export const SCENE_SEQUENCE = [
  {
    number: "01",
    title: "The Elegant Beginning",
    caption:
      "An empty shell held by proportion and daylight — honest surfaces, quiet walls, and the promise of what comes next.",
    alt: "An empty modern living hall with full-height windows and daylight across a bare floor.",
    src: "/luxury-hall/hall-01.png",
    focus: "50% 47%",
    filter: "saturate(0.94) contrast(1.02) brightness(1.01)",
  },
  {
    number: "02",
    title: "Architectural Refinement",
    caption:
      "Honed marble underfoot, fluted oak along the wall, and a concealed cove that lets the ceiling float.",
    alt: "A living hall finished with marble flooring, fluted oak wall panelling and concealed cove lighting.",
    src: "/hero2.png",
    focus: "50% 54%",
    filter: "saturate(0.97) contrast(1.04)",
  },
  {
    number: "03",
    title: "Designer Interior",
    caption:
      "Tailored upholstery and warm timber, layered with soft linen and light that shifts through the day.",
    alt: "An interior with tailored upholstery, warm timber slats and layered natural light.",
    src: "/hero1.png",
    focus: "50% 50%",
    filter: "saturate(1) contrast(1.04)",
  },
  {
    number: "04",
    title: "Signature Luxury",
    caption:
      "Book-matched stone, brass detailing and sculptural pendant light — every surface resolved.",
    alt: "A crafted interior with book-matched stone, brass detailing and sculptural pendant lighting.",
    src: "/hero4.png",
    focus: "50% 55%",
    filter: "saturate(1.02) contrast(1.05)",
  },
  {
    number: "05",
    title: "The Grand Reveal",
    caption:
      "Golden hour across the finished residence — every material in conversation, every room complete.",
    alt: "The finished residence photographed at golden hour with warm cinematic light.",
    src: "/hero3.png",
    focus: "50% 46%",
    filter: "saturate(1.06) contrast(1.03) brightness(1.02)",
  },
];

export const SCENE_COUNT = SCENE_SEQUENCE.length;

/** Total progress travelled by one dissolve, as a fraction of the sequence. */
export const SCENE_FADE_SPAN = 0.15;

/** Slow forward camera push applied across the whole sequence. */
export const CAMERA_PUSH_SCALE = 0.055;

/** Vertical drift, in pixels, a frame travels while it is on screen. */
export const FRAME_DRIFT_PIXELS = 26;

/** Distance, as a multiple of viewport height, one act occupies in the pin. */
export const ACT_SCROLL_VH = 92;

export const clamp01 = (value) => (value < 0 ? 0 : value > 1 ? 1 : value);

/** Smooth S-curve used so motion starts and ends gently. */
export const smoothstep = (value) => {
  const p = clamp01(value);
  return p * p * (3 - 2 * p);
};

/**
 * Per-frame opacities for a given scroll progress.
 *
 * Scene `i` fades in over the first `SCENE_FADE_SPAN` of its act and then
 * holds. The weights always sum to exactly 1, so no gap between frames can
 * expose the backdrop mid-dissolve, and scrolling back reverses cleanly.
 */
export function sceneWeights(progress) {
  const p = clamp01(progress);
  const step = 1 / (SCENE_COUNT - 1);

  const ramp = (index) => {
    if (index === 0) return 1;
    if (index >= SCENE_COUNT) return 0;
    return clamp01((p - (index * step - SCENE_FADE_SPAN)) / SCENE_FADE_SPAN);
  };

  return SCENE_SEQUENCE.map((_, index) => ramp(index) - ramp(index + 1));
}

/** Caption/counter index — switches at the midpoint of each dissolve. */
export function activeSceneIndex(progress) {
  const p = clamp01(progress);
  const step = 1 / (SCENE_COUNT - 1);
  const midpointOffset = SCENE_FADE_SPAN / 2;

  let index = 0;
  for (let i = 1; i < SCENE_COUNT; i += 1) {
    if (p >= i * step - midpointOffset) index = i;
  }
  return index;
}
