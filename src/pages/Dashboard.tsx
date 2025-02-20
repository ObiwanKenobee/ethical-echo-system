
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  PenSquare,
  AlertCircle,
  Wallet,
  Settings,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";

// Import all pages
import Overview from "./dashboard/Overview";
import WriteNewPost from "./dashboard/WriteNewPost";
import LiveInvestigations from "./dashboard/LiveInvestigations";
import Monetization from "./dashboard/Monetization";
import Settings from "./dashboard/Settings";

const DashboardPage = () => {
  const [currentPage, setCurrentPage] = useState("overview");

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
            <h2 className="text-lg font-semibold">Guardian-IO</h2>
          </SidebarHeader>
          <SidebarContent className="px-4 py-6">
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
                Write New Post
              </Button>
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
                className={`w-full justify-start gap-2 ${
                  currentPage === "monetization" ? "bg-guardian-50" : ""
                }`}
                onClick={() => setCurrentPage("monetization")}
              >
                <Wallet className="h-5 w-5" />
                Monetization
              </Button>
              <Button
                variant="ghost"
                className={`w-full justify-start gap-2 ${
                  currentPage === "settings" ? "bg-guardian-50" : ""
                }`}
                onClick={() => setCurrentPage("settings")}
              >
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
          {renderPage()}
        </main>
      </div>
    </SidebarProvider>
  );
};

export default DashboardPage;
