import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";

const titulars = [
  { initials: "PI", name: "Praise Ijeoma Iheanyi Anyanwu", role: "Cabeza de Lista", featured: true },
  { initials: "AL", name: "Álex López Damas", role: "Membre del Consell" },
  { initials: "SP", name: "Sergi Pérez Serra", role: "Delegat ESTCE" },
  { initials: "YR", name: "Yolanda Rico Pyper", role: "Delegada FCHS" },
  { initials: "AB", name: "Alexandru Cristian Butaru", role: "Delegat FCJE" },
  { initials: "IL", name: "Irene Llansola Rico", role: "Delegada FCS" },
  { initials: "OE", name: "Otman El Kakmaoui Sakif", role: "Membre del Consell" },
  { initials: "KA", name: "Karen Abrego Rosas", role: "Membre del Consell" },
  { initials: "DB", name: "Dhirar Abdelkader Bahloul Rouab", role: "Membre del Consell" },
  { initials: "SC", name: "Silvia Climent Perelló", role: "Membre del Consell" },
  { initials: "PV", name: "Pau Valcárcel Redón", role: "Membre del Consell" },
  { initials: "LG", name: "Lydia Gómez López", role: "Membre del Consell" },
  { initials: "ÓS", name: "Óscar Sáez Martín", role: "Membre del Consell" },
  { initials: "MP", name: "Marina Peiro Comba", role: "Membre del Consell" },
  { initials: "FS", name: "Favio Scarfo Manzaneda", role: "Membre del Consell" },
  { initials: "VN", name: "Valeria Nuño Gil", role: "Membre del Consell" },
  { initials: "VC", name: "Valentín Carpentier Anglés", role: "Membre del Consell" },
  { initials: "NG", name: "Nagore García Miravet", role: "Membre del Consell" },
  { initials: "GV", name: "Germán Valderrama García", role: "Membre del Consell" },
  { initials: "YE", name: "Yousra Reklaoui El Hadri", role: "Membre del Consell" },
  { initials: "JC", name: "Joan Cerezuela Soto", role: "Membre del Consell" },
  { initials: "EA", name: "Esther María Alarcón García", role: "Membre del Consell" },
  { initials: "GN", name: "Gabriel Guitérrez Navarro", role: "Membre del Consell" },
  { initials: "AG", name: "Aday Guerra Suárez", role: "Membre del Consell" },
  { initials: "EM", name: "Eduardo Martín Fayos", role: "Membre del Consell" },
  { initials: "AM", name: "Alejandro Morera Canet", role: "Membre del Consell" },
  { initials: "MA", name: "Mohamed Al Howaidi Nasralla", role: "Membre del Consell" },
  { initials: "SB", name: "Santiago Bernabé Hernández", role: "Membre del Consell" },
];

const suplents = [
  { initials: "MC", name: "María Inés Ciotea Marginean" },
  { initials: "AMG", name: "Álex Macián García" },
  { initials: "IM", name: "Iris Moreno Barco" },
  { initials: "MM", name: "Manuel Morrondo Bielsa" },
  { initials: "CZ", name: "Christopher Ziolkowski Gilgado" },
  { initials: "CM", name: "Claudia Martín Fernández" },
  { initials: "AIM", name: "Álvaro Ionut Moraru" },
  { initials: "IC", name: "Ilyas Chtatou" },
];

const delegados = [
  { initials: "SP", name: "Sergi Pérez Serra", faculty: "ESTCE", fullName: "Escola Superior de Tecnologia i Ciències Experimentals" },
  { initials: "IL", name: "Irene Llansola Rico", faculty: "FCS", fullName: "Facultat de Ciències de la Salut" },
  { initials: "YR", name: "Yolanda Rico Pyper", faculty: "FCHS", fullName: "Facultat de Ciències Humanes i Socials" },
  { initials: "AB", name: "Alexandru Cristian Butaru", faculty: "FCJE", fullName: "Facultat de Ciències Jurídiques i Econòmiques" },
];

export default function QuienesSomosPage() {
  const { t } = useLanguage();

  const milestones = [
    { year: t("page.about.timeline.1.year"), desc: t("page.about.timeline.1.desc") },
    { year: t("page.about.timeline.2.year"), desc: t("page.about.timeline.2.desc") },
    { year: t("page.about.timeline.3.year"), desc: t("page.about.timeline.3.desc") },
    { year: t("page.about.timeline.4.year"), desc: t("page.about.timeline.4.desc") },
    { year: t("page.about.timeline.5.year"), desc: t("page.about.timeline.5.desc") },
  ];

  return (
    <PageLayout
      title={t("page.about.header.title")}
      subtitle={t("page.about.header.subtitle")}
      badge={t("about.badge")}
    >
      {/* Nuestra Historia */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-header text-secondary dark:text-foreground text-center">{t("page.about.history.title")}</h2>
            <div className="accent-bar bg-primary mx-auto mb-10"></div>
            <div className="space-y-6 text-lg text-foreground leading-relaxed">
              <p>{t("page.about.history.p1")}</p>
              <p>{t("page.about.history.p2")}</p>
              <p>{t("page.about.history.p3")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nuestro Equipo — Titulars */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.about.team.title")}</h2>
            <div className="accent-bar bg-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground text-lg">
              {titulars.length} membres titulars · Candidatura al Claustre de l'UJI
            </p>
          </motion.div>

          {/* Featured: Cabeza de lista */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground p-10 rounded-xl shadow-lg text-center flex flex-col items-center mb-8"
          >
            <div className="w-28 h-28 rounded-full bg-white/20 text-white flex items-center justify-center text-3xl font-bold font-display tracking-widest mb-6 border-4 border-white/30">
              PI
            </div>
            <h3 className="text-2xl font-black mb-1 text-white">Praise Ijeoma Iheanyi Anyanwu</h3>
            <p className="text-sm font-bold uppercase tracking-widest text-white/80 mb-4">Cabeza de Lista · Candidata a Presidenta</p>
            <p className="text-white/90 max-w-xl">Lidera la candidatura de Canvi 2026 amb vocació de servici i compromís amb tota la comunitat universitària de l'UJI.</p>
          </motion.div>

          {/* Resto de titulars */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {titulars.slice(1).map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="bg-card p-5 rounded-xl border border-border shadow-sm text-center flex flex-col items-center hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold font-display tracking-widest mb-3">
                  {member.initials}
                </div>
                <h3 className="text-sm font-bold leading-snug mb-1">{member.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary/80">{member.role}</p>
              </motion.div>
            ))}
          </div>

          {/* Suplents */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px bg-border flex-1"></div>
              <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground px-3">
                Suplents
              </span>
              <div className="h-px bg-border flex-1"></div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {suplents.map((member, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-card/60 p-4 rounded-lg border border-border text-center flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold font-display mb-2">
                    {member.initials}
                  </div>
                  <h3 className="text-xs font-semibold leading-snug text-foreground">{member.name}</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Suplent</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Delegados de Centro */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <span className="section-title text-primary">Apoyo real</span>
            <h2 className="section-header text-secondary dark:text-foreground">Els 4 delegats de centre de l'UJI formen part de Canvi</h2>
            <div className="accent-bar bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-14">
              Els quatre delegats de centre de la Universitat Jaume I — les persones elegides pels seus companys per a representar-los en les seues facultats — formen part del projecte Canvi. Açò parla per si sol.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {delegados.map((del, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card border border-border border-t-4 border-t-primary rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold font-display tracking-widest mb-4 mx-auto">
                  {del.initials}
                </div>
                <div className="inline-block bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                  {del.faculty}
                </div>
                <h3 className="text-base font-bold mb-2 leading-snug">{del.name}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{del.fullName}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Trayectoria */}
      <section className="py-24 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.about.timeline.title")}</h2>
            <div className="accent-bar bg-primary mx-auto"></div>
          </motion.div>

          <div className="relative border-l-4 border-border ml-4">
            {milestones.map((ms, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="mb-10 ml-8 relative"
              >
                <div className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-primary border-4 border-background"></div>
                <div className="bg-card border border-border p-6 rounded-xl shadow-sm">
                  <span className="text-primary font-bold font-display text-2xl tracking-tight block mb-2">{ms.year}</span>
                  <p className="text-foreground text-lg font-medium">{ms.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black font-display mb-10 tracking-tight text-white">
              {t("page.about.cta.title")}
            </h2>
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-display font-bold uppercase tracking-wider rounded-sm px-10 py-7 h-auto text-lg shadow-xl" asChild>
              <Link href="/unete">{t("nav.unete")}</Link>
            </Button>
          </motion.div>
        </div>
      </section>

    </PageLayout>
  );
}
