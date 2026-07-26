"use client";

import { useEffect, useState } from "react";

const CHARS = "АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ01#/_";

/**
 * Фирменный эффект hero: строка "декодируется" из случайных символов в
 * реальный текст — единственная нетривиальная анимация на сайте (см. правило
 * "один фирменный эффект, не десять типовых" в дизайн-гайде). Уважает
 * prefers-reduced-motion — тогда текст появляется сразу.
 */
export function ScrambleReveal({
  text,
  className,
  delayMs = 0,
}: {
  text: string;
  className?: string;
  delayMs?: number;
}) {
  const [display, setDisplay] = useState(text);
  const [settled, setSettled] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      const raf = requestAnimationFrame(() => setSettled(true));
      return () => cancelAnimationFrame(raf);
    }

    let raf = 0;
    let frame = 0;
    const totalFrames = 22;

    const timeout = window.setTimeout(() => {
      const tick = () => {
        frame += 1;
        const revealCount = Math.floor((frame / totalFrames) * text.length);
        const next = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < revealCount) return char;
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        if (frame >= totalFrames) {
          setDisplay(text);
          setSettled(true);
          return;
        }

        setDisplay(next);
        raf = requestAnimationFrame(tick);
      };

      raf = requestAnimationFrame(tick);
    }, delayMs);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [text, delayMs]);

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden={!settled}>{display}</span>
    </span>
  );
}
