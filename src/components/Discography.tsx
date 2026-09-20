import { useState } from 'react';
import { Play, Pause, ExternalLink, Lock, Headphones } from 'lucide-react';
import { HITS, RARE_TRACKS, FEATURING_RUMORS, TEASERS } from '@/data';

type Tab = 'hits' | 'rare' | 'rumors' | 'teasers';

export default function Discography() {
  const [tab, setTab] = useState<Tab>('hits');
  const [playing, setPlaying] = useState<number | null>(null);

  const tabs: { id: Tab; label: string }[] = [
    { id: 'hits', label: 'Hits' },
    { id: 'rare', label: 'Morceaux Rares' },
    { id: 'rumors', label: 'Featurings & Rumeurs' },
    { id: 'teasers', label: 'Teasers & Snippets' },
  ];

  const togglePlay = (idx: number) => {
    setPlaying(playing === idx ? null : idx);
  };

  return (
    <section id="disco" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-anthracite-950 via-anthracite-900 to-anthracite-950">
      <div className="absolute inset-0 bg-radial-red opacity-50" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-blood-400">Musique</span>
          <h2 className="mt-3 font-black-display text-4xl sm:text-5xl md:text-6xl text-white">
            DISCOGRAPHIE <span className="text-gradient-red">1X</span>
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-blood-500 to-gold-400" />
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => { setTab(t.id); setPlaying(null); }}
              className={`px-5 py-2.5 text-sm font-semibold uppercase tracking-wide rounded-sm transition-all ${
                tab === t.id
                  ? 'bg-blood-600 text-white glow-red'
                  : 'glass text-anthracite-200 hover:text-white border border-white/5'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {tab === 'hits' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {HITS.map((track, idx) => (
              <div
                key={idx}
                className="group glass rounded-sm overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                style={{ borderLeft: `3px solid ${track.color}` }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = `0 0 30px ${track.color}20`)}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'none')}
              >
                <div className="flex items-center gap-4 p-4">
                  {/* Play button */}
                  <button
                    onClick={() => togglePlay(idx)}
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${track.color}, ${track.color}aa)`,
                      boxShadow: playing === idx ? `0 0 20px ${track.color}` : 'none',
                    }}
                  >
                    {playing === idx ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white ml-0.5" />}
                  </button>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white truncate">{track.title}</h4>
                    <p className="text-xs text-anthracite-300 mt-0.5">{track.album} · {track.year}</p>
                    <div className="flex items-center gap-3 mt-1.5">
                      <span className="text-xs text-gold-400 font-medium">{track.streams} streams</span>
                      <span className="text-xs text-anthracite-400">{track.duration}</span>
                    </div>
                  </div>

                  <a
                    href={track.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-0 group-hover:opacity-100 transition-opacity text-anthracite-300 hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                {/* Progress bar (decorative) */}
                {playing === idx && (
                  <div className="h-1 bg-anthracite-800">
                    <div
                      className="h-full transition-all duration-1000"
                      style={{
                        background: `linear-gradient(90deg, ${track.color}, ${track.color}80)`,
                        width: '45%',
                        animation: 'gradient 3s ease infinite',
                      }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === 'rare' && (
          <div className="grid sm:grid-cols-2 gap-4">
            {RARE_TRACKS.map((track, idx) => (
              <div
                key={idx}
                className="group glass rounded-sm p-5 flex items-start gap-4 transition-all hover:border-blood-500/30"
                style={{ borderLeft: `3px solid ${track.color}` }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 rounded-sm flex items-center justify-center"
                  style={{ background: `${track.color}20` }}
                >
                  <Lock className="w-4 h-4" style={{ color: track.color }} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">{track.title}</h4>
                    <span className="text-xs text-anthracite-400">· {track.year}</span>
                  </div>
                  <p className="text-xs text-anthracite-300 leading-relaxed">{track.note}</p>
                </div>
                <Headphones className="w-5 h-5 text-anthracite-400 group-hover:text-blood-400 transition-colors flex-shrink-0" />
              </div>
            ))}
          </div>
        )}

        {tab === 'rumors' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {FEATURING_RUMORS.map((rumor, idx) => (
              <div
                key={idx}
                className="group glass rounded-sm overflow-hidden transition-all hover:scale-[1.02]"
                style={{ borderTop: `2px solid ${rumor.color}` }}
              >
                <div className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-black-display text-lg text-white">{rumor.artist}</h4>
                    <span
                      className="text-xs px-2 py-0.5 rounded-sm font-medium"
                      style={{ background: `${rumor.color}25`, color: rumor.color }}
                    >
                      {rumor.status}
                    </span>
                  </div>
                  <p className="text-xs text-anthracite-200 leading-relaxed mb-4">{rumor.desc}</p>

                  {/* Confidence bar */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-anthracite-400">Probabilité</span>
                      <span className="text-xs font-bold" style={{ color: rumor.color }}>{rumor.confidence}%</span>
                    </div>
                    <div className="h-2 bg-anthracite-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full transition-all duration-1000"
                        style={{
                          width: `${rumor.confidence}%`,
                          background: `linear-gradient(90deg, ${rumor.color}, ${rumor.color}80)`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {tab === 'teasers' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TEASERS.map((teaser, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-video rounded-sm overflow-hidden border border-white/10 transition-all group-hover:border-blood-500/50 group-hover:scale-[1.02]">
                  <img
                    src={teaser.thumb}
                    alt={teaser.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/30 to-transparent" />

                  {/* Play overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-blood-600/80 flex items-center justify-center group-hover:scale-110 group-hover:bg-blood-500 transition-all glow-red">
                      <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                    </div>
                  </div>

                  {/* Duration badge */}
                  <div className="absolute top-2 right-2 px-2 py-0.5 bg-anthracite-950/80 text-xs text-white rounded-sm font-mono">
                    {teaser.duration}
                  </div>

                  {/* Source tooltip on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-all">
                    <a
                      href={teaser.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-xs text-white/70 hover:text-white"
                    >
                      <ExternalLink className="w-3 h-3" /> Source: YouTube
                    </a>
                  </div>
                </div>
                <div className="mt-3">
                  <h4 className="text-sm font-semibold text-white">{teaser.title}</h4>
                  <p className="text-xs text-anthracite-400 mt-0.5">{teaser.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
