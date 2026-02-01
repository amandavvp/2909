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
        name: "Animais Silvestres",
        slug: "animais-silvestres",
        categoryId: "animais",
        description: "Denúncias ou solicitações relacionadas a animais silvestres",
        requiresAuth: false,
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true, placeholder: "Descreva a situação" },
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
        description: "Informações e agendamento de vacinação",
        requiresAuth: true,
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
        requiresAuth: true,
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local da solicitação", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos do local", type: "file", required: false }
        ]
      },
      {
        id: "vaga-deficiente",
        name: "Vaga para Deficiente",
        slug: "vaga-deficiente",
        categoryId: "acessibilidade",
        description: "Solicitação de vaga para pessoa com deficiência",
        requiresAuth: true,
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
        description: "Informações sobre o Cadastro Único",
        requiresAuth: false,
        fields: []
      },
      {
        id: "cras-atendimento",
        name: "Atendimento no CRAS",
        slug: "cras-atendimento",
        categoryId: "assistencia-social",
        description: "Agendamento de atendimento no CRAS",
        requiresAuth: true,
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
        description: "Reparo de calçadas danificadas",
        requiresAuth: false,
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
        description: "Relato de área alagada",
        requiresAuth: false,
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
        description: "Informações sobre matrícula na rede municipal",
        requiresAuth: true,
        fields: []
      },
      {
        id: "transporte-escolar",
        name: "Transporte Escolar",
        slug: "transporte-escolar",
        categoryId: "educacao",
        description: "Solicitação de transporte escolar",
        requiresAuth: true,
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
        id: "lampada-queimada",
        name: "Lâmpada Queimada",
        slug: "lampada-queimada",
        categoryId: "iluminacao",
        description: "Solicitação de troca de lâmpada queimada",
        requiresAuth: false,
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true, placeholder: "Informe o número do poste, se visível" },
          { id: "address", name: "address", label: "Endereço", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Foto do poste", type: "file", required: false }
        ]
      },
      {
        id: "nova-iluminacao",
        name: "Solicitação de Iluminação",
        slug: "nova-iluminacao",
        categoryId: "iluminacao",
        description: "Solicitação de instalação de iluminação",
        requiresAuth: false,
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
        description: "Problemas com coleta de lixo",
        requiresAuth: false,
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
        description: "Denúncia de foco de dengue",
        requiresAuth: false,
        fields: [
          { id: "description", name: "description", label: "Descrição do foco", type: "textarea", required: true },
          { id: "address", name: "address", label: "Endereço", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      },
      {
        id: "unidade-saude",
        name: "Problema em Unidade de Saúde",
        slug: "problema-unidade-saude",
        categoryId: "saude",
        description: "Reclamação sobre unidade de saúde",
        requiresAuth: true,
        fields: [
          { id: "unidade", name: "unidade", label: "Nome da unidade", type: "text", required: true },
          { id: "description", name: "description", label: "Descrição do problema", type: "textarea", required: true },
          { id: "date", name: "date", label: "Data da ocorrência", type: "date", required: true }
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
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      }
    ]
  },
  {
    id: "ouvidoria",
    name: "Ouvidoria",
    icon: "MessageSquare",
    slug: "ouvidoria",
    description: "Canal direto com a Ouvidoria Municipal",
    services: [
      {
        id: "denuncia",
        name: "Denúncia",
        slug: "denuncia",
        categoryId: "ouvidoria",
        description: "Denúncias gerais",
        requiresAuth: false,
        fields: [
          { id: "description", name: "description", label: "Descrição da denúncia", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local (se aplicável)", type: "address", required: false },
          { id: "attachment", name: "attachment", label: "Evidências", type: "file", required: false }
        ]
      },
      {
        id: "reclamacao",
        name: "Reclamação",
        slug: "reclamacao",
        categoryId: "ouvidoria",
        description: "Reclamações sobre serviços públicos",
        requiresAuth: false,
        fields: [
          { id: "orgao", name: "orgao", label: "Órgão/Secretaria", type: "text", required: true },
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true }
        ]
      },
      {
        id: "sugestao",
        name: "Sugestão",
        slug: "sugestao",
        categoryId: "ouvidoria",
        description: "Envie suas sugestões para melhorar a cidade",
        requiresAuth: false,
        fields: [
          { id: "description", name: "description", label: "Sua sugestão", type: "textarea", required: true }
        ]
      },
      {
        id: "elogio",
        name: "Elogio",
        slug: "elogio",
        categoryId: "ouvidoria",
        description: "Elogie um servidor ou serviço",
        requiresAuth: false,
        fields: [
          { id: "description", name: "description", label: "Seu elogio", type: "textarea", required: true }
        ]
      }
    ]
  },
  {
    id: "ordem-publica",
    name: "Ordem Pública",
    icon: "Shield",
    slug: "ordem-publica",
    description: "Serviços de ordem pública e fiscalização",
    services: [
      {
        id: "estabelecimento-irregular",
        name: "Estabelecimento Irregular",
        slug: "estabelecimento-irregular",
        categoryId: "ordem-publica",
        description: "Denúncia de estabelecimento irregular",
        requiresAuth: false,
        fields: [
          { id: "description", name: "description", label: "Descrição da irregularidade", type: "textarea", required: true },
          { id: "address", name: "address", label: "Endereço do estabelecimento", type: "address", required: true },
          { id: "attachment", name: "attachment", label: "Fotos", type: "file", required: false }
        ]
      },
      {
        id: "perturbacao-sossego",
        name: "Perturbação do Sossego",
        slug: "perturbacao-sossego",
        categoryId: "ordem-publica",
        description: "Denúncia de perturbação do sossego",
        requiresAuth: false,
        fields: [
          { id: "description", name: "description", label: "Descrição", type: "textarea", required: true },
          { id: "address", name: "address", label: "Local", type: "address", required: true }
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
