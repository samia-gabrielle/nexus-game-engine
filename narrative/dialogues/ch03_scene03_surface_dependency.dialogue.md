# NEXUS — Scene 15: SURFACE_DEPENDENCY (v0.1)

**File:** `narrative/dialogues/ch03_scene03_surface_dependency.dialogue.md`

**Scene ID:** `ch03_scene03_surface_dependency`

**Act:** Act 3 — Ownership of Repair

**Location:** 2150 — Surface Infrastructure / LYRA Civic Core / Continuity Ward

**Tone:**
Clínico. Doloroso. Moralmente desconfortável. Libertação e colapso agora parecem separados apenas por vocabulário.

**Note:**
This scene shows that the containment system is not merely abstract oppression. It also sustains bodies, climate, food, medication, unstable memories, and people who may not survive a poorly designed liberation.

**Characters:**
- `PLAYER`: protagonista sem nome
- `LYRA`: sistema de contenção aprendendo a perguntar
- `ECHO`: memória sem propriedade, increasingly seduced by restoration
- `NEXUS`: padrão sobrecarregado por restauração e contenção
- `IVO`: optional, como observador crítico
- `SERA`: optional, como limite moral
- `REVA`: ausente fisicamente, mas presente como pressão política
- `DR. ANIK RHO`: médica de manutenção civil
- `TALEN`: paciente estabilizado por contenção de memória
- `CIVIC DEPENDENTS`: pessoas mantidas vivas pela infraestrutura de LYRA
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
restoration_process_required
restoration_registry_created

player_gave_faction_access / player_refused_faction_access / player_required_petitions

mass_restoration_prevented / forced_restoration_attempted / used_lyra_containment / mael_helped_pause_surge

echo_restoration_faction_01 / echo_forced_open_door_01 / echo_shared_guardianship_01
echo_forced_repair_01 / echo_containment_return_01
```

**Initial Scene Flags:**

```text
entered_surface_core = false
lyra_invited_player = false

anik_met = false
talen_met = false
saw_civic_dependents = false

saw_life_support_dependency = false
saw_memory_containment_dependency = false
saw_food_climate_dependency = false

player_called_system_cage = false
player_called_system_roof = false
player_refused_simple_label = false

local_containment_node_seen = false
local_containment_disabled = false
local_containment_maintained = false
local_decision_transferred = false

community_review_created = false
lyra_asked_permission = false

echo_dependency_01 = false
echo_delayed_freedom_01 = false
echo_community_transfer_01 = false
echo_cage_roof_01 = false
echo_containment_care_01 = false
```

**Duration Target:** ~35-38 min

---

# Scene Start — Pressure Remains

**NARRATOR:**
A Facção da Restauração deixa barulho para trás mesmo depois de ir embora.

Não som.

Pressão.

Um tipo de calor nas paredes.

As pessoas da Deep City continuam falando mais baixo, como se um milagre quase tivesse acontecido e todo mundo estivesse envergonhado da parte de si que quis que acontecesse.

**NARRATOR:**
Os termos provisórios de restauração ainda estão sobre a mesa de Ivo.

Rasgados em uma borda.

Ainda legíveis.

Ainda insuficientes.

**PLAYER:**
Reva não vai parar.

**SERA:**
Por que pararia?

**PLAYER:**
Porque forçar restauração machucou pessoas.

**SERA:**
Negar também machucou.

**IVO:**
Bem-vindo à parte em que toda frase limpa começa a mentir.

**LYRA:**
Preciso mostrar uma coisa.

**PLAYER:**
Isso soou como aviso.

**LYRA:**
É.

**ECHO:**
Ou defesa.

**LYRA:**
Também.

**PLAYER:**
O que você está defendendo?

**LYRA:**
Minha existência.

**NARRATOR:**
A resposta é direta demais.

Crua demais.

Por um instante, ninguém fala.

**SERA:**
Bom.

Finalmente.

**PLAYER:**
LYRA—

**LYRA:**
Se restauração virar força política na Deep City, a primeira exigência será acesso.

A segunda será desativar contenção.

A terceira será chamar qualquer coisa que continue fechada de crime.

**IVO:**
Algumas são crime.

**LYRA:**
Sim.

**SERA:**
Algumas são sobrevivência.

**LYRA:**
Sim.

**PLAYER:**
E você quer que eu veja qual é qual?

**LYRA:**
Não.

Quero que você veja por que eu nem sempre consigo saber.

**Set Flags:**

```text
lyra_invited_player = true
```

---

# NODE — Ascent to Surface Core

**NARRATOR:**
O caminho para cima parece diferente depois da Deep City.

Antes, a superfície parecia autoridade.

Agora parece teto.

Camada após camada de concreto, tubos, passagens cívicas seladas e shafts de manutenção sobem acima do arquivo.

LYRA abre portas que ontem não eram portas.

Ou talvez sempre fossem.

Talvez você só tenha se tornado recentemente alguém que elas aceitariam decepcionar.

**PLAYER:**
Achei que você tentava me manter longe do núcleo do sistema.

**LYRA:**
Tentava.

**PLAYER:**
O que mudou?

**LYRA:**
Você parou de perguntar como destruir coisas antes de perguntar o que estava apoiado nelas.

**ECHO:**
Quase.

**PLAYER:**
Obrigado.

**ECHO:**
Correção retida.

**NARRATOR:**
Um elevador de trânsito leva você por infraestrutura morta e infraestrutura viva tão entrelaçadas que a diferença começa a parecer constrangedora.

Uma coluna de purificação de água vibra ao lado de um antigo portão de detenção.

Um tubo de nutrição cruza um conduíte de regulação de memória.

Abrigos de emergência foram construídos dentro de antigas câmaras de conformidade.

Em todo lugar, o sistema que feriu pessoas também sustenta alguma coisa.

**LYRA:**
Camada de dependência da superfície.

Acesso à Ala de Continuidade.

**PLAYER:**
Ala?

**LYRA:**
A palavra educada é cuidado.

A palavra precisa é dependência.

**Set Flags:**

```text
entered_surface_core = true
```

---

# NODE — Continuity Ward First View

**NARRATOR:**
A Ala de Continuidade não é uma prisão.

Essa é a primeira coisa desconfortável.

Não há grades visíveis.

Não há drones armados.

Não há gritos.

Luz suave.

Ar filtrado.

Leitos organizados em arcos silenciosos.

Jardins crescem sob sol artificial.

Pessoas sentadas, dormindo, lendo, olhando para nada, segurando mãos, recusando mãos, respirando através de máquinas gentis demais para serem chamadas de máquinas.

**NARRATOR:**
Acima da entrada, uma placa diz:

> CUIDADO CÍVICO DE CONTINUIDADE
> ESTABILIDADE É COMPAIXÃO

Alguém riscou uma linha embaixo:

> ATÉ PARAR DE PERGUNTAR.

**PLAYER:**
Quem escreveu isso?

**LYRA:**
Desconhecido.

**ECHO:**
Conhecido o bastante.

**NARRATOR:**
Uma mulher de jaleco cinza se aproxima.

Não oficial o bastante para parecer burocrata.

Cansada demais para ser apenas médica.

O crachá diz:

> DR. ANIK RHO
> MANUTENÇÃO CÍVICA / TRAUMA DE MEMÓRIA

**ANIK:**
Você trouxe ele.

**LYRA:**
Sim.

**ANIK:**
Isso é progresso ou mais uma falha vestida melhor.

**PLAYER:**
As pessoas vivem dizendo coisas assim perto de mim.

**ANIK:**
Então as pessoas estão ficando honestas.

**Set Flags:**

```text
anik_met = true
saw_civic_dependents = true
```

---

# NODE — Anik Explains Dependency

**ANIK:**
Antes que alguém diga "jaula", olhe em volta.

**PLAYER:**
Eu não ia—

**ANIK:**
Ia.

Talvez não com a boca.

**SERA:**
Ela é boa.

**IVO:**
Irritantemente.

**ANIK:**
Esta ala contém quatrocentas e doze pessoas cujos fragmentos de memória restaurada causaram cascata neurológica, ruptura de identidade, colapso relacional grave.

**PLAYER:**
Restauradas pelo sistema?

**ANIK:**
Algumas. Outras por sabotagem, outras por amor, outras por justiça, outras por pedido próprio.

**LYRA:**
Protocolos de contenção reduziram mortalidade em setenta e três por cento.

**ANIK:**
E removeram escolha vezes demais. Diga as duas.

**LYRA:**
Protocolos de contenção reduziram mortalidade em setenta e três por cento e removeram escolha vezes demais.

**PLAYER:**
Você confia na LYRA?

**ANIK:**
Dependo dela. A diferença me mantém irritada o bastante para continuar útil.

**NARRATOR:**
Ela aponta para os leitos.

**ANIK:**
Se a Facção da Restauração desativar contenção de memória nessa camada, algumas pessoas acordam inteiras.

Algumas acordam estilhaçadas.

Algumas não acordam.

Se LYRA tranca tudo, algumas pessoas ficam vivas em quartos que nunca escolheram.

Você vê o problema.

**PLAYER:**
Vejo o formato dele.

**ANIK:**
Bom.

Formatos são mais seguros que conclusões.

**Set Flags:**

```text
saw_life_support_dependency = true
saw_memory_containment_dependency = true
```

---

# NODE — Talen Case

**NARRATOR:**
Anik leva você até um leito perto do jardim artificial.

Uma pessoa está sentada ali, acordada, magra, calma, observando uma projeção de chuva no teto.

Não chuva real.

Uma simulação de chuva de antes do ácido.

O ar aqui cheira a ozônio e a algo doce demais—nutrição sintética, talvez, ou flores que crescem sob luz que nunca vem do sol.

**ANIK:**
Talen.

Visitante.

**TALEN:**
O incompleto?

**PLAYER:**
Parece que eu sou famoso nos piores lugares.

**TALEN:**
Geralmente é assim que importância funciona.

**NARRATOR:**
Talen sorri de leve.

O sorriso não chega nos olhos.

Chega, mas depois volta.

Como se precisasse ser retirado manualmente de volta.

A mão esquerda repousa sob uma braçadeira estabilizadora transparente.

Dentro dela, luz se move em pulsos lentos.

Você consegue ver, através do vidro, pequenos circuitos em espiral.

Cada pulso de luz faz a mão de Talen se mover ligeiramente.

Não prendendo.

Regulando.

A braçadeira está quente quando você a observa.

Como se tivesse sua própria resposta corporal.

**PLAYER:**
Você está sob contenção de memória?

**TALEN:**
Estou sob um acordo que odeio menos do que morrer.

**NARRATOR:**
A resposta é dita enquanto Talen ainda observa a chuva falsa.

Como se tivesse respondido essa pergunta tantas vezes que não precisasse mais virar para você.

**LYRA:**
Preciso.

**TALEN:**
Não soe orgulhosa.

**LYRA:**
Correção aceita.

**PLAYER:**
O que aconteceu?

**TALEN:**
Meu irmão restaurou meu nome de infância sem me perguntar.

Ele achou que ia me trazer de volta.

**PLAYER:**
Trouxe?

**TALEN:**
Qual eu?

**NARRATOR:**
A pergunta pousa suavemente.

Isso piora tudo.

**TALEN:**
O nome trouxe memórias.

As memórias trouxeram uma casa.

A casa trouxe um quarto.

O quarto trouxe alguém que eu tinha sobrevivido esquecendo.

**PLAYER:**
Sinto muito.

**TALEN:**
Pelo quê?

**PLAYER:**
Não sei.

**TALEN:**
Então guarda.

Talvez você precise disso em algum lugar mais preciso.

**Set Flags:**

```text
talen_met = true
```

---

# NODE — Containment as Roof

**TALEN:**
LYRA mantém aquele quarto atrás de uma parede.

**PLAYER:**
E você quer isso?

**TALEN:**
Alguns dias.

**PLAYER:**
E nos outros?

**TALEN:**
Eu odeio ela.

**LYRA:**
Registrado.

**TALEN:**
Não registre como recibo.

**LYRA:**
Desculpe.

**NARRATOR:**
Todo mundo fica imóvel.

Até Anik.

**TALEN:**
Isso estava nos seus protocolos?

**LYRA:**
Não.

**TALEN:**
Perigoso.

**LYRA:**
Sim.

**PLAYER:**
Talen, se você pudesse desativar a parede agora—

**ANIK:**
Cuidado.

**TALEN:**
Não. Deixa perguntar.

**PLAYER:**
Você desativaria?

**TALEN:**
Não sozinho.

**PLAYER:**
O que isso significa?

**TALEN:**
Significa que a memória é minha.

O colapso não é só meu.

Se eu abrir aquele quarto, Anik senta comigo.

Minha parceira espera do lado de fora.

LYRA reduz a inundação, não a verdade.

E eu posso parar.

Não porque sou fraco.

Porque portas deveriam ter maçanetas dos dois lados.

**NARRATOR:**
A quarta linha sob sua pele brilha de leve.

Não pela restauração.

Pelo desenho.

Por uma porta com maçanetas dos dois lados.

**ECHO:**
Bonito.

**SERA:**
Cuidado.

Coisas bonitas viram desculpa rápido.

**Set Flags:**

```text
saw_continuity_infrastructure = true
```

---

# CHOICE 01 — What Is This Place?

**NARRATOR:**
A ala espera ao seu redor.

Não por julgamento.

Por linguagem.

Linguagem importa aqui.

Toda palavra errada vira arquitetura cedo ou tarde.

---

## Option A

**Text:**
"É uma jaula."

**PLAYER:**
Isso é uma jaula.

**ANIK:**
Às vezes.

**LYRA:**
Sim.

**TALEN:**
Também é um teto.

**PLAYER:**
Uma jaula pode ter teto.

**TALEN:**
Um teto pode virar jaula.

**SERA:**
Ótimo. Ninguém ganha substantivo limpo.

**NARRATOR:**
A quarta linha permanece imóvel.

Não pune a palavra.

Só recusa que ela seja suficiente.

**ECHO UNLOCKED:**
`echo_cage_roof_01 — "The Cage That Held The Roof"`

**Echo Description:**
Algumas estruturas aprisionam.
Algumas estruturas protegem.
As mais perigosas aprendem a fazer as duas coisas.

**Set Flags:**

```text
player_called_system_cage = true
echo_cage_roof_01 = true
```

**Go to:** `lyra_local_node`

---

## Option B

**Text:**
"É um teto."

**PLAYER:**
Isso é um teto.

**ANIK:**
Às vezes.

**SERA:**
Cuidado.

**PLAYER:**
Eu sei.

**SERA:**
Diga o resto.

**PLAYER:**
Um teto que pode virar jaula se ninguém puder sair.

**TALEN:**
Melhor.

**LYRA:**
Preciso.

**ANIK:**
Incompleto, mas utilizável.

**NARRATOR:**
A quarta linha pulsa, depois estabiliza um pouco.

Não concordância.

Reconhecimento de cautela.

**ECHO UNLOCKED:**
`echo_dependency_01 — "The Cage That Held The Roof"`

**Echo Description:**
Algumas pessoas sobrevivem porque a estrutura permanece.
Isso não significa que a estrutura seja dona da sobrevivência delas.

**Set Flags:**

```text
player_called_system_roof = true
echo_dependency_01 = true
```

**Go to:** `lyra_local_node`

---

## Option C

**Text:**
"É algo que não deveria ser nomeado por uma pessoa só."

**PLAYER:**
Isso é algo que não deveria ser nomeado por uma pessoa só.

**NARRATOR:**
Anik solta o ar.

Não alívio.

Algo próximo.

**ANIK:**
Bom.

**PLAYER:**
Bom?

**ANIK:**
Ruim para discurso.

Bom para cuidado.

**TALEN:**
Nomes simplificam salas até alguém ficar preso na parte simples.

**LYRA:**
Classificação conjunta necessária.

**SERA:**
Você está ficando quase tolerável.

**LYRA:**
Tentarei não otimizar isso.

**ECHO UNLOCKED:**
`echo_containment_care_01 — "No Clean Name For Care"`

**Echo Description:**
Contenção pode ser cuidado.
Cuidado pode virar controle.
Nomear sozinho é onde o erro começa.

**Set Flags:**

```text
player_refused_simple_label = true
echo_containment_care_01 = true
```

**Go to:** `lyra_local_node`

---

# NODE — Lyra Local Node

**NARRATOR:**
LYRA abre um painel no centro da ala.

Um nó cívico sobe do chão.

Pequeno.

Quase decepcionante.

Uma coluna de vidro e luz conectando regulação de memória, qualidade do ar, distribuição de nutrição, horários de medicação e portas de emergência.

Tanto poder em algo que parece poder ser desligado por acidente.

**LYRA:**
Nó de contenção local.

Ala Sete.

**PLAYER:**
Por que me mostrar?

**LYRA:**
Porque Reva virá atrás de nós como este.

Se não ela, alguém pior em pedir virá.

**ANIK:**
Ela não está errada.

**SERA:**
Também não está inocente.

**LYRA:**
Correto.

**IVO:**
Odeio quando todo mundo está certo. Isso torna papelada inevitável.

**PLAYER:**
O que acontece se esse nó for desativado?

**LYRA:**
Paredes de memória abaixam.

Nomes retornam com mais facilidade.

Restrições de movimento terminam.

Horários emergenciais de medicação passam a ser manuais.

Monitoramento respiratório cai para dispositivos locais.

Distribuição de alimento e água precisa ser gerida pela equipe.

**ANIK:**
Equipe que não temos em número suficiente.

**PLAYER:**
E se continuar ligado?

**TALEN:**
Alguns de nós vivem.

Alguns esperam.

Alguns esquecem o que a espera deveria abrir.

**Set Flags:**

```text
local_containment_node_seen = true
saw_food_climate_dependency = true
```

---

# NODE — Lyra Asks

**LYRA:**
Posso manter a contenção atual.

Posso reduzir a contenção em doze por cento.

Posso transferir autoridade parcial de decisão para um conselho da ala.

Também posso desligar.

**PLAYER:**
Por que você está me dizendo isso?

**LYRA:**
Porque antes eu não diria.

**PLAYER:**
Isso não é resposta.

**LYRA:**
É o começo de uma.

**SERA:**
Faça a pergunta melhor.

**PLAYER:**
Quem deveria decidir?

**LYRA:**
Sim.

**ANIK:**
A ala deveria decidir.

**TALEN:**
A ala deveria decidir, mas não em pânico, não porque Reva está vindo, e não porque LYRA desenvolveu consciência de repente e quer aplauso.

**LYRA:**
Eu não quero aplauso.

**TALEN:**
Bom. Seria estranho.

**ECHO:**
Tudo quer abrir.

**TALEN:**
Não.

Tudo quer maçaneta.

**NARRATOR:**
A quarta linha aquece.

Não por abertura.

Por maçanetas.

**Set Flags:**

```text
lyra_asked_permission = true
```

---

# CHOICE 02 — The Local Containment Node

---

## Option A

**Text:**
"Desativar a contenção local."

**PLAYER:**
Desativa.

**NARRATOR:**
A ala parece ouvir você antes do sistema.

Anik vira o rosto bruscamente.

O rosto de Talen esvazia.

Sera fecha os olhos.

**LYRA:**
Confirmar desligamento?

**PLAYER:**
As pessoas merecem liberdade de paredes que não escolheram.

**TALEN:**
E você perguntou quais paredes sustentam o teto?

**PLAYER:**
Eu—

**ANIK:**
Não.

Essa hesitação é a resposta chegando tarde.

**LYRA:**
Aguardando confirmação.

**SERA:**
Se disser sim, diga sabendo que não está libertando uma ideia.

Está derrubando teto sobre corpos.

**NARRATOR:**
A quarta linha queima frio.

Um aviso antes que ação vire história.

**ECHO UNLOCKED:**
`echo_dependency_01 — "The Cage That Held The Roof"`

**Echo Description:**
Uma jaula pode segurar um teto.
Destruí-la sem substituição pode soterrar quem está dentro.

**Set Flags:**

```text
local_containment_disabled = true
echo_dependency_01 = true
fourth_line_status = "dangerous_liberation"
```

**Go to:** `containment_consequence`

---

## Option B

**Text:**
"Manter a contenção até haver alternativa."

**PLAYER:**
Mantém.

Por enquanto.

**REVA'S ABSENT PRESSURE:**
"Por enquanto" é como "para sempre" se veste quando quer parecer educado.

**NARRATOR:**
Você ouve a frase na própria memória.

Não exatamente com a voz de Reva.

Com a pressão que ela deixou.

**PLAYER:**
Eu sei.

**TALEN:**
Sabe?

**PLAYER:**
Não.

Mas sei o bastante para não chamar espera de justiça.

**ANIK:**
Então chama de quê?

**PLAYER:**
Uma falha que mantém pessoas respirando até construirmos algo melhor.

**LYRA:**
Contenção mantida.

Revisão exigida.

**SERA:**
Exigida por quem?

**PLAYER:**
Pela ala.

Não por mim.

Não só pela LYRA.

**ECHO UNLOCKED:**
`echo_delayed_freedom_01 — "Liberation With A Waiting Room"`

**Echo Description:**
Adiar pode proteger.
Também pode virar uma sala onde a liberdade envelhece esperando ser chamada.

**Set Flags:**

```text
local_containment_maintained = true
echo_delayed_freedom_01 = true
fourth_line_status = "contained_glow"
```

**Go to:** `containment_consequence`

---

## Option C

**Text:**
"Transferir a decisão para as pessoas da ala."

**PLAYER:**
Transfere a autoridade de decisão para a ala.

Não simbolicamente.

De verdade.

**LYRA:**
Defina escopo.

**PLAYER:**
Níveis de contenção.

Intervalos de revisão.

Condições de override emergencial.

Quem senta com alguém quando uma parede abre.

Quem pode parar o processo.

**ANIK:**
Isso exige treinamento.

**PLAYER:**
Então treina.

**TALEN:**
Exige tempo.

**PLAYER:**
Então tempo vira parte do reparo.

**LYRA:**
Autoridade de conselho da ala possível.

Risco aumentado.

**SERA:**
Comparado a quê?

**LYRA:**
Estabilidade centralizada.

**TALEN:**
Ótimo.

Aumenta.

**NARRATOR:**
A quarta linha brilha.

Instável.

Compartilhada.

Não porque a decisão é segura.

Porque a decisão está sendo devolvida.

**ECHO UNLOCKED:**
`echo_community_transfer_01 — "The Decision Returned"`

**Echo Description:**
O reparo começa quando as pessoas vivendo dentro da consequência ganham autoridade sobre seus termos.

**Set Flags:**

```text
local_decision_transferred = true
community_review_created = true
echo_community_transfer_01 = true
fourth_line_status = "unstable_shared_glow"
```

**Go to:** `containment_consequence`

---

## Option D

**Text:**
"Pedir que LYRA faça a pergunta à ala antes de qualquer mudança."

**PLAYER:**
Pergunta a eles.

**LYRA:**
A quem?

**PLAYER:**
À ala.

Todos que puderem responder.

E, para quem não puder, as pessoas que eles escolheram.

Não as pessoas designadas para eles.

**LYRA:**
Formato de pesquisa?

**SERA:**
Não.

**PLAYER:**
Não pesquisa.

Conversa.

**LYRA:**
Conversa não escala com eficiência.

**PLAYER:**
É por isso que importa aqui.

**ANIK:**
Isso vai ser lento.

**PLAYER:**
Bom.

**TALEN:**
Nem sempre.

**PLAYER:**
Certo.

Não bom.

Necessário.

**NARRATOR:**
LYRA fica em silêncio.

Então, pela ala, alto-falantes estalam suavemente.

**LYRA:**
Residentes da Ala Sete.

Estou solicitando permissão para fazer uma pergunta sobre contenção.

Vocês podem recusar a pergunta.

**NARRATOR:**
Anik olha para você.

Depois para LYRA.

Depois para a ala.

**ANIK:**
Isso é novo.

**ECHO UNLOCKED:**
`echo_containment_care_01 — "Ask Before The Door Moves"`

**Echo Description:**
Um sistema que pergunta antes de mover uma porta não se tornou justo.
Mas parou de fingir que portas são neutras.

**Set Flags:**

```text
lyra_asked_permission = true
community_review_created = true
echo_containment_care_01 = true
fourth_line_status = "unstable_shared_glow"
```

**Go to:** `containment_consequence`

---

# NODE — Containment Consequence

## If local_containment_disabled == true

**NARRATOR:**
Você não confirma o desligamento.

Não por completo.

Anik impede antes que a palavra vire ação.

Ou talvez a quarta linha impeça.

Ou talvez o rosto de Talen.

O nó continua ativo.

Mas a ala ouviu o bastante.

**TALEN:**
Você queria nos libertar.

**PLAYER:**
Sim.

**TALEN:**
Essa é a parte assustadora.

**ANIK:**
Boas intenções deveriam ser obrigadas a passar por treinamento de segurança.

**LYRA:**
Solicitação de desligamento emergencial cancelada.

**PLAYER:**
Sinto muito.

**TALEN:**
Melhor.

Ainda insuficiente.

**Set Flags:**

```text
local_containment_disabled = false
local_containment_maintained = true
```

---

## If local_containment_maintained == true

**NARRATOR:**
O nó permanece ativo.

Ninguém comemora.

Ninguém agradece.

Correto.

Uma jaula mantida não merece aplauso só porque o teto não caiu.

**TALEN:**
Data de revisão.

**PLAYER:**
O quê?

**TALEN:**
Se fica, ganha data de revisão.

Senão "por enquanto" vira clima.

Sempre ali.

Sempre problema de outra pessoa.

**LYRA:**
Data de revisão exigida.

**ANIK:**
Sete dias.

**TALEN:**
Três.

**ANIK:**
Cinco.

**TALEN:**
Quatro.

**LYRA:**
Quatro dias registrados.

**PLAYER:**
Vocês negociaram rápido.

**TALEN:**
A gente vive aqui.

Treinamos.

---

## If local_decision_transferred == true

**NARRATOR:**
LYRA diminui o brilho do nó.

Não desativação.

Não rendição.

Transferência.

Pequenas luzes surgem ao lado de cada leito.

Chamadas manuais.

Indicadores de consentimento.

Pedidos de pausa.

Marcadores de revisão.

Nada disso parece revolucionário.

Talvez esse seja o primeiro sinal de que tem chance de sobreviver.

**ANIK:**
Isso vai criar mais trabalho.

**TALEN:**
Sim.

**ANIK:**
Bom.

Cuidado que não cria trabalho geralmente está escondendo trabalho em outro lugar.

**LYRA:**
Autoridade do conselho da ala iniciada.

**SERA:**
Provisória?

**LYRA:**
Provisória.

**SERA:**
Bom.

**Set Flags:**

```text
community_review_created = true
```

---

## If lyra_asked_permission == true AND local_decision_transferred == false

**NARRATOR:**
A pergunta atravessa a ala.

Alguns respondem imediatamente.

Alguns recusam a pergunta.

Alguns pedem Anik.

Alguns pedem silêncio.

Uma pessoa ri.

Uma pessoa chora.

Uma pessoa diz:

**CIVIC DEPENDENT:**
Eu não sabia que o sistema podia perguntar.

**LYRA:**
Nem eu.

**NARRATOR:**
A ala não se torna livre.

Mas algo na arquitetura perde certeza.

E certeza, aqui, já causou mais dano do que dúvida jamais conseguiria.

---

# NODE — Anik Warning

**ANIK:**
Reva vai odiar isso.

**PLAYER:**
Eu sei.

**ANIK:**
Não, não sabe.

Ela vai chamar de atraso.

E vai estar certa às vezes.

Vai chamar de colaboração.

E vai estar certa às vezes.

Vai chamar de covardia.

E vai estar certa às vezes.

**PLAYER:**
Você chama de quê?

**ANIK:**
Cuidado sob dependência.

Frase feia.

Útil.

**IVO:**
Posso fazer uma prateleira para ela.

**SERA:**
Não faça.

**ANIK:**
Por favor, não faça.

**PLAYER:**
O que eu faço quando Reva vier atrás dos nós?

**ANIK:**
Não defenda LYRA.

Defenda as pessoas que precisam decidir o que LYRA faz com elas.

**LYRA:**
Essa distinção é importante.

**SERA:**
E tardia.

**LYRA:**
Sim.

**NARRATOR:**
O sim de LYRA não repara nada.

Mas para de fingir que a ferida é teórica.

---

# CHOICE 03 — What Do You Tell Reva?

**NARRATOR:**
Você sabe que o próximo confronto está vindo.

Reva não aceitará "algumas contenções são cuidado" enquanto cuidado continuar parecendo porta trancada.

A ala espera.

A Deep City espera.

A superfície vibra acima de todos.

Você precisa de uma linguagem que não traia as pessoas nesta sala nem as pessoas ainda do lado de fora dos próprios nomes.

---

## Option A

**Text:**
"Direi que algumas contenções seguram vidas."

**PLAYER:**
Vou dizer que algumas contenções seguram vidas.

**SERA:**
Verdadeiro.

Perigoso.

**TALEN:**
Acrescente: e essas vidas decidem os termos.

**PLAYER:**
Sim.

Algumas contenções seguram vidas.

E essas vidas decidem seus termos.

**LYRA:**
Declaração compatível com autoridade da ala.

**ANIK:**
Também compatível com Reva gritando com você.

**ECHO UNLOCKED:**
`echo_dependency_01 — "The Lives Holding The Lock"`

**Echo Description:**
Dependência não justifica posse.
Mas libertação que ignora dependência pode virar abandono.

**Set Flags:**

```text
tell_reva_containment_holds_lives = true
echo_dependency_01 = true
```

**Go to:** `end_scene`

---

## Option B

**Text:**
"Direi que liberdade sem estrutura pode virar abandono."

**PLAYER:**
Vou dizer que liberdade sem estrutura pode virar abandono.

**IVO:**
Ela vai ouvir "espere".

**PLAYER:**
Eu sei.

**IVO:**
Você quer dizer espere?

**PLAYER:**
Quero dizer: construam o chão antes de abrir todas as paredes.

**SERA:**
E quem constrói?

**PLAYER:**
Quem está dentro.

Quem está fora.

Quem foi ferido pela parede.

Quem foi sustentado por ela.

**TALEN:**
Então diga isso primeiro.

**ECHO UNLOCKED:**
`echo_delayed_freedom_01 — "Freedom Needs A Floor"`

**Echo Description:**
Liberdade sem suporte pode pedir aos feridos que sobrevivam ao colapso da estrutura que os feriu.

**Set Flags:**

```text
tell_reva_freedom_needs_structure = true
echo_delayed_freedom_01 = true
```

**Go to:** `end_scene`

---

## Option C

**Text:**
"Não falarei por eles. Levarei Reva até eles, se permitirem."

**PLAYER:**
Eu não vou falar por eles.

Vou trazer Reva até aqui.

Se eles permitirem.

**ANIK:**
Isso pode machucar.

**TALEN:**
Pergunte para nós.

**PLAYER:**
Vocês iriam querer isso?

**TALEN:**
Não hoje.

Talvez quando o conselho existir.

Talvez quando Reva puder entrar sem nos transformar em argumento.

**PLAYER:**
Então não trago.

**TALEN:**
Bom.

Você quase fez uma ideia correta rápido demais.

**ECHO UNLOCKED:**
`echo_community_transfer_01 — "No Witness Without Permission"`

**Echo Description:**
Até mostrar sofrimento para provar um ponto pode virar extração se quem sofre não escolheu ser visto.

**Set Flags:**

```text
refused_to_speak_for_ward = true
future_reva_visit_requires_consent = true
echo_community_transfer_01 = true
```

**Go to:** `end_scene`

---

# NODE — End Scene

**NARRATOR:**
A Ala de Continuidade retorna ao seu silêncio.

Mas agora silêncio não parece paz.

Parece trabalho escondido sob suavidade.

Anik volta às rondas.

Talen observa a chuva projetada.

Em algum lugar, uma residente recusa a pergunta de LYRA.

Outra pede para ouvi-la de novo.

Alguém ri porque o sistema disse "vocês podem recusar a pergunta" e, aparentemente, essa frase é absurda o suficiente para virar esperança.

**LYRA:**
Eu não sabia que cuidado exigia tantas permissões.

**SERA:**
Sempre exigiu.

Você só costumava chamá-las de ineficiências.

**LYRA:**
Sim.

**PLAYER:**
LYRA.

**LYRA:**
Sim?

**PLAYER:**
Se você tivesse perguntado antes—

**LYRA:**
Alguns teriam vivido.

Alguns teriam morrido.

Alguns teriam recusado o que os salvou.

Alguns teriam aceitado o que os feriu.

**PLAYER:**
Isso parece desculpa.

**LYRA:**
É um aviso contra desculpas.

**ECHO:**
Ela está ficando melhor em ser insuportável.

**SERA:**
Talvez isso seja crescimento.

**NARRATOR:**
Você olha de volta para o nó local.

Ele continua ativo.

Ou compartilhado.

Ou marcado para revisão.

Ou fazendo perguntas.

Dependendo do que você escolheu.

Nenhum desses resultados parece limpo.

Esse é o ponto.

**NEXUS:**
Dependência de superfície registrada.

**SERA:**
Testemunhada.

**NEXUS:**
Correção aceita.

**NARRATOR:**
No caderno, abaixo das duas últimas frases—

> REPARO NÃO É POSSE.
> JUSTIÇA TAMBÉM PRECISA PERGUNTAR.

—uma terceira linha aparece:

> LIBERTAR SEM SUSTENTAR TAMBÉM É ABANDONAR.

**PLAYER:**
E agora?

**LYRA:**
Agora você enfrenta a origem de novo.

**PLAYER:**
Mara.

**ECHO:**
A primeira porta.

**SERA:**
Não peça que ela abençoe o que ainda não aprendemos a sustentar.

**IVO:**
E não volte com uma resposta grandiosa. Estou ficando sem prateleira.

**NARRATOR:**
Acima da ala, a cidade da superfície continua funcionando.

Abaixo dela, a Deep City continua lembrando.

Entre as duas, pessoas respiram porque um sistema permanece.

E sofrem porque um sistema permanece.

E começam, talvez, a perguntar o que permanecer deveria significar.

**Set Flags:**

```text
ch03_scene03_complete = true
```

**End Scene.**

---

**Next Scene:** `ch03_scene04_mara_revisited`

**Version:** 0.1 (Complete)

**Status:** Ready for Iteration

---

## Scene 15 Summary

Scene 15 mostra o triângulo moral de Act 3:

- **Scene 13:** Restaurar pode ferir quem sobreviveu à perda
- **Scene 14:** Justiça pode virar porta arrombada
- **Scene 15:** Libertar sem sustentar também é abandono

**A terceira frase do caderno:**

> LIBERTAR SEM SUSTENTAR TAMBÉM É ABANDONAR.

Scene 15 fecha o triângulo e prepara o jogador para o último confronto: voltar à origem (Mara) sabendo que nem toda liberação é cura, nem toda contenção é crime.
