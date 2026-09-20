import { useState } from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';
import { SOCIAL_FEED } from '@/data';

function PlatformIcon({ platform }: { platform: string }) {
  const iconMap: Record<string, string> = {
    tiktok: '🎵',
    instagram: '📸',
    youtube: '▶',
    twitter: '𝕏',
    snapchat: '👻',
    camera: '📷',
  };
  return <span className="text-lg">{iconMap[platform] || '📌'}</span>;
}

export default function SocialFeed() {
  const [filter, setFilter] = useState<string>('all');

  const platforms = ['all', 'Instagram', 'YouTube', 'Getty'];
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
            Les dernières publications d'HIMRA sur tous ses réseaux sociaux, agrégées en temps réel.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-blood-500 to-gold-400" />
        </div>

        {/* Platform filters */}
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

        {/* Live indicator */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
          </span>
          <span className="text-xs text-anthracite-300 font-display tracking-widest uppercase">Live Feed</span>
        </div>

        {/* Feed grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((post, idx) => (
            <div
              key={idx}
              className="group glass rounded-sm overflow-hidden transition-all hover:scale-[1.02] hover:border-blood-500/30"
            >
              <div className="p-5">
                {/* Header */}
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

                {/* Text */}
                <p className="text-sm text-anthracite-100 leading-relaxed mb-4">{post.text}</p>

                {/* Stats */}
                <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                  <button className="flex items-center gap-1.5 text-xs text-anthracite-300 hover:text-blood-400 transition-colors">
                    <Heart className="w-4 h-4" /> {post.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-anthracite-300 hover:text-blood-400 transition-colors">
                    <MessageCircle className="w-4 h-4" /> {post.comments}
                  </button>
                  <a
                    href={post.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-1 text-xs text-anthracite-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <ExternalLink className="w-3 h-3" /> Ouvrir
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
