import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/ui/Button/Button.jsx';
import CircuitSVG from './CircuitSVG.jsx';
import styles from './Hero.module.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section id="hero" className={styles.hero}>
      {/* Layered backgrounds */}
      <div className={styles.meshGradient} aria-hidden="true" />
      <div className={styles.radialGlow} aria-hidden="true" />
      <CircuitSVG />

      {/* Content */}
      <div className={`container ${styles.content}`}>
        <motion.div
          className={styles.inner}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className={styles.eyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Digital Agency · Web Dev · Automation</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 variants={itemVariants} className={`${styles.headline} display`}>
            Auto Wire
          </motion.h1>

          {/* Subline */}
          <motion.p variants={itemVariants} className={styles.subline}>
            We engineer the systems, automations, and digital presence
            that compound ROI — while you focus on the work that matters.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className={styles.ctas}>
            <Button size="lg" onClick={() => navigate('/contact')}>
              Start a Project
            </Button>
            <Button variant="ghost" size="lg" onClick={() => navigate('/process')}>
              How We Work
            </Button>
          </motion.div>

          {/* Metrics */}
          <motion.div variants={itemVariants} className={styles.metrics}>
            {[
              { value: '3×', label: 'avg. efficiency gain' },
              { value: '48h', label: 'audit turnaround' },
              { value: '100%', label: 'bespoke builds' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.metric}>
                <span className={styles.metricValue}>{value}</span>
                <span className={styles.metricLabel}>{label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator removed — no longer a scrollable page */}
    </section>
  );
}
