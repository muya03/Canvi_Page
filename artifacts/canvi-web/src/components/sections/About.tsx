import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function About() {
  const { t } = useLanguage();

  const points = [
    t("about.point1"),
    t("about.point2"),
    t("about.point3"),
    t("about.point4"),
  ];

  return (
    <section id="nosotros" className="py-24 relative bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title text-primary">{t("about.badge")}</h2>
            <h3 className="section-header text-secondary dark:text-foreground">{t("about.title")}</h3>
            <div className="accent-bar bg-primary"></div>
            
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              {t("about.p1")}
            </p>
            <p className="text-lg text-foreground mb-10 leading-relaxed">
              {t("about.p2")}
            </p>
            
            <div className="space-y-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground font-semibold">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="bg-muted p-8 md:p-10 rounded-xl border border-border shadow-sm">
              <h4 className="font-display font-bold text-2xl uppercase tracking-wider text-secondary dark:text-foreground mb-8">
                {t("about.experience.title")}
              </h4>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-1 before:bg-border">
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-background bg-primary absolute left-0 md:left-1/2 -translate-x-1/2 shrink-0"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] ml-8 md:ml-0 p-4 bg-background border border-border rounded-lg shadow-sm">
                    <h5 className="font-bold text-lg mb-1">{t("about.experience.1.title")}</h5>
                    <p className="text-muted-foreground text-sm">{t("about.experience.1.desc")}</p>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-background bg-primary absolute left-0 md:left-1/2 -translate-x-1/2 shrink-0"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] ml-8 md:ml-0 p-4 bg-background border border-border rounded-lg shadow-sm">
                    <h5 className="font-bold text-lg mb-1">{t("about.experience.2.title")}</h5>
                    <p className="text-muted-foreground text-sm">{t("about.experience.2.desc")}</p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-5 h-5 rounded-full border-4 border-background bg-primary absolute left-0 md:left-1/2 -translate-x-1/2 shrink-0"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] ml-8 md:ml-0 p-4 bg-background border border-border rounded-lg shadow-sm">
                    <h5 className="font-bold text-lg mb-1">{t("about.experience.3.title")}</h5>
                    <p className="text-muted-foreground text-sm">{t("about.experience.3.desc")}</p>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}