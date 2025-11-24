import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wallet, Clock } from "lucide-react";

export const EarningsCard = () => {
  return (
    <Card className="border-border bg-gradient-to-br from-card to-accent">
      <CardHeader>
        <CardTitle className="text-card-foreground">Vos Gains</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-background/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">En Attente (Séquestre)</span>
            </div>
            <div className="text-3xl font-bold text-foreground">$450</div>
            <p className="text-xs text-muted-foreground mt-1">USD</p>
          </div>
          <div className="bg-background/50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Wallet className="w-4 h-4" />
              <span className="text-sm">Portefeuille Disponible</span>
            </div>
            <div className="text-3xl font-bold text-foreground">$120</div>
            <p className="text-xs text-muted-foreground mt-1">USD</p>
          </div>
        </div>
        <Button className="w-full bg-orange text-orange-foreground hover:bg-orange/90" size="lg">
          Retirer (Mobile Money)
        </Button>
      </CardContent>
    </Card>
  );
};
