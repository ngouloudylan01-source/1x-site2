import { HeartHandshake } from 'lucide-react';
import Logo from './Logo';
import { LINKS } from '@/data';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-white/10 bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Logo size="sm" />

          <p className="text-sm text-ink-400 text-center max-w-md">
            Merci d'avoir pris le temps de lire mon histoire. Chaque geste — un don, un partage, un
            message — compte énormément.
          </p>

          <a
            href={LINKS.donatree}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-400/40 text-white text-sm font-semibold rounded-sm hover:bg-teal-500/30 transition-all"
          >
            <HeartHandshake className="w-4 h-4" />
            Soutenir Dylan
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-ink-500">
            © 2026 Dylan07 — Page de soutien personnelle. Merci pour votre bienveillance.
          </p>
        </div>
      </div>
    </footer>
  );
}
