import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { PHOTOS, CAROUSEL_EVENTS, VIDEOS, LINKS } from '@/data';
import { useDeezerArtist, useYouTubeStats, formatCompact } from '@/lib/live';
import SourceTooltip from './SourceTooltip';

export default function Hero() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [accentColor, setAccentColor] = useState(CAROUSEL_EVENTS[0].accent);
  const scrollRef = useRef<HTMLDivElement>(null);

  const activeEvent = CAROUSEL_EVENTS[activeIdx];

  // Stats réelles en direct
  const { artist } = useDeezerArtist();
  const { stats } = useYouTubeStats([VIDEOS.BARA_BARA, VIDEOS.NOSTALGIE]);
  const baraViews = stats[VIDEOS.BARA_BARA]?.viewCount;
  const nostalgieViews = stats[VIDEOS.NOSTALGIE]?.viewCount;

  useEffect(() => {
    setAccentColor(activeEvent.accent);
  }, [activeIdx, activeEvent.accent]);

  // Défilement automatique du carrousel toutes les 5s
  useEffect(() => {
    const t = setInterval(() => {
      setActiveIdx((i) => (i + 1) % CAROUSEL_EVENTS.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const cardWidth = 280;
    container.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-anthracite-950">
      {/* Textured background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at 50% 40%, ${accentColor}30 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, ${accentColor}15 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, ${accentColor}10 0%, transparent 50%)`,
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-60" />

      {/* Floating glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow transition-all duration-1000"
        style={{ background: `${accentColor}25` }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse-glow transition-all duration-1000"
        style={{ background: `${accentColor}20`, animationDelay: '2s' }}
      />

      {/* Scan line effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div
          className="absolute left-0 right-0 h-px animate-scan"
          style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
        />
      </div>

      {/* Top tag */}
      <div className="relative z-10 mt-24 mb-6 flex items-center gap-3 animate-slide-up">
        <span className="h-px w-12" style={{ background: accentColor }} />
        <span className="text-xs font-display tracking-[0.4em] uppercase text-anthracite-300">
          Site Officiel · Côte d'Ivoire
        </span>
        <span className="h-px w-12" style={{ background: accentColor }} />
      </div>

      {/* Main title */}
      <h1 className="relative z-10 font-black-display text-center text-white leading-none animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-glow-red">
          HIMRA
        </span>
        <span className="block text-2xl sm:text-3xl md:text-4xl mt-2 font-display tracking-[0.3em] text-gold-400">
          1X · EN GANG
        </span>
      </h1>

      {/* Central image — HIMRA faisant son signe 1X, trophées en main (photo réelle) */}
      <div className="relative z-10 mt-10 mb-6 perspective-2000">
        <div className="relative animate-float-3d group">
          {/* Glow ring behind */}
          <div
            className="absolute inset-0 rounded-full blur-2xl scale-110 transition-all duration-1000"
            style={{ background: `${accentColor}40` }}
          />
          {/* Image frame */}
          <div
            className="relative w-64 h-80 sm:w-80 sm:h-[26rem] md:w-96 md:h-[30rem] rounded-sm overflow-hidden border-2 transition-all duration-700"
            style={{ borderColor: accentColor, boxShadow: `0 0 40px ${accentColor}50, 0 20px 60px rgba(0,0,0,0.8)` }}
          >
            <img
              src={PHOTOS.heroTrophees.src}
              alt="HIMRA, bras croisés en signe 1X, trophées en main"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-transparent to-transparent" />
            <div
              className="absolute inset-0 mix-blend-overlay transition-all duration-700"
              style={{ background: `linear-gradient(180deg, transparent, ${accentColor}30)` }}
            />
            {/* Corner accents */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2" style={{ borderColor: accentColor }} />
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2" style={{ borderColor: accentColor }} />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2" style={{ borderColor: accentColor }} />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2" style={{ borderColor: accentColor }} />
            {/* Label */}
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="text-xs font-display tracking-widest text-white/80">LE SIGNE 1X · TROPHÉES EN MAIN</span>
              <span className="text-xs font-mono text-white/60">©2026</span>
            </div>
            {/* Tooltip source */}
            <SourceTooltip credit={PHOTOS.heroTrophees.credit} source={PHOTOS.heroTrophees.source} position="top" />
          </div>
        </div>
      </div>

      {/* Live stat badges — vraies données en direct */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-3 mb-6 animate-slide-up" style={{ animationDelay: '0.25s' }}>
        <a
          href={LINKS.baraBara}
          target="_blank"
          rel="noopener noreferrer"
          className="glass px-4 py-2 rounded-sm flex items-center gap-2 hover:border-blood-500/40 transition-all"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
          </span>
          <span className="text-xs text-anthracite-300">BARA BARA</span>
          <span className="text-sm font-black-display text-white">
            {baraViews ? formatCompact(baraViews) : '14M+'}
          </span>
          <span className="text-[10px] text-anthracite-400 uppercase">vues YouTube</span>
        </a>
        <a
          href={LINKS.nostalgie}
          target="_blank"
          rel="noopener noreferrer"
          className="glass px-4 py-2 rounded-sm flex items-center gap-2 hover:border-blood-500/40 transition-all"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500" />
          </span>
          <span className="text-xs text-anthracite-300">NOSTALGIE</span>
          <span className="text-sm font-black-display text-white">
            {nostalgieViews ? formatCompact(nostalgieViews) : '13M+'}
          </span>
          <span className="text-[10px] text-anthracite-400 uppercase">vues YouTube</span>
        </a>
        <a
          href={LINKS.deezer}
          target="_blank"
          rel="noopener noreferrer"
          className="glass px-4 py-2 rounded-sm flex items-center gap-2 hover:border-gold-400/40 transition-all"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-400" />
          </span>
          <span className="text-xs text-anthracite-300">Deezer</span>
          <span className="text-sm font-black-display text-white">
            {artist ? formatCompact(artist.nb_fan) : '52K'}
          </span>
          <span className="text-[10px] text-anthracite-400 uppercase">fans · live</span>
        </a>
      </div>

      {/* Tagline */}
      <p className="relative z-10 max-w-xl text-center text-anthracite-300 text-sm sm:text-base px-6 mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
        Le pionnier du Drill Ivoire. Du quartier de Cocody au sommet du rap africain.
        Un mouvement, un signe, une famille : <span style={{ color: accentColor }} className="font-semibold">EN GANG</span>.
      </p>

      {/* CTA buttons */}
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <a
          href="#disco"
          className="px-8 py-3 font-semibold text-white rounded-sm transition-all hover:scale-105"
          style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}dd)`, boxShadow: `0 0 30px ${accentColor}40` }}
        >
          Écouter la discographie
        </a>
        <a
          href="#bio"
          className="px-8 py-3 font-semibold text-white border border-white/20 rounded-sm hover:bg-white/5 transition-all"
        >
          Son histoire
        </a>
      </div>

      {/* Interactive carousel — événements marquants (photos réelles) */}
      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display text-lg tracking-widest text-white/80 uppercase">
            Moments marquants
          </h3>
          <div className="flex gap-2">
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
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar pb-4 snap-x"
        >
          {CAROUSEL_EVENTS.map((event, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setActiveIdx(idx)}
              className="group relative flex-shrink-0 w-64 sm:w-72 snap-center cursor-pointer"
            >
              <div
                className="relative h-44 sm:h-48 rounded-sm overflow-hidden border transition-all duration-500 card-3d"
                style={{
                  borderColor: activeIdx === idx ? event.accent : 'rgba(255,255,255,0.1)',
                  boxShadow: activeIdx === idx ? `0 0 25px ${event.accent}40` : 'none',
                }}
              >
                <img
                  src={event.img}
                  alt={event.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/40 to-transparent" />
                <div
                  className="absolute top-2 left-2 px-2 py-0.5 text-xs font-display tracking-wider rounded-sm transition-all"
                  style={{ background: `${event.accent}cc`, color: '#fff' }}
                >
                  {event.date}
                </div>

                {/* Info-bulle de source (traçabilité) */}
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-all duration-300 bg-anthracite-950/80 p-3">
                  <a
                    href={event.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-1.5 text-xs text-white/80 hover:text-white"
                  >
                    <ExternalLink className="w-3 h-3 mt-0.5 flex-shrink-0 text-blood-400" />
                    <span className="leading-snug">{event.credit}</span>
                  </a>
                </div>
              </div>

              <div className="mt-3 px-1">
                <h4 className="text-sm font-semibold text-white leading-snug">{event.title}</h4>
                <p className="text-xs text-anthracite-300 mt-1 leading-relaxed">{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 mt-6 mb-4 flex flex-col items-center gap-2 animate-float-3d">
        <span className="text-xs font-display tracking-widest text-anthracite-400 uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-blood-500 to-transparent" />
      </div>
    </section>
  );
}
