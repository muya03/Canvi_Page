import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

export default function QuienesSomosPage() {
  const { t } = useLanguage();

  const teamMembers = [
    { initials: "MH", name: "Mohamed Al Howaidi", role: "Portavoz / Candidato", bio: "Liderando la candidatura de Canvi para 2026." },
    { initials: "M2", name: "Maria Garcia", role: "Delegada de Centre FCHS", bio: "Representando los intereses de Ciencias Humanas y Sociales." },
    { initials: "M3", name: "Carlos Perez", role: "Delegat de Centre FCJE", bio: "Defendiendo los derechos en Ciencias Jurídicas y Económicas." },
    { initials: "M4", name: "Laura Martinez", role: "Coordinadora de Grau", bio: "Garantizando una coordinación fluida entre estudiantes y profesores." },
    { initials: "M5", name: "Joan Fabra", role: "Membre del Consell", bio: "Voz activa en el máximo órgano de representación estudiantil." },
    { initials: "M6", name: "Ana Torres", role: "Responsable de Comunicació", bio: "Manteniendo informada a toda la comunidad universitaria." },
  ];

  const milestones = [
    { year: t("page.about.timeline.1.year"), desc: t("page.about.timeline.1.desc") },
    { year: t("page.about.timeline.2.year"), desc: t("page.about.timeline.2.desc") },
    { year: t("page.about.timeline.3.year"), desc: t("page.about.timeline.3.desc") },
    { year: t("page.about.timeline.4.year"), desc: t("page.about.timeline.4.desc") },
    { year: t("page.about.timeline.5.year"), desc: t("page.about.timeline.5.desc") },
  ];

  const associations = [
    "UJI Motorsport", "Hackerspace", "AESCA", "ESN", "La Plantilla", "SAÓ", "@informerjaumei"
  ];

  return (
    <PageLayout 
      title={t("page.about.header.title")} 
      subtitle={t("page.about.header.subtitle")} 
      badge={t("about.badge")}
    >
      {/* Nuestra Historia */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-header text-secondary dark:text-foreground text-center">{t("page.about.history.title")}</h2>
            <div className="accent-bar bg-primary mx-auto mb-10"></div>
            
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>{t("page.about.history.p1")}</p>
              <p>{t("page.about.history.p2")}</p>
              <p>{t("page.about.history.p3")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.about.team.title")}</h2>
            <div className="accent-bar bg-primary mx-auto"></div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card p-8 rounded-xl border border-border shadow-sm text-center flex flex-col items-center hover:border-primary/50 transition-colors"
              >
                <div className="w-24 h-24 rounded-full bg-primary/10 text-primary flex items-center justify-center text-2xl font-bold font-display tracking-widest mb-6">
                  {member.initials}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-sm font-bold uppercase tracking-wider text-primary mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Trayectoria */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.about.timeline.title")}</h2>
            <div className="accent-bar bg-primary mx-auto"></div>
          </motion.div>

          <div className="relative border-l-4 border-muted ml-4 md:ml-1/2">
            {milestones.map((ms, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="mb-10 ml-8 relative"
              >
                <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
                  <span className="text-primary font-bold font-display text-2xl tracking-tight block mb-2">{ms.year}</span>
                  <p className="text-foreground text-lg font-medium">{ms.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestras Asociaciones */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.about.associations.title")}</h2>
            <div className="accent-bar bg-primary mx-auto"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {associations.map((assoc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-background px-8 py-4 rounded-full border border-border shadow-sm text-foreground font-bold font-display uppercase tracking-wider hover:border-primary hover:text-primary transition-colors cursor-default"
              >
                {assoc}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-10 tracking-tight text-white">
              {t("page.about.cta.title")}
            </h2>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-display font-bold uppercase tracking-wider rounded-sm px-10 py-7 h-auto text-lg shadow-xl" asChild>
              <Link href="/unete">{t("nav.unete")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
}
