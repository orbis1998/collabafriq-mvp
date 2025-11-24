import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-collab.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-background to-accent">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="African creators collaborating" 
          className="w-full h-full object-cover opacity-20"
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
            Connectez-vous avec les meilleurs créateurs de contenu d'Afrique
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground">
            La première marketplace de marketing d'influence dédiée à l'Afrique Francophone, avec paiements Mobile Money intégrés
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/brand-dashboard">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg px-8 py-6">
                Je suis une Marque
              </Button>
            </Link>
            <Link to="/creator-dashboard">
              <Button 
                size="lg" 
                className="bg-orange text-orange-foreground hover:bg-orange/90 w-full sm:w-auto text-lg px-8 py-6"
              >
                Je suis un Créateur
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
