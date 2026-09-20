import { useState } from 'react';
import { Heart, MessageCircle, ExternalLink, Play, Rss } from 'lucide-react';
import { SOCIAL_FEED, LATEST_VIDEOS_FALLBACK, LINKS } from '@/data';
import { useLatestVideos, timeAgo, formatCompact } from '@/lib/live';

function PlatformIcon({ platform }: { platform: string }) {
  const iconMap: Record<string, string> = {
    tiktok: '♪',
    instagram: '◎',
    youtube: '▶',
    twitter: '𝕏',
    snapchat: '👻',
    camera: '📷',
  };
  return <span className="text-lg text-anthracite-300">{iconMap[platform] || '📌'}</span>;
}

export default function SocialFeed() {
  const [filter, setFilter] = useState<string>('all');
  const { videos, live } = useLatestVideos(LATEST_VIDEOS_FALLBACK);

  const platforms = ['all', 'Instagram', 'YouTube', 'TikTok', 'X (Twitter)'];
  const filtered = filter === 'all' ? SOCIAL_FEED : SOCIAL_FEED.filter((p) => p.platform === filter);

  return (
    <section id="feed" className="relative py-24 sm:py-32 overflow-hidden bg-anthracite-900">
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-blood-400">En temps réel</span>
          <h2 className="mt-3 font-black-display text-4xl sm:text-5xl md:text-6xl text-white">
            FLUX <span className="text-gradient-red">ACTUALITÉS</span>
          </h2>
          <p className="mt-4 text-sm text-anthracite-300 max-w-xl mx-auto">
            Les dernières vidéos publiées par HIMRA, récupérées automatiquement depuis le flux RSS officiel
            de sa chaîne YouTube, plus ses réseaux sociaux.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-blood-500 to-gold-400" />
        </div>

        {/* ===== Flux automatique YouTube (RSS chaîne officielle) ===== */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-2">
              <Rss className="w-5 h-5 text-blood-400" />
              <h3 className="font-display text-xl tracking-widest text-white uppercase">
                Dernières sorties — chaîne officielle
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className={`${live ? 'animate-ping' : ''} absolute inline-flex h-full w-full rounded-full ${live ? 'bg-green-400' : 'bg-anthracite-400'} opacity-75`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${live ? 'bg-green-500' : 'bg-anthracite-400'}`} />
              </span>
              <span className="text-xs text-anthracite-300 font-display tracking-widest uppercase">
                {live ? 'Flux RSS en direct' : 'Flux (cache)'}
              </span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {videos.slice(0, 6).map((v) => (
              <a
                key={v.id}
                href={v.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-sm overflow-hidden transition-all hover:scale-[1.02] hover:border-blood-500/30 block"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={v.thumb}
                    alt={v.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/90 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 rounded-full bg-blood-600/90 flex items-center justify-center glow-red">
                      <Play className="w-6 h-6 text-white ml-1" fill="white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 flex items-center gap-2">
                    <span className="px-2 py-0.5 bg-black/70 text-[10px] font-semibold text-white rounded-sm uppercase tracking-wide">
                      YouTube
                    </span>
                    {v.views != null && (
                      <span className="px-2 py-0.5 bg-blood-600/80 text-[10px] font-semibold text-white rounded-sm">
                        {formatCompact(v.views)} vues
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-semibold text-white leading-snug line-clamp-2">{v.title}</h4>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-anthracite-400">{timeAgo(v.published)}</span>
                    <span className="flex items-center gap-1 text-xs text-anthracite-300 group-hover:text-blood-400 transition-colors">
                      <ExternalLink className="w-3 h-3" /> Voir la source
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
          <p className="mt-4 text-[11px] text-anthracite-400 text-center">
            Source : flux RSS officiel YouTube de la chaîne « Himra officiel » —{' '}
            <a href={LINKS.youtubeChannel} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              youtube.com/channel/UCck5J0M6YKnXCrnuXkCFuvw
            </a>
          </p>
        </div>

        {/* ===== Réseaux sociaux ===== */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {platforms.map((p) => (
            <button
              key={p}
              onClick={() => setFilter(p)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-sm transition-all ${
                filter === p
                  ? 'bg-blood-600 text-white glow-red'
                  : 'glass text-anthracite-300 hover:text-white border border-white/5'
              }`}
            >
              {p === 'all' ? 'Tous' : p}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((post, idx) => (
            <a
              key={idx}
              href={post.source}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-sm overflow-hidden transition-all hover:scale-[1.02] hover:border-blood-500/30 block"
            >
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blood-500 to-blood-900 flex items-center justify-center text-white font-bold text-sm">
                      H
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{post.handle}</p>
                      <p className="text-xs text-anthracite-400">{post.platform} · {post.time}</p>
                    </div>
                  </div>
                  <PlatformIcon platform={post.icon} />
                </div>

                <p className="text-sm text-anthracite-100 leading-relaxed mb-4">{post.text}</p>

                <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                  <span className="flex items-center gap-1.5 text-xs text-anthracite-300 group-hover:text-blood-400 transition-colors">
                    <Heart className="w-4 h-4" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-anthracite-300">
                    <MessageCircle className="w-4 h-4" /> {post.comments}
                  </span>
                  <span className="ml-auto flex items-center gap-1 text-xs text-anthracite-400 group-hover:text-white transition-colors">
                    <ExternalLink className="w-3 h-3" /> Source
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
