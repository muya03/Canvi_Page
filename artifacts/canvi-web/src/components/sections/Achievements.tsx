import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Achievements() {
  const { t } = useLanguage();

  const achievements = [
    t("achievements.1"),
    t("achievements.2"),
    t("achievements.3"),
    t("achievements.4"),
    t("achievements.5")
  ];

  return (
    <section id="logros" className="py-24 bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-primary">{t("achievements.badge")}</h2>
            <h3 className="section-header text-secondary dark:text-foreground">{t("achievements.title")}</h3>
            <div className="accent-bar bg-primary"></div>
            <p className="text-lg text-foreground leading-relaxed">
              {t("achievements.desc")}
            </p>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {achievements.map((item, i) => (
              <div key={i} className="flex items-start gap-4 bg-card p-6 rounded-xl border border-border shadow-sm hover:border-primary/50 transition-colors">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                  <ArrowRight size={16} strokeWidth={3} />
                </div>
                <span className="font-bold text-foreground text-lg leading-tight">{item}</span>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}