
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Globe2,
  PenSquare,
  AlertCircle,
  Wallet,
  Settings,
  Home,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";

const DashboardPage = () => {
  const stats = [
    {
      title: "Ethical Impact Score",
      value: "92.4",
      description: "Based on verified posts",
      change: "+4.3%",
      changeType: "positive" as const,
    },
    {
      title: "Active Investigations",
      value: "7",
      description: "Live tracking reports",
      change: "+2",
      changeType: "positive" as const,
    },
    {
      title: "Guardian Credits",
      value: "2,450",
      description: "Truth-based earnings",
      change: "+350",
      changeType: "positive" as const,
    },
    {
      title: "Published Reports",
      value: "23",
      description: "Blockchain verified",
      change: "+3",
      changeType: "positive" as const,
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarHeader className="border-b px-6 py-4">
            <h2 className="text-lg font-semibold">Guardian-IO</h2>
          </SidebarHeader>
          <SidebarContent className="px-4 py-6">
            <nav className="space-y-2">
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Home className="h-5 w-5" />
                Overview
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <PenSquare className="h-5 w-5" />
                Write New Post
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <AlertCircle className="h-5 w-5" />
                Live Investigations
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Wallet className="h-5 w-5" />
                Monetization
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2">
                <Settings className="h-5 w-5" />
                Settings
              </Button>
            </nav>
          </SidebarContent>
          <SidebarFooter className="border-t p-6">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-full bg-guardian-100" />
              <div>
                <p className="text-sm font-medium">John Doe</p>
                <p className="text-xs text-muted-foreground">Ethical Journalist</p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container py-6">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold">Dashboard Overview</h1>
              <p className="text-muted-foreground">
                Monitor your ethical impact and investigations
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <Card key={stat.title}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {stat.title}
                    </CardTitle>
                    <BarChart className="h-4 w-4 text-muted-foreground" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">
                      {stat.description}
                    </p>
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

            {/* Live Investigations Map */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe2 className="h-5 w-5" />
                  Interactive Supply Chain Risk Map
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] rounded-lg bg-guardian-50 flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Interactive map visualization coming soon
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Trending Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 rounded-lg border p-4"
                      >
                        <div className="h-12 w-12 rounded-full bg-guardian-100 flex items-center justify-center">
                          <AlertCircle className="h-6 w-6 text-guardian-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">
                            Supply Chain Investigation #{i}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            Updated 2 hours ago
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Your Drafts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 rounded-lg border p-4"
                      >
                        <div className="h-12 w-12 rounded-full bg-guardian-100 flex items-center justify-center">
                          <PenSquare className="h-6 w-6 text-guardian-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Draft Report #{i}</h4>
                          <p className="text-sm text-muted-foreground">
                            Last edited 1 day ago
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
