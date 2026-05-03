import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { ArrowLeft, Calendar, BookOpen, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const base = import.meta.env.BASE_URL;

export default function NoticiaSala24hPage() {
  return (
    <PageLayout
      title="CANVI, desde el CEUJI, inaugura la nueva sala de estudio 24 horas en la Casa de l'Estudiantat"
      subtitle="150 plazas · Abierta todo el año · Campus Riu Sec, Castelló"
      badge="Notícia · 15 de Mayo, 2025"
    >
      {/* Hero image */}
      <section className="bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="w-full max-h-[520px] overflow-hidden"
        >
          <img
            src={`${base}images/noticias/sala-24h-01.jpg`}
            alt="Nueva sala de estudio 24h en la Casa de l'Estudiantat de la UJI"
            className="w-full object-cover object-center max-h-[520px]"
          />
        </motion.div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-10 text-sm text-muted-foreground font-bold uppercase tracking-wider">
            <span className="flex items-center gap-1.5"><Calendar size={14} /> 15 de Mayo, 2025</span>
            <span className="text-border">|</span>
            <span>Infraestructuras · Logros · CEUJI</span>
          </div>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-secondary dark:text-foreground leading-relaxed mb-12 border-l-4 border-primary pl-6"
          >
            Desde CANVI, al frente del Consell de l'Estudiantat de la UJI, tenemos el inmenso orgullo de anunciar que otra de nuestras grandes promesas electorales ya es una realidad: la apertura de una sala de estudio operativa las 24 horas casi todo el año.
          </motion.p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-muted-foreground leading-relaxed">
                Llevamos trabajando incansablemente en esta reivindicación desde el inicio del actual curso, allá por septiembre de 2024. Nos comprometimos a mejorar las condiciones de estudio en el campus y hoy, como equipo que dirige el Consell tras ganar las elecciones en mayo de 2024, demostramos que cumplimos nuestra palabra. Hemos conseguido poner en marcha este esperado espacio justo antes de los exámenes del segundo cuatrimestre.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-6 flex items-center gap-3">
                <span className="text-2xl">🏛️</span> Un espacio adaptado a tus necesidades: Las claves de la Casa 24/7
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Ubicada en la propia Casa de l'Estudiantat —un espacio que gestionamos directamente desde el Consell de l'Estudiantat—, esta amplia y nueva sala está diseñada para ofrecer el máximo confort y utilidad.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Users,
                    title: "150 plazas disponibles",
                    desc: "Las instalaciones disponen de un total de 150 plazas para el alumnado, distribuidas en diferentes espacios según el tipo de estudio."
                  },
                  {
                    icon: BookOpen,
                    title: "Estudio individual y en grupo",
                    desc: "Un centenar de plazas están dedicadas al estudio individual. El otro medio centenar se hallan en un espacio habilitado para dar respuesta a las necesidades de equipos o grupos."
                  },
                  {
                    icon: Clock,
                    title: "Abierta 24h casi todo el año",
                    desc: "La sala permanecerá abierta 24 horas durante casi todo el año. Únicamente cerrará sus puertas durante dos semanas en agosto, periodo en el que el campus también está cerrado."
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

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">🎓</span> Respondiendo a la diversidad académica del estudiantado
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                La creación de este espacio permanente era una necesidad imperiosa para muchos de nosotros. Como ha explicado nuestro representante de los estudiantes universitarios del campus del Riu Sec, <strong className="text-foreground">Mohamed Al Howaidi Nasralla</strong>:
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Sabemos que la Biblioteca de la UJI ofrece tradicionalmente su apertura 24 horas coincidiendo con las fechas de los exámenes, pero la realidad académica es diferente para muchos. Mohamed Al Howaidi se refería específicamente a estudiantes de carreras como Magisterio o de algunas titulaciones de Ciencias de la Salud.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Estos estudiantes realizan prácticas y, por tanto, su calendario para examinarse varía del resto. Con esta nueva apertura, el campus del Riu Sec de Castellón se equipara y se suma a un servicio vital que, desde el Consell de l'Estudiantat, consideramos que ya «funciona en la gran mayoría de los campus universitarios españoles».
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
                "Ofertar esta sala de estudio 24 horas constituye un gran logro ya que da respuesta a un colectivo de universitarios que no se presentan a los exámenes en el calendario convencional."
              </p>
              <p className="text-primary font-black font-display uppercase tracking-wider text-sm mt-4">— Mohamed Al Howaidi Nasralla · Representante CEUJI</p>
            </motion.blockquote>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">🤝</span> Éxito en la prueba piloto y colaboración institucional
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Este proyecto no habría sido posible sin el diálogo y el trabajo conjunto. Contamos con la colaboración y el visto bueno del <strong className="text-foreground">vicerrector de Infraestructuras, Vicent Cervera</strong>, para hacer realidad este espacio.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                La nueva sala de estudio ya comenzó a funcionar, a modo de prueba piloto, hace un par de semanas. Nos enorgullece enormemente compartir que, durante esta etapa inicial, la iniciativa ha estado cosechando una gran respuesta por parte de todo el alumnado de la Jaume I.
              </p>
            </motion.div>

            {/* Quote 2 */}
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-4 border-primary bg-secondary rounded-r-2xl p-8 my-10"
            >
              <p className="text-white/90 text-lg font-bold leading-relaxed italic">
                "Llegamos al Consell para transformar la universidad y adaptar sus servicios a nuestras realidades, no al revés. Esta sala es vuestra, ¡aprovechadla al máximo para vuestros estudios y trabajos!"
              </p>
              <p className="text-primary font-black font-display uppercase tracking-wider text-sm mt-4">— CANVI · CEUJI</p>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center"
            >
              <p className="text-2xl font-black font-display text-secondary dark:text-foreground mb-2">Desde CANVI seguimos demostrando que con trabajo y perseverancia, las reivindicaciones estudiantiles se convierten en realidades.</p>
              <p className="text-muted-foreground font-bold mt-4">¡Seguimos avanzando!</p>
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
