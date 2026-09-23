import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { LANGUAGES, useLanguage } from '@/i18n';

const NAV_LINKS = [
  { key: 'story', href: '#story' },
  { key: 'goals', href: '#goals' },
  { key: 'projects', href: '#projects' },
  { key: 'assistant', href: '#ai' },
  { key: 'faq', href: '#faq' },
] as const;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const languagePicker = (
    <label className="flex items-center gap-2 text-xs text-ink-400">
      <span className="sr-only">{t.languageLabel}</span>
      <select
        value={language}
        onChange={(event) => setLanguage(event.target.value as typeof language)}
        aria-label={t.languageLabel}
        className="bg-white/5 border border-white/10 rounded-md px-2.5 py-2 text-xs text-white focus:outline-none focus:border-teal-400/50 cursor-pointer"
      >
        {LANGUAGES.map((item) => (
          <option key={item.code} value={item.code} className="bg-ink-900 text-white">
            {item.short} · {item.label}
          </option>
        ))}
      </select>
    </label>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/90 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex items-center justify-between gap-4">
        <a href="#hero" className="flex items-center flex-shrink-0">
          <Logo size="md" />
        </a>

        <nav className="hidden xl:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="link-underline text-sm font-medium text-ink-300 hover:text-white transition-colors"
            >
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {languagePicker}
          <a
            href="#support"
            className="px-4 py-2 bg-teal-500 text-ink-950 text-sm font-semibold rounded-md hover:bg-teal-400 transition-colors"
          >
            {t.nav.support}
          </a>
        </div>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-ink-950 border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          <div className="self-start">{languagePicker}</div>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-ink-200 hover:text-teal-300 text-base font-medium transition-colors"
            >
              {t.nav[link.key]}
            </a>
          ))}
          <a
            href="#support"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center px-4 py-3 bg-teal-500 text-ink-950 text-sm font-semibold rounded-md"
          >
            {t.nav.supportProject}
          </a>
        </nav>
      </div>
    </header>
  );
}
