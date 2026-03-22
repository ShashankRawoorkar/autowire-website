import { Link, useNavigate } from 'react-router-dom';
import RevealWrapper from '../../components/ui/RevealWrapper/RevealWrapper.jsx';
import Button from '../../components/ui/Button/Button.jsx';
import styles from './ServiceDetail.module.css';

const INCLUDES = [
  {
    title: 'Workflow audit',
    desc: 'We map every manual, repetitive process in your business and score them by automation ROI.',
  },
  {
    title: 'Zapier / Make / n8n flows',
    desc: 'Multi-step automations that connect your tools — no code required on your end.',
  },
  {
    title: 'OpenAI document pipelines',
    desc: 'AI-powered extraction, classification, and summarisation for documents, emails, and forms.',
  },
  {
    title: 'Airtable ops infrastructure',
    desc: 'Custom bases that serve as operational command centres your whole team can use.',
  },
  {
    title: 'Error handling & monitoring',
    desc: 'Every automation has failure alerts, retry logic, and a fallback path. Nothing silently breaks.',
  },
  {
    title: 'Handoff & documentation',
    desc: 'Full walkthrough of every flow with a maintenance guide so you\'re never left dependent on us.',
  },
];

const DELIVERABLES = [
  {
    num: '01',
    title: 'Audit',
    desc: 'Structured 90-minute session to map your current workflows, tools, and the tasks costing you the most time.',
  },
  {
    num: '02',
    title: 'Map & Approve',
    desc: 'We deliver a visual automation blueprint. You see every connection before we build a single trigger.',
  },
  {
    num: '03',
    title: 'Automate & Monitor',
    desc: 'Flows built and tested in staging, then deployed live. 30-day monitoring period included.',
  },
];

const TECH = [
  { name: 'Zapier', color: '#FF4A00' },
  { name: 'Make', color: '#6D00CC' },
  { name: 'n8n', color: '#EA4B71' },
  { name: 'OpenAI', color: '#10A37F' },
  { name: 'Airtable', color: '#FCB400' },
  { name: 'Supabase', color: '#3ECF8E' },
];

export default function AutomationServicePage() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Breadcrumb */}
        <Link to="/services" className={styles.breadcrumb}>
          <span className={styles.breadcrumbArrow}>←</span>
          Back to Services
        </Link>

        {/* Hero */}
        <RevealWrapper>
          <div className={styles.hero}>
            <p className={styles.serviceTag}>
              <span className={styles.tagDot} />
              Custom Automations
            </p>
            <h1 className={`${styles.heroTitle} display`}>
              Eliminate the work
              <br />
              <span className={styles.heroAccent}>that doesn't need a human.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Most businesses are haemorrhaging hours on tasks that a well-built automation handles in seconds.
              We find those tasks, build the systems, and hand them off with zero ongoing dependency.
            </p>
          </div>
        </RevealWrapper>

        {/* What's included */}
        <RevealWrapper delay={0.1}>
          <div className={styles.includesSection}>
            <p className={styles.includesLabel}>What's included</p>
            <ul className={styles.includesList}>
              {INCLUDES.map(({ title, desc }) => (
                <li key={title} className={styles.includesItem}>
                  <span className={styles.includesMark}>—</span>
                  <div className={styles.includesText}>
                    <span className={styles.includesTitle}>{title}</span>
                    <span className={styles.includesDesc}>{desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </RevealWrapper>

        {/* Deliverables */}
        <RevealWrapper delay={0.1}>
          <div className={styles.deliverablesSection}>
            <p className={styles.sectionEyebrow}>How it unfolds</p>
            <div className={styles.deliverablesGrid}>
              {DELIVERABLES.map(({ num, title, desc }) => (
                <div key={num} className={styles.deliverableCard}>
                  <p className={styles.deliverableNum}>{num}</p>
                  <h3 className={styles.deliverableTitle}>{title}</h3>
                  <p className={styles.deliverableDesc}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* Tech stack */}
        <RevealWrapper delay={0.1}>
          <div className={styles.techSection}>
            <p className={styles.sectionEyebrow}>Tools we use</p>
            <div className={styles.techStrip}>
              {TECH.map(({ name, color }) => (
                <span key={name} className={styles.techBadge}>
                  <span className={styles.techBadgeDot} style={{ background: color }} />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* CTA */}
        <RevealWrapper delay={0.1}>
          <div className={styles.ctaBlock}>
            <h2 className={styles.ctaTitle}>Let's audit your workflows.</h2>
            <p className={styles.ctaSubtitle}>
              Free 90-minute session. Walk away with a clear picture of your automation ROI.
            </p>
            <div className={styles.ctaButtons}>
              <Button size="lg" onClick={() => navigate('/contact')}>
                Book a Free Audit
              </Button>
              <Button variant="ghost" size="lg" onClick={() => navigate('/services')}>
                See Other Services
              </Button>
            </div>
          </div>
        </RevealWrapper>
      </div>
    </div>
  );
}
