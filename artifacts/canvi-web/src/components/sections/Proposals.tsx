import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  FileText, Users, Heart, Bus, 
  Scale, Globe, Shield, Laptop 
} from "lucide-react";

const PROPOSALS = [
  {
    title: "Exámenes y Evaluación",
    icon: FileText,
    color: "from-purple-500 to-primary",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] group-hover:border-purple-500/50",
    items: [
      "Referéndum sobre los calendarios de exámenes finales",
      "Cambiar normativa de evaluación para ganar más derechos",
      "Aulas de estudio 24h/7 días fuera de la biblioteca",
      "Clases del 2º cuatrimestre finalizan el miércoles anterior a exámenes",
      "Tolerancia en retrasos de transporte en días de examen"
    ]
  },
  {
    title: "Delegaciones y Representación",
    icon: Users,
    color: "from-orange-500 to-accent",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)] group-hover:border-orange-500/50",
    items: [
      "Dotar a las delegaciones de centro de un presupuesto propio",
      "Ayudar a estructurar y activar la vida participativa del centro",
      "Creación de una comisión de asociaciones",
      "Blindar la autonomía e independencia del Consejo",
      "Transparencia: portal, agenda pública y boletín mensual"
    ]
  },
  {
    title: "Bienestar Estudiantil",
    icon: Heart,
    color: "from-rose-500 to-secondary",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(225,29,72,0.3)] group-hover:border-rose-500/50",
    items: [
      "Aumentar el ratio de psicólogos/estudiante en el SAP",
      "Ayudas y becas basadas en necesidad/renta, no en mérito",
      "Semana de Bienvenida y recuperar las Paellas (doble paellas)",
      "Zonas de descanso y ocio ampliadas en cada centro",
      "Menú subvencionado y adaptado a todo tipo de dietas"
    ]
  },
  {
    title: "Movilidad y Transporte",
    icon: Bus,
    color: "from-cyan-400 to-blue-500",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)] group-hover:border-cyan-500/50",
    items: [
      "Actuar por el problema del transporte público en horas punta",
      "Reforzar líneas de bus y TRAM",
      "Bono gratuito para estudiantes universitarios"
    ]
  },
  {
    title: "Normativa y Derechos",
    icon: Scale,
    color: "from-emerald-400 to-green-600",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.3)] group-hover:border-emerald-500/50",
    items: [
      "Desarrollo normativo en evaluación, paro académico y graduación",
      "Garantizar conciliación laboral y de representación",
      "Reducir los créditos exigidos para superar asignaturas",
      "Prohibir obligatoriedad de compra de libros/software",
      "Método físico de identificación en la UJI"
    ]
  },
  {
    title: "Internacionalización",
    icon: Globe,
    color: "from-indigo-400 to-indigo-600",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(129,140,248,0.3)] group-hover:border-indigo-500/50",
    items: [
      "Garantizar copias de exámenes en valenciano Y castellano",
      "Protocolo de adaptación para estudiantes ERASMUS",
      "UJI como centro examinador de más idiomas",
      "Fomento de metodologías docentes innovadoras"
    ]
  },
  {
    title: "Inclusión y Diversidad",
    icon: Shield,
    color: "from-pink-400 to-pink-600",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(244,114,182,0.3)] group-hover:border-pink-500/50",
    items: [
      "Plan de apoyo a víctimas de acoso (sexo, racismo, diversidad)",
      "Mejorar inclusión de estudiantes con discapacidad (infraestructura)"
    ]
  },
  {
    title: "Tecnología y Estudios",
    icon: Laptop,
    color: "from-blue-400 to-indigo-500",
    hoverGlow: "group-hover:shadow-[0_0_30px_rgba(96,165,250,0.3)] group-hover:border-blue-500/50",
    items: [
      "Licencias de software específico provistas por la universidad",
      "Fomento del uso de IA en el aprendizaje"
    ]
  }
];

export function Proposals() {
  return (
    <section id="propuestas" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src={`${import.meta.env.BASE_URL}images/abstract-mesh.png`} 
          alt="Grid mesh background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            className="text-sm font-bold tracking-widest text-secondary uppercase mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Campaña 2026
          </motion.h2>
          <motion.h3 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Nuestras Propuestas
          </motion.h3>
          <motion.p 
            className="text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Soluciones reales diseñadas desde nuestra experiencia en las aulas para mejorar tu día a día en la universidad.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {PROPOSALS.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full"
              >
                <Card className={`h-full group transition-all duration-500 hover:-translate-y-2 ${category.hoverGlow}`}>
                  <CardHeader className="pb-4 relative overflow-hidden rounded-t-2xl">
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 blur-2xl group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white mb-4 shadow-lg`}>
                      <Icon size={24} strokeWidth={2.5} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-white transition-colors">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm group-hover:text-foreground/80 transition-colors">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0"></span>
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
      </div>
    </section>
  );
}
