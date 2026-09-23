import { useEffect, useState } from 'react';
import { Menu, X, HeartHandshake } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Mon histoire', href: '#story' },
  { label: 'Objectifs', href: '#goals' },
  { label: 'Assistant IA', href: '#ai' },
  { label: 'Questions', href: '#faq' },
  { label: 'Soutenir', href: '#support' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-teal-500/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center group">
          <Logo size="md" className="group-hover:scale-105 transition-transform duration-300" />
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-ink-200 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#support"
            className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-400/40 text-white text-sm font-semibold rounded-sm hover:bg-teal-500/30 transition-all glow-warm"
          >
            <HeartHandshake className="w-4 h-4" />
            Soutenir
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass border-t border-teal-500/20 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ink-200 hover:text-teal-300 text-base font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#support"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-teal-500/20 border border-teal-400/40 text-white text-sm font-semibold rounded-sm"
          >
            <HeartHandshake className="w-4 h-4" />
            Soutenir le projet
          </a>
        </nav>
      </div>
    </header>
  );
}
