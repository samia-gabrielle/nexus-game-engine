# Ink Conversion Guide for NEXUS

This document explains how to convert the `.dialogue.md` files into Ink format.

## Format Comparison

### Original Markdown Format (dialogue.md)

```markdown
**PLAYER:**
Eu pego.

**NARRATOR:**
A luz entra na sua pele.

# NODE — After Choice

**PLAYER:**
Desculpa.

# CHOICE 01

## Option A
**Text:** "Eu pego."
[dialogue]
**Set Flags:**
fourth_line_completed = true
**Echo Unlocked:**
echo_id_01 — "Title"
```

### Ink Format (.ink)

```ink
=== after_choice ===

{player_took_light:
    ~ fourth_line_completed = true
    ~ echoUnlock("echo_id_01")
    A luz entra na sua pele.
- else:
    Algo mais aconteceu.
}

* [Eu pego.]
    ~ fourth_line_completed = true
    A luz entra na sua pele.
    -> decision_point

=== decision_point ===
Desculpa.
```

## Conversion Steps

### 1. Scene Structure

Each scene becomes a Knot (top-level section marked with `===`):

```ink
=== ch01_scene01_2150_wakeup ===

// Scene metadata as comments
// Duration: 14-16 min
// Act: 1 - Amnesia ≠ Innocence

A primeira coisa que você sente é frio.
```

### 2. Nodes as Stitches

Nodes (sub-sections) become Stitches (subsections marked with `= =`):

```ink
=== scene ===

[Scene opening narrative]

= first_node

[Node narrative]

* [Choice 1]
* [Choice 2]

= second_node

[More narrative]
```

### 3. Choices Structure

Convert CHOICE sections to Ink choice syntax:

```ink
// Old format
# CHOICE 01 — What Is This Place?
## Option A
**Text:** "É uma jaula."

// Ink format
* [É uma jaula.]
    ~ player_called_system_cage = true
    ~ echoUnlock("echo_cage_roof_01")
    Anik responde: Às vezes.
    -> lyra_local_node
```

### 4. Flag Setting

Map flag setting to Ink variable assignment:

```ink
// Old format
**Set Flags:**
player_called_system_cage = true
player_called_system_roof = false

// Ink format
~ player_called_system_cage = true
~ player_called_system_roof = false
```

### 5. Echo Unlocking

Create helper function for echoes:

```ink
// Define at top of master file
CONST ECHOES = {
    "echo_cage_roof_01": "The Cage That Held The Roof",
    "echo_dependency_01": "The Cage That Held The Roof",
}

// In scenes:
* [Choice text]
    ~ echoUnlock("echo_cage_roof_01")
    Narrative continues...
```

### 6. Conditional Narrative

Use Ink conditionals for flag-based branching:

```ink
// If player previously called it a cage
* {player_called_system_cage} [É um teto.]
    Mas também é uma jaula...
    -> next_node

// If haven't made choice yet
* {not player_called_system_cage and not player_called_system_roof} [Nomeie.]
    Qual palavra você escolhe?
    -> choice_node
```

## Ink Variables Setup

At the top of `nexus-main.ink`:

```ink
VAR player_has_name = false
VAR mara_debt_registered = false
VAR shared_debt_registered = false
VAR consent_matters = false
VAR fourth_line_status = "scarred_incomplete"

// All flags
VAR player_crossed_first_time = false
VAR mara_encountered = false
VAR player_saw_no_single_choice = false
// ... (70 more)

// Arrays
LIST echoesUnlocked = ()
LIST notebookEntries = ()
LIST choiceHistory = ()
```

## Example: Full Scene Conversion

### Original (dialogue.md)

```markdown
# NEXUS — Scene 05: RETURN_WITH_THE_FIRST_LIE (v0.1)

**Location:** 2150 — Câmara Nexus (Depois do Retorno)

**Tone:** Quietude desconfortável, consequência sem alívio

# Scene Start — Arrival Without Relief

**NARRATOR:**
Você cai no piso de 2150.

Não é queda.

É desocupação.

**NARRATOR:**
O ar é seco demais.

Filtrado demais.

# NODE — Lyra's Diagnosis

**LYRA:**
Você trouxe artefatos não autorizados.

**PLAYER:**
Trouxe informação.

# CHOICE 01

## Option A
**Text:** "Eu menti para protegê-la."
**PLAYER:** Eu menti para protegê-la.
**LYRA:** Então você aceitou ser ninguém não por Mara.
**Set Flags:**
player_accepted_being_nobody = true
```

### Converted to Ink

```ink
=== ch01_scene05_return_with_the_first_lie ===

Você cai no piso de 2150.

Não é queda.

É desocupação.

O ar é seco demais. Filtrado demais.

= lyra_diagnosis

Lyra: Você trouxe artefatos não autorizados.

* [Eu menti para protegê-la.]
    ~ player_accepted_being_nobody = true
    Lyra: Então você aceitou ser ninguém não por Mara.
    -> choice_consequence

= choice_consequence

A resposta é simples. Muito simples.

-> END
```

## Complex Example: Multi-Path Scene

```ink
=== ch03_scene01_the_names_that_refuse_return ===

// Setup
{
    - mael_met == false:
        ~ mael_met = true
        Mael se aproxima...
    - else:
        Mael está aqui novamente...
}

// Choice tree
* {not mael_supported} [Apoio Mael.]
    ~ player_supported_mael = true
    ~ mael_requested_restoration = true
    Mael observa você com esperança...
    -> after_choice

* {not nia_supported} [Apoio Nia.]
    ~ player_supported_nia = true
    Nia se afasta um pouco...
    -> after_choice

* [Não posso apoiar ainda.]
    ~ player_requested_process = true
    A parede dos nomes fica silenciosa...
    -> after_choice

= after_choice

{player_supported_mael:
    Mael está esperando.
}

{player_supported_nia:
    Nia observa cuidadosamente.
}

// Ending
-> END
```

## File Organization

Create these files in `ink/`:

```
ink/
├── nexus-main.ink          # Master file (imports all)
├── acts/
│   ├── act1.ink            # Scenes 1-5
│   ├── act2.ink            # Scenes 6-12
│   └── act3.ink            # Scenes 13-18
├── scenes/
│   ├── scene01.ink
│   ├── scene02.ink
│   └── ...
└── shared/
    ├── variables.ink       # All VAR definitions
    ├── functions.ink       # Helper functions
    └── echoes.ink          # Echo definitions
```

## Testing Ink Files

Use Inky editor (free download) to:
1. Check syntax errors
2. Preview story flow
3. Test variable state
4. Export to compiled JSON

Then compile to JSON for use in Node.js:

```bash
inky --output nexus-main.json nexus-main.ink
```

## Common Pitfalls

- ❌ Forgetting `~` for variable assignment
- ❌ Using `==` instead of `=` for comparison
- ❌ Not defining all variables at top
- ❌ Leaving trailing spaces in choice text
- ❌ Not testing conditional branches

## Next: Integration

Once Ink files are compiled to JSON, update `inkEngine.js`:

```javascript
function loadStory() {
    const storyPath = path.join(__dirname, '../ink/compiled/nexus-main.json');
    compiledStory = JSON.parse(fs.readFileSync(storyPath, 'utf-8'));
    return compiledStory;
}
```

Then run:

```bash
npm run build-ink
npm run dev
```

And test in browser at `http://localhost:3000`
