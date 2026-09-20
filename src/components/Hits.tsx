import { ExternalLink, Flame, Gem } from 'lucide-react';
import { HITS, GEMS } from '@/data';
import { SectionHead } from './Section';

// Deux colonnes : les incontournables (sourcés) et les pépites oubliées
export default function Hits() {
  return (
    <section id="hits" className="relative py-24 sm:py-28 overflow-hidden bg-anthracite-950">
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="La sélection"
          title={<>HITS &amp; <span className="text-gradient-gold">PÉPITES OUBLIÉES</span></>}
          accent="gold"
          desc="D'un côté les incontournables avec leurs chiffres sourcés. De l'autre, les morceaux d'avant la célébrité que les vrais connaisseurs s'échangent."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Incontournables */}
          <div>
            <h3 className="flex items-center gap-2 font-display text-lg tracking-widest text-white uppercase mb-6">
              <Flame className="w-5 h-5 text-blood-400" /> Les incontournables
            </h3>
            <div className="space-y-3">
              {HITS.map((hit, idx) => (
                <a
                  key={idx}
                  href={hit.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass rounded-sm p-4 border-l-2 border-blood-600 hover:border-blood-400 transition-all"
                >
                  <span className="font-mono font-bold text-xl text-anthracite-400 w-7 group-hover:text-blood-400 transition-colors">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{hit.title}</h4>
                    <p className="text-xs text-anthracite-300 mt-0.5">{hit.album} · {hit.year}</p>
                    <p className="text-[11px] text-gold-400 mt-1">{hit.streams}</p>
                    <p className="text-[10px] text-anthracite-400 mt-0.5">Source : {hit.sourceLabel}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-anthracite-400 group-hover:text-white transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Pépites */}
          <div>
            <h3 className="flex items-center gap-2 font-display text-lg tracking-widest text-white uppercase mb-6">
              <Gem className="w-5 h-5 text-gold-400" /> Les pépites oubliées
            </h3>
            <div className="space-y-3">
              {GEMS.map((gem, idx) => (
                <div
                  key={idx}
                  className="glass rounded-sm p-4 border-l-2 border-gold-500/50 hover:border-gold-400 transition-all"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h4 className="text-sm font-bold text-white">{gem.title}</h4>
                    <span className="text-[11px] font-mono text-anthracite-400 flex-shrink-0">{gem.year}</span>
                  </div>
                  <p className="text-xs text-anthracite-300 mt-1.5 leading-relaxed">{gem.note}</p>
                  {gem.source && (
                    <a
                      href={gem.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1 text-[11px] text-gold-400/80 hover:text-gold-300 transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" /> Écouter sur YouTube
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
