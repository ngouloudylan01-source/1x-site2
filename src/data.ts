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
  BARA_BARA: 'B6XOr6eelJ8',
  NAIGAIDJAN: 'SWQ-B1gmnpQ',
  NOSTALGIE: 'KUVZaAZJyQs',
  DE_TEMPS_EN_TEMPS: 'DTqq5Ylk_hw',
  TOP_BOY_LIVE: 'AhKN-sNhTFs',
  FREESTYLE_DRILL_7: '58WshW68J6s',
  INCENDIE: '6-Aw77WiT9E',
  SOLO: '4m0KfvPo-As',
  BANGER: '3VFekRr1FS8',
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
};

// ---------- Photos réelles créditées ----------
export const PHOTOS = {
  heroTrophees: {
    src: '/media/himra-trophee.jpg',
    credit: 'Rap Time — Himra, trophées en main, bras croisés en 1X',
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
    desc: "La mixtape 1X donne son nom au signe, au clan et à la communauté. « BARA BARA » devient un hymne continental (14M+ de vues).",
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

// ---------- Carrousel d'événements (couleur adaptée à chaque visuel) ----------
export const EVENTS = [
  {
    title: 'Parc des Expositions, Abidjan',
    date: '26 DÉC. 2024',
    type: 'CONCERT',
    img: PHOTOS.parcExpo.src,
    desc: "Le concert de l'année à Abidjan : le Parc des Expositions plein, des dizaines de milliers de Chete, une démonstration de force du Drill Ivoire.",
    accent: '#e8452c',
    source: LINKS.connectionIvoirienne,
    credit: PHOTOS.parcExpo.credit,
  },
  {
    title: 'BARA BARA — le clip aux 14M+ de vues',
    date: '2023',
    type: 'CLIP',
    img: YT(VIDEOS.BARA_BARA),
    desc: "L'hymne qui a fait passer Himra du quartier au continent. Prod 1X Kamikaze — le morceau signature du mouvement.",
    accent: '#c8102e',
    source: LINKS.baraBara,
    credit: 'Miniature officielle — chaîne YouTube « Himra officiel »',
  },
  {
    title: 'Le portrait du Monde Afrique',
    date: 'MARS 2025',
    type: 'MOMENT CLÉ',
    img: PHOTOS.portraitLeMonde.src,
    desc: "« Le rappeur qui parle à la rue, chante la galère et la hargne en nouchi hardcore. » La consécration médiatique internationale.",
    accent: '#c98a3d',
    source: LINKS.leMonde,
    credit: PHOTOS.portraitLeMonde.credit,
  },
  {
    title: 'JEUNE & RICHE — disque d\'or',
    date: '2024',
    type: 'RÉCOMPENSE',
    img: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
    desc: "Or en ~6 mois — record de rapidité en Côte d'Ivoire — puis platine. L'album qui a changé la dimension de sa carrière.",
    accent: '#d4a437',
    source: LINKS.connectionIvoirienne,
    credit: 'Pochette officielle — Deezer',
  },
  {
    title: 'Le signe 1X, adopté par tout un peuple',
    date: '2024',
    type: 'MOMENT CLÉ',
    img: PHOTOS.fansSigne.src,
    desc: "Les doigts croisés en X, repris dans les stades, les écoles, les rues. Un branding positif : « une énergie que je transmets à mes fans ».",
    accent: '#e07f4f',
    source: LINKS.connectionIvoirienne,
    credit: PHOTOS.fansSigne.credit,
  },
  {
    title: 'NOSTALGIE — Official Video',
    date: '2026',
    type: 'CLIP',
    img: YT(VIDEOS.NOSTALGIE),
    desc: "13M+ de vues. Extrait de SORRY I'M BAD, l'album chez Epic Records.",
    accent: '#a33b8f',
    source: LINKS.nostalgie,
    credit: 'Miniature officielle — chaîne YouTube « Himra officiel »',
  },
  {
    title: 'Stade de la BAE, Yopougon',
    date: 'FÉV. 2025',
    type: 'CONCERT',
    img: PHOTOS.concertRed.src,
    desc: "Retour au quartier : Himra remplit le stade de la BAE de Yopougon, fief historique du mouvement.",
    accent: '#d92332',
    source: LINKS.abidjanNetBae,
    credit: PHOTOS.concertRed.credit,
  },
  {
    title: 'Trophées en main — EN GANG',
    date: '2025',
    type: 'RÉCOMPENSE',
    img: PHOTOS.heroTrophees.src,
    desc: "Himra pose avec ses récompenses, bras croisés en 1X. African Talent Awards ×3, Trace Awards, Kundé d'Or…",
    accent: '#caa24a',
    source: LINKS.rapTime,
    credit: PHOTOS.heroTrophees.credit,
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
export const HITS = [
  { title: 'BARA BARA', album: '1X', year: '2023', streams: '14M+ vues YouTube', sourceLabel: 'YouTube (compteur public)', source: LINKS.baraBara, videoId: VIDEOS.BARA_BARA },
  { title: 'NOSTALGIE', album: "SORRY I'M BAD", year: '2026', streams: '13M+ vues YouTube', sourceLabel: 'YouTube (compteur public)', source: LINKS.nostalgie, videoId: VIDEOS.NOSTALGIE },
  { title: 'Number One (avec Minz)', album: 'JEUNE & RICHE', year: '2024', streams: 'Single d\'or SNEP · ~15M streams', sourceLabel: 'SNEP (janv. 2026)', source: 'https://snepmusique.com/les-certifications/', videoId: null },
  { title: 'INCENDIE', album: 'JEUNE & RICHE (DELUXE)', year: '2024', streams: '5,6M vues YouTube', sourceLabel: 'YouTube (compteur public)', source: `https://www.youtube.com/watch?v=${VIDEOS.INCENDIE}`, videoId: VIDEOS.INCENDIE },
  { title: 'Pti Déj (avec Hache-P)', album: 'Single', year: '2022', streams: 'Le single de la percée', sourceLabel: 'Genius', source: LINKS.genius, videoId: null },
  { title: 'NAIGAIDJAN', album: 'Single', year: '2025', streams: '1,4M+ vues YouTube', sourceLabel: 'YouTube (compteur public)', source: LINKS.naigaidjan, videoId: VIDEOS.NAIGAIDJAN },
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
  { date: '01 OCT 2025', city: 'Paris', venue: 'Cabaret Sauvage', country: 'FR', past: true, source: LINKS.tikerama },
  { date: '28 JAN 2026', city: 'Paris', venue: 'Zénith Paris – La Villette', country: 'FR', past: true, source: LINKS.instagram },
  { date: '21 JUIN 2026', city: 'New York', venue: 'Gramercy Theatre', country: 'US', past: true, source: LINKS.tikerama },
  { date: '28 JUIN 2026', city: 'Washington', venue: 'Union Stage', country: 'US', past: true, source: LINKS.tikerama },
  { date: 'JUIL 2026', city: 'Dour', venue: 'Dour Festival', country: 'BE', past: true, source: 'https://www.dourfestival.eu' },
  { date: '2026', city: 'Luxembourg', venue: 'Rockhal', country: 'LU', past: true, source: 'https://www.rockhal.lu' },
  { date: '26 DÉC 2026', city: 'Ébimpé', venue: 'Stade Olympique Alassane Ouattara — 14h · objectif 60 000', country: 'CI', past: false, source: LINKS.tikerama },
];

// ---------- Fallback flux vidéo (remplacé en direct par le RSS YouTube) ----------
export const LATEST_VIDEOS_FALLBACK = [
  { id: VIDEOS.NOSTALGIE, title: 'HIMRA - NOSTALGIE (Official Music Video)', published: '2026-03-16T00:00:00Z', views: 13000000, thumb: YTHQ(VIDEOS.NOSTALGIE), url: LINKS.nostalgie },
  { id: VIDEOS.BARA_BARA, title: 'HIMRA - BARA BARA (OFFICIAL CLIP)', published: '2023-05-15T00:00:00Z', views: 14000000, thumb: YTHQ(VIDEOS.BARA_BARA), url: LINKS.baraBara },
  { id: VIDEOS.NAIGAIDJAN, title: 'HIMRA - NAIGAIDJAN (OFFICIAL MUSIC VIDEO)', published: '2025-06-01T00:00:00Z', views: 1400000, thumb: YTHQ(VIDEOS.NAIGAIDJAN), url: LINKS.naigaidjan },
  { id: VIDEOS.DE_TEMPS_EN_TEMPS, title: 'HIMRA - DE TEMPS EN TEMPS (DALSHIM)', published: '2025-11-13T00:00:00Z', views: 900000, thumb: YTHQ(VIDEOS.DE_TEMPS_EN_TEMPS), url: LINKS.dalshim },
  { id: VIDEOS.INCENDIE, title: 'HIMRA - incendie (JEUNE et RICHE DELUXE)', published: '2024-10-04T00:00:00Z', views: 5600000, thumb: YTHQ(VIDEOS.INCENDIE), url: `https://www.youtube.com/watch?v=${VIDEOS.INCENDIE}` },
  { id: VIDEOS.SOLO, title: 'HIMRA - SOLO (JEUNE & RICHE)', published: '2024-07-25T00:00:00Z', views: 1200000, thumb: YTHQ(VIDEOS.SOLO), url: `https://www.youtube.com/watch?v=${VIDEOS.SOLO}` },
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

// ---------- Événement Ébimpé ----------
export const EBIMPE = {
  date: '2026-12-26T14:00:00+00:00',
  label: 'Stade Olympique Alassane Ouattara d\'Ébimpé',
  objectif: '60 000 personnes',
  heure: '14 h',
  billets: LINKS.tikerama,
};
