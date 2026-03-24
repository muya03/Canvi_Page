import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Instagram, MapPin } from "lucide-react";
import { useSubmitContact, contactSchema, type ContactInput } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

export function Contact() {
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
    <section id="contacto" className="py-24 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title text-primary">{t("contact.badge")}</h2>
            <h3 className="section-header text-secondary dark:text-foreground">{t("contact.title")}</h3>
            <div className="accent-bar bg-primary"></div>
            
            <p className="text-xl text-foreground mb-10 leading-relaxed">
              {t("contact.desc")}
            </p>

            <div className="space-y-6">
              <a href="https://instagram.com/informerjaumei" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-lg font-bold hover:text-primary transition-colors group text-foreground">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors border border-border">
                  <Instagram />
                </div>
                @informerjaumei
              </a>
              <div className="flex items-center gap-4 text-lg font-bold text-foreground">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border border-border">
                  <MapPin />
                </div>
                Universitat Jaume I, Castelló
              </div>
              <div className="flex items-center gap-4 text-lg font-bold text-foreground">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center border border-border">
                  <Mail />
                </div>
                contacto@canvi-uji.es
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="bg-card p-8 md:p-10 rounded-xl border border-border shadow-sm border-t-4 border-t-primary">
              <h3 className="text-2xl font-bold mb-6 font-display uppercase tracking-wider text-foreground">{t("contact.form.title")}</h3>
              
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
                  <Textarea 
                    placeholder={t("contact.form.message")} 
                    {...register("message")}
                    className={`bg-background border-border min-h-[150px] ${errors.message ? "border-destructive focus-visible:border-destructive" : ""}`}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg font-display font-bold uppercase tracking-wider rounded-sm h-14 bg-primary hover:bg-primary/90 text-primary-foreground"
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
  );
}