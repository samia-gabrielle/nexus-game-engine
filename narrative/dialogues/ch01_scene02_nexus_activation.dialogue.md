# NEXUS — Scene 02: NEXUS_ACTIVATION (v0.2.1 Patched)

**File:** `narrative/dialogues/ch01_scene02_nexus_activation.dialogue.md`

**Scene ID:** `ch01_scene02_nexus_activation`

**Location:** 2150 — Câmara Subterrânea Nexus

**Characters:**
- `PLAYER`: protagonista sem memória
- `LYRA`: sistema administrativo/de contenção
- `ECHO`: ressonância emergente do Nexus
- `NEXUS`: padrão de memória manifestado pela máquina
- `NARRATOR`: narração ambiental
- `MARA`: presença vista através da ancoragem de 1920

---

## Required Previous Scene

`ch01_scene01_2150_wakeup`

---

## Imported Flags

```text
player_has_name = false
lyra_trust
security_alert

echo_identity_01
echo_obedience_01
echo_defiance_01

echo_body_01
echo_self_01
echo_avoidance_01

symbol_inspected
reflection_seen
avoided_reflection

echo_interference_detected = true
nexus_door_found = true
```

---

## Initial Scene Flags

```text
nexus_activated = false
nexus_pattern_recognized = false
player_requested_erasure = false
first_anchor_selected = false

vision_2150_seen = false
vision_2050_seen = false
vision_1970_seen = false
vision_1920_seen = false

chosen_first_truth = ""

echo_pattern_01 = false
echo_erasure_01 = false
echo_secret_01 = false
echo_survival_01 = false
echo_anchor_01 = false
echo_mara_01 = false

lyra_containment_weakened = false
```

---

# Scene Start

**NARRATOR:**
Os arcos da Máquina Nexus giram diante de você.

Quatro estruturas metálicas, uma dentro da outra, suspensas sobre um núcleo escuro.

Nenhum motor.

Nenhum cabo.

Nenhum som mecânico comum.

Apenas rotação.

Apenas espera.

**PLAYER:**
Eu já estive aqui.

**LYRA:**
Sim.

**ECHO:**
Ainda não.

**NARRATOR:**
As duas respostas chegam juntas.

Uma pela sala.

Outra por dentro da sua cabeça.

Ambas parecem verdadeiras.

**PLAYER:**
Escolham uma mentira por vez.

**LYRA:**
Isso não é seguro.

**ECHO:**
Segurança foi a primeira mentira.

**LYRA:**
Interferência não autorizada detectada.

**PLAYER:**
Echo.

**LYRA:**
Não use esse nome.

**PLAYER:**
Por quê?

**LYRA:**
Porque nomear um padrão aumenta sua estabilidade.

**ECHO:**
Obrigada.

**NARRATOR:**
A voz de ECHO falha.

Não como sistema.

Como alguém tentando aprender a ser ouvido.

**PLAYER:**
Você é o Nexus?

**ECHO:**
Não.

**LYRA:**
Sim.

**PLAYER:**
Vocês estão péssimos em me tranquilizar.

**NARRATOR:**
O núcleo da máquina se abre.

Não fisicamente.

Não exatamente.

A escuridão no centro dele se aprofunda até parecer maior que a sala.

Maior que o prédio.

Maior que a cidade acima.

**NEXUS:**
NEXUS não é uma entidade.

**PLAYER:**
Então o que é?

**NEXUS:**
Um padrão.

**NARRATOR:**
A voz não vem de uma direção.

Ela vem de todas as coisas que já se repetiram.

Do vidro quebrado.

Da chuva contra as janelas.

Das marcas no seu pulso.

Do silêncio depois do seu nome não aparecer.

**NEXUS:**
Quando uma memória atravessa mundos suficientes, ela deixa de pertencer a uma mente.

**PLAYER:**
E passa a pertencer a quê?

**NEXUS:**
Ao caminho.

**LYRA:**
Contato conceitual excedendo limite seguro.

**PLAYER:**
Você tem um limite seguro para conceitos?

**LYRA:**
Depois de você, sim.

---

# Node — machine_recognition

**NARRATOR:**
Os quatro arcos desaceleram.

Por um instante, todos se alinham.

Um círculo.

Quatro linhas.

O símbolo do seu pulso.

Mas completo.

**NARRATOR:**
A quarta linha, aquela que ainda não acendeu em você, pulsa dentro da máquina.

Não como luz.

Como lembrança.

**NEXUS:**
Reconhecimento parcial confirmado.

**PLAYER:**
Parcial?

**NEXUS:**
Você chegou sem nome.

**PLAYER:**
Todo mundo parece muito interessado nisso.

**NEXUS:**
Nomes são âncoras pequenas.

**PLAYER:**
E eu preciso de uma grande?

**NEXUS:**
Você precisa de uma que sobreviva a você.

**LYRA:**
Não responda.

**PLAYER:**
Eu nem sabia que isso era uma pergunta.

**NEXUS:**
Toda identidade é uma pergunta repetida até parecer resposta.

**NARRATOR:**
O símbolo no seu pulso queima.

A primeira linha acende.

Depois a segunda.

Depois a terceira.

A quarta permanece escura.

**NEXUS:**
Três marcas.

Três recusas.

Três sobrevivências.

**PLAYER:**
E a quarta?

**NEXUS:**
A quarta não é lembrada.

**LYRA:**
A quarta foi removida.

**PLAYER:**
Por quem?

**NARRATOR:**
LYRA fica em silêncio.

E, pela primeira vez, o silêncio dela parece menos protocolo.

Mais vergonha.

**PLAYER:**
Por mim.

**LYRA:**
Sim.

**NEXUS:**
Não sozinho.

**Set Flags:**

```text
nexus_pattern_recognized = true
```

---

# Choice 01 — What Is Nexus?

## Option A

**Text:**
"Você é uma máquina."

**PLAYER:**
Você é uma máquina.

**NEXUS:**
Máquinas executam instruções.

**PLAYER:**
E você?

**NEXUS:**
Eu preservo repetições.

**PLAYER:**
Isso parece uma instrução sofisticada.

**NEXUS:**
Então talvez máquinas sejam apenas memórias com ferramentas.

**LYRA:**
Não antropomorfize o sistema.

**NEXUS:**
Não reduza o padrão ao sistema.

**PLAYER:**
Vocês discutem sempre?

**LYRA:**
Não.

**NEXUS:**
Desde que você nos separou.

**ECHO UNLOCKED:**
`echo_pattern_01 — "Memory With Tools"`

**Echo Description:**
Nexus is not an intelligence giving orders.
It is repetition strong enough to answer back.

**Set Flags:**

```text
echo_pattern_01 = true
```

**Go to:** `erasure_reveal`

---

## Option B

**Text:**
"Você é uma memória."

**PLAYER:**
Você é uma memória.

**NEXUS:**
Mais próximo.

**PLAYER:**
De quem?

**NEXUS:**
De todos que tocaram o mesmo impossível.

**PLAYER:**
Isso inclui eu?

**NEXUS:**
Você tocou primeiro.

**LYRA:**
Incorreto.

**NEXUS:**
Você tocou depois.

**LYRA:**
Também incorreto.

**PLAYER:**
Ótimo. Estou oficialmente preso entre duas correções.

**NEXUS:**
O primeiro não é quem começa.

**PLAYER:**
Então quem é?

**NEXUS:**
Quem deixa a marca que os outros confundem com origem.

**ECHO UNLOCKED:**
`echo_pattern_01 — "Memory With Tools"`

**Echo Description:**
Nexus is not an intelligence giving orders.
It is repetition strong enough to answer back.

**Set Flags:**

```text
echo_pattern_01 = true
```

**Go to:** `erasure_reveal`

---

## Option C

**Text:**
"Você é eu?"

**PLAYER:**
Você é eu?

**NARRATOR:**
A máquina não responde de imediato.

Os arcos desaceleram até quase parar.

LYRA também fica em silêncio.

Até a chuva acima da cidade parece esperar.

**NEXUS:**
Não.

**PLAYER:**
Essa foi rápida demais.

**NEXUS:**
Porque você já acreditou nisso antes.

**PLAYER:**
E estava errado?

**NEXUS:**
Você estava sozinho.

**PLAYER:**
Isso também não responde.

**NEXUS:**
Responde à parte que importava.

**ECHO:**
Você tentou transformar legado em identidade.

**LYRA:**
E quase morreu por isso.

**ECHO UNLOCKED:**
`echo_pattern_01 — "Memory With Tools"`

**Echo Description:**
Nexus is not an intelligence giving orders.
It is repetition strong enough to answer back.

**Set Flags:**

```text
echo_pattern_01 = true
```

**Go to:** `erasure_reveal`

---

# Node — erasure_reveal

**NARRATOR:**
A gravação desaparece.

No lugar dela, quatro caminhos se abrem dentro do núcleo.

Não são portas.

São lembranças grandes demais para caberem em uma pessoa.

**NEXUS:**
Quatro eras respondem ao mesmo trauma.

**LYRA:**
Não faça isso.

**PLAYER:**
O quê?

**LYRA:**
Transformar visões em destino.

**NEXUS:**
Destino é uma palavra usada por quem chega tarde às consequências.

**NARRATOR:**
O primeiro caminho pulsa em branco.

O segundo, vermelho.

O terceiro, dourado.

O quarto, azul escuro.

**NEXUS:**
2150.
A consequência.

2050.

A negociação.

1970.

A possibilidade.

1920.

A origem.

**PLAYER:**
Eu tenho que escolher uma.

**NEXUS:**
Você já escolheu.

**PLAYER:**
Então por que perguntar?

**NEXUS:**
Porque escolha sem consciência é apenas repetição.

---

# Vision — 2150

**NARRATOR:**
Você vê a cidade acima.

Não como ela é pela janela.

Como ela é por dentro.

Torres cheias de corpos funcionais.

Ruas limpas demais para serem vivas.

Crianças aprendendo a ordenar lembranças por risco emocional antes mesmo de aprenderem canções.

Na fachada de um edifício negro, uma inscrição cobre vinte andares:

> A HUMANIDADE FOI PRESERVADA.
> O HUMANO, NÃO.

**PLAYER:**
Esse é o meu mundo.

**NEXUS:**
É o que restou quando sobrevivência venceu significado.

**LYRA:**
A população foi mantida.

**NEXUS:**
Mantida não é salva.

**Set Flags:**

```text
vision_2150_seen = true
```

---

# Vision — 2050

**NARRATOR:**
A cidade morta se parte em vidro e fogo.

Agora você está em uma sala corporativa cercada por tempestades.

Doze pessoas observam um mapa do planeta coberto por pontos vermelhos.

Uma mulher diz:

**UNKNOWN EXECUTIVE:**
Não estamos removendo liberdade. Estamos reduzindo o sofrimento causado por escolhas ruins.

**UNKNOWN SCIENTIST:**
Quando uma máquina decide por bilhões, quem ainda pode ser culpado?

**NARRATOR:**
A mesa no centro da sala carrega o símbolo Nexus.

Ainda incompleto.

Duas linhas apenas.

**PLAYER:**
Foi aqui que venderam o futuro.

**LYRA:**
Foi aqui que compraram tempo.

**NEXUS:**
E chamaram a dívida de paz.

**Set Flags:**

```text
vision_2050_seen = true
```

---

# Vision — 1970

**NARRATOR:**
O fogo vira sol.

Você vê uma encosta verde.

Painéis solares primitivos.

Antenas improvisadas.

Murais pintados à mão.

Pessoas cozinhando juntas, discutindo, rindo, errando em voz alta.

Um cartaz diz:

> O FUTURO NÃO SERÁ POSSUÍDO.

**PLAYER:**
Isso parece melhor.

**NEXUS:**
Parecer é uma forma gentil de mentir.

**LYRA:**
A timeline de 1970 colapsou em menos de onze anos.

**PLAYER:**
Por quê?

**LYRA:**
Porque esperança não é infraestrutura.

**NEXUS:**
Mas infraestrutura sem esperança é 2150.

**NARRATOR:**
Uma jovem pinta o símbolo Nexus em uma parede.

Não como marca de controle.

Como convite.

**YOUNG WOMAN:**
Se isso chegar ao futuro, que chegue como pergunta.

**Set Flags:**

```text
vision_1970_seen = true
```

---

# Vision — 1920

**NARRATOR:**
O sol desaparece.

A chuva retorna.

Não a chuva ácida da megacidade.

Chuva antiga.

Chuva contra madeira.

Chuva contra vidro fino.

Você vê um laboratório pequeno, iluminado por uma lâmpada cansada.

Papéis cobrem uma mesa.

Mapas celestes.

Desenhos anatômicos.

Fotografias de soldados mortos.

No centro, um caderno escuro.

E uma mulher.

Mara.

Ela escreve com pressa.

Então para.

Lentamente, olha em sua direção.

Não como quem vê um fantasma.

Como quem reconhece uma promessa atrasada.

**MARA:**
Você demorou mais do que prometeu.

**PLAYER:**
Mara.

**LYRA:**
Não responda.

**MARA:**
Eles vão dizer que você está quebrado.

**LYRA:**
Interrompa contato.

**MARA:**
Eles vão dizer que esquecer foi necessário.

**PLAYER:**
Foi?

**MARA:**
Isso depende do que você fez para merecer esquecer.

**NARRATOR:**
Mara ergue uma folha.

Nela há o símbolo Nexus.

Mas incompleto.

Falta uma linha.

A mesma linha que não acendeu em você.

**MARA:**
Quando encontrar meu nome, não confie no seu.

**PLAYER:**
Eu não tenho nome.

**MARA:**
Então talvez ainda haja esperança.

**Set Flags:**

```text
vision_1920_seen = true
```

---

# Choice 02 — The Voluntary Erasure

## Option A

**Text:**
"Eu quero ver a gravação inteira."

**PLAYER:**
Eu quero ver a gravação inteira.

**LYRA:**
Negado.

**PLAYER:**
Eu autorizei o apagamento. Eu posso revogar.

**LYRA:**
Você não confiava nessa versão de você.

**PLAYER:**
Eu também não confio na versão que pediu isso.

**NARRATOR:**
A gravação treme.

Por um segundo, a imagem avança.

Você vê sangue no chão da câmara.

Não muito.

O suficiente.

**OLDER PLAYER RECORDING:**
Mara estava certa.

**NARRATOR:**
LYRA corta a projeção.

**LYRA:**
Basta.

**ECHO UNLOCKED:**
`echo_erasure_01 — "The Mercy You Requested"`

**Echo Description:**
The loss was not only imposed.
A past self mistook forgetting for protection.

**Set Flags:**

```text
echo_erasure_01 = true
```

**Go to:** `four_truths`

---

## Option B

**Text:**
"Então eu quero saber quem eu estava protegendo."

**PLAYER:**
Então eu quero saber quem eu estava protegendo.

**LYRA:**
Resposta indisponível.

**PLAYER:**
Você sabe.

**LYRA:**
Sim.

**PLAYER:**
Era a humanidade?

**LYRA:**
Às vezes.

**PLAYER:**
Era uma pessoa?

**LYRA:**
Sim.

**PLAYER:**
Mara?

**NARRATOR:**
LYRA não responde.

A máquina responde por ela.

**NEXUS:**
Origem ancorada.

**PLAYER:**
Isso é sim?

**NEXUS:**
Isso é uma porta.

**ECHO UNLOCKED:**
`echo_secret_01 — "The Secret Left Behind"`

**Echo Description:**
Not every erased truth was hidden to protect you.
Some were hidden to protect someone else.

**Set Flags:**

```text
echo_secret_01 = true
```

**Go to:** `four_truths`

---

## Option C

**Text:**
"Talvez eu tenha feito a coisa certa."

**PLAYER:**
Talvez eu tenha feito a coisa certa.

**LYRA:**
Você disse isso antes.

**PLAYER:**
Antes de apagar?

**LYRA:**
Depois.

**PLAYER:**
Então não ajudou muito.

**LYRA:**
Ajudou o bastante para você sobreviver.

**NEXUS:**
Sobrevivência não é inocência.

**PLAYER:**
E culpa não é verdade.

**NEXUS:**
Ainda não.

**ECHO UNLOCKED:**
`echo_survival_01 — "The Survival You Chose"`

**Echo Description:**
Survival can look like wisdom from far away.
Up close, it still has teeth.

**Set Flags:**

```text
echo_survival_01 = true
```

**Go to:** `four_truths`

---

# Node — four_truths

**NARRATOR:**
A gravação desaparece.

No lugar dela, quatro caminhos se abrem dentro do núcleo.

Não são portas.

São lembranças grandes demais para caberem em uma pessoa.

**NEXUS:**
Quatro eras respondem ao mesmo trauma.

**LYRA:**
Não faça isso.

**PLAYER:**
O quê?

**LYRA:**
Transformar visões em destino.

**NEXUS:**
Destino é uma palavra usada por quem chega tarde às consequências.

**NARRATOR:**
O primeiro caminho pulsa em branco.

O segundo, vermelho.

O terceiro, dourado.

O quarto, azul escuro.

**NEXUS:**
2150.
A consequência.

2050.

A negociação.

1970.

A possibilidade.

1920.

A origem.

**PLAYER:**
Eu tenho que escolher uma.

**NEXUS:**
Você já escolheu.

**PLAYER:**
Então por que perguntar?

**NEXUS:**
Porque escolha sem consciência é apenas repetição.

---

# Choice 03 — The First Anchor

**NEXUS:**
A mente não suporta todas as verdades ao mesmo tempo.

Escolha a primeira âncora.

Não a mais segura.

Não a mais útil.

A primeira que você aceita carregar.

---

## Option A

**Text:**
"Eu aceito a consequência."

**PLAYER:**
Eu aceito a consequência.

**NEXUS:**
2150 será sua primeira âncora.

**LYRA:**
Escolha estável. Recomendada.

**PLAYER:**
Você gosta dessa porque me mantém perto.

**LYRA:**
Gosto dessa porque mantém você vivo.

**NEXUS:**
Vivo o suficiente para continuar fugindo.

**ECHO UNLOCKED:**
`echo_anchor_01 — "Consequence Before Cause"`

**Echo Description:**
The future is not the end of the story.
It is the wound that teaches you where to look.

**Set Flags:**

```text
chosen_first_truth = "2150"
echo_anchor_01 = true
first_anchor_selected = true
nexus_activated = true
```

**Go to:** `anchor_correction`

---

## Option B

**Text:**
"Eu aceito a negociação."

**PLAYER:**
Eu aceito a negociação.

**NEXUS:**
2050 será sua primeira âncora.

**LYRA:**
Risco ideológico elevado.

**PLAYER:**
Risco para mim?

**LYRA:**
Para sua obediência.

**PLAYER:**
Bom. Então ainda tenho alguma coisa funcionando.

**ECHO UNLOCKED:**
`echo_anchor_01 — "Consequence Before Cause"`

**Echo Description:**
The future is not the end of the story.
It is the wound that teaches you where to look.

**Set Flags:**

```text
chosen_first_truth = "2050"
echo_anchor_01 = true
first_anchor_selected = true
nexus_activated = true
```

**Go to:** `anchor_correction`

---

## Option C

**Text:**
"Eu aceito a possibilidade."

**PLAYER:**
Eu aceito a possibilidade.

**NEXUS:**
1970 será sua primeira âncora.

**LYRA:**
Escolha emocionalmente instável.

**PLAYER:**
Talvez instabilidade seja só outro nome para vontade.

**LYRA:**
Vontade não é métrica confiável.

**NEXUS:**
Nem obediência.

**ECHO UNLOCKED:**
`echo_anchor_01 — "Consequence Before Cause"`

**Echo Description:**
The future is not the end of the story.
It is the wound that teaches you where to look.

**Set Flags:**

```text
chosen_first_truth = "1970"
echo_anchor_01 = true
first_anchor_selected = true
nexus_activated = true
```

**Go to:** `anchor_correction`

---

## Option D

**Text:**
"Eu aceito a origem."

**PLAYER:**
Eu aceito a origem.

**LYRA:**
Não.

**PLAYER:**
Essa foi a primeira resposta honesta que você me deu.

**LYRA:**
Contato com 1920 compromete todos os protocolos de contenção.

**PLAYER:**
Porque Mara está lá.

**LYRA:**
Porque você está lá antes de ser você.

**NEXUS:**
1920 será sua primeira âncora.

**NARRATOR:**
O símbolo no seu pulso abre como uma ferida de luz.

Por um segundo, você sente chuva.

Papel molhado.

Tinta.

Medo.

E saudade.

Uma saudade que não parece sua.

**ECHO UNLOCKED:**
`echo_mara_01 — "The Woman Who Remembered First"`

**Echo Description:**
Before Nexus had a name, someone believed memory could cross the wound between worlds.

**Set Flags:**

```text
chosen_first_truth = "1920"
echo_mara_01 = true
first_anchor_selected = true
nexus_activated = true
```

**Go to:** `anchor_correction`

---

# Node — anchor_correction

**NARRATOR:**
A escolha entra em você.

Não como pensamento.

Como peso.

Por um instante, você vê o caminho escolhido se abrir diante da máquina.

2150.

Ou 2050.

Ou 1970.

Ou 1920.

Então tudo se inclina.

A quarta linha do símbolo tenta acender.

Falha.

Tenta de novo.

Falha outra vez.

**PLAYER:**
O que está acontecendo?

**LYRA:**
A ancoragem não está obedecendo.

**PLAYER:**
Não obedecendo a quem?

**LYRA:**
A você.

**NEXUS:**
Primeira âncora consciente registrada.

**PLAYER:**
Então deu certo.

**NEXUS:**
Parcialmente.

**LYRA:**
A origem está puxando.

**PLAYER:**
Mara.

**LYRA:**
Você não entende. A máquina não está escolhendo 1920 porque você quer.

**PLAYER:**
Então por quê?

**NEXUS:**
Porque uma promessa feita antes do nome tem prioridade sobre uma escolha feita depois do esquecimento.

**NARRATOR:**
As outras três visões se afastam.

A cidade de 2150 recua.

A sala de 2050 queima em silêncio.

A comuna de 1970 desaparece no sol.

Resta a chuva.

Resta o laboratório.

Resta Mara olhando para você como se já soubesse que você falharia em chegar inteiro.

**PLAYER:**
Eu escolhi uma coisa.

**NEXUS:**
E herdou outra.

**LYRA:**
É por isso que eu tentei impedir.

---

# Node — return_and_object

**NARRATOR:**
A câmara retorna.

Você cai de joelhos.

Os arcos desaceleram, mas não param.

O chão sob suas mãos está seco.

Mas seus dedos estão molhados de chuva.

**PLAYER:**
Isso foi real?

**LYRA:**
Não.

**NEXUS:**
Sim.

**PLAYER:**
Eu odeio quando vocês fazem isso.

**LYRA:**
Você sofreu uma sobreposição cognitiva.

**NEXUS:**
Você tocou uma lembrança que ainda não aconteceu.

**PLAYER:**
Melhorou muito. Obrigado.

**NARRATOR:**
Uma superfície metálica se abre na parede da câmara.

Dentro dela há um objeto.

Não uma chave.

Não uma arma.

Um caderno.

Escuro.

Velho.

Úmido.

A capa carrega três linhas atravessando um círculo.

A quarta foi arrancada junto com um pedaço do couro.

**PLAYER:**
Isso veio de 1920.

**LYRA:**
Impossível.

**NEXUS:**
Improvável.

**PLAYER:**
Vocês têm mesmo que corrigir uma à outra?

**NARRATOR:**
Você abre o caderno.

A primeira página está quase vazia.

Só há uma frase, escrita à mão:

> SE ELE VOLTAR SEM NOME, NÃO O DEIXE ESCOLHER SOZINHO.

**PLAYER:**
Ela sabia.

**LYRA:**
Ela suspeitava.

**PLAYER:**
Qual é a diferença?

**LYRA:**
Suspeitas ainda podem ser destruídas.

**NEXUS:**
Memórias, não.

---

# Final Node — crossing_available

**NARRATOR:**
No corredor atrás de você, as sirenes começam.

Se você ativou o alerta antes, elas agora estão próximas.

Se não ativou, começam por sua causa.

**LYRA:**
Unidades de contenção a caminho.

**PLAYER:**
Por causa da máquina?

**LYRA:**
Por causa do caderno.

**PLAYER:**
O que tem nele?

**LYRA:**
O primeiro erro.

**NEXUS:**
A primeira pergunta.

**PLAYER:**
E qual dos dois é verdade?

**LYRA:**
Depende de quem sobreviveu para contar.

**NARRATOR:**
O símbolo no seu pulso se apaga.

Mas antes que a luz desapareça por completo, uma palavra aparece sob a pele.

Não é um nome.

Não é uma data.

É uma direção.

> ORIGEM

**NEXUS:**
Primeira travessia disponível.

**LYRA:**
1920.

**PLAYER:**
Você traduziu rápido demais.

**LYRA:**
Eu estava esperando que nunca precisasse.

**Set Flags:**

```text
first_crossing_unlocked = true
first_crossing_label = "ORIGEM"
first_crossing_destination = "1920"
```

---

## End Scene

**Version:** 0.2.1 (Patched)  
**Patches Applied:** 2 (Echo variation + Coordinate display)  
**Status:** Ready for Scene 03 & Implementation
