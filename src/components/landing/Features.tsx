import { Shield, Database, Wallet } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Database,
    title: "Données Vérifiées (API)",
    description: "Accédez aux statistiques réelles et vérifiées des créateurs via nos intégrations API directes avec les plateformes sociales."
  },
  {
    icon: Shield,
    title: "Paiement Séquestre (Escrow)",
    description: "Vos paiements sont sécurisés dans un compte séquestre jusqu'à la livraison complète du contenu."
  },
  {
    icon: Wallet,
    title: "Retrait Mobile Money",
    description: "Les créateurs reçoivent leurs paiements directement via Mobile Money, adapté au contexte africain."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Comment ça marche ?</h2>
          <p className="text-xl text-muted-foreground">Trois piliers pour une collaboration réussie</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-orange" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
