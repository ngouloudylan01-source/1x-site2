import { Code2, Gamepad2, HeartPulse } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="relative py-20 sm:py-28 bg-ink-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            Mon histoire
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Pourquoi cette cagnotte
          </h2>
        </div>

        <div className="space-y-5 text-ink-200 text-base leading-relaxed">
          <p>
            Je m'appelle <span className="text-white font-semibold">Dylan</span>. Je passe la
            majorité de mes journées à développer : des sites, des outils, et de plus en plus de
            projets liés à l'intelligence artificielle. C'est ma passion et mon métier — un métier
            exigeant, qui demande des outils à la hauteur.
          </p>
          <p>
            Le problème, c'est que ma machine actuelle n'arrive plus à suivre. Compiler un projet,
            tester un modèle d'IA ou faire tourner plusieurs outils en même temps prend un temps
            fou, quand ce n'est pas tout simplement impossible. Je sais que je pourrais faire
            beaucoup plus avec le bon matériel.
          </p>
          <p>
            À côté de ça, il y a un rêve que je porte depuis longtemps :{' '}
            <span className="text-white font-semibold">
              découvrir les jeux les plus impressionnants du moment
            </span>{' '}
            dans toute leur qualité graphique, et surtout progresser sérieusement sur{' '}
            <span className="text-white font-semibold">Call of Duty</span> et{' '}
            <span className="text-white font-semibold">Fortnite</span> — viser un vrai haut
            niveau, m'entraîner sans lag, et partager cette progression avec une communauté.
          </p>
          <p>
            Et il y a une réalité plus difficile à écrire :{' '}
            <span className="text-white font-semibold">
              mon poids fait très mal à mes genoux
            </span>
            , surtout dès que j'essaie de faire du sport à haute intensité. Cette fragilité vient
            en partie de plusieurs chutes que j'ai eues étant enfant, qui ont abîmé mes
            articulations. Résultat : je sais ce dont j'aurais besoin pour perdre du poids, mais
            chaque tentative intense se termine en douleur.
          </p>
          <p className="text-ink-300">
            Cette cagnotte réunit ces trois besoins parce qu'ils sont liés dans ma vie : le
            travail, la passion, et la santé. Chaque contribution, même petite, me rapproche d'un
            quotidien où je peux créer sans limite technique, progresser dans mes jeux, et bouger
            sans douleur.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          <div className="card rounded-lg p-5">
            <Code2 className="w-5 h-5 mb-3 text-teal-400" />
            <p className="text-sm font-semibold text-white">Développement & IA</p>
          </div>
          <div className="card rounded-lg p-5">
            <Gamepad2 className="w-5 h-5 mb-3 text-amber-400" />
            <p className="text-sm font-semibold text-white">Gaming compétitif</p>
          </div>
          <div className="card rounded-lg p-5">
            <HeartPulse className="w-5 h-5 mb-3 text-rose-400" />
            <p className="text-sm font-semibold text-white">Santé & mobilité</p>
          </div>
        </div>
      </div>
    </section>
  );
}
