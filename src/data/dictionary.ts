export interface WordEntry {
  word: string;
  partOfSpeech: string;
  definition: string;
  examples: string[];
  origin: string;
}

export const dictionary: WordEntry[] = [
  {
    word: "Aberration",
    partOfSpeech: "noun",
    definition: "A departure from what is normal, expected, or typical.",
    examples: [
      "The unusually cold summer was an aberration in the region's typically warm climate.",
      "Scientists dismissed the strange reading as an aberration caused by faulty equipment.",
    ],
    origin: "From Latin aberratio, from aberrare 'to go astray', from ab- 'away' + errare 'to wander'.",
  },
  {
    word: "Acquiesce",
    partOfSpeech: "verb",
    definition: "To accept something reluctantly but without protest.",
    examples: [
      "After a long argument, she finally acquiesced to her parents' wishes.",
      "The committee acquiesced to the new regulations without further debate.",
    ],
    origin: "From Latin acquiescere, from ad- 'to' + quiescere 'to rest', from quies 'quiet'.",
  },
  {
    word: "Ameliorate",
    partOfSpeech: "verb",
    definition: "To make something bad or unsatisfactory better.",
    examples: [
      "The new policy was designed to ameliorate the living conditions of the city's poorest residents.",
      "Music helped ameliorate her anxiety before the big presentation.",
    ],
    origin: "From French améliorer, from Latin melior 'better'.",
  },
  {
    word: "Anachronism",
    partOfSpeech: "noun",
    definition: "A thing belonging or appropriate to a period other than that in which it exists.",
    examples: [
      "The medieval knight using a smartphone was an obvious anachronism in the film.",
      "Horse-drawn carriages are an anachronism in a world of electric vehicles.",
    ],
    origin: "From Greek anakhronismos, from ana- 'backwards' + khronos 'time'.",
  },
  {
    word: "Arcane",
    partOfSpeech: "adjective",
    definition: "Understood by few; mysterious or secret.",
    examples: [
      "The professor's lecture touched on arcane points of medieval philosophy.",
      "She surprised everyone with her arcane knowledge of ancient board games.",
    ],
    origin: "From Latin arcanus 'secret', from arca 'chest, box'.",
  },
  {
    word: "Benevolent",
    partOfSpeech: "adjective",
    definition: "Well meaning and kindly; generous.",
    examples: [
      "The benevolent donor funded the construction of a new library.",
      "She smiled at the children with a benevolent expression.",
    ],
    origin: "From Latin benevolent-, from bene 'well' + volent- 'wishing', from velle 'to wish'.",
  },
  {
    word: "Byzantine",
    partOfSpeech: "adjective",
    definition: "Excessively complicated and difficult to understand.",
    examples: [
      "The tax code is so byzantine that most people need an accountant.",
      "Navigating the byzantine bureaucracy took months.",
    ],
    origin: "From Byzantium, the ancient name for Istanbul; referring to the elaborate politics of the Byzantine Empire.",
  },
  {
    word: "Cacophony",
    partOfSpeech: "noun",
    definition: "A harsh, discordant mixture of sounds.",
    examples: [
      "The construction site outside was a cacophony of drills and hammers.",
      "A cacophony of voices erupted when the speaker made the controversial statement.",
    ],
    origin: "From Greek kakophonia, from kakos 'bad' + phone 'sound'.",
  },
  {
    word: "Camaraderie",
    partOfSpeech: "noun",
    definition: "Mutual trust and friendship among people who spend a lot of time together.",
    examples: [
      "The team's camaraderie was evident in how they celebrated each other's successes.",
      "Years of working together had built a strong sense of camaraderie.",
    ],
    origin: "From French camaraderie, from camarade 'comrade', from Spanish camarada 'roommate', from Latin camera 'chamber'.",
  },
  {
    word: "Clandestine",
    partOfSpeech: "adjective",
    definition: "Kept secret or done secretively, especially because illicit.",
    examples: [
      "The spies held clandestine meetings in a basement café.",
      "Their clandestine romance was eventually discovered.",
    ],
    origin: "From Latin clandestinus, from clam 'secretly'.",
  },
  {
    word: "Conundrum",
    partOfSpeech: "noun",
    definition: "A confusing and difficult problem or question.",
    examples: [
      "Choosing between two equally appealing job offers created quite a conundrum.",
      "The philosophers wrestled with the conundrum of free will versus determinism.",
    ],
    origin: "Origin uncertain; possibly a 16th-century Oxford University slang word, perhaps a mock-Latin fabrication.",
  },
  {
    word: "Crepuscular",
    partOfSpeech: "adjective",
    definition: "Of, resembling, or relating to twilight; active at twilight or before sunrise.",
    examples: [
      "Deer are crepuscular animals, most often seen at dawn and dusk.",
      "The crepuscular light gave the forest a magical, mysterious quality.",
    ],
    origin: "From Latin crepusculum 'twilight', from creper 'dusky'.",
  },
  {
    word: "Defenestration",
    partOfSpeech: "noun",
    definition: "The action of throwing someone out of a window.",
    examples: [
      "The Defenestration of Prague in 1618 helped spark the Thirty Years' War.",
      "The cartoon villain threatened defenestration, though the hero was on the ground floor.",
    ],
    origin: "From Latin de- 'out of' + fenestra 'window'; coined after historical events in Prague.",
  },
  {
    word: "Ebullient",
    partOfSpeech: "adjective",
    definition: "Cheerful and full of energy.",
    examples: [
      "Her ebullient personality lit up every room she entered.",
      "The ebullient crowd cheered as the team scored.",
    ],
    origin: "From Latin ebullire 'to bubble up', from e- 'out' + bullire 'to bubble'.",
  },
  {
    word: "Ephemeral",
    partOfSpeech: "adjective",
    definition: "Lasting for a very short time.",
    examples: [
      "The morning glory blooms are ephemeral, opening at dawn and closing by afternoon.",
      "Fame in the age of social media can be ephemeral.",
    ],
    origin: "From Greek ephemeros 'lasting only a day', from epi- 'on' + hemera 'day'.",
  },
  {
    word: "Equanimity",
    partOfSpeech: "noun",
    definition: "Mental calmness, especially in a difficult situation.",
    examples: [
      "She faced the devastating news with remarkable equanimity.",
      "Years of meditation had given him great equanimity.",
    ],
    origin: "From Latin aequanimitas, from aequus 'equal' + animus 'mind'.",
  },
  {
    word: "Evanescent",
    partOfSpeech: "adjective",
    definition: "Soon passing out of sight, memory, or existence; quickly fading.",
    examples: [
      "The evanescent beauty of a sunset lasts only minutes.",
      "Childhood memories can be evanescent without photographs to anchor them.",
    ],
    origin: "From Latin evanescere 'to vanish', from e- 'out' + vanescere 'to fade away'.",
  },
  {
    word: "Fastidious",
    partOfSpeech: "adjective",
    definition: "Very attentive to accuracy and detail; very concerned about cleanliness.",
    examples: [
      "He was fastidious about the presentation of his work, checking every comma.",
      "A fastidious housekeeper, she noticed every speck of dust.",
    ],
    origin: "From Latin fastidiosus 'disdainful', from fastidium 'loathing'.",
  },
  {
    word: "Garrulous",
    partOfSpeech: "adjective",
    definition: "Excessively talkative, especially on trivial matters.",
    examples: [
      "Our garrulous neighbor would chat for hours about the weather.",
      "The garrulous tour guide gave so much detail that the group fell behind schedule.",
    ],
    origin: "From Latin garrulus, from garrire 'to chatter, prattle'.",
  },
  {
    word: "Halcyon",
    partOfSpeech: "adjective",
    definition: "Denoting a period of time in the past that was idyllically happy and peaceful.",
    examples: [
      "She often reminisced about the halcyon days of her childhood.",
      "Those halcyon summers by the lake felt like they would last forever.",
    ],
    origin: "From Latin alcyon, from Greek alkuon 'kingfisher'; in legend, the bird was said to calm the sea.",
  },
  {
    word: "Ineffable",
    partOfSpeech: "adjective",
    definition: "Too great or extreme to be expressed or described in words.",
    examples: [
      "The beauty of the Northern Lights was ineffable.",
      "She felt an ineffable joy when she held her newborn child.",
    ],
    origin: "From Latin ineffabilis, from in- 'not' + effabilis 'utterable', from effari 'to speak out'.",
  },
  {
    word: "Insidious",
    partOfSpeech: "adjective",
    definition: "Proceeding in a gradual, subtle way, but with harmful effects.",
    examples: [
      "The disease is insidious because symptoms don't appear until the late stages.",
      "The insidious spread of misinformation has damaged public trust in science.",
    ],
    origin: "From Latin insidiosus 'cunning', from insidiae 'ambush', from insidere 'to lie in wait'.",
  },
  {
    word: "Juxtaposition",
    partOfSpeech: "noun",
    definition: "The fact of two things being seen or placed close together with contrasting effect.",
    examples: [
      "The juxtaposition of old and new architecture gives the city its unique character.",
      "The poem uses juxtaposition to highlight the difference between wealth and poverty.",
    ],
    origin: "From Latin juxta 'next' + positio 'a placing', from ponere 'to place'.",
  },
  {
    word: "Labyrinthine",
    partOfSpeech: "adjective",
    definition: "Complicated and confusing like a labyrinth.",
    examples: [
      "The labyrinthine corridors of the old hospital confused every new visitor.",
      "The labyrinthine regulations made it nearly impossible to start a business.",
    ],
    origin: "From Greek labyrinthos, the legendary maze built by Daedalus for King Minos of Crete.",
  },
  {
    word: "Loquacious",
    partOfSpeech: "adjective",
    definition: "Tending to talk a great deal; talkative.",
    examples: [
      "The loquacious professor often ran over time with his stories.",
      "After a few cups of coffee, she became quite loquacious.",
    ],
    origin: "From Latin loquax, from loqui 'to talk'.",
  },
  {
    word: "Lugubrious",
    partOfSpeech: "adjective",
    definition: "Looking or sounding sad and dismal.",
    examples: [
      "The basset hound's lugubrious expression made everyone laugh.",
      "He delivered the news in a lugubrious tone.",
    ],
    origin: "From Latin lugubris, from lugere 'to mourn'.",
  },
  {
    word: "Maelstrom",
    partOfSpeech: "noun",
    definition: "A powerful whirlpool; a situation of confused movement or violent turmoil.",
    examples: [
      "The kayaker was nearly swallowed by the maelstrom at the river's bend.",
      "She was caught in a maelstrom of competing deadlines.",
    ],
    origin: "From Dutch maelstrom, from malen 'to grind' + stroom 'stream'; named after a whirlpool off Norway.",
  },
  {
    word: "Mellifluous",
    partOfSpeech: "adjective",
    definition: "Sweet or musical; pleasant to hear.",
    examples: [
      "The cellist's mellifluous tones filled the concert hall.",
      "Her mellifluous voice made even the most tedious meeting pleasant.",
    ],
    origin: "From Latin mellifluus, from mel 'honey' + fluere 'to flow'.",
  },
  {
    word: "Mendacious",
    partOfSpeech: "adjective",
    definition: "Not telling the truth; lying.",
    examples: [
      "The mendacious salesman exaggerated every feature of the car.",
      "Her mendacious testimony was eventually disproved by security footage.",
    ],
    origin: "From Latin mendax 'lying', from mendum 'fault'.",
  },
  {
    word: "Mercurial",
    partOfSpeech: "adjective",
    definition: "Subject to sudden or unpredictable changes of mood or mind.",
    examples: [
      "His mercurial temperament made him exciting but difficult to work with.",
      "The mercurial weather in the mountains caught hikers off guard.",
    ],
    origin: "From Latin Mercurialis 'of Mercury'; the god Mercury was known for speed and changeability.",
  },
  {
    word: "Nebulous",
    partOfSpeech: "adjective",
    definition: "In the form of a cloud or haze; vague or ill-defined.",
    examples: [
      "Her plans for the future were still quite nebulous.",
      "The nebulous shape in the fog turned out to be a ship.",
    ],
    origin: "From Latin nebulosus 'misty', from nebula 'mist, cloud'.",
  },
  {
    word: "Nefarious",
    partOfSpeech: "adjective",
    definition: "Wicked or criminal.",
    examples: [
      "The villain's nefarious scheme was foiled by the detective.",
      "He was convicted for his nefarious financial dealings.",
    ],
    origin: "From Latin nefarius, from nefas 'wrong, sin', from ne- 'not' + fas 'divine law'.",
  },
  {
    word: "Obfuscate",
    partOfSpeech: "verb",
    definition: "Make unclear or difficult to understand.",
    examples: [
      "The legal jargon seemed designed to obfuscate rather than explain.",
      "Politicians sometimes obfuscate the truth with vague language.",
    ],
    origin: "From Latin obfuscare 'to darken', from ob- 'over' + fuscare 'to darken', from fuscus 'dark'.",
  },
  {
    word: "Obstreperous",
    partOfSpeech: "adjective",
    definition: "Noisy and difficult to control.",
    examples: [
      "The obstreperous toddler refused to sit still during the ceremony.",
      "The obstreperous crowd had to be calmed by security.",
    ],
    origin: "From Latin obstreperus, from obstrepere 'to clamour at', from ob- 'against' + strepere 'to make a noise'.",
  },
  {
    word: "Onomatopoeia",
    partOfSpeech: "noun",
    definition: "The formation of a word from a sound associated with what is named.",
    examples: [
      "'Buzz', 'sizzle', and 'hiss' are classic examples of onomatopoeia.",
      "The poem used onomatopoeia to recreate the sound of the ocean.",
    ],
    origin: "From Greek onomatopoiia 'word-making', from onoma 'name' + poiein 'to make'.",
  },
  {
    word: "Panacea",
    partOfSpeech: "noun",
    definition: "A solution or remedy for all difficulties or diseases.",
    examples: [
      "Technology is often seen as a panacea for social problems, but it is not.",
      "There is no panacea for the complex issues facing modern cities.",
    ],
    origin: "From Greek panakeia, from panakes 'all-healing', from pan- 'all' + akos 'remedy'.",
  },
  {
    word: "Parsimonious",
    partOfSpeech: "adjective",
    definition: "Unwilling to spend money or use resources; extremely frugal.",
    examples: [
      "The parsimonious landlord refused to replace the broken boiler.",
      "She was so parsimonious that she reused paper towels.",
    ],
    origin: "From Latin parsimonia 'frugality', from parsus, past participle of parcere 'to be sparing'.",
  },
  {
    word: "Pernicious",
    partOfSpeech: "adjective",
    definition: "Having a harmful effect, especially in a gradual or subtle way.",
    examples: [
      "The pernicious influence of the cult slowly isolated its members from their families.",
      "Excessive screen time can have pernicious effects on children's development.",
    ],
    origin: "From Latin perniciosus 'destructive', from pernicies 'ruin', from per- 'completely' + nex 'death'.",
  },
  {
    word: "Perspicacious",
    partOfSpeech: "adjective",
    definition: "Having a ready insight; shrewd.",
    examples: [
      "The perspicacious investor spotted the trend before anyone else.",
      "Her perspicacious observations made her an excellent detective.",
    ],
    origin: "From Latin perspicax 'sharp-sighted', from perspicere 'to look through clearly'.",
  },
  {
    word: "Petrichor",
    partOfSpeech: "noun",
    definition: "A pleasant smell that frequently accompanies the first rain after a long period of dry weather.",
    examples: [
      "After months of drought, the petrichor from the first rain was intoxicating.",
      "She stepped outside and breathed in the petrichor rising from the warm pavement.",
    ],
    origin: "Coined in 1964 from Greek petra 'stone' + ichor, the fluid said to flow in the veins of the gods.",
  },
  {
    word: "Plethora",
    partOfSpeech: "noun",
    definition: "A large or excessive amount of something.",
    examples: [
      "The new streaming service offers a plethora of shows.",
      "She faced a plethora of choices at the farmers' market.",
    ],
    origin: "From Greek plethora 'fullness', from plethein 'to be full'.",
  },
  {
    word: "Pontificate",
    partOfSpeech: "verb",
    definition: "Express one's opinions in a pompous and dogmatic way.",
    examples: [
      "He loved to pontificate about politics at dinner parties.",
      "She would pontificate on nutrition, yet rarely followed her own advice.",
    ],
    origin: "From Latin pontificare 'to be a pontiff'; originally relating to the Pope's authoritative pronouncements.",
  },
  {
    word: "Pusillanimous",
    partOfSpeech: "adjective",
    definition: "Showing a lack of courage or determination; timid.",
    examples: [
      "The pusillanimous response from leadership only emboldened the critics.",
      "He gave a pusillanimous excuse for missing the meeting.",
    ],
    origin: "From Latin pusillanimis, from pusillus 'very small' + animus 'mind, spirit'.",
  },
  {
    word: "Querulous",
    partOfSpeech: "adjective",
    definition: "Complaining in a petulant or whining manner.",
    examples: [
      "The querulous passenger complained about every aspect of the flight.",
      "A querulous note crept into his voice as the meeting dragged on.",
    ],
    origin: "From Latin querulus, from queri 'to complain'.",
  },
  {
    word: "Quintessential",
    partOfSpeech: "adjective",
    definition: "Representing the most perfect or typical example of a quality or class.",
    examples: [
      "Sherlock Holmes is the quintessential fictional detective.",
      "This dish is the quintessential Italian comfort food.",
    ],
    origin: "From Medieval Latin quinta essentia 'fifth essence'; the fifth element beyond earth, air, fire, and water.",
  },
  {
    word: "Recalcitrant",
    partOfSpeech: "adjective",
    definition: "Having an obstinately uncooperative attitude toward authority.",
    examples: [
      "The recalcitrant student refused to follow any of the classroom rules.",
      "Negotiations stalled because of one recalcitrant party.",
    ],
    origin: "From Latin recalcitrare 'to kick out with the heels', from re- 'back' + calcitrare 'to kick'.",
  },
  {
    word: "Resilience",
    partOfSpeech: "noun",
    definition: "The capacity to recover quickly from difficulties; toughness.",
    examples: [
      "The community showed remarkable resilience after the hurricane.",
      "Building resilience in children helps them handle setbacks later in life.",
    ],
    origin: "From Latin resilire 'to spring back', from re- 'back' + salire 'to jump'.",
  },
  {
    word: "Sagacious",
    partOfSpeech: "adjective",
    definition: "Having or showing keen mental discernment and good judgment; shrewd.",
    examples: [
      "The sagacious general anticipated the enemy's strategy.",
      "She made a sagacious business decision that paid off years later.",
    ],
    origin: "From Latin sagax 'keen-scented, shrewd', from sagire 'to perceive keenly'.",
  },
  {
    word: "Sanguine",
    partOfSpeech: "adjective",
    definition: "Optimistic, especially in a difficult situation.",
    examples: [
      "Despite the setbacks, she remained sanguine about the project's chances.",
      "He was sanguine about the outcome of the negotiations.",
    ],
    origin: "From Latin sanguis 'blood'; once thought that a blood-dominated temperament produced a cheerful disposition.",
  },
  {
    word: "Soliloquy",
    partOfSpeech: "noun",
    definition: "An act of speaking one's thoughts aloud when alone, especially in a play.",
    examples: [
      "Hamlet's 'To be, or not to be' is one of the most famous soliloquies in theatre.",
      "She delivered a heartfelt soliloquy before finally making her decision.",
    ],
    origin: "From Latin soliloquium, coined by St Augustine from solus 'alone' + loqui 'to speak'.",
  },
  {
    word: "Soporific",
    partOfSpeech: "adjective",
    definition: "Tending to induce drowsiness or sleep.",
    examples: [
      "The professor's monotone lecture had a soporific effect on the students.",
      "The warm milk and the soporific medication helped her sleep at last.",
    ],
    origin: "From Latin soporificus, from sopor 'deep sleep' + facere 'to make'.",
  },
  {
    word: "Sycophant",
    partOfSpeech: "noun",
    definition: "A person who acts obsequiously toward someone in power to gain advantage.",
    examples: [
      "The CEO surrounded himself with sycophants who agreed with every decision.",
      "She refused to be a sycophant and spoke her mind honestly.",
    ],
    origin: "From Greek sykophantes 'informer', from sykon 'fig' + phainein 'to show'; the original meaning is debated.",
  },
  {
    word: "Tenacious",
    partOfSpeech: "adjective",
    definition: "Tending to keep a firm hold; persistent.",
    examples: [
      "Her tenacious pursuit of justice eventually led to the conviction.",
      "The ivy was tenacious, clinging to the stone wall despite the cold.",
    ],
    origin: "From Latin tenax 'holding fast', from tenere 'to hold'.",
  },
  {
    word: "Trepidation",
    partOfSpeech: "noun",
    definition: "A feeling of fear or anxiety about something that may happen.",
    examples: [
      "He approached the stage with trepidation, having never spoken in public before.",
      "She opened the results envelope with a mixture of hope and trepidation.",
    ],
    origin: "From Latin trepidatio, from trepidare 'to be agitated', from trepidus 'alarmed'.",
  },
  {
    word: "Ubiquitous",
    partOfSpeech: "adjective",
    definition: "Present, appearing, or found everywhere.",
    examples: [
      "Smartphones have become ubiquitous in modern life.",
      "Coffee shops are ubiquitous in every major city.",
    ],
    origin: "From Latin ubique 'everywhere', from ubi 'where' + -que (a generalizing suffix).",
  },
  {
    word: "Unctuous",
    partOfSpeech: "adjective",
    definition: "Excessively flattering or ingratiating; oily in texture.",
    examples: [
      "The unctuous waiter hovered constantly, hoping for a larger tip.",
      "His unctuous praise made everyone uncomfortable.",
    ],
    origin: "From Latin unctuosus, from unctum 'ointment', from ungere 'to anoint'.",
  },
  {
    word: "Vacillate",
    partOfSpeech: "verb",
    definition: "Waver between different opinions or actions; be indecisive.",
    examples: [
      "She vacillated between accepting the new job and staying at her current one.",
      "He continued to vacillate even as the deadline approached.",
    ],
    origin: "From Latin vacillare 'to sway', of uncertain origin.",
  },
  {
    word: "Verbose",
    partOfSpeech: "adjective",
    definition: "Using or expressed in more words than are needed.",
    examples: [
      "The verbose contract was 80 pages long but could have been 10.",
      "His verbose style made simple ideas needlessly complicated.",
    ],
    origin: "From Latin verbosus, from verbum 'word'.",
  },
  {
    word: "Vivacious",
    partOfSpeech: "adjective",
    definition: "Attractively lively and animated.",
    examples: [
      "Her vivacious personality made her the life of every party.",
      "The vivacious young performer captivated the audience.",
    ],
    origin: "From Latin vivax 'lively, tenacious of life', from vivere 'to live'.",
  },
  {
    word: "Voracious",
    partOfSpeech: "adjective",
    definition: "Wanting or devouring great quantities of food; having a very eager approach.",
    examples: [
      "She was a voracious reader, finishing several books a week.",
      "The voracious appetite of the growing puppy surprised everyone.",
    ],
    origin: "From Latin vorax 'devouring', from vorare 'to devour'.",
  },
  {
    word: "Whimsical",
    partOfSpeech: "adjective",
    definition: "Playfully quaint or fanciful, especially in an appealing and amusing way.",
    examples: [
      "The garden was filled with whimsical sculptures of animals and fairy-tale creatures.",
      "Her whimsical sense of humor endeared her to everyone.",
    ],
    origin: "From whim (of uncertain origin, perhaps Scandinavian) + -ical.",
  },
  {
    word: "Zeitgeist",
    partOfSpeech: "noun",
    definition: "The defining spirit or mood of a particular period of history.",
    examples: [
      "The album perfectly captured the zeitgeist of the 1990s.",
      "Social media has become part of the cultural zeitgeist.",
    ],
    origin: "From German Zeitgeist, from Zeit 'time' + Geist 'spirit'.",
  },
];

export function getRandomWord(excludeWord?: string): WordEntry {
  const available = excludeWord
    ? dictionary.filter((w) => w.word !== excludeWord)
    : dictionary;
  const index = Math.floor(Math.random() * available.length);
  return available[index];
}
