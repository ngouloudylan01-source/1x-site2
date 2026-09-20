import { TrendingUp, BarChart3, Radio } from 'lucide-react';
import { VIDEOS, LINKS } from '@/data';
import {
  useDeezerArtist,
  useDeezerTopTracks,
  useYouTubeStats,
  useCountUp,
  formatCompact,
  formatFull,
} from '@/lib/live';

function LiveBadge({ live }: { live: boolean }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider"
      style={{ background: live ? 'rgba(34,197,94,0.15)' : 'rgba(255,255,255,0.06)', color: live ? '#4ade80' : '#9e9ea8' }}
    >
      <span className="relative flex h-1.5 w-1.5">
        {live && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />}
        <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${live ? 'bg-green-500' : 'bg-anthracite-400'}`} />
      </span>
      {live ? 'En direct' : 'Dernière valeur connue'}
    </span>
  );
}

function StatCard({
  platform,
  label,
  value,
  raw,
  sub,
  color,
  live,
  href,
}: {
  platform: string;
  label: string;
  value: string;
  raw?: number;
  sub?: string;
  color: string;
  live: boolean;
  href: string;
}) {
  const animated = useCountUp(raw ?? 0);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative glass rounded-sm p-6 overflow-hidden transition-all hover:scale-[1.03] block"
      style={{ borderTop: `3px solid ${color}` }}
    >
      <div
        className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
        style={{ background: color }}
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div
            className="w-12 h-12 rounded-sm flex items-center justify-center font-black-display text-lg"
            style={{ background: `${color}25`, color }}
          >
            {platform[0]}
          </div>
          <TrendingUp className="w-5 h-5 text-green-400" />
        </div>
        <p className="text-xs text-anthracite-300 uppercase tracking-wide mb-1">{platform}</p>
        <p className="text-3xl font-black-display text-white" title={raw ? formatFull(raw) : undefined}>
          {raw ? formatCompact(animated) : value}
        </p>
        <p className="text-xs text-anthracite-400 mt-1">{label}</p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <LiveBadge live={live} />
          {sub && <span className="text-[10px] text-anthracite-400">{sub}</span>}
        </div>
      </div>
    </a>
  );
}

export default function Charts() {
  const { artist, live: artistLive } = useDeezerArtist();
  const { tracks, live: tracksLive } = useDeezerTopTracks(5);
  const videoIds = [VIDEOS.BARA_BARA, VIDEOS.NOSTALGIE, VIDEOS.INCENDIE, VIDEOS.NAIGAIDJAN];
  const { stats, live: ytLive } = useYouTubeStats(videoIds);

  const bara = stats[VIDEOS.BARA_BARA];
  const nostalgie = stats[VIDEOS.NOSTALGIE];
  const incendie = stats[VIDEOS.INCENDIE];

  const maxRank = tracks.length ? Math.max(...tracks.map((t) => t.rank)) : 1;

  return (
    <section id="charts" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-anthracite-900 to-anthracite-950">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-gold-400">Statistiques</span>
          <h2 className="mt-3 font-black-display text-4xl sm:text-5xl md:text-6xl text-white">
            CHARTS &amp; <span className="text-gradient-gold">STREAMS</span>
          </h2>
          <p className="mt-4 text-sm text-anthracite-300 max-w-xl mx-auto">
            Vraies statistiques, interrogées en direct depuis les API publiques Deezer et YouTube au chargement de la page.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-gold-400 to-blood-500" />
        </div>

        {/* Stats grid — live */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <StatCard
            platform="YouTube"
            label="Vues BARA BARA (Official Clip)"
            value="14M+"
            raw={bara?.viewCount}
            sub={bara ? `${formatCompact(bara.likes)} likes` : undefined}
            color="#FF0000"
            live={ytLive && !!bara}
            href={LINKS.baraBara}
          />
          <StatCard
            platform="YouTube"
            label="Vues NOSTALGIE (Official Video)"
            value="13M+"
            raw={nostalgie?.viewCount}
            sub={nostalgie ? `${formatCompact(nostalgie.likes)} likes` : undefined}
            color="#FF0000"
            live={ytLive && !!nostalgie}
            href={LINKS.nostalgie}
          />
          <StatCard
            platform="YouTube"
            label="Vues INCENDIE (JEUNE & RICHE DELUXE)"
            value="5.6M"
            raw={incendie?.viewCount}
            sub={incendie ? `${formatCompact(incendie.likes)} likes` : undefined}
            color="#FF0000"
            live={ytLive && !!incendie}
            href={`https://www.youtube.com/watch?v=${VIDEOS.INCENDIE}`}
          />
          <StatCard
            platform="Deezer"
            label="Fans sur Deezer"
            value="52K"
            raw={artist?.nb_fan}
            sub={artist ? `${artist.nb_album} projets au catalogue` : undefined}
            color="#a238ff"
            live={artistLive}
            href={LINKS.deezer}
          />
          <StatCard
            platform="Spotify"
            label="Profil artiste vérifié"
            value="Écouter"
            color="#1DB954"
            live={false}
            href={LINKS.spotify}
          />
          <StatCard
            platform="Apple Music"
            label="Discographie complète"
            value="Écouter"
            color="#fa2d48"
            live={false}
            href={LINKS.appleMusic}
          />
        </div>

        {/* Top tracks chart — classement Deezer réel */}
        <div className="glass rounded-sm p-6 border-l-2 border-gold-400">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-gold-400" />
              <h3 className="font-display text-xl tracking-widest text-white uppercase">
                Top 5 — Classement Deezer
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <Radio className="w-4 h-4 text-green-400" />
              <LiveBadge live={tracksLive} />
            </div>
          </div>

          {tracks.length > 0 ? (
            <div className="space-y-4">
              {tracks.map((track, idx) => {
                const width = `${Math.max(30, Math.round((track.rank / maxRank) * 100))}%`;
                const colors = ['#c8102e', '#e6203a', '#c9a84c', '#8b0a1e', '#a00c25'];
                return (
                  <a
                    key={track.id}
                    href={track.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <span className="font-black-display text-2xl text-anthracite-400 w-8 group-hover:text-gold-400 transition-colors">{idx + 1}</span>
                    <img
                      src={track.album.cover_medium}
                      alt={track.album.title}
                      className="w-10 h-10 rounded-sm object-cover border border-white/10 hidden sm:block"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1 gap-2">
                        <span className="text-sm font-semibold text-white truncate group-hover:text-gold-300 transition-colors">
                          {track.title_short}
                        </span>
                        <span className="text-xs text-anthracite-300 flex-shrink-0">
                          {track.album.title} · rank {formatCompact(track.rank)}
                        </span>
                      </div>
                      <div className="h-2.5 bg-anthracite-800 rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000"
                          style={{ width, background: `linear-gradient(90deg, ${colors[idx % 5]}, ${colors[idx % 5]}80)` }}
                        />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          ) : (
            <p className="text-sm text-anthracite-300">
              Chargement du classement en direct depuis l'API Deezer…
            </p>
          )}

          <p className="mt-5 text-[11px] text-anthracite-400">
            Source : API publique Deezer — artiste « Himra » (ID 11736133), classement « rank » officiel des morceaux.
            Les vues YouTube proviennent de l'API Return YouTube Dislike (miroir des compteurs publics YouTube).
          </p>
        </div>
      </div>
    </section>
  );
}
