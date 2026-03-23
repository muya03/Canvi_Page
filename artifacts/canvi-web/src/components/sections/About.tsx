import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const points = [
    "Nacidos de los propios estudiantes, no de partidos políticos",
    "Independencia total: decisiones tomadas 100% por y para estudiantes",
    "Experiencia real en Consejos, Delegaciones y Coordinaciones",
    "Propuestas realistas basadas en las necesidades actuales",
  ];

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-3">Quiénes Somos</h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6">La voz independiente de la UJI</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Canvi es el principal grupo de representación estudiantil en la Universitat Jaume I. 
              Nuestros miembros han sido delegados, miembros del Consell de l'Estudiantat, 
              coordinadores de grado y líderes activos en asociaciones clave como UJI Motorsport, 
              Hackerspace, AESCA y ESN.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Organizamos eventos que impactan la vida universitaria: El Día del Diseño Creatividad y 
              Tecnología, TechnoCharlas, TalentCid Day y manejamos plataformas de comunicación masiva 
              como @informerjaumei.
            </p>
            
            <div className="space-y-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary shrink-0 mt-0.5" />
                  <span className="text-foreground/90 font-medium">{point}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel p-8 rounded-3xl relative z-10 border border-primary/20 bg-gradient-to-br from-card to-primary/5">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/30 blur-2xl rounded-full"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/30 blur-3xl rounded-full"></div>
              
              <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <span className="bg-primary/20 p-3 rounded-xl text-primary">🏆</span>
                Nuestra Experiencia
              </h4>
              
              <ul className="space-y-6 relative border-l-2 border-white/10 ml-4 pl-6">
                <li className="relative">
                  <div className="absolute w-3 h-3 bg-secondary rounded-full -left-[31px] top-2 border-2 border-background"></div>
                  <h5 className="text-xl font-semibold mb-1">Delegados y Subdelegados</h5>
                  <p className="text-muted-foreground text-sm">Representación directa en las aulas y grados.</p>
                </li>
                <li className="relative">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[31px] top-2 border-2 border-background"></div>
                  <h5 className="text-xl font-semibold mb-1">Consell de l'Estudiantat</h5>
                  <p className="text-muted-foreground text-sm">Liderazgo en el máximo órgano de representación.</p>
                </li>
                <li className="relative">
                  <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[31px] top-2 border-2 border-background"></div>
                  <h5 className="text-xl font-semibold mb-1">Asociaciones Universitarias</h5>
                  <p className="text-muted-foreground text-sm">UJI Motorsport, Hackerspace, ESN, AESCA, La Plantilla, SAÓ.</p>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
