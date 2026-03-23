export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background/50 pt-16 pb-8 text-center relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <img 
            src="/canvi-logo-completo.png" 
            alt="Canvi Logo" 
            className="h-12 w-auto mb-6 opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          />
          <p className="text-muted-foreground font-medium tracking-wide uppercase text-sm">
            Estudiantes para estudiantes · Universitat Jaume I
          </p>
        </div>
        <p className="text-muted-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} Canvi. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
