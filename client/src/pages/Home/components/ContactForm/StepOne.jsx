import styles from './ContactForm.module.css';

const PAIN_POINTS = [
  { id: 'manual_processes', label: 'Manual, repetitive internal processes' },
  { id: 'poor_website', label: 'Outdated or poorly converting website' },
  { id: 'disconnected_tools', label: "Disconnected tools that don't talk to each other" },
  { id: 'no_metrics', label: 'Lack of visibility into business metrics' },
  { id: 'slow_delivery', label: 'Slow delivery cycles / no automation' },
];

export default function StepOne({ data, onChange, onNext }) {
  function togglePoint(id) {
    const current = data.painPoints;
    const updated = current.includes(id)
      ? current.filter((p) => p !== id)
      : [...current, id];
    onChange('painPoints', updated);
  }

  return (
    <div className={styles.stepBody}>
      <div className={styles.stepHeadingGroup}>
        <p className={styles.stepEyebrow}>Step 1 of 3</p>
        <h3 className={`${styles.stepTitle} display`}>What's slowing you down?</h3>
        <p className={styles.stepHint}>Select all that apply — this helps us prepare before we talk.</p>
      </div>

      <div className={styles.checkGrid}>
        {PAIN_POINTS.map(({ id, label }) => {
          const checked = data.painPoints.includes(id);
          return (
            <button
              key={id}
              type="button"
              role="checkbox"
              aria-checked={checked}
              className={`${styles.checkItem} ${checked ? styles.checkItemActive : ''}`}
              onClick={() => togglePoint(id)}
            >
              <span className={styles.checkBox} aria-hidden="true">
                {checked && '✓'}
              </span>
              <span className={styles.checkLabel}>{label}</span>
            </button>
          );
        })}
      </div>

      <div className={styles.stepActions}>
        <button
          type="button"
          className={`${styles.nextBtn} ${data.painPoints.length === 0 ? styles.btnDisabled : ''}`}
          onClick={onNext}
          disabled={data.painPoints.length === 0}
        >
          Continue
          <span className={styles.nextArrow} aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  );
}
