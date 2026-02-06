// =============================================================================
// Seed do Banco de Dados - Portal 2909
// =============================================================================

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Iniciando seed do banco de dados...\n");

  // 1. ADMIN PADRÃO
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

  // 2. DEPARTAMENTOS
  console.log("\n🏢 Criando departamentos...");
  const departments = [
    { name: "Secretaria de Conservação", slug: "conservacao", email: "conservacao@belfordroxo.rj.gov.br" },
    { name: "Secretaria de Iluminação Pública", slug: "iluminacao", email: "iluminacao@belfordroxo.rj.gov.br" },
    { name: "Secretaria de Ordem Pública", slug: "ordem-publica", email: "ordempublica@belfordroxo.rj.gov.br" },
    { name: "Secretaria de Saúde", slug: "saude", email: "saude@belfordroxo.rj.gov.br" },
    { name: "Secretaria de Educação", slug: "educacao", email: "educacao@belfordroxo.rj.gov.br" },
    { name: "Secretaria de Assistência Social", slug: "assistencia-social", email: "assistencia@belfordroxo.rj.gov.br" },
    { name: "Secretaria de Meio Ambiente", slug: "meio-ambiente", email: "meioambiente@belfordroxo.rj.gov.br" },
    { name: "Secretaria de Transportes", slug: "transportes", email: "transportes@belfordroxo.rj.gov.br" },
    { name: "Defesa Civil", slug: "defesa-civil", email: "defesacivil@belfordroxo.rj.gov.br" },
    { name: "Ouvidoria Geral", slug: "ouvidoria", email: "ouvidoriageral@belfordroxo.rj.gov.br" },
  ];

  for (const dept of departments) {
    await prisma.department.upsert({
      where: { slug: dept.slug },
      update: {},
      create: dept,
    });
  }
  console.log(`  ✅ ${departments.length} departamentos criados`);

  // 3. CATEGORIAS E SERVIÇOS
  console.log("\n📂 Criando categorias e serviços...");
  
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
    const category = await prisma.serviceCategory.upsert({
      where: { slug: catData.slug },
      update: {},
      create: {
        name: catData.name,
        slug: catData.slug,
        icon: catData.icon,
        description: catData.description,
      },
    });

    for (const svcData of catData.services) {
      await prisma.service.upsert({
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
    }
  }

  const totalServices = categoriesData.reduce((sum, c) => sum + c.services.length, 0);
  console.log(`  ✅ ${categoriesData.length} categorias e ${totalServices} serviços criados`);

  // 4. CONFIGURAÇÕES
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

  // 5. FAQs
  console.log("\n❓ Criando perguntas frequentes...");
  const faqs = [
    { question: "Como faço uma solicitação?", answer: "Acesse o portal, clique em 'Fazer Solicitação', selecione a categoria e o serviço desejado, preencha os dados e envie.", categoryId: "geral", order: 1 },
    { question: "Preciso me cadastrar?", answer: "Não é obrigatório. Você pode fazer solicitações como anônimo, mas recomendamos o cadastro para acompanhar suas demandas.", categoryId: "geral", order: 2 },
    { question: "Qual o prazo de atendimento?", answer: "O prazo varia conforme o tipo de serviço, podendo ser de 24 horas (urgências) a 10 dias úteis.", categoryId: "geral", order: 3 },
    { question: "Como consultar minha solicitação?", answer: "Acesse 'Consultar Protocolo' no menu principal e insira o número do protocolo recebido.", categoryId: "geral", order: 4 },
    { question: "Meus dados estão seguros?", answer: "Sim. Seguimos a LGPD. Seus dados são utilizados exclusivamente para o atendimento.", categoryId: "seguranca", order: 5 },
  ];

  for (const faq of faqs) {
    await prisma.fAQ.create({ data: faq });
  }
  console.log(`  ✅ ${faqs.length} FAQs criadas`);

  console.log("\n🎉 Seed concluído com sucesso!\n");
  console.log("🔑 Credenciais do admin:");
  console.log("   CPF: 529.982.247-25");
  console.log("   Senha: Admin@2909");
  console.log("   URL: http://localhost:3000/admin");
}

main()
  .then(async () => { await prisma.$disconnect(); })
  .catch(async (e) => { console.error("❌ Erro no seed:", e); await prisma.$disconnect(); process.exit(1); });
