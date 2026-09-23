import { useState } from 'react';
import QRCode from 'react-qr-code';
import { Copy, Check, ArrowUpRight, Gift, Coffee } from 'lucide-react';
import { CRYPTO, LINKS } from '@/data';
import { useLanguage } from '@/i18n';

export default function Support() {
  const { t } = useLanguage();
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copy = async (id: string, address: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedId(id);
      window.setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 2000);
    } catch {
      // The address remains visible and can still be selected manually.
    }
  };

  const networkKey: Record<string, keyof typeof t.support.network> = {
    btc: 'bitcoin',
    eth: 'ethereum',
    'usdt-sol': 'solana',
  };

  return (
    <section id="support" className="relative py-20 sm:py-28 bg-ink-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            {t.support.eyebrow}
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {t.support.title}
          </h2>
          <p className="mt-4 text-ink-400 text-base leading-relaxed max-w-xl">
            {t.support.description}
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
              <p className="text-white font-semibold text-sm">{t.support.donatree}</p>
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
              <p className="text-white font-semibold text-sm">{t.support.gumroad}</p>
              <p className="text-xs text-ink-500 truncate">dylangoulo.gumroad.com</p>
            </div>
            <ArrowUpRight className="w-4 h-4 text-ink-500 flex-shrink-0" />
          </a>
        </div>

        <div className="mb-6">
          <h3 className="text-base font-semibold text-white">{t.support.cryptoTitle}</h3>
          <p className="text-sm text-ink-500 mt-1">{t.support.cryptoDescription}</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {CRYPTO.map((crypto) => {
            const network = t.support.network[networkKey[crypto.id]];
            const isCopied = copiedId === crypto.id;
            return (
              <div key={crypto.id} className="card rounded-lg p-5 flex flex-col items-center text-center">
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium mb-4"
                  style={{ background: `${crypto.color}18`, color: crypto.color }}
                >
                  {network}
                </span>

                <div className="bg-white p-3 rounded-md mb-4">
                  <QRCode value={crypto.address} size={112} />
                </div>

                <p className="font-heading font-bold text-base text-white mb-1">{crypto.ticker}</p>
                <p className="text-xs font-mono text-ink-500 break-all mb-4 px-1">{crypto.address}</p>

                <button
                  onClick={() => copy(crypto.id, crypto.address)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md text-sm font-semibold transition-colors border"
                  style={{
                    background: isCopied ? `${crypto.color}20` : 'transparent',
                    color: crypto.color,
                    borderColor: `${crypto.color}35`,
                  }}
                  aria-label={`${isCopied ? t.support.copied : t.support.copy} ${crypto.ticker}`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" /> {t.support.copied}
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" /> {t.support.copy}
                    </>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-center text-xs text-ink-600 mt-10 max-w-lg mx-auto leading-relaxed">
          {t.support.thanks}
        </p>
      </div>
    </section>
  );
}
