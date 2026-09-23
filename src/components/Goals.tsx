import { useState } from 'react';
import { Cpu, Gamepad, Heart, ChevronDown } from 'lucide-react';
import { GOALS } from '@/data';

const ICONS: Record<string, typeof Cpu> = {
  cpu: Cpu,
  gamepad: Gamepad,
  heart: Heart,
};

export default function Goals() {
  const [open, setOpen] = useState<string | null>(GOALS[0].id);

  return (
    <section id="goals" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950">
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-amber-400">
            Où va votre soutien
          </span>
          <h2 className="mt-3 font-black-display text-3xl sm:text-4xl md:text-5xl text-white">
            TROIS OBJECTIFS, <span className="text-gradient-warm">UN SEUL CHEMIN</span>
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-teal-500 to-amber-400" />
        </div>

        <div className="space-y-4">
          {GOALS.map((goal) => {
            const Icon = ICONS[goal.icon];
            const isOpen = open === goal.id;
            return (
              <div
                key={goal.id}
                className="glass rounded-lg overflow-hidden transition-all duration-500"
                style={{ borderLeft: `3px solid ${goal.color}` }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : goal.id)}
                  className="w-full flex items-center gap-4 p-5 sm:p-6 text-left"
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ background: `${goal.color}20` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: goal.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{goal.title}</h3>
                    <p className="text-sm text-ink-300 mt-0.5">{goal.short}</p>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-ink-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-ink-100 leading-relaxed">
                    {goal.text}
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
