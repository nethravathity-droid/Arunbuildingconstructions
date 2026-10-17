import { useEffect } from "react";

/**
 * Global scroll animation:
 * - auto-splits headings and marked text into animated words
 * - adds scroll-reveal to images and marked blocks
 * No page rewrites needed — just mount once in App.jsx.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const splitWords = (el) => {
      if (el.dataset.split === "done") return;
      // Don't split if it already contains links/buttons/images
      if (el.querySelector("a, button, img")) return;
      const text = el.textContent;
      if (!text || !text.trim()) return;
      el.dataset.split = "done";
      el.setAttribute("aria-label", text.trim());

      // Preserve <br> + <em> structure: walk child nodes
      const processNode = (node, frag, delayBase) => {
        let di = 0;
        node.childNodes.forEach((child) => {
          if (child.nodeType === 3) {
            child.textContent.split(/(\s+)/).forEach((part) => {
              if (!part) return;
              if (/^\s+$/.test(part)) {
                frag.appendChild(document.createTextNode(" "));
              } else {
                const s = document.createElement("span");
                s.className = "anim-word";
                s.textContent = part;
                s.style.transitionDelay = `${delayBase + di * 0.055}s`;
                frag.appendChild(s);
                di += 1;
              }
            });
          } else if (child.nodeName === "BR") {
            frag.appendChild(document.createElement("br"));
          } else if (child.nodeType === 1) {
            const wrap = document.createElement(child.nodeName.toLowerCase() === "em" ? "em" : "span");
            if (child.className) wrap.className = child.className;
            const inner = document.createDocumentFragment();
            processNode(child, inner, delayBase + di * 0.055);
            wrap.appendChild(inner);
            frag.appendChild(wrap);
          }
        });
        return di;
      };

      const frag = document.createDocumentFragment();
      processNode(el, frag, 0);
      el.textContent = "";
      el.appendChild(frag);
      el.classList.add("anim-split");
    };

    const enhance = () => {
      // Split headings and explicitly marked text into words.
      document
        .querySelectorAll("h1, h2, h3, [data-animate-text]")
        .forEach(splitWords);

      // Add scroll reveal to images and blocks marked by page components.
      document
        .querySelectorAll("img:not(.site-logo-img):not(.hero-bg-img), [data-reveal]")
        .forEach((el) => {
          if (!el.classList.contains("anim-reveal") && !el.closest(".anim-reveal")) {
            el.classList.add("anim-reveal");
          }
        });

      observe();
    };

    let observer;
    const observe = () => {
      const targets = document.querySelectorAll(".anim-split, .anim-reveal");
      if (!observer) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add("in-view");
                observer.unobserve(e.target);
              }
            });
          },
          { threshold: 0.18, rootMargin: "0px 0px -6% 0px" }
        );
      }
      targets.forEach((t) => {
        if (!t.classList.contains("in-view")) observer.observe(t);
      });
    };

    enhance();

    // Re-enhance on route change (React Router swaps DOM without reload)
    const mo = new MutationObserver(() => {
      enhance();
    });
    mo.observe(document.querySelector("main") || document.body, {
      childList: true,
      subtree: true,
    });
    window.addEventListener("load", enhance);
    return () => {
      mo.disconnect();
      window.removeEventListener("load", enhance);
      if (observer) observer.disconnect();
    };
  }, []);

  return null;
}
