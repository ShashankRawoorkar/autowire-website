import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const FOOTER_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Process',  to: '/process' },
  { label: 'Tech',     to: '/tech' },
  { label: 'Contact',  to: '/contact' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: '#', icon: 'in' },
  { label: 'X / Twitter', href: '#', icon: 'x' },
  { label: 'GitHub', href: '#', icon: 'gh' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Logo */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.bracket}>[</span>autowire<span className={styles.bracket}>]</span>
            </Link>
            <p className={styles.tagline}>
              Systems that work while you sleep.
            </p>
          </div>

          {/* Socials */}
          <div className={styles.socials}>
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={icon}
                href={href}
                className={styles.socialLink}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            &copy; {year} Autowire. All rights reserved.
          </p>
          <div className={styles.status}>
            <span className={styles.statusDot} aria-hidden="true" />
            <span className={styles.statusText}>Currently accepting clients</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
