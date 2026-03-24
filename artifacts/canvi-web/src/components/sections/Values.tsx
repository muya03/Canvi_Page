import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function Values() {
  const { t } = useLanguage();

  const values = [
    {
      title: t("values.1.title"),
      desc: t("values.1.desc"),
    },
    {
      title: t("values.2.title"),
      desc: t("values.2.desc"),
    },
    {
      title: t("values.3.title"),
      desc: t("values.3.desc"),
    },
    {
      title: t("values.4.title"),
      desc: t("values.4.desc"),
    }
  ];

  return (
    <section className="py-24 bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-header text-secondary dark:text-foreground">{t("values.title")}</h2>
          <div className="accent-bar mx-auto bg-primary"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={i}
              className="bg-card p-8 rounded-xl border border-border border-t-4 border-t-primary shadow-sm h-full flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-foreground mb-4">{val.title}</h3>
              <p className="text-muted-foreground leading-relaxed flex-1">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}