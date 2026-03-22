import { useRef } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

/**
 * Magnetic hover effect — card follows cursor within its bounds.
 * Automatically disabled on touch devices.
 *
 * @param {number} strength - Max translation in px (default 18)
 * @returns {{ ref, springX, springY, handlers }}
 */
export function useMagneticHover(strength = 18) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 160, damping: 18, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 160, damping: 18, mass: 0.1 });

  const isTouchDevice =
    typeof window !== 'undefined' &&
    ('ontouchstart' in window || navigator.maxTouchPoints > 0);

  function handleMouseMove(e) {
    if (!ref.current || isTouchDevice) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalized offset: -1 to 1
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    x.set(normX * strength);
    y.set(normY * strength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return {
    ref,
    springX,
    springY,
    handlers: { onMouseMove: handleMouseMove, onMouseLeave: handleMouseLeave },
  };
}
