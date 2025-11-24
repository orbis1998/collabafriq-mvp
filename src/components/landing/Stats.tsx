import { Users, Building2, Globe, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Créateurs Vérifiés"
  },
  {
    icon: Building2,
    value: "200+",
    label: "Marques Satisfaites"
  },
  {
    icon: Globe,
    value: "15+",
    label: "Pays Africains"
  },
  {
    icon: Clock,
    value: "24h",
    label: "Paiements Rapides"
  }
];

export const Stats = () => {
  return (
    <section className="py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-orange/10 rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-orange" />
                </div>
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
