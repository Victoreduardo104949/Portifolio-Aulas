import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export default function Testimonials() {
  // Victor can easily edit this array with his real students' testimonials!
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Dona Maria do Carmo, 68 anos",
      role: "Aulas de Informática Básica / Aposentada",
      text: "Eu tinha pavor de computador, achava que ia estragar só de tocar. Com a paciência e a didática do professor Victor, hoje eu já uso o Windows, navego na internet com segurança e leio meus e-mails. Ele explica tudo com muita calma!",
      rating: 5
    },
    {
      id: "2",
      name: "Roberto Ramos, 34 anos",
      role: "Aulas de Excel Avançado / Analista Financeiro",
      text: "Minha promoção no trabalho dependia de dominar planilhas e relatórios no Excel. O Victor montou uma trilha prática com as fórmulas e atalhos que eu uso no dia a dia. Consegui a vaga e continuo fazendo as aulas de atualização!",
      rating: 5
    },
    {
      id: "3",
      name: "Ana Júlia Mendes, 21 anos",
      role: "Aulas de Programação & IA / Estudante",
      text: "As aulas de lógica de programação e uso de ferramentas de Inteligência Artificial abriram a minha cabeça. O Victor tem um conhecimento técnico enorme, mas traduz de um jeito muito fácil de entender. Recomendo muito!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 bg-deep-900 text-white relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-accent-light/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-xs uppercase tracking-widest block mb-2">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
            O Que Dizem os Alunos
          </h2>
          <p className="text-text-muted text-sm sm:text-base">
            Resultados reais de quem decidiu investir no próprio conhecimento com aulas 100% focadas na prática.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-deep-800 border border-gray-800 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between hover:border-accent/20 transition-all duration-300 shadow-lg"
            >
              <div>
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-accent/10">
                  <Quote className="w-12 h-12 transform scale-x-[-1]" />
                </div>

                {/* Stars Rating */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-secondary text-secondary animate-pulse" style={{ animationDelay: `${i * 150}ms` }} />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 italic relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Student Metadata */}
              <div className="border-t border-gray-700/50 pt-4 mt-2">
                <h4 className="font-bold font-display text-white text-base">
                  {testimonial.name}
                </h4>
                <p className="text-accent-light text-xs font-medium">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Victor Tip Note */}
        <div className="text-center mt-12">
          <p className="text-xs text-text-muted italic">
            Dica para o professor Victor: Este array de depoimentos pode ser editado em qualquer momento no arquivo <span className="text-accent-light font-mono">Testimonials.tsx</span>!
          </p>
        </div>

      </div>
    </section>
  );
}
