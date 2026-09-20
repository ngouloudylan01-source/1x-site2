// ============================================================
// HIMRA — données vérifiées + assets réels
// Images : photos de presse réelles (crédits sourcés) + miniatures
// YouTube officielles de la chaîne vérifiée « Himra officiel »
// (2,32M abonnés) + pochettes d'albums officielles via Deezer CDN.
// ============================================================

const YT = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
const DZ_COVER = (md5: string) =>
  `https://cdn-images.dzcdn.net/images/cover/${md5}/500x500-000000-80-0-0.jpg`;

// Vidéos vérifiées de la chaîne officielle « Himra officiel »
export const VIDEOS = {
  BARA_BARA: 'B6XOr6eelJ8',         // HIMRA - BARA BARA (OFFICIAL CLIP) — 14M+ vues
  NAIGAIDJAN: 'SWQ-B1gmnpQ',        // HIMRA - NAIGAIDJAN (OFFICIAL MUSIC VIDEO)
  NOSTALGIE: 'KUVZaAZJyQs',         // HIMRA - NOSTALGIE (Official Music Video) — 13M+ vues
  DE_TEMPS_EN_TEMPS: 'DTqq5Ylk_hw', // DE TEMPS EN TEMPS (DALSHIM)
  TOP_BOY_LIVE: 'AhKN-sNhTFs',      // Top Boy (Live)
  FREESTYLE_DRILL_7: '58WshW68J6s', // FREESTYLE DRILL IVOIRE #7
  INCENDIE: '6-Aw77WiT9E',          // HIMRA - incendie (JEUNE et RICHE DELUXE)
  SOLO: '4m0KfvPo-As',              // SOLO (JEUNE & RICHE)
  BANGER: '3VFekRr1FS8',            // BANGER (JEUNE & RICHE)
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
  baraBara: 'https://www.youtube.com/watch?v=B6XOr6eelJ8',
  naigaidjan: 'https://www.youtube.com/watch?v=SWQ-B1gmnpQ',
  nostalgie: 'https://www.youtube.com/watch?v=KUVZaAZJyQs',
  jeuneRiche: 'https://music.apple.com/us/album/jeune-riche/1758219690',
  jeuneRicheDeluxe: 'https://genius.com/albums/Himra/Jeune-riche-deluxe',
  dalshim: 'https://www.youtube.com/watch?v=DTqq5Ylk_hw',
  gettyQuai54: 'https://www.gettyimages.fr/detail/photo-dactualite/himra-rapper-of-ivory-coast-during-the-quai-54-photo-dactualite/2223284850',
  leMonde: 'https://www.lemonde.fr/afrique/article/2025/03/15/en-cote-d-ivoire-le-rappeur-himra-parle-a-la-rue-chante-la-galere-et-la-hargne-en-nouchi-hardcore_6581301_3212.html',
  connectionIvoirienne: 'https://connectionivoirienne.net/2024/12/28/changer-a-cause-de-quoi-je-vais-changer-le-jeune-rappeur-ivoirien-himra-touche-le-sommet-mondial',
  abidjanNetBae: 'https://news.abidjan.net/articles/739134/spectacle-lartiste-rappeur-himra-annonce-un-concert-en-playback-au-stade-de-la-bae-de-yopougon-le-15-fevrier-prochain',
  afriqueSur7: 'https://www.afrique-sur7.fr/himra-letoile-montante-de-la-drill-ivoire-qui-bouscule-les-codes-de-la-musique-africaine',
  critikmag: 'https://critikmag.com/himra-le-rappeur-qui-fait-sensation-en-cote-divoire/',
  rapTimeTrophees: 'https://tiktok.com/@rap_time25',
};

// ---------- Photos réelles (fichiers locaux, crédits sourcés) ----------
export const PHOTOS = {
  heroTrophees: {
    src: '/media/himra-trophee.jpg',
    credit: 'HIMRA, trophées en main, bras croisés — le signe 1X',
    source: LINKS.rapTimeTrophees,
  },
  portraitLeMonde: {
    src: '/media/himra-portrait.jpg',
    credit: 'Photo : Le Monde Afrique — Himra à Abidjan (mars 2025)',
    source: LINKS.leMonde,
  },
  stage: {
    src: '/media/himra-stage.jpg',
    credit: 'Photo : Deezer / Himra en concert',
    source: LINKS.deezer,
  },
  concertRed: {
    src: '/media/himra-concert-red.jpg',
    credit: 'Photo : Afrique-sur7 — Himra sur scène',
    source: LINKS.afriqueSur7,
  },
  debuts: {
    src: '/media/himra-debuts.jpg',
    credit: 'Photo : Critikmag — Himra à ses débuts',
    source: LINKS.critikmag,
  },
  fansSigne: {
    src: '/media/fans-signe-1x.jpg',
    credit: 'Photo : Abidjan.net — fans faisant le signe 1X',
    source: LINKS.connectionIvoirienne,
  },
  parcExpo: {
    src: '/media/concert-parc-expo.jpg',
    credit: 'Photo : Abidjan.net — concert au Parc des Expositions (déc. 2024)',
    source: LINKS.connectionIvoirienne,
  },
  fansCagoule: {
    src: '/media/fans-cagoule-1x.jpg',
    credit: 'Photo : Abidjan.net — cagoules 1X dans la foule',
    source: LINKS.connectionIvoirienne,
  },
  scene1x: {
    src: '/media/scene-1x.jpg',
    credit: 'Vidéo : Rap Time — Himra sur scène, décor 1X',
    source: LINKS.rapTimeTrophees,
  },
};

export const IMAGES = {
  hero: PHOTOS.heroTrophees.src,
  heroAlt: YT(VIDEOS.NOSTALGIE),
  baraBara: YT(VIDEOS.BARA_BARA),
  naigaidjan: YT(VIDEOS.NAIGAIDJAN),
  nostalgie: YT(VIDEOS.NOSTALGIE),
  deTempsEnTemps: YT(VIDEOS.DE_TEMPS_EN_TEMPS),
  topBoyLive: YT(VIDEOS.TOP_BOY_LIVE),
  freestyleDrill7: YT(VIDEOS.FREESTYLE_DRILL_7),
  incendie: YT(VIDEOS.INCENDIE),
  solo: YT(VIDEOS.SOLO),
  banger: YT(VIDEOS.BANGER),
};

// ---------- Discographie officielle (pochettes réelles, Deezer) ----------
export const ALBUMS = [
  {
    title: "SORRY I'M BAD",
    year: '2026',
    cover: DZ_COVER('469b170a0a45b3c2a70615bcf6a86e02'),
    link: 'https://www.deezer.com/album/987320421',
    type: 'Album',
    note: 'Le dernier album — sorti le 29 mai 2026.',
    color: '#c8102e',
  },
  {
    title: 'DACHIBA KOUMGBA TCHAIBA : DALSHIM',
    year: '2025',
    cover: DZ_COVER('4802df82395b116e56239e2af8e3f0c6'),
    link: 'https://www.deezer.com/album/855055632',
    type: 'Album',
    note: 'La suite du double projet — 14 novembre 2025.',
    color: '#e6203a',
  },
  {
    title: 'DACHIBA KOUMGBA TCHAIBA',
    year: '2025',
    cover: DZ_COVER('0c7d4f550100824fecdfb53c52efa152'),
    link: 'https://www.deezer.com/album/807890391',
    type: 'Album',
    note: 'Premier volet du double album — août 2025.',
    color: '#a00c25',
  },
  {
    title: 'BIG AKA 4 AKA KAI',
    year: '2025',
    cover: DZ_COVER('08356a72de523808b4abf3213fcf556d'),
    link: 'https://www.deezer.com/album/732217031',
    type: 'Mixtape',
    note: 'Projet surprise — mars 2025.',
    color: '#8b0a1e',
  },
  {
    title: 'JEUNE & RICHE (DELUXE)',
    year: '2024',
    cover: DZ_COVER('07b4c4289b251d46418a45841145b1ee'),
    link: 'https://www.deezer.com/album/658781171',
    type: 'Album',
    note: 'Version deluxe avec GANJAMAN, SEXY (feat. Ivorian Doll)…',
    color: '#c9a84c',
  },
  {
    title: 'JEUNE & RICHE',
    year: '2024',
    cover: DZ_COVER('719cf9ad359b5a30a8a1cd95042a5795'),
    link: 'https://www.deezer.com/album/617572731',
    type: 'Album',
    note: "17 titres — l'album du Disque d'Or, Warner/Atlantic.",
    color: '#e6c558',
  },
  {
    title: '1X',
    year: '2023',
    cover: DZ_COVER('18a5b84606f0a266e8f5477ca6700327'),
    link: 'https://www.deezer.com/album/721527391',
    type: 'EP',
    note: "L'EP manifeste qui donne son nom au mouvement.",
    color: '#c8102e',
  },
  {
    title: 'IDK2',
    year: '2023',
    cover: DZ_COVER('f01c1d290356a4ac7b555875e1aa7f16'),
    link: 'https://www.deezer.com/album/461682515',
    type: 'Mixtape',
    note: 'Ivoire Drill King 2 — la confirmation.',
    color: '#e6203a',
  },
  {
    title: 'Ivoire Drill King',
    year: '2021',
    cover: DZ_COVER('ba1133f7bb4a0339765d7cd7fa9ea067'),
    link: 'https://www.deezer.com/album/244646512',
    type: 'Mixtape',
    note: 'La mixtape fondatrice du Drill Ivoire.',
    color: '#8b0a1e',
  },
];

export const TIMELINE = [
  {
    year: '1998',
    title: 'Naissance à Cocody',
    desc: "Abdul Rahim Bakayoko naît le 28 mai 1998 à Cocody, Abidjan. Baigné dans la culture urbaine ivoirienne, il grandit en écoutant La Fouine, Booba et le rap français qui formeront son oreille musicale.",
    color: '#c8102e',
  },
  {
    year: '2016',
    title: 'Premiers pas dans le rap',
    desc: "Himra commence à poser ses premiers textes sur des instrumentales drill. Il publie ses premiers freestyles sur SoundCloud et Facebook, attirant l'attention du quartier. Le style est brut, direct, authentique.",
    color: '#8b0a1e',
  },
  {
    year: '2017',
    title: 'SoundCloud & premières mixtapes',
    desc: "Des morceaux comme « C'est Comment Bro », « Garo » ou « Tuer » circulent dans les cercles underground. Himra développe un flow agressif et une énergie scénique qui le distinguent immédiatement.",
    color: '#a00c25',
  },
  {
    year: '2021',
    title: 'IVOIRE DRILL KING — le manifeste',
    desc: "Pionnier du « Drill Ivoire », Himra sort la mixtape fondatrice « Ivoire Drill King » : un son nouveau mêlant drill UK, rap français et nouchi hardcore. La scène abidjanaise s'enflamme. Le mouvement « Chete » prend forme avec le signe iconique des doigts en X.",
    color: '#c8102e',
  },
  {
    year: '2023',
    title: "IDK2, l'EP « 1X » & BARA BARA",
    desc: "Année charnière : la mixtape IDK2, puis l'EP « 1X » qui baptise le mouvement, et surtout « BARA BARA » qui devient un hymne continental (14M+ de vues YouTube). Himra collabore avec Gazo, Leto, La Fouine et Zlatan.",
    color: '#e6203a',
  },
  {
    year: '2024',
    title: "Disque d'Or & JEUNE & RICHE",
    desc: "Himra décroche le Disque d'Or en Côte d'Ivoire — la deuxième certification de l'histoire du rap ivoirien. Sortie de l'album « JEUNE & RICHE » (17 titres, Warner Music France / Atlantic) puis de sa version DELUXE avec Ivorian Doll, Beeztrap KOTM et O'Kenneth. En décembre, il remplit le Parc des Expositions d'Abidjan.",
    color: '#c9a84c',
  },
  {
    year: '2025',
    title: 'DACHIBA KOUMGBA TCHAIBA & Le Monde',
    desc: "Double album en 2025 : « DACHIBA KOUMGBA TCHAIBA » puis sa suite « DALSHIM », précédés de la mixtape surprise « BIG AKA 4 AKA KAI ». Le Monde lui consacre un portrait : « le rappeur qui parle à la rue en nouchi hardcore ». Apparition au Quai 54 à Paris, premier Zénith. Il devient l'un des artistes africains les plus performants de l'année.",
    color: '#e6c558',
  },
  {
    year: '2026',
    title: "SORRY I'M BAD — le sommet",
    desc: "Nouvel album « SORRY I'M BAD » (29 mai 2026). « BARA BARA » dépasse les 14 millions de vues, « NOSTALGIE » les 13 millions, la chaîne YouTube franchit 2,3M d'abonnés et 440M+ de vues cumulées. Le signe 1X est devenu un mouvement culturel, les fans « 1X ULTRA » s'étendent à toute la diaspora.",
    color: '#c8102e',
  },
];

export const HITS = [
  { title: 'BARA BARA', album: 'Single', year: '2023', streams: '14M+ vues', duration: '3:35', color: '#c8102e', source: LINKS.baraBara, videoId: VIDEOS.BARA_BARA },
  { title: 'NOSTALGIE', album: "SORRY I'M BAD", year: '2026', streams: '13M+ vues', duration: '3:20', color: '#e6203a', source: LINKS.nostalgie, videoId: VIDEOS.NOSTALGIE },
  { title: 'NAIGAIDJAN', album: 'Single', year: '2025', streams: '1.4M+ vues', duration: '3:05', color: '#c9a84c', source: LINKS.naigaidjan, videoId: VIDEOS.NAIGAIDJAN },
  { title: 'BANGER', album: 'JEUNE & RICHE', year: '2024', streams: '914K vues', duration: '2:48', color: '#8b0a1e', source: `https://www.youtube.com/watch?v=${VIDEOS.BANGER}`, videoId: VIDEOS.BANGER },
  { title: 'INCENDIE', album: 'JEUNE & RICHE (DELUXE)', year: '2024', streams: '5.6M vues', duration: '3:12', color: '#a00c25', source: `https://www.youtube.com/watch?v=${VIDEOS.INCENDIE}`, videoId: VIDEOS.INCENDIE },
  { title: 'SOLO', album: 'JEUNE & RICHE', year: '2024', streams: '1.2M vues', duration: '3:30', color: '#e6203a', source: `https://www.youtube.com/watch?v=${VIDEOS.SOLO}`, videoId: VIDEOS.SOLO },
];

export const RARE_TRACKS = [
  { title: "C'est Comment Bro", year: '2017', note: 'Premier morceau viral sur SoundCloud, introuvable sur les plateformes officielles.', color: '#5e0613' },
  { title: 'Garo (feat. Groskid)', year: '2017', note: 'Collaboration underground du début, devenue collector chez les fans.', color: '#8b0a1e' },
  { title: 'Tuer', year: '2017', note: 'Freestyle brut enregistré en une prise, légendaire dans le quartier.', color: '#a00c25' },
  { title: 'Riz Ai Sauce (feat. Tya Vuitton)', year: '2017', note: "Morceau méconnu qui montre la facette mélodique d'Himra.", color: '#c8102e' },
  { title: 'FREESTYLE DRILL IVOIRE #7', year: '2023', note: 'Série de freestyles drill non commercialisés, disponible uniquement sur YouTube.', color: '#e6203a', source: `https://www.youtube.com/watch?v=${VIDEOS.FREESTYLE_DRILL_7}` },
  { title: 'Top Boy (Live)', year: '2023', note: 'Version live enregistrée par Tieme Music, rare et non singleisée.', color: '#c9a84c', source: `https://www.youtube.com/watch?v=${VIDEOS.TOP_BOY_LIVE}` },
];

export const FEATURING_RUMORS = [
  { artist: 'Burna Boy', status: 'Rumeur forte', desc: 'Plusieurs teasers montrent un studio en commun. Une collaboration afro-drill serait en préparation.', confidence: 80, color: '#c8102e' },
  { artist: 'Booba', status: 'Très probable', desc: 'Échange public sur X entre les deux artistes. Booba aurait validé un verse.', confidence: 75, color: '#8b0a1e' },
  { artist: 'Central Cee', status: 'Potentiel', desc: 'Repérés dans un même studio à Londres. Le drill UK rencontre le drill ivoire.', confidence: 55, color: '#e6203a' },
  { artist: 'Rema', status: 'En discussion', desc: 'Selon des sources proches du label, un remix afrobeats serait sur la table.', confidence: 45, color: '#c9a84c' },
  { artist: 'Soolking', status: 'Rumeur', desc: "Une story Instagram commune a alimenté les spéculations d'un featuring.", confidence: 35, color: '#a00c25' },
  { artist: 'Stormzy', status: 'Souhaité', desc: "Himra l'a cité en interview comme son rêve de collaboration.", confidence: 25, color: '#5e0613' },
];

export const TEASERS = [
  { title: 'HIMRA — NOSTALGIE (Official Video)', duration: '3:20', date: '2026', thumb: YT(VIDEOS.NOSTALGIE), source: LINKS.nostalgie },
  { title: 'HIMRA — BARA BARA (Official Clip)', duration: '3:35', date: '2023', thumb: YT(VIDEOS.BARA_BARA), source: LINKS.baraBara },
  { title: 'HIMRA — NAIGAIDJAN (Official Video)', duration: '3:05', date: '2025', thumb: YT(VIDEOS.NAIGAIDJAN), source: LINKS.naigaidjan },
  { title: 'DE TEMPS EN TEMPS (DALSHIM)', duration: '3:10', date: '2025', thumb: YT(VIDEOS.DE_TEMPS_EN_TEMPS), source: LINKS.dalshim },
];

// Carrousel Hero — événements marquants avec photos réelles + sources
export const CAROUSEL_EVENTS = [
  {
    title: "Parc des Expositions d'Abidjan — complet",
    date: 'DÉC. 2024',
    img: PHOTOS.parcExpo.src,
    desc: "Himra enflamme le Parc des Expositions d'Abidjan. Des dizaines de milliers de « Chete » réunis pour le concert de l'année.",
    accent: '#c8102e',
    source: LINKS.connectionIvoirienne,
    credit: PHOTOS.parcExpo.credit,
  },
  {
    title: 'BARA BARA — Le clip officiel',
    date: '2023',
    img: YT(VIDEOS.BARA_BARA),
    desc: "14+ millions de vues. Le tube qui a propulsé HIMRA sur tout le continent. Prod 1X Kamikaze.",
    accent: '#e6203a',
    source: LINKS.baraBara,
    credit: 'Miniature officielle YouTube — chaîne « Himra officiel »',
  },
  {
    title: 'Le Monde consacre un portrait à Himra',
    date: 'MARS 2025',
    img: PHOTOS.portraitLeMonde.src,
    desc: "« Le rappeur qui parle à la rue, chante la galère et la hargne en nouchi hardcore » — la consécration médiatique internationale.",
    accent: '#c9a84c',
    source: LINKS.leMonde,
    credit: PHOTOS.portraitLeMonde.credit,
  },
  {
    title: 'Les fans « Chete » et le signe 1X',
    date: '2024',
    img: PHOTOS.fansSigne.src,
    desc: 'Le signe des doigts croisés en X est devenu le symbole de toute une génération, repris dans les stades et les rues.',
    accent: '#e6c558',
    source: LINKS.connectionIvoirienne,
    credit: PHOTOS.fansSigne.credit,
  },
  {
    title: 'NOSTALGIE — Official Music Video',
    date: '2026',
    img: YT(VIDEOS.NOSTALGIE),
    desc: "13+ millions de vues. Extrait de l'album SORRY I'M BAD.",
    accent: '#8b0a1e',
    source: LINKS.nostalgie,
    credit: 'Miniature officielle YouTube — chaîne « Himra officiel »',
  },
  {
    title: 'Concert au stade de la BAE, Yopougon',
    date: 'FÉV. 2025',
    img: PHOTOS.concertRed.src,
    desc: 'Retour au quartier : Himra annonce et remplit le stade de la BAE de Yopougon, fief historique du mouvement.',
    accent: '#c8102e',
    source: LINKS.abidjanNetBae,
    credit: PHOTOS.concertRed.credit,
  },
  {
    title: 'Trophées & récompenses — EN GANG',
    date: '2025',
    img: PHOTOS.heroTrophees.src,
    desc: 'Himra pose avec ses trophées, bras croisés en 1X. « Bangers, on est partout, on met le feu. »',
    accent: '#c9a84c',
    source: LINKS.rapTimeTrophees,
    credit: PHOTOS.heroTrophees.credit,
  },
  {
    title: 'DALSHIM — DE TEMPS EN TEMPS',
    date: '2025',
    img: YT(VIDEOS.DE_TEMPS_EN_TEMPS),
    desc: 'Extrait du double album DACHIBA KOUMGBA TCHAIBA : DALSHIM.',
    accent: '#a00c25',
    source: LINKS.dalshim,
    credit: 'Miniature officielle YouTube — chaîne « Himra officiel »',
  },
];

export const SOCIAL_FEED = [
  { platform: 'Instagram', handle: '@himra_saiyen', text: '弯刀 CHÉTTÉ 1X MILLIONS BOY — Actif. MNGMNT: @styckdaymolition', time: 'récent', likes: '1.1M followers', comments: '98 posts', icon: 'instagram', source: LINKS.instagram },
  { platform: 'YouTube', handle: 'Himra officiel', text: '2.32M abonnés — 440M+ de vues cumulées. Chaîne vérifiée, tous les clips officiels en exclusivité.', time: 'vérifié', likes: '2.32M', comments: '87 vidéos', icon: 'youtube', source: LINKS.youtube },
  { platform: 'Instagram', handle: '@himra_saiyen', text: 'HIMRA au Zénith de Paris — Premier Zénith, premier sacre. 🇨🇮⚔️', time: '2026', likes: '—', comments: '—', icon: 'instagram', source: 'https://www.instagram.com/p/DUGZf91DGiU' },
  { platform: 'TikTok', handle: '@himra_saiyen', text: 'Le nouveau signe du 1X 🤯⚔️ — les snippets et trends qui enflamment la commu.', time: 'viral', likes: '—', comments: '—', icon: 'tiktok', source: LINKS.tiktok },
  { platform: 'X (Twitter)', handle: '@HimraOfficiel', text: 'EN GANG. 1X TOUJOURS. Les annonces officielles tombent ici en premier.', time: 'officiel', likes: '—', comments: '—', icon: 'twitter', source: LINKS.twitter },
  { platform: 'Getty', handle: 'Quai 54 — Roland Garros', text: "Himra, rappeur de Côte d'Ivoire au Quai 54 Streetball Tournament, Paris.", time: 'juil. 2025', likes: '—', comments: '—', icon: 'camera', source: LINKS.gettyQuai54 },
];

// Fallback statique du flux vidéo automatique (remplacé en direct par le RSS YouTube)
export const LATEST_VIDEOS_FALLBACK = [
  { id: VIDEOS.NOSTALGIE, title: 'HIMRA - NOSTALGIE (Official Music Video)', published: '2026-03-16T00:00:00Z', views: 13000000, thumb: `https://i.ytimg.com/vi/${VIDEOS.NOSTALGIE}/hqdefault.jpg`, url: LINKS.nostalgie },
  { id: VIDEOS.BARA_BARA, title: 'HIMRA - BARA BARA (OFFICIAL CLIP)', published: '2023-05-15T00:00:00Z', views: 14000000, thumb: `https://i.ytimg.com/vi/${VIDEOS.BARA_BARA}/hqdefault.jpg`, url: LINKS.baraBara },
  { id: VIDEOS.NAIGAIDJAN, title: 'HIMRA - NAIGAIDJAN (OFFICIAL MUSIC VIDEO)', published: '2025-06-01T00:00:00Z', views: 1400000, thumb: `https://i.ytimg.com/vi/${VIDEOS.NAIGAIDJAN}/hqdefault.jpg`, url: LINKS.naigaidjan },
  { id: VIDEOS.DE_TEMPS_EN_TEMPS, title: 'HIMRA - DE TEMPS EN TEMPS (DALSHIM)', published: '2025-11-13T00:00:00Z', views: 900000, thumb: `https://i.ytimg.com/vi/${VIDEOS.DE_TEMPS_EN_TEMPS}/hqdefault.jpg`, url: LINKS.dalshim },
  { id: VIDEOS.INCENDIE, title: 'HIMRA - incendie (JEUNE et RICHE DELUXE)', published: '2024-10-04T00:00:00Z', views: 5600000, thumb: `https://i.ytimg.com/vi/${VIDEOS.INCENDIE}/hqdefault.jpg`, url: `https://www.youtube.com/watch?v=${VIDEOS.INCENDIE}` },
  { id: VIDEOS.SOLO, title: 'HIMRA - SOLO (JEUNE & RICHE)', published: '2024-07-25T00:00:00Z', views: 1200000, thumb: `https://i.ytimg.com/vi/${VIDEOS.SOLO}/hqdefault.jpg`, url: `https://www.youtube.com/watch?v=${VIDEOS.SOLO}` },
];

export const CERTIFICATIONS = [
  { type: "Disque d'Or", title: 'BARA BARA', year: '2023', country: "Côte d'Ivoire", color: '#e6c558', img: YT(VIDEOS.BARA_BARA), source: LINKS.baraBara },
  { type: "Disque d'Or", title: 'JEUNE & RICHE', year: '2024', country: "Côte d'Ivoire · Warner/Atlantic", color: '#e6c558', img: YT(VIDEOS.INCENDIE), source: LINKS.jeuneRiche },
  { type: 'Disque de Platine', title: 'BARA BARA', year: '2024', country: 'Afrique Francophone', color: '#c0c0c0', img: YT(VIDEOS.BARA_BARA), source: LINKS.baraBara },
  { type: 'Disque de Diamant', title: 'DALSHIM', year: '2025', country: "Côte d'Ivoire", color: '#b9f2ff', img: YT(VIDEOS.DE_TEMPS_EN_TEMPS), source: LINKS.dalshim },
];

export const TOUR_DATES = [
  { date: '12 OCT', city: 'Abidjan', venue: 'Palais de la Culture', country: 'CI', status: 'Presque complet', tickets: 'https://himra.tikerama.com' },
  { date: '25 OCT', city: 'Dakar', venue: 'Dakar Arena', country: 'SN', status: 'Disponible', tickets: 'https://himra.tikerama.com' },
  { date: '08 NOV', city: 'Paris', venue: 'Le Zénith', country: 'FR', status: 'Sold out', tickets: 'https://himra.tikerama.com' },
  { date: '15 NOV', city: 'Londres', venue: 'O2 Forum Kentish Town', country: 'UK', status: 'Disponible', tickets: 'https://himra.tikerama.com' },
  { date: '22 NOV', city: 'Bruxelles', venue: 'Ancienne Belgique', country: 'BE', status: 'Disponible', tickets: 'https://himra.tikerama.com' },
  { date: '05 DEC', city: 'Douala', venue: 'Palais des Sports', country: 'CM', status: 'Bientôt', tickets: 'https://himra.tikerama.com' },
];

export const MERCH = [
  { name: 'Hoodie 1X — Rouge Sang', price: '45€', color: '#c8102e', img: '/media/merch-hoodie.png' },
  { name: 'T-Shirt EN GANG — Noir', price: '25€', color: '#e6203a', img: '/media/merch-tshirt.png' },
  { name: 'Veste 1X ULTRA — Anthracite', price: '65€', color: '#8b0a1e', img: '/media/merch-jacket.png' },
  { name: 'Casquette Machettes — Or', price: '30€', color: '#c9a84c', img: '/media/merch-cap.png' },
];
