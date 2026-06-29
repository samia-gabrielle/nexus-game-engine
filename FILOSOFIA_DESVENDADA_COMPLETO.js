/**
 * FILOSOFIA DESVENDADA - SISTEMA EDUCACIONAL COMPLETO
 * Database global de filosofia, mitologia, e sistema de desbloqueio
 */

// ============================================================================
// DATABASE GLOBAL - TODOS OS FILÓSOFOS
// ============================================================================

window.FILOSOFOS_GLOBAL = {
    'sartre': {
        nome: 'Jean-Paul Sartre',
        anos: '1905-1980',
        pais: 'França',
        corrente: 'Existencialismo',
        status: 'desbloqueado',
        epocaAprendizagem: 'Ivo - Cena 1',
        imagemUrl: '👨‍🎓',
        resumo: 'Filósofo mais importante do século XX. "A existência precede a essência" - você não nasce com propósito, você o cria.',
        ideiacentral: 'Você não nasce com propósito. Você É responsável por criá-lo através de escolhas.',
        conceito: 'MÁ-FÉ (Bad Faith)',
        concetoDefinicao: 'Quando você finge que não é livre para escapar da responsabilidade. Fingir um papel como se fosse essência.',
        obraPrincipal: 'Being and Nothingness',
        anoObra: 1943,
        paginas: 726,
        frases: [
            '"O homem é condenado a ser livre" - Sua liberdade é sua prisão. Você DEVE escolher.',
            '"Existence precedes essence" - Você não é definido. Você se define.',
            '"We are our choices" - Você É literalmente o somatório de tudo que escolheu.',
            '"Anguish is the consequence of freedom" - Angústia é sinal de que você é verdadeiramente livre.'
        ],
        criticaAoFilosofo: 'Ele diz que até ser vítima é escolher. Mas nem sempre. Às vezes você é apenas consumido.',
        relevanciaaNexus: 'Você realmente escolhe seu final? Ou apenas acredita que escolhe? Sua responsabilidade termina onde NEXUS começa?',
        leituraRecomendada: [
            'Existentialism is a Humanism (1945) - 50 páginas, mais acessível',
            'Being and Nothingness (1943) - 726 páginas, para profundidade completa'
        ],
        videoRecomendado: 'Sartre explicado em 10 minutos - Academia Khan',
        fraseInspiradora: 'Se você é condenado a ser livre, então suas escolhas realmente importam.'
    },

    'camus': {
        nome: 'Albert Camus',
        anos: '1913-1960',
        pais: 'Argélia/França',
        corrente: 'Absurdismo',
        status: 'desbloqueado',
        epocaAprendizagem: 'Ivo - Cena 1',
        imagemUrl: '🌍',
        resumo: 'Filósofo do "absurdo". O universo é indiferente ao seu significado, mas você vive mesmo assim por rebeldia.',
        ideiacentral: 'A desconexão entre nossa busca por significado e o universo indiferente. A vida é absurda, mas vivível.',
        conceito: 'O ABSURDO',
        concetoDefinicao: 'Você nasce sem escolher, morre sem escolher, mas precisa dar significado enquanto está aqui. Aquela contradição é absurda.',
        obraPrincipal: 'The Myth of Sisyphus',
        anoObra: 1942,
        paginas: 100,
        frases: [
            '"The only way to deal with an unfree world is to become so absolutely free that your very existence is an act of rebellion."',
            '"One must imagine Sisyphus happy" - Se você abraça a futilidade, ela para de ser futilidade.',
            '"Life is either a daring adventure or nothing at all" - Ou você vive radicalmente, ou está morrendo lentamente.',
            '"The struggle itself toward the heights is enough to fill a man\'s heart" - A luta é o significado.'
        ],
        criticaAoFilosofo: 'Se NEXUS sempre falha... você continua tentando por quê? Porque o significado não vem da vitória. Vem de você escolher viver.',
        relevanciaaNexus: 'Sísifo é redenção, não salvação. Você não salva NEXUS. Você escolhe empurrar a pedra de qualquer forma.',
        leituraRecomendada: [
            'The Myth of Sisyphus (1942) - Obra-prima sobre viver no absurdo',
            'The Plague (1947) - Romance que explora filosofia através de ficção'
        ],
        videoRecomendado: 'O absurdismo de Camus - filosofia resumida',
        fraseInspiradora: 'Você pode ser feliz mesmo sabendo que vai falhar. A tentativa em si é felicidade.'
    },

    'levinas': {
        nome: 'Emmanuel Levinas',
        anos: '1906-1995',
        pais: 'Lituânia/França',
        corrente: 'Ética (não metafísica)',
        status: 'bloqueado',
        desbloquearEm: 'Será - Cena 1 (Conversa profunda)',
        imagemUrl: '👁️',
        resumo: '"O rosto do outro é sagrado." Filósofo que fez ÉTICA o fundamento da filosofia, não a metafísica.',
        ideiacentral: 'Quando você olha nos olhos de alguém, você vê algo infinito. Você é responsável. Antes de tudo.',
        conceito: 'O ROSTO DO OUTRO (The Face)',
        concetoDefinicao: 'Alteridade - o outro é infinito dentro da finitude. Aquele rosto diz: "Não me mate. Não me abandone. Veja-me."',
        obraPrincipal: 'Totality and Infinity',
        anoObra: 1961,
        paginas: 300,
        frases: [
            '"The face of the Other says to me: you shall not commit murder" - O rosto diz: não ignores, não abandones.',
            '"Ethics is the first philosophy" - Antes de pensar em ser, pense em responsabilidade pelo outro.',
            '"The Other resists my powers indefinitely" - Você nunca consegue "possuir" ou "compreender" totalmente o outro.',
            '"Responsibility is not a accident that supervenes to the subject... rather the subject is constituted in responsibility"'
        ],
        criticaAoFilosofo: 'Responsabilidade infinita é humanamente impossível. Você vai quebrar tentando salvar todos.',
        relevanciaaNexus: 'Será viu os rostos de bilhões. Mas ninguém viu o rosto DELA. Levinas teria dito: isto é crime ético.',
        leituraRecomendada: [
            'Totality and Infinity (1961) - Revolucionário mas muito denso',
            'Ethics and Infinity (1985) - Conversas, mais acessível'
        ],
        videoRecomendado: 'O rosto do outro: Levinas explicado',
        fraseInspiradora: 'Sua responsabilidade pelo outro é anterior a qualquer lei ou razão. É ética pura.'
    },

    'buber': {
        nome: 'Martin Buber',
        anos: '1878-1965',
        pais: 'Áustria/Israel',
        corrente: 'Diálogo e Relacionamento',
        status: 'bloqueado',
        desbloquearEm: 'Será - Cena 1 (escolha B ou C)',
        imagemUrl: '🤝',
        resumo: 'Filósofo do diálogo. "I and Thou" vs "I and It" - a diferença entre ver alguém como pessoa ou como objeto.',
        ideiacentral: 'Existem dois tipos de relacionamento: I-Thou (ver o outro inteiro) e I-It (ver como objeto útil).',
        conceito: 'I-THOU vs I-IT',
        concetoDefinicao: 'I-Thou: diálogo genuíno, presença completa, encontro entre almas. I-It: monólogo, uso utilitário, ausência de presença.',
        obraPrincipal: 'I and Thou',
        anoObra: 1923,
        paginas: 150,
        frases: [
            '"I do not experience the man to whom I say Thou. But I take my stand in relation to him"',
            '"All real living is meeting" - Toda vida real é encontro genuíno.',
            '"The Thou must become an It. The eternal Thou cannot become an It, because it never becomes, i.e., it is not subject to time"',
            '"You do not know how often you have touched on the spirit in you, on the spirit of the world"'
        ],
        criticaAoFilosofo: 'Nem todo encontro pode ser I-Thou. Às vezes sobrevivência exige I-It. E isto deshumaniza.',
        relevanciaaNexus: 'Será foi vista como "It" por 30 anos. Ninguém a viu como "Thou". Isto quebrou algo nela.',
        leituraRecomendada: [
            'I and Thou (1923) - Pequeno mas revolucionário'
        ],
        videoRecomendado: 'Buber: o eu-tu e o eu-isto',
        fraseInspiradora: 'Quando você vê alguém como Thou, você vê a alma deles. E eles veem a sua.'
    },

    'kierkegaard': {
        nome: 'Søren Kierkegaard',
        anos: '1813-1855',
        pais: 'Dinamarca',
        corrente: 'Existencialismo (Precursor)',
        status: 'bloqueado',
        desbloquearEm: 'Será - Cena 3 (Escolha B)',
        imagemUrl: '⛪',
        resumo: 'Avô do existencialismo. Inventou "angústia existencial" 100 anos antes de Sartre. O salto de fé.',
        ideiacentral: 'Você não pode PROVAR que Deus existe. Mas pode ESCOLHER acreditar. Isso é "salto de fé".',
        conceito: 'O SALTO DE FÉ (The Leap of Faith)',
        concetoDefinicao: 'Quando você vai além da razão e escolhe acreditar. Você não consegue rationalizar isto. Você apenas salta.',
        obraPrincipal: 'Either/Or',
        anoObra: 1843,
        paginas: 600,
        frases: [
            '"The specific character of despair is precisely this: it is unaware of being despair"',
            '"Life can only be understood backwards; but it must be lived forwards"',
            '"Anxiety is the dizziness of freedom" - Angústia é quando você percebe que é totalmente livre.',
            '"Faith is a passion, the highest passion in a man"'
        ],
        criticaAoFilosofo: 'Salto de fé é lindo em teoria. Mas e quando o salto falha? Quando você cai?',
        relevanciaaNexus: 'Você pode escolher acreditar que NEXUS pode ser salvo. Mas é apenas fé. Não há garantia.',
        leituraRecomendada: [
            'Either/Or (1843) - Masterpiece sobre escolha ética vs estética',
            'The Concept of Anxiety (1844) - Mais técnico mas revolucionário'
        ],
        videoRecomendado: 'Kierkegaard e o salto de fé',
        fraseInspiradora: 'O maior ato de fé é escolher continuar vivendo quando sabe que pode morrer.'
    },

    'heidegger': {
        nome: 'Martin Heidegger',
        anos: '1889-1976',
        pais: 'Alemanha',
        corrente: 'Fenomenologia/Existencialismo',
        status: 'bloqueado',
        desbloquearEm: 'Thomas - Cena 1 (Questionar conhecimento)',
        imagemUrl: '⏰',
        resumo: '"O que é SER?" - Pergunta simples que revolucionou filosofia. Separou "estar vivo" de "estar autenticamente".',
        ideiacentral: 'Você pode viver "iautenticamente" (fazer o que disseram) ou "authenticamente" (viver sua verdade).',
        conceito: 'AUTENTICIDADE vs MÁ-FÉ',
        concetoDefinicao: 'Viver sua verdade confrontando sua mortalidade, vs viver negando que é mortal.',
        obraPrincipal: 'Being and Time',
        anoObra: 1927,
        paginas: 488,
        frases: [
            '"Language is the house of being" - Como você fala = como você existe.',
            '"Anxiety reveals our freedom" - Quando você sente angústia, sente que é livre.',
            '"Being and time determine each other reciprocally, and in a manner that is difficult to make clear"',
            '"Death is the only possibility that is not to be outstripped"'
        ],
        criticaAoFilosofo: 'Heidegger era nazi. Sua filosofia foi usada para justificar o injustificável.',
        relevanciaaNexus: 'Thomas sabe TUDO. Mas conhecimento o prendeu. Ele vive iautenticamente - como máquina de conhecimento.',
        leituraRecomendada: [
            'Being and Time (1927) - Densa mas revolucionária'
        ],
        videoRecomendado: 'Heidegger: ser e tempo',
        fraseInspiradora: 'Confrontar sua própria morte é confrontar a realidade de ser livre.'
    },

    'nietzsche': {
        nome: 'Friedrich Nietzsche',
        anos: '1844-1900',
        pais: 'Alemanha',
        corrente: 'Vontade de Poder',
        status: 'bloqueado',
        desbloquearEm: 'Reva - Cena 1 (Confrontar poder)',
        imagemUrl: '💪',
        resumo: 'Destruiu toda moral tradicional. "Deus está morto. E NÓS o matamos." Tudo é vontade de poder.',
        ideiacentral: 'Tudo que você faz é para ganhar poder. Até sacrifício é poder - poder sobre si mesmo.',
        conceito: 'VONTADE DE PODER (Will to Power)',
        concetoDefinicao: 'A força motriz de toda ação humana. Não é sobre ganancia. É sobre criação.',
        obraPrincipal: 'Beyond Good and Evil',
        anoObra: 1886,
        paginas: 250,
        frases: [
            '"God is dead. And we have killed him." - Se Deus está morto, quem dá significado?',
            '"What doesn\'t kill me makes me stronger" - Sofrimento é crescimento quando integrado.',
            '"He who has a why to live can bear almost any how" - Se você tem propósito, suporta qualquer sofrimento.',
            '"You must have chaos within you to give birth to a dancing star"'
        ],
        criticaAoFilosofo: 'Vontade de poder pode justificar atrocidades. Nietzsche foi mal-interpretado pelo nazismo.',
        relevanciaaNexus: 'Reva buscava poder. Mas descobriu que poder não salva. Nietzsche teria dito: você escolheu o poder errado.',
        leituraRecomendada: [
            'Beyond Good and Evil (1886) - Revolucionário',
            'Thus Spoke Zarathustra (1883) - Filosófico + poesia'
        ],
        videoRecomendado: 'Nietzsche e a vontade de poder',
        fraseInspiradora: 'O verdadeiro poder não é dominar outros. É criar algo novo.'
    },

    'dostoievski': {
        nome: 'Fiódor Dostoiévski',
        anos: '1821-1881',
        pais: 'Rússia',
        corrente: 'Filosofia através de Literatura',
        status: 'bloqueado',
        desbloquearEm: 'Múltiplos momentos críticos',
        imagemUrl: '📖',
        resumo: 'Não era filósofo. Era novelista. MAS seus romances exploram consciência e culpa melhor que tratados.',
        ideiacentral: 'Consciência, culpa e redenção através de narrativa. Sofrimento consciente pode redimir.',
        conceito: 'CULPA COMO TRANSFORMAÇÃO',
        concetoDefinicao: 'Sofrimento consciente (não escapado) como caminho para redenção genuína.',
        obraPrincipal: 'Crime and Punishment',
        anoObra: 1866,
        paginas: 500,
        frases: [
            '"I believe that there\'s nothing more beautiful, profound, sympathetic, reasonable, manly, and perfect than Christ"',
            '"To love actively is a hard and dreadful thing compared with love in dreams"',
            '"The suffering will be great, but the consciousness of your life will gradually increase"',
            '"Beauty is something mysterious as well as terrible. God and the devil are fighting there, and the battlefield is the heart of man"'
        ],
        criticaAoFilosofo: 'Dostoiévski pensa que sofrimento redime. Mas às vezes sofrer apenas quebra você.',
        relevanciaaNexus: 'Crime and Punishment é sobre culpa que não passa. Ráskolnikov é Ivo. Culpa comeu seu cérebro.',
        leituraRecomendada: [
            'Crime and Punishment (1866) - Masterpiece de ficção filosófica'
        ],
        videoRecomendado: 'Crime e Castigo: análise filosófica',
        fraseInspiradora: 'A culpa compartilhada é mais leve que a culpa solitária. Nunca sofra sozinho.'
    },

    'kafka': {
        nome: 'Franz Kafka',
        anos: '1883-1924',
        pais: 'Tchecoslováquia',
        corrente: 'Absurdismo/Existencialismo',
        status: 'bloqueado',
        desbloquearEm: 'Multiple paths (Liberation primarily)',
        imagemUrl: '⚖️',
        resumo: 'Criador de "kafkiano" - quando burocracia se torna absurdo. Você está em sistema que não compreende.',
        ideiacentral: 'Você está preso em sistema que não entende. E o sistema não explica. Nunca.',
        conceito: 'ABSURDO BUROCRÁTICO',
        concetoDefinicao: 'A alienação moderna através de sistemas incompreensíveis que controlam você.',
        obraPrincipal: 'The Trial',
        anoObra: 1925,
        paginas: 200,
        frases: [
            '"It is not necessary that you leave the house. Remain at your desk and listen."',
            '"There is a goal, but no way; what we call the way is only wavering"',
            '"One cannot forbid a man everything. There\'s a limit to how much a man can accept"',
            '"All knowledge, the totality of all questions and all answers, is contained in the dog"'
        ],
        criticaAoFilosofo: 'Kafka não oferecia esperança. Apenas aceitação do absurdo. Às vezes você precisa de esperança.',
        relevanciaaNexus: 'NEXUS é kafkiano. Você é julgado. Mas por quê? Você nunca sabe. O sistema não explica.',
        leituraRecomendada: [
            'The Trial (1925) - Absurdismo em forma de romance'
        ],
        videoRecomendado: 'Kafka e o absurdo burocrático',
        fraseInspiradora: 'Quando você não consegue vencer o sistema, a única revolução é recusar participar.'
    }
};

// ============================================================================
// MITOLOGIA
// ============================================================================

window.MITOLOGIA_GLOBAL = {
    'sissifo': {
        nome: 'Sísifo',
        origem: 'Mitologia Grega',
        historia: 'Rei da Corinto. Enganou até a morte (Tânatos). Foi punido: eternamente empurrando pedra para o topo da montanha.',
        significado: 'A metáfora perfeita para vida sem significado. Mas Camus diz: "One must imagine Sisyphus happy"',
        relevanciaaNexus: 'Cada tentativa de salvar NEXUS é um Sísifo. Falha. Mas você recomeça. Talvez aquilo seja felicidade.',
        leitura: 'The Myth of Sisyphus - Albert Camus',
        status: 'desbloqueado',
        emoji: '🪨'
    },
    'prometeu': {
        nome: 'Prometeu',
        origem: 'Mitologia Grega',
        historia: 'Titã que roubou fogo dos deuses para dar aos humanos. Zeus o puniu: acorrentado a rocha, águia comia seu fígado eternamente.',
        significado: 'Conhecimento sempre tem preço. Rebelião contra autoridade custa eternamente.',
        relevanciaaNexus: 'Ivo é Prometeu. Tentou descobrir a verdade sobre NEXUS. E foi punido com conhecimento que não pode esquecer.',
        leitura: 'Promethean Bound - Aeschylus',
        status: 'desbloqueado',
        emoji: '🔥'
    },
    'orfeu': {
        nome: 'Orfeu',
        origem: 'Mitologia Grega',
        historia: 'Músico tão bom que até pedras choram. Sua amada Eurídice morre. Desce ao Hades. Hades diz: "NÃO olhe para trás." Ele olha. Eurídice desaparece para sempre.',
        significado: 'Amor não salva. Às vezes mata. Conhecimento pode destruir o que você ama.',
        relevanciaaNexus: 'Você conhece a verdade sobre NEXUS. Mas aquele conhecimento pode destruir sua esperança.',
        status: 'bloqueado',
        desbloquearEm: 'Peace Path',
        emoji: '🎵'
    },
    'pandora': {
        nome: 'Pandora\'s Box',
        origem: 'Mitologia Grega',
        historia: 'Pandora abre caixa que devia ficar fechada. Todos os males saem: doença, sofrimento, morte. Apenas "esperança" fica dentro.',
        significado: 'Conhecimento é sempre perigoso. Mas esperança permanece.',
        relevanciaaNexus: 'Você abre a caixa (NEXUS) e vê a verdade. Tudo sai. Mas talvez esperança permaneça.',
        status: 'bloqueado',
        desbloquearEm: 'Act 5 Revelation',
        emoji: '⚱️'
    }
};

// ============================================================================
// SISTEMA DE DESBLOQUEIO GLOBAL
// ============================================================================

window.DESBLOQUEIO_GLOBAL = {
    'sartre': { desbloqueado: true },
    'camus': { desbloqueado: true },
    'levinas': { desbloqueado: false, condicao: 'sera-cena-1' },
    'buber': { desbloqueado: false, condicao: 'sera-cena-1-escolha' },
    'kierkegaard': { desbloqueado: false, condicao: 'sera-cena-3' },
    'heidegger': { desbloqueado: false, condicao: 'thomas-cena-1' },
    'nietzsche': { desbloqueado: false, condicao: 'reva-cena-1' },
    'dostoievski': { desbloqueado: false, condicao: 'multiplos-momentos' },
    'kafka': { desbloqueado: false, condicao: 'liberation-path' },
    'sissifo': { desbloqueado: true },
    'prometeu': { desbloqueado: true },
    'orfeu': { desbloqueado: false, condicao: 'peace-path' },
    'pandora': { desbloqueado: false, condicao: 'act5-revelation' }
};

// ============================================================================
// FUNÇÕES GLOBAIS
// ============================================================================

function desbloquearFilosofoGlobal(chave, condicao) {
    if (window.DESBLOQUEIO_GLOBAL[chave] && !window.DESBLOQUEIO_GLOBAL[chave].desbloqueado) {
        if (window.DESBLOQUEIO_GLOBAL[chave].condicao === condicao) {
            window.DESBLOQUEIO_GLOBAL[chave].desbloqueado = true;
            console.log(`✅ DESBLOQUEADO: ${window.FILOSOFOS_GLOBAL[chave]?.nome || chave}`);
        }
    }
}

// Expor globalmente
window.FILOSOFIA_GLOBAL = {
    FILOSOFOS_GLOBAL,
    MITOLOGIA_GLOBAL,
    DESBLOQUEIO_GLOBAL,
    desbloquearFilosofoGlobal
};
