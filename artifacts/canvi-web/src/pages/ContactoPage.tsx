import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Instagram, MapPin, Phone, Clock } from "lucide-react";
import { useSubmitContact, contactSchema, type ContactInput } from "@/hooks/use-contact";
import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactoPage() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const mutation = useSubmitContact();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactInput) => {
    mutation.mutate(data, {
      onSuccess: () => {
        toast({
          title: t("contact.success"),
          description: t("contact.success.desc"),
        });
        reset();
      },
      onError: () => {
        toast({
          title: t("contact.error"),
          description: t("contact.error.desc"),
          variant: "destructive"
        });
      }
    });
  };

  return (
    <PageLayout 
      title={t("page.contact.header.title")} 
      subtitle={t("page.contact.header.subtitle")} 
      badge={t("contact.badge")}
    >
      {/* Contact Section */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col h-full"
            >
              <h2 className="section-header text-secondary dark:text-foreground">{t("contact.title")}</h2>
              <div className="accent-bar bg-primary"></div>
              
              <p className="text-xl text-foreground mb-12 leading-relaxed">
                {t("contact.desc")}
              </p>

              <div className="space-y-8 mb-12">
                <a href="https://instagram.com/canvi_uji" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 text-lg font-bold hover:text-primary transition-colors group text-foreground p-4 rounded-xl hover:bg-muted border border-transparent hover:border-border">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-border shadow-sm">
                    <Instagram size={28} />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1 font-sans">Instagram</span>
                    @canvi_uji
                  </div>
                </a>
                
                <div className="flex items-center gap-5 text-lg font-bold text-foreground p-4 rounded-xl">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center border border-border shadow-sm">
                    <Mail size={28} className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1 font-sans">Email</span>
                    info@canvi.es
                  </div>
                </div>

                <div className="flex items-center gap-5 text-lg font-bold text-foreground p-4 rounded-xl">
                  <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center border border-border shadow-sm">
                    <Phone size={28} className="text-primary" />
                  </div>
                  <div>
                    <span className="block text-sm text-muted-foreground uppercase tracking-wider mb-1 font-sans">Teléfono</span>
                    +34 964 123 456
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-auto w-full h-64 bg-muted rounded-xl border border-border overflow-hidden relative group">
                <div className="absolute inset-0 bg-[url('https://maps.wikimedia.org/osm-intl/15/16474/12426.png')] opacity-50 bg-cover bg-center mix-blend-luminosity dark:invert"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 group-hover:bg-black/10 transition-colors">
                  <div className="bg-background text-foreground px-4 py-2 rounded-full font-bold shadow-md flex items-center gap-2">
                    <MapPin size={18} className="text-primary" />
                    Ver en Google Maps
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <form onSubmit={handleSubmit(onSubmit)} className="bg-card p-8 md:p-12 rounded-2xl border border-border shadow-xl border-t-8 border-t-primary h-full">
                <h3 className="text-3xl font-black mb-8 font-display uppercase tracking-wider text-secondary dark:text-foreground">
                  {t("contact.form.title")}
                </h3>
                
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t("contact.form.name")}</label>
                    <Input 
                      placeholder="Ej. Laura García" 
                      {...register("name")}
                      className={`bg-background border-border h-14 text-lg ${errors.name ? "border-destructive focus-visible:border-destructive" : ""}`}
                    />
                    {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t("contact.form.email")}</label>
                    <Input 
                      type="email" 
                      placeholder="Ej. laura@uji.es" 
                      {...register("email")}
                      className={`bg-background border-border h-14 text-lg ${errors.email ? "border-destructive focus-visible:border-destructive" : ""}`}
                    />
                    {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t("contact.form.message")}</label>
                    <Textarea 
                      placeholder="Escribe tu mensaje, propuesta o duda aquí..." 
                      {...register("message")}
                      className={`bg-background border-border min-h-[200px] text-lg resize-y ${errors.message ? "border-destructive focus-visible:border-destructive" : ""}`}
                    />
                    {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-xl font-display font-bold uppercase tracking-wider rounded-sm h-16 bg-primary hover:bg-primary/90 text-primary-foreground mt-4 shadow-lg"
                    disabled={mutation.isPending}
                  >
                    {mutation.isPending ? t("contact.form.sending") : t("contact.form.submit")}
                  </Button>
                </div>
              </form>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Oficina de atención */}
      <section className="py-20 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Clock size={32} />
          </div>
          <h2 className="text-3xl font-black text-secondary dark:text-foreground mb-6">{t("page.contact.office.title")}</h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {t("page.contact.office.desc")}
          </p>
        </div>
      </section>

    </PageLayout>
  );
}
