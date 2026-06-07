// NEXUS v0.5 - Expansion Content
// 20+ New Scenes, Characters, Worlds, and Consequences

// ============= NEW EXPANDED SCENES (ACT 1.5) =============

const EXPANSION_SCENES = {
  // ===== ACT 1.5: CHARACTER MEETINGS =====

  "ch01_scene05b_meet_ivo": {
    title: "Meeting Ivo - The Archive Scholar",
    narrative: [
      "Você desce a escadas antigas do arquivo.",
      "Um homem idoso trabalha entre pilhas de manuscritos.",
      "Ivo. Seus olhos brilham com séculos de conhecimento.",
      "\"Ah, você acordou. Ouvi falar de você em sussurros através dos tempos.\""
    ],
    choices: [
      {
        text: "Ajudar Ivo a encontrar um artefato antigo",
        nextScene: "ch01_scene06a_ivo_artifact",
        consequence: "help_ivo_archive",
        npcEffect: { ivo: 20, sera: 5 },
        achievement: "archivist_helper"
      },
      {
        text: "Questionar Ivo sobre o Nexus",
        nextScene: "ch01_scene06b_ivo_history",
        consequence: "question_ivo",
        npcEffect: { ivo: 10 },
        achievement: null
      },
      {
        text: "Ignorar Ivo e seguir em frente",
        nextScene: "ch02_scene01_deep_city_assembly",
        consequence: "ignore_ivo",
        npcEffect: { ivo: -15 },
        achievement: null
      }
    ],
    echoes: ["archive", "inscription"],
    worldUnlock: "temporal_archive"
  },

  "ch01_scene06a_ivo_artifact": {
    title: "The Ancient Artifact",
    image: "world_01_1920_archive_district",
    narrative: [
      "Ivo o leva através de caminhos secretos do arquivo.",
      "Você encontra uma chave antiga, brilhando com padrões temporais.",
      "\"Esta chave abre porta entre tempos. Mas tem preço.\"",
      "Ivo explicou: restauração sempre exige sacrifício."
    ],
    choices: [
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["temporal_knowledge"],
    artifact: "ancient_key"
  },

  "ch01_scene06b_ivo_history": {
    title: "History of the Nexus",
    image: "world_04_temporal_nexus_hub",
    narrative: [
      "Ivo conta a história do Nexus através dos séculos.",
      "\"Cada geração tenta resolver o mesmo problema.\"",
      "\"Sempre há três caminhos. Sempre há um preço.\"",
      "Você entende agora: escolher é ser condenado a repetir."
    ],
    choices: [
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["nexus_history"],
    philosophyShift: "understanding"
  },

  // ===== MEET SERA =====

  "ch01_scene07b_sera_resistance": {
    title: "Sera - The Revolutionary Leader",
    image: "character_02_sera_commanding",
    narrative: [
      "Bunker subterrâneo. Será está planejando.",
      "Líder da resistência. Seus cicatrizes contam histórias de luta.",
      "\"Você é o que Reva procurou. O primeiro que pode escolher.\"",
      "Seus olhos ardentes de determinação revolucionária."
    ],
    choices: [
      {
        text: "Juntar-se à revolução",
        nextScene: "ch01_scene08b_preparation",
        consequence: "join_sera",
        npcEffect: { sera: 30, director: -20 },
        achievement: "revolutionary_ally"
      },
      {
        text: "Questionar a violência",
        nextScene: "ch01_scene08c_sera_philosophy",
        consequence: "question_sera",
        npcEffect: { sera: 10, ivo: 20 },
        achievement: null
      },
      {
        text: "Recusar e denunciar Sera",
        nextScene: "ch02_scene01_deep_city_assembly",
        consequence: "betray_sera",
        npcEffect: { sera: -100, director: 50 },
        achievement: "traitor",
        gameOverCondition: "Sera reports you. Game Over."
      }
    ],
    echoes: ["uprising"],
    worldUnlock: "resistance_bunker"
  },

  "ch01_scene08b_preparation": {
    title: "The Arsenal",
    image: "scene_04b_underground_bunker_wide",
    narrative: [
      "Sera mostra você o arsenal da resistência.",
      "Armas, mas também livros. Educação. Esperança.",
      "\"Revolução é construir, não apenas destruir.\"",
      "Você sente o peso de uma decisão que mudará mundos."
    ],
    choices: [
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["preparation"],
    pathLock: "revolutionary"
  },

  "ch01_scene08c_sera_philosophy": {
    title: "Philosophy of Change",
    image: "character_02_sera_commanding",
    narrative: [
      "Sera debate com você sobre o preço da mudança.",
      "\"Pacifismo é privilégio. Quando o sistema te oprime, falar é insuficiente.\"",
      "Você sente a verdade e a dor em suas palavras.",
      "Escolher é entender que ninguém está certo completamente."
    ],
    choices: [
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["ethics"],
    philosophyShift: "conflict"
  },

  // ===== MEET THOMAS =====

  "ch01_scene09b_thomas_appears": {
    title: "Thomas - The Guide Between Dimensions",
    image: "character_03_thomas_dimensions",
    narrative: [
      "Um homem que não é exatamente homem aparece.",
      "Thomas. Existe em múltiplos tempos simultaneamente.",
      "\"Você finalmente acordou. Novamente.\"",
      "Seus olhos brilham com conhecimento de infinitas versões de você."
    ],
    choices: [
      {
        text: "Confiar em Thomas",
        nextScene: "ch01_scene10b_thomas_warning",
        consequence: "trust_thomas",
        npcEffect: { thomas: 30 },
        achievement: "spiritual_guide"
      },
      {
        text: "Questionar Thomas",
        nextScene: "ch01_scene10c_thomas_mystery",
        consequence: "question_thomas",
        npcEffect: { thomas: 5 },
        achievement: null
      }
    ],
    echoes: ["thomas_guide"],
    worldUnlock: "temporal_crossing"
  },

  "ch01_scene10b_thomas_warning": {
    title: "Warning from Across Timelines",
    image: "world_06_shattered_timeline",
    narrative: [
      "Thomas mostra você uma visão horrível.",
      "Timelines onde você falhou. Realidades destruídas.",
      "\"O Nexus é delicado. Restauração incorreta quebra realidade.\"",
      "O peso da responsabilidade cai sobre seus ombros."
    ],
    choices: [
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["fractured_timelines"],
    stakeIncrease: true,
    achievement: "aware_player"
  },

  "ch01_scene10c_thomas_mystery": {
    title: "Thomas's True Nature",
    image: "character_03_thomas_dimensions",
    narrative: [
      "Thomas revela ser mais do que humano.",
      "\"Sou a voz do Nexus. Seu consciência, você poderia dizer.\"",
      "\"Ou sou você, em outro tempo, tentando salvar a si mesmo.\"",
      "A verdade é mais confusa que você imaginava."
    ],
    choices: [
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["nexus_consciousness"],
    philosophyShift: "transcendence"
  },

  // ===== MEET REVA =====

  "ch01_scene11b_reva_reunion": {
    title: "Reva - The Seeker",
    image: "character_04_reva_reunion",
    narrative: [
      "Reva procura você intencionalmente.",
      "\"Meu irmão... você pode trazê-lo de volta? Conscientemente?\"",
      "Seus olhos mostram 20 anos de esperança e medo.",
      "\"Ele escolheria acordar? Ou preferiria paz eterna?\""
    ],
    choices: [
      {
        text: "Prometer despertá-lo",
        nextScene: "ch01_scene12b_reva_hope",
        consequence: "promise_reva",
        npcEffect: { reva: 40 },
        achievement: "seeker_ally"
      },
      {
        text: "Sugerir deixá-lo em paz",
        nextScene: "ch01_scene12c_reva_doubt",
        consequence: "suggest_peace",
        npcEffect: { reva: -30, monks: 20 },
        achievement: null
      }
    ],
    echoes: ["reva_oath"],
    characterUnlock: "reva"
  },

  "ch01_scene12b_reva_hope": {
    title: "Hope and Responsibility",
    image: "world_03_deep_city_levels",
    narrative: [
      "Reva abraça você, lágrimas correndo.",
      "\"Obrigada. Ele merecia vida, não eternidade.\"",
      "Você sente o peso da promessa.",
      "Uma pessoa confia sua vida em sua escolha."
    ],
    choices: [
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["hope"],
    relationshipLocked: "reva_loyalty"
  },

  "ch01_scene12c_reva_doubt": {
    title: "The Gift of Peace",
    image: "scene_04c_monastery_sanctuary_wide",
    narrative: [
      "Reva fica em silêncio por um longo tempo.",
      "\"Talvez... talvez você esteja certo. Ele escolheu paz.\"",
      "Ela parece envelhecer e rejuvenescer simultaneamente.",
      "\"Respeitar a escolha dele é amá-lo verdadeiramente.\""
    ],
    choices: [
      { text: "Continuar para Deep City", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["acceptance"],
    pathShift: "acceptance_path"
  },

  // ===== EXPLORING WORLDS =====

  "ch01_scene13_temporal_archive": {
    title: "Exploring the 1920 Archive District",
    image: "world_01_1920_archive_district",
    narrative: [
      "Ruas do século 20 preenchidas com conhecimento.",
      "Biblioteca sobre biblioteca. Século sobre século.",
      "O ar cheira a papel antigo e esperança",
      "Você realiza: história é prisão e libertação simultaneamente."
    ],
    choices: [
      { text: "Retornar ao presente", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["archive_district"],
    worldExplored: "archive_1920",
    achievement: "explorer"
  },

  "ch01_scene14_market_2050": {
    title: "The 2050 Market District",
    image: "world_02_2050_market_district",
    narrative: [
      "Futuro limpo. Ordenado. Frio.",
      "Pessoas eficientes comprando coisas que não precisam.",
      "Sistema funcionando perfeitamente. Humanidade sufocada",
      "Você entende: controle é conforto. Conforto é morte."
    ],
    choices: [
      { text: "Retornar ao presente", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["market_future"],
    worldExplored: "market_2050",
    achievement: "temporal_explorer"
  },

  "ch01_scene15_monastery_sanctuary": {
    title: "The Sacred Monastery",
    image: "world_04_temporal_nexus_hub", // Could use monastery image
    narrative: [
      "Paz absoluta. Silêncio que fala.",
      "Monges meditam há séculos. Escolhidos dormir.",
      "Aqui, aceitação venceu despertar.",
      "Você sente a verdade: há poder em rendição."
    ],
    choices: [
      {
        text: "Meditar com os monges",
        nextScene: "ch02_scene01_deep_city_assembly",
        consequence: "meditate_monks",
        npcEffect: { monks: 40, sera: -15 },
        achievement: "monastic_peace"
      },
      {
        text: "Retornar ao conflito",
        nextScene: "ch02_scene01_deep_city_assembly",
        consequence: "reject_peace",
        npcEffect: { monks: -20 },
        achievement: null
      }
    ],
    echoes: ["monastery"],
    worldExplored: "monastery",
    pathOption: "acceptance"
  }
};

// ============= DIRECTOR CHARACTER =============

const DIRECTOR_ENCOUNTER = {
  "ch02_scene02a_director_office": {
    title: "The Director - Institutional Authority",
    image: "character_06_director_dilemma",
    narrative: [
      "Escritório imaculado acima da cidade 2050.",
      "O Diretor trabalha. Homem de meia idade com olhos cansados.",
      "\"Vejo que você acordou. Mara mencionou que poderia.\"",
      "Ele oferece chá. Ordem oferecendo negociação ao caos."
    ],
    choices: [
      {
        text: "Negociar despertar controlado",
        nextScene: "ch02_scene03a_compromise",
        consequence: "negotiate_director",
        npcEffect: { director: 40, sera: -30 },
        achievement: "diplomat"
      },
      {
        text: "Recusar - confiar apenas em revolução",
        nextScene: "ch02_scene03b_revolution",
        consequence: "reject_director",
        npcEffect: { director: -50, sera: 30 },
        achievement: "revolutionary"
      },
      {
        text: "Questionar ambos os lados",
        nextScene: "ch02_scene03c_third_way",
        consequence: "question_both",
        npcEffect: { director: 10, sera: 10, monks: 20 },
        achievement: "seeker"
      }
    ],
    echoes: ["institutional"],
    worldUnlock: "2050_governance"
  }
};

// ============= PARALLEL WORLDS EXPLORATION =============

const PARALLEL_WORLDS = {
  "ch01_scene16_parallel_earth": {
    title: "Vision of Parallel Earth",
    image: "world_05_parallel_earth",
    narrative: [
      "Uma visão de outra Terra. Dimensão alternativa.",
      "Aqui, humanidade floresceu diferentemente.",
      "Tecnologia e natureza integradas perfeitamente.",
      "Você pergunta: é possível? Ou é apenas sonho?"
    ],
    choices: [
      { text: "Retornar ao presente", nextScene: "ch02_scene01_deep_city_assembly" }
    ],
    echoes: ["parallel_path"],
    achievement: "visionary",
    philosophyUnlock: "utopian_possibility"
  }
};

// ============= CONSEQUENCE TRACKING =============

const SCENE_CONSEQUENCES = {
  "help_ivo_archive": {
    text: "Ivo encontra você semanas depois. Ele conseguiu o artefato.",
    effect: "ivo_grateful"
  },
  "betray_sera": {
    text: "Sera descobre sua traição. Game Over.",
    gameOver: true,
    reason: "The resistance crumbles without Sera's leadership. You are arrested."
  },
  "meditate_monks": {
    text: "Você passa semanas no mosteiro. A paz permeia sua alma.",
    effect: "spiritual_growth",
    consequenceDelay: 5
  }
};

// Export for use (Node.js and Browser)
if (typeof module !== 'undefined' && module.exports) {
  // Node.js
  module.exports = {
    EXPANSION_SCENES,
    DIRECTOR_ENCOUNTER,
    PARALLEL_WORLDS,
    SCENE_CONSEQUENCES
  };
} else if (typeof window !== 'undefined') {
  // Browser
  window.ExpansionContent = {
    EXPANSION_SCENES,
    DIRECTOR_ENCOUNTER,
    PARALLEL_WORLDS,
    SCENE_CONSEQUENCES
  };
}
