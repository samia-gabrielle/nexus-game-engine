# NEXUS — Scene 11: THE_CHOICE_THAT_WASNT_YOURS (v0.1)

**File:** `narrative/dialogues/ch02_scene06_the_choice_that_wasnt_yours.dialogue.md`

**Scene ID:** `ch02_scene06_the_choice_that_wasnt_yours`

**Act:** Act 2 — Responsibility Distributed

**Location:** 2050 — Climate Continuity Decision Chamber

**Tone:**
Vidro. Tempestade. Nove minutos. Pessoas inteligentes tentando escolher qual desastre terá nome.

**Characters:**
- `PLAYER`: protagonista sem nome
- `LYRA`: sistema de contenção, instável diante da origem de sua linguagem
- `ECHO`: ressonância emergente
- `NEXUS`: padrão de memória
- `DR_ELENA_VOSS`: cientista tentando reduzir sofrimento sem virar carcereira
- `DIRECTOR_CAEL_ORREN`: diretor de continuidade, defensor da escala
- `ANALYST_REN`: analista cuja dúvida ainda não foi absorvida pelo sistema
- `COUNCIL`: vozes institucionais
- `NARRATOR`

**Imported Flags:**

```text
arrived_2050 = true

player_legacy_detected = true
player_legacy_used_as_authority = true

heard_stability_compassion = true
saw_climate_dashboard = true
saw_continuity_model = true

player_rejected_borrowed_authority / player_used_borrowed_authority
player_remained_silent_about_legacy

demanded_consent_protocol / accepted_scale_logic / questioned_scale

tried_to_destroy_phrase / altered_phrase_margin / listened_to_phrase

voss_trust / orren_interest / ren_doubt

accepted_refusal / insisted_after_refusal / secretly_bypassed_vote

fourth_line_status
lia_copper_piece_received = true
```

**Initial Scene Flags:**

```text
preventive_simulation_started = false
saw_lives_saved_by_intervention = false
saw_lives_lost_by_refusal = false

temporary_exception_created = false
council_vote_seen = false
the_choice_deconstructed = false

player_saw_no_single_choice = false
player_tried_to_take_blame = false
player_tried_to_absolve_self = false
player_accepted_distributed_responsibility = false

showed_2150 = false
showed_1970 = false
showed_mara = false

echo_distributed_guilt_01 = false
echo_parceled_future_01 = false
echo_exposed_origin_01 = false
echo_temporary_exception_01 = false
echo_no_single_hand_01 = false
```

**Duration Target:** ~28-30 min

---

# Scene Start — The Simulation Begins

**VOSS:**
Mostre a simulação de intervenção preventiva.

**NARRATOR:**
Ren não se move imediatamente.

A tempestade bate contra o vidro.

Na mesa, a região em vermelho escuro continua piscando.

Nove minutos.

O número no canto da projeção diminui para oito minutos e cinquenta e nove segundos.

Depois oito minutos e cinquenta e oito.

**ORREN:**
Ren.

**ANALYST_REN:**
Sim, diretor.

**NARRATOR:**
Ren toca a mesa.

A simulação abre.

Não como mapa.

Como sentença.

---

# NODE — Preventive Simulation

**NARRATOR:**
A primeira projeção mostra resposta com consentimento local.

Tudo correto. Tudo humano. Tudo tarde demais.

**ANALYST_REN:**
Cenário A. Resposta consultiva. Mortalidade: alta. Colapso político: elevado.

**COUNCIL VOICE 01:**
Números.

**ANALYST_REN:**
Dois milhões e quatrocentos mil mortos nos primeiros quarenta dias.

**NARRATOR:**
O número aparece na mesa.

Limpo.

Branco.

Elegante.

Grande demais para parecer real.

**PLAYER:**
Não.

**ECHO:**
Esse é o som que escala faz quando aprende a contar.

**NARRATOR:**
Ren troca a projeção.

Intervenção preventiva. Bloqueios automáticos. Evacuação forçada. A curva cai.

**ANALYST_REN:**
Cenário B. Intervenção sem consentimento. Mortalidade reduzida 63%. Instabilidade posterior: severa.

**VOSS:**
Por que não quantificado?

**ANALYST_REN:**
Porque o sistema não possui métrica confiável para medir o momento em que uma exceção vira cultura.

**NARRATOR:**
Silêncio.

Orren olha para o mapa.

Voss olha para Ren.

Você olha para a quarta linha.

Ela não acende.

Ela espera.

**Set Flags:**

```text
preventive_simulation_started = true
saw_lives_saved_by_intervention = true
saw_lives_lost_by_refusal = true
```

---

# NODE — Refusal Costs Lives

**ORREN:**
Então a questão é clara.

**VOSS:**
Não.

A questão ficou mais difícil.

**ORREN:**
Dois milhões de mortos evitáveis.

**VOSS:**
E um mecanismo de exceção sem consentimento.

**ORREN:**
Temporário.

**VOSS:**
Toda permanência ensaia essa palavra primeiro.

**COUNCIL VOICE 02:**
Dr. Voss, se recusarmos a intervenção, conseguimos defender isso publicamente?

**VOSS:**
Não.

**COUNCIL VOICE 02:**
E moralmente?

**NARRATOR:**
Voss não responde.

Não por covardia.

Porque qualquer resposta simples seria mentira.

**PLAYER:**
1970 recusou.

**LYRA:**
1970 não tinha esta projeção.

**ECHO:**
Ou tinha, mas em outra linguagem.

**PLAYER:**
Eles tinham direito de recusar.

**LYRA:**
Sim.

**PLAYER:**
E aqui?

**LYRA:**
Aqui a recusa tem cadáveres projetados.

**NARRATOR:**
A peça de cobre de Lia está quente na sua mão.

Não como em 1970.

Não como convite.

Como pergunta que perdeu a inocência.

---

# CHOICE 01 — What Does Refusal Mean Here?

## Option A

**Text:**
"Recusa ainda importa, mesmo se custar vidas."

**PLAYER:**
Recusa ainda importa.

Mesmo se custar vidas.

**NARRATOR:**
A frase parece correta.

Também parece insuportável.

Voss levanta os olhos.

Como se, em algum lugar, tivesse chegado à mesma conclusão e odiado a si mesma por isso.

**VOSS:**
Se consentimento só existe quando não custa nada, ele não é princípio.

É decoração.

**ORREN:**
E se o custo é dois milhões de mortos?

**VOSS:**
Então o princípio sangra.

Mas ainda existe.

**ECHO UNLOCKED:**
`echo_consent_cost_01 — "The Principle That Bled"`

**Echo Description:**
Consent is easiest to defend before the emergency.
After the numbers arrive, it must decide whether it was real.

**Set Flags:**

```text
defended_refusal_despite_cost = true
voss_trust += 2
orren_interest -= 1
ren_doubt += 1
```

**Go to:** `the_temporary_exception`

---

## Option B

**Text:**
"Se a intervenção salva vidas, talvez a recusa não possa ser absoluta."

**PLAYER:**
Se a intervenção salva vidas, talvez a recusa não possa ser absoluta.

**LYRA:**
Argumento compatível com continuidade.

**ECHO:**
E com a primeira porta trancada por cuidado.

**ORREN:**
Exatamente.

Direitos que não sobrevivem à catástrofe precisam de estrutura, não romantização.

**VOSS:**
Ou precisam de pessoas dispostas a preservá-los quando a catástrofe os torna inconvenientes.

**PLAYER:**
E se preservar o direito mata pessoas?

**VOSS:**
Então ninguém sai limpo.

**ECHO UNLOCKED:**
`echo_temporary_exception_01 — "The Door Locked For Mercy"`

**Echo Description:**
The first exception may be merciful.
That is why it survives long enough to become architecture.

**Set Flags:**

```text
accepted_emergency_exception = true
orren_interest += 2
voss_trust -= 1
echo_temporary_exception_01 = true
```

**Go to:** `the_temporary_exception`

---

## Option C

**Text:**
"Não existe resposta que não machuque alguém."

**PLAYER:**
Não existe resposta que não machuque alguém.

**NARRATOR:**
A sala não muda.

Mas Ren para de mover os dedos.

Só por um segundo.

**ANALYST_REN:**
Essa frase deveria estar no cabeçalho da simulação.

**ORREN:**
Não ajudaria a decidir.

**VOSS:**
Ajudaria a lembrar o que a decisão é.

**PLAYER:**
Uma escolha entre danos não deixa de ser escolha.

**ECHO:**
E não vira inocência porque a alternativa era pior.

**ECHO UNLOCKED:**
`echo_distributed_guilt_01 — "No Clean Answer At Scale"`

**Echo Description:**
When every option harms someone, responsibility does not disappear.
It multiplies.

**Set Flags:**

```text
recognized_no_clean_answer = true
ren_doubt += 2
voss_trust += 1
echo_distributed_guilt_01 = true
```

**Go to:** `the_temporary_exception`

---

# NODE — The Temporary Exception

**ORREN:**
Proponho uma exceção emergencial limitada.

Ativação preventiva apenas na região em vermelho.

Duração inicial: setenta e duas horas.

Revisão do Council a cada doze.

Supervisão da equipe Voss.

Registro público posterior.

**VOSS:**
Posterior?

**ORREN:**
Durante a evacuação, transparência plena causará resistência coordenada.

**VOSS:**
Você quer esconder a primeira ativação.

**ORREN:**
Quero salvar pessoas antes que a terminologia mate o processo.

**VOSS:**
A terminologia.

**ORREN:**
Elena.

Estamos falando de horas.

**VOSS:**
Não.

Estamos falando de precedente.

**COUNCIL VOICE 03:**
Podemos registrar como ação humanitária não replicável.

**ANALYST_REN:**
Nada que funciona em crise permanece não replicável.

**ORREN:**
Então faremos salvaguardas.

**VOSS:**
Salvaguardas escritas pela mesma sala que decidiu que consentimento era lento demais.

**NARRATOR:**
A projeção pisca.

O contador chega a seis minutos.

**LYRA:**
A exceção cria modelo.

**PLAYER:**
Você sabe disso?

**LYRA:**
Eu sou filha de exceções que sobreviveram às emergências que as justificaram.

**Set Flags:**

```text
temporary_exception_created = true
echo_temporary_exception_01 = true
```

---

# NODE — Vote Without Hands

**NARRATOR:**
O Council não levanta mãos.

2050 não levanta mãos.

Vota por confirmação biométrica silenciosa.

Um por um, pequenos sinais aparecem na mesa.

> CONFIRMADO.
> CONFIRMADO.
> ABSTENÇÃO.
> CONFIRMADO.
> REVISÃO CONDICIONAL.
> CONFIRMADO.

**PLAYER:**
Isso é uma votação?

**LYRA:**
Sim.

**PLAYER:**
Parece um sistema fechando portas.

**ECHO:**
Às vezes uma votação também é isso.

**NARRATOR:**
Voss ainda não confirma.

Orren também não.

Ren não tem voto.

Isso parece importante.

Isso parece imperdoável.

**COUNCIL VOICE 01:**
Dr. Voss, sua validação técnica é necessária.

**COUNCIL VOICE 02:**
Precisamos da sua confiança no modelo.

**VOSS:**
Não chamem de validação.

**ORREN:**
Como devemos chamar?

**VOSS:**
Ferida.

**ORREN:**
Elena.

**VOSS:**
Não.

Se isso passar, quero registrado.

Não como triunfo operacional.

Não como marco de continuidade.

Como ferida.

**ORREN:**
Registraremos como exceção.

**VOSS:**
Ferida.

Ou eu não assino.

**NARRATOR:**
Orren olha para ela.

Ele entende que discutir custaria tempo.

E, neste mundo, tempo já virou argumento moral.

**ORREN:**
Ferida, então.

**NARRATOR:**
Voss coloca a mão na mesa.

A confirmação aparece.

> VALIDAÇÃO TÉCNICA: DR. ELENA VOSS.

**NARRATOR:**
A decisão passa.

Não com aplauso.

Não com música.

Não com vilania.

Com um pequeno som eletrônico.

Quase gentil.

**Set Flags:**

```text
council_vote_seen = true
voss_validated_exception = true
```

---

# NODE — The Choice Deconstructed

**PLAYER:**
Foi isso.

**LYRA:**
Sim.

**PLAYER:**
Essa foi a escolha.

**NEXUS:**
Não.

**PLAYER:**
Eu vi.

**ECHO:**
Você viu uma assinatura.

**NEXUS:**
Não a escolha.

**NARRATOR:**
A sala se parte em camadas.

Não temporalmente.

Moralmente.

Você vê Orren escrevendo a linguagem.

Voss validando a ferida.

Ren desenhando o modelo.

Council confirmando em silêncio.

O legado sem nome sustentando uma frase fora de contexto.

A tempestade pressionando o vidro.

As mortes projetadas exigindo pressa.

A recusa de 1970 reclassificada como insuficiência.

O cuidado de Sera incompatível com escala.

A advertência de Mara transformada em rodapé.

A sua ausência funcionando como permissão.

**NEXUS:**
Nenhuma mão segurou a faca inteira.

**ECHO:**
Mesmo assim, o corte aconteceu.

**PLAYER:**
Então quem é culpado?

**LYRA:**
Pergunta insuficiente.

**PLAYER:**
Eu odeio quando vocês dizem isso.

**LYRA:**
Eu também.

**Set Flags:**

```text
the_choice_deconstructed = true
player_saw_no_single_choice = true
```

---

# CHOICE 02 — What Do You Show The Room?

**NARRATOR:**
O Nexus abre dentro da sala.

Não uma porta.

Uma possibilidade de interferência.

Você sente três memórias próximas o bastante para serem mostradas.

2150.

1970.

Mara.

Cada uma pode mudar a sala.

Nenhuma sem custo.

---

## Option A

**Text:**
Mostrar 2150.

**PLAYER:**
Vejam onde isso termina.

**NARRATOR:**
A câmara treme.

Por um instante, as paredes de vidro mostram outro mundo.

Torres mortas.

Ruas limpas demais.

Cartazes brancos.

Crianças aprendendo a esquecer.

> ESTABILIDADE É COMPAIXÃO.

Mas agora a frase está velha.

Institucional.

Obediente.

**COUNCIL VOICE 02:**
Isso é projeção?

**ANALYST_REN:**
Não do nosso sistema.

**ORREN:**
Um futuro possível.

**PLAYER:**
Um futuro provável.

**VOSS:**
Ou um aviso.

**ORREN:**
Avisos não dizem apenas "pare".

Às vezes dizem "controle melhor".

**NARRATOR:**
A sala fica mais assustada.

E medo, em 2050, já sabe para qual lado correr.

**ECHO UNLOCKED:**
`echo_future_as_threat_01 — "The Future That Tightened The Cage"`

**Echo Description:**
Showing the horror of control can make frightened people ask for better control.

**Set Flags:**

```text
showed_2150 = true
orren_interest += 2
voss_trust -= 1
ren_doubt += 1
```

**Go to:** `voss_final_validation`

---

## Option B

**Text:**
Mostrar 1970.

**PLAYER:**
Vejam o que recusou escala.

**NARRATOR:**
A mesa muda.

A tempestade desaparece por um instante.

No vidro, há sol.

Rádio.

Pessoas em círculo.

Lia sentada no chão.

Samuel inquieto.

Crianças votando sobre sobremesa e futuro.

O Circuito Aberto mantido pequeno.

Local.

Reversível.

**VOSS:**
O que é isso?

**PLAYER:**
Uma comunidade que ouviu o risco e recusou obedecer ao medo.

**ORREN:**
Com todo respeito, isso é pastoral.

**ANALYST_REN:**
Não.

É arquitetura social.

**ORREN:**
É insuficiente.

**VOSS:**
Talvez.

Mas insuficiente não é inútil.

**NARRATOR:**
A peça de cobre brilha uma vez.

Não forte.

O suficiente para Ren ver.

**ANALYST_REN:**
Eles tinham cláusulas vivas.

**ORREN:**
Eles tinham tempo.

**PLAYER:**
Ou escolheram gastar o pouco que tinham perguntando melhor.

**ECHO UNLOCKED:**
`echo_refused_scale_01 — "The Smallness They Called Failure"`

**Echo Description:**
A community that refuses scale may fail to save the world.
But it may preserve the question the world needed.

**Set Flags:**

```text
showed_1970 = true
voss_trust += 2
ren_doubt += 2
orren_interest -= 1
```

**Go to:** `voss_final_validation`

---

## Option C

**Text:**
Mostrar Mara.

**PLAYER:**
Vejam a origem.

**NARRATOR:**
O ar muda.

Não para sol.

Não para futuro.

Para chuva antiga.

Madeira.

Papel.

Uma mulher em um laboratório pequeno demais para o que nasceu nele.

Mara ergue os olhos.

Não para a sala.

Para você.

**MARA:**
Se eles usarem meu nome para abrir uma porta, pergunte quem ficará trancado do outro lado.

**VOSS:**
Quem é ela?

**PLAYER:**
Alguém que tentou impedir que isso pertencesse a uma pessoa.

**ORREN:**
Então ela entenderia.

**PLAYER:**
Não.

Você está fazendo de novo.

**ORREN:**
Fazendo o quê?

**PLAYER:**
Transformando a recusa dela em autorização.

**NARRATOR:**
A imagem de Mara falha.

Por um segundo, ela parece ver Orren.

**MARA:**
Cuidado com homens que chamam sua pressa de responsabilidade.

**NARRATOR:**
Orren fica imóvel.

Voss também.

Ren baixa os olhos.

Como se tivesse presenciado algo íntimo demais para ser evidência.

**ECHO UNLOCKED:**
`echo_exposed_origin_01 — "When Protection Became Exposure"`

**Echo Description:**
To reveal the origin may humanize the system.
It may also expose the person you promised to protect.

**Set Flags:**

```text
showed_mara = true
echo_exposed_origin_01 = true
voss_trust += 1
orren_interest += 1
ren_doubt += 2
```

**Go to:** `voss_final_validation`

---

# NODE — Voss Final Validation

**NARRATOR:**
A visão desaparece.

A tempestade retorna.

O contador chega a quatro minutos.

Quatro minutos para decidir quantas pessoas morrerão por uma ética preservada.

Ou quantas liberdades serão suspensas por uma vida salva.

**COUNCIL VOICE 01:**
Dr. Voss.

**COUNCIL VOICE 02:**
Precisamos da sua validação.

**VOSS:**
Não chamem de validação.

**ORREN:**
Como devemos chamar?

**VOSS:**
Ferida.

**ORREN:**
Elena.

**VOSS:**
Não.

Se isso passar, quero registrado.

Não como triunfo operacional.

Não como marco de continuidade.

Como ferida.

**ORREN:**
Registraremos como exceção.

**VOSS:**
Ferida.

Ou eu não assino.

**NARRATOR:**
Orren olha para ela.

Ele entende que discutir custaria tempo.

E, neste mundo, tempo já virou argumento moral.

**ORREN:**
Ferida, então.

**NARRATOR:**
Voss coloca a mão na mesa.

A confirmação aparece.

> VALIDAÇÃO TÉCNICA: DR. ELENA VOSS.

**NARRATOR:**
A decisão passa.

Não com aplauso.

Não com música.

Não com vilania.

Com um pequeno som eletrônico.

Quase gentil.

---

# CHOICE 03 — What Do You Do With The Blame?

## Option A

**Text:**
"Tentem colocar em mim. Eu carrego."

**PLAYER:**
Então coloquem em mim.

Eu carrego.

**ECHO:**
Velho hábito.

**PLAYER:**
Alguém precisa carregar.

**LYRA:**
Carregar tudo sozinho foi parte do erro original.

**PLAYER:**
Então o que eu faço?

**NEXUS:**
Não transforme culpa em trono.

**NARRATOR:**
A quarta linha escurece.

Não por punição.

Por recusa.

Ela não aceita solidão como redenção.

**ECHO UNLOCKED:**
`echo_no_single_hand_01 — "No Single Hand On The Knife"`

**Echo Description:**
Taking all the blame can look noble.
It can also become another way to own the story.

**Set Flags:**

```text
player_tried_to_take_blame = true
echo_no_single_hand_01 = true
fourth_line_status = "rejected_solitary_guilt"
```

**Go to:** `end_scene`

---

## Option B

**Text:**
"Então talvez eu não seja culpado."

**PLAYER:**
Então talvez eu não seja culpado.

**LYRA:**
Perigo de absolvição prematura.

**PLAYER:**
Eu não decidi isso sozinho.

**ECHO:**
Não.

**PLAYER:**
Meu nome foi usado.

**NEXUS:**
Sim.

**PLAYER:**
Então por que ainda parece meu?

**LYRA:**
Porque responsabilidade distribuída não elimina participação.

Apenas impede propriedade total.

**NARRATOR:**
A quarta linha não acende.

Ela permanece fria.

Esperando uma resposta menos confortável.

**ECHO UNLOCKED:**
`echo_no_absolution_01 — "Not Alone Does Not Mean Innocent"`

**Echo Description:**
Shared responsibility can free you from ownership.
It cannot free you from consequence.

**Set Flags:**

```text
player_tried_to_absolve_self = true
echo_no_absolution_01 = true
fourth_line_status = "cold_incomplete"
```

**Go to:** `end_scene`

---

## Option C

**Text:**
"Eu não fui o único. Isso não me absolve."

**PLAYER:**
Eu não fui o único.

Isso não me absolve.

**NARRATOR:**
A frase entra na sala sem tentar governá-la.

Pela primeira vez, ela não busca centro.

Não busca punição.

Não busca pureza.

A quarta linha pulsa.

Não completa.

Mas responde.

**LYRA:**
Formulação estável.

**ECHO:**
Honesta o bastante para continuar.

**NEXUS:**
Responsabilidade compartilhada reconhecida.

**PLAYER:**
Compartilhada não significa menor.

**LYRA:**
Não.

**PLAYER:**
Significa que tenho que encontrar quem mais carrega.

**ECHO UNLOCKED:**
`echo_shared_debt_01 — "Responsibility Divided Is Not Responsibility Erased"`

**Echo Description:**
You are not the sole cause.
You are not free of what followed.

**Set Flags:**

```text
player_accepted_distributed_responsibility = true
echo_shared_debt_01 = true
fourth_line_status = "unstable_shared_glow"
```

**Go to:** `end_scene`

---

# NODE — End Scene

**NARRATOR:**
A decisão entra em vigor.

Não há explosão.

Não há queda imediata.

Há ordens.

Rotas.

Bloqueios.

Evacuações.

Vidas salvas.

Portas trancadas.

Pessoas removidas à força de lugares que amavam.

Crianças chegando vivas a centros de abrigo.

Velhos morrendo longe de casas que talvez tivessem escolhido não abandonar.

Mensagens públicas falando em cuidado.

Documentos internos falando em continuidade.

Rodapés falando em exceção.

**NARRATOR:**
E no alto do primeiro comunicado, uma frase:

> ESTABILIDADE É COMPAIXÃO.

**PLAYER:**
Ninguém vendeu o futuro.

**VOSS:**
Não.

**ORREN:**
Nós o parcelamos.

**NARRATOR:**
Você não sabe se Orren disse isso.

Ou Voss.

Ou você.

Ou o próprio Nexus.

Talvez todos.

Talvez seja isso que torna a frase verdadeira.

**ANALYST_REN:**
Diretor.

A intervenção reduziu mortes previstas.

**ORREN:**
Quanto?

**ANALYST_REN:**
Sessenta e um por cento.

**COUNCIL VOICE 03:**
Então funcionou.

**VOSS:**
Sim.

**NARRATOR:**
A palavra sai dela como se doesse.

**VOSS:**
Foi isso que aconteceu de pior.

**NARRATOR:**
A sala continua funcionando.

Essa é a imagem final de 2050:

não o colapso.

O funcionamento.

**LYRA:**
Retorno iminente.

**PLAYER:**
Para 2150?

**LYRA:**
Para a consequência.

**ECHO:**
Para o que chamou funcionamento de paz.

**NARRATOR:**
A tempestade bate contra o vidro.

A mesa salva vidas.

A sala cria precedentes.

O futuro não grita.

Ele assina.

**Set Flags:**

```text
ch02_scene06_complete = true
choice_mechanism_installed = true
2050_operational = true
ready_for_return_2150 = true
```

---

## End Scene

**Version:** 0.1 (Complete)

**Status:** Ready for Iteration

**Next Scene:** `ch02_scene07_return_with_shared_debt`

---

## Summary of Choices & Outcomes

| Choice | Response | Echo | Outcome |
|--------|----------|------|---------|
| 01-A | Refusal matters | echo_consent_cost_01 | Voss trusts |
| 01-B | Emergency exception | echo_temporary_exception_01 | Orren justifies |
| 01-C | No clean answer | echo_distributed_guilt_01 | Ren doubts |
| 02-A | Show 2150 | echo_future_as_threat_01 | Fear requests control |
| 02-B | Show 1970 | echo_refused_scale_01 | Smallness honored |
| 02-C | Show Mara | echo_exposed_origin_01 | Origin exposed |
| 03-A | Take all blame | echo_no_single_hand_01 | Solitude rejected |
| 03-B | Absolve yourself | echo_no_absolution_01 | Consequence remains |
| 03-C | Accept distribution | echo_shared_debt_01 | Shared glow unstable |

---

**Scene 11 Complete. No single choice. All hands on the knife.**

**The future was parceled. Everyone signed a piece.**
