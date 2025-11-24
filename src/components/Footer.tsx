import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-primary mb-4 block">
              CollabAfriq
            </Link>
            <p className="text-muted-foreground text-sm">
              La première marketplace de marketing d'influence dédiée à l'Afrique Francophone
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Pour les Marques</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/brand-dashboard" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Trouver des Créateurs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Tarifs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Comment ça marche
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Pour les Créateurs</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/creator-dashboard" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Devenir Créateur
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Processus de Vérification
                </Link>
              </li>
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Paiements Mobile Money
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suivez-nous</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 CollabAfriq. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Conditions d'utilisation
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Politique de confidentialité
              </Link>
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
