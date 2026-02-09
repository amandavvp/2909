// =============================================================================
// Seed do Banco de Dados - Portal 2909
// Prefeitura Municipal de Belford Roxo
// =============================================================================

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...\n");

  // =========================================================================
  // 1. ADMIN PADRÃO
  // =========================================================================
  console.log("👤 Criando usuário administrador...");
  const adminPassword = await bcrypt.hash("Admin@2909", 12);
  
  const admin = await prisma.user.upsert({
    where: { cpf: "52998224725" },
    update: {},
    create: {
      name: "Administrador do Sistema",
      email: "admin@belfordroxo.rj.gov.br",
      cpf: "52998224725",
      phone: "2126662909",
      passwordHash: adminPassword,
      role: "ADMIN",
      isActive: true,
      emailVerified: true,
    },
  });
  console.log(`  ✅ Admin criado: ${admin.email} (CPF: 529.982.247-25 / Senha: Admin@2909)`);

  // =========================================================================
  // 2. SECRETARIAS MUNICIPAIS DE BELFORD ROXO
  // =========================================================================
  console.log("\n🏛️  Criando secretarias municipais...");
  const secretarias = [
    { name: "Secretaria Municipal de Saúde - SEMUS", slug: "semus", email: "saude@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Educação - SEMED", slug: "semed", email: "educacao@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Administração - SEMAD", slug: "semad", email: "administracao@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Governo - SEMUG", slug: "semug", email: "governo@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Habitação e Urbanismo - SEMHURB", slug: "semhurb", email: "habitacao@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Serviços Públicos - SEMSERP", slug: "semserp", email: "servicospublicos@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal da Mulher - SEMM", slug: "semm", email: "mulher@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Meio Ambiente e Sustentabilidade - SEMAS", slug: "semas", email: "meioambiente@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Fazenda - SEMFA", slug: "semfa", email: "fazenda@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Conservação - SEMCO", slug: "semco", email: "conservacao@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Assistência Social e Cidadania - SEMASC", slug: "semasc", email: "assistenciasocial@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Ordem Urbana - SEMOP", slug: "semop", email: "ordemurbana@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Segurança Pública - SEMSEP", slug: "semsep", email: "seguranca@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Licitações e Compras - SEMLIC", slug: "semlic", email: "licitacoes@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Ação Comunitária - SEMAC", slug: "semac", email: "acaocomunitaria@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Transportes e Mobilidade Urbana - SEMTMU", slug: "semtmu", email: "transportes@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal da Casa Civil - SEMCC", slug: "semcc", email: "casacivil@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Ciência, Tecnologia e Inovação - SEMCTI", slug: "semcti", email: "cienciatecnologia@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Obras, Infraestrutura e Saneamento - SEMOFS", slug: "semofs", email: "obras@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Esporte e Lazer - SEMEL", slug: "semel", email: "esporte@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Comunicação Social - SECOM", slug: "secom", email: "comunicacao@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Indústria e Comércio - SEMIC", slug: "semic", email: "industria@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Trabalho e Renda e Economia Solidária - SEMTRES", slug: "semtres", email: "trabalho@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Defesa Civil - SEMDEC", slug: "semdec", email: "defesacivil@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Proteção e Defesa dos Animais - SEMPDA", slug: "sempda", email: "protecaoanimal@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Cultura - SEMC", slug: "semc", email: "cultura@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Turismo e Eventos - SEMTE", slug: "semte", email: "turismo@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal Especial de Administração Financeira", slug: "smeaf", email: "admfinanceira@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Envelhecimento Saudável e Qualidade de Vida", slug: "smesqv", email: "envelhecimento@belfordroxo.rj.gov.br" },
    { name: "Secretaria Municipal de Agricultura - SEMAG", slug: "semag", email: "agricultura@belfordroxo.rj.gov.br" },
  ];

  const secretariaMap: Record<string, string> = {};
  for (const sec of secretarias) {
    const created = await prisma.department.upsert({
      where: { slug: sec.slug },
      update: { name: sec.name, email: sec.email },
      create: sec,
    });
    secretariaMap[sec.slug] = created.id;
  }
  console.log(`  ✅ ${secretarias.length} secretarias criadas`);

  // =========================================================================
  // 3. CATEGORIAS E SERVIÇOS (mapeados para secretarias)
  // =========================================================================
  console.log("\n📂 Criando categorias e serviços...");

  // Mapeamento: categoria slug -> secretaria slug responsável
  const categoryToSecretaria: Record<string, string> = {
    "conservacao": "semco",           // SEMCO - Conservação
    "iluminacao": "semserp",          // SEMSERP - Serviços Públicos
    "limpeza-urbana": "semserp",      // SEMSERP - Serviços Públicos
    "ordem-publica": "semop",         // SEMOP - Ordem Urbana
    "saude": "semus",                 // SEMUS - Saúde
    "animais": "sempda",             // SEMPDA - Proteção e Defesa dos Animais
    "transito-transporte": "semtmu",  // SEMTMU - Transportes e Mobilidade
    "assistencia-social": "semasc",   // SEMASC - Assistência Social e Cidadania
    "meio-ambiente": "semas",         // SEMAS - Meio Ambiente e Sustentabilidade
    "acessibilidade": "semofs",       // SEMOFS - Obras, Infraestrutura e Saneamento
    "defesa-civil": "semdec",         // SEMDEC - Defesa Civil
    "educacao": "semed",              // SEMED - Educação
    "habitacao": "semhurb",           // SEMHURB - Habitação e Urbanismo
    "seguranca": "semsep",            // SEMSEP - Segurança Pública
  };

  const categoriesData = [
    {
      name: "Conservação", slug: "conservacao", icon: "Wrench",
      description: "Serviços de manutenção e conservação de vias, calçadas e espaços públicos",
      services: [
        { name: "Buraco na Via", slug: "buraco-via", description: "Solicite o reparo de buracos em ruas e avenidas", slaHours: 120, slaPriority: "NORMAL" },
        { name: "Calçada Danificada", slug: "calcada-danificada", description: "Reparo de calçadas quebradas ou irregulares", slaHours: 240, slaPriority: "LOW" },
        { name: "Bueiro Entupido", slug: "bueiro-entupido", description: "Desentupimento de bueiros e galerias pluviais", slaHours: 48, slaPriority: "HIGH" },
      ],
    },
    {
      name: "Iluminação Pública", slug: "iluminacao", icon: "Lightbulb",
      description: "Manutenção e instalação de iluminação pública",
      services: [
        { name: "Lâmpada Apagada", slug: "lampada-apagada", description: "Solicite a troca de lâmpadas queimadas em vias públicas", slaHours: 48, slaPriority: "HIGH" },
        { name: "Poste Danificado", slug: "poste-danificado", description: "Reporte postes quebrados ou inclinados", slaHours: 24, slaPriority: "URGENT" },
        { name: "Nova Instalação", slug: "nova-instalacao", description: "Solicite instalação de ponto de iluminação", slaHours: 240, slaPriority: "LOW" },
      ],
    },
    {
      name: "Limpeza Urbana", slug: "limpeza-urbana", icon: "Trash2",
      description: "Coleta de lixo, varrição e limpeza de logradouros",
      services: [
        { name: "Coleta de Lixo", slug: "coleta-lixo", description: "Reporte problemas na coleta de lixo doméstico", slaHours: 24, slaPriority: "URGENT" },
        { name: "Terreno Baldio Sujo", slug: "terreno-baldio", description: "Denuncie terrenos baldios com acúmulo de lixo", slaHours: 120, slaPriority: "NORMAL" },
        { name: "Poda de Árvore", slug: "poda-arvore", description: "Solicite poda de árvores em vias públicas", slaHours: 240, slaPriority: "LOW" },
      ],
    },
    {
      name: "Ordem Pública", slug: "ordem-publica", icon: "ShieldCheck",
      description: "Fiscalização, posturas e ordenamento urbano",
      services: [
        { name: "Comércio Irregular", slug: "comercio-irregular", description: "Denuncie estabelecimentos irregulares", slaHours: 120, slaPriority: "NORMAL" },
        { name: "Poluição Sonora", slug: "poluicao-sonora", description: "Reporte excesso de barulho em estabelecimentos", slaHours: 48, slaPriority: "HIGH" },
        { name: "Obra Irregular", slug: "obra-irregular", description: "Denuncie obras sem licença ou alvará", slaHours: 120, slaPriority: "NORMAL" },
      ],
    },
    {
      name: "Saúde", slug: "saude", icon: "HeartPulse",
      description: "Serviços de saúde pública",
      services: [
        { name: "Dengue/Foco de Mosquito", slug: "dengue-foco", description: "Denuncie focos de água parada e criadouros de mosquito", slaHours: 24, slaPriority: "URGENT" },
        { name: "Unidade de Saúde", slug: "unidade-saude", description: "Reclamações sobre unidades de saúde", slaHours: 120, slaPriority: "NORMAL" },
      ],
    },
    {
      name: "Animais", slug: "animais", icon: "Dog",
      description: "Proteção animal e controle de zoonoses",
      services: [
        { name: "Maus-tratos a Animais", slug: "maus-tratos", description: "Denuncie maus-tratos contra animais", slaHours: 24, slaPriority: "URGENT" },
        { name: "Animais Silvestres", slug: "animais-silvestres", description: "Reporte presença de animais silvestres em área urbana", slaHours: 48, slaPriority: "HIGH" },
        { name: "Vacinação de Animais", slug: "vacinacao-animais", description: "Informações sobre campanhas de vacinação", slaHours: 120, slaPriority: "NORMAL" },
      ],
    },
    {
      name: "Trânsito e Transporte", slug: "transito-transporte", icon: "Car",
      description: "Sinalização, semáforos e transporte público",
      services: [
        { name: "Semáforo com Defeito", slug: "semaforo-defeito", description: "Reporte semáforos apagados ou com mau funcionamento", slaHours: 24, slaPriority: "URGENT" },
        { name: "Sinalização", slug: "sinalizacao", description: "Solicite instalação ou reparo de placas de sinalização", slaHours: 120, slaPriority: "NORMAL" },
      ],
    },
    {
      name: "Assistência Social", slug: "assistencia-social", icon: "Heart",
      description: "Programas sociais e apoio ao cidadão",
      services: [
        { name: "Cadastro Único", slug: "cadastro-unico", description: "Informações sobre o Cadastro Único (CadÚnico)", slaHours: 120, slaPriority: "NORMAL" },
        { name: "Pessoa em Situação de Rua", slug: "pessoa-situacao-rua", description: "Solicite abordagem social", slaHours: 24, slaPriority: "URGENT" },
      ],
    },
    {
      name: "Meio Ambiente", slug: "meio-ambiente", icon: "TreePine",
      description: "Preservação ambiental e sustentabilidade",
      services: [
        { name: "Poluição Ambiental", slug: "poluicao-ambiental", description: "Denuncie poluição de rios, solo ou ar", slaHours: 48, slaPriority: "HIGH" },
        { name: "Desmatamento", slug: "desmatamento", description: "Denuncie desmatamento irregular", slaHours: 48, slaPriority: "HIGH" },
      ],
    },
    {
      name: "Acessibilidade", slug: "acessibilidade", icon: "Accessibility",
      description: "Melhorias de acessibilidade em espaços públicos",
      services: [
        { name: "Rampa de Acessibilidade", slug: "rampa-acessibilidade", description: "Solicite construção ou reparo de rampas", slaHours: 240, slaPriority: "LOW" },
        { name: "Piso Tátil", slug: "piso-tatil", description: "Solicite instalação de piso tátil em calçadas", slaHours: 240, slaPriority: "LOW" },
      ],
    },
  ];

  for (const catData of categoriesData) {
    const secSlug = categoryToSecretaria[catData.slug];
    const departmentId = secSlug ? secretariaMap[secSlug] : undefined;

    const category = await prisma.serviceCategory.upsert({
      where: { slug: catData.slug },
      update: { departmentId: departmentId || null },
      create: {
        name: catData.name,
        slug: catData.slug,
        icon: catData.icon,
        description: catData.description,
        departmentId: departmentId || null,
      },
    });

    for (const svcData of catData.services) {
      const svc = await prisma.service.upsert({
        where: { categoryId_slug: { categoryId: category.id, slug: svcData.slug } },
        update: {},
        create: {
          name: svcData.name,
          slug: svcData.slug,
          description: svcData.description,
          categoryId: category.id,
          slaHours: svcData.slaHours,
          slaPriority: svcData.slaPriority,
        },
      });

      // Atualizar solicitações existentes desta categoria para a secretaria correta
      if (departmentId) {
        await prisma.serviceRequest.updateMany({
          where: { serviceId: svc.id, departmentId: null },
          data: { departmentId },
        });
      }
    }

    if (secSlug) {
      console.log(`  📁 ${catData.name} → ${secretarias.find(s => s.slug === secSlug)?.name?.split(" - ")[0]}`);
    }
  }

  const totalServices = categoriesData.reduce((sum, c) => sum + c.services.length, 0);
  console.log(`  ✅ ${categoriesData.length} categorias e ${totalServices} serviços criados`);

  // =========================================================================
  // 4. CONFIGURAÇÕES
  // =========================================================================
  console.log("\n⚙️  Criando configurações do sistema...");
  const configs = [
    { key: "site.name", value: "Portal 2909", type: "string", group: "general", label: "Nome do portal" },
    { key: "site.phone", value: "2909", type: "string", group: "general", label: "Telefone principal" },
    { key: "site.email", value: "ouvidoriageral@prefeituradebelfordroxo.rj.gov.br", type: "string", group: "general", label: "E-mail de contato" },
    { key: "sla.urgent.hours", value: "24", type: "number", group: "sla", label: "SLA Urgente (horas)" },
    { key: "sla.high.hours", value: "48", type: "number", group: "sla", label: "SLA Alta (horas)" },
    { key: "sla.normal.hours", value: "120", type: "number", group: "sla", label: "SLA Normal (horas)" },
    { key: "sla.low.hours", value: "240", type: "number", group: "sla", label: "SLA Baixa (horas)" },
  ];

  for (const config of configs) {
    await prisma.systemConfig.upsert({
      where: { key: config.key },
      update: {},
      create: config,
    });
  }
  console.log(`  ✅ ${configs.length} configurações criadas`);

  // =========================================================================
  // 5. FAQs
  // =========================================================================
  console.log("\n❓ Criando perguntas frequentes...");
  const faqs = [
    { question: "Como faço uma solicitação?", answer: "Acesse o portal, clique em 'Fazer Solicitação', selecione a categoria e o serviço desejado, preencha os dados e envie.", categoryId: "geral", order: 1 },
    { question: "Preciso me cadastrar?", answer: "Não é obrigatório. Você pode fazer solicitações como anônimo, mas recomendamos o cadastro para acompanhar suas demandas.", categoryId: "geral", order: 2 },
    { question: "Qual o prazo de atendimento?", answer: "O prazo varia conforme o tipo de serviço, podendo ser de 24 horas (urgências) a 10 dias úteis.", categoryId: "geral", order: 3 },
    { question: "Como consultar minha solicitação?", answer: "Acesse 'Consultar Protocolo' no menu principal e insira o número do protocolo recebido.", categoryId: "geral", order: 4 },
    { question: "Meus dados estão seguros?", answer: "Sim. Seguimos a LGPD. Seus dados são utilizados exclusivamente para o atendimento.", categoryId: "seguranca", order: 5 },
    { question: "Para qual secretaria minha solicitação é encaminhada?", answer: "Cada tipo de serviço é automaticamente direcionado à secretaria municipal responsável. Você pode acompanhar pelo número do protocolo.", categoryId: "geral", order: 6 },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq });
  }
  console.log(`  ✅ ${faqs.length} FAQs criadas`);

  // =========================================================================
  // NOTÍCIAS REAIS DE BELFORD ROXO
  // =========================================================================
  console.log("\n📰 Criando notícias...");

  const noticias = [
    {
      title: "Jornada Pedagógica 2026 reúne profissionais da educação em Belford Roxo",
      slug: "jornada-pedagogica-2026",
      excerpt: "A Secretaria de Educação finalizou a Jornada Pedagógica 2026 com o tema 'Educação que transforma, Esperança que constrói', reunindo coordenadores e agentes de apoio.",
      content: "A Secretaria Municipal de Educação (SEMED) finalizou nesta sexta-feira (06/02) a \"Jornada Pedagógica 2026\" com o tema \"Educação que transforma, Esperança que constrói\". O evento foi realizado em quatro locais durante toda a semana para coordenadores de turno, estimuladores e agentes de apoio da rede municipal de ensino.\n\nA jornada contou com palestras, oficinas e debates sobre as novas diretrizes pedagógicas para o ano letivo de 2026, com foco na inovação educacional e na inclusão digital dos alunos da rede pública municipal.",
      image: null,
      category: "Educação",
      author: "Secretaria de Comunicação",
      isPublished: true,
      publishedAt: new Date("2026-02-06"),
    },
    {
      title: "IPTU 2026: prazo para cota única com 10% de desconto vence dia 10 de fevereiro",
      slug: "iptu-2026-cota-unica-desconto",
      excerpt: "Contribuintes de Belford Roxo podem pagar a cota única do IPTU com desconto de 10% até 10/02. Após essa data, desconto reduz para 5% até março.",
      content: "O prazo para pagar a cota única do IPTU 2026 com desconto de 10% vence na terça-feira, dia 10 de fevereiro. A Secretaria Municipal de Fazenda (SEMFA) informa que após essa data, até 10 de março, o desconto reduz para 5%.\n\nO tributo também pode ser parcelado em até 10 vezes sem desconto, com vencimento todo dia 10 a partir de março. Os contribuintes podem emitir a guia de pagamento pelo site da prefeitura ou nos postos de atendimento.",
      image: null,
      category: "Tributos",
      author: "Secretaria de Comunicação",
      isPublished: true,
      publishedAt: new Date("2026-02-05"),
    },
    {
      title: "Mutirão de limpeza no Gogó da Ema transforma bairro Bom Pastor",
      slug: "mutirao-limpeza-gogo-da-ema",
      excerpt: "Prefeitura realizou mutirão de limpeza no Gogó da Ema, no bairro Bom Pastor, com previsão de inauguração de nova base da PM no local.",
      content: "A Prefeitura de Belford Roxo realizou um grande mutirão de limpeza no Gogó da Ema, no bairro Bom Pastor, nesta quarta-feira (05/02). A ação contou com equipes da Secretaria de Serviços Públicos (SEMSERP) e da Secretaria de Conservação (SEMCO).\n\nAlém da limpeza, está prevista a inauguração de uma nova base da Polícia Militar no local para o próximo sábado (07/02), reforçando a segurança pública na região.",
      image: null,
      category: "Infraestrutura",
      author: "Secretaria de Comunicação",
      isPublished: true,
      publishedAt: new Date("2026-02-05"),
    },
    {
      title: "Operação tapa-buracos avança pela Estrada do China no Wona",
      slug: "operacao-tapa-buracos-estrada-china",
      excerpt: "Equipes da Secretaria de Obras realizam pavimentação e operação tapa-buracos na Estrada do China, beneficiando moradores do Wona.",
      content: "A Secretaria Municipal de Obras, Infraestrutura e Saneamento (SEMOFS) está realizando operação tapa-buracos e pavimentação na Estrada do China, no bairro Wona. O serviço visa melhorar as condições de trafegabilidade para os moradores da região.\n\nA prefeitura segue com o cronograma de recuperação das vias públicas em diversos bairros do município, priorizando as áreas com maior fluxo de veículos e pedestres.",
      image: null,
      category: "Obras",
      author: "Secretaria de Comunicação",
      isPublished: true,
      publishedAt: new Date("2026-02-05"),
    },
    {
      title: "Complexo Comunitário de Santa Teresa é inaugurado com praça e CRAS",
      slug: "complexo-comunitario-santa-teresa",
      excerpt: "Prefeito inaugura Complexo Comunitário no bairro Santa Teresa com praça, academia ao ar livre, pista de caminhada e novo CRAS.",
      content: "O prefeito de Belford Roxo inaugurou na sexta-feira (31/01) o Complexo Comunitário de Santa Teresa, que conta com praça pública, academia ao ar livre, pista de caminhada e um novo Centro de Referência de Assistência Social (CRAS).\n\nO espaço atenderá diretamente os moradores da região com serviços sociais, atividades esportivas e de lazer. A obra faz parte do programa de urbanização e desenvolvimento social do município.",
      image: null,
      category: "Desenvolvimento Social",
      author: "Secretaria de Comunicação",
      isPublished: true,
      publishedAt: new Date("2026-01-31"),
    },
    {
      title: "Programa Sentinela: 200 mil câmeras começam por Belford Roxo e Copacabana",
      slug: "programa-sentinela-cameras-seguranca",
      excerpt: "Governo do Estado lança Programa Sentinela que instalará 200 mil câmeras de segurança, iniciando por Belford Roxo e Copacabana.",
      content: "O Governo do Estado do Rio de Janeiro lançou o Programa Sentinela, que prevê a instalação de 200 mil câmeras de monitoramento em todo o estado. Belford Roxo foi escolhida como uma das primeiras cidades a receber o equipamento, ao lado de Copacabana.\n\nAs câmeras contarão com tecnologia de reconhecimento facial e de placas de veículos, conectadas a um centro integrado de comando. A medida visa reforçar a segurança pública e auxiliar as forças policiais no combate à criminalidade.",
      image: null,
      category: "Segurança",
      author: "Secretaria de Comunicação",
      isPublished: true,
      publishedAt: new Date("2026-01-23"),
    },
    {
      title: "Vacinação antirrábica imuniza mais de mil animais no Bom Pastor",
      slug: "vacinacao-antirrabica-bom-pastor",
      excerpt: "Coordenadoria de Vetores e Zoonoses realizou campanha de vacinação antirrábica no bairro Bom Pastor, imunizando mais de mil animais.",
      content: "A Coordenadoria de Vetores e Zoonoses da Secretaria Municipal de Saúde (SEMUS) realizou no último domingo (02/02) uma campanha de vacinação antirrábica no bairro Bom Pastor. Mais de mil animais entre cães e gatos foram imunizados durante a ação.\n\nA vacinação antirrábica é gratuita e essencial para a prevenção da raiva, doença que pode ser transmitida de animais para humanos. Novas campanhas serão realizadas nos próximos meses em outros bairros do município.",
      image: null,
      category: "Saúde",
      author: "Secretaria de Comunicação",
      isPublished: true,
      publishedAt: new Date("2026-02-02"),
    },
    {
      title: "Prefeito faz balanço positivo do primeiro 'Linha Direta com Canella'",
      slug: "balanco-linha-direta-canella",
      excerpt: "Prefeito de Belford Roxo realiza balanço positivo da primeira edição do programa Linha Direta com Canella, canal direto com a população.",
      content: "O prefeito de Belford Roxo realizou um balanço positivo da primeira edição do programa \"Linha Direta com Canella\", um canal direto de comunicação entre a gestão municipal e a população. Durante o programa, foram recebidas dezenas de demandas dos moradores.\n\nO \"Linha Direta com Canella\" permite que os cidadãos façam solicitações, reclamações e sugestões diretamente ao prefeito, que se compromete a dar encaminhamento às demandas junto às secretarias responsáveis. Novas edições serão realizadas periodicamente.",
      image: null,
      category: "Governo",
      author: "Secretaria de Comunicação",
      isPublished: true,
      publishedAt: new Date("2026-01-26"),
    },
    {
      title: "Terreno público retomado no Centro para criação de área de lazer",
      slug: "terreno-retomado-centro-area-lazer",
      excerpt: "Prefeitura retoma terreno público no Centro de Belford Roxo para criação de nova área de lazer na região do Guaraciaba.",
      content: "A Prefeitura de Belford Roxo retomou um terreno público no Centro do município que será transformado em uma nova área de lazer para a comunidade da região do Guaraciaba.\n\nO espaço receberá praça com brinquedos, bancos, iluminação LED e paisagismo. A previsão é que as obras comecem ainda no primeiro trimestre de 2026, beneficiando os moradores da área central da cidade.",
      image: null,
      category: "Urbanismo",
      author: "Secretaria de Comunicação",
      isPublished: true,
      publishedAt: new Date("2026-01-30"),
    },
  ];

  for (const noticia of noticias) {
    await prisma.news.upsert({
      where: { slug: noticia.slug },
      update: noticia,
      create: noticia,
    });
  }
  console.log(`  ✅ ${noticias.length} notícias criadas`);

  // =========================================================================
  console.log("\n🎉 Seed concluído com sucesso!\n");
  console.log("🔑 Credenciais do admin:");
  console.log("   CPF: 529.982.247-25");
  console.log("   Senha: Admin@2909");
  console.log("   URL: http://localhost:3000/admin");
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error("❌ Erro no seed:", e); await prisma.$disconnect(); process.exit(1); });
