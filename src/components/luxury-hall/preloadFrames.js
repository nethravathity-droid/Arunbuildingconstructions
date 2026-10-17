/**
 * Warms the HTTP cache and decodes the frame sequence ahead of time so the
 * first dissolve never lands on an undecoded frame.
 *
 * Backgrounds declared in CSS are only fetched when the element paints; this
 * pulls the same URLs in early and asks the browser to decode them during idle
 * time. Scenes that the page already loaded elsewhere resolve from cache.
 */
export function preloadFrames(sources) {
  if (typeof window === "undefined" || typeof Image === "undefined") {
    return () => {};
  }

  const images = sources.map((source) => {
    const image = new Image();
    image.decoding = "async";
    image.src = source;
    return image;
  });

  const decodeAll = () => {
    images.forEach((image) => {
      if (typeof image.decode === "function") {
        image.decode().catch(() => {});
      }
    });
  };

  if (typeof window.requestIdleCallback === "function") {
    const handle = window.requestIdleCallback(decodeAll, { timeout: 2000 });
    return () => window.cancelIdleCallback(handle);
  }

  const timer = window.setTimeout(decodeAll, 300);
  return () => window.clearTimeout(timer);
}

export default preloadFrames;
