import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { EVENTS } from '@/data';
import { SectionHead } from './Section';

// Carrousel d'événements marquants — la couleur de la section
// s'accorde à la teinte dominante de l'événement affiché (§ carrousel).
export default function EventsCarousel() {
  const [active, setActive] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const accent = EVENTS[active].accent;

  const scroll = (dir: 'left' | 'right') => {
    scrollRef.current?.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' });
  };

  return (
    <section
      id="evenements"
      className="relative py-24 sm:py-28 overflow-hidden transition-colors duration-500"
      style={{ background: `linear-gradient(180deg, #0a0a0c 0%, ${accent}14 50%, #0a0a0c 100%)` }}
    >
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Moments marquants"
          title={<>LE DÉFILÉ DES <span style={{ color: accent }} className="transition-colors duration-500">ÉVÉNEMENTS</span></>}
          desc="Concerts, clips, récompenses, moments clés. La couleur de la page s'accorde à chaque événement. Survolez une carte pour révéler sa source."
        />

        <div className="flex items-center justify-end gap-2 mb-5">
          <button
            onClick={() => scroll('left')}
            className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-all rounded-sm"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-9 h-9 flex items-center justify-center border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-all rounded-sm"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div ref={scrollRef} className="flex gap-5 overflow-x-auto no-scrollbar pb-4 snap-x">
          {EVENTS.map((ev, idx) => {
            const isActive = active === idx;
            return (
              <article
                key={idx}
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
                tabIndex={0}
                className="group relative flex-shrink-0 w-72 sm:w-80 snap-center outline-none"
              >
                <div
                  className="relative h-52 sm:h-56 rounded-sm overflow-hidden border transition-all duration-400"
                  style={{
                    borderColor: isActive ? ev.accent : 'rgba(255,255,255,0.1)',
                    boxShadow: isActive ? `0 0 30px ${ev.accent}35` : 'none',
                  }}
                >
                  <img
                    src={ev.img}
                    alt={ev.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/30 to-transparent" />

                  {/* Badge type */}
                  <span
                    className="absolute top-2.5 left-2.5 px-2 py-0.5 text-[10px] font-bold tracking-wider rounded-sm text-white"
                    style={{ background: `${ev.accent}dd` }}
                  >
                    {ev.type}
                  </span>
                  <span className="absolute top-2.5 right-2.5 px-2 py-0.5 text-[10px] font-mono bg-black/60 text-white/80 rounded-sm">
                    {ev.date}
                  </span>

                  {/* Pastille source — glisse depuis le bas au survol/focus */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 group-focus:translate-y-0 transition-transform duration-150">
                    <a
                      href={ev.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 px-3 py-2.5 text-[11px] text-white"
                      style={{ background: `${ev.accent}e6` }}
                    >
                      <span className="truncate">{ev.credit}</span>
                      <span className="flex items-center gap-1 font-bold flex-shrink-0">
                        VOIR LA SOURCE <ExternalLink className="w-3 h-3" />
                      </span>
                    </a>
                  </div>
                </div>

                <div className="mt-3 px-0.5">
                  <h3 className="text-sm font-bold text-white leading-snug">{ev.title}</h3>
                  <p className="mt-1.5 text-xs text-anthracite-300 leading-relaxed">{ev.desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
