import { HeartHandshake, ArrowDown } from 'lucide-react';
import heroImg from '@/assets/hero-illustration.jpg';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-ink-950"
    >
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-radial-warm opacity-70" />
      <div className="absolute inset-0 bg-noise opacity-50" />

      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: '#2dd4bf25' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: '#f59e0b20', animationDelay: '2s' }}
      />

      <div className="relative z-10 mt-24 mb-6 flex items-center gap-3 animate-slide-up">
        <span className="h-px w-12 bg-teal-400" />
        <span className="text-xs font-display tracking-[0.4em] uppercase text-ink-300">
          Cagnotte personnelle · Depuis Pointe-Noire
        </span>
        <span className="h-px w-12 bg-teal-400" />
      </div>

      <h1
        className="relative z-10 font-black-display text-center text-white leading-none animate-slide-up px-4"
        style={{ animationDelay: '0.1s' }}
      >
        <span className="block text-4xl sm:text-6xl md:text-7xl text-glow-warm">
          UN NOUVEAU DÉPART
        </span>
        <span className="block text-xl sm:text-2xl md:text-3xl mt-3 font-display tracking-[0.2em] text-amber-300">
          POUR CODER, JOUER & GUÉRIR
        </span>
      </h1>

      <div className="relative z-10 mt-10 mb-8 w-full max-w-4xl px-4 sm:px-6">
        <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-3d-deep">
          <img
            src={heroImg}
            alt="Illustration symbolisant le chemin entre le code, la santé et le jeu"
            className="w-full h-auto object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-transparent" />
        </div>
      </div>

      <p
        className="relative z-10 max-w-2xl text-center text-ink-200 text-sm sm:text-base px-6 mb-8 animate-slide-up leading-relaxed"
        style={{ animationDelay: '0.3s' }}
      >
        Je m'appelle Dylan. Je développe des projets tech et IA, et je rêve de jouer et de
        streamer sans contrainte technique. Mais mon matériel me freine, et mon poids abîme mes
        genoux un peu plus chaque jour. J'ai besoin d'un coup de pouce pour avancer sur ces deux
        fronts à la fois.
      </p>

      <div
        className="relative z-10 flex flex-wrap items-center justify-center gap-4 mb-14 animate-slide-up"
        style={{ animationDelay: '0.4s' }}
      >
        <a
          href="#support"
          className="flex items-center gap-2 px-8 py-3 font-semibold text-white rounded-sm transition-all hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #2dd4bf, #14b8a6)',
            boxShadow: '0 0 30px #2dd4bf40',
          }}
        >
          <HeartHandshake className="w-5 h-5" />
          Faire un don
        </a>
        <a
          href="#story"
          className="px-8 py-3 font-semibold text-white border border-white/20 rounded-sm hover:bg-white/5 transition-all"
        >
          Lire mon histoire
        </a>
      </div>

      <a
        href="#story"
        className="relative z-10 mb-8 text-ink-400 hover:text-white transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  );
}
