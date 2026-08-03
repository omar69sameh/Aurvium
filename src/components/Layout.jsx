import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from './Icon';

export default function Layout({ children }) {
  const location = useLocation();
  const [isScrolling, setIsScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const idleTimer = useRef(null);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/approach', label: 'Approach' },
    { to: '/work', label: 'Notes' },
    { to: '/about', label: 'About' },
  ];

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // The header always stays put; it just fades back while the page is moving
  // and returns to full opacity once scrolling stops (or on hover/focus).
  // Registered once, throttled to one read per animation frame.
  useEffect(() => {
    const handleScroll = () => {
      // Cheap state set (no layout reads here), so no rAF throttle needed.
      setIsScrolling(true);
      window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => setIsScrolling(false), 500);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.clearTimeout(idleTimer.current);
    };
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <header
        className={`bg-[#FDF8EC]/70 backdrop-blur-xl sticky top-0 z-50 border-b border-outline-variant/40 transition-opacity duration-300 ease-out hover:opacity-100 focus-within:opacity-100 ${
          isScrolling && !mobileMenuOpen ? 'opacity-40' : 'opacity-100'
        }`}
      >
        <div className="flex justify-between items-center w-full px-gutter max-w-max_width mx-auto h-20">
          <Link to="/" className="flex items-center gap-4 group" aria-label="Aurvium Home">
            <svg width="32" height="37" viewBox="0 0 72 84" fill="none" className="transition-transform duration-300 group-hover:scale-105" aria-hidden="true">
              <polygon points="36,1 65,35 7,35" fill="#1A1916" />
              <polygon points="7,49 65,49 36,83" fill="#1A1916" />
              <rect x="2" y="39.3" width="68" height="3.4" fill="#B8922A" />
            </svg>
            <div className="flex flex-col">
              <span className="font-display-lg text-headline-md tracking-tighter text-on-surface leading-none">AURVIUM</span>
              <span className="font-eyebrow-mono text-[9px] tracking-[0.24em] uppercase text-stone leading-none mt-1">Finance Architecture</span>
            </div>
          </Link>
          
          <nav className="hidden md:flex items-center gap-stack_lg" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-body-md text-body-md uppercase tracking-wider transition-colors duration-300 pb-1 relative ${
                    isActive
                      ? 'text-primary font-bold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-primary'
                      : 'text-on-surface-variant hover:text-primary'
                  }`}
                  to={link.to}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-full border border-outline-variant text-on-surface transition-colors duration-300 hover:border-primary hover:text-primary"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            <Icon name={mobileMenuOpen ? 'close' : 'menu'} size={24} />
          </button>

          <Link
            to="/contact"
            className="btn-pill btn-primary hidden md:inline-flex"
          >
            Get in Touch
          </Link>
        </div>

        <div
          id="mobile-navigation"
          className={`md:hidden border-t border-outline-variant/50 bg-[#FDF8EC]/95 backdrop-blur-xl transition-all duration-300 overflow-hidden ${
            mobileMenuOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="px-gutter py-stack_md flex flex-col gap-stack_md" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link
                  key={link.to}
                  aria-current={isActive ? 'page' : undefined}
                  className={`font-body-md text-body-md uppercase tracking-wider transition-colors duration-300 ${
                    isActive ? 'text-primary font-bold' : 'text-on-surface-variant hover:text-primary'
                  }`}
                  to={link.to}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              to="/contact"
              className="btn-pill btn-primary justify-center mt-2"
            >
              Get in Touch
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">{children}</main>

      <footer className="bg-inverse-surface dark:bg-on-background">
        <div className="w-full py-section_v_padding px-gutter max-w-max_width mx-auto flex flex-col gap-stack_lg">
          <div className="flex flex-col md:flex-row justify-between items-start gap-stack_lg">
            <div className="flex flex-col gap-stack_md">
              <Link to="/" className="flex items-center gap-4 group" aria-label="Aurvium Home Footer">
                <svg width="28" height="32" viewBox="0 0 72 84" fill="none" aria-hidden="true">
                  <polygon points="36,1 65,35 7,35" fill="#EDE8DC" />
                  <polygon points="7,49 65,49 36,83" fill="#EDE8DC" />
                  <rect x="2" y="39.3" width="68" height="3.4" fill="#D4AF5A" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-display-lg text-headline-md text-surface-bright leading-none">AURVIUM</span>
                  <span className="font-eyebrow-mono text-[9px] tracking-[0.24em] uppercase text-surface-variant/60 leading-none mt-1">Finance Architecture</span>
                </div>
              </Link>
              <p className="font-body-md text-surface-variant/70 max-w-xs">The channel through which financial value flows.</p>
            </div>

            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex flex-col gap-2">
                <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-tertiary-fixed">Site</p>
                <Link className="font-eyebrow-mono text-eyebrow-mono uppercase text-surface-variant hover:text-tertiary-fixed transition-colors" to="/services">Services</Link>
                <Link className="font-eyebrow-mono text-eyebrow-mono uppercase text-surface-variant hover:text-tertiary-fixed transition-colors" to="/approach">Approach</Link>
                <Link className="font-eyebrow-mono text-eyebrow-mono uppercase text-surface-variant hover:text-tertiary-fixed transition-colors" to="/work">Notes</Link>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-tertiary-fixed">Company</p>
                <Link className="font-eyebrow-mono text-eyebrow-mono uppercase text-surface-variant hover:text-tertiary-fixed transition-colors" to="/about">About</Link>
                <Link className="font-eyebrow-mono text-eyebrow-mono uppercase text-surface-variant hover:text-tertiary-fixed transition-colors" to="/contact">Contact</Link>
                <a className="font-eyebrow-mono text-eyebrow-mono uppercase text-surface-variant hover:text-tertiary-fixed transition-colors" href="mailto:hello@aurvium.com">hello@aurvium.com</a>
              </div>
            </div>
          </div>

          <div className="w-full h-px bg-tertiary/40"></div>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-stack_md text-surface-variant/60">
            <p className="font-eyebrow-mono text-eyebrow-mono uppercase text-xs">© 2026 Aurvium. All rights reserved.</p>
            <Link to="/privacy" className="font-eyebrow-mono text-eyebrow-mono uppercase text-xs hover:text-tertiary-fixed transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
