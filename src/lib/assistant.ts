// Assistant local : il répond dans la langue choisie sur le site, sans clé API.
import type { Language } from '@/i18n';
import { getTranslation } from '@/i18n';

export interface AssistantMessage {
  role: 'user' | 'assistant';
  text: string;
}

type Intent =
  | 'greeting'
  | 'pc'
  | 'gaming'
  | 'health'
  | 'projects'
  | 'why'
  | 'money'
  | 'gamingFaq'
  | 'help'
  | 'crypto'
  | 'donate'
  | 'who'
  | 'thanks';

const KEYWORDS: Record<Language, Array<{ intent: Intent; words: string[] }>> = {
  fr: [
    { intent: 'greeting', words: ['bonjour', 'salut', 'hello', 'coucou'] },
    { intent: 'pc', words: ['pc', 'ordinateur', 'matériel', 'machine', 'configuration', 'setup', 'ordinateur'] },
    { intent: 'gaming', words: ['jeu', 'jeux', 'jouer', 'gaming', 'stream', 'streaming', 'fortnite', 'cod', 'call of duty', 'graphisme', 'niveau'] },
    { intent: 'health', words: ['santé', 'genou', 'genoux', 'poids', 'maigrir', 'douleur', 'médical', 'sport', 'fitness', 'chute', 'intensité'] },
    { intent: 'projects', words: ['projet', 'projets', 'outil', 'outils', 'communauté', 'intelligence artificielle'] },
    { intent: 'why', words: ['pourquoi', 'raison', 'but', 'objectif'] },
    { intent: 'money', words: ['argent', 'récolté', 'utilisé', 'sert', 'dépense', 'budget'] },
    { intent: 'gamingFaq', words: ['loisir', 'gaming'] },
    { intent: 'help', words: ['aider', 'partager', 'sans argent', 'gratuit'] },
    { intent: 'crypto', words: ['crypto', 'bitcoin', 'btc', 'ethereum', 'eth', 'usdt', 'solana', 'wallet', 'adresse'] },
    { intent: 'donate', words: ['don', 'donner', 'contribuer', 'soutenir', 'financièrement'] },
    { intent: 'who', words: ['qui', 'dylan', 'présente', 'développeur', 'dev'] },
    { intent: 'thanks', words: ['merci', 'sympa', 'courage', 'bravo'] },
  ],
  en: [
    { intent: 'greeting', words: ['hello', 'hi', 'hey', 'good morning'] },
    { intent: 'pc', words: ['pc', 'computer', 'hardware', 'machine', 'setup'] },
    { intent: 'gaming', words: ['game', 'games', 'gaming', 'play', 'stream', 'streaming', 'fortnite', 'cod', 'call of duty', 'graphics', 'skill'] },
    { intent: 'health', words: ['health', 'knee', 'knees', 'weight', 'pain', 'medical', 'sport', 'fitness', 'fall', 'intensity'] },
    { intent: 'projects', words: ['project', 'projects', 'tool', 'tools', 'community', 'artificial intelligence', 'ai'] },
    { intent: 'why', words: ['why', 'reason', 'purpose', 'goal'] },
    { intent: 'money', words: ['money', 'raised', 'use', 'used', 'spend', 'budget'] },
    { intent: 'gamingFaq', words: ['hobby', 'gaming'] },
    { intent: 'help', words: ['help', 'share', 'without money', 'free'] },
    { intent: 'crypto', words: ['crypto', 'bitcoin', 'btc', 'ethereum', 'eth', 'usdt', 'solana', 'wallet', 'address'] },
    { intent: 'donate', words: ['donate', 'donation', 'contribute', 'support'] },
    { intent: 'who', words: ['who', 'dylan', 'developer', 'dev'] },
    { intent: 'thanks', words: ['thanks', 'thank', 'nice', 'well done'] },
  ],
  it: [
    { intent: 'greeting', words: ['ciao', 'salve', 'buongiorno'] },
    { intent: 'pc', words: ['pc', 'computer', 'materiale', 'macchina', 'configurazione'] },
    { intent: 'gaming', words: ['gioco', 'giochi', 'giocare', 'gaming', 'stream', 'fortnite', 'cod', 'call of duty', 'grafica', 'livello'] },
    { intent: 'health', words: ['salute', 'ginocchio', 'ginocchia', 'peso', 'dolore', 'medico', 'sport', 'caduta', 'intensità'] },
    { intent: 'projects', words: ['progetto', 'progetti', 'strumento', 'strumenti', 'comunità', 'intelligenza artificiale'] },
    { intent: 'why', words: ['perché', 'motivo', 'obiettivo'] },
    { intent: 'money', words: ['soldi', 'raccolta', 'utilizzare', 'spesa', 'budget'] },
    { intent: 'gamingFaq', words: ['passatempo', 'gaming'] },
    { intent: 'help', words: ['aiutare', 'condividere', 'senza soldi'] },
    { intent: 'crypto', words: ['crypto', 'bitcoin', 'ethereum', 'usdt', 'solana', 'indirizzo'] },
    { intent: 'donate', words: ['donare', 'donazione', 'contribuire', 'sostenere'] },
    { intent: 'who', words: ['chi', 'dylan', 'sviluppatore'] },
    { intent: 'thanks', words: ['grazie', 'bravo'] },
  ],
  es: [
    { intent: 'greeting', words: ['hola', 'buenos días'] },
    { intent: 'pc', words: ['pc', 'ordenador', 'computadora', 'equipo', 'configuración'] },
    { intent: 'gaming', words: ['juego', 'juegos', 'jugar', 'gaming', 'stream', 'fortnite', 'cod', 'call of duty', 'gráficos', 'nivel'] },
    { intent: 'health', words: ['salud', 'rodilla', 'rodillas', 'peso', 'dolor', 'médico', 'deporte', 'caída', 'intensidad'] },
    { intent: 'projects', words: ['proyecto', 'proyectos', 'herramienta', 'comunidad', 'inteligencia artificial'] },
    { intent: 'why', words: ['por qué', 'motivo', 'objetivo'] },
    { intent: 'money', words: ['dinero', 'recaudado', 'utilizar', 'gasto', 'presupuesto'] },
    { intent: 'gamingFaq', words: ['ocio', 'gaming'] },
    { intent: 'help', words: ['ayudar', 'compartir', 'sin dinero'] },
    { intent: 'crypto', words: ['cripto', 'bitcoin', 'ethereum', 'usdt', 'solana', 'dirección'] },
    { intent: 'donate', words: ['donar', 'donación', 'contribuir', 'apoyar'] },
    { intent: 'who', words: ['quién', 'dylan', 'desarrollador'] },
    { intent: 'thanks', words: ['gracias', 'ánimo'] },
  ],
  ar: [
    { intent: 'greeting', words: ['مرحبا', 'السلام', 'أهلا'] },
    { intent: 'pc', words: ['حاسوب', 'كمبيوتر', 'جهاز', 'معدات'] },
    { intent: 'gaming', words: ['لعبة', 'ألعاب', 'لعب', 'فورتنايت', 'كول أوف ديوتي', 'رسومات', 'مستوى'] },
    { intent: 'health', words: ['صحة', 'ركبة', 'ركبتي', 'وزن', 'ألم', 'طبي', 'رياضة', 'سقوط', 'شدة'] },
    { intent: 'projects', words: ['مشروع', 'مشاريع', 'أداة', 'مجتمع', 'ذكاء اصطناعي'] },
    { intent: 'why', words: ['لماذا', 'سبب', 'هدف'] },
    { intent: 'money', words: ['مال', 'أموال', 'جمع', 'استخدام', 'ميزانية'] },
    { intent: 'gamingFaq', words: ['هواية', 'ألعاب'] },
    { intent: 'help', words: ['مساعدة', 'مشاركة', 'دون مال'] },
    { intent: 'crypto', words: ['عملات', 'بيتكوين', 'إيثيريوم', 'يو إس دي تي', 'سولانا', 'عنوان'] },
    { intent: 'donate', words: ['تبرع', 'تبرعات', 'دعم'] },
    { intent: 'who', words: ['من', 'ديلان', 'مطور'] },
    { intent: 'thanks', words: ['شكرًا', 'شكرا'] },
  ],
  ru: [
    { intent: 'greeting', words: ['здравствуйте', 'привет', 'добрый день'] },
    { intent: 'pc', words: ['пк', 'компьютер', 'оборудование', 'машина', 'настройка'] },
    { intent: 'gaming', words: ['игра', 'игры', 'играть', 'гейминг', 'стрим', 'фортнайт', 'cod', 'call of duty', 'графика', 'уровень'] },
    { intent: 'health', words: ['здоровье', 'колено', 'колени', 'вес', 'боль', 'медицина', 'спорт', 'падение', 'интенсивность'] },
    { intent: 'projects', words: ['проект', 'проекты', 'инструмент', 'сообщество', 'искусственный интеллект'] },
    { intent: 'why', words: ['почему', 'причина', 'цель'] },
    { intent: 'money', words: ['деньги', 'сбор', 'использовать', 'расходы', 'бюджет'] },
    { intent: 'gamingFaq', words: ['хобби', 'гейминг'] },
    { intent: 'help', words: ['помочь', 'поделиться', 'без денег'] },
    { intent: 'crypto', words: ['крипто', 'биткоин', 'эфириум', 'usdt', 'солана', 'адрес'] },
    { intent: 'donate', words: ['пожертвование', 'пожертвовать', 'поддержать'] },
    { intent: 'who', words: ['кто', 'дилан', 'разработчик'] },
    { intent: 'thanks', words: ['спасибо', 'молодец'] },
  ],
};

function normalize(value: string) {
  return value
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

export function askAssistant(input: string, language: Language = 'fr'): string {
  const t = getTranslation(language);
  const trimmed = input.trim();
  if (!trimmed) return t.assistant.answers.empty;

  const normalizedInput = normalize(trimmed);
  let best: { intent: Intent; score: number } | null = null;
  for (const rule of KEYWORDS[language]) {
    const score = rule.words.reduce((total, keyword) => {
      const normalizedKeyword = normalize(keyword);
      return total + (normalizedInput.includes(normalizedKeyword) ? 1 : 0);
    }, 0);
    if (score > 0 && (!best || score > best.score)) best = { intent: rule.intent, score };
  }

  if (best) return t.assistant.answers[best.intent];
  const fallbacks = t.assistant.answers.fallback;
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}
