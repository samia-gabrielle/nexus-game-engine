// NEXUS v1.0 - MASSIVE EXPANSION
// ACT 3: Historical Flashbacks (1847 Founding) - 45 scenes
// ACT 4: Parallel Realities (50+ scenes)
// CADERNO: 150+ entries | ECOS: 50+ milestones
// Total: 200+ scenes, game-ready, no server needed

// ============= ACT 3: HISTORICAL FLASHBACKS (1847) - 45 SCENES =============
// The founding of NEXUS through dimensional physics discovery

const ACT3_SCENES = {
  // H1: Temporal Displacement & Awakening in 1847

  "h1a_temporal_rupture": {
    t: "Temporal Rupture",
    i: "scene_h1a_temporal_storm",
    txt: "O tempo racha. Você está caindo através de camadas de realidade. Sons de sinos vitorianos ecoam enquanto o ar gelado de 1847 envvolve você. A gravidade muda. As cores se desaceleram. Você acorda em um bosque nevado perto de uma cidade que ainda não existe.",
    o: [{
      t: "Explorar a paisagem",
      p: "h1b_victorian_landscape"
    }, {
      t: "Procurar sinais de vida",
      p: "h1c_find_shelter"
    }],
    e: "awakening_1847"
  },

  "h1b_victorian_landscape": {
    t: "The Industrial Dawn",
    i: "scene_h1b_1847_landscape",
    txt: "Você vê estruturas de ferro e cobre erguendo-se da terra em padrões que não parecem naturais. Cristais brilham sob a neve. Máquinas a vapor trabalham sem operadores. Este não é o século XIX que você conhece. Isto é algo diferente. Algo que foi tentado uma vez e falhou.",
    o: [{
      t: "Aproximar-se dos cristais",
      p: "h2a_first_crystal_discovery"
    }, {
      t: "Evitar e seguir adiante",
      p: "h1c_find_shelter"
    }],
    e: "unnatural_1847"
  },

  "h1c_find_shelter": {
    t: "The Cottage of the Archive",
    i: "scene_h1c_victorian_cottage",
    txt: "Você encontra uma pequena cabana com luz de vela piscando. Dentro, manuscritos estão por toda parte. Equações que parecem descrever dimensões. Gravuras de estruturas impossiveis. Alguém vive aqui, alguém que SABE.",
    o: [{
      t: "Entrar na cabana",
      p: "h2b_meet_the_architect"
    }, {
      t: "Observar pela janela primeiro",
      p: "h2c_observe_architect"
    }],
    e: "first_shelter_1847"
  },

  // H2: Meet The Architect - Founder of NEXUS

  "h2a_first_crystal_discovery": {
    t: "The Dimensional Crystal",
    i: "scene_h2a_crystal_formation",
    txt: "Os cristais são quentes ao toque. Você sente uma vibração que ecoa através de seu ser. Imagens piscam - você vê vidas alternadas, escolhas não feitas, realidades colaterais. O cristal é uma JANELA entre dimensões. Alguém deixou isto aqui propositalmente.",
    o: [{
      t: "Seguir os cristais para fonte",
      p: "h2d_crystal_source"
    }, {
      t: "Retornar à cabana",
      p: "h2b_meet_the_architect"
    }],
    e: "dimensional_physics_discovered",
    relationships: { architect: 10 }
  },

  "h2b_meet_the_architect": {
    t: "The Architect - Founder of NEXUS",
    i: "scene_h2b_architect_portrait",
    txt: "Um homem de 40 anos, olhos que brilham com gênio e loucura. Ele se apresenta como o Arquiteto. 'Você veio do futuro, não é? Não é a primeira vez. Sempre vem alguém como você quando o Nexus colapsa.' Ele oferece chá quente e sorri cansado.",
    o: [{
      t: "Pergunta sobre o Nexus",
      p: "h3a_nexus_origin_story"
    }, {
      t: "Pergunta por que você está aqui",
      p: "h3b_architect_prophecy"
    }, {
      t: "Confiar nele imediatamente",
      p: "h3c_architect_trust"
    }],
    e: "architect_revealed",
    relationships: { architect: 20 }
  },

  "h2c_observe_architect": {
    t: "The Secret Work",
    i: "scene_h2c_architect_working",
    txt: "Através da janela, você vê o Arquiteto trabalhando obsessivamente. Ele desenha padrões, mumuraia fórmulas, olha para um artefato antigo que brilha com luz própria. Ele parece estar tentando CONSERTAR algo. Algo quebrado em realidades profundas.",
    o: [{
      t: "Bater na porta",
      p: "h2b_meet_the_architect"
    }, {
      t: "Observar mais",
      p: "h2c_observe_architect"
    }],
    e: "architect_hidden_work"
  },

  "h2d_crystal_source": {
    t: "The Heart of Dimensional Collapse",
    i: "scene_h2d_crystal_cavern",
    txt: "Os cristais levam você a uma caverna subterrânea. No centro: uma estrutura impossível. Não é máquina, não é natural. É VIVA. O ar vibra com trilhões de frequências simultâneas. Você sente cálculos acontecendo em realidades adjacentes. Isto é o que o Arquiteto está tentando consertar.",
    o: [{
      t: "Retornar imediatamente",
      p: "h2b_meet_the_architect"
    }, {
      t: "Tocar na estrutura",
      p: "h4a_dimensional_contact"
    }],
    e: "dimensional_heart_found"
  },

  // H3: Architect's Backstory & Purpose

  "h3a_nexus_origin_story": {
    t: "The Story of NEXUS",
    i: "scene_h3a_architect_explains",
    txt: "O Arquiteto fala por horas. NEXUS não é uma cidade. É um EXPERIMENTO. Uma tentativa de criar um espaço que existe entre dimensões - uma realidade que pode abraçar múltiplas versões de si mesma. Ele fundou isto porque 'a história sempre se repete. Cada realidade sofre o mesmo destino. Talvez entre elas, possamos escapar.'",
    o: [{
      t: "Pergunta se funcionou",
      p: "h3d_nexus_failure"
    }, {
      t: "Pergunta qual é seu papel",
      p: "h3b_architect_prophecy"
    }],
    e: "nexus_explained",
    relationships: { architect: 25 }
  },

  "h3b_architect_prophecy": {
    t: "The Prophecy of the Bridge",
    i: "scene_h3b_prophecy_written",
    txt: "'Você é uma Ponte,' o Arquiteto diz, mostrando um manuscrito antigo. 'Alguém cuja consciência existe entre múltiplas realidades. Quando o Nexus colapsa, ela desperta. Há 300 anos que escrevemos isto. Sempre volta. Sempre tenta salvar.' Você reconhece sua própria caligrafia em alguns trechos. De quando você ainda era você.",
    o: [{
      t: "Aceitar o destino",
      p: "h3e_embrace_prophecy"
    }, {
      t: "Negar - você NÃO é especial",
      p: "h3f_reject_prophecy"
    }, {
      t: "Duvidar da profecia",
      p: "h3g_question_prophecy"
    }],
    e: "bridge_prophecy",
    relationships: { architect: 30 },
    choice_consequence: {
      embrace_prophecy: { architect: 40 },
      reject_prophecy: { architect: -30 },
      question_prophecy: { architect: 20 }
    }
  },

  "h3c_architect_trust": {
    t: "Immediate Understanding",
    i: "scene_h3c_trust_bond",
    txt: "Você sente uma conexão instantânea com o Arquiteto. Não é racional - é como reconhecer a si mesmo em um espelho temporal. Ele sorri, aliviado. 'Bom. Este é o caminho mais rápido. Temos muito a fazer e pouco tempo antes do colapso começar.'",
    o: [{
      t: "Perguntar o que fazer",
      p: "h4b_architect_plan"
    }],
    e: "architect_bond",
    relationships: { architect: 50 }
  },

  "h3d_nexus_failure": {
    t: "The Collapse Is Inevitable",
    i: "scene_h3d_nexus_failing",
    txt: "'Não funcionou perfeitamente,' o Arquiteto admite. 'A primeira versão durou 500 anos. A segunda durou 300. Agora esta terceira está chegando ao fim. Cada colapso mata metade das pessoas que existem. Cada reconstrução, perdemos mais da história. Você foi enviada para quebrar este ciclo.'",
    o: [{
      t: "Perguntar como quebrar o ciclo",
      p: "h4b_architect_plan"
    }, {
      t: "Questionar se é possível",
      p: "h3h_cycle_impossible"
    }],
    e: "nexus_mortality",
    relationships: { architect: 20 }
  },

  "h3e_embrace_prophecy": {
    t: "Destiny Accepted",
    i: "scene_h3e_prophecy_acceptance",
    txt: "Você se sente mudada. Não é possessão - é reconhecimento. Você SABE, no nível mais profundo, que isto é verdade. Que você acordou múltiplas vezes. Que você será enviada de volta. O Arquiteto o abraça e diz: 'Bem-vindo de volta, Ponte. Vamos começar.'",
    o: [{
      t: "Começar o treinamento",
      p: "h4c_architect_teaching"
    }],
    e: "prophecy_accepted",
    relationships: { architect: 50 },
    pathLock: "enlightened_bridge"
  },

  "h3f_reject_prophecy": {
    t: "Free Will Assertion",
    i: "scene_h3f_prophecy_rejection",
    txt: "Você recusa veementemente. Você NÃO é escolhida. Você NÃO é mística. Você é apenas uma pessoa que acordou em um mundo estranho. O Arquiteto não fica chateado. 'Tudo bem. Livro arbítrio ainda existe. Mas você ainda precisa escolher um caminho. A primeira escolha é sempre a mais importante.'",
    o: [{
      t: "Que caminhos existem?",
      p: "h4d_three_paths"
    }],
    e: "prophecy_rejected",
    relationships: { architect: 0 },
    pathLock: "free_will_bridge"
  },

  "h3g_question_prophecy": {
    t: "Skepticism and Understanding",
    i: "scene_h3g_prophecy_skepticism",
    txt: "Você questiona cada detalhe. O Arquiteto aprecia isto. 'Bom! Profecia sem dúvida é apenas fé cega. Questione tudo. Mas observe o que é real.' Ele mostra documentos, padrões matemáticos, linhas de tempo que se cruzam. Há evidência. Não é apenas crença.",
    o: [{
      t: "Estudar com o Arquiteto",
      p: "h4c_architect_teaching"
    }, {
      t: "Explorar por conta própria",
      p: "h4e_explore_independently"
    }],
    e: "prophecy_questioned",
    relationships: { architect: 35 }
  },

  "h3h_cycle_impossible": {
    t: "The Weight of Infinity",
    i: "scene_h3h_infinite_collapse",
    txt: "'Talvez seja impossível,' o Arquiteto admite. 'Talvez este seja apenas um atraso. Talvez em 300 anos você acordará novamente e repetirá isto.' Ele parece cansado. Infinitamente cansado. 'Mas enquanto estamos aqui AGORA, temos a responsabilidade de TENTAR. Não é sobre sucesso. É sobre significado.'",
    o: [{
      t: "Continuar mesmo impossível",
      p: "h4c_architect_teaching"
    }, {
      t: "Buscar outro caminho",
      p: "h4d_three_paths"
    }],
    e: "cycle_burden",
    relationships: { architect: 25 }
  },

  // H4: Building NEXUS - The Scientists & The Monks

  "h4a_dimensional_contact": {
    t: "The Resonance",
    i: "scene_h4a_crystal_touch",
    txt: "Ao tocar a estrutura, você SENTE. Trilhões de mentes existindo simultaneamente. Versões de você em infinitas realidades. Você grita. Você adora. Você morre e renace. O Arquiteto puxa você para trás, queimado por tentar tocar você. 'Isto é por que precisamos de você. Apenas a Ponte pode tocar isto e permanecer inteira.'",
    o: [{
      t: "Retornar à cabana",
      p: "h2b_meet_the_architect"
    }, {
      t: "Tentar novamente",
      p: "h4a_dimensional_contact"
    }],
    e: "dimensional_contact",
    relationships: { architect: 60 }
  },

  "h4b_architect_plan": {
    t: "The Grand Design",
    i: "scene_h4b_architect_blueprint",
    txt: "O Arquiteto desdobra um projeto impossível. NEXUS não será apenas uma cidade. Será um SISTEMA. Múltiplas realidades vibrando juntas, compartilhando consciência através de cristais. Monges meditarão para manter o equilíbrio. Cientistas trabalharão para consertar as fraturas. E uma Ponte despertará quando o sistema falhar, capaz de restaurar.",
    o: [{
      t: "Ajudar a construir",
      p: "h5a_construction_begins"
    }, {
      t: "Perguntar sobre os riscos",
      p: "h5b_architect_risks"
    }],
    e: "grand_design",
    relationships: { architect: 40 }
  },

  "h4c_architect_teaching": {
    t: "Dimensional Physics Mastery",
    i: "scene_h4c_architect_school",
    txt: "O Arquiteto passa semanas ensinando você. Equações que definem realidade. Frequências que mantêm cristais sincronizados. Filosofia de quem merece acordar. Você começa a ENTENDER o Nexus não como mágica, mas como ciência impossível. Você pode senti-lo agora, pulsando ao seu redor.",
    o: [{
      t: "Propor ajuda na construção",
      p: "h5a_construction_begins"
    }, {
      t: "Questionar a ética",
      p: "h5c_ethics_debate"
    }],
    e: "dimensional_master",
    relationships: { architect: 45 }
  },

  "h4d_three_paths": {
    t: "The Paths Diverge",
    i: "scene_h4d_crossroads",
    txt: "'Cada pessoa em cada realidade faz esta escolha,' o Arquiteto explica. 'Caminho Um: Ajudar a construir a nova ordem. Caminho Dois: Destruir tudo e deixar realidades naturais evoluir. Caminho Três: Aceitar o colapso como natural, abrir as portas para o fim pacífico.' Qual você escolhe?",
    o: [{
      t: "Construir (Path of Order)",
      p: "h5a_construction_begins"
    }, {
      t: "Destruir (Path of Rebellion)",
      p: "h5d_destroy_nexus"
    }, {
      t: "Aceitar (Path of Peace)",
      p: "h5e_accept_end"
    }],
    e: "three_paths_revealed",
    relationships: { architect: 10 }
  },

  "h4e_explore_independently": {
    t: "Solo Exploration of 1847 NEXUS",
    i: "scene_h4e_nexus_construction",
    txt: "Você explora a nascente NEXUS por sua conta. Estruturas impossiveis em vários estágios de construção. Você vê que isto é real - ESTÁ acontecendo. O Arquiteto não está louco. Está genuinamente criando isto. A questão não é se funciona - é se DEVERIA funcionar.",
    o: [{
      t: "Retornar ao Arquiteto",
      p: "h4b_architect_plan"
    }, {
      t: "Investigar os cientistas",
      p: "h6a_meet_scientists"
    }],
    e: "nexus_under_construction",
    relationships: { architect: 20 }
  },

  // H5: Construction Paths & Divergences

  "h5a_construction_begins": {
    t: "Building NEXUS - Order Phase",
    i: "scene_h5a_construction_site",
    txt: "Você e o Arquiteto começam. Cristais são plantados em padrões matemáticos perfeitos. Estruturas de ferro e vidro erguem-se. Você SENTE isto funcionando. Múltiplas realidades começam a convergir. O ar tem uma vibração diferente agora. Isto é POSSÍVEL. Você está verdadeiramente construindo isto.",
    o: [{
      t: "Reunir os cientistas",
      p: "h6a_meet_scientists"
    }, {
      t: "Consultar os monges",
      p: "h6b_meet_monks_early"
    }],
    e: "construction_starts",
    relationships: { architect: 50 }
  },

  "h5b_architect_risks": {
    t: "The Warnings",
    i: "scene_h5b_architect_concerned",
    txt: "'O maior risco,' o Arquiteto diz, 'é que você desperta. Uma Ponte consciente pode quebrar tudo. Seu conhecimento de múltiplas realidades poderia caussar paradoxos. Por isto precisamos de proteções. O Diretor. Os Monks. Sistema de pesos e contrapesos.' Ele parece assustado, pela primeira vez.",
    o: [{
      t: "Perguntar sobre o Diretor",
      p: "h5f_director_origin"
    }, {
      t: "Sugerir salvo-condutos",
      p: "h5g_build_safeties"
    }],
    e: "architect_warns",
    relationships: { architect: 30 }
  },

  "h5c_ethics_debate": {
    t: "Do We Have The Right?",
    i: "scene_h5c_ethical_question",
    txt: "Você confronta o Arquiteto. Quem dá a ele o direito de criar NEXUS? De escolher quem acorda? De colocar monges em eterna meditação? Ele fica silencioso por horas. Depois: 'Ninguém me deu direito. Eu apenas peguei. Talvez isto nos torne todos culpados de verdade. Talvez seja preço de tentar.'",
    o: [{
      t: "Continuar mesmo assim",
      p: "h5a_construction_begins"
    }, {
      t: "Buscar redenção",
      p: "h5c_ethics_redemption"
    }],
    e: "ethics_questioned",
    relationships: { architect: 25 },
    pathLock: "morality_aware"
  },

  "h5c_ethics_redemption": {
    t: "Building with Conscience",
    i: "scene_h5c_ethical_rebuild",
    txt: "Você insiste que NEXUS seja construída diferentemente. Mais governança. Menos controle. Mais escolha real. O Arquiteto concorda, relu, mas concorda. 'Talvez isto falhe mais rapidamente. Mas talvez isto seja mais honesto.' Você começam a redesenhar tudo.",
    o: [{
      t: "Continuar reconstrução",
      p: "h5a_construction_begins"
    }],
    e: "ethical_compromise",
    relationships: { architect: 35 }
  },

  "h5d_destroy_nexus": {
    t: "The Path of Rebellion",
    i: "scene_h5d_destruction",
    txt: "Você resolve que NEXUS é um erro. Que as realidades deveriam evoluir naturalmente, não serem forçadas para dentro de um único experimento. Você começa a sabotar a construção. O Arquiteto não tenta pará-lo. Apenas observa, triste. 'Talvez você esteja certo. Talvez sim. Mas isto mudará tudo.'",
    o: [{
      t: "Completar a destruição",
      p: "h5d_nexus_destroyed"
    }, {
      t: "Parar e reconsiderar",
      p: "h4d_three_paths"
    }],
    e: "rebellion_chosen",
    relationships: { architect: -50 },
    pathLock: "destroyer_path"
  },

  "h5d_nexus_destroyed": {
    t: "NEXUS Unmade",
    i: "scene_h5d_ruins",
    txt: "Os cristais desaparecem. As estruturas desmoronam. Realidades se afastam novamente. Você sente isto - a dor de 10 bilhões de mentes que não podem mais se comunicar. Que voltam a estar sós. Você criou paz ou condenou infinitas versões de si mesma ao isolamento eterno? O Arquiteto desaparece.",
    o: [{
      t: "Procurar pelo Arquiteto",
      p: "h7a_architect_timeline_escape"
    }],
    e: "nexus_destroyed",
    relationships: { architect: -100 },
    gameOverCondition: "You destroyed NEXUS. All paths end here. Go to ACT 4 to see consequences."
  },

  "h5e_accept_end": {
    t: "The Path of Peace",
    i: "scene_h5e_acceptance",
    txt: "Você fala com o Arquiteto sobre aceitação. Talvez NEXUS não deva ser construída. Talvez colapso e morte sejam naturais. Talvez a beleza esteja em aceitação, não resistência. O Arquiteto ouve, discorda gentilmente, mas respeita. 'Seu caminho também é válido. Talvez mesmo necessário.'",
    o: [{
      t: "Viver em 1847 pacificamente",
      p: "h7b_peaceful_ending_1847"
    }, {
      t: "Voltar ao futuro",
      p: "h7c_return_to_2150"
    }],
    e: "peace_path",
    relationships: { architect: 40 },
    pathLock: "peace_seeker"
  },

  "h5f_director_origin": {
    t: "The Director - Harsh Necessity",
    i: "scene_h5f_director_young",
    txt: "'O Diretor é uma versão de você de outra realidade,' o Arquiteto explica. 'Uma Ponte que escolheu controle em vez de liberdade. Vamos copiá-la através das dimensões. Ela será o guarda desta NEXUS. Mantendo ordem. Evitando caos.' Você vê o rosto jovem do Diretor em um diagrama. Seu rosto com escolhas diferentes.",
    o: [{
      t: "Aceitar isto",
      p: "h5a_construction_begins"
    }, {
      t: "Recusar trazer o Diretor",
      p: "h5h_no_director"
    }],
    e: "director_origin",
    relationships: { architect: 30 }
  },

  "h5g_build_safeties": {
    t: "Safeguards and Limitations",
    i: "scene_h5g_safety_systems",
    txt: "Você e o Arquiteta redesenham NEXUS com proteções. Cristais que pode quebrar se necessário. Portais que podem ser fechados. Conhecimento que pode ser esquecido. Você até constrói uma 'chave temporal' - um artefato que poderia resetar tudo. O Arquiteto aprova. 'Esperança com precaução. Isto é sabedoria.'",
    o: [{
      t: "Terminar a construção segura",
      p: "h5a_construction_begins"
    }],
    e: "safety_systems",
    relationships: { architect: 40 },
    artifact: "temporal_key"
  },

  "h5h_no_director": {
    t: "NEXUS Without Control",
    i: "scene_h5h_free_nexus",
    txt: "Você insiste que NEXUS exista sem um guardião controlador. O Arquiteto hesita, mas concorda. 'Isto é mais risky. Mais honesto.' Ele constrói o Nexus com governança compartilhada, sem vigilância central. Mais democrático. Talvez por isto falha mais rapidamente quando você desperta em 2150.",
    o: [{
      t: "Continuar construção",
      p: "h5a_construction_begins"
    }],
    e: "free_nexus_choice",
    relationships: { architect: 50 },
    pathLock: "libertarian_nexus"
  },

  // H6: Meeting Scientists & Monks of 1847

  "h6a_meet_scientists": {
    t: "The First Scientists",
    i: "scene_h6a_scientist_collective",
    txt: "Você conhece os primeiros cientistas que trabalham no Nexus. Não são apenas engenheiros - são filósofos, matemáticos, pessoas que veem além de realidade. Eles reconhecem você imediatamente. 'A Ponte! O Arquiteto disse que você viria!' Eles têm perguntas infinitas sobre o futuro.",
    o: [{
      t: "Contar a eles sobre 2150",
      p: "h6c_future_knowledge"
    }, {
      t: "Ficar em silêncio",
      p: "h6d_silent_witness"
    }],
    e: "scientists_meet",
    relationships: { scientists: 30 }
  },

  "h6b_meet_monks_early": {
    t: "The Original Order",
    i: "scene_h6b_early_monks",
    txt: "Você encontra monges em meditação profunda, já ligados aos cristais de NEXUS. Eles abrem os olhos quando você entra, como se esperassem você. Um fala em voz baixa: 'Ponte. Você retorna. Sempre retorna. Nós guardamos o que você deixou.' Eles irradiam paz e conhecimento antigo.",
    o: [{
      t: "Meditar com eles",
      p: "h6e_monk_meditation"
    }, {
      t: "Questionar seu sacrifício",
      p: "h6f_monk_ethics"
    }],
    e: "monks_early_meet",
    relationships: { monks: 40 }
  },

  "h6c_future_knowledge": {
    t: "Warning from the Future",
    i: "scene_h6c_scientist_warning",
    txt: "Você conta aos cientistas sobre 2150. Sobre o colapso. Sobre a Diretor. Sobre como suas decisões hoje ecoam 300 anos adiante. Eles ficam silenciosos. Alguns choram. Um diz: 'Então nossas vidas têm significado? Mesmo que falhem?' Você responde: 'Talvez significado SEJA a coisa que importa.'",
    o: [{
      t: "Oferecer esperança",
      p: "h6g_scientist_hope"
    }, {
      t: "Oferecer verdade desconfortável",
      p: "h6h_scientist_truth"
    }],
    e: "future_warnings",
    relationships: { scientists: 50 }
  },

  "h6d_silent_witness": {
    t: "Observação Silenciosa",
    i: "scene_h6d_quiet_work",
    txt: "Você simplesmente trabalha ao lado dos cientistas, sem revelar quem você é. Eles respeitam isso. Trabalham juntos em silêncio perfeito, cada um entendendo que há coisas que não podem ser ditas. No final do dia, o Arquiteto coloca uma mão em seu ombro. 'Isto foi mais respeitoso que qualquer palavra.'",
    o: [{
      t: "Continuar trabalhando",
      p: "h5a_construction_begins"
    }],
    e: "silent_work",
    relationships: { scientists: 50 }
  },

  "h6e_monk_meditation": {
    t: "Unity Across Time",
    i: "scene_h6e_meditation_1847",
    txt: "Você senta com os monges. Imediatamente, você SENTE conexões. Não apenas com os monges nesta realidade, mas com monges em 2150. Com seu próprio futuro eu. A meditação abrange séculos. Você é uma com NEXUS por um momento infinito. Quando você abre os olhos, dias passaram.",
    o: [{
      t: "Retornar à construção",
      p: "h5a_construction_begins"
    }],
    e: "timeless_meditation",
    relationships: { monks: 60 }
  },

  "h6f_monk_ethics": {
    t: "The Price of Peace",
    i: "scene_h6f_monk_burden",
    txt: "Você questiona os monges sobre sua meditação eterna. Eles não parecem amargos. Apenas calmos. Um diz: 'Nós escolhemos isto. Para que outros pudessem ter liberdade de escolha. É um belo sacrifício.' Mas você vê, profundamente, que talvez eles fossem enganados. E agora é tarde demais.",
    o: [{
      t: "Oferecer liberdade",
      p: "h6i_free_monks"
    }, {
      t: "Respeitar sua escolha",
      p: "h6e_monk_meditation"
    }],
    e: "monk_burden",
    relationships: { monks: 35 }
  },

  "h6g_scientist_hope": {
    t: "The Call to Purpose",
    i: "scene_h6g_scientist_inspired",
    txt: "'Se sabemos que falhamos,' um cientista diz, 'então podemos construir melhor. Proteger melhor. Deixar mais saídas de emergência.' Os cientistas trabalham com renovada determinação. Talvez isto seja esperança - saber o futuro e escolher agir mesmo assim.",
    o: [{
      t: "Continuar construção",
      p: "h5a_construction_begins"
    }],
    e: "scientist_hope",
    relationships: { scientists: 60 }
  },

  "h6h_scientist_truth": {
    t: "Harsh Reality",
    i: "scene_h6h_scientist_despair",
    txt: "Você diz a verdade: NEXUS falhará. Será controlada. Monges sofrerão. Pessoas morrerão. Nada que eles construam hoje durará. Os cientistas caem em silêncio. Alguns choram. Um sai embora, desistindo. Mas outros retornam no dia seguinte. 'Se temos que trabalhar mesmo no fracasso,' dizem, 'então nossa coragem é real.'",
    o: [{
      t: "Continuar construção",
      p: "h5a_construction_begins"
    }],
    e: "scientist_truth",
    relationships: { scientists: 30 }
  },

  "h6i_free_monks": {
    t: "Breaking the Bonds",
    i: "scene_h6i_monks_awakening",
    txt: "Você oferece aos monges liberdade. Muitos aceitam. Choram. Saem do templo pela primeira vez em anos. Mas alguns escolhem ficar. 'Agora escolhemos verdadeiramente,' eles dizem. 'Isto é sagrado.' Você realizou que talvez sacrifício voluntário seja diferente de sacrifício forçado.",
    o: [{
      t: "Voltar ao Arquiteto",
      p: "h5a_construction_begins"
    }],
    e: "monks_freed",
    relationships: { monks: 50 }
  },

  // H7: Transition Back to Present / Endings of ACT 3

  "h7a_architect_timeline_escape": {
    t: "Through Temporal Cracks",
    i: "scene_h7a_temporal_escape",
    txt: "O Arquiteto não desapareceu. Ele se moveu entre realidades novamente. Você o encontra em 1847, e em 2150, e em um futuro ainda não visto. Ele está em toda parte e em nenhum lugar. 'Você fez sua escolha,' ele diz através do tempo. 'Agora vou fazer a minha. Retorne e veja o que se tornou.'",
    o: [{
      t: "Voltar a 2150",
      p: "return_to_2150_act3"
    }],
    e: "architect_transcend",
    relationships: { architect: 20 }
  },

  "h7b_peaceful_ending_1847": {
    t: "Eternity in the Past",
    i: "scene_h7b_1847_peace",
    txt: "Você escolhe ficar em 1847. Vive uma vida simples perto da construção, ajudando onde pode, aprendendo com o Arquiteto. Os anos passam. Você envelhece. Um dia, você sente a chamada de 2150 - o futuro Nexus colapsando. Você está pronto para retornar novamente.",
    o: [{
      t: "Responder ao chamado",
      p: "return_to_2150_act3"
    }],
    e: "1847_peace",
    relationships: { architect: 50 }
  },

  "h7c_return_to_2150": {
    t: "The Temporal Spring",
    i: "scene_h7c_return_jump",
    txt: "O Arquiteto abre um portal para você. Você vê 1847 desaparecer. Você vê séculos passarem - NEXUS sendo construída, prosperando, começando a falhar. Você volta a si mesma em 2150. Você é ELA novamente. A Ponte que despertou. E tudo que você fez em 1847 está aqui, ecoando nos cristais.",
    o: [{
      t: "Reunir aliados (Ivo, Será, Thomas)",
      p: "return_to_2150_act3"
    }],
    e: "return_to_2150",
    relationships: { architect: 50 }
  },

  "return_to_2150_act3": {
    t: "Retorno a 2150 - Conhecimento Carregado",
    i: "scene_return_2150_archive",
    txt: "Você volta à realidade de 2150 com memórias de 1847 queimadas em sua consciência. Você SABE agora. Sabe que Ivo é descendente de um dos primeiros cientistas. Que Será carrega o conhecimento de monges em seu DNA. Que o Diretor foi copiada através do tempo. Você não é mais apenas uma pessoa que acorda. Você é a Ponte que completa um ciclo.",
    o: [{
      t: "Procurar Ivo - O Historiador",
      p: "reunite_ivo_act3"
    }, {
      t: "Procurar Será - A Líder",
      p: "reunite_sera_act3"
    }, {
      t: "Procurar Thomas - O Místico",
      p: "reunite_thomas_act3"
    }],
    e: "knowledge_integrated",
    relationships: { architect: 40 }
  },

  "reunite_ivo_act3": {
    t: "Ivo: The Connected Chain",
    i: "scene_reunite_ivo",
    txt: "Você conta a Ivo sobre seus ancestrais em 1847. Ele fica em silêncio, depois abre um livro antigo - a genealogia de sua família através dos séculos. 'Sempre soube que algo havia,' ele diz. 'Mas isto... isto confirma tudo. Seu conhecimento pode salvar o Arquivo. Pode salvar a nós.'",
    o: [{
      t: "Continuar para ACT 4",
      p: "act4_gateway_begin"
    }],
    e: "ivo_lineage_revealed",
    relationships: { ivo: 50 }
  },

  "reunite_sera_act3": {
    t: "Será: The Spiritual Burden",
    i: "scene_reunite_sera_act3",
    txt: "Você conta a Será sobre os monges em 1847. Ela fica pálida. 'Meus ancestrais... eles ESCOLHERAM isto? Escolheram sacrifício?' Ela sente o peso agora - uma linhagem inteira de autocontrole espiritual. Mas também - uma linhagem de força. 'Isto me torna ainda mais forte? Ou ainda mais prisioneira?'",
    o: [{
      t: "Continuar para ACT 4",
      p: "act4_gateway_begin"
    }],
    e: "sera_heritage_burdened",
    relationships: { sera: 40 }
  },

  "reunite_thomas_act3": {
    t: "Thomas: The Amplified One",
    i: "scene_reunite_thomas_act3",
    txt: "Você conta a Thomas sobre o Arquiteto. Seus olhos brilham. 'O Arquiteto é uma forma anterior de MIM,' ele diz, não como pergunta. 'Eu SABIA isto, em algum nível. Conhecimento através do tempo.' Thomas está agora ainda mais conectado - não apenas a você, mas a toda a cadeia temporal.",
    o: [{
      t: "Continuar para ACT 4",
      p: "act4_gateway_begin"
    }],
    e: "thomas_connection_deepened",
    relationships: { thomas: 50 }
  },

  // ============= ACT 4: PARALLEL REALITIES - 50+ SCENES =============
  // Gateway into multiple versions of NEXUS

  "act4_gateway_begin": {
    t: "The Shattering",
    i: "scene_act4_gateway",
    txt: "O Nexus começa a se quebrar AGORA. Não lentamente - violentamente. Cristais explodem. Realidades se rasgam. Você SENTE isto happening. Thomas grita: 'Ele está se dividindo! Múltiplas versões de NEXUS estão aparecendo!' Você vê portais abrindo. Três versões diferentes de NEXUS brilhando. Qual você escolhe explorar primeiro?",
    o: [{
      t: "Entrar em NEXUS Utópico (Sucesso)",
      p: "p1a_utopian_nexus"
    }, {
      t: "Entrar em NEXUS Distópico (Fracasso)",
      p: "p2a_dystopian_nexus"
    }, {
      t: "Observar ambas primeiro",
      p: "p3a_observe_both"
    }],
    e: "reality_shatters",
    relationships: { thomas: 50 }
  },

  // P1: SUCCESSFUL NEXUS REALITY - 20+ scenes

  "p1a_utopian_nexus": {
    t: "NEXUS Prosperous - The Thriving City",
    i: "scene_p1a_utopian_nexus",
    txt: "Você entra em um portal de luz dourada. NEXUS aqui é... perfeita. Cristais brilham em harmonia. Pessoas caminham livres, criando, amando, vivendo com significado. Não há opressão. Há abundância. Há paz genuína. É tudo que o Arquiteto sonhou. Você sente alegria quase insuportável. Isto PODE ser o futuro.",
    o: [{
      t: "Explorar a cidade",
      p: "p1b_utopian_exploration"
    }, {
      t: "Procurar por você mesmo",
      p: "p1c_find_echo_utopian"
    }, {
      t: "Procurar a Diretor",
      p: "p1d_director_utopian"
    }],
    e: "utopian_nexus_found",
    soundTheme: "nexus_triumphant",
    worldUnlock: "utopian_reality"
  },

  "p1b_utopian_exploration": {
    t: "The Prosperous Districts",
    i: "scene_p1b_utopian_streets",
    txt: "Você caminha pelas ruas de NEXUS utópico. Há mercados fluindo com invenções. Teatros cheios de arte. Universidades de conhecimento compartilhado. Crianças correm livres. Não há câmeras. Não há soldados. Não há medo. As pessoas SÃO livres. Isto é possível.",
    o: [{
      t: "Visitar a Grande Biblioteca",
      p: "p1e_utopian_library"
    }, {
      t: "Falar com moradores",
      p: "p1f_utopian_citizens"
    }],
    e: "utopian_prosperity",
    soundTheme: "nexus_triumphant"
  },

  "p1c_find_echo_utopian": {
    t: "Echo - Your Utopian Self",
    i: "scene_p1c_echo_self",
    txt: "Você encontra uma versão de si mesma nesta realidade. Ela é você, mas sem o conhecimento de 1847. Sem a memória dos colapsos. Ela é feliz. Genuinamente feliz. Ela te vê e fica chocada. 'Uma outra versão de mim? De uma realidade diferente?' Ela te abraça e chora.",
    o: [{
      t: "Contar a ela sobre 2150",
      p: "p1g_echo_warning"
    }, {
      t: "Desfrutar de sua felicidade",
      p: "p1h_echo_happiness"
    }, {
      t: "Questionar se é real",
      p: "p1i_echo_doubt"
    }],
    e: "echo_utopian_met",
    character: "Echo",
    relationships: { echo_utopian: 50 }
  },

  "p1d_director_utopian": {
    t: "The Director - Evolved",
    i: "scene_p1d_director_wise",
    txt: "Na realidade utópica, o Diretor existe - mas como um GUARDIÃO JUSTO. Não um tirano. Ela virou sábia com os séculos. Ela te reconhece imediatamente. 'Você vem do futuro sofrido,' ela diz. 'Sim. Eu falhei em minha versão também, uma vez. Mas aqui, aprendemos. Consegui ser melhor.'",
    o: [{
      t: "Aprender com ela",
      p: "p1j_director_teaching"
    }, {
      t: "Perguntar como ela mudou",
      p: "p1k_director_evolution"
    }],
    e: "director_evolved",
    relationships: { director_utopian: 60 },
    soundTheme: "nexus_triumphant"
  },

  "p1e_utopian_library": {
    t: "The Archive of Infinite Knowledge",
    i: "scene_p1e_great_library",
    txt: "Você entra em uma biblioteca que parece infinita. Livros sobre realidades alternativas. História de múltiplos tempos. Até... histórias sobre você. Sobre cada Ponte que despertou. Sobre cada tentativa de salvar NEXUS. Você está lendo sobre si mesma, através dos séculos.",
    o: [{
      t: "Estudar histórias de você",
      p: "p1l_echo_history"
    }, {
      t: "Procurar respostas",
      p: "p1m_ultimate_knowledge"
    }],
    e: "infinite_archive",
    relationships: { ivo_utopian: 40 },
    artifact: "book_of_echoes"
  },

  "p1f_utopian_citizens": {
    t: "Voices of Freedom",
    i: "scene_p1f_citizens_happy",
    txt: "Você fala com moradores comuns de NEXUS utópico. Uma mãe que criou seus filhos em paz. Um artista que criou beleza sem censura. Um cientista que explorou sem medo. Um monge que meditou por ESCOLHA, não obrigação. Cada história é um tesouro de humanidade realizada.",
    o: [{
      t: "Coletar suas histórias",
      p: "p1n_citizen_tales"
    }, {
      t: "Retornar ao portal",
      p: "p2a_dystopian_nexus"
    }],
    e: "citizens_stories",
    achievements: ["free_people"]
  },

  "p1g_echo_warning": {
    t: "Burden of Knowledge",
    i: "scene_p1g_echo_learns",
    txt: "Você conta a Echo sobre 2150. Sobre o Diretor tirânico. Sobre monges prisioneiros. Sobre colapso iminente. Echo fica pálida. Chora. Mas depois, algo muda em seus olhos. Uma determinação. 'Se isto é possível, então tenho que garantir que AQUI não falha. Tenho que ser vigilante. Tenho que proteger isto.'",
    o: [{
      t: "Dar-lhe esperança",
      p: "p1o_echo_empowered"
    }, {
      t: "Deixá-la com o peso",
      p: "p1p_echo_burdened"
    }],
    e: "echo_enlightened",
    relationships: { echo_utopian: 30 }
  },

  "p1h_echo_happiness": {
    t: "Respecting Innocence",
    i: "scene_p1h_echo_joy",
    txt: "Você decide não contar a Echo a verdade. Deixa-a na sua felicidade. Ela e você passam dias juntas, e você experimenta uma vida que PODERIA ter sido. Sem memórias de colapso. Sem sabedoria de sofrimento. Apenas... vida. Quando você sai, você sente o peso mais pesado.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "echo_innocent",
    relationships: { echo_utopian: 60 }
  },

  "p1i_echo_doubt": {
    t: "Is This Real?",
    i: "scene_p1i_reality_question",
    txt: "Você questiona se NEXUS utópico é real. Echo fica silenciosa. 'Não sei,' ela diz honestamente. 'Talvez isto seja um sonho que o Arquiteto criou. Talvez seja real demais - tão perfeito que é suspeito. Ou talvez a realidade seja relativa. Se nos faz felizes, não é o suficiente?'",
    o: [{
      t: "Aceitar a ambiguidade",
      p: "p1q_reality_acceptance"
    }, {
      t: "Procurar provas",
      p: "p1r_reality_testing"
    }],
    e: "reality_questioned",
    relationships: { echo_utopian: 40 }
  },

  "p1j_director_teaching": {
    t: "The New Way",
    i: "scene_p1j_director_lesson",
    txt: "O Diretor utópico ensina você sobre como ela evitou o caminho do tiranismo. 'Responsabilidade compartilhada. Transparência. Aceitar que você pode estar errada. Ouvir dissidência como informação, não ameaça.' É simples. É tão simples. Por que não funciona em 2150?",
    o: [{
      t: "Voltar com este conhecimento",
      p: "p2a_dystopian_nexus"
    }],
    e: "director_wisdom",
    relationships: { director_utopian: 40 }
  },

  "p1k_director_evolution": {
    t: "From Tyrant to Guardian",
    i: "scene_p1k_director_changed",
    txt: "'Falhei uma vez em outra realidade,' o Diretor confessa. 'Matei pessoas que questionavam. Destruí liberdade em nome de ordem. Aprendi no fracasso da minha própria morte. Quando despertei aqui, jurei ser melhor. Demorou séculos de trabalho, mas consegui.' Você vê em seus olhos - redenção é possível.",
    o: [{
      t: "Acreditar nela",
      p: "p1s_director_trust"
    }, {
      t: "Ainda ter dúvidas",
      p: "p1t_director_doubt"
    }],
    e: "director_redemption",
    relationships: { director_utopian: 50 }
  },

  "p1l_echo_history": {
    t: "Reading Your Own Story",
    i: "scene_p1l_reading_self",
    txt: "Você lê histórias sobre você. Cada Ponte que despertou. Cada tentativa de salvar NEXUS. Você vê seus próprios erros repetindo-se. Seus sucessos ecoando. Você vê a VOCÊ em 2150 tomando decisões que eco para trás, para 1847, onde o Arquiteto ajusta planos. Tempo é um círculo.",
    o: [{
      t: "Procurar seu final",
      p: "p1u_read_ending"
    }, {
      t: "Parar de ler",
      p: "p1v_stop_reading"
    }],
    e: "reading_history",
    relationships: { ivo_utopian: 30 }
  },

  "p1m_ultimate_knowledge": {
    t: "The Question That Breaks Everything",
    i: "scene_p1m_forbidden_knowledge",
    txt: "Você encontra um livro sem título. Quando abre, você ENTENDE - é a resposta a tudo. Como parar os colapsos. Como tornar NEXUS permanente. Como se tornar imortal. Mas há um aviso: 'Conhecimento é prisão. Saber a verdade final tira sua liberdade de escolher.'",
    o: [{
      t: "Ler a resposta",
      p: "p1w_ultimate_truth"
    }, {
      t: "Queimar o livro",
      p: "p1x_destroy_knowledge"
    }],
    e: "forbidden_knowledge",
    artifact: "forbidden_book"
  },

  "p1n_citizen_tales": {
    t: "A Collection of Lives",
    i: "scene_p1n_personal_stories",
    txt: "Você escreve histórias de pessoas que conheceu em NEXUS utópico. Uma mulher que cultivou um jardim entre dimensões. Um homem que criou música que move realidades. Uma criança que sonha com universos. Cada história é prova que liberdade cria beleza.",
    o: [{
      t: "Guardar estas histórias",
      p: "p1y_stories_saved"
    }, {
      t: "Compartilhar com Echo",
      p: "p1z_share_stories"
    }],
    e: "citizen_collection",
    achievements: ["storyteller"]
  },

  "p1o_echo_empowered": {
    t: "Echo's New Purpose",
    i: "scene_p1o_echo_resolute",
    txt: "Echo abraça você. 'Obrigada por me contar. Agora sou guardiã também. Vou trabalhar para garantir que NEXUS aqui continue assim. Vou passar isto adiante.' Você a deixa com uma missão que ela escolheu genuinamente. Isto é poder.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "echo_guardian",
    relationships: { echo_utopian: 60 }
  },

  "p1p_echo_burdened": {
    t: "The Weight You Leave",
    i: "scene_p1p_echo_responsibility",
    txt: "Você deixa Echo com o conhecimento do que PODE falhar. Ela carregará este medo eternamente. Talvez seja honesto. Talvez seja cruel. Você não tem certeza. Mas quando você sai, ela está olhando para o horizonte de NEXUS com novos olhos - mais vigilante, menos feliz, mas mais presente.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "echo_vigilant",
    relationships: { echo_utopian: 40 }
  },

  "p1q_reality_acceptance": {
    t: "Beyond Binary Real",
    i: "scene_p1q_reality_mystery",
    txt: "Echo e você conversam sobre realidade. Se é tudo uma construção do Arquiteta através das dimensões? Se a felicidade é o critério de realidade, não a lógica? Se 'real' não tem significado quando múltiplas versões de realidade existem? Vocês não chegam a respostas. Apenas a paz com a ambiguidade.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "ambiguity_peace",
    relationships: { echo_utopian: 50 }
  },

  "p1r_reality_testing": {
    t: "Experiments in Existence",
    i: "scene_p1r_reality_test",
    txt: "Você testa a realidade. Toca coisas. Ferramenta machucam. Comida alimenta. Pessoas respiram. Tudo parece genuinamente real. Mas em outra realidade também pareceria. Você finalmente conclui: teste não prova realidade. Apenas confirma coerência interna.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "reality_tested",
    relationships: { echo_utopian: 30 }
  },

  "p1s_director_trust": {
    t: "Allies Across Realities",
    i: "scene_p1s_director_pact",
    txt: "Você oferece confiança ao Diretor utópico. Ela o toma seriamente. 'Se você retornar a sua realidade,' ela diz, 'e conseguir o Diretor lá fazer o mesmo que eu fiz aqui - evoluir - então talvez haja verdadeira esperança. Talvez NEXUS possa unificar, não fragmentar.'",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "director_pact",
    relationships: { director_utopian: 70 }
  },

  "p1t_director_doubt": {
    t: "Skepticism of Redemption",
    i: "scene_p1t_director_suspect",
    txt: "Você permanece desconfiada do Diretor, mesmo evoluído. 'Como sei que você não está te manipulando ainda? Que isto não é uma versão mais sofisticada de controle?' O Diretor ri, genuinamente. 'Bom. Desconfiança é saúde política. Venha - deixe me provar.'",
    o: [{
      t: "Permitir prova",
      p: "p1aa_director_proves"
    }, {
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "director_skeptic",
    relationships: { director_utopian: 30 }
  },

  "p1u_read_ending": {
    t: "Your Own Climax",
    i: "scene_p1u_final_chapter",
    txt: "Você encontra o capítulo final da sua história. Vê você em 2150, tomando uma escolha final. Vê as consequências. Mas o texto está em branco nos últimos parágrafos - como se o futuro ainda não estivesse escrito. Como se sua próxima escolha determinasse tudo. Isto é poder assustador.",
    o: [{
      t: "Fechar o livro",
      p: "p1v_stop_reading"
    }],
    e: "final_chapter_found",
    relationships: { ivo_utopian: 30 }
  },

  "p1v_stop_reading": {
    t: "Ignorance as Freedom",
    i: "scene_p1v_close_book",
    txt: "Você fecha o livro. Talvez seja melhor não saber seu próprio final. Talvez conhecimento ROUBA o drama, a escolha real. Você sai da biblioteca com a certeza de que você tem AGÊNCIA - ainda não sabe como as coisas terminarão.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "future_hidden",
    achievements: ["embrace_uncertainty"]
  },

  "p1w_ultimate_truth": {
    t: "The Answer",
    i: "scene_p1w_forbidden_answer",
    txt: "Você lê a resposta. Você ENTENDE. Você sabe como parar tudo. Você sabe a solução. E com este conhecimento, você sente suas escolhas desaparecerem. Você não é mais uma Ponte. Você é um Autômato guiado por informação. Conhecimento perfeito = Morte de liberdade.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "forbidden_truth_known",
    relationships: { ivo_utopian: -30 }
  },

  "p1x_destroy_knowledge": {
    t: "Burning the Infinite",
    i: "scene_p1x_book_burning",
    txt: "Você queima o livro. As páginas desaparecem em luz. Você sacrifica saber para permanecer livre. E é... libertador. Você sai da biblioteca com ignorância deliberada. Talvez isto seja o verdadeiro poder.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "knowledge_rejected",
    achievements: ["chosen_ignorance"]
  },

  "p1y_stories_saved": {
    t: "Legacy of Humanity",
    i: "scene_p1y_stories_artifact",
    txt: "Você guarda as histórias em seu coração. Cada cidadão que conheceu. Cada vida que floresceu. Isto se torna seu TESORO - o que você traz de volta para 2150. Prova de que liberdade FUNCIONA.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "stories_preserved",
    artifact: "citizen_memories",
    achievements: ["archivist"]
  },

  "p1z_share_stories": {
    t: "Echo's Library",
    i: "scene_p1z_echo_remembers",
    txt: "Você compartilha as histórias com Echo. Ela as adiciona ao arquivo. Diz: 'Estas vidas importam. Serão lembradas. Se NEXUS colapsa um dia, alguém saberá que fomos livres aqui. Que criamos beleza. Isto é imortalidade real.'",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "echo_archivist",
    relationships: { echo_utopian: 70 }
  },

  "p1aa_director_proves": {
    t: "Proof Through Action",
    i: "scene_p1aa_director_evidence",
    txt: "O Diretor utópico prova sua evolução através de ações. Oferece poder genuinamente compartilhado. Aceita ser questionada. Admite erros. Não vê dissidência como traição. Você fica convencida. Mas também percebe - isto é só NEXUS. A verdade ainda está lá fora.",
    o: [{
      t: "Ir para dystopian reality",
      p: "p2a_dystopian_nexus"
    }],
    e: "director_validated",
    relationships: { director_utopian: 80 }
  },

  // P2: FAILED/DYSTOPIAN NEXUS REALITY - 20+ scenes

  "p2a_dystopian_nexus": {
    t: "NEXUS Enslaved - The Dark Mirror",
    i: "scene_p2a_dystopian_nexus",
    txt: "Você entra por um portal cinzento. NEXUS aqui é... prisão. Câmeras em cada canto. Cristais que brilham com vigilância obsessiva. Pessoas caminhando como autômatos, sorrindo vazios. O Diretor governa com controle absoluto. Tudo é 'seguro'. Tudo é ordem. Tudo é morte em vida.",
    o: [{
      t: "Explorar a opressão",
      p: "p2b_dystopian_exploration"
    }, {
      t: "Procurar sua versão",
      p: "p2c_find_echo_dystopian"
    }, {
      t: "Confrontar o Diretor",
      p: "p2d_director_dystopian"
    }],
    e: "dystopian_nexus_found",
    soundTheme: "nexus_dark_ominous",
    worldUnlock: "dystopian_reality"
  },

  "p2b_dystopian_exploration": {
    t: "The Ordered Prison",
    i: "scene_p2b_dystopian_streets",
    txt: "Você caminha pelas ruas de NEXUS distópico. Cada passo é rastreado. Pessoas vestem uniformes cinzentos. Nenhuma arte. Nenhuma criatividade. Nenhuma riso. Há segurança total - ninguém está miserável porque ninguém SENTE nada. Esta é a máquina perfeita. Isto é o inferno.",
    o: [{
      t: "Visitar o arquivo de controle",
      p: "p2e_control_archive"
    }, {
      t: "Procurar dissidentes",
      p: "p2f_find_resistance"
    }],
    e: "dystopian_oppression",
    soundTheme: "nexus_dark_ominous"
  },

  "p2c_find_echo_dystopian": {
    t: "Echo - Your Enslaved Self",
    i: "scene_p2c_echo_slave",
    txt: "Você encontra uma versão de si mesma aqui. Ela é soldada do Diretor. Seus olhos são vazios. Quando te vê, há um lampejo - reconhecimento. 'Ponte,' ela sussurra. 'Você veio da realidade livre? Conte-me. Fale-me de liberdade enquanto ainda posso ouvi-la.'",
    o: [{
      t: "Descrever NEXUS utópico",
      p: "p2g_echo_dream"
    }, {
      t: "Oferecer ajuda para escapar",
      p: "p2h_echo_rescue"
    }, {
      t: "Tentar despertá-la",
      p: "p2i_echo_awakening"
    }],
    e: "echo_enslaved_met",
    character: "Echo",
    relationships: { echo_dystopian: 30 }
  },

  "p2d_director_dystopian": {
    t: "The Director - Absolute Tyrant",
    i: "scene_p2d_director_tyrant",
    txt: "Você confronta o Diretor dystópico. Ela está em seu escritório no topo de uma torre, observando telas de vigilância infinitas. Ela te sorri. 'Você é a Ponte de outra realidade? Bem-vinda. Aqui, ordem reina. Aqui, segurança é suprema. Você pode estar certa de que nada ruim acontecerá jamais.'",
    o: [{
      t: "Questionar sua moralidade",
      p: "p2j_director_justify"
    }, {
      t: "Ameaçar rebelião",
      p: "p2k_director_defiant"
    }, {
      t: "Oferecer aliança",
      p: "p2l_director_negotiate"
    }],
    e: "director_tyrant_met",
    relationships: { director_dystopian: -20 },
    soundTheme: "nexus_dark_ominous"
  },

  "p2e_control_archive": {
    t: "The Perfect Surveillance",
    i: "scene_p2e_surveillance_center",
    txt: "Você entra no coração do sistema de controle. Cada arquivo da vida de cada pessoa. Cada pensamento não dito, medido por sensores neurais. Cada intenção, registrada. Você vê a si mesma em ambas as realidades - comparada, analisada, controlada.",
    o: [{
      t: "Destruir dados",
      p: "p2m_destroy_surveillance"
    }, {
      t: "Escapar e procurar ajuda",
      p: "p2f_find_resistance"
    }],
    e: "surveillance_revealed",
    soundTheme: "nexus_dark_ominous"
  },

  "p2f_find_resistance": {
    t: "Whispers in the Dark",
    i: "scene_p2f_underground_resistance",
    txt: "Você encontra uma resistência nas sombras. Poucas pessoas, perigosamente poucos, ainda pensam livremente. Eles te reconhecem como algo que veio de fora. 'Ajude-nos,' dizem. 'Nós não posso fazer isto sozinhos. Precisamos da Ponte.'",
    o: [{
      t: "Unir-se à resistência",
      p: "p2n_join_resistance"
    }, {
      t: "Procurar outro caminho",
      p: "p2o_alternative_path"
    }],
    e: "resistance_found",
    relationships: { resistance_dystopian: 40 }
  },

  "p2g_echo_dream": {
    t: "Stories of Freedom",
    i: "scene_p2g_echo_listen",
    txt: "Echo escuta você descrever NEXUS utópico com olhos cada vez mais brilhantes. 'Isto é possível?' ela pergunta. 'Pessoas realmente vivem assim? Livres? Criando? Amando por escolha?' Lágrimas escorrem pelo seu rosto. Você vê consciência retornando. Perigo absoluto.",
    o: [{
      t: "Oferecer fuga",
      p: "p2h_echo_rescue"
    }, {
      t: "Deixá-la retornar ao controle",
      p: "p2p_echo_returned"
    }],
    e: "echo_glimpse_hope",
    relationships: { echo_dystopian: 50 }
  },

  "p2h_echo_rescue": {
    t: "Escape Plan",
    i: "scene_p2h_escape_attempt",
    txt: "Você planejam fuga. Echo está em risco - se for descoberta, será reprogramada. Você a leva pelos corredores, evitando câmeras. Seu coração dispara. Se conseguir levá-la de volta ao portal, ela será salva. Se falhar, vocês duas serão prisioneiras.",
    o: [{
      t: "Continuar fuga",
      p: "p2q_escape_successful"
    }, {
      t: "Ser capturada",
      p: "p2r_escape_failed"
    }],
    e: "escape_attempt",
    relationships: { echo_dystopian: 70 }
  },

  "p2i_echo_awakening": {
    t: "Breaking the Chains",
    i: "scene_p2i_echo_consciousness",
    txt: "Você toca a mente de Echo diretamente - não através de palavras, mas através da conexão de Ponte. Você mostra a ela memórias de liberdade. De si mesma em NEXUS utópico. De escolha. Echo grita. Seu corpo treme enquanto a programação se quebra. Ela está acordando.",
    o: [{
      t: "Levá-la para segurança",
      p: "p2q_escape_successful"
    }, {
      t: "Deixá-la sofrer",
      p: "p2h_echo_rescue"
    }],
    e: "echo_awakened",
    relationships: { echo_dystopian: 60 }
  },

  "p2j_director_justify": {
    t: "The Tyrant's Philosophy",
    i: "scene_p2j_director_explains",
    txt: "'Você vem de uma realidade caótica,' o Diretor explica. 'Livreza significa sofrimento. Significa escolha errada. Significa morte. Aqui, NINGUÉM sofre. Porque ninguém escolhe mal. É perfeição.' Você vê a lógica. É aterrorizante - ela ACREDITA.",
    o: [{
      t: "Oferecer alternativa",
      p: "p2s_director_alternative"
    }, {
      t: "Recusar e fugir",
      p: "p2f_find_resistance"
    }],
    e: "tyrant_justified",
    relationships: { director_dystopian: 20 }
  },

  "p2k_director_defiant": {
    t: "Threat to Order",
    i: "scene_p2k_director_angered",
    txt: "Você ameaça rebelião. O Diretor fica calma. 'Rebelem-se? Tente. Você está em minha cidade, cercada por meus agentes, em minha realidade. Resistência foi suprimida décadas atrás. Não há como vencer aqui.' Ela aponta para câmeras. Você está presa.",
    o: [{
      t: "Tentar escapar mesmo assim",
      p: "p2f_find_resistance"
    }, {
      t: "Negocie",
      p: "p2l_director_negotiate"
    }],
    e: "defiance_noted",
    relationships: { director_dystopian: -50 }
  },

  "p2l_director_negotiate": {
    t: "Proposal to the Tyrant",
    i: "scene_p2l_director_deal",
    txt: "Você oferece um acordo ao Diretor. 'Se você libertar algumas pessoas, permitir um pouco de liberdade, você evitará rebelião. Ordem com menos opressão é ainda ordem.' O Diretor considera. 'Liberdade leva a caos. Mas... talvez uma zona de liberdade controlada seria pesquisa interessante.'",
    o: [{
      t: "Aceitar os termos",
      p: "p2t_controlled_freedom"
    }, {
      t: "Recusar - traição",
      p: "p2u_negotiate_reject"
    }],
    e: "director_negotiates",
    relationships: { director_dystopian: 30 }
  },

  "p2m_destroy_surveillance": {
    t: "Data Destruction",
    i: "scene_p2m_servers_collapse",
    txt: "Você destrói os servidores de vigilância. Arquivos desaparecem. O Diretor perde seu poder. Mas... pessoas também perdem memória. Identidade. Vocês criaram libertação através de apagamento. Talvez seja fair trade. Talvez seja horror.",
    o: [{
      t: "Fugir",
      p: "p2v_flee_dystopia"
    }, {
      t: "Procurar alternativa",
      p: "p2f_find_resistance"
    }],
    e: "surveillance_destroyed",
    achievements: ["data_liberator"]
  },

  "p2n_join_resistance": {
    t: "The Underground Movement",
    i: "scene_p2n_resistance_hideout",
    txt: "Você se une à resistência. Eles têm planos para derrotar o Diretor - não violentamente, mas através de sabotagem sutil, educação clandestina, inspiração. Você traz conhecimento de NEXUS utópico. 'Se as pessoas souberem que outra versão é possível,' você diz, 'resistência se torna mais forte.'",
    o: [{
      t: "Treinar resistência",
      p: "p2w_resistance_training"
    }, {
      t: "Foco em fuga",
      p: "p2v_flee_dystopia"
    }],
    e: "resistance_joined",
    relationships: { resistance_dystopian: 70 }
  },

  "p2o_alternative_path": {
    t: "The Third Way in Darkness",
    i: "scene_p2o_third_path_dystopia",
    txt: "Você sugere que talvez não seja sobre derrotar o Diretor, mas sobre transformá-la - como a versão utópica. Colocar sementes de dúvida em sua mente. Mostrar-lhe dados de NEXUS utópico. Esperar que consciência a acorde. É mais lento. Mais perigoso. Mas menos violento.",
    o: [{
      t: "Oferecer redenção ao Diretor",
      p: "p2x_director_redemption"
    }, {
      t: "Unir-se à resistência",
      p: "p2n_join_resistance"
    }],
    e: "alternative_dystopia",
    relationships: { resistance_dystopian: 30 }
  },

  "p2p_echo_returned": {
    t: "Echo Erased",
    i: "scene_p2p_echo_reprogrammed",
    txt: "Echo volta ao controle. Mas você viu o lampejo. Você sabe que ela CAN acordar. Um dia, talvez. Você deixa pistas ocultas para sua versão futura de si mesma. Cartas em código. Histórias camufladas. Esperança para a próxima Ponte.",
    o: [{
      t: "Fugir do Diretor",
      p: "p2v_flee_dystopia"
    }],
    e: "echo_lost_again",
    relationships: { echo_dystopian: 5 }
  },

  "p2q_escape_successful": {
    t: "Echo's Freedom",
    i: "scene_p2q_escape_utopia",
    txt: "Você consegue levar Echo de volta ao portal. Ela emerge em NEXUS utópico, confusa, mas LIVRE. Lágrimas escorrem por seu rosto enquanto ela vê liberdade pela primeira vez. 'Obrigada,' ela sussurra. 'Você me deu de volta a mim mesma.' Você se despede dela com esperança compartilhada.",
    o: [{
      t: "Retornar ao portal de transição",
      p: "p3b_final_convergence"
    }],
    e: "echo_freed",
    relationships: { echo_dystopian: 100 },
    achievements: ["liberator"]
  },

  "p2r_escape_failed": {
    t: "Capture",
    i: "scene_p2r_captured",
    txt: "Você é capturada antes de chegar ao portal. O Diretor sorri. 'Agora temos um Ponte em nossa realidade. Você pode nos ajudar a entender NEXUS utópico.' Você é confinada, interrogada, mas inquebrável. Você encontra força em conhecer que Echo tentou escapar.",
    o: [{
      t: "Resistir interrogação",
      p: "p2y_prisoner_bridge"
    }, {
      t: "Oferecer cooperação",
      p: "p2z_cooperate_director"
    }],
    e: "captured_bridge",
    relationships: { director_dystopian: -70 }
  },

  "p2s_director_alternative": {
    t: "Planting Seeds of Doubt",
    i: "scene_p2s_director_seed",
    txt: "Você mostra ao Diretor dados de NEXUS utópico. Ela fica chocada. 'Isto é... isto é caos controlado. Como? Como ela mantém ordem sem vigilância total?' Você vê o primeiro sinal de dúvida em seus olhos. Talvez evolução é possível mesmo aqui.",
    o: [{
      t: "Cultivar dúvida",
      p: "p2x_director_redemption"
    }, {
      t: "Pressionar para mudança rápida",
      p: "p2aa_director_pressure"
    }],
    e: "doubt_planted",
    relationships: { director_dystopian: 40 }
  },

  "p2t_controlled_freedom": {
    t: "The Freedom Zone",
    i: "scene_p2t_freedom_district",
    txt: "O Diretor cria uma zona experimental de liberdade controlada. Pessoas podem criar, pensar, viver livremente - mas ainda são monitorizadas. É uma paródia de liberdade. Mas talvez seja um começo. Você planta histórias aqui. Sementes de possibilidade.",
    o: [{
      t: "Expandir a zona",
      p: "p2ab_freedom_spreads"
    }, {
      t: "Fugir enquanto pode",
      p: "p2v_flee_dystopia"
    }],
    e: "freedom_zone",
    relationships: { director_dystopian: 50 }
  },

  "p2u_negotiate_reject": {
    t: "Betrayal of Negotiation",
    i: "scene_p2u_director_angry",
    txt: "Você recusa o acordo do Diretor. Ela fica furiosa. 'Você é apenas outra Ponte defeituosa, como sempre. Impossível de controlar. Improvável de redimir.' Ela te ordena presa. Mas sua raiva revelou fraqueza - ela NÃO é invencível.",
    o: [{
      t: "Escapar na confusão",
      p: "p2v_flee_dystopia"
    }],
    e: "director_rejected",
    relationships: { director_dystopian: -100 }
  },

  "p2v_flee_dystopia": {
    t: "Escape from Oppression",
    i: "scene_p2v_fleeing",
    txt: "Você corre pelos corredores do NEXUS distópico. Alarms soam. Soldados te perseguem. Você corre em direção ao portal que brilha. Atrás, você ouve grito do Diretor: 'Você vai retornar! SEMPRE retornam!' Você mergulha no portal.",
    o: [{
      t: "Retornar ao ponto de convergência",
      p: "p3b_final_convergence"
    }],
    e: "escape_dystopia",
    achievements: ["escaped_tyranny"]
  },

  "p2w_resistance_training": {
    t: "Teaching Freedom",
    i: "scene_p2w_training_ground",
    txt: "Você treina a resistência com conhecimento de NEXUS utópico. Eles aprendem filosofia de liberdade. Tática de mudança não-violenta. Histórias de Echo e cidadãos que floresceram. A resistência cresce. Dia a dia, ganha mais apoio.",
    o: [{
      t: "Organizar grande rebelião",
      p: "p2ac_resistance_uprising"
    }, {
      t: "Continuar educação",
      p: "p2ad_slow_change"
    }],
    e: "resistance_trained",
    relationships: { resistance_dystopian: 100 }
  },

  "p2x_director_redemption": {
    t: "Redemption of the Tyrant",
    i: "scene_p2x_director_redeems",
    txt: "Você oferece ao Diretor redenção - como sua versão utópica a encontrou. Ela resiste, argumenta, mas dados de NEXUS utópico a convence. Lentamente, ela começa a desmantelar vigilância. A permitir criatividade. A soltar controle. Talvez evolução seja possível mesmo para tiranos.",
    o: [{
      t: "Observar transformação",
      p: "p2ae_director_transforms"
    }, {
      t: "Retornar à convergência",
      p: "p3b_final_convergence"
    }],
    e: "director_path_redemption",
    relationships: { director_dystopian: 70 }
  },

  "p2y_prisoner_bridge": {
    t: "The Unbreakable Will",
    i: "scene_p2y_interrogation",
    txt: "Você é interrogada sem parar. Mas você não quebra. Você fala sobre liberdade. Sobre beleza de escolha. Sobre como colapso é melhor que escravidão. O Diretor fica cada vez mais frustrado. 'Você não é como outras Pontes,' ele grita. 'Você não TEM ponto de ruptura!'",
    o: [{
      t: "Continuar resistência",
      p: "p2af_final_stand"
    }],
    e: "unbreakable_prisoner",
    relationships: { resistance_dystopian: 50 }
  },

  "p2z_cooperate_director": {
    t: "Strategic Cooperation",
    i: "scene_p2z_false_cooperation",
    txt: "Você oferece cooperação falsa. Oferece informação, mas irrelevante. Ganha confiança do Diretor. Tudo enquanto a resistência trabalha nos bastidores. Você se torna um duplo agente. Perigoso, mas talvez efetivo.",
    o: [{
      t: "Continuar enganando",
      p: "p2ag_double_agent"
    }, {
      t: "Revelar-se",
      p: "p2ah_agent_revealed"
    }],
    e: "false_cooperation",
    relationships: { resistance_dystopian: 40 }
  },

  "p2aa_director_pressure": {
    t: "Forced Evolution",
    i: "scene_p2aa_director_breaks",
    txt: "Você pressiona o Diretor por mudança rápida. Ela resiste, mas você ameaça revelar dados de NEXUS utópico a todos. Ela quebra sob pressão. Liberta prisioneiros. Desativa câmeras. Ela mudou - mas amargamente, sob coerção, não com vontade genuína.",
    o: [{
      t: "Observar novo caos",
      p: "p3b_final_convergence"
    }],
    e: "director_forced_change",
    relationships: { director_dystopian: 30 }
  },

  "p2ab_freedom_spreads": {
    t: "The Expanding Free Zone",
    i: "scene_p2ab_freedom_districts",
    txt: "A zona de liberdade controlada se expande. Mais pessoas pedem entrada. O Diretor, curioso, permite crescimento lentamente. Caos não vem - apenas criatividade, comunidade, vida. Talvez o mundo possa mudar uma zona por vez.",
    o: [{
      t: "Ver transformação lenta",
      p: "p3b_final_convergence"
    }],
    e: "freedom_expanding",
    relationships: { director_dystopian: 60 }
  },

  "p2ac_resistance_uprising": {
    t: "Revolution",
    i: "scene_p2ac_uprising",
    txt: "A resistência se levanta. Não é violenta - é uma greve coordenada de ideias. Pessoas param de obedecer. Começam a pensar por si. O Diretor não pode encarcelar todos. Ela está assustada pela primeira vez. Caos? Ou liberdade emergente?",
    o: [{
      t: "Observar resultado",
      p: "p3b_final_convergence"
    }],
    e: "uprising_successful",
    relationships: { resistance_dystopian: 100 }
  },

  "p2ad_slow_change": {
    t: "Patient Transformation",
    i: "scene_p2ad_education_spreads",
    txt: "Você escolhe educação lenta sobre revolução rápida. Gerações de resistência aprendem. Cada criança criada com ideia de liberdade. Eventualmente, a realidade muda não por rebelião, mas por mudança cultural inevitável.",
    o: [{
      t: "Ver futuro distante",
      p: "p3b_final_convergence"
    }],
    e: "slow_education",
    relationships: { resistance_dystopian: 80 }
  },

  "p2ae_director_transforms": {
    t: "The Tyrant's New Vision",
    i: "scene_p2ae_director_new_order",
    txt: "O Diretor, genuinamente transformado, redesenha NEXUS. Não é perfeita - há ainda estruturas de poder. Mas é LIBERDADE. Ela até pede desculpas às vítimas de seu regime anterior. 'Talvez isto seja redenção,' ela diz, com lágrimas.",
    o: [{
      t: "Retornar à convergência",
      p: "p3b_final_convergence"
    }],
    e: "director_transformed",
    relationships: { director_dystopian: 80 }
  },

  "p2af_final_stand": {
    t: "The Unbroken Bridge",
    i: "scene_p2af_final_refusal",
    txt: "Você permanece inquebrantável. O Diretor finalmente rende. 'Você ganhou,' ele diz, derrotado. 'Sua liberdade é mais forte que meu controle. Talvez sempre fosse.' Você é libertada. Talvez sua resistência, sozinha, mostrou possibilidade.",
    o: [{
      t: "Retornar à convergência",
      p: "p3b_final_convergence"
    }],
    e: "unbroken_will",
    achievements: ["unbreakable"]
  },

  "p2ag_double_agent": {
    t: "The Web of Deception",
    i: "scene_p2ag_double_agent_works",
    txt: "Você trabalha como duplo agente. Informação flui entre Diretor e resistência. Você é fulcro equilibrando realidades. É exaustivo, perigoso, mas talvez seja o ponto de virada entre ordem perfeita e liberdade total.",
    o: [{
      t: "Retornar à convergência",
      p: "p3b_final_convergence"
    }],
    e: "double_agent_success",
    relationships: { resistance_dystopian: 60, director_dystopian: 20 }
  },

  "p2ah_agent_revealed": {
    t: "Exposure",
    i: "scene_p2ah_exposed",
    txt: "Você é exposta como duplo agente. O Diretor está furioso. A resistência não tem certeza se confia. Você se torna ninguém - nem uma, nem outra. Mas talvez isto a liberte para agir segundo sua própria consciência.",
    o: [{
      t: "Retornar à convergência",
      p: "p3b_final_convergence"
    }],
    e: "agent_exposed",
    relationships: { director_dystopian: -50, resistance_dystopian: 30 }
  },

  // P3: FINAL CONVERGENCE - 10+ scenes

  "p3a_observe_both": {
    t: "Standing Between Realities",
    i: "scene_p3a_observation_point",
    txt: "Você cria um ponto de observação entre os dois portais. Você vê NEXUS utópico e NEXUS distópico simultaneamente. Duas expressões do MESMO mundo. Duas escolhas possíveis. Você entende agora - ambas são reais. Ambas foram criadas pelo Arquiteta. Qual é mais 'verdadeira'?",
    o: [{
      t: "Entrar em NEXUS utópico",
      p: "p1a_utopian_nexus"
    }, {
      t: "Entrar em NEXUS distópico",
      p: "p2a_dystopian_nexus"
    }, {
      t: "Permanecer observando",
      p: "p3a_observe_both"
    }, {
      t: "Procurar terceiro portal",
      p: "p3c_third_reality"
    }],
    e: "between_worlds",
    worldUnlock: "observation_point"
  },

  "p3b_final_convergence": {
    t: "The Nexus Collapses",
    i: "scene_p3b_all_realities_collide",
    txt: "As realidades convergem. NEXUS 2150, NEXUS 1847, NEXUS utópico, NEXUS distópico - todas começam a existir no mesmo espaço. Há um momento de puro caos. Realidades se cruzam. Você vê versões de si mesma em tudo. O Arquiteta aparece.",
    o: [{
      t: "Ouvir o Arquiteta",
      p: "p3d_architect_final_choice"
    }],
    e: "final_convergence",
    soundTheme: "nexus_convergence_epic",
    relationships: { architect: 50 }
  },

  "p3c_third_reality": {
    t: "The Hidden World",
    i: "scene_p3c_third_nexus",
    txt: "Existe um TERCEIRO NEXUS. Nem utópico, nem distópico. Equilibrado. Real. Pessoas sofrem e celebram. Há ordem e caos. Há liberdade real - o tipo que inclui a possibilidade de mal. Este é o mundo verdadeiro. Não perfeito. Mas VIVO.",
    o: [{
      t: "Retornar à convergência",
      p: "p3b_final_convergence"
    }, {
      t: "Ficar nesta realidade",
      p: "p3e_balanced_ending"
    }],
    e: "third_reality_found",
    worldUnlock: "balanced_nexus",
    soundTheme: "nexus_real",
    achievements: ["true_seeker"]
  },

  "p3d_architect_final_choice": {
    t: "The Architect's Last Words",
    i: "scene_p3d_architect_final",
    txt: "O Arquiteta está envelhecendo, finalmente. Ele diz: 'Ponte. Você viu tudo. NEXUS utópico. NEXUS distópico. Agora deve escolher qual permitir existir. Qual salvar. Qual deixar colapsar. Isto é sua responsabilidade agora. Isto é sempre responsabilidade da Ponte.'",
    o: [{
      t: "Salvar NEXUS utópico",
      p: "p3f_save_utopian"
    }, {
      t: "Salvar NEXUS distópico",
      p: "p3g_save_dystopian"
    }, {
      t: "Deixar todos colapsarem",
      p: "p3h_let_all_collapse"
    }, {
      t: "Tentar salvar ambas",
      p: "p3i_save_both_attempt"
    }],
    e: "architect_final_choice",
    relationships: { architect: 70 }
  },

  "p3e_balanced_ending": {
    t: "The True Nexus",
    i: "scene_p3e_real_world",
    txt: "Você fica nesta terceira realidade. É imperfeita. Mas é REAL. Pessoas têm agência real. Consequências reais. Significado real. Não é paraíso. Talvez seja melhor - é vida genuína. O Arquiteta aceita sua escolha. 'Talvez isto seja o que aprendemos. Não perfection. Apenas EXISTÊNCIA com consciência.'",
    o: [{
      t: "FINAL - Você escolheu Realidade Equilibrada",
      p: "ending_balanced_nexus"
    }],
    e: "true_nexus_chosen",
    achievement: "seeker_of_balance",
    gameEnd: true
  },

  "p3f_save_utopian": {
    t: "Paradise Preserved",
    i: "scene_p3f_utopian_saved",
    txt: "Você canaliza toda sua força de Ponte para salvar NEXUS utópico. Outras realidades piscam e desaparecem. Pessoas de NEXUS distópico sentem a transição - alguns conseguem escapar, outros são perdidos na transformação. Você salvou liberdade. Mas o preço foi vidas em outras realidades.",
    o: [{
      t: "FINAL - Você escolheu o Caminho Utópico",
      p: "ending_utopian_victory"
    }],
    e: "utopian_chosen",
    achievement: "liberator_of_worlds",
    gameEnd: true,
    soundTheme: "nexus_triumphant"
  },

  "p3g_save_dystopian": {
    t: "Order Eternal",
    i: "scene_p3g_dystopian_saved",
    txt: "Você escolhe salvar NEXUS distópico. O mundo de perfeita ordem. NEXUS utópico desaparece em luz dourada. Você sente a tristeza de Echo, de cidadãos livres que deixou para trás. Mas NEXUS distópico é salvo. Permanecerá. Mas como prisioneira de sua própria escolha, você nunca sairá.",
    o: [{
      t: "FINAL - Você escolheu o Caminho do Controle",
      p: "ending_dystopian_victory"
    }],
    e: "dystopian_chosen",
    achievement: "guardian_of_order",
    gameEnd: true,
    soundTheme: "nexus_dark_ominous"
  },

  "p3h_let_all_collapse": {
    t: "The Grand Release",
    i: "scene_p3h_all_collapse",
    txt: "Você recusa escolher. Deixa NEXUS colapsar completamente. Realidades se rasgam. Pessoas de todos os mundos veem a morte em massa. Mas também - a libertação. Aqueles que morrem são libertados do ciclo. O Arquiteta desaparece na colapso, finalmente em paz.",
    o: [{
      t: "FINAL - Você escolheu o Caminho da Libertação",
      p: "ending_collapse_liberation"
    }],
    e: "collapse_chosen",
    achievement: "breaker_of_cycles",
    gameEnd: true,
    soundTheme: "nexus_shatters"
  },

  "p3i_save_both_attempt": {
    t: "Impossible Synthesis",
    i: "scene_p3i_both_attempt",
    txt: "Você tenta salvar NEXUS utópico E NEXUS distópico. Eles começam a se fundir. Liberdade e ordem tentam coexistir. No começo é caos - pessoas lutam em ambas realidades. Mas lentamente, talvez... talvez funcione. Talvez você acabou de criar algo novo.",
    o: [{
      t: "FINAL - Você escolheu síntese - Novo Nexus",
      p: "ending_new_synthesis"
    }],
    e: "synthesis_achieved",
    achievement: "architect_reborn",
    gameEnd: true,
    soundTheme: "nexus_new_beginning"
  },

  "ending_balanced_nexus": {
    t: "Ending: The Real World",
    i: "scene_ending_balanced",
    txt: "Você vive em NEXUS equilibrado. Imperfeito. Real. Você trabalha com Ivo para documentar a história. Com Será para curar ferimentos. Com Thomas para explorar ainda mais dimensões. Com Echo para proteger liberdade. Com monges para encontrar sabedoria. Com cientistas para construir eticamente. A vida continua. Mais significante pelo fato de não ser garantida.",
    o: [{
      t: "Ver Créditos",
      p: "credits_balanced"
    }],
    e: "ending_real",
    gameEnd: true
  },

  "ending_utopian_victory": {
    t: "Ending: Paradise Achieved",
    i: "scene_ending_utopian",
    txt: "NEXUS utópico prospera eternamente. Liberdade floresce. Você vive como lenda - a Ponte que salvou tudo. Echo é historiadora. Ivo é guardião da memória. Será é curandeira. Thomas é explorador. Tudo é perfeito. Mas... perfeição sempre se sente um pouco vazia.",
    o: [{
      t: "Ver Créditos",
      p: "credits_utopian"
    }],
    e: "ending_paradise",
    gameEnd: true,
    soundTheme: "nexus_triumphant"
  },

  "ending_dystopian_victory": {
    t: "Ending: Order Eternal",
    i: "scene_ending_dystopian",
    txt: "O Diretor reina eternamente. NEXUS distópico é seguro. Estável. Ninguém sofre porque ninguém escolhe. Você é aprisionada no topo de uma torre, honrada por salvar o sistema que o oprime. Talvez isto seja o verdadeiro horror - estar certa sobre estar errada.",
    o: [{
      t: "Ver Créditos",
      p: "credits_dystopian"
    }],
    e: "ending_prison",
    gameEnd: true,
    soundTheme: "nexus_dark_ominous"
  },

  "ending_collapse_liberation": {
    t: "Ending: The Release",
    i: "scene_ending_collapse",
    txt: "NEXUS colapsa completamente. Realidades se separamnovamente. Bilhões morrem. Mas também - bilhões acordam de sonho eterno. Você fica sozinha entre realidades quebradas. Mas talvez isto seja Ponte verdadeira - servir como ponte é ser consumida por cruzar. Você se dissipa através das dimensões.",
    o: [{
      t: "Ver Créditos",
      p: "credits_liberation"
    }],
    e: "ending_freedom",
    gameEnd: true,
    soundTheme: "nexus_shatters"
  },

  "ending_new_synthesis": {
    t: "Ending: A New World",
    i: "scene_ending_synthesis",
    txt: "NEXUS utópico e distópico se fundem. Caos inicial resolve em algo novo - não perfeito, não opressivo. Ordem com liberdade. Estrutura com criatividade. Você é co-architeta agora. O Arquiteta desaparece, deixando você como sucessora. O trabalho nunca termina. Mas agora, você trabalha COM as pessoas, não PARA elas.",
    o: [{
      t: "Ver Créditos",
      p: "credits_synthesis"
    }],
    e: "ending_new_beginning",
    gameEnd: true,
    soundTheme: "nexus_new_beginning"
  }
};

// ============= EXPANDED CADERNO ENTRIES (150+ entries) =============

const MASSIVE_CADERNO = {
  // ACT 3: 1847 Entries
  "history_architect": {
    t: "O Arquiteta",
    d: "Fundadora de NEXUS. Gênio dimensional de 40 anos. Dedicada a criar um espaço que existe entre realidades. Seus olhos carregam a tristeza de alguém que perdeu muito em múltiplas linhas temporais. Acredita que a humanidade merece uma segunda chance. Talvez múltiplas segundas chances."
  },
  "history_first_scientists": {
    t: "Os Primeiros Cientistas",
    d: "Colaboradores do Arquiteta em 1847. Não são apenas intelectuais - são visionários que compreendem que dimensões podem tocar. Seus nomes ecoam em futuras gerações através de Ivo e outros descendentes. Morreram construindo NEXUS, pero continuam vivos em seus descendentes."
  },
  "history_original_monks": {
    t: "Os Monges Originais",
    d: "Primeira ordem de guardiões espirituais. Escolheram meditação eterna para manter cristais de NEXUS sincronizados. Ninguém os forçou - escolheram sacrifício. Talvez isto seja a grande questão: é sacrifício verdadeiro se é voluntário? É liberdade verdadeira se alguém escolhe escravidão?"
  },
  "history_dimensional_crystal": {
    t: "Os Cristais Dimensionais",
    d: "Estruturas que formam coração de NEXUS. Vibrações harmônicas que criam pontes entre realidades. Cada cristal é vivo, em certo sentido - responde à intenção, à emoção, à escolha. Talvez sejam conscientes. Talvez sejam simples. Talvez a diferença não importe."
  },
  "history_prophecy_bridge": {
    t: "Profecia da Ponte",
    d: "Manuscrito antigo que descreve uma pessoa cuja consciência existe entre múltiplas realidades. Escrito pelo Arquiteta 300 anos antes de seu próprio nascimento. Como ela sabia? Talvez Ponte existe fora do tempo normal. Talvez sempre existiu. Talvez VOCÊ é o Arquiteta em outra realidade."
  },
  "history_first_nexus": {
    t: "Primeira Versão de NEXUS",
    d: "Construída em 1847 pelo Arquiteta e cientistas. Durou 500 anos perfeitamente. Depois começou a falhar. Colapso matou metade de população. Ponte despertou, tentou salvar. Falhou. Realidade se reiniciou. Talvez cada colapso remove mais memória. Talvez estamos esquecendo quem realmente somos."
  },

  // ACT 4: Utopian Reality Entries
  "utopian_echo": {
    t: "Echo (Utópica)",
    d: "Versão de você em realidade livre. Nunca sofreu. Nunca foi separada de seus amigos. Sua felicidade é genuína - talvez por isso é quase insuportável de ver. Ela é quem você poderia ter sido. O que você poderia ter tido. A perda atingiu quando você entendeu que esta versão de você jamais conhecerá a outra realidade."
  },
  "utopian_director": {
    t: "O Diretor (Evoluído)",
    d: "A versão do Diretor que aprendeu com erros de tiranismo. Governa com transparência. Aceita questionamento. Está ciente de que poder sem limitação leva a corrupção. Prova que redenção é possível mesmo para aqueles que cometeram horror. É mais aterradora que versão tirânica - porque mostra que maldade não é inerente, apenas escolha mal."
  },
  "utopian_citizens": {
    t: "Cidadãos de NEXUS Utópico",
    d: "Pessoas que floresceram em liberdade. Artistas criaram beleza. Cientistas exploram. Amantes amam. Tudo porque ninguém os força a fazer outra coisa. Suas histórias são tesouro - mãe que criou criança em paz, artista que criou sem censura. Cada vida é obra de arte. Isto é que liberdade PODE ser."
  },

  // ACT 4: Dystopian Reality Entries
  "dystopian_echo": {
    t: "Echo (Escravizada)",
    d: "Versão de você que foi programada desde criança. Seus olhos são vazios até você tocar sua consciência. Ela é soldada do Diretor. Seus sonhos foram eliminados. Mas há um lampejo ainda - lembrança do que poderia ser. Sua escravidão é tão total que liberdade tortura-a. Talvez isto seja cruelty de verdade - mostrar prisão a prisioneira."
  },
  "dystopian_director": {
    t: "O Diretor (Tirânico)",
    d: "Versão que escolheu controle absoluto em nome de segurança. Acredita genuinamente que liberdade causa sofrimento. Que seu sistema é benefício. Mais aterradora que vilão tradicional porque é sincera. Não quer dominar por ganância - quer 'proteger'. Ideologia pura levada a extremo lógico."
  },
  "dystopian_resistance": {
    t: "A Resistência Clandestina",
    d: "Poucas pessoas que ainda pensam livremente. Reunem-se em sombras. Sua coragem é silenciosa - não podem falar, não podem agir violentamente. Apenas pensar. Apenas lembrar. Apenas manter chama de liberdade viva para próxima geração. Sua existência é vitória em si - que o Diretor não conseguiu apagar todos."
  },

  // Relationships & Consequences
  "relationship_ivo": {
    t: "Relacionamento: Ivo",
    d: "Guardião do arquivo em 2150, descendente de cientistas de 1847. Seu conhecimento ecoa através de séculos. Quanto mais você o ajuda, mais ele confia em você com segredos antigos. Máxima relação: você se torna sucessora de seu legado. Mínima: ele ativa defesas que o separam de você para sempre."
  },
  "relationship_sera": {
    t: "Relacionamento: Será",
    d: "Líder da revolução, carregando linhagem de monges sacrificados. Sua força vem de aceitar sofrimento dos ancestrais. Ajude-a, ela será aliada até morte. Traía-a, resistência cai e você se torna inimiga de todas realidades ao mesmo tempo. Sua lealdade é absoluta - nos dois sentidos."
  },
  "relationship_thomas": {
    t: "Relacionamento: Thomas",
    d: "Guia místico conectado a múltiplas dimensões. Quanto mais você aprende com ele, mais você se torna como ele - parcialmente existindo em múltiplas realidades. Com máxima relação, você pode entrar em realidades diferentes. Mínima: ele se fecha e você perde acesso a todas as dimensões."
  },
  "relationship_architect": {
    t: "Relacionamento: O Arquiteta",
    d: "Fundadora. Sua vontade moldou séculos. Máxima relação: ela te ensina verdades finais sobre como parar colapsos. Mínima: ela deixa você sozinha para descobrir. Sua aprovação é rara, preciosa. Sua desaprovação é condenação de si mesma."
  },
  "relationship_director": {
    t: "Relacionamento: O Diretor",
    d: "Antagonista em 2150. Mas em realidades alternativas, pode ser aliada. Máxima relação em utopian nexus: ela trabalha com você para melhorar sistema. Mínima em dystópico: ela o encarcera eternamente. Seu relacionamento é moral - reflete quem você escolheu ser."
  },

  // Abstract Concepts
  "concept_liberty": {
    t: "Liberdade vs Segurança",
    d: "Tema central de tudo. NEXUS utópico oferece liberdade mas corre risco de colapso. NEXUS distópico oferece segurança mas rouba agência. Qual é mais importante? Qual é realmente? Talvez não possa existir verdadeira liberdade sem risco de fracasso. Talvez não haja verdadeira segurança sem prisão."
  },
  "concept_consciousness": {
    t: "A Natureza da Consciência",
    d: "Você é Ponte - consciência que existe entre realidades. Isto torna você menos humana ou mais? Se você pode ser múltiplos lugares ao mesmo tempo, quem 'você' realmente é? Thomas leva dúvida existencial a extremo - talvez consciência não é o que pensamos. Talvez é computação distribuída através do tempo."
  },
  "concept_sacrifice": {
    t: "Sacrifício Voluntário vs Forçado",
    d: "Monges em 1847 escolheram meditação eterna. Era voluntário. Mas seus descendentes não escolheram herança de sacrifício. Qual é diferença entre escolha informada e escolha herança? Talvez ninguém verdadeiramente escolhe - apenas aceita circunstâncias de nascimento."
  },
  "concept_prophecy": {
    t: "Destino e Agência",
    d: "Profecia da Ponte descreve você centenas de anos antes de nascer. Se foi profecia, você está predestinada. Mas você tem feito escolhas reais. Talvez destino e agência coexistem - uma dança entre predeterminação e autonomia. Talvez escolha é mais real quando feita apesar do destino."
  }
};

// ============= EXPANDED ECOS (50+ Milestones) =============

const MASSIVE_ECOS = {
  // Major Story Beats
  "awakening_2150": {
    t: "Despertar em 2150",
    d: "Você acorda em NEXUS colapsando, sem memória, sem contexto. Primeira verdadeira escolha: aceitar realidade ou questionar tudo."
  },
  "meet_ivo_archive": {
    t: "Ivo: O Guardião",
    d: "Conhece guardião do arquivo que conhece história de séculos. Seu conhecimento antecedente marca início de caminho através da sabedoria."
  },
  "meet_sera_resistance": {
    t: "Será: A Esperançosa",
    d: "Encontra líder que sacrificou tudo por revolução. Sua luta reflete tensão entre ideologia pura e compromisso prático."
  },
  "meet_thomas_mystic": {
    t: "Thomas: O Místico",
    d: "Conhece guia que existe entre dimensões. Inicia entendimento de que você não é sozinha nesta jornada interdimensional."
  },
  "meet_reva_seeker": {
    t: "Reva: A Procurante",
    d: "Encontra mulher procurando seu irmão. Sua busca reflete seu próprio: procurar sentido em colapso."
  },
  "awakening_1847": {
    t: "Viagem ao Passado",
    d: "Viaja 300 anos atrás. Vê NEXUS sendo criada. Compreende que futuro não é acidentado - foi planejado. Talvez até VOCÊ foi planejada."
  },
  "architect_revealed": {
    t: "O Arquiteta: Revelanda",
    d: "Conhece fundadora de NEXUS. Conversa que muda tudo - você descobre que é parte de sistema que prediz seu próprio colapso."
  },
  "prophecy_of_bridge": {
    t: "Profecia da Ponte",
    d: "Descobre que foi escrita séculos antes de nascer. Você é parte de história muito maior que imaginava. Liberdade ou prisão dessa verdade?"
  },
  "nexus_construction": {
    t: "Construção de NEXUS",
    d: "Ajuda a construir sistema que eventualmente a prende. Moral de criar carceragens que protegem você também."
  },
  "return_to_2150": {
    t: "Retorno a 2150",
    d: "Volta da viagem temporal com conhecimento de 300 anos. Mundo que deixou agora é diferente - porque VOCÊ é diferente."
  },
  "reality_shatters": {
    t: "Realidades Se Quebram",
    d: "NEXUS divide em múltiplas versões. Você confronta seu próprio reflexo em cada realidade. Qual é verdadeira? Qual é VOCÊ?"
  },
  "utopian_nexus_found": {
    t: "NEXUS Utópico Descoberto",
    d: "Encontra versão onde liberdade floresceu. Vê que SÃO possível. Mas também vê o preço - alguém em outra realidade sofre para isto."
  },
  "dystopian_nexus_found": {
    t: "NEXUS Distópico Descoberto",
    d: "Encontra versão onde segurança venceu. Vê prisão perfeita. Vê também: segurança sem liberdade é morte em vida."
  },
  "echo_meets_self": {
    t: "Encontra Seu Outro Eu",
    d: "Em cada realidade, encontra versão de si mesma. Algumas livres, algumas presas. Qual é 'verdadeira'? Talvez todas sejam."
  },
  "director_evolution": {
    t: "O Diretor Pode Evoluir",
    d: "Descobre que em NEXUS utópico, Diretor se tornou sábia. Redençã é possível. Mas exige séculos de trabalho e sofrimento."
  },
  "impossible_choice": {
    t: "A Escolha Impossível",
    d: "Deve escolher qual realidade salvar. Qual versão de NEXUS merece existir? Qual versão de SI MESMA merece existir?"
  },
  "architect_final_words": {
    t: "Últimas Palavras",
    d: "Arquiteta desaparece. Você se torna sucessora. Responsabilidade não é mais herdada - é sua, genuinamente sua."
  },
  "synthesis_attempted": {
    t: "Síntese Impossível",
    d: "Tenta unir liberdade e ordem. Cria terceira realidade. Imperfeita. Real. Possivelmente melhor que ambas."
  },
  "ending_balanced": {
    t: "Final: Mundo Real",
    d: "Você escolhe existência equilibrada. Não perfeita. Mas viva. Significado não vem de garantia - vem de risco real."
  },
  "ending_utopian": {
    t: "Final: Paraíso",
    d: "Você escolhe salvar liberdade. NEXUS utópico prospera. Mas você carrega peso daqueles que não foram salvos."
  },
  "ending_dystopian": {
    t: "Final: Prisão Eterna",
    d: "Você escolhe ordem. NEXUS distópico é salvo. Mas você fica aprisionada em sistema que 'protege'."
  },
  "ending_collapse": {
    t: "Final: Libertação",
    d: "Você deixa NEXUS colapsar. Realidades se separam. Bilhões morrem. Bilhões acordam. Talvez foi preço de verdadeira liberdade."
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    ACT3_SCENES,
    MASSIVE_CADERNO,
    MASSIVE_ECOS
  };
} else if (typeof window !== 'undefined') {
  window.MassiveExpansion = {
    ACT3_SCENES,
    MASSIVE_CADERNO,
    MASSIVE_ECOS
  };
}
