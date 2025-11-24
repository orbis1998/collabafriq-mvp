import { useState } from "react";
import { Header } from "@/components/Header";
import { SearchForm } from "@/components/brand/SearchForm";
import { CreatorCard } from "@/components/brand/CreatorCard";
import { CreatorProfileModal } from "@/components/brand/CreatorProfileModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const mockCreators = [
  { id: 1, name: "Marie Kalala", niche: "Beauté & Lifestyle", followers: "125K", platform: "Instagram" },
  { id: 2, name: "Jean Mukendi", niche: "Tech & Innovation", followers: "85K", platform: "TikTok" },
  { id: 3, name: "Grace Mbuyi", niche: "Mode & Style", followers: "95K", platform: "Instagram" },
  { id: 4, name: "Patrick Tshisekedi", niche: "Cuisine & Food", followers: "110K", platform: "TikTok" },
  { id: 5, name: "Sarah Kabongo", niche: "Fitness & Santé", followers: "78K", platform: "Instagram" },
  { id: 6, name: "David Luboya", niche: "Musique & Art", followers: "150K", platform: "YouTube" },
];

const BrandDashboard = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [selectedCreator, setSelectedCreator] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (keywords: string, platform: string, location: string) => {
    console.log("Searching with:", keywords, platform, location);
    setHasSearched(true);
  };

  const handleViewProfile = (creatorName: string) => {
    setSelectedCreator(creatorName);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-2">Tableau de Bord Entreprise</h1>
            <p className="text-muted-foreground">Trouvez les créateurs parfaits pour votre marque</p>
          </div>
          <div className="flex items-center gap-3">
            {!isSubscribed ? (
              <>
                <Badge variant="secondary" className="bg-muted text-muted-foreground">
                  Non Abonné
                </Badge>
                <Button 
                  onClick={() => setIsSubscribed(true)}
                  className="bg-orange text-orange-foreground hover:bg-orange/90"
                >
                  S'abonner - 49 USD/mois
                </Button>
              </>
            ) : (
              <Badge className="bg-green-100 text-green-800 border-green-200">
                ✓ Abonné Premium
              </Badge>
            )}
          </div>
        </div>

        <div className="mb-8">
          <SearchForm onSearch={handleSearch} />
        </div>

        {hasSearched && (
          <div>
            <h2 className="text-2xl font-bold mb-6 text-foreground">
              Résultats de Recherche ({mockCreators.length} créateurs)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockCreators.map((creator) => (
                <CreatorCard
                  key={creator.id}
                  name={creator.name}
                  niche={creator.niche}
                  followers={creator.followers}
                  platform={creator.platform}
                  onViewProfile={() => handleViewProfile(creator.name)}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {selectedCreator && (
        <CreatorProfileModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          isSubscribed={isSubscribed}
          creatorName={selectedCreator}
        />
      )}
    </div>
  );
};

export default BrandDashboard;
