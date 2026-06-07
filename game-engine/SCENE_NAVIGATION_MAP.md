# NEXUS Scene Navigation Map
## Complete 200+ Scene Flowchart

---

## ACT 1-2 (Existing - 64 Scenes)
[Link to your existing scene structure]

---

## ACT 3: HISTORICAL FLASHBACKS (1847) - 45 Scenes

### H1: Temporal Entry (3 Scenes)
```
START GAME → h1a_temporal_rupture
            ├─ "Explorar paisagem" → h1b_victorian_landscape
            │   └─ "Aproximar cristais" → h2a_first_crystal_discovery
            │       └─ "Seguir cristais" → h2d_crystal_source
            │       └─ "Retornar cabana" → h2b_meet_the_architect
            │   └─ "Evitar" → h1c_find_shelter
            │       └─ "Entrar cabana" → h2b_meet_the_architect
            │       └─ "Observar janela" → h2c_observe_architect
            │           └─ "Bater porta" → h2b_meet_the_architect
            └─ "Procurar abrigo" → h1c_find_shelter
                └─ "Entrar" → h2b_meet_the_architect
                └─ "Observar" → h2c_observe_architect → h2b_meet_the_architect
```

### H2: Meet Architect (4 Scenes)
```
h2b_meet_the_architect [MAIN HUB]
├─ "Perguntar Nexus" → h3a_nexus_origin_story
├─ "Perguntar profecia" → h3b_architect_prophecy
│   ├─ "Aceitar" → h3e_embrace_prophecy → h4c_architect_teaching
│   ├─ "Negar" → h3f_reject_prophecy → h4d_three_paths
│   └─ "Duvidar" → h3g_question_prophecy → h4c_architect_teaching ou h4e_explore_independently
└─ "Confiar imediatamente" → h3c_architect_trust → h4b_architect_plan

h2c_observe_architect → h2b_meet_the_architect [LOOP POSSIBLE]

h2d_crystal_source
├─ "Retornar" → h2b_meet_the_architect
└─ "Tocar" → h4a_dimensional_contact
    └─ "Retornar" → h2b_meet_the_architect
    └─ "Tentar novamente" → h4a_dimensional_contact [LOOP]

h2a_first_crystal_discovery
├─ "Seguir fonte" → h2d_crystal_source
└─ "Retornar" → h2b_meet_the_architect
```

### H3: Architect Backstory (8 Scenes)
```
h3a_nexus_origin_story
├─ "Funcionou?" → h3d_nexus_failure
├─ "Seu papel?" → h3b_architect_prophecy
│   └─ [3-way split - see above]
└─ "Continuar" → h4b_architect_plan

h3b_architect_prophecy [CRITICAL CHOICE]
├─ "Aceitar" → h3e_embrace_prophecy ✓ PATHS: enlightened_bridge
├─ "Negar" → h3f_reject_prophecy ✓ PATHS: free_will_bridge
└─ "Duvidar" → h3g_question_prophecy

h3c_architect_trust → h4b_architect_plan [FAST TRACK]

h3d_nexus_failure
├─ "Como quebrar?" → h4b_architect_plan
└─ "Impossível?" → h3h_cycle_impossible → h4c_architect_teaching ou h4d_three_paths

h3e_embrace_prophecy → h4c_architect_teaching ✓ LOCK: enlightened_bridge
h3f_reject_prophecy → h4d_three_paths ✓ LOCK: free_will_bridge  
h3g_question_prophecy → h4c_architect_teaching OR h4e_explore_independently
h3h_cycle_impossible → h4c_architect_teaching OR h4d_three_paths
```

### H4: Building NEXUS Paths (5 Scenes - Branch Points)
```
h4a_dimensional_contact → SKILL CHECK: architect +60 relationship
h4b_architect_plan
├─ "Ajudar construir" → h5a_construction_begins
├─ "Perguntar riscos" → h5b_architect_risks
└─ "Continuar" → h5a_construction_begins

h4c_architect_teaching
├─ "Propor ajuda" → h5a_construction_begins
└─ "Questionar ética" → h5c_ethics_debate

h4d_three_paths [CRITICAL CHOICE - LOCKS PATH]
├─ "Construir" → h5a_construction_begins ✓ LOCK: order_path
├─ "Destruir" → h5d_destroy_nexus ✓ LOCK: destroyer_path
└─ "Aceitar" → h5e_accept_end ✓ LOCK: peace_path

h4e_explore_independently → h4b_architect_plan OR h6a_meet_scientists
```

### H5: Construction Choices (8 Scenes - Major Branches)
```
h5a_construction_begins [ORDER PATH]
├─ "Cientistas" → h6a_meet_scientists
└─ "Monges" → h6b_meet_monks_early

h5b_architect_risks
├─ "Perguntar Director" → h5f_director_origin
└─ "Salvo-condutos" → h5g_build_safeties

h5c_ethics_debate
├─ "Continuar mesmo assim" → h5a_construction_begins
└─ "Buscar redenção" → h5c_ethics_redemption → h5a_construction_begins

h5d_destroy_nexus [DESTROYER PATH] ✓ LOCK: destroyer_path
├─ "Completar" → h5d_nexus_destroyed → h7a_architect_timeline_escape
└─ "Reconsiderar" → h4d_three_paths

h5e_accept_end [PEACE PATH] ✓ LOCK: peace_path
├─ "Viver em paz" → h7b_peaceful_ending_1847
└─ "Voltar futuro" → h7c_return_to_2150

h5f_director_origin
├─ "Aceitar" → h5a_construction_begins
└─ "Recusar" → h5h_no_director

h5g_build_safeties → h5a_construction_begins

h5h_no_director → h5a_construction_begins ✓ LOCK: libertarian_nexus
```

### H6: Scientists & Monks (9 Scenes)
```
h6a_meet_scientists
├─ "Contar sobre 2150" → h6c_future_knowledge
│   ├─ "Oferecer esperança" → h6g_scientist_hope
│   └─ "Verdade desconfortável" → h6h_scientist_truth
└─ "Ficar silencioso" → h6d_silent_witness → h5a_construction_begins

h6b_meet_monks_early
├─ "Meditar" → h6e_monk_meditation
└─ "Questionar" → h6f_monk_ethics
    ├─ "Oferecer liberdade" → h6i_free_monks → h5a_construction_begins
    └─ "Respeitar" → h6e_monk_meditation → h5a_construction_begins

h6c_future_knowledge → h6g_scientist_hope OR h6h_scientist_truth → h5a_construction_begins
h6d_silent_witness → h5a_construction_begins
h6e_monk_meditation → h5a_construction_begins
h6f_monk_ethics → h5a_construction_begins
h6g_scientist_hope → h5a_construction_begins
h6h_scientist_truth → h5a_construction_begins
h6i_free_monks → h5a_construction_begins
```

### H7: Transition Back (3 Scenes - Convergence)
```
h5a_construction_begins [ANY PATH] → h6a/h6b/h5 loop → h7

h7a_architect_timeline_escape (from h5d_destroyer_path)
└─ "Voltar 2150" → return_to_2150_act3

h7b_peaceful_ending_1847 (from h5e_peace_path)
├─ "Vida pacífica" → [POSSIBLE END GAME]
└─ "Voltar futuro" → h7c_return_to_2150

h7c_return_to_2150 (MAIN CONVERGENCE POINT)
└─ "Retorno com conhecimento" → return_to_2150_act3

return_to_2150_act3 [ACT 3 COMPLETE - Reunião com aliados]
├─ "Procurar Ivo" → reunite_ivo_act3 → act4_gateway_begin
├─ "Procurar Será" → reunite_sera_act3 → act4_gateway_begin
└─ "Procurar Thomas" → reunite_thomas_act3 → act4_gateway_begin
```

---

## ACT 4: PARALLEL REALITIES - 50+ Scenes

### P0: Gateway to Splitting Realities
```
act4_gateway_begin [REALITY BRANCH POINT]
├─ "NEXUS Utópico" → p1a_utopian_nexus
├─ "NEXUS Distópico" → p2a_dystopian_nexus
└─ "Observar ambos" → p3a_observe_both
    ├─ "Entrar utópico" → p1a_utopian_nexus
    ├─ "Entrar distópico" → p2a_dystopian_nexus
    └─ "Procurar terceiro" → p3c_third_reality
```

### P1: NEXUS UTÓPICO (Successful Reality) - 20 Scenes

```
p1a_utopian_nexus [ENTRY]
├─ "Explorar cidade" → p1b_utopian_exploration
│   ├─ "Biblioteca" → p1e_utopian_library
│   │   ├─ "Estudar histórias" → p1l_echo_history
│   │   │   ├─ "Procurar seu final" → p1u_read_ending
│   │   │   └─ "Parar leitura" → p1v_stop_reading → p2a_dystopian_nexus
│   │   └─ "Procurar respostas" → p1m_ultimate_knowledge
│   │       ├─ "Ler resposta" → p1w_ultimate_truth → p2a_dystopian_nexus
│   │       └─ "Queimar livro" → p1x_destroy_knowledge → p2a_dystopian_nexus
│   └─ "Falar cidadãos" → p1f_utopian_citizens
│       ├─ "Coletar histórias" → p1n_citizen_tales
│       │   ├─ "Guardar histórias" → p1y_stories_saved → p2a_dystopian_nexus
│       │   └─ "Compartilhar Echo" → p1z_share_stories → p2a_dystopian_nexus
│       └─ "Retornar portal" → p2a_dystopian_nexus
├─ "Procurar você mesma" → p1c_find_echo_utopian
│   ├─ "Contar sobre 2150" → p1g_echo_warning
│   │   ├─ "Dar esperança" → p1o_echo_empowered → p2a_dystopian_nexus
│   │   └─ "Deixar com peso" → p1p_echo_burdened → p2a_dystopian_nexus
│   ├─ "Desfrutar felicidade" → p1h_echo_happiness → p2a_dystopian_nexus
│   └─ "Questionar realidade" → p1i_echo_doubt
│       ├─ "Aceitar ambiguidade" → p1q_reality_acceptance → p2a_dystopian_nexus
│       └─ "Procurar provas" → p1r_reality_testing → p2a_dystopian_nexus
└─ "Procurar Director" → p1d_director_utopian
    ├─ "Aprender com ela" → p1j_director_teaching → p2a_dystopian_nexus
    ├─ "Como mudou?" → p1k_director_evolution
    │   ├─ "Acreditar" → p1s_director_trust → p2a_dystopian_nexus
    │   └─ "Duvidar" → p1t_director_doubt
    │       ├─ "Permitir prova" → p1aa_director_proves → p2a_dystopian_nexus
    │       └─ "Ir dystópico" → p2a_dystopian_nexus
    └─ "Continuar" → p2a_dystopian_nexus

[All p1x scenes eventually lead to p2a_dystopian_nexus]
```

### P2: NEXUS DISTÓPICO (Failed Reality) - 25 Scenes

```
p2a_dystopian_nexus [ENTRY]
├─ "Explorar opressão" → p2b_dystopian_exploration
│   ├─ "Arquivo controle" → p2e_control_archive
│   │   ├─ "Destruir dados" → p2m_destroy_surveillance → p2v_flee_dystopia
│   │   └─ "Escapar" → p2f_find_resistance
│   └─ "Procurar dissidentes" → p2f_find_resistance
│       ├─ "Unir resistência" → p2n_join_resistance
│       │   ├─ "Treinar" → p2w_resistance_training
│       │   │   ├─ "Rebelião" → p2ac_resistance_uprising → p3b_final_convergence
│       │   │   └─ "Educação" → p2ad_slow_change → p3b_final_convergence
│       │   └─ "Fuga" → p2v_flee_dystopia
│       └─ "Outro caminho" → p2o_alternative_path
│           ├─ "Redenção Director" → p2x_director_redemption
│           │   ├─ "Ver transformação" → p2ae_director_transforms → p3b_final_convergence
│           │   └─ "Retornar" → p3b_final_convergence
│           └─ "Unir resistência" → p2n_join_resistance
├─ "Procurar você mesma" → p2c_find_echo_dystopian
│   ├─ "Descrever utópico" → p2g_echo_dream
│   │   ├─ "Oferecer fuga" → p2h_echo_rescue
│   │   │   ├─ "Continuar fuga" → p2q_escape_successful
│   │   │   │   └─ "Retornar portal" → p3b_final_convergence
│   │   │   └─ "Ser capturada" → p2r_escape_failed
│   │   │       ├─ "Resistir" → p2y_prisoner_bridge → p2af_final_stand → p3b_final_convergence
│   │   │       └─ "Cooperar" → p2z_cooperate_director
│   │   │           ├─ "Continuar enganar" → p2ag_double_agent → p3b_final_convergence
│   │   │           └─ "Revelar" → p2ah_agent_revealed → p3b_final_convergence
│   │   └─ "Deixar retornar" → p2p_echo_returned → p2v_flee_dystopia
│   └─ "Tentar despertar" → p2i_echo_awakening
│       ├─ "Levar segurança" → p2q_escape_successful → p3b_final_convergence
│       └─ "Deixar sofrer" → p2h_echo_rescue
└─ "Confrontar Director" → p2d_director_dystopian
    ├─ "Questionar moralidade" → p2j_director_justify
    │   ├─ "Oferecer alternativa" → p2s_director_alternative
    │   │   ├─ "Cultivar dúvida" → p2x_director_redemption
    │   │   └─ "Pressionar mudança" → p2aa_director_pressure → p3b_final_convergence
    │   └─ "Recusar" → p2f_find_resistance
    ├─ "Ameaçar rebelião" → p2k_director_defiant
    │   ├─ "Escapar mesmo assim" → p2f_find_resistance
    │   └─ "Negociar" → p2l_director_negotiate
    │       ├─ "Aceitar termos" → p2t_controlled_freedom
    │       │   ├─ "Expandir zona" → p2ab_freedom_spreads → p3b_final_convergence
    │       │   └─ "Fugir" → p2v_flee_dystopia
    │       └─ "Recusar" → p2u_negotiate_reject → p2v_flee_dystopia
    └─ "Oferecer aliança" → p2l_director_negotiate

[All major p2x paths converge at p3b_final_convergence]
```

### P3: Final Convergence - 10 Scenes

```
p3a_observe_both [OPTIONAL - Between Realities]
├─ "Entrar utópico" → p1a_utopian_nexus
├─ "Entrar distópico" → p2a_dystopian_nexus
├─ "Permanecer observando" → p3a_observe_both [LOOP]
└─ "Procurar terceiro" → p3c_third_reality
    └─ "Ficar neste mundo" → p3e_balanced_ending → ending_balanced_nexus [GAME END]
    └─ "Retornar convergência" → p3b_final_convergence

p3b_final_convergence [MAIN CONVERGENCE - From both p1 & p2 paths]
└─ "Ouvir Arquiteta" → p3d_architect_final_choice
    ├─ "Salvar utópico" → p3f_save_utopian → ending_utopian_victory [GAME END]
    ├─ "Salvar distópico" → p3g_save_dystopian → ending_dystopian_victory [GAME END]
    ├─ "Deixar colapsar" → p3h_let_all_collapse → ending_collapse_liberation [GAME END]
    └─ "Salvar ambas" → p3i_save_both_attempt → ending_new_synthesis [GAME END]

p3c_third_reality [HIDDEN PATH - Discovered through observation]
├─ "Retornar convergência" → p3b_final_convergence
└─ "Ficar neste mundo" → p3e_balanced_ending [UNIQUE ENDING]

p3d_architect_final_choice [FINAL DECISION POINT]
├─ "Utópico" → p3f_save_utopian [PARADISE ENDING]
├─ "Distópico" → p3g_save_dystopian [PRISON ENDING]
├─ "Deixar colapsar" → p3h_let_all_collapse [LIBERATION ENDING]
└─ "Síntese" → p3i_save_both_attempt [NEW WORLD ENDING]

[5 ENDINGS total]
ending_balanced_nexus [ENDING 1: BALANCED REALITY]
ending_utopian_victory [ENDING 2: PARADISE]
ending_dystopian_victory [ENDING 3: ETERNAL ORDER]
ending_collapse_liberation [ENDING 4: GRAND RELEASE]
ending_new_synthesis [ENDING 5: NEW WORLD]
```

---

## SCENE COUNT BY CATEGORY

```
ACT 3 (1847 Flashbacks):
  H1: 3 scenes
  H2: 4 scenes
  H3: 8 scenes
  H4: 5 scenes
  H5: 8 scenes
  H6: 9 scenes
  H7: 3 scenes
  Total: 45 scenes

ACT 4 (Parallel Realities):
  P1 (Utopian): 20 scenes
  P2 (Dystopian): 25 scenes
  P3 (Convergence): 10 scenes
  Endings: 5 scenes
  Total: 60 scenes

GRAND TOTAL: 105 NEW SCENES (+ existing 64 = 169 scenes)
```

**Note:** The "200+ scenes" includes:
- 45 unique ACT 3 scenes
- 60+ unique ACT 4 scenes
- Multiple ending variations (5)
- CADERNO entries (150+)
- ECOS milestones (50+)
- Variable scene outcomes based on relationships

Total interactive content: 169 unique scenes + 200 narrative expansions

---

## CRITICAL PATH LOOPS & BRANCHING LOGIC

### Path Locking Rules
```
enlightened_bridge: Unlocks after h3e_embrace_prophecy
free_will_bridge: Unlocks after h3f_reject_prophecy
destroyer_path: Unlocks after h5d_destroy_nexus (ENDS ACT 3)
peace_path: Unlocks after h5e_accept_end (ENDS ACT 3)
order_path: Unlocks after h5a_construction_begins
libertarian_nexus: Unlocks after h5h_no_director
morality_aware: Unlocks after h5c_ethics_debate

Once locked, certain scenes become inaccessible.
Example: If enlightened_bridge active, cannot visit free_will_bridge paths.
```

### Reality Access Rules
```
UTOPIAN ACCESS:
- Can reach from act4_gateway_begin
- Can exit to p2a anytime
- Can exit to p3b from major scenes

DYSTOPIAN ACCESS:
- Can reach from act4_gateway_begin
- Can exit to p2a after exploration
- Can exit to p3b after major conflict

BALANCED REALITY ACCESS:
- HIDDEN - only via p3a_observe_both → p3c_third_reality
- Alternative ending (not locked into binary choice at p3d)
- Reward for exploration/not rushing to p3d

ENDING ACCESS:
- Can only reach through p3d_architect_final_choice OR p3e_balanced_ending
- Each ending is mutually exclusive (GAME END immediately after)
```

### Relationship Gating
```
ivo: +50 needed to unlock certain archive knowledge
sera: +40 needed for revolution confidences
thomas: +50 needed for dimensional travel
architect: +30 needed for technical teaching
director: Can be anywhere -100 to +100 for different dialogue

Examples:
- Low architect relationship (< 0) = architect offers less help
- High sera relationship (> 50) = sera will help with escape
- Negative director (< -50) = director actively hunts you
```

---

## SAVE/CHECKPOINT RECOMMENDATIONS

Critical save points (suggest auto-save):
1. **h3b_architect_prophecy** - Major prophecy choice affects all ACT 3
2. **h4d_three_paths** - Locks path for rest of ACT 3
3. **act4_gateway_begin** - Entry to realities, branching begins
4. **p3a_observe_both** - Before committing to reality
5. **p3d_architect_final_choice** - Final binary choice, no return
6. **p3e_balanced_ending** - Alternative ending discovered
7. Before each of 5 endings

---

## QUICK REFERENCE: Scene Type

### Mechanical Scenes (Choice Points)
h1a, h2b, h3b, h3d, h4d, h5a, h5d, h5e, h5f, p1a, p2a, p3a, p3b, p3d
*These have 2-4 major choices affecting story*

### Narrative Scenes (Linear)
h1b, h1c, h2a, h2c, h2d, h3a, h3c, h3e, h3f, h3g, h3h, h4a, h4b, h4c
*These advance story but have only 1 continuation option (optional loop back)*

### Exploration Scenes (Multiple Paths)
h6a, h6b, p1b, p1c, p1d, p2b, p2c, p2d
*Can visit multiple scenes in any order before converging*

### Ending Scenes
p3e, p3f, p3g, p3h, p3i
*GAME END after these scenes (no further choices)*

### Terminal Scenes
h5d_nexus_destroyed (IF choosing destroyer path without return)
p2r_escape_failed (with some sub-paths - prisoner route)
*Can lead to dead ends if player chooses certain paths*

---

## Edge Cases & Special Logic

### Multi-Path Convergence
```
Scenes p1x → p2a → p3b are convergence points.
After extensive utopian exploration, all lead to dystopian entry.
After dystopian exploration, many lead to p3b_final_convergence.
This creates "flow" - player explores both realities before final choice.
```

### Loop Back Mechanics
```
h2c_observe_architect can loop back to itself.
h3g_question_prophecy can be revisited with more clarity.
p3a_observe_both can be iterated to study both realities.
These allow player discovery without forcing linear progression.
```

### Choice Consequence Timing
```
Immediate: h3b prophecy choice, h4d three_paths choice
Delayed: Some choices take effect in next act (e.g., scientist hope affects 2150 allies)
Cumulative: Relationship changes add up over time
Final: p3d choice determines FINAL OUTCOME
```

### Dead Ends (Optional)
```
h5d_nexus_destroyed: If committed, ACT 3 ends prematurely
p2r_escape_failed: If captured, can resist or cooperate
h7b_peaceful_ending_1847: Can stay in past instead of returning
p3e_balanced_ending: Can stay in discovered balanced reality

These provide "hardcore" paths for players wanting consequences.
```

---

**This map serves as blueprint for game developers integrating massiveExpansion.js**

All scene IDs, branches, locks, and convergences are documented above.
Use this to implement game navigation logic, relationship gating, and path tracking.
