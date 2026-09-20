import { Award, ExternalLink } from 'lucide-react';
import { CERTIFICATIONS } from '@/data';

export default function Certifications() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-anthracite-900 via-anthracite-950 to-black">
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-gold-400/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-gold-400">Récompenses</span>
          <h2 className="mt-3 font-black-display text-4xl sm:text-5xl md:text-6xl text-white">
            CERTIFICATIONS <span className="text-gradient-gold">&amp; TROPHÉES</span>
          </h2>
          <p className="mt-4 text-sm text-anthracite-300 max-w-xl mx-auto">
            Disques d'Or, de Platine et de Diamant. La reconnaissance officielle du parcours d'HIMRA.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-gold-400 to-blood-500" />
        </div>

        {/* Certifications showcase */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="group perspective-1000"
            >
              <div
                className="relative card-3d rounded-sm overflow-hidden border-2 transition-all duration-500 hover:scale-105"
                style={{
                  borderColor: `${cert.color}40`,
                  boxShadow: `0 10px 40px rgba(0,0,0,0.6), 0 0 30px ${cert.color}15`,
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.img}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-anthracite-950/50 to-transparent" />

                  {/* Certification type badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-sm">
                    <div
                      className="flex items-center gap-1.5 px-2 py-1 rounded-sm"
                      style={{ background: `${cert.color}30`, backdropFilter: 'blur(8px)' }}
                    >
                      <Award className="w-3.5 h-3.5" style={{ color: cert.color }} />
                      <span className="text-xs font-bold uppercase tracking-wide" style={{ color: cert.color }}>
                        {cert.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 bg-anthracite-900/80">
                  <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-anthracite-300">{cert.country}</span>
                    <span className="text-xs font-bold" style={{ color: cert.color }}>{cert.year}</span>
                  </div>
                  {cert.source && (
                    <a
                      href={cert.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 flex items-center gap-1 text-xs text-anthracite-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" /> Voir le clip officiel
                    </a>
                  )}
                </div>

                {/* Bottom accent line */}
                <div className="h-1" style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }} />
              </div>
            </div>
          ))}
        </div>

        {/* ===== ICONIC CLOSING: CROSSED MACHETTES + EN GANG ===== */}
        <div className="relative flex flex-col items-center pt-8 pb-4">
          {/* Divider line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blood-600 to-transparent" />

          {/* Crossed machettes */}
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 mb-8 flex items-center justify-center">
            {/* Glow behind */}
            <div className="absolute inset-0 rounded-full blur-3xl bg-blood-600/20 animate-pulse-glow" />

            {/* Machette SVG - crossed pair */}
            <svg
              viewBox="0 0 200 200"
              className="relative w-full h-full drop-shadow-[0_0_20px_rgba(200,16,46,0.5)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Machette 1 - diagonal left to right */}
              <g transform="rotate(45 100 100)">
                {/* Blade */}
                <path
                  d="M30 95 L150 92 L160 100 L150 108 L30 105 Z"
                  fill="url(#bladeGrad)"
                  stroke="#c0c0c0"
                  strokeWidth="1"
                />
                {/* Blade shine */}
                <path d="M35 98 L145 96 L145 99 L35 101 Z" fill="#ffffff" opacity="0.3" />
                {/* Handle */}
                <rect x="18" y="93" width="14" height="14" rx="2" fill="#2a2a2e" stroke="#5a451f" strokeWidth="1.5" />
                {/* Handle wrap */}
                <line x1="20" y1="93" x2="20" y2="107" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
                <line x1="24" y1="93" x2="24" y2="107" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
                <line x1="28" y1="93" x2="28" y2="107" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
              </g>

              {/* Machette 2 - diagonal right to left */}
              <g transform="rotate(-45 100 100)">
                {/* Blade */}
                <path
                  d="M30 95 L150 92 L160 100 L150 108 L30 105 Z"
                  fill="url(#bladeGrad)"
                  stroke="#c0c0c0"
                  strokeWidth="1"
                />
                {/* Blade shine */}
                <path d="M35 98 L145 96 L145 99 L35 101 Z" fill="#ffffff" opacity="0.3" />
                {/* Handle */}
                <rect x="18" y="93" width="14" height="14" rx="2" fill="#2a2a2e" stroke="#5a451f" strokeWidth="1.5" />
                {/* Handle wrap */}
                <line x1="20" y1="93" x2="20" y2="107" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
                <line x1="24" y1="93" x2="24" y2="107" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
                <line x1="28" y1="93" x2="28" y2="107" stroke="#c9a84c" strokeWidth="1" opacity="0.6" />
              </g>

              {/* Center rivet */}
              <circle cx="100" cy="100" r="5" fill="#c9a84c" stroke="#5a451f" strokeWidth="1" />
              <circle cx="100" cy="100" r="2" fill="#5a451f" />

              <defs>
                <linearGradient id="bladeGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3a3a3e" />
                  <stop offset="30%" stopColor="#c0c0c0" />
                  <stop offset="50%" stopColor="#e8e8e8" />
                  <stop offset="70%" stopColor="#a0a0a0" />
                  <stop offset="100%" stopColor="#5a5a5e" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* EN GANG text */}
          <div className="relative text-center">
            {/* Glow */}
            <div className="absolute inset-0 blur-3xl bg-blood-600/20" />

            <h2 className="relative font-black-display text-6xl sm:text-8xl md:text-9xl text-white text-glow-red leading-none tracking-tight">
              EN GANG
            </h2>
            <div className="mt-2 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-blood-500" />
              <span className="font-display text-sm tracking-[0.5em] text-gold-400 uppercase">1X · Toujours</span>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-blood-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
