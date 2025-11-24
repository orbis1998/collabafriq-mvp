import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-orange/10 to-orange/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Prêt à collaborer avec les meilleurs créateurs d'Afrique ?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Rejoignez des centaines de marques qui font confiance à CollabAfriq pour leurs campagnes d'influence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/brand-dashboard">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto text-lg px-8 py-6">
                Trouver un Créateur
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/creator-dashboard">
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-lg px-8 py-6 border-2"
              >
                Devenir Créateur
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
