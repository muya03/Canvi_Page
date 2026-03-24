import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Trophy, CalendarCheck, ShieldCheck } from "lucide-react";

export default function LogrosPage() {
  const { t } = useLanguage();

  return (
    <PageLayout 
      title={t("page.achievements.header.title")} 
      subtitle={t("page.achievements.header.subtitle")} 
      badge={t("achievements.badge")}
    >
      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl text-foreground leading-relaxed font-medium">
              "{t("page.achievements.intro")}"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Estadísticas de impacto */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl text-center text-white"
            >
              <Trophy size={48} className="mx-auto mb-6 opacity-80" strokeWidth={1.5} />
              <span className="block text-5xl font-black font-display tracking-tighter mb-2">4</span>
              <span className="text-lg font-bold uppercase tracking-wider opacity-90">Delegaciones de centro</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl text-center text-white"
            >
              <CalendarCheck size={48} className="mx-auto mb-6 opacity-80" strokeWidth={1.5} />
              <span className="block text-5xl font-black font-display tracking-tighter mb-2">2</span>
              <span className="text-lg font-bold uppercase tracking-wider opacity-90">Mandatos consecutivos</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl text-center text-white"
            >
              <ShieldCheck size={48} className="mx-auto mb-6 opacity-80" strokeWidth={1.5} />
              <span className="block text-5xl font-black font-display tracking-tighter mb-2">100%</span>
              <span className="text-lg font-bold uppercase tracking-wider opacity-90">Propuestas realistas</span>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Línea del tiempo de logros */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.achievements.timeline.title")}</h2>
            <div className="accent-bar bg-primary mx-auto"></div>
          </motion.div>

          <div className="space-y-12">
            
            {/* 2024 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary text-primary-foreground font-black font-display text-3xl px-4 py-1 rounded-md shadow-sm">2024</div>
                <div className="h-px bg-border flex-1"></div>
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Campaña y victoria</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm border-l-4 border-l-primary flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2024.1")}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm border-l-4 border-l-primary flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2024.2")}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm border-l-4 border-l-primary flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2024.3")}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm border-l-4 border-l-primary flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2024.4")}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm border-l-4 border-l-primary flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2024.5")}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm border-l-4 border-l-primary flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2024.6")}</p>
                </div>
              </div>
            </motion.div>

            {/* 2023 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-muted text-foreground font-black font-display text-3xl px-4 py-1 rounded-md border border-border">2023</div>
                <div className="h-px bg-border flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-muted-foreground shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2023.1")}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-muted-foreground shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2023.2")}</p>
                </div>
              </div>
            </motion.div>

            {/* 2022 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-muted text-foreground font-black font-display text-3xl px-4 py-1 rounded-md border border-border">2022</div>
                <div className="h-px bg-border flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-muted-foreground shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2022.1")}</p>
                </div>
                <div className="bg-card border border-border p-5 rounded-lg shadow-sm flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-muted-foreground shrink-0"></span>
                  <p className="font-medium text-foreground">{t("page.achievements.timeline.2022.2")}</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Compromisos 2026 */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.achievements.commitments.title")}</h2>
            <p className="text-xl text-muted-foreground">
              {t("page.achievements.commitments.desc")}
            </p>
          </motion.div>

          <div className="bg-card p-8 md:p-10 rounded-xl border border-border shadow-md">
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">1</div>
                <span className="text-lg font-medium text-foreground">Referéndum sobre los calendarios de exámenes finales.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">2</div>
                <span className="text-lg font-medium text-foreground">Aulas de estudio 24h/7 días fuera de la biblioteca.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">3</div>
                <span className="text-lg font-medium text-foreground">Menú subvencionado y adaptado a todo tipo de dietas.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">4</div>
                <span className="text-lg font-medium text-foreground">Bono gratuito de transporte para estudiantes universitarios.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">5</div>
                <span className="text-lg font-medium text-foreground">Mayor autonomía y presupuesto para las delegaciones.</span>
              </li>
            </ul>
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-black mb-6">Tu apoyo hace posible el cambio</h3>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-wider rounded-sm px-8 py-6 h-auto text-base" asChild>
              <Link href="/unete">{t("nav.unete")}</Link>
            </Button>
          </div>
        </div>
      </section>

    </PageLayout>
  );
}
