# NEXUS — Scene 14: THE_RESTORATION_FACTION (v0.1)

**File:** `narrative/dialogues/ch03_scene02_the_restoration_faction.dialogue.md`

**Scene ID:** `ch03_scene02_the_restoration_faction`

**Act:** Act 3 — Ownership of Repair

**Location:** 2150 — Deep City / Assembly Tunnel / Restoration Alcove

**Tone:**
Urgente. Doloroso. Justo demais para ser ignorado. Perigoso demais para ser obedecido sem pergunta.

**Note:**
This scene does not treat the Restoration Faction as villains. They are responding to real violence. The danger is that justice, when it arrives hungry, can learn to open doors with the same force that closed them.

**Characters:**
- `PLAYER`: protagonista sem nome
- `LYRA`: sistema de contenção aprendendo a perguntar
- `ECHO`: memória sem propriedade, seduzido pela possibilidade de retorno
- `NEXUS`: padrão capaz de restaurar, mas incapaz de resolver moralmente
- `IVO`: guardião dos nomes que não devem ser tomados
- `SERA`: pessoa que recusou ser restaurada
- `MAEL`: residente que deseja restauração do próprio nome
- `NIA`: residente que teme o custo relacional da restauração
- `REVA`: organizadora da Restoration Faction
- `THE RESTORATION FACTION`: grupo de residentes da Deep City exigindo devolução dos nomes
- `NARRATOR`

**Imported Flags:**

```text
act1_completed = true
act2_completed = true
act3_started = true

player_has_name = false
shared_debt_registered = true
consent_matters = true

fourth_line_status = "unstable_shared_glow"

mael_requested_restoration = true
nia_refused_restoration = true
restoration_possible_confirmed = true
restoration_delayed = true
restoration_process_required = true

player_supported_mael / player_supported_nia / player_requested_process / player_refused_to_decide

primary_consent_mael / collective_consent_required / rejected_absolute_veto / deferred_consent_definition

echo_restoration_01 / echo_mael_01 / echo_nia_01 / echo_repair_possession_01
echo_guardianship_01 / echo_delayed_naming_01
```

**Initial Scene Flags:**

```text
restoration_faction_met = false
reva_met = false

faction_support = 0
faction_distrust = 0
ivo_pressure = 0
sera_pressure = 0
mael_pulled_by_faction = false
nia_threatened_by_faction = false

player_publicly_supported_restoration = false
player_defended_consent = false
player_rejected_binary = false

player_gave_faction_access = false
player_refused_faction_access = false
player_required_petitions = false

restoration_registry_created = false
forced_restoration_attempted = false
mass_restoration_prevented = false

echo_restoration_faction_01 = false
echo_return_pressure_01 = false
echo_mediation_limit_01 = false
echo_justice_hunger_01 = false
echo_forced_open_door_01 = false
echo_shared_guardianship_01 = false
echo_containment_return_01 = false
echo_forced_repair_01 = false
```

**Duration Target:** ~32-35 min

---

# Scene Start — The News Spreads

**NARRATOR:**
O primeiro processo de restauração dura menos de uma hora antes de virar disputa pública.

Isso talvez seja inevitável.

Coisas provisórias atraem pessoas cansadas de esperar.

**NARRATOR:**
A folha escrita por Ivo, Sera, Mael, Nia, LYRA e você ainda está úmida de tinta quando a notícia se espalha pela Deep City.

Restauração é possível.

Não teoria.

Não mito.

Não metáfora.

Possível.

**NARRATOR:**
E quando uma possibilidade assim entra em uma cidade feita de perdas, ela não caminha.

Ela incendeia.

**LYRA:**
Movimentação coletiva detectada no túnel leste.

**PLAYER:**
Quantas pessoas?

**LYRA:**
Muitas.

**ECHO:**
Muitos nomes.

**SERA:**
Não faça isso.

**ECHO:**
O quê?

**SERA:**
Transformar gente chegando em metáfora antes de ouvir por que veio.

**ECHO:**
Correção aceita.

**IVO:**
Ele aceita correções rápido demais agora. Isso me preocupa.

**PLAYER:**
Tudo preocupa você.

**IVO:**
É assim que prateleiras sobrevivem a incêndios.

---

# NODE — Faction Arrives

**NARRATOR:**
O som chega antes das pessoas.

Passos.

Vozes.

Metal batendo em metal.

Não como marcha militar.

Como comunidade improvisando barulho suficiente para não ser ignorada.

O ar na câmara muda de temperatura quando eles entram pelo túnel—vem ar mais quente dos níveis inferiores, traz consigo cheiro de terra, suor, algodão gasto de roupas lavadas repetidamente.

Pessoas entram carregando placas feitas de restos de sinalização da superfície.

Algumas dizem:

> O QUE FOI TOMADO DEVE VOLTAR.

Outras:

> NOME NÃO É LUXO.
> MEMÓRIA NÃO É PROPRIEDADE DO MEDO.
> DEVOLUÇÃO NÃO É VIOLÊNCIA.

**NARRATOR:**
No centro do grupo, uma mulher segura uma caixa transparente cheia de fitas de identificação antigas.

Você consegue ver nomes escritos à mão nas fitas—alguns em tinta, alguns em grafite, alguns em sangue seco.

Ela tem a voz rouca de quem falou em assembleias pequenas demais por tempo demais.

Sua mão esquerda tremendo ligeiramente—não por fraqueza, mas por contenção, como alguém aprendendo a falar sem explodir.

Os olhos dela encontram o seu pulso antes de encontrarem seu rosto.

Fica ali por três segundos.

**REVA:**
Então é verdade.

**NARRATOR:**
Quando ela fala, você vê que seus lábios estão rachados.

De falar.

**PLAYER:**
O quê?

**REVA:**
Você abriu a porta.

**SERA:**
Ele participou de uma pergunta.

Não enfeite.

**REVA:**
Sera.

**SERA:**
Reva.

**NARRATOR:**
O nome entre elas não soa como apresentação.

Soa como história antiga evitando explodir cedo demais.

**REVA:**
Ainda guardando portas fechadas?

**SERA:**
Ainda arrombando dor alheia em nome da sua?

**IVO:**
Ótimo.

Começamos com delicadeza.

**Set Flags:**

```text
restoration_faction_met = true
reva_met = true
```

---

# NODE — Reva's Statement

**REVA:**
Nós ouvimos que um nome apareceu.

Ouvimos que Nexus confirmou restauração possível.

Ouvimos que Mael pediu.

E ouvimos que vocês criaram termos para atrasar.

**MAEL:**
Reva—

**REVA:**
Não estou falando por você.

**MAEL:**
Parece.

**REVA:**
Estou falando por todos que não chegaram aqui a tempo de ter o próprio caso tratado com gentileza.

**NIA:**
E eu sou a falta de gentileza?

**REVA:**
Você é afetada.

Não dona.

**NIA:**
Eu nunca disse que era dona dele.

**REVA:**
Mas quer que o medo da sua perda tenha voto sobre o nome dele.

**NIA:**
Quero que a vida que construímos não seja tratada como dano colateral da justiça.

**REVA:**
Às vezes justiça tem dano colateral.

**SERA:**
Essa frase deveria assustar você.

**REVA:**
Assusta.

E ainda assim estou aqui.

**NARRATOR:**
A Restoration Faction fica em silêncio atrás dela.

Não como massa sem rosto.

Como pessoas que reconhecem a frase e não sabem mais se podem viver sem ela.

---

# NODE — Faction Grievance

**REVA:**
Meu irmão teve o nome removido em uma manutenção civil.

Depois removeram a raiva dele.

Depois o medo.

Depois as histórias que faziam sentido sem essas coisas.

Ele ficou vivo.

O sistema chamou isso de estabilização.

**LYRA:**
Procedimentos de estabilização nominal foram aplicados entre os ciclos—

**REVA:**
Não.

Não descreva a faca para mim.

**LYRA:**
Correção aceita.

**REVA:**
Ele morreu quinze anos depois.

Calmo.

Funcional.

Educado.

Sem lembrar que tinha motivo para odiar.

**NARRATOR:**
A voz dela falha.

Só uma vez.

Depois volta mais dura.

**REVA:**
Então quando alguém me diz que devolver pode ferir, eu quero perguntar:

comparado com o quê?

**FACTION MEMBER 01:**
Eles tiveram décadas de contenção.

**FACTION MEMBER 02:**
Nós temos uma chance.

**FACTION MEMBER 03:**
E agora querem processo.

**IVO:**
Processo é a coisa feia que a gente faz quando impulso parece bonito demais.

**REVA:**
Você guarda nomes como se fossem frágeis.

**IVO:**
São.

**REVA:**
Também são roubados.

**IVO:**
Também.

**REVA:**
Então pare de segurar a porta como se fosse sua.

**NARRATOR:**
Ivo não responde de imediato.

Pela primeira vez, isso parece doer nele.

---

# NODE — Player as Key

**REVA:**
Sem-nome.

**PLAYER:**
Não use isso como título.

**REVA:**
Então me dê outro.

**PLAYER:**
Não tenho.

**REVA:**
Exatamente.

Você entende melhor do que qualquer pessoa o que foi tomado.

**SERA:**
Cuidado.

**REVA:**
Não.

Chega de cuidado usado como algodão na boca.

**PLAYER:**
O que você quer de mim?

**REVA:**
Acesso.

**LYRA:**
Negado.

**REVA:**
Eu não perguntei à jaula.

**PLAYER:**
Acesso a quê?

**REVA:**
Ao Nexus.

Ao caderno.

À linha no seu pulso.

Ao que quer que tenha feito o nome de Mael responder.

**NIA:**
Você quer usar ele.

**REVA:**
Quero usar a possibilidade que o sistema nos negou.

**SERA:**
Você acabou de dizer a parte quieta.

**REVA:**
Sim.

Porque todo mundo aqui está usando alguma coisa.

Ivo usa atraso.

Sera usa recusa.

Nia usa medo.

Mael usa esperança.

Você usa cautela para não admitir que tem poder.

**PLAYER:**
E você usa justiça.

**REVA:**
Sim.

E não vou pedir desculpa por isso.

**NARRATOR:**
A quarta linha pulsa.

Não como reprovação.

Como alarme diante de uma verdade parcialmente correta.

---

# CHOICE 01 — Public Position

**NARRATOR:**
O túnel inteiro olha para você.

Não como salvador.

Não como juiz.

Como ferramenta que talvez tenha aprendido a dizer não.

Ou sim.

---

## Option A

**Text:**
"A facção tem razão: o que foi roubado deve poder voltar."

**PLAYER:**
A facção tem razão.

O que foi roubado deve poder voltar.

**REVA:**
Sim.

**SERA:**
"Poder."

Você escolheu essa palavra de propósito?

**PLAYER:**
Sim.

**REVA:**
E quando o poder existe, adiar é escolha.

**PLAYER:**
Sim.

**IVO:**
E quando a escolha existe, pressa também é escolha.

**REVA:**
Não transforme meu sim em doença.

**PLAYER:**
Não vou.

Mas também não vou transformar sim em aríete.

**NARRATOR:**
Reva observa você.

Desapontada por não receber obediência completa.

Mas não desinteressada.

**ECHO UNLOCKED:**
`echo_justice_hunger_01 — "The Hunger To Give Back"`

**Echo Description:**
The hunger for restoration is not greed.
It is grief that found a door.

**Set Flags:**

```text
player_publicly_supported_restoration = true
faction_support += 2
reva_interest += 1
echo_justice_hunger_01 = true
```

**Go to:** `faction_demands_access`

---

## Option B

**Text:**
"Consentimento ainda importa, especialmente quando a justiça parece óbvia."

**PLAYER:**
Consentimento ainda importa.

Especialmente quando a justiça parece óbvia.

**FACTION MEMBER 01:**
Fácil dizer quando seu nome ainda não apareceu na parede.

**PLAYER:**
Meu nome nem apareceu em mim.

**REVA:**
Então por que você fala como quem pode esperar?

**PLAYER:**
Porque aprendi que urgência também pode abrir portas erradas.

**REVA:**
E contenção também pode mantê-las fechadas para sempre.

**PLAYER:**
Eu sei.

**REVA:**
Saber não basta.

**SERA:**
Não. Mas evita que ele vire você rápido demais.

**ECHO UNLOCKED:**
`echo_return_pressure_01 — "The Violence Of Being Offered Back"`

**Echo Description:**
Even justice can pressure the wounded to return before they are ready, or in a form chosen by others.

**Set Flags:**

```text
player_defended_consent = true
faction_distrust += 2
ivo_pressure += 1
sera_pressure += 1
echo_return_pressure_01 = true
```

**Go to:** `faction_demands_access`

---

## Option C

**Text:**
"Essa pergunta não cabe em sim ou não."

**PLAYER:**
Essa pergunta não cabe em sim ou não.

**REVA:**
Toda porta aberta ou fecha.

**PLAYER:**
Não. Algumas portas precisam de guardiões.

**FACTION MEMBER 02:**
Guardiões viram donos.

**IVO:**
Se não forem vigiados.

**REVA:**
Por quem? Pelos mesmos que mandam esperar?

**PLAYER:**
Por quem pede retorno.

Por quem recusa retorno.

Por quem será afetado.

Por quem ainda não sabe que será afetado.

**REVA:**
Isso é uma assembleia infinita.

**PLAYER:**
Talvez.

**REVA:**
Enquanto isso, pessoas continuam sem nome.

**PLAYER:**
Sim.

**NARRATOR:**
A palavra cai sem defesa.

Sem desculpa.

Isso irrita Reva mais do que um argumento.

**ECHO UNLOCKED:**
`echo_mediation_limit_01 — "Neutrality In A Burning Archive"`

**Echo Description:**
Refusing a binary can preserve complexity.
It can also become shelter from choosing while others burn.

**Set Flags:**

```text
player_rejected_binary = true
faction_distrust += 1
ivo_pressure += 1
echo_mediation_limit_01 = true
```

**Go to:** `faction_demands_access`

---

# NODE — Faction Demands Access

**REVA:**
Chega de frase.

Acesso.

**PLAYER:**
Você quer restaurar quem?

**REVA:**
Quem pedir.

**SERA:**
E quem não puder pedir porque esqueceu que quer?

**REVA:**
Então alguém precisa lembrar por eles.

**SERA:**
Essa frase é uma arma.

**REVA:**
Também é resgate.

**NIA:**
E se alguém lembra errado?

**REVA:**
Então corrigimos.

**IVO:**
Com que ferramenta?

**REVA:**
A mesma que nos tirou? Não.

Com a que pode devolver.

**NARRATOR:**
Ela ergue a caixa transparente cheia de fitas antigas.

Cada fita tem fragmentos.

Iniciais.

Registros civis quebrados.

Marcas de manutenção.

Algumas parecem pessoais demais para estarem em uma caixa carregada por outra pessoa.

**REVA:**
Temos cento e dezessete pedidos.

**LYRA:**
Pedidos verificados?

**REVA:**
Pedidos humanos.

**LYRA:**
Correção: pedidos não verificados apresentam risco de restauração cruzada, colapso identitário e imposição de memória—

**REVA:**
Risco.

Risco.

Risco.

Essa palavra sustentou o teto da prisão por duzentos anos.

**LYRA:**
Sim.

**NARRATOR:**
O sim de LYRA surpreende todos.

Inclusive LYRA.

**LYRA:**
Mas teto também impediu desabamento.

**REVA:**
Então ensine a construir casa sem cela.

**LYRA:**
Tentando.

**SERA:**
Boa resposta.

**LYRA:**
Obrigada.

**SERA:**
Ainda não elogio.

---

# NODE — Mael Pulled

**MAEL:**
Reva.

Meu pedido está aí?

**NIA:**
Mael.

**REVA:**
Está.

**MAEL:**
Eu não te entreguei.

**REVA:**
Não precisei.

**NARRATOR:**
O arquivo fica frio.

**REVA:**
Seu nome apareceu na parede pública.

Você pediu restauração diante de testemunhas.

**MAEL:**
Isso não torna meu pedido parte da sua lista.

**REVA:**
Torna parte da luta.

**MAEL:**
Eu não sou bandeira.

**REVA:**
Ninguém quer ser bandeira.

Alguns viram porque, sem bandeira, ninguém olha.

**SERA:**
E aí a pessoa desaparece dentro do tecido.

**REVA:**
Às vezes é o único jeito de aparecer.

**NARRATOR:**
Mael olha para você.

Não pedindo salvação.

Pedindo que você note o perigo de ser usado por quem também está certo.

**Set Flags:**

```text
mael_pulled_by_faction = true
```

---

# CHOICE 02 — Access To Nexus

---

## Option A

**Text:**
"Dar à facção acesso inicial ao Nexus, com Mael como primeiro caso."

**PLAYER:**
Eu dou acesso inicial.

Mael primeiro.

Com testemunhas.

**NIA:**
Você acabou de decidir?

**PLAYER:**
Não sozinho.

**SERA:**
Mas decidiu direção.

**REVA:**
Finalmente.

**IVO:**
Não celebre cedo.

**PLAYER:**
Mael precisa confirmar fora da lista de vocês.

Nia precisa estar presente se quiser.

Sera e Ivo supervisionam.

LYRA registra riscos em linguagem humana.

E Reva não usa esse caso como propaganda antes do resultado.

**REVA:**
Você exige muito de gente que recebeu pouco.

**PLAYER:**
Sim.

**REVA:**
Eu aceito Mael primeiro.

Não aceito silêncio depois.

**NARRATOR:**
A quarta linha pulsa forte.

Justiça e posse perto demais para separar com conforto.

**ECHO UNLOCKED:**
`echo_restoration_faction_01 — "Justice With A Door Forced Open"`

**Echo Description:**
A door opened for justice can still bruise the people pushed through it.

**Set Flags:**

```text
player_gave_faction_access = true
restoration_registry_created = true
faction_support += 2
nia_threatened_by_faction = true
echo_restoration_faction_01 = true
```

**Go to:** `attempted_registry`

---

## Option B

**Text:**
"Recusar acesso à facção agora."

**PLAYER:**
Não.

Não dou acesso agora.

**REVA:**
Claro.

**PLAYER:**
Não porque vocês estão errados.

**REVA:**
Sempre vem essa parte.

**PLAYER:**
Porque vocês estão certos o bastante para machucar pessoas com confiança.

**FACTION MEMBER 03:**
E vocês estão cautelosos o bastante para deixar roubos intactos.

**PLAYER:**
Sim.

**NARRATOR:**
Você não se defende rápido.

Isso não melhora a raiva deles.

Mas muda o tipo de silêncio.

**SERA:**
Boa.

**REVA:**
Não.

Não é boa.

É uma porta fechada com melhor vocabulário.

**ECHO UNLOCKED:**
`echo_forced_open_door_01 — "The Door That Justice Hated"`

**Echo Description:**
Refusing access can protect people.
It can also feel indistinguishable from the original theft to those still outside.

**Set Flags:**

```text
player_refused_faction_access = true
faction_distrust += 3
mass_restoration_prevented = true
echo_forced_open_door_01 = true
```

**Go to:** `attempted_registry`

---

## Option C

**Text:**
"Exigir petições individuais antes de qualquer uso do Nexus."

**PLAYER:**
Cada pedido precisa vir da pessoa.

Individualmente.

Sem lista coletiva como substituto.

**REVA:**
Isso destrói o movimento.

**PLAYER:**
Talvez impeça o movimento de destruir pessoas.

**REVA:**
Você fala como se movimentos fossem vaidade.

**PLAYER:**
Não.

Movimentos são necessários.

E perigosos.

Como sistemas.

Como máquinas.

Como mim.

**NARRATOR:**
Reva não gosta da comparação.

Mas também não consegue descartá-la.

**IVO:**
Petições individuais.

Testemunhas escolhidas pela pessoa.

Direito de pausar.

Direito de não virar símbolo.

**MAEL:**
Eu aceito isso.

**REVA:**
Claro que aceita.

Você já está na frente da fila.

**MAEL:**
Não me use contra os outros para provar que você os defende.

**NARRATOR:**
A frase corta mais fundo que grito.

**ECHO UNLOCKED:**
`echo_guarded_return_01 — "The Petition Before The Miracle"`

**Echo Description:**
A restoration request must remain attached to the person asking, or justice becomes extraction again.

**Set Flags:**

```text
player_required_petitions = true
restoration_registry_created = true
faction_support -= 1
ivo_pressure += 1
echo_guarded_return_01 = true
```

**Go to:** `attempted_registry`

---

# NODE — Attempted Registry

**NARRATOR:**
A tensão se move para as mãos.

Pessoas apertam fitas de identificação.

Papéis.

Fotografias.

Pequenos objetos que talvez sejam prova, talvez sejam âncora, talvez sejam apenas o que restou depois de uma vida sem nome.

**REVA:**
Vocês querem processos?

Então olhem os pedidos.

**NARRATOR:**
Ela abre a caixa.

As fitas caem sobre a mesa improvisada.

Cento e dezessete pedaços de ausência.

A quarta linha no seu pulso responde com dor.

Não por rejeição.

Por quantidade.

**LYRA:**
Sobrecarga de solicitação restaurativa.

**ECHO:**
Todos querem voltar.

**SERA:**
Não.

Todos querem alguma coisa.

Aprenda a diferença.

**NEXUS:**
Restauração múltipla tecnicamente possível.

**IVO:**
Não diga isso em sala cheia.

**REVA:**
Diga de novo.

**NEXUS:**
Restauração múltipla tecnicamente possível.

**NARRATOR:**
A facção se move.

Não como ataque planejado.

Como fome diante de pão.

**FACTION MEMBER 01:**
Então façam.

**FACTION MEMBER 02:**
Agora.

**FACTION MEMBER 03:**
Antes que mudem as regras.

**SERA:**
Afastem-se da mesa.

**REVA:**
Não dê ordens.

**NIA:**
Tem criança aqui.

**REVA:**
Também havia crianças quando apagaram nossos nomes.

**NARRATOR:**
A frase quase quebra tudo.

---

# CHOICE 03 — The Surge

**NARRATOR:**
O Nexus responde aos pedidos.

A parede dos nomes começa a brilhar em dezenas de pontos.

Alguns nomes chamam.

Alguns gritam.

Alguns parecem acordar dentro de pessoas que ainda não disseram sim.

A restauração pode começar por acidente.

Ou por desejo.

Ou por multidão.

A diferença está diminuindo rápido demais.

---

## Option A

**Text:**
"Bloquear a restauração em massa com LYRA."

**PLAYER:**
LYRA, bloqueia.

Agora.

**LYRA:**
Confirmação: contenção restaurativa emergencial?

**PLAYER:**
Sim.

**SERA:**
Cuidado.

**PLAYER:**
Eu sei.

**LYRA:**
Bloqueando.

**NARRATOR:**
Luzes azuis atravessam a parede.

Os nomes param de brilhar.

Algumas pessoas gritam.

Não de dor física.

De traição.

**REVA:**
Aí está.

A jaula aprendeu uma palavra nova e você chamou de cuidado.

**PLAYER:**
Eu impedi que acontecesse sem consentimento.

**REVA:**
Você impediu que acontecesse.

**NARRATOR:**
A quarta linha fica fria.

Não porque a escolha foi errada.

Porque custou algo que a palavra "certo" não consegue carregar.

**ECHO UNLOCKED:**
`echo_containment_return_01 — "The Cage That Stopped The Miracle"`

**Echo Description:**
Containment may prevent violation.
To those still waiting outside, it may feel like theft repeated.

**Set Flags:**

```text
mass_restoration_prevented = true
forced_restoration_attempted = false
used_lyra_containment = true
faction_distrust += 3
fourth_line_status = "cold_guardianship"
```

**Go to:** `end_scene`

---

## Option B

**Text:**
"Tentar acalmar a facção sem bloquear o Nexus."

**PLAYER:**
Parem.

Não assim.

**REVA:**
Então como?

**PLAYER:**
Com nomes ligados a pessoas.

Com pedido.

Com testemunha.

Com direito de parar.

**FACTION MEMBER 02:**
Você quer formulário enquanto eles voltam.

**PLAYER:**
Quero que retorno não vire invasão.

**NARRATOR:**
Alguns recuam.

Outros não.

Mael fica diante da mesa, tremendo.

Então ele fala.

**MAEL:**
Meu nome não será o primeiro se isso acontecer por cima de alguém.

**REVA:**
Mael.

**MAEL:**
Eu quero voltar.

Mas não quero ser usado para arrombar todo mundo.

**NARRATOR:**
Isso para mais pessoas do que sua voz parou.

A quarta linha pulsa com luz instável.

Não sua.

Compartilhada.

**ECHO UNLOCKED:**
`echo_shared_guardianship_01 — "The Miracle Asked To Wait"`

**Echo Description:**
A miracle that cannot wait for consent may already be practicing domination.

**Set Flags:**

```text
mass_restoration_prevented = true
restoration_registry_created = true
mael_helped_pause_surge = true
fourth_line_status = "unstable_shared_glow"
faction_distrust += 1
```

**Go to:** `end_scene`

---

## Option C

**Text:**
"Deixar a primeira onda começar parcialmente."

**PLAYER:**
Esperem—

**NARRATOR:**
Mas você espera tempo demais.

Ou escolhe não conter.

Ou quer ver se o retorno sabe se limitar sozinho.

Os nomes brilham.

Três pessoas caem de joelhos.

Uma começa a rir.

Outra chama por alguém que não está lá.

Uma terceira grita um nome que faz outra pessoa do outro lado do túnel desabar em lágrimas.

**LYRA:**
Restauração não consentida em progresso.

**SERA:**
Pare isso.

**PLAYER:**
Nexus—

**NEXUS:**
Processo iniciado.

**REVA:**
Funcionou.

**NIA:**
Olhe melhor.

**NARRATOR:**
A quarta linha acende.

Completa por um segundo.

Perfeita.

Terrível.

Depois queima.

**ECHO UNLOCKED:**
`echo_forced_repair_01 — "The Return That Took Again"`

**Echo Description:**
A forced restoration can look like victory for one breath before the room learns what was taken.

**Set Flags:**

```text
forced_restoration_attempted = true
mass_restoration_prevented = false
fourth_line_status = "forced_completion_burn"
faction_support += 2
echo_forced_repair_01 = true
```

**Go to:** `end_scene`

---

# NODE — End Scene

## If used_lyra_containment == true

**NARRATOR:**
A parede dos nomes fica escura.

Escura demais.

Algumas pessoas da facção recolhem suas fitas como quem recolhe mortos.

Reva olha para você.

Não com surpresa.

Com confirmação.

**REVA:**
No fim, toda porta arruma um guarda.

**PLAYER:**
Eu não queria—

**REVA:**
Eu sei.

Essa é a pior parte.

**SERA:**
Reva.

**REVA:**
Não.

Hoje não.

**NARRATOR:**
Ela se afasta com a facção.

Não derrotada.

Organizada pela ferida.

---

## If mael_helped_pause_surge == true

**NARRATOR:**
A parede continua brilhando em pontos isolados.

Mas a onda para.

Não porque foi controlada por cima.

Porque uma das pessoas mais feridas pediu que esperasse.

Mael está pálido.

Nia se aproxima dele.

Não toca.

Mas fica perto.

**REVA:**
Você não devia ter que ser paciente para merecer o que é seu.

**MAEL:**
Eu sei.

**REVA:**
Então por quê?

**MAEL:**
Porque eu não quero que meu nome aprenda a voltar machucando outros.

**NARRATOR:**
Reva não responde.

Dessa vez, o silêncio dela não é derrota.

É rachadura.

---

## If forced_restoration_attempted == true

**NARRATOR:**
O túnel não se recupera.

Não imediatamente.

Pessoas respiram como se tivessem sido arrancadas de dentro de si mesmas e empurradas de volta errado.

Uma mulher sussurra um nome que não queria lembrar.

Um homem ri sem reconhecer por que está chorando.

Reva está imóvel.

O triunfo morreu antes de terminar de nascer.

**SERA:**
Olhe.

**PLAYER:**
Eu estou olhando.

**SERA:**
Não.

Olhe sem procurar como se absolver.

**NARRATOR:**
A quarta linha arde no seu pulso.

Completa.

Fechada.

Errada.

---

## Final Beat — Reva's Promise

**NARRATOR:**
Independentemente do que aconteceu, Reva recolhe uma das fitas da mesa.

A dela.

Ou de alguém que ela nunca conseguiu deixar de carregar.

**REVA:**
Vocês acham que isso acaba aqui?

**IVO:**
Não.

**REVA:**
Ótimo.

Porque justiça que pede permissão a todos menos ao ladrão ainda aprende devagar demais.

**SERA:**
E justiça que não pergunta a quem vai atravessar a porta aprende rápido demais o caminho da prisão.

**REVA:**
Então talvez precisemos de outra porta.

**PLAYER:**
Reva.

**REVA:**
Não.

Você me ensinou uma coisa hoje.

**PLAYER:**
O quê?

**REVA:**
Que quem controla o processo controla o milagre.

**NARRATOR:**
Ela sai.

A facção vai com ela.

Não toda.

Alguns ficam.

Alguns choram.

Alguns olham para Mael como se ele tivesse traído o próprio desejo.

Alguns olham para você como se você tivesse traído todos.

**LYRA:**
Conflito restaurativo escalado.

**ECHO:**
A porta aprendeu fome.

**NEXUS:**
Próxima convergência provável: núcleo de restauração.

**NARRATOR:**
Ivo pega a folha dos termos provisórios.

Ela está rasgada em uma das bordas.

Não destruída.

Mas ferida.

**IVO:**
Bem-vindo à parte em que todo mundo certo começa a ser perigoso.

**PLAYER:**
Eu achei que já estávamos nela.

**SERA:**
Não.

Antes era filosofia.

Agora as pessoas sabem que pode funcionar.

**NARRATOR:**
No caderno, uma nova frase aparece abaixo de:

> REPARO NÃO É POSSE.

A tinta forma:

> JUSTIÇA TAMBÉM PRECISA PERGUNTAR.

**Set Flags:**

```text
ch03_scene02_complete = true
reva_learned_process_equals_power = true
```

**End Scene.**

---

**Next Scene:** `ch03_scene03_surface_dependency`

**Version:** 0.1 (Complete)

**Status:** Ready for Iteration

---

## Scene 14 Summary

Scene 14 escalates Act 3 from intimate to political. The Restoration Faction is not wrong—they respond to real violence. The danger is that justice, when hungry, can learn to open doors with the same force that closed them.

**Key Learning:** Quem controla o processo controla o milagre.

(Who controls the process controls the miracle.)
