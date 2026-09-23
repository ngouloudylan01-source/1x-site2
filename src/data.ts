// Contenu du site de soutien — Dylan (développeur & créateur)

export const PROFILE = {
  name: 'Dylan',
  handle: 'dylan07',
  title: 'Développeur — Projets IA, gaming et santé',
};

export const LINKS = {
  gumroad: 'https://dylangoulo.gumroad.com/l/Donate',
  donatree: 'https://donatr.ee/dylan07',
};

export const CRYPTO = [
  {
    id: 'btc',
    label: 'Bitcoin',
    ticker: 'BTC',
    network: 'Réseau Bitcoin',
    address: '3BCS2rqzTsGwS1zWz2m9AuJSW7bMsrsHTQ',
    color: '#f7931a',
  },
  {
    id: 'eth',
    label: 'Ethereum',
    ticker: 'ETH',
    network: 'Réseau Ethereum (ERC-20)',
    address: '0x5c03de8cbfcbd2fae91932ebbdc183280bd49e58',
    color: '#627eea',
  },
  {
    id: 'usdt-sol',
    label: 'USDT',
    ticker: 'USDT (SOL)',
    network: 'Réseau Solana (SPL)',
    address: '6cmj7AVNH81fL95MDg5bfGMeNTncF3vE9r4ceoJfyWmE',
    color: '#14f195',
  },
];

export const GOALS = [
  {
    id: 'pc',
    title: 'Une machine à la hauteur de mes projets',
    icon: 'cpu',
    color: '#2dd4bf',
    short: 'Développer, entraîner et faire tourner de vrais projets IA sans limite.',
    text:
      "Aujourd'hui, mon matériel me freine au quotidien. Compiler un projet, tester un modèle d'IA ou faire tourner plusieurs outils en même temps prend un temps fou — et plante parfois complètement. Une machine plus puissante me permettrait de développer plus vite, d'expérimenter davantage, et de finir des projets IA que je repousse depuis longtemps faute d'outil adapté.",
  },
  {
    id: 'gaming',
    title: 'Jouer au meilleur niveau, sur les plus gros jeux',
    icon: 'gamepad',
    color: '#f59e0b',
    short:
      'Découvrir les jeux AAA modernes en pleine qualité graphique, et viser un vrai haut niveau sur Call of Duty et Fortnite.',
    text:
      "Je rêve de découvrir les jeux les plus impressionnants du moment — ceux avec des graphismes dernier cri, qu'on ne peut vraiment apprécier qu'avec une machine capable de les faire tourner à fond. Mais mon vrai objectif, c'est surtout de progresser sérieusement sur Call of Duty et Fortnite : viser un niveau de jeu élevé, m'entraîner dans de bonnes conditions (sans lag, sans coupures), et pourquoi pas partager cette progression avec une communauté en streaming.",
  },
  {
    id: 'health',
    title: 'Soulager mes genoux et pouvoir bouger sans crainte',
    icon: 'heart',
    color: '#fb7185',
    short:
      "Le surpoids fait très mal à mes genoux, surtout dès que je fais du sport intense — une fragilité amplifiée par plusieurs chutes dans l'enfance.",
    text:
      "C'est la partie la plus personnelle. Mon poids actuel met une pression énorme sur mes genoux, et dès que j'essaie de faire du sport à haute intensité, la douleur devient vite très forte — en partie à cause de chutes que j'ai eues étant petit, qui ont fragilisé mes articulations. Résultat : je n'ose plus me lancer dans une activité physique intense, alors que c'est justement ce dont j'aurais besoin. Une partie de ce soutien servira à un accompagnement médical adapté (suivi, kinésithérapie) et à du matériel sportif à faible impact, pour perdre du poids progressivement sans aggraver mes genoux.",
  },
];

export const EXPLAIN_SIMPLE = [
  {
    q: "Pourquoi demander de l'aide plutôt qu'épargner petit à petit ?",
    a: "Parce que certains besoins ne s'achètent pas petit à petit : une machine capable de faire tourner de l'IA sérieusement coûte cher d'un coup, et un vrai suivi santé (kiné, équipement adapté) demande aussi un budget de départ. Ce soutien me permet d'avancer sur ces deux fronts en même temps, plutôt que d'attendre des années.",
  },
  {
    q: "À quoi va concrètement servir l'argent récolté ?",
    a: "Une partie pour une machine capable de développer et faire tourner des projets IA sérieux (et accessoirement, de jouer dans de bonnes conditions) ; une autre partie pour un accompagnement médical et du matériel sportif adapté à mes genoux, afin de perdre du poids sans me blesser davantage. Rien de superflu : un outil de travail, et ma santé.",
  },
  {
    q: "Pourquoi parler autant de gaming, ce n'est pas juste un loisir ?",
    a: "Parce que c'est lié à la même machine et à la même envie de progresser : celle qui me sert à coder me permet aussi de vivre une passion que je porte depuis toujours, notamment sur Call of Duty et Fortnite. Et le partage en streaming serait une manière naturelle de prolonger ça.",
  },
  {
    q: "Comment aider si je ne peux pas donner d'argent ?",
    a: "Partager cette page autour de toi aide déjà énormément. Un partage peut toucher quelqu'un qui, lui, pourra donner. Chaque petit geste — un partage, un message d'encouragement — compte vraiment.",
  },
];

export const IMPACT_STEPS = [
  {
    step: '01',
    title: 'Aujourd\u2019hui',
    text: 'Un matériel limité qui freine mes projets IA, et des genoux qui font mal dès que je force un peu.',
  },
  {
    step: '02',
    title: 'Avec votre soutien',
    text: 'Une machine adaptée pour créer sérieusement, et un vrai accompagnement pour soulager mes articulations.',
  },
  {
    step: '03',
    title: 'Demain',
    text: 'Des projets IA utiles partagés avec la communauté, un niveau de jeu qui progresse, et un corps qui va mieux.',
  },
];

// Projets IA — section mise à jour au fil du temps avec les outils/projets
// que Dylan construit et partage avec la communauté.
export interface AiProject {
  id: string;
  title: string;
  description: string;
  tag: string;
  status: 'Disponible' | 'En cours' | 'Bientôt';
  link?: string;
  date: string;
}

export const AI_PROJECTS: AiProject[] = [
  {
    id: 'placeholder-1',
    title: 'Premier projet à venir',
    description:
      "Cet espace accueillera bientôt mon premier outil ou projet construit avec l'IA, pensé pour être utile à la communauté. Revenez régulièrement pour le découvrir.",
    tag: 'À venir',
    status: 'Bientôt',
    date: '—',
  },
];
