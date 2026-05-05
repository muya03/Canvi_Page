import { useState, useCallback, useRef } from "react";
import { motion, useMotionValue, useTransform, useAnimation, AnimatePresence } from "framer-motion";
import { RotateCcw, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const GOOD: string[] = [
  "Referéndum sobre calendarios de exámenes finales",
  "Cambiar normativa de evaluación para ganar más derechos",
  "Aulas de estudio 24h / 7 días, incluyendo fines de semana",
  "Calendario académico justo: clases finalizarán el miércoles anterior a los exámenes",
  "Tolerancia oficial en retrasos de transporte público en días de examen",
  "Presupuesto propio para cada delegación de centro",
  "Estructuración y activación de las delegaciones con apoyo técnico",
  "Manual de Iniciación a la UJI para estudiantes de primer año",
  "Comisión de asociaciones con voz en el Consell",
  "Autonomía e independencia del Consell de l'Estudiantat",
  "Transparencia total: portal público, agenda y boletín mensual",
  "Representación estudiantil en sectoriales nacionales",
  "Más psicólogos en el SAP para reducir tiempos de espera",
  "Becas y ayudas basadas en la necesidad real, no solo en el mérito",
  "Menú de comedor subvencionado (modelo Universidad de Granada)",
  "Zonas de descanso y ocio en el campus",
  "Zonas de desconexión digital para favorecer el descanso mental",
  "Ampliación del horario de la sala de musculación",
  "Mejora de la infraestructura de la biblioteca: enchufes y conectividad",
  "Modernización del servicio de reprografía con buzones sin colas",
  "Mejora de la Casa del Estudiante",
  "Líneas nocturnas de bus en época de exámenes",
  "Más frecuencia de TRAM y autobús en horas punta",
  "Protocolo oficial de margen de tiempo por retraso de transporte",
  "Normativa de graduación para corregir irregularidades actuales",
  "Conciliación entre representación estudiantil y asistencia a clase",
  "Dispensa de asistencia por conciliación laboral",
  "Prohibición de la compra obligatoria de libros y software",
  "Carnet universitario físico como identificación en la UJI",
  "Exámenes siempre disponibles en valenciano y castellano",
  "Centro examinador multilingüe más allá del inglés",
  "Escucha activa a la comunidad de estudiantes internacionales",
  "Campañas de concienciación contra el acoso en la UJI",
  "Mejora de la inclusión del estudiantado con discapacidad",
  "Actividades de integración para que los estudiantes se conozcan",
  "Fomento de nuevas metodologías docentes e IA en el aprendizaje",
  "Licencias de software necesarias para el seguimiento de estudios",
  "Normativa de paro académico conforme a la LOSU",
];

const BAD: string[] = [
  "Hacer más fiestas porque es lo que realmente importa en la universidad.",
  "No tratar el problema de la vivienda porque eso es cosa de cada uno.",
  "Poner consolas en los pasillos para que la gente no se aburra entre clases.",
  "No hablar nunca de tasas ni precios públicos porque es un tema complicado.",
  "Quitar reuniones del consejo y decidir cosas por WhatsApp sin más.",
  "No meterse en temas de salud mental porque no es competencia nuestra.",
  "Hacer torneos de videojuegos en vez de jornadas académicas.",
  "No defender la universidad pública porque 'cada uno que elija la que quiera'.",
  "Usar el presupuesto solo en ocio sin explicar en qué se gasta.",
  "No ir a los órganos de representación porque son aburridos.",
  "Hacer propuestas sin hablar con estudiantes previamente.",
  "Ignorar completamente los problemas de transporte al campus.",
  "No colaborar con asociaciones estudiantiles porque 'vamos por libre'.",
  "No informar nunca de lo que hace el consejo.",
  "Decidir propuestas según lo que le guste a un grupo pequeño de amigos.",
  "No preocuparse por la inclusión ni la accesibilidad.",
  "Pedir barra libre en eventos oficiales sin pensar en normativa.",
  "No tener ningún plan ni programa, solo ideas sueltas.",
  "Evitar cualquier conflicto con el rectorado para no complicarse.",
  "Hacer encuestas y luego ignorar los resultados.",
  "No defender derechos del estudiantado si requiere esfuerzo.",
  "Centrar todo en redes sociales sin acciones reales.",
  "No coordinarse con otros consejos o universidades.",
  "Prometer cosas que no dependen del consejo como si sí dependieran.",
  "Ignorar completamente becas y ayudas al estudio.",
  "No rendir cuentas ni explicar decisiones.",
  "Hacer iniciativas copiadas sin adaptarlas a la universidad.",
  "No formarse sobre cómo funciona la universidad.",
  "Proponer eliminar normas sin ofrecer alternativas.",
  "No asistir a reuniones importantes por falta de interés.",
];

type Card = { text: string; good: boolean };

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getDeck(): Card[] {
  const good = shuffle(GOOD).slice(0, 8).map(text => ({ text, good: true }));
  const bad = shuffle(BAD).slice(0, 7).map(text => ({ text, good: false }));
  return shuffle([...good, ...bad]);
}

const THROW_DIST = 600;
const SWIPE_THRESHOLD = 90;

export default function TinderPropuestasPage() {
  const [phase, setPhase] = useState<"intro" | "game" | "results">("intro");
  const [deck, setDeck] = useState<Card[]>([]);
  const [idx, setIdx] = useState(0);
  const [liked, setLiked] = useState(0);
  const [likedGood, setLikedGood] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const busy = useRef(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-250, 0, 250], [-18, 0, 18]);
  const likeOpacity = useTransform(x, [25, 90], [0, 1]);
  const nopeOpacity = useTransform(x, [-90, -25], [1, 0]);
  const controls = useAnimation();

  const advance = useCallback(
    (didLike: boolean, cardGood: boolean) => {
      const newLiked = liked + (didLike ? 1 : 0);
      const newGood = likedGood + (didLike && cardGood ? 1 : 0);
      setLiked(newLiked);
      setLikedGood(newGood);

      if (idx + 1 >= deck.length) {
        setTimeout(() => {
          setPhase("results");
          setTimeout(() => setShowCTA(true), 2200);
        }, 200);
      } else {
        x.set(0);
        controls.set({ opacity: 1 });
        setIdx(i => i + 1);
      }
      busy.current = false;
    },
    [liked, likedGood, idx, deck.length, x, controls]
  );

  const flyOut = useCallback(
    async (right: boolean) => {
      if (busy.current) return;
      busy.current = true;
      const card = deck[idx];
      await controls.start({
        x: right ? THROW_DIST : -THROW_DIST,
        opacity: 0,
        transition: { duration: 0.28, ease: "easeIn" },
      });
      advance(right, card.good);
    },
    [controls, deck, idx, advance]
  );

  const handleDragEnd = useCallback(
    (_: unknown, info: { offset: { x: number } }) => {
      if (info.offset.x > SWIPE_THRESHOLD) flyOut(true);
      else if (info.offset.x < -SWIPE_THRESHOLD) flyOut(false);
      else controls.start({ x: 0, transition: { type: "spring", stiffness: 380, damping: 26 } });
    },
    [flyOut, controls]
  );

  const startGame = () => {
    const d = getDeck();
    setDeck(d);
    setIdx(0);
    setLiked(0);
    setLikedGood(0);
    setShowCTA(false);
    busy.current = false;
    x.set(0);
    controls.set({ x: 0, opacity: 1 });
    setPhase("game");
  };

  const pct = liked > 0 ? Math.round((likedGood / liked) * 100) : 0;
  const progress = deck.length > 0 ? (idx / deck.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-lg mx-auto px-4 py-3.5 flex items-center justify-between">
          <Link href="/">
            <button className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors font-bold font-display uppercase tracking-wider">
              <ArrowLeft size={15} /> CANVI
            </button>
          </Link>
          <span className="font-display font-black text-secondary dark:text-foreground tracking-tight">
            Tinder de Propuestas
          </span>
          <span className="text-xs text-primary font-bold uppercase tracking-widest hidden sm:block">
            UJI · 2026
          </span>
          <span className="text-base sm:hidden">🗳️</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center p-4 py-8">
        <AnimatePresence mode="wait">

          {/* ── INTRO ── */}
          {phase === "intro" && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="max-w-sm w-full text-center"
            >
              <div className="text-7xl mb-5">🗳️</div>
              <h1 className="font-display font-black text-4xl md:text-5xl text-secondary dark:text-foreground mb-2 leading-tight">
                Tinder de<br />Propuestas
              </h1>
              <p className="text-primary font-black uppercase tracking-widest text-xs mb-8">
                CANVI · Eleccions CEUJI · 14 de maig
              </p>

              <div className="bg-muted border border-border rounded-2xl p-5 mb-6 text-left space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Estas propuestas son para el Consell de l'Estudiantat de la UJI, de cara a las elecciones del{" "}
                  <strong className="text-foreground">14 de mayo</strong>. Lo que hace un consell puede realmente incidir en la vida de un estudiante.
                </p>
                <div className="space-y-2.5">
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-9 h-9 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 flex items-center justify-center text-lg shrink-0">👉</span>
                    <span className="text-foreground">Desliza a la <strong>derecha</strong> si te gusta</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="w-9 h-9 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center text-lg shrink-0">👈</span>
                    <span className="text-foreground">Desliza a la <strong>izquierda</strong> si no te gusta</span>
                  </div>
                </div>
              </div>

              <Button
                onClick={startGame}
                className="bg-primary hover:bg-primary/90 text-white font-display font-black uppercase tracking-wider rounded-sm text-lg w-full py-6"
              >
                Empezar 🚀
              </Button>
            </motion.div>
          )}

          {/* ── GAME ── */}
          {phase === "game" && deck.length > 0 && (
            <motion.div
              key="game"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="max-w-sm w-full"
            >
              {/* Progress bar */}
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-primary rounded-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <span className="text-xs font-black text-muted-foreground tabular-nums w-12 text-right">
                  {idx + 1} / {deck.length}
                </span>
              </div>

              {/* Card stack */}
              <div className="relative h-[430px]">
                {/* Background shadow cards */}
                {[2, 1].map(offset => {
                  if (idx + offset >= deck.length) return null;
                  return (
                    <div
                      key={`shadow-${idx + offset}`}
                      className="absolute inset-0 bg-card border border-border rounded-2xl"
                      style={{
                        transform: `scale(${1 - offset * 0.045}) translateY(${offset * 14}px)`,
                        zIndex: 10 - offset,
                      }}
                    />
                  );
                })}

                {/* Active draggable card */}
                <motion.div
                  key={`card-${idx}`}
                  animate={controls}
                  style={{ x, rotate, zIndex: 20 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.65}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 rounded-2xl cursor-grab active:cursor-grabbing select-none touch-none"
                >
                  <div className="w-full h-full bg-card border-2 border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                    {/* Top stripe */}
                    <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-primary shrink-0" />

                    {/* ME GUSTA label */}
                    <motion.div
                      style={{ opacity: likeOpacity }}
                      className="absolute top-5 left-4 z-30 pointer-events-none"
                    >
                      <span className="block border-[3px] border-green-500 text-green-500 font-black text-base px-3 py-0.5 rounded tracking-widest rotate-[-12deg] bg-background/80 backdrop-blur-sm">
                        ME GUSTA ✅
                      </span>
                    </motion.div>

                    {/* PASO label */}
                    <motion.div
                      style={{ opacity: nopeOpacity }}
                      className="absolute top-5 right-4 z-30 pointer-events-none"
                    >
                      <span className="block border-[3px] border-red-500 text-red-500 font-black text-base px-3 py-0.5 rounded tracking-widest rotate-[12deg] bg-background/80 backdrop-blur-sm">
                        PASO ❌
                      </span>
                    </motion.div>

                    {/* Card content */}
                    <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-6 text-3xl shrink-0">
                        🗳️
                      </div>
                      <p className="text-xl font-bold text-secondary dark:text-foreground leading-relaxed">
                        {deck[idx]?.text}
                      </p>
                    </div>

                    <p className="text-[11px] text-muted-foreground/60 text-center pb-4 font-bold tracking-[0.2em] uppercase shrink-0">
                      ← Paso &nbsp;·&nbsp; Me gusta →
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center justify-center gap-14 mt-6">
                <button
                  onClick={() => flyOut(false)}
                  className="w-[62px] h-[62px] rounded-full border-2 border-red-400/50 text-red-500 flex items-center justify-center text-2xl hover:border-red-500 hover:bg-red-500/5 transition-all active:scale-90 shadow-sm"
                  aria-label="No me gusta"
                >
                  ❌
                </button>
                <button
                  onClick={() => flyOut(true)}
                  className="w-[62px] h-[62px] rounded-full border-2 border-green-400/50 text-green-500 flex items-center justify-center text-2xl hover:border-green-500 hover:bg-green-500/5 transition-all active:scale-90 shadow-sm"
                  aria-label="Me gusta"
                >
                  💚
                </button>
              </div>
            </motion.div>
          )}

          {/* ── RESULTS ── */}
          {phase === "results" && (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="max-w-sm w-full text-center"
            >
              <div className="text-6xl mb-5">🎉</div>

              <h2 className="font-display font-black text-3xl md:text-4xl text-secondary dark:text-foreground mb-6 leading-tight">
                ¡Has hecho match!
              </h2>

              <div className="bg-primary/10 border border-primary/20 rounded-2xl p-7 mb-5">
                <p className="text-lg font-bold text-secondary dark:text-foreground leading-relaxed mb-3">
                  El{" "}
                  <motion.span
                    className="text-primary font-black font-display inline-block"
                    initial={{ fontSize: "1rem" }}
                    animate={{ fontSize: "3.5rem" }}
                    transition={{ delay: 0.3, duration: 0.5, ease: "backOut" }}
                  >
                    {pct}%
                  </motion.span>
                  {" "}de las propuestas que te han gustado son{" "}
                  <strong className="text-secondary dark:text-foreground">propuestas de CANVI</strong>.
                </p>
                <p className="text-sm text-muted-foreground">
                  Te han gustado <strong className="text-foreground">{liked}</strong> de {deck.length} propuestas,
                  de las que <strong className="text-primary">{likedGood}</strong> son de CANVI.
                </p>
              </div>

              <AnimatePresence>
                {showCTA && (
                  <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="bg-secondary rounded-2xl p-6 mb-6 border border-secondary/50"
                  >
                    <p className="text-white font-black text-xl leading-relaxed">
                      Recuerda votar a{" "}
                      <span className="text-primary">CANVI</span>{" "}
                      el <strong>14 de mayo</strong> para mejorar la UJI. 🗳️
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex gap-3">
                <Button
                  onClick={startGame}
                  variant="outline"
                  className="flex-1 font-display font-black uppercase tracking-wider rounded-sm border-2"
                >
                  <RotateCcw size={14} className="mr-2" /> Otra vez
                </Button>
                <Button
                  asChild
                  className="flex-1 bg-primary hover:bg-primary/90 text-white font-display font-black uppercase tracking-wider rounded-sm"
                >
                  <Link href="/propuestas">Ver propuestas</Link>
                </Button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  );
}
