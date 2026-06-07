# NEXUS — Scene 07: ARCHIVE_OF_COVERED_NAMES (v0.1)

**File:** `narrative/dialogues/ch02_scene02_archive_of_covered_names.dialogue.md`

**Scene ID:** `ch02_scene02_archive_of_covered_names`

**Act:** Act 2 — Responsibility Distributed

**Location:** 2150 — Deep City / Archive of Covered Names

**Characters:**
- `PLAYER`: sem nome, aprendendo consentimento
- `LYRA`: sistema de contenção
- `ECHO`: ressonância emergente
- `NEXUS`: padrão de memória
- `IVO`: arquivista
- `SERA`: pessoa viva cuja memória foi preservada contra sua vontade
- `VOICE BEHIND CURTAIN`: pessoa que pediu para lembrar
- `NARRATOR`

**Imported Flags:**

```text
act1_completed = true
player_has_name = false
mara_debt_registered = true

fourth_line_status = "scarred_incomplete"

consent_matters = true

ivo_met = true
ivo_trust

read_forbidden_names / gave_names_to_lyra / memorized_one_name

echo_deep_city_01 / echo_archive_01 / echo_name_burden_01

followed_ivo_to_archive / returned_to_surface / asked_ivo_to_wait
```

**Initial Scene Flags:**

```text
entered_archive = false
sera_met = false
sera_requested_forgetting = false

player_requested_access_to_names = false
player_respected_consent = false
player_forced_memory = false
player_restored_name = false
player_left_name_closed = false

archive_trust = 0
ivo_trust_delta = 0

echo_consent_01 = false
echo_consent_02 = false
echo_consent_03 = false
echo_refusal_01 = false
echo_paternalism_01 = false
```

**Duration Target:** ~18-20 min

---

# Scene Start — The Archive Entrance

**NARRATOR:**
O túnel para o Arquivo dos Nomes Cobertos não tem porta.

Isso incomoda mais do que deveria.

Depois de tantas barreiras, selos, travas e protocolos, uma passagem aberta parece quase indecente.

**PLAYER:**
Sem tranca?

**IVO:**
Trancas fazem as pessoas acharem que o que está dentro pertence a quem tem chave.

**PLAYER:**
E aqui não pertence?

**IVO:**
Aqui quase nada pertence.

A gente só guarda por tempo suficiente para perguntar melhor.

**LYRA:**
Definição institucionalmente instável.

**IVO:**
Obrigado.

**NARRATOR:**
Você entra.

O ar muda.

Não fica mais frio.

Fica mais cuidadoso.

**Set Flags:**

```text
entered_archive = true
```

---

# NODE — Archive First View

**NARRATOR:**
O arquivo ocupa uma antiga estação subterrânea.

Trilhos desativados atravessam o centro como cicatrizes paralelas.

Nas plataformas, prateleiras improvisadas guardam caixas, rolos de filme, fitas, cartões perfurados, etiquetas, tecidos bordados, placas de identificação, fotografias sem rosto, diários sem assinatura.

Não há ordem clara.

Mas há cuidado.

Cuidado no modo como cada coisa foi embrulhada.

Cuidado no espaço deixado entre os objetos.

Cuidado nos nomes que não foram escritos onde poderiam ser vistos por acidente.

**PLAYER:**
Isso tudo são nomes?

**IVO:**
Alguns.

**PLAYER:**
E o resto?

**IVO:**
Coisas que sobreviveram quando nomes eram perigosos demais.

**ECHO:**
Memória aprende outros corpos quando o primeiro é caçado.

**LYRA:**
A frase é poeticamente incorreta, mas funcionalmente aproximada.

**IVO:**
Ela acabou de elogiar você?

**PLAYER:**
Eu também não sei mais.

---

# NODE — Archive Rules

**IVO:**
Antes de continuar, três regras.

**PLAYER:**
Regras?

**IVO:**
Você veio de uma cidade que chama tudo de protocolo.

Vai sobreviver a três regras.

**PLAYER:**
Quais?

**IVO:**
Primeira: você não lê nome em voz alta sem convite.

Segunda: você não restaura nome de pessoa viva sem consentimento.

Terceira: se alguém esqueceu para sobreviver, você não transforma sua curiosidade em ressurreição.

**LYRA:**
Regras compatíveis com estabilidade psicológica.

**IVO:**
Viu? Até a jaula sabe quando uma porta precisa ficar fechada.

**PLAYER:**
E se a pessoa esqueceu porque foi forçada?

**IVO:**
Então a pergunta muda.

Mas não desaparece.

**PLAYER:**
Qual pergunta?

**IVO:**
Quem ganha quando você devolve?

---

# NODE — Notebook Recognition

**NARRATOR:**
O caderno, onde quer que esteja, reage.

Se está com você, a capa esquenta contra o corpo.

Se foi entregue a LYRA, a voz dela falha por meio segundo.

Se foi escondido, você sente a ausência dele como uma pressão atrás dos olhos.

**NEXUS:**
Arquivo reconhecido.

**IVO:**
Não gosto quando o ar fala assim.

**PLAYER:**
É o Nexus.

**IVO:**
Pior.

Nomes já são difíceis o bastante sem lugares achando que são pessoas.

**NEXUS:**
Pessoas já são difíceis o bastante sem sistemas achando que são lugares.

**IVO:**
Eu deveria rir?

**PLAYER:**
Eu nunca sei.

**NARRATOR:**
No fim da plataforma, uma luz se acende.

Não âmbar como as outras.

Azul.

Fria.

Administrativa.

**LYRA:**
Registro compatível detectado.

**IVO:**
Não.

**PLAYER:**
O quê?

**IVO:**
Se ela detectou, é porque alguém tentou enterrar fundo demais.

---

# NODE — Sera Introduction

**NARRATOR:**
Ivo leva você até uma área isolada do arquivo.

Não há prateleiras ali.

Apenas uma cadeira.

Uma mesa baixa.

E uma caixa branca, sem identificação externa.

Ao lado da caixa, uma mulher está sentada.

Ela tem os braços cruzados.

O rosto calmo de quem gastou toda a raiva antes da conversa começar.

**IVO:**
Sera.

**NARRATOR:**
A mulher olha para Ivo primeiro.

Depois para você.

Depois para nenhum lugar.

**SERA:**
Você trouxe outro incompleto.

**IVO:**
Ele precisava entender.

**SERA:**
Todos precisam entender alguma coisa.

É assim que começam.

**PLAYER:**
Eu não vim—

**SERA:**
Você não sabe por que veio.

Isso é pior.

**LYRA:**
Identidade civil: parcialmente restrita.

**SERA:**
Voz.

Não.

**NARRATOR:**
LYRA se cala.

Não por falha.

Por obediência.

Ou por reconhecimento de limite.

**PLAYER:**
Você conhece Lyra?

**SERA:**
Conheço o som de uma porta tentando parecer conselho.

**Set Flags:**

```text
sera_met = true
```

---

# NODE — Sera's Case

**IVO:**
Sera pediu para esquecer.

**SERA:**
Não como ele. Não ofereça desculpa rápido—parece medo.

**NARRATOR:**
Ivo coloca uma caixa branca sobre a mesa.

Não abre.

**IVO:**
O nome dela está aqui.

**SERA:**
Eu sei que tive um. Mas não quero que outros decidam que minha lembrança é necessária para a história deles.

**NARRATOR:**
A quarta linha no seu pulso fica fria.

Não morta.

Atenta.

**LYRA:**
Pedido de esquecimento voluntário confirmado.

**PLAYER:**
Você pode confirmar isso?

**LYRA:**
Sim.

**PLAYER:**
E por que o sistema respeitou o pedido dela, mas não respeitou—

**SERA:**
O seu?

**PLAYER:**
Sim.

**SERA:**
Talvez porque você ainda acha que esquecer deveria vir com explicação.

**NARRATOR:**
Silêncio.

Sera olha para o seu pulso.

**SERA:**
Você quer seu nome de volta?

**PLAYER:**
Quero.

**SERA:**
Por quê?

**PLAYER:**
Porque é meu.

**SERA:**
Essa é a resposta de alguém que ainda pensa que nome é propriedade.

**Set Flags:**

```text
sera_requested_forgetting = true
```

---

# NODE — The Name That Searches

**NARRATOR:**
Enquanto Ivo fala sobre protocolos, você vê algo na parede.

Uma marca de dedo.

Na lista de nomes guardados.

Não é uma marca de poeira.

É onde alguém voltou várias vezes.

**PLAYER:**
Alguém leu isso repetidamente?

**IVO:**
Sim.

**PLAYER:**
Quem?

**IVO:**
Alguém que perdeu alguém.

**SERA:**
E nunca parou de procurar.

**PLAYER:**
Qual nome?

**IVO:**
Não vou dizer.

**PLAYER:**
Por quê?

**IVO:**
Porque aquela pessoa não deu consentimento para ser contada.

Só deixou uma marca de dedo que diz: estou aqui ainda.

Ainda procurando.

**NARRATOR:**
Você tira a mão do arquivo.

Há outros dedos.

Muitos.

Alguns sobre nomes antigos.

Alguns sobre vazios onde nomes deveriam estar.

Todos dizem a mesma coisa: **alguém veio aqui procurando por alguém.**

**SERA:**
Isso é o que a Facção entendeu melhor do que vocês.

**PLAYER:**
O quê?

**SERA:**
Que procurar também é forma de lembrar.

Que voltar ao arquivo não é fraqueza.

É insistência.

**LYRA:**
Múltiplas visitações registradas. Padrão de busca crescente.

**IVO:**
A gente não conta quem volta.

Mas a gente vê.

**NARRATOR:**
O arquivo parece menor agora.

Não porque ficou menor.

Porque você entendeu: esse lugar é feito de retornos.

Pessoas que voltam.

Que procuram.

Que deixam marcas de dedo dizendo: **meu luto ainda importa.**

---

# CHOICE 01 — Ask About Sera's Name?

**NARRATOR:**
A caixa branca permanece fechada.

Você poderia perguntar.

Não abrir.

Não tocar.

Só perguntar.

Mesmo isso parece atravessar uma linha.

---

## Option A

**Text:**
"Posso saber por que você esqueceu?"

**PLAYER:**
Posso saber por que você esqueceu?

**SERA:**
Pode perguntar.

**PLAYER:**
E você responde?

**SERA:**
Não.

**PLAYER:**
Tudo bem.

**SERA:**
É?

**PLAYER:**
Estou tentando deixar ser.

**NARRATOR:**
Sera observa você por tempo suficiente para tornar a resposta desconfortável.

Então assente.

Quase nada.

Mas assente.

**SERA:**
Melhor que tentar abrir a caixa com educação.

**ECHO UNLOCKED:**
`echo_consent_01 — "Memory Requires Permission"`

**Echo Description:**
A question is not consent.
A refusal is also an answer that must be protected.

**Set Flags:**

```text
player_respected_consent = true
echo_consent_01 = true
archive_trust += 1
ivo_trust_delta += 1
```

**Go to:** `sera_tests_player`

---

## Option B

**Text:**
"Seu nome pode ajudar a entender o que aconteceu comigo."

**PLAYER:**
Seu nome pode ajudar a entender o que aconteceu comigo.

**SERA:**
Aí está.

**PLAYER:**
Eu não disse que ia abrir.

**SERA:**
Não.

Só transformou minha vida em ferramenta antes de encostar na tampa.

**PLAYER:**
Eu preciso entender.

**SERA:**
E eu preciso não ser necessária.

**NARRATOR:**
A quarta linha no seu pulso queima.

Não como luz.

Como vergonha.

**ECHO UNLOCKED:**
`echo_paternalism_01 — "Need Is Not Permission"`

**Echo Description:**
Needing another person's memory does not grant access to it.
Your crisis does not authorize their unwilling resurrection.

**Set Flags:**

```text
player_requested_access_to_names = true
echo_paternalism_01 = true
archive_trust -= 1
ivo_trust_delta -= 1
```

**Go to:** `sera_tests_player`

---

## Option C

**Text:**
"Não vou perguntar."

**PLAYER:**
Não vou perguntar.

**SERA:**
Por respeito ou medo de falhar no teste?

**PLAYER:**
Não sei.

**SERA:**
Honesto.

Incompleto, mas honesto.

**PLAYER:**
Você quer que eu pergunte?

**SERA:**
Não.

**PLAYER:**
Então não pergunto.

**SERA:**
Bom.

Agora aprenda a não transformar silêncio em virtude.

**ECHO UNLOCKED:**
`echo_refusal_01 — "Not All Doors Want To Open"`

**Echo Description:**
Leaving a memory closed is not always avoidance.
Sometimes it is the first honest act of care.

**Set Flags:**

```text
player_left_name_closed = true
echo_refusal_01 = true
archive_trust += 1
```

**Go to:** `sera_tests_player`

---

# NODE — Sera Tests The Player

**SERA:**
Ivo disse que você voltou de 1920.

**PLAYER:**
Ele fala demais.

**IVO:**
Arquivistas são fofoca com responsabilidade histórica.

**SERA:**
Você conheceu Mara.

**PLAYER:**
Sim.

**SERA:**
Ela deixou você escolher sozinho?

**PLAYER:**
Não.

**SERA:**
Boa.

**PLAYER:**
Você conhece Mara?

**SERA:**
Conheço o tipo de rastro que pessoas como ela deixam.

**PLAYER:**
Pessoas como ela?

**SERA:**
As que recusam transformar dor em propriedade.

**NARRATOR:**
Sera toca a caixa branca com um dedo.

Sem abrir.

**SERA:**
Meu nome foi usado por alguém.

Não para me ferir diretamente.

Para provar uma tese.

**PLAYER:**
Sobre o quê?

**SERA:**
Que memória restaurada sem consentimento podia produzir "continuidade civil".

**LYRA:**
Projeto descontinuado.

**SERA:**
Depois de quantos?

**LYRA:**
...

**SERA:**
Viu?

Portas não respondem quando há corpos atrás delas.

---

# NODE — The Box Offer

**SERA:**
Você quer aprender a diferença entre memória e posse?

**PLAYER:**
Sim.

**SERA:**
Então a caixa fica fechada.

**PLAYER:**
Só isso?

**SERA:**
Não.

Você vai carregá-la até a próxima sala.

**PLAYER:**
Sem abrir?

**SERA:**
Sem abrir.

**PLAYER:**
Por quê?

**SERA:**
Porque às vezes responsabilidade é carregar algo que você não tem direito de entender.

**NARRATOR:**
Ivo parece satisfeito.

LYRA, inquieta.

ECHO, silencioso.

Isso talvez seja o mais estranho.

**NEXUS:**
Teste de contenção voluntária iniciado.

**SERA:**
Não chame minha vida de teste.

**NEXUS:**
Correção aceita.

**PLAYER:**
Ele aceita correções?

**IVO:**
Só quando doem.

---

# CHOICE 02 — Carry The Box?

## Option A

**Text:**
"Carregar a caixa fechada."

**PLAYER:**
Eu carrego.

**SERA:**
Sem perguntar peso, conteúdo ou destino?

**PLAYER:**
Você disse que eu não tenho direito de entender ainda.

**SERA:**
Eu disse que talvez nunca tenha.

**PLAYER:**
Então eu carrego assim.

**NARRATOR:**
Você pega a caixa.

Ela é leve.

Isso piora.

Coisas leves não deveriam pesar tanto.

**ECHO UNLOCKED:**
`echo_consent_02 — "The Help That Did Not Center You"`

**Echo Description:**
Sometimes the right action leaves no story about you behind.
Carrying something closed means carrying it for someone else's future, not your own narrative.

**Set Flags:**

```text
carried_closed_box = true
player_respected_consent = true
archive_trust += 2
ivo_trust_delta += 1
```

**Go to:** `archive_depth`

---

## Option B

**Text:**
"Recusar carregar."

**PLAYER:**
Não.

**SERA:**
Por quê?

**PLAYER:**
Porque eu não sei se consigo carregar sem querer abrir.

**NARRATOR:**
Sera sorri.

Não gentilmente.

Mas honestamente.

**SERA:**
Essa é uma recusa útil.

**IVO:**
Rara também.

**LYRA:**
Autoavaliação de risco adequada.

**PLAYER:**
Eu não esperava aprovação de ninguém.

**SERA:**
Não se acostume.

**ECHO UNLOCKED:**
`echo_refusal_01 — "Not All Doors Want To Open"`

**Echo Description:**
Leaving a memory closed is not always avoidance.
Sometimes it is the first honest act of care.

**Set Flags:**

```text
refused_box_responsibly = true
player_respected_consent = true
archive_trust += 1
```

**Go to:** `archive_depth`

---

## Option C

**Text:**
"Pedir para saber ao menos o destino."

**PLAYER:**
Posso saber pelo menos para onde estou levando?

**SERA:**
Pode.

**PLAYER:**
Para onde?

**SERA:**
Para uma pessoa que pediu para lembrar.

**PLAYER:**
Ela está aqui?

**SERA:**
Está.

**PLAYER:**
Então por que você não leva?

**SERA:**
Porque ela confia demais em mim.

**PLAYER:**
Isso é problema?

**SERA:**
Confiança pode virar pressão quando vem de quem salvou você uma vez.

**ECHO UNLOCKED:**
`echo_consent_01 — "Memory Requires Permission"`

**Echo Description:**
A question is not consent.
A refusal is also an answer that must be protected.

**Set Flags:**

```text
asked_box_destination = true
archive_trust += 1
```

**Go to:** `archive_depth`

---

# NODE — Archive Depth

**NARRATOR:**
Vocês avançam pela estação.

Quanto mais fundo, menos os nomes aparecem nas paredes.

Em vez deles, surgem símbolos.

Objetos.

Fragmentos.

Uma canção escrita sem letra.

Um par de sapatos infantis dentro de uma redoma.

Um relógio parado em uma hora impossível.

Uma xícara quebrada colada com fios de cobre.

**PLAYER:**
Por que menos nomes?

**IVO:**
Porque alguns nomes são o último estágio da memória.

**PLAYER:**
Achei que fossem o primeiro.

**SERA:**
É o que ensinam quando querem que identidade pareça simples.

**LYRA:**
Identidade civil requer designação estável.

**SERA:**
E pessoa requer o direito de não caber nela.

**NARRATOR:**
A quarta linha pulsa uma vez.

Pequena.

Quase aprovação.

Quase pedido de desculpas.

---

# NODE — The Person Who Asked

**NARRATOR:**
No fim da plataforma, há uma cabine de manutenção transformada em quarto.

Uma cortina azul cobre a entrada.

Sera para antes de chegar.

**SERA:**
Ela pediu para lembrar hoje.

**PLAYER:**
E está pronta?

**SERA:**
Não sei.

**PLAYER:**
Então por que hoje?

**SERA:**
Porque ela pediu hoje.

**PLAYER:**
E se isso machucar?

**SERA:**
Vai.

**PLAYER:**
Então por que permitir?

**SERA:**
Porque cuidado não é impedir toda dor.

**IVO:**
Às vezes é ficar perto quando a porta abre.

**NARRATOR:**
A cortina se move.

Uma voz frágil vem de dentro.

**VOICE BEHIND CURTAIN:**
Sera?

**SERA:**
Estou aqui.

**VOICE:**
Trouxe?

**SERA:**
Sim.

**VOICE:**
Você abriu?

**SERA:**
Não.

**VOICE:**
Obrigada.

**NARRATOR:**
Sera olha para você.

**SERA:**
Entende?

**PLAYER:**
Acho que sim.

**SERA:**
Cuidado.

Esse é o momento em que muita gente transforma começo de entendimento em licença.

---

# CHOICE 03 — The Return of a Name

**NARRATOR:**
A pessoa atrás da cortina estende a mão.

Não para você.

Para a caixa.

Se você está carregando, ela está em suas mãos.

Se não, Sera a segura.

A caixa permanece fechada.

Mas agora há consentimento.

Mesmo assim, não há segurança.

---

## Option A

**Text:**
"Entregar a caixa sem falar."

**NARRATOR:**
Você entrega a caixa.

Sem discurso.

Sem pergunta.

Sem tentar ser lembrado por isso.

A mão atrás da cortina treme ao recebê-la.

**VOICE:**
Obrigada.

**NARRATOR:**
A palavra não parece pequena.

Parece tudo que cabia.

**SERA:**
Bom.

**PLAYER:**
Eu não fiz nada.

**SERA:**
Exato.

Guarde essa sensação.

**ECHO UNLOCKED:**
`echo_consent_02 — "The Help That Did Not Center You"`

**Echo Description:**
Sometimes the right action leaves no story about you behind.

**Set Flags:**

```text
helped_without_centering = true
player_respected_consent = true
archive_trust += 2
```

**Go to:** `end_scene`

---

## Option B

**Text:**
"Perguntar se ela tem certeza."

**PLAYER:**
Você tem certeza?

**NARRATOR:**
O silêncio atrás da cortina muda.

Não quebra.

Endurece.

**VOICE:**
Eu pedi.

**PLAYER:**
Eu sei.

**VOICE:**
Então por que sua dúvida chegou depois do meu pedido?

**SERA:**
Essa é uma boa pergunta.

**PLAYER:**
Eu só queria—

**SERA:**
Proteger?

**IVO:**
Essa palavra de novo.

**NARRATOR:**
A quarta linha no seu pulso não consegue decidir se queima ou apaga.

**ECHO UNLOCKED:**
`echo_paternalism_01 — "Protection Wearing Doubt"`

**Echo Description:**
Concern can become control when it arrives after consent has already been given.

**Set Flags:**

```text
questioned_after_consent = true
archive_trust -= 1
```

**Go to:** `end_scene`

---

## Option C

**Text:**
"Dizer que lembrar pode machucar."

**PLAYER:**
Lembrar pode machucar.

**VOICE:**
Esquecer também.

**PLAYER:**
Eu sei.

**VOICE:**
Não.

Você sabe que esqueceu.

Ainda está aprendendo o que isso custou aos outros.

**NARRATOR:**
A quarta linha dói.

Não por punição.

Por precisão.

**SERA:**
Entregue a caixa.

Ou devolva para mim.

Mas não transforme a escolha dela em palestra.

**ECHO UNLOCKED:**
`echo_consent_03 — "Pain Is Not A Veto"`

**Echo Description:**
The possibility of pain does not cancel another person's right to choose memory.

**Set Flags:**

```text
warned_about_pain = true
archive_trust -= 1
```

**Go to:** `end_scene`

---

# NODE — End Scene

**NARRATOR:**
A caixa atravessa a cortina.

Você não vê o nome.

Não vê o rosto de quem pediu por ele.

Não vê a lembrança retornando.

Pela primeira vez, uma verdade importante acontece fora do seu campo de visão.

A quarta linha pulsa.

Não mais forte.

Mais baixo.

Como se aprendesse uma humildade que não sabe iluminar ainda.

**NEXUS:**
Ancoragem por consentimento registrada.

**SERA:**
Não.

**NEXUS:**
Correção.

**NARRATOR:**
A pausa dura.

Até o próprio ar parecer esperar que o padrão encontre palavras melhores.

**NEXUS:**
Consentimento testemunhado.

**SERA:**
Melhor.

**IVO:**
Quase humano.

**LYRA:**
Perigosamente humano.

**PLAYER:**
Isso foi uma memória restaurada?

**SERA:**
Foi uma escolha respeitada.

**PLAYER:**
Qual é a diferença?

**SERA:**
A primeira pertence ao passado.

A segunda decide que tipo de futuro ainda é possível.

**NARRATOR:**
Atrás da cortina, alguém começa a chorar.

Ninguém entra.

Ninguém consola rápido demais.

Sera apenas senta do lado de fora.

Ivo apaga uma das luzes.

Lyra não fala.

E por uma vez, o silêncio não parece contenção.

Parece espaço.

**ECHO:**
Nem toda porta aberta precisa mostrar o quarto.

**NARRATOR:**
Ivo olha para você.

**IVO:**
Agora você está pronto para 1970.

**PLAYER:**
Por quê?

**IVO:**
Porque lá, uma comunidade inteira vai dizer não para você.

E se você não aprender a ouvir um nome, não vai sobreviver a uma multidão.

**Set Flags:**

```text
ch02_scene02_complete = true
consent_system_locked = true
ready_for_1970 = true
```

---

## End Scene

**Version:** 0.1 (Complete)

**Status:** Ready for Iteration

**Next Scene:** `ch02_scene03_1970_the_possibility`

---

## Summary of Choices & Outcomes

| Choice | Response | Echo | Archive Trust | Outcome |
|--------|----------|------|---------------|---------|
| 01-A | Perguntar (respeitoso) | echo_consent_01 | +1 | Refusal protected |
| 01-B | Usar memória dela | echo_paternalism_01 | -1 | Need denied |
| 01-C | Não perguntar | echo_refusal_01 | +1 | Silence honored |
| 02-A | Carregar fechado | echo_consent_02 | +2 | Action centered elsewhere |
| 02-B | Recusar | echo_refusal_01 | +1 | Honest limitation |
| 02-C | Saber destino | echo_consent_01 | +1 | Partial understanding |
| 03-A | Entregar em silêncio | echo_consent_02 | +2 | Care without centering |
| 03-B | Questionar depois | echo_paternalism_01 | -1 | Doubt became control |
| 03-C | Avisar sobre dor | echo_consent_03 | -1 | Concern was gatekeeping |

---

**Scene 07 Complete. Consent system locked. Ready for 1970.**

**This scene is the moral engine of Act 2.**
