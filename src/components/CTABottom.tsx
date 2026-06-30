import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function CTABottom() {
  const whatsappUrl = "https://wa.me/5592993730335?text=Ol%C3%A1%2C+professor+Victor%21+Gostaria+de+agendar+minha+aula+experimental+de+inform%C3%A1tica+com+voc%C3%AA.";

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-deep-900 via-deep-900/95 to-transparent pointer-events-none flex justify-center">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="w-full max-w-md pointer-events-auto"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          id="cta-sticky-whatsapp"
          className="relative flex items-center justify-center gap-3 w-full bg-green-whatsapp hover:bg-green-whatsapp/95 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-green-whatsapp/20 transition-all duration-300 active-press min-h-[56px]"
          style={{
            marginBottom: "env(safe-area-inset-bottom, 0px)"
          }}
        >
          {/* Pulse effect */}
          <span className="absolute inset-0 rounded-2xl bg-green-whatsapp/30 animate-ping -z-10 pointer-events-none" />
          
          <MessageCircle className="w-6 h-6 animate-pulse" />
          <span className="text-sm sm:text-base font-display tracking-wide">
            Agende sua aula experimental
          </span>
        </a>
      </motion.div>
    </div>
  );
}
