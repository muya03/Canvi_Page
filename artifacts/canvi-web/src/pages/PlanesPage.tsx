import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Home, ArrowRight, Download, BookOpen, Star } from "lucide-react";

const base = import.meta.env.BASE_URL;

const plans = [
  {
    slug: "vivienda",
    featured: true,
    title: "Plan de Vivienda Estudiantil",
    date: "Abril 2026",
    pages: 14,
    icon: Home,
    summary: "Análisis de la crisis habitacional en Castellón y propuestas concretas para garantizar el derecho a un techo digno: regulación del mercado, nueva Oficina de Vivienda, modelo cooperativo, Pisos Solidaris y hoja de ruta institucional en 3 fases.",
    pdf: `${base}planes-vivienda.pdf`,
    tags: ["Vivienda", "Mercado Alquiler", "Cooperativa", "Bienestar"],
    stats: [
      { value: "+18,82%", label: "Subida de precios en el Raval 2024–2026" },
      { value: "14.000", label: "Estudiantes afectados en la UJI" },
      { value: "3 Fases", label: "Hoja de ruta del CEUJI" },
    ],
  },
];

export default function PlanesPage() {
  const { t } = useLanguage();

  return (
    <PageLayout
      title="Plans d'Execució"
      subtitle="Més que promeses: documents tècnics avalats per dades, amb mesures concretes i una hoja de ruta clar."
      badge="Documents Tècnics"
    >
      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-muted-foreground leading-relaxed"
          >
            En Canvi no fem promeses buides. Cada pla és un document real, amb dades, propostes i calendari d'execució. Açò és el que significa governar el CEUJI amb rigor.
          </motion.p>
        </div>
      </section>

      {/* Plans listing */}
      <section className="pb-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {plans.map((plan, pi) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={pi}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pi * 0.1 }}
              >
                {plan.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star size={16} className="text-primary fill-primary" />
                    <span className="text-primary font-black font-display uppercase tracking-widest text-sm">
                      {t("page.plans.featured")}
                    </span>
                  </div>
                )}
                <div className={`rounded-2xl overflow-hidden border-2 ${plan.featured ? "border-primary shadow-lg shadow-primary/10" : "border-border"}`}>
                  <div className={`p-8 md:p-10 ${plan.featured ? "bg-secondary" : "bg-card"}`}>
                    <div className="flex flex-col md:flex-row gap-8">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${plan.featured ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"}`}>
                            <Icon size={20} />
                          </div>
                          <span className={`text-xs font-bold uppercase tracking-widest ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}>
                            {plan.date} · {plan.pages} pàgines
                          </span>
                        </div>
                        <h3 className={`text-2xl md:text-3xl font-black font-display mb-4 leading-tight ${plan.featured ? "text-white" : "text-secondary dark:text-foreground"}`}>
                          {plan.title}
                        </h3>
                        <p className={`leading-relaxed mb-5 ${plan.featured ? "text-white/75" : "text-muted-foreground"}`}>
                          {plan.summary}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {plan.tags.map((tag, ti) => (
                            <span key={ti} className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${plan.featured ? "text-white/60 bg-white/10 border-white/10" : "text-muted-foreground bg-muted border-border"}`}>
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-wider rounded-sm px-6 py-4 h-auto">
                            <Link href={`/planes/${plan.slug}`}>
                              <ArrowRight size={16} className="mr-2" />
                              Llegir el pla
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className={`font-display font-bold uppercase tracking-wider rounded-sm px-6 py-4 h-auto ${plan.featured ? "border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50" : ""}`}>
                            <a href={plan.pdf} target="_blank" rel="noopener noreferrer" download>
                              <Download size={16} className="mr-2" />
                              Descargar PDF
                            </a>
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-row md:flex-col gap-3 md:w-48 shrink-0 justify-start md:justify-center">
                        {plan.stats.map((stat, si) => (
                          <div key={si} className={`rounded-xl p-4 text-center border flex-1 md:flex-none ${plan.featured ? "bg-white/10 border-white/10" : "bg-muted border-border"}`}>
                            <span className="block text-2xl font-black text-primary font-display leading-none mb-1">{stat.value}</span>
                            <span className={`text-xs leading-snug ${plan.featured ? "text-white/60" : "text-muted-foreground"}`}>{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border-2 border-dashed border-border rounded-2xl p-10 text-center"
          >
            <BookOpen size={32} className="text-muted-foreground mx-auto mb-4" strokeWidth={1.5} />
            <p className="text-lg font-bold text-muted-foreground mb-1">Més plans en elaboració</p>
            <p className="text-sm text-muted-foreground">
              Contacta'ns si vols contribuir:{" "}
              <a href="mailto:info@canvi.es" className="text-primary hover:underline">info@canvi.es</a>
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
