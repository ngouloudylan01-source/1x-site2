import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const NAV_LINKS = [
  { label: 'Accueil', href: '#hero' },
  { label: 'Parcours', href: '#parcours' },
  { label: 'Discographie', href: '#disco' },
  { label: 'Charts', href: '#/charts' },
  { label: 'Lifestyle', href: '#/lifestyle' },
  { label: 'Actualités', href: '#actus' },
  { label: 'Certifications', href: '#certifs' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass border-b border-blood-600/20 py-2.5' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#hero" className="flex items-center group" aria-label="Retour à l'accueil">
          <Logo size="md" className="group-hover:scale-105 transition-transform duration-300" />
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-[13px] font-medium text-anthracite-200 hover:text-white transition-colors uppercase tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href="#ultra"
            className="px-4 py-2 bg-blood-600 text-white text-sm font-semibold rounded-sm hover:bg-blood-500 transition-all glow-red"
          >
            Rejoindre la 1X ULTRA
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

      {/* Menu mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="glass border-t border-blood-600/20 px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-anthracite-200 hover:text-blood-400 text-base font-medium uppercase tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#ultra"
            onClick={() => setMenuOpen(false)}
            className="mt-2 px-4 py-2.5 bg-blood-600 text-white text-sm font-semibold rounded-sm text-center"
          >
            Rejoindre la 1X ULTRA
          </a>
        </nav>
      </div>
    </header>
  );
}
