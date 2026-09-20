import { useEffect, useState } from 'react';
import { PHOTOS, EBIMPE, LINKS, VIDEOS } from '@/data';
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

export default function Hero() {
  const countdown = useCountdown(EBIMPE.date);
  const { artist } = useDeezerArtist();
  const { stats } = useYouTubeStats([VIDEOS.BARA_BARA]);
  const baraViews = stats[VIDEOS.BARA_BARA]?.viewCount;

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

  const keyFigures = [
    { n: '9+', label: 'années de carrière', src: 'Depuis Babi Vibes 2017', href: LINKS.critikmag },
    { n: '9', label: 'projets sortis', src: 'Discographie Deezer', href: LINKS.deezer },
    { n: '4+', label: 'certifications', src: 'APRODEMCI · SNEP', href: 'https://snepmusique.com/les-certifications/' },
    { n: '7+', label: 'pays de concerts', src: 'CI · FR · US · BE · LU…', href: LINKS.tikerama },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-anthracite-950 pt-24 pb-16">
      {/* Arrière-plan composite : grille béton + dégradé rouge-noir + 1X filigrane */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 35%, rgba(200,16,46,0.20) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 85% 15%, rgba(200,16,46,0.10) 0%, transparent 55%)',
        }}
      />
      <div className="absolute inset-0 bg-noise opacity-50" />

      {/* « 1X » géant en filigrane, avec parallaxe douce */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none transition-transform duration-300 ease-out"
        style={{ transform: `translate(${tilt.x * -14}px, ${tilt.y * -10}px)` }}
      >
        <span className="font-black-display text-[38vw] leading-none text-blood-900/15 blur-[2px]">1X</span>
      </div>

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6 animate-slide-up">
          <span className="h-px w-12 bg-blood-500" />
          <span className="text-[11px] font-display tracking-[0.45em] uppercase text-anthracite-300">
            Hommage · Côte d'Ivoire
          </span>
          <span className="h-px w-12 bg-blood-500" />
        </div>

        {/* Titre */}
        <h1 className="font-black-display text-center text-white leading-none animate-slide-up" style={{ animationDelay: '0.1s' }}>
          <span className="block text-6xl sm:text-8xl md:text-9xl text-glow-red tracking-tight">HIMRA</span>
          <span className="block text-xl sm:text-2xl md:text-3xl mt-3 font-display tracking-[0.35em] text-gold-400">
            1X — EN GANG
          </span>
        </h1>

        <p className="mt-5 max-w-xl text-center text-anthracite-300 text-sm sm:text-base animate-slide-up" style={{ animationDelay: '0.2s' }}>
          De Cocody au Zénith de Paris, un signe est devenu le langage de toute une génération.
          Le Drill Ivoire a un roi, et il rappe en nouchi.
        </p>

        {/* Photo centrale — Himra faisant le signe 1X, halo rouge */}
        <div
          className="relative mt-10 mb-8 group animate-slide-up"
          style={{
            animationDelay: '0.25s',
            transform: `perspective(1200px) rotateY(${tilt.x * 3}deg) rotateX(${tilt.y * -2}deg)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {/* Halo rouge */}
          <div className="absolute -inset-8 rounded-full blur-3xl bg-blood-600/30 animate-pulse-glow" />
          {/* Ombre au sol */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-[50%] bg-black/70 blur-md" />

          <div className="relative w-64 h-80 sm:w-80 sm:h-[26rem] md:w-[22rem] md:h-[28rem] rounded-sm overflow-hidden border-2 border-blood-500/70 shadow-3d-deep">
            <img
              src={PHOTOS.heroTrophees.src}
              alt="HIMRA, bras croisés en signe 1X, trophées en main"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-transparent to-transparent" />
            {/* Coins */}
            <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-blood-500" />
            <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-blood-500" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-blood-500" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-blood-500" />
            <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
              <span className="text-[11px] font-display tracking-widest text-white/80">LE SIGNE 1X</span>
              <span className="text-[11px] font-mono text-white/50">©2026</span>
            </div>
            <SourceTooltip credit={PHOTOS.heroTrophees.credit} source={PHOTOS.heroTrophees.source} position="top" />
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
          <a
            href={LINKS.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 bg-blood-600 hover:bg-blood-500 font-semibold text-white text-sm rounded-sm transition-all hover:scale-[1.03] glow-red"
          >
            Écouter maintenant
          </a>
          <a
            href="#parcours"
            className="px-7 py-3 font-semibold text-white text-sm border border-white/20 rounded-sm hover:bg-white/5 transition-all"
          >
            Son histoire
          </a>
        </div>

        {/* 4 chiffres clés, sourcés */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-3xl mb-10 animate-slide-up" style={{ animationDelay: '0.35s' }}>
          {keyFigures.map((f, i) => (
            <a
              key={i}
              href={f.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-sm p-4 text-center hover:border-blood-500/30 transition-all"
            >
              <span className="block font-black-display text-3xl text-white">{f.n}</span>
              <span className="block text-[11px] text-anthracite-300 mt-1 uppercase tracking-wide">{f.label}</span>
              <span className="block text-[10px] text-anthracite-400 mt-1.5">{f.src}</span>
            </a>
          ))}
        </div>

        {/* Stats en direct discrètes */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10 text-xs animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a href={LINKS.baraBara} target="_blank" rel="noopener noreferrer" className="glass px-3.5 py-1.5 rounded-sm flex items-center gap-2 hover:border-blood-500/30 transition-all">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blood-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blood-500" />
            </span>
            <span className="text-anthracite-300">BARA BARA</span>
            <span className="font-mono font-bold text-white">{baraViews ? formatCompact(baraViews) : '14M+'}</span>
            <span className="text-anthracite-400">vues · YouTube</span>
          </a>
          <a href={LINKS.deezer} target="_blank" rel="noopener noreferrer" className="glass px-3.5 py-1.5 rounded-sm flex items-center gap-2 hover:border-gold-400/30 transition-all">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gold-400" />
            </span>
            <span className="text-anthracite-300">Deezer</span>
            <span className="font-mono font-bold text-white">{artist ? formatCompact(artist.nb_fan) : '52K'}</span>
            <span className="text-anthracite-400">fans · en direct</span>
          </a>
        </div>

        {/* Compte à rebours Ébimpé */}
        <div className="w-full max-w-2xl glass-red rounded-sm p-5 sm:p-6 text-center animate-slide-up" style={{ animationDelay: '0.45s' }}>
          <p className="text-[11px] font-display tracking-[0.35em] uppercase text-blood-300 mb-1">
            Concert événement · 26 décembre 2026 · {EBIMPE.heure}
          </p>
          <p className="text-sm sm:text-base font-bold text-white mb-4">
            {EBIMPE.label} — objectif {EBIMPE.objectif}
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-5 mb-4">
            {[
              { v: countdown.j, l: 'jours' },
              { v: countdown.h, l: 'heures' },
              { v: countdown.m, l: 'min' },
              { v: countdown.s, l: 'sec' },
            ].map((u, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="font-mono font-bold text-2xl sm:text-4xl text-white bg-anthracite-950/80 border border-blood-600/30 rounded-sm px-3 py-2 min-w-[3.2rem] sm:min-w-[4.5rem]">
                  {String(u.v).padStart(2, '0')}
                </span>
                <span className="mt-1.5 text-[10px] uppercase tracking-widest text-anthracite-300">{u.l}</span>
              </div>
            ))}
          </div>
          <a
            href={EBIMPE.billets}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2.5 bg-blood-600 hover:bg-blood-500 text-white text-sm font-semibold rounded-sm transition-all glow-red"
          >
            Billetterie officielle
          </a>
        </div>
      </div>
    </section>
  );
}
