import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface SearchFormProps {
  onSearch: (keywords: string, platform: string, location: string) => void;
}

export const SearchForm = ({ onSearch }: SearchFormProps) => {
  const [keywords, setKeywords] = useState("");
  const [platform, setPlatform] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(keywords, platform, location);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-card p-6 rounded-lg border border-border shadow-sm">
      <h2 className="text-2xl font-bold mb-6 text-card-foreground">Rechercher des Créateurs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div>
          <Label htmlFor="keywords" className="text-card-foreground">Mots-clés</Label>
          <Input
            id="keywords"
            placeholder="Ex: Beauté, Tech, Kinshasa"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="platform" className="text-card-foreground">Plateforme</Label>
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Choisir..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="tiktok">TikTok</SelectItem>
              <SelectItem value="instagram">Instagram</SelectItem>
              <SelectItem value="facebook">Facebook</SelectItem>
              <SelectItem value="youtube">YouTube</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="location" className="text-card-foreground">Audience Géographique</Label>
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Choisir..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rdc">RDC</SelectItem>
              <SelectItem value="kinshasa">Kinshasa</SelectItem>
              <SelectItem value="lubumbashi">Lubumbashi</SelectItem>
              <SelectItem value="afrique">Afrique Francophone</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full md:w-auto">
        <Search className="w-4 h-4 mr-2" />
        Rechercher
      </Button>
    </form>
  );
};
