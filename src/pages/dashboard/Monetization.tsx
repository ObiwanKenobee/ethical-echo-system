
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, BarChart, DollarSign, TrendingUp } from "lucide-react";

const Monetization = () => {
  const earnings = [
    {
      title: "Total Earnings",
      value: "4,890",
      description: "Guardian-IO Credits",
      change: "+12.5%",
      changeType: "positive" as const,
    },
    {
      title: "Impact Score",
      value: "89.2",
      description: "Trust Rating",
      change: "+3.2%",
      changeType: "positive" as const,
    },
    {
      title: "Verified Reports",
      value: "31",
      description: "Published Articles",
      change: "+5",
      changeType: "positive" as const,
    },
    {
      title: "Ethical Score",
      value: "95.5",
      description: "Blockchain Verified",
      change: "+2.1%",
      changeType: "positive" as const,
    },
  ];

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Monetization</h1>
        <p className="text-muted-foreground">
          Track your earnings and impact metrics
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {earnings.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <BarChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
              <div
                className={`mt-1 text-xs ${
                  stat.changeType === "positive"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {stat.change}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Earnings History
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] rounded-lg bg-guardian-50 flex items-center justify-center">
              <p className="text-muted-foreground">
                Earnings chart visualization coming soon
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5" />
              Top Earning Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-lg border p-4"
                >
                  <div className="h-12 w-12 rounded-full bg-guardian-100 flex items-center justify-center">
                    <DollarSign className="h-6 w-6 text-guardian-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">Investigation Report #{i}</h4>
                    <p className="text-sm text-muted-foreground">
                      Earned 450 Credits
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">+450</p>
                    <p className="text-xs text-muted-foreground">Credits</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Monetization;
