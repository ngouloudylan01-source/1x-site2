import Logo from './Logo';

const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/himra_saiyen' },
  { label: 'YouTube', href: 'https://www.youtube.com/@himraofficiel3231' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@himra_saiyen' },
  { label: 'X (Twitter)', href: 'https://x.com/himra_saiyen' },
  { label: 'Snapchat', href: 'https://www.snapchat.com/add/himra' },
  { label: 'Spotify', href: 'https://open.spotify.com/artist/39SBljHcUD66edvRmiRqlS' },
];

const LINKS = [
  { label: 'Biographie', href: '#bio' },
  { label: 'Discographie', href: '#disco' },
  { label: 'Actualités', href: '#feed' },
  { label: 'Charts', href: '#charts' },
  { label: 'Tournée', href: '#tour' },
  { label: 'Shop', href: '#shop' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-blood-900/30 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Logo size="lg" />
            <p className="mt-5 text-sm text-anthracite-300 leading-relaxed">
              Site officiel d'HIMRA — le pionnier du Drill Ivoire. Un mouvement, un signe, une famille.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-sm tracking-widest text-white uppercase mb-4">Navigation</h4>
            <ul className="space-y-2">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-anthracite-300 hover:text-blood-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="font-display text-sm tracking-widest text-white uppercase mb-4">Réseaux</h4>
            <ul className="space-y-2">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-anthracite-300 hover:text-blood-400 transition-colors"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-sm tracking-widest text-white uppercase mb-4">Newsletter 1X</h4>
            <p className="text-xs text-anthracite-300 mb-4">
              Recevez les exclusivités, dates de concert et sorties en avant-première.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="votre@email.com"
                className="flex-1 px-3 py-2 bg-anthracite-900 border border-white/10 text-sm text-white rounded-sm focus:outline-none focus:border-blood-500 transition-colors"
              />
              <button className="px-4 py-2 bg-blood-600 text-white text-sm font-semibold rounded-sm hover:bg-blood-500 transition-colors">
                OK
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-anthracite-400">
            © 2026 HIMRA · 1X TV. Tous droits réservés. EN GANG.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-anthracite-400 hover:text-anthracite-200 transition-colors">Mentions légales</a>
            <a href="#" className="text-xs text-anthracite-400 hover:text-anthracite-200 transition-colors">Confidentialité</a>
            <span className="text-xs text-blood-500 font-display tracking-widest">1X</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
