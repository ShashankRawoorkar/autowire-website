import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMagneticHover } from '../../../../hooks/useMagneticHover.js';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ icon, label, description, bullets, to }) {
  const { ref, springX, springY, handlers } = useMagneticHover(14);
  const navigate = useNavigate();

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      style={{ x: springX, y: springY, cursor: 'pointer' }}
      {...handlers}
      onClick={() => navigate(to)}
      whileHover={{ scale: 1.01 }}
      transition={{ scale: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
      role="button"
      tabIndex={0}
      aria-label={`Learn more about ${label}`}
      onKeyDown={(e) => e.key === 'Enter' && navigate(to)}
    >
      {/* Corner accent */}
      <div className={styles.cornerTL} aria-hidden="true" />
      <div className={styles.cornerBR} aria-hidden="true" />

      {/* Icon */}
      <div className={styles.iconWrap} aria-hidden="true">
        {icon}
      </div>

      {/* Label */}
      <h3 className={`${styles.label} display`}>{label}</h3>

      {/* Description */}
      <p className={styles.description}>{description}</p>

      {/* Bullets */}
      <ul className={styles.bullets}>
        {bullets.map((b) => (
          <li key={b} className={styles.bullet}>
            <span className={styles.bulletDash} aria-hidden="true">—</span>
            {b}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className={styles.cta}>
        <span>Learn more</span>
        <span className={styles.ctaArrow} aria-hidden="true">→</span>
      </div>

      {/* Hover glow border overlay */}
      <div className={styles.glowBorder} aria-hidden="true" />
    </motion.div>
  );
}
