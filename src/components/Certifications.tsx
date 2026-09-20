import { Award, ExternalLink, Trophy, Disc3 } from 'lucide-react';
import { CERTIFICATIONS, TROPHIES, BAREME, PHOTOS } from '@/data';
import { SectionHead, TruthBadge } from './Section';
import SourceTooltip from './SourceTooltip';

const DISC_STYLE: Record<string, { ring: string; glow: string; label: string }> = {
  or: { ring: 'from-yellow-300 via-amber-500 to-yellow-600', glow: 'rgba(212,164,55,0.35)', label: 'OR' },
  platine: { ring: 'from-slate-200 via-slate-400 to-slate-500', glow: 'rgba(203,213,225,0.30)', label: 'PLATINE' },
  diamant: { ring: 'from-cyan-100 via-sky-300 to-cyan-400', glow: 'rgba(125,211,252,0.30)', label: 'DIAMANT' },
};

// Disque physique gravé — rendu CSS 3D sobre
function Disc({ type, cover }: { type: string; cover: string }) {
  const s = DISC_STYLE[type] ?? DISC_STYLE.or;
  return (
    <div className="relative w-28 h-28 flex-shrink-0" aria-hidden>
      <div className="absolute inset-0 rounded-full blur-xl" style={{ background: s.glow }} />
      <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${s.ring} animate-spin-slow`} />
      <div className="absolute inset-[6px] rounded-full bg-anthracite-950/90" />
      <div className={`absolute inset-[10px] rounded-full bg-gradient-to-tl ${s.ring} opacity-60`} />
      <img src={cover} alt="" loading="lazy" className="absolute inset-[30px] rounded-full object-cover" />
      <div className="absolute inset-[46px] rounded-full bg-anthracite-950 border border-white/20" />
    </div>
  );
}

// Mur des certifications + vitrine des trophées (§12 & §13)
export default function Certifications() {
  return (
    <section id="certifs" className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-anthracite-900 via-anthracite-950 to-black">
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-gold-400/5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Or · Platine · Diamant"
          title={<>MUR DES <span className="text-gradient-gold">CERTIFICATIONS</span></>}
          accent="gold"
          desc="Chaque disque porte son organisme, sa date et sa source. Ce qui n'est pas prouvé est marqué « non confirmé » — jamais inventé."
        />

        {/* Barème APRODEMCI */}
        <div className="max-w-2xl mx-auto glass rounded-sm p-5 mb-12 border-l-2 border-gold-400">
          <p className="text-[11px] font-display tracking-[0.3em] uppercase text-gold-400 mb-2">
            Comprendre le barème — {BAREME.organisme}
          </p>
          <div className="grid sm:grid-cols-2 gap-2 text-xs text-anthracite-200">
            <p>🥇 {BAREME.or}</p>
            <p>🥈 {BAREME.platine}</p>
          </div>
        </div>

        {/* Mur des certifications */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="glass rounded-sm p-5 flex items-center gap-5 hover:border-gold-400/30 transition-all">
              <Disc type={cert.type} cover={cert.cover} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap mb-1">
                  <Award className="w-3.5 h-3.5 text-gold-400" />
                  <span className="text-[11px] font-bold uppercase tracking-wider text-gold-400">{cert.typeLabel}</span>
                </div>
                <h3 className="text-sm font-bold text-white leading-snug">{cert.title}</h3>
                <p className="text-[11px] text-anthracite-300 mt-1">{cert.detail}</p>
                <div className="mt-2 flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono text-anthracite-400">{cert.year}</span>
                  <TruthBadge status={cert.confirmed ? 'confirme' : 'rumeur'} />
                </div>
                <a
                  href={cert.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1 text-[10px] text-anthracite-400 hover:text-gold-300 transition-colors"
                >
                  <ExternalLink className="w-3 h-3" /> {cert.sourceLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Vitrine des trophées */}
        <div className="mb-20">
          <h3 className="flex items-center justify-center gap-2 font-display text-xl tracking-widest text-white uppercase mb-8">
            <Trophy className="w-5 h-5 text-gold-400" /> Trophées &amp; récompenses
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {TROPHIES.map((t, idx) => (
              <a
                key={idx}
                href={t.source}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass rounded-sm p-5 text-center hover:border-gold-400/40 transition-all"
              >
                <Disc3 className="w-8 h-8 mx-auto text-gold-400 group-hover:rotate-45 transition-transform duration-500" />
                <h4 className="mt-3 text-sm font-bold text-white">{t.name}</h4>
                <p className="mt-1 text-[11px] text-anthracite-300 leading-relaxed">{t.cat}</p>
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-[10px] font-mono text-anthracite-400">{t.year}</span>
                  <TruthBadge status={t.confirmed ? 'confirme' : 'rumeur'} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Photos réelles : Himra et ses trophées */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="group relative rounded-sm overflow-hidden border-2 border-gold-400/30 shadow-3d-deep">
            <img
              src={PHOTOS.heroTrophees.src}
              alt="HIMRA posant avec ses trophées en main"
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white font-semibold">Trophées en main — le vrai signe 1X, lui, se fait uniquement avec les doigts.</p>
            </div>
            <SourceTooltip credit={PHOTOS.heroTrophees.credit} source={PHOTOS.heroTrophees.source} position="top" />
          </div>
          <div className="group relative rounded-sm overflow-hidden border-2 border-blood-600/30 shadow-3d-deep">
            <img
              src={PHOTOS.parcExpo.src}
              alt="La foule du Parc des Expositions d'Abidjan"
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-sm text-white font-semibold">Le sacre du public — Parc des Expositions, complet.</p>
            </div>
            <SourceTooltip credit={PHOTOS.parcExpo.credit} source={PHOTOS.parcExpo.source} position="top" />
          </div>
        </div>
      </div>
    </section>
  );
}
