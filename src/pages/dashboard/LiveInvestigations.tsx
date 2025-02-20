
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Globe2, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const LiveInvestigations = () => {
  const investigations = [
    {
      id: 1,
      title: "Palm Oil Supply Chain Investigation",
      status: "Active",
      lastUpdate: "10 minutes ago",
      risk: "High",
      location: "Southeast Asia",
    },
    {
      id: 2,
      title: "Wildlife Trafficking Network",
      status: "Active",
      lastUpdate: "1 hour ago",
      risk: "Critical",
      location: "Central Africa",
    },
    {
      id: 3,
      title: "Textile Industry Labor Practices",
      status: "Active",
      lastUpdate: "2 hours ago",
      risk: "Medium",
      location: "South Asia",
    },
  ];

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Live Investigations</h1>
        <p className="text-muted-foreground">
          Track ongoing ethical supply chain investigations
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe2 className="h-5 w-5" />
            Global Risk Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] rounded-lg bg-guardian-50 flex items-center justify-center">
            <p className="text-muted-foreground">
              Interactive risk map visualization coming soon
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="mb-6">
        <Input
          placeholder="Search investigations..."
          className="max-w-md"
          type="search"
        />
      </div>

      <div className="space-y-4">
        {investigations.map((investigation) => (
          <Card key={investigation.id}>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="h-12 w-12 rounded-full bg-guardian-100 flex items-center justify-center">
                <AlertCircle className="h-6 w-6 text-guardian-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium">{investigation.title}</h3>
                <div className="flex gap-4 mt-1 text-sm text-muted-foreground">
                  <span>Status: {investigation.status}</span>
                  <span>Risk Level: {investigation.risk}</span>
                  <span>Location: {investigation.location}</span>
                  <span>Updated: {investigation.lastUpdate}</span>
                </div>
              </div>
              <Search className="h-5 w-5 text-muted-foreground" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default LiveInvestigations;
