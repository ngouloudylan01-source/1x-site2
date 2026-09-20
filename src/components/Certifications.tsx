import { Award, ExternalLink, Trophy } from 'lucide-react';
import { CERTIFICATIONS, PHOTOS, LINKS } from '@/data';
import SourceTooltip from './SourceTooltip';

export default function Certifications() {
  return (
    <section id="awards" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-anthracite-900 via-anthracite-950 to-black">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                    loading="lazy"
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

        {/* ===== Photos réelles : HIMRA trophées en main ===== */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 max-w-4xl mx-auto">
          <div className="group relative rounded-sm overflow-hidden border-2 border-gold-400/30 shadow-3d-deep">
            <img
              src={PHOTOS.heroTrophees.src}
              alt="HIMRA posant avec ses trophées, bras croisés en signe 1X"
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-gold-400" />
                <span className="font-display text-sm tracking-widest text-gold-400 uppercase">Trophées en main</span>
              </div>
              <p className="text-sm text-white font-semibold">
                HIMRA pose avec ses récompenses, bras croisés — le signe 1X.
              </p>
            </div>
            <SourceTooltip credit={PHOTOS.heroTrophees.credit} source={PHOTOS.heroTrophees.source} position="top" />
          </div>

          <div className="group relative rounded-sm overflow-hidden border-2 border-blood-600/30 shadow-3d-deep">
            <img
              src={PHOTOS.parcExpo.src}
              alt="Himra devant la foule du Parc des Expositions d'Abidjan"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 mb-1">
                <Award className="w-4 h-4 text-blood-400" />
                <span className="font-display text-sm tracking-widest text-blood-400 uppercase">Le sacre du public</span>
              </div>
              <p className="text-sm text-white font-semibold">
                Parc des Expositions d'Abidjan, complet — décembre 2024.
              </p>
            </div>
            <SourceTooltip credit={PHOTOS.parcExpo.credit} source={PHOTOS.parcExpo.source} position="top" />
          </div>
        </div>

        {/* ===== CLÔTURE ICONIQUE : GROSSES MACHETTES CROISÉES + EN GANG ===== */}
        <div className="relative flex flex-col items-center pt-8 pb-4">
          {/* Divider line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-px bg-gradient-to-r from-transparent via-blood-600 to-transparent" />

          {/* Gros visuel machettes croisées */}
          <div className="relative w-full max-w-3xl mb-2">
            <div className="absolute inset-0 rounded-full blur-3xl bg-blood-600/20 animate-pulse-glow" />
            <img
              src="/media/machettes-en-gang.png"
              alt="Deux machettes croisées — emblème 1X"
              className="relative w-full h-auto drop-shadow-[0_0_40px_rgba(200,16,46,0.45)] select-none"
              style={{
                maskImage: 'radial-gradient(ellipse 75% 70% at 50% 50%, black 55%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 75% 70% at 50% 50%, black 55%, transparent 100%)',
              }}
              draggable={false}
            />
          </div>

          {/* EN GANG text */}
          <div className="relative text-center -mt-6 sm:-mt-10">
            <div className="absolute inset-0 blur-3xl bg-blood-600/20" />
            <h2 className="relative font-black-display text-6xl sm:text-8xl md:text-9xl text-white text-glow-red leading-none tracking-tight">
              EN GANG
            </h2>
            <div className="mt-3 flex items-center justify-center gap-3">
              <span className="h-px w-16 bg-gradient-to-r from-transparent to-blood-500" />
              <span className="font-display text-sm tracking-[0.5em] text-gold-400 uppercase">1X · Toujours</span>
              <span className="h-px w-16 bg-gradient-to-l from-transparent to-blood-500" />
            </div>
            <a
              href={LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-blood-600 hover:bg-blood-500 text-white text-sm font-semibold rounded-sm glow-red transition-all hover:scale-105"
            >
              Rejoindre le mouvement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
