# NEXUS — Scene 04: MARA_LABORATORY_BREAK_IN (v0.1)

**File:** `narrative/dialogues/ch01_scene04_mara_laboratory_break_in.dialogue.md`

**Scene ID:** `ch01_scene04_mara_laboratory_break_in`

**Location:** 1920 — Laboratório de Mara Vale (Crise Iminente)

**Characters:**
- `PLAYER`: instável após travessia, com caderno futuro
- `MARA`: pesquisadora, preparada para destruição
- `THOMAS`: paciente/colaborador, com sobreposição de memória
- `INSPECTOR VALEK`: agente institucional, convencido de seu direito
- `LYRA`: voz fragmentada (speaker/rádio)
- `NEXUS`: presença instável, alertando
- `NARRATOR`: ambiente que começa a colapsar

**Tone:** Urgência, colapso, moral sem saída, primeira mentira

**Duration:** 16-18 minutos

---

# Scene Start — Continuation

**NARRATOR:**
A porta cede.

Não completamente.

Mara vira a mesa contra ela.

Valek empurra de fora.

A madeira grita.

**LYRA (distorted, through the laboratory itself):**
Retorno imediatamente obrigatório.

Âncora em colapso crítico.

**MARA:**
(Para LYRA, como se falasse ao ar)

Não.

**LYRA:**
Você não tem autoridade nesta contenção.

**MARA:**
Então é bom que eu não esteja pedindo.

**NARRATOR:**
A mesa cede alguns centímetros.

O caderno futuro ainda está em suas mãos.

Ele pulsa, como se sentisse o colapso iminente.

---

# NODE — Valek Enters

**NARRATOR:**
A porta explode para dentro.

Três homens entram.

O primeiro é INSPECTOR VALEK.

Ele tem o aspecto de alguém que foi educado demais para morrer jovem.

Seus olhos veem tudo antes de olhar.

**VALEK:**
Doutora Vale.

(Educado. Letal.)

A senhora está tentando manter uma descoberta universal em mãos particulares.

**MARA:**
E o senhor está tentando chamar roubo de responsabilidade pública.

**VALEK:**
A civilização avança quando os indivíduos abrem mão de controle.

**MARA:**
A civilização morre quando os indivíduos acreditam que renúncia é virtude.

**NARRATOR:**
Valek sorri.

Como quem reconheceu um argumento digno.

Seus olhos vão para você.

Depois para o caderno nas suas mãos.

**VALEK:**
Quem é ele?

---

# CHOICE 01 — The First Lie

## Option A

**Text:**
"Sou ninguém."

**PLAYER:**
(Antes que Mara responda)

Sou ninguém.

**NARRATOR:**
A palavra ecoa.

Literalmente.

O laboratório parece ecoar.

**MARA:**
(Reconhecendo o eco)

Exatamente.

**VALEK:**
(Analisando)

Um paciente?

**MARA:**
Um hóspede.

Que chegou através de meios que o senhor não compreenderia.

**VALEK:**
(Para seus homens)

Verifiquem os registros de saúde.

(Para Mara)

Se ele é ninguém, então ninguém será notificado de sua partida.

**NARRATOR:**
Você sente a mentira se solidificar.

Ser "ninguém" não é apagamento nesta vez.

É proteção.

**ECHO UNLOCKED:**
`echo_first_lie_01 — "The Lie That Protected"`

**Echo Description:**
Sometimes being nobody is the only way to let others be somebody.
The first mercy is the first invisibility.

**Set Flags:**

```text
choice_01_response = "A"
player_protected_mara = true
mara_trust += 1
player_is_nobody_in_1920 = true
```

**Go to:** `thomas_revealed`

---

## Option B

**Text:**
"Eu vim de 2150."

**PLAYER:**
(Tentando usar verdade como força)

Eu vim de 2150.

**NARRATOR:**
O ar congela.

Mara fecha os olhos.

Valek se imobiliza.

**VALEK:**
(Muito quieto)

2150.

(Pausa)

Você está relatando uma experiência de viagem temporal.

**PLAYER:**
Eu estou relatando a realidade.

**VALEK:**
(Sorrindo, genuinamente)

A realidade é o que pode ser comprovado.

(Para seus homens)

Preparem o equipamento de contenção emocional.

(Para você)

Você virá conosco.

**MARA:**
(Avançando)

Ele não vai a lugar nenhum.

**VALEK:**
Você está obstruindo um registro de saúde pública?

**NARRATOR:**
A tensão muda.

Verdade criou evidência.

Evidência criou ameaça.

**ECHO UNLOCKED:**
`echo_institution_01 — "Truth As Evidence"`

**Echo Description:**
The first person you tell the truth to will use it against you.
This is not their fault. It is the nature of truth without power.

**Set Flags:**

```text
choice_01_response = "B"
mara_suspicion += 1
valek_interest += 2
institutional_threat_created = true
```

**Go to:** `thomas_revealed`

---

## Option C

**Text:**
"Sou paciente dela."

**PLAYER:**
(Meia-verdade)

Sou paciente dela.

**NARRATOR:**
Mara não reage.

Isso significa que estava preparada para essa resposta.

**VALEK:**
(Anotando mentalmente)

Um paciente não mencionado nos registros.

**MARA:**
Um paciente cuja condição é pesquisa confidencial.

Sob lei médica, você não tem acesso.

**VALEK:**
Lei médica pressupõe supervisionamento institucional.

Você não tem nenhum.

(Para seus homens)

Confisquem todos os arquivos.

(Para você)

Venha.

**NARRATOR:**
Você se tornou um paciente.

Isso protegeu Thomas momentaneamente.

Mas colocou Mara em perigo legal.

**ECHO UNLOCKED:**
`echo_first_lie_01 — "The Lie That Protected"`

**Echo Description:**
Sometimes being nobody is the only way to let others be somebody.
The first mercy is the first invisibility.

**Set Flags:**

```text
choice_01_response = "C"
player_protected_thomas = true
player_protected_mara = false
mara_trust += 1
valek_interest += 1
institutional_threat_created = true
```

**Go to:** `thomas_revealed`

---

# NODE — Thomas Revealed

**NARRATOR:**
Uma porta lateral se abre.

Não porque Valek abriu.

Porque Thomas se abriu.

**NARRATOR:**
Ele é magro de forma que não parece desnutrição.

Parece desperdício.

Como se a energia de estar em múltiplos tempos o tivesse consumido.

Seus olhos veem você.

Depois veem outras versões de você que ainda não existem.

**THOMAS:**
(Muito quieto)

Eu lembro de você.

**PLAYER:**
Nós nos conhecemos?

**THOMAS:**
Não nesta morte.

**NARRATOR:**
A frase derrota Valek.

Não porque seja verdade.

Porque é consistente com algo que ele teme que seja verdade.

**VALEK:**
(Para Mara)

Este é o paciente sobre o qual você se recusou a relatar?

**MARA:**
Este é o primeiro teste bem-sucedido.

(Pausa)

E você está vendo as consequências.

**THOMAS:**
(Olhando para seu próprio pulso)

Eu tive um símbolo.

(Pausa)

Três linhas.

Você o completa em mim.

(Olhando para você)

Ou ele completa você em mim.

Não tenho certeza qual é a direção.

**NARRATOR:**
Thomas se senta.

Como se estar em pé em múltiplos tempos o tivesse esgotado.

---

# NODE — The Notebook Crisis

**NARRATOR:**
Valek vê o caderno futuro nas mãos do jogador.

Seu interesse muda.

Não mais em você.

No livro.

**VALEK:**
(Educado demais)

Posso?

**MARA:**
Não.

**VALEK:**
Não?

**MARA:**
Esse caderno é propriedade de alguém que ainda não foi concebido.

Confiscá-lo seria roubo do futuro.

**VALEK:**
(Sorrindo)

O futuro pode esperar.

(Para seus homens)

Peguem o livro.

**MARA:**
(Para você)

Não deixe que ele transforme uma pergunta em propriedade.

**NARRATOR:**
Os homens de Valek avançam.

Mara posiciona-se entre eles e o jogador.

Thomas observa como quem sabe que o desfecho já foi decidido em outro tempo.

---

# CHOICE 02 — What Do You Protect?

## Option A

**Text:**
"Protejo Mara."

**PLAYER:**
(Avanço para entre Mara e Valek)

Não.

**NARRATOR:**
É uma palavra pequena.

Mas ecoa como recusa.

**VALEK:**
(Aos homens)

Levem o livro.

**MARA:**
(Movendo-se rapidamente para a mesa)

Peguem a lâmpada.

(Para Thomas)

Queime isso.

**THOMAS:**
(Reconhecendo a instrução)

A pesquisa.

**MARA:**
Tudo que puder ser usado como arma.

**NARRATOR:**
Você bloqueou Valek.

Thomas começa a queimar papéis.

Mara pega o caderno do seu pulso.

O laboratório se enche de fumaça.

**ECHO UNLOCKED:**
`echo_mara_02 — "The Origin Must Breathe"`

**Echo Description:**
To let someone live is to accept that they will use their freedom.
Even if it destroys what you built.

**Set Flags:**

```text
choice_02_response = "A"
player_protected_mara = true
thomas_protected_indirectly = true
mara_able_to_burn = true
valek_blocked = true
```

**Go to:** `forced_destabilization`

---

## Option B

**Text:**
"Protejo Thomas."

**PLAYER:**
(Movendo-se para Thomas)

Vem.

**NARRATOR:**
Thomas se levanta.

Lentamente.

Você o segura.

Seu braço passa através de uma camada de tempo por um segundo.

**VALEK:**
(Aos homens)

O livro.

**MARA:**
(Enfrentando Valek)

Você o quer porque ele prova que existem mais mundos.

**VALEK:**
Exatamente.

Mais mundos significam mais controle possível.

**MARA:**
Mais mundos significam que você não é necessário em nenhum.

**NARRATOR:**
Valek avança.

Mara coloca-se entre ele e o caderno.

Thomas grita com a voz de outras versões de si mesmo.

**ECHO UNLOCKED:**
`echo_thomas_01 — "The Man Who Died Sideways"`

**Echo Description:**
To die in multiple worlds is to become a monument to suffering.
Unless someone refuses to let you die alone.

**Set Flags:**

```text
choice_02_response = "B"
player_protected_thomas = true
mara_vulnerable = true
valek_takes_partial_notebook = true
thomas_saved_from_immediate_threat = true
```

**Go to:** `forced_destabilization`

---

## Option C

**Text:**
"Protejo o caderno."

**PLAYER:**
(Recuando, segurando o caderno)

Não.

**NARRATOR:**
Você cria espaço entre você e Valek.

O caderno está contra seu peito.

**VALEK:**
(Aos homens)

Levem-no.

**NARRATOR:**
Mara e Thomas não conseguem se mover rápido o suficiente.

Valek tem números.

Você recua.

**MARA:**
(Desesperada)

O caderno é a prova?

**PLAYER:**
A prova é a única coisa que importa.

**THOMAS:**
(Tocando seu pulso ferido)

Então nós somos apenas testemunhas.

**NARRATOR:**
Você coloca Mara e Thomas em risco para manter a verdade.

Não é covardia.

Mas também não é heroísmo.

**ECHO UNLOCKED:**
`echo_notebook_02 — "The Future in Paper Form"`

**Echo Description:**
To preserve evidence is to become a courier of futures you cannot understand.
The burden is not intellectual. It is moral.

**Set Flags:**

```text
choice_02_response = "C"
player_protected_notebook = true
mara_vulnerable = true
thomas_vulnerable = true
notebook_safe_with_player = true
```

**Go to:** `forced_destabilization`

---

# NODE — Forced Destabilization

**NARRATOR:**
A presença de múltiplas forças no laboratório força colapso.

O espaço começa a vibrar.

Não fisicamente.

Temporalmente.

**NARRATOR:**
Chuva antiga vira chuva ácida por segundos.

Cartazes de 2150 aparecem sobrepostos nos papéis de 1920.

O símbolo Nexus no quadro negro acende com todas as quatro linhas.

A lâmpada se torna luz branca hospitalar.

A voz de LYRA sai de um gramofone que não estava lá antes.

**THOMAS:**
(Vendo suas próprias mortes)

Eu vejo três versões.

Uma onde você me salva.

Uma onde você deixa.

Uma onde eu salvo você.

(Pausa)

Todas saem errado.

**NEXUS:**
Muitas origens foram colocadas na mesma sala.

O espaço não suporta.

**VALEK:**
(Reconhecendo que está sendo alcançado)

Voltem.

(Para Mara)

Você terminou tudo isso.

**MARA:**
Não.

Você terminou quando decidiu que conhecimento é propriedade.

---

# NODE — Mara's Choice

**MARA:**
(Para Thomas, enquanto o laboratório desmorona)

Agora.

**THOMAS:**
(Pegando a lâmpada)

Queimo tudo?

**MARA:**
Tudo que pode ser arma.

**NARRATOR:**
Thomas coloca a lâmpada incandescente contra papéis.

Não lentamente.

Rapidamente.

Como quem sabe que o tempo é curto.

**MARA:**
(Para Valek, enquanto o fogo se espalha)

Uma descoberta que só sobrevive como ferramenta de domínio não é descoberta.

É rendição.

**VALEK:**
(Tentando salvar uma folha)

Você está destruindo o futuro.

**MARA:**
Estou destruindo a possibilidade de você controlar o futuro.

Não é a mesma coisa.

---

# CHOICE 03 — Support Mara's Destruction?

## Option A

**Text:**
"Ajudo Mara a queimar."

**PLAYER:**
(Pegando papéis da mesa)

Sim.

**NARRATOR:**
Você coloca documentos no fogo.

Valek grita.

Seus homens tentam salvar folhas.

Mara queima mais.

Thomas que alimenta a chama.

**MARA:**
(Vendo você queimar)

Isso é perdão.

**PLAYER:**
Para quem?

**MARA:**
Para você.

Por ter vindo.

**NARRATOR:**
O laboratório fica preto de fumaça.

A âncora colapsa completamente.

LYRA está gritando.

NEXUS está em silêncio.

**ECHO UNLOCKED:**
`echo_burned_origin_01 — "The Fire That Delayed Tomorrow"`

**Echo Description:**
To burn knowledge is to believe that not all futures are worth reaching.
It is the most radical act: choosing loss over inevitability.

**Set Flags:**

```text
choice_03_response = "A"
player_supported_mara_destruction = true
research_burned = true
valek_partial_escape_only = true
information_delayed = true
```

**Go to:** `forced_return`

---

## Option B

**Text:**
"Paro Mara."

**PLAYER:**
(Movendo-se para Thomas)

Não.

**NARRATOR:**
Você alcança Thomas.

Tira a lâmpada de suas mãos.

**MARA:**
(Chocada)

Você acredita que ele deveria ter acesso?

**PLAYER:**
Acredito que queimar conhecimento é perdê-lo.

**THOMAS:**
(Com a voz de outras versões)

Nesta morte, você escolhe preservação.

(Pausa)

Ele rouba o que pode.

**NARRATOR:**
Valek e seus homens saem com um punhado de papéis.

Não é tudo.

Mas é o suficiente.

**MARA:**
(Olhando para você como se não te conhecesse)

Você escolheu a replicação da ignorância.

**ECHO UNLOCKED:**
`echo_preserved_origin_01 — "The Knowledge That Would Not Burn"`

**Echo Description:**
To preserve is to hope that future versions of people will be better than present ones.
It is an act of faith in something that may never come.

**Set Flags:**

```text
choice_03_response = "B"
player_opposed_mara_destruction = true
research_preserved = true
valek_escapes_with_documentation = true
information_will_reach_2050 = true
```

**Go to:** `forced_return`

---

## Option C

**Text:**
"Salvo apenas uma página."

**PLAYER:**
(Intervindo rapidamente)

Deixa uma.

**NARRATOR:**
Você puxa uma folha do fogo.

Thomas a vê.

Mara não tenta impedir.

Valek tenta alcançá-la.

Você a coloca dentro do caderno futuro.

**THOMAS:**
(Reconhecendo a escolha)

Você vai levar uma resposta e deixar o resto em silêncio.

**MARA:**
Qual página você salvou?

**PLAYER:**
Não sei ainda.

**NARRATOR:**
O laboratório queima.

Valek sai com o suficiente para começar a procurar.

Mas não o suficiente para compreender.

**ECHO UNLOCKED:**
`echo_partial_truth_01 — "The Page You Chose"`

**Echo Description:**
To choose what is remembered and what is forgotten is the first act of a historian.
It is also the first lie of a revolutionary.

**Set Flags:**

```text
choice_03_response = "C"
player_saved_partial_research = true
valek_escapes_with_fragments = true
player_carries_hidden_page = true
information_delayed_and_partial = true
```

**Go to:** `forced_return`

---

# NODE — Forced Return

**NARRATOR:**
A âncora desmorona completamente.

LYRA consegue puxar você.

Mas não imediatamente.

Há tempo para uma última frase.

Há tempo para despedida.

**MARA:**
(Enquanto você desaparece)

Quando voltar, ele vai perguntar o que eu escondi.

**PLAYER:**
Quem?

**MARA:**
Você.

**NARRATOR:**
O laboratório se dissolve.

Thomas segura a porta.

Mara queima as últimas folhas.

Valek tenta salvar o impossível.

O caderno futuro abre sozinho.

A quarta linha do símbolo tenta acender no seu pulso.

Ela falha.

Mas deixa uma cicatriz nova.

Mais profunda.

Mais verdadeira.

**LYRA:**
Retorno completado.

**NEXUS:**
Nada foi completado.

Apenas interrompido.

**Set Flags:**

```text
ch01_scene04_complete = true
returned_to_2150 = true
forced_return_completed = true
first_lie_carried = true
fourth_line_scarred = true
ready_for_scene05 = true
```

---

## End Scene

**Version:** 0.1 (Complete)  
**Status:** Ready for Iteration  
**Next Scene:** `ch01_scene05_return_with_the_first_lie`

---

## Summary of Choices & Outcomes

| Choice | Response | Echo | Effect |
|--------|----------|------|--------|
| 01-A | "Sou ninguém" | echo_first_lie_01 | Protected Mara +1 trust |
| 01-B | "Vim de 2150" | echo_institution_01 | Institutional threat created +2 Valek interest |
| 01-C | "Sou paciente" | echo_first_lie_01 | Protected Thomas, Mara at risk |
| 02-A | Protegi Mara | echo_mara_02 | Mara able to burn, Valek blocked |
| 02-B | Protegi Thomas | echo_thomas_01 | Thomas saved, Mara vulnerable |
| 02-C | Protegi caderno | echo_notebook_02 | Mara & Thomas vulnerable, notebook safe |
| 03-A | Ajudo queimar | echo_burned_origin_01 | Research destroyed, knowledge delayed |
| 03-B | Paro Mara | echo_preserved_origin_01 | Research preserved, Valek escapes with fragments |
| 03-C | Salvo uma página | echo_partial_truth_01 | Information delayed & partial, hidden page |

---

**Scene 04 v0.1 Complete. Ready for Scene 05.**
