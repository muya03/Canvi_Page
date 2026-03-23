import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Instagram, MapPin } from "lucide-react";
import { useSubmitContact, contactSchema, type ContactInput } from "@/hooks/use-contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const { toast } = useToast();
  const mutation = useSubmitContact();
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactInput) => {
    mutation.mutate(data, {
      onSuccess: (res) => {
        toast({
          title: "¡Mensaje Enviado!",
          description: res.message,
        });
        reset();
      },
      onError: () => {
        toast({
          title: "Error",
          description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
          variant: "destructive"
        });
      }
    });
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">Únete al <span className="text-gradient from-accent to-secondary">Cambio</span></h2>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              ¿Tienes ideas? ¿Quieres participar en la representación estudiantil? 
              Escríbenos y formemos juntos el futuro de la Universitat Jaume I.
            </p>

            <div className="space-y-6">
              <a href="#" className="flex items-center gap-4 text-lg font-medium hover:text-secondary transition-colors group">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="text-foreground" />
                </div>
                Síguenos en Instagram
              </a>
              <div className="flex items-center gap-4 text-lg font-medium">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
                  <MapPin className="text-foreground" />
                </div>
                Universitat Jaume I, Castellón
              </div>
              <div className="flex items-center gap-4 text-lg font-medium">
                <div className="w-12 h-12 rounded-full glass-panel flex items-center justify-center">
                  <Mail className="text-foreground" />
                </div>
                contacto@canvi-uji.es
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-panel p-8 md:p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-6">Envíanos un mensaje</h3>
              
              <div className="space-y-5">
                <div>
                  <Input 
                    placeholder="Tu nombre" 
                    {...register("name")}
                    className={errors.name ? "border-destructive focus-visible:border-destructive" : ""}
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <Input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    {...register("email")}
                    className={errors.email ? "border-destructive focus-visible:border-destructive" : ""}
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
                </div>
                
                <div>
                  <Textarea 
                    placeholder="¿Qué te gustaría cambiar de la UJI?" 
                    {...register("message")}
                    className={errors.message ? "border-destructive focus-visible:border-destructive" : ""}
                  />
                  {errors.message && <p className="text-destructive text-sm mt-1">{errors.message.message}</p>}
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-lg"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </div>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
