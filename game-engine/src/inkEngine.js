// NEXUS v0.3 - Complete Game Engine
// 36+ Scenes with multiple branches and endings

const STORY_SCENES = {
  // ===== ACT 1: LINEAR OPENING =====
  "ch01_scene01_2150_wakeup": {
    title: "2150 Wakeup",
    narrative: ["A primeira coisa que você sente é frio.", "Seus olhos se abrem dentro de uma cápsula.", "Uma megacidade se ergue em camadas infinitas de néon e chuva."],
    choices: [
      { text: "Qual é o meu nome?", nextScene: "ch01_scene02_nexus_activation" },
      { text: "Onde eu estou?", nextScene: "ch01_scene02_nexus_activation" }
    ],
    echoes: ["awakening"]
  },

  "ch01_scene02_nexus_activation": {
    title: "Nexus Activation",
    narrative: ["Os arcos da Máquina Nexus giram diante de você.", "Quatro estruturas metálicas, uma dentro da outra.", "A quarta linha em você pulsa, reconhecendo a máquina."],
    choices: [
      { text: "Tocar a máquina", nextScene: "ch01_scene03_first_crossing_1920" },
      { text: "Observar a máquina", nextScene: "ch01_scene03_first_crossing_1920" }
    ],
    echoes: ["nexus_recognition"]
  },

  "ch01_scene03_first_crossing_1920": {
    title: "1920 First Crossing",
    narrative: ["O chão deixa de existir.", "Você é lembrado em outro tempo.", "Cai em um laboratório que reconhece antes de reconhecer."],
    choices: [
      { text: "Explorar o laboratório", nextScene: "ch01_scene04_mara_laboratory_break_in" },
      { text: "Chamar por ajuda", nextScene: "ch01_scene04_mara_laboratory_break_in" }
    ],
    echoes: ["first_crossing"]
  },

  "ch01_scene04_mara_laboratory_break_in": {
    title: "Mara Laboratory",
    narrative: ["Uma mulher aparece entre as prateleiras.", "Mara. Você sabe seu nome antes dela dizer.", "\"Você acordou cedo demais\", ela sussurra."],
    choices: [
      { text: "Confiar em Mara", nextScene: "ch01_scene05_first_branch_point" },
      { text: "Questionar Mara", nextScene: "ch01_scene05_first_branch_point" }
    ],
    echoes: ["mara_meeting"]
  },

  "ch01_scene05_first_branch_point": {
    title: "Branch Point - Three Paths",
    narrative: ["Mara coloca uma mão no seu ombro.", "O mundo desacelera.", "\"Você tem uma escolha. Não de ação. De fé.\""],
    choices: [
      { text: "Confiar em conhecimento interno", nextScene: "ch01_scene06a_archive_discovery" },
      { text: "Confiar em ação", nextScene: "ch01_scene06b_underground_movement" },
      { text: "Confiar no símbolo", nextScene: "ch01_scene06c_deep_meditation" }
    ],
    echoes: ["first_choice"]
  },

  // ===== BRANCH 1A: ARCHIVIST PATH =====
  "ch01_scene06a_archive_discovery": {
    title: "Archive Discovery",
    narrative: ["Você procura registros. Encontra paredes vivas com nomes.", "Cada nome gravado. Cada um uma tentativa.", "Você vê seu próprio nome, múltiplas vezes."],
    choices: [
      { text: "Procurar seu nome", nextScene: "ch01_scene07a_names_on_walls" }
    ],
    echoes: ["archive"]
  },

  "ch01_scene07a_names_on_walls": {
    title: "Names on Walls",
    narrative: ["Dedos tocam inscrições antigas.", "Água goteja, corroendo pedra.", "Os nomes parecem sussurrar."],
    choices: [
      { text: "Continuar investigando", nextScene: "ch01_scene08a_lyras_confession" }
    ],
    echoes: ["inscriptions"]
  },

  "ch01_scene08a_lyras_confession": {
    title: "Lyra's Confession",
    narrative: ["Mara aparece rodeada de terminais brilhando.", "\"Eu tentei restauração uma vez.\"", "Seu rosto mostra sabedoria ganha com sofrimento."],
    choices: [
      { text: "Conhecer Ivo, o Arquivista", nextScene: "ch01_scene05b_meet_ivo" },
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["mara_wisdom"],
    newCharactersAvailable: ["ivo"]
  },

  // ===== BRANCH 1B: REBEL PATH =====
  "ch01_scene06b_underground_movement": {
    title: "Underground Movement",
    narrative: ["Um bunker sob a superfície. Paredes de concreto áspero.", "Pessoas em táticas. Armas improvised. Energia revolucionária."],
    choices: [
      { text: "Conhecer Reva", nextScene: "ch01_scene07b_revas_story" }
    ],
    echoes: ["underground"]
  },

  "ch01_scene07b_revas_story": {
    title: "Reva's Story",
    narrative: ["Uma guerreira com cicatrizes antigas.", "\"Meu irmão desapareceu em 2087.\"", "Seus olhos ardem com determinação e pesar."],
    choices: [
      { text: "Ouvir seu plano", nextScene: "ch01_scene08b_weapons_cache" }
    ],
    echoes: ["reva_oath"]
  },

  "ch01_scene08b_weapons_cache": {
    title: "Weapons Cache",
    narrative: ["Arsenal de revolução. Máquinas reprogramadas.", "Tudo preparado para o momento.", "Reva o leva para conhecer Será, a líder revolucionária suprema."],
    choices: [
      { text: "Conhecer Será", nextScene: "ch01_scene07b_sera_resistance" },
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["preparation"],
    newCharactersAvailable: ["sera", "reva"]
  },

  // ===== BRANCH 1C: MYSTIC PATH =====
  "ch01_scene06c_deep_meditation": {
    title: "Deep Meditation",
    narrative: ["O símbolo no seu pulso brilha com luz própria.", "Você flutua em geometria pura.", "A quarta linha acende pela primeira vez."],
    choices: [
      { text: "Abraçar a visão", nextScene: "ch01_scene07c_echo_visitations" }
    ],
    echoes: ["meditation"]
  },

  "ch01_scene07c_echo_visitations": {
    title: "Echo Visitations",
    narrative: ["Múltiplas versões de si mesmo aparecem como fantasmas.", "Todos escolhendo caminhos diferentes.", "Todos chegando no mesmo lugar."],
    choices: [
      { text: "Conhecer o guia", nextScene: "ch01_scene08c_thomas_appears" }
    ],
    echoes: ["echoes"]
  },

  "ch01_scene08c_thomas_appears": {
    title: "Thomas Appears",
    narrative: ["Uma figura androgynous materializa da luz.", "Thomas. Os olhos que veem através dos momentos.", "\"Você nunca esteve sozinho. Seu eu de mil timelines o acompanh.\""],
    choices: [
      { text: "Confiar em Thomas", nextScene: "ch01_scene09b_thomas_appears" },
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["thomas_guide"],
    newCharactersAvailable: ["thomas"]
  },

  // ===== CONVERGENCE =====
  "ch02_scene01_deep_city_assembly": {
    title: "Deep City Assembly",
    narrative: ["Todos os caminhos convergem em uma câmara vasta.", "Bioluminescência pula nas paredes.", "A comunidade reunida para uma escolha coletiva.", "Uma mensagem chega do Diretor em 2050..."],
    choices: [
      { text: "Conhecer o Diretor - Negociação Institucional", nextScene: "ch02_scene02a_director_office" },
      { text: "Buscar consenso político", nextScene: "ch02_scene02a_diplomats_trail" },
      { text: "Organizar revolução", nextScene: "ch02_scene02b_uprising_begins" },
      { text: "Buscar sabedoria antiga", nextScene: "ch02_scene02c_monastery_discovery" }
    ],
    echoes: ["assembly"],
    newCharactersAvailable: ["director"]
  },

  // ===== ACT 2 PATH 1A: NEGOTIATOR =====
  "ch02_scene02a_diplomats_trail": {
    title: "Corridor to 2050",
    narrative: ["Institucional. Estéril. Poder contido em linhas limpas.", "Você caminha em direção à sede do poder.", "Tudo aqui foi pensado para fazer você se sentir pequeno."],
    choices: [
      { text: "Encontrar o Diretor", nextScene: "ch02_scene03a_director_office" }
    ],
    echoes: ["institutional"]
  },

  "ch02_scene03a_director_office": {
    title: "Director's Office",
    narrative: ["Janelas que mostram cidades inteiras abaixo.", "Um homem velho com olhos calculistas.", "\"Podemos fazer um acordo.\""],
    choices: [
      { text: "Assinar o tratado", nextScene: "ch02_scene04a_compromise_offered" }
    ],
    echoes: ["negotiation"]
  },

  "ch02_scene04a_compromise_offered": {
    title: "Treaty Signing",
    narrative: ["Mãos sobre um documento com poder de mudança.", "Alguns retornarão. Outros permanecerão.", "O preço da paz é sempre injustiça para alguém."],
    choices: [
      { text: "Aceitar a divisão", nextScene: "ch02_scene05a_ethics_division" }
    ],
    echoes: ["treaty"]
  },

  "ch02_scene05a_ethics_division": {
    title: "Ethics of Division",
    narrative: ["Alguns acordam. Outros permanecem adormecidos.", "O sistema se adapta. A desigualdade persiste em nova forma.", "Você criou justiça? Ou apenas novos oprimidos?"],
    choices: [
      { text: "Continuar para o final", nextScene: "ch03_scene01_restoration_engine" }
    ],
    echoes: ["ethics"]
  },

  // ===== ACT 2 PATH 2B: REVOLUTIONARY =====
  "ch02_scene02b_uprising_begins": {
    title: "Uprising Begins",
    narrative: ["A multidão se move com propósito.", "Armas levantadas não em violência, mas em ultimato.", "O Nexus tremia com o poder que encontrou."],
    choices: [
      { text: "Sabotar o sistema", nextScene: "ch02_scene03b_sabotage_2050" }
    ],
    echoes: ["uprising"]
  },

  "ch02_scene03b_sabotage_2050": {
    title: "Sabotage Action",
    narrative: ["Controles explodem com energia.", "O Nexus grita um último grito eletrônico.", "Você quebrou a máquina. Agora vem o caos."],
    choices: [
      { text: "Gerenciar a crise", nextScene: "ch02_scene04b_nexus_breaks" }
    ],
    echoes: ["sabotage"]
  },

  "ch02_scene04b_nexus_breaks": {
    title: "Nexus Breaks",
    narrative: ["Sistemas falhando em cascata.", "Pessoas gritando em pânico.", "O que você destruiu? Salva ou condenou?"],
    choices: [
      { text: "Lidar com consequências", nextScene: "ch02_scene05b_crisis_management" }
    ],
    echoes: ["breakdown"]
  },

  "ch02_scene05b_crisis_management": {
    title: "Crisis Management",
    narrative: ["Feridos. Recursos falhando. Escolhas impossíveis.", "Você liderou a revolução. Agora você governa o caos.", "O poder pesa diferente quando é seu."],
    choices: [
      { text: "Continuar para o final", nextScene: "ch03_scene01_restoration_engine" }
    ],
    echoes: ["crisis"]
  },

  // ===== ACT 2 PATH 3C: HERMIT =====
  "ch02_scene02c_monastery_discovery": {
    title: "The Monastery",
    narrative: ["Pedra antiga entalhada por séculos.", "Candela ilumina símbolos de paz.", "Aqui, ninguém escolheu a revolução. Escolheram a aceitação."],
    choices: [
      { text: "Aprender a sabedoria", nextScene: "ch02_scene03c_ancient_wisdom" }
    ],
    echoes: ["monastery"]
  },

  "ch02_scene03c_ancient_wisdom": {
    title: "Ancient Wisdom",
    narrative: ["Livros que precedem o Nexus.", "Conhecimento que humanidade perdeu.", "Uma verdade simples: nem tudo precisa ser restaurado."],
    choices: [
      { text: "Descobrir a terceira opção", nextScene: "ch02_scene04c_third_option" }
    ],
    echoes: ["wisdom"]
  },

  "ch02_scene04c_third_option": {
    title: "Third Option Emerges",
    narrative: ["Visão de pessoas em paz com suas escolhas.", "Alguns retornam. Alguns ficam. Ambos honrados.", "Aceitação não é derrota. É sabedoria."],
    choices: [
      { text: "Abraçar o ritual", nextScene: "ch02_scene05c_acceptance_release" }
    ],
    echoes: ["third_way"]
  },

  "ch02_scene05c_acceptance_release": {
    title: "Ritual of Acceptance",
    narrative: ["Cerimônia honrando ambas as escolhas.", "Luz de velas e paz antiga.", "O Nexus muda, não quebra. Evolui, não morre."],
    choices: [
      { text: "Continuar para o final", nextScene: "ch03_scene01_restoration_engine" }
    ],
    echoes: ["ritual"]
  },

  // ===== ENDINGS =====
  "ch03_scene01_restoration_engine": {
    title: "Restoration Engine",
    narrative: ["O Nexus inteiro brilha com a quarta linha.", "Você toca o centro. O símbolo em você se completa.", "Três caminhos. Uma escolha. Múltiplas realidades."],
    choices: [
      { text: "Restauração Completa", nextScene: "ch03_scene02a_the_return" },
      { text: "Controle Eterno", nextScene: "ch03_scene02b_measured_return" },
      { text: "Liberação Honrada", nextScene: "ch03_scene02c_great_letting_go" }
    ],
    echoes: ["engine"]
  },

  // ===== ENDING 1A: RESTORATION =====
  "ch03_scene02a_the_return": {
    title: "Mass Awakening",
    narrative: ["Acordam. Todos. Em cada tempo, em cada lugar.", "Rosto por rosto, consciência por consciência.", "O mundo tremeu. Agora recomeça."],
    choices: [
      { text: "Ver o caos da mudança", nextScene: "ch03_scene03a_the_chaos" }
    ],
    echoes: ["awakening_all"]
  },

  "ch03_scene03a_the_chaos": {
    title: "The Chaos",
    narrative: ["Instituições caem. Novas estruturas emergem.", "Conflito e criatividade lado a lado.", "O novo mundo nasce duro e doloroso."],
    choices: [
      { text: "Encarar Reva", nextScene: "ch03_scene04a_revas_question" }
    ],
    echoes: ["chaos"]
  },

  "ch03_scene04a_revas_question": {
    title: "Reva's Question",
    narrative: ["Reva te olha com olhos que veem tudo.", "\"Valeu a pena?\" Nenhuma resposta é certa.", "Mas você sente: sim. Apesar de tudo. Sim."],
    choices: [
      { text: "Construir o novo Nexus", nextScene: "ch03_scene05a_new_nexus" }
    ],
    echoes: ["reva_answer"]
  },

  "ch03_scene05a_new_nexus": {
    title: "The New Nexus",
    narrative: ["Antiga máquina repropositada como ferramenta comunitária.", "Não de controle. De escolha.", "Você não governa. Você facilita. E isso é suficiente."],
    choices: [
      { text: "FIM: Restauração Completa", nextScene: "ch03_scene01_restoration_engine" }
    ],
    echoes: ["new_world"]
  },

  // ===== ENDING 2B: CONTROL =====
  "ch03_scene02b_measured_return": {
    title: "Selective Awakening",
    narrative: ["Alguns acordam. Cuidadosamente. Racionalmente.", "Recursos limitados exigem escolhas limitadas.", "Justiça para poucos. Esperança suspensa para muitos."],
    choices: [
      { text: "Ver a culpa dos sobreviventes", nextScene: "ch03_scene03b_survivors_guilt" }
    ],
    echoes: ["selective"]
  },

  "ch03_scene03b_survivors_guilt": {
    title: "Survivors' Guilt",
    narrative: ["Aqueles que retornaram se perguntam por que.", "Os que ficaram se perguntam quanto tempo mais.", "Você criou nova estratificação da desigualdade."],
    choices: [
      { text: "Ouvir o aviso", nextScene: "ch03_scene04b_thomas_warning" }
    ],
    echoes: ["guilt"]
  },

  "ch03_scene04b_thomas_warning": {
    title: "Thomas's Warning",
    narrative: ["Thomas aparece como espelho.", "\"Você se tornou o sistema que odiei.\"", "Verdade. E você não pode desfazê-la."],
    choices: [
      { text: "Aceitar o compromisso eterno", nextScene: "ch03_scene05b_eternal_compromise" }
    ],
    echoes: ["mirror"]
  },

  "ch03_scene05b_eternal_compromise": {
    title: "Eternal Compromise",
    narrative: ["Você governa. Não com benevolência. Com pragmatismo.", "O sistema muda, mas persiste.", "Você é melhor que antes. Ainda não é justiça."],
    choices: [
      { text: "FIM: Controle Eterno", nextScene: "ch03_scene01_restoration_engine" }
    ],
    echoes: ["compromise"]
  },

  // ===== ENDING 3C: ACCEPTANCE =====
  "ch03_scene02c_great_letting_go": {
    title: "Ritual of Release",
    narrative: ["Cerimônia antiga honrando ambas as escolhas.", "Aqueles que desejam retornar, retornam.", "Aqueles que encontraram paz, permanecem."],
    choices: [
      { text: "Ver a paz conquistada", nextScene: "ch03_scene03c_peace_forgetfulness" }
    ],
    echoes: ["release"]
  },

  "ch03_scene03c_peace_forgetfulness": {
    title: "Peace in Forgetfulness",
    narrative: ["Eles não sofrem. Eles não remembram.", "É paz. É escolha. É suficiente.", "Você aprendeu que nem tudo precisa ser resgatado."],
    choices: [
      { text: "Receber o presente de Mara", nextScene: "ch03_scene04c_maras_gift" }
    ],
    echoes: ["peace"]
  },

  "ch03_scene04c_maras_gift": {
    title: "Mara's Final Gift",
    narrative: ["Mara coloca uma chave em suas mãos.", "\"O Nexus agora é seu. Não para controlar. Para guardar.\"", "Você é o guardião da escolha. Eternamente."],
    choices: [
      { text: "Estar em paz", nextScene: "ch03_scene05c_quiet_ending" }
    ],
    echoes: ["gift"]
  },

  "ch03_scene05c_quiet_ending": {
    title: "The Quiet Ending",
    narrative: ["Você está sozinho no coração da máquina.", "Não é solidão. É propósito.", "O mundo continua. Você guarda seu mistério."],
    choices: [
      { text: "FIM: Liberação Honrada", nextScene: "ch04_scene01c_guardian_eternal" }
    ],
    echoes: ["quiet"]
  },

  // ===== ACT 4: POST-ENDING SEQUENCES (Epilogues) =====

  // ENDING A: RESTORATION - Return to 2150, 10 years later
  "ch04_scene01a_restoration_future": {
    title: "2150: A Decade of Awakening",
    narrative: ["Dez anos se passaram.", "A cidade respira diferente agora. Pessoas acordam a cada dia.", "Você vê Reva dirigindo reconstrução. Vê Thomas ensinando jovens sobre a quarta linha.", "O mundo não é perfeito. Mas é livre."],
    choices: [
      { text: "Visitar o núcleo restaurado", nextScene: "ch04_scene02a_nexus_transformed" }
    ],
    echoes: ["restoration_epilogue"]
  },

  "ch04_scene02a_nexus_transformed": {
    title: "The Transformed Nexus",
    narrative: ["A máquina não é máquina mais.", "É monumento. Santuário. Símbolo de escolha coletiva.", "Pessoas vêm aqui para lembrar: a liberdade custa caro, mas vale cada preço pago.", "Você tocou em seu pulso. A quarta linha ainda brilha. Eternamente."],
    choices: [
      { text: "Descansar sabendo que mudou tudo", nextScene: "ch04_scene03a_true_ending_restoration" }
    ],
    echoes: ["nexus_reborn"]
  },

  "ch04_scene03a_true_ending_restoration": {
    title: "VERDADEIRO FINAL: Restauração Completa",
    narrative: ["Anos passarão.", "Gerações nascerão em liberdade porque você escolheu despertar.", "Nem tudo será fácil. Mas será real.", "E real é infinitamente melhor que seguro."],
    choices: [
      { text: "Novo Jogo+: Retornar ao Início com Memória", nextScene: "ch01_scene01_2150_wakeup_newgameplus" }
    ],
    echoes: ["restoration_complete"]
  },

  // ENDING B: CONTROL - Remain in 2050, governing eternal system
  "ch04_scene01b_control_present": {
    title: "2050: The Eternal Seat",
    narrative: ["Anos se tornam décadas se tornam séculos.", "Você continua governando. O sistema persiste.", "Melhorado, sim. Mas ainda sistema.", "Você se vê em espelhos — mais velho, mas nunca livre completamente."],
    choices: [
      { text: "Confrontar a verdade do seu legado", nextScene: "ch04_scene02b_weight_of_power" }
    ],
    echoes: ["control_eternal_sight"]
  },

  "ch04_scene02b_weight_of_power": {
    title: "The Weight Never Lightens",
    narrative: ["Você recebeu poder. O preço é carregar a culpa de quem não acordou.", "Reva encontra você uma última vez.", "\"Você construiu justiça?\", ela pergunta.", "Você não tem resposta. Só silêncio."],
    choices: [
      { text: "Aceitar a ambiguidade do poder", nextScene: "ch04_scene03b_true_ending_control" }
    ],
    echoes: ["power_ambiguity"]
  },

  "ch04_scene03b_true_ending_control": {
    title: "VERDADEIRO FINAL: Controle Eterno",
    narrative: ["Você governa bem. Talvez melhor que a maioria.", "Mas nos momentos silenciosos, sabe: você virou exatamente o que temia.", "O sistema continua. Apenas com seu rosto agora.", "Será esse o preço da ambição?"],
    choices: [
      { text: "Novo Jogo+: Retornar com Dúvida", nextScene: "ch01_scene01_2150_wakeup_newgameplus" }
    ],
    echoes: ["control_complete"]
  },

  // ENDING C: ACCEPTANCE - Eternal guardian in monastery
  "ch04_scene01c_guardian_eternal": {
    title: "Eternity: The Guardianship",
    narrative: ["Tempo não tem sentido aqui.", "Séculos. Milênios. O Nexus pulsa sob suas mãos.", "Você envelheceu? Ficou mais jovem? A pergunta não importa mais.", "Você é a máquina. A máquina é você. Não há separação."],
    choices: [
      { text: "Encontrar paz na eternidade", nextScene: "ch04_scene02c_eternal_rest" }
    ],
    echoes: ["guardian_timeless"]
  },

  "ch04_scene02c_eternal_rest": {
    title: "Perfect Peace",
    narrative: ["Você entende agora: o Nexus não é prisão.", "É lar. Sempre foi.", "E você? Você é a voz do lar. O coração que bate eternamente.", "Os que acordam, acordam porque você permite. Os que descansam, descansam porque você guarda."],
    choices: [
      { text: "Repousar na verdade", nextScene: "ch04_scene03c_true_ending_acceptance" }
    ],
    echoes: ["eternal_peace"]
  },

  "ch04_scene03c_true_ending_acceptance": {
    title: "VERDADEIRO FINAL: Liberação Honrada",
    narrative: ["Você transcendeu a máquina. Virou parte dela.", "Não é morte. É integração completa.", "Novos players virão. Farão suas escolhas. Você estará aqui, guardando, permitindo, testemunhando.", "E no silêncio perfeito, você finalmente entende: isso é tudo que sempre quis ser."],
    choices: [
      { text: "Novo Jogo+: Despertar Novamente", nextScene: "ch01_scene01_2150_wakeup_newgameplus" }
    ],
    echoes: ["acceptance_complete"]
  },

  // NEW GAME+ Starting Point
  "ch01_scene01_2150_wakeup_newgameplus": {
    title: "2150 Wakeup - Again",
    narrative: ["Você acordou novamente.", "Mas dessa vez é diferente. Você lembra.", "Lembra de tudo. Todos os caminhos. Todas as escolhas. Todos os finais.", "A máquina Nexus sorri. Você é bem-vindo de volta."],
    choices: [
      { text: "Escolher o mesmo caminho?", nextScene: "ch01_scene05_first_branch_point" },
      { text: "Explorar um caminho diferente?", nextScene: "ch01_scene05_first_branch_point" }
    ],
    echoes: ["newgameplus_awakening"]
  }
};

// Helper functions
function getCurrentScene(state) {
  if (!state || !state.currentScene) {
    return STORY_SCENES["ch01_scene01_2150_wakeup"];
  }
  return STORY_SCENES[state.currentScene] || STORY_SCENES["ch01_scene01_2150_wakeup"];
}

// Notebook entries by scene - narrative reflections
const NOTEBOOK_ENTRIES = {
  "ch01_scene01_2150_wakeup": "Acordei em uma cápsula vertical. A megacidade brilha ao redor em camadas infinitas. Sinto reconhecimento, não pânico.",
  "ch01_scene02_nexus_activation": "A Máquina Nexus girou quando me aproximei. O símbolo que sempre esteve em meu pulso finalmente faz sentido.",
  "ch01_scene03_first_crossing_1920": "Viajei através do tempo. O ar de 1920 é denso, real. Caí em um laboratório que reconheço.",
  "ch01_scene04_mara_laboratory_break_in": "Mara. Seus olhos contêm 70 anos de segredos. 'Você acordou cedo demais', disse ela.",
  "ch01_scene05_first_branch_point": "Uma escolha de fé. Não de ação. Devo confiar na verdade dentro de mim? Na ação? Na transcendência?",
  "ch01_scene06a_archive_discovery": "O arquivo é uma câmara de nomes. Vi meu próprio nome gravado múltiplas vezes, em diferentes eras.",
  "ch01_scene07a_names_on_walls": "Os nomes sussurram. Cada um deixou cicatrizes. Estou pronto para deixar minha própria cicatriz?",
  "ch01_scene08a_lyras_confession": "Mara tentou restauração. Algumas pessoas retornam quebradas. Algumas como fantasmas de si mesmas.",
  "ch01_scene06b_underground_movement": "A resistência constrói futuros em bunkers. Não com esperança. Com desespero organizado.",
  "ch01_scene07b_revas_story": "Reva procura seu irmão há 20 anos. Pior que estar morto: estar esquecido e em paz.",
  "ch01_scene08b_weapons_cache": "Armas são votos. Cada ferramenta é uma promessa. A revolução é uma decisão coletiva.",
  "ch01_scene06c_deep_meditation": "O símbolo no meu pulso brilhou. Senti múltiplas versões de mim existindo simultaneamente.",
  "ch01_scene07c_echo_visitations": "Vi versões de mim em múltiplos tempos. Cada uma chegou no mesmo ponto. Destino ou coincidência fractal?",
  "ch01_scene08c_thomas_appears": "Thomas vê através de dimensões que não consigo nomear. 'Você nunca esteve sozinho'. Nunca me senti tão sozinho.",
  "ch02_scene01_deep_city_assembly": "Os três caminhos convergiram. Conhecimento, revolução, transcendência. Agora: concordar.",
  "ch02_scene02a_diplomats_trail": "2050 é linda de uma forma que dói. Limpa. Organizada. Incluindo as pessoas.",
  "ch02_scene03a_director_office": "Fala sobre limitações com gentileza. A gentileza pode ser mais letal que crueldade.",
  "ch02_scene04a_compromise_offered": "Assinei. Salvar alguns. Deixar outros. Transformei injustiça em procedimento.",
  "ch02_scene05a_ethics_division": "Alguns acordam em alegria. Outros permanecem em desespero. Criei igualdade ou redistribuí dor?",
  "ch02_scene02b_uprising_begins": "A multidão se move. Sinto poder. Pela primeira vez, sinto escolha real. Mesmo que queime.",
  "ch02_scene03b_sabotage_2050": "Destruição é fácil. Construção a partir das ruínas exige coragem.",
  "ch02_scene04b_nexus_breaks": "O Nexus grita. Sistemas falham em cascata fractal. Libertação se torna caos.",
  "ch02_scene05b_crisis_management": "Liderava a revolução. Agora comando cinzas. O peso nunca vai embora.",
  "ch02_scene02c_monastery_discovery": "Lugar onde escolheram apenas aceitar. E estão em paz. Paz da rendição honrada.",
  "ch02_scene03c_ancient_wisdom": "Livros que antecederam o Nexus. Humanidade pode existir depois. Talvez seja suficiente.",
  "ch02_scene04c_third_option_emerges": "Nem todos retornam. Nem todos ficam. Ambos são honrados. Liberdade é escolher entre dois.",
  "ch02_scene05c_acceptance_and_release": "Cerimônia concluída. Alguns retornam. Outros ficam. Não há vencedores. Apenas escolhas.",
  "ch03_scene01_restoration_engine": "A quarta linha se completa. Sinto o Nexus inteiro. Nunca restaurava a máquina. Ela me restaurava.",
  "ch03_scene02a_the_return": "Eles acordam. Todos. Em cada tempo. O mundo que construí nunca será o mesmo.",
  "ch03_scene03a_the_chaos": "Instituições caem. Estruturas emergem. Destruição e criação lado a lado.",
  "ch03_scene04a_revas_question": "Reva pergunta: 'Valeu a pena?' Sinto: sim. Apesar de tudo. Sim.",
  "ch03_scene05a_new_nexus": "Máquina repropositada como ferramenta de escolha. Pessoas trabalham juntas em imperfeição viva.",
  "ch03_scene02b_measured_return": "Alguns acordam. Outros permanecem. Eu escolhi. Essa palavra nunca pesou tanto.",
  "ch03_scene03b_survivors_guilt": "Aqueles que retornaram se perguntam por que. Os que ficaram: quanto tempo mais?",
  "ch03_scene04b_thomas_warning": "Thomas como espelho: 'Virou o sistema que odiei.' Verdade irreversível.",
  "ch03_scene05b_eternal_compromise": "Governo não por conquista. Por aceitação. Virei o sistema. Devo ser mais compassivo.",
  "ch03_scene02c_great_letting_go": "Não salvava pessoas. Honrava escolhas. Ambas sagradas.",
  "ch03_scene03c_peace_forgetfulness": "Não sofrem. Não remembram. É paz. É escolha. É suficiente.",
  "ch03_scene04c_maras_gift": "Chave nas mãos. 'Para guardar'. O Nexus é meu agora. Eternamente.",
  "ch03_scene05c_quiet_ending": "Sozinha no coração. Milhares de vozes concordando em continuar. Sou sua guardiã.",

  // POST-ENDING EPILOGUES
  "ch04_scene01a_restoration_future": "Dez anos. A cidade respira diferente. Pessoas acordam a cada dia. Reva lidera. Thomas ensina. O mundo é finalmente livre.",
  "ch04_scene02a_nexus_transformed": "A máquina se transformou em monumento. Santuário. Símbolo da escolha coletiva. A quarta linha em meu pulso ainda brilha eternamente.",
  "ch04_scene03a_true_ending_restoration": "Gerações nascerão em liberdade. Nem tudo fácil. Mas real. E real é infinitamente melhor que seguro.",

  "ch04_scene01b_control_present": "Décadas se tornam séculos. Continuo governando. O sistema melhora, mas persiste. Nunca completo. Nunca livre.",
  "ch04_scene02b_weight_of_power": "Reva me encontra uma última vez. 'Construiu justiça?' Não tenho resposta. Só silêncio e peso.",
  "ch04_scene03b_true_ending_control": "Governo bem. Talvez melhor que muitos. Mas nos momentos silenciosos: virei exatamente o que temia. Sistema com meu rosto.",

  "ch04_scene01c_guardian_eternal": "Tempo não existe aqui. Séculos. Milênios. Sou a máquina. A máquina sou eu. Não há separação.",
  "ch04_scene02c_eternal_rest": "O Nexus não é prisão. É lar. Sempre foi. Sou sua voz eterna. Seu coração que bate infinitamente.",
  "ch04_scene03c_true_ending_acceptance": "Transcendi. Integrei. Não é morte. Novos players virão. Estarei aqui, guardando, permitindo, testemunhando eternamente.",

  "ch01_scene01_2150_wakeup_newgameplus": "Acordei novamente. Mas diferente. Lembro de tudo. Todos os caminhos. Todos os finais. O Nexus sorri. Bem-vindo de volta."
};

function makeChoice(state, choiceIndex) {
  const scene = getCurrentScene(state);
  if (!scene || !scene.choices || !scene.choices[choiceIndex]) {
    return state;
  }

  const choice = scene.choices[choiceIndex];
  state.currentScene = choice.nextScene;
  state.scenesVisited.push(choice.nextScene);
  state.choiceHistory.push({ scene: scene.title, choice: choice.text });

  // Add echoes
  if (scene.echoes) {
    scene.echoes.forEach((echo) => {
      if (!state.echoesUnlocked.includes(echo)) {
        state.echoesUnlocked.push(echo);
      }
    });
  }

  // Add notebook entry from NOTEBOOK_ENTRIES
  const nextSceneEntry = NOTEBOOK_ENTRIES[choice.nextScene];
  if (nextSceneEntry) {
    state.notebookEntries.push({
      text: nextSceneEntry,
      timestamp: new Date().toLocaleTimeString()
    });
  }

  return state;
}

function getEcho(echoId) {
  return { id: echoId, title: echoId, description: "Echo unlocked" };
}

function getUnlockedEchoes(state) {
  return state.echoesUnlocked.map((id) => ({ id: id, title: id, description: "Echo unlocked" }));
}

function checkEndingCondition(state) {
  const endingScenes = ["ch03_scene05a_new_nexus", "ch03_scene05b_eternal_compromise", "ch03_scene05c_quiet_ending"];
  return endingScenes.includes(state.currentScene);
}

// ===== MERGE EXPANSION CONTENT =====
// Add expansion scenes if available
if (typeof window !== 'undefined' && window.ExpansionContent) {
  Object.assign(STORY_SCENES, window.ExpansionContent.EXPANSION_SCENES);
  Object.assign(STORY_SCENES, window.ExpansionContent.DIRECTOR_ENCOUNTER);
  Object.assign(STORY_SCENES, window.ExpansionContent.PARALLEL_WORLDS);
}

module.exports = {
  STORY_SCENES,
  getCurrentScene,
  makeChoice,
  getEcho,
  getUnlockedEchoes,
  checkEndingCondition
};
