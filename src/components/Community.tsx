import { Users, MessageCircle, Vote, Sparkles, ArrowRight } from 'lucide-react';

const COMMUNITY_LINKS = [
  { name: 'Discord', desc: 'Salon vocal officiel 1X ULTRA', members: '12.4K', icon: 'discord', color: '#5865F2' },
  { name: 'WhatsApp', desc: 'Groupe de discussion des fans', members: '8.2K', icon: 'whatsapp', color: '#25D366' },
  { name: 'Telegram', desc: 'Canal d\'annonces exclusives', members: '5.1K', icon: 'telegram', color: '#26A5E4' },
];

const POLLS = [
  { question: 'Prochain featuring souhaité ?', options: [{ label: 'Burna Boy', votes: '68%' }, { label: 'Booba', votes: '22%' }, { label: 'Stormzy', votes: '10%' }] },
  { question: 'Quel morceau en live au prochain concert ?', options: [{ label: 'BARA BARA', votes: '45%' }, { label: 'DJOROBITE', votes: '35%' }, { label: 'Ice', votes: '20%' }] },
];

export default function Community() {
  return (
    <section id="community" className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-anthracite-950 to-anthracite-900">
      <div className="absolute inset-0 bg-radial-red opacity-40" />
      <div className="absolute inset-0 bg-noise opacity-30" />

      {/* Large background text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-black-display text-[200px] sm:text-[400px] text-blood-900/10 select-none pointer-events-none whitespace-nowrap">
        1X ULTRA
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-display tracking-[0.4em] uppercase text-gold-400">Famille</span>
          <h2 className="mt-3 font-black-display text-4xl sm:text-5xl md:text-6xl text-white">
            COMMUNAUTÉ <span className="text-gradient-gold">1X ULTRA</span>
          </h2>
          <p className="mt-4 text-sm text-anthracite-300 max-w-xl mx-auto">
            Rejoignez le mouvement. Accès exclusif, contenu inédit, votes pour les futurs projets et salons privés.
          </p>
          <div className="mt-4 w-24 h-1 mx-auto bg-gradient-to-r from-gold-400 to-blood-500" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Community links */}
          <div>
            <h3 className="font-display text-xl tracking-widest text-white uppercase mb-6 flex items-center gap-2">
              <Users className="w-5 h-5 text-blood-400" /> Rejoignez les salons
            </h3>
            <div className="space-y-4">
              {COMMUNITY_LINKS.map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="group flex items-center gap-4 glass rounded-sm p-5 transition-all hover:scale-[1.02] hover:border-blood-500/30"
                  style={{ borderLeft: `3px solid ${link.color}` }}
                >
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center font-bold text-white text-lg"
                    style={{ background: `${link.color}25`, color: link.color }}
                  >
                    {link.name[0]}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white">{link.name}</h4>
                    <p className="text-xs text-anthracite-300 mt-0.5">{link.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-gold-400">{link.members}</p>
                    <p className="text-xs text-anthracite-400">membres</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-anthracite-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              ))}
            </div>

            {/* Discord banner */}
            <div className="mt-6 relative glass-red rounded-sm p-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl bg-blood-500/20" />
              <div className="relative z-10 flex items-center gap-4">
                <MessageCircle className="w-8 h-8 text-blood-400" />
                <div className="flex-1">
                  <h4 className="font-display text-lg text-white tracking-wide uppercase">Accès VIP Discord</h4>
                  <p className="text-xs text-anthracite-200 mt-1">
                    Snippets exclusifs, écoutes avant-première et discussions directes avec l'équipe 1X.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Polls */}
          <div>
            <h3 className="font-display text-xl tracking-widest text-white uppercase mb-6 flex items-center gap-2">
              <Vote className="w-5 h-5 text-gold-400" /> Votes en cours
            </h3>
            <div className="space-y-6">
              {POLLS.map((poll, idx) => (
                <div key={idx} className="glass rounded-sm p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-gold-400" />
                    <h4 className="text-sm font-semibold text-white">{poll.question}</h4>
                  </div>
                  <div className="space-y-3">
                    {poll.options.map((opt, oidx) => (
                      <div key={oidx} className="group">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-anthracite-200">{opt.label}</span>
                          <span className="text-xs font-bold text-gold-400">{opt.votes}</span>
                        </div>
                        <div className="h-2 bg-anthracite-800 rounded-full overflow-hidden cursor-pointer">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blood-500 to-gold-400 transition-all duration-700 group-hover:from-blood-400 group-hover:to-gold-300"
                            style={{ width: opt.votes }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Membership card */}
            <div className="mt-6 relative rounded-sm overflow-hidden border-2 border-gold-400/30 p-6 bg-gradient-to-br from-anthracite-800 to-anthracite-950">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display text-sm tracking-widest text-gold-400 uppercase">Carte de membre</span>
                <span className="text-xs text-anthracite-400">N° 1X-2026</span>
              </div>
              <p className="font-black-display text-2xl text-white">1X ULTRA</p>
              <p className="text-xs text-anthracite-300 mt-1">Fan officiel · Statut vérifié</p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-8 flex-1 bg-anthracite-950 rounded-sm" />
                <span className="text-xs text-gold-400 font-mono">EN GANG</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
