'use client';

/**
 * AnimatedProgressRail.jsx (LTR only)
 * A thin 0→100% scroll progress rail pinned to the CONTENT edge (left of native scrollbar).
 * Works consistently across Chrome/Edge/Firefox since we avoid native thumb math entirely.
 *
 * Usage:
 *   const scrollRef = useRef(null);
 *   <div className="relative">
 *     <div
 *       ref={scrollRef}
 *       className="h-[600px] overflow-auto"
 *       style={{ scrollbarGutter: 'stable both-edges' }} // recommended
 *     >
 *       {...long content...}
 *     </div>
 *     <AnimatedProgressRail containerRef={scrollRef} />
 *   </div>
 */

import { useEffect, useState } from 'react';

export default function AnimatedProgressRail({
  containerRef,
  barWidthPx = 2,            // 1–2px looks best
  gapFromContentEdge = 8,    // distance from the content edge (keeps it clear of the native track)
  minBarPadTopPx = 8,        // small visual padding so the bar doesn’t touch the very top
  minBarPadBottomPx = 8,     // same for bottom
  minBarLengthPx = 12,       // minimum bar length when just starting to scroll
  enableOpacity = true,
  withGradientTails = true,  // add tiny fade tails for a polished look
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    baseTopPx: 0,        // where the progress track starts inside the wrapper
    heightPx: 0,         // current progress height
    rightOffsetPx: gapFromContentEdge
  });

  useEffect(() => {
    const scroller = containerRef?.current;
    if (!scroller) return;

    const wrapper = scroller.parentElement;
    const wrapperStyle = getComputedStyle(wrapper);
    if (wrapperStyle.position === 'static') wrapper.style.position = 'relative';

    function recompute() {
      // Measure the SCROLLER (not window)
      const viewportHeight = scroller.clientHeight;
      const contentHeight = scroller.scrollHeight;
      const scrollTopValue = scroller.scrollTop;
      const scrollableRange = Math.max(1, contentHeight - viewportHeight);

      const hasVerticalScrollbar = contentHeight > viewportHeight;
      setIsVisible(hasVerticalScrollbar);

      // Track origin inside wrapper (top of scroller)
      const wrapperRect = wrapper.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      const baseTopPx = (scrollerRect.top - wrapperRect.top) + minBarPadTopPx;

      // Usable track height for progress growth (minus our cosmetic top/bottom pads)
      const usableTrackHeight = Math.max(0, viewportHeight - minBarPadTopPx - minBarPadBottomPx);

      // Scroll percent → grow bar height from 0 → usableTrackHeight
      const progress = Math.min(1, Math.max(0, scrollTopValue / scrollableRange));
      const grownHeight = progress * usableTrackHeight;

      // Ensure a small minimum so the bar is visible early
      const heightPx = Math.max(minBarLengthPx, grownHeight);

      // Pin to the CONTENT edge (not the native track) so it never overlaps the thumb.
      // Account for wrapper→scroller inset, native scrollbar gutter, and scroller padding-right.
      const insetFromWrapperRight = wrapperRect.right - scrollerRect.right;
      const scrollbarWidth = scroller.offsetWidth - scroller.clientWidth; // 0 for overlay scrollbars
      const cs = getComputedStyle(scroller);
      const paddingRightPx = parseFloat(cs.paddingRight) || 0;

      const rightOffsetPx =
        insetFromWrapperRight + scrollbarWidth + paddingRightPx + gapFromContentEdge;

      setMetrics({
        baseTopPx: Math.round(baseTopPx),
        heightPx: Math.round(heightPx),
        rightOffsetPx: Math.round(rightOffsetPx)
      });
    }

    // rAF scroll + ResizeObserver for smooth/accurate updates
    let rafId = null;
    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        recompute();
      });
    };

    const resizeObserver = new ResizeObserver(recompute);
    resizeObserver.observe(scroller);

    recompute();
    scroller.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', recompute);

    return () => {
      scroller.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', recompute);
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, [containerRef, gapFromContentEdge, minBarPadTopPx, minBarPadBottomPx, minBarLengthPx]);

  return (
    <>
      {/* Core rail */}
      <div
        aria-hidden="true"
        className={`absolute pointer-events-none ${enableOpacity ? (isVisible ? 'opacity-60' : 'opacity-0') : ''
          }`}
        style={{
          right: `${metrics.rightOffsetPx}px`,
          top: `${metrics.baseTopPx}px`,
          width: `${barWidthPx}px`,
          height: `${metrics.heightPx}px`,
          background: 'currentColor',      // theme via parent text- classes
          borderRadius: barWidthPx / 2,
          willChange: 'height'
        }}
      />
      {withGradientTails && (
        <>
          {/* Top fade */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              right: `${metrics.rightOffsetPx}px`,
              top: `${Math.max(0, metrics.baseTopPx - 12)}px`,
              width: `${barWidthPx}px`,
              height: `12px`,
              background: 'linear-gradient(to bottom, currentColor, transparent)'
            }}
          />
          {/* Bottom fade */}
          <div
            aria-hidden="true"
            className="absolute pointer-events-none"
            style={{
              right: `${metrics.rightOffsetPx}px`,
              top: `calc(${metrics.baseTopPx}px + ${metrics.heightPx}px)`,
              width: `${barWidthPx}px`,
              height: `12px`,
              background: 'linear-gradient(to bottom, currentColor, transparent)'
            }}
          />
        </>
      )}
    </>
  );
}
