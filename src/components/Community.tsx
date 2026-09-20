import { useState } from 'react';
import { Users, ExternalLink, RotateCcw } from 'lucide-react';
import { LINKS, QUIZ, PHOTOS } from '@/data';
import { SectionHead } from './Section';
import SourceTooltip from './SourceTooltip';

const SOCIALS = [
  { label: 'YouTube', sub: '2,32M abonnés · chaîne vérifiée', href: LINKS.youtube },
  { label: 'Instagram', sub: '@himra_saiyen · 1,1M followers', href: LINKS.instagram },
  { label: 'TikTok', sub: '@himra_saiyen', href: LINKS.tiktok },
  { label: 'X (Twitter)', sub: '@HimraOfficiel', href: LINKS.twitter },
  { label: 'Facebook', sub: 'Himra officiel', href: LINKS.facebook },
];

// Quiz « Quel fan es-tu ? » — local, sans collecte de données
function Quiz() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const answer = (idx: number) => {
    if (idx === QUIZ[step].answer) setScore((s) => s + 1);
    if (step + 1 >= QUIZ.length) setDone(true);
    else setStep((s) => s + 1);
  };

  const reset = () => {
    setStep(0);
    setScore(0);
    setDone(false);
  };

  const rank =
    score >= 5 ? '1X ULTRA certifié·e 🔥' : score >= 3 ? 'Chete confirmé·e' : score >= 1 ? 'En apprentissage' : 'Débutant·e — écoute BARA BARA et reviens';

  return (
    <div className="glass rounded-sm p-6">
      <p className="text-[11px] font-display tracking-[0.3em] uppercase text-gold-400 mb-4">
        Quiz — Quel fan es-tu ? <span className="text-anthracite-400 normal-case tracking-normal">(aucune donnée collectée)</span>
      </p>
      {!done ? (
        <>
          <div className="flex items-center gap-2 mb-4">
            {QUIZ.map((_, i) => (
              <span key={i} className={`h-1 flex-1 rounded-full ${i < step ? 'bg-blood-500' : i === step ? 'bg-blood-500/60' : 'bg-anthracite-700'}`} />
            ))}
          </div>
          <p className="text-sm font-semibold text-white mb-4">
            {step + 1}/{QUIZ.length} — {QUIZ[step].q}
          </p>
          <div className="space-y-2">
            {QUIZ[step].options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => answer(idx)}
                className="w-full text-left px-4 py-2.5 text-sm text-anthracite-100 glass rounded-sm hover:border-blood-500/40 hover:text-white transition-all"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-4">
          <p className="font-black-display text-4xl text-white mb-2">{score}/{QUIZ.length}</p>
          <p className="text-sm text-gold-400 font-semibold mb-4">{rank}</p>
          <button
            onClick={reset}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blood-600 hover:bg-blood-500 rounded-sm transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Rejouer
          </button>
        </div>
      )}
    </div>
  );
}

// Communauté 1X ULTRA — réseaux officiels uniquement (§14)
export default function Community() {
  return (
    <section id="ultra" className="relative py-24 sm:py-28 overflow-hidden bg-gradient-to-b from-anthracite-950 to-anthracite-900">
      <div className="absolute inset-0 bg-radial-red opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Filigrane */}
      <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black-display text-[24vw] text-blood-900/10 select-none pointer-events-none whitespace-nowrap">
        1X ULTRA
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="La famille"
          title={<>COMMUNAUTÉ <span className="text-gradient-gold">1X ULTRA</span></>}
          accent="gold"
          desc="Le mot d'ordre : EN GANG — une énergie positive, un clan, une fierté ivoirienne. Ici, uniquement les canaux officiels de l'artiste."
        />

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Réseaux officiels */}
          <div>
            <h3 className="flex items-center gap-2 font-display text-lg tracking-widest text-white uppercase mb-6">
              <Users className="w-5 h-5 text-blood-400" /> Canaux officiels
            </h3>
            <div className="space-y-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass rounded-sm p-4 hover:border-blood-500/30 transition-all"
                >
                  <div className="w-10 h-10 rounded-sm bg-blood-600/20 text-blood-400 flex items-center justify-center font-black-display flex-shrink-0">
                    {s.label[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white">{s.label}</p>
                    <p className="text-[11px] text-anthracite-300 truncate">{s.sub}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-anthracite-400 group-hover:text-white transition-colors flex-shrink-0" />
                </a>
              ))}
            </div>

            {/* Photo commu */}
            <div className="group relative mt-5 rounded-sm overflow-hidden border border-white/10">
              <img src={PHOTOS.fansSigne.src} alt="Fans faisant le signe 1X en concert" loading="lazy" className="w-full h-44 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/90 to-transparent" />
              <p className="absolute bottom-3 left-3 text-xs font-display tracking-widest text-white/90 uppercase">
                Les Chete — le signe repris par tout un peuple
              </p>
              <SourceTooltip credit={PHOTOS.fansSigne.credit} source={PHOTOS.fansSigne.source} position="top" />
            </div>
          </div>

          {/* Quiz */}
          <div className="space-y-5">
            <Quiz />
            <div className="glass-red rounded-sm p-5 text-center">
              <p className="font-black-display text-2xl text-white tracking-wide">EN GANG</p>
              <p className="text-xs text-anthracite-200 mt-2 leading-relaxed">
                « C'est une énergie positive que je transmets à mes fans, pour les pousser à se surpasser. » — HIMRA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
