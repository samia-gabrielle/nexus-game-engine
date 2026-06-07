# NEXUS Game Engine

A browser-based narrative game engine built with Node.js + Express + Ink, featuring 18 interconnected scenes, 60-70 dynamic flags, and 30 unlockable echoes.

## Architecture

```
game-engine/
├── src/
│   ├── server.js          # Express API server
│   ├── gameState.js       # State management (flags, saves)
│   └── inkEngine.js       # Ink story runtime
├── ink/
│   ├── nexus-main.ink     # Master Ink file
│   ├── scenes/            # Scene files (to be compiled)
│   └── compiled/          # Compiled JSON output
├── public/
│   ├── index.html         # Main UI
│   ├── styles.css         # Game styling
│   └── game.js            # Client-side logic
├── saves/                 # Save file storage
└── package.json
```

## Setup

### 1. Install Dependencies

```bash
cd game-engine
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Server will run on `http://localhost:3000`

## API Endpoints

### Game Control

- `POST /api/game/new` - Initialize new game
- `POST /api/game/scene` - Get current scene
- `POST /api/game/choice` - Make a choice (choiceIndex in body)
- `POST /api/game/save` - Save game (slotId in body)
- `GET /api/game/load/:slotId` - Load game
- `GET /api/game/meta` - Get game metadata

## State Management

Game state is stored in memory during play and saved to JSON files in the `saves/` directory.

### State Structure

```javascript
{
  // Scene progression
  currentScene: 'ch01_scene01_2150_wakeup',
  scenesVisited: [],

  // Character flags
  player_has_name: false,
  mara_debt_registered: false,
  fourth_line_status: 'scarred_incomplete',

  // Dynamic flags
  flags: { ... },

  // Unlocked echoes
  echoesUnlocked: [],

  // Notebook entries
  notebookEntries: [],

  // Choice history
  choiceHistory: [],

  // Metadata
  timestamp: Date.now(),
  playtimeSeconds: 0,
}
```

## Next Steps

### Week 1: Narrative Conversion
- [ ] Convert 18 dialogue.md files to .ink format
- [ ] Implement flag setting in each scene
- [ ] Wire up echo unlocks

### Week 2-3: Story Integration
- [ ] Populate inkEngine.js with all scenes
- [ ] Test choice flow through all endings
- [ ] Validate flag logic for 4 ending paths

### Week 4-6: Polish & Testing
- [ ] Add audio (background ambience, choice sounds)
- [ ] Visual enhancements (particle effects, animations)
- [ ] Playtesting & bug fixes
- [ ] Performance optimization

## Ink Format Example

```ink
=== ch01_scene01_2150_wakeup ===

A primeira coisa que você sente é frio.

* [Abra os olhos.]
    Você consegue ver.
    -> ch01_scene01_recognition

* [Fique quieto e escute mais.]
    Você escuta a chuva ácida.
    -> ch01_scene01_recognition

=== ch01_scene01_recognition ===

Está em uma cápsula vertical.

* [Eu não tenho nome.]
    ~ player_has_name = false
    -> ch01_scene02_nexus_activation

* [Onde eu estou?]
    -> ch01_scene02_nexus_activation
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Save Format

Saves are stored as JSON in `saves/save_<slotId>.json`:

```json
{
  "currentScene": "...",
  "flags": { ... },
  "echoesUnlocked": [...],
  "savedAt": 1717568400000
}
```

## Debugging

Enable debug mode in `.env`:

```
DEBUG=true
```

This will log all API calls and state changes to console.

## Known Limitations

- Currently no database backend (filesystem-based saves)
- Ink files not yet converted from .dialogue.md format
- No audio system yet
- No visual effects yet

## Future Enhancements

- [ ] Database backend (Firebase/Supabase)
- [ ] Mobile app (React Native)
- [ ] Multiplayer/async observation mode
- [ ] Accessibility features (screen reader support)
- [ ] Localization (EN, PT, ES)
