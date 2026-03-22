import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { submitContactForm } from '../../../../services/api.js';
import { useToast } from '../../../../context/ToastContext.jsx';
import RevealWrapper from '../../../../components/ui/RevealWrapper/RevealWrapper.jsx';
import StepIndicator from './StepIndicator.jsx';
import StepOne from './StepOne.jsx';
import StepTwo from './StepTwo.jsx';
import StepThree from './StepThree.jsx';
import styles from './ContactForm.module.css';

const INITIAL_DATA = {
  painPoints: [],
  budget: '',
  name: '',
  email: '',
  company: '',
};

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? -50 : 50,
    opacity: 0,
    transition: { duration: 0.28, ease: [0.4, 0, 1, 1] },
  }),
};

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const { showToast } = useToast();

  function changeField(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function next() {
    setDir(1);
    setStep((s) => s + 1);
  }

  function back() {
    setDir(-1);
    setStep((s) => s - 1);
  }

  async function handleSubmit() {
    setStatus('loading');
    try {
      await submitContactForm(formData);
      setStatus('success');
      showToast("Message received. We'll be in touch within 24 hours.", 'success');
      // Reset after success
      setTimeout(() => {
        setStep(1);
        setDir(1);
        setFormData(INITIAL_DATA);
        setStatus('idle');
      }, 3500);
    } catch (err) {
      setStatus('error');
      const msg =
        err?.response?.data?.message ||
        'Something went wrong. Please try again or email us directly.';
      showToast(msg, 'error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  }

  return (
    <section id="contact" className={styles.section}>
      {/* Background accent */}
      <div className={styles.bgAccent} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        {/* Left — copy */}
        <div className={styles.copy}>
          <RevealWrapper>
            <p className={styles.copyEyebrow}>
              <span className={styles.eyebrowDot} />
              Start Here
            </p>
            <h2 className={`${styles.copyTitle} display`}>
              Let's build
              <br />
              something.
            </h2>
            <p className={styles.copyBody}>
              No pitches. No proposals you never asked for. Just a straight conversation
              about what you're trying to solve — and whether we're the right fit.
            </p>

            <div className={styles.copyStats}>
              {[
                { value: '24h', label: 'Response time' },
                { value: 'Free', label: 'Initial consultation' },
                { value: 'NDA', label: 'On request' },
              ].map(({ value, label }) => (
                <div key={label} className={styles.statItem}>
                  <span className={styles.statValue}>{value}</span>
                  <span className={styles.statLabel}>{label}</span>
                </div>
              ))}
            </div>
          </RevealWrapper>
        </div>

        {/* Right — form card */}
        <RevealWrapper delay={0.15} className={styles.formWrap}>
          <div className={styles.formCard}>
            {/* Corner decoration */}
            <div className={styles.cardCornerTL} aria-hidden="true" />
            <div className={styles.cardCornerBR} aria-hidden="true" />

            {/* Step indicator */}
            <StepIndicator step={step} totalSteps={3} />

            {/* Steps with AnimatePresence */}
            <div className={styles.stepsContainer}>
              <AnimatePresence mode="wait" custom={dir}>
                {step === 1 && (
                  <motion.div
                    key="step1"
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <StepOne data={formData} onChange={changeField} onNext={next} />
                  </motion.div>
                )}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <StepTwo
                      data={formData}
                      onChange={changeField}
                      onNext={next}
                      onBack={back}
                    />
                  </motion.div>
                )}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    custom={dir}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <StepThree
                      data={formData}
                      onChange={changeField}
                      onSubmit={handleSubmit}
                      onBack={back}
                      status={status}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </RevealWrapper>
      </div>

      {/* Phone contact */}
      <div style={{ paddingTop: '6rem' }}>
      <RevealWrapper delay={0.2}>
        <div className={`container ${styles.phoneSection}`}>
          <div className={styles.phoneDivider}>
            <span className={styles.phoneDividerLine} />
            <span className={styles.phoneDividerText}>or reach us directly</span>
            <span className={styles.phoneDividerLine} />
          </div>
          <div className={styles.phoneCard}>
            <div className={styles.phoneIcon} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
            </div>
            <div className={styles.phoneText}>
              <p className={styles.phoneLabel}>Call us</p>
              <a href="tel:9256678185" className={styles.phoneNumber}>
                (925) 667-8185
              </a>
            </div>
          </div>
        </div>
      </RevealWrapper>
      </div>
    </section>
  );
}
