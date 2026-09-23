import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/i18n';

export default function Faq() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-ink-900/40 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-5 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            {t.faq.eyebrow}
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {t.faq.title}
          </h2>
        </div>

        <div className="space-y-3">
          {t.faq.items.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="card rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="w-full flex items-center gap-3 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-sm sm:text-base font-semibold text-white">{item.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-ink-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-64' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-sm text-ink-300 leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
