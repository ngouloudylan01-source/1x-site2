import { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, X, ExternalLink } from 'lucide-react';
import { HITS, LINKS } from '@/data';
import { useDeezerTopTracks } from '@/lib/live';

// Lecteur flottant persistant — joue les VRAIS extraits audio 30s
// des morceaux d'Himra via l'API publique Deezer (previews officielles).
export default function FloatingPlayer() {
  const { tracks, live } = useDeezerTopTracks(10);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [minimized, setMinimized] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const hasReal = live && tracks.length > 0;
  const track = hasReal
    ? {
        title: tracks[currentTrack % tracks.length].title_short,
        album: tracks[currentTrack % tracks.length].album.title,
        year: '',
        duration: '0:30',
        color: '#c8102e',
        cover: tracks[currentTrack % tracks.length].album.cover_medium,
        preview: tracks[currentTrack % tracks.length].preview,
        link: tracks[currentTrack % tracks.length].link,
      }
    : {
        title: HITS[currentTrack % HITS.length].title,
        album: HITS[currentTrack % HITS.length].album,
        year: HITS[currentTrack % HITS.length].year,
        duration: HITS[currentTrack % HITS.length].duration,
        color: HITS[currentTrack % HITS.length].color,
        cover: null as string | null,
        preview: null as string | null,
        link: HITS[currentTrack % HITS.length].source,
      };

  const count = hasReal ? tracks.length : HITS.length;

  // Audio réel
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume / 100;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track.preview) return;
    if (audio.src !== track.preview) {
      audio.src = track.preview;
      setProgress(0);
    }
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isPlaying, currentTrack, hasReal]);

  const onTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    setProgress((audio.currentTime / audio.duration) * 100);
  }, []);

  const next = () => {
    setCurrentTrack((c) => (c + 1) % count);
    setProgress(0);
  };
  const prev = () => {
    setCurrentTrack((c) => (c - 1 + count) % count);
    setProgress(0);
  };

  const seek = (pct: number) => {
    const audio = audioRef.current;
    setProgress(pct);
    if (audio && audio.duration) {
      audio.currentTime = (pct / 100) * audio.duration;
    }
  };

  const elapsed = audioRef.current?.duration
    ? (progress / 100) * audioRef.current.duration
    : (progress / 100) * 30;

  if (minimized) {
    return (
      <>
        <audio ref={audioRef} onTimeUpdate={onTimeUpdate} onEnded={next} />
        <button
          onClick={() => setMinimized(false)}
          className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-blood-600 text-white flex items-center justify-center glow-red hover:scale-110 transition-transform"
          aria-label="Ouvrir le lecteur"
        >
          <Play className="w-5 h-5 ml-0.5" fill="white" />
        </button>
      </>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <audio ref={audioRef} onTimeUpdate={onTimeUpdate} onEnded={next} />
      <div className="glass border-t border-blood-600/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-5">
          {/* Track info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            {track.cover ? (
              <img
                src={track.cover}
                alt={track.album}
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-sm object-cover border border-white/10"
              />
            ) : (
              <div
                className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center font-black-display text-white text-lg"
                style={{ background: `linear-gradient(135deg, ${track.color}, ${track.color}aa)` }}
              >
                1X
              </div>
            )}
            <div className="min-w-0 hidden sm:block">
              <p className="text-sm font-semibold text-white truncate">{track.title}</p>
              <p className="text-xs text-anthracite-300 truncate">
                {track.album}
                {hasReal && <span className="ml-2 text-green-400">● extrait officiel Deezer</span>}
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button onClick={prev} className="text-anthracite-300 hover:text-white transition-colors" aria-label="Précédent">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: `linear-gradient(135deg, ${track.color}, ${track.color}aa)`, boxShadow: `0 0 20px ${track.color}60` }}
              aria-label={isPlaying ? 'Pause' : 'Lecture'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <button onClick={next} className="text-anthracite-300 hover:text-white transition-colors" aria-label="Suivant">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs">
            <span className="text-xs text-anthracite-400 font-mono w-10 text-right">
              {Math.floor(elapsed / 60)}:{String(Math.floor(elapsed % 60)).padStart(2, '0')}
            </span>
            <div
              className="flex-1 h-1.5 bg-anthracite-800 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                seek(((e.clientX - rect.left) / rect.width) * 100);
              }}
            >
              <div
                className="h-full rounded-full transition-all"
                style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${track.color}, ${track.color}80)` }}
              />
            </div>
            <span className="text-xs text-anthracite-400 font-mono w-10">{track.duration}</span>
          </div>

          {/* Volume */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            {volume > 50 ? <Volume2 className="w-4 h-4 text-anthracite-300" /> : <Volume1 className="w-4 h-4 text-anthracite-300" />}
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-20 accent-blood-500"
              aria-label="Volume"
            />
          </div>

          {/* Full track link */}
          <a
            href={track.link || LINKS.deezer}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex text-anthracite-400 hover:text-white transition-colors flex-shrink-0"
            title="Écouter le morceau complet"
          >
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* Minimize */}
          <button onClick={() => setMinimized(true)} className="text-anthracite-400 hover:text-white transition-colors flex-shrink-0" aria-label="Réduire">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile progress bar */}
        <div
          className="md:hidden mt-2 h-1 bg-anthracite-800 rounded-full overflow-hidden"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            seek(((e.clientX - rect.left) / rect.width) * 100);
          }}
        >
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${track.color}, ${track.color}80)` }}
          />
        </div>
      </div>
    </div>
  );
}
