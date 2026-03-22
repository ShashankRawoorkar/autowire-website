import SectionHeading from '../../../../components/ui/SectionHeading/SectionHeading.jsx';
import RevealWrapper from '../../../../components/ui/RevealWrapper/RevealWrapper.jsx';
import ServiceCard from './ServiceCard.jsx';
import styles from './Services.module.css';

const SERVICES = [
  {
    id: 'web',
    to: '/services/web',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
        <path d="M7 8l3 3-3 3" />
        <path d="M13 14h4" />
      </svg>
    ),
    label: 'Web Design & Development',
    description:
      "Conversion-architected sites and apps. We don't do templates — every pixel serves a purpose, every interaction earns its keep.",
    bullets: [
      'Custom React / Next.js builds',
      'CMS integration (Webflow, Sanity)',
      'Core Web Vitals obsession',
    ],
  },
  {
    id: 'automation',
    to: '/services/automation',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    label: 'Custom Automations',
    description:
      'The hidden leverage in your business. We map your workflows and eliminate every step that shouldn\'t require a human.',
    bullets: [
      'Zapier, Make, n8n orchestration',
      'OpenAI-powered document pipelines',
      'Airtable ops infrastructure',
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <RevealWrapper>
          <SectionHeading
            eyebrow="What We Build"
            title="Two disciplines.
One compounding outcome."
            subtitle="Whether you need a site that converts or systems that run themselves — both are more powerful together."
          />
        </RevealWrapper>

        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <RevealWrapper key={service.id} delay={i * 0.15}>
              <ServiceCard {...service} index={i} />
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
