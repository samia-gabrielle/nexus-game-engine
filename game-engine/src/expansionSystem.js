// NEXUS v0.6 - Complete Expansion System
// Temporal Travel, Dynamic NPC Encounters, Relationship System, True Branching

const EXPANSION_SYSTEM = {
  // ============= TEMPORAL LOCATIONS =============
  LOCATIONS: {
    "2150_nexus_chamber": {
      name: "2150 - Nexus Chamber",
      description: "The present time. Massive machine in Deep City.",
      era: "2150",
      npcsAvailable: ["thomas"],
      accessible: true,
      imageId: "scene_02b_nexus_chamber_wide"
    },
    "1920_archive": {
      name: "1920 - Archive District",
      description: "Historical archives where knowledge is preserved.",
      era: "1920",
      npcsAvailable: ["ivo", "mara"],
      accessible: false, // Unlocked after first temporal crossing
      imageId: "world_01_1920_archive_district"
    },
    "2050_governance": {
      name: "2050 - Governance Complex",
      description: "Institutional future where control is perfected.",
      era: "2050",
      npcsAvailable: ["director"],
      accessible: false, // Unlocked after meeting Director
      imageId: "world_02_2050_market_district"
    },
    "deep_city": {
      name: "Deep City - Underground Metropolis",
      description: "The resistance hideout beneath the surface.",
      era: "Present",
      npcsAvailable: ["sera", "reva", "monks"],
      accessible: true,
      imageId: "world_03_deep_city_levels"
    },
    "monastery": {
      name: "Monastery - Sacred Sanctuary",
      description: "Ancient place of peace and meditation.",
      era: "Timeless",
      npcsAvailable: ["monks"],
      accessible: false, // Unlocked after meditation choice
      imageId: "scene_04c_monastery_sanctuary_wide"
    },
    "parallel_earth": {
      name: "Parallel Earth - Alternative Timeline",
      description: "A vision of what could have been.",
      era: "Alternate",
      npcsAvailable: [],
      accessible: false, // Unlocked after Thomas revelation
      imageId: "world_05_parallel_earth"
    }
  },

  // ============= NPC ENCOUNTER SYSTEM =============
  NPC_ENCOUNTERS: {
    "ivo": {
      name: "Ivo",
      title: "The Archive Scholar",
      scenes: ["ch01_scene05b_meet_ivo", "ch01_scene06a_ivo_artifact", "ch01_scene06b_ivo_history"],
      startScene: "ch01_scene05b_meet_ivo",
      relationshipEffects: {
        "help_ivo_archive": 20,
        "question_ivo": 10,
        "ignore_ivo": -15
      },
      unlocksAt: "ch01_scene08a_lyras_confession",
      achievementOnMax: "ivo_confidant"
    },
    "sera": {
      name: "Será",
      title: "The Revolutionary Leader",
      scenes: ["ch01_scene07b_sera_resistance", "ch01_scene08b_preparation", "ch01_scene08c_sera_philosophy"],
      startScene: "ch01_scene07b_sera_resistance",
      relationshipEffects: {
        "join_sera": 30,
        "question_sera": 10,
        "betray_sera": -100 // GAME OVER
      },
      unlocksAt: "ch01_scene08b_weapons_cache",
      achievementOnMax: "sera_ally",
      gameOverCondition: "betray_sera"
    },
    "thomas": {
      name: "Thomas",
      title: "The Transcendent Guide",
      scenes: ["ch01_scene09b_thomas_appears", "ch01_scene10b_thomas_warning", "ch01_scene10c_thomas_mystery"],
      startScene: "ch01_scene09b_thomas_appears",
      relationshipEffects: {
        "trust_thomas": 30,
        "question_thomas": 5
      },
      unlocksAt: "ch01_scene08c_thomas_appears",
      achievementOnMax: "thomas_chosen"
    },
    "reva": {
      name: "Reva",
      title: "The Seeker",
      scenes: ["ch01_scene11b_reva_reunion", "ch01_scene12b_reva_hope", "ch01_scene12c_reva_doubt"],
      startScene: "ch01_scene11b_reva_reunion",
      relationshipEffects: {
        "promise_reva": 40,
        "suggest_peace": -30
      },
      unlocksAt: "ch01_scene07b_revas_story",
      achievementOnMax: "reva_ally"
    },
    "director": {
      name: "The Director",
      title: "Institutional Authority",
      scenes: ["ch02_scene02a_director_office", "ch02_scene03a_compromise", "ch02_scene03b_revolution", "ch02_scene03c_third_way"],
      startScene: "ch02_scene02a_director_office",
      relationshipEffects: {
        "negotiate_director": 40,
        "reject_director": -50,
        "question_both": 10
      },
      unlocksAt: "ch02_scene01_deep_city_assembly",
      achievementOnMax: "director_ally"
    },
    "monks": {
      name: "The Monks",
      title: "Wisdom Keepers",
      scenes: ["ch01_scene15_monastery_sanctuary"],
      startScene: "ch01_scene15_monastery_sanctuary",
      relationshipEffects: {
        "meditate_monks": 40,
        "reject_peace": -20
      },
      unlocksAt: "ch01_scene08c_thomas_appears",
      achievementOnMax: "monks_blessed"
    }
  },

  // ============= WORLD EXPLORATION SCENES =============
  WORLD_EXPLORATION: {
    "explore_1920_archive": {
      locationKey: "1920_archive",
      sceneId: "ch01_scene13_temporal_archive",
      requires: ["temporal_crossing_unlocked"],
      unlocks: ["1920_archive_explored"]
    },
    "explore_2050_market": {
      locationKey: "2050_governance",
      sceneId: "ch01_scene14_market_2050",
      requires: ["director_met"],
      unlocks: ["2050_governance_explored"]
    },
    "explore_monastery": {
      locationKey: "monastery",
      sceneId: "ch01_scene15_monastery_sanctuary",
      requires: ["meditation_discovered"],
      unlocks: ["monastery_explored"]
    },
    "explore_parallel": {
      locationKey: "parallel_earth",
      sceneId: "ch01_scene16_parallel_earth",
      requires: ["thomas_revelation"],
      unlocks: ["parallel_earth_explored"]
    }
  },

  // ============= DYNAMIC SCENE BRANCHING =============
  getDynamicChoices(currentScene, gameState) {
    const choices = [];

    // Scene: ch01_scene05_first_branch_point
    if (currentScene === "ch01_scene05_first_branch_point") {
      choices.push({
        text: "Confiar em conhecimento interno",
        nextScene: "ch01_scene06a_archive_discovery"
      });
      choices.push({
        text: "Confiar em ação",
        nextScene: "ch01_scene06b_underground_movement"
      });
      choices.push({
        text: "Confiar no símbolo",
        nextScene: "ch01_scene06c_deep_meditation"
      });
    }

    // After each path, offer to meet NPCs
    if (currentScene === "ch01_scene08a_lyras_confession") {
      choices.push({
        text: "Conhecer Ivo, o Arquivista",
        nextScene: "ch01_scene05b_meet_ivo",
        consequence: "meet_ivo"
      });
      choices.push({
        text: "Continuar para Deep City",
        nextScene: "ch02_scene01_deep_city_assembly"
      });
    }

    if (currentScene === "ch01_scene08b_weapons_cache") {
      choices.push({
        text: "Conhecer Será, Líder Revolucionária",
        nextScene: "ch01_scene07b_sera_resistance",
        consequence: "meet_sera"
      });
      choices.push({
        text: "Continuar para Deep City",
        nextScene: "ch02_scene01_deep_city_assembly"
      });
    }

    if (currentScene === "ch01_scene08c_thomas_appears") {
      choices.push({
        text: "Confiar em Thomas",
        nextScene: "ch01_scene09b_thomas_appears",
        consequence: "trust_thomas"
      });
      choices.push({
        text: "Continuar para Deep City",
        nextScene: "ch02_scene01_deep_city_assembly"
      });
    }

    // Deep City - offer new paths
    if (currentScene === "ch02_scene01_deep_city_assembly") {
      choices.push({
        text: "Conhecer o Diretor - Negociação Institucional",
        nextScene: "ch02_scene02a_director_office",
        consequence: "meet_director",
        requirement: "none" // Director can be met anytime
      });
      choices.push({
        text: "Viajar para 1920 - Arquivo Histórico",
        nextScene: "ch01_scene13_temporal_archive",
        consequence: "travel_1920",
        requirement: "temporal_crossing_unlocked"
      });
      choices.push({
        text: "Meditar no Mosteiro",
        nextScene: "ch01_scene15_monastery_sanctuary",
        consequence: "visit_monastery",
        requirement: "none"
      });
      choices.push({
        text: "Explorar Cidade Profunda",
        nextScene: "ch01_scene01b_deep_city_vast",
        consequence: "explore_deep_city"
      });
      choices.push({
        text: "Continuar com a história principal",
        nextScene: "ch02_scene02a_diplomats_trail" // Or based on path
      });
    }

    return choices;
  },

  // ============= CONSEQUENCE APPLICATION =============
  applyConsequence(consequence, gameState) {
    const npcRelationshipMap = {
      "help_ivo_archive": { ivo: 20, sera: 5 },
      "question_ivo": { ivo: 10 },
      "ignore_ivo": { ivo: -15 },
      "join_sera": { sera: 30, director: -20 },
      "question_sera": { sera: 10, ivo: 20 },
      "betray_sera": { sera: -100 }, // Game Over
      "trust_thomas": { thomas: 30 },
      "question_thomas": { thomas: 5 },
      "promise_reva": { reva: 40 },
      "suggest_peace": { reva: -30, monks: 20 },
      "negotiate_director": { director: 40, sera: -30 },
      "reject_director": { director: -50, sera: 30 },
      "question_both": { director: 10, sera: 10, monks: 20 },
      "meditate_monks": { monks: 40, sera: -15 },
      "reject_peace": { monks: -20 }
    };

    if (npcRelationshipMap[consequence]) {
      for (const [npc, amount] of Object.entries(npcRelationshipMap[consequence])) {
        gameState.relationships = gameState.relationships || {};
        gameState.relationships[npc] = (gameState.relationships[npc] || 0) + amount;

        // Check for game over
        if (npc === "sera" && gameState.relationships[npc] <= -100) {
          gameState.isDead = true;
          gameState.gameOverReason = "Sera descobre sua traição. A resistência desmorona sem sua liderança.";
        }

        // Check for max relationship achievements
        if (gameState.relationships[npc] >= 100) {
          const achievementMap = {
            "ivo": "ivo_confidant",
            "sera": "sera_ally",
            "thomas": "thomas_chosen",
            "reva": "reva_ally",
            "director": "director_ally",
            "monks": "monks_blessed"
          };
          if (achievementMap[npc]) {
            gameState.unlockedAchievements = gameState.unlockedAchievements || [];
            if (!gameState.unlockedAchievements.includes(achievementMap[npc])) {
              gameState.unlockedAchievements.push(achievementMap[npc]);
            }
          }
        }
      }
    }

    return gameState;
  },

  // ============= UNLOCK SYSTEM =============
  checkUnlocks(gameState) {
    gameState.unlockedLocations = gameState.unlockedLocations || [];
    gameState.unlockedNPCs = gameState.unlockedNPCs || [];
    gameState.unlockedFeatures = gameState.unlockedFeatures || [];

    // Unlock monastery after Thomas encounter
    if (gameState.scenesVisited && gameState.scenesVisited.includes("ch01_scene09b_thomas_appears")) {
      if (!gameState.unlockedLocations.includes("monastery")) {
        gameState.unlockedLocations.push("monastery");
      }
    }

    // Unlock 1920 after first temporal crossing
    if (gameState.scenesVisited && gameState.scenesVisited.includes("ch01_scene03_first_crossing_1920")) {
      if (!gameState.unlockedLocations.includes("1920_archive")) {
        gameState.unlockedLocations.push("1920_archive");
      }
    }

    // Unlock Director after meeting
    if (gameState.scenesVisited && gameState.scenesVisited.includes("ch02_scene02a_director_office")) {
      if (!gameState.unlockedLocations.includes("2050_governance")) {
        gameState.unlockedLocations.push("2050_governance");
      }
    }

    // Unlock parallel earth after Thomas revelation
    if (gameState.scenesVisited && gameState.scenesVisited.includes("ch01_scene10c_thomas_mystery")) {
      if (!gameState.unlockedLocations.includes("parallel_earth")) {
        gameState.unlockedLocations.push("parallel_earth");
      }
    }

    return gameState;
  },

  // ============= RELATIONSHIP DIALOGUE MODIFIER =============
  getDialogueVariant(npcName, baseText, relationship) {
    relationship = relationship || 0;

    if (relationship <= -100) {
      return `${npcName} refuses to speak with you.`;
    } else if (relationship <= -50) {
      return `${npcName} looks at you with suspicion: "${baseText}"`;
    } else if (relationship < 0) {
      return `${npcName} seems hesitant: "${baseText}"`;
    } else if (relationship < 50) {
      return baseText;
    } else if (relationship < 100) {
      return `${npcName} speaks warmly: "${baseText}"`;
    } else {
      return `${npcName} embraces you fully: "${baseText}"`;
    }
  }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = EXPANSION_SYSTEM;
}
