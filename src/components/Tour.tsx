import { MapPin, Ticket } from 'lucide-react';
import { TOUR_DATES } from '@/data';

export default function Tour() {
  return (
    <section id="tour" className="relative py-24 sm:py-32 overflow-hidden bg-anthracite-950">
      <div className="absolute inset-0 bg-noise opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-blood-400">Live</span>
          <h2 className="mt-3 font-black-display text-4xl sm:text-5xl md:text-6xl text-white">
            DATES DE <span className="text-gradient-red">TOURNÉE</span>
          </h2>
          <p className="mt-4 text-sm text-anthracite-300 max-w-xl mx-auto">
            Prochains concerts et billetterie. Réservez votre place avant qu'il ne soit trop tard.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-blood-500 to-gold-400" />
        </div>

        {/* Tour dates list */}
        <div className="max-w-4xl mx-auto space-y-3">
          {TOUR_DATES.map((date, idx) => {
            const isSoldOut = date.status === 'Sold out';
            const isAlmost = date.status === 'Presque complet';
            const isSoon = date.status === 'Bientôt';

            return (
              <div
                key={idx}
                className="group glass rounded-sm overflow-hidden transition-all hover:border-blood-500/30 hover:scale-[1.01]"
              >
                <div className="flex items-stretch">
                  {/* Date block */}
                  <div className="flex-shrink-0 w-24 sm:w-28 bg-gradient-to-b from-blood-600 to-blood-900 flex flex-col items-center justify-center py-5">
                    <span className="font-black-display text-2xl sm:text-3xl text-white leading-none">
                      {date.date.split(' ')[0]}
                    </span>
                    <span className="font-display text-sm tracking-widest text-white/80 mt-1">
                      {date.date.split(' ')[1]}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="flex-1 flex items-center justify-between p-5">
                    <div className="flex items-center gap-4 min-w-0">
                      <MapPin className="w-5 h-5 text-blood-400 flex-shrink-0 hidden sm:block" />
                      <div className="min-w-0">
                        <h4 className="text-base font-bold text-white truncate">
                          {date.city}, <span className="text-anthracite-300">{date.country}</span>
                        </h4>
                        <p className="text-xs text-anthracite-300 mt-0.5 truncate">{date.venue}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 flex-shrink-0">
                      <span
                        className={`text-xs font-semibold px-3 py-1 rounded-sm hidden sm:block ${
                          isSoldOut
                            ? 'bg-anthracite-700 text-anthracite-300'
                            : isAlmost
                            ? 'bg-blood-600/30 text-blood-300'
                            : isSoon
                            ? 'bg-gold-400/20 text-gold-400'
                            : 'bg-green-500/20 text-green-400'
                        }`}
                      >
                        {date.status}
                      </span>

                      <a
                        href={date.tickets}
                        className={`flex items-center gap-2 px-4 py-2 rounded-sm text-sm font-semibold transition-all ${
                          isSoldOut
                            ? 'bg-anthracite-700 text-anthracite-400 cursor-not-allowed pointer-events-none'
                            : 'bg-blood-600 text-white hover:bg-blood-500 glow-red hover:scale-105'
                        }`}
                      >
                        <Ticket className="w-4 h-4" />
                        {isSoldOut ? 'Complet' : 'Billets'}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
