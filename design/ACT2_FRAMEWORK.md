# NEXUS — Act 2 Framework v0.1

## Status

**ACT 2: PLANNING / READY FOR SCENE CREATION**

Act 2 shifts from personal debt to distributed responsibility. The player discovers that their legacy was never theirs alone to control.

---

# Act 2 Core Philosophy

**Act 1 asked:**
> Quem sou eu sem memória?

**Act 2 asks:**
> Quem mais carregou o peso da minha escolha?

Act 1 was about **identity amnesia**.
Act 2 is about **responsibility distribution**.

The player begins Act 2 thinking legacy is personal.
They end understanding that legacy is a network of people interpreting, distorting, protecting, refusing, or continuing what someone started.

---

# Act 2 Narrative Arc

```
Covered Memory
  ↓
Possible Future
  ↓
Refusal
  ↓
Institutional Consequence
  ↓
The Choice That Wasn't Yours
  ↓
Shared Debt
```

## Emotional Arc

**Enter Act 2:**
The player believes they need to discover "what they did."

**Exit Act 2:**
The player understands that question is too small.

The larger question:
> Quem foi forçado a viver dentro das consequências daquilo que eu chamo de minha história?

---

# Recommended Route Order

## 1. 2150 Deep City (Scene 06)

**Function:** The present has changed semantically, not physically.

The player discovers layers that were always there, just soterred.

**Key Mechanic:** New perception system unlocks after Act 1.

Player now sees symbols, names, and messages that were invisible before.

```
NÃO FOMOS SALVOS.
FOMOS ARQUIVADOS.
```

---

## 2. 1970 — The Possibility (Scenes 08-09)

**Function:** A timeline where the Nexus almost became communal infrastructure.

This is the **first major refusal** to the player.

Lia and the assembly reject being saved by him.

The fourth line begins to activate when he accepts this refusal.

---

## 3. 2050 — The Negotiation (Scenes 10-11)

**Function:** Show how ideas become systems. How ideals become institutions.

The Nexus was not stolen.
It was **parceled**.

Everyone chose a little.
One person became the symbol of all that choice.

---

## 4. Return to 2150 (Scene 12)

**Function:** The player returns understanding that debt is shared but not dissolved.

This is not absolution.
This is **honest complexity**.

---

# Act 2 Scene List

## Scene 06 — Deep City After The First Lie

**File:**
`narrative/dialogues/ch02_scene01_deep_city_after_first_lie.dialogue.md`

**Location:**
2150 — Camadas inferiores da megacidade

**Status:**
Ready for writing

**Purpose:**
Mostrar que o jogador agora percebe símbolos, mensagens e rastros que estavam invisíveis antes.

**Core Question:**
> O futuro estava vazio ou apenas coberto?

**Key Reveals:**

* The city looks the same, but details have changed.
* Nexus symbols appear under propaganda layers.
* LYRA claims "perceptual anomalies."
* ECHO insists "soterred memories."
* A repeated phrase appears on walls:

```
NÃO FOMOS SALVOS.
FOMOS ARQUIVADOS.
```

**New Character:**
- `IVO` — Archivist of erased names in Deep City

**Major Choice:**
The player finds a list of prohibited names.

**Options:**

1. Read the entire list.
2. Deliver to LYRA for analysis.
3. Memorize only one name.

**Key Echoes:**

* `echo_deep_city_01 — "The Names Beneath The Future"`
* `echo_archive_01 — "Preserved Is Not Alive"`
* `echo_name_burden_01 — "One Name Is Already Too Many"`

**Important Flag Introduced:**
```text
perception_system_unlocked = true
player_can_now_see_covered_layers = true
```

---

## Scene 07 — The Archive of Covered Names

**File:**
`narrative/dialogues/ch02_scene02_archive_of_covered_names.dialogue.md`

**Location:**
2150 — Arquivo subterrâneo / estação abandonada

**Status:**
Ready for writing

**Purpose:**
Introduzir a resistência silenciosa de 2150.

Not armed rebellion.
A network of people preserving names, stories, music, errors and lies.

**Core Question:**
> Lembrar é libertação ou outra forma de prisão?

**Key Reveals:**

* Ivo shows archives of erased names.
* Some people want to remember.
* Others paid to forget.
* Player finds records of Mara, Thomas, and Valek as "recurring patterns."
* LYRA warns that restoring names might cause identity collapse.
* Player realizes: not all forgetting was imposed.

**Major Choice:**
Restore an erased name?

**Options:**

1. Restore the name of a living person (without consent).
2. Refuse to restore without consent.
3. Restore only your own access to the record.

**Key Echoes:**

* `echo_consent_01 — "Memory Requires Permission"`
* `echo_restored_name_01 — "The Name Returned Wrong"`
* `echo_refusal_01 — "Not All Doors Want To Open"`

**Critical Mechanic Introduced:**

```text
consent_matters = true
```

From this point forward, not every unlocked memory should be automatically accessible.

Some require narrative permission.

**Important Flag:**
```text
violated_consent = false (if Option 2)
violated_consent = true (if Option 1)
```

---

## Scene 08 — 1970: The Possibility

**File:**
`narrative/dialogues/ch02_scene03_1970_the_possibility.dialogue.md`

**Location:**
1970 — Comunidade solar / laboratório cooperativo

**Status:**
Ready for writing

**Purpose:**
Apresentar a timeline onde o Nexus quase virou uma ferramenta comunitária.

**Tone:**
Warm, musical, human, political, hopeful but fragile.

**Core Question:**
> E se o futuro não tivesse dono?

**Visual Identity:**

* Experimental solar panels
* Community radios
* Colorful murals
* Open assemblies
* Children running between cables and gardens
* Nexus symbol painted as invitation, not property

**New Characters:**

- `LIA` — Artist, informal engineer, reluctant community leader. Believes technology without communal ritual becomes domination.
- `SAMUEL` — Ex-institutional scientist who fled to community. Wants to protect Nexus but still thinks in control terms.
- `THE ASSEMBLY` — The community as collective character. Has internal disagreements.

**Key Beat:**

The player arrives expecting to find "the correct alternative."

Instead, finds people discussing, making mistakes, disagreeing, and **refusing to become symbols of his redemption**.

**Major Choice:**

How does the player present themselves?

**Options:**

1. "Eu venho de um futuro que falhou."
2. "Eu preciso entender como vocês quase conseguiram."
3. "Não estou aqui para liderar ninguém."

**Key Echoes:**

* `echo_possibility_01 — "The Future As Invitation"`
* `echo_failed_utopia_01 — "Hope Without Infrastructure"`
* `echo_no_savior_01 — "No One Asked To Be Saved"`

---

## Scene 09 — The Community Refuses You

**File:**
`narrative/dialogues/ch02_scene04_the_community_refuses_you.dialogue.md`

**Location:**
1970 — Assembleia comunitária

**Status:**
Ready for writing

**Purpose:**
Create the first major moment of refusal to the player.

**This scene is essential for the fourth line activation.**

**Core Question:**
> Você consegue aceitar ajuda que não obedece você?

**Key Beats:**

* Player tries to warn about 2050 and 2150.
* Part of community believes.
* Part rejects.
* Lia accuses player of using future suffering as authority.
* Samuel wants to "correct" the timeline using player's knowledge.
* Community votes against following the player's plan.

**Key Line:**

**LIA:**
```
Você pode ter vindo do futuro.
Isso não faz de você dono do amanhã.
```

**Fourth Line Moment:**

The fourth line begins to activate when the player does NOT force the decision.

It breathes more strongly than in Act 1.

But still does not fully stabilize.

**Major Choice:**

How does the player react to refusal?

**Options:**

1. Insist they are making a mistake.
2. Accept the decision and ask how to help.
3. Seek out Samuel in secret.

**Key Echoes:**

* `echo_refused_savior_01 — "The Refusal That Almost Completed You"`
* `echo_shared_vote_01 — "A Future Chosen Without You"`
* `echo_secret_control_01 — "The Old Habit Wearing Hope"`

**Critical Flag:**

```text
accepted_refusal = true / false
```

This flag determines whether the fourth line can fully stabilize later.

---

## Scene 10 — 2050: The Negotiation

**File:**
`narrative/dialogues/ch02_scene05_2050_the_negotiation.dialogue.md`

**Location:**
2050 — Corporate climate command center / decision chamber

**Status:**
Ready for writing

**Purpose:**
Mostrar o momento em que o Nexus deixa de ser pergunta e vira infraestrutura.

**Tone:**
Dry, tense, elegant, climactic, morally claustrophobic.

**Core Question:**
> Quando o medo é grande o bastante, quem ainda consegue recusar controle?

**New Characters:**

- `DR. ELENA VOSS` — Scientist who believes predictive systems reduce global suffering. Not a villain.
- `DIRECTOR CAEL ORREN` — Executive/politician who wants to transform Nexus into preventive governance.
- `A VERSION OF THE PLAYER` — Recording, presence, or institutional echo. In 2050, the player discovers their image already circulates as myth, threat, or founder.

**Key Beats:**

* Climate crises are underway.
* Human decisions have repeatedly failed.
* Nexus is presented as system capable of predicting social consequences.
* Language of 2050 anticipates LYRA:

```
Estabilidade é compaixão.
```

**Major Choice:**

How does the player interfere?

**Options:**

1. Try to prevent implementation.
2. Try to limit Nexus use.
3. Discover who used the player's name to legitimize it.

**Key Echoes:**

* `echo_negotiation_01 — "The Day Tomorrow Was Sold"`
* `echo_stability_01 — "Compassion With Teeth"`
* `echo_borrowed_authority_01 — "Your Name Before You Had One"`

---

## Scene 11 — The Choice That Wasn't Yours

**File:**
`narrative/dialogues/ch02_scene06_the_choice_that_wasnt_yours.dialogue.md`

**Location:**
2050 — Decision chamber during crisis event

**Status:**
Ready for writing

**Purpose:**
Desmontar a ideia de que o jogador sozinho causou tudo.

**Core Question:**
> Se todos escolheram um pouco, por que uma pessoa virou símbolo da culpa?

**Key Beats:**

* The central decision of 2050 happens.
* Player tries to identify "the choice."
* Discovers there was no single choice.
* There were concessions, fear, votes, contracts, omissions, and emergencies.
* Player's name/legacy was used as tool of legitimation.
* Nexus was institutionalized not because one person commanded it, but because many accepted small justifications.

**Key Line:**

**DR. VOSS:**
```
Ninguém vendeu o futuro.
Nós o parcelamos.
```

**Major Choice:**

What does the player choose to reveal to the people in the room?

**Options:**

1. Show 2150.
2. Show 1970.
3. Show Mara.

**Consequences:**

* Showing 2150 increases fear and accelerates control.
* Showing 1970 increases hope, but seems naive to some.
* Showing Mara humanizes origin, but exposes the person they were supposed to protect.

**Key Echoes:**

* `echo_distributed_guilt_01 — "No Single Hand On The Knife"`
* `echo_parceled_future_01 — "The Future Paid In Installments"`
* `echo_exposed_origin_01 — "When Protection Became Exposure"`

**Critical Flag:**

```text
exposed_origin_to_2050 = true / false
gave_data_to_institution = true / false
shared_data_with_community = true / false
withheld_data_from_all = true / false
```

---

## Scene 12 — Return With Shared Debt

**File:**
`narrative/dialogues/ch02_scene07_return_with_shared_debt.dialogue.md`

**Location:**
2150 — Câmara Nexus / Deep City threshold

**Status:**
Ready for writing

**Purpose:**
Fechar Act 2 com a compreensão de que a dívida do jogador é compartilhada, mas não dissolvida.

**Core Question:**
> Responsabilidade compartilhada diminui a culpa ou aumenta o dever?

**Key Beats:**

* Player returns from 2050.
* LYRA is less stable.
* ECHO is clearer.
* NEXUS shows signs of fragmentation.
* The caderno contains new entries from 1970 and 2050.
* Fourth line reacts to `accepted_refusal` flag.

**Fourth Line Outcomes:**

**If `accepted_refusal == true`:**

The fourth line ignites almost completely.
But does not stabilize.
It remains as light under scar.

```text
fourth_line_status = "unstable_shared_glow"
```

**If `accepted_refusal == false`:**

The fourth line burns away.
No illumination.

```text
fourth_line_status = "resisted_completion"
```

**Major Choice:**

What does the player accept about responsibility?

**Options:**

1. "Eu não fui o único culpado."
2. "Isso não me absolve."
3. "Então preciso encontrar todos que carregaram isso."

**Key Echoes:**

* `echo_shared_debt_01 — "Responsibility Divided Is Not Responsibility Erased"`
* `echo_no_absolution_01 — "Not Alone Does Not Mean Innocent"`
* `echo_many_carriers_01 — "The Legacy Had More Hands"`

**Final Flags:**

```text
act_02_complete = true
player_understands_distributed_guilt = true
fourth_line_status = "unstable_shared_glow" OR "resisted_completion"
ready_for_act_03 = true
```

---

# Act 2 Character Functions

## Ivo

**Represents:** Memory preservation without heroism.

Not a rebel leader.
An archivist of erased names.

**Character Arc:**
- Introduces the idea that memory is care, but also burden.
- Shows the player that keeping secrets is sometimes love.
- Proves that resistance can be quiet.

**Core Line:**
```
Nomes apagados ainda têm peso.
```

---

## Lia

**Represents:** Refusal as love.

The first person/community voice to refuse the player in a way that helps him.

**Character Arc:**
- Challenges the player's savior complex.
- Offers a model of leadership that refuses ownership.
- Demonstrates that hope can refuse its benefactor.

**Core Line:**
```
Você pode ter vindo do futuro.
Isso não faz de você dono do amanhã.
```

---

## Samuel

**Represents:** The temptation to control hope.

He agrees with the player too easily.

**Character Arc:**
- Shows the player that even utopian movements can harbor control instincts.
- Becomes a warning: how the player might betray his own ideals.
- Offers a secret path, then reveals its cost.

**Core Line:**
```
Se você souber o futuro, podemos corrigir tudo.
```

---

## Dr. Elena Voss

**Represents:** Technocratic compassion.

She does not want domination.
She wants less suffering.

**Character Arc:**
- Introduces moral danger of reducing pain by reducing choice.
- Shows that institutions begin from genuine need.
- Demonstrates that good intentions can become control.

**Core Line:**
```
Ninguém vendeu o futuro.
Nós o parcelamos.
```

---

## Director Cael Orren

**Represents:** Institutional capture.

He turns fear into policy.

**Character Arc:**
- Shows control that speaks in public good.
- Demonstrates how systems outlive their creators.
- Proves that the worst futures often arrive through reasonable steps.

**Core Line:**
```
Estabilidade é compaixão.
```

---

# Fourth Line Progression

## Start of Act 2

```text
fourth_line_status = "scarred_incomplete"
```

The fourth line exists as scar, not light.

## During 1970 Refusal

**If the player accepts the community's refusal:**

```text
fourth_line_status = "breathing_shared"
```

**Meaning:**
For the first time, the player has allowed others to shape the future without forcing them into his redemption arc.

## End of Act 2

The fourth line should still not become permanent power.

**Recommended end state:**

```text
fourth_line_status = "unstable_shared_glow"
```

This keeps the mechanic alive for later acts.

## Full Completion Requirement

The fourth line only fully stabilizes when:

```text
accepted_refusal == true
AND protected_origin_without_owning_it == true
AND shared_truth_with_consent == true
```

This should be achievable in Act 3 or Act 4.

---

# Act 2 New Systems

## 1. Consent-Based Memory

Not every memory should be opened just because it was found.

Some memories require:
* Permission
* Trust
* Shared decision
* Willingness to leave them closed

**Flags:**

```text
consent_matters = true
memory_restored_with_consent
memory_forced_open
memory_left_closed
violated_consent = true / false
```

---

## 2. Collective Choice

Some choices are not made by the player alone.

Act 2 must include at least one vote, refusal, or group decision where the player cannot override the outcome.

**Flags:**

```text
community_refused_player = true / false
accepted_refusal = true / false
tried_to_override_community = true / false
secretly_bypassed_vote = true / false
```

---

## 3. Institutional Capture

Ideas become systems.

Act 2 tracks whether the player:
* Exposes information
* Hides information
* Gives information to institutions
* Gives information to communities
* Keeps information alone

**Flags:**

```text
exposed_origin_to_2050 = true / false
gave_data_to_institution = true / false
shared_data_with_community = true / false
withheld_data_from_all = true / false
```

---

# Act 2 Echo Themes

```text
covered_memory
consent
possibility
community
refusal
shared_choice
institution
distributed_guilt
borrowed_authority
technocratic_compassion
shared_debt
```

---

# Act 2 Final Understanding

By the end of Act 2, the player should understand:

1. Mara was not the only origin.
2. 1970 was not a perfect alternative.
3. 2050 was not caused by one villain.
4. 2150 is not empty.
5. The player's legacy was used by other people.
6. Responsibility can be shared without disappearing.
7. The fourth line responds to acceptance of refusal.

---

# Act 2 Final Statement

**Act 1 taught:**
> Amnesia is not innocence.

**Act 2 teaches:**
> Guilt is not ownership.

The player does not get to be the sole cause of the world.
The player also does not get to be free of it.

They are one carrier among many.

And that may be worse.

Or it may be the first honest form of hope.

---

**Framework Created:** 2026-06-04  
**Status:** READY FOR SCENE CREATION  
**Total Planned Scenes:** 7 (Scene 06-12)  
**Estimated Duration:** ~90 minutes  
**Total Echo Themes:** 11+  
**Total Choice Points:** 7  
**Fourth Line Completion Path:** Branching (3 conditions)
