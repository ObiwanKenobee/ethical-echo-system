
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Users, Star, Badge, Search } from "lucide-react";

const ExpertNetwork = () => {
  const experts = [
    {
      id: 1,
      name: "Dr. Sarah Chen",
      specialty: "Supply Chain Ethics",
      organization: "Global Ethics Institute",
      rating: 4.9,
      verified: true,
    },
    {
      id: 2,
      name: "Prof. James Miller",
      specialty: "Environmental Compliance",
      organization: "Green Standards Board",
      rating: 4.8,
      verified: true,
    },
    {
      id: 3,
      name: "Maria Garcia",
      specialty: "Labor Rights",
      organization: "Fair Labor Coalition",
      rating: 4.7,
      verified: true,
    },
  ];

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Expert Network</h1>
        <p className="text-muted-foreground">
          Connect with verified ethical experts
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Available Experts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <Input
                  placeholder="Search experts by name or specialty..."
                  className="w-full"
                />
              </div>
              <div className="space-y-4">
                {experts.map((expert) => (
                  <div
                    key={expert.id}
                    className="flex items-start gap-4 rounded-lg border p-4"
                  >
                    <div className="relative">
                      <div className="h-12 w-12 rounded-full bg-guardian-100 flex items-center justify-center">
                        <Users className="h-6 w-6 text-guardian-600" />
                      </div>
                      {expert.verified && (
                        <div className="absolute -right-1 -top-1 rounded-full bg-blue-500 p-1">
                          <Badge className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{expert.name}</h4>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">{expert.rating}</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {expert.specialty}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {expert.organization}
                      </p>
                    </div>
                    <Button>Connect</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Submit Expert Application</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <Input placeholder="Full Name" />
                  <Input placeholder="Specialty" />
                </div>
                <Input placeholder="Organization" />
                <textarea
                  className="w-full min-h-[100px] rounded-md border bg-transparent px-3 py-2"
                  placeholder="Describe your expertise and experience..."
                />
                <div className="flex justify-end">
                  <Button>Submit Application</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Expert Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Badge className="h-4 w-4" />
                  Supply Chain Ethics
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Badge className="h-4 w-4" />
                  Environmental Compliance
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Badge className="h-4 w-4" />
                  Labor Rights
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <Badge className="h-4 w-4" />
                  ESG Standards
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Expert Verification</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <h4 className="font-medium">Verification Process</h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      Professional background check
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      Credential verification
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                      Peer review process
                    </li>
                  </ul>
                </div>
                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExpertNetwork;
