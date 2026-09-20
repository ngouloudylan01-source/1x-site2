import { TrendingUp, BarChart3 } from 'lucide-react';
import { CHARTS } from '@/data';

function ChartIcon({ icon }: { icon: string }) {
  const icons: Record<string, string> = {
    spotify: '♫',
    apple: '',
    youtube: '▶',
    shazam: 'S',
  };
  return <span className="text-2xl font-black-display">{icons[icon] || '♪'}</span>;
}

export default function Charts() {
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
            Performances en temps réel sur les principales plateformes de streaming et de classement.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-gold-400 to-blood-500" />
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {CHARTS.map((chart, idx) => (
            <div
              key={idx}
              className="group relative glass rounded-sm p-6 overflow-hidden transition-all hover:scale-[1.03]"
              style={{ borderTop: `3px solid ${chart.color}` }}
            >
              {/* Glow background */}
              <div
                className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"
                style={{ background: chart.color }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-sm flex items-center justify-center text-white"
                    style={{ background: `${chart.color}25`, color: chart.color }}
                  >
                    <ChartIcon icon={chart.icon} />
                  </div>
                  <TrendingUp className="w-5 h-5 text-green-400" />
                </div>

                <p className="text-xs text-anthracite-300 uppercase tracking-wide mb-1">{chart.platform}</p>
                <p className="text-3xl font-black-display text-white">{chart.value}</p>
                <p className="text-xs text-anthracite-400 mt-1">{chart.label}</p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="text-xs font-bold text-green-400">{chart.change}</span>
                  <div className="flex-1 h-1 bg-anthracite-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full animate-pulse-glow"
                      style={{ width: '70%', background: chart.color }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top tracks chart bar */}
        <div className="glass rounded-sm p-6 border-l-2 border-gold-400">
          <div className="flex items-center gap-3 mb-6">
            <BarChart3 className="w-6 h-6 text-gold-400" />
            <h3 className="font-display text-xl tracking-widest text-white uppercase">Top 5 — Cette semaine</h3>
          </div>

          <div className="space-y-4">
            {[
              { rank: 1, title: 'BARA BARA', platform: 'Spotify', streams: '2.1M', width: '100%', color: '#c8102e' },
              { rank: 2, title: 'NUMBER ONE (feat. Minz)', platform: 'Apple Music', streams: '1.8M', width: '85%', color: '#e6203a' },
              { rank: 3, title: 'DJOROBITE', platform: 'YouTube', streams: '1.5M', width: '72%', color: '#c9a84c' },
              { rank: 4, title: 'PLUS DE LOVE', platform: 'Spotify', streams: '1.2M', width: '57%', color: '#8b0a1e' },
              { rank: 5, title: 'Ice', platform: 'Shazam', streams: '980K', width: '47%', color: '#a00c25' },
            ].map((track, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <span className="font-black-display text-2xl text-anthracite-400 w-8">{track.rank}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-semibold text-white">{track.title}</span>
                    <span className="text-xs text-anthracite-300">{track.platform} · {track.streams}</span>
                  </div>
                  <div className="h-2.5 bg-anthracite-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: track.width, background: `linear-gradient(90deg, ${track.color}, ${track.color}80)` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
