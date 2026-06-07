# NEXUS v0.2 — Audio System Setup

## Status: Audio System Implemented ✅

The game now has a complete audio framework ready to receive music and sound effects!

---

## 📁 Required Audio File Structure

Create this folder structure in the game:

```
game-engine/public/audio/
├── music/
│   └── nexus-ambient.mp3       (Required: background music)
├── sfx/
│   ├── click.mp3               (Required: choice button click)
│   ├── transition.mp3          (Required: scene transition)
│   └── fourth-line.mp3         (Required: fourth line activation)
```

---

## 🎵 Audio Specifications

### Background Music (`nexus-ambient.mp3`)

- **Format**: MP3 (128kbps minimum, 320kbps recommended)
- **Duration**: 3-5 minutes looping track
- **Mood**: Ambient cyberpunk noir, cinematic
- **Where to find royalty-free:**
  - **Epidemic Sound** - Best quality, subscription $9.99/mo
  - **Artlist** - Composer library, subscription $14.99/mo
  - **YouTube Audio Library** - Free (limited)
  - **Freesound.org** - Free (quality varies)

### Recommended Search Tags:
- "ambient cyberpunk"
- "sci-fi atmospheric"
- "dystopian electronic"
- "noir jazz electronic"

---

### Sound Effects

#### `click.mp3` (UI Click)
- **Duration**: 0.2-0.5 seconds
- **Type**: Bright electronic beep/click
- **Mood**: Tech interface feedback, futuristic but clean
- **Search**: "UI click sound", "electronic beep"
- **Recommended**: Epidemic Sound has excellent library

#### `transition.mp3` (Scene Change)
- **Duration**: 0.8-1.2 seconds
- **Type**: Whoosh/fade effect suggesting time shift
- **Mood**: Temporal distortion, moment of change
- **Search**: "transition sound", "whoosh effect", "sci-fi transition"

#### `fourth-line.mp3` (Symbolic Activation)
- **Duration**: 1.0-1.5 seconds
- **Type**: Harmonic tone or resonance
- **Mood**: Spiritual/technological awakening, moment of power
- **Search**: "harmonic tone", "sci-fi activation sound", "resonance sound"

---

## 🎛️ Audio Features Already Implemented

✅ **Background Music Control:**
- Auto-play when game starts (browser-dependent)
- Volume slider (0-100%)
- Toggle mute button (🔊/🔇)
- Volume preference saved to localStorage

✅ **Sound Effects Triggered At:**
- Choice button click → `click.mp3`
- Scene transition → `transition.mp3`
- Fourth line activation → `fourth-line.mp3`

✅ **Volume Management:**
- Separate control for all audio
- Persistent volume setting (survives page reload)
- Graceful fallback if audio fails

---

## 🚀 Quick Setup (Epidemic Sound Recommended)

### Step 1: Get Sounds
1. Go to **epidemicsound.com** (free 30-day trial)
2. Search: "ambient cyberpunk" → find 3-5 minute track
3. Search: "UI click sound" → find clean beep
4. Search: "sci-fi transition" → find whoosh effect
5. Search: "harmonic tone" or "activation sound" → find resonance

### Step 2: Download
- Download each track as MP3 (320kbps if available)
- Rename to: `nexus-ambient.mp3`, `click.mp3`, `transition.mp3`, `fourth-line.mp3`

### Step 3: Place Files
```
cp nexus-ambient.mp3 game-engine/public/audio/music/
cp click.mp3 game-engine/public/audio/sfx/
cp transition.mp3 game-engine/public/audio/sfx/
cp fourth-line.mp3 game-engine/public/audio/sfx/
```

### Step 4: Test
- `npm run dev`
- Open http://localhost:3000
- Click choices → should hear click sound
- Change scenes → should hear transition sound
- Verify volume slider works

---

## 🎨 Optional: Timeline-Specific Music

**For v0.3+, consider using different tracks per timeline:**

```
audio/music/
├── nexus-ambient-1920.mp3      (1920: warm, analog)
├── nexus-ambient-1970.mp3      (1970: political, earthen)
├── nexus-ambient-2050.mp3      (2050: clinical, institutional)
├── nexus-ambient-2150.mp3      (2150: dark, noir)
└── nexus-ambient-nexus.mp3     (Nexus: transcendent, harmonic)
```

Switch tracks in `game.js` `loadScene()` based on timeline detected.

---

## 📋 Troubleshooting

### "Audio isn't playing"
- **Browser autoplay policy**: Some browsers block audio until user clicks
- **Fix**: Click any button to start music
- **Solution for v0.3**: Show "Click to start" screen on first load

### "Volume slider doesn't work"
- **Check**: Is audio element loaded? Open DevTools → Elements → verify `<audio>` tags exist
- **Fix**: Ensure `audio/` folder exists and files are not broken

### "Files aren't found"
- **Check file paths are case-sensitive:**
  - `game-engine/public/audio/music/nexus-ambient.mp3` ✅
  - `game-engine/public/audio/sfx/click.mp3` ✅

### "Royalty-free sources are too expensive"
- **Free options:**
  - **YouTube Audio Library** - Completely free (YouTube account required)
  - **Freesound.org** - Free with account (quality varies, search "ambient cyberpunk")
  - **OpenGameArt.org** - Game music specifically
  - **itch.io** - Many free game soundtracks

---

## 🎼 Audio Budget Estimate

| Source | Cost | Best For |
|--------|------|----------|
| Epidemic Sound | $9.99/mo | **Recommended** - best quality |
| Artlist | $14.99/mo | Professional composers |
| YouTube Audio | FREE | Good backup option |
| Freesound | FREE | Varies widely |

---

## ✅ Current Status

**Backend**: ✅ Complete
- Audio control HTML structure added
- CSS animations for sound triggers
- JavaScript audio management system
- Volume persistence

**Frontend**: ✅ Complete
- Sound effects hooked to all UI interactions
- Background music autoplay ready
- Volume slider functional
- Mute toggle ready

**Waiting For**: 🎵 Audio Files
- Background music track
- 3x sound effect files

---

## 🎯 Next Steps

1. **Get Audio Files** (1-2 hours)
   - Pick source (recommend Epidemic Sound)
   - Download 4 tracks
   - Place in correct folders

2. **Test** (10 minutes)
   - Start game server
   - Verify click, transition, and music sounds work
   - Test volume slider

3. **Celebrate** 🎉
   - v0.2 now has full audio!

---

## Pro Tips

- **Compression**: Use 128kbps MP3 for SFX, 192kbps for music (smaller file size, imperceptible quality loss)
- **Looping**: Make sure background music is exactly 3-5 minutes and loops seamlessly
- **Volume Normalization**: Use Audacity (free) to normalize all files to -3db (prevents clipping)
- **Testing**: Always test with system volume at 50% to verify sounds are clear

---

**Audio system ready to go! 🎵✨**
