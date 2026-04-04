import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Trophy, BookOpen, Users, Heart, Star } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    borderColor: "border-l-purple-600",
    badgeColor: "bg-purple-600",
    titleKey: "page.achievements.cat1.title",
    items: [
      "page.achievements.cat1.1",
      "page.achievements.cat1.2",
      "page.achievements.cat1.3",
      "page.achievements.cat1.4",
      "page.achievements.cat1.5",
      "page.achievements.cat1.6",
      "page.achievements.cat1.7",
      "page.achievements.cat1.8",
      "page.achievements.cat1.9",
      "page.achievements.cat1.10",
      "page.achievements.cat1.11",
      "page.achievements.cat1.12",
      "page.achievements.cat1.13",
      "page.achievements.cat1.14",
      "page.achievements.cat1.15",
    ],
  },
  {
    icon: Users,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
    borderColor: "border-l-orange-500",
    badgeColor: "bg-orange-500",
    titleKey: "page.achievements.cat2.title",
    items: [
      "page.achievements.cat2.1",
      "page.achievements.cat2.2",
      "page.achievements.cat2.3",
      "page.achievements.cat2.4",
      "page.achievements.cat2.5",
      "page.achievements.cat2.6",
      "page.achievements.cat2.7",
      "page.achievements.cat2.8",
    ],
  },
  {
    icon: Star,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    borderColor: "border-l-blue-500",
    badgeColor: "bg-blue-500",
    titleKey: "page.achievements.cat3.title",
    items: [
      "page.achievements.cat3.1",
      "page.achievements.cat3.2",
      "page.achievements.cat3.3",
      "page.achievements.cat3.4",
      "page.achievements.cat3.5",
      "page.achievements.cat3.6",
      "page.achievements.cat3.7",
    ],
  },
  {
    icon: Heart,
    color: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    borderColor: "border-l-green-600",
    badgeColor: "bg-green-600",
    titleKey: "page.achievements.cat4.title",
    items: [
      "page.achievements.cat4.1",
      "page.achievements.cat4.2",
      "page.achievements.cat4.3",
    ],
  },
];

export default function LogrosPage() {
  const { t } = useLanguage();

  return (
    <PageLayout
      title={t("page.achievements.header.title")}
      subtitle={t("page.achievements.header.subtitle")}
      badge={t("achievements.badge")}
    >
      {/* Intro */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl text-foreground leading-relaxed font-medium"
          >
            "{t("page.achievements.intro")}"
          </motion.p>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: Trophy, value: "30+", label: "Logros conseguidos" },
              { icon: BookOpen, value: "15", label: "Mejoras normativas" },
              { icon: Users, value: "1", label: "Legislatura 2024–2026" },
              { icon: Star, value: "4", label: "Delegaciones de centro" },
            ].map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-white/10 border border-white/20 p-6 rounded-xl text-center text-white"
              >
                <Icon size={36} className="mx-auto mb-4 opacity-80" strokeWidth={1.5} />
                <span className="block text-5xl font-black font-display tracking-tighter mb-1">{value}</span>
                <span className="text-sm font-bold uppercase tracking-wider opacity-85">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categorías de logros */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {categories.map((cat, ci) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
              >
                {/* Cabecera de categoría */}
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${cat.color}`}>
                    <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black font-display text-secondary dark:text-foreground leading-tight">
                      {t(cat.titleKey)}
                    </h2>
                    <p className="text-sm font-bold uppercase tracking-wider text-muted-foreground mt-1">
                      {cat.items.length} logros · Legislatura 2024–2026
                    </p>
                  </div>
                </div>

                {/* Lista de logros */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cat.items.map((key, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className={`bg-card border border-border border-l-4 ${cat.borderColor} p-4 rounded-lg shadow-sm flex items-start gap-3`}
                    >
                      <span className={`mt-1 w-6 h-6 rounded-full ${cat.badgeColor} text-white flex items-center justify-center text-xs font-black shrink-0`}>
                        {i + 1}
                      </span>
                      <p className="font-medium text-foreground leading-snug">{t(key)}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-header text-secondary dark:text-foreground mb-4">
              Tu apoyo hace posible el cambio
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Todo esto lo hemos conseguido juntos. Con tu voto en mayo de 2026, seguiremos trabajando por una UJI mejor.
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-wider rounded-sm px-8 py-6 h-auto text-base"
              asChild
            >
              <Link href="/unete">{t("nav.unete")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
