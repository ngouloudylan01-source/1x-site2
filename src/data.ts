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
  critikmag50: 'https://critikmag.com/himra-le-roi-du-rap-ivoirien-couronne-de-50-trophees-et-detenteur-inconteste-du-record-historique/',
  lavenirFlammes: 'https://www.lavenir.ci/people/14556-flammes-awards-himra-sadjuge-deux-succes-consecutifs',
  aipFlammes: 'https://www.aip.ci/353103/cote-divoire-aip-inter-himra-remporte-la-flamme-du-morceau-dinspiration-africaine-de-lannee/',
  abidjanNetParcExpo: 'https://news.abidjan.net/articles/738044/musique-himra-enflamme-le-parc-des-expositions-dabidjan-avec-son-concert-sauvage-2',
  cent100Culture: 'https://www.100pour100culture.com/musique/himra-au-zenith-le-rap-ivoirien-franchit-un-cap-a-paris/',
  gregoriEbimpe: 'https://gregori-international.com/realisations/stade-alassane-ouattara/',
  ivdGuardian: 'https://www.theguardian.com/music/2021/jan/01/im-not-wearing-tracksuits-im-sexy-ivorian-doll-drills-first-female-star',
  ivdGelee: 'https://www.geleeradio.com/ivorian-doll-hold-it-down-un-melange-dafro-pop-et-de-drill/',
  ivdPrs: 'https://www.prsformusic.com/m-magazine/features/interview-ivorian-doll',
  ivdInstagram: 'https://www.instagram.com/ivoriandoll',
  ivdSpotify: 'https://open.spotify.com/artist/44BOfF9jCbwqp6yZOwt2ZM',
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
  zenithLive: {
    src: '/media/zenith-live.jpg',
    credit: '100pour100culture — Himra sur la scène du Zénith de Paris (28 janv. 2026)',
    source: LINKS.cent100Culture,
  },
  parcExpoLive: {
    src: '/media/parc-expo-live.jpg',
    credit: 'Abidjan.net — Himra enflamme le Parc des Expositions (26 déc. 2024)',
    source: LINKS.abidjanNetParcExpo,
  },
  flammesTrophees: {
    src: '/media/flammes-trophees.jpg',
    credit: 'L\'Avenir CI — Himra et ses Flammes, deux succès consécutifs (avril 2026)',
    source: LINKS.lavenirFlammes,
  },
  flammesPerf: {
    src: '/media/flammes-perf.jpg',
    credit: 'AIP — Himra en performance aux Flammes (© Les Flammes / Spotify)',
    source: LINKS.aipFlammes,
  },
  himraIvd: {
    src: '/media/himra-ivd-flammes.jpg',
    credit: 'L\'Avenir CI — Himra et Ivorian Doll, arrivée aux Flammes Awards',
    source: 'https://www.lavenir.ci/people/14142-apres-une-grosse-performance-aux-flammes-awards-2025-himra-pre-nomme-dans-deux-categories-de-ledition-2026',
  },
  ivorianDoll: {
    src: '/media/ivorian-doll-hold-it-down.jpg',
    credit: 'Pochette officielle « Hold It Down » — Ivorian Doll (2025)',
    source: LINKS.ivdGelee,
  },
  stadeEbimpe: {
    src: '/media/stade-ebimpe.jpg',
    credit: 'Gregori International — Stade Olympique Alassane Ouattara d\'Ébimpé',
    source: LINKS.gregoriEbimpe,
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
    desc: "Certifié single d'or en France (~15 M de streams, janvier 2026). Aux Flammes (23 avril 2026), le titre remporte la Flamme du morceau de musiques africaines ou d'inspiration africaine.",
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
    img: PHOTOS.parcExpoLive.src,
    desc: "Le concert de l'année à Abidjan : 40 000 fans au Parc des Expositions, un record pour un rappeur local.",
    longDesc:
      "Le 26 décembre 2024, Himra remplit le Parc des Expositions d'Abidjan avec son « Concert Sauvage 2 » : 40 000 fans selon le bilan de Critikmag, un exploit inédit pour un rappeur local. Des dizaines de milliers de « Chete » réunis, cagoules 1X sur les têtes, doigts croisés levés vers le ciel. La presse ivoirienne parle d'une démonstration de force sans précédent pour le Drill Ivoire. C'est ce soir-là que le pays entier comprend que le mouvement 1X n'est plus un phénomène de niche — c'est une culture.",
    accent: '#e8452c',
    source: LINKS.abidjanNetParcExpo,
    sourceLabel: 'Abidjan.net',
    credit: PHOTOS.parcExpoLive.credit,
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
    img: PHOTOS.zenithLive.src,
    desc: "Premier Zénith, sous la bannière « NOUVEAU BOSS ». « Le rap ivoirien franchit un cap à Paris. »",
    longDesc:
      "Le 28 janvier 2026, Himra prend le Zénith Paris-La Villette (6 300 places) d'assaut avec un show unique baptisé « NOUVEAU BOSS ». Débardeur blanc, bonnet, lumières bleues : les images du live font le tour des réseaux. « Le rap ivoirien franchit un cap à Paris », titre 100pour100culture. C'est la consécration scénique européenne du Drill Ivoire — un rappeur d'Abidjan, en tête d'affiche d'une des salles mythiques du rap en France.",
    accent: '#4a7fd4',
    source: LINKS.cent100Culture,
    sourceLabel: '100pour100culture',
    credit: PHOTOS.zenithLive.credit,
    liveLink: LINKS.sortirAParis,
    liveLinkLabel: 'L\'affiche « NOUVEAU BOSS » — Sortir à Paris',
    outfit: 'Débardeur blanc, bonnet, chaînes — l\'énergie brute sous les lumières bleues du Zénith.',
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
    title: 'Les Flammes 2026 — la Flamme de « Number One »',
    date: '23 AVR. 2026',
    type: 'RÉCOMPENSE',
    img: PHOTOS.flammesTrophees.src,
    desc: "Flamme du morceau de musiques africaines pour « Number One » avec Minz — saluée par la ministre de la Culture.",
    longDesc:
      "Dans la nuit du 23 avril 2026 à Paris, Himra remporte la Flamme du morceau de musiques africaines ou d'inspiration africaine pour « Number One » avec Minz — single par ailleurs certifié or par le SNEP en janvier 2026 (~15 M de streams en France). Un an après sa performance remarquée à l'édition 2025 (mix de « Yorobo Drill Acte 3 » et « Banger »), le trophée arrive enfin. La ministre ivoirienne de la Culture, Françoise Remarck, le félicite publiquement : « Ton message pour la Côte d'Ivoire est touchant. » Il arrive sur le tapis rouge accompagné d'Ivorian Doll.",
    accent: '#caa24a',
    source: LINKS.lavenirFlammes,
    sourceLabel: 'L\'Avenir CI',
    credit: PHOTOS.flammesTrophees.credit,
    liveLink: LINKS.aipFlammes,
    liveLinkLabel: 'Le récit de la victoire — AIP',
    outfit: 'Bonnet blanc, lunettes fines, débardeur crème — les Flammes dorées en main.',
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
    img: PHOTOS.stadeEbimpe.src,
    desc: "Le concert événement : le stade olympique Alassane Ouattara, 14 h, objectif 60 000 personnes.",
    longDesc:
      "Le 26 décembre 2026 à 14 h, Himra vise le plus grand défi de sa carrière : remplir le Stade Olympique Alassane Ouattara d'Ébimpé — l'enceinte de la CAN 2023 — avec un objectif annoncé de 60 000 spectateurs. Deux ans jour pour jour après le Parc des Expositions. Si le pari est tenu, ce sera l'un des plus grands concerts jamais donnés par un rappeur ivoirien sur son sol. Billetterie officielle ouverte sur Tikerama.",
    accent: '#e8452c',
    source: LINKS.tikerama,
    sourceLabel: 'Billetterie officielle',
    credit: PHOTOS.stadeEbimpe.credit,
    liveLink: LINKS.tikerama,
    liveLinkLabel: 'Billetterie officielle — Tikerama',
    outfit: 'L\'enceinte de la CAN 2023 — 60 000 places à remplir.',
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

// (Les rumeurs de featurings ont été retirées du site : seules les
// collaborations confirmées par une source officielle sont affichées.)

// ---------- Certifications (barème APRODEMCI) ----------
export const BAREME = {
  or: 'Or = 10 000 CD ou 8 millions de streams payants',
  platine: 'Platine = 20 000 CD ou 16 millions de streams payants',
  organisme: 'APRODEMCI — barème officiel ivoirien',
};

// Liste complète — sources : Critikmag (bilan « 50 trophées », 30 nov. 2025),
// Wikipédia FR (2 sept. 2026) et SNEP. Premier artiste ivoirien certifié sur
// quatre projets différents, premier rappeur ivoirien disque de platine.
export const CERTIFICATIONS = [
  {
    type: 'diamant', typeLabel: 'Disque de Diamant (APRODEMCI)', title: 'JEUNE & RICHE (DELUXE)', year: '2025',
    detail: "Plus de 8 millions d'écoutes en moins d'un an — un record national de rapidité.",
    confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag / Wikipédia',
    cover: DZ_COVER('07b4c4289b251d46418a45841145b1ee'),
  },
  {
    type: 'platine', typeLabel: 'Double Disque de Platine (APRODEMCI)', title: 'JEUNE & RICHE (DELUXE)', year: '2025',
    detail: "4 millions d'écoutes — double platine six mois après la sortie.",
    confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag / Wikipédia',
    cover: DZ_COVER('07b4c4289b251d46418a45841145b1ee'),
  },
  {
    type: 'platine', typeLabel: 'Disque de Platine (APRODEMCI)', title: 'JEUNE & RICHE (DELUXE)', year: 'fév. 2025',
    detail: 'Premier rappeur ivoirien de l\'histoire à décrocher le platine (seuls Yodé & Siro l\'avaient fait avant lui).',
    confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag',
    cover: DZ_COVER('07b4c4289b251d46418a45841145b1ee'),
  },
  {
    type: 'or', typeLabel: "Disque d'Or (APRODEMCI)", title: 'JEUNE & RICHE', year: 'déc. 2024',
    detail: "Certifié or environ six mois après la sortie du 25 juillet 2024.",
    confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag / APRODEMCI',
    cover: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
  },
  {
    type: 'or', typeLabel: "Disque d'Or (APRODEMCI)", title: '1X (mixtape)', year: 'avril 2025',
    detail: 'La mixtape qui a baptisé le mouvement, certifiée or.',
    confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag',
    cover: DZ_COVER('18a5b84606f0a266e8f5477ca6700327'),
  },
  {
    type: 'or', typeLabel: "Disque d'Or (APRODEMCI)", title: 'IDK2', year: '2025',
    detail: 'Ivoire Drill King 2 rejoint le mur des certifications.',
    confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag',
    cover: DZ_COVER('f01c1d290356a4ac7b555875e1aa7f16'),
  },
  {
    type: 'or', typeLabel: "Disque d'Or (APRODEMCI)", title: 'BIG AKA 4 AKA KAI', year: '2025',
    detail: "L'EP surprise certifié or — 4ᵉ projet certifié, un record ivoirien.",
    confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag',
    cover: DZ_COVER('08356a72de523808b4abf3213fcf556d'),
  },
  {
    type: 'or', typeLabel: "Disque d'Or (AMC)", title: 'JEUNE & RICHE (DELUXE)', year: '2025',
    detail: 'Certification or délivrée par l\'African Music Chart.',
    confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag / AMC',
    cover: DZ_COVER('07b4c4289b251d46418a45841145b1ee'),
  },
  {
    type: 'platine', typeLabel: 'Disque de Platine (AMC)', title: 'JEUNE & RICHE (DELUXE)', year: '2025',
    detail: 'Certification platine délivrée par l\'African Music Chart.',
    confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag / AMC',
    cover: DZ_COVER('07b4c4289b251d46418a45841145b1ee'),
  },
  {
    type: 'or', typeLabel: "Single d'Or (SNEP)", title: '« Number One » avec Minz', year: 'janv. 2026',
    detail: '~15 millions de streams en France — certifié par le SNEP.',
    confirmed: true, source: 'https://snepmusique.com/les-certifications/', sourceLabel: 'SNEP',
    cover: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
  },
];

// 50 trophées en carrière (bilan Critikmag, 30 nov. 2025) — rappeur ivoirien le plus titré de l'histoire.
export const TROPHIES = [
  { name: 'Les Flammes 2026', year: '23 avril 2026', cat: 'Flamme du morceau de musiques africaines ou d\'inspiration africaine — « Number One » avec Minz', confirmed: true, source: LINKS.lavenirFlammes, sourceLabel: 'L\'Avenir CI / AIP' },
  { name: 'PRIMUD ×6', year: '2024–2025', cat: 'Meilleur Artiste Rap Ivoirien · Meilleur Rap Francophone · Meilleur Feat Urbain · Hit de l\'Année · PRIMUD d\'Or 2025', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Arawo Awards (Bénin) ×6', year: '2024–2025', cat: 'Six trophées remportés au Bénin', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Iconic Awards ×5', year: '2024', cat: 'Cinq trophées en une édition', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Jayli Awards ×4', year: '29 nov. 2025', cat: 'Meilleur Artiste Masculin Ivoirien · Meilleur Artiste d\'Afrique de l\'Ouest · Meilleure Chanson (« Banger ») — le cap des 50 trophées', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Galsen Awards (Sénégal) ×4', year: '2024–2025', cat: 'Quatre trophées au Sénégal', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Mic Musique Awards ×4', year: '2024', cat: 'Quatre trophées en une édition', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'African Talent Awards ×3', year: '2024', cat: 'Meilleur Album Francophone (Jeune & Riche) · Meilleur Artiste Francophone · Black Trophy', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'A.M.R ×2', year: '2024', cat: 'Deux trophées', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Kundé d\'Or', year: '2025', cat: 'Meilleur artiste de l\'Afrique de l\'Ouest', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'The Headies (Nigeria)', year: '2025', cat: 'Meilleur artiste d\'Afrique de l\'Ouest', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Trace Awards', year: '2024', cat: 'Best Newcomer — révélation de l\'année', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Pulse Award', year: '2024', cat: 'Lauréat', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Benin Showbiz Award', year: '2024', cat: 'Lauréat', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Hip-Hop Ivoire Trophy', year: '2022', cat: 'Lauréat', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
  { name: 'Abidjan Hip-Hop Award', year: '2019', cat: 'Son premier trophée — le coup d\'éclat des débuts', confirmed: true, source: LINKS.critikmag50, sourceLabel: 'Critikmag' },
];

// Bilan chiffré du palmarès (Critikmag, 30 nov. 2025)
export const PALMARES = {
  total: 50,
  certifications: 10,
  awards: 40,
  note: 'Rappeur ivoirien le plus titré de l\'histoire — 50 trophées au 29 novembre 2025 (Jayli Awards).',
  source: LINKS.critikmag50,
};

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
      { nom: 'Manteau de fourrure oversize', prix: 'pièce visible sur l\'affiche officielle', confirme: true },
      { nom: 'Lunettes noires oversize', prix: 'signature du look « boss »', confirme: true },
      { nom: 'Bijoux diamantés aux poignets', prix: 'visibles sur le visuel officiel', confirme: true },
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
      { nom: 'Montre de luxe (poignet gauche)', prix: 'visible sur la photo officielle', confirme: true },
      { nom: 'Chaînes et pendentif', prix: 'visibles sur la photo officielle', confirme: true },
      { nom: 'Bagues et bracelets', prix: 'visibles sur la photo officielle', confirme: true },
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
      { nom: 'Collier « 1X » signature — « une fois chette »', prix: 'décrit par Pulse CI', confirme: true },
      { nom: 'Chaînes argentées XXL', prix: 'décrites par Pulse CI', confirme: true },
      { nom: 'Cagoule 1X', prix: 'emblème du mouvement', confirme: true },
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
    desc: "En mars 2025, Himra présente publiquement le reçu officiel d'achat de sa Lamborghini Urus, après l'avoir dévoilée sur Snapchat. La presse people ivoirienne (Rap King) chiffre le modèle à près de 200 millions de FCFA et le décrit comme le premier rappeur ivoirien à en posséder une.",
    prix: '≈ 200 000 000 FCFA (chiffrage presse du modèle)',
    confirme: true,
    credit: PHOTOS.urusIllustration.credit,
    source: LINKS.rapKingTiktok,
    sourceLabel: 'Rap King (TikTok) — mars 2025, reçu d\'achat montré',
  },
];

// ---------- Ivorian Doll — la compagne d'Himra, « Queen of Drill » ----------
// Faits vérifiés : The Guardian (01/01/2021), PRS for Music, Gelée Radio (2025),
// presse ivoirienne (L'Avenir CI, tapis rouge des Flammes 2026).
export const IVORIAN_DOLL = {
  nom: 'Ivorian Doll',
  vraiNom: 'Vanessa Mahi',
  naissance: '1997 — née en Allemagne de parents ivoiriens, grandit à l\'est de Londres',
  titre: '« Queen of Drill » — première star féminine de la drill UK',
  photo: PHOTOS.ivorianDoll,
  photoCouple: PHOTOS.himraIvd,
  bio: [
    {
      txt: "Née Vanessa Mahi en 1997 en Allemagne, de parents originaires de Côte d'Ivoire, elle grandit à l'est de Londres à partir de ses trois ans. Avant la musique, elle est une youtubeuse populaire, connue pour ses « storytimes ».",
      source: 'https://www.theguardian.com/music/2021/jan/01/im-not-wearing-tracksuits-im-sexy-ivorian-doll-drills-first-female-star',
      sourceLabel: 'The Guardian',
    },
    {
      txt: "En 2020, son single « Rumours » explose (plus de 5 millions de vues YouTube) et lui vaut le titre de « Queen of Drill » : The Guardian la consacre première star féminine de la drill britannique.",
      source: 'https://www.theguardian.com/music/2021/jan/01/im-not-wearing-tracksuits-im-sexy-ivorian-doll-drills-first-female-star',
      sourceLabel: 'The Guardian',
    },
    {
      txt: "En 2024, elle rejoint l'univers 1X sur « SEXY », extrait de JEUNE & RICHE (DELUXE) — la connexion Abidjan-Londres est officielle sur tracklist.",
      source: 'https://www.deezer.com/album/658781171',
      sourceLabel: 'Deezer (tracklist officielle)',
    },
    {
      txt: "En 2025, elle sort « Hold It Down », mélange d'afro-pop et de drill qui assume ses racines ivoiriennes. La même année, elle apparaît publiquement aux côtés d'Himra ; le couple foule ensemble le tapis rouge des Flammes 2026 à Paris.",
      source: 'https://www.geleeradio.com/ivorian-doll-hold-it-down-un-melange-dafro-pop-et-de-drill/',
      sourceLabel: 'Gelée Radio / L\'Avenir CI',
    },
    {
      txt: "Début 2026, la presse people et les comptes spécialisés rapportent la naissance de leur fille et des apparitions du couple entre Londres et Paris. Le couple ne communique officiellement que par ses apparitions publiques.",
      source: 'https://www.lavenir.ci/people/14142-apres-une-grosse-performance-aux-flammes-awards-2025-himra-pre-nomme-dans-deux-categories-de-ledition-2026',
      sourceLabel: 'Presse people (apparitions publiques)',
    },
  ],
  liens: [
    { label: 'Instagram', url: LINKS.ivdInstagram },
    { label: 'Spotify', url: LINKS.ivdSpotify },
    { label: 'Le portrait du Guardian', url: LINKS.ivdGuardian },
    { label: 'Interview PRS for Music', url: LINKS.ivdPrs },
  ],
  featCommun: { titre: '« SEXY » — Himra feat. Ivorian Doll', album: 'JEUNE & RICHE (DELUXE), 2024', link: 'https://www.deezer.com/album/658781171' },
};

// ---------- Événement Ébimpé ----------
export const EBIMPE = {
  date: '2026-12-26T14:00:00+00:00',
  label: 'Stade Olympique Alassane Ouattara d\'Ébimpé',
  objectif: '60 000 personnes',
  heure: '14 h',
  billets: LINKS.tikerama,
};
