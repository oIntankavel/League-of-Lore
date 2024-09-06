// Array 'dados' que armazena informações sobre os campeões
let dados = [
    {
        'titulo': 'Yasuo',           // Nome do campeão
        'descricao': 'Yasuo, um espadachim ioniano em busca de redenção, carrega o fardo de uma falsa acusação de assassinato. Com sua espada e maestria sobre o vento, ele viaja por Ionia em busca do verdadeiro culpado, lutando contra seus próprios demônios internos.', // Resumo da história
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/yasuo', 
        'tags': "desonra, irmão, vento, espada, Ionia, exílio, redenção" // Palavras-chave expandidas
    },
    {
        'titulo': 'Yone',
        'descricao': 'Yone, o irmão mais velho de Yasuo, busca redenção após ser morto pelo próprio irmão. Agora um caçador de espíritos malignos, ele luta contra a sombra de seu passado e a culpa que carrega.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/yone/',
        'tags': "irmão, morte, azakana, redenção, culpa, espadas duplas" 
    },
    {
        'titulo': 'Riven',
        'descricao': 'Riven, uma ex-soldado noxiana assombrada por seu passado violento, busca redenção e um novo propósito em um mundo que ela ajudou a destruir. Desiludida com Noxus, ela luta para encontrar seu lugar e se reconciliar com suas ações.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/riven/',
        'tags': "exilada, Noxus, guerra, espada rúnica, redenção, culpa"
    },
    {
        'titulo': 'Ahri',
        'descricao': 'Ahri, uma vastaya com poderes místicos, busca compreender a natureza da alma humana. Ela viaja por Runeterra, absorvendo as essências daqueles que encontra, em uma jornada de autodescoberta e conexão.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/ahri/',
        'tags': "vastaya, raposa, magia, alma, Ionia, sedução"
    },
    {
        'titulo': 'Akali',
        'descricao': 'Akali, uma ninja rebelde, luta pela liberdade e justiça em Ionia. Desiludida com as tradições do Kinkou, ela segue seu próprio caminho, usando suas habilidades para proteger os oprimidos.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/akali/',
        'tags': "ninja, Kinkou, rebelião, liberdade, Ionia, fumaça"
    },
    {
        'titulo': 'Irelia',
        'descricao': 'Irelia, a Dançarina das Lâminas, é uma líder militar ioniana que defende sua terra natal com graça e determinação. Usando suas lâminas telecinéticas, ela luta contra qualquer um que ameace a paz de Ionia.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/irelia/',
        'tags': "Ionia, guerra, lâminas, liderança, resistência, dança"
    },
    {
        'titulo': 'Karma',
        'descricao': 'Karma, a Iluminada, é uma alma antiga e sábia que guia Ionia com compaixão e força. Ela busca o equilíbrio e a harmonia, usando seus poderes ancestrais para proteger sua terra e seu povo.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/karma/',
        'tags': "Ionia, espiritualidade, liderança, paz, poder ancestral"
    },
    {
        'titulo': 'Kennen',
        'descricao': 'Kennen, o Coração da Tempestade, é um yordle veloz e energético que defende o equilíbrio em Ionia. Com seus poderes elétricos, ele luta contra a injustiça e protege os inocentes.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/kennen/',
        'tags': "yordle, Kinkou, eletricidade, velocidade, Ionia, justiça"
    },
    {
        'titulo': 'Lee Sin',
        'descricao': 'Lee Sin, o Monge Cego, é um guerreiro espiritual que busca a iluminação através do combate. Ele viaja por Ionia, defendendo os fracos e buscando a paz interior.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/lee-sin/',
        'tags': "monge, cego, artes marciais, Ionia, redenção, força"
    },
    {
        'titulo': 'Lillia',
        'descricao': 'Lillia, a Flor Sonhadora, é uma criatura mágica que protege os sonhos da floresta de Ionia. Ela busca ajudar os outros a enfrentar seus medos e encontrar a coragem dentro de si.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/lillia/',
        'tags': "Ionia, magia, sonhos, floresta, coragem, espírito"
    },
    {
        'titulo': 'Master Yi',
        'descricao': 'Master Yi, o Espadachim Wuju, é um mestre da arte da espada que busca a perfeição através da disciplina e do treinamento. Ele vive em reclusão em Ionia, mas está sempre pronto para defender sua terra natal.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/master-yi/',
        'tags': "Wuju, espada, Ionia, mestre, disciplina, paz"
    },
    {
        'titulo': 'Shen',
        'descricao': 'Shen, o Olho do Crepúsculo, é o líder do Kinkou e um guardião do equilíbrio em Ionia. Ele busca a imparcialidade e a justiça, mesmo que isso signifique tomar decisões difíceis.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/shen/',
        'tags': "Kinkou, líder, equilíbrio, Ionia, justiça, espada espiritual"
    },
    {
        'titulo': 'Zed',
        'descricao': 'Zed, o Mestre das Sombras, é um ninja renegado que busca o poder a qualquer custo. Ele fundou a Ordem das Sombras, uma organização que desafia o Kinkou e ameaça o equilíbrio de Ionia.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/zed/',
        'tags': "ninja, sombras, Kinkou, poder, Ionia, rebelião"
    },
    {
        'titulo': 'Jhin', 
        'descricao': 'Jhin, o Virtuoso, é um assassino serial ioniano obcecado pela beleza da morte. Ele vê seus assassinatos como obras de arte, buscando a perfeição em cada ato.', 
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/jhin/',
        'tags': "Ionia, assassino, arte, morte, beleza, loucura"
    },
    {
        'titulo': 'Kayn',
        'descricao': 'Kayn, o Ceifador das Sombras, é um jovem ambicioso que busca o poder da arma Darkin, Rhaast. Ele treina em Ionia, mas sua sede de poder o leva a um caminho perigoso.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/kayn/',
        'tags': "Ionia, Darkin, sombra, poder, transformação, ordem das sombras"
    },
    {
        'titulo': 'Sett',
        'descricao': 'Embora Sett não seja originalmente de Ionia, ele se tornou uma figura influente na região, especialmente na cidade de Navori. Ele é um lutador de arena implacável e carismático, conhecido por sua força e ambição.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/sett/',
        'tags': "Ionia, Navori, lutador, arena, força, ambição"
    },
    {
        'titulo': 'Varus',
        'descricao': 'Varus, a Flecha da Vingança, é um ser corrompido pela magia negra, buscando vingança contra aqueles que destruíram sua vila. Sua história se passa em Ionia, onde ele se funde com dois caçadores ionianos.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/varus/',
        'tags': "Ionia, vingança, magia negra, arco, flecha, corrupção"
    },
    {
        'titulo': 'Xayah e Rakan',
        'descricao': 'Xayah e Rakan são um casal de vastayas rebeldes que lutam pela liberdade de seu povo e a preservação da natureza em Ionia. Eles desafiam as forças que ameaçam o equilíbrio da região.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/xayah/',
        'tags': "Ionia, vastaya, rebeldes, natureza, amor, liberdade"
    },
    {
        'titulo': 'Ivern',
        'descricao': 'Ivern, o Pai da Floresta, é um ser antigo e peculiar que protege a natureza de Runeterra. Ele tem uma conexão especial com a floresta de Ionia e busca harmonia entre o mundo natural e a civilização.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/ivern/',
        'tags': "Ionia, natureza, floresta, espírito, magia, druida"
    },
    {
        'titulo': 'Syndra',
        'descricao': 'Syndra, uma maga poderosa de Ionia, representa o potencial e os perigos do poder mágico descontrolado. Ela busca controlar seu poder e moldar o mundo à sua vontade.',
        'link': 'https://universe.leagueoflegends.com/pt_BR/story/champion/syndra/',
        'tags': "Ionia, magia, poder, escuridão, energia, esferas"
    },
];
