import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export function JoinUs() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle pattern or shape */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 opacity-10 pointer-events-none">
        <svg width="404" height="384" fill="none" viewBox="0 0 404 384">
          <defs>
            <pattern id="d3eb07ae-5182-43e6-857d-35c643af9034" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"></rect>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black font-display mb-6 tracking-tight text-white">{t("join.title")}</h2>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto font-medium text-white/90">
            {t("join.desc")}
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollTo("contacto")}
            className="bg-white text-primary hover:bg-white/90 font-display font-bold uppercase tracking-wider rounded-sm px-10 py-7 h-auto text-lg shadow-xl"
          >
            {t("join.button")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}