// NEXUS Game Engine v0.5 - Core Addictiveness System
// Relationships, Consequences, and Achievements

// ============= NPC RELATIONSHIP SYSTEM =============

const NPCs = {
  ivo: {
    name: "Ivo",
    title: "The Archive Scholar",
    relationship: 0,
    maxRelationship: 100,
    minRelationship: -100,
    dialogueThreshold: {
      '-100': "You're a fool.",
      '-50': "I'm not sure I can trust you.",
      '0': "What do you want?",
      '50': "I believe in you.",
      '100': "I'll follow you anywhere."
    }
  },
  sera: {
    name: "Sera",
    title: "The Uprising Leader",
    relationship: 0,
    maxRelationship: 100,
    minRelationship: -100,
    dialogueThreshold: {
      '-100': "GAME OVER - Betrayer",
      '-50': "Don't make me regret this.",
      '0': "What's your plan?",
      '50': "You've got my back.",
      '100': "We'll change everything together."
    }
  },
  thomas: {
    name: "Thomas",
    title: "The Transcendent Guide",
    relationship: 0,
    maxRelationship: 100,
    minRelationship: -50,
    dialogueThreshold: {
      '-50': "You are not ready.",
      '0': "I see you across timelines.",
      '50': "You are learning.",
      '100': "You are becoming what you were meant to be."
    }
  },
  reva: {
    name: "Reva",
    title: "The Seeker",
    relationship: 0,
    maxRelationship: 100,
    minRelationship: -100,
    dialogueThreshold: {
      '-100': "I can't trust you with my brother.",
      '-50': "You're uncertain.",
      '0': "We can work together.",
      '50': "You're a true ally.",
      '100': "You're family now."
    }
  },
  director: {
    name: "The Director",
    title: "Institutional Authority",
    relationship: 0,
    maxRelationship: 100,
    minRelationship: -100,
    dialogueThreshold: {
      '-100': "You are a threat to order.",
      '-50': "Your idealism is dangerous.",
      '0': "We should discuss this rationally.",
      '50': "Perhaps there is common ground.",
      '100': "Together we can build a better system."
    }
  },
  monks: {
    name: "The Monks",
    title: "Wisdom Keepers",
    relationship: 0,
    maxRelationship: 100,
    minRelationship: -50,
    dialogueThreshold: {
      '-50': "You are not welcome here.",
      '0': "You seek knowledge.",
      '50': "Peace guides your path.",
      '100': "You have found enlightenment."
    }
  }
};

// ============= CHOICE CONSEQUENCE SYSTEM =============

class ChoiceConsequence {
  constructor(choiceId, description, npcEffects, achievementReward, permanentEffect) {
    this.choiceId = choiceId;
    this.description = description;
    this.npcEffects = npcEffects; // {npc: +/- amount}
    this.achievementReward = achievementReward; // achievement_id or null
    this.permanentEffect = permanentEffect; // can lock paths
  }
}

const CHOICE_CONSEQUENCES = {
  // Example: Choosing to help Ivo in Archive
  'help_ivo_archive': new ChoiceConsequence(
    'help_ivo_archive',
    'You help Ivo find an ancient artifact in the archive.',
    { ivo: +20, sera: +5 },
    'archivist_helper',
    null
  ),

  // Example: Betraying Sera in Underground
  'betray_sera': new ChoiceConsequence(
    'betray_sera',
    'You report Sera to the authorities.',
    { sera: -100, director: +30, ivo: -40 },
    'traitor',
    { gameOver: true, reason: 'Sera refuses to work with you. The resistance crumbles.' }
  ),

  // Example: Aggressive choice with Director
  'attack_director': new ChoiceConsequence(
    'attack_director',
    'You physically attack the Director.',
    { director: -100, sera: +50, ivo: -30 },
    'revolutionary',
    { lockedPaths: ['institutional_dialogue', 'director_office'] }
  ),

  // Example: Peaceful meditation choice
  'meditate_with_monks': new ChoiceConsequence(
    'meditate_with_monks',
    'You spend the night meditating with the monks.',
    { monks: +20, thomas: +15, sera: -10 },
    'seeker_of_peace',
    null
  ),

  // Example: Stealing from Mara
  'steal_from_mara': new ChoiceConsequence(
    'steal_from_mara',
    'You steal research documents from Mara.',
    { ivo: -20, sera: +10, monks: -15 },
    'thief',
    { consequenceDelay: 3, consequenceText: 'Mara discovers your theft and refuses to help.' }
  ),

  // Example: Choosing Control Path aggressively
  'choose_control_path': new ChoiceConsequence(
    'choose_control_path',
    'You decide the awakening should be controlled and selective.',
    { director: +40, sera: -50, monks: +10 },
    'authoritarian',
    null
  ),

  // Example: Choosing Rebellion Path violently
  'choose_rebellion_path': new ChoiceConsequence(
    'choose_rebellion_path',
    'You decide to overthrow the system by force.',
    { sera: +50, director: -100, ivo: -20, monks: -30 },
    'revolutionary_spirit',
    null
  ),

  // Example: Choosing Acceptance Path
  'choose_acceptance_path': new ChoiceConsequence(
    'choose_acceptance_path',
    'You decide to accept the cycle and find peace.',
    { monks: +40, thomas: +30, sera: -40, director: -20 },
    'enlightened',
    null
  )
};

// ============= ACHIEVEMENT SYSTEM =============

const ACHIEVEMENTS = {
  // Narrative Path Achievements
  'archivist': {
    id: 'archivist',
    title: 'The Archivist',
    description: 'Completed the Knowledge Path - explored history deeply',
    icon: '📚',
    hidden: false,
    condition: (state) => state.currentPath === 'knowledge' && state.scenesSeen.some(s => s.includes('archive'))
  },
  'revolutionary_spirit': {
    id: 'revolutionary_spirit',
    title: 'Revolutionary Spirit',
    description: 'Completed the Rebellion Path - chose liberation over safety',
    icon: '🔥',
    hidden: false,
    condition: (state) => state.currentPath === 'rebellion' && state.choicesMade.includes('sabotage')
  },
  'enlightened': {
    id: 'enlightened',
    title: 'The Enlightened',
    description: 'Completed the Acceptance Path - found peace within',
    icon: '✨',
    hidden: false,
    condition: (state) => state.currentPath === 'acceptance' && state.meditationCount > 5
  },

  // Relationship Achievements
  'sera_ally': {
    id: 'sera_ally',
    title: 'Sera\'s Ally',
    description: 'Built maximum relationship with Sera (+100)',
    icon: '🤝',
    hidden: false,
    condition: (state) => state.relationships.sera >= 100
  },
  'ivo_confidant': {
    id: 'ivo_confidant',
    title: 'Ivo\'s Confidant',
    description: 'Gained Ivo\'s complete trust (+100)',
    icon: '📖',
    hidden: false,
    condition: (state) => state.relationships.ivo >= 100
  },
  'thomas_chosen': {
    id: 'thomas_chosen',
    title: 'Thomas\' Chosen',
    description: 'Achieved full spiritual alignment with Thomas (+100)',
    icon: '🌟',
    hidden: false,
    condition: (state) => state.relationships.thomas >= 100
  },
  'monks_blessed': {
    id: 'monks_blessed',
    title: 'Monks\' Blessing',
    description: 'Earned the monks\' complete acceptance (+100)',
    icon: '🙏',
    hidden: false,
    condition: (state) => state.relationships.monks >= 100
  },

  // Consequence Achievements
  'traitor': {
    id: 'traitor',
    title: 'The Betrayer',
    description: 'Betrayed Sera - faced game over',
    icon: '💀',
    hidden: false,
    condition: (state) => state.gameOverReasons && state.gameOverReasons.includes('betrayed_sera')
  },
  'peacekeeper': {
    id: 'peacekeeper',
    title: 'The Peacekeeper',
    description: 'Completed without killing anyone or destroying systems',
    icon: '☮️',
    hidden: false,
    condition: (state) => state.destructionCount === 0 && state.killCount === 0
  },

  // Exploration Achievements
  'temporal_explorer': {
    id: 'temporal_explorer',
    title: 'Temporal Explorer',
    description: 'Visited all 5 timelines/locations',
    icon: '⏰',
    hidden: false,
    condition: (state) => state.visitedLocations && state.visitedLocations.size >= 5
  },
  'collector': {
    id: 'collector',
    title: 'The Collector',
    description: 'Unlocked 25+ Echoes (memory fragments)',
    icon: '💎',
    hidden: false,
    condition: (state) => state.unlockedEchoes && state.unlockedEchoes.length >= 25
  },

  // Puzzle Achievements
  'puzzle_master': {
    id: 'puzzle_master',
    title: 'Puzzle Master',
    description: 'Solved all 3 temporal puzzles correctly',
    icon: '🧩',
    hidden: false,
    condition: (state) => state.puzzlesSolved >= 3
  },
  'speedrunner': {
    id: 'speedrunner',
    title: 'Speedrunner',
    description: 'Completed the game in under 25 minutes',
    icon: '⚡',
    hidden: false,
    condition: (state) => state.playtimeSeconds < 1500
  },

  // Ending Achievements
  'restoration_awakened': {
    id: 'restoration_awakened',
    title: 'The Awakened',
    description: 'Achieved the Restoration Ending',
    icon: '🌅',
    hidden: false,
    condition: (state) => state.endingId === 'restoration'
  },
  'control_architect': {
    id: 'control_architect',
    title: 'The Architect',
    description: 'Achieved the Control Ending',
    icon: '🏛️',
    hidden: false,
    condition: (state) => state.endingId === 'control'
  },
  'acceptance_guardian': {
    id: 'acceptance_guardian',
    title: 'The Guardian',
    description: 'Achieved the Acceptance Ending',
    icon: '🛡️',
    hidden: false,
    condition: (state) => state.endingId === 'acceptance'
  },

  // Hidden Achievements (NG+ only)
  'true_believer': {
    id: 'true_believer',
    title: 'True Believer',
    description: 'Viewed all 9 ending variations (3 paths × 3 versions each)',
    icon: '👁️',
    hidden: true,
    condition: (state) => state.endingsViewed && state.endingsViewed.size >= 9
  },
  'time_traveler': {
    id: 'time_traveler',
    title: 'Time Traveler',
    description: 'Completed 3 full playthroughs',
    icon: '🕰️',
    hidden: true,
    condition: (state) => state.completionCount >= 3
  },
  'fate_breaker': {
    id: 'fate_breaker',
    title: 'Fate Breaker',
    description: 'Unlocked the secret true ending (all 9 endings + puzzle solved)',
    icon: '⚔️',
    hidden: true,
    condition: (state) => state.trueEndingUnlocked === true
  }
};

// ============= RELATIONSHIP MODIFICATION =============

function modifyRelationship(npcName, amount) {
  const npc = NPCs[npcName];
  if (!npc) return;

  const oldRelationship = npc.relationship;
  npc.relationship = Math.max(npc.minRelationship, Math.min(npc.maxRelationship, npc.relationship + amount));
  const newRelationship = npc.relationship;

  // Show floating text feedback
  displayRelationshipChange(npcName, amount, oldRelationship, newRelationship);

  // Check if dialogue threshold crossed
  checkDialogueThreshold(npcName, oldRelationship, newRelationship);

  // Check for game over (Sera at -100)
  if (npcName === 'sera' && newRelationship <= -100) {
    triggerGameOver('Sera reports you to the authorities. The resistance falls without her leadership.');
  }

  // Store in gameState
  if (gameState) {
    gameState.relationships = gameState.relationships || {};
    gameState.relationships[npcName] = newRelationship;
  }

  return newRelationship;
}

function displayRelationshipChange(npcName, amount, oldVal, newVal) {
  const npc = NPCs[npcName];
  const displayAmount = amount > 0 ? `+${amount}` : `${amount}`;
  const color = amount > 0 ? '#4ade80' : '#ef4444';

  // Create floating text element
  const floatingText = document.createElement('div');
  floatingText.innerHTML = `${displayAmount} ${npc.name}`;
  floatingText.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 20px;
    color: ${color};
    font-weight: bold;
    font-size: 14px;
    animation: floatUp 2s ease-out forwards;
    pointer-events: none;
    z-index: 9999;
  `;

  // Add to page
  document.body.appendChild(floatingText);

  // Play audio feedback
  if (typeof audioManager !== 'undefined' && audioManager) {
    try {
      if (amount > 0) {
        audioManager.playSuccess?.();
      } else {
        audioManager.playError?.();
      }
    } catch (e) {}
  }

  // Remove after animation
  setTimeout(() => floatingText.remove(), 2000);
}

function checkDialogueThreshold(npcName, oldVal, newVal) {
  const npc = NPCs[npcName];
  const thresholds = Object.keys(npc.dialogueThreshold).map(Number).sort();

  for (let i = 0; i < thresholds.length - 1; i++) {
    const lower = thresholds[i];
    const upper = thresholds[i + 1];

    // Check if we crossed a threshold
    if ((oldVal <= lower && newVal > lower) || (oldVal < upper && newVal >= upper)) {
      const threshold = newVal >= upper ? upper : lower;
      const newDialogue = npc.dialogueThreshold[threshold];

      console.log(`${npc.name} dialogue updated: "${newDialogue}"`);
    }
  }
}

// ============= ACHIEVEMENT CHECKING =============

function checkAchievements(gameState) {
  const unlockedAchievements = [];

  for (const [key, achievement] of Object.entries(ACHIEVEMENTS)) {
    // Skip if already unlocked
    if (gameState.unlockedAchievements && gameState.unlockedAchievements.includes(key)) {
      continue;
    }

    // Check condition
    if (achievement.condition(gameState)) {
      unlockedAchievements.push(achievement);
      displayAchievementUnlock(achievement);
    }
  }

  // Store unlocked achievements
  if (gameState && unlockedAchievements.length > 0) {
    gameState.unlockedAchievements = gameState.unlockedAchievements || [];
    unlockedAchievements.forEach(a => {
      if (!gameState.unlockedAchievements.includes(a.id)) {
        gameState.unlockedAchievements.push(a.id);
      }
    });
  }

  return unlockedAchievements;
}

function displayAchievementUnlock(achievement) {
  // Create achievement popup
  const popup = document.createElement('div');
  popup.className = 'achievement-popup';
  popup.innerHTML = `
    <div class="achievement-icon">${achievement.icon}</div>
    <div class="achievement-info">
      <h3>${achievement.title}</h3>
      <p>${achievement.description}</p>
    </div>
  `;

  document.body.appendChild(popup);

  // Play achievement sound
  if (typeof audioManager !== 'undefined' && audioManager) {
    try {
      audioManager.playSuccess?.();
    } catch (e) {}
  }

  // Animate in, then out
  popup.offsetHeight; // trigger reflow
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => popup.remove(), 500);
  }, 3000);
}

// ============= CONSEQUENCE SYSTEM =============

function applyChoiceConsequence(choiceId) {
  const consequence = CHOICE_CONSEQUENCES[choiceId];
  if (!consequence) return;

  // Apply NPC effects
  for (const [npc, amount] of Object.entries(consequence.npcEffects)) {
    modifyRelationship(npc, amount);
  }

  // Award achievement if applicable
  if (consequence.achievementReward) {
    checkAchievements(gameState);
  }

  // Handle permanent effects
  if (consequence.permanentEffect) {
    if (consequence.permanentEffect.gameOver) {
      triggerGameOver(consequence.permanentEffect.reason);
    }
    if (consequence.permanentEffect.lockedPaths) {
      gameState.lockedPaths = gameState.lockedPaths || [];
      gameState.lockedPaths.push(...consequence.permanentEffect.lockedPaths);
    }
    if (consequence.permanentEffect.consequenceDelay) {
      gameState.pendingConsequences = gameState.pendingConsequences || [];
      gameState.pendingConsequences.push({
        turnDelay: consequence.permanentEffect.consequenceDelay,
        text: consequence.permanentEffect.consequenceText
      });
    }
  }

  // Log in gameState
  if (gameState) {
    gameState.choicesMade = gameState.choicesMade || [];
    gameState.choicesMade.push(choiceId);
  }
}

// ============= GAME OVER SYSTEM =============

function triggerGameOver(reason) {
  if (gameState) {
    gameState.isDead = true;
    gameState.gameOverReason = reason;
  }

  showGameOverModal(reason);
}

function showGameOverModal(reason) {
  const modal = document.createElement('div');
  modal.className = 'modal game-over-modal';
  modal.innerHTML = `
    <div class="modal-content game-over-content">
      <h2>⚰️ GAME OVER</h2>
      <p>${reason}</p>
      <div class="button-group">
        <button class="btn btn-large" onclick="loadGame()">Load Last Save</button>
        <button class="btn btn-large" onclick="location.reload()">Restart from Checkpoint</button>
        <button class="btn btn-large" onclick="toggleMainMenu()">Return to Menu</button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
  modal.classList.remove('hidden');

  // Play game over sound
  if (typeof audioManager !== 'undefined' && audioManager) {
    try {
      audioManager.playError?.();
    } catch (e) {}
  }
}

// ============= INITIALIZATION =============

function initializeGameEngine() {
  // Reset NPC relationships on new game
  for (const npcName in NPCs) {
    NPCs[npcName].relationship = 0;
  }

  // Initialize gameState relationships tracking
  if (gameState) {
    gameState.relationships = {};
    gameState.unlockedAchievements = [];
    gameState.choicesMade = [];
    gameState.lockedPaths = [];
  }
}

// Export for use in game.js
window.GameEngine = {
  NPCs,
  ACHIEVEMENTS,
  CHOICE_CONSEQUENCES,
  modifyRelationship,
  applyChoiceConsequence,
  checkAchievements,
  triggerGameOver,
  initializeGameEngine
};
