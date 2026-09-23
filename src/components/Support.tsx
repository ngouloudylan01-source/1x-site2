import { useState } from 'react';
import QRCode from 'react-qr-code';
import { Copy, Check, ExternalLink, Gift, Coffee } from 'lucide-react';
import { CRYPTO, LINKS } from '@/data';

export default function Support() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = async (id: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((cur) => (cur === id ? null : cur)), 2000);
    } catch {
      // Clipboard indisponible — l'utilisateur peut toujours sélectionner le texte manuellement.
    }
  };

  return (
    <section id="support" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950">
      <div className="absolute inset-0 bg-radial-warm opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-amber-400">
            Chaque geste compte
          </span>
          <h2 className="mt-3 font-black-display text-3xl sm:text-4xl md:text-5xl text-white">
            SOUTENIR <span className="text-gradient-warm">CE PROJET</span>
          </h2>
          <p className="mt-4 text-ink-300 text-sm sm:text-base max-w-xl mx-auto">
            Merci sincèrement de considérer un don. Voici toutes les façons de m'aider — choisis
            celle qui te convient le mieux.
          </p>
        </div>

        {/* External platforms */}
        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <a
            href={LINKS.donatree}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-lg p-6 flex items-center gap-4 transition-all hover:border-teal-400/40 hover:scale-[1.01]"
            style={{ borderLeft: '3px solid #2dd4bf' }}
          >
            <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
              <Gift className="w-6 h-6 text-teal-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold">Ma page Donatr.ee</p>
              <p className="text-xs text-ink-300 truncate">donatr.ee/dylan07</p>
            </div>
            <ExternalLink className="w-4 h-4 text-ink-400 group-hover:text-teal-400 transition-colors flex-shrink-0" />
          </a>

          <a
            href={LINKS.gumroad}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-lg p-6 flex items-center gap-4 transition-all hover:border-amber-400/40 hover:scale-[1.01]"
            style={{ borderLeft: '3px solid #f59e0b' }}
          >
            <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center flex-shrink-0">
              <Coffee className="w-6 h-6 text-amber-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold">Faire un don via Gumroad</p>
              <p className="text-xs text-ink-300 truncate">dylangoulo.gumroad.com</p>
            </div>
            <ExternalLink className="w-4 h-4 text-ink-400 group-hover:text-amber-400 transition-colors flex-shrink-0" />
          </a>
        </div>

        {/* Crypto donations */}
        <div className="text-center mb-8">
          <h3 className="font-display text-xl tracking-widest text-white uppercase">
            Ou en <span className="text-gradient-warm">crypto-monnaie</span>
          </h3>
          <p className="text-sm text-ink-400 mt-1">
            Scanne le QR code ou copie l'adresse — vérifie toujours le réseau avant d'envoyer.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {CRYPTO.map((c) => (
            <div
              key={c.id}
              className="glass rounded-lg p-5 flex flex-col items-center text-center transition-all hover:scale-[1.02]"
              style={{ borderTop: `2px solid ${c.color}` }}
            >
              <span
                className="text-xs px-2.5 py-1 rounded-full font-semibold mb-4"
                style={{ background: `${c.color}20`, color: c.color }}
              >
                {c.network}
              </span>

              <div className="bg-white p-3 rounded-md mb-4">
                <QRCode value={c.address} size={128} />
              </div>

              <p className="font-black-display text-lg text-white mb-1">{c.ticker}</p>
              <p className="text-xs font-mono text-ink-300 break-all mb-4 px-1">{c.address}</p>

              <button
                onClick={() => copy(c.id, c.address)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm text-sm font-semibold transition-all"
                style={{
                  background: copiedId === c.id ? `${c.color}30` : `${c.color}15`,
                  color: c.color,
                  border: `1px solid ${c.color}40`,
                }}
              >
                {copiedId === c.id ? (
                  <>
                    <Check className="w-4 h-4" /> Adresse copiée !
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> Copier l'adresse
                  </>
                )}
              </button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-ink-500 mt-10 max-w-lg mx-auto leading-relaxed">
          Merci du fond du cœur pour ta générosité, quelle qu'elle soit. Si tu ne peux pas donner,
          partager cette page autour de toi est déjà un immense soutien. 🙏
        </p>
      </div>
    </section>
  );
}
