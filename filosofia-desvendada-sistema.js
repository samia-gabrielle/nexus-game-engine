/**
 * FILOSOFIA DESVENDADA - Educational Philosophy System
 * Complete philosophical database and interactive menu
 */

// ============================================================================
// FILOSOFIA DATABASE
// ============================================================================

const FILOSOFOS = {
    'sartre': {
        nome: 'Jean-Paul Sartre',
        anos: '1905-1980',
        pais: 'França',
        corrente: 'Existencialismo',
        status: 'desbloqueado',
        epocaAprendizagem: 'Cena 1 - Ivo',
        resumo: 'O filósofo mais importante do século XX. Criador da frase "A existência precede a essência."',
        ideiacentral: 'Você não nasce com propósito. Você É responsável por criá-lo.',
        conceito: 'MÁ-FÉ (Bad Faith)',
        concetoDefinicao: 'Quando você finge que não é livre para escapar da responsabilidade.',
        obraPrincipal: 'Being and Nothingness',
        anoObra: 1943,
        paginas: 726,
        frases: [
            '"O homem é condenado a ser livre" - Sua liberdade é sua prisão. Você DEVE escolher.',
            '"Existence precedes essence" - Você não é definido. Você se define.',
            '"We are our choices" - Você É literalmente o somatório de tudo que escolheu.'
        ],
        criticaAoFilosofo: 'Ele diz que até ser vítima é escolher. Mas nem sempre. Às vezes você é apenas consumido.',
        relevanciaaNexus: 'Você realmente escolhe seu final? Ou apenas acredita que escolhe?',
        leituraRecomendada: [
            'Existentialism is a Humanism (1945) - 50 páginas, mais acessível',
            'Being and Nothingness (1943) - 726 páginas, para profundidade completa'
        ]
    },

    'camus': {
        nome: 'Albert Camus',
        anos: '1913-1960',
        pais: 'Argélia/França',
        corrente: 'Absurdismo',
        status: 'desbloqueado',
        epocaAprendizagem: 'Cena 1 - Ivo',
        resumo: 'O filósofo do "absurdo". Aquela sensação quando você percebe que existência não faz sentido... mas você tem que viver mesmo assim.',
        ideiacentral: 'A desconexão entre nossa busca por significado e o universo indiferente.',
        conceito: 'O ABSURDO',
        concetoDefinicao: 'Você nasce sem escolher, morre sem escolher, mas precisa dar significado enquanto está aqui.',
        obraPrincipal: 'The Myth of Sisyphus',
        anoObra: 1942,
        paginas: 100,
        frases: [
            '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
            '"One must imagine Sisyphus happy" - Se você abraça a futilidade, ela para de ser futilidade.',
            '"Life is either a daring adventure or nothing at all" - Ou você vive radicalmente, ou está apenas morrendo lentamente.'
        ],
        criticaAoFilosofo: 'Se NEXUS sempre falha... você continua tentando por quê? Porque o significado não vem da vitória. Vem de você escolher viver, sabendo que vai falhar.',
        relevanciaaNexus: 'Sísifo é redenção, não salvação.',
        leituraRecomendada: [
            'The Myth of Sisyphus (1942) - Obra-prima sobre viver no absurdo',
            'The Plague (1947) - Romance que explora filosofia através de ficção'
        ]
    },

    'kierkegaard': {
        nome: 'Søren Kierkegaard',
        anos: '1813-1855',
        pais: 'Dinamarca',
        corrente: 'Existencialismo (Precursor)',
        status: 'bloqueado',
        desbloquearEm: 'Conhecer Será',
        resumo: 'O avô do existencialismo. Inventou "angústia existencial" 100 anos antes de Sartre.',
        ideiacentral: 'Você não pode PROVAR que Deus existe. Mas pode ESCOLHER acreditar. Isso é "salto de fé".',
        conceito: 'O SALTO DE FÉ',
        concetoDefinicao: 'Quando você vai além da razão e escolhe acreditar.',
        obraPrincipal: 'Either/Or',
        anoObra: 1843,
        paginas: 600,
        frases: [
            '"The specific character of despair is precisely this: it is unaware of being despair"',
            '"Life can only be understood backwards; but it must be lived forwards"'
        ],
        relevanciaaNexus: 'Será escolheu sacrifício. Mas escolheu por fé ou por escapismo?',
        leituraRecomendada: [
            'Either/Or (1843) - Masterpiece sobre escolha ética vs estética',
            'The Concept of Anxiety (1844) - Mais técnico mas revolucionário'
        ]
    },

    'heidegger': {
        nome: 'Martin Heidegger',
        anos: '1889-1976',
        pais: 'Alemanha',
        corrente: 'Fenomenologia/Existencialismo',
        status: 'bloqueado',
        desbloquearEm: 'Conhecer Thomas',
        resumo: '"O que é SER?" - Pergunta simples que revolucionou filosofia.',
        ideiacentral: 'Você pode viver "iautenticamente" ou "authenticamente".',
        conceito: 'AUTENTICIDADE vs MÁ-FÉ',
        concetoDefinicao: 'Viver sua verdade vs fazer o que é dito.',
        obraPrincipal: 'Being and Time',
        anoObra: 1927,
        paginas: 488,
        frases: [
            '"Language is the house of being" - Como você fala = como você existe',
            '"Anxiety reveals our freedom" - Quando você sente angústia, você sente livre'
        ],
        relevanciaaNexus: 'Thomas sabe a verdade. Mas conhecimento o prendeu.',
        leituraRecomendada: [
            'Being and Time (1927) - Densa mas revolucionária'
        ]
    },

    'nietzsche': {
        nome: 'Friedrich Nietzsche',
        anos: '1844-1900',
        pais: 'Alemanha',
        corrente: 'Vontade de Poder',
        status: 'bloqueado',
        desbloquearEm: 'Conhecer Reva',
        resumo: 'O filósofo que destruiu toda a moral tradicional. "Deus está morto. E NÓS o matamos."',
        ideiacentral: 'Tudo que você faz é para ganhar poder. Até sacrifício é poder.',
        conceito: 'VONTADE DE PODER',
        concetoDefinicao: 'A força motriz de toda ação humana.',
        obraPrincipal: 'Beyond Good and Evil',
        anoObra: 1886,
        paginas: 250,
        frases: [
            '"God is dead. And we have killed him." - Se Deus está morto, quem dá significado?',
            '"What doesn\'t kill me makes me stronger" - Sofrimento é crescimento.',
            '"He who has a why to live can bear almost any how" - Se você tem propósito, suporta qualquer sofrimento.'
        ],
        relevanciaaNexus: 'Reva buscava poder. Mas descobriu que poder não salva.',
        leituraRecomendada: [
            'Beyond Good and Evil (1886) - Revolucionário',
            'Thus Spoke Zarathustra (1883) - Filosófico + poesia'
        ]
    },

    'levinas': {
        nome: 'Emmanuel Levinas',
        anos: '1906-1995',
        pais: 'Lituânia/França',
        corrente: 'Ética',
        status: 'bloqueado',
        desbloquearEm: 'Conversa profunda com Será',
        resumo: '"O rosto do outro é sagrado." Filósofo que fez ÉTICA o centro.',
        ideiacentral: 'Você é RESPONSÁVEL pelo outro. Antes de tudo.',
        conceito: 'O ROSTO DO OUTRO',
        concetoDefinicao: 'Alteridade - o outro é infinito dentro da finitude.',
        obraPrincipal: 'Totality and Infinity',
        anoObra: 1961,
        paginas: 300,
        frases: [
            '"The face of the Other says to me: you shall not commit murder"',
            '"Ethics is the first philosophy" - Antes de pensar em ser, pense em responsabilidade'
        ],
        relevanciaaNexus: 'Será viu os rostos daqueles que iam sofrer. Seu sacrifício vem de ética levinas.',
        leituraRecomendada: [
            'Totality and Infinity (1961) - Revolucionário mas muito denso'
        ]
    },

    'dostoievski': {
        nome: 'Fiódor Dostoiévski',
        anos: '1821-1881',
        pais: 'Rússia',
        corrente: 'Filosofia através de Literatura',
        status: 'bloqueado',
        desbloquearEm: 'Momentos críticos do jogo',
        resumo: 'Não era filósofo. Era novelista. MAS seus romances exploram consciência melhor que tratados.',
        ideiacentral: 'Consciência, culpa e redenção através de narrativa.',
        conceito: 'CULPA COMO TRANSFORMAÇÃO',
        concetoDefinicao: 'Sofrimento consciente como caminho para redenção.',
        obraPrincipal: 'Crime and Punishment',
        anoObra: 1866,
        paginas: 500,
        frases: [
            '"I believe that there\'s nothing more beautiful than Christ."',
            '"To love actively is a hard and dreadful thing compared with love in dreams"',
            '"The suffering will be great, but the consciousness of your life will gradually increase"'
        ],
        relevanciaaNexus: 'Crime and Punishment é sobre culpa que não passa. Ráskolnikov é Ivo.',
        leituraRecomendada: [
            'Crime and Punishment (1866) - Masterpiece de ficção filosófica'
        ]
    },

    'kafka': {
        nome: 'Franz Kafka',
        anos: '1883-1924',
        pais: 'Tchecoslováquia',
        corrente: 'Absurdismo/Existencialismo',
        status: 'bloqueado',
        desbloquearEm: 'Múltiplas rotas',
        resumo: 'Criador de "kafkiano" - quando burocracia se torna absurdo.',
        ideiacentral: 'Você está preso em sistema que não entende. E o sistema não explica.',
        conceito: 'ABSURDO BUROCRÁTICO',
        concetoDefinicao: 'A alienação moderna através de sistemas incompreensíveis.',
        obraPrincipal: 'The Trial',
        anoObra: 1925,
        paginas: 200,
        frases: [
            '"It is not necessary that you leave the house. Remain at your desk and listen."',
            '"There is a goal, but no way; what we call the way is only wavering"'
        ],
        relevanciaaNexus: 'NEXUS é kafkiano. Você é julgado. Mas por quê?',
        leituraRecomendada: [
            'The Trial (1925) - Absurdismo em forma de romance'
        ]
    }
};

// ============================================================================
// MITOLOGIA DATABASE
// ============================================================================

const MITOLOGIA = {
    'sissifo': {
        nome: 'Sísifo',
        origem: 'Mitologia Grega',
        historia: 'Rei da Corinto. Enganou até a morte (Tânatos). Foi punido: eternamente empurrando pedra para o topo da montanha.',
        significado: 'A metáfora perfeita para vida sem significado. Mas Camus diz: "One must imagine Sisyphus happy"',
        relevanciaaNexus: 'Cada tentativa de salvar NEXUS é um Sísifo. Falha. Mas você recomeça.',
        leitura: 'The Myth of Sisyphus - Albert Camus',
        status: 'desbloqueado'
    },
    'prometeu': {
        nome: 'Prometeu',
        origem: 'Mitologia Grega',
        historia: 'Titã que roubou fogo dos deuses para dar aos humanos. Zeus o puniu: acorrentado a rocha, águia comia seu fígado eternamente.',
        significado: 'Conhecimento sempre tem preço. Rebelião contra autoridade custa eternamente.',
        relevanciaaNexus: 'Ivo é Prometeu. Tentou descobrir a verdade sobre NEXUS. E foi punido com conhecimento que não pode esquecer.',
        leitura: 'Promethean Bound - Aeschylus',
        status: 'desbloqueado'
    },
    'orfeu': {
        nome: 'Orfeu',
        origem: 'Mitologia Grega',
        historia: 'Músico tão bom que até pedras choram. Sua amada Eurídice morre. Desce ao Hades para buscá-la. Hades diz: "NÃO olhe para trás." Ele olha. Eurídice desaparece.',
        significado: 'Amor não salva. Às vezes mata. Conhecimento pode destruir o que você ama.',
        relevanciaaNexus: 'Você conhece a verdade sobre NEXUS. Mas aquele conhecimento pode destruir sua esperança.',
        leitura: 'Metamorphoses - Ovid',
        status: 'bloqueado',
        desbloquearEm: 'Peace Path'
    },
    'pandora': {
        nome: 'Pandora\'s Box',
        origem: 'Mitologia Grega',
        historia: 'Pandora abre caixa que devia ficar fechada. Todos os males saem: doença, sofrimento, morte. Apenas "esperança" fica dentro.',
        significado: 'Conhecimento é sempre perigoso. Mas esperança permanece.',
        relevanciaaNexus: 'Você abre a caixa (NEXUS) e vê a verdade. Tudo sai. Mas talvez esperança permaneça.',
        leitura: 'Theogony - Hesiod',
        status: 'bloqueado',
        desbloquearEm: 'Act 5 Revelation'
    }
};

// ============================================================================
// MÚSICA & COMPOSITORES
// ============================================================================

const MUSICA = {
    'satie-gymnopedia': {
        compositor: 'Erik Satie',
        peca: 'Gymnopédie No. 1',
        genero: 'Minimalismo Clássico',
        tempo: '3:28',
        mood: 'Contemplação silenciosa',
        usoemNexus: 'Cenas de reflexão solitária',
        sobre: 'Compositor francês que criou minimalismo 100 anos antes de existir termo. Suas peças parecem vazias. Mas aquele vazio É o significado.',
        relevancia: '"Silêncio é uma nota"',
        status: 'bloqueado',
        desbloquearEm: 'Primeira cena de Será'
    },
    'part-spiegel': {
        compositor: 'Arvo Pärt',
        peca: 'Spiegel im Spiegel',
        genero: 'Minimalismo Sacro',
        tempo: '8:35',
        mood: 'Infinito contemplativo',
        usoemNexus: 'Cenas de transcendência',
        sobre: 'Compositor estoniano. Criou "Tintinnabuli" (som de sinos). Suas peças soam como eternidade sendo tocada.',
        relevancia: '"Eternidade é feita de momentos"',
        status: 'bloqueado',
        desbloquearEm: 'Peace Path'
    },
    'cage-4-33': {
        compositor: 'John Cage',
        peca: '4\'33"',
        genero: 'Composição Experimental',
        tempo: '4:33',
        mood: 'Silêncio como arte',
        usoemNexus: 'Pausas críticas',
        sobre: 'Compositor americano que criou música de SILÊNCIO. 4\'33" é 4 minutos de nada. E aquele nada é a composição.',
        relevancia: '"O que não é dito é tão importante quanto o dito"',
        status: 'desbloqueado'
    },
    'glass-glassworks': {
        compositor: 'Philip Glass',
        peca: 'Glassworks',
        genero: 'Minimalismo Eletrônico',
        tempo: 'Várias peças',
        mood: 'Repetição hipnotizante',
        usoemNexus: 'Cenas de ciclos, loops',
        sobre: 'Compositor americano. Suas peças soam como NEXUS: belas estruturas que se repetem.',
        relevancia: '"Beleza é feita de repetição com variação"',
        status: 'bloqueado',
        desbloquearEm: 'Harmony Path'
    }
};

// ============================================================================
// CORRENTES FILOSÓFICAS
// ============================================================================

const CORRENTES = {
    'existencialismo': {
        nome: 'Existencialismo',
        filosofos: ['Sartre', 'Camus', 'Kierkegaard', 'Heidegger'],
        definicao: '"Existência precede essência" - Você não nasce com propósito. Você o cria através de escolhas.',
        conceitos: [
            'Liberdade (você é sempre livre)',
            'Responsabilidade (por tudo que escolhe)',
            'Angústia (a vertigem da liberdade)',
            'Autenticidade (viver sua verdade)'
        ],
        maxima: '"You are condemned to be free"',
        relevancia: 'Toda a estrutura do jogo é existencialista.'
    },
    'absurdismo': {
        nome: 'Absurdismo',
        filosofos: ['Camus'],
        definicao: 'O universo é indiferente. Não há significado objetivo. Mas você vive mesmo assim. E aquilo é rebeldia.',
        conceitos: [
            'O Absurdo (desconexão entre esperança e realidade)',
            'A Revolta (recusar suicídio)',
            'Sísifo (a metáfora perfeita)'
        ],
        maxima: '"One must imagine Sisyphus happy"',
        relevancia: 'Se NEXUS sempre falha... você continua tentando?'
    },
    'fenomenologia': {
        nome: 'Fenomenologia',
        filosofos: ['Heidegger'],
        definicao: '"O estudo de como as coisas aparecem para nós" - Não importa a realidade "objetiva". Importa sua experiência.',
        conceitos: [
            'Ser (what it means to exist)',
            'Tempo (you are always mortal)',
            'Autenticidade (vs inauthenticity)'
        ],
        maxima: '"Being-in-the-world"'
    },
    'etica': {
        nome: 'Ética (Levinas)',
        filosofos: ['Levinas'],
        definicao: '"O rosto do outro é infinito" - Você é responsável antes de estar livre.',
        conceitos: [
            'O Rosto (alterity - the other)',
            'Responsabilidade (infinite, before law)',
            'Ética (first philosophy, not metaphysics)'
        ],
        maxima: '"The other is infinitely other"'
    }
};

// ============================================================================
// SISTEMA DE DESBLOQUEIO
// ============================================================================

const DESBLOQUEIO = {
    'sartre': { desbloqueado: true },
    'camus': { desbloqueado: true },
    'kierkegaard': { desbloqueado: false, condicao: 'conhecer-sera' },
    'heidegger': { desbloqueado: false, condicao: 'questionar-thomas' },
    'nietzsche': { desbloqueado: false, condicao: 'confrontar-reva' },
    'levinas': { desbloqueado: false, condicao: 'conversa-profunda-sera' },
    'dostoievski': { desbloqueado: false, condicao: 'culpa-momento' },
    'kafka': { desbloqueado: false, condicao: 'multiplas-rotas' },
    'sissifo': { desbloqueado: true },
    'prometeu': { desbloqueado: true },
    'orfeu': { desbloqueado: false, condicao: 'peace-path' },
    'pandora': { desbloqueado: false, condicao: 'act5-revelation' }
};

// ============================================================================
// FUNÇÕES DO SISTEMA
// ============================================================================

function abrirFilosofiaDesvendada() {
    const modal = document.createElement('div');
    modal.id = 'filosofia-modal';
    modal.className = 'filosofia-modal';
    modal.innerHTML = `
        <div class="filosofia-container">
            <div class="filosofia-header">
                <h2>📚 FILOSOFIA DESVENDADA</h2>
                <button onclick="fecharFilosofia()" class="fechar-btn">×</button>
            </div>

            <div class="filosofia-tabs">
                <button onclick="abaMuda('filosofos')" class="aba-btn aba-ativo">FILÓSOFOS</button>
                <button onclick="abaMuda('correntes')" class="aba-btn">CORRENTES</button>
                <button onclick="abaMuda('mitologia')" class="aba-btn">MITOLOGIA</button>
                <button onclick="abaMuda('musica')" class="aba-btn">MÚSICA</button>
                <button onclick="abaMuda('minha-jornada')" class="aba-btn">MINHA JORNADA</button>
            </div>

            <div id="aba-conteudo" class="aba-conteudo">
                <!-- Conteúdo muda dinamicamente -->
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    abaMuda('filosofos');
}

function abaMuda(aba) {
    // Atualizar botões ativos
    document.querySelectorAll('.aba-btn').forEach(btn => {
        btn.classList.remove('aba-ativo');
    });
    event.target.classList.add('aba-ativo');

    // Mostrar conteúdo
    const conteudo = document.getElementById('aba-conteudo');

    switch(aba) {
        case 'filosofos':
            mostrarFilosofos(conteudo);
            break;
        case 'correntes':
            mostrarCorrentes(conteudo);
            break;
        case 'mitologia':
            mostrarMitologia(conteudo);
            break;
        case 'musica':
            mostrarMusica(conteudo);
            break;
        case 'minha-jornada':
            mostrarMinhaJornada(conteudo);
            break;
    }
}

function mostrarFilosofos(container) {
    let html = '<div class="filosofos-lista">';

    Object.entries(FILOSOFOS).forEach(([key, filosofo]) => {
        const desbloqueado = DESBLOQUEIO[key]?.desbloqueado || false;
        const status = desbloqueado ? '🟢 DESBLOQUEADO' : `🔴 BLOQUEADO (${DESBLOQUEIO[key]?.condicao || 'desconhecido'})`;

        html += `
            <div class="filosofo-card ${desbloqueado ? 'desbloqueado' : 'bloqueado'}">
                <div class="filosofo-header">
                    <h3>${filosofo.nome}</h3>
                    <span class="status">${status}</span>
                </div>
                <div class="filosofo-info">
                    <p><strong>País:</strong> ${filosofo.pais}</p>
                    <p><strong>Corrente:</strong> ${filosofo.corrente}</p>
                    <p><strong>Anos:</strong> ${filosofo.anos}</p>
                    ${desbloqueado ? `
                        <p><strong>Aprendido em:</strong> ${filosofo.epocaAprendizagem}</p>
                        <button onclick="expandirFilosofo('${key}')" class="expandir-btn">Ver Completo →</button>
                    ` : `
                        <p><em>Bloqueado até: ${DESBLOQUEIO[key]?.condicao}</em></p>
                    `}
                </div>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function mostrarCorrentes(container) {
    let html = '<div class="correntes-lista">';

    Object.entries(CORRENTES).forEach(([key, corrente]) => {
        html += `
            <div class="corrente-card">
                <h3>${corrente.nome}</h3>
                <p><strong>Filósofos:</strong> ${corrente.filosofos.join(', ')}</p>
                <p>${corrente.definicao}</p>
                <div class="conceitos">
                    <strong>Conceitos-Chave:</strong>
                    <ul>
                        ${corrente.conceitos.map(c => `<li>${c}</li>`).join('')}
                    </ul>
                </div>
                <p><strong>Máxima:</strong> ${corrente.maxima}</p>
                <p><em>${corrente.relevancia}</em></p>
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function mostrarMitologia(container) {
    let html = '<div class="mitologia-lista">';

    Object.entries(MITOLOGIA).forEach(([key, mito]) => {
        const desbloqueado = DESBLOQUEIO[key]?.desbloqueado || false;

        html += `
            <div class="mito-card ${desbloqueado ? 'desbloqueado' : 'bloqueado'}">
                <h3>${mito.nome}</h3>
                <p><strong>Origem:</strong> ${mito.origem}</p>
                ${desbloqueado ? `
                    <p>${mito.historia}</p>
                    <p><strong>Significado:</strong> ${mito.significado}</p>
                    <p><em>${mito.relevanciaaNexus}</em></p>
                ` : `
                    <p><em>Bloqueado até: ${DESBLOQUEIO[key]?.condicao}</em></p>
                `}
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function mostrarMusica(container) {
    let html = '<div class="musica-lista">';

    Object.entries(MUSICA).forEach(([key, musica]) => {
        const desbloqueado = DESBLOQUEIO[key]?.desbloqueado || false;

        html += `
            <div class="musica-card ${desbloqueado ? 'desbloqueado' : 'bloqueado'}">
                <h3>${musica.peca}</h3>
                <p><strong>Compositor:</strong> ${musica.compositor}</p>
                <p><strong>Gênero:</strong> ${musica.genero}</p>
                ${desbloqueado ? `
                    <p><strong>Tempo:</strong> ${musica.tempo}</p>
                    <p><strong>Mood:</strong> ${musica.mood}</p>
                    <p><strong>Usado em:</strong> ${musica.usoemNexus}</p>
                    <p>${musica.sobre}</p>
                ` : `
                    <p><em>Bloqueado até: ${DESBLOQUEIO[key]?.condicao}</em></p>
                `}
            </div>
        `;
    });

    html += '</div>';
    container.innerHTML = html;
}

function mostrarMinhaJornada(container) {
    const jornada = gameState.filosofia || {};

    let html = `
        <div class="minha-jornada">
            <h3>Seus Filósofos Encontrados</h3>
            <div class="jornada-stats">
                <p>Total Desbloqueados: <strong>${Object.values(DESBLOQUEIO).filter(d => d.desbloqueado).length}</strong>/8</p>
                <p>Conceitos Explorados: <strong>${Object.keys(jornada).length}</strong></p>
            </div>

            <h3>Escolhas Filosóficas que Você Fez</h3>
            <div class="escolhas-filosoficas">
                ${Object.entries(jornada).map(([filosofo, valor]) => `
                    <p>✓ ${filosofo}: ${valor}</p>
                `).join('') || '<p><em>Ainda não há escolhas registradas</em></p>'}
            </div>

            <h3>Próximas Descobertas</h3>
            <div class="proximas-descobertas">
                <p>Para desbloquear Kierkegaard → Conversa profunda com Será</p>
                <p>Para desbloquear Heidegger → Questione Thomas</p>
                <p>Para desbloquear Nietzsche → Confronte Reva</p>
            </div>
        </div>
    `;

    container.innerHTML = html;
}

function expandirFilosofo(key) {
    const filosofo = FILOSOFOS[key];
    const modal = document.createElement('div');
    modal.className = 'filosofo-modal';
    modal.innerHTML = `
        <div class="filosofo-expand">
            <button onclick="this.parentElement.parentElement.remove()" class="fechar-btn">×</button>

            <h2>${filosofo.nome} (${filosofo.anos})</h2>
            <p class="subtitulo">${filosofo.pais} • ${filosofo.corrente}</p>

            <div class="expandido-conteudo">
                <h3>Resumo</h3>
                <p>${filosofo.resumo}</p>

                <h3>Ideia Central</h3>
                <p><strong>${filosofo.ideiacentral}</strong></p>

                <h3>Conceito: ${filosofo.conceito}</h3>
                <p>${filosofo.concetoDefinicao}</p>

                <h3>Obra Principal</h3>
                <p><strong>"${filosofo.obraPrincipal}"</strong> (${filosofo.anoObra}, ${filosofo.paginas} páginas)</p>

                <h3>Frases-Chave</h3>
                <ul>
                    ${filosofo.frases.map(f => `<li>${f}</li>`).join('')}
                </ul>

                <h3>Relevância a NEXUS</h3>
                <p><em>"${filosofo.relevanciaaNexus}"</em></p>

                <h3>Leitura Recomendada</h3>
                <ul>
                    ${filosofo.leituraRecomendada.map(l => `<li>${l}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
}

function fecharFilosofia() {
    const modal = document.getElementById('filosofia-modal');
    if (modal) modal.remove();
}

// ============================================================================
// EVENTOS
// ============================================================================

function desbloquearFilosofo(chave, condicao) {
    if (DESBLOQUEIO[chave] && !DESBLOQUEIO[chave].desbloqueado) {
        if (DESBLOQUEIO[chave].condicao === condicao) {
            DESBLOQUEIO[chave].desbloqueado = true;
            console.log(`✅ DESBLOQUEADO: ${FILOSOFOS[chave]?.nome || chave}`);
        }
    }
}

// Exportar para usar globalmente
window.FILOSOFIA_DESVENDADA = {
    abrirFilosofiaDesvendada,
    desbloquearFilosofo,
    FILOSOFOS,
    MITOLOGIA,
    MUSICA,
    CORRENTES,
    DESBLOQUEIO
};
