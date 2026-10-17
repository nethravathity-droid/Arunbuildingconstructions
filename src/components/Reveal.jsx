import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/* Generic scroll reveal wrapper for any text / block */
export function Reveal({
  children,
  delay = 0,
  y = 36,
  x = 0,
  scale = 1,
  duration = 0.85,
  className = "",
  once = true,
  amount = 0.25,
  as = "div",
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.div;

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <Tag
      className={`reveal-wrap ${className}`}
      initial={{ opacity: 0, y, x, scale }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/* Per-word staggered text animation: splits text and animates word by word */
export function RevealText({
  text = "",
  delay = 0,
  stagger = 0.06,
  className = "",
  as = "span",
  y = 28,
}) {
  const reduce = useReducedMotion();
  const words = String(text).split(" ");
  const Tag = motion[as] || motion.span;

  if (reduce) return <Tag className={className}>{text}</Tag>;

  return (
    <Tag
      className={`reveal-text ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          className="reveal-word"
          variants={{
            hidden: { opacity: 0, y, rotateX: -35, filter: "blur(6px)" },
            show: {
              opacity: 1,
              y: 0,
              rotateX: 0,
              filter: "blur(0px)",
              transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          {w}
          {i < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </Tag>
  );
}

/* Image reveal with clip + zoom + shine wipe */
export function RevealImage({
  src,
  alt = "",
  className = "",
  delay = 0,
  ratio = "auto",
  loading = "lazy",
}) {
  const reduce = useReducedMotion();
  if (reduce)
    return (
      <div className={`reveal-img ${className}`}>
        <img src={src} alt={alt} loading={loading} />
      </div>
    );

  return (
    <motion.div
      className={`reveal-img ${className}`}
      style={ratio !== "auto" ? { aspectRatio: ratio } : undefined}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={loading}
        initial={{ scale: 1.18 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.span
        className="reveal-img-wipe"
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: delay + 0.1, ease: [0.76, 0, 0.24, 1] }}
      />
      <span className="reveal-img-shine" />
    </motion.div>
  );
}

export default Reveal;
