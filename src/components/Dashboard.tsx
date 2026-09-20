import { TrendingUp, MapPin, Ticket, Radio } from 'lucide-react';
import { VIDEOS, LINKS, CONCERTS } from '@/data';
import {
  useDeezerArtist,
  useDeezerTopTracks,
  useYouTubeStats,
  useCountUp,
  formatCompact,
  formatFull,
} from '@/lib/live';
import { SectionHead } from './Section';

function LiveBadge({ live }: { live: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-sm text-[10px] font-semibold uppercase tracking-wider"
      style={{
        background: live ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.06)',
        color: live ? '#4ade80' : '#9e9ea8',
      }}
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
  platform, label, value, raw, sub, live, href,
}: {
  platform: string; label: string; value: string; raw?: number; sub?: string; live: boolean; href: string;
}) {
  const animated = useCountUp(raw ?? 0);
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative glass rounded-sm p-5 overflow-hidden transition-all hover:border-blood-500/30 block"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[11px] text-anthracite-300 uppercase tracking-wider font-semibold">{platform}</span>
        <TrendingUp className="w-4 h-4 text-green-400" />
      </div>
      <p className="text-3xl font-mono font-bold text-white" title={raw ? formatFull(raw) : undefined}>
        {raw ? formatCompact(animated) : value}
      </p>
      <p className="text-xs text-anthracite-400 mt-1">{label}</p>
      <div className="mt-3 flex items-center justify-between gap-2">
        <LiveBadge live={live} />
        {sub && <span className="text-[10px] text-anthracite-400 truncate">{sub}</span>}
      </div>
    </a>
  );
}

// Tableau de bord en temps réel : Deezer (JSONP) + YouTube (compteurs publics) + agenda
export default function Dashboard() {
  const { artist, live: artistLive } = useDeezerArtist();
  const { tracks, live: tracksLive } = useDeezerTopTracks(5);
  const { stats, live: ytLive } = useYouTubeStats([VIDEOS.BARA_BARA, VIDEOS.NOSTALGIE, VIDEOS.INCENDIE]);

  const bara = stats[VIDEOS.BARA_BARA];
  const nostalgie = stats[VIDEOS.NOSTALGIE];
  const incendie = stats[VIDEOS.INCENDIE];
  const maxRank = tracks.length ? Math.max(...tracks.map((t) => t.rank)) : 1;
  const upcoming = CONCERTS.filter((c) => !c.past);
  const past = CONCERTS.filter((c) => c.past);

  return (
    <section id="stats" className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-anthracite-900 to-anthracite-950">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Tableau de bord"
          title={<>STATS EN <span className="text-gradient-red">TEMPS RÉEL</span></>}
          desc="Vraies données, interrogées en direct depuis les API publiques Deezer et YouTube à chaque chargement. Quand une donnée est indisponible, la dernière valeur connue est affichée — jamais un chiffre inventé."
        />

        {/* Grille stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          <StatCard platform="YouTube" label="Vues BARA BARA (Official Clip)" value="14M+" raw={bara?.viewCount} sub={bara ? `${formatCompact(bara.likes)} likes` : undefined} live={ytLive && !!bara} href={LINKS.baraBara} />
          <StatCard platform="YouTube" label="Vues NOSTALGIE (Official Video)" value="13M+" raw={nostalgie?.viewCount} sub={nostalgie ? `${formatCompact(nostalgie.likes)} likes` : undefined} live={ytLive && !!nostalgie} href={LINKS.nostalgie} />
          <StatCard platform="YouTube" label="Vues INCENDIE" value="5,6M" raw={incendie?.viewCount} sub={incendie ? `${formatCompact(incendie.likes)} likes` : undefined} live={ytLive && !!incendie} href={`https://www.youtube.com/watch?v=${VIDEOS.INCENDIE}`} />
          <StatCard platform="Deezer" label="Fans sur Deezer" value="52K" raw={artist?.nb_fan} sub={artist ? `${artist.nb_album} projets au catalogue` : undefined} live={artistLive} href={LINKS.deezer} />
          <StatCard platform="Spotify" label="Profil artiste vérifié" value="Écouter ↗" live={false} href={LINKS.spotify} />
          <StatCard platform="Apple Music" label="Discographie complète" value="Écouter ↗" live={false} href={LINKS.appleMusic} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Deezer réel */}
          <div className="glass rounded-sm p-6">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <h3 className="flex items-center gap-2 font-display text-lg tracking-widest text-white uppercase">
                <Radio className="w-5 h-5 text-blood-400" /> Top 5 Deezer
              </h3>
              <LiveBadge live={tracksLive} />
            </div>
            {tracks.length > 0 ? (
              <div className="space-y-4">
                {tracks.map((track, idx) => (
                  <a key={track.id} href={track.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <span className="font-mono font-bold text-lg text-anthracite-400 w-6 group-hover:text-blood-400 transition-colors">{idx + 1}</span>
                    <img src={track.album.cover_medium} alt={track.album.title} loading="lazy" className="w-9 h-9 rounded-sm object-cover border border-white/10" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="text-sm font-semibold text-white truncate group-hover:text-blood-300 transition-colors">{track.title_short}</span>
                        <span className="text-[10px] font-mono text-anthracite-400 flex-shrink-0">rank {formatCompact(track.rank)}</span>
                      </div>
                      <div className="h-1.5 bg-anthracite-800 rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-blood-500 to-blood-800" style={{ width: `${Math.max(30, Math.round((track.rank / maxRank) * 100))}%` }} />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <p className="text-sm text-anthracite-300">Chargement du classement Deezer…</p>
            )}
            <p className="mt-4 text-[10px] text-anthracite-400">
              Source : API publique Deezer, artiste « Himra » (ID 11736133). Vues YouTube : compteurs publics (API RYD).
            </p>
          </div>

          {/* Agenda des concerts */}
          <div className="glass rounded-sm p-6">
            <h3 className="flex items-center gap-2 font-display text-lg tracking-widest text-white uppercase mb-6">
              <MapPin className="w-5 h-5 text-gold-400" /> Concerts &amp; scènes
            </h3>

            {upcoming.length > 0 && (
              <div className="mb-5">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-blood-400 mb-2">À venir</p>
                {upcoming.map((c, i) => (
                  <a key={i} href={c.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-sm bg-blood-600/10 border border-blood-600/30 hover:border-blood-500/60 transition-all group">
                    <span className="font-mono font-bold text-sm text-blood-300 w-24 flex-shrink-0">{c.date}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-white truncate">{c.city} · {c.country}</p>
                      <p className="text-[11px] text-anthracite-300 truncate">{c.venue}</p>
                    </div>
                    <Ticket className="w-4 h-4 text-blood-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                  </a>
                ))}
              </div>
            )}

            <p className="text-[11px] font-semibold uppercase tracking-wider text-anthracite-400 mb-2">Dates passées</p>
            <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
              {past.map((c, i) => (
                <a key={i} href={c.source} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-3 py-2 rounded-sm hover:bg-white/5 transition-colors group">
                  <span className="font-mono text-xs text-anthracite-400 w-24 flex-shrink-0">{c.date}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-anthracite-200 group-hover:text-white transition-colors">{c.city} — {c.venue}</span>
                  </div>
                  <span className="text-[10px] font-mono text-anthracite-500">{c.country}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
