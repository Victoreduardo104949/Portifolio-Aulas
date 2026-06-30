import { motion } from "motion/react";
import { ArrowDown, MessageCircle } from "lucide-react";
import avatarImg from "../assets/images/victor_eduardo_avatar_1782780773387.jpg";

export default function Hero() {
  const whatsappUrl = "https://wa.me/5592993730335?text=Ol%C3%A1%2C+professor+Victor%21+Gostaria+de+saber+mais+sobre+as+aulas+particulares+de+inform%C3%A1tica.";

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center items-center px-4 pt-20 pb-16 bg-gradient-to-b from-[#0A1628] via-[#0A1628] to-[#0E1E38] text-white overflow-hidden">
      {/* Background visual accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] bg-purple-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -top-10 -right-10 w-[200px] h-[200px] bg-indigo-accent/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 z-10">
        
        {/* Profile Image Section */}
        <div className="flex flex-col items-center gap-4 flex-shrink-0">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64"
          >
            {/* Animated gradient rings matching the cyan to purple brand gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-accent via-indigo-accent to-purple-accent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            
            <div className="relative w-full h-full bg-deep-800 rounded-2xl overflow-hidden border-2 border-accent/30 p-1">
              <img 
                src={avatarImg} 
                alt="Victor Eduardo - Professor Particular de Informática" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          {/* Active Badge - Placed outside the avatar box */}
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-green-whatsapp/10 border border-green-whatsapp/30 text-green-whatsapp text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-whatsapp opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-whatsapp"></span>
            </span>
            Disponível em Manaus
          </motion.span>
        </div>


        {/* Text and CTAs Section */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3.5 py-1 bg-gradient-to-r from-accent/10 to-secondary/10 border border-accent/20 text-accent-light rounded-full text-xs font-semibold tracking-wide uppercase mb-4"
          >
            Professor Particular de Informática
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-4 font-display"
          >
            Aulas de informática <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-indigo-accent to-purple-accent">
              do básico à IA
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg mb-8"
          >
            Aprenda no seu ritmo, com aulas presenciais personalizadas para sua necessidade — seja você iniciante ou querendo dominar as ferramentas mais modernas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#servicos"
              id="hero-btn-services"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-deep-900 font-bold rounded-xl text-center transition duration-300 active-press shadow-lg shadow-accent/20 min-h-[56px] flex items-center justify-center cursor-pointer"
            >
              Ver cursos
            </a>
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              id="hero-btn-whatsapp"
              className="px-8 py-4 bg-deep-800 hover:bg-deep-800/80 text-white font-semibold rounded-xl text-center border border-gray-700 hover:border-accent transition duration-300 active-press min-h-[56px] flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 text-green-whatsapp" />
              Falar no WhatsApp
            </a>
          </motion.div>
        </div>

      </div>

      {/* Animated Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6, y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.8 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 text-xs text-text-muted cursor-pointer"
        onClick={() => {
          document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>Deslize para ver mais</span>
        <ArrowDown className="w-4 h-4 text-accent" />
      </motion.div>
    </section>
  );
}
