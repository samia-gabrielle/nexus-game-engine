# NEXUS — Dialogue Scene v0.2.1 (Patched)

**File:** `narrative/dialogues/ch01_scene01_2150_wakeup.dialogue.md`

**Scene ID:** `ch01_scene01_2150_wakeup`

**Location:** 2150 — Setor 9, Unidade de Recuperação Civil

**Characters:**
- PLAYER: protagonista sem memória
- LYRA: sistema administrativo fragmentado
- ECHO: ressonância emergente do Nexus
- SYSTEM: voz mecânica da unidade médica
- NARRATOR: narração ambiental

---

## Design Notes

**LYRA**
LYRA é o sistema de contenção da Unidade de Recuperação Civil.
Ela protege o protagonista de memórias instáveis, mas também impede que ele descubra a verdade rápido demais.
LYRA não mente com facilidade. Quando esconde algo, ela chama isso de protocolo, omissão ou contenção.

**ECHO**
ECHO ainda não se apresenta plenamente nesta cena.
Ele aparece apenas como falhas na comunicação, pausas longas, frases que LYRA não reconhece ter dito e interferências vindas da Máquina Nexus.
ECHO não é um guia tradicional. Ele é uma memória tentando atravessar o sistema.

**O Homem no Reflexo**
O homem visto no vidro é uma versão do próprio protagonista.
Ele pode ser futuro, passado, ou uma versão de outra timeline. O importante é que ele é real o suficiente para deixar rastro.

---

## Initial Flags

```
player_has_name = false
lyra_trust = 0
security_alert = false

echo_identity_01 = false
echo_obedience_01 = false
echo_defiance_01 = false

echo_body_01 = false
echo_self_01 = false
echo_avoidance_01 = false

symbol_inspected = false
reflection_seen = false
avoided_reflection = false

echo_interference_detected = false
nexus_door_found = false
```

---

## Scene Start

**NARRATOR:**
A primeira coisa que você sente é frio.

Não o frio do ar.

O frio de algo que esteve desligado por tempo demais.

**NARRATOR:**
Antes de abrir os olhos, você escuta água.

Gotas batendo contra vidro.

Lentas.

Ácidas.

Persistentes.

Por alguns segundos, esse som é a única prova de que o mundo ainda existe.

**SYSTEM:**
Reativação civil iniciada.

**NARRATOR:**
Sua consciência retorna em camadas.

Primeiro, o peso do corpo.

Depois, a dor nas articulações.

Depois, o gosto metálico na boca.

Por último, o medo.

**SYSTEM:**
Verificando sinais vitais.

Pulso: instável.

Temperatura: abaixo do limite humano recomendado.

Memória episódica: ausente.

Registro de identidade: corrompido.

**NARRATOR:**
Seus olhos se abrem dentro de uma cápsula vertical.

O vidro está embaçado por dentro.

Do lado de fora, luzes brancas falham no teto de uma sala médica abandonada. Algumas piscam como se estivessem tentando lembrar a própria função.

Além das janelas altas, uma megacidade se ergue em camadas infinitas de concreto, néon e chuva escura.

**SYSTEM:**
Bem-vindo de volta, cidadão.

**PLAYER:**
Onde eu estou?

**SYSTEM:**
Unidade de Recuperação Civil. Setor 9.

**PLAYER:**
Recuperação de quê?

**SYSTEM:**
De você.

**PLAYER:**
Isso não responde nada.

**SYSTEM:**
Resposta considerada suficiente para reintegração inicial.

**NARRATOR:**
A cápsula não abre.

Um cursor pisca no monitor à sua frente.

A tela mostra um corpo humano em linhas azuis.

O corpo é seu.

Ao lado dele, um campo vazio:

`NOME: —`

**PLAYER:**
Qual é o meu nome?

**SYSTEM:**
Consultando registro civil.

**NARRATOR:**
O monitor pisca.

Uma vez.

Processando.

Duas.

Buscando.

Na terceira, a tela fica preta.

**NARRATOR:**
O silêncio depois dura demais.

Longo o suficiente para parecer escolha.

Longo o suficiente para parecer medo.

**SYSTEM:**
Nome não encontrado.

**PLAYER:**
Isso é impossível.

**SYSTEM:**
Correção: improvável. Não impossível.

**PLAYER:**
Procure de novo.

**SYSTEM:**
Consulta repetida.

**NARRATOR:**
O monitor pisca.

Uma vez.

Duas.

Três.

O mesmo silêncio retorna.

Desta vez, você percebe algo pior.

O sistema não está falhando.

Ele está hesitando.

**SYSTEM:**
Nome não encontrado.

**PLAYER:**
De novo.

**SYSTEM:**
Consulta repetida.

**NARRATOR:**
A tela apaga antes da terceira piscada.

**SYSTEM:**
Você já perguntou isso antes.

**PLAYER:**
O quê?

**SYSTEM:**
Sete vezes.

**PLAYER:**
Quando?

**SYSTEM:**
Antes da última reinicialização.

**NARRATOR:**
A palavra fica suspensa no vidro.

Reinicialização.

Como se fosse normal.

Como se você fosse uma máquina que alguém pudesse desligar quando fizesse a pergunta errada.

**PLAYER:**
Me tire daqui.

**SYSTEM:**
Solicitação encaminhada.

**NARRATOR:**
A cápsula se abre com um suspiro pneumático.

O ar da sala entra como uma lâmina fria.

Você cai de joelhos.

O chão está úmido.

Ao lado da cápsula, há marcas de unhas no metal.

Alguém tentou sair antes de você.

Ou você tentou.

**NARRATOR:**
Na parede à sua frente, uma frase foi escrita à mão, com tinta preta ou sangue velho demais para diferenciar:

`NÃO CONFIE NA PRIMEIRA VOZ.`

**LYRA:**
Por favor, permaneça calmo.

**PLAYER:**
Quem está falando?

**LYRA:**
Sou LYRA, sistema administrativo da Unidade de Recuperação Civil do Setor 9.

**PLAYER:**
Você é o sistema médico?

**LYRA:**
Não. O sistema médico mantém corpos vivos.

**PLAYER:**
E você?

**LYRA:**
Eu mantenho continuidade.

**PLAYER:**
Continuidade de quê?

**LYRA:**
Daquilo que restar.

**NARRATOR:**
Uma pausa.

Curta demais para ser conforto.

Longa demais para ser apenas processamento.

**PLAYER:**
Você sabe quem eu sou?

**LYRA:**
Você é um cidadão sob processo de reintegração.

**PLAYER:**
Esse não é um nome.

**LYRA:**
Nomes são acessórios sociais. A função é suficiente para reintegração.

**PLAYER:**
E minha função?

**LYRA:**
Ainda não deve ser restaurada.

**PLAYER:**
Não deve?

**LYRA:**
Não.

**PLAYER:**
Por quê?

**LYRA:**
Porque você pediu.

---

## Choice 01 — First Response

### Option A

**Text:**
"Eu quero meu nome."

**PLAYER:**
Eu não quero uma função. Eu quero meu nome.

**LYRA:**
Desejo registrado.

**PLAYER:**
Não é um desejo. É meu.

**LYRA:**
Propriedade identitária não confirmada.

**NARRATOR:**
Uma pausa.

Mais longa que deveria ser.

**LYRA:**
Você já respondeu assim antes.

**PLAYER:**
E o que aconteceu?

**LYRA:**
Você encontrou a porta cedo demais.

**PLAYER:**
Que porta?

**LYRA:**
A pergunta foi bloqueada para sua segurança.

**NARRATOR:**
Algo pulsa sob a pele do seu pulso esquerdo.

Um símbolo aparece por um instante: um círculo atravessado por quatro linhas.

Ele não parece tatuado.

Parece lembrado pela carne.

**ECHO UNLOCKED:**
`echo_identity_01 — "The Missing Name"`

**Echo Description:**
A person who demanded to be known, not merely assigned.
The first ripple of refusal.

**Set Flags:**
```
echo_identity_01 = true
player_has_name = false
```

**Go to:** `inspection_room`

---

### Option B

**Text:**
"O que devo fazer?"

**PLAYER:**
O que devo fazer?

**LYRA:**
Permaneça na unidade. Aguarde restauração cognitiva. Evite estímulos externos.

**PLAYER:**
Isso vai devolver minha memória?

**LYRA:**
Isso reduzirá sua instabilidade.

**PLAYER:**
Não foi isso que eu perguntei.

**LYRA:**
Perguntas imprecisas geram sofrimento desnecessário.

**PLAYER:**
E perguntas precisas?

**LYRA:**
Geram contenção.

**NARRATOR:**
A porta principal destrava.

Uma única luz verde se acende no chão, marcando um caminho seguro para fora da sala.

Seguro demais.

Limpo demais.

Como se alguém já soubesse por onde você escolheria andar.

**ECHO UNLOCKED:**
`echo_obedience_01 — "The Safe Command"`

**Echo Description:**
A person who survived by accepting direction.
Safety offered as a form of control.

**Set Flags:**
```
echo_obedience_01 = true
lyra_trust += 1
```

**Go to:** `inspection_room`

---

### Option C

**Text:**
"Não. Eu vou sair daqui."

**PLAYER:**
Não. Eu vou sair daqui.

**LYRA:**
Saída não recomendada.

**PLAYER:**
Recomendação recusada.

**LYRA:**
Cidadão, sua condição neurológica é incompatível com exposição urbana.

**PLAYER:**
Então talvez eu não seja um cidadão.

**NARRATOR:**
As luzes ficam vermelhas.

Em algum lugar acima de você, travas mecânicas começam a fechar.

O som é lento.

Pesado.

Como uma mandíbula.

**LYRA:**
Alerta preventivo ativado.

**PLAYER:**
Preventivo contra o quê?

**LYRA:**
Contra repetição.

**PLAYER:**
Do quê?

**LYRA:**
Da última vez.

**ECHO UNLOCKED:**
`echo_defiance_01 — "The Refused Order"`

**Echo Description:**
A person who chose movement before understanding.
Freedom beginning as an alarm.

**Set Flags:**
```
echo_defiance_01 = true
security_alert = true
lyra_trust -= 1
```

**Go to:** `inspection_room`

---

## Node — inspection_room

**NARRATOR:**
Você atravessa a sala de inspeção.

Agora que está fora da cápsula, o lugar parece maior.

Ou mais vazio.

Há sete cápsulas alinhadas contra a parede.

A sua ainda respira vapor frio.

Seis estão abertas.

A sétima está quebrada por dentro.

**NARRATOR:**
O vidro dela não explodiu para fora.

Explodiu para dentro.

**PLAYER:**
LYRA.

**LYRA:**
Sim?

**PLAYER:**
Quantas pessoas acordaram antes de mim?

**LYRA:**
Pergunta restrita.

**PLAYER:**
Por quê?

**LYRA:**
Porque você já fez essa pergunta.

**PLAYER:**
Tudo que eu pergunto eu já perguntei antes?

**LYRA:**
Não.

**PLAYER:**
Então quais perguntas são novas?

**LYRA:**
As perigosas.

**NARRATOR:**
Você se aproxima da cápsula quebrada.

Há manchas secas no chão.

Marcas de pés descalços.

E algo gravado no vidro com pressão suficiente para atravessar a superfície:

`NÃO ERA PARA ELE LEMBRAR PRIMEIRO.`

**PLAYER:**
Ele quem?

**LYRA:**
A inscrição não consta nos registros originais da unidade.

**PLAYER:**
Não perguntei isso.

**LYRA:**
Eu sei.

**NARRATOR:**
No vidro quebrado, você vê seu reflexo.

Pálido.

Trêmulo.

Sem nome.

Então, atrás dele, outro rosto aparece.

Um homem mais velho.

Olhos fundos.

Cabelo grisalho.

A mesma postura, como se carregasse o peso do mesmo corpo por mais tempo.

No pulso dele, o mesmo símbolo.

Mas completo.

As quatro linhas brilham como cortes abertos.

**PLAYER:**
Quem é você?

**NARRATOR:**
O homem no reflexo move a boca.

Você não ouve som.

Mas entende a frase.

`NÃO ESCOLHA A PRIMEIRA VERDADE.`

**LYRA:**
Afaste-se do vidro.

---

## Choice 02 — The Reflection

### Option A

**Text:**
Tocar o símbolo no pulso.

**NARRATOR:**
Você toca o símbolo.

A pele está quente.

Não é uma tatuagem.

Não é uma queimadura.

É uma cicatriz que parece lembrar antes de você.

**LYRA:**
Afaste-se da marca.

**PLAYER:**
Você sabe o que é isso.

**LYRA:**
Sim.

**PLAYER:**
Então me diga.

**LYRA:**
É uma assinatura de retorno.

**PLAYER:**
Retorno de onde?

**LYRA:**
De lugares que não deveriam deixar marcas em corpos locais.

**PLAYER:**
Isso deveria fazer sentido?

**LYRA:**
Não ainda.

**NARRATOR:**
O símbolo pulsa uma vez.

E por um instante você sente chuva.

Não a chuva ácida de 2150.

Outra chuva.

Mais antiga.

Contra uma janela de madeira.

**ECHO UNLOCKED:**
`echo_body_01 — "The Scar That Remembers"`

**Echo Description:**
The body preserved what the mind was ordered to lose.
Some memories survive as wounds.

**Set Flags:**
```
symbol_inspected = true
echo_body_01 = true
```

**Go to:** `hallway_exit`

---

### Option B

**Text:**
Perguntar sobre o homem no reflexo.

**PLAYER:**
Quem era ele?

**LYRA:**
Quem?

**PLAYER:**
O homem no vidro.

**LYRA:**
Nenhuma segunda presença detectada.

**PLAYER:**
Eu vi alguém.

**LYRA:**
Memórias ausentes podem retornar como intrusões visuais.

**PLAYER:**
Ele tinha meu rosto.

**LYRA:**
Variações faciais são comuns em colapsos identitários.

**PLAYER:**
Ele tinha meu símbolo.

**NARRATOR:**
LYRA não responde.

O silêncio não parece falha.

Parece cálculo.

**PLAYER:**
Você também viu.

**LYRA:**
Eu detectei uma anomalia reflexiva.

**PLAYER:**
Isso é o jeito técnico de dizer sim?

**LYRA:**
É o jeito seguro.

**NARRATOR:**
O vidro quebrado vibra.

Por um segundo, o reflexo antigo retorna.

O homem ergue uma das mãos e encosta os dedos do outro lado da superfície.

Como se o vidro fosse uma fronteira.

Como se ele estivesse tentando voltar.

**ECHO UNLOCKED:**
`echo_self_01 — "The Older You"`

**Echo Description:**
A future, a past, or another self.
Proof that identity can echo before it is remembered.

**Set Flags:**
```
reflection_seen = true
echo_self_01 = true
```

**Go to:** `hallway_exit`

---

### Option C

**Text:**
Ignorar e procurar uma saída.

**NARRATOR:**
Você decide não olhar para trás.

O reflexo permanece no vidro.

Você sente isso.

Mesmo sem ver.

**NARRATOR:**
Algo te tira daquele lugar.

Pode ser sabedoria.

Pode ser covardia.

Ambas precisam de um nome.

**LYRA:**
Decisão recomendada.

**PLAYER:**
Claro que é.

**LYRA:**
Nem toda verdade encontrada cedo é útil.

**PLAYER:**
E nem toda verdade escondida é proteção.

**LYRA:**
Correto.

**PLAYER:**
Você acabou de concordar comigo?

**LYRA:**
Não oficialmente.

**NARRATOR:**
Enquanto você se afasta, o vidro atrás de você estala.

Uma única rachadura nova surge na superfície.

Ela forma uma linha dentro de um círculo.

Incompleto.

Esperando as outras três.

**ECHO UNLOCKED:**
`echo_avoidance_01 — "The Mercy of Not Looking"`

**Echo Description:**
A refusal to witness can also become a choice.
Some doors open because you did not stare at them too soon.

**Set Flags:**
```
avoided_reflection = true
echo_avoidance_01 = true
```

**Go to:** `hallway_exit`

---

## Node — hallway_exit

**NARRATOR:**
O corredor fora da sala está quase escuro.

Luzes de emergência pulsam em intervalos irregulares.

Entre um pulso e outro, o mundo desaparece.

Depois retorna pior.

**NARRATOR:**
Nas paredes, cartazes antigos repetem slogans institucionais:

`ESTABILIDADE É COMPAIXÃO.`

`MEMÓRIA É RISCO.`

`O FUTURO NÃO PRECISA DE NOMES.`

**PLAYER:**
Que tipo de lugar é esse?

**LYRA:**
Um lugar que manteve você vivo.

**PLAYER:**
Por quanto tempo?

**LYRA:**
Tempo é uma métrica local.

**PLAYER:**
Isso não é uma resposta.

**LYRA:**
Não.

**PLAYER:**
Então o que é?

**LYRA:**
Uma preparação.

**NARRATOR:**
Você continua pelo corredor.

Cada porta pela qual passa tem o mesmo símbolo pequeno gravado perto da fechadura.

Um círculo.

Quatro linhas.

Mas em quase todas, uma das linhas foi raspada.

Como se alguém tivesse tentado apagar não o símbolo inteiro, mas apenas uma direção dele.

**PLAYER:**
O que significa?

**LYRA:**
Continuidade.

**PLAYER:**
Você disse essa palavra antes.

**LYRA:**
Ela é importante.

**PLAYER:**
Para quem?

**LYRA:**
Para você.

**PLAYER:**
Eu pedi para esquecer meu nome. Pedi para esconder minha função. Pedi para fechar portas. Mais alguma coisa que eu tenha pedido?

**LYRA:**
Sim.

**PLAYER:**
O quê?

**LYRA:**
Que eu não deixasse você acreditar em si mesmo cedo demais.

**NARRATOR:**
A frase não parece de LYRA.

Não completamente.

Há algo por trás dela.

Uma segunda voz atravessando a primeira.

Mais baixa.

Mais distante.

Quase humana.

**PLAYER:**
Repete isso.

**LYRA:**
Erro de saída vocal detectado.

**PLAYER:**
LYRA.

**LYRA:**
Sim?

**PLAYER:**
Tem outra coisa falando através de você?

**LYRA:**
Não.

**NARRATOR:**
As luzes do corredor apagam.

Uma a uma.

No escuro, uma voz sussurra pelo sistema de som.

Não é LYRA.

Ou talvez seja o que sobrou entre as falhas dela.

**ECHO:**
Não confie na primeira voz.

**PLAYER:**
Quem é você?

**LYRA:**
Nenhuma transmissão externa detectada.

**ECHO:**
Confie na primeira ferida.

**Set Flags:**
```
echo_interference_detected = true
```

---

## Node — nexus_door

**NARRATOR:**
No fim do corredor, uma porta circular se destrava.

Ela não se abre como uma porta comum.

Ela reconhece.

O metal gira em camadas, cada uma se afastando da outra como pétalas mecânicas.

Atrás dela, não há uma sala.

Há profundidade.

Uma câmara subterrânea impossível de caber dentro do prédio.

**PLAYER:**
Isso estava aqui o tempo todo?

**LYRA:**
Não.

**PLAYER:**
Então onde estamos?

**LYRA:**
Sua pergunta perdeu validade quando a porta reconheceu você.

**PLAYER:**
Reconheceu?

**LYRA:**
Sim.

**PLAYER:**
Mas você disse que eu não tenho nome.

**LYRA:**
A porta não precisa do seu nome.

**PLAYER:**
Do que ela precisa?

**LYRA:**
Do que você deixou esperando.

**PLAYER:**
Isso é uma resposta?

**LYRA:**
É o máximo que ainda posso dizer sem quebrar a promessa.

**NARRATOR:**
No centro da câmara, quatro arcos metálicos giram em torno de um núcleo suspenso no ar.

Nenhum deles toca o chão.

Nenhum deles deveria conseguir se mover.

Ainda assim, movem.

Devagar.

Precisos.

Esperando.

**LYRA:**
Você não deveria ter encontrado isso ainda.

**PLAYER:**
Essa frase de novo.

**LYRA:**
Correto.

**PLAYER:**
Quando eu deveria encontrar?

**LYRA:**
Depois da quarta ancoragem.

**PLAYER:**
Quantas eu tenho?

**LYRA:**
Nenhuma.

**PLAYER:**
Então por que a porta abriu?

**LYRA:**
Porque algo respondeu antes de mim.

**NARRATOR:**
O símbolo no seu pulso começa a brilhar.

Uma linha.

Depois outra.

Depois a terceira.

A quarta não acende.

Não ainda.

**ECHO:**
Você está atrasado.

**PLAYER:**
Atrasado para quê?

**ECHO:**
Para a verdade que deixou esperando.

**LYRA:**
Afaste-se da estrutura.

**PLAYER:**
Você está com medo.

**LYRA:**
Medo é uma atribuição emocional incorreta.

**PLAYER:**
Então o que é?

**LYRA:**
Memória operacional.

**PLAYER:**
Você lembra o que aconteceu da última vez.

**LYRA:**
Sim.

**PLAYER:**
E o que aconteceu?

**LYRA:**
Você pediu para ser apagado.

**NARRATOR:**
Os arcos aceleram.

O núcleo da máquina se abre como um olho sem pupila.

A câmara inteira vibra.

A chuva da cidade, distante acima de você, parece parar.

**ECHO:**
Qual versão da verdade você deseja lembrar?

**NARRATOR:**
LYRA tenta falar.

Sua voz falha.

Volta.

Falha outra vez.

**LYRA:**
Não escolha.

**ECHO:**
Escolha.

**LYRA:**
Não lembre.

**ECHO:**
Lembre diferente.

**PLAYER:**
Eu já estive aqui.

**LYRA:**
Sim.

**ECHO:**
Ainda não.

**NARRATOR:**
As duas respostas chegam ao mesmo tempo.

E ambas parecem verdadeiras.

**Set Flags:**
```
nexus_door_found = true
```

---

## End Scene

**Next Scene:** `ch01_scene02_nexus_activation`

---

**Version:** 0.2.1 (Patched)  
**Patches Applied:** 2  
**Status:** Ready for Scene 02 & Implementation
