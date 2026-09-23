import { Code2, Gamepad2, HeartPulse } from 'lucide-react';

export default function Story() {
  return (
    <section id="story" className="relative py-24 sm:py-32 overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-teal-400">
            Mon histoire
          </span>
          <h2 className="mt-3 font-black-display text-3xl sm:text-4xl md:text-5xl text-white">
            POURQUOI CETTE <span className="text-gradient-warm">CAGNOTTE</span>
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-teal-500 to-amber-400" />
        </div>

        <div className="glass rounded-lg p-6 sm:p-10 leading-relaxed text-ink-100 space-y-5 text-[15px] sm:text-base">
          <p>
            Je m'appelle <span className="text-white font-semibold">Dylan</span>. Je passe la
            grande majorité de mes journées à coder : des sites, des outils, et de plus en plus de
            projets liés à l'intelligence artificielle. C'est ma passion et mon métier — mais
            c'est aussi un métier exigeant, qui demande des outils à la hauteur.
          </p>
          <p>
            Le problème, c'est que ma machine actuelle n'arrive plus à suivre. Compiler un projet,
            entraîner un modèle, faire tourner plusieurs outils en même temps : tout devient lent,
            parfois impossible. Je bricole, je patiente, mais je sais que je pourrais faire
            tellement plus avec le bon matériel.
          </p>
          <p>
            À côté de ça, il y a un rêve que je porte depuis l'enfance :{' '}
            <span className="text-white font-semibold">jouer</span> — à Call of Duty, à Fortnite —
            sans que ça rame, sans frustration. Et pourquoi pas, un jour, partager ça en direct
            avec d'autres personnes en streaming. Ce n'est pas juste un loisir : c'est une envie
            que je n'ai jamais pu vivre pleinement.
          </p>
          <p>
            Et puis il y a une réalité plus difficile à écrire :{' '}
            <span className="text-white font-semibold">
              mon poids abîme mes genoux, chaque jour un peu plus.
            </span>{' '}
            Monter un escalier, marcher longtemps, rester debout — des gestes simples deviennent
            douloureux. Je sais ce qu'il me reste à faire : perdre du poids progressivement, avec
            un vrai accompagnement et le bon équipement, pour soulager mes articulations avant que
            la situation n'empire.
          </p>
          <p className="text-ink-200">
            Cette cagnotte réunit ces trois besoins parce qu'ils sont liés dans ma vie : le
            travail, la passion, et la santé. Chaque contribution, même petite, me rapproche d'un
            quotidien où je peux enfin créer sans limite technique, jouer sans frustration, et
            bouger sans douleur.
          </p>
        </div>

        {/* Three pillars icons */}
        <div className="grid sm:grid-cols-3 gap-4 mt-10">
          <div className="glass rounded-sm p-5 text-center border-t-2" style={{ borderColor: '#2dd4bf' }}>
            <Code2 className="w-6 h-6 mx-auto mb-2 text-teal-400" />
            <p className="text-sm font-semibold text-white">Coder & créer avec l'IA</p>
          </div>
          <div className="glass rounded-sm p-5 text-center border-t-2" style={{ borderColor: '#f59e0b' }}>
            <Gamepad2 className="w-6 h-6 mx-auto mb-2 text-amber-400" />
            <p className="text-sm font-semibold text-white">Jouer & streamer</p>
          </div>
          <div className="glass rounded-sm p-5 text-center border-t-2" style={{ borderColor: '#fb7185' }}>
            <HeartPulse className="w-6 h-6 mx-auto mb-2 text-rose-400" />
            <p className="text-sm font-semibold text-white">Retrouver la mobilité</p>
          </div>
        </div>
      </div>
    </section>
  );
}
