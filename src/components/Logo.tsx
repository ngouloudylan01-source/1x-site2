import logoMark from '@/assets/logo-mark.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: 'h-7',
  md: 'h-9',
  lg: 'h-14',
};

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={logoMark} alt="Dylan07 logo" className={`${SIZES[size]} w-auto`} />
      <span className="font-black-display text-white tracking-tight text-lg leading-none">
        DYLAN<span className="text-gradient-warm">07</span>
      </span>
    </div>
  );
}
