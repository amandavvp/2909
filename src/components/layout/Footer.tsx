import Link from "next/link";
import { 
  Instagram, 
  Facebook, 
  Youtube, 
  Linkedin,
  MessageCircle
} from "lucide-react";

const institutionalLinks = [
  { name: "Lei de Acesso à Informação", href: "/lai" },
  { name: "Ouvidoria", href: "/ouvidoria" },
  { name: "Termo de Uso e Privacidade", href: "/termos" },
  { name: "Política de Privacidade", href: "/privacidade" },
  { name: "LGPD", href: "/lgpd" },
];

const serviceLinks = [
  { name: "Serviços", href: "/" },
  { name: "Acompanhe sua Solicitação", href: "/consulta" },
  { name: "Perguntas Frequentes", href: "/faq" },
  { name: "Exclusão de Cadastro", href: "/excluir-cadastro" },
];

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/prefeituradebelfordroxo/", icon: Instagram },
  { name: "Facebook", href: "https://www.facebook.com/PrefeituradeBelfordRoxo/", icon: Facebook },
  { name: "Youtube", href: "https://www.youtube.com/@prefeituradebelfordroxo", icon: Youtube },
  { name: "LinkedIn", href: "https://www.linkedin.com/company/prefeitura-municipal-de-belford-roxo/", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Linha de números */}
      <div className="bg-neutral-700">
        <div className="container-main py-3">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 text-sm">
            <p>
              <strong>Município de Belford Roxo:</strong> 2909
            </p>
            <p>
              <strong>Demais localidades:</strong> (21) 2666-2909 *
            </p>
          </div>
        </div>
      </div>

      {/* Conteúdo principal do footer */}
      <div className="container-main py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e informações da prefeitura */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary text-lg font-bold">BR</span>
              </div>
              <div>
                <div className="text-xs tracking-widest">PREFEITURA</div>
                <div className="text-xl font-bold">BELFORD ROXO</div>
              </div>
            </div>
            <address className="not-italic text-sm text-white/80 space-y-1">
              <p>Prefeitura Municipal de Belford Roxo</p>
              <p>Av. Joaquim da Costa Lima, 3250</p>
              <p>São Bernardo - Belford Roxo - RJ</p>
              <p>CEP: 26167-325</p>
              <p>CNPJ: 39.436.436/0001-42</p>
            </address>
          </div>

          {/* Links Institucionais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Institucional</h3>
            <ul className="space-y-2">
              {institutionalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links de Serviços */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                  title={social.name}
                  aria-label={`Visite nosso ${social.name}`}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-sm text-white/80 mb-2">Fale conosco:</p>
              <a
                href="mailto:ouvidoriageral@prefeituradebelfordroxo.rj.gov.br"
                className="text-sm text-white/80 hover:text-white transition-colors break-all"
              >
                ouvidoriageral@prefeituradebelfordroxo.rj.gov.br
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Linha de atenção */}
      <div className="bg-primary-dark">
        <div className="container-main py-4">
          <p className="text-xs text-center text-white/70">
            <strong>*Atenção:</strong> As ligações para os números 2909 e (21) 2666-2909 são tarifadas ao custo de uma ligação de telefone fixo.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-neutral-900">
        <div className="container-main py-4">
          <p className="text-xs text-center text-white/60">
            © {new Date().getFullYear()} - Prefeitura Municipal de Belford Roxo. Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Botão WhatsApp fixo */}
      <a
        href="https://wa.me/5521266629009"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg transition-colors z-50"
        title="Fale conosco pelo WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </footer>
  );
}
