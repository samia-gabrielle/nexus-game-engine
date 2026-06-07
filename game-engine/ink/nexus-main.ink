// NEXUS - Master Story File
// A narrative game about amnesia, distributed guilt, and restoration ethics
// 18 scenes across 3 acts, 4 ethically distinct endings

// ===== VARIABLES =====

// Character flags
VAR player_has_name = false
VAR mara_debt_registered = false
VAR shared_debt_registered = false
VAR consent_matters = false

// Fourth line status
VAR fourth_line_status = "scarred_incomplete"

// Act 1 flags
VAR player_crossed_first_time = false
VAR mara_encountered = false
VAR mara_anger_expressed = false
VAR laboratory_explored = false
VAR thomas_name_seen = false
VAR player_is_nobody_in_1920 = false
VAR player_requested_erasure = false
VAR echo_identity_01 = false
VAR echo_obedience_01 = false
VAR echo_defiance_01 = false
VAR echo_body_01 = false
VAR echo_self_01 = false
VAR echo_avoidance_01 = false

// Act 2 flags
VAR entered_deep_city = false
VAR deep_symbols_seen = false
VAR lyra_denied_symbols = false
VAR ivo_met = false
VAR sera_met = false
VAR sera_requested_forgetting = false
VAR list_of_names_found = false
VAR read_forbidden_names = false
VAR gave_names_to_lyra = false
VAR memorized_one_name = false
VAR player_saw_no_single_choice = false
VAR community_refused_player = false
VAR accepted_refusal = false
VAR responsibility_distributed_accepted = false
VAR player_tried_to_take_blame = false
VAR player_tried_to_absolve_self = false
VAR player_accepted_distributed_responsibility = false
VAR lyra_origin_destabilized = false
VAR saw_2150_as_result_of_many = false
VAR heard_stability_compassion = false
VAR voss_met = false
VAR orren_met = false
VAR saw_climate_dashboard = false
VAR preventive_simulation_started = false
VAR saw_lives_saved_by_intervention = false
VAR saw_lives_lost_by_refusal = false
VAR defended_refusal_despite_cost = false
VAR accepted_emergency_exception = false
VAR the_choice_deconstructed = false

// Act 3 flags
VAR restoration_possible_confirmed = false
VAR restoration_faction_met = false
VAR reva_met = false
VAR entered_surface_core = false
VAR anik_met = false
VAR talen_met = false
VAR saw_life_support_dependency = false
VAR saw_memory_containment_dependency = false
VAR saw_food_climate_dependency = false
VAR player_called_system_cage = false
VAR player_called_system_roof = false
VAR player_refused_simple_label = false
VAR local_containment_node_seen = false
VAR local_containment_disabled = false
VAR local_containment_maintained = false
VAR local_decision_transferred = false
VAR community_review_created = false
VAR lyra_asked_permission = false
VAR returned_to_mara = false
VAR mara_revisited = false
VAR thomas_seen_again = false
VAR mara_refused_blessing = false
VAR mara_refused_origin_ownership = false
VAR origin_does_not_own_repair = false
VAR repair_requires_living_consent = false

// Echoes unlocked
LIST echoesUnlocked = ()

// Notebook entries
LIST notebookEntries = ()

// Choice history
LIST choiceHistory = ()

// ===== SCENES =====

=== ch01_scene01_2150_wakeup ===

A primeira coisa que você sente é frio.

Não o frio do ar.

O frio de algo que esteve desligado por tempo demais.

~ player_crossed_first_time = true

Antes de abrir os olhos, você escuta água.

Gotas batendo contra vidro.

Lentas.

Ácidas.

Persistentes.

Por alguns segundos, esse som é a única prova de que o mundo ainda existe.

* [Abra os olhos.]
    Sua consciência retorna em camadas.

    Primeiro, o peso do corpo.

    Depois, a dor nas articulações.

    Depois, o gosto metálico na boca.

    Por último, o medo.

    -> ch01_scene01_recognition

* [Fique quieto e escute mais.]
    Você tenta entender o padrão da chuva.

    Mas ela não tem padrão.

    Só persistência.

    Finalmente, você abre os olhos.

    -> ch01_scene01_recognition

=== ch01_scene01_recognition ===

Seus olhos se abrem dentro de uma cápsula vertical.

O vidro está embaçado por dentro.

Do lado de fora, luzes brancas falham no teto de uma sala médica abandonada.

Algumas piscam como se estivessem tentando lembrar a própria função.

Além das janelas altas, uma megacidade se ergue em camadas infinitas de concreto, néon e chuva escura.

Na sua frente, um monitor mostra um corpo humano em linhas azuis.

O corpo é seu.

Ao lado dele, um campo vazio:

NOME: —

* [Qual é o meu nome?]
    ~ echo_identity_01 = true
    ~ echoesUnlocked += echo_identity_01

    Você pergunta para a máquina.

    O monitor pisca.

    Uma vez.

    Processando.

    Duas.

    Buscando.

    Na terceira, a tela fica preta.

    O silêncio depois dura demais.

    Longo o suficiente para parecer escolha.

    Longo o suficiente para parecer medo.

    Nome não encontrado.

    -> ch01_scene02_nexus_activation

* [Onde eu estou?]
    Você tenta se mover.

    A cápsula não responde.

    Você está preso.

    Ou contido.

    Não há diferença óbvia.

    -> ch01_scene02_nexus_activation

=== ch01_scene02_nexus_activation ===

Os arcos da Máquina Nexus giram diante de você.

Quatro estruturas metálicas, uma dentro da outra, suspensas sobre um núcleo escuro.

Nenhum motor.

Nenhum cabo.

Nenhum som mecânico comum.

Apenas rotação.

Apenas espera.

Os arcos desaceleram.

Por um instante, todos se alinham.

Um círculo.

Quatro linhas.

O símbolo do seu pulso.

Mas completo.

A quarta linha, aquela que ainda não acendeu em você, pulsa dentro da máquina.

Não como luz.

Como lembrança.

* [Toco a máquina.]
    ~ fourth_line_status = "scarred_incomplete"

    Você coloca a mão contra o vidro.

    Está quente.

    Pulsando.

    Como se tivesse vida.

    Como se reconhecesse você.

    A quarta linha no seu pulso queima.

    A primeira linha acende.

    Depois a segunda.

    Depois a terceira.

    A quarta permanece escura.

    -> ch01_scene03_first_crossing_gateway

* [Fico observando a máquina.]
    ~ fourth_line_status = "scarred_incomplete"

    Você não toca nada.

    Apenas observa.

    Os arcos continuam girando.

    Sem pressa.

    Sem fim.

    -> ch01_scene03_first_crossing_gateway

=== ch01_scene03_first_crossing_gateway ===

O chão deixa de existir.

Não literalmente.

Você simplesmente deixa de acreditar que ele está lá.

Seu corpo é lembrado em outro tempo.

Não transportado.

Lembrado.

Como se uma história que esqueceu de você está recontando sua entrada.

Você cai.

No piso de madeira de um laboratório que reconhece antes de reconhecer.

O caderno danificado cai junto.

Ambos chegam como objetos que precisavam estar aqui.

O ar é pesado.

Poeira de giz.

Carvão.

Tinta.

Papel molhado.

Chuva real batendo contra vidro fino.

Tudo diferente do ar filtrado de 2150.

Tudo mais denso.

Tudo mais verdadeiro.

~ mara_encountered = true

* [Levante-se devagar.]
    Quando você consegue ver sem o chão girar, está em um laboratório pequeno.

    Não institucional.

    Íntimo.

    Perigoso.

    As prateleiras estão cheias de objetos que fazem sentido junto: mapas celestes, diagramas cerebrais, bobinas de fio, metal aquecido ainda emanando calor.

    Fotografias de soldados estão pregadas na parede.

    Homens com os olhos em ângulos errados.

    Homens que parecem ver em mais de uma direção de uma vez.

    Na parede do fundo, um quadro negro carrega uma frase em escrita apressada:

    > MEMÓRIA NÃO VIAJA.
    > ELA ECOA.

    -> ch01_scene04_mara_laboratory

* [Procure por saída.]
    Você se move pela sala em pânico.

    As prateleiras batem em você.

    O chão é mais mole do que deveria.

    Molhado.

    Há som vindo de uma sala lateral.

    Respiração.

    Movimento.

    -> ch01_scene04_mara_laboratory

=== ch01_scene04_mara_laboratory ===

Uma mulher surge da sombra como se a escuridão a conhecesse.

Ela não está segurando uma arma.

Mas você sabe que deveria estar.

Seus olhos vão direto para o caderno danificado no chão.

Depois para você.

Não há surpresa em seu rosto.

Há confirmação.

~ mara_anger_expressed = true

* [Eu não tenho nome.]
    A palavra ecoa.

    Literalmente.

    O laboratório parece ecoar.

    A mulher—Mara—observa você.

    Desapontada por não receber obediência completa.

    Mas não desinteressada.

    -> ch01_scene04_mara_choice

* [Quem você é?]
    Você tenta parecer calmo.

    Falha completamente.

    A mulher estuda seu rosto.

    -> ch01_scene04_mara_choice

=== ch01_scene04_mara_choice ===

Mara: Você não deveria estar aqui.

Mas está.

Então tenho duas opções.

Deixar você sair correndo para dizer ao mundo o que viu.

Ou você fica.

* [Fico.]
    ~ player_is_nobody_in_1920 = true
    ~ mara_debt_registered = true

    Você escolhe o silêncio.

    Mara recua um pouco.

    Como se essa escolha tivesse significado.

    -> ch01_scene05_return_to_2150

* [Saio correndo.]
    Você vira para a porta.

    A porta não abre.

    Você sabe que abriria, se o laboratório deixasse.

    -> ch01_scene05_return_to_2150

=== ch01_scene05_return_to_2150 ===

Você cai no piso de 2150.

Não como volta.

Como consequência.

O ar é seco demais.

Filtrado demais.

Depois da chuva de 1920, o ar de 2150 parece ausência de ar.

O caderno ainda está em suas mãos.

Mas agora é pesado de forma diferente.

Não é peso físico.

É peso de informação que não pediu para carregar.

~ echo_obedience_01 = true
~ echoesUnlocked += echo_obedience_01

A quarta linha no seu pulso começa a tremeluzir.

Não como antes.

Agora é irregular.

Como respiração de algo que não deveria respirar.

* [Continue.]
    -> END

=== ch01_scene03_first_crossing_1920 ===

As sirenes de 2150 desaparecem como um grito que esqueceu de respirar.

O chão deixa de existir.

Não literalmente.

Você simplesmente deixa de acreditar que ele está lá.

Seu corpo é lembrado em outro tempo.

Não transportado.

Lembrado.

Como se uma história que esqueceu de você está recontando sua entrada.

Você cai.

No piso de madeira de um laboratório que reconhece antes de reconhecer.

O caderno danificado cai junto.

Ambos chegam como objetos que precisavam estar aqui.

O ar é pesado.

Poeira de giz.

Carvão.

Tinta.

Papel molhado.

Chuva real batendo contra vidro fino.

Tudo diferente do ar filtrado de 2150.

Tudo mais denso.

Tudo mais verdadeiro.

~ laboratory_explored = true

Quando você consegue ver sem o chão girar, está em um laboratório pequeno.

Não institucional.

Íntimo.

Perigoso.

As prateleiras estão cheias de objetos que fazem sentido junto: mapas celestes, diagramas cerebrais, bobinas de fio, metal aquecido ainda emanando calor.

Fotografias de soldados estão pregadas na parede.

Homens com os olhos em ângulos errados.

Homens que parecem ver em mais de uma direção de uma vez.

Na parede do fundo, um quadro negro carrega uma frase em escrita apressada:

MEMÓRIA NÃO VIAJA. ELA ECOA.

Sobre a mesa de madeira, dois cadernos.

Um original, inteiro, com anotações meticulosas e desenhos precisos.

Outro danificado, chegado com você, com a quarta linha arrancada junto com um pedaço da capa.

* [Eu não tenho nome.]
    ~ echo_name_01 = true
    ~ echoesUnlocked += echo_name_01

    Tocando o caderno danificado, sentindo o peso dele.

    Eu não tenho nome.

    A porta ao fundo da sala se abre. Não completamente. O suficiente para alguém olhar através de um vão. Depois a porta se fecha novamente.

    Passos. Calmos. Cansados. Como quem sabe exatamente que hora é.

    Mara surge da sombra como se a escuridão a conhecesse.

    Ela não está segurando uma arma. Mas você sabe que deveria estar.

    Seus olhos vão direto para o caderno danificado no chão. Depois para você.

    Não há surpresa em seu rosto. Há confirmação.

    Mara: Eu não esperava você. Eu me preparei para a possibilidade de você. Há uma diferença, e ela importa.

    -> ch01_mara_first_meeting

* [Eu vim do futuro.]
    ~ mara_suspicion = true

    Tentando se levantar, desorientado.

    Eu vim do futuro.

    A voz é automática. Tipo resposta que você dá para explicar algo que não tem explicação.

    A porta se abre de novo. Desta vez, Mara sai completamente.

    Ela não o apontou para uma arma. Mas seus olhos carregam a precisão de alguém que já apontou uma antes.

    Mara: Futuro. (Ela se abaixa, recolhendo o caderno danificado do chão) Você veio do futuro.

    Sim.

    Mara: E o futuro envia consequências sem aviso? Ou aviso é só outra mentira que o tempo diz?

    -> ch01_mara_first_meeting

* [Você me disse para não escolher sozinho.]
    ~ echo_first_bond_01 = true
    ~ echoesUnlocked += echo_first_bond_01
    ~ mara_trust = true

    Lendo algo sem saber que está lendo.

    Você me disse para não escolher sozinho.

    A frase sai de você como memória de algo que ainda não aconteceu.

    Mara congela. A porta da sala atrás dela permanece aberta. Ela não a fecha.

    Seu rosto muda. Não de surpresa. De reconhecimento de que uma teoria que ela testava por meses acabou de falar.

    Mara (muito quieto): Como você sabe disso?

    Eu não... eu li? Num caderno?

    Mara pega o caderno original de sua mesa. O abre na primeira página. A mesma frase está lá, em sua própria caligrafia:

    SE ELE VOLTAR SEM NOME, NÃO O DEIXE ESCOLHER SOZINHO.

    Mara: Eu escrevi isso há dois meses. Para uma possibilidade. Para um fantasma que talvez nunca chegasse.

    -> ch01_mara_first_meeting

=== ch01_mara_first_meeting ===

Mara pega o caderno original de sua mesa. O compara com o danificado no chão.

A diferença é gritante.

Inteiro versus ferida.

Preparado versus destruído.

Mara: Você reconhece este lugar?

* [Não.]
    -> ch01_scene04_gateway

* [Sim. De alguma forma.]
    -> ch01_scene04_gateway

=== ch01_scene04_gateway ===

A porta atrás dela permanece aberta.

Você ouve algo do outro lado.

Respiração. Máquinas.

Som de chuva diferente—não ácida.

Apenas água antiga caindo.

Mara: Você precisa decidir agora. Antes que ele apareça.

Quem é "ele"?

Mara: Alguém que não deveria estar aqui. Assim como você.

~ fourth_line_status = "scarred_incomplete"

* [Fico.]
    ~ player_accepted_being_nobody = true
    A escolha é feita sem palavras. Apenas assentimento.
    Mara fecha a porta atrás dela.
    -> ch01_scene05_return_to_2150

* [Saio.]
    Você vira para a janela. A chuva ácida de 2150 está do outro lado, mas você não consegue alcançá-la de volta.
    Está preso aqui. Mara sabia disso.
    -> ch01_scene05_return_to_2150

=== END ===

~ notebookEntries += "Primeira cena completa. Teste bem-sucedido!"
