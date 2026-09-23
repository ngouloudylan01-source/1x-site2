import { ArrowRight } from 'lucide-react';
import heroImg from '@/assets/hero-illustration.jpg';
import { useLanguage } from '@/i18n';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="hero" className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid opacity-60" />
      <div className="absolute inset-0 bg-radial-warm" />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-slide-up">
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded-full px-3 py-1.5">
            {t.hero.eyebrow}
          </span>

          <h1 className="mt-6 font-heading font-extrabold text-4xl sm:text-5xl md:text-[3.4rem] text-white leading-[1.08]">
            {t.hero.title}
          </h1>

          <p className="mt-6 text-ink-300 text-base sm:text-lg leading-relaxed max-w-xl">
            {t.hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#support"
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-ink-950 font-semibold rounded-md hover:bg-teal-400 transition-colors"
            >
              {t.hero.donate}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#story"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-white font-semibold rounded-md hover:border-white/30 hover:bg-white/5 transition-colors"
            >
              {t.hero.readStory}
            </a>
          </div>
        </div>

        <div className="relative animate-fade-in">
          <div className="rounded-xl overflow-hidden border border-white/10 glow-soft">
            <img src={heroImg} alt={t.hero.imageAlt} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
