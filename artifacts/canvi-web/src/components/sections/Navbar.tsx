import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { name: t("nav.inicio"), id: "inicio" },
    { name: t("nav.nosotros"), id: "nosotros" },
    { name: t("nav.propuestas"), id: "propuestas" },
    { name: t("nav.logros"), id: "logros" },
    { name: t("nav.noticias"), id: "noticias" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-border shadow-sm py-3" 
          : "bg-background border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => scrollTo("inicio")}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none"
          >
            <img 
              src={`${import.meta.env.BASE_URL}canvi-logo-completo.png`}
              alt="Canvi Logo" 
              className="h-10 md:h-12 w-auto object-contain dark:invert"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="text-sm font-bold font-display uppercase tracking-wider text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
            
            <div className="flex items-center gap-2 ml-4 border-l border-border pl-6">
              <button 
                onClick={() => setLang(lang === 'es' ? 'val' : 'es')}
                className="text-sm font-bold font-display px-2 py-1 rounded hover:bg-muted transition-colors"
              >
                {lang === 'es' ? 'VAL' : 'ES'}
              </button>
              
              <button 
                onClick={toggleTheme}
                className="p-2 rounded hover:bg-muted transition-colors text-foreground"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              
              <Button 
                onClick={() => scrollTo("contacto")} 
                className="ml-2 font-display font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm"
              >
                {t("nav.unete")}
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button 
              onClick={() => setLang(lang === 'es' ? 'val' : 'es')}
              className="text-sm font-bold font-display px-2 py-1 rounded hover:bg-muted transition-colors"
            >
              {lang === 'es' ? 'VAL' : 'ES'}
            </button>
            <button 
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-muted transition-colors text-foreground"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              className="text-foreground p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border overflow-hidden transition-all duration-300 shadow-lg",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <div className="p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="text-left font-display font-bold uppercase tracking-wider text-foreground hover:text-primary py-3 px-4 rounded hover:bg-muted"
            >
              {link.name}
            </button>
          ))}
          <div className="p-4 pt-2">
            <Button 
              onClick={() => scrollTo("contacto")} 
              className="w-full font-display font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm py-6"
            >
              {t("nav.unete")}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}