import { useState, useEffect } from "react";
import { Monitor, Menu, X, MessageCircle } from "lucide-react";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ForWho from "./components/ForWho";
import Methodology from "./components/Methodology";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import CTABottom from "./components/CTABottom";

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Cursos", href: "#servicos" },
    { label: "Público", href: "#publico" },
    { label: "Metodologia", href: "#metodologia" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "Perguntas", href: "#faq" },
  ];

  const whatsappUrl = "https://wa.me/5592993730335?text=Ol%C3%A1%2C+professor+Victor%21+Gostaria+de+saber+mais+sobre+as+aulas+particulares+de+inform%C3%A1tica.";

  return (
    <div className="min-h-screen bg-deep-900 text-gray-100 flex flex-col font-sans selection:bg-accent selection:text-deep-900">
      
      {/* Header / Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-deep-900/90 backdrop-blur-md py-4 border-b border-gray-800/60 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="w-full max-w-6xl mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="p-2 bg-accent/10 text-accent rounded-lg border border-accent/20 group-hover:bg-accent group-hover:text-deep-900 transition-colors duration-300">
              <Monitor className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg font-display tracking-tight text-white group-hover:text-accent-light transition-colors">
              Victor Eduardo
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-accent transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Button */}
          <div className="hidden md:block">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-accent hover:bg-accent-dark text-deep-900 font-bold rounded-xl transition-all duration-200 active-press text-sm flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Contato
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-deep-800/80 rounded-lg transition-colors cursor-pointer min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-[73px] bg-deep-900 border-b border-gray-800 shadow-2xl z-30 animate-fadeIn">
            <nav className="flex flex-col p-6 gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-semibold text-gray-300 hover:text-accent py-2 border-b border-gray-800/40 last:border-0"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 mt-2 bg-green-whatsapp hover:bg-green-whatsapp/90 text-white font-bold rounded-xl text-center flex items-center justify-center gap-2 shadow-lg min-h-[56px]"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero />
        <Services />
        <ForWho />
        <Methodology />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom CTA button */}
      <CTABottom />

    </div>
  );
}
