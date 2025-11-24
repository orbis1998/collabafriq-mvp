import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

const services = [
  { id: "#5438", service: "Vidéo TikTok UGC", price: "$150", status: "escrow" },
  { id: "#5437", service: "Post Instagram", price: "$200", status: "completed" },
  { id: "#5436", service: "Stories Pack", price: "$100", status: "completed" },
];

export const ServicesTable = () => {
  return (
    <Card className="border-border">
      <CardHeader>
        <CardTitle className="text-card-foreground">Services & Commandes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Alert className="border-orange bg-orange/10">
          <AlertCircle className="h-4 w-4 text-orange" />
          <AlertDescription className="text-foreground">
            <span className="font-semibold">Nouvelle Commande Reçue:</span> #5438 - Statut: Paiement en Séquestre
          </AlertDescription>
        </Alert>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Commande</TableHead>
                <TableHead>Service</TableHead>
                <TableHead>Prix</TableHead>
                <TableHead>Statut</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.id}</TableCell>
                  <TableCell>{service.service}</TableCell>
                  <TableCell className="font-semibold text-orange">{service.price}</TableCell>
                  <TableCell>
                    {service.status === "escrow" ? (
                      <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                        En Séquestre
                      </Badge>
                    ) : (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Complété
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
