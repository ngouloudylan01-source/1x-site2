import { Sparkles, ArrowUpRight, Clock } from 'lucide-react';
import { AI_PROJECTS } from '@/data';

const STATUS_STYLES: Record<string, string> = {
  Disponible: 'bg-teal-500/15 text-teal-300 border-teal-500/25',
  'En cours': 'bg-amber-500/15 text-amber-300 border-amber-500/25',
  Bientôt: 'bg-white/5 text-ink-300 border-white/10',
};

export default function AiProjects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28 bg-ink-950 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-5 sm:px-6">
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-wide uppercase text-teal-400">
            Utile à la communauté
          </span>
          <h2 className="mt-3 font-heading font-extrabold text-3xl sm:text-4xl text-white">
            Mes projets construits avec l'IA
          </h2>
          <p className="mt-4 text-ink-400 text-base leading-relaxed max-w-xl">
            Je publierai ici, au fil du temps, les outils et projets que je crée avec
            l'intelligence artificielle — dans l'idée qu'ils puissent être utiles à d'autres, pas
            seulement à moi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {AI_PROJECTS.map((p) => (
            <div key={p.id} className="card card-hover rounded-lg p-6 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="w-9 h-9 rounded-md bg-teal-500/10 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                </div>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full border ${STATUS_STYLES[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <h3 className="text-base font-semibold text-white mb-1.5">{p.title}</h3>
              <p className="text-sm text-ink-400 leading-relaxed flex-1">{p.description}</p>
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/5">
                <span className="flex items-center gap-1.5 text-xs text-ink-500">
                  <Clock className="w-3.5 h-3.5" />
                  {p.date}
                </span>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
                  >
                    Voir le projet
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="text-xs text-ink-600">Lien à venir</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
