# NEXUS — Narrative Writing Guide

**How to write dialogue, scenes, and choices for NEXUS**

---

## 1. DIALOGUE FORMAT

All dialogue is written in a simple, parseable format:

```
SCENE: 2150_tower_awakening

CHARACTER_NAME
Character's line of dialogue. This is what they say to the player.

> This indicates the player's available choices.

CHOICE_A
The player selects this option and says it aloud.

CHARACTER_NAME
Character's response. This flows from choice A.

CHOICE_B
Alternative player response.

CHARACTER_NAME
Different response based on choice B.
```

### Full Example

```
SCENE: 2050_first_meeting

MAYA
You're... here. I wasn't sure you'd come back.

> CHOICE_A: "Come back? I don't remember leaving."
> CHOICE_B: "Of course I'm here. Where else would I be?"
> CHOICE_C: [Say nothing, just listen]

[If CHOICE_A]
MAYA
Right. The memory gaps. That's always been your thing.
(She looks away, frustrated)
You never remember until it's too late.

ECHO GAINED: "MAYA — Woman of Certainty"
RELATIONSHIP: +1 Compassion / -1 Trust

[If CHOICE_B]
MAYA
(She laughs, but it's hollow)
Anywhere but here, I'd guess. This city brings back too much.

ECHO GAINED: "MAYA — The Weary"
RELATIONSHIP: -1 Compassion / +1 Mutual Understanding

[If CHOICE_C]
MAYA
(Long pause. She studies your face)
You're different this time. More here. More... aware.

ECHO GAINED: "MAYA — The Watcher"
RELATIONSHIP: +2 Trust
```

---

## 2. SCENE STRUCTURE

Every scene has:

### Header
```
SCENE: [universe]_[location]_[purpose]
TIME: [when in act]
CHARACTER: [main NPC]
THEME: [what this scene explores]
TONE: [emotional temperature]
```

### Body
- Establish location with 1-2 lines
- NPC greeting/opening
- 3-5 dialogue exchanges minimum
- At least 2 points where player can choose
- Emotional beat or revelation
- Echo gained or relationship changed

### Footer
```
CONSEQUENCES:
- If Relationship goes above +3, unlock scene [X]
- If Relationship goes below -2, NPC becomes guarded
- This echo connects to [other universe] when combined with [other echo]

NEXT SCENE OPTIONS:
- Proceed to [scene B]
- Or return to hub and choose another NPC
```

---

## 3. CHOICE DESIGN

### Good Choices

**Reflect character, not just mechanics:**
```
GOOD:
> "I understand why you made that choice"
> "I think you're running from something"
> "I need to know the whole story"

BAD:
> CHOICE A [+1 Trust]
> CHOICE B [+1 Wisdom]
> CHOICE C [+1 Empathy]
```

### Choice Guidelines

1. **No Obvious "Right" Answer**
   - Each choice has merit
   - Each choice has cost
   - Player must choose their values, not optimize

2. **Choices Reveal Character**
   - How player responds shows who they are
   - This affects which ending they get
   - No judgment — just consequences

3. **Choices Have Long-Term Effects**
   - Early choice in 2050 affects what 1920 NPC says
   - Companion might reference choice from 3 scenes ago
   - Nothing is forgotten

---

## 4. CHARACTER VOICE

Each NPC has a distinct voice:

### MAYA (The Activist)
- Speaks in convictions, not questions
- Interrupts herself mid-thought (passionate)
- Uses "we" and "us" language
- Reveals emotion underneath pragmatism

```
MAYA
Look, what we did in 2050 — it wasn't ideal. But it was necessary.
(She pauses, voice softer)
Or at least, that's what I tell myself. Every day.
```

### THOMAS (The Ancestor)
- Sparse, meaningful language
- Long pauses between thoughts
- Focuses on concrete details
- Ancient wisdom without condescension

```
THOMAS
The land remembers things we forget.
(He points to the field)
See that scar? Lost a son there. But the wheat still grows.
```

### ECHO (The AI Entity)
- Poetic but analytical
- Refers to events as "patterns" and "cycles"
- Uses "we" for humans and AIs equally
- Speaks in metaphors

```
ECHO
You are a recursion, echoing yourself through time.
Each universe is a refraction of the same light.
The question isn't whether you can change your reflection.
It's whether you can become worthy of it.
```

### The Companion
- Asks questions for the player
- Shows confusion alongside player
- Emotional anchor (voices what player feels)
- Challenges player's assumptions

```
COMPANION
So you're saying... you did this? In another timeline?
(Looks at you differently)
I need to understand. Who are you, really?
```

---

## 5. WRITING EMOTIONAL BEATS

### The Five-Beat Structure

Every major scene has these moments:

1. **Establishment** — Set the scene, establish stakes
   ```
   MAYA looks out at the 2050 skyline, hands trembling slightly.
   
   MAYA
   This view. I've seen it from so many angles.
   But it never looks the way I remember.
   ```

2. **Complication** — Something shifts, question arises
   ```
   COMPANION
   What do you mean? It's just a city.
   
   MAYA
   (Turns to you, sharply)
   No. It's every choice we didn't make.
   ```

3. **Confrontation** — Player must choose, tension peaks
   ```
   MAYA
   So I need to know: Did you come back to change it?
   Or to understand why you couldn't?
   ```

4. **Resolution** — Choice is made, consequence revealed
   ```
   [Based on player choice]
   
   MAYA
   (Nods slowly / Looks away hurt / Reaches for your hand)
   Then we both know the truth.
   ```

5. **Reflection** — Character processes, scene resolves
   ```
   ECHO GAINED: "MAYA — The Settler"
   
   MAYA
   Thank you for being honest. Even if it breaks everything.
   ```

---

## 6. ECHO MECHANICS

### Echo Naming

Echoes are named descriptively:

```
❌ ECHO_MAYA_1
✅ ECHO: "MAYA — The Betrayed"
✅ ECHO: "MAYA — When She Still Believed"
✅ ECHO: "MAYA — Carrying the Weight"
```

### Echo Connection

When writing scenes, note where echoes connect:

```
ECHO: "THOMAS — The First Choice"
(This is THE origin echo from 1920)

When combined with:
  + MAYA's "The Activist" echo
  + COMPANION's "The Witness" echo
  = MEMORY UNLOCKED: "The Cascade"
  (Shows how Thomas's choice led to Maya's revolution)
```

### Echo Descriptions

After gaining an echo, provide a 1-2 sentence poetic description:

```
ECHO GAINED: "MAYA — The Weary"
"A woman who learned that fighting for the world 
costs more than the world is willing to give."
```

---

## 7. RELATIONSHIP TRACKING

### Relationship Attributes

Each NPC has 3 relationship scores (range: -5 to +5):

- **Trust** — Does NPC believe you?
- **Understanding** — Do you understand each other?
- **Commitment** — Are you allies?

### Changes Per Scene

```
CHOICE_A: Honest confession
RELATIONSHIP: +2 Trust, +1 Understanding

CHOICE_B: Deflection/lie
RELATIONSHIP: -3 Trust, +1 Understanding (they see through you)

CHOICE_C: Vulnerable moment
RELATIONSHIP: +1 Trust, +2 Understanding, +1 Commitment
```

### Relationship Thresholds

```
If Maya's Trust reaches +4:
  → Unlock "The Secret" scene
  
If Maya's Trust drops to -3:
  → Maya becomes distant in future scenes
  → She offers help reluctantly, warns others about you
  → Different ending possible
```

---

## 8. PACING & LENGTH

### Scene Length

- **Short Scene** (3-5 exchanges): Quick NPC interaction, one choice point
- **Medium Scene** (7-10 exchanges): Substantial conversation, 2-3 choice points, emotional beat
- **Long Scene** (12+ exchanges): Deep character dive, multiple choice points, revelation or climax

### Act Pacing

```
ACT 1 (2150 — Awakening): 4 scenes
  - Scene 1: Opening (long)
  - Scene 2: Exploration (medium)
  - Scene 3: Discovery (long)
  - Scene 4: Portal found (short)

ACT 2 (2050 — Recognition): 6 scenes
  - Scene 1: Arrival shock (medium)
  - Scene 2: The Pivot (long)
  - Scene 3: Past self (long)
  - Scene 4-5: Side stories (medium)
  - Scene 6: Jump to 1970 (medium)

ACT 3 (1970 + 1920 — Understanding): 5 scenes
  - Scene 1-2: Utopia exploration (medium)
  - Scene 3: Return to 2050 revelation (long)
  - Scene 4-5: 1920 climax (long)
  
EPILOGUE (2150 Revisited): 2 scenes
  - Scene 1: Return with knowledge (long)
  - Scene 2: Ending reflection (medium)
```

---

## 9. TECHNICAL NOTES

### File Naming
```
act1_2150_awakening_scene1.md
act2_2050_turning_point_scene3.md
act3_1920_roots_climax.md
```

### Markdown Structure
```markdown
# SCENE: 2150_Tower_Awakening

**UNIVERSE:** 2150  
**LOCATION:** Glass Tower, 87th Floor  
**CHARACTER:** ECHO (The AI)  
**DURATION:** ~8 minutes  
**THEME:** Who am I?  

---

## Opening

[2-3 lines describing the scene and atmosphere]

---

## Dialogue

[Full scene transcription with choices and branches]

---

## Consequences

[What changes based on choices]

---

## Notes

[Writing notes, inspiration, references]
```

---

## 10. CHECKLIST FOR EACH SCENE

Before submitting a scene, verify:

- [ ] Scene has clear purpose/theme
- [ ] NPC voice is consistent and distinct
- [ ] At least 2 meaningful choice points
- [ ] Each choice has different consequences (not just +/-1)
- [ ] Echo is thematically connected to scene
- [ ] Relationship changes make sense
- [ ] Scene has emotional beat (not just information)
- [ ] Length is appropriate for pacing
- [ ] Scene connects forward and backward in narrative
- [ ] No plot holes or continuity issues
- [ ] Dialogue sounds like people talking, not game instructions
- [ ] At least one moment that surprises the player
- [ ] Scene serves the larger theme of "legacy and meaning"

---

## 11. COLLABORATION NOTES

### User's Role (Narrative)
- Write scene outlines and scripts
- Define NPC personalities and arcs
- Make branching decisions
- Ensure thematic coherence
- Quality control on dialogue

### Claude's Role (Technical)
- Implement scenes in Godot
- Manage relationship tracking
- Create choice parsing system
- Handle save/load logic
- Debug narrative branches

### Communication
- Use Git/shared folder for scripts
- Weekly sync on act progress
- Test scenes for typos and logic
- Iterate based on playtesting

---

## 12. EXAMPLE SCENE (Complete)

See `narrative/scripts/ACT1_SCENE1_AWAKENING.md` for a full worked example with all sections.

---

**Last Updated:** June 3, 2026  
**Ready to write?** Pick an act and begin! 🎬
