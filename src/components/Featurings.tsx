import { ExternalLink, CheckCircle2, HelpCircle } from 'lucide-react';
import { FEATS_CONFIRMED, FEATS_RUMORS } from '@/data';
import { SectionHead, TruthBadge } from './Section';

// Featurings : confirmés (sourcés) strictement séparés des rumeurs (§11)
export default function Featurings() {
  return (
    <section id="feats" className="relative py-24 sm:py-28 overflow-hidden bg-anthracite-950">
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Collaborations"
          title={<>FEATURINGS — <span className="text-gradient-red">CONFIRMÉS</span> vs RUMEURS</>}
          desc="Deux listes strictement séparées. Un featuring n'est « confirmé » que s'il figure sur une tracklist officielle ou un communiqué. Une rumeur n'est pas une information."
        />

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Confirmés */}
          <div>
            <h3 className="flex items-center gap-2 font-display text-lg tracking-widest text-white uppercase mb-6">
              <CheckCircle2 className="w-5 h-5 text-green-400" /> Confirmés
            </h3>
            <div className="space-y-2.5">
              {FEATS_CONFIRMED.map((f, idx) => (
                <a
                  key={idx}
                  href={f.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass rounded-sm p-4 border-l-2 border-green-500/50 hover:border-green-400 transition-all"
                >
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white">{f.artist}</h4>
                    <p className="text-xs text-anthracite-300 mt-0.5">{f.proj}</p>
                    <p className="text-[10px] text-anthracite-400 mt-1">Source : {f.sourceLabel}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-anthracite-400 group-hover:text-white transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* Rumeurs */}
          <div>
            <h3 className="flex items-center gap-2 font-display text-lg tracking-widest text-white uppercase mb-6">
              <HelpCircle className="w-5 h-5 text-blood-400" /> Cela se murmure
            </h3>
            <div className="glass-red rounded-sm p-4 mb-4">
              <p className="text-xs text-anthracite-200 leading-relaxed">
                ⚠️ Rappel : une rumeur n'est pas une information. Rien de ce qui suit n'a été annoncé
                officiellement par l'artiste ou son label.
              </p>
            </div>
            <div className="space-y-2.5">
              {FEATS_RUMORS.map((f, idx) => (
                <div key={idx} className="glass rounded-sm p-4 border-l-2 border-blood-600/50">
                  <div className="flex items-center justify-between gap-3 mb-1.5">
                    <h4 className="text-sm font-bold text-white">{f.artist}</h4>
                    <TruthBadge status="rumeur" />
                  </div>
                  <p className="text-xs text-anthracite-300 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
