import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Home, BookOpen, ArrowRight } from "lucide-react";

const base = import.meta.env.BASE_URL;

export function HomePlansTeaser() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-secondary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-14 items-center">

          {/* Left: text */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} className="text-primary" />
              <span className="section-title text-primary">{t("home.plans.badge")}</span>
            </div>
            <h2 className="section-header text-white leading-tight mb-4">
              {t("home.plans.title")}
            </h2>
            <div className="accent-bar bg-primary mb-6"></div>
            <p className="text-white/70 text-lg leading-relaxed mb-8">
              {t("home.plans.desc")}
            </p>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-wider rounded-sm px-8 py-5 h-auto"
            >
              <Link href="/planes">
                {t("home.plans.cta")} <ArrowRight size={16} className="ml-2" />
              </Link>
            </Button>
          </motion.div>

          {/* Right: plan card preview */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="rounded-2xl border-2 border-primary shadow-xl shadow-primary/15 overflow-hidden">
              <div className="bg-white/5 border-b border-white/10 p-6 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                  <Home size={18} />
                </div>
                <div>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Abril 2026 · 14 pàgines</p>
                  <p className="text-white font-black font-display text-lg leading-tight">Plan de Vivienda Estudiantil</p>
                </div>
                <span className="ml-auto text-xs font-black font-display text-primary uppercase tracking-wider border border-primary/40 bg-primary/10 px-3 py-1 rounded-full">
                  {t("page.plans.featured")}
                </span>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-white/65 text-sm leading-relaxed">
                  Anàlisi de la crisi habitacional a Castelló i propostes concretes per garantir el dret a un sostre digne: regulació del mercat, nova Oficina d'Habitatge, model cooperatiu i Pisos Solidaris.
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "+18,82%", label: "Pujada preus Raval" },
                    { value: "14.000", label: "Estudiants UJI" },
                    { value: "3 Fases", label: "Full de ruta" },
                  ].map((s, i) => (
                    <div key={i} className="bg-white/8 border border-white/10 rounded-xl p-3 text-center">
                      <span className="block text-lg font-black text-primary font-display leading-none mb-1">{s.value}</span>
                      <span className="text-white/50 text-xs leading-snug">{s.label}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                  {["Vivienda", "Alquiler", "Cooperativa", "Bienestar"].map((tag) => (
                    <span key={tag} className="text-xs font-bold uppercase tracking-wider text-white/50 bg-white/8 border border-white/10 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
