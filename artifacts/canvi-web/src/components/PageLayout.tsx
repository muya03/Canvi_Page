import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useLanguage } from "@/context/LanguageContext";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  badge: string;
}

export function PageLayout({ children, title, subtitle, badge }: PageLayoutProps) {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans relative transition-colors duration-300">
      <Navbar />
      <main className="flex-1 pt-20">
        <section className="bg-muted py-16 md:py-24 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center text-sm font-bold font-display uppercase tracking-wider text-muted-foreground mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                {t("nav.inicio")}
              </Link>
              <ChevronRight size={14} className="mx-2" />
              <span className="text-foreground">{title}</span>
            </div>
            
            <div className="inline-block bg-primary text-primary-foreground px-4 py-1.5 rounded-sm font-display font-bold tracking-widest uppercase text-sm mb-6">
              {badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-black font-display tracking-tighter mb-4 text-secondary dark:text-foreground">
              {title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              {subtitle}
            </p>
          </div>
        </section>
        {children}
      </main>
      <Footer />
    </div>
  );
}
