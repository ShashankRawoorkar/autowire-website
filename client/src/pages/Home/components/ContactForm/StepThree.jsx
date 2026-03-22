import { useState } from 'react';
import styles from './ContactForm.module.css';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function StepThree({ data, onChange, onSubmit, onBack, status }) {
  const [touched, setTouched] = useState({});

  function touch(field) {
    setTouched((t) => ({ ...t, [field]: true }));
  }

  const nameErr = touched.name && !data.name.trim();
  const emailErr = touched.email && !EMAIL_RE.test(data.email);
  const canSubmit = data.name.trim() && EMAIL_RE.test(data.email);

  return (
    <div className={styles.stepBody}>
      <div className={styles.stepHeadingGroup}>
        <p className={styles.stepEyebrow}>Step 3 of 3</p>
        <h3 className={`${styles.stepTitle} display`}>Let's get specific.</h3>
        <p className={styles.stepHint}>We'll respond within 24 hours — usually faster.</p>
      </div>

      <div className={styles.fieldGroup}>
        {/* Name */}
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="cf-name">
            Your name <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            type="text"
            autoComplete="name"
            className={`${styles.input} ${nameErr ? styles.inputError : ''}`}
            placeholder="Alex Chen"
            value={data.name}
            onChange={(e) => onChange('name', e.target.value)}
            onBlur={() => touch('name')}
            aria-invalid={nameErr}
            aria-describedby={nameErr ? 'cf-name-error' : undefined}
          />
          {nameErr && (
            <span id="cf-name-error" className={styles.fieldError} role="alert">
              Name is required.
            </span>
          )}
        </div>

        {/* Email */}
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="cf-email">
            Work email <span className={styles.required} aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            className={`${styles.input} ${emailErr ? styles.inputError : ''}`}
            placeholder="alex@company.com"
            value={data.email}
            onChange={(e) => onChange('email', e.target.value)}
            onBlur={() => touch('email')}
            aria-invalid={emailErr}
            aria-describedby={emailErr ? 'cf-email-error' : undefined}
          />
          {emailErr && (
            <span id="cf-email-error" className={styles.fieldError} role="alert">
              Please enter a valid email address.
            </span>
          )}
        </div>

        {/* Company */}
        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="cf-company">
            Company <span className={styles.optional}>(optional)</span>
          </label>
          <input
            id="cf-company"
            type="text"
            autoComplete="organization"
            className={styles.input}
            placeholder="Acme Inc."
            value={data.company}
            onChange={(e) => onChange('company', e.target.value)}
          />
        </div>
      </div>

      <div className={styles.stepActions}>
        <button type="button" className={styles.backBtn} onClick={onBack} disabled={status === 'loading'}>
          ← Back
        </button>
        <button
          type="button"
          className={`${styles.nextBtn} ${styles.submitBtn} ${(!canSubmit || status === 'loading') ? styles.btnDisabled : ''}`}
          onClick={onSubmit}
          disabled={!canSubmit || status === 'loading'}
          aria-label="Submit contact form"
        >
          {status === 'loading' ? (
            <>
              <span className={styles.spinner} aria-hidden="true" />
              Sending...
            </>
          ) : (
            <>
              Send It
              <span className={styles.nextArrow} aria-hidden="true">→</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
