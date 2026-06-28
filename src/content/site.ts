// ============================================================================
//  CONTEÚDO DO SITE — edite tudo por aqui.
//  Troque os textos entre aspas. Não precisa mexer no layout.
//  Itens entre [colchetes] ainda precisam ser confirmados/preenchidos.
// ============================================================================

export const site = {
  // ---- Identidade / SEO ----
  nome: "Instituto Comportar",
  subtitulo: "Psicologia e Análise do Comportamento",
  descricao:
    "Instituto Comportar — Gisele Duarte, psicóloga e neuropsicóloga. Avaliação neuropsicológica e psicoterapia comportamental para todas as idades, presencial ou online.",
  logo: "images/logo.png",

  // ---- Navegação (rótulos do menu) ----
  menu: {
    inicio: "Início",
    especialidades: "Especialidades",
    sobre: "Sobre",
    contato: "Contato",
  },

  // ---- Seção HERO (primeira dobra) ----
  hero: {
    saudacao: "Psicologia e Análise do Comportamento",
    titulo: "Cuidado psicológico com acolhimento e ciência",
    descricao:
      "Sou Gisele, psicóloga especialista em Análise do Comportamento e Neuropsicologia. Atuo com avaliações neuropsicológicas e psicoterapia comportamental para todas as idades, no presencial ou online.",
    cta: "Agendar consulta",
    ctaSecundario: "Ver especialidades",
    foto: "images/dra-retrato-1.jpg",
    fotoAlt: "Gisele Duarte — Instituto Comportar",
  },

  // ---- Seção ESPECIALIDADES ----
  //  icone: nome do ícone (acolhe, online, presencial, familia, cerebro,
  //         reabilitacao, supervisao, escola). Veja src/components/Icon.astro.
  //  resumo: texto curto que aparece no card.
  //  detalhe: texto completo que aparece ao clicar (pode ter vários parágrafos).
  especialidades: {
    titulo: "Especialidades",
    subtitulo:
      "Áreas de atuação pensadas para cada fase da vida. Toque em um card para saber mais.",
    itens: [
      {
        icone: "acolhe",
        titulo: "Psicoterapia ABA",
        resumo:
          "Análise do Comportamento Aplicada para o desenvolvimento cognitivo, comportamental e funcional.",
        detalhe: [
          "A psicoterapia ABA (Applied Behavior Analysis) vem sendo amplamente recomendada para o desenvolvimento cognitivo, comportamental e funcional de pacientes com diagnóstico de Transtorno do Espectro Autista (TEA), Transtorno de Déficit de Atenção e Hiperatividade (TDAH), entre outras condições.",
          "É uma abordagem reconhecida cientificamente, que tem como objetivo principal promover a qualidade de vida do paciente.",
        ],
      },
      {
        icone: "online",
        titulo: "Psicoterapia Online",
        resumo:
          "Atendimento virtual com a mesma qualidade e acolhimento do presencial.",
        detalhe: [
          "A psicoterapia virtual tem sido muito procurada pela praticidade no aproveitamento do tempo, pela flexibilidade de agenda e até mesmo pela distância.",
          "Nessa modalidade, o paciente continua contando com um ambiente seguro e acolhedor, pensado e planejado de maneira individualizada para a promoção do autoconhecimento e do autocuidado.",
        ],
      },
      {
        icone: "presencial",
        titulo: "Psicoterapia Presencial",
        resumo:
          "Um ambiente privativo e acolhedor, da recepção ao atendimento.",
        detalhe: [
          "Pensada em um ambiente mais privativo, com recepção e sala de espera, a psicoterapia presencial acolhe o paciente desde a sua chegada.",
          "O atendimento acontece em salas confortáveis e organizadas, com cada encontro planejado especialmente para receber você.",
        ],
      },
      {
        icone: "familia",
        titulo: "Orientação Parental e Familiar",
        resumo:
          "Apoio a famílias e responsáveis no cuidado de crianças e adolescentes.",
        detalhe: [
          "Ser responsável por crianças e adolescentes em processo de psicoterapia, com dificuldades escolares ou comportamentos desafiadores, exige conhecimentos que nem sempre são facilmente encontrados.",
          "Com a orientação parental, familiares e responsáveis são orientados quanto aos desafios e dificuldades que enfrentam. É um atendimento individualizado, pensado nas dúvidas que cada família tem sobre sua criança ou adolescente.",
        ],
      },
      {
        icone: "cerebro",
        titulo: "Avaliação Neuropsicológica",
        resumo:
          "Mapeamento cognitivo de atenção, memória, funções executivas e comportamento.",
        detalhe: [
          "A avaliação neuropsicológica é um mapeamento cognitivo que tem como objetivo analisar o funcionamento de habilidades como atenção, memória, inteligência, habilidades acadêmicas, funções executivas e comportamento.",
          "Com ela conseguimos detectar possíveis déficits e alterações nessas funções, a fim de nortear as melhores intervenções para cada paciente. A indicação é para todas as idades, a partir dos 2 anos até a pessoa idosa.",
        ],
      },
      {
        icone: "reabilitacao",
        titulo: "Reabilitação Cognitiva",
        resumo:
          "Estimulação e fortalecimento das funções cognitivas de forma personalizada.",
        detalhe: [
          "A reabilitação cognitiva trabalha o fortalecimento de funções como atenção, memória e raciocínio por meio de atividades estruturadas e individualizadas.",
          "O plano é construído a partir dos resultados da avaliação e das necessidades de cada paciente, com foco na autonomia e na qualidade de vida.",
        ],
      },
      {
        icone: "supervisao",
        titulo: "Supervisão de Casos",
        resumo:
          "Supervisão clínica para psicólogos e equipes em Análise do Comportamento.",
        detalhe: [
          "Espaço de supervisão para psicólogos e profissionais que desejam aprimorar a prática clínica com base na Análise do Comportamento.",
          "Como responsável técnica e supervisora do Instituto Comportar, ofereço discussão de casos, estudo e desenvolvimento profissional contínuo.",
        ],
      },
      {
        icone: "escola",
        titulo: "Consultoria Escolar",
        resumo:
          "Orientação a escolas para a inclusão e o desenvolvimento dos alunos.",
        detalhe: [
          "Consultoria a instituições de ensino e equipes pedagógicas para favorecer a inclusão, a adaptação e o desenvolvimento dos estudantes.",
          "Apoio na construção de estratégias que atendam às necessidades de cada aluno, com base na neuropsicologia e na análise do comportamento.",
        ],
      },
    ],
  },

  // ---- Seção SOBRE ----
  sobre: {
    titulo: "Sobre",
    nome: "Gisele Nunes Duarte",
    funcao: "Psicóloga e Neuropsicóloga — CRP [00/00000]",
    paragrafos: [
      "Sou Gisele, psicóloga especialista em Análise do Comportamento e Neuropsicologia. Atuo principalmente com avaliações neuropsicológicas e atendimentos em psicoterapia comportamental para todas as idades.",
      "Atendo diferentes idades e demandas e atuo como responsável técnica e supervisora no Instituto Comportar. Tenho experiência em Acompanhamento Terapêutico, com foco em Análise Aplicada do Comportamento, Modelo Denver e Neurodesenvolvimento Atípico, além de avaliações neuropsicológicas e reabilitação cognitiva.",
      "Você pode ser atendido nas modalidades presencial ou online — entre em contato para entendermos juntos qual é a mais indicada para você.",
    ],
    foto: "images/dra-retrato-2.jpg",
    fotoAlt: "Gisele Duarte no Instituto Comportar",
    // Lista curta de formações/títulos (opcional). Deixe [] para esconder.
    formacao: [
      "Especialização em Neuropsicologia e Reabilitação Cognitiva — HC-FMUSP (2023)",
      "Especialização em Intervenção ABA para Autismo e Deficiência Intelectual — CBI of Miami (2022)",
      "Graduação em Psicologia — Universidade São Judas Tadeu (2020)",
      "Aprimoramento em Psicoterapia Baseada em Evidências — InPBE (cursando)",
    ],
  },

  // ---- Seção CONTATO ----
  contato: {
    titulo: "Vamos conversar?",
    subtitulo:
      "Agende sua consulta ou tire suas dúvidas pelos canais abaixo.",
    // WhatsApp: só números, com código do país e DDD. Ex: 5511999999999
    whatsapp: "5511959669956",
    whatsappLabel: "(11) 95966-9956",
    mensagemWhatsapp:
      "Olá, Gisele! Gostaria de agendar uma consulta no Instituto Comportar.",
    telefone: "(11) 95966-9956",
    email: "gisele.nunes.duarte@gmail.com",
    // ATENÇÃO: confirme o endereço do CONSULTÓRIO (não o residencial) antes de publicar.
    endereco: "São Bernardo do Campo — SP",
    horario: "Segunda a sexta, das 9h às 18h",
    instagram: "@institutocomportar",
    instagramUrl: "https://instagram.com/institutocomportar",
    // Endereço usado no mapa. Deixe "" para esconder o mapa.
    mapaQuery: "",
  },

  rodape: {
    direitos: "Instituto Comportar. Todos os direitos reservados.",
  },
} as const;

export type Site = typeof site;
