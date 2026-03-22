import { Link, useNavigate } from 'react-router-dom';
import RevealWrapper from '../../components/ui/RevealWrapper/RevealWrapper.jsx';
import Button from '../../components/ui/Button/Button.jsx';
import styles from './ServiceDetail.module.css';

const INCLUDES = [
  {
    title: 'Custom React / Next.js builds',
    desc: 'No templates, no page builders. Every component is purpose-built for your product.',
  },
  {
    title: 'CMS integration',
    desc: 'Webflow, Sanity, or Contentful — your team edits content without touching code.',
  },
  {
    title: 'Core Web Vitals performance',
    desc: 'LCP under 2s, no layout shift, perfect Lighthouse scores. SEO-ready from day one.',
  },
  {
    title: 'Conversion architecture',
    desc: 'Every page layout is designed around your funnel — not aesthetics alone.',
  },
  {
    title: 'Analytics & event tracking',
    desc: 'GA4, Plausible, or PostHog wired up so you know exactly what users are doing.',
  },
  {
    title: 'Handoff documentation',
    desc: 'Full component library docs and CMS guide so your team is never dependent on us.',
  },
];

const DELIVERABLES = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We map your goals, user flows, and technical requirements in a structured 90-minute session. Output: a clear spec document.',
  },
  {
    num: '02',
    title: 'Design',
    desc: 'High-fidelity Figma prototypes for all key pages. You approve every screen before development starts.',
  },
  {
    num: '03',
    title: 'Build & Launch',
    desc: 'Iterative sprints with weekly demos. QA, performance audit, and go-live — then 30 days of hypercare.',
  },
];

const TECH = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#a0a0b0' },
  { name: 'Webflow', color: '#4353FF' },
  { name: 'Sanity', color: '#F03E2F' },
  { name: 'Vercel', color: '#c0c0cc' },
  { name: 'Stripe', color: '#635BFF' },
];

export default function WebServicePage() {
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
              Web Design & Development
            </p>
            <h1 className={`${styles.heroTitle} display`}>
              Built to convert.
              <br />
              <span className={styles.heroAccent}>Not just to impress.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              We engineer digital experiences that do real work — driving sign-ups, sales, and trust.
              Every pixel is intentional. Every interaction earns its place.
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
            <h2 className={styles.ctaTitle}>Ready to build?</h2>
            <p className={styles.ctaSubtitle}>
              Tell us about your project and we'll respond within 24 hours.
            </p>
            <div className={styles.ctaButtons}>
              <Button size="lg" onClick={() => navigate('/contact')}>
                Start a Web Project
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
