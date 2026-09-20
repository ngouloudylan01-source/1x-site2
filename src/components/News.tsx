import { useState } from 'react';
import { ExternalLink, Play, Rss, Copy, Check } from 'lucide-react';
import { LATEST_VIDEOS_FALLBACK, LINKS, PRESS } from '@/data';
import { useLatestVideos, timeAgo, formatCompact } from '@/lib/live';
import { SectionHead } from './Section';

// Actualités : flux RSS YouTube automatique + revue de presse sourcée
export default function News() {
  const { videos, live } = useLatestVideos(LATEST_VIDEOS_FALLBACK);
  const [copied, setCopied] = useState<string | null>(null);

  const copySource = (url: string) => {
    navigator.clipboard?.writeText(url).then(() => {
      setCopied(url);
      setTimeout(() => setCopied(null), 1500);
    });
  };

  return (
    <section id="actus" className="relative py-24 sm:py-28 overflow-hidden bg-anthracite-900">
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Mise à jour automatique"
          title={<>ACTUALITÉS <span className="text-gradient-red">&amp; SORTIES</span></>}
          desc="Les dernières vidéos sont récupérées automatiquement depuis le flux RSS officiel de sa chaîne YouTube. Chaque carte porte sa date, sa source et un bouton « copier la source »."
        />

        {/* Flux YouTube automatique */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <h3 className="flex items-center gap-2 font-display text-lg tracking-widest text-white uppercase">
            <Rss className="w-5 h-5 text-blood-400" /> Dernières vidéos officielles
          </h3>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className={`${live ? 'animate-ping' : ''} absolute inline-flex h-full w-full rounded-full ${live ? 'bg-green-400' : 'bg-anthracite-400'} opacity-75`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${live ? 'bg-green-500' : 'bg-anthracite-400'}`} />
            </span>
            <span className="text-[11px] text-anthracite-300 font-display tracking-widest uppercase">
              {live ? 'Flux RSS en direct' : 'Dernières valeurs connues'}
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {videos.slice(0, 6).map((v) => (
            <article key={v.id} className="group glass rounded-sm overflow-hidden transition-all hover:border-blood-500/30">
              <a href={v.url} target="_blank" rel="noopener noreferrer" className="block relative aspect-video overflow-hidden">
                <img src={v.thumb} alt={v.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/90 via-transparent to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="w-12 h-12 rounded-full bg-blood-600/90 flex items-center justify-center glow-red">
                    <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                  </span>
                </div>
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-black/70 text-[10px] font-semibold text-white rounded-sm uppercase">YouTube</span>
                  {v.views != null && (
                    <span className="px-2 py-0.5 bg-blood-600/80 text-[10px] font-semibold text-white rounded-sm">
                      {formatCompact(v.views)} vues
                    </span>
                  )}
                </div>
              </a>
              <div className="p-4">
                <h4 className="text-sm font-semibold text-white leading-snug line-clamp-2">{v.title}</h4>
                <div className="mt-2.5 flex items-center justify-between">
                  <span className="text-[11px] text-anthracite-400">{timeAgo(v.published)}</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => copySource(v.url)}
                      className="flex items-center gap-1 text-[11px] text-anthracite-300 hover:text-white transition-colors"
                      title="Copier la source"
                    >
                      {copied === v.url ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                      {copied === v.url ? 'Copié' : 'Copier la source'}
                    </button>
                    <a href={v.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[11px] text-anthracite-300 hover:text-blood-400 transition-colors">
                      <ExternalLink className="w-3 h-3" /> Voir
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Revue de presse */}
        <h3 className="font-display text-lg tracking-widest text-white uppercase mb-6">Médias &amp; presse</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRESS.map((p, idx) => (
            <a
              key={idx}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-sm p-5 hover:border-blood-500/30 transition-all block"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-blood-400">{p.media}</span>
                <span className="text-[10px] font-mono text-anthracite-400">{p.date}</span>
              </div>
              <p className="text-sm text-anthracite-100 leading-relaxed line-clamp-3">{p.title}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-[11px] text-anthracite-400 group-hover:text-white transition-colors">
                <ExternalLink className="w-3 h-3" /> Lire l'article
              </span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-[11px] text-anthracite-400">
          Flux automatique :{' '}
          <a href={LINKS.youtubeChannel} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
            chaîne officielle « Himra officiel »
          </a>
          {' '}· Les réseaux TikTok / Instagram / Snapchat sont liés directement (pas d'aspiration de données, conformément à leurs CGU).
        </p>
      </div>
    </section>
  );
}
