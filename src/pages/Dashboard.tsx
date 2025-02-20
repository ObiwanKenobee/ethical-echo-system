
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  PenSquare,
  AlertCircle,
  Wallet,
  Settings as SettingsIcon,
  Globe2,
  Shield,
  MessageSquare,
  Users,
  Award,
  NetworkIcon,
  FileText,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";

// Import all pages
import Overview from "./dashboard/Overview";
import WriteNewPost from "./dashboard/WriteNewPost";
import LiveInvestigations from "./dashboard/LiveInvestigations";
import Monetization from "./dashboard/Monetization";
import Settings from "./dashboard/Settings";

const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState("overview");
  const [ethicalScore, setEthicalScore] = useState(92);

  const renderPage = () => {
    switch (currentPage) {
      case "overview":
        return <Overview />;
      case "write":
        return <WriteNewPost />;
      case "investigations":
        return <LiveInvestigations />;
      case "monetization":
        return <Monetization />;
      case "settings":
        return <Settings />;
      default:
        return <Overview />;
    }
  };

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarHeader className="border-b px-6 py-4">
            <h2 className="text-xl font-bold text-guardian-600">Guardian-IO</h2>
            <div className="mt-2 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500" />
              <p className="text-xs text-muted-foreground">Blockchain Connected</p>
            </div>
          </SidebarHeader>

          <SidebarContent className="px-4 py-6">
            <SidebarGroup>
              <SidebarGroupLabel>Main Dashboard</SidebarGroupLabel>
              <nav className="space-y-2">
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${
                    currentPage === "overview" ? "bg-guardian-50" : ""
                  }`}
                  onClick={() => setCurrentPage("overview")}
                >
                  <Home className="h-5 w-5" />
                  Overview
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${
                    currentPage === "write" ? "bg-guardian-50" : ""
                  }`}
                  onClick={() => setCurrentPage("write")}
                >
                  <PenSquare className="h-5 w-5" />
                  Guardian-Writer™
                </Button>
              </nav>
            </SidebarGroup>

            <SidebarGroup className="mt-6">
              <SidebarGroupLabel>Investigation Tools</SidebarGroupLabel>
              <nav className="space-y-2">
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${
                    currentPage === "investigations" ? "bg-guardian-50" : ""
                  }`}
                  onClick={() => setCurrentPage("investigations")}
                >
                  <AlertCircle className="h-5 w-5" />
                  Live Investigations
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                >
                  <Globe2 className="h-5 w-5" />
                  Global Risk Map
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                >
                  <Shield className="h-5 w-5" />
                  Compliance Scanner
                </Button>
              </nav>
            </SidebarGroup>

            <SidebarGroup className="mt-6">
              <SidebarGroupLabel>Community & Impact</SidebarGroupLabel>
              <nav className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                >
                  <MessageSquare className="h-5 w-5" />
                  Guardian-Forum™
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                >
                  <Users className="h-5 w-5" />
                  Expert Network
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${
                    currentPage === "monetization" ? "bg-guardian-50" : ""
                  }`}
                  onClick={() => setCurrentPage("monetization")}
                >
                  <Wallet className="h-5 w-5" />
                  Guardian-Credits™
                </Button>
              </nav>
            </SidebarGroup>

            <SidebarGroup className="mt-6">
              <SidebarGroupLabel>Verification & Settings</SidebarGroupLabel>
              <nav className="space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start gap-2"
                >
                  <NetworkIcon className="h-5 w-5" />
                  Guardian-Ledger™
                </Button>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-2 ${
                    currentPage === "settings" ? "bg-guardian-50" : ""
                  }`}
                  onClick={() => setCurrentPage("settings")}
                >
                  <SettingsIcon className="h-5 w-5" />
                  Settings
                </Button>
              </nav>
            </SidebarGroup>
          </SidebarContent>

          <SidebarFooter className="border-t p-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-guardian-100" />
                  <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                </div>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">Ethical Journalist</p>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-guardian-600" />
                    <span className="text-xs font-medium">Truth Score</span>
                  </div>
                  <span className="text-xs font-bold text-guardian-600">{ethicalScore}/100</span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-guardian-100">
                  <div
                    className="h-full rounded-full bg-guardian-600 transition-all"
                    style={{ width: `${ethicalScore}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Verified by Guardian-Ledger™
                </p>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-background">
          {renderPage()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
