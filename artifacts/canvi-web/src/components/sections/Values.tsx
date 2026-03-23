import { motion } from "framer-motion";

export function Values() {
  const values = [
    {
      title: "Independencia",
      desc: "Libres de partidos políticos. Nuestra única prioridad son los estudiantes de la UJI.",
      color: "bg-purple-500"
    },
    {
      title: "Experiencia",
      desc: "Años de trabajo real en representaciones y asociaciones universitarias nos avalan.",
      color: "bg-secondary"
    },
    {
      title: "Realismo",
      desc: "No prometemos imposibles. Proponemos soluciones viables basadas en necesidades reales.",
      color: "bg-accent"
    },
    {
      title: "Transparencia",
      desc: "Cuentas claras, agenda pública y rendición de cuentas hacia los estudiantes.",
      color: "bg-cyan-500"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Nuestros Valores</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, i) => (
            <motion.div
              key={i}
              className="glass-panel p-8 rounded-2xl relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${val.color} transition-all duration-300 group-hover:h-2`}></div>
              <h3 className="text-2xl font-bold mb-4 mt-2">{val.title}</h3>
              <p className="text-muted-foreground">{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
