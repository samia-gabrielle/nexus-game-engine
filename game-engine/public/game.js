// NEXUS Game Client - SIMPLIFIED VERSION
const API_BASE = 'http://localhost:3000/api';
let gameState = null;

// Get DOM elements
const mainMenuModal = document.getElementById('mainMenuModal');
const newGameBtn = document.getElementById('newGameBtn');
const sceneTitle = document.getElementById('sceneTitle');
const sceneImage = document.getElementById('sceneImage');
const sceneNarrative = document.getElementById('sceneNarrative');
const choicesContainer = document.getElementById('choicesContainer');

// Event listeners
if (newGameBtn) {
  newGameBtn.addEventListener('click', initGame);
}

// Initialize new game
async function initGame() {
  try {
    console.log('🎮 Starting new game...');
    const response = await fetch(`${API_BASE}/game/new`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();
    console.log('📦 Server response:', data);

    if (data.success && data.state) {
      gameState = data.state;
      console.log('✅ Game initialized');

      // Hide menu, show game
      if (mainMenuModal) {
        mainMenuModal.classList.add('hidden');
      }

      // Load first scene
      loadScene();
    } else {
      console.error('❌ Failed to initialize game:', data.error);
      alert('Erro ao iniciar jogo: ' + data.error);
    }
  } catch (error) {
    console.error('❌ Error initializing game:', error);
    alert('Erro: ' + error.message);
  }
}

// Load and display scene
async function loadScene() {
  try {
    if (!gameState || !gameState.currentScene) {
      console.error('❌ No current scene');
      return;
    }

    console.log('📖 Loading scene:', gameState.currentScene);

    const response = await fetch(`${API_BASE}/game/scene`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ state: gameState })
    });

    const data = await response.json();
    console.log('📦 Scene data:', data);

    if (data.success && data.scene) {
      const scene = data.scene;

      // Display title
      if (sceneTitle) {
        sceneTitle.textContent = scene.title || '';
      }

      // Display image
      if (sceneImage && scene.image) {
        sceneImage.src = scene.image;
        sceneImage.alt = scene.title;
      }

      // Display narrative
      if (sceneNarrative) {
        sceneNarrative.innerHTML = '';
        if (scene.narrative && Array.isArray(scene.narrative)) {
          scene.narrative.forEach(line => {
            const p = document.createElement('p');
            p.textContent = line;
            sceneNarrative.appendChild(p);
          });
        }
      }

      // Display choices
      if (choicesContainer && scene.choices && Array.isArray(scene.choices)) {
        choicesContainer.innerHTML = '';
        scene.choices.forEach((choice, index) => {
          const button = document.createElement('button');
          button.className = 'choice-button';
          button.textContent = choice.text;
          button.addEventListener('click', () => makeChoice(index, choice));
          choicesContainer.appendChild(button);
        });
      }
    } else {
      console.error('❌ Failed to load scene:', data.error);
    }
  } catch (error) {
    console.error('❌ Error loading scene:', error);
  }
}

// Make a choice
async function makeChoice(choiceIndex, choice) {
  try {
    console.log('🔷 Making choice:', choice.text);

    const response = await fetch(`${API_BASE}/game/choice`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        state: gameState,
        choiceIndex: choiceIndex,
        choice: choice
      })
    });

    const data = await response.json();
    console.log('📦 Choice response:', data);

    if (data.success && data.state) {
      gameState = data.state;
      loadScene();
    } else {
      console.error('❌ Failed to make choice:', data.error);
    }
  } catch (error) {
    console.error('❌ Error making choice:', error);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  console.log('✅ Game client loaded');

  // Show main menu
  if (mainMenuModal) {
    mainMenuModal.classList.remove('hidden');
  }
});
