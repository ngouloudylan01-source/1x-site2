import { useState } from 'react';
import { ExternalLink, LayoutGrid, List } from 'lucide-react';
import { ALBUMS, LINKS } from '@/data';
import { SectionHead } from './Section';

// Discographie complète — vue pochettes / vue liste, pochettes officielles
export default function Discography() {
  const [view, setView] = useState<'grid' | 'list'>('grid');

  return (
    <section id="disco" className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-anthracite-950 via-anthracite-900 to-anthracite-950">
      <div className="absolute inset-0 bg-radial-red opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Musique"
          title={<>DISCOGRAPHIE <span className="text-gradient-red">COMPLÈTE</span></>}
          desc="Albums, EP et mixtapes dans l'ordre chronologique, avec labels, featurings et liens d'écoute. Pochettes officielles."
        />

        {/* Bascule vue */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setView('grid')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-sm transition-all ${
              view === 'grid' ? 'bg-blood-600 text-white' : 'glass text-anthracite-300 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" /> Pochettes
          </button>
          <button
            onClick={() => setView('list')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-sm transition-all ${
              view === 'list' ? 'bg-blood-600 text-white' : 'glass text-anthracite-300 hover:text-white'
            }`}
          >
            <List className="w-3.5 h-3.5" /> Liste
          </button>
        </div>

        {view === 'grid' ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {ALBUMS.map((album, idx) => (
              <a key={idx} href={album.link} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10 transition-all duration-300 group-hover:border-blood-500/50 group-hover:shadow-[0_0_25px_rgba(200,16,46,0.25)]">
                  <img
                    src={album.cover}
                    alt={`Pochette officielle — ${album.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-2 left-2 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-sm bg-black/70 text-white">
                    {album.type}
                  </span>
                  {/* Pastille source */}
                  <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-150 bg-blood-600/95 px-3 py-2">
                    <span className="flex items-center justify-between text-[10px] text-white font-semibold">
                      Pochette officielle · Deezer <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
                <div className="mt-2.5">
                  <h3 className="text-sm font-bold text-white leading-snug line-clamp-1">{album.title}</h3>
                  <p className="text-[11px] text-anthracite-400 mt-0.5">{album.year} · {album.label}</p>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto space-y-3">
            {ALBUMS.map((album, idx) => (
              <a
                key={idx}
                href={album.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 glass rounded-sm p-4 hover:border-blood-500/30 transition-all"
              >
                <img
                  src={album.cover}
                  alt={album.title}
                  loading="lazy"
                  className="w-16 h-16 rounded-sm object-cover border border-white/10 flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-bold text-white">{album.title}</h3>
                    <span className="px-1.5 py-0.5 text-[10px] font-semibold uppercase bg-blood-600/20 text-blood-300 rounded-sm">
                      {album.type}
                    </span>
                  </div>
                  <p className="text-xs text-anthracite-300 mt-1">{album.year} · {album.label}</p>
                  <p className="text-xs text-anthracite-400 mt-0.5 line-clamp-1">{album.note}</p>
                  {album.feats && (
                    <p className="text-[11px] text-gold-400/80 mt-0.5 line-clamp-1">Feat. {album.feats}</p>
                  )}
                </div>
                <ExternalLink className="w-4 h-4 text-anthracite-400 group-hover:text-white transition-colors flex-shrink-0" />
              </a>
            ))}
          </div>
        )}

        {/* Liens plateformes */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {[
            { label: 'Spotify', href: LINKS.spotify },
            { label: 'Apple Music', href: LINKS.appleMusic },
            { label: 'YouTube', href: LINKS.youtube },
            { label: 'Deezer', href: LINKS.deezer },
            { label: 'Boomplay', href: LINKS.boomplay },
            { label: 'Audiomack', href: LINKS.audiomack },
          ].map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 glass text-xs font-semibold text-anthracite-200 hover:text-white hover:border-blood-500/30 rounded-sm transition-all uppercase tracking-wide"
            >
              {p.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
