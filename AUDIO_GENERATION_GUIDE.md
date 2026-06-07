# NEXUS v0.3 — Complete Audio Generation Guide
## Dynamic 3-Layer Audio System

---

## 📊 AUDIO ARCHITECTURE

```
┌─────────────────────────────────────────────────┐
│         NEXUS DYNAMIC AUDIO SYSTEM              │
├─────────────────────────────────────────────────┤
│ LAYER 1: BGM (Background Music)                 │
│ - 30+ themes, ~2-3min each                      │
│ - Changes per scene/branch/mood                 │
│ - Crossfades smoothly (2s transition)           │
├─────────────────────────────────────────────────┤
│ LAYER 2: Ambience (Atmospheric)                 │
│ - 40+ looped ambient tracks, ~1min each         │
│ - Creates spatial/temporal immersion            │
│ - Fades under BGM at 0.2 volume                 │
├─────────────────────────────────────────────────┤
│ LAYER 3: SFX (Interactive Sound Effects)        │
│ - Click: 0.3s                                   │
│ - Transition: 0.8s                              │
│ - Fourth-line: 1s (magical activation)          │
│ - Success: 0.5s (echo unlock)                   │
│ - Error: 0.4s (negative feedback)               │
│ - Ending Sting: 2s (epilogue moment)            │
└─────────────────────────────────────────────────┘
```

---

## 🎵 BGM THEMES (30 Total)

### ACT 1: AWAKENING & BRANCHES

| ID | Theme | Mood | Duration | Scene(s) |
|----|----|------|----------|----------|
| 01_awakening | Ethereal ambiguity | Rising consciousness | 2:30 | Scenes 1-4 |
| 02a_archivist | Scholarly contemplation | Ancient wisdom, dust | 2:45 | Branch A (6A-8A) |
| 02b_rebel | Tense energy | Underground, power | 2:40 | Branch B (6B-8B) |
| 02c_mystic | Transcendent beauty | Meditation, light | 3:00 | Branch C (6C-8C) |
| 03_choice_point | Suspenseful clarity | Moment of truth | 2:00 | Scene 5 (branch decision) |

### ACT 2: NEGOTIATION, REVOLUTION, ACCEPTANCE

| ID | Theme | Mood | Duration | Scene(s) |
|----|----|------|----------|----------|
| 04_convergence | Building unity | Paths merging | 2:30 | Scene 13-14 |
| 05a_negotiator | Formal diplomacy | Cool, measured | 2:45 | Path A (15A-18A) |
| 05a_tension | Cold pressure | Stake rising | 2:20 | Path A, tense moments |
| 05a_regret | Melancholic reflection | Compromise weight | 2:50 | Path A ending |
| 05b_energy | Revolutionary fire | Power, chaos | 2:35 | Path B start (15B) |
| 05b_chaos | Destructive force | Breakdown, release | 2:40 | Path B sabotage |
| 05b_destruction | Apocalyptic collapse | System failing | 2:15 | Path B peak destruction |
| 05b_aftermath | Phoenix rising | Rebuilding begins | 2:55 | Path B recovery |
| 05c_peace | Monastic tranquility | Acceptance, calm | 3:10 | Path C (15C-18C) |
| 05c_realization | Enlightenment dawning | Truth clarity | 2:40 | Path C turning point |
| 05c_acceptance | Serene resolution | Inner peace | 3:20 | Path C ending |

### ACT 3: APOTHEOSIS & ENDINGS

| ID | Theme | Mood | Duration | Scene(s) |
|----|----|------|----------|----------|
| 06_apotheosis | Building transcendence | Power peak | 3:00 | Scene 25 (engine) |
| 07a_restoration | Mass awakening joy | Hope, triumph | 3:15 | Ending A sequence |
| 07a_chaos | Institutional collapse | Controlled chaos | 2:45 | Ending A confrontation |
| 07a_doubt | Uncertainty returns | Is it worth it? | 2:30 | Ending A question |
| 07a_hope | New world forming | Optimistic future | 3:25 | Ending A conclusion |
| 07b_control | Measured governance | Pragmatic burden | 3:00 | Ending B sequence |
| 07b_regret | Compromise weight | Ethical cost | 2:50 | Ending B guilt |
| 07b_mirror | Self-confrontation | Dark truth | 2:15 | Ending B warning |
| 07b_eternal | Eternal compromise | System persists | 3:35 | Ending B finale |
| 07c_release | Ritual surrender | Letting go peace | 3:00 | Ending C sequence |
| 07c_peace | Eternal contentment | Deep acceptance | 3:45 | Ending C meditation |
| 07c_guardian | Guardian's burden | Noble duty | 3:10 | Ending C gift |
| 07c_quiet | Silence eternal | Perfect peace | 3:50 | Ending C finale |

---

## 🌍 AMBIENCE TRACKS (40+ Total)

### TEMPORAL AMBIENCES

**1920s Laboratory & Archive**
- `1920_lab`: Clock ticking, paper shuffling, old machinery creaking (1:00 loop)
- `1920_melancholy`: Wind outside, distant church bells, nostalgic hum (1:30 loop)
- `archive_ancient`: Dust particles, stone echo, whispered memories (1:45 loop)
- `archive_whispers`: Soft voices from past, paper rustling, stone settling (2:00 loop)

**2050 Institutional**
- `2050_hum`: Futuristic servers, electrical hum, digital pulses (1:20 loop)
- `2050_power`: Heavy machinery, authority presence, cold efficiency (1:40 loop)
- `2050_signing`: Pen scratching, document sealing, formal finality (1:10 loop)
- `2050_division`: Split reality audio, two conflicting sound worlds (2:00 loop)

**Underground Resistance**
- `underground_hum`: Bunker presence, electrical hum, breathing walls (1:35 loop)
- `underground_tension`: Heartbeat-like drums, weapon sounds, readiness (1:50 loop)
- `underground_drums`: Tribal percussion, revolutionary energy, uprising (2:10 loop)

**Deep City**
- `deep_city_breath`: Bioluminescent hum, water drops, massive space (2:30 loop)
- `nexus_power`: Machine's life force, geometric harmonics, pure power (2:45 loop)

**Monastery & Meditation**
- `meditation_bells`: Soft bells, gentle wind, inner peace (2:00 loop)
- `meditation_echoes`: Echo-y bells, multiplied self, transcendence (2:30 loop)
- `monastery_bells`: Regular bell rings, stone echo, sacred space (2:15 loop)
- `monastery_meditation`: Chants fading, breath awareness, presence (2:45 loop)
- `monastery_chant`: Gregorian-style harmony, community wisdom (3:00 loop)
- `monastery_silence`: Almost silent, breath only, profound peace (2:00 loop)

### TRANSITION & EMOTIONAL AMBIENCES

- `transition`: Temporal displacement, whoosh, arrival (1:30 loop)
- `tension`: Building pressure, electronic drone, uncertainty (1:45 loop)
- `confrontation`: Two wills meeting, conflict presence (1:20 loop)
- `dark_realization`: Horror moment, dissonant truth (1:25 loop)

### ENDING-SPECIFIC AMBIENCES

**Restoration Ending (A)**
- `mass_awakening`: Cascading consciousness, voices waking, joy spreading (2:45 loop)
- `institutional_collapse`: Building cracking, systems failing, freedom (2:20 loop)
- `new_beginning`: Construction sounds, hope, creation (2:30 loop)

**Control Ending (B)**
- `selective_awakening`: Selective consciousness, unfairness present (2:00 loop)
- `guilt_silence`: Uncomfortable quiet, weight of choice (1:50 loop)
- `governance_hum`: Corporate efficiency, managed world (2:10 loop)

**Acceptance Ending (C)**
- `ritual_peace`: Ceremony sounds, community acceptance (2:20 loop)
- `peaceful_rest`: Gentle ambience, restfulness, contentment (2:40 loop)
- `guardian_chamber`: Sacred space, eternal duty, infinite peace (3:00 loop)
- `eternal_silence`: Pure silence with subtle presence (2:15 loop)

---

## 🔊 SFX (Sound Effects) - 6 Total

### Required SFX Files

| File | Duration | Use Case | Volume Level |
|------|----------|----------|--------------|
| **click.mp3** | 0.3s | Choice button click | 0.5 |
| **transition.mp3** | 0.8s | Scene to scene fade | 0.7 |
| **fourth-line.mp3** | 1.0s | Fourth-line activation | 0.8 |
| **success.mp3** | 0.5s | Echo unlocked, positive feedback | 0.6 |
| **error.mp3** | 0.4s | Invalid action, negative feedback | 0.6 |
| **ending-sting.mp3** | 2.0s | Epilogue moment, ending reached | 0.9 |

---

## 📁 FOLDER STRUCTURE

```
game-engine/public/audio/
├── music/
│   ├── 01_awakening.mp3
│   ├── 02a_archivist.mp3
│   ├── 02b_rebel.mp3
│   ├── 02c_mystic.mp3
│   ├── 03_choice_point.mp3
│   ├── 04_convergence.mp3
│   ├── 05a_negotiator.mp3
│   ├── 05a_tension.mp3
│   ├── 05a_regret.mp3
│   ├── 05b_energy.mp3
│   ├── 05b_chaos.mp3
│   ├── 05b_destruction.mp3
│   ├── 05b_aftermath.mp3
│   ├── 05c_peace.mp3
│   ├── 05c_realization.mp3
│   ├── 05c_acceptance.mp3
│   ├── 06_apotheosis.mp3
│   ├── 07a_restoration.mp3
│   ├── 07a_chaos.mp3
│   ├── 07a_doubt.mp3
│   ├── 07a_hope.mp3
│   ├── 07b_control.mp3
│   ├── 07b_regret.mp3
│   ├── 07b_mirror.mp3
│   ├── 07b_eternal.mp3
│   ├── 07c_release.mp3
│   ├── 07c_peace.mp3
│   ├── 07c_guardian.mp3
│   └── 07c_quiet.mp3
├── ambience/
│   ├── 1920_lab.mp3
│   ├── 1920_melancholy.mp3
│   ├── 2050_hum.mp3
│   ├── 2050_power.mp3
│   ├── archive_ancient.mp3
│   ├── archive_whispers.mp3
│   ├── confrontation.mp3
│   ├── crisis_aftermath.mp3
│   ├── dark_realization.mp3
│   ├── deep_city_breath.mp3
│   ├── eternal_silence.mp3
│   ├── governance_hum.mp3
│   ├── guilt_silence.mp3
│   ├── institutional_collapse.mp3
│   ├── mass_awakening.mp3
│   ├── meditation_bells.mp3
│   ├── meditation_echoes.mp3
│   ├── monastery_bells.mp3
│   ├── monastery_chant.mp3
│   ├── monastery_meditation.mp3
│   ├── monastery_silence.mp3
│   ├── new_beginning.mp3
│   ├── nexus_breakdown.mp3
│   ├── nexus_power.mp3
│   ├── peaceful_rest.mp3
│   ├── ritual_peace.mp3
│   ├── selective_awakening.mp3
│   ├── system_failure.mp3
│   ├── tension.mp3
│   ├── transcendent.mp3
│   ├── transition.mp3
│   ├── underground_drums.mp3
│   ├── underground_hum.mp3
│   ├── underground_tension.mp3
│   ├── uprising_drums.mp3
│   └── guardian_chamber.mp3
└── sfx/
    ├── click.mp3
    ├── transition.mp3
    ├── fourth-line.mp3
    ├── success.mp3
    ├── error.mp3
    └── ending-sting.mp3
```

---

## 🎸 AUDIO GENERATION TOOLS

### Recommended Options:

1. **AI Music Generation** (Fastest)
   - Suno AI (suno.ai) — music generation
   - AIVA (aiva.ai) — adaptive music
   - OpenAI Jukebox — experimental

2. **Procedural Generation**
   - Max/MSP — generative synthesis
   - SuperCollider — algorithmic composition
   - Pure Data — custom audio synthesis

3. **Professional Tools**
   - Ableton Live — DAW with instruments
   - Logic Pro / GarageBand — Apple ecosystem
   - FL Studio — workflow optimized
   - Reaper — flexible and affordable

4. **Sample-Based**
   - Splice — sample packs + AI
   - Epidemic Sound — royalty-free music
   - Freesound — community samples

5. **Community Tools**
   - SFXR (sfxr.me) — 8-bit SFX generator
   - Bfxr — 8-bit SFX enhanced
   - Jsfxr — Browser-based SFX

---

## 🎯 GENERATION STRATEGY

### Priority Order:

**Phase 1 (Critical)** — ~5 hours
- Core BGM: 01_awakening, 02a/b/c branches, 03_choice, 06_apotheosis
- Core ambiences: 2150, 1920, deep_city, monastery
- All SFX (essential for gameplay)

**Phase 2 (Important)** — ~4 hours
- Act 2 BGM: 05a/b/c themes (negotiator/rebel/hermit)
- Ending sequence BGMs: 07a/b/c themes
- Emotional ambiences: tension, transition, convergence

**Phase 3 (Enhancement)** — ~3 hours
- Remaining ambiences for texture
- Ending-specific ambiences
- Fine-tuning crossfades

---

## 🔧 HOW AUDIO MANAGER WORKS

### Scene Audio Change Flow:

```
Player makes choice
    ↓
Scene loads (ch01_scene06a_archive_discovery)
    ↓
audioManager.changeSceneAudio(sceneId)
    ↓
Looks up in sceneMusic mapping:
  {
    bgm: "archivist",      // Changes to 02a_archivist.mp3
    ambience: "archive_ancient"  // Changes to archive_ancient.mp3
  }
    ↓
Crossfade BGM over 2 seconds
Transition ambience immediately
    ↓
New audio playing by time narrative appears
```

### Volume Layers:
- **BGM**: 0.3 (master volume dependent)
- **Ambience**: 0.2 (subtle, atmospheric)
- **SFX**: 0.5-0.9 (varied by effect type)

---

## 📝 QUICK IMPLEMENTATION NOTES

1. **audioManager.js is already in place** — just needs audio files
2. **Crossfade is automatic** — no need to handle transitions manually
3. **All scene-to-music mappings are in audioManager.js** — edit `this.sceneMusic` object
4. **SFX are pre-connected** — click = always plays click.mp3, etc.
5. **Volume slider controls BGM** — ambience scales with it

---

## 🚀 NEXT STEPS

1. Create `audio/music/` and `audio/ambience/` and `audio/sfx/` folders
2. Generate audio files using preferred tool
3. Place files in appropriate folders with exact names from guide
4. Server will automatically use them when scenes change
5. Test each branch to hear music transitions

**That's it!** The system is ready for audio. Just add the files! 🎵
