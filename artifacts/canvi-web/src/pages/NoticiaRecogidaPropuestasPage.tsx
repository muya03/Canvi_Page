import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { ArrowLeft, Calendar, Mic, ArrowUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const base = import.meta.env.BASE_URL;

export default function NoticiaRecogidaPropuestasPage() {
  return (
    <PageLayout
      title="¡Tu voz es nuestro programa! Éxito rotundo de la campaña de recogida de propuestas de CANVI"
      subtitle="ESTCE · FCHS · FCJE · FCS · Todas las facultades de la UJI"
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
            src={`${base}images/noticias/recogida-propuestas-portada.jpg`}
            alt="Equipo de CANVI en el stand de recogida de propuestas"
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
            <span>Participación · Propuestas · CEUJI</span>
          </div>

          {/* Lead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold text-secondary dark:text-foreground leading-relaxed mb-12 border-l-4 border-primary pl-6"
          >
            Durante la última semana, el equipo de CANVI ha decidido salir de los despachos y pisar el terreno que verdaderamente importa: hemos instalado stands en todas y cada una de las facultades y centros de la UJI. El objetivo: practicar la escucha activa, tomar nota de vuestras necesidades y recoger las propuestas que formarán la columna vertebral de nuestro plan de acción.
          </motion.p>

          <div className="prose prose-lg max-w-none text-foreground space-y-8">

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-muted-foreground leading-relaxed">
                Desde que asumimos la responsabilidad de liderar el Consell de l'Estudiantat, tuvimos claro que no queríamos ser un órgano distante. La política universitaria pierde todo su sentido si se desconecta de la realidad de las aulas. Por eso, esta campaña a pie de campus no ha sido un simple trámite, sino una declaración de intenciones sobre cómo entendemos la representación estudiantil.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-6 flex items-center gap-3">
                <span className="text-2xl">🏫</span> Una semana tomando el pulso a la UJI
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A lo largo de estos días de intenso trabajo en la <strong className="text-foreground">ESTCE, la FCHS, la FCJE y la FCS</strong>, nos hemos acercado a vosotros entre clases, en los pasillos y en las cafeterías.
              </p>

              <div className="space-y-4">
                {[
                  {
                    icon: Mic,
                    title: "Cientos de propuestas recogidas",
                    desc: "Hemos recibido ideas brillantes, quejas justas y sugerencias constructivas sobre infraestructuras, planes de estudio, horarios, salud mental y vida en el campus."
                  },
                  {
                    icon: ArrowUp,
                    title: "Hoja de ruta colaborativa",
                    desc: "Todas y cada una de estas aportaciones ya están siendo analizadas y valoradas por nuestro equipo. No son papel mojado; serán la base estricta de nuestro programa y de nuestras exigencias institucionales."
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
                src={`${base}images/noticias/recogida-propuestas-interior.jpg`}
                alt="Equipo de CANVI en el stand de la ESTCE durante la campaña de recogida de propuestas"
                className="w-full object-cover"
              />
              <p className="text-xs text-muted-foreground text-center py-3 px-4 bg-muted">
                Estudiantes de la ESTCE aportando sus ideas y propuestas en el stand de CANVI.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-4 flex items-center gap-3">
                <span className="text-2xl">⬆️</span> Un Consell de abajo hacia arriba: El fin del modelo de despacho
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Históricamente, muchos estudiantes han sentido que los órganos de representación eran entes opacos que tomaban decisiones de "arriba hacia abajo", imponiendo medidas sin consultar a los verdaderos afectados. En CANVI hemos venido a invertir esa pirámide.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Creemos firmemente que el Consell de l'Estudiantat debe construirse de abajo hacia arriba. Las mejores soluciones a los problemas de la universidad no nacen en reuniones a puerta cerrada, nacen de la experiencia diaria del estudiante que sufre la falta de enchufes en una biblioteca, del que no puede cuadrar sus horarios de prácticas o del que necesita alternativas de transporte. La escucha activa es nuestra mejor herramienta de gestión.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-black font-display text-secondary dark:text-foreground mb-4 flex items-center gap-3">
                <Eye size={24} /> Visibilizar al estudiante: La única representación real
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Visibilizar al estudiante significa ponerlo en el centro del debate universitario. Significa que, cuando nos sentemos frente al Rectorado o cualquier otra institución, no hablaremos de cifras abstractas, sino de vuestros problemas concretos, con nombres y apellidos.
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
                "La representación real no consiste en que unos pocos hablen por vosotros, sino en ser el altavoz que haga que vuestra propia voz resuene, alta y clara, en los lugares donde se toman las decisiones. Sin vosotros, el CEUJI es solo un acrónimo vacío."
              </p>
              <p className="text-primary font-black font-display uppercase tracking-wider text-sm mt-4">— CANVI · CEUJI</p>
            </motion.blockquote>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary/10 border border-primary/20 rounded-2xl p-8"
            >
              <p className="text-lg font-bold text-secondary dark:text-foreground leading-relaxed mb-4">
                Queremos daros las gracias a todas las personas que os habéis acercado a nuestros stands esta semana para compartir un rato, debatir y aportar vuestro granito de arena. Nos habéis demostrado que el estudiantado de la Jaume I está vivo, es crítico y tiene ganas de mejorar su entorno.
              </p>
              <p className="text-muted-foreground font-bold">
                En CANVI tomamos nota. Vuestras propuestas son nuestro motor, y juntos vamos a seguir transformando la UJI.
              </p>
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
