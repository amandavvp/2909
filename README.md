# Portal 2909 - Central de Atendimento ao Cidadão

Portal de atendimento ao cidadão da Prefeitura de Belford Roxo, inspirado no portal 1746 do Rio de Janeiro.

## 🚀 Tecnologias

- **Next.js 16** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS v4** - Estilização
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
portal-2909/
├── src/
│   ├── app/                    # Rotas e páginas (App Router)
│   │   ├── api/                # API Routes
│   │   │   ├── auth/           # Autenticação
│   │   │   └── requests/       # Solicitações
│   │   ├── auth/               # Página de login/cadastro
│   │   ├── consulta/           # Consulta de protocolo
│   │   ├── faq/                # Perguntas frequentes
│   │   ├── ouvidoria/          # Canal da ouvidoria
│   │   ├── servicos/           # Categorias e serviços
│   │   │   ├── [category]/     # Página de categoria
│   │   │   └── [category]/[service]/ # Página de serviço
│   │   └── solicitacao/        # Nova solicitação
│   ├── components/
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── Header.tsx      # Cabeçalho
│   │   │   ├── Footer.tsx      # Rodapé
│   │   │   └── Sidebar.tsx     # Barra lateral
│   │   └── ui/                 # Componentes UI reutilizáveis
│   │       ├── Banner.tsx      # Carrossel
│   │       ├── Button.tsx      # Botões
│   │       ├── Card.tsx        # Cards
│   │       ├── Input.tsx       # Inputs
│   │       └── Steps.tsx       # Indicador de etapas
│   ├── data/                   # Dados estáticos
│   │   └── services.ts         # Categorias e serviços
│   ├── lib/                    # Utilitários e funções
│   │   ├── auth.ts             # Lógica de autenticação
│   │   ├── requests.ts         # Lógica de solicitações
│   │   └── utils.ts            # Funções utilitárias
│   └── types/                  # Tipos TypeScript
│       └── index.ts            # Definições de tipos
└── public/                     # Arquivos estáticos
```

## 🎯 Funcionalidades

### Implementadas:

1. **Página inicial** com categorias de serviços e banner rotativo
2. **Navegação por categorias** (12+ categorias de serviços)
3. **Sistema de autenticação** (login/cadastro com CPF)
4. **Fluxo de solicitação** em 3 etapas (Informação → Solicitação → Confirmação)
5. **Consulta de protocolo** para acompanhamento
6. **Página de FAQ** com busca
7. **Canal da Ouvidoria** (denúncia, reclamação, sugestão, elogio)
8. **Acessibilidade** (aumento de fonte, alto contraste)
9. **API REST** para autenticação e solicitações
10. **Design responsivo** (mobile-first)

### Categorias de Serviços:

- Animais
- Acessibilidade  
- Assistência Social
- Conservação (buracos, calçadas, poda)
- Defesa Civil
- Educação
- Iluminação Pública
- Limpeza Urbana
- Saúde
- Trânsito
- Ouvidoria
- Ordem Pública

## 🔒 Segurança

- Validação de CPF no frontend e backend
- Sanitização de inputs (prevenção XSS)
- Cookies httpOnly para tokens de autenticação
- Senhas nunca armazenadas em texto plano
- Dados sensíveis não expostos em APIs públicas (LGPD)
- Opção de denúncia anônima

## 🎨 Identidade Visual

Cores baseadas na Prefeitura de Belford Roxo:
- **Primária**: #1748ae (azul)
- **Secundária**: #0094de (azul claro)
- **Destaque**: #f4c738 (amarelo)

## 💻 Como Executar

```bash
# Instalar dependências
npm install

# Modo desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm start
```

Acesse: http://localhost:3000

## 📞 Informações de Contato (Belford Roxo)

- **Telefone**: 2909
- **Email**: ouvidoriageral@prefeituradebelfordroxo.rj.gov.br
- **Endereço**: Av. Joaquim da Costa Lima, 3250, São Bernardo
- **CEP**: 26167-325
- **CNPJ**: 39.436.436/0001-42

## 🔜 Melhorias Futuras Sugeridas

1. **Banco de dados real** (PostgreSQL/MySQL) para persistência
2. **Upload de arquivos** para anexos em solicitações
3. **Notificações por email** para atualizações de status
4. **Dashboard administrativo** para gestão de solicitações
5. **Integração com mapa** para geolocalização de ocorrências
6. **App mobile** (React Native / PWA)
7. **Chatbot** para atendimento automatizado
8. **Integração com WhatsApp Business API**
9. **Sistema de avaliação** de atendimento
10. **Relatórios e estatísticas** para gestão pública

## 📄 Licença

Este projeto foi desenvolvido para a Prefeitura de Belford Roxo.
