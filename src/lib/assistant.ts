// Petit assistant conversationnel local (sans clé API, 100% gratuit).
// Il répond aux questions des visiteurs à partir du contenu réel de la page,
// façon "FAQ intelligente", pour expliquer simplement le projet de Dylan.

import { GOALS, EXPLAIN_SIMPLE, CRYPTO, LINKS } from '@/data';

export interface AssistantMessage {
  role: 'user' | 'assistant';
  text: string;
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ');

function scoreMatch(input: string, keywords: string[]): number {
  const words = new Set(norm(input).split(/\s+/).filter(Boolean));
  let score = 0;
  for (const kw of keywords) {
    if (words.has(kw) || input.toLowerCase().includes(kw)) score += 1;
  }
  return score;
}

interface Rule {
  keywords: string[];
  answer: () => string;
}

const RULES: Rule[] = [
  {
    keywords: ['bonjour', 'salut', 'hello', 'hey', 'coucou'],
    answer: () =>
      "Salut, merci d'être passé sur la page ! Je suis l'assistant du site — demande-moi pourquoi cette cagnotte existe, à quoi servira l'argent, ou comment faire un don, je t'explique tout simplement.",
  },
  {
    keywords: ['pc', 'ordinateur', 'materiel', 'machine', 'config', 'setup'],
    answer: () => GOALS.find((g) => g.id === 'pc')!.text,
  },
  {
    keywords: [
      'jeu',
      'jeux',
      'jouer',
      'gaming',
      'stream',
      'streaming',
      'fortnite',
      'cod',
      'call',
      'duty',
    ],
    answer: () => GOALS.find((g) => g.id === 'gaming')!.text,
  },
  {
    keywords: [
      'sante',
      'genou',
      'genoux',
      'poids',
      'maigrir',
      'douleur',
      'medical',
      'sport',
      'fitness',
      'maladie',
    ],
    answer: () => GOALS.find((g) => g.id === 'health')!.text,
  },
  {
    keywords: ['pourquoi', 'raison', 'but', 'objectif'],
    answer: () => EXPLAIN_SIMPLE[0].a,
  },
  {
    keywords: ['argent', 'don', 'utilise', 'sert', 'depense', 'budget'],
    answer: () => EXPLAIN_SIMPLE[1].a,
  },
  {
    keywords: ['caprice', 'inutile', 'juste', 'vraiment'],
    answer: () => EXPLAIN_SIMPLE[2].a,
  },
  {
    keywords: ['aider', 'partager', 'sans argent', 'pas argent', 'gratuit'],
    answer: () => EXPLAIN_SIMPLE[3].a,
  },
  {
    keywords: ['crypto', 'bitcoin', 'btc', 'ethereum', 'eth', 'usdt', 'sol', 'solana', 'wallet', 'adresse'],
    answer: () =>
      `Tu peux envoyer un don en crypto directement : ${CRYPTO.map(
        (c) => `${c.label} (${c.ticker})`
      ).join(', ')}. Toutes les adresses et les QR codes sont dans la section "Soutenir" juste en dessous.`,
  },
  {
    keywords: ['don', 'donner', 'contribuer', 'support', 'soutenir', 'aider financierement'],
    answer: () =>
      `Tu peux faire un don via crypto (section "Soutenir"), via Gumroad (${LINKS.gumroad}) ou via ma page donatr.ee (${LINKS.donatree}). Merci du fond du cœur, chaque geste compte vraiment.`,
  },
  {
    keywords: ['qui', 'dylan', 'toi', 'presente', 'developpeur', 'dev'],
    answer: () =>
      "Je suis Dylan, développeur passionné de code et d'intelligence artificielle. Je construis des projets tech au quotidien, et je rêve de pouvoir jouer et streamer sans contrainte matérielle — tout en prenant enfin soin de ma santé.",
  },
  {
    keywords: ['merci', 'sympa', 'gentil', 'courage', 'bravo'],
    answer: () =>
      "Merci beaucoup pour ce message, ça me touche sincèrement. Que tu puisses donner ou simplement partager la page, c'est déjà une aide immense.",
  },
];

const FALLBACKS = [
  "Je ne suis qu'un petit assistant local, mais je connais bien le sujet de cette page ! Essaie de me demander : \"pourquoi cette cagnotte ?\", \"à quoi sert l'argent ?\", \"comment donner en crypto ?\" ou \"comment aider sans argent ?\".",
  "Bonne question — je te conseille de lire la section \"Mon histoire\" juste au-dessus, ou pose-moi une question plus précise sur le PC, les jeux, la santé, ou les dons.",
];

export function askAssistant(input: string): string {
  const trimmed = input.trim();
  if (!trimmed) return "Pose-moi une question sur le projet, je suis là pour ça !";

  let best: { rule: Rule; score: number } | null = null;
  for (const rule of RULES) {
    const score = scoreMatch(trimmed, rule.keywords);
    if (score > 0 && (!best || score > best.score)) {
      best = { rule, score };
    }
  }

  if (best) return best.rule.answer();

  return FALLBACKS[Math.floor(Math.random() * FALLBACKS.length)];
}

export const SUGGESTED_QUESTIONS = [
  'Pourquoi cette cagnotte ?',
  "À quoi va servir l'argent ?",
  'Comment donner en crypto ?',
  'Comment aider sans argent ?',
];
