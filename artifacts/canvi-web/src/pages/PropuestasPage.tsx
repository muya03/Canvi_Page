import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { FileText, Users, Heart, Bus, Scale, Globe, UserCheck, Monitor } from "lucide-react";

export default function PropuestasPage() {
  const { t } = useLanguage();

  const categories = [
    {
      title: "Exámenes y Evaluación",
      icon: FileText,
      desc: t("page.proposals.cat1.desc"),
      proposals: [
        { title: "Referéndum sobre calendarios de exámenes finales", desc: "Los estudiantes deben poder decidir sobre sus propios calendarios académicos mediante consulta directa." },
        { title: "Cambiar normativa de evaluación", desc: "Negociaremos reformas para garantizar mayor flexibilidad y justicia en los criterios de evaluación." },
        { title: "Aulas de estudio 24h/7 días", desc: "Apertura de un aulario de estudio fuera del horario de la biblioteca, incluyendo fines de semana y periodos no lectivos." },
        { title: "Calendario académico justo", desc: "Las clases del 2º cuatrimestre finalizarán el miércoles anterior al inicio de exámenes finales." },
        { title: "Tolerancia en retrasos de transporte", desc: "Protocolo claro para estudiantes afectados por retrasos del transporte público en días de examen." },
      ]
    },
    {
      title: "Delegaciones y Representación",
      icon: Users,
      desc: t("page.proposals.cat2.desc"),
      proposals: [
        { title: "Presupuesto propio para delegaciones", desc: "Financiación directa para que las delegaciones de centro puedan desarrollar actividades y representar mejor al estudiantado." },
        { title: "Estructuración y activación del centro", desc: "Apoyo técnico y formativo para mejorar la organización de las delegaciones de cada facultad." },
        { title: "Comisión de asociaciones", desc: "Creación de un órgano para que las asociaciones universitarias tengan voz en las decisiones del Consell." },
        { title: "Autonomía del Consejo", desc: "Blindar la independencia del Consell de l'Estudiantat frente a injerencias externas." },
        { title: "Transparencia y rendición de cuentas", desc: "Portal de transparencia, agenda pública y boletín mensual con toda la actividad del Consell." },
        { title: "Representación en sectoriales", desc: "Garantizar que la UJI tenga representación en todas las sectoriales estudiantiles." },
      ]
    },
    {
      title: "Bienestar Estudiantil",
      icon: Heart,
      desc: t("page.proposals.cat3.desc"),
      proposals: [
        { title: "Más psicólogos en el SAP", desc: "Aumentar el ratio de psicólogos/estudiante para reducir tiempos de espera en el Servicio de Atención Psicológica." },
        { title: "Becas basadas en renta", desc: "Sistema de ayudas y becas basado en la necesidad económica real, no exclusivamente en el rendimiento académico." },
        { title: "Semana de Bienvenida y Paellas", desc: "Mantener y mejorar los eventos de bienvenida. Recuperar las Paellas de septiembre además de las de febrero." },
        { title: "Zonas de descanso", desc: "Ampliación de espacios de descanso y ocio en cada centro para favorecer la conciliación académica y personal." },
        { title: "Menú subvencionado", desc: "Negociar con la administración un menú de comedor subvencionado para estudiantes, accesible para todo tipo de dietas." },
      ]
    },
    {
      title: "Movilidad y Transporte",
      icon: Bus,
      desc: t("page.proposals.cat4.desc"),
      proposals: [
        { title: "Transporte reforzado en horas punta", desc: "Presión sobre las administraciones para aumentar frecuencias de TRAM y autobús entre 8:00-9:00h." },
        { title: "Bono gratuito para universitarios", desc: "Exigencia de un bono de transporte gratuito para todos los estudiantes matriculados en la UJI." },
        { title: "Tolerancia en exámenes", desc: "Protocolo oficial de margen de tiempo para estudiantes afectados por retrasos de transporte en días de examen." },
      ]
    },
    {
      title: "Normativa y Derechos",
      icon: Scale,
      desc: t("page.proposals.cat5.desc"),
      proposals: [
        { title: "Desarrollo normativo en evaluación", desc: "Colmar las lagunas normativas existentes en materia de evaluación continua y parciales." },
        { title: "Normativa de paro académico", desc: "Regular el derecho de huelga estudiantil conforme a la LOSU." },
        { title: "Normativa de graduación", desc: "Eliminar las irregularidades del modelo actual de ceremonias de graduación." },
        { title: "Conciliación laboral y de representación", desc: "Garantizar que participar en órganos estudiantiles no suponga pérdida académica." },
        { title: "Reducir créditos mínimos", desc: "Revisar el mínimo de créditos exigido para superar asignaturas." },
        { title: "Software y libros gratuitos", desc: "Prohibir la obligatoriedad de compra de material; la universidad debe proveer acceso a todos los recursos necesarios." },
        { title: "Identificación física", desc: "Petición de un método físico de identificación universitaria (carnet)." },
      ]
    },
    {
      title: "Internacionalización y Lenguas",
      icon: Globe,
      desc: t("page.proposals.cat6.desc"),
      proposals: [
        { title: "Exámenes en valenciano y castellano", desc: "Garantizar siempre copias en ambas lenguas oficiales, incluyendo exámenes tipo test." },
        { title: "Protocolo ERASMUS", desc: "Adaptar los sistemas de evaluación para facilitar la integración de los estudiantes de intercambio." },
        { title: "Centro examinador multilingüe", desc: "Ampliar las acreditaciones de idiomas disponibles en la UJI más allá del inglés." },
      ]
    },
    {
      title: "Inclusión y Diversidad",
      icon: UserCheck,
      desc: t("page.proposals.cat7.desc"),
      proposals: [
        { title: "Plan anti-acoso", desc: "Protocolo integral de apoyo a víctimas de acoso por razón de sexo, raza, orientación sexual o diversidad funcional." },
        { title: "Accesibilidad", desc: "Medidas físicas e infraestructurales para la plena inclusión de estudiantes con discapacidad." },
      ]
    },
    {
      title: "Tecnología y Estudios",
      icon: Monitor,
      desc: t("page.proposals.cat8.desc"),
      proposals: [
        { title: "Licencias de software", desc: "La universidad debe proveer licencias de software específico necesario para los estudios." },
        { title: "IA en el aula", desc: "Promover formación y uso responsable de la inteligencia artificial como herramienta de aprendizaje." },
      ]
    }
  ];

  return (
    <PageLayout 
      title={t("page.proposals.header.title")} 
      subtitle={t("page.proposals.header.subtitle")} 
      badge={t("proposals.badge")}
    >
      {/* Intro */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-xl text-foreground leading-relaxed">
                {t("page.proposals.intro.p1")}
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            >
              <div className="bg-muted p-6 rounded-xl border border-border text-center">
                <span className="block text-3xl font-black text-primary mb-2">18+</span>
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t("page.proposals.stat.1").replace("18+ ", "")}</span>
              </div>
              <div className="bg-muted p-6 rounded-xl border border-border text-center">
                <span className="block text-3xl font-black text-primary mb-2">8</span>
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t("page.proposals.stat.2").replace("8 ", "")}</span>
              </div>
              <div className="bg-muted p-6 rounded-xl border border-border text-center">
                <span className="block text-3xl font-black text-primary mb-2">100%</span>
                <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t("page.proposals.stat.3").replace("100% ", "")}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Tabs (Static UI) */}
      <section className="py-8 bg-muted border-y border-border sticky top-[72px] z-40 backdrop-blur-md bg-muted/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-4 sm:pb-0 gap-3 hide-scrollbar">
            <div className="bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-bold font-display uppercase tracking-wider text-sm whitespace-nowrap shrink-0">
              Todas las áreas
            </div>
            {categories.map((cat, i) => (
              <div key={i} className="bg-background text-foreground hover:border-primary border border-border px-5 py-2.5 rounded-full font-bold font-display uppercase tracking-wider text-sm whitespace-nowrap shrink-0 cursor-pointer transition-colors">
                {cat.title}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposals Listing */}
      <section className="py-24 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="scroll-mt-32"
                id={`cat-${i}`}
              >
                <Card className="overflow-hidden border-border shadow-md border-t-[6px] border-t-primary">
                  <CardHeader className="bg-muted/50 border-b border-border pb-8 pt-8 px-6 md:px-10">
                    <div className="flex items-center gap-5 mb-4">
                      <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center text-primary-foreground shrink-0 shadow-sm">
                        <Icon size={28} strokeWidth={2.5} />
                      </div>
                      <CardTitle className="text-3xl font-black text-secondary dark:text-foreground">
                        {cat.title}
                      </CardTitle>
                    </div>
                    <p className="text-lg text-muted-foreground ml-[76px]">
                      {cat.desc}
                    </p>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="divide-y divide-border">
                      {cat.proposals.map((prop, j) => (
                        <div key={j} className="p-6 md:p-8 flex gap-6 hover:bg-muted/30 transition-colors group">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold font-display shrink-0 mt-0.5 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                            {j + 1}
                          </div>
                          <div>
                            <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{prop.title}</h4>
                            <p className="text-muted-foreground leading-relaxed">{prop.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
          
        </div>
      </section>

    </PageLayout>
  );
}
