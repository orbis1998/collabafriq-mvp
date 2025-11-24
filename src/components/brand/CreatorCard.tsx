import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

interface CreatorCardProps {
  name: string;
  niche: string;
  followers: string;
  platform: string;
  onViewProfile: () => void;
}

export const CreatorCard = ({ name, niche, followers, platform, onViewProfile }: CreatorCardProps) => {
  return (
    <Card className="border-border bg-card hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-semibold text-card-foreground">{name}</h3>
              <Badge variant="secondary" className="text-xs mt-1">{platform}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Niche:</span>
            <span className="font-medium text-card-foreground">{niche}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground text-sm">Abonnés:</span>
            <span className="font-medium text-card-foreground">{followers}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onViewProfile} 
          variant="outline" 
          className="w-full"
        >
          Voir le Profil
        </Button>
      </CardFooter>
    </Card>
  );
};
