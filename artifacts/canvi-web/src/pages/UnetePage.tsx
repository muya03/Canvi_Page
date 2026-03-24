import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/hooks/use-toast";
import { Users, BookOpen, HeartHandshake } from "lucide-react";

// Local schema for the Join form
const joinSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  role: z.string().min(1, "Selecciona una opción"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type JoinInput = z.infer<typeof joinSchema>;

export default function UnetePage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset, setValue, watch } = useForm<JoinInput>({
    resolver: zodResolver(joinSchema),
    defaultValues: {
      role: ""
    }
  });

  const selectedRole = watch("role");

  const onSubmit = async (data: JoinInput) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Join request:", data);
    
    toast({
      title: t("contact.success"),
      description: "Nos pondremos en contacto contigo pronto.",
    });
    reset();
    setValue("role", "");
  };

  return (
    <PageLayout 
      title={t("page.join.header.title")} 
      subtitle={t("page.join.header.subtitle")} 
      badge={t("nav.unete")}
    >
      {/* Hero de la sección */}
      <section className="py-24 bg-primary text-primary-foreground text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black font-display mb-6 tracking-tight text-white leading-none">
              {t("join.title")}
            </h2>
            <p className="text-2xl font-medium text-white/90">
              {t("page.join.header.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Por qué unirte */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.join.reasons.title")}</h2>
            <div className="accent-bar bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center p-6"
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <Users size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("page.join.reasons.1.title")}</h3>
              <p className="text-muted-foreground text-lg">{t("page.join.reasons.1.desc")}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <BookOpen size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("page.join.reasons.2.title")}</h3>
              <p className="text-muted-foreground text-lg">{t("page.join.reasons.2.desc")}</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="w-20 h-20 mx-auto bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                <HeartHandshake size={40} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t("page.join.reasons.3.title")}</h3>
              <p className="text-muted-foreground text-lg">{t("page.join.reasons.3.desc")}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cómo participar & Formulario */}
      <section className="py-24 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="section-header text-secondary dark:text-foreground">{t("page.join.steps.title")}</h2>
              <div className="accent-bar bg-primary"></div>
              
              <div className="space-y-8 mt-10">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-black font-display text-xl shrink-0 shadow-md">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{t("page.join.steps.1")}</h4>
                    <p className="text-muted-foreground">Completa el formulario de la derecha con tus datos básicos y el área en la que te gustaría involucrarte.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-black font-display text-xl shrink-0 shadow-sm">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{t("page.join.steps.2")}</h4>
                    <p className="text-muted-foreground">Un miembro de nuestro equipo te contactará para darte la bienvenida y resolver cualquier duda inicial.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-black font-display text-xl shrink-0 shadow-sm">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{t("page.join.steps.3")}</h4>
                    <p className="text-muted-foreground">Te invitaremos a una de nuestras reuniones de trabajo o asambleas abiertas para que veas cómo funcionamos.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center font-black font-display text-xl shrink-0 shadow-sm">4</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">{t("page.join.steps.4")}</h4>
                    <p className="text-muted-foreground">Una vez nos conozcas, tú decides el nivel de compromiso y tiempo que quieres dedicarle al proyecto.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-card p-8 md:p-10 rounded-xl border border-border shadow-lg border-t-4 border-t-primary">
                <h3 className="text-2xl font-bold mb-6 font-display uppercase tracking-wider text-foreground">
                  {t("join.button")}
                </h3>
                
                <div className="space-y-5">
                  <div>
                    <Input 
                      placeholder={t("contact.form.name")} 
                      {...register("name")}
                      className={`bg-background border-border h-12 ${errors.name ? "border-destructive focus-visible:border-destructive" : ""}`}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div>
                    <Input 
                      type="email" 
                      placeholder={t("contact.form.email")} 
                      {...register("email")}
                      className={`bg-background border-border h-12 ${errors.email ? "border-destructive focus-visible:border-destructive" : ""}`}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <Select value={selectedRole} onValueChange={(val) => setValue("role", val, { shouldValidate: true })}>
                      <SelectTrigger className={`bg-background border-border h-12 ${errors.role ? "border-destructive focus-visible:border-destructive" : ""}`}>
                        <SelectValue placeholder={t("page.join.form.role")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="delegado">{t("page.join.form.role.opt1")}</SelectItem>
                        <SelectItem value="consell">{t("page.join.form.role.opt2")}</SelectItem>
                        <SelectItem value="eventos">{t("page.join.form.role.opt3")}</SelectItem>
                        <SelectItem value="comunicacion">{t("page.join.form.role.opt4")}</SelectItem>
                        <SelectItem value="otro">{t("page.join.form.role.opt5")}</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.role && <p className="text-destructive text-sm mt-1">{errors.role.message}</p>}
                  </div>
                  
                  <div>
                    <Textarea 
                      placeholder="Cuéntanos un poco sobre ti, qué estudias y por qué quieres unirte..." 
                      {...register("message")}
                      className={`bg-background border-border min-h-[120px] ${errors.message ? "border-destructive focus-visible:border-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg font-display font-bold uppercase tracking-wider rounded-sm h-14 bg-primary hover:bg-primary/90 text-primary-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? t("contact.form.sending") : "Enviar Solicitud"}
                  </Button>
                </div>
              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-header text-secondary dark:text-foreground">{t("page.join.faq.title")}</h2>
            <div className="accent-bar bg-primary mx-auto"></div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-border">
              <AccordionTrigger className="text-lg font-bold hover:text-primary hover:no-underline">
                {t("page.join.faq.1.q")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {t("page.join.faq.1.a")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2" className="border-border">
              <AccordionTrigger className="text-lg font-bold hover:text-primary hover:no-underline">
                {t("page.join.faq.2.q")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {t("page.join.faq.2.a")}
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3" className="border-border">
              <AccordionTrigger className="text-lg font-bold hover:text-primary hover:no-underline">
                {t("page.join.faq.3.q")}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {t("page.join.faq.3.a")}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

    </PageLayout>
  );
}
