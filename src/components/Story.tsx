import { Code2, Gamepad2, HeartPulse } from 'lucide-react';
import { useLanguage } from '@/i18n';

export default function Story() {
  const { t } = useLanguage();
  const icons = [Code2, Gamepad2, HeartPulse];
  const colors = ['text-teal-400', 'text-amber-400', 'text-rose-400'];

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-ink-950 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            {t.story.eyebrow}
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {t.story.title}
          </h2>
        </div>

        <div className="space-y-5 text-ink-200 text-base leading-relaxed">
          {t.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-12">
          {t.story.labels.map((label, index) => {
            const Icon = icons[index];
            return (
              <div key={label} className="card rounded-lg p-5">
                <Icon className={`w-5 h-5 mb-3 ${colors[index]}`} />
                <p className="text-sm font-semibold text-white">{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
