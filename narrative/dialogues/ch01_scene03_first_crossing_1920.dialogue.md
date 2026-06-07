# NEXUS — Scene 03: FIRST_CROSSING_1920 (v0.2)

**File:** `narrative/dialogues/ch01_scene03_first_crossing_1920.dialogue.md`

**Scene ID:** `ch01_scene03_first_crossing_1920`

**Location:** 1920 — Laboratório de Thomas Vale (Noite, chuva)

**Characters:**
- `PLAYER`: você, sem nome, materializando em 1920
- `MARA`: mulher que preparou, ambivalente (raiva + esperança)
- `THOMAS`: ausente (fotografias, equipamento, nome)
- `NARRATOR`: ambiente, sensações, transição
- `VOICE`: voz masculina no final (breaking in)

**Tone:** Temporal disorientation, moral weight, recognition, confrontation

**Duration:** 14-16 minutos

---

## Design Notes

**MARA**: Não é guia. É testemunha que preparou. Ela quer que você aceite responsabilidade, não que assuma culpa.

**THE FOURTH LINE**: Responde a vínculo emocional, não a informação. Pulsa, mas não acende completamente.

**THOMAS**: Ausência estratégica. Ele entra em Scene 04. Aqui, ele é peso emocional e contexto.

---

## Initial Flags

```text
player_crossed_first_time = true
mara_encountered = false
mara_anger_expressed = false
laboratory_explored = false
thomas_name_seen = false
fourth_line_attempted = false

choice_01_response = ""
choice_02_response = ""
choice_03_response = ""

mara_trust = 0
mara_suspicion = 0
```

---

# SCENE START — Arrival & Disorientation

**NARRATOR:**
As sirenes de 2150 desaparecem como um grito que esqueceu de respirar.

O chão deixa de existir.

Não literalmente.

Você simplesmente deixa de acreditar que ele está lá.

**NARRATOR:**
Seu corpo é lembrado em outro tempo.

Não transportado.

Lembrado.

Como se uma história que esqueceu de você está recontando sua entrada.

**NARRATOR:**
Você cai.

No piso de madeira de um laboratório que reconhece antes de reconhecer.

O caderno danificado cai junto.

Ambos chegam como objetos que precisavam ser aqui.

**NARRATOR:**
O ar é pesado.

Poeira de giz.

Carvão.

Tinta.

Papel molhado.

Chuva real batendo contra vidro fino.

Tudo diferente do ar filtrado de 2150.

Tudo mais denso.

Tudo mais verdadeiro.

---

# NODE — Laboratory Recognition

**NARRATOR:**
Quando você consegue ver sem o chão girar, está em um laboratório pequeno.

Não institucional.

Íntimo.

Perigoso.

**NARRATOR:**
As prateleiras estão cheias de objetos que fazem sentido junto: mapas celestes, diagramas cerebrais, bobinas de fio, metal aquecido ainda emanando calor.

Fotografias de soldados estão pregadas na parede.

Homens com os olhos em ângulos errados.

Homens que parecem ver em mais de uma direção de uma vez.

**NARRATOR:**
Na parede do fundo, um quadro negro carrega uma frase em escrita apressada:

> MEMÓRIA NÃO VIAJA.
> ELA ECOA.

**NARRATOR:**
Sobre a mesa de madeira, dois cadernos.

Um original, inteiro, com anotações meticulosas e desenhos precisos.

Outro danificado, chegado com você, com a quarta linha arrancada junto com um pedaço da capa.

**PLAYER:**
[Internal recognition or reaching for one of the notebooks?]

---

# CHOICE 01 — First Confrontation with Recognition

## Option A

**Text:**
"Eu não tenho nome."

**PLAYER:**
(Tocando o caderno danificado, sentindo o peso dele)

Eu não tenho nome.

**NARRATOR:**
A porta ao fundo da sala se abre.

Não completamente.

O suficiente para alguém olhar através de um vão.

Depois a porta se fecha novamente.

Passos. Calmos. Cansados. Como quem sabe exatamente que hora é.

**NARRATOR:**
Mara surge da sombra como se a escuridão a conhecesse.

Ela não está segurando uma arma.

Mas você sabe que deveria estar.

Seus olhos vão direto para o caderno danificado no chão.

Depois para você.

Não há surpresa em seu rosto.

Há confirmação.

**MARA:**
Eu não esperava você.

Eu me preparei para a possibilidade de você.

Há uma diferença, e ela importa.

**PLAYER:**
Mara.

**MARA:**
(Sem movimento, apenas observação)

Você sabe meu nome.

**PLAYER:**
Eu...

**MARA:**
Não. Você não sabe. Você o reconhece. Há uma diferença.

(Ela se move para a mesa, longe do caderno)

A primeira coisa que você percebe é que o nome foi cortado, não perdido.

**NARRATOR:**
Mara pega o caderno original de sua mesa.

O compara com o danificado no chão.

A diferença é gritante.

Inteiro versus ferida.

Preparado versus destruído.

**ECHO UNLOCKED:**
`echo_name_01 — "The Man Without a Name"`

**Echo Description:**
A name was not lost.
It was severed so something could not find its way back.

**Set Flags:**

```text
choice_01_response = "A"
mara_trust += 1
```

**Go to:** `notebook_paradox`

---

## Option B

**Text:**
"Eu vim do futuro."

**PLAYER:**
(Tentando se levantar, desorientado)

Eu vim do futuro.

**NARRATOR:**
A voz é automática.

Tipo resposta que você dá para explicar algo que não tem explicação.

**NARRATOR:**
A porta se abre de novo.

Desta vez, Mara sai completamente.

Ela não o apontou para uma arma.

Mas seus olhos carregam a precisão de alguém que já apontou uma antes.

**MARA:**
(Sem surpresa, apenas interesse frio)

Futuro.

(Ela se abaixa, recolhendo o caderno danificado do chão)

Você veio do futuro.

**PLAYER:**
Sim.

**MARA:**
E o futuro envia conseqências sem aviso?

Ou aviso é só outra mentira que o tempo diz?

**NARRATOR:**
Ela abre o caderno danificado com cuidado.

Vê a quarta linha faltando.

Sua expressão não muda.

**MARA:**
Futuro não é autoridade.

Futuro é só uma consequência tentando parecer sábia.

(Olha para você)

E você está aqui para quê? Para advertir? Para salvar?

**PLAYER:**
Eu não sei.

**MARA:**
Então talvez o futuro não saiba nada.

**ECHO UNLOCKED:**
`echo_temporal_claim_01 — "The Future Is Not Authority"`

**Echo Description:**
Coming from later does not mean seeing more clearly.
Time is not wisdom.

**Set Flags:**

```text
choice_01_response = "B"
mara_suspicion += 1
```

**Go to:** `notebook_paradox`

---

## Option C

**Text:**
"Você me disse para não escolher sozinho."

**PLAYER:**
(Lendo algo sem saber que está lendo)

Você me disse para não escolher sozinho.

**NARRATOR:**
A frase sai de você como memória de algo que ainda não aconteceu.

**NARRATOR:**
Mara congela.

A porta da sala atrás dela permanece aberta.

Ela não a fecha.

Seu rosto muda.

Não de surpresa.

De reconhecimento de que uma teoria que ela testava por meses acabou de falar.

**MARA:**
(Muito quieto)

Como você sabe disso?

**PLAYER:**
Eu não... eu li? Num caderno?

**NARRATOR:**
Mara pega o caderno original de sua mesa.

O abre na primeira página.

A mesma frase está lá, em sua própria caligrafia:

> SE ELE VOLTAR SEM NOME, NÃO O DEIXE ESCOLHER SOZINHO.

**MARA:**
Eu escrevi isso há dois meses.

Para uma possibilidade.

Para um fantasma que talvez nunca chegasse.

(Seu olhar passa de você para o caderno danificado no chão)

E você traz isso de volta de forma diferente.

Danificado.

Transformado.

**NARRATOR:**
Ela se senta.

Lentamente.

Como se o peso do que está acontecendo finalmente tocasse seu corpo.

**MARA:**
O futuro dela escreveu uma instrução para o presente dela.

E você vem trazendo a prova de que deu certo.

(Pausa)

Ou que tudo falhou de forma específica.

**ECHO UNLOCKED:**
`echo_first_bond_01 — "Do Not Let Him Choose Alone"`

**Echo Description:**
The first bond is not trust.
It is the refusal to let another person become destiny by themselves.

**Set Flags:**

```text
choice_01_response = "C"
mara_trust += 1
mara_suspicion += 1
```

**Go to:** `notebook_paradox`

---

# NODE — Notebook Paradox

**NARRATOR:**
Mara permanece em silêncio por um tempo que não é silêncio.

É ponderação.

**MARA:**
Há dois cadernos aqui.

(Ela levanta o original)

Um que eu escrevi.

Completo. Cuidadoso. Dentro do tempo linear.

(Ela olha para o danificado)

E outro que você trouxe.

Ferido. De um futuro que já aconteceu mas que não deveria existir ainda.

**NARRATOR:**
Ela coloca ambos lado a lado na mesa.

O contraste é impossível de ignorar.

Inteiro e partido.

Presente e futuro.

Intenção e consequência.

**MARA:**
A quarta linha está faltando no seu.

**PLAYER:**
(Olhando para o pulso, onde a quarta linha ainda não acendeu)

Onde?

**MARA:**
Na capa. Ela foi arrancada.

(Pausa)

Ou cortada. Não há diferença.

**NARRATOR:**
Mara pega o caderno danificado.

Abre página por página.

As anotações estão intactas.

Mas há marcas de água no papel.

Chuva. Sangue. Coisas que não deveriam estar perto de documentos.

**MARA:**
A frase dizia para eu não deixar você escolher sozinho.

Não dizia para eu escolher por você.

(Olha para você)

Então como você quer que isso funcione?

---

# CHOICE 02 — The Notebook Decision

## Option A

**Text:**
"Abrimos o caderno."

**PLAYER:**
Abrimos o caderno.

**NARRATOR:**
É a coisa mais perigosa que você poderia dizer.

Você sabe isso.

Você diz mesmo assim.

**MARA:**
(Respirando uma vez)

Isso significa que você está pronto para ver algo que você escreveu e que você não vai se lembrar de ter escrito.

**PLAYER:**
Sim.

**NARRATOR:**
Mara abre o caderno na página final.

A última entrada é em sua caligrafia, mas perturbada.

Como escrito durante movimento.

Ou pânico.

A frase diz:

> E SE ELE INSISTIR EM ESTAR CERTO,
> LEMBRE-O DE QUEM PAGOU PELA CERTEZA.

**NARRATOR:**
Mara fecha o caderno.

**MARA:**
Você escreveu isso sobre você mesmo.

(Pausa)

Sabendo que não se lembraria.

**PLAYER:**
Quem pagou?

**MARA:**
Você não quer saber agora.

**ECHO UNLOCKED:**
`echo_notebook_01 — "The Shared Choice"`

**Echo Description:**
To open what was sealed is to become accountable for what's inside.

**Set Flags:**

```text
choice_02_response = "A"
notebook_opened = true
```

**Go to:** `mara_theory`

---

## Option B

**Text:**
"Não abrimos ainda."

**PLAYER:**
Não abrimos ainda.

**NARRATOR:**
É uma recusa que surpreende ambos vocês.

**MARA:**
(Levemente mais tempo para responder)

Por quê?

**PLAYER:**
Porque há um paradoxo aqui.

Se eu abrir, vou ler algo que eu escrevi sabendo que seria uma mentira para mim.

Se eu não abrir, vou deixar uma verdade selada.

Ambas as opções me machucam.

**NARRATOR:**
Mara olha para o caderno.

Depois para você.

Pela primeira vez, há algo próximo ao respeito em seus olhos.

**MARA:**
A primeira prova de que você não é apenas um aviso ambulante vindo em forma humana.

(Coloca o caderno de volta na mesa, fechado)

Nós não abrimos ainda.

Quando abrirmos, será junto.

E será porque ambos concordarmos que a verdade pesa menos que o desconhecimento.

**ECHO UNLOCKED:**
`echo_restraint_01 — "The Unopened Wound"`

**Echo Description:**
To respect a paradox is to accept that some truths are not ready to be known.

**Set Flags:**

```text
choice_02_response = "B"
notebook_unopened = true
mara_trust += 1
```

**Go to:** `mara_theory`

---

## Option C

**Text:**
"Você decide."

**PLAYER:**
Você decide.

**NARRATOR:**
Mara o olha por um tempo longo.

Sua respiração muda.

Não em raiva.

Em decepção.

**MARA:**
Não.

**PLAYER:**
Não?

**MARA:**
Você acabou de fugir de uma responsabilidade fingindo respeito por minha consciência.

Isso é um truque antigo.

(Ela coloca o caderno de volta na mesa, distante de ambos)

Não use minha consciência como esconderijo para a sua.

(Pausa)

Se você não sabe quem quer ser, pelo menos tenha a honestidade de dizer isso.

**ECHO UNLOCKED:**
`echo_mara_warning_01 — "No Borrowed Innocence"`

**Echo Description:**
To refuse your own agency is to demand that another person become responsible for you.

**Set Flags:**

```text
choice_02_response = "C"
mara_suspicion += 2
mara_trust -= 1
```

**Go to:** `mara_theory`

---

# NODE — Mara's Theory

**MARA:**
(Movendo-se para um mapa na parede, marcado com anotações)

Eu não estudo viagem no tempo.

Eu estudo o que sobra de uma pessoa quando o tempo falha em mantê-la em uma só versão.

**NARRATOR:**
Ela aponta para marcações no mapa.

Datas. Nomes. Locais.

Todos com múltiplas versões rabiscadas sobre uns aos outros.

**MARA:**
Soldados retornaram da guerra.

Do que deveria ser a Primeira Guerra Mundial.

Mas eles não retornaram de um lugar.

Retornaram de muitos.

(Ela toca em uma anotação)

Este morreu três vezes.

Em três timelines diferentes.

Antes de morrer a terceira vez, ele descreveu o que vira nos outros dois.

**PLAYER:**
Como isso é possível?

**MARA:**
Não é.

Mas memória não obedece a possibilidade.

(Pausa)

Ele descreveu uma cidade sem nomes.

Edifícios de vidro e luz que fazem você se esquecer de quem você é.

(Ela se vira para você)

Descreveu uma máquina com quatro arcos girando sobre um núcleo escuro.

(Pausa)

E descreveu uma pessoa sem rosto.

Alguém que não existia em nenhuma das três timelines em que ele morreu.

Mas cuja presença ecoava em todas elas.

**PLAYER:**
(Tocando o símbolo no pulso)

Esse sou eu.

**MARA:**
Sim.

(Pausa)

Eu não "esperava" você, como alguém espera um trem.

Eu me preparei para você como alguém se prepara para uma ferida que ela sabe que vai ter que curar.

---

# NODE — Thomas as Absence

**NARRATOR:**
Mara se move para uma fotografia na parede.

Virada.

No verso, uma escrita:

> Thomas

**PLAYER:**
(Notando, alcançando)

Quem é Thomas?

**MARA:**
(Bloqueando o caminho)

Alguém que ainda não pertence à sua culpa.

(Pausa)

Você vai conhecê-lo. Mas não agora.

Thomas entra em Scene 04. Aqui, ele é apenas peso.

**NARRATOR:**
Mara vira a fotografia novamente para a parede.

Seu gesto é protetor.

Ou contencioso.

Talvez ambos.

**Set Flags:**

```text
thomas_name_seen = true
thomas_protection_active = true
```

---

# NODE — Moral Confrontation

**MARA:**
(Sentando-se novamente)

Eu preciso fazer uma pergunta.

E preciso que você tente responder com honestidade, não com o que acha que eu quero ouvir.

**PLAYER:**
(Esperando)

**MARA:**
Quando você descobriu que esqueceria, você tentou salvar alguém ou tentou escapar do que fez?

**NARRATOR:**
O silêncio é tanto espaço quanto pressão.

---

# CHOICE 03 — The Central Question

## Option A

**Text:**
"Espero que eu estivesse protegendo alguém."

**PLAYER:**
Espero que eu estivesse protegendo alguém.

(Pausa)

Mas não tenho certeza. E essa incerteza... é quase pior que certeza de culpa.

**MARA:**
(Pensando)

Proteção sem inocência.

(Pausa)

Isso é aceitável.

**NARRATOR:**
Mara se levanta.

Vai para uma janela.

A chuva bate contra o vidro.

**MARA:**
Se você estivesse protegendo alguém, então ninguém aqui é puro.

Nem você. Nem essa pessoa.

E proteção que exige esquecimento é proteção que falha.

(Vira para você)

Mas pelo menos é honesto sobre o fracasso.

**ECHO UNLOCKED:**
`echo_protection_01 — "Protection Without Innocence"`

**Echo Description:**
Wanting to protect someone does not erase the harm done.
But it may explain why the harm was carried.

**Set Flags:**

```text
choice_03_response = "A"
mara_trust += 1
fourth_line_attempt_01 = true
echo_protection_01 = true
```

**Go to:** `fourth_line_moment`

---

## Option B

**Text:**
"Espero que eu estivesse impedindo algo pior."

**PLAYER:**
Espero que eu estivesse impedindo algo pior.

**MARA:**
(Muito quieto)

Pragmatismo perigoso.

(Pausa)

"Algo pior" justifica tudo.

**PLAYER:**
Desculpa a frase soar vaga?

**MARA:**
Não desculpe.

Está bem vaga.

(Pausa)

Pessoas que dizem "algo pior" nunca conseguem definir o que.

E quando não conseguem definir, é porque temem que definir revele que não havia nada pior.

Apenas algo diferente.

**NARRATOR:**
Mara volta para a mesa.

Toca no caderno danificado.

**MARA:**
Pragmatismo é tudo que você vai ter em um mundo que caiu.

Mas não o chame de virtude.

**ECHO UNLOCKED:**
`echo_necessity_01 — "The Dangerous Necessity"`

**Echo Description:**
Every atrocity knows how to call itself necessary.
So does every sacrifice.

**Set Flags:**

```text
choice_03_response = "B"
mara_suspicion += 2
echo_necessity_01 = true
```

**Go to:** `fourth_line_moment`

---

## Option C

**Text:**
"Espero que eu não tenha feito isso sozinho."

**PLAYER:**
Espero que eu não tenha feito isso sozinho.

(Pausa)

Se eu fiz, então não há ninguém que possa impedir que eu repita.

E se repetir, vai ser porque ninguém vai ficar de pé e dizer "não".

**NARRATOR:**
Mara para.

Completamente.

Sua respiração muda.

Seu rosto muda.

**MARA:**
Essa é a primeira resposta que eu queria ouvir.

**PLAYER:**
Por quê? Porque é boa?

**MARA:**
Não.

(Pausa)

Porque é menos grandiosa.

(Pausa)

Pessoas grandiosas caem sozinhas.

Pessoas que recusam estar sozinhas às vezes conseguem ficar em pé.

**NARRATOR:**
Mara se levanta.

Vai até você.

Oferece a mão.

**MARA:**
Quando você voltar para seu tempo, Lyra vai dizer que eu sou o risco.

Nexus vai dizer que eu sou a origem.

Não aceite nenhuma das duas respostas inteira.

(Pausa)

Eu sou alguém que disse "não" quando você estava tentando estar sozinho.

Apenas isso.

**ECHO UNLOCKED:**
`echo_isolation_refused_01 — "The First Refusal"`

**Echo Description:**
To refuse isolation is not weakness.
It is the first bond that cannot be severed by amnesia.

**Set Flags:**

```text
choice_03_response = "C"
mara_trust += 2
fourth_line_attempt_02 = true
echo_isolation_refused_01 = true
```

**Go to:** `fourth_line_moment`

---

# NODE — Fourth Line Moment

**NARRATOR:**
O símbolo no seu pulso começa a tremeluzir.

Não como luz.

Como dor que está tentando se tornar luz.

**NARRATOR:**
A primeira linha brilha.

A segunda.

A terceira.

A quarta tenta.

Falha.

Tenta novamente.

Falha outra vez.

**NARRATOR:**
Não é fraqueza de energia.

É falta de vínculo.

A quarta linha só acende quando há promessa que não é solitária.

Quando há alguém que recusa deixá-lo estar sozinho.

**MARA:**
(Tocando seu pulso)

Não complete o símbolo enquanto estiver sozinho.

**NARRATOR:**
O símbolo reluta.

Pulsa.

Mas para de tentar.

A quarta linha permanece escura.

Aguardando.

**Set Flags:**

```text
fourth_line_attempted = true
fourth_line_incomplete = true
```

---

# NODE — Interruption & Break-In

**NARRATOR:**
Uma batida na porta.

Não leve.

Profissional.

Insistente.

**VOICE (MALE):**
Doutora Vale?

Este é o serviço de saúde. Nós recebemos um relato de atividade anômala.

Nós precisamos inspecionar a propriedade.

**NARRATOR:**
Mara não se move imediatamente.

Não há surpresa em seu rosto.

Há confirmação de algo que ela sabia que aconteceria.

**MARA:**
(Para você, muito quieto)

Eles já estão aqui.

(Para a porta)

Um momento!

**NARRATOR:**
Mara apaga a lamparina.

O laboratório fica escuro.

Apenas a chuva e a voz do homem lá fora.

**MARA:**
(Pondo o caderno danificado em suas mãos)

Quando você voltar, leve isso.

Ele precisa estar em dois tempos.

(Empurrando você para um canto da sala)

LYRA vai tentar trazê-lo de volta.

NEXUS vai dizer que a âncora está instável.

Deixe ambos falecerem.

**PLAYER:**
E você?

**MARA:**
Eu vou comprar tempo.

(Pausa)

Isso é o que eu faço.

**NARRATOR:**
A batida na porta fica mais forte.

A madeira começa a ceder.

O som da voz do homem fica mais próximo.

**VOICE (MALE):**
Doutora, nós vamos abrir essa porta.

**NARRATOR:**
Mara vira a mesa contra a entrada.

Não vai impedir por muito tempo.

Mas vai impedir o suficiente.

**MARA:**
Se quiserem o futuro, aprendam a pedir licença ao passado.

(Olha para você)

Vá.

**Set Flags:**

```text
mara_scene_complete = true
break_in_initiated = true
crossing_returning = true
```

---

# FINAL NODE — Crossing Instability

**NARRATOR:**
O símbolo no seu pulso se acende completamente pela primeira vez.

Não por você.

Pelo que Mara disse.

Pelo recusa dela de deixá-lo estar sozinho.

**NARRATOR:**
A realidade ao seu redor começa a fragmentar.

Não como destruição.

Como lembrança tentando voltar para seu lugar natural.

**LYRA (Voice fading):**
Retorno iniciado.

Você não conseguiu completar a ligação.

**NEXUS (Voice overlapping):**
A ligação nunca termina.

Apenas pausa.

**NARRATOR:**
Você é puxado para cima.

Para trás.

Para frente.

O caderno permanece seguro em suas mãos.

Mara fica para trás.

A porta explode.

A última coisa que você vê é Mara em pé, calma.

Esperando.

**MARA (fading with you):**
Não complete o símbolo enquanto estiver sozinho.

**Set Flags:**

```text
ch01_scene03_complete = true
returned_to_2150 = true
caderno_retrieved = true
mara_bond_established = true
ready_for_scene_04 = true
```

---

## End Scene

**Version:** 0.2 (Complete)  
**Status:** Ready for Implementation  
**Next Scene:** `ch01_scene04_mara_laboratory_break_in`

---

## Summary of Choices & Outcomes

| Choice | Response | Echo | Mara Trust | Effect |
|--------|----------|------|-----------|--------|
| 01-A | "Sem nome" | echo_name_01 | +1 | Identity as wound |
| 01-B | "Do futuro" | echo_temporal_claim_01 | -1 | Future isn't authority |
| 01-C | "Não escolha sozinho" | echo_first_bond_01 | +1, +1 suspicion | Bond over certainty |
| 02-A | Abrir caderno | echo_notebook_01 | 0 | Accountability |
| 02-B | Não abrir | echo_restraint_01 | +1 | Paradox acceptance |
| 02-C | Você decide | echo_mara_warning_01 | -1, -1 | No borrowed innocence |
| 03-A | Proteção | echo_protection_01 | +1 | Protection without innocence |
| 03-B | Impedimento | echo_necessity_01 | +2 suspicion | Dangerous pragmatism |
| 03-C | Não sozinho | echo_isolation_refused_01 | +2 | Refusal of isolation |

---

**Scene 03 v0.2 Complete. Ready for Godot implementation.**
