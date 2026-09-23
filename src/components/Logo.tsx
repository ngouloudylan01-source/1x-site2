import logoMark from '@/assets/logo-mark.png';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const SIZES = {
  sm: 'h-6',
  md: 'h-7',
  lg: 'h-10',
};

export default function Logo({ size = 'md', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img src={logoMark} alt="Dylan07" className={`${SIZES[size]} w-auto`} />
      <span className="font-heading text-white font-bold tracking-tight text-base leading-none">
        Dylan<span className="text-teal-400">07</span>
      </span>
    </div>
  );
}
