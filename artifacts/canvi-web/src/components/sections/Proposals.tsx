import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, Users, Heart, Bus, Scale, Globe, UserCheck, Monitor
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function Proposals() {
  const { t, tArr } = useLanguage();

  const proposals = [
    { title: t("proposals.1.title"), icon: FileText,   items: tArr("proposals.1.items") },
    { title: t("proposals.2.title"), icon: Users,      items: tArr("proposals.2.items") },
    { title: t("proposals.3.title"), icon: Heart,      items: tArr("proposals.3.items") },
    { title: t("proposals.4.title"), icon: Bus,        items: tArr("proposals.4.items") },
    { title: t("proposals.5.title"), icon: Scale,      items: tArr("proposals.5.items") },
    { title: t("proposals.6.title"), icon: Globe,      items: tArr("proposals.6.items") },
    { title: t("proposals.7.title"), icon: UserCheck,  items: tArr("proposals.7.items") },
    { title: t("proposals.8.title"), icon: Monitor,    items: tArr("proposals.8.items") },
  ];

  return (
    <section id="propuestas" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="section-title text-primary"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t("proposals.badge")}
          </motion.h2>
          <motion.h3 
            className="section-header text-secondary dark:text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t("proposals.title")}
          </motion.h3>
          <div className="accent-bar mx-auto bg-primary"></div>
          <motion.p 
            className="text-xl text-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t("proposals.desc")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {proposals.map((category, idx) => {
            const Icon = category.icon;
            const items = Array.isArray(category.items) ? category.items : [];
            
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (idx % 4) * 0.1 }}
                className="h-full"
              >
                <Card className="h-full bg-card border-border shadow-sm hover:shadow-md transition-shadow rounded-xl overflow-hidden">
                  <CardHeader className="bg-muted border-b border-border pb-5 pt-5 flex flex-row items-center gap-4 space-y-0">
                    <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-primary-foreground shrink-0">
                      <Icon size={20} strokeWidth={2} />
                    </div>
                    <CardTitle className="text-lg font-bold font-sans text-foreground m-0 p-0 leading-tight">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-5">
                    <ul className="space-y-2.5">
                      {items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-foreground text-sm">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <div className="text-center">
          <Button size="lg" className="font-display font-bold uppercase tracking-wider rounded-sm px-8" asChild>
            <Link href="/propuestas">{t("proposals.viewAll")} →</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
