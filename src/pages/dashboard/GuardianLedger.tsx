
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NetworkIcon, Shield, Clock, FileText } from "lucide-react";

const GuardianLedger = () => {
  const transactions = [
    {
      id: 1,
      type: "Post Published",
      hash: "0x8f23...9d2e",
      timestamp: "10 minutes ago",
      status: "Verified",
    },
    {
      id: 2,
      type: "Investigation Update",
      hash: "0x7a14...3f1c",
      timestamp: "1 hour ago",
      status: "Pending",
    },
    {
      id: 3,
      type: "Whistleblower Report",
      hash: "0x9c31...2b4a",
      timestamp: "2 hours ago",
      status: "Verified",
    },
  ];

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Guardian Ledger™</h1>
        <p className="text-muted-foreground">
          Blockchain-verified truth records
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <p className="font-medium">Verified Posts</p>
            </div>
            <p className="mt-2 text-2xl font-bold">147</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-blue-500" />
              <p className="font-medium">Total Time</p>
            </div>
            <p className="mt-2 text-2xl font-bold">2,450 hrs</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-purple-500" />
              <p className="font-medium">Documents</p>
            </div>
            <p className="mt-2 text-2xl font-bold">892</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-2">
              <NetworkIcon className="h-5 w-5 text-orange-500" />
              <p className="font-medium">Network Size</p>
            </div>
            <p className="mt-2 text-2xl font-bold">12,047</p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[2fr,1fr]">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <NetworkIcon className="h-5 w-5" />
              Recent Transactions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center gap-4 rounded-lg border p-4"
                >
                  <div className="h-10 w-10 rounded-full bg-guardian-100 flex items-center justify-center">
                    <NetworkIcon className="h-5 w-5 text-guardian-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{transaction.type}</h4>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        transaction.status === "Verified"
                          ? "bg-green-100 text-green-600"
                          : "bg-yellow-100 text-yellow-600"
                      }`}>
                        {transaction.status}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-4">
                      <span className="text-sm text-muted-foreground">
                        {transaction.hash}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {transaction.timestamp}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Blockchain Stats</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="rounded-lg border p-4">
                <h4 className="font-medium">Network Status</h4>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Block Height</span>
                    <span className="text-sm font-medium">15,234,891</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Network Health</span>
                    <span className="text-sm font-medium text-green-600">98.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Last Sync</span>
                    <span className="text-sm font-medium">2 min ago</span>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                View Network Details
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GuardianLedger;
