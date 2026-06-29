# 🏗️ NEXUS SYSTEM DESIGN DOCUMENT

---

## 📊 ARCHITECTURE OVERVIEW

```
NEXUS Game Engine
├── Frontend: HTML/CSS/JavaScript
├── Data: SCENES object (62 scenes)
├── Audio: Music system (13 tracks)
├── Philosophy: Menu system (8 philosophers, 4 myths)
├── Relationships: Tracking system (4 characters, -100 to +110)
├── Ecos: 38 collectibles
├── Achievements: 47 total
└── State: localStorage persistence
```

---

## 🎮 CORE SYSTEMS

### 1. SCENE SYSTEM

**Data structure:**
```javascript
{
    key: 'unique_id',
    title: 'Scene Name',
    description: 'Dialogue text',
    image: 'path/to/image.png',
    music: 'path/to/music.mp3',
    choices: [
        {
            text: 'Choice text',
            nextScene: 'next_scene_id',
            relationshipChange: { character: number },
            ecoUnlock: 'eco_id'
        }
    ],
    ecos: ['eco1', 'eco2']
}
```

**Flow:**
1. Load scene from SCENES[sceneId]
2. Display image + title + description
3. Wait 3 seconds
4. Display choices
5. On choice click → calculate consequences → load next scene

### 2. RELATIONSHIP SYSTEM

**Per-character tracking:**
- Ivo: -100 to +100
- Será: -100 to +110 (can exceed with Choice C final)
- Thomas: -100 to +100
- Reva: -100 to +110 (can exceed with Choice C final)

**Stored in localStorage:**
```javascript
gameState.relationships = {
    ivo: 35,
    sera: 50,
    thomas: 20,
    reva: -10
}
```

**Changed by:**
- Each choice's relationshipChange value
- Some philosophy popup interactions
- Final ending rewards

**Used for:**
- Unlocking alternative scenes
- Determining ending variants
- Achievement conditions

### 3. ECO SYSTEM

**38 total ecos:** Memory fragments that expand narrative

**Triggered by:**
- Specific scene visits
- Specific choice selections
- Philosophy popups
- Ending conditions

**Stored:**
```javascript
gameState.ecosUnlocked = [
    'ivo_weight_silence',
    'sera_healer_face',
    // ... etc
]
```

**Purpose:**
- Unlock achievements
- Deepen understanding
- Encourage replays to find all
- Create sense of hidden narrative

### 4. ACHIEVEMENT SYSTEM

**47 achievements across 6 categories:**

| Category | Count | Condition |
|----------|-------|-----------|
| Eco-based | 38 | Unlock each eco |
| Path-based | 6 | Complete ending |
| Philosophy | 10 | Unlock concepts |
| Completionist | 4 | 100% various |
| Hidden | 7 | Secret conditions |
| Special | 4 | Rare actions |

**Stored:**
```javascript
gameState.achievements = {
    'eco_ivo_silence': true,
    'path_harmony': true,
    // ... etc
}
```

**Unlocking:**
- Auto-triggered when condition met
- Notification displayed
- Added to gallery
- Counts toward total

### 5. PHILOSOPHY MENU SYSTEM

**Data structure:**
```javascript
const FILOSOFOS = {
    'sartre': {
        nome: 'Jean-Paul Sartre',
        status: 'desbloqueado' | 'bloqueado',
        condicao: 'scene_id',
        // ... full philosopher data
    }
}
```

**Unlocking rules:**
- Sartre/Camus: Unlocked from start
- Others: Unlock when entering their character's arc
- Myths: Mostly unlocked, 2 require specific paths

**Menu tabs:**
- Filósofos (expandable cards)
- Mitologia (lore)
- Minha Jornada (tracking)

### 6. MUSIC SYSTEM

**Current implementation:**
```javascript
const AudioSystem = {
    backgroundMusic: null,
    playMusicForScene(sceneId) {
        // Fade out old
        // Load new
        // Fade in
    }
}
```

**Per-scene music:**
- IVO: Arvo Pärt (guilty, meditative)
- SERÁ: Arvo Pärt intensified (yearning)
- THOMAS: Paul Desenne (cerebral)
- REVA: Arca (chaotic, seductive)
- ACT 5 HARMONY: Pärt orchestral
- ACT 5 LIBERATION: Arca aggressive
- ACT 5 PEACE: Satie (acceptance)

**Volume control:**
- Master slider
- Music slider (separate from effects)
- Settings saved to localStorage

---

## 💾 PERSISTENCE LAYER

### localStorage schema:

```javascript
{
    // Current state
    currentScene: 'scene_id',
    currentLanguage: 'pt' | 'en',
    
    // Character relationships
    relationships: {
        ivo: 0-100,
        sera: 0-110,
        thomas: 0-100,
        reva: 0-110
    },
    
    // Collections
    ecosUnlocked: ['eco1', 'eco2', ...],
    achievements: { 'ach_id': true, ... },
    philosophersUnlocked: ['sartre', 'camus', ...],
    
    // Settings
    volume: 0.8,
    musicVolume: 0.7,
    textSpeed: 1.0,
    subtitles: true,
    language: 'pt',
    
    // Playstyle tracking
    scenesViewed: 42,
    choicesMade: 12,
    philosophyMenuVisits: 15,
    
    // New Game+ data
    previousPlaythroughs: [
        { ending: 'harmony_1', date: '2026-06-28' },
        { ending: 'peace_3', date: '2026-06-29' }
    ]
}
```

**Autosave:** Every scene completion
**Backup:** Can export/import full state
**Clear:** Reset button available in settings

---

## 🎬 SCENE FLOW ARCHITECTURE

```
INTRO
  ↓
CHOOSE CHARACTER
  ├─ IVO (7 scenes)
  ├─ SERÁ (17 scenes)
  ├─ THOMAS (12 scenes)
  └─ REVA (12 scenes)
  ↓
ACT 5 GATEWAY
  ├─ HARMONY (4 scenes → 3 endings)
  ├─ LIBERATION (4 scenes → 3 endings)
  └─ PEACE (4 scenes → 3 endings)
  ↓
EPILOGUE (1 scene)
  ↓
END / NEW GAME+
```

**Total: 62 scenes minimum**

---

## 🔊 AUDIO ARCHITECTURE

### Audio files (13 tracks):

| Scene | File | Composer |
|-------|------|----------|
| Ivo | ivo-theme.mp3 | Arvo Pärt |
| Será | sera-spiegel.mp3 | Arvo Pärt |
| Thomas | thomas-library.mp3 | Paul Desenne |
| Reva | reva-throne.mp3 | Arca |
| Harmony | harmony-theme.mp3 | Arvo Pärt |
| Liberation | liberation-theme.mp3 | Arca |
| Peace | peace-theme.mp3 | Erik Satie |
| + 6 more variations | ... | ... |

### Playback logic:

```javascript
function playMusicForScene(sceneId) {
    const map = MUSIC_MAP[sceneId];
    
    if (map === currentMusic) return; // Already playing
    
    // Fade out (0.5s)
    AudioSystem.fadeOut(currentMusic, 500);
    
    // Load new
    AudioSystem.load(map);
    
    // Fade in (1s)
    AudioSystem.fadeIn(map, 1000);
    
    currentMusic = map;
}
```

---

## 🌐 INTERNATIONALIZATION

### Languages supported:
- Portuguese (pt) - default
- English (en)

### Translation system:
```javascript
const TRANSLATIONS = {
    'button_continue': {
        pt: 'Continuar',
        en: 'Continue'
    }
}

function t(key) {
    return TRANSLATIONS[key][currentLanguage];
}
```

### Applied to:
- UI buttons
- Menu text
- Some dialogue (character dialogue stays original language)

---

## 📊 PERFORMANCE TARGETS

### Load time:
- Initial load: < 2s
- Scene transitions: < 0.5s
- Music switch: < 1s (fade)

### Memory:
- Full game state: < 2MB
- Images cached: < 50MB
- Audio streaming: 5MB total

### Compatibility:
- Chrome/Firefox/Safari (latest 2 versions)
- Mobile (iOS/Android) at 1024x768 minimum
- Desktop at 1280x720 minimum

---

## 🔐 SECURITY CONSIDERATIONS

**Not encrypted:** Game state is in localStorage (not sensitive)  
**No backend:** Entirely client-side  
**No tracking:** No analytics or telemetry  
**No ads:** No external code  
**Privacy:** LGPD compliant (no data collection)

---

## 🚀 DEPLOYMENT ARCHITECTURE

### Development:
```
localhost:3000 → nexus-complete.html
```

### Production (itch.io):
```
https://whatsn.itch.io/nexus/play → nexus-complete.html + assets/
```

### GitHub:
```
/repo/
├── nexus-complete.html
├── game-engine/public/audio/
├── act5-images/
├── docs/ (all MD files)
└── .gitignore
```

---

## 🔄 STATE MACHINE (Simplified)

```
[INIT]
    ↓
[MAIN_MENU] → Choose language
    ↓
[CHARACTER_SELECT] → Choose path (Ivo/Será/Thomas/Reva)
    ↓
[PLAYING_SCENE] → Read dialogue
    ↓
[CHOICE_SCREEN] → Select option
    ↓
[CONSEQUENCE] → Update state, unlock ecos
    ↓
[NEXT_SCENE] (loop until Act 5)
    ↓
[ACT5_PATH_SELECT] → Choose Harmony/Liberation/Peace
    ↓
[PLAYING_ENDING] → Final scene branch
    ↓
[EPILOGUE] → Reflection
    ↓
[FINAL_SCREEN] → Gallery/New Game+/Exit
    ↓
[END]
```

---

## 📋 QUALITY ASSURANCE CHECKLIST

- [ ] All 62 scenes load correctly
- [ ] All 300+ choices branch to correct next scenes
- [ ] All 38 ecos unlock at proper moments
- [ ] All 47 achievements trigger correctly
- [ ] All music files play without stuttering
- [ ] All images display in correct aspect ratio
- [ ] All relationships track accurately
- [ ] All 9 endings achievable
- [ ] New Game+ tracks previous playthroughs
- [ ] localStorage persists across sessions
- [ ] Accessibility options work (colorblind, text size, speed)
- [ ] Philosophy menu popups display correctly
- [ ] Language switching works mid-game
- [ ] Volume controls functional
- [ ] Mobile responsiveness tested

═════════════════════════════════════════════════════════════════════════

