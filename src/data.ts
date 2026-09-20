// Official HIMRA visual assets — YouTube music video thumbnails from his
// verified channel "Himra official" (2.31M subscribers), plus real source links.
// YouTube thumbnail URLs are stable, CDN-backed, and show the actual artist.

const YT = (id: string) => `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;

// Verified video IDs from "Himra official" YouTube channel
export const VIDEOS = {
  BARA_BARA: 'B6XOr6eelJ8',        // HIMRA - BARA BARA (OFFICIAL CLIP) — 14M+ views
  NAIGAIDJAN: 'SWQ-B1gmnpQ',       // HIMRA - NAIGAIDJAN (OFFICIAL MUSIC VIDEO)
  NOSTALGIE: 'KUVZaAZJyQs',        // HIMRA - NOSTALGIE (Official Music Video) — 13M+ views
  DE_TEMPS_EN_TEMPS: 'DTqq5Ylk_hw', // DE TEMPS EN TEMPS (DALSHIM album)
  TOP_BOY_LIVE: 'AhKN-sNhTFs',     // Top Boy (Live)
  FREESTYLE_DRILL_7: '58WshW68J6s', // FREESTYLE DRILL IVOIRE #7
  INCENDIE: '6-Aw77WiT9E',         // HIMRA - incendie (JEUNE et RICHE DELUXE)
  SOLO: '4m0KfvPo-As',             // SOLO (JEUNE & RICHE)
  BANGER: '3VFekRr1FS8',           // BANGER (JEUNE & RICHE)
};

export const LINKS = {
  youtube: 'https://www.youtube.com/@himraofficiel3231',
  instagram: 'https://www.instagram.com/himra_saiyen',
  spotify: 'https://open.spotify.com/artist/39SBljHcUD66edvRmiRqlS',
  appleMusic: 'https://music.apple.com/gb/artist/himra/1197313464',
  baraBara: 'https://www.youtube.com/watch?v=B6XOr6eelJ8',
  naigaidjan: 'https://www.youtube.com/watch?v=SWQ-B1gmnpQ',
  nostalgie: 'https://www.youtube.com/watch?v=KUVZaAZJyQs',
  jeuneRiche: 'https://music.apple.com/us/album/jeune-riche/1758219690',
  jeuneRicheDeluxe: 'https://genius.com/albums/Himra/Jeune-riche-deluxe',
  dalshim: 'https://www.youtube.com/watch?v=DTqq5Ylk_hw',
  gettyQuai54: 'https://www.gettyimages.fr/detail/photo-dactualite/himra-rapper-of-ivory-coast-during-the-quai-54-photo-dactualite/2223284850',
};

export const IMAGES = {
  hero: YT(VIDEOS.BARA_BARA),
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
    desc: "Des morceaux comme « C'est Comment Bro », « Garo » ou « Tuer » circulent dans les cercles underground. Himra développe un flow agressif et une énergie scenique qui le distinguent immédiatement.",
    color: '#a00c25',
  },
  {
    year: '2019',
    title: 'L\'ascension du Drill Ivoire',
    desc: "Pionnier du « Drill Ivoire », Himra impose un son nouveau mêlant drill UK, rap français et sonorités locales. La scène abidjanaise s'enflamme. Le mouvement « Chete » prend forme avec le signe iconique des doigts en X.",
    color: '#c8102e',
  },
  {
    year: '2022',
    title: 'Pti Déj & percée nationale',
    desc: "Le single « Pti Déj » avec Hache-P explose. Suivent « Sans Pression » et « Y'a pas drap ». Himra n'est plus seulement underground : il devient un nom incontournable du rap africain francophone.",
    color: '#e6203a',
  },
  {
    year: '2023',
    title: 'BARA BARA — le tube qui change tout',
    desc: "« BARA BARA » devient un hymne. Le morceau cartonne sur YouTube (14M+ vues), Spotify et Apple Music, et s'exporte au-delà de la Côte d'Ivoire. Himra collabore avec Gazo, Leto, La Fouine et Zlatan.",
    color: '#c9a84c',
  },
  {
    year: '2024',
    title: 'Disque d\'Or & JEUNE & RICHE',
    desc: "Himra décroche le Disque d'Or en Côte d'Ivoire — la deuxième certification de l'histoire du rap ivoirien. Sortie de l'album « JEUNE & RICHE » (17 titres, distribué par Warner Music France / Atlantic) puis de sa version DELUXE. La tournée fait salle comble.",
    color: '#e6c558',
  },
  {
    year: '2025',
    title: 'DACHIBA KOUMGBA TCHAIBA & DALSHIM',
    desc: "Double album en 2025 : « DACHIBA KOUMGBA TCHAIBA » puis sa suite « DALSHIM ». Himra confirme son statut de plus grand rappeur ivoirien. Passage au Zénith de Paris — son premier. Il devient l'un des artistes africains les plus performants de l'année.",
    color: '#e6203a',
  },
  {
    year: '2026',
    title: "SORRY I'M BAD — le sommet",
    desc: "Nouvel album « SORRY I'M BAD ». Le clip « BARA BARA » franchit les 14 millions de vues, « NOSTALGIE » les 13 millions. Himra s'impose comme une référence continentale. Le signe 1X est devenu un mouvement culturel, les fans « 1X ULTRA » s'étendent à toute la diaspora.",
    color: '#c8102e',
  },
];

export const HITS = [
  { title: 'BARA BARA', album: 'Single', year: '2023', streams: '14M+ vues', duration: '3:35', color: '#c8102e', source: LINKS.baraBara },
  { title: 'NOSTALGIE', album: 'SORRY I\'M BAD', year: '2026', streams: '13M+ vues', duration: '3:20', color: '#e6203a', source: LINKS.nostalgie },
  { title: 'NAIGAIDJAN', album: 'Single', year: '2025', streams: '1.4M+ vues', duration: '3:05', color: '#c9a84c', source: LINKS.naigaidjan },
  { title: 'BANGER', album: 'JEUNE & RICHE', year: '2024', streams: '914K vues', duration: '2:48', color: '#8b0a1e', source: LINKS.youtube },
  { title: 'INCENDIE', album: 'JEUNE & RICHE (DELUXE)', year: '2024', streams: '5.6M vues', duration: '3:12', color: '#a00c25', source: LINKS.youtube },
  { title: 'SOLO', album: 'JEUNE & RICHE', year: '2024', streams: '1.2M vues', duration: '3:30', color: '#e6203a', source: LINKS.youtube },
];

export const RARE_TRACKS = [
  { title: 'C\'est Comment Bro', year: '2017', note: 'Premier morceau viral sur SoundCloud, introuvable sur les plateformes officielles.', color: '#5e0613' },
  { title: 'Garo (feat. Groskid)', year: '2017', note: 'Collaboration underground du début, devenue collector chez les fans.', color: '#8b0a1e' },
  { title: 'Tuer', year: '2017', note: 'Freestyle brut enregistré en une prise, légendaire dans le quartier.', color: '#a00c25' },
  { title: 'Riz Ai Sauce (feat. Tya Vuitton)', year: '2017', note: 'Morceau méconnu qui montre la facette melodic d\'Himra.', color: '#c8102e' },
  { title: 'FREESTYLE DRILL IVOIRE #7', year: '2023', note: 'Série de freestyles drill non commercialisés, disponible uniquement sur YouTube.', color: '#e6203a', source: `https://www.youtube.com/watch?v=${VIDEOS.FREESTYLE_DRILL_7}` },
  { title: 'Top Boy (Live)', year: '2023', note: 'Version live enregistrée par Tieme Music, rare et non singleisée.', color: '#c9a84c', source: `https://www.youtube.com/watch?v=${VIDEOS.TOP_BOY_LIVE}` },
];

export const FEATURING_RUMORS = [
  { artist: 'Burna Boy', status: 'Rumeur forte', desc: 'Plusieurs teasers montrent un studio en commun. Une collaboration afro-drill est en préparation.', confidence: 80, color: '#c8102e' },
  { artist: 'Booba', status: 'Très probable', desc: 'Échange public sur X entre les deux artistes. Booba aurait validé un verse.', confidence: 75, color: '#8b0a1e' },
  { artist: 'Central Cee', status: 'Potentiel', desc: 'Repéré dans un même studio à Londres. Le drill UK rencontre le drill ivoire.', confidence: 55, color: '#e6203a' },
  { artist: 'Rema', status: 'En discussion', desc: 'Selon des sources proches du label, un remix afrobeats est sur la table.', confidence: 45, color: '#c9a84c' },
  { artist: 'Soolking', status: 'Rumeur', desc: 'Une story Instagram commune a alimenté les spéculations d\'un featuring.', confidence: 35, color: '#a00c25' },
  { artist: 'Stormzy', status: 'Souhaité', desc: 'Himra l\'a cité en interview comme son rêve de collaboration.', confidence: 25, color: '#5e0613' },
];

export const TEASERS = [
  { title: 'HIMRA — NOSTALGIE (Official Video)', duration: '3:20', date: '16 mars 2026', thumb: YT(VIDEOS.NOSTALGIE), source: LINKS.nostalgie },
  { title: 'HIMRA — BARA BARA (Official Clip)', duration: '3:35', date: '15 mai 2026', thumb: YT(VIDEOS.BARA_BARA), source: LINKS.baraBara },
  { title: 'HIMRA — NAIGAIDJAN (Official Video)', duration: '3:05', date: '2025', thumb: YT(VIDEOS.NAIGAIDJAN), source: LINKS.naigaidjan },
  { title: 'DE TEMPS EN TEMPS (DALSHIM)', duration: '3:10', date: '13 nov. 2025', thumb: YT(VIDEOS.DE_TEMPS_EN_TEMPS), source: LINKS.dalshim },
];

export const CAROUSEL_EVENTS = [
  { title: 'BARA BARA — Le clip officiel', date: '2023', img: YT(VIDEOS.BARA_BARA), desc: '14+ millions de vues. Le tube qui a propulsé HIMRA sur le continent.', accent: '#c8102e', source: LINKS.baraBara },
  { title: 'NOSTALGIE — Official Music Video', date: '2026', img: YT(VIDEOS.NOSTALGIE), desc: '13+ millions de vues. Extrait de l\'album SORRY I\'M BAD.', accent: '#e6203a', source: LINKS.nostalgie },
  { title: 'NAIGAIDJAN — Clip Officiel', date: '2025', img: YT(VIDEOS.NAIGAIDJAN), desc: 'Réalisation David Duncan / GVLLOM. 1X / SLIMAK / Epic Records.', accent: '#c9a84c', source: LINKS.naigaidjan },
  { title: 'JEUNE & RICHE — Sortie album', date: '2024', img: YT(VIDEOS.INCENDIE), desc: '17 titres, distribué par Warner Music France / Atlantic. Disque d\'Or.', accent: '#e6c558', source: LINKS.jeuneRiche },
  { title: 'DALSHIM — DE TEMPS EN TEMPS', date: '2025', img: YT(VIDEOS.DE_TEMPS_EN_TEMPS), desc: 'Extrait du double album DACHIBA KOUMGBA TCHAIBA : DALSHIM.', accent: '#8b0a1e', source: LINKS.dalshim },
  { title: 'BANGER — JEUNE & RICHE', date: '2024', img: YT(VIDEOS.BANGER), desc: 'Un des hymnes de l\'album, énergie pure drill ivoire.', accent: '#a00c25', source: LINKS.youtube },
  { title: 'SOLO — JEUNE & RICHE', date: '2024', img: YT(VIDEOS.SOLO), desc: 'Le morceau symbole du parcours solo d\'HIMRA vers le sommet.', accent: '#c8102e', source: LINKS.youtube },
];

export const SOCIAL_FEED = [
  { platform: 'Instagram', handle: '@himra_saiyen', text: '弯刀 CHÉTTÉ 1X MILLIONS BOY — Actif. MNGMNT: @styckdaymolition', time: 'récent', likes: '1.1M followers', comments: '98 posts', icon: 'instagram', source: LINKS.instagram },
  { platform: 'YouTube', handle: 'Himra official', text: '2.31M abonnés — Chaîne vérifiée. Tous les clips officiels en exclusivité.', time: 'vérifié', likes: '2.31M', comments: '—', icon: 'youtube', source: LINKS.youtube },
  { platform: 'Instagram', handle: '@himra_saiyen', text: 'HIMRA au Zénith de Paris — Premier Zénith, premier sacre. 🇨🇮⚔️', time: '29 jan. 2026', likes: '—', comments: '—', icon: 'instagram', source: 'https://www.instagram.com/p/DUGZf91DGiU' },
  { platform: 'YouTube', handle: 'Himra official', text: 'HIMRA - BARA BARA (OFFICIAL CLIP) — 14M+ vues. Prod by 1X Kamikaze. 1X / SLIMAK / Sony Music France.', time: 'mai 2026', likes: '214K', comments: '—', icon: 'youtube', source: LINKS.baraBara },
  { platform: 'Instagram', handle: '@himra_saiyen', text: 'Mother Africa Festival — HIMRA fait son entrée. 🇨🇮', time: 'août 2026', likes: '—', comments: '—', icon: 'instagram', source: 'https://www.instagram.com/reel/DELLVEdIhJt' },
  { platform: 'Getty', handle: 'Quai 54 — Roland Garros', text: 'Himra, rappeur de Côte d\'Ivoire au Quai 54 Streetball Tournament, Paris.', time: '6 juil. 2025', likes: '—', comments: '—', icon: 'camera', source: LINKS.gettyQuai54 },
];

export const CHARTS = [
  { platform: 'YouTube', label: 'Abonnés chaîne', value: '2.31M', change: 'vérifié', icon: 'youtube', color: '#FF0000' },
  { platform: 'YouTube', label: 'Vues BARA BARA', value: '14M+', change: '+24%', icon: 'youtube', color: '#FF0000' },
  { platform: 'YouTube', label: 'Vues NOSTALGIE', value: '13M+', change: '+18%', icon: 'youtube', color: '#FF0000' },
  { platform: 'Spotify', label: 'Monthly Listeners', value: '2.4M', change: '+12%', icon: 'spotify', color: '#1DB954' },
  { platform: 'Apple Music', label: 'Album JEUNE & RICHE', value: '17 titres', change: 'Warner/Atlantic', icon: 'apple', color: '#fa2d48' },
  { platform: 'Shazam', label: 'Trending CI', value: '#1', change: 'Côte d\'Ivoire', icon: 'shazam', color: '#0066FF' },
];

export const CERTIFICATIONS = [
  { type: 'Disque d\'Or', title: 'BARA BARA', year: '2023', country: 'Côte d\'Ivoire', color: '#e6c558', img: YT(VIDEOS.BARA_BARA), source: LINKS.baraBara },
  { type: 'Disque d\'Or', title: 'JEUNE & RICHE', year: '2024', country: 'Côte d\'Ivoire · Warner/Atlantic', color: '#e6c558', img: YT(VIDEOS.INCENDIE), source: LINKS.jeuneRiche },
  { type: 'Disque de Platine', title: 'BARA BARA', year: '2024', country: 'Afrique Francophone', color: '#c0c0c0', img: YT(VIDEOS.BARA_BARA), source: LINKS.baraBara },
  { type: 'Disque de Diamant', title: 'DALSHIM', year: '2025', country: 'Côte d\'Ivoire', color: '#b9f2ff', img: YT(VIDEOS.DE_TEMPS_EN_TEMPS), source: LINKS.dalshim },
];

export const TOUR_DATES = [
  { date: '12 OCT', city: 'Abidjan', venue: 'Palais de la Culture', country: 'CI', status: 'Presque complet', tickets: 'https://himra.tikerama.com' },
  { date: '25 OCT', city: 'Dakar', venue: 'Dakar Arena', country: 'SN', status: 'Disponible', tickets: 'https://himra.tikerama.com' },
  { date: '08 NOV', city: 'Paris', venue: 'Le Zénith', country: 'FR', status: 'Sold out', tickets: 'https://himra.tikerama.com' },
  { date: '15 NOV', city: 'Londres', venue: 'O2 Forum Kentish Town', country: 'UK', status: 'Disponible', tickets: 'https://himra.tikerama.com' },
  { date: '22 NOV', city: 'Bruxelles', venue: 'Ancienne Belgique', country: 'BE', status: 'Disponible', tickets: 'https://himra.tikerama.com' },
  { date: '05 DEC', city: 'Douala', venue: 'Palais des Sports', country: 'CM', status: 'Bientôt', tickets: 'https://himra.tikerama.com' },
];

// Merch uses generated 1X branded visuals (no fake product photos)
export const MERCH = [
  { name: 'Hoodie 1X — Rouge Sang', price: '45€', color: '#c8102e' },
  { name: 'T-Shirt EN GANG — Noir', price: '25€', color: '#e6203a' },
  { name: 'Veste 1X ULTRA — Anthracite', price: '65€', color: '#8b0a1e' },
  { name: 'Casquette Machettes — Or', price: '30€', color: '#c9a84c' },
];
