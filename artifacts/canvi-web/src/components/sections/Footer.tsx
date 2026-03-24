import { Instagram } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8 border-t-[8px] border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          <div className="flex flex-col items-start">
            <img 
              src={`${import.meta.env.BASE_URL}canvi-logo-completo.png`} 
              alt="Canvi Logo" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-secondary-foreground/80 font-medium">
              {t("footer.desc")}
            </p>
          </div>

          <div className="flex flex-col items-start md:items-center">
            <h4 className="font-display font-bold text-lg uppercase tracking-wider mb-6 text-white">Links</h4>
            <div className="flex flex-col space-y-3 text-secondary-foreground/80 font-medium">
              <Link href="/" className="hover:text-primary transition-colors">{t("nav.inicio")}</Link>
              <Link href="/quienes-somos" className="hover:text-primary transition-colors">{t("nav.nosotros")}</Link>
              <Link href="/propuestas" className="hover:text-primary transition-colors">{t("nav.propuestas")}</Link>
              <Link href="/logros" className="hover:text-primary transition-colors">{t("nav.logros")}</Link>
              <Link href="/noticias" className="hover:text-primary transition-colors">{t("nav.noticias")}</Link>
              <Link href="/unete" className="hover:text-primary transition-colors">{t("nav.unete")}</Link>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-display font-bold text-lg uppercase tracking-wider mb-6 text-white">Social</h4>
            <a 
              href="https://instagram.com/canvi_uji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-secondary-foreground/80 hover:text-primary transition-colors font-medium"
            >
              <Instagram size={20} />
              @canvi_uji
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-secondary-foreground/60 text-sm font-medium">
          <p>&copy; {new Date().getFullYear()} {t("footer.rights")}</p>
        </div>
      </div>
    </footer>
  );
}
