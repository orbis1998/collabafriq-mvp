import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Star } from "lucide-react";

export const ProfileStatus = () => {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Statut du Profil</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-foreground">Instagram Connecté</span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Actif</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-foreground">TikTok Connecté</span>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">Actif</Badge>
          </div>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex items-start justify-between mb-3">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Star className="w-5 h-5 text-orange" />
                <span className="font-semibold text-foreground">Passer en Vedette</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Apparaissez en premier dans les recherches des marques
              </p>
            </div>
          </div>
          <Button variant="outline" className="w-full border-orange text-orange hover:bg-orange/10">
            S'abonner - 5 USD/mois
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
