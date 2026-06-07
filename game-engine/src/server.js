const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const gameState = require('./gameState');
const inkEngine = require('./inkEngine');
const expansionSystem = require('./expansionSystem');

// Load expansion content and merge with inkEngine
const expansionContent = require('./expansionContent');
if (expansionContent) {
  Object.assign(inkEngine.STORY_SCENES, expansionContent.EXPANSION_SCENES);
  Object.assign(inkEngine.STORY_SCENES, expansionContent.DIRECTOR_ENCOUNTER);
  Object.assign(inkEngine.STORY_SCENES, expansionContent.PARALLEL_WORLDS);
  console.log('✅ Expansion content loaded. Total scenes:', Object.keys(inkEngine.STORY_SCENES).length);
}

console.log('✅ Expansion System loaded. Features:');
console.log('   - 6 Temporal Locations');
console.log('   - 6 Dynamic NPCs');
console.log('   - Relationship System');
console.log('   - World Exploration');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Routes

// Initialize new game
app.post('/api/game/new', (req, res) => {
  try {
    const state = gameState.initializeNewGame();
    res.json({
      success: true,
      state: state
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get current scene
app.post('/api/game/scene', (req, res) => {
  try {
    const { state } = req.body;
    const scene = inkEngine.getCurrentScene(state);
    // Add scene ID to response
    const sceneWithId = {
      ...scene,
      id: state.currentScene
    };
    res.json({
      success: true,
      scene: sceneWithId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Make a choice
app.post('/api/game/choice', (req, res) => {
  try {
    const { state, choiceIndex } = req.body;
    let newState = inkEngine.makeChoice(state, choiceIndex);

    // Apply expansion system logic
    const currentScene = newState.currentScene;

    // Get dynamic choices from expansion system
    const dynamicChoices = expansionSystem.getDynamicChoices(currentScene, newState);

    // Apply consequences if specified
    const sceneDefinition = inkEngine.STORY_SCENES[currentScene];
    if (sceneDefinition && sceneDefinition.choices && sceneDefinition.choices[choiceIndex]) {
      const selectedChoice = sceneDefinition.choices[choiceIndex];
      if (selectedChoice.consequence) {
        newState = expansionSystem.applyConsequence(selectedChoice.consequence, newState);
      }
    }

    // Check and apply unlocks
    newState = expansionSystem.checkUnlocks(newState);

    const nextScene = inkEngine.getCurrentScene(newState);
    const sceneWithId = {
      ...nextScene,
      id: newState.currentScene,
      dynamicChoices: dynamicChoices.length > 0 ? dynamicChoices : undefined
    };

    res.json({
      success: true,
      state: newState,
      scene: sceneWithId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Save game
app.post('/api/game/save', (req, res) => {
  try {
    const { state, slotId } = req.body;
    const saveId = gameState.saveGame(state, slotId);
    res.json({
      success: true,
      saveId: saveId
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// ============= EXPANSION SYSTEM ENDPOINTS =============

// Get NPC relationships
app.post('/api/game/relationships', (req, res) => {
  try {
    const { state } = req.body;
    res.json({
      success: true,
      relationships: state.relationships || {},
      unlockedLocations: state.unlockedLocations || [],
      unlockedNPCs: state.unlockedNPCs || [],
      unlockedAchievements: state.unlockedAchievements || []
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get available temporal locations
app.post('/api/game/locations', (req, res) => {
  try {
    const { state } = req.body;
    const availableLocations = [];

    for (const [key, location] of Object.entries(expansionSystem.LOCATIONS)) {
      const isUnlocked = state.unlockedLocations && state.unlockedLocations.includes(key);
      availableLocations.push({
        key,
        ...location,
        unlocked: isUnlocked || location.accessible
      });
    }

    res.json({
      success: true,
      locations: availableLocations
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get available NPCs
app.post('/api/game/npcs', (req, res) => {
  try {
    const { state } = req.body;
    const npcs = [];

    for (const [key, npc] of Object.entries(expansionSystem.NPC_ENCOUNTERS)) {
      const relationship = state.relationships ? state.relationships[key] || 0 : 0;
      npcs.push({
        key,
        name: npc.name,
        title: npc.title,
        relationship,
        unlockedAt: npc.unlocksAt,
        achievementOnMax: npc.achievementOnMax
      });
    }

    res.json({
      success: true,
      npcs
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Load game
app.get('/api/game/load/:slotId', (req, res) => {
  try {
    const { slotId } = req.params;
    const state = gameState.loadGame(slotId);
    res.json({
      success: true,
      state: state
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});

// Get game metadata
app.get('/api/game/meta', (req, res) => {
  res.json({
    title: process.env.GAME_TITLE,
    version: process.env.GAME_VERSION,
    totalScenes: 18,
    totalEchoes: 30,
    totalFlags: 70
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`NEXUS Game Engine running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
