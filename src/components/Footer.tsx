import { MessageCircle, MapPin, Mail, Monitor } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = "https://wa.me/5592993730335?text=Ol%C3%A1%2C+professor+Victor%21+Gostaria+de+saber+mais+sobre+as+aulas+particulares+de+inform%C3%A1tica.";

  return (
    <footer className="bg-deep-900 text-white border-t border-gray-800/80 pt-16 pb-28 px-4 relative z-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-accent/10 text-accent rounded-lg border border-accent/20">
                <Monitor className="w-5 h-5" />
              </div>
              <span className="font-bold text-lg font-display tracking-tight text-white">
                Victor Eduardo
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Professor particular de informática focado em simplificar a tecnologia para todos os perfis em Manaus. Do básico ao avançado com inteligência artificial.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-bold font-display text-base text-accent-light uppercase tracking-wider mb-5">
              Navegação
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a href="#hero" className="hover:text-accent transition-colors duration-200">
                  Início
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-accent transition-colors duration-200">
                  Cursos & Serviços
                </a>
              </li>
              <li>
                <a href="#publico" className="hover:text-accent transition-colors duration-200">
                  Público-Alvo
                </a>
              </li>
              <li>
                <a href="#metodologia" className="hover:text-accent transition-colors duration-200">
                  Metodologia
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-accent transition-colors duration-200">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-accent transition-colors duration-200">
                  Dúvidas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-bold font-display text-base text-accent-light uppercase tracking-wider mb-5">
              Contato & Localização
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Manaus - AM e região metropolitana</span>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <MessageCircle className="w-5 h-5 text-green-whatsapp flex-shrink-0" />
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors duration-200 font-medium">
                  +55 (92) 99373-0335
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="break-all">victoreduardo1049@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-muted text-center sm:text-left">
          <p>
            &copy; {currentYear} Victor Eduardo - Aulas Particulares de Informática. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido com foco em acessibilidade e alta performance mobile.
          </p>
        </div>

      </div>
    </footer>
  );
}
