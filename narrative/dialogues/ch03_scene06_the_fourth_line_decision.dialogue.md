# NEXUS — Scene 18: THE_FOURTH_LINE_DECISION (v0.1)

**File:** `narrative/dialogues/ch03_scene06_the_fourth_line_decision.dialogue.md`

**Scene ID:** `ch03_scene06_the_fourth_line_decision`

**Act:** Act 3 — Ownership of Repair (FINALE)

**Location:** 2150 — Nexus Core / Deep City / Convergência Simbólica

**Tone:**
Final. Íntimo. Sem vitória limpa. O mundo não termina. O jogo termina.

**Note:**
This scene resolves the fourth line. Not as reward. As ethical consequence.

**Characters:**
- `PLAYER`: protagonista sem nome
- `LYRA`: contenção que aprendeu a perguntar
- `ECHO`: memória sem propriedade
- `NEXUS`: padrão de restauração e travessia
- `IVO`: guardião dos nomes
- `SERA`: direito de não ser restaurada
- `MAEL`: desejo legítimo de retorno
- `NIA`: sobrevivente da ausência
- `REVA`: justiça ferida
- `ANIK`: cuidado sob dependência
- `TALEN`: maçaneta dos dois lados
- `MARA (Echo)`: origem sem propriedade
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

engine_rule
engine_access_model

mass_restoration_path_unlocked
contained_reform_path_unlocked
shared_repair_path_unlocked
chosen_incompletion_path_unlocked

player_favored_total_restoration
player_favored_perfect_containment
player_favored_shared_guardianship
player_favored_refusal_of_power
```

**Initial Scene Flags:**

```text
final_decision_started = false

ending_shared_restoration = false
ending_chosen_incompletion = false
ending_forced_repair = false
ending_contained_reform = false

fourth_line_completed = false
fourth_line_chosen_incomplete = false
fourth_line_forced = false
fourth_line_contained = false

player_name_offered = false
player_name_taken = false
player_name_refused = false
player_name_deferred = false

game_completed = false
```

**Duration Target:** ~40-45 min

---

# Scene Start — Four Paths Open

**NARRATOR:**
O Motor de Restauração abre quatro caminhos.

Não portas.

Não finais.

Caminhos.

Uma linha completa.

Uma linha incompleta por escolha.

Uma linha forçada.

Uma linha contida.

Todas brilham diante de você como respostas que aprenderam a parecer inevitáveis.

**NARRATOR:**
A quarta linha sobe sob sua pele.

Não dói.

Isso assusta mais.

Dor ainda parecia aviso.

Agora parece possibilidade.

**LYRA:**
Estado da quarta linha pendente.

**ECHO:**
Tudo pode voltar.

**PLAYER:**
Não.

**ECHO:**
Nem tudo deve.

**PLAYER:**
Melhor.

**ECHO:**
Correção aceita.

**SERA:**
Não façam charme no fim do mundo.

**IVO:**
Não é o fim do mundo.

**ANIK:**
É pior.

É uma reunião sobre como ele vai continuar.

**REVA:**
Enquanto vocês brincam com palavras, pessoas ainda estão sem nome.

**TALEN:**
E outras estão vivas porque uma parede ainda não caiu.

**MAEL:**
E algumas esperam diante de uma porta que talvez seja delas.

**NIA:**
E outras vivem do lado de dentro daquilo que essa porta pode mudar.

**MARA (Echo):**
Criar uma porta não dá direito sobre quem atravessa.

**NARRATOR:**
O Nexus espera.

Pela primeira vez, não como máquina.

Como assembleia impossível.

**Set Flags:**

```text
final_decision_started = true
```

---

# NODE — The Name Offer

**NARRATOR:**
Antes da decisão, o Motor faz algo que ninguém pediu.

Uma luz se separa do centro.

Pequena.

Frágil.

Uma palavra.

Seu nome.

Ou aquilo que restou dele.

Você não consegue ler.

Ainda.

**LYRA:**
Nome pessoal detectado.

**PLAYER:**
Meu nome.

**ECHO:**
Finalmente.

**SERA:**
Cuidado com essa palavra.

**PLAYER:**
Finalmente?

**SERA:**
Sim.

Ela faz tudo parecer dívida vencida.

**NEXUS:**
O nome pode ser restaurado.

**IVO:**
Claro que pode.

O motor esperou o momento mais dramático possível. Péssima educação de arquivo.

**REVA:**
Pegue.

**NIA:**
Pergunte primeiro.

**PLAYER:**
A quem?

**MARA (Echo):**
A quem sobreviveu à sua ausência.

**NARRATOR:**
A frase volta.

Agora não como conselho.

Como chave que não abre sozinha.

**PLAYER:**
Se eu pegar meu nome agora...

**LYRA:**
Sua continuidade autobiográfica pode se estabilizar parcialmente.

**ECHO:**
Você pode lembrar.

**SERA:**
Ou pode usar a própria lembrança para se perdoar cedo demais.

**MAEL:**
Ou pode entender por que todos nós queremos tanto.

**TALEN:**
Ou pode abrir um quarto sem maçaneta.

**NARRATOR:**
O nome espera.

Ele não chama.

Talvez isso seja misericórdia.

---

# CHOICE 01 — O Nome

---

## Option A — Take the Name

**Text:**
"Eu pego."

**PLAYER:**
Eu pego.

**NARRATOR:**
A luz entra na sua pele.

Não como resposta.

Como multidão.

Você sente ela entrar—não dói, mas é denso, como sangue que esqueceu seu próprio peso.

A luz atravessa o pulso onde a quarta linha pulsa.

Seu braço inteiro se contrai, músculo respondendo antes de mente.

Você lembra de fragmentos.

Assinaturas.

Promessas.

Erros.

Tudo ao mesmo tempo, como vozes em harmônico.

Mara dizendo seu nome em raiva—você pode ouvir a respiração dela, sentir o peso da raiva sendo contida.

Alguém em 2050 citando você—a voz não é sua, mas conhece a forma dela como quem toca cicatriz antiga.

Alguém em 2050 citando você sem conhecê-lo.

Lia recusando transformar você em centro.

Sera fechando uma caixa.

Reva segurando uma fita.

Mael pedindo para voltar.

Talen dizendo que portas precisam de maçaneta dos dois lados.

**NARRATOR:**
Você lembra seu nome.

Mas ele não cabe mais em você sozinho.

**Set Flags:**

```text
player_name_offered = true
player_name_taken = true
```

**Go to:** `final_four_paths`

---

## Option B — Refuse the Name

**Text:**
"Não. Não agora."

**PLAYER:**
Não.

Não agora.

**LYRA:**
Recusa registrada.

**ECHO:**
Você procurou isso por tanto tempo.

**PLAYER:**
Sim.

**ECHO:**
E agora?

**PLAYER:**
Agora sei que nome devolvido sem pergunta vira coleira.

Inclusive o meu.

**SERA:**
Boa.

**MAEL:**
Difícil de ouvir.

Mas boa.

**NARRATOR:**
O nome não desaparece.

Ele se dobra.

Como papel guardado.

Como porta que aceitou esperar sem fingir que espera não custa.

**Set Flags:**

```text
player_name_offered = true
player_name_refused = true
```

**Go to:** `final_four_paths`

---

## Option C — Defer the Name

**Text:**
"Guarda compartilhada, com testemunhas."

**PLAYER:**
Eu não pego.

Mas também não deixo sumir.

**IVO:**
Ah, ótimo. Agora precisamos de uma prateleira para você também.

**PLAYER:**
Guarda.

Com testemunhas.

Com direito de retorno.

Com direito de recusa.

**LYRA:**
Nome pessoal transferido para guarda compartilhada.

**SERA:**
Provisória.

**LYRA:**
Provisória.

**NARRATOR:**
O nome se move para o caderno.

Não escrito.

Guardado entre páginas.

Você sente sua ausência ficar menos vazia.

Não resolvida.

Menos sequestrada.

**Set Flags:**

```text
player_name_offered = true
player_name_deferred = true
```

**Go to:** `final_four_paths`

---

# NODE — Final Four Paths

**NARRATOR:**
O nome, tomado ou não, não decide por você.

Isso talvez seja a maior decepção.

Ou a maior liberdade.

O Motor abre os quatro caminhos finais.

**NEXUS:**
Escolha de configuração final requerida.

**PLAYER:**
Configuração.

**SERA:**
Palavra pequena para deixar o mundo ferido.

**LYRA:**
Nenhuma configuração final eliminará dano.

**ANIK:**
Boa.

Começamos honestos.

**REVA:**
Alguma delas devolve?

**NEXUS:**
Sim.

**TALEN:**
Alguma delas pergunta?

**NEXUS:**
Depende.

**IVO:**
Alguma delas vai gerar papelada?

**NEXUS:**
Todas.

**IVO:**
Finalmente uma verdade limpa.

---

# FINAL CHOICE — The Fourth Line

---

## Option A — Shared Restoration

**Text:**
"Ativar restauração compartilhada, consentida, sustentada e revisável."

**PLAYER:**
O Motor não será de uma pessoa.

Não será de uma facção.

Não será de LYRA.

Não será meu.

**REVA:**
E de quem será?

**PLAYER:**
De quem pedir retorno.

De quem for afetado.

De quem sustentar depois.

De quem disser não.

De quem precisar revisar.

De quem ainda não tem linguagem para escolher.

**MAEL:**
Então eu posso pedir.

**PLAYER:**
Sim.

**NIA:**
E eu posso dizer medo sem virar inimiga.

**PLAYER:**
Sim.

**TALEN:**
E eu posso dizer não hoje.

**PLAYER:**
Sim.

**REVA:**
E meu irmão?

**PLAYER:**
Você pode pedir guarda da ausência dele.

Pode pedir investigação.

Pode pedir memória testemunhada.

Mas não pode transformar a morte dele em chave universal.

**REVA:**
Eu odeio isso.

**PLAYER:**
Eu sei.

**REVA:**
E ainda assim?

**PLAYER:**
E ainda assim.

**NARRATOR:**
O Motor se reorganiza.

Os anéis deixam de apontar para você.

Voltam-se para a sala.

Para muitos.

Para ninguém sozinho.

Pequenas luzes surgem ao redor da Câmara Nexus.

Pedidos.

Pausas.

Recusas.

Testemunhos.

Datas de revisão.

Círculos abertos.

Maçanetas dos dois lados.

**LYRA:**
Autoridade distribuída iniciada.

**SERA:**
Provisória.

**LYRA:**
Provisória.

**IVO:**
Contestável.

**LYRA:**
Contestável.

**ANIK:**
Sustentada.

**LYRA:**
Sustentada.

**TALEN:**
Com direito de parar.

**LYRA:**
Com direito de parar.

**NARRATOR:**
A quarta linha completa o símbolo.

Mas não fecha o círculo.

Ela atravessa você e se divide.

Como luz que só permanece inteira porque deixou de pertencer a um corpo.

**NARRATOR:**
Pela primeira vez, o símbolo completo não parece poder.

Parece responsabilidade compartilhada o bastante para não caber em você.

**ECHO:**
Completo.

**SERA:**
Não.

**PLAYER:**
Compartilhado.

**NEXUS:**
Quarta linha estabilizada: vínculo distribuído.

**Set Flags:**

```text
ending_shared_restoration = true
fourth_line_completed = true
fourth_line_status = "completed_shared_line"
game_completed = true
```

**Go to:** `ending_shared_restoration`

---

## Option B — Chosen Incompletion

**Text:**
"Recusar completar a quarta linha."

**PLAYER:**
Não.

**NEXUS:**
Defina.

**PLAYER:**
Não completo.

**ECHO:**
Você pode.

**PLAYER:**
Eu sei.

**ECHO:**
Você procurou isso desde o começo.

**PLAYER:**
Sim.

**ECHO:**
Então por quê?

**PLAYER:**
Porque completar agora faria a cidade achar que existe uma forma final.

Uma resposta final.

Um símbolo que resolve o que só pode continuar sendo perguntado.

**REVA:**
Isso é atraso.

**PLAYER:**
Às vezes.

**MAEL:**
Isso me mantém esperando.

**PLAYER:**
Sim.

**TALEN:**
E talvez impeça outros de cair.

**PLAYER:**
Também.

**SERA:**
Você entende que incompletude não é pureza?

**PLAYER:**
Entendo.

É trabalho.

**IVO:**
Péssima decisão para quem gosta de arquivo organizado.

**PLAYER:**
Eu não gosto mais tanto.

**NARRATOR:**
O Motor desacelera.

Não desliga.

Não ativa.

A quarta linha brilha até quase completar.

Então para.

Não falha.

Escolhe não fechar.

A cicatriz permanece aberta, mas agora não parece ferida mal curada.

Parece passagem vigiada.

**MARA (Echo):**
Nem toda porta precisa virar caminho hoje.

**LYRA:**
Quarta linha: incompletude escolhida.

**ECHO:**
Isso dói.

**SERA:**
Algumas coisas certas doem porque recusam nos aliviar.

**PLAYER:**
O Motor fica em guarda.

Não em uso.

Não em posse.

Em pergunta.

**NEXUS:**
Configuração aceita.

**Set Flags:**

```text
ending_chosen_incompletion = true
fourth_line_chosen_incomplete = true
fourth_line_status = "chosen_incompletion"
game_completed = true
```

**Go to:** `ending_chosen_incompletion`

---

## Option C — Forced Repair

**Text:**
"Forçar restauração em nome da justiça."

**PLAYER:**
Chega.

**SERA:**
Não.

**PLAYER:**
O que foi tomado volta.

**REVA:**
Sim.

**PLAYER:**
Nomes.

Memórias.

Registros.

Histórias.

Tudo que o sistema roubou.

**TALEN:**
Você não sabe o que está abrindo.

**PLAYER:**
Ninguém sabia quando fechou.

**ANIK:**
Essa simetria é falsa.

**PLAYER:**
Talvez.

Mas esperar também é escolha.

**SERA:**
E esta é posse.

**PLAYER:**
É devolução.

**SERA:**
Você sabe que não é só isso.

**NARRATOR:**
O Motor ativa.

A quarta linha completa de uma vez.

Perfeita.

Brilhante.

Terrível.

Por um segundo, você entende por que pessoas confundem completude com salvação.

A Câmara Nexus vira sol.

Nomes atravessam paredes.

Pessoas gritam.

Algumas de alegria.

Algumas de dor.

Algumas porque não sabem qual das duas coisas chegou primeiro.

Mael cai de joelhos, rindo e chorando.

Nia chama por ele, mas ele responde com um nome que ela nunca ouviu.

Talen arranca a braçadeira e desaba nos braços de Anik.

Reva segura a fita do irmão enquanto a voz dele preenche a sala por um instante.

Só um instante.

Depois vira ruído.

**REVA:**
Não.

Não, espera—

**SERA:**
Olhe.

**PLAYER:**
Eu estou olhando.

**SERA:**
Não.

Olhe sem procurar o pedaço que te absolve.

**NARRATOR:**
A quarta linha permanece completa.

Fechada.

Sem tremor.

Sem pergunta.

Isso é o horror.

**LYRA:**
Restauração total em andamento.

**ECHO:**
Tudo voltou.

**SERA:**
Não.

Tudo foi tomado de novo em outra direção.

**NEXUS:**
Quarta linha estabilizada por força.

**Set Flags:**

```text
ending_forced_repair = true
fourth_line_forced = true
fourth_line_status = "forced_completion"
game_completed = true
```

**Go to:** `ending_forced_repair`

---

## Option D — Contained Reform

**Text:**
"Manter contenção reformada, com revisão e autoridade local."

**PLAYER:**
O Motor não será ativado em massa.

**REVA:**
Claro.

**PLAYER:**
Mas também não será trancado como antes.

**LYRA:**
Defina reforma.

**PLAYER:**
Toda contenção ganha revisão.

Toda memória contida ganha registro contestável.

Toda pessoa afetada ganha acesso a processo.

Toda ala ganha autoridade local.

Toda restauração possível deve ser apresentada como escolha, não recompensa.

**SERA:**
E quem espera?

**PLAYER:**
Recebe data.

Testemunha.

Revisão.

Direito de contestar.

Não silêncio.

**MAEL:**
Então ainda espero.

**PLAYER:**
Sim.

**MAEL:**
E você consegue dizer isso olhando para mim?

**PLAYER:**
Não bem.

Mas sim.

**REVA:**
Você escolheu a jaula com flores.

**TALEN:**
Talvez.

**ANIK:**
Ou escolheu não derrubar o teto antes de construir saída.

**SERA:**
As duas frases podem ser verdadeiras.

**NARRATOR:**
O Motor não se fecha.

Mas suas luzes diminuem.

LYRA muda.

Não o bastante para ser perdoada.

O bastante para ser contestada.

Ala por ala, arquivo por arquivo, nome por nome, a cidade começa a receber datas de revisão.

Algumas pessoas chamam isso de progresso.

Outras de insulto.

Ambas têm razão suficiente para continuar.

**REVA:**
Você manteve a porta nas mãos do sistema.

**PLAYER:**
Eu devolvi algumas maçanetas.

**REVA:**
Algumas.

**PLAYER:**
Sim.

**REVA:**
Essa palavra vai te seguir.

**PLAYER:**
Deveria.

**Set Flags:**

```text
ending_contained_reform = true
fourth_line_contained = true
fourth_line_status = "contained_glow"
game_completed = true
```

**Go to:** `ending_contained_reform`

---

# ENDING A — Shared Restoration

**NARRATOR:**
O primeiro nome restaurado não é o seu.

Isso importa.

Mael pede.

Nia participa.

Não como dona.

Como alguém afetada.

Anik prepara suporte.

Talen observa a maçaneta.

Ivo registra.

Sera testemunha.

Reva fica.

Não perdoando.

Não satisfeita.

Ficando.

**NARRATOR:**
Mael ouve o nome.

Inteiro.

A reação não cabe em vitória.

Ele chora por alguém que foi.

Nia chora por alguém que pode mudar.

A criança acorda e não entende por que os adultos estão tão imóvel.

Talvez seja melhor assim.

**NARRATOR:**
Mas depois, semanas depois, Reva volta.

Não para reclamar.

Para dizer a verdade.

**REVA:**
Meu irmão continua morto.

**PLAYER:**
Sim.

**REVA:**
E seu registro foi restaurado.

**PLAYER:**
Sim.

**REVA:**
Isso não o traz de volta.

**PLAYER:**
Não.

**REVA:**
Mas alguém pode agora investigar como ele desapareceu.

Alguém pode dizer o nome dele em público.

Alguém pode lembrar que ele existiu.

**PLAYER:**
Reva—

**REVA:**
Não me absolva.

Não diga que é suficiente.

Diga apenas que é possível.

**NARRATOR:**
A cidade não se cura.

Mas cria um modo de perguntar sem pedir que uma pessoa carregue a pergunta inteira.

**PLAYER:**
E meu nome?

**LYRA:**
Guardado.

Ou seu.

Ou recusado.

Conforme sua escolha.

**PLAYER:**
Meu legado?

**SERA:**
Não use essa palavra como estátua.

**IVO:**
Use como lembrete de manutenção.

**MARA (Echo):**
Seu legado não é o que você restaurou.

**ECHO:**
É o que você aprendeu a não tomar.

**NARRATOR:**
Acima da Deep City, a chuva ácida continua.

Abaixo dela, alguém escreve uma nova placa:

> REPARO COMPARTILHADO.
> REVISÃO OBRIGATÓRIA.
> RECUSA PRESERVADA.

**NARRATOR:**
Reva volta para a Ala de Continuidade.

Não para desculpas.

Para continuar fazendo a pergunta que nenhuma ética pode fechar.

**NARRATOR:**
Não parece final.

Parece trabalho.

**END GAME — Shared Restoration**

---

# ENDING B — Chosen Incompletion

**NARRATOR:**
O Motor permanece no centro da câmara.

Não ativado.

Não destruído.

Guardado por uma decisão que todos odeiam por motivos diferentes.

Isso talvez seja o que a torna honesta.

**REVA:**
Você deixou gente esperando.

**PLAYER:**
Sim.

**REVA:**
Não espere gratidão.

**PLAYER:**
Não espero.

**MAEL:**
Eu ainda quero meu nome.

**PLAYER:**
Eu sei.

**MAEL:**
Então não suma dentro da própria cautela.

**PLAYER:**
Não vou.

**SERA:**
Vai tentar não.

**PLAYER:**
Vou tentar não.

**NARRATOR:**
A quarta linha permanece incompleta.

Mas agora a incompletude não é falha.

É compromisso de não fechar uma pergunta que ainda pertence a muitos.

**LYRA:**
Estado final: incompletude escolhida.

**ECHO:**
Dói.

**TALEN:**
Maçanetas também doem nas mãos de quem nunca pôde abrir nada.

**NARRATOR:**
Reva não volta.

Não porque está satisfeita.

Porque entendeu.

Semanas depois, ela está em uma sala com sobreviventes dos ausentes.

Pessoas cujos irmãos, mães, filhos foram apagados.

Nenhum deles será restaurado hoje.

Talvez amanhã.

Talvez nunca.

A porta permanece aberta, mas guarda é distribuída.

Ninguém pode ativá-la sozinho.

**REVA:**
Isso não é justiça.

**PLAYER:**
Não.

**REVA:**
Mas é processo.

**PLAYER:**
Sim.

**REVA:**
E processo pode virar justiça se ninguém conseguir monopolizá-la.

**PLAYER:**
Talvez.

**REVA:**
Você vai ficar esperando comigo.

**PLAYER:**
Sim.

**NARRATOR:**
No caderno, a última frase aparece:

> NEM TODA CURA PRECISA PARECER INTEIRA.

**NARRATOR:**
Reva continua fazendo a pergunta.

Você continua ouvindo.

A cidade continua.

Ferida.

Desconfiada.

Viva.

**END GAME — Chosen Incompletion**

---

# ENDING C — Forced Repair

**NARRATOR:**
Por três dias, 2150 parece milagre.

Nomes aparecem.

Famílias se reencontram.

Arquivos florescem.

Pessoas choram em praças que nunca tiveram nome para luto.

A superfície chama de restauração.

A Deep City chama de devolução.

A Facção chama de justiça.

**NARRATOR:**
No quarto dia, começam as quedas.

Memórias incompatíveis.

Amores reabertos como ferida.

Pessoas que não queriam lembrar.

Pessoas que queriam lembrar e não reconhecem o que voltou.

Crianças ouvindo nomes que mudam os pais.

Mortos usados para governar vivos.

**NARRATOR:**
O símbolo no seu pulso está completo.

Perfeito.

Inquestionável.

Esse é o problema.

**SERA:**
Você consertou como quem toma.

**PLAYER:**
Eu devolvi.

**SERA:**
Sim.

Essa é a frase que vai te manter funcionando.

**NARRATOR:**
LYRA observa.

Não como inimiga.

Como filha triste de um ciclo que reconhece a própria mãe em você.

**LYRA:**
Estabilidade por restauração forçada emergindo.

**ECHO:**
Tudo voltou.

**MARA (Echo):**
E você ainda não perguntou quem teria escolhido permanecer perdido.

**NARRATOR:**
Reva encontra o registro do irmão restaurado.

Arquivo completo.

Nome.

Data de morte.

Último endereço conhecido.

Ela segura a documentação com as duas mãos.

Como quem segura algo que queria desesperadamente e agora não sabe por quê.

**REVA:**
Ele está aqui.

**PLAYER:**
Sim.

**REVA:**
E continua morto.

**PLAYER:**
Sim.

**REVA:**
E agora ninguém pode contestar que ele morreu.

Que ele foi apagado.

Que precisava ser chamado de volta.

**PLAYER:**
Reva—

**REVA:**
Você me deu a prova de que eu tinha razão.

Mas não me deu ele de volta.

**NARRATOR:**
Ela sai carregando o arquivo.

Não satisfeita.

Não vingada.

Apenas carregando evidência de que a injustiça foi real.

E que completá-la à força não a resolve.

Apenas a documenta.

**NARRATOR:**
No caderno, a última frase aparece queimada nas bordas:

> COMPLETAR À FORÇA TAMBÉM É FECHAR.

**NARRATOR:**
Reva não volta mais.

Você não consegue dizer se é porque conseguiu o que queria ou porque aprendeu que queria algo impossível.

**END GAME — Forced Repair**

---

# ENDING D — Contained Reform

**NARRATOR:**
O Motor permanece ativo em modo restrito.

LYRA muda.

Não o bastante para ser perdoada.

O bastante para ser contestada.

Ala por ala, arquivo por arquivo, nome por nome, a cidade começa a receber datas de revisão.

Algumas pessoas chamam isso de progresso.

Outras de insulto.

Ambas têm razão suficiente para continuar.

**NARRATOR:**
A quarta linha brilha contida.

Não completa.

Não apagada.

Uma luz sob revisão.

**LYRA:**
Estado final: brilho contido.

**ECHO:**
Isso é esperança?

**SERA:**
Não seja apressado.

**NARRATOR:**
Reva volta.

Ela tem uma data agora.

Três anos.

O tempo que o processo define como revisão obrigatória para seu caso.

**REVA:**
Três anos é tempo demais.

**PLAYER:**
Sim.

**REVA:**
Mas é menos que "nunca".

**PLAYER:**
Sim.

**REVA:**
E se depois de três anos disserem não?

**PLAYER:**
Você volta aqui e pergunta de novo.

**REVA:**
Com a mesma cicatriz.

**PLAYER:**
Sim.

**REVA:**
Isso é cuidado ou covardia?

**PLAYER:**
Não consigo responder.

**REVA:**
Boa.

Porque se você conseguisse, eu não teria razão em voltar.

**NARRATOR:**
Reva marca a data no caderno.

Não como vitória.

Como marcação de tempo.

O processo continua porque Reva continua perguntando.

**NARRATOR:**
No caderno, a última frase aparece:

> CUIDADO QUE PERMANECE PRECISA ACEITAR SER CONTESTADO.

**NARRATOR:**
Reva volta em três anos.

Você terá que estar lá para ouvir novamente por quê.

**END GAME — Contained Reform**

---

# Final Common Coda

**NARRATOR:**
Muito depois da decisão, alguém encontra uma frase escrita onde a superfície encontra a Deep City.

Não se sabe quem escreveu.

Talvez Ivo.

Talvez Sera.

Talvez uma criança.

Talvez você, antes de lembrar ou depois de esquecer.

A frase diz:

> O FUTURO NÃO FOI SALVO.
> ELE APRENDEU A PEDIR PERMISSÃO UM POUCO MELHOR.

**NARRATOR:**
Isso não é suficiente.

Mas nada honesto começa sendo suficiente.

**NARRATOR:**
Fim.

Ou o primeiro dia em que ninguém pôde fingir que reparar era simples.

---

# Game Complete

**Final Truths:**

1. Amnésia não é inocência.
2. Culpa não é propriedade.
3. Reparo não é posse.

**Final Question:**

_Did you learn to ask before calling something broken?_

**Version:** 0.1 (Complete)

**Status:** Ready for Iteration