'use client';

/**
 * AnimatedThumb.jsx (LTR only)
 * Mirrors native scrollbar thumb as a thin bar aligned to the CONTENT edge.
 * Accounts for browser differences via a UA-based config object; props can override.
 *
 * Recommended on the scroller: style={{ scrollbarGutter: 'stable both-edges' }}
 */

import { useEffect, useMemo, useState } from 'react';

function detectBrowser() {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  if (/firefox/i.test(ua)) return 'firefox';
  if (/edg\//i.test(ua)) return 'edge';
  if (/chrome|chromium/i.test(ua)) return 'chrome';
  if (/safari/i.test(ua)) return 'safari';
  return 'unknown';
}

function detectPlatform() {
  const ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
  if (/windows/i.test(ua)) return 'windows';
  if (/mac\s?os\s?x/i.test(ua)) return 'mac';
  if (/linux/i.test(ua)) return 'linux';
  return 'unknown';
}

export default function AnimatedThumb({
  containerRef,
  barWidthPx = 2,                  // 1–2 px looks best
  minThumbHeightPx: minOverride,   // optional explicit min override
  enableOpacity = true,
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [metrics, setMetrics] = useState({
    baseTopPx: 0,
    translateYPx: 0,
    heightPx: 0,
    rightOffsetPx: 0
  });

  // UA-based defaults in one object
  const browserConfig = useMemo(() => {
    const browser = detectBrowser();
    const platform = detectPlatform();

    // Sensible defaults from testing:
    // - Chrome/Edge reserve a bigger gutter feel; top/bottom 18 often matches visuals
    // - Firefox needs smaller outer pads + a tiny inner-track pad so ends align
    // - Safari generally overlays; treat as zero pads
    if (browser === 'firefox') {
      const isWin = platform === 'windows';
      const isMac = platform === 'mac';
      return {
        padTop: 10,
        padBottom: 10,
        innerTrackPad: 4,                  // extra shrink inside track so ends line up
        minThumb: isMac ? 18 : 20,
        gapFromContentEdge: 12               // px offset left of the native track into content
      };
    }
    if (browser === 'edge' || browser === 'chrome') {
      return {
        padTop: 18,
        padBottom: 18,
        innerTrackPad: 0,
        minThumb: 24,
        gapFromContentEdge: 0
      };
    }
    if (browser === 'safari') {
      return {
        padTop: 0,
        padBottom: 0,
        innerTrackPad: 0,
        minThumb: 18
      };
    }
    return {
      padTop: 0,
      padBottom: 0,
      innerTrackPad: 0,
      minThumb: 20
    };
  }, []);

  // Final values after applying optional prop overrides
  const padTop = browserConfig.padTop;
  const padBottom = browserConfig.padBottom;
  const innerTrackPad = browserConfig.innerTrackPad || 0;
  const minThumbHeightFinal = minOverride ?? browserConfig.minThumb;
  const gapFromContentEdge = browserConfig.gapFromContentEdge || 0;

  useEffect(() => {
    const scroller = containerRef?.current;
    if (!scroller) return;

    const wrapper = scroller.parentElement;
    const wrapperStyle = getComputedStyle(wrapper);
    if (wrapperStyle.position === 'static') wrapper.style.position = 'relative';

    function recompute() {
      // Measure the SCROLLER
      const containerHeight = scroller.clientHeight;
      const contentHeight = scroller.scrollHeight;
      const scrollTopValue = scroller.scrollTop;
      const scrollableRange = Math.max(1, contentHeight - containerHeight);

      const hasVerticalScrollbar = contentHeight > containerHeight;
      setIsVisible(hasVerticalScrollbar);

      // Track origin inside wrapper (+ top padding + half inner shrink to center it)
      const wrapperRect = wrapper.getBoundingClientRect();
      const scrollerRect = scroller.getBoundingClientRect();
      const baseTopPx =
        (scrollerRect.top - wrapperRect.top) + padTop + (innerTrackPad / 2);

      // Usable track height excludes outer pads and inner shrink
      const usableTrackHeight =
        Math.max(0, containerHeight - padTop - padBottom - innerTrackPad);

      // Thumb height proportional to *usable* track, clamped to min
      const proportionalHeight =
        (containerHeight / contentHeight) * usableTrackHeight;
      const heightPx = Math.max(minThumbHeightFinal, proportionalHeight);

      // Travel & position
      const maxTravel = Math.max(0, usableTrackHeight - heightPx);
      const translateYPx = hasVerticalScrollbar
        ? (scrollTopValue / scrollableRange) * maxTravel
        : 0;

      // Horizontal: pin to CONTENT edge so we never overlap the native thumb
      const insetFromWrapperRight = wrapperRect.right - scrollerRect.right;
      const scrollbarWidth = scroller.offsetWidth - scroller.clientWidth; // 0 if overlay
      const cs = getComputedStyle(scroller);
      const paddingRightPx = parseFloat(cs.paddingRight) || 0;

      const rightOffsetPx =
        insetFromWrapperRight + scrollbarWidth + paddingRightPx + gapFromContentEdge;

      setMetrics({
        baseTopPx: Math.round(baseTopPx),
        translateYPx: Math.round(translateYPx),
        heightPx: Math.round(heightPx),
        rightOffsetPx: Math.round(rightOffsetPx)
      });
    }

    // rAF scroll + resize/content observers
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
  }, [containerRef, gapFromContentEdge, padTop, padBottom, innerTrackPad, minThumbHeightFinal]);

  return (
    <div
      aria-hidden="true"
      className={`absolute pointer-events-none top-0 ${enableOpacity ? (isVisible ? 'opacity-60' : 'opacity-0') : ''
        }`}
      style={{
        right: `${metrics.rightOffsetPx}px`,
        top: `${metrics.baseTopPx}px`,
        transform: `translateY(${metrics.translateYPx}px)`,
        width: `${barWidthPx}px`,
        height: `${metrics.heightPx}px`,
        background: 'currentColor',     // theme via parent text- classes
        borderRadius: barWidthPx / 2,
        willChange: 'transform,height'
      }}
    />
  );
}
