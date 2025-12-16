import { Movie } from '../../../core/types';

// Helper to generate a consistent image URL
const getPoster = (id: string) => `https://picsum.photos/seed/${id}/400/600`;

export const INITIAL_MOVIES: Movie[] = [
  {
    id: 'rocky',
    title: 'Rocky',
    description: 'Um boxeador de segunda categoria recebe uma chance extremamente rara de lutar contra o campeão dos pesos pesados em uma luta na qual ele se esforça para aguentar até o fim por seu amor-próprio.',
    imageUrl: getPoster('rocky'),
    initialRating: 8.1,
    userRating: null,
    watched: false
  },
  {
    id: 'predator',
    title: 'Predador',
    description: 'Uma equipe de comandos em missão em uma selva da América Central se vê caçada por um guerreiro extraterrestre.',
    imageUrl: getPoster('predator'),
    initialRating: 7.8,
    userRating: null,
    watched: false
  },
  {
    id: 'django',
    title: 'Django',
    description: 'Com a ajuda de um caçador de recompensas alemão, um escravo liberto parte para resgatar sua esposa de um brutal dono de plantação no Mississippi.',
    imageUrl: getPoster('django'),
    initialRating: 8.4,
    userRating: null,
    watched: true
  },
  {
    id: 'rango',
    title: 'Rango',
    description: 'Rango é um camaleão comum que acidentalmente vai parar na cidade de Poeira, um posto avançado sem lei no Velho Oeste que precisa desesperadamente de um novo xerife.',
    imageUrl: getPoster('rango'),
    initialRating: 7.2,
    userRating: null,
    watched: false
  },
  {
    id: 'kill-bill',
    title: 'Kill Bill',
    description: 'Após acordar de um coma de quatro anos, uma ex-assassina vinga-se da equipe de assassinos que a traiu.',
    imageUrl: getPoster('kill-bill'),
    initialRating: 8.2,
    userRating: null,
    watched: true
  },
  {
    id: 'happiness',
    title: 'Em busca da felicidade',
    description: 'Um vendedor em dificuldades assume a custódia de seu filho enquanto está prestes a iniciar uma carreira profissional que mudará sua vida.',
    imageUrl: getPoster('happiness'),
    initialRating: 8.0,
    userRating: null,
    watched: false
  },
  {
    id: '1917',
    title: '1917',
    description: '6 de abril de 1917. Enquanto um regimento se reúne para travar uma guerra em território inimigo, dois soldados são designados para correr contra o tempo e entregar uma mensagem que impedirá 1.600 homens de caminharem direto para uma armadilha mortal.',
    imageUrl: getPoster('1917'),
    initialRating: 8.2,
    userRating: null,
    watched: false
  },
  {
    id: 'inatividade',
    title: 'Inatividade Paranormal',
    description: 'Uma paródia da franquia "Atividade Paranormal", estrelada por Marlon Wayans como um homem que se muda para uma casa possuída por um espírito maligno.',
    imageUrl: getPoster('inatividade'),
    initialRating: 5.0,
    userRating: null,
    watched: false
  },
  {
    id: 'tropic-thunder',
    title: 'Trovão Tropical',
    description: 'Através de uma série de ocorrências bizarras, um grupo de atores filmando um filme de guerra de grande orçamento é forçado a se tornar os soldados que estão retratando.',
    imageUrl: getPoster('tropic-thunder'),
    initialRating: 7.0,
    userRating: null,
    watched: false
  },
  {
    id: 'truman',
    title: 'Show de Truman',
    description: 'Um vendedor de seguros descobre que toda a sua vida é, na verdade, um reality show de TV.',
    imageUrl: getPoster('truman'),
    initialRating: 8.2,
    userRating: null,
    watched: true
  },
  {
    id: 'bttf',
    title: 'De volta pro futuro',
    description: 'Marty McFly, um estudante de 17 anos, é acidentalmente enviado trinta anos para o passado em um DeLorean que viaja no tempo inventado por seu amigo próximo, o excêntrico cientista Doc Brown.',
    imageUrl: getPoster('bttf'),
    initialRating: 8.5,
    userRating: null,
    watched: true
  },
  {
    id: 'ritual',
    title: 'O Ritual',
    description: 'Um estudante de seminário americano viaja para a Itália para fazer um curso de exorcismo.',
    imageUrl: getPoster('ritual'),
    initialRating: 6.0,
    userRating: null,
    watched: false
  },
  {
    id: 'morrowbone',
    title: 'Morrowbone',
    description: 'Um jovem e seus três irmãos mais novos, que mantiveram em segredo a morte de sua amada mãe para permanecerem juntos, são atormentados por uma presença sinistra na mansão onde vivem.',
    imageUrl: getPoster('morrowbone'),
    initialRating: 6.7,
    userRating: null,
    watched: false
  },
  {
    id: 'zathura',
    title: 'Zhatura',
    description: 'Dois jovens irmãos são atraídos para uma aventura intergaláctica quando sua casa é lançada nas profundezas do espaço pelo jogo de tabuleiro mágico que estão jogando.',
    imageUrl: getPoster('zathura'),
    initialRating: 6.2,
    userRating: null,
    watched: false
  },
  {
    id: 'papaco',
    title: 'Um pistoleiro chamado papaco',
    description: 'Um clássico cult do cinema brasileiro envolvendo um pistoleiro atravessando o deserto, encontrando vários personagens excêntricos e perigos.',
    imageUrl: getPoster('papaco'),
    initialRating: 9.9,
    userRating: null,
    watched: false
  },
  {
    id: 'flow',
    title: 'Flow',
    description: 'Um documentário explorando o misterioso e essencial elemento da água e a crise global que o cerca.',
    imageUrl: getPoster('flow'),
    initialRating: 7.3,
    userRating: null,
    watched: false
  },
  {
    id: 'millionaire',
    title: 'Quem quer ser um milionário',
    description: 'Um adolescente de Mumbai reflete sobre sua vida após ser acusado de trapacear na versão indiana de "Quem Quer Ser um Milionário?".',
    imageUrl: getPoster('millionaire'),
    initialRating: 8.0,
    userRating: null,
    watched: true
  },
  {
    id: 'terabithia',
    title: 'Ponte para Terabitia',
    description: 'A vida de um pré-adolescente vira de cabeça para baixo quando ele faz amizade com a nova garota da escola e eles imaginam um mundo de fantasia totalmente novo para escapar da realidade.',
    imageUrl: getPoster('terabithia'),
    initialRating: 7.2,
    userRating: null,
    watched: false
  },
  {
    id: 'shutter',
    title: 'Ilha do Medo',
    description: 'Em 1954, um U.S. Marshal investiga o desaparecimento de uma assassina que escapou de um hospital para criminosos insanos.',
    imageUrl: getPoster('shutter'),
    initialRating: 8.2,
    userRating: null,
    watched: true
  },
  {
    id: 'time-machine',
    title: 'A máquina do tempo',
    description: 'Na esperança de alterar os eventos do passado, um inventor do século XIX viaja 800.000 anos para o futuro, onde encontra a humanidade dividida em duas raças em guerra.',
    imageUrl: getPoster('time-machine'),
    initialRating: 6.0,
    userRating: null,
    watched: false
  },
  {
    id: 'ben10',
    title: 'Ben 10 Live Action',
    description: 'Ben Tennyson descobre um relógio alienígena que lhe permite se transformar em 10 super-heróis alienígenas diferentes.',
    imageUrl: getPoster('ben10'),
    initialRating: 4.8,
    userRating: null,
    watched: false
  },
  {
    id: 'worst-person',
    title: 'A pior pessoa do mundo',
    description: 'As crônicas de quatro anos na vida de Julie, uma jovem que navega pelas águas turbulentas de sua vida amorosa e luta para encontrar seu caminho profissional.',
    imageUrl: getPoster('worst-person'),
    initialRating: 7.8,
    userRating: null,
    watched: false
  },
  {
    id: 'karate-kid',
    title: 'Karatê Kid (Drê)',
    description: 'O trabalho faz com que uma mãe solteira se mude para a China com seu filho; em sua nova casa, o garoto abraça o kung fu, ensinado a ele por um mestre.',
    imageUrl: getPoster('karate-kid'),
    initialRating: 6.2,
    userRating: null,
    watched: true
  },
  {
    id: 'spirit',
    title: 'Spirit',
    description: 'Um garanhão selvagem é capturado por humanos e lentamente perde a vontade de resistir ao treinamento, mas, apesar de suas lutas, ele se recusa a perder a esperança de um dia voltar para casa e para seu rebanho.',
    imageUrl: getPoster('spirit'),
    initialRating: 7.2,
    userRating: null,
    watched: false
  },
  {
    id: 'hoodwinked',
    title: 'Deu a louca na chapeuzinho',
    description: 'Chapeuzinho Vermelho, o Lobo, o Lenhador e a Vovó contam à polícia os eventos que levaram ao encontro deles.',
    imageUrl: getPoster('hoodwinked'),
    initialRating: 6.5,
    userRating: null,
    watched: false
  },
  {
    id: 'atlantis',
    title: 'Atlantis: O reino perdido',
    description: 'Um jovem aventureiro torna-se a chave para desvendar um antigo mistério quando se junta a um grupo de exploradores destemidos para encontrar o lendário império perdido de Atlântida.',
    imageUrl: getPoster('atlantis'),
    initialRating: 6.9,
    userRating: null,
    watched: false
  },
  {
    id: 'irene',
    title: 'Eu, eu mesmo e Irene',
    description: 'Um policial de modos gentis com transtorno de dupla personalidade luta pelo afeto de uma mulher adorável.',
    imageUrl: getPoster('irene'),
    initialRating: 6.6,
    userRating: null,
    watched: false
  },
  {
    id: 'first-dates',
    title: 'Como se fosse a primeira vez',
    description: 'Henry Roth é um homem com medo de compromisso até conhecer a bela Lucy. Eles se dão bem e Henry acha que finalmente encontrou a garota dos seus sonhos, até descobrir que ela tem perda de memória recente e o esquece no dia seguinte.',
    imageUrl: getPoster('first-dates'),
    initialRating: 6.8,
    userRating: null,
    watched: true
  },
  {
    id: 'shaun',
    title: 'Todo mundo quase morto',
    description: 'A vida monótona de um homem é interrompida pelo apocalipse zumbi.',
    imageUrl: getPoster('shaun'),
    initialRating: 7.9,
    userRating: null,
    watched: true
  },
  {
    id: 'accountant',
    title: 'O Contador',
    description: 'Enquanto um gênio da matemática analisa os livros contábeis de um novo cliente, o Departamento do Tesouro fecha o cerco sobre suas atividades e a contagem de corpos começa a aumentar.',
    imageUrl: getPoster('accountant'),
    initialRating: 7.3,
    userRating: null,
    watched: false
  },
  {
    id: 'pirates',
    title: 'Piratas do Caribe',
    description: 'O ferreiro Will Turner se une ao excêntrico pirata Capitão Jack Sparrow para salvar seu amor, a filha do governador, dos antigos aliados piratas de Jack, que agora são mortos-vivos.',
    imageUrl: getPoster('pirates'),
    initialRating: 8.1,
    userRating: null,
    watched: true
  },
  {
    id: 'little-women',
    title: 'Adoráveis Mulheres',
    description: 'Jo March reflete sobre sua vida, contando a amada história das irmãs March - quatro jovens mulheres, cada uma determinada a viver a vida em seus próprios termos.',
    imageUrl: getPoster('little-women'),
    initialRating: 7.8,
    userRating: null,
    watched: false
  },
  {
    id: 'long-walk',
    title: 'A longa marcha',
    description: 'Baseado no romance de Stephen King. Em uma América distópica futura, 100 adolescentes embarcam em uma competição anual de caminhada onde há apenas uma regra: manter um ritmo constante ou ser eliminado.',
    imageUrl: getPoster('long-walk'),
    initialRating: 7.0,
    userRating: null,
    watched: false
  },
  {
    id: 'step-up',
    title: 'Ela dança eu danço',
    description: 'Tyler Gage recebe a oportunidade de sua vida após vandalizar uma escola de artes cênicas, ganhando a chance de conseguir uma bolsa de estudos e dançar com uma bailarina promissora, Nora.',
    imageUrl: getPoster('step-up'),
    initialRating: 6.5,
    userRating: null,
    watched: false
  },
  {
    id: 'paul',
    title: 'Paul - O alien fugitivo',
    description: 'Dois geeks britânicos de quadrinhos viajando pelos EUA encontram um alienígena fora da Área 51.',
    imageUrl: getPoster('paul'),
    initialRating: 7.0,
    userRating: null,
    watched: false
  },
  {
    id: 'passed-by',
    title: 'Passei por aqui',
    description: 'Um grafiteiro que tem como alvo as casas da elite descobre um segredo retorcido em um porão escondido.',
    imageUrl: getPoster('passed-by'),
    initialRating: 6.1,
    userRating: null,
    watched: false
  },
  {
    id: 'vow',
    title: 'Para Sempre',
    description: 'Um acidente de carro deixa Paige em coma, e quando ela acorda com grave perda de memória, seu marido Leo trabalha para conquistar seu coração novamente.',
    imageUrl: getPoster('vow'),
    initialRating: 6.8,
    userRating: null,
    watched: false
  },
  {
    id: 'dictator',
    title: 'O Ditador',
    description: 'A história heroica de um ditador que arrisca sua vida para garantir que a democracia nunca chegue ao país que ele oprime com tanto amor.',
    imageUrl: getPoster('dictator'),
    initialRating: 6.4,
    userRating: null,
    watched: true
  },
];