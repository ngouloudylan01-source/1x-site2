import { ArrowRight } from 'lucide-react';
import heroImg from '@/assets/hero-illustration.jpg';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-radial-warm" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-3 py-1.5">
            Cagnotte personnelle
          </span>

          <h1 className="mt-6 font-heading font-extrabold text-4xl sm:text-5xl md:text-[3.4rem] text-white leading-[1.08]">
            Un coup de pouce pour coder, jouer et retrouver ma santé
          </h1>

          <p className="mt-6 text-ink-300 text-base sm:text-lg leading-relaxed max-w-xl">
            Je m'appelle Dylan, développeur passionné d'intelligence artificielle. J'ai besoin
            d'une machine à la hauteur de mes projets, je rêve de progresser sérieusement sur mes
            jeux préférés, et je dois soulager mes genoux avant que la situation n'empire.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#support"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-ink-950 font-semibold rounded-md hover:bg-teal-400 transition-colors"
            >
              Faire un don
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white font-semibold rounded-md hover:border-white/30 hover:bg-white/5 transition-colors"
            >
              Lire mon histoire
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="rounded-xl overflow-hidden border border-white/10 glow-soft">
            <img
              src={heroImg}
              alt="Illustration représentant le parcours entre développement, santé et gaming"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
