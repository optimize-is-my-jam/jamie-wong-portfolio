"use client";

import { useCallback, useEffect, useState } from "react";

import { experienceTimelineLabels } from "@/lib/content";

/**
 * Viewport Y (px) from the top: once a section’s top crosses this line, that
 * segment becomes active. Tuned to sit near sticky `top-40` + comfortable reading line.
 */
const ACTIVATION_OFFSET_PX = 200;

function getActiveTimelineIndex(): number {
  if (typeof document === "undefined") return 0;
  const nodes = document.querySelectorAll("[data-experience-timeline]");
  let active = 0;
  nodes.forEach((el) => {
    const raw = el.getAttribute("data-experience-timeline");
    if (raw == null) return;
    const idx = Number.parseInt(raw, 10);
    if (Number.isNaN(idx)) return;
    const top = el.getBoundingClientRect().top;
    if (top <= ACTIVATION_OFFSET_PX) active = idx;
  });
  return active;
}

function scrollToTimelineSection(index: number) {
  if (typeof document === "undefined") return;
  const el = document.querySelector<HTMLElement>(
    `[data-experience-timeline="${index}"]`,
  );
  el?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function StickyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const update = () => setActiveIndex(getActiveTimelineIndex());
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const onJump = useCallback((index: number) => {
    scrollToTimelineSection(index);
  }, []);

  return (
    <nav
      className="sticky top-40 hidden space-y-24 pt-4 lg:block lg:col-span-2"
      aria-label="Experience timeline"
    >
      {experienceTimelineLabels.map((item, i) => {
        const isActive = i === activeIndex;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => onJump(i)}
            className="group/t flex w-full cursor-pointer items-center gap-4 rounded-sm text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/45"
            aria-current={isActive ? "location" : undefined}
            aria-label={`Jump to ${item.label}`}
          >
            <div
              className={`h-px shrink-0 transition-all ${
                isActive
                  ? "w-16 bg-primary"
                  : "w-12 bg-slate-800 group-hover/t:w-16 group-hover/t:bg-primary"
              }`}
              aria-hidden
            />
            <span
              className={`min-w-0 text-xs font-black uppercase leading-snug tracking-widest transition-colors ${
                isActive ? "text-primary" : "text-slate-500"
              }`}
            >
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
