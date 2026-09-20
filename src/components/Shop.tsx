import { ShoppingBag, ArrowRight } from 'lucide-react';
import { MERCH } from '@/data';

export default function Shop() {
  return (
    <section id="shop" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-anthracite-950 to-anthracite-900">
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-blood-400">Boutique</span>
          <h2 className="mt-3 font-black-display text-4xl sm:text-5xl md:text-6xl text-white">
            E-SHOP <span className="text-gradient-red">1X</span>
          </h2>
          <p className="mt-4 text-sm text-anthracite-300 max-w-xl mx-auto">
            La marque de vêtements officielle d'HIMRA. Éditions limitées, qualité premium.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-blood-500 to-gold-400" />
        </div>

        {/* Merch grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MERCH.map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <div
                className="relative aspect-[3/4] rounded-sm overflow-hidden border border-white/10 transition-all duration-500 group-hover:scale-[1.03] group-hover:border-blood-500/40 flex flex-col items-center justify-center"
                style={{
                  boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                  background: `linear-gradient(160deg, ${item.color}18 0%, #0a0a0c 60%, ${item.color}08 100%)`,
                }}
              >
                {/* Color accent strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-2"
                  style={{ background: item.color }}
                />

                {/* Noise texture */}
                <div className="absolute inset-0 bg-noise opacity-30" />

                {/* 1X logo big */}
                <div className="relative z-10 flex flex-col items-center gap-3">
                  <div
                    className="flex items-center justify-center w-20 h-20 clip-angular transition-transform duration-500 group-hover:scale-110"
                    style={{ background: `linear-gradient(135deg, ${item.color}, ${item.color}aa)`, boxShadow: `0 0 30px ${item.color}40` }}
                  >
                    <span className="font-black-display text-3xl text-white">1X</span>
                  </div>
                  <span className="font-display text-sm tracking-[0.3em] text-white/50 uppercase">EN GANG</span>
                </div>

                {/* Decorative machette accent */}
                <div className="absolute bottom-3 left-3 text-xs font-mono text-white/20">1X-0{idx + 1}</div>

                {/* Price badge */}
                <div className="absolute top-3 right-3 glass px-3 py-1 rounded-sm">
                  <span className="text-sm font-bold text-gold-400">{item.price}</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <button
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-sm text-sm font-semibold text-white opacity-0 group-hover:opacity-100 transition-all"
                    style={{ background: item.color }}
                  >
                    <ShoppingBag className="w-4 h-4" /> Ajouter au panier
                  </button>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white leading-snug">{item.name}</h4>
                <ArrowRight className="w-4 h-4 text-anthracite-400 group-hover:text-blood-400 group-hover:translate-x-1 transition-all flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>

        {/* Shop CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://himra.tikerama.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-blood-500/40 text-white font-semibold rounded-sm hover:bg-blood-600/20 transition-all"
          >
            Voir toute la collection
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
