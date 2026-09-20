// ============================================================
// Classements en direct — top 50 par plateforme
// - Apple Music : flux RSS officiel Apple Marketing Tools (CORS ouvert)
// - Deezer : API publique via JSONP (pas de CORS)
// - Spotify : pas d'API publique de chart sans clé → lien officiel,
//   « donnée non disponible » plutôt qu'un chiffre inventé (§9).
// Les lignes où figure HIMRA sont automatiquement surlignées.
// ============================================================
import { useEffect, useState } from 'react';
import { jsonp } from './live';

export interface ChartEntry {
  rank: number;
  title: string;
  artist: string;
  cover: string;
  url: string;
  isHimra: boolean;
}

const isHimra = (artist: string, title = '') =>
  /himra/i.test(artist) || /himra/i.test(title);

// ---------- Apple Music — top sons par pays (flux RSS officiel) ----------
interface AppleFeed {
  feed: {
    updated: string;
    results: {
      name: string;
      artistName: string;
      artworkUrl100: string;
      url: string;
    }[];
  };
}

export function useAppleChart(country: 'ci' | 'fr', limit = 50) {
  const [entries, setEntries] = useState<ChartEntry[]>([]);
  const [updated, setUpdated] = useState<string | null>(null);
  const [state, setState] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    let mounted = true;
    setState('loading');
    fetch(
      `https://rss.applemarketingtools.com/api/v2/${country}/music/most-played/${limit}/songs.json`
    )
      .then((r) => {
        if (!r.ok) throw new Error('bad status');
        return r.json() as Promise<AppleFeed>;
      })
      .then((j) => {
        if (!mounted) return;
        setEntries(
          j.feed.results.map((s, i) => ({
            rank: i + 1,
            title: s.name,
            artist: s.artistName,
            cover: s.artworkUrl100,
            url: s.url,
            isHimra: isHimra(s.artistName, s.name),
          }))
        );
        setUpdated(j.feed.updated);
        setState('ok');
      })
      .catch(() => mounted && setState('error'));
    return () => {
      mounted = false;
    };
  }, [country, limit]);

  return { entries, updated, state };
}

// ---------- Deezer — top mondial + recherche des titres d'Himra ----------
interface DeezerChartTrack {
  id: number;
  title: string;
  link: string;
  artist: { name: string };
  album: { cover_medium: string };
  position: number;
}

export function useDeezerChart(limit = 50) {
  const [entries, setEntries] = useState<ChartEntry[]>([]);
  const [state, setState] = useState<'loading' | 'ok' | 'error'>('loading');

  useEffect(() => {
    let mounted = true;
    jsonp<{ tracks: { data: DeezerChartTrack[] } }>(
      `https://api.deezer.com/chart/0?limit=${limit}`
    )
      .then((j) => {
        if (!mounted) return;
        const data = j?.tracks?.data ?? [];
        if (!data.length) throw new Error('empty');
        setEntries(
          data.map((t, i) => ({
            rank: t.position ?? i + 1,
            title: t.title,
            artist: t.artist.name,
            cover: t.album.cover_medium,
            url: t.link,
            isHimra: isHimra(t.artist.name, t.title),
          }))
        );
        setState('ok');
      })
      .catch(() => mounted && setState('error'));
    return () => {
      mounted = false;
    };
  }, [limit]);

  return { entries, state };
}
