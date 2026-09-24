import { Code2, Gamepad2, HeartPulse } from 'lucide-react';
import footballImg from '@/assets/football-athlete.jpg';
import basketballImg from '@/assets/basketball-athlete.jpg';
import kneeImg from '@/assets/knee-care.jpg';
import { useLanguage } from '@/i18n';

export default function Story() {
  const { t } = useLanguage();
  const icons = [Code2, Gamepad2, HeartPulse];
  const colors = ['text-teal-400', 'text-amber-400', 'text-rose-400'];

  return (
    <section id="story" className="relative py-20 sm:py-28 bg-ink-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="mb-12 max-w-3xl">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            {t.story.eyebrow}
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {t.story.title}
          </h2>
        </div>

        <div className="max-w-3xl space-y-5 text-ink-200 text-base leading-relaxed">
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

        <div className="grid md:grid-cols-5 gap-4 mt-12">
          <figure className="relative md:col-span-3 min-h-[300px] overflow-hidden rounded-xl border border-white/10 bg-ink-900">
            <img
              src={footballImg}
              alt={t.goals.items.gaming.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-transparent px-5 pt-16 pb-5 text-sm font-semibold text-white">
              {t.goals.items.gaming.title}
            </figcaption>
          </figure>

          <div className="md:col-span-2 grid grid-rows-2 gap-4 min-h-[300px]">
            <figure className="relative min-h-[180px] overflow-hidden rounded-xl border border-white/10 bg-ink-900">
              <img
                src={basketballImg}
                alt={t.goals.items.gaming.short}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-transparent px-4 pt-12 pb-4 text-xs font-semibold text-white">
                {t.story.labels[1]}
              </figcaption>
            </figure>
            <figure className="relative min-h-[180px] overflow-hidden rounded-xl border border-white/10 bg-ink-900">
              <img
                src={kneeImg}
                alt={t.goals.items.health.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950/90 via-ink-950/35 to-transparent px-4 pt-12 pb-4 text-xs font-semibold text-white">
                {t.goals.items.health.title}
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
