
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, Check, AlertTriangle, X } from "lucide-react";

const ComplianceScanner = () => {
  const complianceChecks = [
    {
      id: 1,
      name: "Supply Chain Transparency",
      status: "passed",
      score: 95,
      details: "All tier-1 suppliers fully documented",
    },
    {
      id: 2,
      name: "Labor Rights Compliance",
      status: "warning",
      score: 78,
      details: "Minor documentation gaps in SE Asia region",
    },
    {
      id: 3,
      name: "Environmental Standards",
      status: "failed",
      score: 45,
      details: "Carbon emissions exceed guidelines",
    },
  ];

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Compliance Scanner</h1>
        <p className="text-muted-foreground">
          Automated ethical compliance verification
        </p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            Quick Scan
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Enter company name or supply chain identifier"
              className="flex-1"
            />
            <Button>Scan Now</Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Latest Compliance Checks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {complianceChecks.map((check) => (
                <div
                  key={check.id}
                  className="flex items-start gap-4 rounded-lg border p-4"
                >
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center ${
                    check.status === "passed" ? "bg-green-100" :
                    check.status === "warning" ? "bg-yellow-100" :
                    "bg-red-100"
                  }`}>
                    {check.status === "passed" ? (
                      <Check className="h-5 w-5 text-green-600" />
                    ) : check.status === "warning" ? (
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                    ) : (
                      <X className="h-5 w-5 text-red-600" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{check.name}</h4>
                      <span className={`text-sm font-medium ${
                        check.status === "passed" ? "text-green-600" :
                        check.status === "warning" ? "text-yellow-600" :
                        "text-red-600"
                      }`}>
                        {check.score}%
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {check.details}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Standards</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-medium">Active Frameworks</h4>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">ESG Standards</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Fair Labor Guidelines</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Environmental Protection</span>
                    <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Active</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                Update Compliance Settings
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ComplianceScanner;
