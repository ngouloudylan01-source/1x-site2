import { useState } from 'react';
import QRCode from 'react-qr-code';
import { Copy, Check, ArrowUpRight, Gift, Coffee } from 'lucide-react';
import { CRYPTO, LINKS } from '@/data';

export default function Support() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = async (id: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((cur) => (cur === id ? null : cur)), 2000);
    } catch {
      // Presse-papiers indisponible — l'adresse reste sélectionnable manuellement.
    }
  };

  return (
    <section id="support" className="relative py-20 sm:py-28 bg-ink-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            Chaque geste compte
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Soutenir ce projet
          </h2>
          <p className="mt-4 text-ink-400 text-base leading-relaxed max-w-xl">
            Merci sincèrement de considérer un don. Voici toutes les façons de m'aider.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-10">
          <a
            href={LINKS.donatree}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover rounded-lg p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-md bg-teal-500/10 flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-teal-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">Ma page Donatr.ee</p>
              <p className="text-xs text-ink-500 truncate">donatr.ee/dylan07</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-500 flex-shrink-0" />
          </a>

          <a
            href={LINKS.gumroad}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-hover rounded-lg p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 rounded-md bg-amber-500/10 flex items-center justify-center flex-shrink-0">
              <Coffee className="w-5 h-5 text-amber-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">Don via Gumroad</p>
              <p className="text-xs text-ink-500 truncate">dylangoulo.gumroad.com</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-500 flex-shrink-0" />
          </a>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-semibold text-white">Ou en crypto-monnaie</h3>
          <p className="text-sm text-ink-500 mt-1">
            Scannez le QR code ou copiez l'adresse — vérifiez toujours le réseau avant d'envoyer.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {CRYPTO.map((c) => (
            <div key={c.id} className="card rounded-lg p-5 flex flex-col items-center text-center">
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium mb-4"
                style={{ background: `${c.color}18`, color: c.color }}
              >
                {c.network}
              </span>

              <div className="bg-white p-3 rounded-md mb-4">
                <QRCode value={c.address} size={112} />
              </div>

              <p className="font-heading font-bold text-base text-white mb-1">{c.ticker}</p>
              <p className="text-xs font-mono text-ink-500 break-all mb-4 px-1">{c.address}</p>

              <button
                onClick={() => copy(c.id, c.address)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold transition-colors border"
                style={{
                  background: copiedId === c.id ? `${c.color}20` : 'transparent',
                  color: c.color,
                  borderColor: `${c.color}35`,
                }}
              >
                {copiedId === c.id ? (
                  <>
                    <Check className="w-4 h-4" /> Copié
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

        <p className="text-center text-xs text-ink-600 mt-10 max-w-lg mx-auto leading-relaxed">
          Merci pour votre générosité, quelle qu'elle soit. Si vous ne pouvez pas donner, partager
          cette page est déjà une aide précieuse.
        </p>
      </div>
    </section>
  );
}
