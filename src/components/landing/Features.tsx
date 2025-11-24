import { Shield, Smartphone, BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Créateurs Vérifiés",
    description: "Tous nos créateurs passent par un processus de vérification d'identité et d'audience pour garantir l'authenticité."
  },
  {
    icon: Smartphone,
    title: "Paiements Mobile Money",
    description: "Intégration native avec Orange Money, MTN Mobile Money et Airtel Money pour des transactions rapides et sécurisées."
  },
  {
    icon: BarChart3,
    title: "Analytics Avancés",
    description: "Suivez les performances de vos campagnes en temps réel avec nos tableaux de bord détaillés et rapports automatiques."
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Pourquoi choisir CollabAfriq ?</h2>
          <p className="text-xl text-muted-foreground">Une plateforme conçue spécifiquement pour les réalités du marché africain</p>
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
