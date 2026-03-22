import styles from './ContactForm.module.css';

export default function StepIndicator({ step, totalSteps }) {
  return (
    <div className={styles.stepIndicator} role="progressbar" aria-valuenow={step} aria-valuemin={1} aria-valuemax={totalSteps}>
      {Array.from({ length: totalSteps }, (_, i) => {
        const n = i + 1;
        const isActive = n === step;
        const isDone = n < step;
        return (
          <div key={n} className={styles.stepPipWrap}>
            <div
              className={[
                styles.stepPip,
                isActive ? styles.pipActive : '',
                isDone ? styles.pipDone : '',
              ].filter(Boolean).join(' ')}
            >
              {isDone ? (
                <span className={styles.pipCheck} aria-label="Complete">✓</span>
              ) : (
                <span className={styles.pipNum}>{n}</span>
              )}
            </div>
            {n < totalSteps && (
              <div className={`${styles.pipConnector} ${isDone ? styles.connectorDone : ''}`} aria-hidden="true" />
            )}
          </div>
        );
      })}
    </div>
  );
}
