import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Home, Star, ArrowRight, Trophy } from "lucide-react";

export function HomeBonoHighlight() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden border-2 border-primary shadow-2xl shadow-primary/10 bg-secondary"
        >
          <div className="p-8 md:p-12 lg:p-14">
            <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-5">
                  <Star size={15} className="text-primary fill-primary" />
                  <span className="text-primary font-black font-display uppercase tracking-widest text-sm">
                    {t("page.achievements.bono.badge")}
                  </span>
                </div>
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0 mt-1">
                    <Home size={24} />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black font-display text-white leading-tight">
                    {t("page.achievements.bono.title")}
                  </h2>
                </div>
                <p className="text-white/75 text-lg leading-relaxed mb-3">
                  {t("page.achievements.bono.desc")}
                </p>
                <p className="text-white/55 leading-relaxed mb-8">
                  {t("page.achievements.bono.detail")}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-wider rounded-sm px-7 py-4 h-auto"
                  >
                    <Link href="/logros">
                      <Trophy size={16} className="mr-2" />
                      {t("home.bono.cta.logros")}
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 font-display font-bold uppercase tracking-wider rounded-sm px-7 py-4 h-auto"
                  >
                    <Link href="/planes/vivienda">
                      <ArrowRight size={16} className="mr-2" />
                      {t("home.bono.cta.plan")}
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Stats */}
              <div className="flex flex-row lg:flex-col gap-4 lg:w-52 shrink-0">
                <div className="bg-primary/15 border-2 border-primary/40 rounded-2xl p-6 text-center flex-1 lg:flex-none">
                  <span className="block text-5xl font-black text-primary font-display leading-none mb-2">400K€</span>
                  <span className="text-white/65 text-sm leading-snug">Partida exclusiva para Castellón</span>
                </div>
                <div className="bg-white/8 border border-white/10 rounded-2xl p-5 text-center flex-1 lg:flex-none">
                  <span className="block text-3xl font-black text-primary font-display leading-none mb-1">1er</span>
                  <span className="text-white/55 text-sm leading-snug">Bono alquiler joven exclusivo de la ciudad</span>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
