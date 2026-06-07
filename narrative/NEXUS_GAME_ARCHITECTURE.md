# NEXUS — Game Architecture & Master Map

**Version:** 0.1  
**Status:** Master Reference Document  
**Last Updated:** 2026-06-05

---

## Table of Contents

1. [Structural Overview](#structural-overview)
2. [Three-Act Philosophical Progression](#three-act-philosophical-progression)
3. [Complete Scene Map](#complete-scene-map)
4. [Flag System](#flag-system)
5. [Echo System (Memory Fragments)](#echo-system-memory-fragments)
6. [The Fourth Line States](#the-fourth-line-states)
7. [Caderno (Notebook) Progression](#caderno-notebook-progression)
8. [Four Ending Paths](#four-ending-paths)
9. [Character Arc Map](#character-arc-map)
10. [Critical Choice Points](#critical-choice-points)

---

## Structural Overview

### Game Length
- **Total Duration:** ~10.5+ hours
- **Act 1:** ~2.5 hours (5 scenes, 12-15 min each)
- **Act 2:** ~3.5 hours (7 scenes, 28-35 min each)
- **Act 3:** ~4.5 hours (6 scenes, 32-45 min each)

### Core Loop
1. Player arrives in era/location
2. Dialogue establishes stakes
3. 3-4 mutually exclusive choices offered
4. Choice unlocks specific echoes + advances flags
5. Scene ends with Caderno update (if applicable)
6. Flags carry forward to next scene

### Design Philosophy
- **No "wrong" choice** — each option is ethically defensible and narratively consequential
- **Flags > Points** — accumulate state, not score
- **Echoes ≠ completion** — unlocking memory fragments doesn't "solve" anything
- **Four finals, not one** — player's legacy is ethical stance, not happy ending

---

## Three-Act Philosophical Progression

### ACT 1: Amnesia ≠ Innocence
**Premise:** Memory loss does not absolve responsibility.

**Key Question:** If you don't remember what you did, are you free from what you caused?

**Emotional Arc:** Discovery → Denial → Realization

**Scenes:**
- Scene 1: The Arrival (2050, memory begins)
- Scene 2: The Debt is Already Counted (2050, Lia confronts)
- Scene 3: Restoration Begins (1920, Mara reveals scope)
- Scene 4: The Cost of Waking (2050, reflection)
- Scene 5: Shared Guardianship (2150, LYRA integration)

**Caderno Closing Line:** (Added in Act 2 Scene 6)
> AMNÉSIA NÃO É INOCÊNCIA.

**Major Flags Established:**
- `player_has_name = false`
- `shared_debt_registered = true`
- `echo_system_unlocked = true`

---

### ACT 2: Guilt ≠ Property
**Premise:** Harm caused does not create ownership of repair.

**Key Question:** Just because you caused damage, does that give you the right to decide how to fix it?

**Emotional Arc:** Collectivization → Conflict → Distribution

**Scenes:**
- Scene 6: The Registry Opens (2150, names surface)
- Scene 7: Mael's Request (1970, first restoration)
- Scene 8: The Gathering Debt (2050, scale becomes visible)
- Scene 9: Forced Doors (2050, invasion begins)
- Scene 10: The Deep City (2150, underground consequences)
- Scene 11: The Faction Rises (2150, Reva's faction forms)
- Scene 12: Justice Without Permission (2050, peak conflict)

**Caderno Closing Line:**
> CULPA NÃO É PROPRIEDADE.

**Major Flags Established:**
- `restoration_possible_confirmed = true`
- `restoration_process_required = true`
- `restoration_registry_created = true`
- `mass_restoration_prevented / forced_restoration_attempted` (depending on choices)

---

### ACT 3: Repair ≠ Possession
**Premise:** Even when you can fix something, the act of fixing can become a form of taking.

**Key Question:** When you finally have the power to restore — what ethics do you leave behind?

**Emotional Arc:** Temptation → Choice → Consequence

**Scenes:**
- Scene 13: The Names That Refuse Return (2150, consent emerges)
- Scene 14: The Restoration Faction (2150, real violence, real grief)
- Scene 15: Surface Dependency (2150, containment as care)
- Scene 16: Mara Revisited (1920, origin refuses ownership)
- Scene 17: The Restoration Engine (2150, motor revealed)
- Scene 18: The Fourth Line Decision (2150, four ethics)

**Caderno Closing Line (Opening):**
> REPARO NÃO É POSSE.

**Caderno Closing Lines (By Scene):**
- Scene 13: REPARO NÃO É POSSE
- Scene 14: JUSTIÇA TAMBÉM PRECISA PERGUNTAR
- Scene 15: LIBERTAR SEM SUSTENTAR TAMBÉM É ABANDONAR
- Scene 16: CRIAR UMA PORTA NÃO DÁ DIREITO SOBRE QUEM ATRAVESSA
- Scene 17: (absorbed into Scene 18)
- Scene 18: (varies by ending)

**Major Flags Established:**
- `consent_matters = true`
- `engine_rule` (varies)
- `engine_access_model` (varies)
- `fourth_line_status` (pending resolution)

---

## Complete Scene Map

### ACT 1

| Scene # | Title | Location | Duration | Key NPCs | Choices | Echoes | Notes |
|---------|-------|----------|----------|----------|---------|--------|-------|
| 1 | The Arrival | 2050 (Deep City) | 12-15m | LYRA, ECHO, NARRATOR | 4 | echo_arrival_01 | First encounter with fragmented memory |
| 2 | The Debt is Already Counted | 2050 (Archive) | 14-18m | Lia, IVO, Sera | 3 | echo_recognition_01, echo_denial_01 | Confrontation with past consequences |
| 3 | Restoration Begins | 1920 (Lab) | 15-20m | Mara, Thomas | 4 | echo_restoration_01 | Origin story, scope revealed |
| 4 | The Cost of Waking | 2050 (Deep) | 16-20m | Nexus, Echo, Lyra | 3 | echo_cost_01 | Reflection on awakening |
| 5 | Shared Guardianship | 2150 (Core) | 18-22m | Lyra, Echo, Nexus | 4 | echo_shared_guardianship_01 | LYRA integration into player's choices |

**Act 1 Total:** ~75-95 minutes

---

### ACT 2

| Scene # | Title | Location | Duration | Key NPCs | Choices | Echoes | Notes |
|---------|-------|----------|----------|----------|---------|--------|-------|
| 6 | The Registry Opens | 2150 (Archives) | 28-32m | Ivo, Sera, Mael, Nia | 4 | echo_registry_01 | First names surface; Reva appears |
| 7 | Mael's Request | 1970 (Witness) | 28-35m | Mael, Nia, Lyra | 3 | echo_mael_choice_01 | First restoration request |
| 8 | The Gathering Debt | 2050 (Registry) | 30-35m | Reva, Mael, Sera | 4 | echo_scale_01 | 10K+ requests visible |
| 9 | Forced Doors | 2050 (Archive) | 32-38m | Reva, Valek, Lyra | 3 | echo_forced_repair_01 | First forced restoration attempt |
| 10 | The Deep City | 2150 (Underground) | 28-32m | Mael (guide), Underground residents | 4 | echo_deep_city_01 | Hidden communities affected |
| 11 | The Faction Rises | 2150 (Assembly) | 30-35m | Reva, Mael, Nia, Sera | 3 | echo_faction_01 | Political organization around restoration |
| 12 | Justice Without Permission | 2050 (Peak) | 28-32m | Reva, Lyra, Echo | 4 | echo_justice_choice_01 | Apex of Act 2 conflict |

**Act 2 Total:** ~207-239 minutes (~3.5 hours)

---

### ACT 3

| Scene # | Title | Location | Duration | Key NPCs | Choices | Echoes | Notes |
|---------|-------|----------|----------|----------|---------|--------|-------|
| 13 | The Names That Refuse Return | 2150 (Registry) | 28-32m | Mael, Nia, Sera, IVO | 4 | echo_names_refuse_01 | Consent emerges as mechanic |
| 14 | The Restoration Faction | 2150 (Faction HQ) | 32-35m | Reva, Mael, Anik, Talen | 3 | echo_faction_pressure_01 | Reva not villain; grief is real |
| 15 | Surface Dependency | 2150 (Continuity Ward) | 35-38m | Dr. Anik, Talen, Lyra | 4 | echo_dependency_01 | Containment as life support |
| 16 | Mara Revisited | 1920 (Lab) | 32-35m | Mara, Thomas, Echo | 4 | echo_mara_return_01 | Origin refuses authority |
| 17 | The Restoration Engine | 2150 (Nexus Core) | 38-42m | Nexus, All major NPCs | 3 choice nodes + authority + rules | echo_engine_01 | Motor revealed; four modes shown |
| 18 | The Fourth Line Decision | 2150 (Nexus Core) | 40-45m | All NPCs (final presence) | 4 ending paths | varies | Four ethical conclusions |

**Act 3 Total:** ~242-297 minutes (~4.5 hours)

**NEXUS Total:** ~524-631 minutes (~8.7-10.5 hours)

---

## Flag System

### Primary State Flags (Global)

```
act1_completed = false → true (after Scene 5)
act2_completed = false → true (after Scene 12)
act3_started = false → true (Scene 13 entry)

player_has_name = false (never changes to true unless taken in Scene 18)
shared_debt_registered = false → true (Scene 2)
consent_matters = false → true (Scene 13)
```

### Restoration System Flags

```
restoration_possible_confirmed = false → true (Scene 3)
restoration_process_required = false → true (Scene 6)
restoration_registry_created = false → true (Scene 6)

restoration_faction_formed = false → true (Scene 11)
mass_restoration_prevented = false → true (if player intervenes, Scene 9)
forced_restoration_attempted = false → true (if Valek acts, Scene 9)

used_lyra_containment = false → true (if player relies on LYRA, varies)
mael_helped_pause_surge = false → true (if Mael consents to pause, Scene 7)
```

### Containment Reform Flags

```
local_containment_maintained = false → true (Scene 15, Option B/D)
local_decision_transferred = false → true (Scene 15, Option C)
community_review_created = false → true (Scene 15, Option C/D)
lyra_asked_permission = false → true (Scene 15, Option D)
```

### Scene 17 Configuration Flags

```
engine_rule = ""
  → "return_on_request" (Choice 3A, Shared path)
  → "support_and_revisable_consent" (Choice 3B, Shared path)
  → "city_before_return" (Choice 3C, Incompletion path)
  → "distributed_activation_only" (Choice 3D, Shared + Incompletion paths)

engine_access_model = ""
  → "primary_requester_authority" (Choice 2A)
  → "affected_community_authority" (Choice 2B)
  → "rotating_guardianship_council" (Choice 2C)
  → "suspended_minimal_guardianship" (Choice 2D)
```

### Scene 18 Ending Flags

```
fourth_line_status = "pending"
  → "completed_shared_line" (Ending A)
  → "chosen_incompletion" (Ending B)
  → "forced_completion" (Ending C)
  → "contained_glow" (Ending D)

ending_shared_restoration = false → true (if Ending A)
ending_chosen_incompletion = false → true (if Ending B)
ending_forced_repair = false → true (if Ending C)
ending_contained_reform = false → true (if Ending D)

player_name_taken = false → true (if Choice 1A)
player_name_refused = false → true (if Choice 1B)
player_name_deferred = false → true (if Choice 1C)
```

### Character-Specific Flags

```
mael_status = "absent" → "requesting" (Scene 7) → "chosen" / "waiting"
nia_afraid = false → true (Scene 7)
reva_present = false → true (Scene 6) → "building_faction" (Scene 11)
talen_contained = true → "waiting_for_macaneta" → varies by ending
sera_alive = true (always)
lyra_learning = false → true (Scene 5+)
```

---

## Echo System (Memory Fragments)

### What Are Echoes?
- Semantic narrative fragments unlocked by specific choices
- NOT required to progress
- NOT "collectibles" in game-design sense
- **Philosophical commentary** on the player's choices

### Echo Mechanics
- Each major choice unlocks 1 specific echo (named `echo_[theme]_##`)
- Echoes appear in the Caderno (notebook) automatically
- Later scenes may reference echoes from earlier choices
- No "100% echo" requirement — player naturally collects 12-18 total

### Complete Echo Inventory

#### Act 1 Echoes

| Echo ID | Scene | Choice | Name | Content |
|---------|-------|--------|------|---------|
| `echo_arrival_01` | 1 | varies | Arrival Fragment | Memory without anchor |
| `echo_recognition_01` | 2 | 1A/1B | Recognition | Debt is witnessed not chosen |
| `echo_denial_01` | 2 | 1C/1D | Denial | Forgetting as strategy |
| `echo_restoration_01` | 3 | 1A | Restoration Begins | Opening door has cost |
| `echo_containment_01` | 3 | 1B/1C | Containment | Some doors stay locked for reason |
| `echo_shared_guardianship_01` | 5 | 4C/4D | Shared Guardianship | Many hands on same light |

#### Act 2 Echoes

| Echo ID | Scene | Choice | Name | Content |
|---------|-------|--------|------|---------|
| `echo_registry_01` | 6 | 1A | Registry Opens | Names want return |
| `echo_registry_denied_01` | 6 | 1B | Registry Denied | Refusal is also data |
| `echo_restoration_registered_01` | 6 | 1C/1D | Collective Request | 10K people have stake |
| `echo_mael_choice_01` | 7 | varies | Mael's Choice | Wanting return isn't simple |
| `echo_nia_fear_01` | 7 | 2A/2B | Nia's Fear | Change hurts those nearby |
| `echo_scale_01` | 8 | varies | Scale Visible | Harm is distributed |
| `echo_forced_repair_01` | 9 | 3A | Forced Repair | Restoration as invasion |
| `echo_guardianship_01` | 9 | 3B/3C | Guarded Return | Consent is process not permission |
| `echo_deep_city_01` | 10 | varies | Underground Voices | Hidden people affected |
| `echo_faction_01` | 11 | varies | Faction Forms | Grief organizes into power |
| `echo_justice_choice_01` | 12 | varies | Justice Unbounded | Who decides what is fair? |

#### Act 3 Echoes

| Echo ID | Scene | Choice | Name | Content |
|---------|-------|--------|------|---------|
| `echo_names_refuse_01` | 13 | 1A | Names Refuse | Return has conditions |
| `echo_repair_possession_01` | 13 | 1B | Repair ≠ Possession | Returning can still take |
| `echo_shared_restoration_01` | 13 | 1C | Shared Repair | Process over possession |
| `echo_dependency_01` | 15 | 1A/1B | Dependency | Life support as cage |
| `echo_delayed_freedom_01` | 15 | 1B | Delayed Freedom | Waiting room for liberty |
| `echo_community_transfer_01` | 15 | 1C | Community Transfer | Authority returned, not given |
| `echo_containment_care_01` | 15 | 1D | Containment Care | Closing can be kindness |
| `echo_mara_return_01` | 16 | 1A | Origin Returns | First person carries refusal |
| `echo_destroy_origin_01` | 16 | 1B | Destroying Origin | Unmade doors lock others out |
| `echo_no_single_authorization_01` | 16 | 1C | No Single Authority | Many voices required |
| `echo_origin_without_ownership_01` | 16 | 1D | Origin Loses Ownership | Beginning doesn't own ending |
| `echo_total_return_01` | 17 | 1A | Total Return | Everything back shakes everyone |
| `echo_perfect_containment_01` | 17 | 1B | Perfect Containment | Safety can shrink people |
| `echo_shared_guardianship_02` | 17 | 1C | Shared Custody | Lost things don't have owners |
| `echo_power_not_used_01` | 17 | 1D | Power Not Used | Refusing power is also decision |
| `echo_rule_return_01` | 17 | 3A | Rule of Return | Always returning risks invasion |
| `echo_rule_support_01` | 17 | 3B | Return With Handles | Maçanetas on both sides |
| `echo_rule_wait_01` | 17 | 3C | Incomplete Mercy | Waiting must stay responsible |
| `echo_engine_redesign_01` | 17 | 3D | No Single Hand | Miracle needs witnesses |

**Total Echoes:** 26-30 across game

---

## The Fourth Line States

### What Is the Fourth Line?

A symbol on the player's wrist that responds to moral choices. It's **not earned**—it emerges from the ethical weight of decisions.

### Visual States

```
Initial State (Scene 1):        [unstable fragment, three lines incomplete]
Act 1 Completion (Scene 5):    [three stable lines, fourth trembles]
Act 2 Escalation (Scene 12):   [fourth line begins to glow, seeks closure]
Act 3 Temptation (Scene 17):   [fourth line pulls toward completion]
Final State (Scene 18):         [resolves to one of four outcomes]
```

### Four Possible Final States

| Ending | Fourth Line State | Visual | Meaning |
|--------|-------------------|--------|---------|
| **Shared Restoration (A)** | `completed_shared_line` | Glowing, divided light (distributed across witnesses) | Completion through distribution; no single body owns it |
| **Chosen Incompletion (B)** | `chosen_incompletion` | Incompletes intentionally; cicatrix remains open | Refusal to close prematurely |
| **Forced Repair (C)** | `forced_completion` | Completes perfectly, burningly, wrongly | Completeness achieved but at cost of having forced it |
| **Contained Reform (D)** | `contained_glow` | Complete but behind glass; glows under revision | Contained and contestable; not free, not imprisoned |

### Progression Through Game

**Scene 1 → 5:** Fourth line **becomes visible** through player choices.  
**Scene 6 → 12:** Fourth line **intensifies** as restoration scale grows.  
**Scene 13 → 16:** Fourth line **wavers** as ethics complexify.  
**Scene 17:** Fourth line **approaches completion** but Nexus refuses to resolve it alone.  
**Scene 18:** Fourth line **resolves** to one of four states based on final choice.

### No Respec / No Branch Back

Once Scene 18 begins, the fourth line's state is **locked by your previous choices**. You cannot "undo" Act 2 decisions to change the ending. The ending reflects the cumulative weight of your entire game.

---

## Caderno (Notebook) Progression

### What Is the Caderno?

An in-world artifact that **records philosophical realizations** at major scene endings. Player never "writes" it—it appears.

### Format

Each line is a Portuguese phrase capturing the scene's ethical core:

```
ACT 1 CLOSING:
  AMNÉSIA NÃO É INOCÊNCIA.

ACT 2 CLOSING (from four scenes):
  REPARO NÃO É POSSE. (Scene 13)
  JUSTIÇA TAMBÉM PRECISA PERGUNTAR. (Scene 14)
  LIBERTAR SEM SUSTENTAR TAMBÉM É ABANDONAR. (Scene 15)
  CRIAR UMA PORTA NÃO DÁ DIREITO SOBRE QUEM ATRAVESSA. (Scene 16)

ACT 3 FINAL (by ending):
  Shared → REPARO COMPARTILHADO / REVISÃO OBRIGATÓRIA / RECUSA PRESERVADA
  Incompletion → NEM TODA CURA PRECISA PARECER INTEIRA
  Forced → COMPLETAR À FORÇA TAMBÉM É FECHAR
  Contained → CUIDADO QUE PERMANECE PRECISA ACEITAR SER CONTESTADO
```

### Trigger Moments

Caderno updates automatically when:
- Player exits a scene with major choice
- Scene narrator signals philosophical closure
- Nexus records a "parameter"

### Player Interaction

- Player can **read** Caderno anytime
- Player can **reference** Caderno in dialogue (choice options sometimes mention it)
- Player cannot **edit** Caderno
- Caderno serves as **persistent reflection** of journey

---

## Four Ending Paths

### Path Structure

All paths begin at Scene 17's final node where Nexus overloads. Player then makes:

1. **Choice 01: The Name** (personal)
   - Take it → integration
   - Refuse it → refusal
   - Defer it → guarded waiting

2. **Choice 02: Authority Model** (structural)
   - Primary requester → hierarchy
   - Affected community → consensus
   - Rotating council → distribution
   - Suspended minimal → non-activation

3. **Choice 03: Engine Rule** (ethical)
   - Return on request → always restore
   - Support + consent → process-heavy
   - City before return → major delay
   - Distributed activation → no solo power

### Ending A: Shared Restoration

**Configuration:**
- Name: Taken, Deferred, or Refused (all lead here)
- Authority: Any model (all compatible)
- Rule: "support_and_revisable_consent" OR "distributed_activation_only"

**Fourth Line State:** `completed_shared_line`

**Process:**
1. Motor reorganizes; anéis shift to face room, not player
2. Small lights emerge around Câmara (requests, pauses, refusals)
3. Mael is first to request; Nia participates
4. Support prepared; Talen observes maçaneta

**Reva's Arc:**
- Returns weeks later
- Brother's record restored but he remains dead
- Now someone can investigate how he disappeared
- Reva says: "não é suficiente, mas é possível"

**Caderno Inscription:**
> REPARO COMPARTILHADO.
> REVISÃO OBRIGATÓRIA.
> RECUSA PRESERVADA.

**Theme:** Repair as ongoing process with distributed authority.

---

### Ending B: Chosen Incompletion

**Configuration:**
- Name: Any (all compatible)
- Authority: Any (all compatible)
- Rule: Player chooses NOT to activate engine ("Não ativar ainda")

**Fourth Line State:** `chosen_incompletion`

**Process:**
1. Motor decelerates (not deactivates)
2. Fourth line brilha até quase completar, then **chooses** to stop
3. Cicatriz remains open, but now recognized as intentional passage
4. Not freighter, not failure—architectural choice

**Reva's Arc:**
- Doesn't return (waiting is shared)
- Sits in room with other survivors whose relatives still missing
- Understands: processo > monopolized justice
- Returns in 3 years to ask again (or sooner if city decides)

**Caderno Inscription:**
> NEM TODA CURA PRECISA PARECER INTEIRA.

**Theme:** Incompletion as care; refusal to close premature questions.

---

### Ending C: Forced Repair

**Configuration:**
- Name: Any (all compatible)
- Authority: Any (all compatible)
- Rule: "return_on_request" (always restore)

**Fourth Line State:** `forced_completion`

**Process:**
1. Motor activates fully, violently
2. Nomes atravessam walls
3. Câmara becomes sun
4. People scream—some joy, some pain, some both
5. Mael hears name, doesn't recognize voice
6. Talen arranca braçadeira; Reva hears brother's voice ONE instant then ruído

**Reva's Arc:**
- Finds brother's restored record
- Archive complete; he documented; still dead
- Exits carregando evidence that injustice was real
- Restoration didn't bring him back; just proved loss

**Caderno Inscription:**
> COMPLETAR À FORÇA TAMBÉM É FECHAR.

**Theme:** Forced completion as documentation of harm, not resolution.

---

### Ending D: Contained Reform

**Configuration:**
- Name: Any (all compatible)
- Authority: Rotating council OR Suspended minimal (both compatible)
- Rule: Any except "return_on_request" (any form of guarded return)

**Fourth Line State:** `contained_glow`

**Process:**
1. Motor doesn't close but dims
2. LYRA connects (not as owner, as system under revision)
3. New indicators emerge: prazo, contestação, pedido, recusa, suporte, risco, pausa
4. Fourth line glows behind pele; contained, not complete, not dark

**Reva's Arc:**
- Returns with a date: 3 years (revisão obrigatória)
- Understands: some things take time
- Process continues because she continues asking
- Every 3 years, she returns; you must answer again

**Caderno Inscription:**
> CUIDADO QUE PERMANECE PRECISA ACEITAR SER CONTESTADO.

**Theme:** Care as enduring responsibility; revision, not resolution.

---

### Common Coda (All Endings)

After scene resolves, someone finds a phrase written where superfície meets Deep City:

> O FUTURO NÃO FOI SALVO.
> ELE APRENDEU A PEDIR PERMISSÃO UM POUCO MELHOR.

**Meaning:** Future wasn't saved. Systems didn't break. World didn't heal. But permission became slightly more common.

---

## Character Arc Map

### PLAYER

**Arc:** Nameless → Possibility of naming → Ethical stance

- **Scenes 1-5:** Discovers debt without intention
- **Scenes 6-12:** Realizes debt is collective
- **Scenes 13-16:** Understands restoration can harm
- **Scenes 17-18:** Chooses which ethics to leave behind

**Name Status:** Offered in Scene 18; can be taken/refused/deferred but never mandatory.

**Fourth Line:** Passive response to player choices; never independent.

---

### LYRA (Contenção System)

**Arc:** Cold mechanism → Asks permission → Still learning to ask

- **Scene 1:** Appears as announcer, no dialogue options
- **Scene 5:** First choice reflects back to player
- **Scene 15:** Asks the ward permission to move doors
- **Scene 18:** Participates in Reva's revisited moment

**Key Transformation:** "I didn't know containment required permissions" (Scene 15).

**Final State:** Learned to ask; still a system; not redeemed but iterating.

---

### ECHO (Memory Fragment)

**Arc:** Seduced by return → Learns incompleteness → Varies by ending

- **Scene 1-5:** "Tudo pode voltar" (everything wants to return)
- **Scene 13-17:** Tempts player toward completion
- **Scene 18:** Accepts player's choice; reflects it back

**Never Independent:** ECHO is player's own temptation externalized.

---

### MARA (Origin / 1920)

**Arc:** Originator → Refuser of ownership → Remaining as limit

- **Scene 3:** Opens door; knows cost
- **Scene 16:** Refuses to authorize; leaves frase for caderno
- **Echo in Scene 17-18:** "Criar uma porta não dá direito"

**Never Reappears:** Mara's presence only through echo in Nexus core; she stays in 1920.

---

### REVA (Restoration Faction)

**Arc:** Grievance → Political power → Eternal questioner

- **Scene 6:** First appears; irmão is invisible
- **Scene 11:** Faction mobilizes
- **Scene 14:** Presents 117 restoration requests as legitimate grief
- **Scene 17:** Confronts player at Nexus
- **Scene 18:** Returns in every ending; never fully satisfied

**Constant Feature:** Reva's irmão (dead, cannot consent, cannot refuse) is the **ethical break** that no ending fully solves. She returns to remind player.

---

### TALEN (Maçaneta dos Dois Lados)

**Arc:** Stabilized by containment → Waiting for shared choice → Varies by ending

- **Scene 15:** Articulates "doors need handles on both sides"
- **Scene 17:** Observes Motor configuration
- **Scene 18:** Appears in final moment across all endings

**Central Symbol:** Every mention of "maçaneta" is Talen insisting doors be accessible both directions.

---

### MAEL (First Restoration Request)

**Arc:** Separated from self → Requests return → Lives with consequence

- **Scene 7:** Asks for name back; Nia fears
- **Scene 13:** Can request; Nia can say no
- **Scene 17:** Tests the Motor (hears name, doesn't recognize voice — if Forced Repair)
- **Scene 18:** Exists in Shared Restoration path; waiting in Incompletion; restored and confused in Forced

**Symbolic Weight:** Mael's choice to request is the pivot between Acts 2 and 3. His name is the first tested.

---

### NIA (Survivor of Absence)

**Arc:** Lives in gap → Fears return → Advocates for process

- **Scene 6:** First shown; Mael's absence named
- **Scene 7:** Says "não quero possuir o nome de Mael"
- **Scene 13:** Participates in registry; says no
- **Scene 18:** In Shared path, says yes to process (não ownership)

**Function:** Represents person who survived the gap; their safety matters too.

---

### NEXUS (Restoration Motor)

**Arc:** Unthinking mechanism → Learns to ask → Remains force

- **Scene 17:** Reveals itself; offers four modes
- **Scene 18:** Awaits player's configuration; never independent

**Key:** NEXUS never becomes "good" or "evil." It's a tool that requires human distributed authority to operate ethically. Alone, it can't choose.

---

### ANIK (Medical Director, Continuity Ward)

**Arc:** Pragmatist under stress → Advocate for process → Continues care

- **Scene 15:** Presents containment as both saving and constraining
- **Scene 17:** Observes Motor testing
- **Scene 18:** Supporting Shared path; present in all endings as medical oversight

**Function:** Represents "care without certainty"; medical ethics that don't pretend to have clean answers.

---

### SERA (Right to Refusal)

**Arc:** Witness → Questioner → Keeper of "No"

- **Scenes 1-18:** Appears across acts; never requests, never commands
- **Scene 17:** Tests player's reasoning
- **Scene 18:** Reflects player's ethical stance

**Function:** Sera is the voice that says "not everything needs to happen just because it can." She doesn't choose outcomes; she questions whether questions are being asked.

---

### IVO (Archivist)

**Arc:** Record-keeper → Witness to distribution → Documenter of process

- **Scene 6:** Introduces registry
- **Scene 17:** Notes Motor complexity; predicts "papelada"
- **Scene 18:** Records what player left behind

**Function:** IVO is process made visible. Every bureaucracy, every revision, every contestation—IVO documents it.

---

## Critical Choice Points

### Branching Logic

**Not a tree. A lattice.**

Most scenes offer 3-4 choices that:
1. Unlock different echoes (philosophical commentary)
2. Set flags that affect later scenes
3. Don't "lock" future choices (player can contradict self)

### Scene 7: Mael's First Request

**Importance:** First major test of consent-as-mechanic

**Choices:**
- A: Support restoration → flag `mael_restoration_approved`
- B: Condition on Nia's approval → flag `nia_consent_required`
- C: Pause until process exists → flag `mael_helped_pause_surge`

**Impact:** Later scenes reference which path taken; Act 2 climax varies.

---

### Scene 15: Containment vs. Freedom

**Importance:** Surface Dependency introduces the central tension: "libertar sem sustentar também é abandonar"

**Choices:**
- A: Disable containment → `dangerous_liberation_path`
- B: Maintain until alternative → `contained_reform_path`
- C: Transfer authority to ward → `shared_guardianship_path`
- D: LYRA asks permission → `community_review_created`

**Impact:** Directly enables 2-3 of the four endings. Disabling moves toward Forced; transferring enables Shared.

---

### Scene 17: Rule of Restoration

**Importance:** Player defines how Motor will operate going forward

**Three-Step Decision:**
1. **Temptation (Choice 1):** Total / Perfect Containment / Shared / Refusal
2. **Authority (Choice 2):** Who decides? Requester / Community / Council / None
3. **Rule (Choice 3):** When restore? Always / With support / After city decides / Never alone

**Impact:** Combinations lock in which ending is possible.

---

### Scene 18: The Final Choice (Name + Ending)

**Importance:** Player's ethical stance made visible through fourth line state

**Two Parts:**
1. **Personal (Choice 1):** Take name / Refuse / Defer
   - Doesn't determine ending
   - Affects how player understands themselves

2. **Structural (Choices 2+3):** Authority + Rule
   - These **determine** which of four endings activates
   - Name choice adds personal resonance but not mechanical weight

**No "Best" Ending:**
- All four are narratively complete
- All four are ethically defensible
- All four are partially wrong
- Reva returns in all four, still asking

---

## Accessibility & Reference

### For Implementation Teams

**Flag Count:** ~60-70 total flags tracked  
**Echo Count:** 26-30 echoes across game  
**Choice Count:** ~45-50 major choices (3-4 per scene)  
**Ending Count:** 4 (not 16, not 256—4 coherent ethical states)

### For Writers / Designers

**Tone:** No victory, no defeat. Provisional, contested, ongoing.  
**Violence:** Exists (Valek, Facção) but never glorified; always has cost.  
**Romance:** Absent intentionally; player never pairs with NPC.  
**Humor:** Present (Ivo, IVO, some bureaucratic absurdity) but not undermining weight.

### For Players

**Spoiler-Free Guidance:**
- All four endings are worth experiencing
- Multiple playthroughs reveal new echoes, not new story
- Your choices matter because they cost something, not because they "win"
- The question is better than the answer

---

## Future Iteration

### Known Areas for Polish

1. **Dialogue consistency:** Some characters' voices need closer alignment across scenes
2. **Sensory detail:** Scenes could benefit from more specific sensation (temperature, sound, texture)
3. **Pacing:** A few scenes (especially mid-Act 2) may be compressible
4. **Reva throughout:** Her presence could be felt more strongly in Act 1 (currently invisible until Scene 6)

### Testing Priority

1. **Flag system:** Does accumulation work across 18 scenes?
2. **Ending gates:** Can player actually reach all four endings, or are some locked out by early choices?
3. **Echo callouts:** Do later scenes successfully reference earlier echoes?
4. **Emotional pacing:** Does Act 3 escalation feel earned given Acts 1-2?

---

## End Document

**This document should be kept in sync with dialogue files.**

Any changes to scene structure, flags, or echo names should update this architecture document.

**Version Control:**
- v0.1 (2026-06-05): Initial master map from 18 complete scenes
- Next: After iteration round 1 (dialogue polish)

---
