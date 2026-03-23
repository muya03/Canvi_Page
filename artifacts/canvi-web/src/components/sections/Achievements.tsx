import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Achievements() {
  const achievements = [
    "Apertura 24h de biblioteca adelantada",
    "Refuerzo de normativa de reconocimiento de créditos",
    "Comunicación fluida con delegaciones (grupos activos)",
    "Formación de calidad para delegaciones de centro",
    "Mantenimiento y mejora de la Semana de Bienvenida"
  ];

  return (
    <section id="logros" className="py-20 relative bg-primary/5 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Historial de Éxito</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Lo que ya hemos conseguido</h3>
            <p className="text-muted-foreground">
              En nuestra campaña de 2024 nos comprometimos a lograr cambios concretos. 
              Estas no son solo promesas, son realidades que hoy disfrutan todos los estudiantes de la UJI.
            </p>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {achievements.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-background/50 backdrop-blur-md p-4 rounded-xl border border-white/5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                  <Check className="text-secondary" size={20} strokeWidth={3} />
                </div>
                <span className="font-medium text-foreground/90 leading-tight">{item}</span>
              </div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
