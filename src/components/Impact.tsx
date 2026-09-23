import { useLanguage } from '@/i18n';

export default function Impact() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 sm:py-28 bg-ink-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            {t.impact.eyebrow}
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {t.impact.title}
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {t.impact.steps.map((step, index) => (
            <div key={step.title} className="card rounded-lg p-6">
              <span className="font-heading font-extrabold text-2xl text-teal-400">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-3 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-ink-400 leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
