import { ExternalLink, Handshake } from 'lucide-react';
import { FEATS_CONFIRMED } from '@/data';
import { SectionHead, TruthBadge } from './Section';

// Featurings : uniquement les collaborations CONFIRMÉES par une tracklist
// officielle ou un communiqué (§9 & §11). Aucune rumeur sur ce site.
export default function Featurings() {
  return (
    <section id="feats" className="relative py-24 sm:py-28 overflow-hidden bg-anthracite-950">
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Collaborations"
          title={<>FEATURINGS <span className="text-gradient-red">CONFIRMÉS</span></>}
          desc="Uniquement les collaborations vérifiées : tracklist officielle, certification ou communiqué. Les rumeurs n'ont pas leur place ici."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATS_CONFIRMED.map((f, idx) => (
            <a
              key={idx}
              href={f.source}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-sm p-5 hover:border-blood-500/30 transition-all group"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <div className="flex items-center gap-2.5">
                  <span className="w-9 h-9 flex items-center justify-center bg-blood-600/15 rounded-sm">
                    <Handshake className="w-4.5 h-4.5 text-blood-400" />
                  </span>
                  <h3 className="font-bold text-white text-sm leading-tight">{f.artist}</h3>
                </div>
                <TruthBadge status="confirme" />
              </div>
              <p className="text-xs text-anthracite-300 leading-relaxed mb-2">{f.proj}</p>
              <span className="inline-flex items-center gap-1 text-[11px] text-blood-400 group-hover:underline">
                {f.sourceLabel} <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
