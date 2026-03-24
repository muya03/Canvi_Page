import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import QuienesSomosPage from "@/pages/QuienesSomosPage";
import PropuestasPage from "@/pages/PropuestasPage";
import LogrosPage from "@/pages/LogrosPage";
import NoticiasPage from "@/pages/NoticiasPage";
import ValoresPage from "@/pages/ValoresPage";
import UnetePage from "@/pages/UnetePage";
import ContactoPage from "@/pages/ContactoPage";
import NotFound from "@/pages/not-found";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/quienes-somos" component={QuienesSomosPage} />
      <Route path="/propuestas" component={PropuestasPage} />
      <Route path="/logros" component={LogrosPage} />
      <Route path="/noticias" component={NoticiasPage} />
      <Route path="/valores" component={ValoresPage} />
      <Route path="/unete" component={UnetePage} />
      <Route path="/contacto" component={ContactoPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LanguageProvider>
          <TooltipProvider>
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
