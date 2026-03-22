import { useState, useEffect } from 'react';

/**
 * Returns `true` when the page has been scrolled past `threshold` pixels.
 * Used for the navbar scroll-state transition.
 */
export function useScrollProgress(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > threshold);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // check on mount
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
