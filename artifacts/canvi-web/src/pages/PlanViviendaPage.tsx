import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { Download, CheckCircle2, Building2, Users, Scale, Globe, Home, MapPin, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const base = import.meta.env.BASE_URL;

const sections = [
  {
    id: "introduccion",
    title: "Introducción",
    icon: Home,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    content: `El acceso a una vivienda digna y asequible se ha consolidado como el desafío estructural más acuciante para el estudiantado de la Universitat Jaume I. El presente plan se articula sobre la convicción de que la universidad debe dejar de ser un actor pasivo en el mercado inmobiliario para convertirse en un regulador y promotor de alternativas habitacionales sostenibles.`,
    bullets: [
      "La precariedad habitacional afecta directamente a la salud mental del estudiantado.",
      "El 40% del alumnado de la UJI proviene de fuera de la provincia de Castellón.",
      "Los precios del Raval Universitari han subido un +18,82% entre 2024 y 2026.",
      "El estudiantado destina, en teoría, el 106,1% de su salario medio potencial solo para pagar el alquiler.",
    ],
  },
  {
    id: "contexto",
    title: "Análisis del contexto habitacional",
    icon: MapPin,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    content: `El mercado de alquiler en Castellón ha alcanzado máximos históricos. La alta concentración de demanda en el entorno del campus del Riu Sec genera presiones extremas y la aparición de "infravivienda" en el Raval Universitari.`,
    table: {
      headers: ["Zona / Indicador", "Precio m² (Jun 2024)", "Precio m² (Mar 2026)", "Variación"],
      rows: [
        ["Castellón de la Plana (Media)", "8,10 €", "9,50 €", "+17,28%"],
        ["Raval Universitari", "8,50 €", "10,10 €", "+18,82%"],
        ["Almazora / Vila-real", "7,20 €", "8,20 €", "+13,88%"],
        ["Habitación en piso compartido", "250 €", ">300 €", "+20%"],
      ],
    },
    bullets: [
      "Proliferación de 'minipisos' en antiguos trasteros de apenas 30 m² a ~500 €/mes.",
      "Las habitaciones en alquiler quedan fuera del amparo de la LAU: vulnerabilidad jurídica total.",
      "Falta de inspección y regulación efectiva del mercado de habitaciones compartidas.",
    ],
  },
  {
    id: "politica",
    title: "Actuación política ante las administraciones",
    icon: Scale,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    content: `El CEUJI, bajo el liderazgo de CANVI, establecerá una agenda de incidencia política ante el Ayuntamiento de Castelló, la Generalitat Valenciana y el Gobierno de España para forzar cambios estructurales en la política de vivienda.`,
    bullets: [
      "Exigir la declaración de 'Zona Tensionada' en los distritos colindantes a la UJI para limitar los precios del alquiler.",
      "Reforma de la LAU: contratos mínimos de 9-10 meses, límite a garantías adicionales y justificación de rescisión.",
      "Bonificación del 50% en el IBI para propietarios que inscriban viviendas en la bolsa de alquiler de la UJI con precios topados.",
      "Recargo en el IBI para grandes tenedores con viviendas vacías en el área metropolitana.",
    ],
  },
  {
    id: "edificio",
    title: "Proyecto de vivienda pública de la UJI",
    icon: Building2,
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    content: `El Rectorado tiene licitado para 2026 un nuevo edificio de alojamientos asequibles en el campus del Riu Sec: 6 millones de euros de inversión y más de 150 residentes. CANVI apoya la iniciativa pero exige un modelo de gestión no especulativo.`,
    tableSimple: {
      headers: ["Aspecto", "Propuesta CANVI"],
      rows: [
        ["Modelo de gestión", "Pública directa o cooperativa (sin margen de beneficio empresarial)"],
        ["Criterios de acceso", "Renta familiar y distancia (prioridad a mayor necesidad económica)"],
        ["Tipología de habitaciones", "Mix de individuales y compartidas para más opciones asequibles"],
        ["Financiación", "ICO con tipos reducidos para no repercutir la deuda en el alquiler"],
        ["Sostenibilidad", "Eficiencia energética A mediante arquitectura bioclimática"],
      ],
    },
  },
  {
    id: "oficina",
    title: "Nueva Oficina de Vivienda UJI",
    icon: Home,
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300",
    content: `CANVI propone transformar la actual plataforma IGLU en una herramienta de protección activa del estudiantado, creando una Oficina de Vivienda UJI con personal técnico especializado.`,
    bullets: [
      "Validación de Ofertas: inspección de habitabilidad básica antes de publicar cualquier anuncio.",
      "Sello de Alquiler Seguro UJI: distintivo para propietarios que firmen un código de buenas prácticas.",
      "Gestión de Fianzas: la oficina actuará como depositaria para garantizar la devolución automática.",
      "Bolsa de Habitaciones en Prácticas: alojamiento de corta estancia para estudiantes con prácticas externas.",
      "Asesoría jurídica gratuita en convenio con la Clínica Jurídica de la UJI.",
    ],
  },
  {
    id: "social",
    title: "Programas de innovación social",
    icon: Users,
    color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
    content: `La solidaridad y la integración con el tejido social de Castellón son parte fundamental de la solución. CANVI apuesta por ampliar los programas existentes que han demostrado su valía.`,
    bullets: [
      "Pisos Solidaris en el barrio de San Lorenzo: duplicar las plazas para 2027, con integración de proyectos académicos y financiación estable de suministros.",
      "Programa de Convivencia Intergeneracional: convenio UJI–Ayuntamiento–asociaciones de mayores con protocolo de seguimiento riguroso.",
      "Modelo Cooperativo: primera cooperativa de vivienda estudiantil de la Comunidad Valenciana, con cuotas ~30% por debajo del mercado.",
    ],
  },
  {
    id: "ayudas",
    title: "Ayudas económicas directas",
    icon: Globe,
    color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
    content: `Mientras se desarrollan las soluciones estructurales, CANVI trabajará para aliviar la carga económica inmediata del estudiantado.`,
    bullets: [
      "Ampliar el umbral del Bono Alquiler Joven de 400 a 450 €/habitación en Castellón.",
      "Pago trimestral anticipado del Bono para estudiantes becados, evitando que adelanten dinero.",
      "Prioridad en el Bono para estudiantes desplazados a más de 50 km.",
      "Tarifa Joven de Suministros: propuesta de subvención de 50 €/mes para cubrir luz, agua y gas en pisos compartidos.",
    ],
  },
  {
    id: "entorno",
    title: "Calidad de vida en el entorno universitario",
    icon: MapPin,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
    content: `Un plan de vivienda serio debe contemplar también el barrio. CANVI propone mejoras urbanísticas en el Raval Universitari en colaboración con el Ayuntamiento y los Consejos de Distrito.`,
    bullets: [
      "Seguridad ciudadana: refuerzo de la iluminación en caminos peatonales campus–Raval en horario nocturno.",
      "TRAM de Exámenes: servicio nocturno durante los periodos de mayor actividad académica.",
      "Zonas de descanso y ocio: mejora de parques (Parque del Roser, Ribera del Riu Sec) con mobiliario y Wi-Fi público.",
      "Apoyo al transporte escolar para familias de investigadores y estudiantes con hijos en el Raval.",
    ],
  },
];

const roadmap = [
  {
    phase: "Fase 1",
    title: "Diagnóstico y Estructuración",
    items: [
      "Constitución de la Mesa de Vivienda CEUJI con representantes de todas las facultades.",
      "Auditoría de IGLU y redacción de pliegos para la Oficina de Vivienda UJI.",
      "Encuesta de Realidad Habitacional entre los 14.000 estudiantes de la UJI.",
    ],
  },
  {
    phase: "Fase 2",
    title: "Negociación Institucional",
    items: [
      "Pacto por la Vivienda Universitaria a tres bandas: UJI, Ayuntamiento, Generalitat.",
      "Participación activa en el anteproyecto del nuevo edificio residencial.",
      "Campaña de sensibilización sobre el Bono Alquiler Joven y asesoría jurídica.",
    ],
  },
  {
    phase: "Fase 3",
    title: "Implementación y Evaluación",
    items: [
      "Inauguración de la Oficina de Vivienda con servicios de validación y gestión de fianzas.",
      "Lanzamiento de la Cooperativa Estudiantil y solicitud formal de parcela dotacional.",
      "Informe anual de evaluación de impacto sobre los precios del entorno de la UJI.",
    ],
  },
];

export default function PlanViviendaPage() {
  return (
    <PageLayout
      title="Plan de Vivienda Estudiantil"
      subtitle="Propuesta integral de CANVI para garantizar el acceso a una vivienda digna y asequible en el entorno de la UJI."
      badge="Plans d'Execució"
    >
      {/* Intro + Descarga */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8 bg-muted rounded-2xl border border-border"
          >
            <div>
              <p className="text-sm font-bold uppercase tracking-wider text-primary mb-1">Documento técnico · 14 páginas</p>
              <h2 className="text-2xl font-black text-secondary dark:text-foreground mb-2">Plan de Vivienda Estudiantil</h2>
              <p className="text-muted-foreground">Análisis, propuestas y hoja de ruta del CEUJI bajo CANVI para la legislatura 2024–2026.</p>
            </div>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-display font-bold uppercase tracking-wider rounded-sm px-6 py-5 h-auto shrink-0"
            >
              <a href={`${base}planes-vivienda.pdf`} target="_blank" rel="noopener noreferrer" download>
                <Download size={18} className="mr-2" />
                Descargar PDF
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Contenido por secciones */}
      <section className="py-8 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sections.map((sec, si) => {
            const Icon = sec.icon;
            return (
              <motion.div
                key={si}
                id={sec.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${sec.color}`}>
                    <Icon size={24} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black font-display text-secondary dark:text-foreground leading-tight">
                    {sec.title}
                  </h2>
                </div>
                <div className="border-l-4 border-primary pl-6 space-y-5">
                  <p className="text-foreground text-lg leading-relaxed">{sec.content}</p>

                  {sec.bullets && (
                    <ul className="space-y-3">
                      {sec.bullets.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-3">
                          <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                          <span className="text-foreground leading-snug">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {sec.table && (
                    <div className="overflow-x-auto rounded-xl border border-border">
                      <table className="w-full text-sm">
                        <thead className="bg-muted">
                          <tr>
                            {sec.table.headers.map((h, hi) => (
                              <th key={hi} className="px-4 py-3 text-left font-bold uppercase tracking-wider text-muted-foreground text-xs">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {sec.table.rows.map((row, ri) => (
                            <tr key={ri} className="bg-card hover:bg-muted/40 transition-colors">
                              {row.map((cell, ci) => (
                                <td key={ci} className={`px-4 py-3 font-medium ${ci === 3 ? "text-primary font-bold" : "text-foreground"}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {sec.tableSimple && (
                    <div className="overflow-x-auto rounded-xl border border-border">
                      <table className="w-full text-sm">
                        <thead className="bg-muted">
                          <tr>
                            {sec.tableSimple.headers.map((h, hi) => (
                              <th key={hi} className="px-4 py-3 text-left font-bold uppercase tracking-wider text-muted-foreground text-xs">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border">
                          {sec.tableSimple.rows.map((row, ri) => (
                            <tr key={ri} className="bg-card hover:bg-muted/40 transition-colors">
                              <td className="px-4 py-3 font-bold text-foreground">{row[0]}</td>
                              <td className="px-4 py-3 text-muted-foreground">{row[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Hoja de ruta */}
      <section className="py-24 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <CalendarCheck size={32} className="text-primary" />
              <h2 className="text-3xl md:text-4xl font-black font-display text-white">Hoja de ruta del CEUJI</h2>
            </div>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Calendario de actuaciones una vez CANVI asuma la presidencia del Consell de l'Estudiantat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {roadmap.map((phase, pi) => (
              <motion.div
                key={pi}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: pi * 0.1 }}
                className="bg-white/10 border border-white/15 rounded-xl p-6"
              >
                <div className="inline-block bg-primary text-white text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  {phase.phase}
                </div>
                <h3 className="text-white font-black font-display text-lg mb-4 leading-snug">{phase.title}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-white/80 text-sm leading-snug">
                      <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusión */}
      <section className="py-24 bg-primary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-black font-display text-white mb-6">Conclusión</h2>
            <p className="text-white/90 text-xl leading-relaxed mb-4">
              "La vivienda estudiantil es el termómetro de la equidad en nuestra universidad. Si el mercado expulsa a los estudiantes con menos recursos, la UJI como universidad pública fracasa en su misión de ser un ascensor social."
            </p>
            <p className="text-white/75 text-base leading-relaxed">
              No nos conformamos con gestionar la precariedad; aspiramos a erradicarla. El CEUJI será, bajo nuestra gestión, el defensor más firme de vuestros derechos habitacionales.
            </p>
            <p className="text-white/60 text-sm mt-6 font-bold uppercase tracking-widest">
              CANVI · www.canvi.es · info@canvi.es
            </p>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
}
