interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizes = {
    sm: { box: 'w-8 h-8', text: 'text-lg', sub: 'text-[8px]' },
    md: { box: 'w-10 h-10', text: 'text-2xl', sub: 'text-[9px]' },
    lg: { box: 'w-16 h-16', text: 'text-4xl', sub: 'text-xs' },
  };
  const s = sizes[size];

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`${s.box} relative flex items-center justify-center bg-gradient-to-br from-blood-500 via-blood-600 to-blood-900 clip-angular glow-red`}>
        <span className={`font-black-display ${s.text} text-white leading-none`}>1X</span>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 clip-angular" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`font-black-display ${s.text} text-white tracking-wider`}>1X</span>
        <span className={`${s.sub} font-display tracking-[0.3em] text-gold-400`}>TV</span>
      </div>
    </div>
  );
}
