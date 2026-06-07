# NEXUS - Technical Documentation

## Architecture Overview

NEXUS is a self-contained single-file HTML5 game with embedded CSS and JavaScript. No external dependencies, no server required, no build process needed.

## File Structure

```
nexus-complete.html          # Complete game (single file)
├── <!DOCTYPE html>
├── <head>
│   ├── Metadata
│   ├── <style> (CSS)
│   └── Various declarations
├── <body>
│   ├── HTML Structure
│   └── <script> (JavaScript)
```

## Technology Stack

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Game logic, state management, event handling
- **Web Audio API**: Procedural sound generation (no external audio files)
- **localStorage API**: Persistent save games

### No External Dependencies
- No frameworks (React, Vue, etc.)
- No UI libraries (Bootstrap, etc.)
- No build tools required
- Works offline completely

## Core Systems

### 1. Game State Management

```javascript
const gameState = {
    currentScene: 'inicio',           // Current scene ID
    sceneCount: 0,                    // Scenes visited
    startTime: Date.now(),            // Session start
    relationships: {                  // Character relationships
        ivo: 0,
        sera: 0,
        thomas: 0,
        reva: 0,
        director: 0,
        architect: 0,
        echo: 0
    },
    caderno: [],                      // Collected journal entries
    ecos: [],                         // Discovered milestones
    visitedScenes: new Set(),         // Scene history
    musicEnabled: true,               // Audio settings
    sfxEnabled: true,
    volume: 0.7                       // Master volume (0-1)
};
```

**State Lifecycle**:
1. Initialize on page load
2. Load from localStorage if exists
3. Update on every choice/action
4. Save after each render
5. Persist across page reloads

### 2. Scene System

**Scene Structure**:
```javascript
{
    t: 'Scene Title',                 // Display title
    i: 'image-url or data-uri',       // Scene image
    txt: 'Scene description...',      // Narrative text
    o: [                              // Choice options
        {
            t: 'Choice text',
            p: 'next_scene_id',       // Path to next scene
            rels: { character: value }, // Relationship changes
            n: 'Caderno entry name'   // Journal unlock
        }
    ],
    e: 'Eco milestone name',          // Echo/milestone
    isEnding: false                   // Is this an ending?
}
```

**Scene Rendering Process**:
```
Load scene → Update UI → Calculate relationships → Add entries → Record ecos → Save game
```

### 3. Relationship System

**Mechanics**:
- Each character has -100 to +100 relationship score
- Cumulative: Adding +10 five times = +50 total
- Persistent: Survives scene transitions
- Dynamic: Affects available dialogue options
- Locked: At thresholds (-50, +75, etc.), content unlocks/locks

**Relationship Calculation**:
```javascript
// Apply all relationship changes from chosen option
scene.o.forEach(option => {
    if (option.rels) {
        Object.entries(option.rels).forEach(([char, value]) => {
            gameState.relationships[char] += value;
        });
    }
});
```

### 4. Caderno System

**Entry Structure**:
```javascript
const CADERNO_DB = {
    'Entry Name': 'Full descriptive text...',
    'Another Entry': 'More story details...',
    // 150+ total entries
};
```

**Mechanics**:
- Unlocks based on scene choices
- Stored as array of strings
- Rendered in modal with descriptions
- Helps build comprehensive lore understanding

### 5. Ecos System

**Milestone Tracking**:
- Unique identifiers for story turning points
- Triggered when scene visited
- Visual counter in UI
- 50+ total ecos possible
- Unlocks achievements and epilogue variations

**Detection**:
```javascript
if (scene.e && !gameState.ecos.includes(scene.e)) {
    gameState.ecos.push(scene.e);  // Add unique eco
    AudioSystem.play('echo');      // Play sound effect
}
```

### 6. Audio System

**Implementation**:
- No external audio files
- Web Audio API procedural generation
- Three sound types: click, transition, echo
- Frequency-based synthesis
- Volume control via master slider

**Sound Generation**:
```javascript
playTone(frequency, duration) {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();    // Create oscillator
    const gain = ctx.createGain();          // Create volume control
    
    osc.connect(gain);
    gain.connect(ctx.destination);          // Output to speaker
    
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.1 * gameState.volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + duration);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
}
```

**Sound Types**:
- Click: 400Hz, 100ms (interaction)
- Transition: 600Hz, 300ms (scene change)
- Echo: 800Hz, 500ms (milestone)

### 7. Save/Load System

**Save Format**:
```javascript
const saveData = {
    state: {
        currentScene: 'scene_id',
        sceneCount: 15,
        relationships: { ivo: 25, sera: 40, ... },
        caderno: ['Entry1', 'Entry2', ...],
        ecos: ['Eco1', 'Eco2', ...],
        musicEnabled: true,
        sfxEnabled: true,
        volume: 0.7
    },
    timestamp: 1686067200000
};
```

**Storage**:
- Key: `NEXUS_SAVE` in localStorage
- Format: JSON stringified
- Persists across browser sessions
- Auto-save after each scene
- Manual save via settings

**Load Logic**:
```javascript
function loadGame() {
    const saveData = localStorage.getItem('NEXUS_SAVE');
    if (saveData) {
        try {
            const data = JSON.parse(saveData);
            Object.assign(gameState, data.state);
            // Resume from saved position
        } catch (e) {
            console.log('Save corrupted, starting fresh');
        }
    }
}
```

## CSS Architecture

### CSS Variables (Theme System)
```css
:root {
    --primary: #001a4d;           /* Deep space blue */
    --secondary: #00d4ff;         /* Neon cyan */
    --accent: #d946ff;            /* Magenta */
    --success: #4CAF50;           /* Green */
    --warning: #ff9800;           /* Orange */
    --danger: #ff3333;            /* Red */
    --text-primary: #e8e8e8;      /* Light text */
    --transition: 300ms ease-out;  /* Animation timing */
}
```

**Theme Switching** (Future):
To implement alternative themes (1847 steampunk, utopian bright, dystopian dark), modify CSS variables:
```css
body.theme-steampunk {
    --primary: #8B6914;
    --secondary: #D4AF37;
    --accent: #B8860B;
}
```

### Responsive Design
```css
/* Desktop (1024px+) */
.main-layout {
    grid-template-columns: 1fr 320px;
}

/* Tablet (768px-1024px) */
@media (max-width: 1024px) {
    .sidebar {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

/* Mobile (< 768px) */
@media (max-width: 768px) {
    .scene-image {
        height: 250px;
    }
}
```

### Animation System
```css
@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.scene-container {
    animation: slideUp 600ms ease-out 200ms both;
}
```

## JavaScript Architecture

### Initialization Pipeline
```
Load page
  ↓
DOMContentLoaded
  ↓
initGame()
  ├─ AudioSystem.init()
  ├─ loadGame() (localStorage)
  ├─ render('inicio')
  └─ startTimer()
  ↓
User interaction ready
```

### Main Functions

**render(sceneId)**
- Core game loop
- Updates all UI elements
- Applies relationship changes
- Records ecos and entries
- Saves game state
- ~200ms execution time

**goToScene(sceneId)**
- Wrapper for render()
- Plays transition sound
- Scrolls to top
- Creates visual continuity

**updateUI()**
- Refresh all panels
- Relationship color coding
- Caderno list rendering
- Eco counter update
- Statistics display

**Modal System**
```javascript
function openRelationships() {
    // Generate modal content
    document.getElementById('relationshipsModal').classList.add('show');
}

function closeModal(type) {
    // Hide modal by type
    document.getElementById(`${type}Modal`).classList.remove('show');
}
```

## Data Structures

### Scene Database
```javascript
const SCENES = {
    'scene_id': {
        t: 'Title',
        i: 'image',
        txt: 'Narrative text',
        o: [{...}],  // Options array
        e: 'Eco name'
    }
    // 200+ total scenes
};
```

**Scene ID Convention**: 
- Prefix + number + letter
- Examples: `s1a`, `s2b`, `s5c`, `sup_1`
- Helps identify scene relationships

### Caderno Database
```javascript
const CADERNO_DB = {
    'Entry Title': 'Full descriptive text',
    // 150+ entries
};
```

### Ecos Array
```javascript
const ECOS_DB = [
    'Eco milestone 1',
    'Eco milestone 2',
    // 50+ milestones
];
```

## Performance Considerations

### Load Time
- **First Load**: <2 seconds
- **Scene Change**: <300ms
- **Modal Open**: <200ms
- **Audio Play**: <50ms latency

### Optimization Techniques
1. **CSS Classes**: Toggle rather than rewrite styles
2. **Event Delegation**: Single listener vs. multiple
3. **Animation Efficiency**: Use CSS animations, not JavaScript
4. **Storage**: localStorage is fast (<10ms)
5. **DOM**: Minimal queries, cache selectors

### Memory Usage
- **Game State**: ~5KB
- **SCENES Object**: ~150KB
- **CADERNO_DB**: ~20KB
- **CSS/JS Embedded**: ~80KB
- **Total**: ~255KB uncompressed

## Browser Compatibility

### Supported
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Opera 76+

### Not Supported
- Internet Explorer (no ES6)
- Very old mobile browsers
- Text-only browsers

### Feature Detection
```javascript
// Web Audio API
if (window.AudioContext || window.webkitAudioContext) {
    // Audio available
}

// localStorage
if (typeof(Storage) !== 'undefined') {
    // Save/load available
}
```

## Extension Points

### Adding New Scenes
```javascript
// 1. Add to SCENES object
SCENES['new_scene_id'] = {
    t: 'Title',
    i: 'image-url',
    txt: 'Description',
    o: [
        { t: 'Choice 1', p: 'next_scene_1', rels: { ivo: 10 }, n: 'Entry' },
        { t: 'Choice 2', p: 'next_scene_2', rels: { sera: -5 } }
    ],
    e: 'Eco name'
};

// 2. Add caderno entries to CADERNO_DB if needed
CADERNO_DB['Entry Name'] = 'Description text';

// 3. Update other scenes to link to it
SCENES['linking_scene'].o.push({
    t: 'Go to new scene',
    p: 'new_scene_id',
    ...
});
```

### Adding New Characters
```javascript
// 1. Initialize in gameState
gameState.relationships.newCharacter = 0;

// 2. Add color class in CSS
.rel-newCharacter { color: #xyz; }

// 3. Reference in scenes
{ rels: { newCharacter: 25 }, ... }
```

### Custom Themes
```css
/* Create new theme */
body.theme-custom {
    --primary: #color1;
    --secondary: #color2;
    --accent: #color3;
}

/* Apply in JavaScript */
document.body.classList.add('theme-custom');
```

## Debugging

### Console Logging
```javascript
// Check game state
console.log(gameState);

// Check relationships
console.log(gameState.relationships);

// Check collected items
console.log(gameState.caderno);
console.log(gameState.ecos);
```

### Common Issues

**Save Doesn't Load**:
```javascript
// Clear corrupted save
localStorage.removeItem('NEXUS_SAVE');
// Then reload page
```

**Audio Not Playing**:
```javascript
// Check settings
console.log(gameState.sfxEnabled, gameState.musicEnabled);
// Test sound directly
AudioSystem.play('click');
```

**Relationship Not Changing**:
```javascript
// Verify choice has rels property
console.log(SCENES['scene_id'].o[0].rels);
```

## Future Enhancement Paths

### Planned Features
1. **Multiple Language Support**: Localization system
2. **Custom Audio**: High-quality music tracks by reality
3. **Achievements**: Badge system for specific playthroughs
4. **Leaderboards**: Quickest speedrun, highest relationships
5. **Cloud Save**: Sync across devices
6. **Mod Support**: User-created scenes and characters

### Architecture for Expansion
```javascript
// Plugin system (future)
const PLUGINS = [];

function registerPlugin(plugin) {
    PLUGINS.push(plugin);
    if (plugin.init) plugin.init();
    if (plugin.scenes) Object.assign(SCENES, plugin.scenes);
}

// Example custom scene mod
registerPlugin({
    name: 'Custom Story Arc',
    scenes: {
        'custom_1': {...},
        'custom_2': {...}
    }
});
```

## Distribution

### File Size Optimization
- Current: ~255KB uncompressed
- Minified CSS/JS possible: ~180KB
- Gzipped: ~50KB

### Deployment Options
1. **Local File**: Double-click to play
2. **Web Server**: HTTP/HTTPS hosting
3. **itch.io**: Native HTML game support
4. **Zip Archive**: Share as downloadable
5. **GitHub Pages**: Free hosting

### Version Control
- HTML is single file—easy version tracking
- Git diff shows scene changes clearly
- Tag major narrative updates

## Accessibility

### Current Features
- Semantic HTML structure
- High contrast colors (WCAG AA)
- Keyboard navigation possible
- Mouse and touch support

### Improvements Needed
- Screen reader testing
- ARIA labels
- Keyboard shortcuts documentation
- Color-blind mode

## Security Considerations

### Safe (No Vulnerabilities)
- No external resources loaded
- No server communication
- No user account system
- No payment processing
- localStorage only user's browser

### Best Practices
- Never log sensitive data
- Validate save file integrity
- Sanitize user input (future)
- No arbitrary code execution

## Support & Maintenance

### Bug Reporting
Include:
- Browser type and version
- Exact reproduction steps
- Expected vs. actual behavior
- Console errors (if any)

### Performance Profiling
```javascript
console.time('scene-render');
render('test_scene');
console.timeEnd('scene-render');
```

### Analytics (Future)
Could add Google Analytics without affecting gameplay:
```javascript
// Google Analytics script (optional)
// Tracks play patterns, popular endings, etc.
```

## Conclusion

NEXUS is designed as a minimalist, portable, extensible narrative game engine. Its single-file architecture makes it perfect for distribution while maintaining the flexibility to add complex features.

The modular nature of the scene system and relationship tracking enables infinite expansion while keeping the core engine lean and efficient.

**Total Code**: ~5000 lines
**Performance**: <3 seconds first load
**Complexity**: Moderate (good learning resource)

---

*For questions about architecture or extensions, refer to the scene structure examples in this document.*
