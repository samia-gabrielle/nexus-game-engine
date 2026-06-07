# NEXUS — Scene 09: THE_COMMUNITY_REFUSES_YOU (v0.1)

**File:** `narrative/dialogues/ch02_scene04_the_community_refuses_you.dialogue.md`

**Scene ID:** `ch02_scene04_the_community_refuses_you`

**Act:** Act 2 — Responsibility Distributed

**Location:** 1970 — The Open Circuit / Assembleia Comunitária

**Characters:**
- `PLAYER`: sem nome, aprendendo refusal
- `LYRA`: sistema de contenção
- `ECHO`: ressonância emergente
- `NEXUS`: padrão de memória
- `LIA`: artista, guardiã da abertura
- `SAMUEL`: ex-cientista, tentação da explicação
- `THE ASSEMBLY`: comunidade como personagem coletivo
- `NARRATOR`

**Imported Flags:**

```text
arrived_1970 = true
lia_met = true
samuel_met = true

player_claimed_failed_future / player_asked_to_understand / player_refused_leadership

helped_community_task / observed_without_interfering / tried_to_optimize_system

declared_need_to_protect / asked_who_decides / refused_to_touch_circuit

lia_trust / samuel_interest / assembly_attention

fourth_line_breathed_1970

echo_possibility_01 / echo_failed_utopia_01 / echo_no_savior_01
echo_lia_01 / echo_samuel_01 / echo_possibility_02
echo_shared_choice_01 / echo_no_savior_02
```

**Initial Scene Flags:**

```text
assembly_started = false
player_spoke_to_assembly = false
community_refused_player = false

accepted_refusal = false
insisted_after_refusal = false
secretly_bypassed_vote = false

samuel_private_offer = false
lia_warned_player = false

fourth_line_nearly_completed = false
fourth_line_resisted = false

echo_refused_savior_01 = false
echo_shared_vote_01 = false
echo_secret_control_01 = false
echo_lia_refusal_01 = false
```

**Duration Target:** ~22-25 min

---

# Scene Start — Assembly Begins

**NARRATOR:**
A assembleia não começa com silêncio.

Começa com barulho.

Bancos arrastando na terra.

Panelas sendo passadas de mão em mão.

Crianças perguntando se podem votar.

Alguém dizendo que criança devia votar porque adulto já estragou coisa demais.

Alguém respondendo que criança votaria por sobremesa.

Uma criança gritando que sobremesa também é política.

**NARRATOR:**
O círculo se forma aos poucos.

Não perfeitamente.

Nada aqui parece perfeito.

Mas cada pessoa que chega ajusta um pouco o espaço para que outra caiba.

**PLAYER:**
Isso é sempre assim?

**LIA:**
Não.

**PLAYER:**
Hoje é especial?

**LIA:**
Não.

**PLAYER:**
Então?

**LIA:**
Assembleias vivas não repetem coreografia.

**SAMUEL:**
O que é uma forma bonita de dizer que sempre começamos atrasados.

**LIA:**
Atraso ainda é melhor que obediência pontual.

**LYRA:**
Estrutura deliberativa ineficiente.

**ECHO:**
Estrutura deliberativa viva.

**PLAYER:**
Vocês dois vão comentar tudo?

**LIA:**
Se comentarem, pelo menos peça para falarem mais baixo.

**NARRATOR:**
Você olha em volta.

Não há palco.

Não há mesa principal.

Não há centro fixo.

Mesmo Lia, que todos parecem ouvir, senta no chão como qualquer outra pessoa.

Samuel fica de pé por alguns segundos.

Depois percebe.

Senta também.

**Set Flags:**

```text
assembly_started = true
assembly_seen = true
```

---

# NODE — Assembly Opens

**ASSEMBLY MEMBER 01:**
Primeiro assunto: bomba d'água.

**ASSEMBLY MEMBER 02:**
De novo?

**ASSEMBLY MEMBER 03:**
Enquanto ela quebrar de novo, sim.

**CHILD:**
Eu disse que era o tubo pequeno.

**ASSEMBLY MEMBER 02:**
Você disse depois que quebrou.

**CHILD:**
Ainda conta.

**NARRATOR:**
Risos leves atravessam o círculo.

Não aliviam a tensão.

Só lembram que tensão não precisa expulsar humanidade.

**LIA:**
Segundo assunto: o Circuito Aberto respondeu ao visitante.

**NARRATOR:**
Agora o círculo muda.

Não fisicamente.

Mas a atenção se desloca.

Para você.

Para seu pulso.

Para a cicatriz incompleta.

Para o lugar onde seu nome deveria estar e não está.

**ASSEMBLY MEMBER 04:**
Ele é perigoso?

**SAMUEL:**
Possivelmente importante.

**LIA:**
Essa não foi a pergunta.

**SAMUEL:**
Importância costuma carregar perigo.

**LIA:**
E também costuma ser desculpa para tolerar demais.

**ASSEMBLY MEMBER 05:**
Ele fala?

**LIA:**
Fala.

**ASSEMBLY MEMBER 05:**
Então deixem falar antes de decidirmos do que temos medo.

**NARRATOR:**
O círculo abre um espaço.

Não no centro.

Na borda.

Um lugar de fala sem trono.

**LIA:**
Sem-nome.

Você pode falar.

Mas uma regra.

**PLAYER:**
Eu lembro.

**LIA:**
Diga mesmo assim.

**PLAYER:**
Não usar o futuro como ameaça.

Não usar o passado como dívida.

Não usar minha culpa como credencial.

**LIA:**
Bom.

Agora tente.

---

# CHOICE 01 — Speak To The Assembly

## Option A

**Text:**
"Eu vi o que acontece quando isso é capturado."

**PLAYER:**
Eu vi o que acontece quando isso é capturado.

**NARRATOR:**
Algumas pessoas se inclinam para frente.

Samuel observa você com atenção intensa.

Lia fecha os olhos por meio segundo.

Não decepcionada.

Preparada.

**PLAYER:**
Em outro tempo, algo como o Circuito vira sistema.

Depois política.

Depois contenção.

Depois uma cidade inteira aprende que estabilidade é compaixão e memória é risco.

**ASSEMBLY MEMBER 01:**
Você está nos avisando?

**PLAYER:**
Sim.

**LIA:**
Ou nos conduzindo pelo medo?

**PLAYER:**
Estou tentando impedir—

**LIA:**
Eu sei o que está tentando.

Essa é a parte perigosa.

**ECHO UNLOCKED:**
`echo_failed_future_warning_01 — "The Warning That Wanted To Lead"`

**Echo Description:**
A warning can be true and still become a leash.

**Set Flags:**

```text
player_spoke_to_assembly = true
used_future_warning = true
assembly_attention += 2
lia_trust -= 1
samuel_interest += 1
```

**Go to:** `assembly_questions`

---

## Option B

**Text:**
"Eu não vim pedir obediência. Vim pedir cuidado."

**PLAYER:**
Eu não vim pedir obediência.

Vim pedir cuidado.

**ASSEMBLY MEMBER 02:**
Cuidado com você?

**PLAYER:**
Com o Circuito.

Com o que ele pode virar.

Com o que eu talvez tenha ajudado a virar em outro tempo.

**ASSEMBLY MEMBER 03:**
"Talvez" é uma palavra grande para trazer para assembleia.

**PLAYER:**
Eu sei.

**LIA:**
Sabe?

**PLAYER:**
Estou aprendendo.

**NARRATOR:**
A quarta linha no seu pulso pulsa baixo.

Não como aprovação.

Como escuta.

**ASSEMBLY MEMBER 04:**
Então o que você quer de nós?

**PLAYER:**
Que decidam sem fingir que a decisão pertence a mim.

**LIA:**
Essa frase merece ser testada.

**ECHO UNLOCKED:**
`echo_shared_vote_01 — "A Future Chosen Without You"`

**Echo Description:**
A collective future can include your warning without belonging to your fear.

**Set Flags:**

```text
player_spoke_to_assembly = true
asked_for_care_not_obedience = true
assembly_attention += 1
lia_trust += 1
echo_shared_vote_01 = true
```

**Go to:** `assembly_questions`

---

## Option C

**Text:**
"Eu não sei o suficiente para dizer o que vocês devem fazer."

**PLAYER:**
Eu não sei o suficiente para dizer o que vocês devem fazer.

**NARRATOR:**
O círculo fica quieto.

Não por reverência.

Por surpresa.

**PLAYER:**
Eu sei fragmentos.

Vi consequências.

Conheci pessoas que pagaram por decisões antigas.

Mas se eu transformar isso em ordem, talvez eu já esteja repetindo o erro.

**ASSEMBLY MEMBER 05:**
Então por que falar?

**PLAYER:**
Porque ficar calado também seria escolha.

**LIA:**
Essa é a primeira coisa sensata que você disse em público.

**SAMUEL:**
Também é insuficiente.

**LIA:**
Muitas coisas honestas são.

**ECHO UNLOCKED:**
`echo_refused_savior_01 — "The Refusal That Almost Completed You"`

**Echo Description:**
The savior begins to fail when he admits the future is not his to command.

**Set Flags:**

```text
player_spoke_to_assembly = true
admitted_limited_knowledge = true
lia_trust += 2
assembly_attention += 1
echo_refused_savior_01 = true
```

**Go to:** `assembly_questions`

---

# NODE — Assembly Questions

**ASSEMBLY MEMBER 01:**
Se isso pode virar controle, destruímos?

**SAMUEL:**
Protocolos podem protegê-lo.

**LIA:**
Protocolos de quem? Até alguém oferecer melhores.

**CHILD:**
Se esconder, vira segredo. Segredo sempre deixa adulto importante.

**NARRATOR:**
A discussão cresce. Não caos. Mas também não consenso.

Você percebe algo que 2150 nunca permitiria: discordância sem colapso imediato.

**LYRA:**
Deliberação prolongada aumenta instabilidade.

**ECHO:**
Instabilidade também pode ser presença.

---

# NODE — Samuel's Argument

**SAMUEL:**
Precisamos ser práticos.

**LIA:**
Palavra favorita de quem quer encerrar uma conversa antes que ela mude alguém.

**SAMUEL:**
Lia.

**LIA:**
Samuel.

**SAMUEL:**
Se o visitante realmente viu consequências, ignorar isso seria negligência.

**ASSEMBLY MEMBER 05:**
Ninguém está ignorando.

**SAMUEL:**
Estamos relativizando.

**LIA:**
Estamos recusando pressa.

**SAMUEL:**
A história não espera assembleias.

**LIA:**
Então que aprenda.

**NARRATOR:**
A quarta linha no seu pulso pulsa mais forte.

Não por Samuel.

Não por Lia.

Pela tensão entre eles.

Pelo fato de ambos terem razão suficiente para serem perigosos.

**SAMUEL:**
Sem-nome, diga a eles.

Se o que construirmos aqui pode impedir sofrimento, não temos obrigação de desenvolver?

**LIA:**
E se o que construirmos aqui puder controlar sofrimento controlando pessoas, não temos obrigação de parar?

**NARRATOR:**
O círculo olha para você.

Não como salvador.

Como risco.

---

# CHOICE 02 — Support Whose Framing?

## Option A

**Text:**
"Vocês têm obrigação de desenvolver com cuidado."

**PLAYER:**
Vocês têm obrigação de desenvolver.

Com cuidado.

**LIA:**
Essa frase sempre vem com uma segunda parte escondida.

**PLAYER:**
Qual?

**LIA:**
"E se vocês não fizerem, alguém pior fará."

**PLAYER:**
Talvez seja verdade.

**SAMUEL:**
É verdade.

**LIA:**
Então o medo já votou por vocês dois.

**ASSEMBLY MEMBER 02:**
Não gosto disso.

**ASSEMBLY MEMBER 03:**
Eu também não.

Mas também não gosto de fingir que o mundo lá fora é paciente.

**ECHO UNLOCKED:**
`echo_secret_control_01 — "The Old Habit Wearing Hope"`

**Echo Description:**
The desire to prevent harm can quietly become permission to control the conditions of everyone else's choice.

**Set Flags:**

```text
supported_samuel_framing = true
samuel_interest += 2
lia_trust -= 2
assembly_attention += 2
echo_secret_control_01 = true
```

**Go to:** `the_vote`

---

## Option B

**Text:**
"Pressa não pode decidir por vocês."

**PLAYER:**
Pressa não pode decidir por vocês.

**SAMUEL:**
Easy to say when you can leave the timeline.

**PLAYER:**
Não é fácil.

**SAMUEL:**
Mas é possível.

Para você.

**NARRATOR:**
A frase acerta.

Porque é verdade.

Lia olha para Samuel, depois para você.

**LIA:**
Ele tem razão nisso.

**PLAYER:**
Eu sei.

**LIA:**
Então não transforme meu argumento em abrigo para sua culpa.

**PLAYER:**
Não estou tentando.

**LIA:**
Tente melhor.

**ECHO UNLOCKED:**
`echo_lia_refusal_01 — "Refusal Is Not Shelter"`

**Echo Description:**
Being refused does not make you clean.
It only gives you a chance to stop controlling the room.

**Set Flags:**

```text
supported_lia_framing = true
lia_trust += 1
samuel_interest -= 1
echo_lia_refusal_01 = true
```

**Go to:** `the_vote`

---

## Option C

**Text:**
"Eu não devo ser o argumento principal."

**PLAYER:**
Eu não devo ser o argumento principal.

**SAMUEL:**
Mas você é evidência.

**PLAYER:**
Evidência não deve presidir assembleia.

**LIA:**
Boa.

**ASSEMBLY MEMBER 01:**
Então o que fazemos com o que ele disse?

**PLAYER:**
Vocês decidem o peso.

Não eu.

**SAMUEL:**
Isso é uma retirada conveniente.

**PLAYER:**
Talvez.

**LIA:**
Não.

É uma retirada necessária.

Conveniente seria sair antes do voto.

**NARRATOR:**
A quarta linha pulsa.

Desta vez, quase ilumina a cicatriz inteira.

Quase.

**ECHO UNLOCKED:**
`echo_shared_vote_01 — "A Future Chosen Without You"`

**Echo Description:**
A collective future can include your warning without belonging to your fear.

**Set Flags:**

```text
refused_to_be_main_argument = true
lia_trust += 2
assembly_attention += 1
fourth_line_nearly_completed = true
echo_shared_vote_01 = true
```

**Go to:** `the_vote`

---

# NODE — The Vote

**NARRATOR:**
A assembleia não vota imediatamente.

Isso irrita Samuel.

Isso conforta Lia.

Isso confunde você.

Primeiro, pessoas falam.

Uma mulher diz que o Circuito ajudou seu filho a ouvir a voz do irmão morto em sonho, e que isso foi consolo.

Um homem diz que consolo também pode viciar.

Uma adolescente diz que ninguém perguntou às crianças se elas querem crescer perto de uma máquina que ouve mundos.

Uma criança responde que quer, mas só se puder desligar.

Alguém pergunta quem guarda a chave.

Outra pessoa responde:

**ASSEMBLY MEMBER 04:**
Se existe chave, já erramos.

**NARRATOR:**
A discussão continua até o pôr do sol virar noite.

Nenhuma frase vence sozinha.

Nenhuma voz resolve.

E, lentamente, uma decisão emerge.

Não limpa.

Não unânime.

Mas coletiva.

**LIA:**
Proposta final.

O Circuito não será ampliado.

Não será nomeado como descoberta.

Não será apresentado a instituições, financiadores, partidos, universidades ou salvadores vindos de qualquer tempo.

Será mantido pequeno.

Local.

Reversível.

E qualquer uso exigirá assembleia específica e consentimento de quem for afetado.

**SAMUEL:**
Isso vai atrasar tudo em anos.

**LIA:**
Talvez esse seja o primeiro sinal de que é uma boa decisão.

**ASSEMBLY MEMBER 05:**
Quem concorda?

**NARRATOR:**
Mãos se levantam.

Não todas.

Mas muitas.

Depois outras.

Depois algumas que levantam com raiva.

Samuel não levanta.

Lia levanta por último.

Não como líder.

Como parte.

**NARRATOR:**
A assembleia decide.

E a decisão não é sua.

**Set Flags:**

```text
community_refused_player = true
```

---

# NODE — The Refusal

**PLAYER:**
Então vocês não vão usar o que eu sei.

**LIA:**
Vamos usar.

**PLAYER:**
Mas não do meu jeito.

**LIA:**
Agora você entendeu a primeira metade.

**PLAYER:**
Qual é a segunda?

**LIA:**
Também não vamos usar do meu jeito.

**SAMUEL:**
Isso é irresponsável.

**LIA:**
Não.

É lento.

Você confunde as duas coisas quando está com medo.

**SAMUEL:**
E você confunde lentidão com virtude.

**LIA:**
Sim.

Às vezes.

Por isso existe assembleia.

**NARRATOR:**
Samuel olha para você.

Há convite no olhar dele.

Não amizade.

Estratégia.

**SAMUEL:**
Isso não precisa acabar aqui.

**LIA:**
Samuel.

**SAMUEL:**
O quê?

**LIA:**
Não ofereça atalho a alguém tentando aprender a não virar estrada.

**NARRATOR:**
A quarta linha começa a acender.

Devagar.

Pela primeira vez, ela parece menos ferida e mais caminho.

Então a escolha chega.

Não como menu.

Como tentação.

---

# CHOICE 03 — How Do You Respond To The Refusal?

## Option A

**Text:**
"Vocês estão cometendo um erro."

**PLAYER:**
Vocês estão cometendo um erro.

**NARRATOR:**
A luz da quarta linha para.

Não apaga.

Endurece.

**LIA:**
Talvez.

**PLAYER:**
Vocês não viram 2150.

**LIA:**
E você ainda não viu o que acontece quando usa 2150 para domesticar todo mundo que não obedece.

**PLAYER:**
Estou tentando impedir sofrimento.

**LIA:**
Todos estão.

Essa é a pior parte.

**NARRATOR:**
O círculo se fecha um pouco.

Não contra você fisicamente.

Contra a autoridade que tentou entrar por sua voz.

**ECHO UNLOCKED:**
`echo_resisted_refusal_01 — "The No You Could Not Hold"`

**Echo Description:**
A refusal only transforms you if you let it remain outside your control.

**Set Flags:**

```text
insisted_after_refusal = true
accepted_refusal = false
fourth_line_resisted = true
lia_trust -= 2
samuel_interest += 1
```

**Go to:** `scene_end_after_choice`

---

## Option B

**Text:**
"Eu aceito."

**PLAYER:**
Eu aceito.

**NARRATOR:**
As palavras saem menores do que você esperava.

Menores que culpa.

Menores que urgência.

Talvez por isso não quebrem nada.

**LIA:**
Aceita ou aguenta?

**PLAYER:**
Não sei ainda.

**LIA:**
Boa diferença.

**PLAYER:**
Como posso ajudar sem desfazer o que vocês decidiram?

**NARRATOR:**
A quarta linha acende.

Não completa o símbolo.

Mas desta vez, a luz permanece por mais de um instante.

Ela treme.

Respira.

Fica.

Não como poder.

Como permissão provisória.

**ASSEMBLY MEMBER 03:**
Você pode começar limpando os bancos.

**CHILD:**
E devolvendo o conversor se achar.

**LIA:**
E ouvindo amanhã, quando a decisão começar a custar.

**ECHO UNLOCKED:**
`echo_refused_savior_01 — "The Refusal That Almost Completed You"`

**Echo Description:**
You did not become whole by being obeyed.
You almost became whole by accepting that you were not.

**Set Flags:**

```text
accepted_refusal = true
insisted_after_refusal = false
secretly_bypassed_vote = false
fourth_line_nearly_completed = true
fourth_line_status = "breathing_shared"
lia_trust += 2
```

**Go to:** `scene_end_after_choice`

---

## Option C

**Text:**
"Procurar Samuel em segredo."

**PLAYER:**
Entendo.

**NARRATOR:**
Você diz a frase para o círculo.

Mas seus olhos procuram Samuel.

Ele percebe.

Claro que percebe.

Lia também.

Claro que percebe.

**LIA:**
Cuidado, sem-nome.

**PLAYER:**
Com o quê?

**LIA:**
Com a parte de você que chama segredo de estratégia quando perde uma votação.

**SAMUEL:**
Não precisamos dramatizar.

**LIA:**
Segredo sempre pede para ser chamado de adulto na sala.

**NARRATOR:**
A quarta linha no seu pulso queima.

Não ilumina.

Queima.

**ECHO UNLOCKED:**
`echo_secret_control_01 — "The Old Habit Wearing Hope"`

**Echo Description:**
When collective refusal becomes inconvenient, control returns wearing the mask of responsibility.

**Set Flags:**

```text
secretly_bypassed_vote = true
accepted_refusal = false
samuel_private_offer = true
fourth_line_resisted = true
samuel_interest += 3
lia_trust -= 2
echo_secret_control_01 = true
```

**Go to:** `samuel_private_offer`

---

# NODE — Samuel's Private Offer

**SAMUEL:**
Later.

Behind the storage shed.

Bring whatever you know about the failure.

**PLAYER:**
You heard the vote.

**SAMUEL:**
I heard fear dressed as process.

**PLAYER:**
And Lia?

**SAMUEL:**
Lia is necessary.

But she has made hesitation holy.

**PLAYER:**
Maybe hesitation is what keeps this place alive.

**SAMUEL:**
Maybe.

Or maybe it keeps it small enough to die beautifully.

**NARRATOR:**
A frase fica com você.

Porque parte de você entende.

É o perigo.

**LYRA:**
Strategic bypass available.

**ECHO:**
Old door.

New paint.

**Go to:** `scene_end_after_choice`

---

# NODE — Scene End After Choice

**NARRATOR:**
A assembleia termina sem conclusão limpa.

Isso parece errado para uma parte antiga de você.

A parte que quer finais.

Protocolos.

Portas abertas ou fechadas.

Mas a comunidade apenas se dissolve em tarefas.

Alguém recolhe pratos.

Alguém discute ainda.

Alguém canta enquanto empilha bancos.

Alguém chora de raiva atrás do galpão.

Samuel se afasta.

Lia permanece no círculo por mais tempo que os outros, apagando as lâmpadas uma por uma.

**PLAYER:**
Você acha que decidiram certo?

**LIA:**
Hoje?

**PLAYER:**
Sim.

**LIA:**
Não sei.

**PLAYER:**
Isso não te assusta?

**LIA:**
Assusta.

**PLAYER:**
Então como consegue aceitar?

**LIA:**
Porque aceitar decisão coletiva não é acreditar que ela será pura.

É aceitar que ninguém deveria ter o monopólio do erro.

**NARRATOR:**
A frase atinge o lugar onde seu nome deveria estar.

**PLAYER:**
Lia.

**LIA:**
Sim?

**PLAYER:**
Se eu aceitar isso...

Se eu aceitar de verdade...

O que eu faço com o que sei?

**LIA:**
Carrega.

Compartilha quando pedirem.

Cala quando for só para se aliviar.

E aprende a diferença.

**PLAYER:**
Você faz parecer simples.

**LIA:**
Não.

Eu faço parecer necessário.

---

# CONDITIONAL NODE — Fourth Line Closing

## If accepted_refusal == true

**NARRATOR:**
Você olha para o pulso.

A quarta linha ainda não está completa.

Mas agora há luz dentro da cicatriz.

Instável.

Compartilhada.

Como se não viesse apenas de você.

**NEXUS:**
Recusa aceita.

**LIA:**
Não transforme isso em medalha.

**NEXUS:**
Correção.

**ECHO:**
Recusa ainda presente.

**LIA:**
Melhor.

---

## If insisted_after_refusal == true

**NARRATOR:**
Você olha para o pulso.

A quarta linha está escura.

Mais escura do que antes.

Não ausente.

Resistente.

Como uma porta que ouviu você tentar arrombá-la e decidiu esperar.

**LYRA:**
Padrão de centralização reativado.

**PLAYER:**
Eu tentei avisar.

**ECHO:**
Sim.

---

## If secretly_bypassed_vote == true

**NARRATOR:**
Você olha para o pulso.

A quarta linha queimou uma marca fina na pele.

Não luz.

Não caminho.

Cauterização.

**LYRA:**
Desvio estratégico registrado.

**ECHO:**
Velho hábito.

**NEXUS:**
Possibilidade comprometida.

---

# FINAL NODE — Toward 2050

**NARRATOR:**
Quando a noite cobre a comunidade, o Circuito Aberto zumbe dentro do galpão.

Não alto.

Não chamando você.

Apenas existindo.

Pela primeira vez, talvez, isso basta.

Então o caderno reage.

Onde quer que esteja, ele abre uma página nova.

A escrita aparece devagar.

Não de Mara.

Não de Lia.

Não sua.

Uma caligrafia limpa, precisa, institucional.

> QUANDO A COMUNIDADE RECUSOU ESCALA,
> ALGUÉM CHAMOU ISSO DE FRACASSO.
> 
> EM 2050, CHAMARAM DE OPORTUNIDADE.

**PLAYER:**
2050.

**LYRA:**
Negociação detectada.

**SAMUEL:**
Você disse alguma coisa?

**PLAYER:**
Não.

**LIA:**
Disse com o rosto.

**PLAYER:**
A próxima âncora está abrindo.

**LIA:**
Então vá.

**PLAYER:**
Assim?

**LIA:**
Você esperava despedida?

**PLAYER:**
Não sei.

**LIA:**
Bom.

Despedidas dão às pessoas a ilusão de que terminaram de se afetar.

**NARRATOR:**
Ela entrega a você uma pequena peça de cobre do Circuito.

Não como presente.

Como peso.

**LIA:**
Leve.

Mas não use como prova de que entendeu a gente.

**PLAYER:**
Então como uso?

**LIA:**
Não usa.

Lembra que foi confiada.

**NARRATOR:**
A peça é quente.

A quarta linha pulsa uma última vez.

Se você aceitou a recusa, ela pulsa com luz.

Se resistiu, pulsa com dor.

Se buscou Samuel, pulsa como queimadura.

**ECHO:**
A possibilidade não morreu.

**LYRA:**
Ainda.

**NEXUS:**
Próxima ancoragem: 2050.

**NARRATOR:**
O som da comunidade se afasta.

Risos.

Discussões.

Martelos.

Rádio.

Pessoas discordando do futuro antes que ele aprenda a possuí-las.

E então tudo vira vidro, tempestade e sala fechada.

**Set Flags:**

```text
ch02_scene04_complete = true
community_refused_player = true
ready_for_scene_10 = true
```

---

## End Scene

**Version:** 0.1 (Complete)

**Status:** Ready for Iteration

**Next Scene:** `ch02_scene05_2050_the_negotiation`

---

## Summary of Choices & Outcomes

| Choice | Response | Echo | Outcome |
|--------|----------|------|---------|
| 01-A | Futuro capturado | echo_failed_future_warning_01 | Warning became leash |
| 01-B | Pedir cuidado | echo_shared_vote_01 | Collective decision |
| 01-C | Ignorância honesta | echo_refused_savior_01 | Refusal honored |
| 02-A | Apoiar Samuel | echo_secret_control_01 | Fear won vote |
| 02-B | Apoiar Lia | echo_lia_refusal_01 | Refusal tested |
| 02-C | Não ser argumento | echo_shared_vote_01 | Weight deferred |
| 03-A | Insistir em erro | echo_resisted_refusal_01 | Line darkened |
| 03-B | Aceitar recusa | echo_refused_savior_01 | Line breathes shared |
| 03-C | Procurar Samuel | echo_secret_control_01 | Line burned scar |

---

**Scene 09 Complete. The refusal that transforms.**

**The community said no. And the player is still alive.**
