const fs = require('fs');
const path = require('path');

// Initial game state structure
const INITIAL_STATE = {
  // Scene progression
  currentScene: 'ch01_scene01_2150_wakeup',
  scenesVisited: [],

  // Character flags (boolean)
  player_has_name: false,
  mara_debt_registered: false,
  shared_debt_registered: false,
  consent_matters: false,

  // Fourth line status (string)
  fourth_line_status: 'scarred_incomplete',

  // Scene-specific flags (will grow as player progresses)
  flags: {
    // Act 1
    player_crossed_first_time: false,
    mara_encountered: false,
    mara_anger_expressed: false,
    player_is_nobody_in_1920: false,
    player_saw_no_single_choice: false,

    // Act 2
    entered_deep_city: false,
    ivo_met: false,
    sera_met: false,
    community_refused_player: false,
    accepted_refusal: false,
    responsibility_distributed_accepted: false,

    // Act 3
    restoration_faction_met: false,
    reva_met: false,
    entered_surface_core: false,
    saw_life_support_dependency: false,

    // Notebook
    notebook_kept_by_player: false,
    notebook_given_to_lyra: false,
    notebook_hidden_in_2150: false,
  },

  // Echo unlocks (tracked as array of echo IDs)
  echoesUnlocked: [],

  // Notebook entries (appears progressively)
  notebookEntries: [],

  // Player choices history
  choiceHistory: [],

  // NPC Relationship System (NEW)
  relationships: {
    ivo: 0,
    sera: 0,
    thomas: 0,
    reva: 0,
    director: 0,
    monks: 0
  },

  // Unlocked features (NEW)
  unlockedLocations: ['deep_city', '2150_nexus_chamber'], // Can start at these places
  unlockedNPCs: [],
  unlockedAchievements: [],
  unlockedFeatures: [],

  // Exploration tracking (NEW)
  visitedLocations: [],
  currentLocation: 'deep_city',

  // Game status (NEW)
  isDead: false,
  gameOverReason: null,

  // Save metadata
  timestamp: Date.now(),
  playtimeSeconds: 0,
  lastUpdated: Date.now(),
};

/**
 * Initialize new game with default state
 */
function initializeNewGame() {
  return JSON.parse(JSON.stringify(INITIAL_STATE));
}

/**
 * Save game to file (simulating IndexedDB for now)
 */
function saveGame(state, slotId = 'auto') {
  const saveDir = path.join(__dirname, '../saves');

  // Ensure saves directory exists
  if (!fs.existsSync(saveDir)) {
    fs.mkdirSync(saveDir, { recursive: true });
  }

  const saveFile = path.join(saveDir, `save_${slotId}.json`);
  const saveData = {
    ...state,
    savedAt: Date.now(),
  };

  fs.writeFileSync(saveFile, JSON.stringify(saveData, null, 2));
  console.log(`Game saved to slot: ${slotId}`);

  return slotId;
}

/**
 * Load game from file
 */
function loadGame(slotId) {
  const saveFile = path.join(__dirname, `../saves/save_${slotId}.json`);

  if (!fs.existsSync(saveFile)) {
    throw new Error(`Save slot ${slotId} not found`);
  }

  const saveData = JSON.parse(fs.readFileSync(saveFile, 'utf-8'));
  console.log(`Game loaded from slot: ${slotId}`);

  return saveData;
}

/**
 * Update a flag in the current state
 */
function setFlag(state, flagName, value) {
  const newState = JSON.parse(JSON.stringify(state));

  // Check if top-level flag
  if (flagName in newState) {
    newState[flagName] = value;
  }
  // Otherwise it's in the flags object
  else if (flagName in newState.flags) {
    newState.flags[flagName] = value;
  }
  // If neither, add to flags
  else {
    newState.flags[flagName] = value;
  }

  newState.lastUpdated = Date.now();
  return newState;
}

/**
 * Get a flag value
 */
function getFlag(state, flagName) {
  if (flagName in state) {
    return state[flagName];
  }
  return state.flags[flagName] || false;
}

/**
 * Unlock an echo
 */
function unlockEcho(state, echoId) {
  const newState = JSON.parse(JSON.stringify(state));

  if (!newState.echoesUnlocked.includes(echoId)) {
    newState.echoesUnlocked.push(echoId);
  }

  newState.lastUpdated = Date.now();
  return newState;
}

/**
 * Add notebook entry
 */
function addNotebookEntry(state, entry) {
  const newState = JSON.parse(JSON.stringify(state));

  newState.notebookEntries.push({
    text: entry,
    unlockedAt: Date.now(),
  });

  newState.lastUpdated = Date.now();
  return newState;
}

/**
 * Record player choice
 */
function recordChoice(state, sceneId, choiceText, choiceIndex) {
  const newState = JSON.parse(JSON.stringify(state));

  newState.choiceHistory.push({
    scene: sceneId,
    choice: choiceText,
    index: choiceIndex,
    timestamp: Date.now(),
  });

  newState.lastUpdated = Date.now();
  return newState;
}

/**
 * Get game summary for HUD
 */
function getGameSummary(state) {
  return {
    currentScene: state.currentScene,
    scenesVisited: state.scenesVisited.length,
    echoesUnlocked: state.echoesUnlocked.length,
    notebookEntries: state.notebookEntries.length,
    fourthLineStatus: state.fourth_line_status,
    playerHasName: state.player_has_name,
    playtimeSeconds: state.playtimeSeconds,
  };
}

module.exports = {
  INITIAL_STATE,
  initializeNewGame,
  saveGame,
  loadGame,
  setFlag,
  getFlag,
  unlockEcho,
  addNotebookEntry,
  recordChoice,
  getGameSummary,
};
