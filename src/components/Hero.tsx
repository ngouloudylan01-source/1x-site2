import { useEffect, useMemo, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PHOTOS, EBIMPE, LINKS, VIDEOS, EVENTS } from '@/data';
import { useDeezerArtist, useYouTubeStats, formatCompact } from '@/lib/live';
import SourceTooltip from './SourceTooltip';

// Compte à rebours en direct jusqu'au Stade d'Ébimpé (26 décembre 2026, 14 h)
function useCountdown(target: string) {
  const calc = () => {
    const diff = new Date(target).getTime() - Date.now();
    if (diff <= 0) return { j: 0, h: 0, m: 0, s: 0 };
    return {
      j: Math.floor(diff / 86_400_000),
      h: Math.floor((diff / 3_600_000) % 24),
      m: Math.floor((diff / 60_000) % 60),
      s: Math.floor((diff / 1_000) % 60),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target]);
  return t;
}

// Vignettes d'événements affichées à droite du portrait (survol → description + accent)
const HERO_EVENT_IDS = [3, 12, 6, 11];

export default function Hero() {
  const countdown = useCountdown(EBIMPE.date);
  const { artist } = useDeezerArtist();
  const { stats } = useYouTubeStats([VIDEOS.YOROBO_3]);
  const yoroboViews = stats[VIDEOS.YOROBO_3]?.viewCount;

  // Événement survolé → la couleur d'accent du Hero s'accorde à sa tenue / son visuel
  const [hovered, setHovered] = useState<number | null>(null);
  const heroEvents = useMemo(() => HERO_EVENT_IDS.map((id) => EVENTS[id]), []);
  const accent = hovered !== null ? EVENTS[hovered].accent : '#c8102e';

  // Parallaxe douce à la souris (désactivée si prefers-reduced-motion)
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setTilt({ x, y });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-anthracite-950 pt-24 pb-14 transition-colors duration-500"
    >
      {/* Arrière-plan texturé premium : grille béton + halo dynamique accordé à l'accent */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `radial-gradient(ellipse 75% 65% at 38% 42%, ${accent}30 0%, transparent 62%), radial-gradient(ellipse 45% 45% at 88% 12%, ${accent}18 0%, transparent 55%)`,
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-50" />

      {/* « 1X » géant en filigrane, parallaxe douce */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${tilt.x * -14}px, ${tilt.y * -10}px)` }}
      >
        <span className="font-black-display text-[36vw] leading-none text-blood-900/15 blur-[2px]">1X</span>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-5 animate-slide-up">
          <span className="h-px w-12 transition-colors duration-500" style={{ background: accent }} />
          <span className="text-[11px] font-display tracking-[0.45em] uppercase text-anthracite-300">
            Hommage · Côte d'Ivoire · Drill Ivoire
          </span>
        </div>

        {/* Titre — aligné à gauche, composition non symétrique */}
        <h1 className="font-black-display text-white leading-none animate-slide-up" style={{ animationDelay: '0.08s' }}>
          <span className="block text-6xl sm:text-8xl lg:text-9xl text-glow-red tracking-tight">HIMRA</span>
          <span className="block text-lg sm:text-2xl mt-3 font-display tracking-[0.35em] text-gold-400">
            1X — EN GANG
          </span>
        </h1>

        {/* Composition principale : grand portrait qui « monte » + colonne d'événements à droite */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-end">
          {/* Grand portrait — le VRAI signe 1X, fait uniquement avec les doigts */}
          <div
            className="relative group animate-rise"
            style={{
              transform: `perspective(1400px) rotateY(${tilt.x * 2.5}deg) rotateX(${tilt.y * -1.5}deg)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            <div
              className="absolute -inset-10 blur-3xl animate-pulse-glow transition-colors duration-500 rounded-full"
              style={{ background: `${accent}38` }}
            />
            <div
              className="relative overflow-hidden shadow-3d-deep border transition-colors duration-500"
              style={{
                borderColor: `${accent}90`,
                clipPath: 'polygon(0 4%, 96% 0, 100% 96%, 4% 100%)',
              }}
            >
              <img
                src={PHOTOS.signe1x.src}
                alt="HIMRA fait le signe 1X : pouces croisés, index et majeurs levés"
                className="w-full max-h-[68vh] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/90 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between gap-3">
                <div>
                  <p className="font-display text-sm sm:text-base tracking-[0.25em] text-white">LE SIGNE 1X</p>
                  <p className="text-[11px] text-anthracite-300 mt-1 max-w-sm">
                    Pouces croisés, index et majeurs levés — « un branding, une énergie positive », jamais un
                    symbole de violence.
                  </p>
                </div>
                <span className="text-[10px] font-mono text-white/40 shrink-0">EN GANG</span>
              </div>
              <SourceTooltip credit={PHOTOS.signe1x.credit} source={PHOTOS.signe1x.source} position="top" />
            </div>
          </div>

          {/* Colonne droite : vignettes d'événements interactives */}
          <div className="flex flex-col gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-[11px] font-display tracking-[0.35em] uppercase text-anthracite-400 mb-1">
              Moments iconiques — survolez, cliquez
            </p>
            {heroEvents.map((ev) => {
              const isHover = hovered === ev.id;
              return (
                <a
                  key={ev.id}
                  href={`#/evenement/${ev.id}`}
                  onMouseEnter={() => setHovered(ev.id)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(ev.id)}
                  onBlur={() => setHovered(null)}
                  className="relative flex gap-3 items-stretch glass rounded-sm overflow-hidden transition-all duration-300 group"
                  style={{
                    borderColor: isHover ? `${ev.accent}80` : undefined,
                    transform: isHover ? 'translateX(-6px)' : undefined,
                    boxShadow: isHover ? `0 8px 32px ${ev.accent}30` : undefined,
                  }}
                >
                  <div className="w-24 sm:w-28 shrink-0 overflow-hidden">
                    <img
                      src={ev.img}
                      alt={ev.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="py-2.5 pr-3 flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-[9px] font-display tracking-widest px-1.5 py-0.5 rounded-sm transition-colors duration-300"
                        style={{ background: `${ev.accent}25`, color: ev.accent }}
                      >
                        {ev.type}
                      </span>
                      <span className="text-[10px] font-mono text-anthracite-400">{ev.date}</span>
                    </div>
                    <p className="text-[13px] font-semibold text-white mt-1 truncate">{ev.title}</p>
                    {/* Description tenue/événement — révélée au survol */}
                    <p
                      className="text-[11px] text-anthracite-300 transition-all duration-300 overflow-hidden"
                      style={{ maxHeight: isHover ? '3.2rem' : '0', opacity: isHover ? 1 : 0, marginTop: isHover ? '0.3rem' : '0' }}
                    >
                      {ev.outfit ?? ev.desc}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="absolute top-2 right-2 w-3.5 h-3.5 transition-colors duration-300"
                    style={{ color: isHover ? ev.accent : '#5a5f6a' }}
                  />
                </a>
              );
            })}

            {/* Stats en direct */}
            <div className="flex flex-wrap gap-2 mt-1 text-xs">
              <a href={LINKS.yorobo3} target="_blank" rel="noopener noreferrer" className="glass px-3 py-1.5 rounded-sm flex items-center gap-2 hover:border-blood-500/30 transition-all">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blood-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blood-500" />
                </span>
                <span className="text-anthracite-300">YOROBO 3</span>
                <span className="font-mono font-bold text-white">{yoroboViews ? formatCompact(yoroboViews) : '28,9M'}</span>
                <span className="text-anthracite-400">vues</span>
              </a>
              <a href={LINKS.deezer} target="_blank" rel="noopener noreferrer" className="glass px-3 py-1.5 rounded-sm flex items-center gap-2 hover:border-gold-400/30 transition-all">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-400" />
                </span>
                <span className="text-anthracite-300">Deezer</span>
                <span className="font-mono font-bold text-white">{artist ? formatCompact(artist.nb_fan) : '52K'}</span>
                <span className="text-anthracite-400">fans · direct</span>
              </a>
            </div>

            {/* Boutons */}
            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href={LINKS.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blood-600 hover:bg-blood-500 font-semibold text-white text-sm rounded-sm transition-all hover:scale-[1.03] glow-red"
              >
                Écouter maintenant
              </a>
              <a
                href="#/charts"
                className="px-6 py-3 font-semibold text-white text-sm border border-white/20 rounded-sm hover:bg-white/5 transition-all"
              >
                Classements en direct
              </a>
            </div>
          </div>
        </div>

        {/* Compte à rebours Ébimpé — bandeau bas */}
        <div className="mt-10 glass-red rounded-sm p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-5 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <div className="text-center md:text-left">
            <p className="text-[11px] font-display tracking-[0.35em] uppercase text-blood-300 mb-1">
              Concert événement · 26 décembre 2026 · {EBIMPE.heure}
            </p>
            <p className="text-sm sm:text-base font-bold text-white">
              {EBIMPE.label} — objectif {EBIMPE.objectif}
            </p>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-4">
            {[
              { v: countdown.j, l: 'jours' },
              { v: countdown.h, l: 'heures' },
              { v: countdown.m, l: 'min' },
              { v: countdown.s, l: 'sec' },
            ].map((u, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-mono font-bold text-xl sm:text-3xl text-white bg-anthracite-950/80 border border-blood-600/30 rounded-sm px-2.5 py-1.5 min-w-[2.8rem] sm:min-w-[4rem] text-center">
                  {String(u.v).padStart(2, '0')}
                </span>
                <span className="mt-1 text-[10px] uppercase tracking-widest text-anthracite-300">{u.l}</span>
              </div>
            ))}
          </div>
          <a
            href={EBIMPE.billets}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 bg-blood-600 hover:bg-blood-500 text-white text-sm font-semibold rounded-sm transition-all glow-red shrink-0"
          >
            Billetterie officielle
          </a>
        </div>
      </div>
    </section>
  );
}
