import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";

export function News() {
  const { t } = useLanguage();

  const news = [
    {
      title: t("news.1.title"),
      date: t("news.1.date"),
      desc: t("news.1.desc"),
      img: "bg-muted-foreground/20"
    },
    {
      title: t("news.2.title"),
      date: t("news.2.date"),
      desc: t("news.2.desc"),
      img: "bg-muted-foreground/20"
    },
    {
      title: t("news.3.title"),
      date: t("news.3.date"),
      desc: t("news.3.desc"),
      img: "bg-muted-foreground/20"
    }
  ];

  return (
    <section id="noticias" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-primary">{t("news.badge")}</h2>
            <h3 className="section-header text-secondary dark:text-foreground mb-0">{t("news.title")}</h3>
            <div className="accent-bar bg-primary mt-6 mb-0"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="font-display font-bold uppercase tracking-wider rounded-sm text-foreground border-border hover:bg-muted" asChild>
              <Link href="/noticias">{t("news.viewAll")} →</Link>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full bg-card border-border shadow-sm hover:shadow-md transition-all overflow-hidden group">
                <div className={`w-full h-48 ${item.img} flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={`${import.meta.env.BASE_URL}canvi-logo-parcial.png`} 
                    alt="Canvi"
                    className="h-24 opacity-20 group-hover:scale-110 transition-transform duration-500 dark:invert"
                  />
                </div>
                <CardHeader className="pb-3 pt-6">
                  <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wider">{item.date}</div>
                  <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
