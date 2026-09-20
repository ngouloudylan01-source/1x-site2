import { useState } from 'react';
import { PHOTOS, TIMELINE } from '@/data';
import SourceTooltip from './SourceTooltip';

export default function Bio() {
  const [activeYear, setActiveYear] = useState(0);

  return (
    <section id="bio" className="relative py-24 sm:py-32 overflow-hidden bg-anthracite-950">
      <div className="absolute inset-0 bg-noise opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blood-600 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-blood-400">Parcours</span>
          <h2 className="mt-3 font-black-display text-4xl sm:text-5xl md:text-6xl text-white">
            BIOGRAPHIE <span className="text-gradient-red">&amp;</span> TIMELINE
          </h2>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-blood-500 to-gold-400" />
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Portrait + bio text */}
          <div className="lg:col-span-2">
            <div className="sticky top-28">
              <div className="relative perspective-1000">
                <div className="group relative rounded-sm overflow-hidden border-2 border-blood-600/30 shadow-3d-deep">
                  <img src={PHOTOS.portraitLeMonde.src} alt="Himra à Abidjan — portrait Le Monde Afrique" className="w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="font-black-display text-2xl text-white">Abdul Rahim Bakayoko</p>
                    <p className="text-sm text-gold-400 font-display tracking-widest">HIMRA · Né le 28 mai 1998 · Cocody, Abidjan</p>
                  </div>
                  <SourceTooltip credit={PHOTOS.portraitLeMonde.credit} source={PHOTOS.portraitLeMonde.source} position="top" />
                </div>
                {/* Corner accents */}
                <div className="absolute -top-1 -left-1 w-8 h-8 border-l-2 border-t-2 border-blood-500" />
                <div className="absolute -bottom-1 -right-1 w-8 h-8 border-r-2 border-b-2 border-blood-500" />
              </div>

              <div className="mt-6 glass rounded-sm p-5 border-l-2 border-blood-500">
                <p className="text-sm text-anthracite-200 leading-relaxed">
                  <span className="text-blood-400 font-semibold">HIMRA</span>, de son vrai nom Abdul Rahim Bakayoko,
                  est le rappeur le plus influent de Côte d'Ivoire et le pionnier du <span className="text-white font-medium">Drill Ivoire</span>.
                  Né à Cocody en 1998, il découvre le rap français à travers La Fouine avant de forger son propre son :
                  un mélange de drill UK, de flow agressif et de sonorités authentiques ivoiriennes.
                  Son signe iconique des doigts en <span className="text-gold-400 font-bold">X</span> est devenu
                  l'emblème d'un mouvement entier. Ses fans se nomment <span className="text-blood-400 font-semibold">« Chete »</span> et
                  forment la communauté <span className="text-gold-400 font-semibold">1X ULTRA</span>.
                </p>
              </div>

              {/* Photo des débuts + anecdotes exclusives */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="group relative rounded-sm overflow-hidden border border-white/10">
                  <img src={PHOTOS.debuts.src} alt="Himra à ses débuts" className="w-full h-36 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/90 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-display tracking-widest text-white/80 uppercase">Les débuts</span>
                  <SourceTooltip credit={PHOTOS.debuts.credit} source={PHOTOS.debuts.source} position="top" />
                </div>
                <div className="group relative rounded-sm overflow-hidden border border-white/10">
                  <img src={PHOTOS.fansCagoule.src} alt="Fans avec cagoules 1X" className="w-full h-36 object-cover" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-anthracite-950/90 to-transparent" />
                  <span className="absolute bottom-2 left-2 text-[10px] font-display tracking-widest text-white/80 uppercase">La commu « Chete »</span>
                  <SourceTooltip credit={PHOTOS.fansCagoule.credit} source={PHOTOS.fansCagoule.source} position="top" />
                </div>
              </div>

              <div className="mt-6 glass rounded-sm p-5 border-l-2 border-gold-400">
                <p className="text-xs font-display tracking-[0.3em] uppercase text-gold-400 mb-2">Le saviez-vous ?</p>
                <ul className="space-y-2 text-xs text-anthracite-200 leading-relaxed list-disc list-inside">
                  <li>« Chete » (machette en nouchi) donne son nom aux fans — d'où les deux machettes croisées de l'emblème.</li>
                  <li>Ses cagoules « 1X » brodées sont devenues un accessoire culte dans les concerts d'Abidjan.</li>
                  <li>Le Monde Afrique lui a consacré un portrait en mars 2025 : « il parle à la rue en nouchi hardcore ».</li>
                  <li>Sa chaîne YouTube cumule plus de 440 millions de vues pour 87 vidéos.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blood-500 via-blood-700 to-transparent" />

              {TIMELINE.map((item, idx) => {
                const isActive = activeYear === idx;
                return (
                  <div
                    key={idx}
                    className={`relative mb-10 flex items-start gap-6 ${
                      idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse sm:text-right'
                    }`}
                    onMouseEnter={() => setActiveYear(idx)}
                  >
                    {/* Dot */}
                    <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-10 mt-2">
                      <div
                        className="w-4 h-4 rounded-full border-2 transition-all duration-500"
                        style={{
                          borderColor: item.color,
                          background: isActive ? item.color : 'transparent',
                          boxShadow: isActive ? `0 0 20px ${item.color}` : 'none',
                          transform: isActive ? 'scale(1.3)' : 'scale(1)',
                        }}
                      />
                    </div>

                    {/* Content card */}
                    <div className={`ml-12 sm:ml-0 sm:w-1/2 ${idx % 2 === 0 ? 'sm:pr-12' : 'sm:pl-12'}`}>
                      <div
                        className="glass rounded-sm p-5 transition-all duration-500 cursor-pointer"
                        style={{
                          borderColor: isActive ? `${item.color}80` : 'rgba(255,255,255,0.06)',
                          borderLeft: `3px solid ${item.color}`,
                          boxShadow: isActive ? `0 0 30px ${item.color}20` : 'none',
                        }}
                      >
                        <div className="flex items-center gap-3 mb-2" style={{ justifyContent: idx % 2 === 0 ? 'flex-start' : 'flex-end' }}>
                          <span
                            className="font-black-display text-3xl"
                            style={{ color: item.color }}
                          >
                            {item.year}
                          </span>
                        </div>
                        <h3 className="font-display text-xl tracking-wide text-white mb-2 uppercase">
                          {item.title}
                        </h3>
                        <p className="text-sm text-anthracite-200 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
