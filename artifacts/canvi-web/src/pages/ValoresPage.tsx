import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { useLanguage } from "@/context/LanguageContext";
import { Check } from "lucide-react";

export default function ValoresPage() {
  const { t } = useLanguage();

  return (
    <PageLayout 
      title={t("page.values.header.title")} 
      subtitle={t("page.values.header.subtitle")} 
      badge={t("values.title")}
    >
      {/* Filosofía general */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-xl text-foreground leading-relaxed font-medium"
          >
            <p>{t("page.values.intro.p1")}</p>
            <p>{t("page.values.intro.p2")}</p>
            <p>{t("page.values.intro.p3")}</p>
          </motion.div>
        </div>
      </section>

      {/* 4 valores expandidos */}
      <section className="py-0">
        
        {/* INDEPENDENCIA */}
        <div className="py-24 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-9xl font-black font-display text-border/40 select-none -mb-10 ml-[-10px]">01</div>
                <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-foreground mb-6 uppercase tracking-tighter">{t("values.1.title")}</h2>
                <div className="w-16 h-2 bg-primary mb-8 rounded-full"></div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {t("page.values.val1.desc")}
                </p>
                <div className="bg-card p-6 border-l-4 border-l-primary rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Aplicación Real:</h4>
                  <p className="text-muted-foreground">Durante la huelga de transportes, pudimos exigir directamente a las administraciones correspondientes sin preocuparnos por colores políticos.</p>
                </div>
              </motion.div>
              <div className="hidden lg:block relative h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden border border-border">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* EXPERIENCIA */}
        <div className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="hidden lg:block order-2 lg:order-1 relative h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden border border-border">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="text-9xl font-black font-display text-border/40 select-none -mb-10 ml-[-10px]">02</div>
                <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-foreground mb-6 uppercase tracking-tighter">{t("values.2.title")}</h2>
                <div className="w-16 h-2 bg-primary mb-8 rounded-full"></div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {t("page.values.val2.desc")}
                </p>
                <div className="bg-card p-6 border-l-4 border-l-primary rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Aplicación Real:</h4>
                  <p className="text-muted-foreground">Logramos adelantar la apertura 24h de la biblioteca porque conocíamos exactamente los plazos administrativos y los responsables con los que había que negociar.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* REALISMO */}
        <div className="py-24 bg-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="text-9xl font-black font-display text-border/40 select-none -mb-10 ml-[-10px]">03</div>
                <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-foreground mb-6 uppercase tracking-tighter">{t("values.3.title")}</h2>
                <div className="w-16 h-2 bg-primary mb-8 rounded-full"></div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {t("page.values.val3.desc")}
                </p>
                <div className="bg-card p-6 border-l-4 border-l-primary rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Aplicación Real:</h4>
                  <p className="text-muted-foreground">Nuestro programa 2026 solo contiene propuestas que han sido visadas por expertos legales de la universidad para asegurar que ninguna es papel mojado.</p>
                </div>
              </motion.div>
              <div className="hidden lg:block relative h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden border border-border">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]"></div>
              </div>
            </div>
          </div>
        </div>

        {/* TRANSPARENCIA */}
        <div className="py-24 bg-background border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="hidden lg:block order-2 lg:order-1 relative h-full min-h-[300px] rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/20 overflow-hidden border border-border">
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNjdXJyZW50Q29sb3IiLz48L3N2Zz4=')]"></div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-1 lg:order-2"
              >
                <div className="text-9xl font-black font-display text-border/40 select-none -mb-10 ml-[-10px]">04</div>
                <h2 className="text-4xl md:text-5xl font-black text-secondary dark:text-foreground mb-6 uppercase tracking-tighter">{t("values.4.title")}</h2>
                <div className="w-16 h-2 bg-primary mb-8 rounded-full"></div>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  {t("page.values.val4.desc")}
                </p>
                <div className="bg-card p-6 border-l-4 border-l-primary rounded-r-lg shadow-sm">
                  <h4 className="font-bold text-lg mb-2">Aplicación Real:</h4>
                  <p className="text-muted-foreground">Publicamos mensualmente en nuestras redes un resumen de las reuniones a las que hemos asistido y el estado de tramitación de cada iniciativa.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* El modelo Canvi */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black font-display mb-6 tracking-tight text-white leading-none">
              {t("page.values.model.title")}
            </h2>
            <p className="text-2xl font-medium text-white/90">
              {t("page.values.model.desc")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparativa */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.values.compare.title")}</h2>
            <div className="accent-bar bg-primary mx-auto"></div>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-2 bg-muted border-b border-border">
              <div className="p-6 text-center border-r border-border">
                <h3 className="text-2xl font-black font-display text-primary">CANVI</h3>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-muted-foreground">Otros Grupos</h3>
              </div>
            </div>
            
            <div className="divide-y divide-border">
              <div className="grid grid-cols-2 hover:bg-muted/30 transition-colors">
                <div className="p-6 border-r border-border flex items-center gap-3">
                  <Check className="text-primary shrink-0" />
                  <span className="font-semibold text-foreground">Sin vinculación a partidos políticos</span>
                </div>
                <div className="p-6 flex items-center text-muted-foreground">
                  Vinculados a juventudes de partidos
                </div>
              </div>
              <div className="grid grid-cols-2 hover:bg-muted/30 transition-colors">
                <div className="p-6 border-r border-border flex items-center gap-3">
                  <Check className="text-primary shrink-0" />
                  <span className="font-semibold text-foreground">Propuestas consultadas con estudiantes</span>
                </div>
                <div className="p-6 flex items-center text-muted-foreground">
                  Propuestas decididas de arriba a abajo
                </div>
              </div>
              <div className="grid grid-cols-2 hover:bg-muted/30 transition-colors">
                <div className="p-6 border-r border-border flex items-center gap-3">
                  <Check className="text-primary shrink-0" />
                  <span className="font-semibold text-foreground">Transparencia y rendición de cuentas</span>
                </div>
                <div className="p-6 flex items-center text-muted-foreground">
                  Opacidad en la gestión
                </div>
              </div>
              <div className="grid grid-cols-2 hover:bg-muted/30 transition-colors">
                <div className="p-6 border-r border-border flex items-center gap-3">
                  <Check className="text-primary shrink-0" />
                  <span className="font-semibold text-foreground">Experiencia real y demostrada en UJI</span>
                </div>
                <div className="p-6 flex items-center text-muted-foreground">
                  Falta de experiencia previa
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
