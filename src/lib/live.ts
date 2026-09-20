// ============================================================
// LIVE DATA LAYER — vraies statistiques en direct
// - Deezer API (JSONP, pas de CORS) : fans, top tracks + previews audio 30s réels
// - Return YouTube Dislike API (CORS ouvert) : vues / likes YouTube en direct
// - Flux RSS YouTube (via proxy CORS) : dernières vidéos publiées automatiquement
// Chaque source a un fallback statique vérifié pour ne jamais casser l'UI.
// ============================================================

import { useEffect, useRef, useState } from 'react';

export const DEEZER_ARTIST_ID = 11736133; // Himra (officiel) — 85 albums/singles
export const YT_CHANNEL_ID = 'UCck5J0M6YKnXCrnuXkCFuvw'; // Himra officiel — chaîne vérifiée

// ---------- JSONP helper (Deezer) ----------
let jsonpCounter = 0;
export function jsonp<T>(url: string, timeout = 9000): Promise<T> {
  return new Promise((resolve, reject) => {
    const cb = `__dz_cb_${Date.now()}_${jsonpCounter++}`;
    const script = document.createElement('script');
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error('JSONP timeout'));
    }, timeout);
    function cleanup() {
      window.clearTimeout(timer);
      delete (window as unknown as Record<string, unknown>)[cb];
      script.remove();
    }
    (window as unknown as Record<string, unknown>)[cb] = (data: T) => {
      cleanup();
      resolve(data);
    };
    script.onerror = () => {
      cleanup();
      reject(new Error('JSONP error'));
    };
    script.src = `${url}${url.includes('?') ? '&' : '?'}output=jsonp&callback=${cb}`;
    document.head.appendChild(script);
  });
}

// ---------- Types ----------
export interface DeezerArtist {
  id: number;
  name: string;
  nb_fan: number;
  nb_album: number;
  picture_xl?: string;
  link: string;
}

export interface DeezerTrack {
  id: number;
  title: string;
  title_short: string;
  duration: number;
  rank: number;
  preview: string; // mp3 30s réel
  link: string;
  album: { title: string; cover_medium: string; cover_big: string };
}

export interface YtVideoStats {
  id: string;
  viewCount: number;
  likes: number;
}

export interface LatestVideo {
  id: string;
  title: string;
  published: string;
  views: number | null;
  thumb: string;
  url: string;
}

// ---------- Deezer artist (fans en direct) ----------
export function useDeezerArtist() {
  const [artist, setArtist] = useState<DeezerArtist | null>(null);
  const [live, setLive] = useState(false);
  useEffect(() => {
    let mounted = true;
    jsonp<DeezerArtist>(`https://api.deezer.com/artist/${DEEZER_ARTIST_ID}`)
      .then((a) => {
        if (mounted && a && a.nb_fan) {
          setArtist(a);
          setLive(true);
        }
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);
  return { artist, live };
}

// ---------- Deezer top tracks (classement + previews audio réels) ----------
export function useDeezerTopTracks(limit = 10) {
  const [tracks, setTracks] = useState<DeezerTrack[]>([]);
  const [live, setLive] = useState(false);
  useEffect(() => {
    let mounted = true;
    jsonp<{ data: DeezerTrack[] }>(
      `https://api.deezer.com/artist/${DEEZER_ARTIST_ID}/top?limit=${limit}`
    )
      .then((res) => {
        if (mounted && res?.data?.length) {
          setTracks(res.data);
          setLive(true);
        }
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, [limit]);
  return { tracks, live };
}

// ---------- YouTube : vues en direct par vidéo (API RYD, CORS ouvert) ----------
export function useYouTubeStats(videoIds: string[]) {
  const [stats, setStats] = useState<Record<string, YtVideoStats>>({});
  const [live, setLive] = useState(false);
  const key = videoIds.join(',');
  useEffect(() => {
    let mounted = true;
    const ids = key.split(',').filter(Boolean);
    Promise.allSettled(
      ids.map(async (id) => {
        const r = await fetch(
          `https://returnyoutubedislikeapi.com/votes?videoId=${id}`,
          { signal: AbortSignal.timeout(9000) }
        );
        if (!r.ok) throw new Error('bad status');
        const j = await r.json();
        return { id, viewCount: j.viewCount as number, likes: j.likes as number };
      })
    ).then((results) => {
      if (!mounted) return;
      const next: Record<string, YtVideoStats> = {};
      let any = false;
      for (const res of results) {
        if (res.status === 'fulfilled' && res.value.viewCount) {
          next[res.value.id] = res.value;
          any = true;
        }
      }
      if (any) {
        setStats(next);
        setLive(true);
      }
    });
    return () => {
      mounted = false;
    };
  }, [key]);
  return { stats, live };
}

// ---------- Flux automatique : dernières vidéos de la chaîne (RSS) ----------
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${YT_CHANNEL_ID}`;
const PROXIES = [
  (u: string) => `https://api.allorigins.win/raw?url=${encodeURIComponent(u)}`,
  (u: string) => `https://corsproxy.io/?url=${encodeURIComponent(u)}`,
];

export function useLatestVideos(fallback: LatestVideo[]) {
  const [videos, setVideos] = useState<LatestVideo[]>(fallback);
  const [live, setLive] = useState(false);
  useEffect(() => {
    let mounted = true;
    (async () => {
      for (const proxy of PROXIES) {
        try {
          const r = await fetch(proxy(RSS_URL), { signal: AbortSignal.timeout(12000) });
          if (!r.ok) continue;
          const xml = await r.text();
          const doc = new DOMParser().parseFromString(xml, 'text/xml');
          const entries = Array.from(doc.getElementsByTagName('entry'));
          if (!entries.length) continue;
          const parsed: LatestVideo[] = entries.slice(0, 9).map((e) => {
            const id =
              e.getElementsByTagName('yt:videoId')[0]?.textContent ||
              e.getElementsByTagNameNS('*', 'videoId')[0]?.textContent ||
              '';
            const title = e.getElementsByTagName('title')[0]?.textContent || '';
            const published = e.getElementsByTagName('published')[0]?.textContent || '';
            const statsEl =
              e.getElementsByTagName('media:statistics')[0] ||
              e.getElementsByTagNameNS('*', 'statistics')[0];
            const views = statsEl ? Number(statsEl.getAttribute('views')) : null;
            return {
              id,
              title,
              published,
              views: views && !Number.isNaN(views) ? views : null,
              thumb: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
              url: `https://www.youtube.com/watch?v=${id}`,
            };
          });
          if (mounted && parsed.length) {
            setVideos(parsed);
            setLive(true);
          }
          return;
        } catch {
          // essaie le proxy suivant
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);
  return { videos, live };
}

// ---------- Animation compteur (count-up) ----------
export function useCountUp(target: number, duration = 1600) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);
  useEffect(() => {
    const start = performance.now();
    const from = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + (target - from) * eased));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target, duration]);
  return value;
}

// ---------- Formatage ----------
export function formatCompact(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(n >= 10_000_000 ? 1 : 2).replace(/\.?0+$/, '')}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`;
  return String(n);
}

export function formatFull(n: number): string {
  return n.toLocaleString('fr-FR');
}

export function timeAgo(iso: string): string {
  const d = new Date(iso).getTime();
  if (Number.isNaN(d)) return '';
  const diff = Date.now() - d;
  const days = Math.floor(diff / 86_400_000);
  if (days <= 0) return "aujourd'hui";
  if (days === 1) return 'hier';
  if (days < 30) return `il y a ${days} j`;
  const months = Math.floor(days / 30);
  if (months < 12) return `il y a ${months} mois`;
  return `il y a ${Math.floor(months / 12)} an${months >= 24 ? 's' : ''}`;
}
