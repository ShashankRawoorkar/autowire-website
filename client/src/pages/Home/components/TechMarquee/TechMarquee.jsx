import styles from './TechMarquee.module.css';

const TECHS = [
  { name: 'Zapier', category: 'automation' },
  { name: 'React', category: 'frontend' },
  { name: 'Make', category: 'automation' },
  { name: 'n8n', category: 'automation' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'Webflow', category: 'design' },
  { name: 'Airtable', category: 'data' },
  { name: 'OpenAI', category: 'ai' },
  { name: 'Sanity', category: 'cms' },
  { name: 'Vercel', category: 'infra' },
  { name: 'Stripe', category: 'payments' },
  { name: 'Supabase', category: 'data' },
];

// Duplicate for seamless loop
const ITEMS = [...TECHS, ...TECHS];

export default function TechMarquee() {
  return (
    <section id="tech" className={styles.section} aria-label="Technologies we work with">
      {/* Label */}
      <div className={styles.labelRow}>
        <span className={styles.label}>Integrated with the tools you already love</span>
      </div>

      {/* Marquee track */}
      <div className={styles.track}>
        <div className={styles.inner}>
          {ITEMS.map(({ name, category }, i) => (
            <div key={`${name}-${i}`} className={styles.item}>
              <span className={styles.itemDot} aria-hidden="true" />
              <span className={styles.itemName}>{name}</span>
              <span className={styles.itemCategory}>{category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
