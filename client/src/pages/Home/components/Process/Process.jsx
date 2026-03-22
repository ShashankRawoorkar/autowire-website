import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionHeading from '../../../../components/ui/SectionHeading/SectionHeading.jsx';
import RevealWrapper from '../../../../components/ui/RevealWrapper/RevealWrapper.jsx';
import styles from './Process.module.css';

const STEPS = [
  {
    num: '01',
    title: 'Audit',
    desc: 'We dissect your current stack, conversion funnel, and ops bottlenecks in a structured 90-minute discovery session. No fluff, no NDAs before results.',
    duration: '1–2 days',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'A concrete roadmap — deliverables, timelines, and ROI projections. No vague scope, no surprises. You approve every line before a pixel is painted.',
    duration: '3–5 days',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Iterative sprints with weekly demos. You see real progress; we course-correct in real time. No black boxes, no "trust us" delays.',
    duration: 'Varies by scope',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Go-live plus 30-day hypercare. Systems handed off with documentation your team can actually use. We\'re available when it matters most.',
    duration: '30-day support',
  },
];

export default function Process() {
  const lineRef = useRef(null);
  const lineInView = useInView(lineRef, { once: true, margin: '-80px 0px' });

  return (
    <section id="process" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <RevealWrapper>
          <SectionHeading
            eyebrow="How It Works"
            title="Audit to launch. No dead ends."
            subtitle="Four phases. Clear owners. Measurable outcomes at every step."
          />
        </RevealWrapper>

        <div className={styles.timeline}>
          {/* Vertical connector line */}
          <div className={styles.lineTrack} ref={lineRef} aria-hidden="true">
            <motion.div
              className={styles.lineFill}
              initial={{ scaleY: 0 }}
              animate={lineInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top' }}
            />
          </div>

          {/* Steps */}
          <div className={styles.steps}>
            {STEPS.map((step, i) => (
              <RevealWrapper key={step.num} delay={0.1 + i * 0.15}>
                <div className={styles.step}>
                  {/* Node */}
                  <div className={styles.nodeWrap} aria-hidden="true">
                    <div className={styles.node}>
                      <span className={styles.nodeNum}>{step.num}</span>
                    </div>
                    <div className={styles.nodeGlow} />
                  </div>

                  {/* Content */}
                  <div className={styles.stepContent}>
                    <div className={styles.stepHeader}>
                      <h3 className={`${styles.stepTitle} display`}>{step.title}</h3>
                      <span className={styles.stepDuration}>{step.duration}</span>
                    </div>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
