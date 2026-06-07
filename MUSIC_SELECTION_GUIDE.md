# NEXUS v0.2 — Music Selection Guide
## Epidemic Sound Search Queries

**You have a 30-day free trial on Epidemic Sound** — use it now to get high-quality tracks!

---

## 🎵 BACKGROUND MUSIC (Primary Track)

### Target Track Specifications
- **Duration:** 3-5 minutes (must loop seamlessly)
- **Mood:** Ambient cyberpunk noir, cinematic, philosophical
- **Instrumentation:** Electronic with organic elements
- **Pace:** Slow to moderate, not aggressive
- **Use:** Plays continuously during gameplay

### Search Query 1: PRIMARY AMBIENT
```
Search: "ambient cyberpunk noir"
Filter: Instrumental, 3-5 min
Listen for: Cinematic, electronic, atmospheric, slightly melancholic
```

**Recommended Tracks to Listen For:**
- Anything with "cyberpunk", "noir", "dystopian" in title
- Electronic + strings combination
- Anything with reverb/delay suggesting vast space
- NO vocals, NO aggressive sounds

### Search Query 2: BACKUP OPTION
```
Search: "sci-fi atmospheric"
Filter: Instrumental, 3-5 min
Listen for: Futuristic, contemplative, synth-based
```

### Search Query 3: ALTERNATIVE
```
Search: "temporal distortion"
Filter: Any length, instrumental
Listen for: Time-bending mood, philosophical undertone
```

---

## 🔊 SOUND EFFECTS (3 short tracks)

### 1. UI CLICK SOUND
```
Search: "ui click sound"
Filter: 0.2-0.5 seconds, tech sound
Listen for: Bright, electronic beep, futuristic, clean
```

**Alternatives if not found:**
- "interface click"
- "button click effect"
- "laser click"

**What NOT to use:**
- ❌ Mechanical clicks (too industrial)
- ❌ Loud beeps (will annoy with 50 clicks per playthrough)
- ❌ Analog sounds (doesn't fit cyberpunk)

---

### 2. SCENE TRANSITION SOUND
```
Search: "sci-fi transition"
Filter: 0.8-1.2 seconds
Listen for: Whoosh, time-shift, portal effect, smooth fade
```

**Alternatives if not found:**
- "temporal shift sound"
- "futuristic transition"
- "sci-fi whoosh"
- "time travel effect"

**What NOT to use:**
- ❌ Sharp transitions (we want smooth narrative flow)
- ❌ Scary/horror sounds (NEXUS is philosophical, not horror)
- ❌ Overly complex sounds (should feel like passage, not event)

---

### 3. FOURTH LINE ACTIVATION SOUND
```
Search: "harmonic resonance"
Filter: 1.0-1.5 seconds
Listen for: Ethereal tone, harmonic, spiritual awakening, technological power
```

**Alternatives if not found:**
- "harmonic tone"
- "sci-fi activation"
- "spiritual resonance"
- "power-up sound electronic"

**What NOT to use:**
- ❌ Aggressive/energetic sounds (this is contemplative)
- ❌ Simple beeps (this is a MOMENT, needs weight)
- ❌ Long drawn-out sounds (keeps playing during dialogue)

---

## 🎼 HOW TO USE EPIDEMIC SOUND

### Step 1: Sign Up
1. Go to **epidemicsound.com**
2. Click "Free Trial" (30 days)
3. Create account with email
4. Verify email

### Step 2: Download Tracks
1. Search for track using query above
2. Click play to preview
3. Click download (MP3, 320kbps if available)
4. Rename file to match:
   - Background: `nexus-ambient.mp3`
   - UI click: `click.mp3`
   - Transition: `transition.mp3`
   - Fourth line: `fourth-line.mp3`

### Step 3: Place Files
```bash
# Copy files to:
game-engine/public/audio/music/nexus-ambient.mp3
game-engine/public/audio/sfx/click.mp3
game-engine/public/audio/sfx/transition.mp3
game-engine/public/audio/sfx/fourth-line.mp3
```

### Step 4: Test
```bash
cd game-engine
npm run dev
# Open http://localhost:3000
# Click choices - should hear click.mp3
# Change scenes - should hear transition.mp3
# Volume slider should work
```

---

## 💡 TIPS FOR SELECTION

### Background Music Tips
- **Listen at 50% volume** first, then adjust
- **Should disappear into game** - not draw attention
- **Test at 30 seconds, 2 min, and 5 min marks** to ensure looping feels natural
- **Avoid crescendos** near the 3-5 min mark (will feel jarring when looping)
- **Brazilian/Latin influences** work surprisingly well with cyberpunk noir (if available)

### Sound Effect Tips
- **Less is more** - subtle is better than obvious
- **Test click at 100% volume** - should be crisp, not harsh
- **Transition should feel like 'whoosh'** not 'beep'
- **Fourth line should feel spiritual** not mechanical
- **Download same artist's tracks** when possible (audio coherence)

---

## ⏱️ EXPECTED TIME

- **Browsing Epidemic Sound:** 15-20 min
- **Downloading 4 tracks:** 5 min
- **Setting up file structure:** 5 min
- **Testing:** 5 min

**Total: ~30 minutes**

---

## 🆘 IF EPIDEMIC SOUND DOESN'T HAVE WHAT YOU NEED

**Backup sources (all free):**

### YouTube Audio Library
1. Go to **youtube.com/audiolibrary**
2. Sign in with Google account
3. Search: "ambient cyberpunk" or "sci-fi atmospheric"
4. Download as MP3

### Freesound.org
1. Go to **freesound.org**
2. Create free account
3. Search for terms above
4. Download CC0 licensed tracks

### OpenGameArt.org
1. Go to **opengameartgame.org**
2. Browse "Music" category
3. Filter by "Ambient" or "Electronic"
4. Download CC0/CC-BY tracks

---

## 📋 TRACKING CHECKLIST

- [ ] Epidemic Sound account created
- [ ] Background music selected and downloaded (`nexus-ambient.mp3`)
- [ ] UI click sound selected and downloaded (`click.mp3`)
- [ ] Scene transition sound selected and downloaded (`transition.mp3`)
- [ ] Fourth line activation sound selected and downloaded (`fourth-line.mp3`)
- [ ] All 4 files placed in correct folders
- [ ] Game server started (`npm run dev`)
- [ ] Audio tested in browser
- [ ] Volume slider works
- [ ] Sound effects trigger on interaction

---

## ✅ SUCCESS CRITERIA

✅ Background music plays continuously and loops seamlessly
✅ Volume slider controls background music volume (0-100%)
✅ Click sound plays when choice button is clicked
✅ Transition sound plays when scene changes
✅ All sounds are clear and appropriate for the game's mood
✅ No audio conflicts (sounds don't overlap badly)

---

**Time estimate: 30-45 minutes total**
**Ready to start? Go get those sounds! 🎵✨**
