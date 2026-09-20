import { ExternalLink } from 'lucide-react';

// Info-bulle de traçabilité : au survol, la source exacte de l'image apparaît
export default function SourceTooltip({
  credit,
  source,
  position = 'bottom',
}: {
  credit: string;
  source: string;
  position?: 'top' | 'bottom';
}) {
  return (
    <a
      href={source}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className={`absolute left-2 right-2 ${
        position === 'bottom' ? 'bottom-2' : 'top-2'
      } z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-sm bg-black/85 backdrop-blur border border-white/10 text-[10px] leading-tight text-white/80 hover:text-white hover:border-blood-500/50 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto`}
    >
      <ExternalLink className="w-3 h-3 flex-shrink-0 text-blood-400" />
      <span className="truncate">{credit}</span>
    </a>
  );
}
