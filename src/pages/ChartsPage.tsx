import { useState } from 'react';
import { ArrowLeft, ExternalLink, RefreshCw } from 'lucide-react';
import { LINKS } from '@/data';
import { useAppleChart, useDeezerChart, type ChartEntry } from '@/lib/charts';
import { SectionHead } from '@/components/Section';

// ============================================================
// Page Classements — top 1 à 50 EN DIRECT, autres artistes inclus.
// Apple Music : flux RSS officiel (CI + FR). Deezer : top mondial.
// Spotify : pas d'API publique gratuite → liens officiels, aucune
// donnée inventée (§9).
// ============================================================

function ChartList({ entries, state, sourceUrl, sourceLabel }: {
  entries: ChartEntry[];
  state: 'loading' | 'ok' | 'error';
  sourceUrl: string;
  sourceLabel: string;
}) {
  if (state === 'loading') {
    return (
      <div className="flex items-center justify-center gap-2 py-16 text-anthracite-300 text-sm">
        <RefreshCw className="w-4 h-4 animate-spin" /> Chargement du classement en direct…
      </div>
    );
  }
  if (state === 'error') {
    return (
      <div className="py-14 text-center">
        <p className="text-anthracite-300 text-sm mb-3">
          Donnée non disponible pour l'instant (le flux en direct n'a pas répondu).
        </p>
        <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="text-blood-400 text-sm inline-flex items-center gap-1 hover:underline">
          Consulter le classement officiel <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    );
  }
  return (
    <ol className="divide-y divide-white/5 max-h-[34rem] overflow-y-auto pr-1 chart-scroll">
      {entries.map((e) => (
        <li key={e.rank}>
          <a
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 py-2.5 px-2 transition-colors hover:bg-white/5 ${
              e.isHimra ? 'bg-blood-600/15 border-l-2 border-blood-500' : ''
            }`}
          >
            <span className={`w-8 text-right font-mono font-bold text-sm shrink-0 ${e.isHimra ? 'text-blood-400' : e.rank <= 3 ? 'text-gold-400' : 'text-anthracite-400'}`}>
              {e.rank}
            </span>
            <img src={e.cover} alt="" loading="lazy" className="w-10 h-10 rounded-sm object-cover shrink-0" />
            <span className="flex-1 min-w-0">
              <span className={`block text-sm truncate ${e.isHimra ? 'text-white font-bold' : 'text-anthracite-100'}`}>
                {e.title}
              </span>
              <span className={`block text-xs truncate ${e.isHimra ? 'text-blood-300' : 'text-anthracite-400'}`}>
                {e.artist} {e.isHimra && '· 1X EN GANG'}
              </span>
            </span>
            <ExternalLink className="w-3.5 h-3.5 text-anthracite-500 shrink-0" />
          </a>
        </li>
      ))}
    </ol>
  );
}

export default function ChartsPage() {
  const [appleCountry, setAppleCountry] = useState<'ci' | 'fr'>('ci');
  const apple = useAppleChart(appleCountry);
  const deezer = useDeezerChart(50);
  const himraApple = apple.entries.filter((e) => e.isHimra).length;
  const himraDeezer = deezer.entries.filter((e) => e.isHimra).length;

  return (
    <main className="min-h-screen bg-anthracite-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <a href="#hero" className="inline-flex items-center gap-2 text-sm text-anthracite-300 hover:text-white transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Retour à l'accueil
        </a>

        <SectionHead
          kicker="En direct des plateformes"
          title={<>CLASSEMENTS <span className="text-blood-500">1 → 50</span></>}
          desc="Les tops officiels actualisés en direct — tous artistes confondus. Les lignes HIMRA sont surlignées en rouge. Chaque titre est cliquable vers la plateforme."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
          {/* Apple Music */}
          <div className="glass rounded-sm overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div>
                <h3 className="font-display text-sm tracking-widest text-white"> Apple Music — Top 50</h3>
                <p className="text-[11px] text-anthracite-400 mt-0.5">
                  Flux officiel « most played » {apple.updated ? `· actualisé ${new Date(apple.updated).toLocaleDateString('fr-FR')}` : ''}
                  {himraApple > 0 && <span className="text-blood-400 font-semibold"> · {himraApple} titre{himraApple > 1 ? 's' : ''} HIMRA</span>}
                </p>
              </div>
              <div className="flex gap-1">
                {(['ci', 'fr'] as const).map((c) => (
                  <button
                    key={c}
                    onClick={() => setAppleCountry(c)}
                    className={`px-3 py-1.5 text-xs font-display tracking-widest rounded-sm transition-colors ${
                      appleCountry === c ? 'bg-blood-600 text-white' : 'bg-white/5 text-anthracite-300 hover:bg-white/10'
                    }`}
                  >
                    {c === 'ci' ? '🇨🇮 CI' : '🇫🇷 FR'}
                  </button>
                ))}
              </div>
            </div>
            <ChartList
              entries={apple.entries}
              state={apple.state}
              sourceUrl={LINKS.appleMusic}
              sourceLabel="Apple Music"
            />
            <div className="px-4 py-2.5 border-t border-white/10 text-[10px] text-anthracite-400">
              Source : rss.applemarketingtools.com (flux marketing officiel Apple) — sans clé API, sans suivi.
            </div>
          </div>

          {/* Deezer */}
          <div className="glass rounded-sm overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10">
              <h3 className="font-display text-sm tracking-widest text-white">Deezer — Top 50 mondial</h3>
              <p className="text-[11px] text-anthracite-400 mt-0.5">
                Chart officiel Deezer, en direct
                {himraDeezer > 0 && <span className="text-blood-400 font-semibold"> · {himraDeezer} titre{himraDeezer > 1 ? 's' : ''} HIMRA</span>}
              </p>
            </div>
            <ChartList
              entries={deezer.entries}
              state={deezer.state}
              sourceUrl={LINKS.deezer}
              sourceLabel="Deezer"
            />
            <div className="px-4 py-2.5 border-t border-white/10 text-[10px] text-anthracite-400">
              Source : api.deezer.com/chart (API publique officielle) — sans clé, sans suivi.
            </div>
          </div>
        </div>

        {/* Spotify & autres plateformes : liens officiels, pas de chiffres inventés */}
        <div className="mt-6 glass rounded-sm p-5">
          <h3 className="font-display text-sm tracking-widest text-white mb-2">Spotify & autres plateformes</h3>
          <p className="text-[13px] text-anthracite-300 mb-4">
            Spotify ne publie pas d'API de classement librement accessible : plutôt que d'afficher des chiffres
            non vérifiables, voici les classements officiels et les suivis publics de référence.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Spotify Charts (officiel)', url: LINKS.spotifyCharts },
              { label: 'Himra sur Spotify', url: LINKS.spotify },
              { label: 'Kworb — streams Spotify Himra', url: LINKS.kworbSpotify },
              { label: 'Boomplay', url: LINKS.boomplay },
              { label: 'Audiomack', url: LINKS.audiomack },
            ].map((l) => (
              <a
                key={l.url}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 rounded-sm text-sm text-anthracite-200 hover:text-white hover:border-blood-500/50 transition-all"
              >
                {l.label} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <p className="mt-6 text-[11px] text-anthracite-500">
          Note (17–18 sept. 2026) : selon Shango/Bénin Web TV, Himra occupait 9 des 10 premières places
          d'Apple Music Côte d'Ivoire. Le classement ci-dessus reflète l'état actuel, en temps réel.
        </p>
      </div>
    </main>
  );
}
