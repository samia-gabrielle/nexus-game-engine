# NEXUS v0.4 — Button Functionality Implementation
## Complete Save/Load/Menu/Settings/Credits System

---

## 🎮 BUTTONS TO IMPLEMENT

### **Bottom Footer Buttons:**
1. ✅ **Salvar** (Save Game)
2. ✅ **Carregar** (Load Game)  
3. ✅ **Menu** (Main Menu)

### **Main Menu Buttons:**
1. ✅ **Novo Jogo** (New Game) - Already works
2. ✅ **Continuar** (Continue Last Game)
3. ✅ **Configurações** (Settings)
4. ✅ **Créditos** (Credits)

---

## 📋 IMPLEMENTATION PLAN

### **PART 1: Settings Modal**

```html
<!-- Add to index.html -->
<div id="settingsModal" class="modal hidden">
  <div class="modal-content settings-content">
    <h2>Configurações</h2>
    
    <div class="settings-section">
      <h3>Áudio</h3>
      <label>
        🔊 Volume Mestre
        <input type="range" id="masterVolume" min="0" max="100" value="30">
        <span id="volumeValue">30%</span>
      </label>
      <label>
        <input type="checkbox" id="musicToggle" checked>
        Ativar Música
      </label>
    </div>

    <div class="settings-section">
      <h3>Acessibilidade</h3>
      <label>
        <input type="checkbox" id="subtitlesToggle" checked>
        Mostrar Legendas
      </label>
      <label>
        <input type="checkbox" id="accessibilityMode">
        Modo Acessibilidade (Cores de Alto Contraste)
      </label>
      <label>
        Tamanho do Texto
        <select id="textSize">
          <option value="small">Pequeno</option>
          <option value="normal" selected>Normal</option>
          <option value="large">Grande</option>
          <option value="xlarge">Extra Grande</option>
        </select>
      </label>
    </div>

    <div class="settings-section">
      <h3>Gameplay</h3>
      <label>
        <input type="checkbox" id="fastTransitions">
        Transições Rápidas
      </label>
      <label>
        <input type="checkbox" id="autoRead">
        Narrativa Auto-Play
      </label>
    </div>

    <button id="closeSettingsBtn" class="btn btn-large">Voltar</button>
  </div>
</div>
```

---

### **PART 2: Credits Modal**

```html
<!-- Add to index.html -->
<div id="creditsModal" class="modal hidden">
  <div class="modal-content credits-content">
    <button id="closeCreditsBtn" class="btn-close-modal">✕</button>
    <h2>Créditos</h2>
    <div id="creditsList">
      <!-- Scrolling credits -->
    </div>
  </div>
</div>
```

---

### **PART 3: Continue Game Modal**

```html
<!-- Add to index.html before closing modals -->
<div id="continueModal" class="modal hidden">
  <div class="modal-content">
    <h2>Continuar Jogo</h2>
    <div id="lastGameInfo">
      <p>Última Sessão: <span id="lastSessionDate"></span></p>
      <p>Tempo de Jogo: <span id="lastPlaytime"></span></p>
      <p>Cena Atual: <span id="lastScene"></span></p>
      <p>Progresso: <span id="lastProgress"></span>%</p>
    </div>
    <div class="button-group">
      <button id="confirmContinueBtn" class="btn btn-large">Continuar</button>
      <button id="cancelContinueBtn" class="btn btn-large">Cancelar</button>
    </div>
  </div>
</div>
```

---

## 🎯 JAVASCRIPT IMPLEMENTATION (game.js additions)

### **1. Settings Management**

```javascript
// Settings modal elements
const settingsModal = document.getElementById('settingsModal');
const settingsBtn = document.getElementById('settingsBtn'); // Add to menu
const closeSettingsBtn = document.getElementById('closeSettingsBtn');

// Settings inputs
const masterVolumeSlider = document.getElementById('masterVolume');
const volumeValue = document.getElementById('volumeValue');
const musicToggle = document.getElementById('musicToggle');
const subtitlesToggle = document.getElementById('subtitlesToggle');
const accessibilityMode = document.getElementById('accessibilityMode');
const textSize = document.getElementById('textSize');
const fastTransitions = document.getElementById('fastTransitions');
const autoRead = document.getElementById('autoRead');

// Load settings from localStorage
function loadSettings() {
  const settings = JSON.parse(localStorage.getItem('nexus_settings')) || {};
  
  if (settings.volume) masterVolumeSlider.value = settings.volume;
  if (settings.musicEnabled !== undefined) musicToggle.checked = settings.musicEnabled;
  if (settings.subtitles !== undefined) subtitlesToggle.checked = settings.subtitles;
  if (settings.accessibility !== undefined) accessibilityMode.checked = settings.accessibility;
  if (settings.textSize) textSize.value = settings.textSize;
  if (settings.fastTransitions !== undefined) fastTransitions.checked = settings.fastTransitions;
  if (settings.autoRead !== undefined) autoRead.checked = settings.autoRead;
  
  applySettings();
}

// Save settings to localStorage
function saveSettings() {
  const settings = {
    volume: parseInt(masterVolumeSlider.value),
    musicEnabled: musicToggle.checked,
    subtitles: subtitlesToggle.checked,
    accessibility: accessibilityMode.checked,
    textSize: textSize.value,
    fastTransitions: fastTransitions.checked,
    autoRead: autoRead.checked
  };
  
  localStorage.setItem('nexus_settings', JSON.stringify(settings));
}

// Apply settings to UI
function applySettings() {
  // Update volume display
  volumeValue.textContent = masterVolumeSlider.value + '%';
  
  // Apply audio manager volume
  if (typeof audioManager !== 'undefined' && audioManager) {
    audioManager.bgmVolume = masterVolumeSlider.value / 100;
    if (audioManager.bgmAudio) {
      audioManager.bgmAudio.volume = masterVolumeSlider.value / 100;
    }
  }
  
  // Apply text size
  document.documentElement.style.setProperty('--text-scale', 
    textSize.value === 'small' ? '0.85' :
    textSize.value === 'large' ? '1.15' :
    textSize.value === 'xlarge' ? '1.3' : '1'
  );
  
  // Apply accessibility mode
  if (accessibilityMode.checked) {
    document.body.classList.add('accessibility-mode');
  } else {
    document.body.classList.remove('accessibility-mode');
  }
  
  // Apply subtitles
  document.body.classList.toggle('no-subtitles', !subtitlesToggle.checked);
  
  // Save to localStorage
  saveSettings();
}

// Open settings modal
function openSettings() {
  settingsModal.classList.remove('hidden');
  loadSettings();
}

// Close settings modal
function closeSettings() {
  settingsModal.classList.add('hidden');
  saveSettings();
}

// Event listeners for settings
masterVolumeSlider.addEventListener('input', applySettings);
musicToggle.addEventListener('change', applySettings);
subtitlesToggle.addEventListener('change', applySettings);
accessibilityMode.addEventListener('change', applySettings);
textSize.addEventListener('change', applySettings);
fastTransitions.addEventListener('change', applySettings);
autoRead.addEventListener('change', applySettings);
closeSettingsBtn.addEventListener('click', closeSettings);
```

---

### **2. Credits System**

```javascript
// Credits modal elements
const creditsModal = document.getElementById('creditsModal');
const creditsBtn = document.getElementById('creditsBtn'); // Add to menu
const closeCreditsBtn = document.getElementById('closeCreditsBtn');
const creditsList = document.getElementById('creditsList');

const CREDITS_DATA = `
🎮 NEXUS: A Game of Choice
═════════════════════════════════

🎨 VISUAL DIRECTION
Concept & Design
Temporal Architecture
Scene Direction

🎵 AUDIO DESIGN
Music Composition
Ambience Creation
Sound Effects

📖 NARRATIVE
Story Development
Character Design
Dialogue Writing

💻 GAME ENGINE
JavaScript Development
Save/Load Systems
Temporal Mechanics

🎭 CHARACTERS
Voice Direction
Character Development
NPC Philosophy

🌍 WORLD BUILDING
Timeline Design
Environmental Concept
Cultural Development

✨ SPECIAL THANKS
To everyone who believes in the power of choice
To all versions of ourselves across timelines
To the possibility of awakening

═════════════════════════════════
NEXUS v0.4
Released 2026
All rights reserved
`;

function displayCredits() {
  // Auto-scroll credits
  creditsList.innerHTML = CREDITS_DATA.split('\n')
    .map(line => `<p class="credit-line">${line}</p>`)
    .join('');
  
  creditsModal.classList.remove('hidden');
  
  // Auto-scroll effect
  let scrollPos = 0;
  const creditScroll = setInterval(() => {
    scrollPos += 1;
    creditsList.style.transform = `translateY(-${scrollPos}px)`;
    
    if (scrollPos > creditsList.scrollHeight) {
      clearInterval(creditScroll);
    }
  }, 30);
}

// Event listeners for credits
creditsBtn?.addEventListener('click', displayCredits);
closeCreditsBtn.addEventListener('click', () => {
  creditsModal.classList.add('hidden');
});
```

---

### **3. Continue Game System**

```javascript
// Continue modal elements
const continueModal = document.getElementById('continueModal');
const continueBtn = document.getElementById('continueBtn'); // Add to menu
const confirmContinueBtn = document.getElementById('confirmContinueBtn');
const cancelContinueBtn = document.getElementById('cancelContinueBtn');
const lastSessionDate = document.getElementById('lastSessionDate');
const lastPlaytime = document.getElementById('lastPlaytime');
const lastScene = document.getElementById('lastScene');
const lastProgress = document.getElementById('lastProgress');

function checkLastGame() {
  const lastGame = localStorage.getItem('nexus_lastGame');
  return lastGame ? JSON.parse(lastGame) : null;
}

function displayLastGame() {
  const lastGame = checkLastGame();
  
  if (!lastGame) {
    // No saved game - show new game instead
    initGame();
    return;
  }
  
  // Format date
  const date = new Date(lastGame.timestamp);
  lastSessionDate.textContent = date.toLocaleString('pt-BR');
  
  // Format playtime
  const hours = Math.floor(lastGame.playtimeSeconds / 3600);
  const minutes = Math.floor((lastGame.playtimeSeconds % 3600) / 60);
  lastPlaytime.textContent = `${hours}h ${minutes}m`;
  
  // Display scene
  lastScene.textContent = lastGame.sceneTitle || lastGame.currentScene;
  
  // Calculate progress (rough estimate)
  const totalScenes = 60; // Approximate total scenes
  const progress = Math.min(100, Math.floor((lastGame.scenesVisited?.length || 0) / totalScenes * 100));
  lastProgress.textContent = progress;
  
  continueModal.classList.remove('hidden');
}

function continueLast Game() {
  const lastGame = checkLastGame();
  if (lastGame) {
    gameState = lastGame;
    mainMenuModal.classList.add('hidden');
    continueModal.classList.add('hidden');
    loadScene();
    startPlaytimeTimer();
  }
}

// Event listeners
continueBtn?.addEventListener('click', displayLastGame);
confirmContinueBtn.addEventListener('click', continueLastGame);
cancelContinueBtn.addEventListener('click', () => {
  continueModal.classList.add('hidden');
});

// Update main menu to show Continue if available
function updateMainMenu() {
  if (continueBtn && checkLastGame()) {
    continueBtn.style.display = 'block';
  } else if (continueBtn) {
    continueBtn.style.display = 'none';
  }
}
```

---

### **4. Enhanced Save/Load System**

```javascript
// Update saveGame function
async function saveGame() {
  try {
    // Create save slot
    const saveData = {
      ...gameState,
      playtimeSeconds: gameState.playtimeSeconds || 0,
      timestamp: Date.now(),
      sceneTitle: sceneTitle.textContent
    };
    
    // Save to localStorage slot 1 (auto-save)
    localStorage.setItem('nexus_slot_autosave', JSON.stringify(saveData));
    
    // Also save as "last game" for continue feature
    localStorage.setItem('nexus_lastGame', JSON.stringify(saveData));
    
    // Show save slots for manual saves
    showSaveSlots(saveData);
    
    console.log('✅ Game saved!');
    showMessage('Jogo salvo com sucesso!');
    
  } catch (error) {
    console.error('Save error:', error);
    showError('Erro ao salvar jogo');
  }
}

// Enhanced load function
async function loadGame() {
  try {
    // Show save slots to select from
    const slots = [];
    
    // Check all save slots (1-10)
    for (let i = 1; i <= 10; i++) {
      const slotData = localStorage.getItem(`nexus_slot_${i}`);
      if (slotData) {
        slots.push({
          slot: i,
          data: JSON.parse(slotData)
        });
      }
    }
    
    // Check autosave
    const autosave = localStorage.getItem('nexus_slot_autosave');
    if (autosave) {
      slots.unshift({
        slot: 'autosave',
        data: JSON.parse(autosave),
        label: 'Auto-Save'
      });
    }
    
    if (slots.length === 0) {
      showMessage('Nenhum jogo salvo encontrado');
      return;
    }
    
    // Display slots
    displaySaveSlots(slots);
    saveLoadModal.classList.remove('hidden');
    
  } catch (error) {
    console.error('Load error:', error);
    showError('Erro ao carregar jogo');
  }
}

function displaySaveSlots(slots) {
  const slotsHtml = slots.map(slot => {
    const date = new Date(slot.data.timestamp).toLocaleString('pt-BR');
    const hours = Math.floor(slot.data.playtimeSeconds / 3600);
    const minutes = Math.floor((slot.data.playtimeSeconds % 3600) / 60);
    
    return `
      <div class="save-slot" onclick="loadFromSlot('${slot.slot}')">
        <h4>${slot.label || `Slot ${slot.slot}`}</h4>
        <p>Cena: ${slot.data.sceneTitle}</p>
        <p>Tempo: ${hours}h ${minutes}m</p>
        <p>Data: ${date}</p>
      </div>
    `;
  }).join('');
  
  saveSlots.innerHTML = slotsHtml;
}

function loadFromSlot(slotId) {
  try {
    const slotKey = slotId === 'autosave' ? 'nexus_slot_autosave' : `nexus_slot_${slotId}`;
    const savedGame = localStorage.getItem(slotKey);
    
    if (savedGame) {
      gameState = JSON.parse(savedGame);
      mainMenuModal.classList.add('hidden');
      saveLoadModal.classList.add('hidden');
      loadScene();
      startPlaytimeTimer();
      showMessage('Jogo carregado!');
    }
  } catch (error) {
    console.error('Load error:', error);
    showError('Erro ao carregar jogo');
  }
}
```

---

### **5. CSS for New Elements**

```css
/* Settings Modal */
.settings-content {
  max-width: 500px;
  max-height: 70vh;
  overflow-y: auto;
}

.settings-section {
  margin: 20px 0;
  padding: 15px;
  border: 1px solid var(--color-accent-purple);
  border-radius: 4px;
  background-color: rgba(160, 66, 255, 0.05);
}

.settings-section h3 {
  color: var(--color-accent-blue);
  margin-bottom: 12px;
  font-size: 14px;
  text-transform: uppercase;
}

.settings-section label {
  display: flex;
  align-items: center;
  margin: 10px 0;
  color: var(--color-text-primary);
  gap: 10px;
}

.settings-section input[type="range"] {
  flex: 1;
  height: 4px;
  background-color: var(--color-bg-light);
  border-radius: 2px;
  cursor: pointer;
}

.settings-section input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

.settings-section select {
  padding: 6px;
  background-color: var(--color-bg-light);
  color: var(--color-text-primary);
  border: 1px solid var(--color-accent-purple);
  border-radius: 4px;
  cursor: pointer;
}

/* Credits Modal */
.credits-content {
  max-width: 600px;
  max-height: 70vh;
  overflow-y: auto;
  position: relative;
}

#creditsList {
  text-align: center;
  padding: 40px 20px;
  font-size: 14px;
  line-height: 2;
  transition: transform 0.03s linear;
}

.credit-line {
  color: var(--color-text-secondary);
  margin: 5px 0;
}

.credit-line:empty {
  height: 20px;
}

/* Accessibility Mode */
body.accessibility-mode {
  --color-bg-dark: #000;
  --color-bg-light: #222;
  --color-text-primary: #fff;
  --color-text-secondary: #ccc;
  --color-accent-blue: #00ffff;
  --color-accent-purple: #ff00ff;
}

body.no-subtitles .echo-item small,
body.no-subtitles .scene-narrative {
  visibility: hidden;
}

/* Text scaling */
body {
  --text-scale: 1;
  font-size: calc(14px * var(--text-scale));
}

/* Save slot styling */
.save-slot {
  cursor: pointer;
  padding: 15px;
  margin: 10px 0;
  border: 2px solid var(--color-accent-purple);
  border-radius: 4px;
  background-color: rgba(160, 66, 255, 0.1);
  transition: all 0.3s ease;
}

.save-slot:hover {
  background-color: rgba(160, 66, 255, 0.2);
  border-color: var(--color-accent-blue);
  transform: translateX(5px);
}

.save-slot h4 {
  color: var(--color-accent-blue);
  margin: 0 0 8px 0;
}

.save-slot p {
  color: var(--color-text-secondary);
  font-size: 12px;
  margin: 3px 0;
}
```

---

## 🎮 MENU STRUCTURE (HTML Updates)

```html
<!-- Update mainMenuModal buttons -->
<div id="mainMenuModal" class="modal hidden">
  <div class="modal-content">
    <h2>NEXUS</h2>
    <div class="menu-buttons">
      <button id="newGameBtn" class="btn btn-large">Novo Jogo</button>
      <button id="continueBtn" class="btn btn-large">Continuar</button>
      <button id="settingsBtn" class="btn btn-large">Configurações</button>
      <button id="creditsBtn" class="btn btn-large">Créditos</button>
    </div>
  </div>
</div>
```

---

## 🔄 FLOW DIAGRAM

```
Main Menu
├── Novo Jogo → Start game
├── Continuar → Load last game (if exists)
├── Configurações → Settings modal
│   ├── Audio (Volume, Music)
│   ├── Accessibility (Subtitles, Contrast, Text Size)
│   └── Gameplay (Fast transitions, Auto-play)
└── Créditos → Auto-scrolling credits

During Gameplay
├── Salvar → Choose slot (1-10) or autosave
├── Carregar → Select from saved slots
└── Menu → Return to main menu (with prompt to save)
```

---

## ✅ IMPLEMENTATION CHECKLIST

- [ ] Add HTML elements to index.html (Settings, Credits, Continue modals)
- [ ] Add CSS for new modals and accessibility
- [ ] Implement Settings functions in game.js
- [ ] Implement Credits display in game.js
- [ ] Implement Continue game in game.js
- [ ] Update Save/Load functions with slots
- [ ] Test all buttons and functionality
- [ ] Add "Settings" button to main menu HTML
- [ ] Add "Credits" button to main menu HTML
- [ ] Add "Continue" button to main menu HTML
- [ ] Test all accessibility features
- [ ] Test save/load with multiple slots

**Ready for implementation!** 🎮✨
