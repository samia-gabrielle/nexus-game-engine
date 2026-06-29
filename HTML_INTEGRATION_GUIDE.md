# 🔧 HTML INTEGRATION GUIDE - HOW TO ADD SCENES

---

## 📋 OVERVIEW

**Current nexus-complete.html:** 2000+ lines, fully functional  
**What to add:** All 4 character arcs + ACT 5 paths + Epilogue  
**Structure:** Existing pattern already works. Just expand SCENES object.

---

## 🎯 EXISTING PATTERN

```javascript
const SCENES = {
    'inicio': {
        title: 'NEXUS',
        description: 'You awaken...',
        choices: [
            { text: 'Find Ivo', nextScene: 'ivo_cena_1' },
            { text: 'Find Será', nextScene: 'sera_cena_1' }
        ]
    }
}
```

**Every scene needs:**
- **Key:** Unique identifier (e.g., 'ivo_cena_1')
- **title:** Display name
- **description:** Main dialogue text
- **image:** Path to image file
- **music:** Audio file to play
- **choices:** Array of 3 decision objects
- **ecos:** Array of echo IDs unlocked

---

## 📝 ADDING IVO ARC

### Step 1: Copy this template into SCENES object:

```javascript
'ivo_cena_1': {
    title: 'IVO - The Weight of Silence',
    description: `[He stands. Guilt visible on his face.]
    
IVO: "You know what is truly cruel about guilt?
It never asks permission to exist. It just... is."

[pause]

"For thirty years, I've carried weight of Sísifo's stone.
But unlike Sísifo, I cannot imagine being happy."

[He looks at you directly.]

"Sartre would say I'm condemned to be free. 
But freedom means... I chose this guilt. 
And if I chose it, can I ever truly be free of it?"`,
    
    image: 'act5-images/ivo/ivo_cena_1.png',
    music: 'game-engine/public/audio/ivo-theme.mp3',
    
    choices: [
        {
            text: "Accept the guilt. Help him carry it.",
            nextScene: 'ivo_choice_a',
            relationshipChange: { ivo: 15 },
            ecoUnlock: 'ivo_weight_accepted'
        },
        {
            text: "Challenge him to forgive himself.",
            nextScene: 'ivo_choice_b',
            relationshipChange: { ivo: 15 },
            ecoUnlock: 'ivo_forgiveness_demanded'
        },
        {
            text: "Question: Is this guilt really yours?",
            nextScene: 'ivo_choice_c',
            relationshipChange: { ivo: 20 },
            ecoUnlock: 'ivo_guilt_questioned',
            philosophyUnlock: ['camus', 'sartre']
        }
    ],
    
    ecos: ['ivo_weight_silence', 'sissifo_stone', 'sartre_condemned']
},
```

### Step 2: Continue with IVO_CHOICE_A (consequence scene):

```javascript
'ivo_choice_a': {
    title: 'IVO - Acceptance',
    description: `IVO: "Then... you understand.
    
Camus would say: one must imagine Sísifo happy.
But that requires accepting... that nothing changes.
That the stone falls. Always falls.

And you keep pushing anyway."

[He nods slightly.]

"That's enough. That's all I can ask."`,
    
    image: 'act5-images/ivo/ivo_choice_a.png',
    music: 'game-engine/public/audio/ivo-acceptance.mp3',
    
    choices: [
        {
            text: 'Move to next character',
            nextScene: 'sera_intro',
            relationshipChange: { ivo: 10 }
        }
    ],
    
    ecos: ['ivo_acceptance_choice']
},
```

---

## 🎯 ADDING SERÁ ARC (Multi-cena structure)

### Structure for multi-scene arcs:

```javascript
'sera_cena_1': {
    title: 'SERÁ - The Healer\'s Isolation (Part 1)',
    description: `[Será stands at distance. Invisible.]
    
SERÁ: "Thirty years of invisible healing.
Thirty years of no one seeing my face..."`,
    
    image: 'act5-images/sera/sera_cena_1.png',
    music: 'game-engine/public/audio/sera-spiegel.mp3',
    
    choices: [
        {
            text: 'See her. Truly see her.',
            nextScene: 'sera_cena_1_choice_a',
            relationshipChange: { sera: 20 }
        },
        {
            text: 'Ask her to see herself',
            nextScene: 'sera_cena_1_choice_b',
            relationshipChange: { sera: 15 }
        },
        {
            text: 'Question her compassion',
            nextScene: 'sera_cena_1_choice_c',
            relationshipChange: { sera: 25 },
            philosophyUnlock: ['levinas', 'buber']
        }
    ],
    
    ecos: ['sera_healer_face', 'levinas_rosto', 'sera_invisibility']
},

'sera_cena_1_choice_a': {
    title: 'SERÁ - Recognition (Part 1A)',
    description: `SERÁ: "You... you see me?
    
Not as healer. As woman?"

[First time you've seen her cry.]

"That's... that's all I ever wanted."`,
    
    image: 'act5-images/sera/sera_choice_a.png',
    music: 'game-engine/public/audio/sera-recognition.mp3',
    
    choices: [
        {
            text: 'Continue to Cena 2',
            nextScene: 'sera_cena_2',
            relationshipChange: { sera: 15 }
        }
    ]
},

// Continue pattern for choice_b and choice_c...
// Then move to sera_cena_2, which has 3 more branch choices
// Then sera_cena_3, which leads to 3 FINAL endings
```

---

## 🎬 ACT 5 PATHS STRUCTURE

### After 4 character arcs, player chooses path:

```javascript
'act5_choice': {
    title: 'ACT 5 - Choose Your Path',
    description: `The four stand before you.
The world begins to crack.
You must choose how reality ends.`,
    
    image: 'act5-images/act5_choice.png',
    music: 'game-engine/public/audio/act5-gateway.mp3',
    
    choices: [
        {
            text: 'HARMONY - Collective Salvation',
            nextScene: 'harmony_cena_1'
        },
        {
            text: 'LIBERATION - Freedom at All Costs',
            nextScene: 'liberation_cena_1'
        },
        {
            text: 'PEACE - Accept the Cycles',
            nextScene: 'peace_cena_1'
        }
    ]
},

'harmony_cena_1': {
    title: 'ACT 5 - HARMONY PATH',
    description: `All four sacrifice pieces of themselves.
NEXUS doesn't collapse—it transforms...`,
    
    image: 'act5-images/harmony/opening.png',
    music: 'game-engine/public/audio/harmony-theme.mp3',
    
    choices: [
        {
            text: 'All sacrifice together',
            nextScene: 'harmony_ending_1'
        },
        {
            text: 'One sacrifices alone',
            nextScene: 'harmony_ending_2'
        },
        {
            text: 'Share the burden imperfectly',
            nextScene: 'harmony_ending_3'
        }
    ]
},

'harmony_ending_1': {
    title: 'ENDING: The Healing Collective',
    description: `[NEXUS pulses with new light. Different.]

The four remain. Transformed. No longer masters.
Guardians of something smaller. Something real.

Billions live. Suffer. Love. Die.
And that... is beautiful.`,
    
    image: 'act5-images/harmony/ending_1.png',
    music: 'game-engine/public/audio/harmony-ending.mp3',
    
    choices: [
        {
            text: 'See Epilogue',
            nextScene: 'epilogue',
            relationshipChange: { ivo: 50, sera: 50, thomas: 50, reva: 50 },
            ecoUnlock: 'harmony_achieved'
        }
    ]
},
```

---

## 🔊 AUDIO INTEGRATION

### Music files needed:

```
game-engine/public/audio/
├── ivo/
│   ├── ivo-theme.mp3 (Arvo Pärt - meditative)
│   ├── ivo-acceptance.mp3
│   └── ivo-conclusion.mp3
├── sera/
│   ├── sera-spiegel.mp3 (Arvo Pärt intensified)
│   ├── sera-wound.mp3
│   └── sera-ending.mp3
├── thomas/
│   ├── thomas-library.mp3 (Paul Desenne - cerebral)
│   ├── thomas-certainty.mp3
│   └── thomas-death.mp3
├── reva/
│   ├── reva-throne.mp3 (Arca - chaotic)
│   ├── reva-price.mp3
│   └── reva-transcendence.mp3
└── act5/
    ├── harmony-theme.mp3
    ├── liberation-theme.mp3
    └── peace-theme.mp3
```

### Code to add music switching:

```javascript
// In playMusicForScene() function:

function playMusicForScene(sceneId) {
    const musicMap = {
        'ivo_cena_1': 'game-engine/public/audio/ivo/ivo-theme.mp3',
        'sera_cena_1': 'game-engine/public/audio/sera/sera-spiegel.mp3',
        'thomas_cena_1': 'game-engine/public/audio/thomas/thomas-library.mp3',
        'reva_cena_1': 'game-engine/public/audio/reva/reva-throne.mp3',
        // ... etc for every scene
    };
    
    const musicPath = musicMap[sceneId];
    
    if (musicPath && musicPath !== currentMusic) {
        if (backgroundMusic) {
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;
        }
        
        backgroundMusic = new Audio(musicPath);
        backgroundMusic.loop = true;
        backgroundMusic.play().catch(err => console.log('Audio play prevented:', err));
        
        currentMusic = musicPath;
    }
}
```

---

## 🖼️ IMAGE INTEGRATION

### Image files needed:

```
act5-images/
├── ivo/
│   ├── ivo_cena_1.png
│   ├── ivo_choice_a.png
│   ├── ivo_choice_b.png
│   └── ivo_choice_c.png
├── sera/
│   ├── sera_cena_1.png
│   ├── sera_cena_2.png
│   ├── sera_cena_3.png
│   ├── sera_choice_*.png (multiple)
│   └── sera_endings/ (3 images)
├── thomas/
│   ├── thomas_cena_1.png
│   ├── thomas_cena_2.png
│   ├── thomas_cena_3.png
│   └── thomas_endings/ (3 images)
├── reva/
│   ├── reva_cena_1.png
│   ├── reva_cena_2.png
│   ├── reva_cena_3.png
│   └── reva_endings/ (3 images)
└── act5/
    ├── harmony_*.png (5 images for 3 endings)
    ├── liberation_*.png (5 images for 3 endings)
    ├── peace_*.png (5 images for 3 endings)
    └── epilogue.png
```

### Code to display images:

```javascript
function displayScene(scene) {
    const mainLayout = document.querySelector('.main-layout');
    
    if (scene.image) {
        const img = document.createElement('img');
        img.src = scene.image;
        img.alt = scene.title;
        img.style.maxWidth = '100%';
        img.style.borderRadius = '10px';
        img.style.marginBottom = '20px';
        
        mainLayout.insertBefore(img, mainLayout.firstChild);
    }
    
    // ... rest of scene display
}
```

---

## 📊 TOTAL SCENES NEEDED

- **IVO:** 1 main + 3 choices + 3 follow-ups = 7 scenes
- **SERÁ:** 1 + 3 + 1 + 3 + 1 + 3 + 1 + 3 = 17 scenes
- **THOMAS:** 1 + 3 + 1 + 3 + 1 + 3 = 12 scenes
- **REVA:** 1 + 3 + 1 + 3 + 1 + 3 = 12 scenes
- **ACT 5 Gateway:** 1 scene
- **HARMONY path:** 1 + 3 = 4 scenes
- **LIBERATION path:** 1 + 3 = 4 scenes
- **PEACE path:** 1 + 3 = 4 scenes
- **EPILOGUE:** 1 scene

**TOTAL: ~62 scenes to add**

Current HTML likely has 15-20. So adding ~42-47 new scene definitions.

---

## ✅ IMPLEMENTATION CHECKLIST

- [ ] Add all 62 scene definitions to SCENES object
- [ ] Each scene has unique key
- [ ] Each scene has proper dialogue from MD files
- [ ] Each scene has image path reference
- [ ] Each scene has music path reference
- [ ] Each choice has relationshipChange object
- [ ] Each choice has nextScene defined (no dangling choices)
- [ ] All ecos are properly unlocked
- [ ] All philosophy concepts unlocked at right moments
- [ ] Music files exist in correct directories
- [ ] Image files exist in correct directories
- [ ] Test all 9 paths from start to end
- [ ] Test all 47 achievements are attainable
- [ ] New Game+ properly tracks seen scenes
- [ ] Achievement gallery shows correct progress

---

## 🚀 DEPLOYMENT CHECKLIST

After integration:
- [ ] Local test on http://localhost:3000
- [ ] All scenes load without errors
- [ ] Music plays correctly
- [ ] Images display properly
- [ ] Choices branch correctly
- [ ] Relationships track accurately
- [ ] Ecos unlock properly
- [ ] Achievements trigger
- [ ] Can reach all 9 endings
- [ ] Gallery shows all content
- [ ] Epilogue plays correctly

Then:
- [ ] Push to itch.io
- [ ] Push to GitHub
- [ ] Test on mobile
- [ ] Check accessibility settings work
- [ ] Verify Polish checklist items

═════════════════════════════════════════════════════════════════════════

