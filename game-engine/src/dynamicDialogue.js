// NEXUS v0.6 - Dynamic Dialogue System
// NPCs react differently based on relationship levels

const DynamicDialogue = {
  // ============= NPC GREETINGS BY RELATIONSHIP =============
  getNPCGreeting(npcName, relationship) {
    relationship = relationship || 0;

    const greetings = {
      "ivo": {
        enemy: "Ivo não parece querer falar com você.",
        hostile: "Ivo o vira as costas com desprezo.",
        wary: "Ivo parece hesitante em conversar.",
        neutral: "Ivo a cumprimenta friamente.",
        friendly: "Ivo sorri ao vê-lo.",
        ally: "Ivo abraça você como a um velho amigo.",
        devoted: "Ivo's olhos brilham de confiança absoluta."
      },
      "sera": {
        enemy: "Será virou as costas para você permanentemente.",
        hostile: "Será bate o punho na mesa. 'Você é o inimigo.'",
        wary: "Será observa você com desconfiança.",
        neutral: "Será acena com cabeça bruscamente.",
        friendly: "Será aperta seu ombro. 'Vamos conversar.'",
        ally: "Será sorri. 'Você é um de nós agora.'",
        devoted: "Será coloca sua mão no seu coração. 'Confiança total.'"
      },
      "thomas": {
        enemy: "Thomas desaparece como se nunca tivesse estado lá.",
        hostile: "Thomas o avalia com olhos que veem tudo.",
        wary: "Thomas observa você com incerteza.",
        neutral: "Thomas acena. 'Você retorna.'",
        friendly: "Thomas sorri misteriosamente. 'Progredindo bem.'",
        ally: "Thomas coloca uma mão em seu ombro. 'Nós nos entendemos.'",
        devoted: "Thomas: 'Você finalmente entendeu. Bem-vindo.'"
      },
      "reva": {
        enemy: "Reva cruza os braços defensivamente.",
        hostile: "Reva chora silenciosamente. 'Por que você me traiu?'",
        wary: "Reva o observa com esperança e medo.",
        neutral: "Reva cumprimenta você timidamente.",
        friendly: "Reva sorri com alívio.",
        ally: "Reva o abraça forte. 'Obrigada por estar aqui.'",
        devoted: "Reva: 'Você é como um irmão/irmã para mim agora.'"
      },
      "director": {
        enemy: "O Diretor encaminha você à porta.",
        hostile: "O Diretor: 'Você é uma ameaça ao sistema.'",
        wary: "O Diretor o examina com cuidado.",
        neutral: "O Diretor oferece chá. Frio.",
        friendly: "O Diretor sorri profissionalmente.",
        ally: "O Diretor o vê como colega.",
        devoted: "O Diretor: 'Talvez o sistema precise de gente como você.'"
      },
      "monks": {
        enemy: "Os monges o ignoram completamente.",
        hostile: "Os monges rezam por seu arrependimento.",
        wary: "Os monges observam você com preocupação.",
        neutral: "Os monges acham você um visitante.",
        friendly: "Os monges lhe oferecem assento.",
        ally: "Os monges o veem como iniciado.",
        devoted: "Os monges: 'Você alcançou compreensão.'"
      }
    };

    const npcGreetings = greetings[npcName] || greetings.neutral;

    if (relationship <= -100) return npcGreetings.enemy;
    if (relationship <= -70) return npcGreetings.hostile;
    if (relationship <= -30) return npcGreetings.wary;
    if (relationship < 30) return npcGreetings.neutral;
    if (relationship < 70) return npcGreetings.friendly;
    if (relationship < 100) return npcGreetings.ally;
    return npcGreetings.devoted;
  },

  // ============= DIALOGUE MODIFIERS =============
  modifyDialogueByRelationship(baseDialogue, npcName, relationship) {
    relationship = relationship || 0;

    // Add trust/doubt indicators
    if (relationship >= 70) {
      return `[Confiante] ${baseDialogue}`;
    } else if (relationship <= -50) {
      return `[Desconfiado] ${baseDialogue}`;
    }
    return baseDialogue;
  },

  // ============= CHOICE AVAILABILITY =============
  isChoiceAvailable(choice, relationship) {
    // Some choices only available at certain relationship levels
    if (choice.requiresRelationship) {
      return relationship >= choice.requiresRelationship;
    }
    if (choice.blockedIfRelationship) {
      return relationship < choice.blockedIfRelationship;
    }
    return true;
  },

  // ============= GENERATE RELATIONSHIP RESPONSE =============
  getRelationshipResponse(npcName, relationship, choiceType) {
    // After choice, show how NPC reacted
    if (relationship > 50) {
      return `${npcName} parece aprovado.`;
    } else if (relationship < -50) {
      return `${npcName} parece desaprovado.`;
    }
    return `${npcName} observa seu escolha de forma neutra.`;
  },

  // ============= HIDDEN DIALOGUE (NG+) =============
  getNewGamePlusDialogue(npcName, achievementUnlocked) {
    const ngPlusLines = {
      "ivo": "Ivo: 'Você retorna. Novamente. Sempre escolhendo o conhecimento...'",
      "sera": "Será: 'Você acordou antes. Desta vez, sua escolha será diferente?'",
      "thomas": "Thomas: 'Você começa a entender os padrões. Bom.'",
      "reva": "Reva: 'Você tem feito isso tantas vezes... como você aguenta?'",
      "director": "Diretor: 'Você volta ao ciclo. Determinado, vejo.'",
      "monks": "Monges: 'Você retorna à roda. Assim sempre foi. Sempre será.'"
    };

    return ngPlusLines[npcName] || "Você sente que foi aqui antes...";
  }
};

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DynamicDialogue;
}
