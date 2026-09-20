import { useState, useEffect, useRef } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, Volume1, X } from 'lucide-react';
import { HITS } from '@/data';

export default function FloatingPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(70);
  const [minimized, setMinimized] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const track = HITS[currentTrack];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            setCurrentTrack((c) => (c + 1) % HITS.length);
            return 0;
          }
          return p + 0.3;
        });
      }, 100);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const next = () => {
    setCurrentTrack((c) => (c + 1) % HITS.length);
    setProgress(0);
  };
  const prev = () => {
    setCurrentTrack((c) => (c - 1 + HITS.length) % HITS.length);
    setProgress(0);
  };

  if (minimized) {
    return (
      <button
        onClick={() => setMinimized(false)}
        className="fixed bottom-4 right-4 z-50 w-12 h-12 rounded-full bg-blood-600 text-white flex items-center justify-center glow-red hover:scale-110 transition-transform"
        aria-label="Ouvrir le lecteur"
      >
        <Play className="w-5 h-5 ml-0.5" fill="white" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="glass border-t border-blood-600/20 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-3 sm:gap-5">
          {/* Track info */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <div
              className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-sm flex items-center justify-center font-black-display text-white text-lg"
              style={{ background: `linear-gradient(135deg, ${track.color}, ${track.color}aa)` }}
            >
              1X
            </div>
            <div className="min-w-0 hidden sm:block">
              <p className="text-sm font-semibold text-white truncate">{track.title}</p>
              <p className="text-xs text-anthracite-300 truncate">{track.album} · {track.year}</p>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button onClick={prev} className="text-anthracite-300 hover:text-white transition-colors">
              <SkipBack className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-all hover:scale-110"
              style={{ background: `linear-gradient(135deg, ${track.color}, ${track.color}aa)`, boxShadow: `0 0 20px ${track.color}60` }}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
            <button onClick={next} className="text-anthracite-300 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Progress bar */}
          <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs">
            <span className="text-xs text-anthracite-400 font-mono w-10 text-right">
              {Math.floor((progress / 100) * 210 / 60)}:{String(Math.floor((progress / 100) * 210 % 60)).padStart(2, '0')}
            </span>
            <div
              className="flex-1 h-1.5 bg-anthracite-800 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setProgress(((e.clientX - rect.left) / rect.width) * 100);
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
            />
          </div>

          {/* Minimize */}
          <button onClick={() => setMinimized(true)} className="text-anthracite-400 hover:text-white transition-colors flex-shrink-0">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile progress bar */}
        <div className="md:hidden mt-2 h-1 bg-anthracite-800 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${progress}%`, background: `linear-gradient(90deg, ${track.color}, ${track.color}80)` }}
          />
        </div>
      </div>
    </div>
  );
}
