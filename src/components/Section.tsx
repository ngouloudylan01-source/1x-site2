import { ReactNode } from 'react';

// En-tête de section unifié — propreté et cohérence sur tout le site
export function SectionHead({
  kicker,
  title,
  accent = 'red',
  desc,
}: {
  kicker: string;
  title: ReactNode;
  accent?: 'red' | 'gold';
  desc?: string;
}) {
  return (
    <div className="text-center mb-14">
      <span
        className={`text-xs font-display tracking-[0.4em] uppercase ${
          accent === 'red' ? 'text-blood-400' : 'text-gold-400'
        }`}
      >
        {kicker}
      </span>
      <h2 className="mt-3 font-black-display text-3xl sm:text-5xl md:text-6xl text-white leading-tight">
        {title}
      </h2>
      {desc && <p className="mt-4 text-sm text-anthracite-300 max-w-2xl mx-auto leading-relaxed">{desc}</p>}
      <div
        className={`mt-5 w-20 h-0.5 mx-auto ${
          accent === 'red'
            ? 'bg-gradient-to-r from-blood-500 to-transparent'
            : 'bg-gradient-to-r from-gold-400 to-transparent'
        }`}
      />
    </div>
  );
}

// Badge de statut de l'information (§9 : confirmé / presse / non confirmé)
export function TruthBadge({ status }: { status: 'confirme' | 'presse' | 'rumeur' }) {
  const map = {
    confirme: { label: 'Confirmé', cls: 'bg-green-500/15 text-green-400 border-green-500/30' },
    presse: { label: 'Rapporté par la presse', cls: 'bg-gold-400/15 text-gold-400 border-gold-400/30' },
    rumeur: { label: 'Non confirmé', cls: 'bg-blood-600/15 text-blood-400 border-blood-500/30' },
  };
  const m = map[status];
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-sm border text-[10px] font-semibold uppercase tracking-wider ${m.cls}`}>
      {m.label}
    </span>
  );
}
