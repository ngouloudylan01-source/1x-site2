import Logo from './Logo';
import { LINKS } from '@/data';

const SOCIALS = [
  { label: 'Instagram', href: LINKS.instagram },
  { label: 'YouTube', href: LINKS.youtube },
  { label: 'TikTok', href: LINKS.tiktok },
  { label: 'X (Twitter)', href: LINKS.twitter },
  { label: 'Spotify', href: LINKS.spotify },
  { label: 'Deezer', href: LINKS.deezer },
];

const NAV = [
  { label: 'Parcours', href: '#parcours' },
  { label: 'Discographie', href: '#disco' },
  { label: 'Classements 1→50', href: '#/charts' },
  { label: 'Lifestyle & garage', href: '#/lifestyle' },
  { label: 'Stats en direct', href: '#stats' },
  { label: 'Actualités', href: '#actus' },
  { label: 'Certifications', href: '#certifs' },
  { label: '1X ULTRA', href: '#ultra' },
];

// Pied de page : emblème final (machettes croisées, EN GANG), logo 1X TV,
// mention « hommage non officiel », crédits et signalement d'erreur (§17)
export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-blood-900/30 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />

      {/* ===== EMBLÈME FINAL : machettes croisées + EN GANG ===== */}
      <div className="relative z-10 flex flex-col items-center pt-20 pb-10 px-4">
        <div className="relative w-full max-w-2xl">
          <div className="absolute inset-0 rounded-full blur-3xl bg-blood-600/15 animate-pulse-glow" />
          <img
            src="/media/machettes-en-gang.png"
            alt="Emblème du clan : deux machettes croisées formant un X — un symbole graphique, pas une arme"
            className="relative w-full h-auto select-none drop-shadow-[0_0_35px_rgba(200,16,46,0.35)]"
            style={{
              maskImage: 'radial-gradient(ellipse 72% 68% at 50% 50%, black 50%, transparent 98%)',
              WebkitMaskImage: 'radial-gradient(ellipse 72% 68% at 50% 50%, black 50%, transparent 98%)',
            }}
            draggable={false}
            loading="lazy"
          />
        </div>

        <div className="relative text-center -mt-4 sm:-mt-8">
          <div className="absolute inset-0 blur-3xl bg-blood-600/15" />
          <h2 className="relative font-black-display text-5xl sm:text-7xl md:text-8xl text-white text-glow-red leading-none tracking-tight">
            EN GANG
          </h2>
          <div className="mt-3 flex items-center justify-center gap-3">
            <span className="h-px w-14 bg-gradient-to-r from-transparent to-blood-500" />
            <span className="font-display text-xs tracking-[0.5em] text-gold-400 uppercase">1X · Toujours</span>
            <span className="h-px w-14 bg-gradient-to-l from-transparent to-blood-500" />
          </div>
          <p className="relative mt-4 text-[11px] text-anthracite-400 max-w-md mx-auto leading-relaxed">
            L'emblème du clan est un symbole graphique — « chete » signifie machette en nouchi, le nom des fans.
            Le signe 1X est un branding et une énergie positive, comme l'artiste l'a lui-même rappelé.
          </p>
        </div>
      </div>

      {/* ===== Liens et mentions ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-10">
        <div className="grid sm:grid-cols-3 gap-10 py-10 border-t border-white/5">
          {/* Marque */}
          <div>
            <Logo size="lg" />
            <p className="mt-4 text-xs text-anthracite-300 leading-relaxed">
              1X — site hommage dédié à HIMRA, pionnier du Drill Ivoire.
              Un mouvement, un signe, une famille.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm tracking-widest text-white uppercase mb-4">Navigation</h3>
            <ul className="space-y-2">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-xs text-anthracite-300 hover:text-blood-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Réseaux officiels */}
          <div>
            <h3 className="font-display text-sm tracking-widest text-white uppercase mb-4">Canaux officiels</h3>
            <ul className="space-y-2">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="text-xs text-anthracite-300 hover:text-blood-400 transition-colors">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mentions légales & crédits */}
        <div className="pt-6 border-t border-white/5 space-y-3">
          <p className="text-[11px] text-anthracite-400 leading-relaxed">
            <strong className="text-anthracite-300">Site hommage non officiel</strong> — non affilié à l'artiste, à son label
            (Def Jam Africa, Warner/Atlantic, Epic Records) ni à ses sponsors. Toutes les photos sont créditées et liées à
            leur source (Le Monde Afrique, Abidjan.net, Afrique-sur7, Critikmag, chaînes officielles YouTube, Deezer).
            Les statistiques proviennent d'API publiques (Deezer, compteurs YouTube) avec horodatage. Aucune donnée
            personnelle n'est collectée : pas de compte, pas de cookies de pistage.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[11px] text-anthracite-400">© 2026 — Projet hommage « 1X ». EN GANG.</p>
            <div className="flex items-center gap-4">
              <a
                href="mailto:contact@example.com?subject=1X%20—%20Signaler%20une%20erreur"
                className="text-[11px] text-anthracite-400 hover:text-white transition-colors underline"
              >
                Signaler une erreur
              </a>
              <span className="text-xs text-blood-500 font-display tracking-widest">1X TV</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
