import { motion } from "motion/react";
import { Monitor, FileText, Code, Cpu, Check, MessageSquare, LucideIcon } from "lucide-react";

interface Course {
  id: string;
  title: string;
  icon: LucideIcon;
  benefit: string;
  items: string[];
  message: string;
}

export default function Services() {
  const courses: Course[] = [
    {
      id: "basico",
      title: "Informática Básica",
      icon: Monitor,
      benefit: "Domine o computador do zero e ganhe confiança no dia a dia digital.",
      items: ["Windows & Organização", "Navegação na Internet", "Uso seguro de E-mail", "Técnicas de Digitação", "Segurança digital básica"],
      message: "Olá, Victor! Tenho interesse no curso de Informática Básica. Gostaria de saber mais."
    },
    {
      id: "office",
      title: "Pacote Office",
      icon: FileText,
      benefit: "Crie documentos, planilhas e apresentações profissionais com facilidade.",
      items: ["Microsoft Word", "Planilhas no Excel", "Apresentações no PowerPoint", "Atalhos de produtividade", "Google Drive & Nuvem"],
      message: "Olá, Victor! Tenho interesse no curso do Pacote Office. Gostaria de saber mais."
    },
    {
      id: "programacao",
      title: "Programação",
      icon: Code,
      benefit: "Aprenda lógica de programação e dê os primeiros passos no desenvolvimento.",
      items: ["Lógica de Programação", "Introdução ao Python", "HTML, CSS & JavaScript", "Fundamentos de Banco de Dados", "Resolução de problemas reais"],
      message: "Olá, Victor! Tenho interesse no curso de Programação. Gostaria de saber mais."
    },
    {
      id: "ia",
      title: "IA & Tecnologia",
      icon: Cpu,
      benefit: "Descubra como usar inteligência artificial a seu favor no trabalho e nos estudos.",
      items: ["ChatGPT & Engenharia de Prompt", "Aumento de produtividade com IA", "Automações simples do dia a dia", "Ferramentas generativas modernas", "Tendências tecnológicas"],
      message: "Olá, Victor! Tenho interesse no curso de IA e Tecnologia. Gostaria de saber mais."
    }
  ];

  const colorThemes: Record<string, {
    iconBg: string;
    badge: string;
    checkIcon: string;
    btn: string;
    badgeText: string;
    cardBorderHover: string;
  }> = {
    basico: {
      iconBg: "bg-accent/10 border-accent/20 text-accent",
      badge: "bg-accent/10 text-accent-light border-accent/20",
      checkIcon: "text-accent",
      btn: "bg-accent/10 hover:bg-accent hover:text-deep-900 text-accent border-accent/30 hover:border-accent",
      badgeText: "Mais Procurado ✨",
      cardBorderHover: "hover:border-accent/40"
    },
    office: {
      iconBg: "bg-indigo-accent/10 border-indigo-accent/20 text-indigo-accent",
      badge: "bg-indigo-accent/10 text-indigo-accent border-indigo-accent/20",
      checkIcon: "text-indigo-accent",
      btn: "bg-indigo-accent/10 hover:bg-indigo-accent hover:text-white text-indigo-accent border-indigo-accent/30 hover:border-indigo-accent",
      badgeText: "Mercado & Produtividade",
      cardBorderHover: "hover:border-indigo-accent/40"
    },
    programacao: {
      iconBg: "bg-purple-accent/10 border-purple-accent/20 text-purple-accent",
      badge: "bg-purple-accent/10 text-purple-accent border-purple-accent/20",
      checkIcon: "text-purple-accent",
      btn: "bg-purple-accent/10 hover:bg-purple-accent hover:text-white text-purple-accent border-purple-accent/30 hover:border-purple-accent",
      badgeText: "Lógica & Carreira",
      cardBorderHover: "hover:border-purple-accent/40"
    },
    ia: {
      iconBg: "bg-secondary/10 border-secondary/20 text-secondary-light",
      badge: "bg-secondary/10 text-secondary-light border-secondary/20",
      checkIcon: "text-secondary-light",
      btn: "bg-secondary/10 hover:bg-secondary hover:text-deep-900 text-secondary-light border-secondary/30 hover:border-secondary",
      badgeText: "Futuro & IA 🔥",
      cardBorderHover: "hover:border-secondary/40"
    }
  };

  return (
    <section id="servicos" className="py-20 px-4 bg-deep-800 text-white relative">
      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-xs uppercase tracking-widest block mb-2">Cursos Disponíveis</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
            Aulas Personalizadas para Suas Necessidades
          </h2>
          <p className="text-text-muted text-sm sm:text-base">
            Escolha uma das trilhas abaixo ou monte um plano totalmente personalizado comigo. As aulas são focadas na sua prática.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => {
            const IconComponent = course.icon;
            const theme = colorThemes[course.id] || colorThemes.basico;
            const encodedMessage = encodeURIComponent(course.message);
            const waUrl = `https://wa.me/5592993730335?text=${encodedMessage}`;

            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-deep-900 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:-translate-y-1 ${theme.cardBorderHover} transition-all duration-300 flex flex-col justify-between shadow-xl relative overflow-hidden`}
              >
                <div>
                  {/* Badge */}
                  <div className="flex justify-between items-start mb-5">
                    <div className={`p-3 ${theme.iconBg} rounded-xl border`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${theme.badge}`}>
                      {theme.badgeText}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight mb-3">
                    {course.title}
                  </h3>

                  {/* Benefit */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic">
                    "{course.benefit}"
                  </p>

                  {/* Inclusions */}
                  <div className="border-t border-gray-800/80 pt-5 mb-8">
                    <span className="text-xs font-semibold uppercase tracking-wider block mb-3 opacity-80">
                      O que vamos aprender:
                    </span>
                    <ul className="space-y-2.5">
                      {course.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-400">
                          <Check className={`w-4 h-4 ${theme.checkIcon} mt-0.5 flex-shrink-0`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 ${theme.btn} font-semibold rounded-xl text-center transition duration-300 active-press flex items-center justify-center gap-2 min-h-[48px]`}
                >
                  <MessageSquare className="w-4 h-4" />
                  Quero saber mais
                </a>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
