import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: "duracao",
      question: "Quanto tempo dura cada aula?",
      answer: "Cada aula dura entre 1h e 1h30. Esse tempo é ideal para garantir que o conteúdo seja assimilado de forma prática, sem cansar o aluno ou sobrecarregá-lo com informações."
    },
    {
      id: "computador",
      question: "Preciso ter meu próprio computador?",
      answer: "O ideal é que você tenha seu próprio computador (notebook ou desktop) para que possamos configurar suas ferramentas reais e para que você possa praticar livremente entre as aulas. Porém, se você ainda não tem, podemos dar os primeiros passos juntos e eu posso te auxiliar na escolha e compra do seu computador ideal."
    },
    {
      id: "preco",
      question: "Quanto custa o serviço de aulas particulares?",
      answer: "O valor é calculado sob consulta e é extremamente justo. Ele depende da carga horária contratada (por exemplo, planos mensais de 1 ou 2 vezes por semana) e da região para deslocamento presencial. Ofereço planos personalizados para caber no seu orçamento."
    },
    {
      id: "regiao",
      question: "Atende em qual região?",
      answer: "Atendo presencialmente em Manaus e em partes selecionadas da Região Metropolitana. Vou até a sua residência ou escritório com total comodidade e segurança para você."
    },
    {
      id: "nunca-usei",
      question: "Nunca usei computador antes. Consigo aprender?",
      answer: "Com certeza! Minha maior especialidade é ensinar iniciantes e pessoas de todas as idades que nunca tiveram contato prévio com tecnologia. Uso uma linguagem simples, paciente, sem termos difíceis e sempre respeitando o seu tempo."
    },
    {
      id: "escolher",
      question: "Posso escolher exatamente o que quero aprender?",
      answer: "Sim! Diferente de escolas de informática tradicionais com cronogramas engessados, nossas aulas são totalmente personalizadas. Se você quer aprender apenas a preencher planilhas no Excel, a organizar seus arquivos, a usar o ChatGPT para acelerar seus estudos ou apenas a navegar de forma segura na internet, nós focamos exatamente nisso!"
    }
  ];

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 bg-deep-800 text-white relative">
      <div className="absolute top-1/2 left-10 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-3xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-accent font-semibold text-xs uppercase tracking-widest block mb-2">Dúvidas Comuns</span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-text-muted text-sm">
            Tem alguma dúvida sobre o funcionamento das aulas de informática? Confira as respostas abaixo.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className="bg-deep-900 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-accent/20"
              >
                {/* Trigger Header */}
                <button
                  onClick={() => toggleItem(item.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 flex items-center justify-between text-left gap-4 font-semibold text-base sm:text-lg hover:text-accent-light transition-colors duration-200 cursor-pointer min-h-[56px] focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span>{item.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-text-muted transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-0 text-sm sm:text-base text-gray-400 border-t border-gray-800/50 leading-relaxed">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* FAQ Visual Support Banner */}
        <div className="mt-12 text-center bg-deep-900/60 rounded-2xl border border-gray-800 p-6">
          <p className="text-sm text-gray-400">
            Ainda tem alguma outra dúvida específica?
          </p>
          <a
            href="https://wa.me/5592993730335?text=Ol%C3%A1%2C+Victor%21+Tenho+uma+pergunta+espec%C3%ADfica+sobre+as+aulas+que+n%C3%A3o+est%C3%A1+no+FAQ."
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-light text-sm font-semibold underline mt-2 inline-block transition"
          >
            Fale direto comigo no WhatsApp e tire suas dúvidas!
          </a>
        </div>

      </div>
    </section>
  );
}
