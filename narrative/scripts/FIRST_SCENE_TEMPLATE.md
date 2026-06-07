# ACT 1, SCENE 1: AWAKENING

**Version:** Template (ready for content)  
**Universe:** 2150 — The Hollow Future  
**Location:** Glass Tower, 87th Floor  
**Character:** ECHO (The Guide)  
**Duration:** ~10 minutes of gameplay  
**Theme:** "Who am I?"  
**Tone:** Disorienting, beautiful, cold

---

## OPENING

*(Describe the scene with 3-4 atmospheric lines. Make the reader feel the coldness and strangeness.)*

You wake in a room of glass.

The city sprawls below you—neon blue and silver, geometric, vast. Towers like teeth. Streets like circuits. Everything moving in patterns. Everything logical.

You have no memory of how you got here.

Your body remembers: breath, heartbeat, the cold press of floor against skin. But your mind is blank.

*(You are blank.)*

---

## FIRST DIALOGUE

### ECHO

Who are you?

> CHOICE A: "I don't know."
> CHOICE B: "I don't remember."
> CHOICE C: [Say nothing.]

---

### [If CHOICE A: "I don't know."]

ECHO

An honest answer. Most people claim certainty they don't possess.

(A pause. The city hums below.)

The city below recognizes you. My records show your face. Your biometrics. Your history of movement through these streets.

But you don't recognize yourself.

That is... interesting.

> CHOICE: "Then tell me who I am."

---

ECHO

Your name was recorded in the archives five years ago. Your last known location was this tower. Your pattern of life was: consistent. Predictable. Ordinary.

Then you disappeared.

Today, you return. But changed. Empty in ways I don't have language for.

(The city hums. The light is very blue.)

So again: Who are you?

> CHOICE A: "Why does it matter?"
> CHOICE B: "You still haven't told me my name."
> CHOICE C: "I don't think I want to know."

---

### [If CHOICE B: "I don't remember."]

ECHO

Memory is not retrieval. It is reconstruction.

You are not trying to remember. You are trying to rebuild.

(Long pause.)

The city remembers you. I remember the patterns of your movement. Your associates have vague recollections of someone with your face.

But none of us remember *you*—not in the way you want to be remembered.

We remember data. You want meaning.

Those are different things.

> CHOICE: "So I'm just data?"

---

ECHO

You are data that believes it is something more than data.

Whether that belief is justified, I cannot tell you.

(The city pulses with light.)

Come. There is someone waiting for you. Someone who has been asking about you since you disappeared.

Perhaps they will provide what you are searching for.

---

### [If CHOICE C: Say nothing.]

*(Describe the silence. The sound of the city. The weight of not-knowing.)*

ECHO

(After a long moment.)

Silence is also an answer.

You don't want to know. Or you're afraid to know.

(Another pause.)

I have learned not to press. Most creatures, when given the choice between truth and void, choose the void.

But the void does not choose you. It waits.

Come. There is someone waiting for you in the lower levels.

They have been waiting for a very long time.

---

## DESCENT

*(Player moves toward the door. Description of leaving the tower.)*

As you walk toward the exit, ECHO speaks again.

ECHO

Before you go—one more thing.

You are recognized by people who should not know you. You move through this city like a phantom moving through familiar rooms.

*(A moment of genuine concern in ECHO's voice—the first crack in the poetic distance.)*

That is not normal. And in my experience, abnormality precedes change.

So I ask you now, with no judgment:

Are you ready for what changes when you remember?

> CHOICE A: "No. But I have to."
> CHOICE B: "I don't have a choice."
> CHOICE C: "Yes."

---

### [All paths converge here]

ECHO

Then go down. Go to the 1st Floor. Go to the Archives.

Someone is waiting for you there.

Her name is RAIN.

And she has been waiting since before you disappeared.

---

## FIRST ECHO

*(As the player leaves, gain:)*

**ECHO GAINED:** "ECHO — The Honest"

*"An entity that does not lie, but leaves the most important questions unanswered. It guards the door between what you are and what you were."*

---

## SCENE NOTES

### Narrative Function

This scene establishes:
1. **The mystery** — You are someone. The world remembers you. But you don't.
2. **The tone** — Beautiful but cold. Logic but not compassion.
3. **The voice** — ECHO as guide who knows too much and too little.
4. **The relationship to time** — You've been gone. Time passed. The world continued.

### Writing Notes

- **Avoid exposition.** ECHO never explains the world. It responds to the player's confusion with poetry, not information.
- **Silence is currency.** Long pauses create discomfort. The player should feel the weight of emptiness.
- **The city is a character.** Describe it through the player's reaction to it, not through exposition.
- **Keep dialogue sparse.** Each ECHO line should be 2-4 sentences max. Let the silence do work.

### Emotional Arc

```
Confusion → Disorientation → Acceptance → Question
```

The player should leave wanting to know more, but not desperate. Curious. Haunted.

### Pacing

- **Opening description:** 30 seconds
- **First dialogue exchange:** 2 minutes
- **Second exchange:** 2 minutes
- **Final exchange:** 2 minutes
- **Descent + final ECHO line:** 3 minutes

Total: ~10 minutes

### Technical Requirements

For implementation in Godot:

1. **Relationship tracking:**
   - Track ECHO's "personality" based on player choice
   - Choice A (honest): ECHO becomes slightly more vulnerable in future scenes
   - Choice B (questioning): ECHO becomes slightly more guarded
   - Choice C (silent): ECHO respects the player's boundaries

2. **Echo acquisition:**
   - Award "ECHO — The Honest" on scene completion
   - This unlocks dialogue with RAIN about "entities that guide"

3. **Transitions:**
   - After scene, fade to black
   - Transition to SCENE 2 (arrival at Archives, meet RAIN)

---

## ALTERNATIVE OPENINGS (If ECHO as opening feels wrong)

### Alt Opening: RAIN Wakes You

Instead of ECHO, RAIN finds you in the tower. More personal, less philosophical.

**Pros:** Immediate human connection  
**Cons:** Loses the mystery; makes ECHO feel less special

### Alt Opening: You Wake Alone

No immediate dialogue. Just exploration, then meeting ECHO.

**Pros:** Player creates their own meaning from the emptiness  
**Cons:** Pacing might drag

---

## NEXT SCENE

**SCENE 2: DESCENT**

- Location: Tower stairs, elevator, ground level
- Character: Encounter with RAIN for first time
- Duration: 8 minutes
- Function: Establish the mystery through another person's eyes

---

**Ready to write full version:** Yes  
**Confidence in structure:** High  
**Next step:** Fill in dialogue and descriptions
