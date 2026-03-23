import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-60 mix-blend-screen"
        />
        {/* Dark gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <motion.div 
            className="lg:col-span-8 flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-white/20 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase">Campaña 2026</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black leading-[1.05] tracking-tight mb-6">
              ¡NECESITAMOS <br />
              <span className="text-gradient from-primary via-purple-400 to-secondary">EL CAMBIO!</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed mb-10">
              Estudiantes para estudiantes en la Universitat Jaume I. 
              Somos el grupo de representación con un historial comprobado 
              de resultados reales.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" onClick={() => scrollTo("propuestas")} className="gap-2 text-lg">
                Ver Propuestas 2026 <ArrowRight size={20} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("nosotros")} className="gap-2 text-lg">
                Conócenos
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="hidden lg:flex lg:col-span-4 justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full max-w-sm">
              <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full"></div>
              <img 
                src={`${import.meta.env.BASE_URL}canvi-logo-parcial.png`}
                alt="Canvi C Logo" 
                className="relative z-10 w-full h-auto drop-shadow-2xl mix-blend-screen"
              />
            </div>
          </motion.div>
          
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button 
        onClick={() => scrollTo("nosotros")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}
