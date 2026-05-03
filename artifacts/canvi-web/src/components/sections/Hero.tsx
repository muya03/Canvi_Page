import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-16 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            className="flex flex-col items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-sm font-display font-bold tracking-widest uppercase text-sm mb-6">
              {t("hero.badge")}
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl font-black leading-[1.0] tracking-tighter mb-6 text-secondary dark:text-foreground font-display">
              {t("hero.title1")} <br />
              <span className="text-foreground dark:text-primary">{t("hero.title2")}</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-lg mb-10 font-medium leading-relaxed">
              {t("hero.subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-wider rounded-sm px-8 py-6 h-auto text-base w-full"
                asChild
              >
                <Link href="/propuestas">{t("hero.cta.primary")}</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-secondary text-secondary hover:bg-secondary hover:text-white dark:border-primary dark:text-primary dark:hover:bg-primary dark:hover:text-primary-foreground font-display font-bold uppercase tracking-wider rounded-sm px-8 py-6 h-auto text-base transition-colors w-full"
                asChild
              >
                <Link href="/quienes-somos">{t("hero.cta.secondary")}</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div 
            className="hidden lg:flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <img 
              src={`${import.meta.env.BASE_URL}canvi-logo-parcial.png`}
              alt="Canvi C Logo" 
              className="w-full max-w-[500px] h-auto object-contain"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
