import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("nav.inicio"), path: "/" },
    { name: t("nav.nosotros"), path: "/quienes-somos" },
    { name: t("nav.propuestas"), path: "/propuestas" },
    { name: t("nav.planes"), path: "/planes" },
    { name: t("nav.logros"), path: "/logros" },
    { name: t("nav.noticias"), path: "/noticias" },
    { name: t("nav.juego"), path: "/tinder-propuestas", highlight: true },
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
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity focus:outline-none">
            <img
              src={`${import.meta.env.BASE_URL}canvi-logo-completo.png`}
              alt="Canvi Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-bold font-display uppercase tracking-wider transition-colors",
                  (link as any).highlight
                    ? location === link.path
                      ? "text-primary border border-primary rounded-sm px-3 py-1"
                      : "text-primary border border-primary/40 rounded-sm px-3 py-1 hover:border-primary hover:bg-primary/5"
                    : location === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-2 ml-4 border-l border-border pl-6">
              <button
                onClick={() => setLang(lang === "es" ? "val" : "es")}
                className="text-sm font-bold font-display px-2 py-1 rounded hover:bg-muted transition-colors"
              >
                {lang === "es" ? "VAL" : "ES"}
              </button>

              <button
                onClick={toggleTheme}
                className="p-2 rounded hover:bg-muted transition-colors text-foreground"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>

              <Link
                href="/unete"
                className="ml-2 inline-flex items-center justify-center whitespace-nowrap text-sm h-10 px-4 py-2 font-display font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm"
              >
                {t("nav.unete")}
              </Link>
            </div>
          </nav>

          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setLang(lang === "es" ? "val" : "es")}
              className="text-sm font-bold font-display px-2 py-1 rounded hover:bg-muted transition-colors"
            >
              {lang === "es" ? "VAL" : "ES"}
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded hover:bg-muted transition-colors text-foreground"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
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

      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border overflow-hidden transition-all duration-300 shadow-lg",
          mobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 border-transparent"
        )}
      >
        <div className="p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "text-left font-display font-bold uppercase tracking-wider py-3 px-4 rounded hover:bg-muted",
                location === link.path ? "text-primary bg-muted" : (link as any).highlight ? "text-primary hover:bg-primary/5" : "text-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <div className="p-4 pt-2">
            <Link
              href="/unete"
              onClick={() => setMobileMenuOpen(false)}
              className="flex w-full justify-center items-center font-display font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground rounded-sm py-4"
            >
              {t("nav.unete")}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
