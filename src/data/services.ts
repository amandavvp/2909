import { ServiceCategory, FAQ, News } from "@/types";

export const serviceCategories: ServiceCategory[] = [
  {
    id: "animais",
    name: "Animais",
    icon: "PawPrint",
    slug: "animais",
    description: "Serviços relacionados a animais e fauna",
    services: [
      {
        id: "animais-silvestres",
        name: "Resgate de Animais Silvestres",
        slug: "animais-silvestres",
        categoryId: "animais",
        description: "Solicitação de resgate de animais silvestres",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "O serviço de Resgate de Animais Silvestres é realizado pela patrulha ambiental. Ele atua no resgate de animais que pertencem à fauna brasileira e que vivem em seus habitats naturais, como florestas, mangues e restingas.",
          paraQueServe: "Este serviço serve para resgatar animais silvestres da fauna brasileira que estejam em situação de risco ou fora de seu habitat natural, garantindo sua segurança e bem-estar.",
          quemPodeSolicitar: "Qualquer cidadão pode solicitar o resgate de animais silvestres.",
          informacoesComplementares: "Nos casos de ferimento causado pelo animal, procure uma das Unidades de Saúde ou o Polo de Atendimento Antirrábico.",
          informacoesNecessarias: [
            "Nome completo",
            "Telefone",
            "Endereço completo da ocorrência com ponto de referência",
            "Descrever o tipo de animal silvestre e informar se ele está agitado, machucado ou doente"
          ],
          tempoAtendimento: "Até 24 horas",
          legislacao: [
            "Lei nº 9.605/1998",
            "Decreto nº 6.514/2008",
            "Lei Estadual nº 3900/2002"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true, placeholder: "Descreva o tipo de animal e a situação" },
          { id: "address", name: "address", label: "Endereço", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos ou vídeos", type: "file", required: false }
        ]
      },
      {
        id: "maus-tratos",
        name: "Maus Tratos a Animais",
        slug: "maus-tratos",
        categoryId: "animais",
        description: "Denúncias de maus tratos a animais",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço para denunciar casos de maus tratos, abandono, crueldade ou qualquer forma de violência contra animais domésticos ou silvestres no município de Belford Roxo.",
          paraQueServe: "Este serviço serve para proteger os animais de situações de maus tratos, abandono e crueldade, garantindo que os responsáveis sejam identificados e punidos conforme a lei.",
          quemPodeSolicitar: "Qualquer cidadão pode fazer uma denúncia de maus tratos a animais.",
          informacoesComplementares: "As denúncias podem ser feitas de forma anônima. A Guarda Municipal e órgãos de fiscalização serão acionados para verificar a situação.",
          informacoesNecessarias: [
            "Endereço completo da ocorrência com ponto de referência",
            "Descrição detalhada da situação de maus tratos",
            "Tipo de animal (cão, gato, etc.)",
            "Fotos ou vídeos como evidência (se possível)"
          ],
          tempoAtendimento: "Até 48 horas",
          legislacao: [
            "Lei Federal nº 9.605/1998 (Lei de Crimes Ambientais)",
            "Lei Federal nº 14.064/2020 (Lei Sansão)",
            "Decreto nº 24.645/1934"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição da situação", type: "textarea", required: true, placeholder: "Descreva detalhadamente os maus tratos observados" },
          { id: "address", name: "address", label: "Endereço da ocorrência", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Evidências (fotos/vídeos)", type: "file", required: false }
        ]
      },
      {
        id: "vacinacao-animais",
        name: "Vacinação de Animais",
        slug: "vacinacao-animais",
        categoryId: "animais",
        description: "Informações e agendamento de vacinação antirrábica",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de vacinação antirrábica gratuita para cães e gatos, realizado pela Secretaria Municipal de Saúde de Belford Roxo nos postos de vacinação e em campanhas itinerantes.",
          paraQueServe: "A vacinação antirrábica protege seu animal de estimação contra a raiva, doença fatal que pode ser transmitida aos seres humanos.",
          quemPodeSolicitar: "Qualquer cidadão residente em Belford Roxo que possua cães ou gatos.",
          informacoesComplementares: "A vacinação é gratuita e obrigatória por lei. O animal deve ter mais de 3 meses de idade e estar saudável no momento da vacinação.",
          informacoesNecessarias: [
            "Nome do tutor",
            "Endereço completo",
            "Tipo de animal (cão ou gato)",
            "Quantidade de animais"
          ],
          tempoAtendimento: "Conforme calendário de vacinação",
          legislacao: [
            "Lei Municipal de Controle de Zoonoses",
            "Lei Federal nº 6.259/1975"
          ]
        },
        fields: [
          { id: "animal_type", name: "animal_type", label: "Tipo de animal", type: "select", required: true, options: [{ value: "cachorro", label: "Cachorro" }, { value: "gato", label: "Gato" }] },
          { id: "address", name: "address", label: "Endereço", type: "address", required: true }
        ]
      }
    ]
  },
  {
    id: "acessibilidade",
    name: "Acessibilidade",
    icon: "Accessibility",
    slug: "acessibilidade",
    description: "Serviços relacionados à acessibilidade urbana",
    services: [
      {
        id: "rampa-acesso",
        name: "Rampa de Acesso",
        slug: "rampa-acesso",
        categoryId: "acessibilidade",
        description: "Solicitação de rampa de acesso em calçadas",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de construção ou adequação de rampas de acesso em calçadas e vias públicas para garantir a mobilidade de pessoas com deficiência ou mobilidade reduzida.",
          paraQueServe: "Este serviço serve para garantir a acessibilidade urbana, permitindo que pessoas com deficiência física, cadeirantes, idosos e pessoas com mobilidade reduzida possam circular pelas calçadas com segurança.",
          quemPodeSolicitar: "Qualquer cidadão pode solicitar a construção de rampa de acesso em via pública.",
          informacoesComplementares: "A solicitação será avaliada pela equipe técnica da Secretaria de Obras. O local deve atender aos critérios técnicos de viabilidade.",
          informacoesNecessarias: [
            "Nome completo do solicitante",
            "Endereço completo do local solicitado",
            "Justificativa da necessidade",
            "Fotos do local (opcional)"
          ],
          tempoAtendimento: "Até 30 dias para avaliação técnica",
          legislacao: [
            "Lei Federal nº 13.146/2015 (Estatuto da Pessoa com Deficiência)",
            "NBR 9050 - Acessibilidade"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local da solicitação", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos do local", type: "file", required: false }
        ]
      },
      {
        id: "vaga-deficiente",
        name: "Vaga para Pessoa com Deficiência",
        slug: "vaga-deficiente",
        categoryId: "acessibilidade",
        description: "Solicitação de vaga exclusiva para pessoa com deficiência",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de demarcação de vaga exclusiva para estacionamento de veículos que transportam pessoas com deficiência ou mobilidade reduzida.",
          paraQueServe: "Garantir que pessoas com deficiência tenham acesso facilitado a estabelecimentos e locais públicos através de vagas de estacionamento próximas e adequadas.",
          quemPodeSolicitar: "Pessoas com deficiência física ou mobilidade reduzida, ou seus representantes legais.",
          informacoesComplementares: "É necessário apresentar laudo médico comprovando a deficiência. A vaga será avaliada conforme disponibilidade e critérios técnicos.",
          informacoesNecessarias: [
            "Nome completo",
            "CPF",
            "Endereço residencial",
            "Local solicitado para a vaga",
            "Laudo médico"
          ],
          tempoAtendimento: "Até 45 dias",
          legislacao: [
            "Lei Federal nº 13.146/2015",
            "Resolução CONTRAN nº 304/2008"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Justificativa", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local solicitado", type: "address", required: true }
        ]
      }
    ]
  },
  {
    id: "assistencia-social",
    name: "Assistência Social",
    icon: "Heart",
    slug: "assistencia-social",
    description: "Serviços de assistência social à população",
    services: [
      {
        id: "cadastro-unico",
        name: "Cadastro Único",
        slug: "cadastro-unico",
        categoryId: "assistencia-social",
        description: "Informações sobre o Cadastro Único para Programas Sociais",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "O Cadastro Único (CadÚnico) é um registro que permite ao governo identificar todas as famílias de baixa renda do Brasil. É a porta de entrada para diversos programas sociais.",
          paraQueServe: "O CadÚnico serve para que as famílias de baixa renda possam ter acesso a programas sociais como Bolsa Família, Tarifa Social de Energia Elétrica, BPC, entre outros.",
          quemPodeSolicitar: "Famílias com renda mensal de até meio salário mínimo por pessoa ou renda familiar total de até três salários mínimos.",
          informacoesComplementares: "O cadastramento deve ser feito presencialmente no CRAS mais próximo. Leve os documentos de todos os membros da família.",
          informacoesNecessarias: [
            "CPF ou Título de Eleitor do responsável familiar",
            "Documentos de identificação de todos os membros da família",
            "Comprovante de residência",
            "Comprovante de renda (se houver)"
          ],
          tempoAtendimento: "Atendimento imediato no CRAS",
          legislacao: [
            "Decreto nº 6.135/2007",
            "Lei nº 14.601/2023"
          ]
        },
        fields: []
      },
      {
        id: "cras-atendimento",
        name: "Atendimento no CRAS",
        slug: "cras-atendimento",
        categoryId: "assistencia-social",
        description: "Informações sobre atendimento no CRAS",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "O Centro de Referência de Assistência Social (CRAS) é a porta de entrada da assistência social, oferecendo serviços e programas de proteção social básica às famílias.",
          paraQueServe: "O CRAS oferece orientação, encaminhamento para serviços sociais, acompanhamento familiar, atividades socioeducativas e acesso a programas de transferência de renda.",
          quemPodeSolicitar: "Qualquer cidadão em situação de vulnerabilidade social ou que necessite de orientação sobre programas sociais.",
          informacoesComplementares: "O atendimento é gratuito e sigiloso. Procure o CRAS mais próximo de sua residência.",
          informacoesNecessarias: [
            "Documento de identificação",
            "Comprovante de residência"
          ],
          tempoAtendimento: "Atendimento por ordem de chegada ou agendamento",
          legislacao: [
            "Lei nº 8.742/1993 (LOAS)",
            "Política Nacional de Assistência Social"
          ]
        },
        fields: [
          { id: "motivo", name: "motivo", label: "Motivo do atendimento", type: "textarea", required: true }
        ]
      }
    ]
  },
  {
    id: "conservacao",
    name: "Conservação",
    icon: "Wrench",
    slug: "conservacao",
    description: "Serviços de conservação urbana",
    services: [
      {
        id: "buraco-rua",
        name: "Buraco na Rua",
        slug: "buraco-rua",
        categoryId: "conservacao",
        description: "Solicitação de reparo de buraco em vias públicas",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de tapa-buraco para reparar buracos, depressões e irregularidades no asfalto das vias públicas do município de Belford Roxo.",
          paraQueServe: "Este serviço serve para manter as vias públicas em boas condições de trafegabilidade, garantindo a segurança dos motoristas, motociclistas, ciclistas e pedestres.",
          quemPodeSolicitar: "Qualquer cidadão pode solicitar o reparo de buracos em vias públicas.",
          informacoesComplementares: "O serviço é realizado pela Secretaria de Conservação. A prioridade de atendimento considera o risco à segurança e o volume de tráfego no local.",
          informacoesNecessarias: [
            "Endereço completo da via (nome da rua e número próximo)",
            "Ponto de referência",
            "Descrição do tamanho aproximado do buraco",
            "Foto do local (opcional, mas ajuda na identificação)"
          ],
          tempoAtendimento: "Até 15 dias úteis",
          legislacao: [
            "Código de Trânsito Brasileiro",
            "Lei Municipal de Conservação de Vias"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição do problema", type: "textarea", required: true, placeholder: "Descreva o tamanho e localização exata do buraco" },
          { id: "address", name: "address", label: "Endereço", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Foto do buraco", type: "file", required: false }
        ]
      },
      {
        id: "calcada-danificada",
        name: "Calçada Danificada",
        slug: "calcada-danificada",
        categoryId: "conservacao",
        description: "Reparo de calçadas danificadas em vias públicas",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de reparo e manutenção de calçadas públicas que estejam danificadas, quebradas ou oferecendo risco aos pedestres.",
          paraQueServe: "Garantir a segurança e acessibilidade dos pedestres, especialmente idosos, pessoas com deficiência e crianças.",
          quemPodeSolicitar: "Qualquer cidadão pode solicitar o reparo de calçadas em vias públicas.",
          informacoesComplementares: "O serviço contempla apenas calçadas públicas. Calçadas em frente a imóveis particulares são de responsabilidade do proprietário.",
          informacoesNecessarias: [
            "Endereço completo",
            "Descrição do dano",
            "Fotos do local"
          ],
          tempoAtendimento: "Até 30 dias úteis",
          legislacao: [
            "Código de Obras Municipal",
            "Lei de Acessibilidade nº 13.146/2015"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true },
          { id: "address", name: "address", label: "Endereço", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      },
      {
        id: "poda-arvore",
        name: "Poda de Árvore",
        slug: "poda-arvore",
        categoryId: "conservacao",
        description: "Solicitação de poda de árvores em via pública",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de poda de árvores localizadas em vias públicas, praças e áreas verdes do município. A poda é realizada por equipe especializada da Secretaria de Meio Ambiente.",
          paraQueServe: "Manter a arborização urbana saudável, prevenir acidentes causados por galhos que possam cair, e garantir que as árvores não interfiram na iluminação pública ou na fiação elétrica.",
          quemPodeSolicitar: "Qualquer cidadão pode solicitar a poda de árvores em áreas públicas.",
          informacoesComplementares: "Não é permitida a poda ou corte de árvores pelo cidadão sem autorização. Árvores em terrenos particulares requerem autorização específica.",
          informacoesNecessarias: [
            "Endereço completo",
            "Descrição da árvore (tipo, tamanho aproximado)",
            "Motivo da solicitação (galhos sobre fiação, obstruindo via, etc.)",
            "Fotos da árvore"
          ],
          tempoAtendimento: "Até 20 dias úteis",
          legislacao: [
            "Lei Federal nº 12.651/2012 (Código Florestal)",
            "Código Municipal de Meio Ambiente"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true, placeholder: "Descreva a necessidade da poda" },
          { id: "address", name: "address", label: "Endereço da árvore", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      }
    ]
  },
  {
    id: "defesa-civil",
    name: "Defesa Civil",
    icon: "ShieldAlert",
    slug: "defesa-civil",
    description: "Serviços de emergência e defesa civil",
    services: [
      {
        id: "risco-deslizamento",
        name: "Risco de Deslizamento",
        slug: "risco-deslizamento",
        categoryId: "defesa-civil",
        description: "Denúncia de área com risco de deslizamento",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de vistoria e avaliação de áreas com risco de deslizamento de terra, desabamento ou erosão, realizado pela Defesa Civil de Belford Roxo.",
          paraQueServe: "Identificar e avaliar áreas de risco para prevenir acidentes e proteger a vida dos moradores. A equipe técnica faz a vistoria e orienta sobre medidas de segurança.",
          quemPodeSolicitar: "Qualquer cidadão pode denunciar uma área com risco de deslizamento.",
          informacoesComplementares: "Em caso de emergência com risco iminente, ligue imediatamente para a Defesa Civil. Se houver chuva forte, evite permanecer no local de risco.",
          informacoesNecessarias: [
            "Endereço completo da área de risco",
            "Descrição da situação observada",
            "Há moradores no local?",
            "Fotos da área"
          ],
          tempoAtendimento: "Até 24 horas para vistoria (casos urgentes: imediato)",
          legislacao: [
            "Lei Federal nº 12.608/2012 (Política Nacional de Proteção e Defesa Civil)",
            "Lei Municipal de Defesa Civil"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição da situação de risco", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      },
      {
        id: "alagamento",
        name: "Alagamento",
        slug: "alagamento",
        categoryId: "defesa-civil",
        description: "Relato de área alagada ou com risco de alagamento",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço para relatar áreas alagadas ou pontos de alagamento recorrente no município, permitindo a atuação da Defesa Civil e das equipes de drenagem.",
          paraQueServe: "Identificar pontos críticos de alagamento para que sejam tomadas medidas preventivas e corretivas, como limpeza de bueiros e obras de drenagem.",
          quemPodeSolicitar: "Qualquer cidadão pode relatar um alagamento ou área de risco.",
          informacoesComplementares: "Em caso de alagamento durante chuvas fortes, não tente atravessar áreas alagadas. Procure abrigo em local seguro e aguarde o nível da água baixar.",
          informacoesNecessarias: [
            "Endereço exato do alagamento",
            "Nível aproximado da água",
            "Se há pessoas ou veículos em risco",
            "Fotos ou vídeos (se for seguro registrar)"
          ],
          tempoAtendimento: "Atendimento imediato em emergências",
          legislacao: [
            "Lei Federal nº 12.608/2012",
            "Plano Municipal de Contingência"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      }
    ]
  },
  {
    id: "educacao",
    name: "Educação",
    icon: "GraduationCap",
    slug: "educacao",
    description: "Serviços relacionados à educação municipal",
    services: [
      {
        id: "matricula-escolar",
        name: "Matrícula Escolar",
        slug: "matricula-escolar",
        categoryId: "educacao",
        description: "Informações sobre matrícula na rede municipal de ensino",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de matrícula de alunos na rede municipal de ensino de Belford Roxo, que inclui Educação Infantil (creche e pré-escola) e Ensino Fundamental.",
          paraQueServe: "Garantir o acesso à educação pública gratuita para todas as crianças e jovens residentes no município.",
          quemPodeSolicitar: "Pais ou responsáveis legais de crianças e jovens em idade escolar.",
          informacoesComplementares: "O período de matrícula é divulgado anualmente pela Secretaria de Educação. Consulte a escola mais próxima de sua residência.",
          informacoesNecessarias: [
            "Certidão de nascimento do aluno",
            "CPF do aluno e do responsável",
            "Comprovante de residência",
            "Histórico escolar (para transferências)",
            "Carteira de vacinação (Educação Infantil)"
          ],
          tempoAtendimento: "Conforme período de matrícula estabelecido pela Secretaria de Educação",
          legislacao: [
            "Lei de Diretrizes e Bases da Educação (LDB nº 9.394/1996)",
            "Constituição Federal - Art. 205 a 214"
          ]
        },
        fields: []
      },
      {
        id: "transporte-escolar",
        name: "Transporte Escolar",
        slug: "transporte-escolar",
        categoryId: "educacao",
        description: "Solicitação de transporte escolar gratuito",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de transporte escolar gratuito para alunos da rede municipal que residem em áreas distantes das escolas ou que necessitam de transporte adaptado.",
          paraQueServe: "Garantir o acesso à escola para alunos que moram longe da unidade escolar ou que possuem necessidades especiais de locomoção.",
          quemPodeSolicitar: "Pais ou responsáveis de alunos matriculados na rede municipal de ensino.",
          informacoesComplementares: "O serviço está sujeito à disponibilidade de vagas e análise da distância entre a residência e a escola.",
          informacoesNecessarias: [
            "Nome completo do aluno",
            "Matrícula escolar",
            "Nome da escola",
            "Endereço de residência completo",
            "Comprovante de matrícula"
          ],
          tempoAtendimento: "Até 15 dias úteis para análise",
          legislacao: [
            "Lei nº 9.394/1996 (LDB)",
            "Programa Nacional de Transporte Escolar (PNATE)"
          ]
        },
        fields: [
          { id: "aluno_nome", name: "aluno_nome", label: "Nome do aluno", type: "text", required: true },
          { id: "escola", name: "escola", label: "Escola", type: "text", required: true },
          { id: "address", name: "address", label: "Endereço de residência", type: "address", required: true }
        ]
      }
    ]
  },
  {
    id: "iluminacao",
    name: "Iluminação Pública",
    icon: "Lightbulb",
    slug: "iluminacao-publica",
    description: "Serviços de iluminação pública",
    services: [
      {
        id: "iluminacao-publica",
        name: "Iluminação Pública",
        slug: "iluminacao-publica",
        categoryId: "iluminacao",
        description: "Solicitação de reparo ou manutenção da iluminação pública",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço de manutenção da iluminação pública municipal, incluindo troca de lâmpadas queimadas, reparo de postes danificados e instalação de novos pontos de luz.",
          paraQueServe: "Garantir a iluminação adequada das vias públicas, praças e logradouros, proporcionando segurança à população durante a noite.",
          quemPodeSolicitar: "Qualquer cidadão pode solicitar manutenção da iluminação pública.",
          informacoesComplementares: "Se possível, informe o número do poste (geralmente está na placa de identificação). A concessionária de energia será acionada quando necessário.",
          informacoesNecessarias: [
            "Endereço completo (rua e número próximo)",
            "Número do poste (se visível)",
            "Descrição do problema (lâmpada queimada, poste danificado, etc.)",
            "Ponto de referência"
          ],
          tempoAtendimento: "Até 7 dias úteis",
          legislacao: [
            "Resolução ANEEL nº 414/2010",
            "Lei Municipal de Iluminação Pública"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true, placeholder: "Informe o número do poste, se visível" },
          { id: "address", name: "address", label: "Endereço", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Foto do poste", type: "file", required: false }
        ]
      },
      {
        id: "nova-iluminacao",
        name: "Solicitação de Nova Iluminação",
        slug: "nova-iluminacao",
        categoryId: "iluminacao",
        description: "Solicitação de instalação de novo ponto de iluminação",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço para solicitar a instalação de novos pontos de iluminação pública em áreas que não possuem iluminação adequada.",
          paraQueServe: "Ampliar a rede de iluminação pública para melhorar a segurança e qualidade de vida em áreas com pouca ou nenhuma iluminação.",
          quemPodeSolicitar: "Qualquer cidadão pode solicitar a instalação de nova iluminação pública.",
          informacoesComplementares: "A solicitação será avaliada pela equipe técnica, que verificará a viabilidade e necessidade da instalação.",
          informacoesNecessarias: [
            "Endereço completo",
            "Justificativa da necessidade",
            "Fotos do local mostrando a falta de iluminação"
          ],
          tempoAtendimento: "Até 60 dias para avaliação e instalação",
          legislacao: [
            "Resolução ANEEL nº 414/2010",
            "Lei Municipal de Iluminação Pública"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Justificativa", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos do local", type: "file", required: false }
        ]
      }
    ]
  },
  {
    id: "limpeza-urbana",
    name: "Limpeza Urbana",
    icon: "Trash2",
    slug: "limpeza-urbana",
    description: "Serviços de limpeza urbana e coleta de lixo",
    services: [
      {
        id: "coleta-lixo",
        name: "Coleta de Lixo",
        slug: "coleta-lixo",
        categoryId: "limpeza-urbana",
        description: "Problemas com coleta de lixo domiciliar",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço para relatar problemas com a coleta de lixo domiciliar, como atraso na coleta, lixo não recolhido ou irregularidades no serviço.",
          paraQueServe: "Garantir que a coleta de lixo seja realizada de forma regular e eficiente em todo o município.",
          quemPodeSolicitar: "Qualquer cidadão que tenha problemas com a coleta de lixo em sua rua.",
          informacoesComplementares: "A coleta de lixo domiciliar ocorre em dias específicos para cada bairro. Consulte o calendário de coleta no site da prefeitura.",
          informacoesNecessarias: [
            "Endereço completo",
            "Há quantos dias o lixo não é coletado",
            "Descrição do problema"
          ],
          tempoAtendimento: "Até 48 horas",
          legislacao: [
            "Lei Federal nº 12.305/2010 (Política Nacional de Resíduos Sólidos)",
            "Lei Municipal de Limpeza Urbana"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição do problema", type: "textarea", required: true },
          { id: "address", name: "address", label: "Endereço", type: "address", required: true }
        ]
      },
      {
        id: "descarte-irregular",
        name: "Descarte Irregular de Lixo",
        slug: "descarte-irregular",
        categoryId: "limpeza-urbana",
        description: "Denúncia de descarte irregular de lixo",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço para denunciar locais onde há descarte irregular de lixo, entulho ou resíduos em terrenos baldios, calçadas ou vias públicas.",
          paraQueServe: "Combater o descarte irregular de lixo que causa problemas ambientais, de saúde pública e estéticos para a cidade.",
          quemPodeSolicitar: "Qualquer cidadão pode denunciar descarte irregular de lixo.",
          informacoesComplementares: "O descarte irregular de lixo é passível de multa. A denúncia pode ser feita de forma anônima.",
          informacoesNecessarias: [
            "Endereço ou localização do descarte irregular",
            "Tipo de material descartado",
            "Fotos do local (se possível)"
          ],
          tempoAtendimento: "Até 72 horas para verificação",
          legislacao: [
            "Lei Federal nº 12.305/2010",
            "Código de Posturas Municipal"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      },
      {
        id: "limpeza-terreno",
        name: "Limpeza de Terreno",
        slug: "limpeza-terreno",
        categoryId: "limpeza-urbana",
        description: "Solicitação de limpeza de terreno baldio",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço para solicitar a notificação e posterior limpeza de terrenos baldios que estejam com mato alto, acumulando lixo ou criando condições para proliferação de pragas.",
          paraQueServe: "Manter os terrenos baldios limpos e roçados, evitando a proliferação de animais peçonhentos, mosquitos e outros problemas de saúde pública.",
          quemPodeSolicitar: "Qualquer cidadão pode solicitar a fiscalização e limpeza de terrenos baldios.",
          informacoesComplementares: "O proprietário do terreno será notificado para realizar a limpeza. Em caso de descumprimento, a prefeitura pode realizar a limpeza e cobrar os custos do proprietário.",
          informacoesNecessarias: [
            "Endereço do terreno",
            "Descrição da situação",
            "Fotos do local"
          ],
          tempoAtendimento: "Até 15 dias para notificação do proprietário",
          legislacao: [
            "Código de Posturas Municipal",
            "Lei de Limpeza de Terrenos"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true },
          { id: "address", name: "address", label: "Endereço do terreno", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      }
    ]
  },
  {
    id: "saude",
    name: "Saúde",
    icon: "Stethoscope",
    slug: "saude",
    description: "Serviços de saúde municipal",
    services: [
      {
        id: "dengue",
        name: "Foco de Dengue",
        slug: "foco-dengue",
        categoryId: "saude",
        description: "Denúncia de foco de dengue, zika ou chikungunya",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço para denunciar locais com possíveis focos de proliferação do mosquito Aedes aegypti, transmissor da dengue, zika e chikungunya.",
          paraQueServe: "Permitir que as equipes de vigilância sanitária identifiquem e eliminem focos do mosquito, prevenindo a proliferação de doenças.",
          quemPodeSolicitar: "Qualquer cidadão pode denunciar um possível foco de dengue.",
          informacoesComplementares: "Locais com água parada são os principais criadouros do mosquito. Verifique regularmente sua casa e quintal.",
          informacoesNecessarias: [
            "Endereço completo do local",
            "Descrição do possível foco (piscina abandonada, caixa d'água destampada, etc.)",
            "Fotos (se possível)"
          ],
          tempoAtendimento: "Até 48 horas para vistoria",
          legislacao: [
            "Lei Federal nº 13.301/2016",
            "Programa Nacional de Controle da Dengue"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição do foco", type: "textarea", required: true },
          { id: "address", name: "address", label: "Endereço", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      },
      {
        id: "unidade-saude",
        name: "Informações sobre Unidades de Saúde",
        slug: "informacoes-unidade-saude",
        categoryId: "saude",
        description: "Informações e sugestões sobre unidades de saúde",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Canal para obter informações sobre as unidades de saúde do município, incluindo horários de funcionamento, serviços oferecidos e localização.",
          paraQueServe: "Facilitar o acesso da população às informações sobre a rede de saúde municipal.",
          quemPodeSolicitar: "Qualquer cidadão pode solicitar informações sobre unidades de saúde.",
          informacoesComplementares: "Para agendamento de consultas, procure a Unidade Básica de Saúde (UBS) mais próxima de sua residência.",
          informacoesNecessarias: [
            "Bairro de residência",
            "Tipo de serviço procurado"
          ],
          tempoAtendimento: "Resposta imediata",
          legislacao: [
            "Lei nº 8.080/1990 (Lei do SUS)"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Sua dúvida ou sugestão", type: "textarea", required: true }
        ]
      }
    ]
  },
  {
    id: "transito",
    name: "Trânsito",
    icon: "Car",
    slug: "transito",
    description: "Serviços relacionados ao trânsito",
    services: [
      {
        id: "semaforo-defeito",
        name: "Semáforo com Defeito",
        slug: "semaforo-defeito",
        categoryId: "transito",
        description: "Solicitação de reparo de semáforo",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço para relatar semáforos com defeito, apagados, com lâmpadas queimadas ou com sincronização incorreta.",
          paraQueServe: "Garantir o funcionamento adequado da sinalização semafórica para a segurança de motoristas e pedestres.",
          quemPodeSolicitar: "Qualquer cidadão pode relatar um semáforo com defeito.",
          informacoesComplementares: "Enquanto o semáforo não for reparado, respeite a sinalização de parada obrigatória e dê preferência aos veículos que já estejam no cruzamento.",
          informacoesNecessarias: [
            "Endereço exato do semáforo (cruzamento)",
            "Descrição do defeito",
            "Horário em que foi observado o problema"
          ],
          tempoAtendimento: "Até 24 horas",
          legislacao: [
            "Código de Trânsito Brasileiro",
            "Resolução CONTRAN nº 483/2014"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição do problema", type: "textarea", required: true },
          { id: "address", name: "address", label: "Localização do semáforo", type: "address", required: true }
        ]
      },
      {
        id: "sinalizacao",
        name: "Sinalização de Trânsito",
        slug: "sinalizacao",
        categoryId: "transito",
        description: "Problemas com sinalização de trânsito",
        requiresAuth: false,
        detailedInfo: {
          oQueE: "Serviço para relatar problemas com placas de sinalização de trânsito, como placas danificadas, faltando ou com informações incorretas.",
          paraQueServe: "Manter a sinalização de trânsito em boas condições para orientar motoristas e garantir a segurança viária.",
          quemPodeSolicitar: "Qualquer cidadão pode relatar problemas com sinalização de trânsito.",
          informacoesComplementares: "Inclua fotos para facilitar a identificação do problema e agilizar o atendimento.",
          informacoesNecessarias: [
            "Endereço ou localização",
            "Tipo de placa ou sinalização",
            "Descrição do problema",
            "Fotos"
          ],
          tempoAtendimento: "Até 15 dias úteis",
          legislacao: [
            "Código de Trânsito Brasileiro",
            "Manual Brasileiro de Sinalização de Trânsito"
          ]
        },
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      }
    ]
  }
];

// Dados para FAQ
export const faqData: FAQ[] = [
  {
    id: "1",
    question: "Como faço para abrir uma solicitação?",
    answer: "Para abrir uma solicitação, navegue até a categoria desejada, selecione o serviço e preencha o formulário. Você receberá um número de protocolo para acompanhamento.",
    categoryId: "geral",
    order: 1
  },
  {
    id: "2",
    question: "Preciso me cadastrar para usar o portal?",
    answer: "Não é necessário cadastro para a maioria das solicitações. Porém, algumas funcionalidades como acompanhamento de solicitações e histórico requerem login.",
    categoryId: "geral",
    order: 2
  },
  {
    id: "3",
    question: "Como consulto minha solicitação?",
    answer: "Acesse 'Consulta Protocolo' no menu superior e informe seu número de protocolo para ver o status atualizado.",
    categoryId: "geral",
    order: 3
  },
  {
    id: "4",
    question: "Quanto tempo leva para minha solicitação ser atendida?",
    answer: "O prazo varia de acordo com o tipo de serviço e a complexidade da demanda. Cada solicitação tem um prazo estimado informado no momento da abertura.",
    categoryId: "geral",
    order: 4
  },
  {
    id: "5",
    question: "Posso fazer uma denúncia anônima?",
    answer: "Sim, você pode optar por fazer denúncias de forma anônima. Seus dados não serão vinculados à solicitação.",
    categoryId: "geral",
    order: 5
  }
];

// Dados para Notícias
export const newsData: News[] = [
  {
    id: "1",
    title: "Prefeitura lança novo canal de atendimento 2909",
    slug: "prefeitura-lanca-novo-canal-atendimento-2909",
    excerpt: "O novo portal facilita o acesso aos serviços municipais e permite acompanhamento de solicitações online.",
    content: "A Prefeitura de Belford Roxo lançou hoje o novo portal de atendimento ao cidadão 2909...",
    image: "/images/news/portal-2909.jpg",
    category: "Institucional",
    publishedAt: new Date("2025-01-15"),
    author: "Secretaria de Comunicação"
  },
  {
    id: "2",
    title: "Mutirão de limpeza atende bairros da zona norte",
    slug: "mutirao-limpeza-zona-norte",
    excerpt: "Ação especial de limpeza urbana acontece durante toda a semana nos bairros da zona norte.",
    content: "A Secretaria de Conservação e Limpeza Urbana iniciou um grande mutirão...",
    category: "Serviços",
    publishedAt: new Date("2025-01-10"),
    author: "Secretaria de Conservação"
  }
];

// Funções auxiliares
export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find(cat => cat.slug === slug);
}

export function getServiceBySlug(categorySlug: string, serviceSlug: string) {
  const category = getCategoryBySlug(categorySlug);
  return category?.services.find(service => service.slug === serviceSlug);
}

export function getAllServices() {
  return serviceCategories.flatMap(cat => cat.services);
}

export function searchServices(query: string) {
  const lowerQuery = query.toLowerCase();
  return getAllServices().filter(
    service =>
      service.name.toLowerCase().includes(lowerQuery) ||
      service.description.toLowerCase().includes(lowerQuery)
  );
}
