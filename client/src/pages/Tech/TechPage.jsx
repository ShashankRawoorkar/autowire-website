import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RevealWrapper from '../../components/ui/RevealWrapper/RevealWrapper.jsx';
import TechMarquee from '../Home/components/TechMarquee/TechMarquee.jsx';
import styles from './TechPage.module.css';

const CATEGORIES = ['All', 'Automation', 'Frontend', 'AI', 'CMS & Data', 'Infra'];

const TECHS = [
  {
    name: 'Zapier',
    monogram: 'Zp',
    category: 'Automation',
    color: '#FF4A00',
    desc: 'Connecting 5,000+ apps without writing a line of code.',
    detail: 'The backbone of our no-code automation stack. We use Zapier to wire together CRMs, email tools, forms, and databases so data flows automatically.',
  },
  {
    name: 'Make',
    monogram: 'Mk',
    category: 'Automation',
    color: '#6D00CC',
    desc: 'Visual multi-step automation with complex branching logic.',
    detail: 'When Zapier hits its limits, Make handles it. We build conditional flows, data transformations, and multi-branch automations with full visual control.',
  },
  {
    name: 'n8n',
    monogram: 'n8',
    category: 'Automation',
    color: '#EA4B71',
    desc: 'Self-hosted workflow orchestration for full data ownership.',
    detail: 'For clients who need automation power without vendor lock-in, n8n runs on your infrastructure with 400+ integrations and custom code nodes.',
  },
  {
    name: 'React',
    monogram: 'Re',
    category: 'Frontend',
    color: '#61DAFB',
    desc: 'Component-based UIs that scale from landing pages to apps.',
    detail: 'Our primary UI layer. We architect React apps with performance and maintainability in mind — proper state management, memoisation, and code splitting.',
  },
  {
    name: 'Next.js',
    monogram: 'Nx',
    category: 'Frontend',
    color: '#a0a0b0',
    desc: 'Production web apps with SSR, routing, and edge delivery.',
    detail: 'Most of our client web projects ship on Next.js. Server-side rendering, image optimisation, and the App Router give us speed out of the box.',
  },
  {
    name: 'Webflow',
    monogram: 'Wf',
    category: 'Frontend',
    color: '#4353FF',
    desc: 'No-code CMS sites with pixel-perfect design control.',
    detail: 'For content-heavy sites where clients need to self-manage, Webflow gives us design freedom with a CMS your team can actually use without developers.',
  },
  {
    name: 'OpenAI',
    monogram: 'Ai',
    category: 'AI',
    color: '#10A37F',
    desc: 'GPT-4 and embeddings powering document and data pipelines.',
    detail: 'We build AI features that actually ship: document summarisation, classification pipelines, semantic search, and structured data extraction from unstructured input.',
  },
  {
    name: 'Sanity',
    monogram: 'Sn',
    category: 'CMS & Data',
    color: '#F03E2F',
    desc: 'Structured content management with a real-time API.',
    detail: 'Our CMS of choice for complex content models. GROQ queries, portable text, and the Studio customisation make it a joy to work with for both devs and editors.',
  },
  {
    name: 'Airtable',
    monogram: 'At',
    category: 'CMS & Data',
    color: '#FCB400',
    desc: 'Ops databases your team can actually understand and use.',
    detail: 'We turn Airtable into operational command centres — project tracking, client portals, inventory systems — all with automations that keep data fresh.',
  },
  {
    name: 'Supabase',
    monogram: 'Sb',
    category: 'CMS & Data',
    color: '#3ECF8E',
    desc: 'Postgres backend-as-a-service with auth and real-time.',
    detail: 'When projects need a real database, Supabase gives us Postgres with row-level security, Edge Functions, and real-time subscriptions without the infra overhead.',
  },
  {
    name: 'Vercel',
    monogram: 'Vc',
    category: 'Infra',
    color: '#c0c0cc',
    desc: 'Zero-config deployments with global edge delivery.',
    detail: 'Every Next.js project we ship deploys to Vercel. Preview URLs per branch, instant rollbacks, and analytics built in — deployment is never a bottleneck.',
  },
  {
    name: 'Stripe',
    monogram: 'St',
    category: 'Infra',
    color: '#635BFF',
    desc: 'Payment infrastructure built for developer ergonomics.',
    detail: 'Subscriptions, one-time payments, invoicing, and customer portals. We integrate Stripe cleanly using webhooks and the Stripe SDK with proper error handling.',
  },
];

function TechCard({ name, monogram, category, color, desc, detail, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className={`${styles.card} ${expanded ? styles.cardExpanded : ''}`}
      layout
      onClick={() => setExpanded((e) => !e)}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { duration: 0.2 }, layout: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      onKeyDown={(e) => e.key === 'Enter' && setExpanded((v) => !v)}
    >
      {/* Logo monogram */}
      <div
        className={styles.logo}
        style={{
          background: `${color}1a`,
          border: `1px solid ${color}44`,
        }}
      >
        <span className={styles.monogram} style={{ color }}>{monogram}</span>
      </div>

      {/* Header row */}
      <div className={styles.cardHeader}>
        <div>
          <span className={styles.categoryTag}>{category}</span>
          <h3 className={`${styles.name} display`}>{name}</h3>
        </div>
        <span className={`${styles.expandIcon} ${expanded ? styles.expandIconOpen : ''}`} aria-hidden="true">+</span>
      </div>

      {/* Short desc */}
      <p className={styles.desc}>{desc}</p>

      {/* Expanded detail */}
      <AnimatePresence>
        {expanded && (
          <motion.p
            className={styles.detail}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '0.75rem' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            {detail}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function TechPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? TECHS
    : TECHS.filter((t) => t.category === activeCategory);

  return (
    <div className={styles.page}>
      {/* Background glow */}
      <div className={styles.bgGlow} aria-hidden="true" />

      <div className={`container ${styles.content}`}>
        {/* Header */}
        <RevealWrapper>
          <div className={styles.header}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowDot} />
              Our Stack
            </p>
            <h1 className={`${styles.title} display`}>
              Tools we trust.
              <br />
              <span className={styles.titleAccent}>Results we guarantee.</span>
            </h1>
            <p className={styles.subtitle}>
              We don't chase every new framework. We go deep on the tools that reliably deliver —
              and we know exactly when to use each one.
            </p>
          </div>
        </RevealWrapper>

        {/* Category filter */}
        <RevealWrapper delay={0.1}>
          <div className={styles.filters} role="tablist" aria-label="Filter by category">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                {activeCategory === cat && (
                  <motion.span
                    className={styles.filterPill}
                    layoutId="filterPill"
                    transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
              </button>
            ))}
          </div>
        </RevealWrapper>

        {/* Count */}
        <RevealWrapper delay={0.15}>
          <p className={styles.count}>
            <span className={styles.countNum}>{filtered.length}</span>
            {' '}integration{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
          </p>
        </RevealWrapper>

        {/* Grid */}
        <motion.div className={styles.grid} layout>
          <AnimatePresence mode="popLayout">
            {filtered.map((tech, i) => (
              <motion.div
                key={tech.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              >
                <TechCard {...tech} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats bar */}
        <RevealWrapper delay={0.1}>
          <div className={styles.statsBar}>
            {[
              { value: '12+', label: 'Integrated tools' },
              { value: '5', label: 'Specialisation areas' },
              { value: '3×', label: 'Avg. efficiency gain' },
            ].map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <span className={styles.statValue}>{value}</span>
                <span className={styles.statLabel}>{label}</span>
              </div>
            ))}
          </div>
        </RevealWrapper>
      </div>

      {/* Marquee strip */}
      <div className={styles.marqueeWrap}>
        <TechMarquee />
      </div>
    </div>
  );
}
