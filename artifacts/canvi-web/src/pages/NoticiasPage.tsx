import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";

export default function NoticiasPage() {
  const { t } = useLanguage();
  const { toast } = useToast();

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
    },
    {
      title: t("page.news.4.title"),
      date: t("page.news.4.date"),
      desc: t("page.news.4.desc"),
      img: "bg-muted-foreground/20"
    },
    {
      title: t("page.news.5.title"),
      date: t("page.news.5.date"),
      desc: t("page.news.5.desc"),
      img: "bg-muted-foreground/20"
    },
    {
      title: t("page.news.6.title"),
      date: t("page.news.6.date"),
      desc: t("page.news.6.desc"),
      img: "bg-muted-foreground/20"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Suscripción completada",
      description: "Te has suscrito a nuestro boletín mensual.",
    });
  };

  return (
    <PageLayout 
      title={t("page.news.header.title")} 
      subtitle={t("page.news.header.subtitle")} 
      badge={t("news.badge")}
    >
      {/* Listado de noticias */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-card border-border shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col group">
                  <div className={`w-full h-56 ${item.img} flex items-center justify-center overflow-hidden relative`}>
                    <img 
                      src={`${import.meta.env.BASE_URL}canvi-logo-parcial.png`} 
                      alt="Canvi"
                      className="h-28 opacity-20 group-hover:scale-110 transition-transform duration-500 dark:invert"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <CardHeader className="pb-3 pt-6 flex-none">
                    <div className="inline-block bg-muted text-muted-foreground px-3 py-1 rounded text-xs font-bold uppercase tracking-wider mb-3">
                      {item.date}
                    </div>
                    <h4 className="text-xl font-bold leading-tight group-hover:text-primary transition-colors">{item.title}</h4>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col justify-between">
                    <p className="text-muted-foreground mb-6 line-clamp-3">{item.desc}</p>
                    <div className="mt-auto">
                      <span className="text-sm font-bold font-display uppercase tracking-wider text-primary group-hover:underline cursor-pointer">
                        {t("nav.ver-mas")} →
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Newsletter signup */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card p-10 md:p-16 rounded-2xl border border-border shadow-sm"
          >
            <h3 className="text-3xl font-black mb-4 text-secondary dark:text-foreground">
              {t("page.news.newsletter.title")}
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Recibe las últimas noticias y actualizaciones sobre nuestras propuestas y logros directamente en tu bandeja de entrada.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico" 
                required 
                className="h-12 bg-background border-border flex-1"
              />
              <Button type="submit" className="h-12 font-display font-bold uppercase tracking-wider rounded-sm px-8 bg-primary hover:bg-primary/90 text-primary-foreground">
                Suscribirse
              </Button>
            </form>
            <p className="text-xs text-muted-foreground mt-4">
              Al suscribirte, aceptas nuestra política de privacidad. No enviamos spam.
            </p>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
}
