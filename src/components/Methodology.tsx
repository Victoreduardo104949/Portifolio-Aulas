import { motion } from "motion/react";
import { ClipboardList, Settings, TrendingUp, ArrowRight, LucideIcon } from "lucide-react";

interface Step {
  number: string;
  title: string;
  icon: LucideIcon;
  description: string;
}

export default function Methodology() {
  const steps: Step[] = [
    {
      number: "01",
      title: "Diagnóstico",
      icon: ClipboardList,
      description: "Converso com você para entender seu nível atual, objetivos e desafios. Nada de apostilas engessadas ou conteúdo genérico."
    },
    {
      number: "02",
      title: "Plano Sob Medida",
      icon: Settings,
      description: "Monto um cronograma de aulas focado exatamente no que você precisa e deseja aprender, no seu próprio ritmo de aprendizado."
    },
    {
      number: "03",
      title: "Acompanhamento",
      icon: TrendingUp,
      description: "Aulas presenciais práticas com suporte contínuo para tirar dúvidas, exercícios e acompanhamento constante da sua evolução."
    }
  ];

  return (
    <section id="metodologia" className="py-20 px-4 bg-deep-800 text-white relative">
      {/* Background circle */}
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-xs uppercase tracking-widest block mb-2">Como Funciona?</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
            Metodologia Sem Complicação
          </h2>
          <p className="text-text-muted text-sm sm:text-base">
            O aprendizado de informática de forma humana e descomplicada em 3 passos simples.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;

            return (
              <div key={step.number} className="relative flex flex-col items-center md:items-start text-center md:text-left">
                {/* Connector line for desktop */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-accent/40 via-secondary/20 to-transparent z-0" />
                )}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative z-10 flex flex-col items-center md:items-start group w-full"
                >
                  {/* Step Number Badge */}
                  <span className="text-6xl font-extrabold font-display text-accent/15 tracking-tighter absolute -top-8 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 group-hover:text-secondary/20 transition-colors duration-300">
                    {step.number}
                  </span>

                  {/* Icon Frame */}
                  <div className="relative mb-6 p-4 bg-deep-900 border border-gray-700/80 rounded-2xl text-accent shadow-lg group-hover:border-secondary/40 group-hover:text-secondary-light transition-colors duration-300">
                    <IconComponent className="w-8 h-8" />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display tracking-tight mb-3 group-hover:text-accent-light transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Big visual banner with CTA to experimental class */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-deep-900 via-deep-900 to-deep-900/40 border border-gray-800/80 hover:border-secondary/20 rounded-2xl p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-6 shadow-xl transition-all duration-300"
        >
          <div className="text-center sm:text-left">
            <h4 className="text-lg sm:text-xl font-bold font-display tracking-tight mb-2 text-white">
              Que tal começar com um diagnóstico <span className="text-secondary-light font-bold">100% gratuito</span>?
            </h4>
            <p className="text-text-muted text-xs sm:text-sm">
              Vamos conversar sem compromisso para montar o seu plano personalizado de informática.
            </p>
          </div>
          <a
            href="https://wa.me/5592993730335?text=Ol%C3%A1%2C+Victor%21+Gostaria+de+agendar+o+meu+diagn%C3%B3stico+gratuito+de+inform%C3%A1tica."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-gradient-to-r from-accent to-secondary hover:from-accent-dark hover:to-secondary-dark text-deep-900 hover:text-white font-bold rounded-xl transition-all duration-300 active-press whitespace-nowrap flex items-center gap-2 text-sm shadow-md"
          >
            Começar Agora
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
