import { useState } from 'react';
import { Cpu, Gamepad, Heart, ChevronDown } from 'lucide-react';
import { GOALS } from '@/data';
import { useLanguage } from '@/i18n';

const ICONS: Record<string, typeof Cpu> = {
  cpu: Cpu,
  gamepad: Gamepad,
  heart: Heart,
};

export default function Goals() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<string | null>(GOALS[0].id);

  return (
    <section id="goals" className="relative py-20 sm:py-28 bg-ink-900/40 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wide uppercase text-amber-400">
            {t.goals.eyebrow}
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {t.goals.title}
          </h2>
        </div>

        <div className="space-y-3">
          {GOALS.map((goal) => {
            const Icon = ICONS[goal.icon];
            const content = t.goals.items[goal.id];
            const isOpen = open === goal.id;
            return (
              <div key={goal.id} className="card rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : goal.id)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-md flex items-center justify-center"
                    style={{ background: `${goal.color}18` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: goal.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg font-semibold text-white">{content.title}</h3>
                    <p className="text-sm text-ink-400 mt-0.5">{content.short}</p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-ink-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-sm sm:text-base text-ink-300 leading-relaxed">
                    {content.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
