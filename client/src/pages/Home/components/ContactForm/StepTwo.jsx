import styles from './ContactForm.module.css';

export const BUDGET_OPTIONS = [
  {
    id: 'under_3k',
    range: 'Under $3,000',
    desc: 'Quick wins & focused audits',
  },
  {
    id: '3k_8k',
    range: '$3,000 – $8,000',
    desc: 'Focused build or automation suite',
  },
  {
    id: '8k_20k',
    range: '$8,000 – $20,000',
    desc: 'Full web presence or complex automation',
  },
  {
    id: '20k_plus',
    range: '$20,000+',
    desc: "We're building something significant",
  },
];

export default function StepTwo({ data, onChange, onNext, onBack }) {
  return (
    <div className={styles.stepBody}>
      <div className={styles.stepHeadingGroup}>
        <p className={styles.stepEyebrow}>Step 2 of 3</p>
        <h3 className={`${styles.stepTitle} display`}>What's your project budget?</h3>
        <p className={styles.stepHint}>Pick the range that best fits your current scope.</p>
      </div>

      <div className={styles.radioGrid}>
        {BUDGET_OPTIONS.map(({ id, range, desc }) => {
          const selected = data.budget === id;
          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={selected}
              className={`${styles.radioCard} ${selected ? styles.radioCardActive : ''}`}
              onClick={() => onChange('budget', id)}
            >
              <div className={styles.radioIndicator} aria-hidden="true">
                {selected && <div className={styles.radioDot} />}
              </div>
              <div className={styles.radioContent}>
                <span className={styles.radioRange}>{range}</span>
                <span className={styles.radioDesc}>{desc}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className={styles.stepActions}>
        <button type="button" className={styles.backBtn} onClick={onBack}>
          ← Back
        </button>
        <button
          type="button"
          className={`${styles.nextBtn} ${!data.budget ? styles.btnDisabled : ''}`}
          onClick={onNext}
          disabled={!data.budget}
        >
          Continue
          <span className={styles.nextArrow} aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
