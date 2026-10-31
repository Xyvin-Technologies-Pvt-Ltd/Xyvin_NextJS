"use client";

import { Children, useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface CarouselProps {
  label: string;
  children: React.ReactNode;
  className?: string;
  /** Continuous auto-scroll speed in px per second, looping seamlessly. 0 = manual only. */
  autoScroll?: number;
  /** Let the track run edge to edge of the viewport while controls stay in the container. */
  fullBleed?: boolean;
}

const HOLD_AFTER_INTERACTION_MS = 4000;
// Original set plus copies; three sets keep the loop seamless on very wide screens.
const LOOP_SETS = 3;

const buttonClass =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy-900/20 bg-white text-navy-900 transition-colors hover:border-navy-900 disabled:pointer-events-none disabled:opacity-40";

// Horizontal carousel: swipe on touch, arrow keys when focused, prev/next buttons.
// With autoScroll it drifts continuously in a loop, pausing on hover, keyboard focus,
// touch/wheel, when off-screen, and not at all for visitors who prefer reduced motion.
export default function Carousel({ label, children, className, autoScroll = 0, fullBleed = false }: CarouselProps) {
  const isLooping = autoScroll > 0;
  const items = Children.toArray(children);

  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(isLooping);
  const [canNext, setCanNext] = useState(isLooping);
  const [isPlaying, setIsPlaying] = useState(isLooping);
  const cardWidthClass = fullBleed
    ? "w-[80vw] sm:w-[360px] lg:w-[400px]"
    : "w-[85%] sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]";

  const isHoveredRef = useRef(false);
  const hasKeyboardFocusRef = useRef(false);
  const isVisibleRef = useRef(true);
  const holdUntilRef = useRef(0);
  const positionRef = useRef(0);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    const item = track?.firstElementChild as HTMLElement | null;
    if (!track || !item) return 0;
    return item.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
  }, []);

  // Width of one full set of cards; the duplicated set starts exactly here.
  const getLoopWidth = useCallback(() => {
    const track = trackRef.current;
    const first = track?.children[0] as HTMLElement | undefined;
    const firstCopy = track?.children[items.length] as HTMLElement | undefined;
    return first && firstCopy ? firstCopy.offsetLeft - first.offsetLeft : 0;
  }, [items.length]);

  const updateButtons = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(isLooping || track.scrollLeft > 4);
    setCanNext(isLooping || track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, [isLooping]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateButtons();
    track.addEventListener("scroll", updateButtons, { passive: true });
    const resizeObserver = new ResizeObserver(updateButtons);
    resizeObserver.observe(track);
    return () => {
      track.removeEventListener("scroll", updateButtons);
      resizeObserver.disconnect();
    };
  }, [updateButtons]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setIsPlaying(false);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => {
      isVisibleRef.current = entry?.isIntersecting ?? true;
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isLooping || !isPlaying) return;
    let frame = 0;
    let last = performance.now();
    let wasPaused = true;

    const tick = (now: number) => {
      frame = requestAnimationFrame(tick);
      const track = trackRef.current;
      const dt = Math.min(now - last, 100);
      last = now;
      if (!track) return;

      const isPaused =
        isHoveredRef.current ||
        hasKeyboardFocusRef.current ||
        !isVisibleRef.current ||
        document.hidden ||
        now < holdUntilRef.current;
      if (isPaused) {
        wasPaused = true;
        return;
      }

      const loopWidth = getLoopWidth();
      if (!loopWidth) return;
      if (wasPaused) {
        positionRef.current = track.scrollLeft % loopWidth;
        wasPaused = false;
      }
      positionRef.current += (autoScroll * dt) / 1000;
      if (positionRef.current >= loopWidth) positionRef.current -= loopWidth;
      track.scrollLeft = positionRef.current;
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isLooping, isPlaying, autoScroll, getLoopWidth]);

  const holdAutoScroll = () => {
    holdUntilRef.current = performance.now() + HOLD_AFTER_INTERACTION_MS;
  };

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    const step = getStep();
    if (!track || !step) return;
    holdAutoScroll();
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

    if (!isLooping) {
      track.scrollBy({ left: direction * step, behavior });
      return;
    }

    // Snap to the next/previous card edge, wrapping into the duplicate set when going back from the start.
    let current = track.scrollLeft;
    const index = direction === 1 ? Math.floor(current / step + 0.01) + 1 : Math.ceil(current / step - 0.01) - 1;
    if (index < 0) {
      current += getLoopWidth();
      track.scrollLeft = current;
      track.scrollTo({ left: (Math.ceil(current / step - 0.01) - 1) * step, behavior });
      return;
    }
    track.scrollTo({ left: index * step, behavior });
  };

  const renderItem = (child: React.ReactNode, key: string, isCopy: boolean) => (
    <li
      key={key}
      inert={isCopy || undefined}
      aria-hidden={isCopy || undefined}
      className={cn("relative shrink-0", cardWidthClass, !isLooping && "snap-start")}
    >
      {child}
    </li>
  );

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      className={className}
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse") isHoveredRef.current = true;
      }}
      onPointerLeave={() => {
        isHoveredRef.current = false;
      }}
      onFocus={(e) => {
        if (e.target.matches(":focus-visible")) hasKeyboardFocusRef.current = true;
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) hasKeyboardFocusRef.current = false;
      }}
    >
      <ul
        ref={trackRef}
        tabIndex={0}
        aria-live={isPlaying ? "off" : "polite"}
        onPointerDown={holdAutoScroll}
        onTouchStart={holdAutoScroll}
        onWheel={holdAutoScroll}
        className={cn(
          "flex gap-8 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
          fullBleed ? "mx-[calc(50%-50vw)] px-5 sm:px-8" : "-mx-5 px-5 sm:mx-0 sm:px-0",
          !isLooping && "snap-x snap-mandatory scroll-px-5 sm:scroll-px-0"
        )}
      >
        {items.map((child, i) => renderItem(child, `item-${i}`, false))}
        {isLooping &&
          Array.from({ length: LOOP_SETS - 1 }, (_, set) =>
            items.map((child, i) => renderItem(child, `copy-${set}-${i}`, true))
          )}
      </ul>

      <div className="mt-8 flex justify-end gap-3">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canPrev}
          aria-label="Previous"
          className={buttonClass}
        >
          <ChevronLeft size={18} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canNext}
          aria-label="Next"
          className={buttonClass}
        >
          <ChevronRight size={18} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
