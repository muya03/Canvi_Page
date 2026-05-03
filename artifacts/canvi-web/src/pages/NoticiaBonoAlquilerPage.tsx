import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { ArrowLeft, Calendar, Home, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const base = import.meta.env.BASE_URL;

export default function NoticiaBonoAlquilerPage() {
  return (
    <PageLayout
      title="CANVI logra una línea de ayudas al alquiler joven de 400.000€ anuales"
      subtitle="Mayores de 18 años · Ayuntamiento de Castelló · Legislatura 2024–2026"
      badge="Notícia · Abril 2026"
    >
      {/* Hero image */}
      <section className="bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-h-[520px] overflow-hidden"
        >
          <img
            src={`${base}images/noticias/bono-alquiler-01.jpg`}
            alt="Reunión del CEUJI con el Ayuntamiento de Castelló"
            className="w-full object-cover object-center max-h-[520px]"
          />
        </motion.div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-10 text-sm text-muted-foreground font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> Abril 2026</span>
            <span className="text-border">|</span>
            <span>Vivienda · Logros · CEUJI</span>
          </div>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-secondary dark:text-foreground leading-relaxed mb-12 border-l-4 border-primary pl-6"
          >
            Desde CANVI, el equipo que elegisteis para liderar el Consell de l'Estudiantat de la UJI (CEUJI), tenemos el inmenso orgullo de compartir con vosotros una noticia que marca un antes y un después en la política universitaria y municipal: hemos conseguido que el Ayuntamiento de Castelló apruebe la creación de una nueva línea de ayudas al alquiler joven.
          </motion.p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">📉</span> El contexto: La barrera habitacional
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Todos conocemos la realidad a la que nos enfrentamos. Los precios del alquiler en Castelló y sus alrededores han escalado de forma alarmante durante los últimos años. A esto se le suma la precariedad de los primeros empleos o la dificultad de compaginar jornadas laborales con las clases y los exámenes.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Dar el paso de salir de casa de nuestros padres, o poder mantener un piso compartido mientras cursamos nuestros estudios o empezamos nuestra carrera profesional, se había convertido en un privilegio inalcanzable para muchos. Por ello, desde el CEUJI pusimos encima de la mesa del consistorio la urgencia de actuar.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-6 flex items-center gap-3">
                <span className="text-2xl">💶</span> Un salvavidas real: Las claves de las nuevas ayudas
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tras meses de intenso trabajo, reuniones institucionales y reivindicación constante, hemos logrado articular junto al Ayuntamiento un paquete de medidas diseñado para tener un impacto directo en nuestros bolsillos.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Home,
                    title: "Una dotación histórica",
                    desc: "Se ha asegurado un presupuesto de 400.000 euros anuales que irán destinados de forma íntegra y exclusiva a sufragar los gastos de alquiler de los jóvenes de la ciudad."
                  },
                  {
                    icon: Users,
                    title: "Cobertura amplia (18–35 años)",
                    desc: "Hemos peleado para que la franja de edad sea lo más inclusiva posible. Al abarcar desde los 18 hasta los 35 años, nos aseguramos de proteger tanto al estudiante de primer curso que acaba de llegar a la ciudad, como al egresado de la UJI que busca estabilizarse tras acabar su máster o doctorado."
                  },
                  {
                    icon: Heart,
                    title: "Un objetivo sin fisuras",
                    desc: "La meta de esta iniciativa se resume en una palabra: ayudar. Queremos fomentar la emancipación real y reducir la asfixia económica que supone dedicar más de la mitad de nuestros ingresos a pagar un techo."
                  }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div key={i} className="flex gap-4 p-5 rounded-xl bg-muted border border-border">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="font-black text-foreground mb-1">{item.title}</p>
                        <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Second photo */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden border border-border shadow-sm my-10"
            >
              <img
                src={`${base}images/noticias/bono-alquiler-02.jpg`}
                alt="Reunión de trabajo con la alcaldesa de Castelló"
                className="w-full object-cover"
              />
              <p className="text-xs text-muted-foreground text-center py-3 px-4 bg-muted">
                Reunión de trabajo con la alcaldesa de Castelló para articular las bases de las ayudas.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">🤝</span> Innovación social: El proyecto de convivencia intergeneracional
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sabemos que el problema de la vivienda es complejo y requiere múltiples enfoques. Por eso, no nos hemos detenido en las ayudas económicas directas. Desde el CEUJI hemos abierto una segunda vía de trabajo pionera en colaboración conjunta con las concejalías de Juventud y Gente Mayor.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se trata de un proyecto de convivencia intergeneracional, una alternativa habitacional solidaria que busca generar un beneficio mutuo para dos sectores de la población que se necesitan:
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <span><strong className="text-foreground">Para el estudiantado de la UJI:</strong> Ofrece la posibilidad de acceder a un alojamiento gratuito o de muy bajo coste, eliminando de raíz la barrera económica del alquiler.</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="mt-2 w-2 h-2 rounded-full bg-primary shrink-0"></span>
                  <span><strong className="text-foreground">Para las personas mayores:</strong> Supone una herramienta directa para combatir una de las pandemias silenciosas de nuestra sociedad: la soledad no deseada.</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                A través de este programa, un estudiante convive en el domicilio de una persona mayor aportando compañía, ayuda en pequeñas tareas cotidianas y seguridad, mientras ambos construyen un vínculo humano invaluable y enriquecedor.
              </p>
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-primary bg-secondary rounded-r-2xl p-8 my-10"
            >
              <p className="text-white/90 text-lg font-bold leading-relaxed italic">
                "Dijimos que CANVI venía para transformar las cosas, para sacar al CEUJI de los despachos y llevarlo a los problemas del día a día del estudiantado. Lograr 400.000 euros para el alquiler joven no es solo una cifra, es la tranquilidad de cientos de compañeros y compañeras que ahora ven un poco más cerca la posibilidad de construir su propio proyecto de vida."
              </p>
              <p className="text-primary font-black font-display uppercase tracking-wider text-sm mt-4">— CANVI · CEUJI</p>
            </motion.blockquote>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">📋</span> ¿Cuáles son los siguientes pasos?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Actualmente, el Ayuntamiento de Castelló se encuentra ultimando las bases jurídicas y técnicas que regularán estas ayudas. Desde el CEUJI estaremos vigilantes para asegurar que los trámites sean lo más ágiles y sencillos posibles, evitando trabas burocráticas innecesarias.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Os pedimos que estéis muy atentos a nuestras redes sociales y canales de comunicación oficiales. En cuanto las bases se publiquen en el boletín oficial y se abra el plazo, organizaremos sesiones informativas y os proporcionaremos guías paso a paso para que nadie que cumpla los requisitos se quede sin tramitar su solicitud.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center"
            >
              <p className="text-2xl font-black font-display text-secondary dark:text-foreground mb-2">El cambio ya es una realidad.</p>
              <p className="text-muted-foreground font-bold">Seguimos trabajando por y para vosotros.</p>
            </motion.div>

          </div>

          {/* Back button */}
          <div className="mt-14 pt-8 border-t border-border">
            <Button asChild variant="outline" className="font-display font-bold uppercase tracking-wider rounded-sm">
              <Link href="/noticias">
                <ArrowLeft size={16} className="mr-2" /> Volver a noticias
              </Link>
            </Button>
          </div>

        </div>
      </section>
    </PageLayout>
  );
}
