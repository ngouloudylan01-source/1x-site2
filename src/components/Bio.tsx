import { PHOTOS, IDENTITY, NOUCHI } from '@/data';
import { SectionHead } from './Section';
import SourceTooltip from './SourceTooltip';

// Biographie complète + fiche d'identité + lexique nouchi (§15)
export default function Bio() {
  return (
    <section id="bio" className="relative py-24 sm:py-28 overflow-hidden bg-anthracite-950">
      <div className="absolute inset-0 bg-noise opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-600 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionHead
          kicker="Biographie"
          title={<>L'HISTOIRE <span className="text-gradient-red">COMPLÈTE</span></>}
          desc="Des freestyles de collège au premier Zénith : le récit, la fiche d'identité, les anecdotes vérifiées et le lexique nouchi."
        />

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Colonne portrait + fiche */}
          <div className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 space-y-5">
              <div className="group relative rounded-sm overflow-hidden border-2 border-blood-600/30 shadow-3d-deep">
                <img src={PHOTOS.portraitLeMonde.src} alt="Himra à Abidjan — portrait presse" className="w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-black-display text-xl text-white">{IDENTITY.nomComplet}</p>
                  <p className="text-xs text-gold-400 font-display tracking-widest mt-0.5">
                    {IDENTITY.nomScene} · {IDENTITY.naissance} · Cocody
                  </p>
                </div>
                <SourceTooltip credit={PHOTOS.portraitLeMonde.credit} source={PHOTOS.portraitLeMonde.source} position="top" />
              </div>

              {/* Fiche d'identité */}
              <div className="glass rounded-sm p-5">
                <p className="text-[11px] font-display tracking-[0.3em] uppercase text-blood-400 mb-3">Fiche d'identité</p>
                <dl className="space-y-2.5 text-xs">
                  {[
                    ['Vrai nom', IDENTITY.nomComplet],
                    ['Naissance', `${IDENTITY.naissance} — ${IDENTITY.lieu}`],
                    ['Genres', IDENTITY.genres],
                    ['Labels', IDENTITY.labels],
                    ['Influences', IDENTITY.influences],
                    ['Communauté', IDENTITY.communaute],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3">
                      <dt className="w-24 flex-shrink-0 text-anthracite-400 uppercase tracking-wide text-[10px] pt-0.5">{k}</dt>
                      <dd className="flex-1 text-anthracite-100 leading-relaxed">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* La citation — point de vérité §2 */}
              <div className="glass-red rounded-sm p-5 border-l-2 border-blood-500">
                <p className="text-sm text-anthracite-100 leading-relaxed italic">{IDENTITY.citation}</p>
                <p className="mt-2 text-[10px] text-anthracite-400">— HIMRA, {IDENTITY.citationSource}</p>
              </div>
            </div>
          </div>

          {/* Colonne récit */}
          <div className="lg:col-span-3 space-y-6">
            {[
              {
                t: 'Les débuts — SBS, Faya Flow',
                p: "Il freestyle dès l'âge de neuf ans. Au collège, il forme le groupe SBS avec des amis : quatre ans ensemble, et une 4ᵉ place à la 7ᵉ édition du concours de rap Faya Flow. En 2017, il apparaît sur la compilation Babi Vibes avec « C'est mami c'est loto » — sa première trace discographique.",
              },
              {
                t: 'Overcom, Elite Record, puis l\'indépendance',
                p: "Après un passage par la structure Overcom puis une relation avec Elite Record (« Mouiller »), Himra choisit l'indépendance avec sa clique. Il crée son propre courant, le MAJIN, et sa tendance, la ROSERIE. Les projets s'enchaînent : Omega (2018), Nfusa et Brutal avec J-Haine (2019).",
              },
              {
                t: 'Le Drill Ivoire — Ivoire Drill King',
                p: "En 2021, l'EP Ivoire Drill King sort chez Def Jam Recordings Africa : le Drill Ivoire a un manifeste. IDK2 confirme en 2022, et le freestyle « Yorobo Drill Acte 3 » — drill + sonorités ivoiriennes — est LE déclic qui le fait sortir du cercle local. Il rappe en nouchi, l'argot d'Abidjan, et en fait une fierté nationale.",
              },
              {
                t: '1X — le signe devenu mouvement',
                p: "La mixtape 1X (2023) baptise tout : le signe des doigts croisés — inventé devant son miroir —, le clan, la communauté 1X ULTRA, les fans « Chete ». « BARA BARA » devient un hymne continental. Le signe est un branding positif : une énergie transmise aux fans pour les pousser à se surpasser.",
              },
              {
                t: 'La consécration — Jeune & Riche',
                p: "Le 25 juillet 2024, l'album Jeune & Riche (Warner/Atlantic) devient disque d'or en Côte d'Ivoire en ~6 mois — record de rapidité — puis platine. Triple lauréat aux African Talent Awards 2024, Révélation de l'année aux Trace Awards, Kundé d'Or du meilleur artiste ouest-africain. Le 26 décembre 2024, il remplit le Parc des Expositions d'Abidjan.",
              },
              {
                t: "L'international — Zénith, SNEP, Les Flammes, Epic Records",
                p: "2025-2026 : Cabaret Sauvage puis Zénith de Paris (28 janvier 2026), tournée américaine (New York, Washington), Dour Festival, Rockhal. « Number One » avec Minz est certifié single d'or au SNEP (~15 M de streams). Aux Flammes 2026, il est le premier artiste africain à remporter la Flamme du morceau de musiques africaines. L'album Sorry I'm Bad sort chez Epic Records avec Gazo, Leto, La Fouine, ElGrandeToto et Zlatan. Prochaine étape : le Stade Olympique d'Ébimpé, le 26 décembre 2026 — objectif 60 000 personnes.",
              },
            ].map((b, i) => (
              <div key={i} className="glass rounded-sm p-6 border-l-2 border-blood-600/50 hover:border-blood-500 transition-colors">
                <h3 className="font-display text-lg tracking-wide text-white uppercase mb-2.5">{b.t}</h3>
                <p className="text-sm text-anthracite-200 leading-relaxed">{b.p}</p>
              </div>
            ))}

            {/* Lexique nouchi */}
            <div className="glass rounded-sm p-6 border-l-2 border-gold-400">
              <h3 className="font-display text-lg tracking-wide text-white uppercase mb-1">Lexique nouchi</h3>
              <p className="text-xs text-anthracite-400 mb-4">
                Pour les visiteurs non ivoiriens — le nouchi, argot d'Abidjan, est au cœur de son identité.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {NOUCHI.map((n) => (
                  <div key={n.mot} className="text-xs leading-relaxed">
                    <span className="font-bold text-gold-400">{n.mot}</span>
                    <span className="text-anthracite-300"> — {n.def}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
