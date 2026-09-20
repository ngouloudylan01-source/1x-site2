import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowUpRight, Calendar, ExternalLink, Shirt } from 'lucide-react';
import { EVENTS } from '@/data';
import SourceTooltip from '@/components/SourceTooltip';

// ============================================================
// Page de détail d'un événement (#/evenement/:id)
// Grande image qui apparaît au chargement, description complète,
// tenue décryptée, lien vers le live/la source, navigation
// vers l'événement précédent / suivant.
// ============================================================
export default function EventPage({ id }: { id: number }) {
  const ev = EVENTS.find((e) => e.id === id);
  const [shown, setShown] = useState(false);

  // Apparition progressive de l'image à l'arrivée sur la page
  useEffect(() => {
    setShown(false);
    const t = setTimeout(() => setShown(true), 60);
    return () => clearTimeout(t);
  }, [id]);

  if (!ev) {
    return (
      <main className="min-h-screen bg-anthracite-950 pt-32 pb-20 text-center">
        <p className="text-anthracite-300">Événement introuvable.</p>
        <a href="#hero" className="text-blood-400 hover:underline text-sm mt-3 inline-block">Retour à l'accueil</a>
      </main>
    );
  }

  const idx = EVENTS.findIndex((e) => e.id === id);
  const prev = EVENTS[(idx - 1 + EVENTS.length) % EVENTS.length];
  const next = EVENTS[(idx + 1) % EVENTS.length];

  return (
    <main
      className="min-h-screen bg-anthracite-950 pt-24 pb-20 transition-colors duration-500"
      style={{ background: `linear-gradient(180deg, #0a0a0c 0%, ${ev.accent}12 40%, #0a0a0c 100%)` }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <a href="#evenements" className="inline-flex items-center gap-2 text-sm text-anthracite-300 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Tous les événements
        </a>

        {/* En-tête */}
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span
            className="text-[10px] font-display tracking-widest px-2.5 py-1 rounded-sm"
            style={{ background: `${ev.accent}25`, color: ev.accent }}
          >
            {ev.type}
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-anthracite-300">
            <Calendar className="w-3.5 h-3.5" /> {ev.date}
          </span>
        </div>
        <h1 className="font-black-display text-3xl sm:text-5xl text-white leading-tight mb-8">{ev.title}</h1>

        {/* Grande image — apparition douce */}
        <div
          className="relative group overflow-hidden rounded-sm border shadow-3d-deep transition-all duration-700"
          style={{
            borderColor: `${ev.accent}60`,
            opacity: shown ? 1 : 0,
            transform: shown ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.98)',
          }}
        >
          <img src={ev.img} alt={ev.title} className="w-full max-h-[70vh] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/80 via-transparent to-transparent" />
          <SourceTooltip credit={ev.credit} source={ev.source} position="top" />
        </div>

        {/* Corps */}
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_0.6fr] gap-8 mt-10">
          <div>
            <p className="text-anthracite-100 leading-relaxed text-[15px] whitespace-pre-line">{ev.longDesc}</p>

            {ev.liveLink && (
              <a
                href={ev.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-sm transition-all hover:scale-[1.02]"
                style={{ background: ev.accent }}
              >
                {ev.liveLinkLabel ?? 'Voir le live'} <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>

          <aside className="space-y-4">
            {ev.outfit && (
              <div className="glass rounded-sm p-4">
                <p className="flex items-center gap-2 text-[11px] font-display tracking-widest uppercase mb-2" style={{ color: ev.accent }}>
                  <Shirt className="w-3.5 h-3.5" /> La tenue / le visuel
                </p>
                <p className="text-[13px] text-anthracite-200">{ev.outfit}</p>
              </div>
            )}
            <div className="glass rounded-sm p-4">
              <p className="text-[11px] font-display tracking-widest uppercase text-anthracite-400 mb-2">Source</p>
              <a
                href={ev.source}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[13px] text-blood-400 hover:underline"
              >
                {ev.sourceLabel} <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] text-anthracite-500 mt-2">{ev.credit}</p>
            </div>
          </aside>
        </div>

        {/* Navigation précédent / suivant */}
        <div className="grid grid-cols-2 gap-4 mt-14">
          {[{ e: prev, label: 'Événement précédent', dir: 'prev' }, { e: next, label: 'Événement suivant', dir: 'next' }].map(({ e, label, dir }) => (
            <a
              key={dir}
              href={`#/evenement/${e.id}`}
              className={`glass rounded-sm p-4 hover:border-white/25 transition-all group ${dir === 'next' ? 'text-right' : ''}`}
            >
              <p className="text-[10px] font-display tracking-widest uppercase text-anthracite-400 mb-1.5">{label}</p>
              <p className="text-sm font-semibold text-white group-hover:text-blood-300 transition-colors truncate">{e.title}</p>
              <p className="text-[11px] font-mono text-anthracite-400 mt-1">{e.date}</p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
