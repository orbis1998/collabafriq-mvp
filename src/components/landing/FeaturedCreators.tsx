import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, TrendingUp, Instagram, Youtube, Twitter } from "lucide-react";

const featuredCreators = [
  {
    id: 1,
    name: "Amina Kasongo",
    avatar: "/placeholder.svg",
    initials: "AK",
    specialty: "Beauté & Lifestyle",
    platform: "Instagram",
    platformIcon: Instagram,
    followers: "125K",
    engagement: "8.5%",
    location: "Kinshasa, RDC",
    verified: true,
  },
  {
    id: 2,
    name: "Patrick Mbuyi",
    avatar: "/placeholder.svg",
    initials: "PM",
    specialty: "Tech & Innovation",
    platform: "YouTube",
    platformIcon: Youtube,
    followers: "85K",
    engagement: "6.2%",
    location: "Lubumbashi, RDC",
    verified: true,
  },
  {
    id: 3,
    name: "Grace Nkulu",
    avatar: "/placeholder.svg",
    initials: "GN",
    specialty: "Mode & Style",
    platform: "Instagram",
    platformIcon: Instagram,
    followers: "95K",
    engagement: "7.8%",
    location: "Goma, RDC",
    verified: true,
  },
  {
    id: 4,
    name: "Joel Mukendi",
    avatar: "/placeholder.svg",
    initials: "JM",
    specialty: "Business & Finance",
    platform: "Twitter",
    platformIcon: Twitter,
    followers: "65K",
    engagement: "5.9%",
    location: "Kinshasa, RDC",
    verified: true,
  },
];

export const FeaturedCreators = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Créateurs Vedettes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos créateurs de contenu les plus performants, vérifiés et prêts à collaborer avec votre marque
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCreators.map((creator) => {
            const PlatformIcon = creator.platformIcon;
            return (
              <Card key={creator.id} className="border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="pb-4">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 mb-4 ring-2 ring-primary/20">
                      <AvatarImage src={creator.avatar} alt={creator.name} />
                      <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                        {creator.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="font-semibold text-lg text-card-foreground mb-1">
                      {creator.name}
                    </h3>
                    <div className="flex items-center gap-2 mb-2">
                      <PlatformIcon className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{creator.platform}</span>
                    </div>
                    <Badge variant="secondary" className="mb-2">
                      {creator.specialty}
                    </Badge>
                    <p className="text-xs text-muted-foreground">{creator.location}</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Abonnés</span>
                      </div>
                      <span className="font-semibold text-card-foreground">{creator.followers}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-md">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Engagement</span>
                      </div>
                      <span className="font-semibold text-card-foreground">{creator.engagement}</span>
                    </div>
                    <Button variant="outline" className="w-full mt-2">
                      Voir le Profil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Voir Tous Les Créateurs
          </Button>
        </div>
      </div>
    </section>
  );
};
