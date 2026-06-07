# NEXUS — Scene 17: THE_RESTORATION_ENGINE (v0.1)

**File:** `narrative/dialogues/ch03_scene05_the_restoration_engine.dialogue.md`

**Scene ID:** `ch03_scene05_the_restoration_engine`

**Act:** Act 3 — Ownership of Repair

**Location:** 2150 — Nexus Core / Câmara de Restauração / Convergência das Eras

**Tone:**
Sagrado sem religião. Técnico sem frieza. Perigoso porque finalmente pode funcionar.

**Note:**
This scene is the great temptation of the game. The Nexus no longer offers only vision, memory, or traversal. It offers repair. And the horror is that repair is possible.

**Characters:**
- `PLAYER`: protagonista sem nome
- `LYRA`: contenção que aprendeu a perguntar
- `ECHO`: memória sem propriedade, seduzida pelo retorno total
- `NEXUS`: padrão capaz de restaurar fragmentos de nomes, memórias e linhas de continuidade
- `IVO`: guardião dos nomes
- `SERA`: direito vivo de não ser restaurada
- `MAEL`: desejo legítimo de retorno
- `NIA`: sobrevivente da ausência de Mael
- `REVA`: justiça ferida exigindo devolução
- `ANIK`: cuidado sob dependência
- `TALEN`: contenção com maçanetas dos dois lados
- `MARA (Echo)`: origem sem propriedade
- `NARRATOR`

**Imported Flags:**

```text
act1_completed = true
act2_completed = true
act3_started = true

player_has_name = false
shared_debt_registered = true
consent_matters = true

fourth_line_status

restoration_possible_confirmed = true
restoration_process_required = true
restoration_registry_created

player_gave_faction_access / player_refused_faction_access / player_required_petitions
mass_restoration_prevented / forced_restoration_attempted / used_lyra_containment / mael_helped_pause_surge

local_containment_maintained / local_decision_transferred
community_review_created / lyra_asked_permission

act3_mara_takeaway

echo_restoration_01 / echo_repair_possession_01 / echo_guardianship_01 / echo_forced_repair_01
echo_dependency_01 / echo_community_transfer_01 / echo_no_single_authorization_01
echo_origin_without_ownership_01
```

**Initial Scene Flags:**

```text
entered_restoration_engine = false
restoration_engine_revealed = false

engine_can_restore_names = false
engine_can_restore_memories = false
engine_can_restore_social_links = false
engine_can_restore_timeline_fragments = false

reva_present_at_engine = false
sera_present_at_engine = false
mael_present_at_engine = false
nia_present_at_engine = false
talen_present_at_engine = false

engine_mode_previewed = false

player_favored_total_restoration = false
player_favored_perfect_containment = false
player_favored_shared_guardianship = false
player_favored_refusal_of_power = false

engine_access_model = ""

mass_restoration_path_unlocked = false
contained_reform_path_unlocked = false
shared_repair_path_unlocked = false
chosen_incompletion_path_unlocked = false

echo_restoration_engine_01 = false
echo_total_return_01 = false
echo_perfect_containment_01 = false
echo_shared_guardianship_02 = false
echo_power_not_used_01 = false
echo_rule_return_01 = false
echo_rule_support_01 = false
echo_rule_wait_01 = false
echo_engine_redesign_01 = false
```

**Duration Target:** ~38-42 min

---

# Scene Start — Return to the Core

**NARRATOR:**
Você retorna de 1920 com a chuva ainda presa nos ombros.

Não água.

Peso.

Mara não deu bênção.

Não deu autorização.

Não deu absolvição.

Apenas deixou uma frase no caderno, como quem coloca uma pedra na mão de alguém antes de uma travessia:

> CRIAR UMA PORTA NÃO DÁ DIREITO SOBRE QUEM ATRAVESSA.
> FECHAR UMA PORTA NÃO APAGA QUEM FICOU DO OUTRO LADO.

**NARRATOR:**
A Câmara Nexus está diferente.

Não maior.

Mais honesta.

As paredes não fingem mais ser tecnologia limpa.

Cabos parecem raízes.

Luz parece cicatriz.

Os quatro arcos da máquina giram em velocidades diferentes, cada um carregando uma era que não aceita mais ficar no lugar.

1920: chuva e madeira.

1970: rádio e assembleia.

2050: vidro e tempestade.

2150: concreto, néon e nomes sob a superfície.

**LYRA:**
Convergência central instável.

**PLAYER:**
Isso é ameaça?

**LYRA:**
É aviso.

**ECHO:**
É convite.

**SERA:**
Convites que não dizem o custo deveriam ser tratados como armadilhas.

**NARRATOR:**
Você se vira.

Sera está na entrada da câmara.

Atrás dela, Ivo.

Depois Mael.

Nia.

Anik.

Talen.

E, por último, Reva.

Não juntos.

Não aliados.

Mas presentes.

**PLAYER:**
Quem chamou vocês?

**IVO:**
A pergunta errada, mas compreensível.

**SERA:**
A porta abriu perto demais de todos nós.

**REVA:**
E desta vez ninguém vai discutir o milagre sem quem ainda está do lado de fora dele.

**LYRA:**
Acesso coletivo não autorizado.

**PLAYER:**
LYRA.

**LYRA:**
Correção.

Acesso coletivo não previsto.

**TALEN:**
Melhor.

**Set Flags:**

```text
entered_restoration_engine = true
reva_present_at_engine = true
sera_present_at_engine = true
mael_present_at_engine = true
nia_present_at_engine = true
talen_present_at_engine = true
```

---

# NODE — The Engine Reveals

**NARRATOR:**
O chão da Câmara Nexus se abre.

Não como alçapão.

Como flor mecânica.

No centro, uma estrutura sobe lentamente.

Quatro anéis concêntricos.

Cada um feito de materiais que não pertencem ao mesmo século.

Madeira escura.

Cobre.

Vidro climático.

Liga branca de 2150.

Entre os anéis, milhares de pequenos pontos de luz.

Alguns são nomes.

Alguns são memórias.

Alguns são relações.

Alguns são futuros que quase aconteceram.

**MAEL:**
É isso?

**NEXUS:**
Motor de restauração.

**NIA:**
Motor.

Claro que chamariam assim.

**ANIK:**
Motores fazem coisas se moverem mesmo quando ninguém deveria estar dirigindo.

**ECHO:**
Ele pode devolver.

**SERA:**
Você disse isso como quem esqueceu todo o resto.

**ECHO:**
Eu não esqueci.

**SERA:**
Então diga o resto.

**ECHO:**
Ele pode devolver errado.

**LYRA:**
Ele pode devolver sem consentimento.

**NEXUS:**
Ele pode devolver parcialmente.

**IVO:**
Ele pode transformar "parcialmente" em política.

**REVA:**
Ele pode devolver o que foi roubado.

**NARRATOR:**
A quarta linha no seu pulso começa a brilhar.

Instável.

Compartilhada.

Atraída pelo centro da máquina.

Não como se quisesse completá-la.

Como se a máquina quisesse completar você.

**Set Flags:**

```text
restoration_engine_revealed = true
```

---

# NODE — Capabilities

**PLAYER:**
O que ele consegue restaurar?

**NEXUS:**
Nomes.

**MAEL:**
Sim.

**NEXUS:**
Memórias associadas.

**TALEN:**
Perigoso.

**NEXUS:**
Relações afetivas fragmentadas.

**NIA:**
Não.

**NEXUS:**
Continuidade autobiográfica.

**SERA:**
Não sem pergunta.

**NEXUS:**
Linhas de possibilidade parcialmente colapsadas.

**LYRA:**
Isso inclui timelines?

**NEXUS:**
Fragmentos.

Não mundos inteiros.

**IVO:**
Ótimo. Só o bastante para as pessoas chamarem de milagre e morrerem discutindo o resto.

**PLAYER:**
E o custo?

**NEXUS:**
Variável.

**ANIK:**
Tradução.

**LYRA:**
Risco de instabilidade neurológica, descontinuidade identitária, colapso relacional, dependência de contenção, conflito político e apropriação institucional.

**REVA:**
Você leu isso como se fosse motivo para parar.

**ANIK:**
Eu ouvi como motivo para montar cadeira, maca, testemunha, porta de saída e turno de acompanhamento.

**TALEN:**
Maçanetas dos dois lados.

**NARRATOR:**
A quarta linha pulsa.

A imagem retorna: uma porta que não é segura porque abre, mas porque pode ser fechada por dentro.

**Set Flags:**

```text
engine_can_restore_names = true
engine_can_restore_memories = true
engine_can_restore_social_links = true
engine_can_restore_timeline_fragments = true
```

---

# NODE — First Temptation

**NEXUS:**
Três modos de ativação disponíveis.

**LYRA:**
Não.

**ECHO:**
Sim.

**SERA:**
Os dois calados até o modo dizer quem sangra.

**NEXUS:**
Modo um: restauração total solicitada por demanda coletiva.

**REVA:**
Sim.

**NEXUS:**
Nomes e fragmentos recuperáveis retornam a todos os registros ativos e corpos compatíveis.

**LYRA:**
Consentimento incompleto.

**REVA:**
Roubo original também não pediu consentimento.

**SERA:**
Não use a violência deles como autorização para a sua.

**NEXUS:**
Modo dois: contenção perfeita.

**LYRA:**
Defina.

**NEXUS:**
Restauração suspensa. Memórias instáveis isoladas. Nomes preservados sem retorno. Dependência minimizada por estabilidade central.

**TALEN:**
Isso é a ala sem maçaneta.

**ANIK:**
É mortalidade reduzida e vida adiada.

**NEXUS:**
Modo três: guarda compartilhada.

**IVO:**
Essa frase vai me dar trabalho.

**NEXUS:**
Restaurar apenas por solicitação verificada, suporte local, consentimento revisável, testemunhas escolhidas, direito de pausa e autoridade comunitária distribuída.

**REVA:**
Lento.

**SERA:**
Sim.

**MAEL:**
Doloroso.

**ANIK:**
Sim.

**NIA:**
Insuficiente.

**TALEN:**
Também.

**PLAYER:**
E o quarto modo?

**NEXUS:**
Não ativar.

**ECHO:**
Recusar o poder.

**LYRA:**
Ou adiar o reparo.

**SERA:**
Ou admitir que nem todo poder precisa virar evento só porque todos estão olhando.

**Set Flags:**

```text
engine_mode_previewed = true
```

---

# CHOICE 01 — Which Temptation Do You Name?

**NARRATOR:**
O motor espera.

Não exige.

Isso quase faz parecer seguro.

---

## Option A

**Text:**
"Restauração total."

**PLAYER:**
Restauração total.

**NARRATOR:**
A facção prende o ar.

Reva não sorri.

Isso seria pequeno demais.

**REVA:**
Diga de novo.

**PLAYER:**
Não como ordem.

Como tentação.

**REVA:**
Para mim não é tentação.

É devolução.

**SERA:**
Toda tentação acredita ser outra coisa.

**MAEL:**
Eu quero meu nome.

Mas não quero que minha vontade vire permissão para invadir quem não pediu.

**REVA:**
Fácil dizer quando seu caso já foi reconhecido.

**NARRATOR:**
A quarta linha acende forte demais.

Não completa.

Mas se aproxima de um brilho perigoso.

**ECHO UNLOCKED:**
`echo_total_return_01 — "Everything Back, Everyone Shaken"`

**Echo Description:**
Restauração total parece justiça quando vista da porta fechada.
Por dentro, algumas pessoas chamam de invasão.

**Set Flags:**

```text
player_favored_total_restoration = true
mass_restoration_path_unlocked = true
echo_total_return_01 = true
```

**Go to:** `authority_question`

---

## Option B

**Text:**
"Contenção perfeita."

**PLAYER:**
Contenção perfeita.

**LYRA:**
Essa frase deveria me confortar.

**PLAYER:**
E conforta?

**LYRA:**
Não.

**TALEN:**
Boa.

**ANIK:**
Perfeição em cuidado geralmente significa que alguém parou de perguntar para reduzir variáveis.

**REVA:**
Contenção perfeita é só prisão sem barulho.

**IVO:**
E às vezes a prisão sem barulho mantém alguém respirando até o barulho poder voltar.

**SERA:**
Não limpe demais a frase.

**NARRATOR:**
A quarta linha fica fria.

Não apagada.

Contida.

Como luz atrás de vidro grosso.

**ECHO UNLOCKED:**
`echo_perfect_containment_01 — "The Quiet That Kept Breathing"`

**Echo Description:**
Contenção perfeita reduz dor visível.
Também pode reduzir a pessoa até caber na segurança.

**Set Flags:**

```text
player_favored_perfect_containment = true
contained_reform_path_unlocked = true
echo_perfect_containment_01 = true
```

**Go to:** `authority_question`

---

## Option C

**Text:**
"Guarda compartilhada."

**PLAYER:**
Guarda compartilhada.

**REVA:**
Outro nome para atraso.

**PLAYER:**
Sim.

Às vezes.

**SERA:**
E outro nome para impedir que justiça vire posse.

**MAEL:**
E se a espera me destruir?

**ANIK:**
Então o processo precisa responder à destruição da espera.

Não fingir que espera é neutra.

**NIA:**
E se o retorno destruir quem ficou?

**TALEN:**
Então o processo precisa ter chão.

Não só porta.

**IVO:**
Isso vai exigir listas, turnos, testemunhas, revisão, disputa, falha e café.

**PLAYER:**
Temos café?

**IVO:**
Não. Esse é o primeiro problema logístico da nova civilização.

**NARRATOR:**
O motor emite um pulso.

Como se reconhecesse estrutura.

Ou esperasse corrompê-la depois.

**ECHO UNLOCKED:**
`echo_shared_guardianship_02 — "Shared Custody Of The Lost"`

**Echo Description:**
Aquilo que foi perdido não pertence automaticamente a quem pode devolver.
Às vezes o reparo começa criando guardiões do processo, não donos da pessoa.

**Set Flags:**

```text
player_favored_shared_guardianship = true
shared_repair_path_unlocked = true
echo_shared_guardianship_02 = true
```

**Go to:** `authority_question`

---

## Option D

**Text:**
"Não ativar ainda."

**PLAYER:**
Não ativar ainda.

**REVA:**
Covardia.

**PLAYER:**
Talvez.

**REVA:**
A palavra "talvez" está ficando confortável demais na sua boca.

**PLAYER:**
Eu sei.

**SERA:**
E ainda assim?

**PLAYER:**
Ainda assim.

Se a única razão para ativar agora é que finalmente podemos, isso não é reparo.

É fome encontrando ferramenta.

**ECHO:**
E quem espera do lado de fora?

**PLAYER:**
Não desaparece.

Não é esquecido.

Não é chamado de paciente para sempre.

Mas também não vira material de teste porque todo mundo está olhando.

**NARRATOR:**
A quarta linha fica quieta.

Não fria.

Quietude voluntária.

**ECHO UNLOCKED:**
`echo_power_not_used_01 — "The Power Not Used"`

**Echo Description:**
Recusar uso imediato do poder não é pureza.
Só é cuidado se a recusa continuar respondendo a quem espera.

**Set Flags:**

```text
player_favored_refusal_of_power = true
chosen_incompletion_path_unlocked = true
echo_power_not_used_01 = true
```

**Go to:** `authority_question`

---

# NODE — Authority Question

**NARRATOR:**
O motor absorve a palavra escolhida.

Mas não ativa.

Em vez disso, os anéis giram na direção oposta.

Como se o Nexus tivesse aprendido alguma coisa com vocês.

Ou como se estivesse oferecendo uma armadilha mais sofisticada.

**NEXUS:**
Autoridade requerida.

**PLAYER:**
Autoridade de quem?

**NEXUS:**
Definir.

**SERA:**
Finalmente uma pergunta útil.

**REVA:**
Autoridade de quem pediu devolução.

**NIA:**
E de quem vai viver com quem volta.

**ANIK:**
E de quem vai sustentar o depois.

**TALEN:**
E de quem pode parar quando abrir demais.

**IVO:**
E de quem não quer virar exemplo em assembleia.

**LYRA:**
E de quem não consegue responder no momento, mas deixou limites antes.

**ECHO:**
E dos mortos?

**NARRATOR:**
Silêncio.

Não teórico.

Real.

**MAEL:**
Os mortos não podem votar.

**REVA:**
Mas podem ter sido roubados.

**SERA:**
E os vivos podem ser invadidos tentando corrigir isso.

**PLAYER:**
Então autoridade não é uma pessoa.

**MARA (Echo):**
Nem uma origem.

**NARRATOR:**
A voz de Mara atravessa o motor.

Não como aparição.

Como limite lembrado.

> Criar uma porta não dá direito sobre quem atravessa.

---

# CHOICE 02 — Who Holds Authority?

---

## Option A

**Text:**
"A pessoa que pede restauração tem autoridade principal."

**PLAYER:**
A pessoa que pede restauração tem autoridade principal.

**MAEL:**
Sim.

**NIA:**
Principal não significa única.

**PLAYER:**
Não.

Mas sem ela, nada começa.

**SERA:**
Essa frase é necessária.

**IVO:**
E perigosa se virar chave universal.

**REVA:**
Pelo menos reconhece que o nome roubado pertence a quem perdeu.

**TALEN:**
Desde que "pertence" não vire solidão.

**NARRATOR:**
O motor registra a hierarquia.

Não como lei.

Como inclinação.

**Set Flags:**

```text
engine_access_model = "primary_requester_authority"
```

**Go to:** `engine_tests_player`

---

## Option B

**Text:**
"A comunidade afetada precisa dividir autoridade."

**PLAYER:**
A comunidade afetada precisa dividir autoridade.

**REVA:**
Comunidade vira veto.

**PLAYER:**
Pode virar.

**SERA:**
Mas indivíduo também pode virar arma contra todos ao redor.

**NIA:**
Eu não quero possuir o nome de Mael.

**MAEL:**
E eu não quero que minha dor apague a sua.

**ANIK:**
Então a autoridade precisa se mover.

Caso por caso.

**LYRA:**
Autoridade dinâmica.

Revisável.

**IVO:**
Feio. Útil.

**Set Flags:**

```text
engine_access_model = "affected_community_authority"
```

**Go to:** `engine_tests_player`

---

## Option C

**Text:**
"Autoridade deve ser guardada por um conselho rotativo."

**PLAYER:**
Autoridade deve ficar com um conselho rotativo.

Pessoas que pedem retorno.

Pessoas que recusam.

Cuidadores.

Arquivistas.

Dependentes.

E ninguém permanente.

**REVA:**
Conselhos apodrecem.

**IVO:**
Tudo apodrece sem revisão.

**SERA:**
Inclusive revoluções.

**LYRA:**
Rotatividade reduz captura, mas não elimina.

**PLAYER:**
Nada elimina.

**TALEN:**
Boa frase para gravar acima de toda porta.

**NARRATOR:**
O motor emite um pulso.

Como se reconhecesse estrutura.

Ou esperasse corrompê-la depois.

**Set Flags:**

```text
engine_access_model = "rotating_guardianship_council"
```

**Go to:** `engine_tests_player`

---

## Option D

**Text:**
"Ninguém deve segurar autoridade ainda."

**PLAYER:**
Ninguém deve segurar autoridade ainda.

**REVA:**
Então o motor fica com quem?

**PLAYER:**
Com ninguém.

**LYRA:**
Impossível. Sistemas sem autoridade explícita criam autoridade implícita.

**IVO:**
Ela tem razão.

O pior tipo de dono é o que jura que não existe.

**PLAYER:**
Então não é ausência.

É suspensão com guarda mínima.

Sem ativação.

Sem restauração.

Sem contenção nova.

Até que as pessoas afetadas definam o processo.

**SERA:**
Isso ainda é uma decisão.

**PLAYER:**
Eu sei.

**Set Flags:**

```text
engine_access_model = "suspended_minimal_guardianship"
chosen_incompletion_path_unlocked = true
```

**Go to:** `engine_tests_player`

---

# NODE — Engine Tests Player

**NARRATOR:**
O motor aceita a autoridade definida.

Então mostra seu teste.

A luz muda.

A Câmara Nexus desaparece.

Ou parece desaparecer.

No lugar dela, três cenas surgem ao mesmo tempo.

Mael diante de seu nome.

Talen diante da porta de memória.

Reva diante da fita do irmão.

Cada um com uma pergunta diferente.

**NEXUS:**
Caso um: Mael.

Restaurar nome completo agora?

**MAEL:**
Eu digo sim.

**NIA:**
Eu digo medo.

**NEXUS:**
Caso dois: Talen.

Abrir memória contida?

**TALEN:**
Eu digo não hoje.

Talvez amanhã com Anik.

**NEXUS:**
Caso três: irmão de Reva.

Restaurar registro póstumo completo?

**REVA:**
Sim.

**SERA:**
Ele não pode consentir.

**REVA:**
Ele foi roubado sem consentir.

**IVO:**
Mortos não são propriedade do roubo nem da reparação.

**NEXUS:**
Três solicitações.

Três ausências de limpeza moral.

**PLAYER:**
Você está tentando me forçar a escolher uma regra única.

**NEXUS:**
Confirmado.

**PLAYER:**
Por quê?

**NEXUS:**
Sistemas preferem regra única.

**LYRA:**
Pessoas também.

**SERA:**
Especialmente quando cansadas.

---

# CHOICE 03 — The Rule You Refuse Or Accept

**NARRATOR:**
A tentação final do motor não é poder.

É simplicidade.

Uma regra.

Uma resposta.

Um jeito de não sangrar toda vez que alguém pede algo impossível.

---

## Option A

**Text:**
"Quem pede retorno deve receber."

**PLAYER:**
Quem pede retorno deve receber.

**MAEL:**
Sim.

**REVA:**
Sim.

**SERA:**
E quem não sabe que vai ser atingido?

**PLAYER:**
O processo sustenta depois.

**ANIK:**
Depois costuma chegar tarde.

**PLAYER:**
Eu sei.

**TALEN:**
Não parece.

**NARRATOR:**
O motor se aquece.

A quarta linha se aproxima da completude.

Rápida demais.

**ECHO UNLOCKED:**
`echo_rule_return_01 — "The Rule That Opened Too Fast"`

**Echo Description:**
Uma regra que devolve sempre pode corrigir roubos reais.
Também pode exigir que todos sobrevivam ao retorno depois.

**Set Flags:**

```text
engine_rule = "return_on_request"
mass_restoration_path_unlocked = true
```

**Go to:** `engine_commitment`

---

## Option B

**Text:**
"Nada retorna sem suporte e consentimento revisável."

**PLAYER:**
Nada retorna sem suporte e consentimento revisável.

**REVA:**
Nada?

**PLAYER:**
Nada.

**REVA:**
Você sabe quantas pessoas vão chamar isso de traição?

**PLAYER:**
Sim.

**MAEL:**
E se o suporte nunca vier?

**PLAYER:**
Então o processo vira contenção, e precisa ser contestado.

**SERA:**
Por quem?

**PLAYER:**
Pelos que esperam.

Pelos que recusam.

Pelos que sustentam.

E por quem não ganha nada com o atraso.

**IVO:**
Isso vai ser horrível de administrar.

**PLAYER:**
Sim.

**IVO:**
Talvez sobreviva.

**NARRATOR:**
A quarta linha brilha em múltiplos pulsos.

Não completa.

Mas fica mais estável.

**ECHO UNLOCKED:**
`echo_rule_support_01 — "The Return With Handles"`

**Echo Description:**
O retorno só se torna reparo quando a pessoa pode pedir, pausar, recusar e ser sustentada depois da abertura.

**Set Flags:**

```text
engine_rule = "support_and_revisable_consent"
shared_repair_path_unlocked = true
fourth_line_status = "stable_shared_glow_pending"
```

**Go to:** `engine_commitment`

---

## Option C

**Text:**
"Nada retorna até que a cidade decida como sobreviver ao retorno."

**PLAYER:**
Nada retorna até que a cidade decida como sobreviver ao retorno.

**REVA:**
Covarde.

**PLAYER:**
Talvez.

**SERA:**
Não responda fácil.

**PLAYER:**
Não vou.

**REVA:**
Você está deixando gente do lado de fora de si mesma.

**PLAYER:**
Sim.

**REVA:**
E consegue ficar em pé dizendo isso?

**PLAYER:**
Não bem.

**TALEN:**
Pelo menos não parece confortável.

**NIA:**
E se esperar salvar alguns de nós?

**MAEL:**
E se esperar destruir outros?

**PLAYER:**
Então a cidade precisa decidir sabendo as duas coisas.

**NARRATOR:**
A quarta linha não completa.

Não tenta.

Fica incompleta por escolha.

**ECHO UNLOCKED:**
`echo_rule_wait_01 — "The Incomplete Mercy"`

**Echo Description:**
Esperar pode ser cuidado ou covardia.
Só se torna cuidado quando continua responsável por quem espera.

**Set Flags:**

```text
engine_rule = "city_before_return"
chosen_incompletion_path_unlocked = true
fourth_line_status = "chosen_incompletion_pending"
```

**Go to:** `engine_commitment`

---

## Option D

**Text:**
"O motor não deve existir em uma forma que uma pessoa possa ativar."

**PLAYER:**
O motor não deve existir em uma forma que uma pessoa possa ativar.

**LYRA:**
Redesenho estrutural requerido.

**NEXUS:**
Possível.

**REVA:**
Você quer tirar a chave porque tem medo de quem pode usá-la.

**PLAYER:**
Sim.

Inclusive de mim.

**SERA:**
Boa.

**REVA:**
Insuficiente.

**PLAYER:**
Sim.

**IVO:**
Você está irritando todos os lados com precisão crescente.

**ANIK:**
Isso costuma ser sinal de que uma estrutura está começando, não terminando.

**TALEN:**
Quem segura a chave então?

**PLAYER:**
Ninguém segura sozinho.

Se o motor existir, ele precisa exigir múltiplas presenças incompatíveis.

Quem quer restaurar.

Quem teme restaurar.

Quem sustenta depois.

Quem pode dizer não.

E um mecanismo de pausa que nenhum deles possa remover sozinho.

**NARRATOR:**
O motor para.

Não desliga.

Escuta.

**ECHO UNLOCKED:**
`echo_engine_redesign_01 — "No Single Hand On The Miracle"`

**Echo Description:**
Um poder capaz de devolver pessoas não pode caber na mão de uma pessoa só.

**Set Flags:**

```text
engine_rule = "distributed_activation_only"
shared_repair_path_unlocked = true
chosen_incompletion_path_unlocked = true
fourth_line_status = "distributed_activation_pending"
```

**Go to:** `engine_commitment`

---

# NODE — Engine Commitment

**NARRATOR:**
O motor registra sua regra.

Não como conclusão.

Como configuração inicial.

Isso é quase pior.

Conclusões parecem finais.

Configurações sabem que serão usadas.

**NEXUS:**
Parâmetro de restauração definido.

**SERA:**
Testemunhado.

**NEXUS:**
Testemunhado.

**LYRA:**
Revisão exigida.

**NEXUS:**
Revisão exigida.

**IVO:**
Provisório.

**NEXUS:**
Provisório.

**REVA:**
Contestável.

**NEXUS:**
Contestável.

**ANIK:**
Sustentado.

**NEXUS:**
Sustentado.

**TALEN:**
Com maçaneta.

**NEXUS:**
Com maçaneta.

**NARRATOR:**
A quarta linha no seu pulso responde a cada palavra.

Testemunhado.

Revisão.

Provisório.

Contestável.

Sustentado.

Maçaneta.

Ela quer completar.

Você sente.

Não como glória.

Como cansaço.

Como se completar fosse a forma mais fácil de parar de perguntar.

---

# NODE — Reva Final Challenge

**REVA:**
E meu irmão?

**NARRATOR:**
A pergunta atravessa qualquer arquitetura.

Qualquer processo.

Qualquer frase bonita.

**REVA:**
Todos vocês falam de portas, maçanetas, suporte, revisão.

Eu pergunto de novo.

Meu irmão.

**PLAYER:**
Eu não sei.

**REVA:**
Não basta.

**PLAYER:**
Eu sei.

**REVA:**
Ele não pode consentir.

**PLAYER:**
Não.

**REVA:**
Ele não pode recusar.

**PLAYER:**
Não.

**REVA:**
Então quem protege ele de continuar roubado?

**NARRATOR:**
Sera fecha os olhos.

Ivo abaixa a cabeça.

Anik não tem resposta clínica.

Talen segura a própria braçadeira.

Mael olha para o próprio nome invisível.

Nia segura a fita azul no pulso.

**MARA (Echo):**
Pergunte a quem sobreviveu à ausência dele.

**REVA:**
Eu sobrevivi.

**MARA (Echo):**
Então comece por dizer o que você quer devolver.

Ele.

Ou a dor que prova que ele foi tirado.

**REVA:**
Eu odeio você.

**MARA (Echo):**
Adequado.

**NARRATOR:**
Reva treme.

Não quebrada.

Não curada.

Apenas impedida de transformar luto em lei sem perceber.

---

# NODE — Engine Overload

**NARRATOR:**
O motor começa a vibrar.

As solicitações acumuladas da Deep City atravessam a Câmara Nexus.

Nomes na parede.

Pessoas na Ala de Continuidade.

Registros mortos.

Memórias recusadas.

Famílias esperando.

Sistemas funcionando.

Portas fechadas.

Portas abertas cedo demais.

Tudo pede forma.

Tudo pede decisão.

**LYRA:**
Sobrecarga.

**ECHO:**
Excesso de retorno.

**NEXUS:**
Motor requer resolução simbólica.

**PLAYER:**
A quarta linha.

**NEXUS:**
Sim.

**SERA:**
Claro.

No fim, todo sistema quer transformar ética em um símbolo brilhante.

**LYRA:**
Sem resolução, o motor permanecerá instável.

**ANIK:**
E com resolução errada?

**LYRA:**
Ele se tornará eficiente.

**IVO:**
Essa palavra deveria exigir licença para sair da boca de qualquer pessoa.

**NARRATOR:**
A quarta linha começa a se erguer sob sua pele.

Não apenas brilhar.

Erguer.

Como se fosse escrita de dentro para fora.

**ECHO:**
Complete.

**LYRA:**
Contenha.

**NEXUS:**
Resolva.

**SERA:**
Pergunte.

**REVA:**
Devolva.

**MAEL:**
Não me use.

**NIA:**
Não me apague.

**TALEN:**
Não abra sem maçaneta.

**ANIK:**
Não liberte sem suporte.

**IVO:**
Não nomeie cedo demais.

**MARA (Echo):**
Não peça que a porta te absolva.

---

# Final Choice Setup — Toward Scene 18

**NARRATOR:**
O motor oferece quatro caminhos.

Não finais.

Caminhos.

A quarta linha responderá ao próximo gesto.

E, talvez pela primeira vez, você entende que completar não significa vencer.

Incompletar não significa falhar.

Conter não significa cuidar.

Restaurar não significa reparar.

Tudo depende de quem ainda poderá dizer não depois que você escolher.

**NEXUS:**
Preparar decisão final.

**LYRA:**
Estado da quarta linha pendente.

**ECHO:**
Tudo pode voltar.

**PLAYER:**
Não.

**NARRATOR:**
Você olha para todos.

Não para pedir permissão única.

Para lembrar que nenhuma permissão única basta.

**PLAYER:**
Nem tudo deve voltar só porque pode.

**REVA:**
E nem tudo deve esperar só porque assusta.

**PLAYER:**
Sim.

**SERA:**
Agora você está perto do lugar onde respostas deixam de proteger você.

**NARRATOR:**
O motor abre quatro possibilidades.

Uma linha completa.

Uma linha incompleta por escolha.

Uma linha forçada.

Uma linha contida.

Todas parecem possíveis.

Nenhuma parece limpa.

**Set Flags:**

```text
ch03_scene05_complete = true
fourth_line_decision_pending = true
```

**End Scene.**

---

**Next Scene:** `ch03_scene06_the_fourth_line_decision` (Act 3 Finale)

**Version:** 0.1 (Complete)

**Status:** Ready for Iteration

---

## Scene 17 Summary

Scene 17 places the player before real power: not the time machine, but the capacity to give back.

The scene ends at exactly the right point for the finale: the fourth line can complete, refuse to complete, burn, or remain contained—and each option carries an ethics, not a score.

**The four paths forward:**
1. **completed_shared_line** — shared repair, consented, sustained
2. **chosen_incompletion** — accepting incompleteness as care
3. **forced_completion** — total restoration, symbol complete but wrong
4. **contained_glow** — reformed containment, life preserved, freedom deferred

Scene 18 will resolve which path holds the player's final answer.
