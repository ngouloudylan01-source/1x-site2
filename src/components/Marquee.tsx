// Bandeau défilant éditorial (inspiration sites Awwwards) —
// respecte prefers-reduced-motion via la classe .animate-marquee du CSS global.
const ITEMS = [
  'HIMRA', '1X', 'EN GANG', 'NOUVEAU BOSS', 'DRILL IVOIRE', '1X ULTRA',
  'COCODY', 'ABIDJAN', 'ZÉNITH DE PARIS', 'ÉBIMPÉ 26.12.26', 'CHETE',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div aria-hidden className="relative overflow-hidden border-y border-blood-600/25 bg-anthracite-950 py-3 select-none">
      <div className="flex whitespace-nowrap animate-marquee">
        {row.map((it, i) => (
          <span key={i} className="flex items-center">
            <span className={`font-black-display text-lg sm:text-xl tracking-widest px-5 ${i % 2 ? 'text-blood-500' : 'text-white/85'}`}>
              {it}
            </span>
            <span className="text-gold-400 text-xs">⚔</span>
          </span>
        ))}
      </div>
    </div>
  );
}
