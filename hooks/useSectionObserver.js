import { useEffect, useState, useRef, useMemo } from 'react';

export function useSectionObserver(sectionIds = [], options = {}) {
  const [activeId, setActiveId] = useState(null);
  const observerRef = useRef(null);

  const stableIds = useMemo(() => [...sectionIds], [sectionIds]);
  const stableOptions = useMemo(() => ({ ...options }), [options]);

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleObserver, {
      root: null,
      rootMargin: '0px 0px -60% 0px',
      threshold: 0.1,
      ...stableOptions,
    });

    const elements = stableIds.map((id) => document.getElementById(id)).filter(Boolean);

    elements.forEach((element) => {
      observerRef.current.observe(element);
    });

    return () => {
      if (observerRef.current) {
        elements.forEach((element) => {
          observerRef.current.unobserve(element);
        });
        observerRef.current.disconnect();
      }
    };
  }, [stableIds, stableOptions]);

  return { activeId };
}
