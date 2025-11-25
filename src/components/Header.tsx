import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="border-b border-border bg-background">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-primary">
          CollabAfriq
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link to="/brand-dashboard" className="text-foreground hover:text-primary transition-colors">
            Marques
          </Link>
          <Link to="/creator-dashboard" className="text-foreground hover:text-primary transition-colors">
            Créateurs
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/auth">
            <Button variant="outline" size="sm">
              Connexion
            </Button>
          </Link>
          <Link to="/auth">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              S'inscrire
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};
