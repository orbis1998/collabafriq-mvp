import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Lock, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CreatorProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSubscribed: boolean;
  creatorName: string;
}

export const CreatorProfileModal = ({ isOpen, onClose, isSubscribed, creatorName }: CreatorProfileModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Profil de {creatorName}</DialogTitle>
          <DialogDescription>
            {isSubscribed ? "Media Kit Complet" : "Abonnement requis pour voir les détails"}
          </DialogDescription>
        </DialogHeader>

        {!isSubscribed ? (
          <div className="py-12 text-center space-y-6">
            <div className="flex justify-center">
              <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center">
                <Lock className="w-10 h-10 text-muted-foreground" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Données Détaillées Verrouillées</h3>
              <p className="text-muted-foreground mb-4">
                Abonnez-vous pour accéder aux statistiques vérifiées API et aux détails complets du créateur.
              </p>
              <div className="bg-muted/30 p-4 rounded-lg mb-6 text-left max-w-md mx-auto">
                <p className="text-sm text-muted-foreground">
                  <span className="blur-sm">65% de l'audience est basée à Kinshasa</span>
                  <br />
                  <span className="blur-sm">Taux d'engagement: 5.2%</span>
                  <br />
                  <span className="blur-sm">Prix: 150-300 USD</span>
                </p>
              </div>
            </div>
            <Button className="bg-orange text-orange-foreground hover:bg-orange/90" size="lg">
              S'abonner pour 49 USD/mois
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center gap-2 bg-primary/10 p-3 rounded-lg">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span className="font-medium text-primary">Données Vérifiées API</span>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Répartition Géographique de l'Audience</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Kinshasa</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-orange" style={{ width: '40%' }}></div>
                      </div>
                      <span className="font-semibold">40%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Lubumbashi</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-orange" style={{ width: '30%' }}></div>
                      </div>
                      <span className="font-semibold">30%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Autres RDC</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-orange" style={{ width: '20%' }}></div>
                      </div>
                      <span className="font-semibold">20%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">International</span>
                    <div className="flex items-center gap-2">
                      <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-orange" style={{ width: '10%' }}></div>
                      </div>
                      <span className="font-semibold">10%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Métriques d'Engagement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <div className="text-3xl font-bold text-foreground">4.5%</div>
                    <div className="text-sm text-muted-foreground mt-1">Taux d'Engagement</div>
                    <Badge variant="secondary" className="mt-2">Vérifié</Badge>
                  </div>
                  <div className="text-center p-4 bg-accent rounded-lg">
                    <div className="text-3xl font-bold text-foreground">85K</div>
                    <div className="text-sm text-muted-foreground mt-1">Portée Moyenne</div>
                    <Badge variant="secondary" className="mt-2">Vérifié</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Forfaits & Tarifs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">Vidéo TikTok UGC</div>
                      <div className="text-sm text-muted-foreground">Durée: 30-60 secondes</div>
                    </div>
                    <div className="text-xl font-bold text-orange">150 USD</div>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">Post Instagram + Stories</div>
                      <div className="text-sm text-muted-foreground">1 post + 3 stories</div>
                    </div>
                    <div className="text-xl font-bold text-orange">200 USD</div>
                  </div>
                  <div className="flex justify-between items-center p-3 border border-border rounded-lg">
                    <div>
                      <div className="font-medium text-foreground">Campagne Complète</div>
                      <div className="text-sm text-muted-foreground">Multi-plateformes, 1 mois</div>
                    </div>
                    <div className="text-xl font-bold text-orange">800 USD</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
              Démarrer une Collaboration
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
