import { Header } from "@/components/Header";
import { EarningsCard } from "@/components/creator/EarningsCard";
import { ProfileStatus } from "@/components/creator/ProfileStatus";
import { ServicesTable } from "@/components/creator/ServicesTable";

const CreatorDashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Tableau de Bord Créateur</h1>
          <p className="text-muted-foreground">Gérez vos collaborations et vos gains</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2">
            <EarningsCard />
          </div>
          <div>
            <ProfileStatus />
          </div>
        </div>

        <ServicesTable />
      </div>
    </div>
  );
};

export default CreatorDashboard;
