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
      name: "Beatriz Souza, 26 anos",
      role: "Aulas de Photoshop e Illustrator / Social Media",
      text: "Eu trabalhava como assistente e me cobravam muito para criar os posts das redes sociais, mas eu só sabia usar o Canva e tudo ficava meio parecido com a concorrência. Quando comecei as aulas com o Victor, ele me ensinou do zero como dominar o Photoshop e Illustrator de forma prática. Hoje crio minhas próprias artes profissionais, aprendi sobre identidade visual de verdade e até consegui uma grana extra pegando freelas. O método dele é sensacional!",
      rating: 5
    },
    {
      id: "2",
      name: "Roberto Ramos, 34 anos",
      role: "Aulas de Excel Avançado / Analista Financeiro",
      text: "Eu já usava o Excel básico, mas no trabalho o bicho começou a pegar com relatórios bem complexos que eu demorava horas para entregar. Chamei o Victor e ele foi direto ao ponto, sem aquela enrolação de curso tradicional. Ele pegou as minhas próprias planilhas reais do dia a dia e me ensinou a automatizar tudo com PROCV, tabela dinâmica e fórmulas avançadas. A minha produtividade mudou da água para o vinho. O cara é fera demais!",
      rating: 5
    },
    {
      id: "3",
      name: "Ana Júlia Mendes, 21 anos",
      role: "Aulas de Programação & IA / Estudante",
      text: "Comecei as aulas com o Victor porque estava completamente travada na faculdade e desesperada com lógica de programação. Ele desmistificou tudo de um jeito super leve. Além de me ajudar a passar nas matérias, as aulas dele sobre ChatGPT e ferramentas de IA me ajudaram demais a me destacar nas entregas do estágio. Vale cada centavo!",
      rating: 5
    }
  ];

  return (
    <section id="depoimentos" className="py-20 px-4 bg-gradient-to-b from-[#1C1147] to-[#220B3B] text-white relative">
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
