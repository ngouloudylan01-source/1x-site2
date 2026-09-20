import { Crown, ExternalLink, Heart, Music2 } from 'lucide-react';
import { IVORIAN_DOLL, PHOTOS } from '@/data';
import { SectionHead } from './Section';
import SourceTooltip from './SourceTooltip';

// ============================================================
// Ivorian Doll — la « Queen of Drill », compagne d'Himra.
// Mise en valeur éditoriale : portrait, faits sourcés (Guardian,
// PRS, Gelée Radio, presse ivoirienne), le feat commun « SEXY »,
// et la photo du couple aux Flammes.
// ============================================================
export default function IvorianDoll() {
  const ivd = IVORIAN_DOLL;

  return (
    <section id="ivorian-doll" className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-anthracite-950 via-[#160a10] to-anthracite-950">
      <div className="absolute inset-0 bg-noise opacity-30" />
      {/* Halo rosé — la touche « Doll » dans l'univers rouge et noir */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full blur-3xl bg-[#d4547a]/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Queen of Drill · La force à ses côtés"
          title={<>IVORIAN <span style={{ color: '#e87ba0' }}>DOLL</span></>}
          desc="Vanessa Mahi, première star féminine de la drill britannique (The Guardian) — d'origine ivoirienne, compagne d'Himra, et connectée au 1X sur disque comme sur tapis rouge."
        />

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
          {/* Colonne visuels */}
          <div className="space-y-6">
            <div className="group relative rounded-sm overflow-hidden border-2 border-[#e87ba0]/40 shadow-3d-deep">
              <img
                src={ivd.photo.src}
                alt="Ivorian Doll — pochette de « Hold It Down »"
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <Crown className="w-4 h-4 text-[#e87ba0]" />
                <p className="text-sm text-white font-semibold">{ivd.titre}</p>
              </div>
              <SourceTooltip credit={ivd.photo.credit} source={ivd.photo.source} position="top" />
            </div>

            <div className="group relative rounded-sm overflow-hidden border border-gold-400/30 shadow-3d-deep">
              <img
                src={ivd.photoCouple.src}
                alt="Himra et Ivorian Doll arrivant ensemble aux Flammes"
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2">
                <Heart className="w-4 h-4 text-blood-400" />
                <p className="text-sm text-white font-semibold">Ensemble aux Flammes — le power couple du drill francophone.</p>
              </div>
              <SourceTooltip credit={ivd.photoCouple.credit} source={ivd.photoCouple.source} position="top" />
            </div>
          </div>

          {/* Colonne récit — chaque paragraphe est sourcé */}
          <div>
            <div className="glass rounded-sm p-5 mb-6 border-l-2" style={{ borderLeftColor: '#e87ba0' }}>
              <p className="text-[11px] font-display tracking-[0.3em] uppercase text-[#e87ba0] mb-2">Fiche d'identité</p>
              <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-[13px]">
                <div><dt className="text-anthracite-400 text-[11px] uppercase tracking-wide">Nom de scène</dt><dd className="text-white font-semibold">{ivd.nom}</dd></div>
                <div><dt className="text-anthracite-400 text-[11px] uppercase tracking-wide">Vrai nom</dt><dd className="text-white font-semibold">{ivd.vraiNom}</dd></div>
                <div className="sm:col-span-2"><dt className="text-anthracite-400 text-[11px] uppercase tracking-wide">Racines</dt><dd className="text-anthracite-100">{ivd.naissance}</dd></div>
              </dl>
            </div>

            <ol className="space-y-4">
              {ivd.bio.map((b, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-black-display text-2xl leading-none shrink-0 mt-0.5" style={{ color: '#e87ba0' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-[13.5px] text-anthracite-100 leading-relaxed">{b.txt}</p>
                    <a
                      href={b.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-[11px] text-anthracite-400 hover:text-[#e87ba0] transition-colors"
                    >
                      <ExternalLink className="w-3 h-3" /> {b.sourceLabel}
                    </a>
                  </div>
                </li>
              ))}
            </ol>

            {/* Le feat commun */}
            <a
              href={ivd.featCommun.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 flex items-center gap-4 glass rounded-sm p-4 hover:border-[#e87ba0]/50 transition-all group"
            >
              <span className="w-11 h-11 flex items-center justify-center rounded-sm shrink-0" style={{ background: '#e87ba022' }}>
                <Music2 className="w-5 h-5" style={{ color: '#e87ba0' }} />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block text-sm font-bold text-white">{ivd.featCommun.titre}</span>
                <span className="block text-[11px] text-anthracite-300 mt-0.5">{ivd.featCommun.album} — la connexion Abidjan-Londres, sur tracklist officielle</span>
              </span>
              <ExternalLink className="w-4 h-4 text-anthracite-400 group-hover:text-[#e87ba0] transition-colors shrink-0" />
            </a>

            {/* Liens officiels */}
            <div className="mt-5 flex flex-wrap gap-2.5">
              {ivd.liens.map((l) => (
                <a
                  key={l.url}
                  href={l.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 border border-white/15 rounded-sm text-[12px] text-anthracite-200 hover:text-white hover:border-[#e87ba0]/60 transition-all"
                >
                  {l.label} <ExternalLink className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
