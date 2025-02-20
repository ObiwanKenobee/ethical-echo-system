
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe2, AlertCircle, Search } from "lucide-react";

const GlobalRiskMap = () => {
  const riskZones = [
    {
      id: 1,
      region: "Southeast Asia",
      riskLevel: "High",
      activeIncidents: 12,
      mainIssues: "Labor rights, Deforestation",
    },
    {
      id: 2,
      region: "Central Africa",
      riskLevel: "Critical",
      activeIncidents: 8,
      mainIssues: "Wildlife trafficking, Mineral sourcing",
    },
    {
      id: 3,
      region: "South America",
      riskLevel: "Medium",
      activeIncidents: 5,
      mainIssues: "Environmental compliance, Labor practices",
    },
  ];

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Global Risk Map</h1>
        <p className="text-muted-foreground">
          Real-time supply chain risk monitoring
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe2 className="h-5 w-5" />
            Interactive Risk Map
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[500px] rounded-lg bg-guardian-50 flex items-center justify-center">
            <p className="text-muted-foreground">
              Interactive global risk visualization coming soon
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>High-Risk Zones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {riskZones.map((zone) => (
                <div
                  key={zone.id}
                  className="flex items-start gap-4 rounded-lg border p-4"
                >
                  <div className="h-10 w-10 rounded-full bg-guardian-100 flex items-center justify-center">
                    <AlertCircle className="h-5 w-5 text-guardian-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{zone.region}</h4>
                      <span className={`text-sm ${
                        zone.riskLevel === "Critical" ? "text-red-500" :
                        zone.riskLevel === "High" ? "text-orange-500" :
                        "text-yellow-500"
                      }`}>
                        {zone.riskLevel} Risk
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {zone.mainIssues}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {zone.activeIncidents} active incidents
                      </span>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-medium">Global Risk Overview</h4>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Critical Risk Zones</span>
                    <span className="text-sm font-medium text-red-500">8</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">High Risk Zones</span>
                    <span className="text-sm font-medium text-orange-500">15</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Medium Risk Zones</span>
                    <span className="text-sm font-medium text-yellow-500">23</span>
                  </div>
                </div>
              </div>
              <Button className="w-full">Generate Risk Report</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GlobalRiskMap;
