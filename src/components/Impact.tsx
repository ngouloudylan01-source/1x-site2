import { IMPACT_STEPS } from '@/data';

export default function Impact() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-amber-400">
            L'impact de votre geste
          </span>
          <h2 className="mt-3 font-black-display text-3xl sm:text-4xl md:text-5xl text-white">
            D'AUJOURD'HUI À <span className="text-gradient-warm">DEMAIN</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 relative">
          <div className="hidden sm:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-teal-500/40 via-amber-400/40 to-teal-500/40" />
          {IMPACT_STEPS.map((s) => (
            <div key={s.step} className="relative text-center">
              <div className="w-16 h-16 mx-auto rounded-full glass border border-teal-500/30 flex items-center justify-center font-black-display text-xl text-teal-300 mb-4 relative z-10 bg-ink-950">
                {s.step}
              </div>
              <h3 className="font-display text-lg tracking-wide text-white uppercase mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-ink-300 leading-relaxed px-2">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
