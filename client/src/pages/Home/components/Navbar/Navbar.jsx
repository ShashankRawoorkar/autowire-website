import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useScrollProgress } from '../../../../hooks/useScrollProgress.js';
import Button from '../../../../components/ui/Button/Button.jsx';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Process',  to: '/process' },
  { label: 'Tech',     to: '/tech' },
  { label: 'Contact',  to: '/contact' },
];

export default function Navbar() {
  const scrolled = useScrollProgress(80);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        {/* Logo */}
        <Link to="/" className={styles.logo} aria-label="Autowire — home">
          <span className={styles.logoBracket}>[</span>
          <span className={styles.logoText}>autowire</span>
          <span className={styles.logoBracket}>]</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`${styles.navLink} ${pathname === to ? styles.navLinkActive : ''}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <div className={styles.ctaWrap}>
          <Button
            size="sm"
            onClick={() => navigate('/contact')}
            aria-label="Start a project"
          >
            Start a Project
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ''}`}>
        <ul className={styles.drawerList}>
          {NAV_LINKS.map(({ label, to }) => (
            <li key={to}>
              <Link
                to={to}
                className={`${styles.drawerLink} ${pathname === to ? styles.drawerLinkActive : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Button
              size="md"
              onClick={() => { setMenuOpen(false); navigate('/contact'); }}
              style={{ width: '100%' }}
            >
              Start a Project
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
