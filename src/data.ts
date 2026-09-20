// ============================================================
// 1X — Base de faits HIMRA (Bakayoko Abdul Rahim)
// Chaque entrée porte sa source. Ce qui n'est pas prouvé est
// marqué « à confirmer » — règle de fer du projet (§9).
// Images : photos de presse réelles créditées + miniatures
// YouTube officielles + pochettes officielles (CDN Deezer).
// ============================================================

const YT = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const YTHQ = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
const DZ_COVER = (md5: string) =>
  `https://cdn-images.dzcdn.net/images/cover/${md5}/500x500-000000-80-0-0.jpg`;

// ---------- Vidéos vérifiées (chaîne officielle « Himra officiel ») ----------
export const VIDEOS = {
  BARA_BARA: 'B6XOr6eelJ8', // single SORRY I'M BAD — mai 2026
  YOROBO_3: '8TtKAgU0FYg', // le clip le plus vu de la chaîne (28,9M)
  LEGENDES: '7uD3NbpVCm0', // avec La Fouine — 23,6M
  SOLO: 'L3y9-Sztf7o', // clip officiel JEUNE & RICHE — 15M
  NOSTALGIE: 'KUVZaAZJyQs',
  YOUNG_RICH_PAPI: 'Ysm6dZzcOVQ', // feat Leto — 6,8M
  NAIGAIDJAN: 'SWQ-B1gmnpQ',
  YOUPRN: 'W5qW7GlNmNI', // n°1 tendances FR/CA — sept. 2026
  DE_TEMPS_EN_TEMPS: 'DTqq5Ylk_hw',
  TOP_BOY_LIVE: 'AhKN-sNhTFs',
  FREESTYLE_DRILL_7: '58WshW68J6s',
};

export const LINKS = {
  youtube: 'https://www.youtube.com/@himraofficiel3231',
  youtubeChannel: 'https://www.youtube.com/channel/UCck5J0M6YKnXCrnuXkCFuvw',
  instagram: 'https://www.instagram.com/himra_saiyen',
  tiktok: 'https://www.tiktok.com/@himra_saiyen',
  twitter: 'https://twitter.com/HimraOfficiel',
  facebook: 'https://www.facebook.com/Himraofficiel',
  spotify: 'https://open.spotify.com/artist/39SBljHcUD66edvRmiRqlS',
  appleMusic: 'https://music.apple.com/ci/artist/himra/1197313464',
  deezer: 'https://www.deezer.com/fr/artist/11736133',
  boomplay: 'https://www.boomplay.com/search/default/Himra',
  audiomack: 'https://audiomack.com/search?q=himra',
  baraBara: 'https://www.youtube.com/watch?v=B6XOr6eelJ8',
  nostalgie: 'https://www.youtube.com/watch?v=KUVZaAZJyQs',
  naigaidjan: 'https://www.youtube.com/watch?v=SWQ-B1gmnpQ',
  dalshim: 'https://www.youtube.com/watch?v=DTqq5Ylk_hw',
  leMonde: 'https://www.lemonde.fr/afrique/article/2025/03/15/en-cote-d-ivoire-le-rappeur-himra-parle-a-la-rue-chante-la-galere-et-la-hargne-en-nouchi-hardcore_6581301_3212.html',
  connectionIvoirienne: 'https://connectionivoirienne.net/2024/12/28/changer-a-cause-de-quoi-je-vais-changer-le-jeune-rappeur-ivoirien-himra-touche-le-sommet-mondial',
  abidjanNetBae: 'https://news.abidjan.net/articles/739134/spectacle-lartiste-rappeur-himra-annonce-un-concert-en-playback-au-stade-de-la-bae-de-yopougon-le-15-fevrier-prochain',
  afriqueSur7: 'https://www.afrique-sur7.fr/himra-letoile-montante-de-la-drill-ivoire-qui-bouscule-les-codes-de-la-musique-africaine',
  critikmag: 'https://critikmag.com/himra-le-rappeur-qui-fait-sensation-en-cote-divoire/',
  gettyQuai54: 'https://www.gettyimages.fr/detail/photo-dactualite/himra-rapper-of-ivory-coast-during-the-quai-54-photo-dactualite/2223284850',
  rapTime: 'https://tiktok.com/@rap_time25',
  wikipediaFr: 'https://fr.wikipedia.org/wiki/Himra',
  genius: 'https://genius.com/artists/Himra',
  tikerama: 'https://himra.tikerama.com',
  abidjanShow1x: 'https://www.abidjanshow.com/news/actu-for-men/277077',
  sortirAParis: 'https://www.sortiraparis.com/scenes/concert-musique/articles/335083',
  arenaTour: 'https://www.arena-tour.fr/himra-annonce-un-concert-unique-au-zenith-paris-le-28-janvier-2026',
  tcoprod: 'https://www.tcoprod.eu/artiste/423-himra',
  pulseStyles: 'https://www.pulse.ci/articles/lifestyle/mode-5-styles-d-himra-saiyen-a-decrypter-et-a-adopter-2025072220153967675',
  hiphopcornerPsg: 'https://hiphopcorner.fr/rappeur-ivoirien-himra-devient-nouvel-egerie-marque-ici-cest-paris-du-psg',
  hiphopcornerLegendes: 'https://hiphopcorner.fr/legendes-la-fouine-et-himra-depasse-8-millions-vues-youtube-mois/',
  beninWebTv: 'https://beninwebtv.bj/himra-place-youprn-n1-des-tendances-youtube-en-france-et-au-canada/',
  shangoMadeleine: 'https://www.shango.media/benin-web-himra-se-produit-ce-soir-a-la-madeleine-de-bruxelles-11854994',
  ticketliveMadeleine: 'https://www.ticketlive.be/en/events/himra-la-madeleine/',
  concerts50Rockhal: 'https://concerts50.com/show/himra-in-esch-sur-alzette-tickets-may-22-2026',
  rapKingTiktok: 'https://www.tiktok.com/@rapkingofficiel/video/7485392359111413014',
  legendes: 'https://www.youtube.com/watch?v=7uD3NbpVCm0',
  yorobo3: 'https://www.youtube.com/watch?v=8TtKAgU0FYg',
  solo: 'https://www.youtube.com/watch?v=L3y9-Sztf7o',
  youprn: 'https://www.youtube.com/watch?v=W5qW7GlNmNI',
  youngRichPapi: 'https://www.youtube.com/watch?v=Ysm6dZzcOVQ',
  spotifyCharts: 'https://charts.spotify.com/charts/overview/global',
  kworbSpotify: 'https://kworb.net/spotify/artist/39SBljHcUD66edvRmiRqlS_songs.html',
};

// ---------- Photos réelles créditées ----------
export const PHOTOS = {
  // Le VRAI signe 1X : uniquement avec les doigts (pouces croisés, index-majeurs levés).
  signe1x: {
    src: '/media/himra-signe-1x.jpg',
    credit: 'Abidjan Show — Himra fait le signe 1X (doigts croisés) : « un branding, pas un symbole de violence »',
    source: LINKS.abidjanShow1x,
  },
  zenithPoster: {
    src: '/media/affiche-zenith.jpg',
    credit: 'Affiche officielle « NOUVEAU BOSS » — Zénith Paris-La Villette, 28 janvier 2026',
    source: LINKS.sortirAParis,
  },
  zenithBanner: {
    src: '/media/zenith-banner.jpg',
    credit: 'Visuel officiel du concert au Zénith de Paris — Arena Tour',
    source: LINKS.arenaTour,
  },
  trone: {
    src: '/media/himra-trone.jpg',
    credit: 'TCO Prod — Himra, séance photo officielle (trône doré)',
    source: LINKS.tcoprod,
  },
  urusIllustration: {
    src: '/media/urus-illustration.jpg',
    credit: 'Photo d\'illustration — Lamborghini Urus (image non liée à Himra)',
    source: LINKS.rapKingTiktok,
  },
  heroTrophees: {
    src: '/media/himra-trophee.jpg',
    credit: 'Rap Time — Himra pose avec ses trophées (les bras croisés ne sont PAS le signe 1X, qui se fait aux doigts)',
    source: LINKS.rapTime,
  },
  portraitLeMonde: {
    src: '/media/himra-portrait.jpg',
    credit: 'Le Monde Afrique — Himra à Abidjan (mars 2025)',
    source: LINKS.leMonde,
  },
  stage: {
    src: '/media/himra-stage.jpg',
    credit: 'Deezer — Himra en concert',
    source: LINKS.deezer,
  },
  concertRed: {
    src: '/media/himra-concert-red.jpg',
    credit: 'Afrique-sur7 — Himra sur scène',
    source: LINKS.afriqueSur7,
  },
  debuts: {
    src: '/media/himra-debuts.jpg',
    credit: 'Critikmag — Himra à ses débuts',
    source: LINKS.critikmag,
  },
  fansSigne: {
    src: '/media/fans-signe-1x.jpg',
    credit: 'Abidjan.net — fans faisant le signe 1X',
    source: LINKS.connectionIvoirienne,
  },
  parcExpo: {
    src: '/media/concert-parc-expo.jpg',
    credit: 'Abidjan.net — Parc des Expositions, Abidjan (26 déc. 2024)',
    source: LINKS.connectionIvoirienne,
  },
  fansCagoule: {
    src: '/media/fans-cagoule-1x.jpg',
    credit: 'Abidjan.net — cagoules 1X dans la foule',
    source: LINKS.connectionIvoirienne,
  },
  scene1x: {
    src: '/media/scene-1x.jpg',
    credit: 'Rap Time — Himra sur scène, décor 1X',
    source: LINKS.rapTime,
  },
};

// ---------- Fiche d'identité ----------
export const IDENTITY = {
  nomComplet: 'Bakayoko Abdul Rahim',
  nomScene: 'HIMRA',
  naissance: '28 mai 1998',
  lieu: 'Cocody, Abidjan — Côte d\'Ivoire',
  genres: 'Drill Ivoire · Rap nouchi · Trap',
  labels: 'Def Jam Recordings Africa (2021) · Warner/Atlantic (2024) · Epic Records (2026)',
  communaute: '1X ULTRA — les « Chete »',
  influences: 'La Fouine, Booba, puis Travis Scott, Young Thug, A$AP Rocky',
  citation:
    '« Mon signe 1X est juste un branding. En aucun cas, je n\'ai associé ma musique à la violence. C\'est une énergie positive que je transmets à mes fans, pour les pousser à se surpasser. »',
  citationSource: 'Conférence de presse — propos rapportés par la presse ivoirienne',
};

// ---------- Frise du parcours (complète, avec catégories) ----------
export type TimelineCat = 'debuts' | 'albums' | 'concerts' | 'recompenses' | 'aujourdhui';

export const TIMELINE: {
  year: string;
  title: string;
  desc: string;
  cat: TimelineCat;
  confirmed: boolean;
  source: string;
  sourceLabel: string;
}[] = [
  {
    year: '1998',
    title: 'Naissance à Cocody',
    desc: "Bakayoko Abdul Rahim naît le 28 mai 1998 à Cocody, Abidjan. Il grandit avec La Fouine et Booba dans les oreilles, avant Travis Scott et Young Thug.",
    cat: 'debuts', confirmed: true, source: LINKS.wikipediaFr, sourceLabel: 'Wikipédia FR',
  },
  {
    year: '~2007',
    title: 'Premiers freestyles — dès 9 ans',
    desc: "Il freestyle très jeune, puis forme le groupe SBS avec des amis de collège. Quatre ans ensemble, et une 4ᵉ place à la 7ᵉ édition du concours Faya Flow.",
    cat: 'debuts', confirmed: true, source: LINKS.critikmag, sourceLabel: 'Critikmag',
  },
  {
    year: '2017',
    title: 'Babi Vibes — « C\'est mami c\'est loto »',
    desc: "Première apparition remarquée sur la compilation Babi Vibes. Passages par la structure Overcom, puis Elite Record (« Mouiller »).",
    cat: 'debuts', confirmed: true, source: LINKS.critikmag, sourceLabel: 'Critikmag',
  },
  {
    year: '2018',
    title: 'OMEGA — premier projet',
    desc: "Premier projet solo. Himra crée son courant MAJIN et sa tendance la ROSERIE, puis avance en indépendant avec sa clique.",
    cat: 'albums', confirmed: true, source: LINKS.genius, sourceLabel: 'Genius',
  },
  {
    year: '2019',
    title: 'NFUSA & BRUTAL (avec J-Haine)',
    desc: "Deux projets la même année. Le style s'affine : flow agressif, nouchi hardcore, énergie brute.",
    cat: 'albums', confirmed: true, source: LINKS.deezer, sourceLabel: 'Deezer',
  },
  {
    year: '2021',
    title: 'IVOIRE DRILL KING — EP (Def Jam Africa)',
    desc: "L'EP fondateur du Drill Ivoire, signé chez Def Jam Recordings Africa. Le mouvement prend forme et un nom.",
    cat: 'albums', confirmed: true, source: LINKS.deezer, sourceLabel: 'Deezer',
  },
  {
    year: '2022',
    title: 'IDK2 & « Yorobo Drill Acte 3 » — le déclic',
    desc: "La mixtape IDK2 confirme. Le freestyle « Yorobo Drill Acte 3 », mêlant drill et sonorités ivoiriennes, le fait sortir du cercle local.",
    cat: 'albums', confirmed: true, source: LINKS.youtube, sourceLabel: 'YouTube officiel',
  },
  {
    year: '2023',
    title: 'Mixtape « 1X » — le mouvement est baptisé',
    desc: "La mixtape 1X donne son nom au signe, au clan et à la communauté. Elle sera certifiée disque d'or en avril 2025.",
    cat: 'albums', confirmed: true, source: LINKS.baraBara, sourceLabel: 'YouTube officiel',
  },
  {
    year: '2024',
    title: 'JEUNE & RICHE — disque d\'or en ~6 mois',
    desc: "Album le 25 juillet 2024 (+ version Deluxe). Disque d'or en Côte d'Ivoire en environ six mois — un record de rapidité — puis platine.",
    cat: 'recompenses', confirmed: true, source: LINKS.connectionIvoirienne, sourceLabel: 'Connection Ivoirienne',
  },
  {
    year: '2024',
    title: 'African Talent Awards — triple lauréat',
    desc: "Meilleur Album Francophone (Jeune & Riche), Meilleur Artiste Francophone, + Black Trophy. Trace Awards : Révélation de l'année.",
    cat: 'recompenses', confirmed: true, source: LINKS.connectionIvoirienne, sourceLabel: 'Presse ivoirienne',
  },
  {
    year: '26.12.2024',
    title: 'Parc des Expositions d\'Abidjan — complet',
    desc: "Concert événement au Parc des Expositions. Des dizaines de milliers de « Chete » réunis. La presse parle d'un sommet.",
    cat: 'concerts', confirmed: true, source: LINKS.connectionIvoirienne, sourceLabel: 'Abidjan.net',
  },
  {
    year: '2025',
    title: 'BIG AKA 4 AKA KAI, puis le double DACHIBA',
    desc: "EP surprise le 31 mars 2025, puis le double projet Dachiba Koumgbachaiba et sa suite Dalshim. Le Monde lui consacre un portrait en mars.",
    cat: 'albums', confirmed: true, source: LINKS.leMonde, sourceLabel: 'Le Monde Afrique',
  },
  {
    year: '01.10.2025',
    title: 'Cabaret Sauvage, Paris',
    desc: "Première grande salle parisienne. La diaspora répond présente : complet.",
    cat: 'concerts', confirmed: true, source: LINKS.tikerama, sourceLabel: 'Billetterie',
  },
  {
    year: '28.01.2026',
    title: 'Zénith Paris – La Villette',
    desc: "Premier Zénith. Une consécration pour le rap ivoirien tout entier.",
    cat: 'concerts', confirmed: true, source: LINKS.instagram, sourceLabel: 'Instagram officiel',
  },
  {
    year: '2026',
    title: '« Number One » (avec Minz) — single d\'or SNEP',
    desc: "Certifié single d'or en France (~15 M de streams, janvier 2026). Aux Flammes (26 avril 2026), premier artiste africain à remporter la Flamme du morceau de musiques africaines.",
    cat: 'recompenses', confirmed: true, source: 'https://snepmusique.com/les-certifications/', sourceLabel: 'SNEP',
  },
  {
    year: '29.05.2026',
    title: 'SORRY I\'M BAD — chez Epic Records',
    desc: "Album avec Gazo, Leto, La Fouine, ElGrandeToto, Enfant Noir, Philipayne, M24, Babydaiz et Zlatan. Tournée US : Gramercy Theatre (NY), Union Stage (Washington). Dour Festival, Rockhal.",
    cat: 'albums', confirmed: true, source: LINKS.deezer, sourceLabel: 'Deezer',
  },
  {
    year: '26.12.2026',
    title: 'STADE OLYMPIQUE D\'ÉBIMPÉ — objectif 60 000',
    desc: "Le concert événement : Stade Olympique Alassane Ouattara d'Ébimpé, 26 décembre 2026, 14 h. Objectif : 60 000 personnes. L'histoire en marche.",
    cat: 'aujourdhui', confirmed: true, source: LINKS.tikerama, sourceLabel: 'Billetterie officielle',
  },
];

// ---------- Événements (TOUS) — chaque événement a sa page de détail (#/evenement/id) ----------
// « accent » : couleur dominante de la tenue / du visuel — elle teinte le site au survol (§ DA).
export interface EventItem {
  id: number;
  title: string;
  date: string;
  type: string;
  img: string;
  desc: string;
  longDesc: string;
  accent: string;
  source: string;
  sourceLabel: string;
  credit: string;
  liveLink?: string;
  liveLinkLabel?: string;
  outfit?: string;
}

export const EVENTS: EventItem[] = [
  {
    id: 0,
    title: 'Parc des Expositions, Abidjan — complet',
    date: '26 DÉC. 2024',
    type: 'CONCERT',
    img: PHOTOS.parcExpo.src,
    desc: "Le concert de l'année à Abidjan : le Parc des Expositions plein, des dizaines de milliers de Chete.",
    longDesc:
      "Le 26 décembre 2024, Himra remplit le Parc des Expositions d'Abidjan. Des dizaines de milliers de « Chete » réunis, cagoules 1X sur les têtes, doigts croisés levés vers le ciel. La presse ivoirienne parle d'une démonstration de force sans précédent pour le Drill Ivoire : un artiste indépendant, parti des freestyles de quartier, qui réunit une marée humaine dans la plus grande zone événementielle du pays. C'est ce soir-là que le pays entier comprend que le mouvement 1X n'est plus un phénomène de niche — c'est une culture.",
    accent: '#e8452c',
    source: LINKS.connectionIvoirienne,
    sourceLabel: 'Connection Ivoirienne',
    credit: PHOTOS.parcExpo.credit,
    liveLink: LINKS.youtube,
    liveLinkLabel: 'Extraits live — chaîne YouTube officielle',
    outfit: 'Tout-noir de scène, chaînes argentées XXL — l\'uniforme 1X.',
  },
  {
    id: 1,
    title: 'Stade de la BAE, Yopougon',
    date: '15 FÉV. 2025',
    type: 'CONCERT',
    img: PHOTOS.concertRed.src,
    desc: "Retour au quartier : Himra remplit le stade de la BAE de Yopougon, fief historique du mouvement.",
    longDesc:
      "Le 15 février 2025, Himra revient là où tout a commencé : Yopougon, la plus grande commune populaire d'Abidjan. Le stade de la BAE déborde. Un concert annoncé comme un remerciement au quartier, à la rue qui l'a vu freestyler dès ses 9 ans. Lumières rouges, fumigènes, la foule qui reprend chaque phrase en nouchi : la communion 1X à l'état pur.",
    accent: '#d92332',
    source: LINKS.abidjanNetBae,
    sourceLabel: 'Abidjan.net',
    credit: PHOTOS.concertRed.credit,
    liveLink: LINKS.youtube,
    liveLinkLabel: 'Lives et extraits — YouTube officiel',
    outfit: 'Rouge sang sous les projecteurs — la couleur du clan.',
  },
  {
    id: 2,
    title: 'Cabaret Sauvage, Paris — complet en 10 jours',
    date: '01 OCT. 2025',
    type: 'CONCERT',
    img: PHOTOS.stage.src,
    desc: "Première grande salle parisienne, complète en moins de 10 jours. La diaspora répond présente.",
    longDesc:
      "Le 1er octobre 2025, Himra joue sa première grande date parisienne au Cabaret Sauvage, à La Villette. La salle affiche complet en moins de dix jours (source : billetterie Ticketlive). La diaspora ivoirienne et les curieux du rap francophone découvrent en live la machine 1X : énergie brute, nouchi hardcore, et un public qui connaît chaque morceau par cœur. Cette date déclenche la suite : le Zénith.",
    accent: '#b8621b',
    source: LINKS.ticketliveMadeleine,
    sourceLabel: 'Ticketlive',
    credit: PHOTOS.stage.credit,
    liveLink: LINKS.youtube,
    liveLinkLabel: 'Extraits du concert — YouTube',
    outfit: 'Streetwear oversize, lunettes sombres — le style Saiyen à Paris.',
  },
  {
    id: 3,
    title: 'Zénith Paris – La Villette : « NOUVEAU BOSS »',
    date: '28 JAN. 2026',
    type: 'CONCERT',
    img: PHOTOS.zenithPoster.src,
    desc: "Premier Zénith, sous la bannière « NOUVEAU BOSS ». Une consécration pour tout le rap ivoirien.",
    longDesc:
      "Le 28 janvier 2026, Himra prend le Zénith Paris-La Villette (6 300 places) d'assaut avec un show unique baptisé « NOUVEAU BOSS ». L'affiche officielle le montre en manteau de fourrure, lunettes noires, diamants aux poignets : l'imagerie du boss assumée. C'est la consécration scénique européenne du Drill Ivoire — un rappeur d'Abidjan, en tête d'affiche d'une des salles mythiques du rap en France.",
    accent: '#8a8f98',
    source: LINKS.sortirAParis,
    sourceLabel: 'Sortir à Paris',
    credit: PHOTOS.zenithPoster.credit,
    liveLink: LINKS.arenaTour,
    liveLinkLabel: 'L\'annonce du concert — Arena Tour',
    outfit: 'Manteau de fourrure grise, lunettes noires, diamants — le « Nouveau Boss ».',
  },
  {
    id: 4,
    title: 'Tournée US : Gramercy Theatre, New York',
    date: '21 JUIN 2026',
    type: 'CONCERT',
    img: PHOTOS.scene1x.src,
    desc: "Première tournée américaine — New York découvre le Drill Ivoire au Gramercy Theatre.",
    longDesc:
      "Le 21 juin 2026, Himra pose le 1X sur la scène du Gramercy Theatre de New York, dans la foulée de la sortie de SORRY I'M BAD chez Epic Records. Première incursion américaine pour le Drill Ivoire : la diaspora ouest-africaine des États-Unis répond présente. Une semaine plus tard, le 28 juin, la tournée passe par l'Union Stage de Washington D.C.",
    accent: '#3f6db3',
    source: LINKS.tikerama,
    sourceLabel: 'Billetterie officielle',
    credit: PHOTOS.scene1x.credit,
    liveLink: LINKS.instagram,
    liveLinkLabel: 'Les images de la tournée — Instagram officiel',
    outfit: 'Total look 1X, casquette et chaînes — Babi à New York.',
  },
  {
    id: 5,
    title: 'Dour Festival, Belgique',
    date: 'JUIL. 2026',
    type: 'FESTIVAL',
    img: PHOTOS.fansCagoule.src,
    desc: "Le Drill Ivoire s'invite dans l'un des plus gros festivals alternatifs d'Europe.",
    longDesc:
      "À l'été 2026, Himra est programmé au Dour Festival, rendez-vous belge incontournable des musiques urbaines et électroniques (près de 250 000 festivaliers chaque année). Face à un public européen qui ne parle pas nouchi, l'énergie 1X fait le travail : le signe aux doigts croisés se propage dans la foule dès le deuxième morceau.",
    accent: '#5f9e4c',
    source: 'https://www.dourfestival.eu',
    sourceLabel: 'Dour Festival',
    credit: PHOTOS.fansCagoule.credit,
    liveLink: LINKS.youtube,
    liveLinkLabel: 'Aftermovies et extraits — YouTube',
    outfit: 'Cagoule 1X et maillot — l\'esthétique du clan en festival.',
  },
  {
    id: 6,
    title: 'La Madeleine, Bruxelles',
    date: '17 SEPT. 2026',
    type: 'CONCERT',
    img: PHOTOS.signe1x.src,
    desc: "Bruxelles, complet — pendant que 9 de ses titres occupent le top 10 Apple Music Côte d'Ivoire.",
    longDesc:
      "Le 17 septembre 2026, Himra se produit à La Madeleine de Bruxelles (programme officiel de la Ville de Bruxelles). Le symbole est fort : au moment même où il monte sur scène en Belgique, ses titres occupent neuf des dix premières places d'Apple Music Côte d'Ivoire (source : Shango/Bénin Web TV). Le lendemain, 18 septembre, il enchaîne à la Rockhal (Main Hall) d'Esch-sur-Alzette, au Luxembourg.",
    accent: '#c8102e',
    source: LINKS.shangoMadeleine,
    sourceLabel: 'Shango Média',
    credit: PHOTOS.signe1x.credit,
    liveLink: LINKS.ticketliveMadeleine,
    liveLinkLabel: 'La page du concert — Ticketlive',
    outfit: 'Le signe 1X aux doigts croisés — l\'emblème avant tout.',
  },
  {
    id: 7,
    title: 'Rockhal Main Hall, Luxembourg',
    date: '18 SEPT. 2026',
    type: 'CONCERT',
    img: PHOTOS.zenithBanner.src,
    desc: "La tournée européenne continue : Main Hall de la Rockhal, à Esch-sur-Alzette.",
    longDesc:
      "Le 18 septembre 2026, au lendemain de Bruxelles, Himra investit la Main Hall de la Rockhal à Esch-Belval (Luxembourg), plus grande salle de concert du pays. La tournée européenne 2026 — France, Suisse, Belgique, Luxembourg — confirme l'implantation durable du Drill Ivoire sur le continent.",
    accent: '#7d4bb8',
    source: LINKS.concerts50Rockhal,
    sourceLabel: 'Concerts50 / Rockhal',
    credit: PHOTOS.zenithBanner.credit,
    liveLink: 'https://www.rockhal.lu',
    liveLinkLabel: 'Rockhal — site officiel',
    outfit: 'Le visuel officiel de tournée : rouge et noir, EN GANG.',
  },
  {
    id: 8,
    title: 'JEUNE & RICHE — disque d\'or puis platine',
    date: '2024–2025',
    type: 'RÉCOMPENSE',
    img: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
    desc: "Or en ~6 mois — record de rapidité en Côte d'Ivoire — puis platine. L'album du changement de dimension.",
    longDesc:
      "Sorti le 25 juillet 2024 chez Warner/Atlantic, JEUNE & RICHE devient disque d'or en Côte d'Ivoire en environ six mois — un record de rapidité selon la presse ivoirienne — avant d'être certifié platine (barème APRODEMCI : or = 10 000 CD ou 8 M de streams payants ; platine = 20 000 CD ou 16 M). L'album rafle aussi le prix du Meilleur Album Francophone aux African Talent Awards 2024. C'est le disque qui fait passer Himra du statut de phénomène local à celui de tête d'affiche continentale.",
    accent: '#d4a437',
    source: LINKS.connectionIvoirienne,
    sourceLabel: 'Presse ivoirienne',
    credit: 'Pochette officielle — Deezer',
    liveLink: 'https://www.deezer.com/album/617572731',
    liveLinkLabel: 'Écouter l\'album — Deezer',
    outfit: 'La pochette : or et noir — les couleurs de la certification à venir.',
  },
  {
    id: 9,
    title: 'Le portrait du Monde Afrique',
    date: 'MARS 2025',
    type: 'MOMENT CLÉ',
    img: PHOTOS.portraitLeMonde.src,
    desc: "« Le rappeur qui parle à la rue, chante la galère et la hargne en nouchi hardcore. »",
    longDesc:
      "Le 15 mars 2025, Le Monde Afrique consacre un long portrait à Himra : « En Côte d'Ivoire, le rappeur Himra parle à la rue, chante la galère et la hargne en nouchi hardcore ». La consécration médiatique internationale : le quotidien de référence français raconte Cocody, le nouchi, le signe 1X et la génération qui se reconnaît dans ce rap sans filtre.",
    accent: '#c98a3d',
    source: LINKS.leMonde,
    sourceLabel: 'Le Monde Afrique',
    credit: PHOTOS.portraitLeMonde.credit,
    liveLink: LINKS.leMonde,
    liveLinkLabel: 'Lire le portrait — Le Monde',
    outfit: 'Portrait sobre : veste sombre, regard direct — l\'artiste avant le personnage.',
  },
  {
    id: 10,
    title: 'Les Flammes 2026 — une première africaine',
    date: '26 AVR. 2026',
    type: 'RÉCOMPENSE',
    img: PHOTOS.heroTrophees.src,
    desc: "Premier artiste africain à remporter la Flamme du morceau de musiques africaines, avec « Number One ».",
    longDesc:
      "Le 26 avril 2026 à Paris, Himra devient le premier artiste africain à remporter la Flamme du morceau de musiques africaines, pour « Number One » avec Minz — single par ailleurs certifié or par le SNEP en janvier 2026 (~15 M de streams en France). Sur la photo, il pose avec ses trophées, bras croisés — attention : le vrai signe 1X, lui, se fait uniquement avec les doigts.",
    accent: '#caa24a',
    source: 'https://lesflammes.fr',
    sourceLabel: 'Les Flammes',
    credit: PHOTOS.heroTrophees.credit,
    liveLink: 'https://snepmusique.com/les-certifications/',
    liveLinkLabel: 'La certification SNEP',
    outfit: 'Tenue de gala noire, trophées dorés en main.',
  },
  {
    id: 11,
    title: 'YOUP*RN — n°1 des tendances YouTube FR & CA',
    date: '18 SEPT. 2026',
    type: 'CLIP',
    img: YTHQ('W5qW7GlNmNI'),
    desc: "Le nouveau clip prend la tête des tendances YouTube en France et au Canada dès sa sortie.",
    longDesc:
      "Publié dans la nuit du 16 au 17 septembre 2026 sur la chaîne « Himra officiel », le clip « YOUP*RN » (2 min 44) s'installe dès le lendemain à la première place des tendances YouTube en France et au Canada, et 13e au Maroc (relevés Kworb et YTrending du 18 septembre, rapportés par Bénin Web TV). Près de 600 000 vues dès le relevé de minuit : la machine 1X tourne à plein régime, au moment même où l'artiste enchaîne Bruxelles et la Rockhal.",
    accent: '#b3232e',
    source: LINKS.beninWebTv,
    sourceLabel: 'Bénin Web TV',
    credit: 'Miniature officielle — chaîne YouTube « Himra officiel »',
    liveLink: LINKS.youprn,
    liveLinkLabel: 'Voir le clip — YouTube',
    outfit: 'Direction artistique du clip : rouge et noir signature.',
  },
  {
    id: 12,
    title: 'STADE OLYMPIQUE D\'ÉBIMPÉ — objectif 60 000',
    date: '26 DÉC. 2026',
    type: 'À VENIR',
    img: PHOTOS.fansSigne.src,
    desc: "Le concert événement : le stade olympique Alassane Ouattara, 14 h, objectif 60 000 personnes.",
    longDesc:
      "Le 26 décembre 2026 à 14 h, Himra vise le plus grand défi de sa carrière : remplir le Stade Olympique Alassane Ouattara d'Ébimpé — l'enceinte de la CAN 2023 — avec un objectif annoncé de 60 000 spectateurs. Deux ans jour pour jour après le Parc des Expositions. Si le pari est tenu, ce sera l'un des plus grands concerts jamais donnés par un rappeur ivoirien sur son sol. Billetterie officielle ouverte sur Tikerama.",
    accent: '#e8452c',
    source: LINKS.tikerama,
    sourceLabel: 'Billetterie officielle',
    credit: PHOTOS.fansSigne.credit,
    liveLink: LINKS.tikerama,
    liveLinkLabel: 'Billetterie officielle — Tikerama',
    outfit: 'Tout un stade en cagoules et doigts croisés — le rêve 1X.',
  },
];

// ---------- Discographie officielle (pochettes réelles Deezer) ----------
export const ALBUMS = [
  {
    title: "SORRY I'M BAD", year: '2026', type: 'Album', label: 'Epic Records',
    cover: DZ_COVER('469b170a0a45b3c2a70615bcf6a86e02'),
    link: 'https://www.deezer.com/album/987320421',
    note: "Avec Gazo, Leto, La Fouine, ElGrandeToto, Zlatan… Sorti le 29 mai 2026.",
    feats: 'Gazo · Leto · La Fouine · ElGrandeToto · M24 · Zlatan',
  },
  {
    title: 'DACHIBA KOUMGBACHAIBA : DALSHIM', year: '2025', type: 'Album', label: 'Indépendant / 1X',
    cover: DZ_COVER('4802df82395b116e56239e2af8e3f0c6'),
    link: 'https://www.deezer.com/album/855055632',
    note: 'La suite du double projet — 14 novembre 2025.',
    feats: '',
  },
  {
    title: 'DACHIBA KOUMGBACHAIBA', year: '2025', type: 'Album', label: 'Indépendant / 1X',
    cover: DZ_COVER('0c7d4f550100824fecdfb53c52efa152'),
    link: 'https://www.deezer.com/album/807890391',
    note: 'Premier volet du double album — août 2025.',
    feats: '',
  },
  {
    title: 'BIG AKA 4 AKA KAI', year: '2025', type: 'EP', label: 'Indépendant / 1X',
    cover: DZ_COVER('08356a72de523808b4abf3213fcf556d'),
    link: 'https://www.deezer.com/album/732217031',
    note: 'EP surprise — 31 mars 2025.',
    feats: '',
  },
  {
    title: 'JEUNE & RICHE (DELUXE)', year: '2024', type: 'Album', label: 'Warner / Atlantic',
    cover: DZ_COVER('07b4c4289b251d46418a45841145b1ee'),
    link: 'https://www.deezer.com/album/658781171',
    note: 'Version deluxe : GANJAMAN, SEXY (feat. Ivorian Doll)…',
    feats: 'Ivorian Doll · Beeztrap KOTM · O\'Kenneth · Kwaku DMC',
  },
  {
    title: 'JEUNE & RICHE', year: '2024', type: 'Album', label: 'Warner / Atlantic',
    cover: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
    link: 'https://www.deezer.com/album/617572731',
    note: "17 titres — 25 juillet 2024. Or en ~6 mois, puis platine.",
    feats: 'Hache-P · Minz',
  },
  {
    title: '1X', year: '2023', type: 'Mixtape', label: 'Indépendant / 1X',
    cover: DZ_COVER('18a5b84606f0a266e8f5477ca6700327'),
    link: 'https://www.deezer.com/album/721527391',
    note: "La mixtape qui baptise le mouvement. Disque d'or (avril 2025).",
    feats: '',
  },
  {
    title: 'IDK2', year: '2022', type: 'Mixtape', label: 'Indépendant',
    cover: DZ_COVER('f01c1d290356a4ac7b555875e1aa7f16'),
    link: 'https://www.deezer.com/album/461682515',
    note: 'Ivoire Drill King 2 — la confirmation.',
    feats: '',
  },
  {
    title: 'Ivoire Drill King', year: '2021', type: 'EP', label: 'Def Jam Recordings Africa',
    cover: DZ_COVER('ba1133f7bb4a0339765d7cd7fa9ea067'),
    link: 'https://www.deezer.com/album/244646512',
    note: "L'EP fondateur du Drill Ivoire.",
    feats: '',
  },
];

// ---------- Hits & pépites ----------
// Compteurs relevés le 20 septembre 2026 (API publique Return YouTube Dislike) —
// puis actualisés EN DIRECT dans l'interface via la même API.
export const HITS = [
  { title: 'YOROBO DRILL ACTE 3', album: 'JEUNE & RICHE (DELUXE)', year: '2022', streams: '28,9M vues YouTube', sourceLabel: 'YouTube (relevé 20/09/2026)', source: LINKS.yorobo3, videoId: VIDEOS.YOROBO_3 },
  { title: 'LÉGENDES (avec La Fouine)', album: 'Single', year: '2025', streams: '23,6M vues YouTube', sourceLabel: 'YouTube (relevé 20/09/2026)', source: LINKS.legendes, videoId: VIDEOS.LEGENDES },
  { title: 'SOLO', album: 'JEUNE & RICHE', year: '2024', streams: '15M vues YouTube', sourceLabel: 'YouTube (relevé 20/09/2026)', source: LINKS.solo, videoId: VIDEOS.SOLO },
  { title: 'BARA BARA', album: "SORRY I'M BAD", year: '2026', streams: '13,6M vues YouTube', sourceLabel: 'YouTube (relevé 20/09/2026)', source: LINKS.baraBara, videoId: VIDEOS.BARA_BARA },
  { title: 'NOSTALGIE', album: "SORRY I'M BAD", year: '2026', streams: '13M vues YouTube', sourceLabel: 'YouTube (relevé 20/09/2026)', source: LINKS.nostalgie, videoId: VIDEOS.NOSTALGIE },
  { title: 'Number One (avec Minz)', album: 'JEUNE & RICHE', year: '2024', streams: 'Single d\'or SNEP · ~15M streams', sourceLabel: 'SNEP (janv. 2026)', source: 'https://snepmusique.com/les-certifications/', videoId: null },
  { title: 'YOUNG RICH PAPI (feat. Leto)', album: "SORRY I'M BAD", year: '2026', streams: '6,8M vues YouTube', sourceLabel: 'YouTube (relevé 20/09/2026)', source: LINKS.youngRichPapi, videoId: VIDEOS.YOUNG_RICH_PAPI },
  { title: 'YOUP*RN', album: 'Single', year: '2026', streams: '1M+ vues en 3 jours · n°1 tendances FR & CA', sourceLabel: 'Bénin Web TV (18/09/2026)', source: LINKS.beninWebTv, videoId: VIDEOS.YOUPRN },
];

export const GEMS = [
  { title: 'OMEGA', year: '2018', note: 'Le tout premier projet. Là où tout commence : MAJIN, la Roserie, le flow en construction.' },
  { title: 'NFUSA', year: '2019', note: 'Projet d\'avant la célébrité — la rage des débuts, brute et sans filtre.' },
  { title: 'BRUTAL (avec J-Haine)', year: '2019', note: 'Collaboration de l\'ère underground, devenue collector chez les connaisseurs.' },
  { title: 'C\'est mami c\'est loto', year: '2017', note: 'Son apparition sur la compilation Babi Vibes — la toute première trace discographique.' },
  { title: 'Yorobo Drill Acte 3', year: '2022', note: 'LE déclic : drill + sonorités ivoiriennes. Le freestyle qui l\'a fait sortir du cercle local.' },
  { title: 'Top Boy (Live)', year: '2023', note: 'Version live rare enregistrée par Tieme Music, jamais singleisée.', source: `https://www.youtube.com/watch?v=${VIDEOS.TOP_BOY_LIVE}` },
  { title: 'FREESTYLE DRILL IVOIRE #7', year: '2023', note: 'Série de freestyles non commercialisés, uniquement sur YouTube.', source: `https://www.youtube.com/watch?v=${VIDEOS.FREESTYLE_DRILL_7}` },
  { title: 'Mouiller (ère Elite Record)', year: '~2018', note: 'Trace de son passage chez Elite Record, avant l\'indépendance.' },
];

// ---------- Featurings : confirmés vs rumeurs ----------
export const FEATS_CONFIRMED = [
  { artist: 'Gazo', proj: "SORRY I'M BAD (2026)", source: LINKS.deezer, sourceLabel: 'Tracklist officielle' },
  { artist: 'Leto', proj: "SORRY I'M BAD (2026)", source: LINKS.deezer, sourceLabel: 'Tracklist officielle' },
  { artist: 'La Fouine', proj: "SORRY I'M BAD (2026)", source: LINKS.deezer, sourceLabel: 'Tracklist officielle' },
  { artist: 'ElGrandeToto', proj: "SORRY I'M BAD (2026)", source: LINKS.deezer, sourceLabel: 'Tracklist officielle' },
  { artist: 'Zlatan', proj: "SORRY I'M BAD (2026)", source: LINKS.deezer, sourceLabel: 'Tracklist officielle' },
  { artist: 'Minz', proj: '« Number One » (2024) — single d\'or SNEP', source: 'https://snepmusique.com/les-certifications/', sourceLabel: 'SNEP' },
  { artist: 'Hache-P', proj: '« Pti Déj » (2022)', source: LINKS.genius, sourceLabel: 'Genius' },
  { artist: 'Ivorian Doll', proj: 'JEUNE & RICHE Deluxe — « SEXY »', source: 'https://www.deezer.com/album/658781171', sourceLabel: 'Deezer' },
  { artist: 'O\'Kenneth, Kwaku DMC, Beeztrap KOTM, Reggie', proj: 'JEUNE & RICHE Deluxe — « GANJAMAN »', source: 'https://www.deezer.com/album/658781171', sourceLabel: 'Deezer' },
];

export const FEATS_RUMORS = [
  { artist: 'Burna Boy', desc: 'Teasers studio partagés par des comptes fans. Rien d\'annoncé officiellement.' },
  { artist: 'Booba', desc: 'Échanges publics sur X entre les deux artistes. Aucun communiqué.' },
  { artist: 'Central Cee', desc: 'Aperçus dans un même studio à Londres selon des fans. Non confirmé.' },
  { artist: 'Rema', desc: 'Un remix afrobeats évoqué par des sources proches du label. À confirmer.' },
];

// ---------- Certifications (barème APRODEMCI) ----------
export const BAREME = {
  or: 'Or = 10 000 CD ou 8 millions de streams payants',
  platine: 'Platine = 20 000 CD ou 16 millions de streams payants',
  organisme: 'APRODEMCI — barème officiel ivoirien',
};

export const CERTIFICATIONS = [
  {
    type: 'or', typeLabel: "Disque d'Or", title: 'JEUNE & RICHE', year: '2024',
    detail: "Or en ~6 mois — record de rapidité en Côte d'Ivoire.",
    confirmed: true, source: LINKS.connectionIvoirienne, sourceLabel: 'Presse ivoirienne',
    cover: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
  },
  {
    type: 'platine', typeLabel: 'Disque de Platine', title: 'JEUNE & RICHE', year: '2025',
    detail: 'Certification platine après l\'or.',
    confirmed: true, source: LINKS.connectionIvoirienne, sourceLabel: 'Presse ivoirienne',
    cover: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
  },
  {
    type: 'or', typeLabel: "Disque d'Or", title: '1X (mixtape)', year: 'avril 2025',
    detail: 'La mixtape du mouvement certifiée or.',
    confirmed: true, source: LINKS.connectionIvoirienne, sourceLabel: 'Presse ivoirienne',
    cover: DZ_COVER('18a5b84606f0a266e8f5477ca6700327'),
  },
  {
    type: 'or', typeLabel: "Single d'Or (SNEP)", title: '« Number One » avec Minz', year: 'janv. 2026',
    detail: '~15 millions de streams en France.',
    confirmed: true, source: 'https://snepmusique.com/les-certifications/', sourceLabel: 'SNEP',
    cover: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
  },
  {
    type: 'diamant', typeLabel: 'Double platine / Diamant', title: 'JEUNE & RICHE', year: '—',
    detail: 'Évoqués par certaines sources (APRODEMCI).',
    confirmed: false, source: LINKS.connectionIvoirienne, sourceLabel: 'À confirmer',
    cover: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
  },
];

export const TROPHIES = [
  { name: 'African Talent Awards ×3', year: '2024', cat: 'Meilleur Album Francophone (Jeune & Riche) · Meilleur Artiste Francophone · Black Trophy', confirmed: true, source: LINKS.connectionIvoirienne, sourceLabel: 'Presse ivoirienne' },
  { name: 'Les Flammes', year: '26 avril 2026', cat: 'Premier artiste africain à remporter la Flamme du morceau de musiques africaines', confirmed: true, source: 'https://lesflammes.fr', sourceLabel: 'Les Flammes' },
  { name: 'Trace Awards', year: '2024', cat: 'Révélation de l\'année', confirmed: true, source: LINKS.connectionIvoirienne, sourceLabel: 'Presse' },
  { name: 'Kundé d\'Or', year: '2025', cat: 'Meilleur artiste ouest-africain', confirmed: true, source: LINKS.connectionIvoirienne, sourceLabel: 'Presse' },
  { name: 'Headies Awards (Nigeria)', year: '—', cat: 'Distinction', confirmed: false, source: LINKS.connectionIvoirienne, sourceLabel: 'À confirmer' },
];

// ---------- Agenda concerts ----------
export const CONCERTS = [
  { date: '26 DÉC 2024', city: 'Abidjan', venue: 'Parc des Expositions', country: 'CI', past: true, source: LINKS.connectionIvoirienne },
  { date: '15 FÉV 2025', city: 'Yopougon', venue: 'Stade de la BAE', country: 'CI', past: true, source: LINKS.abidjanNetBae },
  { date: '01 OCT 2025', city: 'Paris', venue: 'Cabaret Sauvage — complet en 10 jours', country: 'FR', past: true, source: LINKS.ticketliveMadeleine },
  { date: '28 JAN 2026', city: 'Paris', venue: 'Zénith Paris – La Villette « NOUVEAU BOSS »', country: 'FR', past: true, source: LINKS.sortirAParis },
  { date: '21 JUIN 2026', city: 'New York', venue: 'Gramercy Theatre', country: 'US', past: true, source: LINKS.tikerama },
  { date: '28 JUIN 2026', city: 'Washington', venue: 'Union Stage', country: 'US', past: true, source: LINKS.tikerama },
  { date: 'JUIL 2026', city: 'Dour', venue: 'Dour Festival', country: 'BE', past: true, source: 'https://www.dourfestival.eu' },
  { date: '17 SEPT 2026', city: 'Bruxelles', venue: 'La Madeleine', country: 'BE', past: true, source: LINKS.shangoMadeleine },
  { date: '18 SEPT 2026', city: 'Esch-sur-Alzette', venue: 'Rockhal Main Hall', country: 'LU', past: true, source: LINKS.concerts50Rockhal },
  { date: '26 DÉC 2026', city: 'Ébimpé', venue: 'Stade Olympique Alassane Ouattara — 14h · objectif 60 000', country: 'CI', past: false, source: LINKS.tikerama },
];

// ---------- Fallback flux vidéo (remplacé en direct par le RSS YouTube) ----------
// Vues relevées le 20/09/2026 (Return YouTube Dislike) — remplacées en direct par le flux RSS.
export const LATEST_VIDEOS_FALLBACK = [
  { id: VIDEOS.YOUPRN, title: 'HIMRA - YOUP*RN', published: '2026-09-16T23:45:00Z', views: 1019658, thumb: YTHQ(VIDEOS.YOUPRN), url: LINKS.youprn },
  { id: VIDEOS.BARA_BARA, title: 'HIMRA - BARA BARA (CLIP OFFICIEL)', published: '2026-05-15T00:00:00Z', views: 13606394, thumb: YTHQ(VIDEOS.BARA_BARA), url: LINKS.baraBara },
  { id: VIDEOS.YOUNG_RICH_PAPI, title: 'HIMRA - YOUNG RICH PAPI Feat LETO (Clip Officiel)', published: '2026-06-04T00:00:00Z', views: 6813918, thumb: YTHQ(VIDEOS.YOUNG_RICH_PAPI), url: LINKS.youngRichPapi },
  { id: VIDEOS.NOSTALGIE, title: 'HIMRA - NOSTALGIE (Clip Officiel)', published: '2026-03-16T00:00:00Z', views: 13065886, thumb: YTHQ(VIDEOS.NOSTALGIE), url: LINKS.nostalgie },
  { id: VIDEOS.LEGENDES, title: 'La Fouine & HIMRA - LÉGENDES (Clip Officiel)', published: '2025-09-27T00:00:00Z', views: 23689880, thumb: YTHQ(VIDEOS.LEGENDES), url: LINKS.legendes },
  { id: VIDEOS.NAIGAIDJAN, title: 'HIMRA - NAIGAIDJAN (OFFICIAL MUSIC VIDEO)', published: '2025-06-01T00:00:00Z', views: 1495940, thumb: YTHQ(VIDEOS.NAIGAIDJAN), url: LINKS.naigaidjan },
];

// ---------- Lexique nouchi ----------
export const NOUCHI = [
  { mot: 'Bara', def: 'Le travail, le taf. « Bara Bara » = travailler dur, sans relâche.' },
  { mot: 'Drap', def: 'Problème, embrouille. « Y\'a pas drap » = pas de souci.' },
  { mot: 'Môgô', def: 'Un gars, une personne, un ami proche.' },
  { mot: 'Gbê', def: 'La vérité. « C\'est gbê » = c\'est vrai.' },
  { mot: 'S\'enjailler', def: 'S\'amuser, profiter, mettre l\'ambiance.' },
  { mot: 'Enjaillement', def: 'L\'ambiance, la fête, la bonne énergie.' },
  { mot: 'Gaou', def: 'Naïf, celui qui se fait avoir.' },
  { mot: 'Go', def: 'Une fille, une copine.' },
  { mot: 'Kpata', def: 'Beau, joli, stylé.' },
  { mot: 'Zo', def: 'Bien habillé, élégant.' },
  { mot: 'Gbonhi', def: 'Le groupe, l\'équipe, le clan.' },
  { mot: 'Djossi', def: 'Petit boulot, débrouille.' },
  { mot: 'Yako', def: 'Courage, condoléances — mot de réconfort.' },
  { mot: 'Chete', def: 'Machette en nouchi — le nom des fans d\'Himra, d\'où l\'emblème du clan.' },
];

// ---------- Presse & médias ----------
export const PRESS = [
  { media: 'Bénin Web TV', title: '« Himra place YOUP*RN n°1 des tendances YouTube en France et au Canada »', date: '18 sept. 2026', url: LINKS.beninWebTv },
  { media: 'Shango Média', title: '« Himra à La Madeleine de Bruxelles — 9 titres dans le top 10 Apple Music CI »', date: '17 sept. 2026', url: LINKS.shangoMadeleine },
  { media: 'Hip Hop Corner', title: '« LÉGENDES de La Fouine et Himra dépasse les 8 millions de vues en un mois »', date: '30 oct. 2025', url: LINKS.hiphopcornerLegendes },
  { media: 'Le Monde Afrique', title: '« En Côte d\'Ivoire, le rappeur Himra parle à la rue, chante la galère et la hargne en nouchi hardcore »', date: '15 mars 2025', url: LINKS.leMonde },
  { media: 'Connection Ivoirienne', title: '« Le jeune rappeur ivoirien Himra touche le sommet mondial »', date: '28 déc. 2024', url: LINKS.connectionIvoirienne },
  { media: 'Afrique-sur7', title: '« Himra, l\'étoile montante de la drill ivoire qui bouscule les codes de la musique africaine »', date: '2024', url: LINKS.afriqueSur7 },
  { media: 'Critikmag', title: '« Qui est Himra, le rappeur qui fait sensation en Côte d\'Ivoire ? »', date: 'déc. 2024', url: LINKS.critikmag },
  { media: 'Abidjan.net', title: '« Himra annonce un concert au stade de la BAE de Yopougon »', date: 'fév. 2025', url: LINKS.abidjanNetBae },
  { media: 'Getty Images', title: 'Himra au Quai 54 Streetball Tournament, Paris', date: 'juil. 2025', url: LINKS.gettyQuai54 },
];

// ---------- Quiz fan ----------
export const QUIZ = [
  {
    q: 'Quel est le vrai nom d\'Himra ?',
    options: ['Bakayoko Abdul Rahim', 'Konaté Ibrahim', 'Traoré Moussa'],
    answer: 0,
  },
  {
    q: 'Comment s\'appelait son groupe de collège ?',
    options: ['MAJIN', 'SBS', 'Roserie'],
    answer: 1,
  },
  {
    q: 'Quel freestyle a été « le déclic » de sa carrière ?',
    options: ['Yorobo Drill Acte 3', 'Freestyle Drill Ivoire #7', 'Faya Flow'],
    answer: 0,
  },
  {
    q: 'En combien de temps JEUNE & RICHE est-il devenu disque d\'or ?',
    options: ['~2 ans', '~1 an', '~6 mois'],
    answer: 2,
  },
  {
    q: 'Que signifie « Chete », le nom des fans ?',
    options: ['Champion', 'Machette', 'Chef'],
    answer: 1,
  },
];

// ---------- Lifestyle : styles décryptés + garage ----------
// Styles : d'après l'article Pulse CI « Mode : 5 styles d'Himra Saiyen à décrypter » (22 juil. 2025).
// Prix : estimations boutiques publiques, jamais des chiffres confirmés par l'artiste.
export const LIFESTYLE_STYLES = [
  {
    title: 'Le « Nouveau Boss »',
    img: PHOTOS.zenithPoster.src,
    desc: "Manteau de fourrure grise, lunettes noires, diamants aux poignets : l'imagerie assumée de l'affiche du Zénith 2026. Le boss, version Drill Ivoire.",
    pieces: [
      { nom: 'Manteau de fourrure oversize', prix: '≈ 800 000 – 2 000 000 FCFA', confirme: false },
      { nom: 'Lunettes noires oversize', prix: '≈ 150 000 – 400 000 FCFA', confirme: false },
      { nom: 'Bracelets diamantés', prix: 'non communiqué', confirme: false },
    ],
    credit: PHOTOS.zenithPoster.credit,
    source: LINKS.sortirAParis,
    sourceLabel: 'Affiche officielle — Sortir à Paris',
    accent: '#8a8f98',
  },
  {
    title: 'Roi sur trône doré',
    img: PHOTOS.trone.src,
    desc: "Torse nu, silhouette sculptée, montre de luxe et chaînes visibles, sur un trône doré baigné de rouge : la séance photo la plus iconique de l'ère Saiyen. Pulse CI le résume : « torse nu et toujours charmant ».",
    pieces: [
      { nom: 'Montre de luxe (poignet gauche)', prix: 'non communiqué', confirme: false },
      { nom: 'Chaînes et pendentif « 1X »', prix: 'non communiqué', confirme: false },
      { nom: 'Bagues et bracelets', prix: 'non communiqué', confirme: false },
    ],
    credit: PHOTOS.trone.credit,
    source: LINKS.tcoprod,
    sourceLabel: 'TCO Prod — photo officielle',
    accent: '#d4a437',
  },
  {
    title: 'Streetwear 1X — la base',
    img: PHOTOS.signe1x.src,
    desc: "T-shirts oversize, bombers, jeans larges, cagoules, chaînes argentées XXL, casquettes fonctionnelles et le collier « 1X » — « une fois chette ». Le portrait stylistique dressé par Pulse CI.",
    pieces: [
      { nom: 'Collier « 1X » signature', prix: 'pièce unique — non communiqué', confirme: false },
      { nom: 'Chaînes argentées XXL', prix: '≈ 100 000 – 500 000 FCFA', confirme: false },
      { nom: 'Cagoule 1X', prix: 'merch du mouvement', confirme: false },
    ],
    credit: PHOTOS.signe1x.credit,
    source: LINKS.pulseStyles,
    sourceLabel: 'Pulse CI — 5 styles décryptés',
    accent: '#c8102e',
  },
  {
    title: 'Égérie « Ici c\'est Paris » (PSG)',
    img: PHOTOS.stage.src,
    desc: "En 2025, Himra devient l'une des égéries de la marque « Ici c'est Paris » du Paris Saint-Germain — le streetwear ivoirien qui s'affiche aux couleurs du club de la capitale (Hip Hop Corner).",
    pieces: [
      { nom: 'Collection « Ici c\'est Paris »', prix: 'collection PSG en boutique', confirme: true },
    ],
    credit: PHOTOS.stage.credit,
    source: LINKS.hiphopcornerPsg,
    sourceLabel: 'Hip Hop Corner',
    accent: '#1a3a6e',
  },
];

export const LIFESTYLE_CARS = [
  {
    nom: 'Lamborghini Urus',
    img: PHOTOS.urusIllustration.src,
    desc: "En mars 2025, Himra affiche sur Snapchat une Lamborghini Urus estimée par la presse people à près de 200 millions de FCFA, puis présente le reçu officiel d'achat pour faire taire les rumeurs. Il serait le premier rappeur ivoirien à en posséder une.",
    prix: '≈ 200 000 000 FCFA (estimation presse)',
    confirme: false,
    credit: PHOTOS.urusIllustration.credit,
    source: LINKS.rapKingTiktok,
    sourceLabel: 'Rap King (TikTok) — mars 2025',
  },
  {
    nom: 'Maison + deux voitures « en moins de 2 ans »',
    img: PHOTOS.parcExpo.src,
    desc: "En janvier 2025, des comptes spécialisés relaient des images où Himra montre sa maison et deux voitures acquises « en moins de deux ans avec l'argent du Rap Ivoire ». Modèles et montants non confirmés officiellement.",
    prix: 'montants non communiqués',
    confirme: false,
    credit: 'Images relayées par les comptes fans — non vérifiées indépendamment',
    source: LINKS.rapKingTiktok,
    sourceLabel: 'Rap King (TikTok) — janv. 2025',
  },
];

// ---------- Événement Ébimpé ----------
export const EBIMPE = {
  date: '2026-12-26T14:00:00+00:00',
  label: 'Stade Olympique Alassane Ouattara d\'Ébimpé',
  objectif: '60 000 personnes',
  heure: '14 h',
  billets: LINKS.tikerama,
};
