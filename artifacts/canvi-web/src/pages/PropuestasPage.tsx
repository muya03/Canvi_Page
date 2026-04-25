import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { FileText, Users, Heart, Bus, Scale, Globe, UserCheck, Monitor, BookOpen, ArrowRight, Home, Download } from "lucide-react";

const base = import.meta.env.BASE_URL;

const plans = [
  {
    slug: "vivienda",
    title: "Plan de Vivienda Estudiantil",
    titleVal: "Pla d'Habitatge Estudiantil",
    date: "Abril 2026",
    pages: 14,
    icon: Home,
    summary: "Análisis de la crisis habitacional en Castellón y propuestas concretas para garantizar el derecho a un techo digno: regulación del mercado, nueva Oficina de Vivienda, modelo cooperativo, Pisos Solidaris y hoja de ruta institucional en 3 fases.",
    summaryVal: "Anàlisi de la crisi habitacional a Castelló i propostes concretes per garantir el dret a un sostre digne: regulació del mercat, nova Oficina d'Habitatge, model cooperatiu, Pisos Solidaris i full de ruta institucional en 3 fases.",
    pdf: `${base}planes-vivienda.pdf`,
    tags: ["Vivienda", "Mercado Alquiler", "Cooperativa", "Bienestar"],
    stats: [
      { value: "+18,82%", label: "Subida de precios en el Raval 2024–2026" },
      { value: "14.000", label: "Estudiantes afectados en la UJI" },
      { value: "3 Fases", label: "Hoja de ruta del CEUJI" },
    ],
  },
];

export default function PropuestasPage() {
  const { t } = useLanguage();

  const categories = [
    {
      title: "Exámenes y Evaluación",
      icon: FileText,
      desc: t("page.proposals.cat1.desc"),
      proposals: [
        { title: "Referéndum sobre calendarios de exámenes finales", desc: "Los estudiantes deben poder decidir sobre sus propios calendarios académicos mediante consulta directa." },
        { title: "Cambiar normativa de evaluación", desc: "Seguir presionando para cambiar la normativa de evaluación y ganar más derechos para el estudiantado." },
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
        { title: "Presupuesto propio para delegaciones", desc: "Dotar a las delegaciones de centro de un presupuesto propio para que puedan desarrollar actividades y representar mejor al estudiantado." },
        { title: "Estructuración y activación de los centros", desc: "Ayudar a las delegaciones de centro a estructurarse y activar la vida participativa del centro con apoyo técnico y formativo." },
        { title: "Manual de Iniciación a la UJI", desc: "Elaborar y distribuir una guía práctica para el estudiantado de primer año que facilite su integración en la vida universitaria." },
        { title: "Comisión de asociaciones", desc: "Creación de un órgano para que las asociaciones universitarias tengan voz en las decisiones del Consell." },
        { title: "Autonomía del Consejo", desc: "Blindar la independencia del Consell de l'Estudiantat frente a injerencias externas." },
        { title: "Transparencia y rendición de cuentas", desc: "Seguir reivindicando la transparencia y la rendición de cuentas al estudiantado mediante portal público, agenda y boletín mensual." },
        { title: "Representación en sectoriales", desc: "Trabajar para que la UJI tenga una mejor y mayor representación estudiantil en las sectoriales a nivel nacional relativas a cada centro." },
      ]
    },
    {
      title: "Bienestar Estudiantil",
      icon: Heart,
      desc: t("page.proposals.cat3.desc"),
      proposals: [
        { title: "Más psicólogos en el SAP", desc: "Seguir incidiendo para aumentar el ratio de psicólogos por estudiante en el Servicio de Atención Psicológica y reducir los tiempos de espera." },
        { title: "Becas y ayudas basadas en la necesidad", desc: "Pedir un sistema de ayudas y becas basado en la necesidad real y la renta, y no en el mérito académico, para que lleguen a quienes más las necesitan." },
        { title: "Eventos históricos del CEUJI", desc: "Mantener y mejorar los eventos históricos del CEUJI como las Paellas, intentando mejorar la experiencia y ajustar precios mediante licitaciones públicas." },
        { title: "Menú subvencionado (modelo UGR)", desc: "Pedir un menú de comedor subvencionado para reducir su precio para el estudiantado de la UJI, siguiendo el modelo de la Universidad de Granada." },
        { title: "Zonas de ocio y descanso", desc: "Ampliar y mejorar las zonas de ocio en el campus, complementando los espacios existentes con más opciones recreativas y de descanso para el estudiantado." },
        { title: "Zonas de desconexión digital", desc: "Crear espacios delimitados en el campus donde el estudiantado pueda desconectarse de pantallas y dispositivos para favorecer el descanso mental." },
        { title: "Ampliación del horario de la sala de musculación", desc: "Ampliar el horario de la sala de musculación para mejorar la conciliación del estudiantado con sus rutinas de actividad física." },
        { title: "Mejora de la infraestructura de la biblioteca", desc: "Pedir mejoras en las instalaciones de la biblioteca: electrificación de puestos, conectividad y condiciones generales de estudio." },
        { title: "Modernización de la reprografía", desc: "Modernizar el servicio de reprografía de la UJI, potenciando el sistema de buzones para que el estudiantado pueda recoger pedidos por adelantado sin colas." },
        { title: "Mejora de la Casa del Estudiante", desc: "Impulsar mejoras en la infraestructura y los servicios de la Casa del Estudiante para que sea un espacio más útil y acogedor para la comunidad universitaria." },
      ]
    },
    {
      title: "Movilidad y Transporte",
      icon: Bus,
      desc: t("page.proposals.cat4.desc"),
      proposals: [
        { title: "Exigencia de líneas nocturnas de bus", desc: "Presión sobre el Ayuntamiento y la Generalitat para implantar líneas nocturnas de autobús que conecten el campus con los barrios universitarios, especialmente durante periodos de exámenes." },
        { title: "Actuar ante las autoridades por el transporte en horas punta", desc: "Actuar ante las autoridades pertinentes para resolver el problema del transporte público en horas punta, exigiendo más frecuencia de TRAM y autobús en las franjas de mayor demanda estudiantil." },
        { title: "Tolerancia en exámenes", desc: "Protocolo oficial de margen de tiempo para estudiantes afectados por retrasos de transporte en días de examen." },
      ]
    },
    {
      title: "Normativa y Derechos",
      icon: Scale,
      desc: t("page.proposals.cat5.desc"),
      proposals: [
        { title: "Normativa de graduación", desc: "Impulsar una normativa de graduación para corregir las irregularidades del modelo actual de ceremonias." },
        { title: "Conciliación de la representación estudiantil", desc: "Garantizar la conciliación entre la representación estudiantil y la asistencia a órganos colegiados, evitando que la participación suponga una pérdida académica." },
        { title: "Dispensa de asistencia por conciliación laboral", desc: "Asegurar la dispensa de asistencia a clase por motivos de conciliación laboral, de acuerdo con los estatutos de la universidad." },
        { title: "Prohibición de compra obligatoria de libros y software", desc: "Prohibir la obligatoriedad de la compra de libros o software para el seguimiento de asignaturas, asegurando la disponibilidad de ejemplares suficientes para todo el estudiantado." },
        { title: "Identificación física universitaria", desc: "Pedir un método físico de identificación en la UJI, como un carnet universitario, para facilitar la acreditación del estudiantado." },
        { title: "Normativa de paro académico", desc: "Regular el derecho de huelga estudiantil conforme a la LOSU." },
      ]
    },
    {
      title: "Internacionalización y Lenguas",
      icon: Globe,
      desc: t("page.proposals.cat6.desc"),
      proposals: [
        { title: "Exámenes en valenciano y castellano", desc: "Garantizar siempre copias en ambas lenguas oficiales, incluyendo exámenes tipo test." },
        { title: "Centro examinador multilingüe", desc: "Ampliar las acreditaciones de idiomas disponibles en la UJI más allá del inglés." },
        { title: "Escucha activa a la comunidad internacional", desc: "Hablar con la comunidad de estudiantes extranjeros para conocer qué necesitaron al iniciar su carrera en la UJI y mejorar su acogida y acompañamiento." },
      ]
    },
    {
      title: "Inclusión y Diversidad",
      icon: UserCheck,
      desc: t("page.proposals.cat7.desc"),
      proposals: [
        { title: "Campañas de concienciación contra el acoso", desc: "Promover campañas de concienciación sobre el bullying y fomentar los mecanismos que ya tiene la UJI para proteger al estudiantado." },
        { title: "Inclusión de estudiantes con discapacidad", desc: "Mejorar la inclusión social del estudiantado con discapacidad, peticionando medidas físicas y de infraestructura para la adaptación de sus necesidades." },
        { title: "Actividades de integración social", desc: "Organizar actividades y campañas para que los estudiantes que aún no tienen un vínculo social con sus compañeros puedan conocerse y crear nuevas amistades dentro de la universidad." },
      ]
    },
    {
      title: "Tecnología y Estudios",
      icon: Monitor,
      desc: t("page.proposals.cat8.desc"),
      proposals: [
        { title: "Nuevas metodologías docentes e IA", desc: "Pedir el fomento de metodologías docentes innovadoras y la incorporación de nuevas tecnologías, como la inteligencia artificial, en los procesos de aprendizaje." },
        { title: "Licencias de software", desc: "La universidad debe proveer licencias del software específico necesario para el seguimiento de los estudios." },
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

      {/* Plans d'Execució */}
      <section className="py-24 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <BookOpen size={28} className="text-primary" />
              <span className="section-title text-primary">Documents tècnics</span>
            </div>
            <h2 className="section-header text-white">Plans d'Execució</h2>
            <div className="accent-bar bg-primary mx-auto mb-6"></div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Més que promeses: plans detallats, avalats per dades, amb mesures concretes i una hoja de ruta clar. Açò és el que significa governar el CEUJI amb rigor.
            </p>
          </motion.div>

          <div className="space-y-8">
            {plans.map((plan, pi) => {
              const Icon = plan.icon;
              return (
                <motion.div
                  key={pi}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: pi * 0.1 }}
                  className="bg-white/10 border border-white/15 rounded-2xl overflow-hidden hover:bg-white/15 transition-colors group"
                >
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Left */}
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center text-primary shrink-0">
                            <Icon size={20} />
                          </div>
                          <span className="text-white/60 text-xs font-bold uppercase tracking-widest">{plan.date} · {plan.pages} pàgines</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black font-display text-white mb-4 leading-tight group-hover:text-primary transition-colors">
                          {plan.title}
                        </h3>
                        <p className="text-white/75 leading-relaxed mb-5">{plan.summary}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {plan.tags.map((tag, ti) => (
                            <span key={ti} className="text-xs font-bold uppercase tracking-wider text-white/60 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-3">
                          <Button asChild className="bg-primary hover:bg-primary/90 text-white font-display font-bold uppercase tracking-wider rounded-sm px-6 py-4 h-auto">
                            <Link href={`/planes/${plan.slug}`}>
                              <ArrowRight size={16} className="mr-2" />
                              Llegir el pla
                            </Link>
                          </Button>
                          <Button asChild variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white hover:border-white/50 font-display font-bold uppercase tracking-wider rounded-sm px-6 py-4 h-auto">
                            <a href={plan.pdf} target="_blank" rel="noopener noreferrer" download>
                              <Download size={16} className="mr-2" />
                              Descargar PDF
                            </a>
                          </Button>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex flex-row md:flex-col gap-3 md:w-48 shrink-0 justify-start md:justify-center">
                        {plan.stats.map((stat, si2) => (
                          <div key={si2} className="bg-white/10 rounded-xl p-4 text-center border border-white/10 flex-1 md:flex-none">
                            <span className="block text-2xl font-black text-primary font-display leading-none mb-1">{stat.value}</span>
                            <span className="text-white/60 text-xs leading-snug">{stat.label}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-white/40 text-sm mt-10"
          >
            Més plans en elaboració · Contacta'ns si vols contribuir: info@canvi.es
          </motion.p>
        </div>
      </section>

    </PageLayout>
  );
}
