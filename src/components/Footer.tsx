import Logo from './Logo';
import { LINKS } from '@/data';

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5 bg-ink-950">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <Logo size="sm" />

          <p className="text-sm text-ink-500 text-center max-w-md">
            Merci d'avoir pris le temps de lire mon histoire.
          </p>

          <a
            href={LINKS.donatree}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white/5 border border-white/10 text-white text-sm font-medium rounded-md hover:bg-white/10 transition-colors"
          >
            Soutenir Dylan
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-ink-600">© 2026 Dylan07 — Page de soutien personnelle.</p>
        </div>
      </div>
    </footer>
  );
}
