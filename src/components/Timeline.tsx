import { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { TIMELINE, TimelineCat } from '@/data';
import { SectionHead, TruthBadge } from './Section';

const FILTERS: { id: TimelineCat | 'tout'; label: string }[] = [
  { id: 'tout', label: 'Tout' },
  { id: 'debuts', label: 'Débuts' },
  { id: 'albums', label: 'Albums' },
  { id: 'concerts', label: 'Concerts' },
  { id: 'recompenses', label: 'Récompenses' },
  { id: 'aujourdhui', label: "Aujourd'hui" },
];

// Le parcours complet — frise verticale filtrable, du plus ancien au plus récent
export default function Timeline() {
  const [filter, setFilter] = useState<TimelineCat | 'tout'>('tout');
  const items = filter === 'tout' ? TIMELINE : TIMELINE.filter((t) => t.cat === filter);

  return (
    <section id="parcours" className="relative py-24 sm:py-28 overflow-hidden bg-anthracite-950">
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-600 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Le parcours complet"
          title={<>DES DÉBUTS À <span className="text-gradient-red">ÉBIMPÉ</span></>}
          desc="Du groupe SBS au Stade Olympique : chaque étape, année par année, sans trou. Chaque point porte sa source cliquable."
        />

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-sm transition-all ${
                filter === f.id
                  ? 'bg-blood-600 text-white glow-red'
                  : 'glass text-anthracite-300 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Frise */}
        <div className="relative">
          <div className="absolute left-[19px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blood-500 via-blood-800 to-transparent" />

          {items.map((item, idx) => (
            <div
              key={`${item.year}-${item.title}`}
              className={`relative mb-8 flex items-start gap-5 ${
                idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              {/* Point */}
              <div className="absolute left-[19px] sm:left-1/2 -translate-x-1/2 z-10 mt-3">
                <div
                  className={`w-3.5 h-3.5 rounded-full border-2 border-blood-500 ${
                    item.cat === 'aujourdhui' ? 'bg-blood-500 animate-pulse-glow' : 'bg-anthracite-950'
                  }`}
                />
              </div>

              {/* Carte */}
              <div className={`ml-11 sm:ml-0 sm:w-1/2 ${idx % 2 === 0 ? 'sm:pr-10' : 'sm:pl-10'}`}>
                <div className="glass rounded-sm p-5 border-l-2 border-blood-600 hover:border-blood-400 transition-colors">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span className="font-mono font-bold text-lg text-blood-400">{item.year}</span>
                    <TruthBadge status={item.confirmed ? 'confirme' : 'rumeur'} />
                  </div>
                  <h3 className="font-display text-lg tracking-wide text-white uppercase leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-anthracite-200 leading-relaxed">{item.desc}</p>
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-anthracite-400 hover:text-blood-400 transition-colors"
                  >
                    <ExternalLink className="w-3 h-3" /> Source : {item.sourceLabel}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
