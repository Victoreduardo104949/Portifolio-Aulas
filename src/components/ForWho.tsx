import { motion } from "motion/react";
import { Target, Briefcase, GraduationCap, Search, LucideIcon } from "lucide-react";

interface AudienceProfile {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  badge: string;
}

export default function ForWho() {
  const profiles: AudienceProfile[] = [
    {
      id: "iniciantes",
      title: "Iniciantes",
      icon: Target,
      description: "Nunca ligou um computador? Sem problemas. Aulas passo a passo, do zero, com paciência e didática no seu ritmo.",
      badge: "Para Todas as Idades"
    },
    {
      id: "profissionais",
      title: "Profissionais",
      icon: Briefcase,
      description: "Quer se atualizar ou aprender ferramentas específicas para o mercado de trabalho? Temos trilhas focadas em produtividade rápida.",
      badge: "Foco no Mercado"
    },
    {
      id: "estudantes",
      title: "Estudantes",
      icon: GraduationCap,
      description: "Reforce seu aprendizado escolar ou prepare-se para a faculdade com conhecimentos sólidos em tecnologia e ferramentas acadêmicas.",
      badge: "Sucesso Acadêmico"
    },
    {
      id: "curiosos",
      title: "Curiosos",
      icon: Search,
      description: "Inteligência Artificial, automação, programação — se você tem vontade de aprender novidades, eu te mostro o caminho prático.",
      badge: "Futuro & IA"
    }
  ];

  const profileThemes: Record<string, {
    iconStyle: string;
    badgeStyle: string;
    borderHover: string;
    lineColor: string;
  }> = {
    iniciantes: {
      iconStyle: "bg-emerald-accent/5 text-emerald-accent border-emerald-accent/10 group-hover:bg-emerald-accent group-hover:text-deep-900",
      badgeStyle: "text-emerald-accent bg-emerald-accent/10 border-emerald-accent/20",
      borderHover: "hover:border-emerald-accent/30",
      lineColor: "bg-emerald-accent"
    },
    profissionais: {
      iconStyle: "bg-indigo-accent/5 text-indigo-accent border-indigo-accent/10 group-hover:bg-indigo-accent group-hover:text-white",
      badgeStyle: "text-indigo-accent bg-indigo-accent/10 border-indigo-accent/20",
      borderHover: "hover:border-indigo-accent/30",
      lineColor: "bg-indigo-accent"
    },
    estudantes: {
      iconStyle: "bg-purple-accent/5 text-purple-accent border-purple-accent/10 group-hover:bg-purple-accent group-hover:text-white",
      badgeStyle: "text-purple-accent bg-purple-accent/10 border-purple-accent/20",
      borderHover: "hover:border-purple-accent/30",
      lineColor: "bg-purple-accent"
    },
    curiosos: {
      iconStyle: "bg-secondary/5 text-secondary-light border-secondary/10 group-hover:bg-secondary group-hover:text-deep-900",
      badgeStyle: "text-secondary-light bg-secondary/10 border-secondary/20",
      borderHover: "hover:border-secondary/30",
      lineColor: "bg-secondary"
    }
  };

  return (
    <section id="publico" className="py-20 px-4 bg-deep-900 text-white relative">
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-accent-dark/5 rounded-full blur-[90px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-xs uppercase tracking-widest block mb-2">Para Quem É?</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
            Aulas Feitas Para Qualquer Perfil
          </h2>
          <p className="text-text-muted text-sm sm:text-base">
            Não importa sua idade ou nível atual de conhecimento. Minhas aulas se moldam ao seu objetivo específico.
          </p>
        </div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profiles.map((profile, index) => {
            const IconComponent = profile.icon;
            const theme = profileThemes[profile.id] || profileThemes.iniciantes;

            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`bg-deep-800 border border-gray-800/80 rounded-2xl p-6 ${theme.borderHover} transition-all duration-300 flex flex-col justify-between group shadow-md`}
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl border ${theme.iconStyle} transition-colors duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md border ${theme.badgeStyle}`}>
                      {profile.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-display tracking-tight mb-3">
                    {profile.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                {/* Micro accent border bottom on hover */}
                <div className={`w-0 h-0.5 ${theme.lineColor} group-hover:w-full transition-all duration-300 mt-6`} />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
