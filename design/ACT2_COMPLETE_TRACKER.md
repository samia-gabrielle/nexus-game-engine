# NEXUS — Act 2 Complete Progress Tracker

**Status:** COMPLETE & LOCKED

**Date Completed:** 2026-06-05

**Total Scenes:** 7 (ch02_scene01 through ch02_scene07)

**Total Duration:** ~195 minutes of gameplay

**Total Echoes:** 45+

---

# Act 2 Core Philosophy

## Central Question

> Culpa não é propriedade. Mas responsabilidade é relação.

## Act Progression

```
Individual Consent (Deep City)
  ↓
Collective Refusal (1970)
  ↓
Institutional Capture (2050)
  ↓
Distributed Responsibility (Return)
```

## What Act 2 Teaches

| Learning | Scene | Mechanism |
|----------|-------|-----------|
| **Memory requires consent** | 06-07 | Sera refuses to be restored without choice |
| **Refusal is care** | 08-09 | Lia keeps Circuit small despite scale pressure |
| **Scale has costs** | 10-11 | Voss and Orren show that saving lives requires suspension |
| **No single choice** | 12 | Player discovers shared guilt has no single address |
| **Shared debt = distributed path** | 12 | Fourth line reflects many voices, not one |

---

# Scene-by-Scene Breakdown

## Scene 06 — Deep City After The First Lie

**File:** `ch02_scene01_deep_city_after_first_lie.dialogue.md`

**Status:** v0.1 Complete

**Duration:** ~16-18 min

**Core Mechanic:** Consent as introductory system

**Key Characters:**
- **Ivo:** Introduces principle of consent (names without permission become collars)
- **PLAYER:** Learns to ask before taking

**Major Choices:**

| Choice | Path | Echo | Effect |
|--------|------|------|--------|
| 01-A | Read all names | echo_deep_city_01 | Burden inherited |
| 01-B | Give to LYRA | echo_archive_01 | Archive as death |
| 01-C | One name only | echo_name_burden_01 | Honest limit |
| 02-A | Carry box | echo_consent_02 | Action without centering |
| 02-B | Refuse carry | echo_refusal_01 | Honest boundary |
| 02-C | Ask destination | echo_consent_01 | Partial knowledge |
| 03-A | Entregar silent | echo_consent_02 | Care without witness |
| 03-B | Question after | echo_paternalism_01 | Concern becomes control |
| 03-C | Warn of pain | echo_consent_03 | Pain is not veto |

**Fourth Line Development:** Lateja when Ivo says "permission"; learns that silence can be space

**Key Flags Set:**
```text
consent_matters = true
ivo_met = true
```

**End State:** Player understands consentimento não é obstáculo — é a própria progressão

---

## Scene 07 — Archive of Covered Names

**File:** `ch02_scene02_archive_of_covered_names.dialogue.md`

**Status:** v0.1 Complete

**Duration:** ~18-20 min

**Core Mechanic:** Consent becomes dramatic system through Sera

**Key Characters:**
- **Sera:** Person who requested forgetting; refuses to be necessary
- **PLAYER:** Must carry closed box without right to understand

**Major Choices:**

| Choice | Path | Echo | Effect |
|--------|------|------|--------|
| 01-A | Ask why Sera forgot | echo_consent_01 | Refusal protected |
| 01-B | Use her memory | echo_paternalism_01 | Need denied |
| 01-C | Don't ask | echo_refusal_01 | Silence honored |
| 02-A | Carry closed | echo_consent_02 | Centered elsewhere |
| 02-B | Refuse to carry | echo_refusal_01 | Honest limit |
| 02-C | Ask destination | echo_consent_01 | Partial knowledge |
| 03-A | Hand over silent | echo_consent_02 | Care without centering |
| 03-B | Question certainty | echo_paternalism_01 | Doubt becomes control |
| 03-C | Warn of pain | echo_consent_03 | Pain is not veto |

**Fourth Line Development:** Pulses lower in presence of respected consent; learns humility

**Key Flags Set:**
```text
sera_met = true
consent_system_locked = true
```

**End State:** Consentimento is not theoretical — it is concrete, concrete, and costs something

---

## Scene 08 — 1970: The Possibility

**File:** `ch02_scene03_1970_the_possibility.dialogue.md`

**Status:** v0.1 Complete

**Duration:** ~20-22 min

**Core Mechanic:** Possibility as living refusal

**Key Characters:**
- **Lia:** Guardian of openness; refuses possession
- **Samuel:** Temptation of scale and efficiency
- **ASSEMBLY:** Community as character

**Major Choices:**

| Choice | Path | Echo | Effect |
|--------|------|------|--------|
| 01-A | Warn of capture | echo_failed_utopia_01 | Urgency as control |
| 01-B | Ask to understand | echo_possibility_01 | Invitation mishandled |
| 01-C | Refuse leadership | echo_no_savior_01 | Tested for truth |
| 02-A | Help without plans | echo_lia_01 | Usefulness unseen |
| 02-B | Observe first | echo_lia_01 | Pattern learned |
| 02-C | Optimize system | echo_samuel_01 | Efficiency casts shadow |
| 03-A | Protect Circuit | echo_possibility_02 | Protection = ownership |
| 03-B | Ask who decides | echo_shared_choice_01 | Distributed error |
| 03-C | Don't touch | echo_no_savior_02 | Limit recognized |

**Fourth Line Development:** Pulses when refusing leadership; breathes when recognizing limits

**Key Flags Set:**
```text
lia_met = true
samuel_met = true
assembly_seen = true
open_circuit_discovered = true
```

**End State:** Possibility is not utopia. Community is not machine. Refusal can be care.

---

## Scene 09 — The Community Refuses You

**File:** `ch02_scene04_the_community_refuses_you.dialogue.md`

**Status:** v0.1 Complete

**Duration:** ~22-25 min

**Core Mechanic:** Collective refusal as moral act

**Key Characters:**
- **Lia:** Refusing scale
- **Samuel:** Offering shortcut
- **ASSEMBLY:** Voting without hands

**Major Choices:**

| Choice | Path | Echo | Effect |
|--------|------|------|--------|
| 01-A | Warn of capture | echo_failed_future_warning_01 | Warning becomes leash |
| 01-B | Ask for care | echo_shared_vote_01 | Collective future |
| 01-C | Admit ignorance | echo_refused_savior_01 | Savior fails |
| 02-A | Support Samuel | echo_secret_control_01 | Fear votes |
| 02-B | Support Lia | echo_lia_refusal_01 | Refusal tested |
| 02-C | Refuse to be argument | echo_shared_vote_01 | Weight deferred |
| 03-A | Insist error | echo_resisted_refusal_01 | Line darkens |
| 03-B | Accept refusal | echo_refused_savior_01 | Line breathes shared |
| 03-C | Seek Samuel secret | echo_secret_control_01 | Line burns scar |

**Fourth Line Development:**
- If `accepted_refusal`: breathing_shared
- If `insisted_after_refusal`: resisted_completion
- If `secretly_bypassed_vote`: cauterized_control

**Key Flags Set:**
```text
community_refused_player = true
consent_system_locked = true
ready_for_2050 = true
```

**End State:** Recusa coletiva não é ignorância. É cuidado. E custa vidas de outra forma.

---

## Scene 10 — 2050: The Negotiation

**File:** `ch02_scene05_2050_the_negotiation.dialogue.md`

**Status:** v0.1 Complete

**Duration:** ~25-28 min

**Core Mechanic:** Care at scale learning to bypass consent

**Key Characters:**
- **Dr. Elena Voss:** Moral center enabling capture
- **Director Cael Orren:** Scale as responsibility
- **Analyst Ren:** Doubt inside the system
- **COUNCIL:** Institutions voting in silence

**Major Choices:**

| Choice | Path | Echo | Effect |
|--------|------|------|--------|
| 01-A | Reject authority | echo_borrowed_authority_01 | Legacy acknowledged |
| 01-B | Accept scaling | echo_compassion_scale_01 | Control justified |
| 01-C | Silent listening | echo_negotiation_01 | Future entered quietly |
| 02-A | Demand consent | echo_consent_at_scale_01 | Limit recognized |
| 02-B | Accept scale | echo_stability_01 | Care with teeth |
| 02-C | Refuse suffering | echo_consent_at_scale_01 | Recusal honored |
| 03-A | Destroy phrase | echo_phrase_01 | Language survives |
| 03-B | Alter phrase | echo_phrase_02 | Wound in grammar |
| 03-C | Listen to phrase | echo_phrase_03 | Understand cage |

**Fourth Line Development:** Learns that completion requires accepting you cannot control your legacy

**Key Flags Set:**
```text
player_legacy_detected = true
heard_stability_compassion = true
2050_framework_activated = true
```

**End State:** Catástrofe não começa com malice. Começa com cuidado em escala.

---

## Scene 11 — The Choice That Wasn't Yours

**File:** `ch02_scene06_the_choice_that_wasnt_yours.dialogue.md`

**Status:** v0.1 Complete

**Duration:** ~28-30 min

**Core Mechanic:** Distributed guilt has no single address

**Key Characters:**
- **Voss:** Signs "ferida" not "triunfo"
- **Orren:** Transforms recusa into precedent
- **Ren:** Doubt that survives the system

**Major Choices:**

| Choice | Path | Echo | Effect |
|--------|------|------|--------|
| 01-A | Refusal costs | echo_consent_cost_01 | Principle bled |
| 01-B | Emergency exception | echo_temporary_exception_01 | Door locked mercy |
| 01-C | No clean answer | echo_distributed_guilt_01 | Guilt multiplies |
| 02-A | Show 2150 | echo_future_as_threat_01 | Fear requests control |
| 02-B | Show 1970 | echo_refused_scale_01 | Smallness honored |
| 02-C | Show Mara | echo_exposed_origin_01 | Origin exposed |
| 03-A | Take all blame | echo_no_single_hand_01 | Solitude rejected |
| 03-B | Absolve yourself | echo_no_absolution_01 | Consequence remains |
| 03-C | Accept distribution | echo_shared_debt_01 | Shared glow unstable |

**Fourth Line Development:** Reaches toward completion but stops—recognizes it cannot control legacy

**Key Flags Set:**
```text
the_choice_deconstructed = true
player_saw_no_single_choice = true
voss_validated_exception = true
```

**End State:** Ninguém vendeu o futuro. Todos parcelaram. Nenhuma mão solinha na faca.

---

## Scene 12 — Return With Shared Debt

**File:** `ch02_scene07_return_with_shared_debt.dialogue.md`

**Status:** v0.1 Complete

**Duration:** ~30-32 min

**Core Mechanic:** Shared responsibility as permanent condition

**Key Characters:**
- **Lyra:** Origin destabilized; now accepts corrections
- **Ivo:** Guardian of weight (optional appearance)
- **ECHO:** Clarity increased; still incomplete

**Major Choices:**

| Choice | Path | Echo | Effect |
|--------|------|------|--------|
| 01-A | Smaller = less blame | echo_no_absolution_02 | Still weighs equal |
| 01-B | Find other carriers | echo_many_carriers_01 | Many hands |
| 01-C | Must respond anyway | echo_shared_debt_02 | Answer owed |
| 02-A | Who started? | echo_origin_hunger_01 | Grief seeking shape |
| 02-B | Who still carries? | echo_many_carriers_01 | Living archives |
| 02-C | Stop trying to fix? | echo_repair_limit_01 | Possession in care |
| 03-A | Carry the wound | echo_functioning_future_01 | System worked |
| 03-B | Carry the names | echo_many_carriers_01 | Archive vivo |
| 03-C | Carry the refusal | echo_refusal_carried_01 | No as care |

**Fourth Line Final States:**
- If accepted_refusal + responsibility_distributed: `unstable_shared_glow`
- If refused_refusal + responsibility_distributed: `fractured_shared_glow`
- If responsibility_distributed_rejected: `cold_incomplete`

**Key Flags Set:**
```text
act2_completed = true
act3_unresolved_question = "who_has_right_to_restore_what_others_survived_losing"
```

**End State:** Dívida compartilhada não é absolvição. É o caminho distribuído.

---

# Fourth Line Progression (Full Arc)

## State Transitions

```
ACT 1 END:                  scarred_incomplete

SCENE 06 (permission):       learns permission
SCENE 07 (consent):          pulses_lower (humility)
SCENE 08 (leadership):       pulses (refusing leadership)
SCENE 09:
  - accepted_refusal:       breathing_shared ✓
  - insisted_after:         resisted_completion
  - bypassed_vote:          cauterized_control

SCENE 10-11:                fractured under distribution

SCENE 12 FINAL:
  - IF accepted_refusal + shared_responsibility: unstable_shared_glow
  - IF refused_refusal + shared_responsibility:   fractured_shared_glow
  - IF rejected_shared:                            cold_incomplete
```

## Why Incomplete?

The fourth line does not complete in Act 2 because:

1. **Incompleteness is the shape of distributed responsibility**
2. **Control cannot complete what is shared**
3. **The line waits for Act 3's answer:** Who restores without possessing?

---

# Echo System Summary

**Total Echoes Unlocked:** 45+

**Major Echo Families:**

### Consent Echoes
- echo_consent_01 — Memory Requires Permission
- echo_consent_02 — The Help That Did Not Center You
- echo_consent_03 — Pain Is Not A Veto
- echo_paternalism_01 — Protection Wearing Doubt
- echo_refusal_01 — Not All Doors Want To Open

### Refusal Echoes
- echo_refused_savior_01 — The Refusal That Almost Completed You
- echo_no_savior_01 — No One Asked To Be Saved
- echo_no_savior_02 — The Hand That Stayed Open
- echo_refused_scale_01 — The Smallness They Called Failure
- echo_refusal_carried_01 — The No That Remained Care

### Scale Echoes
- echo_lia_01 — Useful Without Witness
- echo_samuel_01 — Efficiency Has A Shadow
- echo_shared_choice_01 — The Error With Many Addresses
- echo_failed_utopia_01 — Hope Without Infrastructure
- echo_possibility_01 — The Future As Invitation

### Responsibility Echoes
- echo_distributed_guilt_01 — No Clean Answer At Scale
- echo_shared_debt_01 — Responsibility Divided Is Not Erased
- echo_shared_debt_02 — Answer To The Ones Who Carried
- echo_many_carriers_01 — The Legacy Had More Hands
- echo_no_absolution_01 — Not Alone Does Not Mean Innocent
- echo_no_absolution_02 — Smaller Is Not Clean

### Capture Echoes
- echo_borrowed_authority_01 — Your Name Before You Had One
- echo_compassion_scale_01 — Care Without Permission
- echo_temporary_exception_01 — The Door Locked For Mercy
- echo_stability_01 — Compassion With Teeth
- echo_consent_cost_01 — The Principle That Bled
- echo_negotiation_01 — The Day Tomorrow Was Negotiated

### System Echoes
- echo_functioning_future_01 — The Wound That Worked
- echo_repair_limit_01 — Not Everything Wants Your Repair
- echo_origin_hunger_01 — The Hunger For A First Cause
- echo_phrase_01 — The Sentence That Survived You
- echo_phrase_02 — The Clause In The Margin
- echo_phrase_03 — The Care That Became A Cage

---

# Flag System Outcomes

## Major Decision Trees

### Refusal Path
```
accepted_refusal = true
  → fourth_line_status = "breathing_shared"
  → fourth_line can progress to "unstable_shared_glow"
  → enables Act 3 collaboration paths

insisted_after_refusal = true
  → fourth_line_status = "resisted_completion"
  → blocks deeper fourth_line progression
  → Act 3 becomes "redemption against self"

secretly_bypassed_vote = true
  → fourth_line_status = "cauterized_control"
  → fourth_line stops responding
  → Act 3 becomes "learning to listen after learning to hide"
```

### Responsibility Path
```
player_accepted_distributed_responsibility = true
  → shared_debt_registered = true
  → enables "many_carriers" echoes
  → fourth_line learns communal light

player_tried_to_take_blame = true
  → fourth_line rejects solitary guilt
  → fourth_line_status = "rejected_solitary_guilt"
  → Act 3 must teach: sharing does not lighten

player_tried_to_absolve_self = true
  → fourth_line_status = "cold_incomplete"
  → Act 3 must teach: distribution is not freedom
```

---

# Narrative Consequences

## What the Player Now Knows

1. **Consent is the system** — It's not an obstacle; it's how things actually work
2. **Refusal is care** — Saying no can preserve what scale would destroy
3. **Scale has costs** — Saving millions requires suspending choice for some
4. **Shared guilt means no singles absolution** — You are not the only carrier; you are also not free
5. **"Estabilidade é compaixão" is the origin of the system** — Voss and Orren did not invent evil; they inherited urgency

## What the Player Does NOT Know (Act 3 tension)

1. **How to restore without possessing** — The fourth line waits for this answer
2. **Who has the right to restore** — Sera refused; Ivo guards; Lia refuses scale
3. **Whether 1970's refusal was right** — It saved people from control but cost some lives
4. **Whether 2050's exception will stop being temporary** — Already morphing into doctrine
5. **Who they actually were in 1920** — Mara's warning suggests complexity

---

# Doors Open for Act 3

## The Central Question

> Quem tem direito de restaurar aquilo que outros sobreviveram perdendo?

## Available Routes

### Route A: Deep City Resistance
- Ivo guards the archive
- Sera lives there
- Survivors who paid the cost live there
- They may refuse the player's "repair" impulse

### Route B: Mara's Origin
- Return to 1920 with knowledge
- Discover what the player actually caused
- Confront the first promise
- Question whether "shared responsibility" absolves the origin point

### Route C: System Recursion
- LYRA learning to correct herself
- NEXUS fragmenting under distributed choices
- Question: Does the system self-improve or self-perpetuate?

---

# Session Summary

**Act 2 is a complete, closed narrative block.**

- **7 scenes, ~195 minutes**
- **45+ echoes locked**
- **Fourth line intentionally incomplete**
- **Central mechanic: Shared responsibility as permanent condition**
- **Final state: Player understands guilt is not owned but distributed**

**Ready for Act 3: "Who has the right to restore?"**

---

**Act 2 Completed: 2026-06-05**

**Act 3 Framework: Ready to begin**

**Next File:** `ACT3_FRAMEWORK_v0.1.md`
