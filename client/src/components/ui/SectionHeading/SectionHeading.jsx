import styles from './SectionHeading.module.css';

/**
 * @param {{ eyebrow?: string, title: string, subtitle?: string, align?: 'left'|'center' }}
 */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
}) {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      {eyebrow && (
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDot} />
          {eyebrow}
        </p>
      )}
      <h2 className={`${styles.title} display`}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
