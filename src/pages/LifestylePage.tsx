import { useRef, useState } from 'react';
import { ArrowLeft, Car, ChevronLeft, ChevronRight, ExternalLink, Gem, Tag } from 'lucide-react';
import { LIFESTYLE_CARS, LIFESTYLE_STYLES, LINKS } from '@/data';
import { SectionHead, TruthBadge } from '@/components/Section';
import SourceTooltip from '@/components/SourceTooltip';

// ============================================================
// Page Lifestyle — les styles d'Himra décryptés (Pulse CI) et
// son garage, en diapositives défilantes. Chaque pièce affiche
// son prix : estimé, non communiqué, ou confirmé — jamais inventé.
// ============================================================
export default function LifestylePage() {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const style = LIFESTYLE_STYLES[active];

  const go = (dir: -1 | 1) => {
    setActive((a) => (a + dir + LIFESTYLE_STYLES.length) % LIFESTYLE_STYLES.length);
  };

  return (
    <main
      className="min-h-screen bg-anthracite-950 pt-28 pb-20 transition-colors duration-500"
      style={{ background: `linear-gradient(180deg, #0a0a0c 0%, ${style.accent}14 45%, #0a0a0c 100%)` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <a href="#hero" className="inline-flex items-center gap-2 text-sm text-anthracite-300 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </a>

        <SectionHead
          kicker="Style · Garage · Saiyen"
          title={<>LE <span style={{ color: style.accent }} className="transition-colors duration-500">LIFESTYLE</span> HIMRA</>}
          desc="Ses tenues décryptées par la presse mode et son garage — en diapositives. Chaque pièce et chaque chiffre renvoie à sa source : rien n'est inventé."
        />

        {/* ---- Diaporama des styles ---- */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-8 items-stretch">
          {/* Image du style actif */}
          <div className="relative group overflow-hidden rounded-sm border shadow-3d-deep transition-colors duration-500" style={{ borderColor: `${style.accent}70` }}>
            <img
              key={style.title}
              src={style.img}
              alt={style.title}
              className="w-full h-full max-h-[34rem] object-cover object-top animate-slide-up"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/85 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-5 right-5">
              <p className="font-display text-lg tracking-[0.2em] text-white">{style.title.toUpperCase()}</p>
            </div>
            <SourceTooltip credit={style.credit} source={style.source} position="top" />

            {/* Flèches */}
            <button
              onClick={() => go(-1)}
              aria-label="Style précédent"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-anthracite-950/70 border border-white/20 text-white rounded-sm hover:bg-anthracite-950 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Style suivant"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center bg-anthracite-950/70 border border-white/20 text-white rounded-sm hover:bg-anthracite-950 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Détail du style : description + pièces + prix */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-3">
              {LIFESTYLE_STYLES.map((s, i) => (
                <button
                  key={s.title}
                  onClick={() => setActive(i)}
                  aria-label={s.title}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? '2.5rem' : '1rem',
                    background: i === active ? s.accent : '#3a3f4a',
                  }}
                />
              ))}
            </div>

            <h2 className="font-black-display text-2xl sm:text-3xl text-white mb-3">{style.title}</h2>
            <p className="text-anthracite-200 text-[15px] leading-relaxed mb-6">{style.desc}</p>

            <div className="space-y-3 mb-6">
              <p className="flex items-center gap-2 text-[11px] font-display tracking-widest uppercase text-anthracite-400">
                <Gem className="w-3.5 h-3.5" /> Les pièces du look
              </p>
              {style.pieces.map((p) => (
                <div key={p.nom} className="glass rounded-sm px-4 py-3 flex items-center justify-between gap-3">
                  <span className="text-sm text-white">{p.nom}</span>
                  <span className="inline-flex items-center gap-1 text-[13px] font-mono shrink-0" style={{ color: style.accent }}>
                    <Tag className="w-3 h-3" /> {p.prix}
                  </span>
                </div>
              ))}
            </div>

            <a
              href={style.source}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-2 text-[13px] text-blood-400 hover:underline"
            >
              Source : {style.sourceLabel} <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* ---- Le garage ---- */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-8">
            <Car className="w-5 h-5 text-blood-500" />
            <h2 className="font-black-display text-2xl sm:text-4xl text-white">LE GARAGE</h2>
            <span className="h-px flex-1 bg-white/10" />
          </div>

          <div ref={trackRef} className="flex gap-6 overflow-x-auto no-scrollbar pb-4 snap-x">
            {LIFESTYLE_CARS.map((car) => (
              <article
                key={car.nom}
                className="snap-start shrink-0 w-[85vw] sm:w-[30rem] glass rounded-sm overflow-hidden group"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={car.img}
                    alt={car.nom}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-transparent to-transparent" />
                  <SourceTooltip credit={car.credit} source={car.source} position="top" />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-base tracking-wide text-white">{car.nom}</h3>
                    <TruthBadge status="confirme" />
                  </div>
                  <p className="inline-flex items-center gap-1.5 text-sm font-mono text-gold-400 mb-3">
                    <Tag className="w-3.5 h-3.5" /> {car.prix}
                  </p>
                  <p className="text-[13px] text-anthracite-300 leading-relaxed mb-4">{car.desc}</p>
                  <a
                    href={car.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[12px] text-blood-400 hover:underline"
                  >
                    Source : {car.sourceLabel} <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-4 text-[11px] text-anthracite-500">
            L'achat de l'Urus est attesté par le reçu officiel présenté publiquement par Himra (mars 2025).
            Aucune photo de presse libre du véhicule personnel n'étant disponible, le visuel est une illustration
            du modèle, clairement créditée comme telle. Le montant est le chiffrage du modèle par la presse.
          </p>
        </div>

        {/* Lien retour charts / accueil */}
        <div className="mt-14 flex flex-wrap gap-3">
          <a href="#/charts" className="px-6 py-3 bg-blood-600 hover:bg-blood-500 text-white text-sm font-semibold rounded-sm transition-all glow-red">
            Voir les classements en direct
          </a>
          <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-white/20 text-white text-sm font-semibold rounded-sm hover:bg-white/5 transition-all">
            Son style au quotidien — Instagram
          </a>
        </div>
      </div>
    </main>
  );
}
