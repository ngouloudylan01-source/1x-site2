/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'fr' | 'en' | 'it' | 'es' | 'ar' | 'ru';

export const LANGUAGES: Array<{ code: Language; label: string; short: string }> = [
  { code: 'fr', label: 'Français', short: 'FR' },
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'it', label: 'Italiano', short: 'IT' },
  { code: 'es', label: 'Español', short: 'ES' },
  { code: 'ar', label: 'العربية', short: 'AR' },
  { code: 'ru', label: 'Русский', short: 'RU' },
];

export interface GoalTranslation {
  title: string;
  short: string;
  text: string;
}

export interface Translation {
  languageLabel: string;
  nav: {
    story: string;
    goals: string;
    projects: string;
    assistant: string;
    faq: string;
    support: string;
    supportProject: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    donate: string;
    readStory: string;
    imageAlt: string;
  };
  story: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    labels: string[];
  };
  goals: {
    eyebrow: string;
    title: string;
    items: Record<string, GoalTranslation>;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    status: Record<string, string>;
    viewProject: string;
    linkComing: string;
    placeholder: {
      title: string;
      description: string;
      tag: string;
    };
  };
  assistant: {
    eyebrow: string;
    title: string;
    description: string;
    name: string;
    online: string;
    placeholder: string;
    send: string;
    footnote: string;
    welcome: string;
    suggestions: string[];
    answers: {
      greeting: string;
      pc: string;
      gaming: string;
      health: string;
      projects: string;
      why: string;
      money: string;
      gamingFaq: string;
      help: string;
      crypto: string;
      donate: string;
      who: string;
      thanks: string;
      fallback: string[];
      empty: string;
    };
  };
  impact: {
    eyebrow: string;
    title: string;
    steps: Array<{ title: string; text: string }>;
  };
  faq: {
    eyebrow: string;
    title: string;
    items: Array<{ q: string; a: string }>;
  };
  support: {
    eyebrow: string;
    title: string;
    description: string;
    donatree: string;
    gumroad: string;
    cryptoTitle: string;
    cryptoDescription: string;
    copy: string;
    copied: string;
    thanks: string;
    network: Record<string, string>;
  };
  footer: {
    message: string;
    support: string;
    copyright: string;
  };
}

const translations: Record<Language, Translation> = {
  fr: {
    languageLabel: 'Langue du site',
    nav: {
      story: 'Mon histoire',
      goals: 'Objectifs',
      projects: 'Projets IA',
      assistant: 'Assistant',
      faq: 'FAQ',
      support: 'Soutenir',
      supportProject: 'Soutenir le projet',
    },
    hero: {
      eyebrow: 'Page de soutien personnelle',
      title: 'Un peu d’aide pour travailler, jouer et prendre soin de ma santé',
      description:
        "Je m'appelle Dylan. Je développe des sites, des outils et des projets autour de l'intelligence artificielle. J'ai besoin d'un ordinateur plus adapté, j'aimerais progresser sur mes jeux préférés et je cherche aussi une solution pour prendre soin de mes genoux.",
      donate: 'Faire un don',
      readStory: 'Lire mon histoire',
      imageAlt: 'Illustration autour du développement, du jeu vidéo et de la santé',
    },
    story: {
      eyebrow: 'Mon histoire',
      title: 'Pourquoi je demande un soutien',
      paragraphs: [
        "Je m'appelle Dylan. Je développe des sites, des outils et des projets liés à l'intelligence artificielle. C'est le domaine dans lequel je veux continuer à avancer.",
        "Mon ordinateur actuel limite ce que je peux faire. Les projets prennent plus de temps, certains tests sont difficiles à lancer et je ne peux pas toujours travailler avec les outils dont j'ai besoin. Un ordinateur plus adapté me permettrait de travailler dans de meilleures conditions.",
        "J'aime aussi les jeux AAA et j'aimerais les découvrir avec une bonne qualité graphique. Mon objectif principal reste de progresser sérieusement sur Call of Duty et Fortnite, sans problèmes de performances, puis de partager cette progression en streaming si cela devient possible.",
        "Ma santé est l'autre raison de cette demande. Mon poids exerce une pression sur mes genoux et la douleur apparaît surtout quand je fais du sport à haute intensité. Plusieurs chutes pendant mon enfance ont aussi fragilisé mes articulations. J'ai besoin d'un suivi adapté et d'une activité progressive, avec du matériel qui ne mette pas davantage mes genoux en difficulté.",
        "Ces besoins sont liés à mon quotidien : pouvoir travailler, garder une activité qui me plaît et améliorer ma santé. Si vous m'aidez, même en partageant simplement cette page, cela me permettra d'avancer étape par étape.",
      ],
      labels: ['Développement et IA', 'Jeux vidéo', 'Santé et mobilité'],
    },
    goals: {
      eyebrow: 'À quoi servira le soutien',
      title: 'Trois objectifs concrets',
      items: {
        pc: {
          title: 'Un ordinateur adapté à mes projets',
          short: "Développer et tester des projets d'IA dans de meilleures conditions.",
          text:
            "Mon matériel actuel ralentit le développement et limite les tests. Un ordinateur plus puissant servirait à compiler les projets, lancer les outils nécessaires et expérimenter plus facilement avec l'IA. L'objectif est simplement de pouvoir travailler avec un équipement adapté.",
        },
        gaming: {
          title: 'Jouer et progresser dans de bonnes conditions',
          short: 'Découvrir des jeux AAA et progresser sur Call of Duty et Fortnite.',
          text:
            "J'aimerais découvrir des jeux AAA avec leurs graphismes actuels, mais surtout m'entraîner sérieusement sur Call of Duty et Fortnite. Une machine adaptée réduirait les problèmes de performances et me permettrait de progresser plus régulièrement. Si j'en ai la possibilité, je partagerai aussi cette progression en streaming.",
        },
        health: {
          title: 'Prendre soin de mes genoux',
          short: "Le poids et le sport à haute intensité provoquent des douleurs, sur des articulations fragilisées pendant l'enfance.",
          text:
            "Mon poids pèse sur mes genoux et la douleur se réveille surtout pendant les activités sportives intenses. Des chutes dans mon enfance ont également fragilisé mes articulations. Le soutien aiderait à financer un suivi médical, de la kinésithérapie et du matériel à faible impact, afin de reprendre progressivement sans aggraver la situation.",
        },
      },
    },
    projects: {
      eyebrow: 'Des outils pour la communauté',
      title: 'Projets réalisés avec l’IA',
      description:
        "Je présenterai ici les outils et projets que je construirai avec l'intelligence artificielle. L'idée est de partager des choses concrètes et utiles, au fur et à mesure de leur avancement.",
      status: { Disponible: 'Disponible', 'En cours': 'En cours', Bientôt: 'Bientôt' },
      viewProject: 'Voir le projet',
      linkComing: 'Lien à venir',
      placeholder: {
        title: 'Premier projet à venir',
        description:
          "Cette section sera mise à jour quand mon premier outil sera prêt. Je préfère publier quelque chose d'utile et fonctionnel plutôt que d'annoncer un projet trop tôt.",
        tag: 'À venir',
      },
    },
    assistant: {
      eyebrow: 'Assistant intégré',
      title: 'Poser une question',
      description: "Un assistant simple qui répond aux questions sur le projet et la collecte.",
      name: 'Assistant du projet',
      online: 'En ligne',
      placeholder: 'Écrivez votre question…',
      send: 'Envoyer',
      footnote: 'Assistant intégré au site, gratuit et sans clé API.',
      welcome:
        "Bonjour. Je peux répondre aux questions sur le projet de Dylan, le matériel, les jeux, la santé et les moyens de l'aider.",
      suggestions: [
        'Pourquoi cette collecte ?',
        "À quoi servira l'argent ?",
        'Comment donner en crypto ?',
        'Comment aider sans argent ?',
      ],
      answers: {
        greeting:
          "Bonjour, merci de passer par ici. Vous pouvez me demander pourquoi cette collecte existe, à quoi servira l'argent ou comment aider.",
        pc: "Le premier objectif est d'avoir un ordinateur plus adapté au développement, aux tests et aux projets d'IA. Le matériel actuel ralentit certaines tâches et limite les expérimentations.",
        gaming:
          "Dylan souhaite découvrir des jeux AAA dans de bonnes conditions et progresser principalement sur Call of Duty et Fortnite. Le streaming est une possibilité pour partager cette progression, pas une promesse.",
        health:
          "Le poids de Dylan met ses genoux à rude épreuve. La douleur apparaît surtout pendant le sport à haute intensité, avec une fragilité supplémentaire liée à plusieurs chutes pendant l'enfance. Un suivi adapté et une reprise progressive sont prévus.",
        projects:
          "La section Projets IA sera mise à jour au fil du temps avec des outils construits pour être utiles à la communauté. Le premier projet n'est pas encore publié.",
        why: "La collecte sert à financer un ordinateur adapté au travail, un accompagnement pour les genoux et, dans une moindre mesure, les conditions nécessaires pour jouer et progresser. L'idée est d'avancer étape par étape.",
        money: "L'argent servirait d'abord à un ordinateur de travail, puis à un suivi médical, de la kinésithérapie et du matériel sportif à faible impact. Les priorités peuvent évoluer selon le montant récolté.",
        gamingFaq: "Le jeu vidéo est une activité importante pour Dylan, mais la priorité de la collecte reste le travail et la santé. Call of Duty et Fortnite sont les jeux sur lesquels il souhaite surtout progresser.",
        help: 'Partager cette page ou envoyer un message d’encouragement est déjà utile. Il n’est pas nécessaire de donner pour aider.',
        crypto: 'Les dons en crypto sont possibles en Bitcoin, Ethereum ou USDT sur Solana. Les adresses et les réseaux sont indiqués dans la section Soutenir. Vérifiez toujours le réseau avant un envoi.',
        donate: 'Vous pouvez aider via Donatr.ee, Gumroad ou les adresses crypto de la section Soutenir. Merci de choisir le moyen qui vous convient.',
        who: "Dylan est développeur et travaille sur des sites, des outils et des projets autour de l'intelligence artificielle. Cette page explique simplement ce dont il a besoin pour continuer.",
        thanks: 'Merci pour votre message. Un don, un partage ou un encouragement peut aider, chacun à sa manière.',
        fallback: [
          'Je peux répondre sur le matériel, les jeux, la santé, les projets IA ou les moyens de soutenir Dylan.',
          'Vous trouverez les détails dans Mon histoire et dans les sections Objectifs et Soutenir. Vous pouvez aussi poser une question plus précise.',
        ],
        empty: 'Écrivez une question sur le projet.',
      },
    },
    impact: {
      eyebrow: 'Ce que cela change',
      title: "Avancer étape par étape",
      steps: [
        { title: "Aujourd'hui", text: 'Un matériel limité et des douleurs aux genoux pendant les efforts intenses.' },
        { title: 'Avec votre aide', text: 'Un ordinateur adapté et un accompagnement pour reprendre progressivement.' },
        { title: 'Ensuite', text: 'Des projets IA partagés, une progression dans les jeux et une meilleure mobilité.' },
      ],
    },
    faq: {
      eyebrow: 'En toute transparence',
      title: 'Questions fréquentes',
      items: [
        {
          q: 'Pourquoi demander de l’aide plutôt que mettre de côté petit à petit ?',
          a: "Parce qu'un ordinateur adapté et un suivi de santé représentent des dépenses importantes. Une aide de départ permet de commencer plus tôt, sans prétendre tout régler en une fois.",
        },
        {
          q: "À quoi servira concrètement l'argent ?",
          a: "La priorité est un ordinateur pour le développement. Le reste servira à un suivi médical, à la kinésithérapie et à du matériel sportif à faible impact. Les dépenses seront faites selon les besoins et le montant collecté.",
        },
        {
          q: 'Pourquoi parler aussi de jeux vidéo ?',
          a: "Les jeux font partie de la vie de Dylan, mais ils ne sont pas la seule raison de la collecte. Il souhaite surtout progresser sur Call of Duty et Fortnite, et partager cette activité si les conditions le permettent.",
        },
        {
          q: 'Comment aider sans donner d’argent ?',
          a: 'Partager la page ou en parler autour de vous aide déjà. Un message ou un encouragement compte aussi.',
        },
      ],
    },
    support: {
      eyebrow: 'Chaque aide compte',
      title: 'Soutenir le projet',
      description: "Merci de prendre le temps de lire cette page. Voici les moyens d'aider.",
      donatree: 'Ma page Donatr.ee',
      gumroad: 'Don via Gumroad',
      cryptoTitle: 'Ou par crypto-monnaie',
      cryptoDescription: "Scannez le QR code ou copiez l'adresse. Vérifiez le réseau avant d'envoyer.",
      copy: "Copier l'adresse",
      copied: 'Copié',
      thanks: 'Merci pour votre aide, quelle qu’elle soit. Si vous ne pouvez pas donner, partager cette page est déjà utile.',
      network: { bitcoin: 'Réseau Bitcoin', ethereum: 'Réseau Ethereum (ERC-20)', solana: 'Réseau Solana (SPL)' },
    },
    footer: {
      message: "Merci d'avoir pris le temps de lire mon histoire.",
      support: 'Soutenir Dylan',
      copyright: '© 2026 Dylan07 — Page de soutien personnelle.',
    },
  },
  en: {
    languageLabel: 'Site language',
    nav: { story: 'My story', goals: 'Goals', projects: 'AI projects', assistant: 'Assistant', faq: 'FAQ', support: 'Support', supportProject: 'Support the project' },
    hero: {
      eyebrow: 'Personal support page',
      title: 'A little help to work, play and take care of my health',
      description: "I'm Dylan. I build websites, tools and artificial intelligence projects. I need a computer that fits the work better, I want to improve at the games I enjoy, and I also need a way to look after my knees.",
      donate: 'Make a donation',
      readStory: 'Read my story',
      imageAlt: 'Illustration about development, gaming and health',
    },
    story: {
      eyebrow: 'My story',
      title: 'Why I am asking for support',
      paragraphs: [
        "I'm Dylan. I build websites, tools and projects related to artificial intelligence. This is the field I want to keep working in.",
        "My current computer limits what I can do. Projects take longer, some tests are difficult to run, and I cannot always use the tools I need. A more suitable computer would let me work in better conditions.",
        "I also enjoy AAA games and would like to experience them with good graphics. My main goal is to improve seriously at Call of Duty and Fortnite without performance issues, and to share that progress through streaming if it becomes possible.",
        "Health is the other reason for this request. My weight puts pressure on my knees, and the pain is especially noticeable during high-intensity sport. Several falls during childhood also left my joints more fragile. I need appropriate support and a gradual routine, with equipment that does not put more strain on my knees.",
        "These needs are part of the same daily life: being able to work, keep an activity I enjoy and improve my health. If you help, even by sharing this page, it will let me move forward one step at a time.",
      ],
      labels: ['Development and AI', 'Video games', 'Health and mobility'],
    },
    goals: {
      eyebrow: 'What the support will fund',
      title: 'Three practical goals',
      items: {
        pc: { title: 'A computer suited to my projects', short: 'Develop and test AI projects in better conditions.', text: 'My current equipment slows development and limits testing. A more powerful computer would be used to build projects, run the necessary tools and experiment more easily with AI. The goal is simply to work with equipment that fits the job.' },
        gaming: { title: 'Play and improve in good conditions', short: 'Experience AAA games and improve at Call of Duty and Fortnite.', text: 'I would like to experience AAA games with current graphics, but above all train seriously at Call of Duty and Fortnite. A suitable computer would reduce performance issues and let me practise more consistently. If possible, I would also share that progress through streaming.' },
        health: { title: 'Take care of my knees', short: 'Weight and high-intensity sport cause pain in joints made more fragile during childhood.', text: 'My weight puts strain on my knees and the pain is strongest during intense sports. Falls during childhood also made my joints more fragile. Support would help pay for medical follow-up, physiotherapy and low-impact equipment so I can resume gradually without making things worse.' },
      },
    },
    projects: {
      eyebrow: 'Tools for the community', title: 'Projects built with AI', description: 'This is where I will share tools and projects I build with artificial intelligence. The aim is to publish practical and useful things as they become ready.', status: { Disponible: 'Available', 'En cours': 'In progress', Bientôt: 'Coming soon' }, viewProject: 'View project', linkComing: 'Link coming soon', placeholder: { title: 'First project coming soon', description: "This section will be updated when the first tool is ready. I would rather publish something useful and working than announce a project too early.", tag: 'Coming soon' },
    },
    assistant: {
      eyebrow: 'Built-in assistant', title: 'Ask a question', description: 'A simple assistant that answers questions about the project and the fundraiser.', name: 'Project assistant', online: 'Online', placeholder: 'Write your question…', send: 'Send', footnote: 'Built into the site, free and does not require an API key.', welcome: 'Hello. I can answer questions about Dylan’s project, equipment, gaming, health and ways to help.', suggestions: ['Why this fundraiser?', 'What will the money fund?', 'How can I donate crypto?', 'How can I help without money?'],
      answers: { greeting: 'Hello, thanks for stopping by. You can ask why this fundraiser exists, what the money will fund or how to help.', pc: 'The first goal is a computer better suited to development, testing and AI projects. The current equipment slows some tasks and limits experiments.', gaming: 'Dylan wants to experience AAA games in good conditions and mainly improve at Call of Duty and Fortnite. Streaming is a possible way to share that progress, not a promise.', health: "Dylan’s weight puts strain on his knees. Pain is most noticeable during high-intensity sport, with additional fragility from several childhood falls. Appropriate support and a gradual return to activity are needed.", projects: 'The AI Projects section will be updated over time with tools built to be useful to the community. The first project has not been published yet.', why: 'The fundraiser is meant to cover a work computer, support for the knees and, to a lesser extent, the conditions needed to play and improve. The idea is to move forward one step at a time.', money: 'The money would first go toward a work computer, then medical follow-up, physiotherapy and low-impact sports equipment. Priorities may change depending on the amount raised.', gamingFaq: 'Gaming is important to Dylan, but the main priorities are work and health. Call of Duty and Fortnite are the games he mainly wants to improve at.', help: 'Sharing this page or sending a message of encouragement is already useful. You do not have to donate to help.', crypto: 'Crypto donations are possible in Bitcoin, Ethereum or USDT on Solana. Addresses and networks are listed in the Support section. Always check the network before sending.', donate: 'You can help through Donatr.ee, Gumroad or the crypto addresses in the Support section. Choose whichever method works for you.', who: 'Dylan is a developer working on websites, tools and artificial intelligence projects. This page simply explains what he needs to keep going.', thanks: 'Thank you for your message. A donation, a share or a kind word can help in its own way.', fallback: ['I can answer about equipment, gaming, health, AI projects or ways to support Dylan.', 'The details are in My story and in the Goals and Support sections. You can also ask a more specific question.'], empty: 'Write a question about the project.' },
    },
    impact: { eyebrow: 'What it changes', title: 'Moving forward step by step', steps: [{ title: 'Today', text: 'Limited equipment and knee pain during intense activity.' }, { title: 'With your help', text: 'A suitable computer and support for a gradual return to activity.' }, { title: 'Next', text: 'Shared AI projects, progress in games and better mobility.' }] },
    faq: { eyebrow: 'Open and clear', title: 'Frequently asked questions', items: [{ q: 'Why ask for help instead of saving little by little?', a: 'A suitable computer and health support are significant expenses. Starting help would make it possible to begin sooner, without pretending it will solve everything at once.' }, { q: 'What will the money actually be used for?', a: 'The priority is a computer for development. The rest will go toward medical follow-up, physiotherapy and low-impact sports equipment. Spending will depend on needs and the amount raised.' }, { q: 'Why talk about gaming too?', a: 'Games are part of Dylan’s life, but they are not the only reason for the fundraiser. He mainly wants to improve at Call of Duty and Fortnite and share that activity if conditions allow.' }, { q: 'How can I help without donating?', a: 'Sharing the page or telling someone about it already helps. A message or a word of encouragement matters too.' }] },
    support: { eyebrow: 'Every bit helps', title: 'Support the project', description: 'Thank you for taking the time to read this page. Here are the ways to help.', donatree: 'My Donatr.ee page', gumroad: 'Donate via Gumroad', cryptoTitle: 'Or with cryptocurrency', cryptoDescription: 'Scan the QR code or copy the address. Check the network before sending.', copy: 'Copy address', copied: 'Copied', thanks: 'Thank you for your help, in any form. If you cannot donate, sharing this page is already useful.', network: { bitcoin: 'Bitcoin network', ethereum: 'Ethereum network (ERC-20)', solana: 'Solana network (SPL)' } },
    footer: { message: 'Thank you for taking the time to read my story.', support: 'Support Dylan', copyright: '© 2026 Dylan07 — Personal support page.' },
  },
  it: {
    languageLabel: 'Lingua del sito',
    nav: { story: 'La mia storia', goals: 'Obiettivi', projects: 'Progetti IA', assistant: 'Assistente', faq: 'FAQ', support: 'Sostenere', supportProject: 'Sostenere il progetto' },
    hero: { eyebrow: 'Pagina personale di sostegno', title: 'Un aiuto per lavorare, giocare e prendermi cura della mia salute', description: 'Sono Dylan. Creo siti, strumenti e progetti legati all’intelligenza artificiale. Mi serve un computer più adatto al lavoro, vorrei migliorare nei giochi che mi piacciono e devo anche occuparmi delle mie ginocchia.', donate: 'Fai una donazione', readStory: 'Leggi la mia storia', imageAlt: 'Illustrazione su sviluppo, videogiochi e salute' },
    story: { eyebrow: 'La mia storia', title: 'Perché chiedo un sostegno', paragraphs: ['Sono Dylan. Creo siti, strumenti e progetti legati all’intelligenza artificiale. È il campo in cui voglio continuare a lavorare.', 'Il computer che uso oggi limita quello che posso fare. I progetti richiedono più tempo, alcuni test sono difficili da eseguire e non posso sempre usare gli strumenti necessari. Un computer più adatto mi permetterebbe di lavorare meglio.', 'Mi piacciono anche i giochi AAA e vorrei scoprirli con una buona qualità grafica. Il mio obiettivo principale è migliorare seriamente in Call of Duty e Fortnite senza problemi di prestazioni, e condividere i progressi in streaming se sarà possibile.', 'La salute è l’altro motivo di questa richiesta. Il mio peso mette pressione sulle ginocchia e il dolore si fa sentire soprattutto durante lo sport ad alta intensità. Diverse cadute nell’infanzia hanno inoltre reso più fragili le articolazioni. Ho bisogno di un supporto adeguato e di una ripresa graduale, con attrezzatura che non aumenti il carico sulle ginocchia.', 'Queste necessità fanno parte della stessa vita quotidiana: poter lavorare, mantenere un’attività che mi piace e migliorare la salute. Anche solo condividere questa pagina mi permetterebbe di andare avanti un passo alla volta.'], labels: ['Sviluppo e IA', 'Videogiochi', 'Salute e mobilità'] },
    goals: { eyebrow: 'A cosa servirà il sostegno', title: 'Tre obiettivi concreti', items: { pc: { title: 'Un computer adatto ai miei progetti', short: 'Sviluppare e testare progetti di IA in condizioni migliori.', text: 'Il mio equipaggiamento attuale rallenta lo sviluppo e limita i test. Un computer più potente servirebbe a creare i progetti, usare gli strumenti necessari e sperimentare più facilmente con l’IA. L’obiettivo è lavorare con attrezzatura adatta.' }, gaming: { title: 'Giocare e migliorare in buone condizioni', short: 'Scoprire giochi AAA e migliorare in Call of Duty e Fortnite.', text: 'Vorrei scoprire giochi AAA con la grafica attuale, ma soprattutto allenarmi seriamente in Call of Duty e Fortnite. Un computer adatto ridurrebbe i problemi di prestazioni e mi permetterebbe di allenarmi con più regolarità. Se possibile, condividerei i progressi in streaming.' }, health: { title: 'Prendermi cura delle ginocchia', short: 'Il peso e lo sport ad alta intensità causano dolore in articolazioni rese più fragili durante l’infanzia.', text: 'Il mio peso mette sotto sforzo le ginocchia e il dolore è maggiore durante lo sport intenso. Anche alcune cadute nell’infanzia hanno reso più fragili le articolazioni. Il sostegno aiuterebbe a pagare visite, fisioterapia e attrezzatura a basso impatto per riprendere gradualmente.' } } },
    projects: { eyebrow: 'Strumenti per la comunità', title: 'Progetti creati con l’IA', description: 'Qui condividerò gli strumenti e i progetti che costruirò con l’intelligenza artificiale. L’obiettivo è pubblicare cose pratiche e utili quando saranno pronte.', status: { Disponible: 'Disponibile', 'En cours': 'In corso', Bientôt: 'In arrivo' }, viewProject: 'Vedi progetto', linkComing: 'Link in arrivo', placeholder: { title: 'Primo progetto in arrivo', description: 'Questa sezione sarà aggiornata quando il primo strumento sarà pronto. Preferisco pubblicare qualcosa di utile e funzionante invece di annunciare troppo presto.', tag: 'In arrivo' } },
    assistant: { eyebrow: 'Assistente integrato', title: 'Fai una domanda', description: 'Un assistente semplice che risponde alle domande sul progetto e sulla raccolta.', name: 'Assistente del progetto', online: 'Online', placeholder: 'Scrivi la tua domanda…', send: 'Invia', footnote: 'Integrato nel sito, gratuito e senza chiave API.', welcome: 'Ciao. Posso rispondere alle domande sul progetto di Dylan, sull’attrezzatura, sui giochi, sulla salute e sui modi per aiutare.', suggestions: ['Perché questa raccolta?', 'A cosa serviranno i soldi?', 'Come posso donare in crypto?', 'Come posso aiutare senza denaro?'], answers: { greeting: 'Ciao, grazie per essere passato. Puoi chiedermi perché esiste questa raccolta, a cosa serviranno i soldi o come aiutare.', pc: 'Il primo obiettivo è un computer più adatto allo sviluppo, ai test e ai progetti di IA. L’attrezzatura attuale rallenta alcune attività e limita gli esperimenti.', gaming: 'Dylan vuole scoprire giochi AAA in buone condizioni e migliorare soprattutto in Call of Duty e Fortnite. Lo streaming è una possibilità per condividere i progressi, non una promessa.', health: 'Il peso di Dylan mette sotto sforzo le ginocchia. Il dolore si nota soprattutto durante lo sport ad alta intensità, con una fragilità aggiuntiva dovuta a diverse cadute nell’infanzia. Servono supporto adeguato e una ripresa graduale.', projects: 'La sezione Progetti IA verrà aggiornata con strumenti pensati per essere utili alla comunità. Il primo progetto non è ancora pubblicato.', why: 'La raccolta serve per un computer da lavoro, per un supporto alle ginocchia e, in misura minore, per poter giocare e migliorare. L’idea è procedere un passo alla volta.', money: 'I soldi servirebbero prima per un computer da lavoro, poi per visite, fisioterapia e attrezzatura sportiva a basso impatto. Le priorità possono cambiare in base alla cifra raccolta.', gamingFaq: 'I videogiochi sono importanti per Dylan, ma le priorità principali sono lavoro e salute. Call of Duty e Fortnite sono i giochi in cui vuole soprattutto migliorare.', help: 'Condividere questa pagina o mandare un messaggio di incoraggiamento è già utile. Non è necessario donare per aiutare.', crypto: 'Sono possibili donazioni in Bitcoin, Ethereum o USDT su Solana. Indirizzi e reti sono nella sezione Sostenere. Controlla sempre la rete prima di inviare.', donate: 'Puoi aiutare tramite Donatr.ee, Gumroad o gli indirizzi crypto nella sezione Sostenere. Scegli il metodo più comodo per te.', who: 'Dylan è uno sviluppatore che lavora su siti, strumenti e progetti di intelligenza artificiale. Questa pagina spiega semplicemente di cosa ha bisogno per continuare.', thanks: 'Grazie per il messaggio. Una donazione, una condivisione o una parola gentile possono aiutare.', fallback: ['Posso rispondere su attrezzatura, giochi, salute, progetti IA o modi per sostenere Dylan.', 'I dettagli sono nella mia storia e nelle sezioni Obiettivi e Sostenere. Puoi anche fare una domanda più precisa.'], empty: 'Scrivi una domanda sul progetto.' } },
    impact: { eyebrow: 'Cosa cambia', title: 'Un passo alla volta', steps: [{ title: 'Oggi', text: 'Attrezzatura limitata e dolore alle ginocchia durante gli sforzi intensi.' }, { title: 'Con il tuo aiuto', text: 'Un computer adatto e un supporto per riprendere gradualmente.' }, { title: 'Poi', text: 'Progetti IA condivisi, progressi nei giochi e maggiore mobilità.' }] },
    faq: { eyebrow: 'In modo chiaro', title: 'Domande frequenti', items: [{ q: 'Perché chiedere aiuto invece di risparmiare poco alla volta?', a: 'Un computer adatto e il supporto per la salute sono spese importanti. Un aiuto iniziale permetterebbe di cominciare prima, senza pretendere di risolvere tutto subito.' }, { q: 'A cosa serviranno concretamente i soldi?', a: 'La priorità è un computer per lo sviluppo. Il resto servirà per visite, fisioterapia e attrezzatura sportiva a basso impatto, in base alle necessità e alla cifra raccolta.' }, { q: 'Perché parlare anche di videogiochi?', a: 'I giochi fanno parte della vita di Dylan, ma non sono l’unico motivo della raccolta. Vuole soprattutto migliorare in Call of Duty e Fortnite e condividere questa attività se le condizioni lo permetteranno.' }, { q: 'Come posso aiutare senza donare?', a: 'Condividere la pagina o parlarne con qualcuno aiuta già. Anche un messaggio o un incoraggiamento sono importanti.' }] },
    support: { eyebrow: 'Ogni aiuto conta', title: 'Sostenere il progetto', description: 'Grazie per aver letto questa pagina. Ecco come puoi aiutare.', donatree: 'La mia pagina Donatr.ee', gumroad: 'Dona tramite Gumroad', cryptoTitle: 'Oppure con criptovaluta', cryptoDescription: 'Scansiona il codice QR o copia l’indirizzo. Controlla la rete prima di inviare.', copy: 'Copia indirizzo', copied: 'Copiato', thanks: 'Grazie per il tuo aiuto, in qualunque forma. Se non puoi donare, condividere questa pagina è già utile.', network: { bitcoin: 'Rete Bitcoin', ethereum: 'Rete Ethereum (ERC-20)', solana: 'Rete Solana (SPL)' } },
    footer: { message: 'Grazie per aver dedicato del tempo alla mia storia.', support: 'Sostieni Dylan', copyright: '© 2026 Dylan07 — Pagina personale di sostegno.' },
  },
  es: {
    languageLabel: 'Idioma del sitio',
    nav: { story: 'Mi historia', goals: 'Objetivos', projects: 'Proyectos de IA', assistant: 'Asistente', faq: 'Preguntas', support: 'Apoyar', supportProject: 'Apoyar el proyecto' },
    hero: { eyebrow: 'Página personal de apoyo', title: 'Un poco de ayuda para trabajar, jugar y cuidar mi salud', description: 'Soy Dylan. Creo sitios web, herramientas y proyectos relacionados con la inteligencia artificial. Necesito un ordenador más adecuado, quiero mejorar en los juegos que me gustan y también necesito cuidar mis rodillas.', donate: 'Hacer una donación', readStory: 'Leer mi historia', imageAlt: 'Ilustración sobre desarrollo, videojuegos y salud' },
    story: { eyebrow: 'Mi historia', title: 'Por qué pido apoyo', paragraphs: ['Soy Dylan. Creo sitios web, herramientas y proyectos relacionados con la inteligencia artificial. Es el campo en el que quiero seguir trabajando.', 'Mi ordenador actual limita lo que puedo hacer. Los proyectos tardan más, algunas pruebas son difíciles de ejecutar y no siempre puedo usar las herramientas que necesito. Un ordenador más adecuado me permitiría trabajar en mejores condiciones.', 'También me gustan los juegos AAA y me gustaría disfrutarlos con buenos gráficos. Mi objetivo principal es mejorar seriamente en Call of Duty y Fortnite sin problemas de rendimiento, y compartir ese progreso haciendo streaming si es posible.', 'La salud es la otra razón de esta petición. Mi peso ejerce presión sobre mis rodillas y el dolor aparece sobre todo cuando hago deporte de alta intensidad. Además, varias caídas durante mi infancia dejaron mis articulaciones más frágiles. Necesito un seguimiento adecuado y una recuperación gradual, con material que no cargue más las rodillas.', 'Estas necesidades forman parte de mi vida diaria: poder trabajar, mantener una actividad que me gusta y mejorar mi salud. Si ayudas, incluso compartiendo esta página, podré avanzar paso a paso.'], labels: ['Desarrollo e IA', 'Videojuegos', 'Salud y movilidad'] },
    goals: { eyebrow: 'En qué se usará el apoyo', title: 'Tres objetivos concretos', items: { pc: { title: 'Un ordenador adecuado para mis proyectos', short: 'Desarrollar y probar proyectos de IA en mejores condiciones.', text: 'Mi equipo actual ralentiza el desarrollo y limita las pruebas. Un ordenador más potente serviría para crear proyectos, usar las herramientas necesarias y experimentar más fácilmente con la IA. El objetivo es trabajar con un equipo adecuado.' }, gaming: { title: 'Jugar y mejorar en buenas condiciones', short: 'Descubrir juegos AAA y mejorar en Call of Duty y Fortnite.', text: 'Me gustaría descubrir juegos AAA con sus gráficos actuales, pero sobre todo entrenar seriamente en Call of Duty y Fortnite. Un ordenador adecuado reduciría los problemas de rendimiento y me permitiría practicar con más regularidad. Si es posible, también compartiría el progreso en streaming.' }, health: { title: 'Cuidar mis rodillas', short: 'El peso y el deporte de alta intensidad causan dolor en unas articulaciones debilitadas durante la infancia.', text: 'Mi peso carga las rodillas y el dolor aumenta durante el deporte intenso. Algunas caídas en la infancia también debilitaron mis articulaciones. El apoyo ayudaría a pagar seguimiento médico, fisioterapia y material de bajo impacto para volver poco a poco sin empeorar la situación.' } } },
    projects: { eyebrow: 'Herramientas para la comunidad', title: 'Proyectos creados con IA', description: 'Aquí compartiré las herramientas y proyectos que construya con inteligencia artificial. La idea es publicar cosas prácticas y útiles cuando estén listas.', status: { Disponible: 'Disponible', 'En cours': 'En progreso', Bientôt: 'Próximamente' }, viewProject: 'Ver proyecto', linkComing: 'Enlace próximamente', placeholder: { title: 'Primer proyecto próximamente', description: 'Esta sección se actualizará cuando la primera herramienta esté lista. Prefiero publicar algo útil y que funcione antes que anunciar un proyecto demasiado pronto.', tag: 'Próximamente' } },
    assistant: { eyebrow: 'Asistente integrado', title: 'Haz una pregunta', description: 'Un asistente sencillo que responde sobre el proyecto y la recaudación.', name: 'Asistente del proyecto', online: 'En línea', placeholder: 'Escribe tu pregunta…', send: 'Enviar', footnote: 'Integrado en el sitio, gratuito y sin clave de API.', welcome: 'Hola. Puedo responder preguntas sobre el proyecto de Dylan, el equipo, los juegos, la salud y las formas de ayudar.', suggestions: ['¿Por qué esta recaudación?', '¿Para qué se usará el dinero?', '¿Cómo puedo donar en cripto?', '¿Cómo puedo ayudar sin dinero?'], answers: { greeting: 'Hola, gracias por pasar por aquí. Puedes preguntar por qué existe esta recaudación, para qué se usará el dinero o cómo ayudar.', pc: 'El primer objetivo es un ordenador más adecuado para desarrollar, probar y trabajar en proyectos de IA. El equipo actual ralentiza algunas tareas y limita los experimentos.', gaming: 'Dylan quiere descubrir juegos AAA en buenas condiciones y mejorar sobre todo en Call of Duty y Fortnite. El streaming es una posibilidad para compartir el progreso, no una promesa.', health: 'El peso de Dylan carga sus rodillas. El dolor se nota sobre todo durante el deporte de alta intensidad, con una fragilidad adicional por varias caídas en la infancia. Hace falta apoyo y una vuelta gradual a la actividad.', projects: 'La sección Proyectos de IA se actualizará con herramientas pensadas para ser útiles a la comunidad. El primer proyecto todavía no está publicado.', why: 'La recaudación está pensada para un ordenador de trabajo, apoyo para las rodillas y, en menor medida, las condiciones para jugar y mejorar. La idea es avanzar paso a paso.', money: 'El dinero se destinaría primero a un ordenador de trabajo y después a seguimiento médico, fisioterapia y material deportivo de bajo impacto. Las prioridades pueden cambiar según la cantidad recaudada.', gamingFaq: 'Los videojuegos son importantes para Dylan, pero las prioridades son el trabajo y la salud. Call of Duty y Fortnite son los juegos en los que quiere mejorar principalmente.', help: 'Compartir esta página o enviar un mensaje de ánimo ya es útil. No hace falta donar para ayudar.', crypto: 'Se puede donar en Bitcoin, Ethereum o USDT en Solana. Las direcciones y redes están en la sección Apoyar. Comprueba siempre la red antes de enviar.', donate: 'Puedes ayudar mediante Donatr.ee, Gumroad o las direcciones de cripto de la sección Apoyar. Elige el método que te resulte más cómodo.', who: 'Dylan es desarrollador y trabaja en sitios, herramientas y proyectos de inteligencia artificial. Esta página explica de forma sencilla lo que necesita para continuar.', thanks: 'Gracias por tu mensaje. Una donación, un compartir o unas palabras de apoyo pueden ayudar.', fallback: ['Puedo responder sobre el equipo, los juegos, la salud, los proyectos de IA o las formas de apoyar a Dylan.', 'Encontrarás los detalles en Mi historia y en las secciones Objetivos y Apoyar. También puedes hacer una pregunta más concreta.'], empty: 'Escribe una pregunta sobre el proyecto.' } },
    impact: { eyebrow: 'Lo que puede cambiar', title: 'Avanzar paso a paso', steps: [{ title: 'Hoy', text: 'Equipo limitado y dolor de rodillas durante los esfuerzos intensos.' }, { title: 'Con tu ayuda', text: 'Un ordenador adecuado y apoyo para volver a la actividad poco a poco.' }, { title: 'Después', text: 'Proyectos de IA compartidos, progreso en los juegos y más movilidad.' }] },
    faq: { eyebrow: 'Con claridad', title: 'Preguntas frecuentes', items: [{ q: '¿Por qué pedir ayuda en vez de ahorrar poco a poco?', a: 'Un ordenador adecuado y el apoyo para la salud son gastos importantes. Una ayuda inicial permitiría empezar antes, sin pretender resolverlo todo de una vez.' }, { q: '¿Para qué se utilizará el dinero?', a: 'La prioridad es un ordenador para desarrollar. El resto se destinará a seguimiento médico, fisioterapia y material deportivo de bajo impacto, según las necesidades y la cantidad recaudada.' }, { q: '¿Por qué hablar también de videojuegos?', a: 'Los juegos forman parte de la vida de Dylan, pero no son el único motivo de la recaudación. Quiere mejorar sobre todo en Call of Duty y Fortnite y compartirlo si las condiciones lo permiten.' }, { q: '¿Cómo puedo ayudar sin donar?', a: 'Compartir la página o hablar de ella ya ayuda. Un mensaje o unas palabras de ánimo también cuentan.' }] },
    support: { eyebrow: 'Cada ayuda cuenta', title: 'Apoyar el proyecto', description: 'Gracias por leer esta página. Estas son las formas de ayudar.', donatree: 'Mi página de Donatr.ee', gumroad: 'Donar mediante Gumroad', cryptoTitle: 'O con criptomonedas', cryptoDescription: 'Escanea el código QR o copia la dirección. Comprueba la red antes de enviar.', copy: 'Copiar dirección', copied: 'Copiado', thanks: 'Gracias por tu ayuda, sea cual sea. Si no puedes donar, compartir esta página ya es útil.', network: { bitcoin: 'Red Bitcoin', ethereum: 'Red Ethereum (ERC-20)', solana: 'Red Solana (SPL)' } },
    footer: { message: 'Gracias por dedicar tiempo a leer mi historia.', support: 'Apoyar a Dylan', copyright: '© 2026 Dylan07 — Página personal de apoyo.' },
  },
  ar: {
    languageLabel: 'لغة الموقع',
    nav: { story: 'قصتي', goals: 'الأهداف', projects: 'مشاريع الذكاء الاصطناعي', assistant: 'المساعد', faq: 'الأسئلة الشائعة', support: 'الدعم', supportProject: 'دعم المشروع' },
    hero: { eyebrow: 'صفحة دعم شخصية', title: 'مساعدة بسيطة للعمل واللعب والاهتمام بصحتي', description: 'أنا ديلان. أعمل على مواقع وأدوات ومشاريع مرتبطة بالذكاء الاصطناعي. أحتاج إلى حاسوب أنسب للعمل، وأريد أن أتطور في الألعاب التي أحبها، كما أحتاج إلى الاهتمام بركبتيّ.', donate: 'تبرع', readStory: 'اقرأ قصتي', imageAlt: 'رسم يعبّر عن البرمجة والألعاب والصحة' },
    story: { eyebrow: 'قصتي', title: 'لماذا أطلب الدعم', paragraphs: ['أنا ديلان. أعمل على مواقع وأدوات ومشاريع مرتبطة بالذكاء الاصطناعي. هذا هو المجال الذي أريد أن أواصل العمل فيه.', 'الحاسوب الذي أستخدمه حاليًا يحدّ مما أستطيع فعله. تستغرق المشاريع وقتًا أطول، ويصعب تشغيل بعض الاختبارات، ولا أستطيع دائمًا استخدام الأدوات التي أحتاجها. سيساعدني حاسوب أنسب على العمل في ظروف أفضل.', 'أحب أيضًا ألعاب AAA وأرغب في تجربتها بجودة رسومات جيدة. هدفي الأساسي هو التطور بجدية في Call of Duty وFortnite من دون مشاكل في الأداء، ثم مشاركة هذا التقدم عبر البث إذا أصبح ذلك ممكنًا.', 'الصحة سبب آخر لهذا الطلب. يزيد وزني الضغط على ركبتيّ، ويظهر الألم خصوصًا عند ممارسة الرياضة عالية الشدة. كما أن عدة حالات سقوط في طفولتي جعلت مفاصلي أكثر ضعفًا. أحتاج إلى متابعة مناسبة وعودة تدريجية للنشاط، مع معدات لا تزيد الضغط على ركبتيّ.', 'هذه الاحتياجات مرتبطة بحياتي اليومية: أن أعمل، وأحافظ على نشاط أحبه، وأحسن صحتي. حتى مشاركة هذه الصفحة تساعدني على التقدم خطوة بعد خطوة.'], labels: ['البرمجة والذكاء الاصطناعي', 'ألعاب الفيديو', 'الصحة والحركة'] },
    goals: { eyebrow: 'فيما سيُستخدم الدعم', title: 'ثلاثة أهداف واضحة', items: { pc: { title: 'حاسوب مناسب لمشاريعي', short: 'تطوير واختبار مشاريع الذكاء الاصطناعي في ظروف أفضل.', text: 'المعدات الحالية تبطئ التطوير وتحدّ من الاختبارات. سيُستخدم حاسوب أقوى لبناء المشاريع وتشغيل الأدوات اللازمة وتجربة الذكاء الاصطناعي بسهولة أكبر. الهدف هو العمل بمعدات مناسبة.' }, gaming: { title: 'اللعب والتطور في ظروف جيدة', short: 'تجربة ألعاب AAA والتطور في Call of Duty وFortnite.', text: 'أريد تجربة ألعاب AAA برسوماتها الحديثة، لكن الأهم هو التدريب بجدية في Call of Duty وFortnite. سيساعد الحاسوب المناسب على تقليل مشاكل الأداء والتدرب بانتظام. وإذا أمكن، سأشارك هذا التقدم عبر البث.' }, health: { title: 'الاهتمام بركبتيّ', short: 'الوزن والرياضة عالية الشدة يسببان الألم في مفاصل أضعفتها حوادث السقوط في الطفولة.', text: 'يزيد وزني الضغط على ركبتيّ، ويكون الألم أكبر أثناء الرياضة الشديدة. كما أضعفت بعض حالات السقوط في الطفولة مفاصلي. سيساعد الدعم في تكاليف المتابعة الطبية والعلاج الطبيعي ومعدات منخفضة التأثير للعودة تدريجيًا من دون زيادة المشكلة.' } } },
    projects: { eyebrow: 'أدوات للمجتمع', title: 'مشاريع مبنية بالذكاء الاصطناعي', description: 'سأشارك هنا الأدوات والمشاريع التي أبنيها باستخدام الذكاء الاصطناعي. الهدف هو نشر أشياء عملية ومفيدة عند جاهزيتها.', status: { Disponible: 'متاح', 'En cours': 'قيد العمل', Bientôt: 'قريبًا' }, viewProject: 'عرض المشروع', linkComing: 'الرابط قريبًا', placeholder: { title: 'المشروع الأول قريبًا', description: 'سيتم تحديث هذا القسم عندما تصبح الأداة الأولى جاهزة. أفضل نشر شيء مفيد ويعمل بدل الإعلان عن مشروع قبل أوانه.', tag: 'قريبًا' } },
    assistant: { eyebrow: 'مساعد مدمج', title: 'اطرح سؤالًا', description: 'مساعد بسيط يجيب عن الأسئلة المتعلقة بالمشروع وجمع التبرعات.', name: 'مساعد المشروع', online: 'متصل', placeholder: 'اكتب سؤالك…', send: 'إرسال', footnote: 'مدمج في الموقع، مجاني ولا يحتاج إلى مفتاح API.', welcome: 'مرحبًا. أستطيع الإجابة عن أسئلة حول مشروع ديلان، والمعدات، والألعاب، والصحة وطرق المساعدة.', suggestions: ['لماذا هذا الجمع؟', 'فيما سيُستخدم المال؟', 'كيف أتبرع بالعملات الرقمية؟', 'كيف أساعد من دون مال؟'], answers: { greeting: 'مرحبًا، شكرًا لزيارتك. يمكنك أن تسأل لماذا بدأ هذا الجمع، وفيما سيُستخدم المال أو كيف تساعد.', pc: 'الهدف الأول هو الحصول على حاسوب أنسب للتطوير والاختبار ومشاريع الذكاء الاصطناعي. المعدات الحالية تبطئ بعض المهام وتحد من التجارب.', gaming: 'يريد ديلان تجربة ألعاب AAA في ظروف جيدة والتطور خصوصًا في Call of Duty وFortnite. البث احتمال لمشاركة التقدم وليس وعدًا.', health: 'يزيد وزن ديلان الضغط على ركبتيه. يظهر الألم خصوصًا أثناء الرياضة عالية الشدة، مع ضعف إضافي بسبب عدة حالات سقوط في الطفولة. المطلوب متابعة مناسبة وعودة تدريجية للنشاط.', projects: 'سيتم تحديث قسم مشاريع الذكاء الاصطناعي بأدوات تهدف إلى إفادة المجتمع. المشروع الأول لم يُنشر بعد.', why: 'يهدف الجمع إلى تمويل حاسوب للعمل، ودعم للركبتين، وبدرجة أقل الظروف اللازمة للعب والتطور. الفكرة هي التقدم خطوة بعد خطوة.', money: 'سيُستخدم المال أولًا لحاسوب للعمل، ثم للمتابعة الطبية والعلاج الطبيعي ومعدات رياضية منخفضة التأثير. قد تتغير الأولويات حسب المبلغ الذي يتم جمعه.', gamingFaq: 'الألعاب مهمة لديلان، لكن الأولوية للعمل والصحة. Call of Duty وFortnite هما اللعبتان اللتان يريد التطور فيهما أساسًا.', help: 'مشاركة هذه الصفحة أو إرسال رسالة تشجيع مفيد أيضًا. لا تحتاج إلى التبرع للمساعدة.', crypto: 'يمكن التبرع بعملة Bitcoin أو Ethereum أو USDT على شبكة Solana. العناوين والشبكات موجودة في قسم الدعم. تحقق دائمًا من الشبكة قبل الإرسال.', donate: 'يمكنك المساعدة عبر Donatr.ee أو Gumroad أو عناوين العملات الرقمية في قسم الدعم. اختر الطريقة المناسبة لك.', who: 'ديلان مطور يعمل على مواقع وأدوات ومشاريع في مجال الذكاء الاصطناعي. تشرح هذه الصفحة ببساطة ما يحتاجه ليستمر.', thanks: 'شكرًا على رسالتك. التبرع أو المشاركة أو كلمة التشجيع قد تساعد بطريقتها.', fallback: ['أستطيع الإجابة عن المعدات والألعاب والصحة ومشاريع الذكاء الاصطناعي وطرق دعم ديلان.', 'ستجد التفاصيل في قصتي وقسمي الأهداف والدعم. يمكنك أيضًا طرح سؤال أكثر تحديدًا.'], empty: 'اكتب سؤالًا عن المشروع.' } },
    impact: { eyebrow: 'ما الذي سيتغير', title: 'التقدم خطوة بعد خطوة', steps: [{ title: 'اليوم', text: 'معدات محدودة وألم في الركبتين أثناء الجهد الشديد.' }, { title: 'بمساعدتكم', text: 'حاسوب مناسب ودعم للعودة إلى النشاط تدريجيًا.' }, { title: 'بعد ذلك', text: 'مشاريع ذكاء اصطناعي مشتركة، وتطور في الألعاب وحركة أفضل.' }] },
    faq: { eyebrow: 'بكل وضوح', title: 'الأسئلة الشائعة', items: [{ q: 'لماذا طلب المساعدة بدل الادخار قليلًا قليلًا؟', a: 'الحاسوب المناسب والمتابعة الصحية يحتاجان إلى مصاريف كبيرة. المساعدة الأولية تسمح بالبدء في وقت أبكر، من دون الادعاء بأنها ستحل كل شيء دفعة واحدة.' }, { q: 'فيما سيُستخدم المال عمليًا؟', a: 'الأولوية هي حاسوب للتطوير. وسيُستخدم الباقي للمتابعة الطبية والعلاج الطبيعي ومعدات رياضية منخفضة التأثير، بحسب الحاجة والمبلغ الذي يتم جمعه.' }, { q: 'لماذا الحديث عن الألعاب أيضًا؟', a: 'الألعاب جزء من حياة ديلان، لكنها ليست السبب الوحيد للجمع. يريد أساسًا التطور في Call of Duty وFortnite ومشاركة هذا النشاط إذا سمحت الظروف.' }, { q: 'كيف أساعد من دون التبرع؟', a: 'مشاركة الصفحة أو إخبار شخص بها يساعدان. كما أن الرسالة أو التشجيع لهما قيمة.' }] },
    support: { eyebrow: 'كل مساعدة مهمة', title: 'دعم المشروع', description: 'شكرًا لقراءة هذه الصفحة. إليك طرق المساعدة.', donatree: 'صفحتي على Donatr.ee', gumroad: 'التبرع عبر Gumroad', cryptoTitle: 'أو بالعملات الرقمية', cryptoDescription: 'امسح رمز QR أو انسخ العنوان. تحقق من الشبكة قبل الإرسال.', copy: 'نسخ العنوان', copied: 'تم النسخ', thanks: 'شكرًا لمساعدتك بأي طريقة. إذا لم تستطع التبرع، فإن مشاركة الصفحة مفيدة أيضًا.', network: { bitcoin: 'شبكة Bitcoin', ethereum: 'شبكة Ethereum (ERC-20)', solana: 'شبكة Solana (SPL)' } },
    footer: { message: 'شكرًا لوقتك ولقراءة قصتي.', support: 'دعم ديلان', copyright: '© 2026 Dylan07 — صفحة دعم شخصية.' },
  },
  ru: {
    languageLabel: 'Язык сайта',
    nav: { story: 'Моя история', goals: 'Цели', projects: 'ИИ-проекты', assistant: 'Помощник', faq: 'Вопросы', support: 'Поддержать', supportProject: 'Поддержать проект' },
    hero: { eyebrow: 'Личная страница поддержки', title: 'Немного помощи для работы, игр и заботы о здоровье', description: 'Меня зовут Дилан. Я создаю сайты, инструменты и проекты, связанные с искусственным интеллектом. Мне нужен компьютер, который лучше подходит для работы, я хочу развиваться в любимых играх и заняться здоровьем коленей.', donate: 'Сделать пожертвование', readStory: 'Прочитать мою историю', imageAlt: 'Иллюстрация о разработке, играх и здоровье' },
    story: { eyebrow: 'Моя история', title: 'Почему я прошу о поддержке', paragraphs: ['Меня зовут Дилан. Я создаю сайты, инструменты и проекты, связанные с искусственным интеллектом. В этом направлении я хочу продолжать работать.', 'Мой нынешний компьютер ограничивает мои возможности. Проекты занимают больше времени, некоторые тесты сложно запускать, а нужные инструменты доступны не всегда. Более подходящий компьютер позволит мне работать в лучших условиях.', 'Мне также нравятся игры AAA, и я хотел бы играть в них с хорошей графикой. Главная цель — серьёзно развиваться в Call of Duty и Fortnite без проблем с производительностью, а при возможности делиться этим прогрессом на стримах.', 'Здоровье — ещё одна причина этой просьбы. Лишний вес создаёт нагрузку на колени, а боль особенно проявляется во время интенсивных тренировок. Несколько падений в детстве также сделали суставы более уязвимыми. Мне нужны подходящее наблюдение и постепенное возвращение к активности с оборудованием, которое не будет сильнее нагружать колени.', 'Все эти вещи связаны с моей повседневной жизнью: возможность работать, заниматься тем, что мне нравится, и улучшать здоровье. Даже если вы просто поделитесь этой страницей, это поможет двигаться вперёд шаг за шагом.'], labels: ['Разработка и ИИ', 'Видеоигры', 'Здоровье и движение'] },
    goals: { eyebrow: 'На что пойдёт поддержка', title: 'Три конкретные цели', items: { pc: { title: 'Компьютер для моих проектов', short: 'Разрабатывать и тестировать проекты с ИИ в лучших условиях.', text: 'Нынешнее оборудование замедляет разработку и ограничивает тестирование. Более мощный компьютер нужен для создания проектов, запуска необходимых инструментов и экспериментов с ИИ. Цель проста: работать на подходящем оборудовании.' }, gaming: { title: 'Играть и развиваться в хороших условиях', short: 'Играть в AAA-проекты и развиваться в Call of Duty и Fortnite.', text: 'Я хочу познакомиться с современными AAA-играми, но прежде всего серьёзно тренироваться в Call of Duty и Fortnite. Подходящий компьютер уменьшит проблемы с производительностью и позволит заниматься регулярнее. Если будет возможность, я также буду делиться прогрессом на стримах.' }, health: { title: 'Заняться здоровьем коленей', short: 'Вес и интенсивный спорт вызывают боль в суставах, ослабленных после падений в детстве.', text: 'Лишний вес нагружает колени, и во время интенсивного спорта боль усиливается. Падения в детстве также сделали суставы более уязвимыми. Поддержка поможет оплатить медицинское наблюдение, физиотерапию и оборудование с низкой нагрузкой, чтобы возвращаться к активности постепенно.' } } },
    projects: { eyebrow: 'Инструменты для сообщества', title: 'Проекты, созданные с ИИ', description: 'Здесь я буду публиковать инструменты и проекты, которые создаю с помощью искусственного интеллекта. Цель — делиться практичными и полезными вещами по мере готовности.', status: { Disponible: 'Доступно', 'En cours': 'В работе', Bientôt: 'Скоро' }, viewProject: 'Открыть проект', linkComing: 'Ссылка скоро появится', placeholder: { title: 'Первый проект скоро появится', description: 'Раздел обновится, когда первый инструмент будет готов. Я предпочитаю опубликовать рабочую и полезную вещь, а не объявлять о проекте слишком рано.', tag: 'Скоро' } },
    assistant: { eyebrow: 'Встроенный помощник', title: 'Задайте вопрос', description: 'Простой помощник отвечает на вопросы о проекте и сборе средств.', name: 'Помощник проекта', online: 'В сети', placeholder: 'Напишите вопрос…', send: 'Отправить', footnote: 'Встроен в сайт, бесплатный и не требует API-ключа.', welcome: 'Здравствуйте. Я могу ответить на вопросы о проекте Дилана, оборудовании, играх, здоровье и способах помочь.', suggestions: ['Зачем нужен этот сбор?', 'На что пойдут деньги?', 'Как сделать криптопожертвование?', 'Как помочь без денег?'], answers: { greeting: 'Здравствуйте, спасибо, что заглянули. Можно спросить, зачем нужен сбор, на что пойдут деньги или как помочь.', pc: 'Первая цель — компьютер, подходящий для разработки, тестирования и проектов с ИИ. Текущее оборудование замедляет некоторые задачи и ограничивает эксперименты.', gaming: 'Дилан хочет играть в AAA-проекты в хороших условиях и прежде всего развиваться в Call of Duty и Fortnite. Стримы — возможный способ делиться прогрессом, а не обещание.', health: 'Лишний вес нагружает колени Дилана. Боль особенно заметна во время интенсивного спорта, а несколько падений в детстве сделали суставы более уязвимыми. Нужны подходящее наблюдение и постепенное возвращение к активности.', projects: 'Раздел ИИ-проектов будет постепенно пополняться инструментами, полезными для сообщества. Первый проект пока не опубликован.', why: 'Сбор нужен для рабочего компьютера, помощи с коленями и, в меньшей степени, условий для игр и развития. План — двигаться постепенно.', money: 'Сначала деньги пойдут на рабочий компьютер, затем на медицинское наблюдение, физиотерапию и спортивное оборудование с низкой нагрузкой. Приоритеты могут меняться в зависимости от суммы.', gamingFaq: 'Игры важны для Дилана, но главные приоритеты — работа и здоровье. В первую очередь он хочет развиваться в Call of Duty и Fortnite.', help: 'Поделиться страницей или написать слова поддержки — уже полезно. Не обязательно жертвовать деньги, чтобы помочь.', crypto: 'Пожертвовать можно в Bitcoin, Ethereum или USDT в сети Solana. Адреса и сети указаны в разделе Поддержка. Перед отправкой всегда проверяйте сеть.', donate: 'Помочь можно через Donatr.ee, Gumroad или криптоадреса в разделе Поддержка. Выберите удобный способ.', who: 'Дилан — разработчик, который работает над сайтами, инструментами и проектами в сфере искусственного интеллекта. Эта страница простыми словами объясняет, что ему нужно для продолжения работы.', thanks: 'Спасибо за сообщение. Пожертвование, репост или добрые слова могут помочь каждый по-своему.', fallback: ['Я могу ответить об оборудовании, играх, здоровье, ИИ-проектах или способах поддержать Дилана.', 'Подробности есть в разделах Моя история, Цели и Поддержка. Можно также задать более конкретный вопрос.'], empty: 'Напишите вопрос о проекте.' } },
    impact: { eyebrow: 'Что это изменит', title: 'Двигаться вперёд шаг за шагом', steps: [{ title: 'Сейчас', text: 'Ограниченное оборудование и боль в коленях при интенсивных нагрузках.' }, { title: 'С вашей помощью', text: 'Подходящий компьютер и поддержка для постепенного возвращения к активности.' }, { title: 'Дальше', text: 'Общие ИИ-проекты, прогресс в играх и лучшая подвижность.' }] },
    faq: { eyebrow: 'Открыто и понятно', title: 'Частые вопросы', items: [{ q: 'Почему просить о помощи, а не откладывать понемногу?', a: 'Подходящий компьютер и забота о здоровье требуют заметных расходов. Начальная помощь позволит начать раньше, не обещая решить всё сразу.' }, { q: 'На что конкретно пойдут деньги?', a: 'Приоритет — компьютер для разработки. Остальное пойдёт на медицинское наблюдение, физиотерапию и спортивное оборудование с низкой нагрузкой, в зависимости от потребностей и собранной суммы.' }, { q: 'Зачем рассказывать ещё и об играх?', a: 'Игры — часть жизни Дилана, но не единственная причина сбора. Он хочет прежде всего развиваться в Call of Duty и Fortnite и делиться этим, если условия позволят.' }, { q: 'Как помочь без пожертвования?', a: 'Можно поделиться страницей или рассказать о ней. Сообщение и слова поддержки тоже важны.' }] },
    support: { eyebrow: 'Важна любая помощь', title: 'Поддержать проект', description: 'Спасибо, что прочитали эту страницу. Вот как можно помочь.', donatree: 'Моя страница Donatr.ee', gumroad: 'Пожертвовать через Gumroad', cryptoTitle: 'Или криптовалютой', cryptoDescription: 'Отсканируйте QR-код или скопируйте адрес. Перед отправкой проверьте сеть.', copy: 'Скопировать адрес', copied: 'Скопировано', thanks: 'Спасибо за любую помощь. Если вы не можете пожертвовать деньги, поделиться страницей уже полезно.', network: { bitcoin: 'Сеть Bitcoin', ethereum: 'Сеть Ethereum (ERC-20)', solana: 'Сеть Solana (SPL)' } },
    footer: { message: 'Спасибо, что нашли время прочитать мою историю.', support: 'Поддержать Дилана', copyright: '© 2026 Dylan07 — Личная страница поддержки.' },
  },
};

export const TRANSLATIONS = translations;

export function getTranslation(language: Language): Translation {
  return translations[language] ?? translations.fr;
}

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'fr';
  const saved = window.localStorage.getItem('dylan07-language') as Language | null;
  if (saved && LANGUAGES.some((item) => item.code === saved)) return saved;
  const browser = window.navigator.language.slice(0, 2) as Language;
  return LANGUAGES.some((item) => item.code === browser) ? browser : 'fr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const t = useMemo(() => getTranslation(language), [language]);

  useEffect(() => {
    window.localStorage.setItem('dylan07-language', language);
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.title = language === 'fr' ? 'Dylan07 — Page de soutien' : `Dylan07 — ${t.nav.support}`;
  }, [language, t]);

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider');
  return context;
}
