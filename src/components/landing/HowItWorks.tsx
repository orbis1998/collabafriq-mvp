import { Search, CreditCard, Package } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Trouvez le bon créateur",
    description: "Utilisez nos filtres avancés pour trouver le créateur parfait selon votre budget, public cible et objectifs."
  },
  {
    icon: CreditCard,
    number: "02",
    title: "Confirmez et payez",
    description: "Choisissez votre forfait, validez les détails de la campagne et effectuez un paiement sécurisé via Mobile Money."
  },
  {
    icon: Package,
    number: "03",
    title: "Recevez votre contenu",
    description: "Le créateur produit votre contenu selon les spécifications. Les paiements sont sécurisés jusqu'à la livraison complète."
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Comment ça marche ?</h2>
          <p className="text-xl text-muted-foreground">Démarrez une collaboration en seulement 3 étapes simples</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-xl transition-all relative">
              <div className="absolute -top-6 left-8">
                <div className="w-12 h-12 bg-orange rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.number}
                </div>
              </div>
              <CardHeader className="pt-10">
                <div className="w-14 h-14 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-7 h-7 text-orange" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
