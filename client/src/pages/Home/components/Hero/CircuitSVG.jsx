import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './CircuitSVG.module.css';

const PATHS = [
  // Top-right cluster
  { d: 'M 1400 60 L 1180 60 L 1180 140 L 1020 140', delay: 0 },
  { d: 'M 1400 180 L 1240 180 L 1240 100 L 1320 100 L 1320 20', delay: 0.2 },
  { d: 'M 1060 140 L 1060 220 L 1160 220 L 1160 300', delay: 0.35 },
  { d: 'M 1400 320 L 1300 320 L 1300 240 L 1180 240', delay: 0.15 },
  { d: 'M 1400 440 L 1200 440 L 1200 380 L 1080 380', delay: 0.5 },
  { d: 'M 1320 20 L 1400 20', delay: 0.6 },
  // Bottom-left cluster
  { d: 'M 0 580 L 220 580 L 220 500 L 360 500', delay: 0.1 },
  { d: 'M 0 680 L 160 680 L 160 600 L 300 600 L 300 520', delay: 0.3 },
  { d: 'M 360 500 L 360 420 L 260 420 L 260 340', delay: 0.45 },
  { d: 'M 0 760 L 120 760 L 120 680', delay: 0.2 },
  { d: 'M 220 580 L 220 660 L 80 660 L 80 740 L 0 740', delay: 0.55 },
  // Subtle center-right trace
  { d: 'M 1400 550 L 1350 550 L 1350 620 L 1280 620 L 1280 700 L 1400 700', delay: 0.4 },
];

// Junction dots placed at path corners
const DOTS = [
  { cx: 1180, cy: 60 },
  { cx: 1180, cy: 140 },
  { cx: 1020, cy: 140 },
  { cx: 1240, cy: 180 },
  { cx: 1240, cy: 100 },
  { cx: 1320, cy: 100 },
  { cx: 1060, cy: 140 },
  { cx: 1060, cy: 220 },
  { cx: 1160, cy: 220 },
  { cx: 1300, cy: 320 },
  { cx: 1300, cy: 240 },
  { cx: 1200, cy: 380 },
  { cx: 220, cy: 580 },
  { cx: 220, cy: 500 },
  { cx: 160, cy: 680 },
  { cx: 160, cy: 600 },
  { cx: 300, cy: 600 },
  { cx: 360, cy: 500 },
  { cx: 360, cy: 420 },
  { cx: 260, cy: 420 },
  { cx: 220, cy: 660 },
  { cx: 1350, cy: 550 },
  { cx: 1350, cy: 620 },
  { cx: 1280, cy: 620 },
  { cx: 1280, cy: 700 },
];

// Larger node circles at terminals
const NODES = [
  { cx: 1020, cy: 140 },
  { cx: 1160, cy: 300 },
  { cx: 360, cy: 500 },
  { cx: 260, cy: 340 },
  { cx: 120, cy: 680 },
  { cx: 1080, cy: 380 },
];

export default function CircuitSVG() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '0px' });

  return (
    <svg
      ref={ref}
      className={styles.svg}
      viewBox="0 0 1400 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {/* Faint grid */}
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="rgba(0,212,255,0.04)"
            strokeWidth="0.5"
          />
        </pattern>

        {/* Glow filter */}
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <rect width="1400" height="800" fill="url(#grid)" />

      {/* Animated circuit traces */}
      {PATHS.map(({ d, delay }, i) => (
        <motion.path
          key={i}
          d={d}
          stroke="#00d4ff"
          strokeWidth="1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={inView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{
            pathLength: {
              duration: 1.8,
              delay,
              ease: [0.16, 1, 0.3, 1],
            },
            opacity: {
              duration: 0.3,
              delay,
            },
          }}
        />
      ))}

      {/* Junction dots */}
      {DOTS.map(({ cx, cy }, i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="2"
          fill="#00d4ff"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.7, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.4 + i * 0.02 }}
        />
      ))}

      {/* Terminal nodes */}
      {NODES.map(({ cx, cy }, i) => (
        <motion.circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          fill="none"
          stroke="#00d4ff"
          strokeWidth="1.5"
          filter="url(#glow)"
          initial={{ opacity: 0, scale: 0 }}
          animate={inView ? { opacity: 0.9, scale: 1 } : {}}
          transition={{
            duration: 0.5,
            delay: 0.6 + i * 0.08,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
      ))}
    </svg>
  );
}
