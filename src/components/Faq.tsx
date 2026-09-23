import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { EXPLAIN_SIMPLE } from '@/data';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32 overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-noise opacity-20" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-teal-400">
            En toute transparence
          </span>
          <h2 className="mt-3 font-black-display text-3xl sm:text-4xl md:text-5xl text-white">
            EXPLIQUÉ <span className="text-gradient-warm">SIMPLEMENT</span>
          </h2>
        </div>

        <div className="space-y-3">
          {EXPLAIN_SIMPLE.map((item, idx) => {
            const isOpen = open === idx;
            return (
              <div key={idx} className="glass rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : idx)}
                  className="w-full flex items-center gap-3 p-5 text-left"
                >
                  <HelpCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span className="flex-1 text-sm sm:text-base font-semibold text-white">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-ink-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    isOpen ? 'max-h-64' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 pl-12 text-sm text-ink-200 leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
