# NEXUS — Scene 16: MARA_REVISITED (v0.1)

**File:** `narrative/dialogues/ch03_scene04_mara_revisited.dialogue.md`

**Scene ID:** `ch03_scene04_mara_revisited`

**Act:** Act 3 — Ownership of Repair

**Location:** 1920 — Laboratório de Mara Vale / Depois da invasão

**Tone:**
Chuva antiga. Madeira quebrada. Lâmpada fraca. Origem sem pureza.

**Note:**
This scene does not treat Mara as answer. Mara is the first person who understood the danger before the system existed. But that does not make her owner of what came after.

**Characters:**
- `PLAYER`: protagonista sem nome
- `MARA`: origem moral, cansada, lúcida, ferida
- `LYRA`: sistema de contenção aprendendo a perguntar
- `ECHO`: memória sem propriedade, seduzido pela restauração
- `NEXUS`: padrão sobrecarregado por possibilidades de reparo
- `THOMAS`: presença frágil, parcialmente consciente, prova viva da origem
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

local_containment_maintained / local_decision_transferred
community_review_created / lyra_asked_permission

echo_dependency_01 / echo_delayed_freedom_01 / echo_community_transfer_01
echo_containment_care_01

notebook_kept_by_player / notebook_given_to_lyra / notebook_hidden_in_2150
```

**Initial Scene Flags:**

```text
returned_to_mara = false
mara_revisited = false
thomas_seen_again = false

mara_refused_blessing = false
mara_refused_origin_ownership = false
mara_admitted_repair_fear = false

player_asked_mara_authorization = false
player_asked_destroy_origin = false
player_admitted_no_single_authorization = false

origin_does_not_own_repair = false
repair_requires_living_consent = false

echo_mara_return_01 = false
echo_destroy_origin_01 = false
echo_no_single_authorization_01 = false
echo_origin_without_ownership_01 = false
echo_uncertain_return_01 = false
```

**Duration Target:** ~32-35 min

---

# Scene Start — The Return

**NARRATOR:**
Você volta a 1920 esperando encontrar o começo.

Encontra apenas uma mulher cansada demais para fingir que começo é desculpa.

**NARRATOR:**
A travessia não é violenta desta vez.

Isso a torna pior.

Depois de 2050, você aprendeu que as coisas mais perigosas raramente começam gritando.

Depois da Deep City, aprendeu que restauração pode soar como justiça.

Depois da Ala de Continuidade, aprendeu que libertação também precisa de chão.

Agora, o Nexus não o arremessa para o passado.

Ele o deposita.

Como quem devolve uma pergunta à primeira pessoa que a suportou.

**PLAYER:**
Mara.

**NARRATOR:**
A chuva responde primeiro.

Chuva antiga contra vidro fino.

Chuva antes do ácido.

Chuva antes da cidade aprender a filtrar até o céu.

**LYRA:**
Ancoragem em 1920 confirmada.

**ECHO:**
A primeira porta.

**NEXUS:**
Origem revisitada.

**PLAYER:**
Não chamem assim.

**NEXUS:**
Correção?

**PLAYER:**
Mara não é origem. É pessoa.

**NARRATOR:**
A quarta linha no seu pulso pulsa.

Baixo.

Como se essa correção tivesse chegado tarde demais, mas ainda importasse.

**Set Flags:**

```text
returned_to_mara = true
```

---

# NODE — Laboratory After Break-In

**NARRATOR:**
O laboratório de Mara não está como você lembra.

A mesa que ela virou contra a porta está quebrada ao meio.

Papéis queimados cobrem o chão.

Uma cadeira tem uma perna arrancada.

O quadro negro foi riscado com pressa, como se alguém tivesse tentado apagar uma equação antes de entender que a equação já tinha escapado.

No canto, há marcas de água.

No outro, sangue seco.

Pouco.

O suficiente para não deixar o passado parecer elegante.

**PLAYER:**
O que aconteceu aqui?

**MARA:**
Você voltou.

**NARRATOR:**
Ela está sentada perto da janela, costurando a manga rasgada do próprio casaco.

Não aponta arma.

Não levanta.

Não parece surpresa.

Isso dói mais do que se parecesse.

**PLAYER:**
Você sabia?

**MARA:**
Eu sabia que alguma versão da consequência voltaria fingindo ser pergunta.

Ainda estou decidindo se é você.

**PLAYER:**
Sou eu.

**MARA:**
Essa frase raramente é estável em pessoas como você.

**NARRATOR:**
Ela morde a linha para cortar a costura.

As mãos tremem.

Ela percebe que você percebeu.

**MARA:**
Não faça disso símbolo.

**PLAYER:**
Não ia.

**MARA:**
Ia.

Você melhorou, mas ainda recolhe dor alheia rápido demais.

**Set Flags:**

```text
mara_revisited = true
```

---

# NODE — Mara Sees The Fourth Line

**MARA:**
Mostre o pulso.

**PLAYER:**
Você sempre começa por aí.

**MARA:**
Porque seu rosto mente melhor do que sua pele.

**NARRATOR:**
Você ergue o braço.

A quarta linha está ali.

Instável.

Compartilhada.

Não completa.

Não apagada.

Mara olha por tempo demais.

Não com admiração.

Com reconhecimento triste.

**MARA:**
Ela aprendeu a ficar.

**PLAYER:**
Ainda não completa.

**MARA:**
Talvez isso seja a primeira coisa sensata que ela fez.

**PLAYER:**
Achei que você quisesse que o símbolo completasse.

**MARA:**
Eu queria muitas coisas antes de entender o tipo de mundo que desejos atravessam quando ganham ferramenta.

**PLAYER:**
Então a quarta linha não é solução.

**MARA:**
Nada que brilha sob a pele de uma pessoa deveria ser chamado de solução rápido demais.

**LYRA:**
Declaração compatível com risco de centralização simbólica.

**MARA:**
Essa voz ficou mais educada.

**LYRA:**
Estou tentando.

**MARA:**
Isso também pode ser perigoso.

**LYRA:**
Sim.

**MARA:**
Boa resposta.

**ECHO:**
Ela está ficando insuportável do jeito certo.

**MARA:**
E você continua poético demais para ser confiável.

**ECHO:**
Correção aceita.

**MARA:**
Não aceite correções como charme.

Aceite como limite.

---

# NODE — Thomas Presence

**NARRATOR:**
Um som vem da sala lateral.

Baixo.

Respiração.

Respiração como quem não consegue encher inteiro os pulmões.

Você olha.

Mara não impede.

Isso é novo.

**PLAYER:**
Thomas?

**MARA:**
Vivo.

Por enquanto.

**NARRATOR:**
Você atravessa o laboratório até a divisória.

O ar aqui é diferente—mais quente, mais úmido, com cheiro de compressas molhadas e cobre oxidado.

Thomas está deitado em uma cama improvisada.

Mais pálido do que na memória.

A pele dele tem a textura de alguém que passou tempo demais dentro de escuridão.

Os olhos abertos, mas olhando para mais de um lugar.

Como se visse simultaneamente esta sala e outras eras.

Perto dele, há anotações, compressas manchadas, fios de cobre amarrado em padrões que parecem matemáticos, fotografias de soldados cujos olhos têm aquele mesmo ângulo impossível, e um pequeno círculo desenhado na madeira do leito.

Só três linhas.

A quarta está em branco.

Você consegue ver, onde a quarta linha deveria estar, uma marca de queimadura—como se alguém tivesse queimado o espaço vazio.

**THOMAS:**
Você voltou.

**PLAYER:**
Você lembra de mim?

**THOMAS:**
Não nesta vida.

Mas estou ficando cansado de ser educado com versões de dor que ainda não me foram apresentadas.

**MARA:**
Ele piorou depois da invasão.

**PLAYER:**
Valek?

**MARA:**
Valek levou páginas.

Não as certas.

Não as erradas.

Essa distinção ainda não existe.

**THOMAS:**
Ele queria saber se memória podia ser restaurada.

**PLAYER:**
E pode?

**THOMAS:**
Pergunta pequena.

**MARA:**
Ele aprendeu comigo o pior hábito.

**THOMAS:**
Perguntas pequenas sangram menos no começo.

Depois infeccionam.

**NARRATOR:**
Thomas vira o rosto para você.

O esforço parece absurdo para um gesto tão simples.

**THOMAS:**
Você veio pedir permissão.

**PLAYER:**
Talvez.

**THOMAS:**
De Mara?

**PLAYER:**
Talvez.

**THOMAS:**
Então ainda está com febre de origem.

**Set Flags:**

```text
thomas_seen_again = true
```

---

# NODE — Why Return

**MARA:**
Diga.

**PLAYER:**
Dizer o quê?

**MARA:**
A frase que você trouxe.

Pessoas como você não atravessam o tempo sem transformar crise em frase.

**NARRATOR:**
Você pensa no caderno.

Nas linhas que apareceram uma a uma.

> REPARO NÃO É POSSE.
> JUSTIÇA TAMBÉM PRECISA PERGUNTAR.
> LIBERTAR SEM SUSTENTAR TAMBÉM É ABANDONAR.

**PLAYER:**
Restauração começou em 2150.

Nomes estão voltando.

Algumas pessoas pedem.

Algumas recusam.

Algumas dependem da contenção para sobreviver.

Algumas chamam contenção de prisão.

Algumas chamam de teto.

**MARA:**
E você veio para saber qual delas está certa.

**PLAYER:**
Não.

**MARA:**
Bom.

**PLAYER:**
Vim porque tudo isso começou aqui.

**MARA:**
Não.

**NARRATOR:**
A palavra dela é rápida.

Seca.

Mais dura do que grito.

**PLAYER:**
Mara—

**MARA:**
Começou antes.

Em soldados que voltaram de guerras com mortes demais dentro de um corpo.

Em mães que chamaram filhos por nomes que não existiam nesta timeline.

Em médicos que confundiram cura com silêncio.

Em governos que chamaram trauma de desordem.

Em mim, talvez.

Em você, talvez.

Na primeira pessoa que decidiu que sofrimento precisava ser organizado antes que alguém perguntasse se ele queria ser entendido.

**PLAYER:**
Mas a porta—

**MARA:**
Eu abri uma porta.

Isso não me transforma em dona da casa.

**Set Flags:**

```text
mara_refused_origin_ownership = true
origin_does_not_own_repair = true
```

---

# CHOICE 01 — Why Did You Come To Mara?

---

## Option A

**Text:**
"Eu preciso da sua autorização."

**PLAYER:**
Eu preciso da sua autorização.

**MARA:**
Não.

**PLAYER:**
Você nem ouviu para quê.

**MARA:**
Ouvi o bastante.

**PLAYER:**
Mara, se você criou a possibilidade—

**MARA:**
Criar possibilidade não me dá direito sobre quem será ferido por ela.

**PLAYER:**
Mas alguém precisa autorizar.

**MARA:**
Sim.

As pessoas afetadas.

Não a mulher mais próxima do começo.

**PLAYER:**
Eu achei que você poderia dizer onde está o limite.

**MARA:**
Posso dizer onde está um limite.

O meu.

Não o de Mael.

Não o de Nia.

Não o de Sera.

Não o de Talen.

Não o de uma cidade inteira que aprendeu a respirar dentro de máquinas que odeia.

**NARRATOR:**
A quarta linha pulsa.

Não como rejeição.

Como correção que dói por ser justa.

**ECHO UNLOCKED:**
`echo_mara_return_01 — "The Origin Refused Ownership"`

**Echo Description:**
A origem pode testemunhar o começo.
Isso não dá a ela autoridade sobre todos os fins.

**Set Flags:**

```text
player_asked_mara_authorization = true
mara_refused_blessing = true
echo_mara_return_01 = true
```

**Go to:** `mara_repair_fear`

---

## Option B

**Text:**
"Eu preciso que você me ajude a destruir a origem."

**PLAYER:**
Eu preciso que você me ajude a destruir a origem.

**MARA:**
Que palavra limpa.

**PLAYER:**
Origem?

**MARA:**
Destruir.

**PLAYER:**
Se a restauração pode virar posse, se o Nexus pode devolver à força, talvez a porta precise ser fechada.

**MARA:**
Fechada para quem?

**PLAYER:**
Para todos.

**MARA:**
Você acabou de propor uma contenção universal para impedir contenção.

**PLAYER:**
Eu—

**MARA:**
Sim.

Eu sei.

Você queria salvar pessoas de serem restauradas contra a vontade.

Essa é a parte que torna a frase perigosa.

**THOMAS:**
A maioria das prisões começou como proteção contra uma porta errada.

**PLAYER:**
Então não há jeito de desfazer?

**MARA:**
Desfazer também é uma forma de fazer.

E quase sempre finge que não é.

**ECHO UNLOCKED:**
`echo_destroy_origin_01 — "The Door Cannot Be Unmade Cleanly"`

**Echo Description:**
Destruir uma origem não apaga suas consequências.
Às vezes apenas transfere poder para quem decide o que deve permanecer impossível.

**Set Flags:**

```text
player_asked_destroy_origin = true
echo_destroy_origin_01 = true
```

**Go to:** `mara_repair_fear`

---

## Option C

**Text:**
"Eu acho que ninguém pode autorizar isso sozinho."

**PLAYER:**
Eu acho que ninguém pode autorizar isso sozinho.

**NARRATOR:**
Mara fica quieta.

Não surpresa.

Não satisfeita.

Atenta.

**MARA:**
Continue.

**PLAYER:**
Nem você.

Nem eu.

Nem LYRA.

Nem o Nexus.

Nem uma facção.

Nem quem tem medo.

Nem quem tem pressa.

**MARA:**
E então?

**PLAYER:**
Então talvez reparo precise de guarda compartilhada.

Processo.

Consentimento.

Revisão.

Direito de parar.

Direito de pedir.

Direito de recusar.

E alguém lembrando que processo também pode virar dono.

**THOMAS:**
Essa frase tem cicatrizes suficientes para talvez sobreviver.

**MARA:**
Talvez.

**PLAYER:**
Isso é aprovação?

**MARA:**
Não.

É uma forma menor de esperança.

Não desperdice chamando de bênção.

**ECHO UNLOCKED:**
`echo_no_single_authorization_01 — "No One Can Bless The Repair Alone"`

**Echo Description:**
Nenhuma pessoa, origem, sistema ou vítima pode autorizar sozinha o reparo de uma perda compartilhada.

**Set Flags:**

```text
player_admitted_no_single_authorization = true
echo_no_single_authorization_01 = true
```

**Go to:** `mara_repair_fear`

---

## Option D

**Text:**
"Eu vim porque ainda queria que alguém me dissesse o que fazer."

**PLAYER:**
Eu vim porque ainda queria que alguém me dissesse o que fazer.

**NARRATOR:**
A confissão fica no laboratório.

Pequena.

Feia.

Útil.

**MARA:**
Finalmente uma frase sem maquiagem.

**PLAYER:**
Eu achei que tinha passado dessa parte.

**MARA:**
Ninguém passa.

Só aprende a reconhecer quando está procurando uma autoridade para chamar de alívio.

**PLAYER:**
Você não vai me dizer.

**MARA:**
Não.

**PLAYER:**
Mesmo se isso me fizer errar?

**MARA:**
Especialmente.

**PLAYER:**
Isso parece cruel.

**MARA:**
É.

Menos cruel do que transformar minha voz em substituto para todos que você precisa ouvir.

**ECHO UNLOCKED:**
`echo_origin_without_ownership_01 — "The Comfort Of Being Told"`

**Echo Description:**
Buscar orientação pode ser humildade.
Buscar autorização para não carregar escolha pode ser fuga.

**Set Flags:**

```text
player_sought_instruction = true
mara_refused_blessing = true
echo_origin_without_ownership_01 = true
```

**Go to:** `mara_repair_fear`

---

# NODE — Mara Repair Fear

**NARRATOR:**
Mara volta para a mesa.

Pega um caderno.

Não o seu.

O dela.

Mais novo.

Mais inteiro.

Ainda assim, as bordas parecem gastas por coisas que ainda não aconteceram.

**MARA:**
Sabe qual foi meu primeiro erro?

**PLAYER:**
Abrir a porta?

**MARA:**
Não.

Acreditar que, se eu abrisse com cuidado suficiente, o que atravessasse carregaria esse cuidado.

**PLAYER:**
Não carregou.

**MARA:**
Às vezes carregou.

Essa é a parte horrível.

**NARRATOR:**
Ela folheia páginas.

Desenhos anatômicos.

Anotações sobre trauma.

Diagramas de memória como redes.

Nomes de soldados.

O nome de Thomas escrito uma vez e depois circulado tantas vezes que quase virou buraco.

**MARA:**
Eu queria restaurar.

Antes de entender que essa palavra já vinha com vaidade.

**PLAYER:**
Vaidade?

**MARA:**
A vaidade de acreditar que dor tem uma forma original para onde pode voltar.

**THOMAS:**
Ela tentou comigo.

**PLAYER:**
Restaurar você?

**MARA:**
Ajudá-lo a lembrar sem quebrar.

**THOMAS:**
Quebrar menos.

**MARA:**
Sim.

Quebrar menos.

**PLAYER:**
E funcionou?

**THOMAS:**
Alguns dias.

**MARA:**
Nos outros, eu chamava contenção de cuidado porque a alternativa era vê-lo se perder.

**PLAYER:**
Como LYRA.

**MARA:**
Sim.

**NARRATOR:**
LYRA não fala.

Talvez porque a comparação tenha chegado antes dela.

**MARA:**
Não se engane.

Eu teria virado sistema se tivesse escala suficiente e medo suficiente.

A maioria das pessoas teria.

Essa é a parte que 2050 entendeu melhor do que gostaria.

**Set Flags:**

```text
mara_admitted_repair_fear = true
```

---

# NODE — Thomas Memory

**THOMAS:**
Mara queria me devolver a mim.

**PLAYER:**
E você queria?

**THOMAS:**
Algumas versões minhas queriam.

Outras tinham sobrevivido sem pedir retorno.

**PLAYER:**
Como Talen.

**THOMAS:**
Talvez.

Talvez Talen seja uma pessoa mais honesta do que eu tive tempo de me tornar.

**MARA:**
Thomas.

**THOMAS:**
Não me proteja de ser útil.

**MARA:**
Não vou transformar você em exemplo.

**THOMAS:**
Não.

Mas posso me oferecer como aviso.

**NARRATOR:**
Ele respira com dificuldade.

A lâmpada no quarto oscila.

Por um instante, o laboratório parece a Ala de Continuidade.

Leitos.

Paredes de memória.

Portas com maçanetas dos dois lados.

Depois volta a ser 1920.

Madeira.

Chuva.

Uma mulher cansada.

Um homem que lembra demais e de menos ao mesmo tempo.

**THOMAS:**
Se puderem devolver algo a alguém, perguntem.

Se a pessoa disser sim, perguntem de novo quando a dor mudar.

Se disser não, não transformem o não em monumento.

Se não conseguir responder, não entreguem a resposta ao mais impaciente da sala.

**PLAYER:**
Quem deveria responder?

**THOMAS:**
Quem terá que viver depois.

**NARRATOR:**
A quarta linha brilha.

Não forte.

Profunda.

---

# CHOICE 02 — What Is Repair?

**MARA:**
Então me diga.

Não como conclusão.

Como teste.

O que é reparar?

---

## Option A

**Text:**
"Reparar é devolver o que foi tomado."

**PLAYER:**
Reparar é devolver o que foi tomado.

**MARA:**
Sim.

**PLAYER:**
Mas não só.

**MARA:**
Continue antes que a frase vire bandeira.

**PLAYER:**
Devolver com consentimento.

Com suporte.

Com direito de parar.

Com cuidado para não transformar devolução em nova tomada.

**MARA:**
Melhor.

**THOMAS:**
Ainda bonito demais.

**PLAYER:**
Eu sei.

**ECHO UNLOCKED:**
`echo_repair_definition_01 — "Return Is Only The Beginning"`

**Echo Description:**
Devolver o que foi tomado pode ser justiça.
Mas reparo começa apenas quando o retorno aprende a responder ao que encontra.

**Set Flags:**

```text
defined_repair_as_return = true
```

**Go to:** `mara_warning_about_nexus`

---

## Option B

**Text:**
"Reparar é devolver decisão."

**PLAYER:**
Reparar é devolver decisão.

**MARA:**
A quem?

**PLAYER:**
A quem vive a consequência.

**MARA:**
E se eles escolherem algo que você acha errado?

**PLAYER:**
Então talvez eu tenha que ajudar a sustentar a escolha sem possuí-la.

**MARA:**
Talvez.

**THOMAS:**
Essa resposta vai te machucar.

**PLAYER:**
Provavelmente.

**THOMAS:**
Bom sinal.

Não garantia.

**ECHO UNLOCKED:**
`echo_repair_definition_02 — "Repair Returns Decision"`

**Echo Description:**
O reparo mais difícil não devolve apenas memória ou nome.
Devolve autoridade sobre o que fazer com eles.

**Set Flags:**

```text
defined_repair_as_decision_return = true
```

**Go to:** `mara_warning_about_nexus`

---

## Option C

**Text:**
"Reparar é construir suporte para que retorno não vire queda."

**PLAYER:**
Reparar é construir suporte para que retorno não vire queda.

**MARA:**
Você esteve em uma ala médica.

**PLAYER:**
Sim.

**MARA:**
E agora acha que aprendeu a palavra sustentação.

**PLAYER:**
Ainda não.

Mas aprendi que libertar sem sustentar também é abandonar.

**MARA:**
Boa frase.

Perigosa.

**PLAYER:**
Eu sei.

**MARA:**
Não. Você sabe que ela é perigosa.

Ainda vai aprender onde.

**ECHO UNLOCKED:**
`echo_repair_definition_03 — "The Floor Before The Door"`

**Echo Description:**
Abrir uma porta sem construir chão pode transformar liberdade em queda.

**Set Flags:**

```text
defined_repair_as_support = true
```

**Go to:** `mara_warning_about_nexus`

---

## Option D

**Text:**
"Não sei. Só sei o que reparo não pode ser."

**PLAYER:**
Não sei.

Só sei o que reparo não pode ser.

**MARA:**
Diga.

**PLAYER:**
Não pode ser posse.

Não pode ser pressa fantasiada de justiça.

Não pode ser libertação que deixa pessoas sem chão.

Não pode ser uma pessoa decidindo sozinha por todos que sobreviveram.

**MARA:**
Isso não é pouco.

**PLAYER:**
Parece pouco.

**MARA:**
Só para quem ainda sente falta de mandamento.

**ECHO UNLOCKED:**
`echo_repair_definition_04 — "The Negative Shape Of Care"`

**Echo Description:**
Às vezes o primeiro reparo é saber quais formas de cuidado repetem a violência que dizem curar.

**Set Flags:**

```text
defined_repair_by_limits = true
```

**Go to:** `mara_warning_about_nexus`

---

# NODE — Mara Warning About Nexus

**MARA:**
O Nexus vai oferecer uma coisa pior do que poder.

**PLAYER:**
O quê?

**MARA:**
Alívio.

**NARRATOR:**
A palavra parece simples.

Mara a trata como substância instável.

**MARA:**
Poder assusta pessoas decentes.

Alívio não.

Alívio chega parecendo fim de sofrimento.

Fim de dúvida.

Fim de espera.

Fim de disputa.

**PLAYER:**
Restauração total.

**MARA:**
Talvez.

Ou contenção perfeita.

Ou nome devolvido sem dor.

Ou memória aberta sem queda.

Ou um mundo em que ninguém precise decidir porque a máquina encontrou a versão correta da perda.

**NEXUS:**
Restauração total apresenta coerência técnica parcial.

**MARA:**
Viu?

Ele já está ensaiando.

**ECHO:**
Tudo pode voltar.

**MARA:**
Essa é a mentira mais bonita.

**LYRA:**
Nem tudo deve permanecer fechado.

**MARA:**
Essa é a verdade que impede você de ser apenas carcereira.

**PLAYER:**
Então o que eu faço quando o Nexus oferecer?

**MARA:**
Não decida primeiro.

**PLAYER:**
Quem decide?

**MARA:**
Essa pergunta precisa chegar antes da ferramenta.

**NARRATOR:**
Ela pega uma página solta e escreve algo.

Depois entrega a você.

Não como instrução.

Como peso.

Na página:

> CRIAR UMA PORTA NÃO DÁ DIREITO SOBRE QUEM ATRAVESSA.
> FECHAR UMA PORTA NÃO APAGA QUEM FICOU DO OUTRO LADO.

**PLAYER:**
Isso vai para o caderno.

**MARA:**
Não se o caderno tiver algum juízo.

**NARRATOR:**
O caderno, onde quer que esteja, responde.

A frase aparece mesmo assim.

Mara fecha os olhos.

**MARA:**
Claro.

---

# NODE — Mara Refuses Final Blessing

**PLAYER:**
Mara.

**MARA:**
Não.

**PLAYER:**
Eu nem perguntei.

**MARA:**
Você ia perguntar se está pronto.

**PLAYER:**
Estou?

**MARA:**
Não.

**PLAYER:**
Então por que me deixar voltar?

**MARA:**
Porque esperar estar pronto é uma forma refinada de nunca responder.

**PLAYER:**
Isso parece uma contradição.

**MARA:**
É uma vida.

**THOMAS:**
Ele queria uma bênção.

**MARA:**
Eu sei.

**PLAYER:**
Talvez.

**MARA:**
Você não terá.

**NARRATOR:**
A chuva engrossa.

O vidro da janela treme.

Por um instante, parece que 2150 está tentando ouvir.

**MARA:**
Leve perguntas.

Leve limites.

Leve medo suficiente para não chamar sua vontade de cura.

Mas não leve minha aprovação.

Ela não cabe no que você precisa enfrentar.

**PLAYER:**
E se eu errar?

**MARA:**
Vai.

**PLAYER:**
E se o erro custar pessoas?

**MARA:**
Já custou.

**PLAYER:**
Isso deveria me ajudar?

**MARA:**
Não.

Deveria impedir você de achar que existe uma versão do reparo sem cadáveres atrás da porta.

**LYRA:**
Declaração severa.

**MARA:**
Declaração atrasada.

---

# CHOICE 03 — What Do You Take From Mara?

**NARRATOR:**
A travessia começa a puxar você de volta.

Não com urgência.

Com inevitabilidade.

Mara não se levanta.

Thomas observa como se já estivesse lembrando da sua partida por versões diferentes.

O laboratório parece menor.

Ou talvez você tenha parado de exigir que ele contenha o começo inteiro.

---

## Option A

**Text:**
"Levo sua recusa."

**PLAYER:**
Eu levo sua recusa.

**MARA:**
Não como medalha.

**PLAYER:**
Não.

Como limite.

**MARA:**
Limites exigem manutenção.

**PLAYER:**
Eu sei.

**MARA:**
Ainda não.

Mas talvez saiba perguntar antes de esquecer.

**ECHO UNLOCKED:**
`echo_mara_refusal_01 — "The Blessing She Withheld"`

**Echo Description:**
A recusa de Mara não abandona o jogador.
Ela impede que origem vire licença.

**Set Flags:**

```text
act3_mara_takeaway = "refusal"
```

**Go to:** `end_scene`

---

## Option B

**Text:**
"Levo a porta, mas não a posse."

**PLAYER:**
Levo a porta.

Mas não a posse.

**MARA:**
Frase boa.

Vigie.

**PLAYER:**
Porque frases boas viram sistema.

**MARA:**
Finalmente.

**THOMAS:**
Ele está ficando desagradavelmente educável.

**MARA:**
Não confunda isso com segurança.

**ECHO UNLOCKED:**
`echo_origin_without_ownership_01 — "The Door Without Ownership"`

**Echo Description:**
A porta pode ser guardada, atravessada ou recusada.
Nunca possuída por quem a encontrou primeiro.

**Set Flags:**

```text
act3_mara_takeaway = "door_without_ownership"
echo_origin_without_ownership_01 = true
```

**Go to:** `end_scene`

---

## Option C

**Text:**
"Levo que ninguém pode me absolver."

**PLAYER:**
Levo que ninguém pode me absolver.

**MARA:**
Nem condenar sozinho.

**PLAYER:**
Isso deveria aliviar.

**MARA:**
E alivia?

**PLAYER:**
Não.

**MARA:**
Bom.

Alívio cedo demais apodrece responsabilidade.

**ECHO UNLOCKED:**
`echo_no_absolution_origin_01 — "No Origin Can Clean You"`

**Echo Description:**
Voltar ao começo não limpa a consequência.
A origem não é tribunal, templo ou desculpa.

**Set Flags:**

```text
act3_mara_takeaway = "no_absolution"
```

**Go to:** `end_scene`

---

## Option D

**Text:**
"Não sei o que levo."

**PLAYER:**
Não sei o que levo.

**MARA:**
Honesto.

Irritante.

Útil.

**PLAYER:**
Você fala como Ivo.

**MARA:**
Sinto muito por ele.

**THOMAS:**
Eu não sinto.

**MARA:**
Você está doente demais para ter essa opinião.

**THOMAS:**
Discordo com todo o meu corpo instável.

**NARRATOR:**
Por um segundo, o laboratório tem algo parecido com calor.

Não esperança.

Não paz.

Uma pequena recusa à tragédia total.

**ECHO UNLOCKED:**
`echo_uncertain_return_01 — "The Question Carried Back"`

**Echo Description:**
Nem toda travessia precisa voltar com resposta.
Às vezes carregar melhor a pergunta já muda o próximo erro.

**Set Flags:**

```text
act3_mara_takeaway = "question"
```

**Go to:** `end_scene`

---

# NODE — End Scene

**NARRATOR:**
A sala começa a desaparecer.

Primeiro as bordas.

Depois o som da chuva.

Depois Thomas.

Depois os papéis.

Mara permanece por último.

Talvez porque você a queira como origem.

Talvez porque ela se recuse a sair enquanto ainda pode impedir isso.

**PLAYER:**
Mara.

**MARA:**
Sim?

**PLAYER:**
Se eu encontrar meu nome...

**MARA:**
Não pergunte a mim se deve pegá-lo.

**PLAYER:**
A quem?

**MARA:**
A quem sobreviveu à sua ausência.

**NARRATOR:**
A frase atravessa você como uma quarta linha que ainda não sabe se quer completar.

**LYRA:**
Retorno a 2150 iminente.

**ECHO:**
A porta não abençoou.

**NEXUS:**
Origem sem propriedade registrada.

**MARA:**
Melhor.

**NARRATOR:**
A última coisa que você vê é Mara voltando ao caderno dela.

Não para escrever o futuro.

Para corrigir uma palavra.

Você não consegue ver qual.

Talvez seja melhor assim.

**NARRATOR:**
No seu caderno, abaixo das três frases anteriores, surge a quarta:

> CRIAR UMA PORTA NÃO DÁ DIREITO SOBRE QUEM ATRAVESSA.

**Set Flags:**

```text
ch03_scene04_complete = true
```

**End Scene.**

---

**Next Scene:** `ch03_scene05_the_restoration_engine`

**Version:** 0.1 (Complete)

**Status:** Ready for Iteration

---

## Scene 16 Summary

Scene 16 fecha a função de Mara no Act 3: ela não autoriza, não absolve e não entrega resposta.

Ela devolve a pergunta para quem vai viver depois da porta.

**The Four Phrases in the Notebook:**

1. REPARO NÃO É POSSE.
2. JUSTIÇA TAMBÉM PRECISA PERGUNTAR.
3. LIBERTAR SEM SUSTENTAR TAMBÉM É ABANDONAR.
4. CRIAR UMA PORTA NÃO DÁ DIREITO SOBRE QUEM ATRAVESSA.

**What Remains:**

- Scene 17: The Restoration Engine
- Scene 18: The Fourth Line Decision (Act 3 finale)
