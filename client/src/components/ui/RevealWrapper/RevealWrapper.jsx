import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Wraps children in a fade-in-up animation triggered by Intersection Observer.
 *
 * @param {{ delay?: number, y?: number, duration?: number, once?: boolean, className?: string, children }}
 */
export default function RevealWrapper({
  children,
  delay = 0,
  y = 28,
  duration = 0.65,
  once = true,
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: '-60px 0px' });

  if (prefersReducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
