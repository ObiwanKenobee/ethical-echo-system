
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare, Users, Medal, Sparkles } from "lucide-react";

const GuardianForum = () => {
  const discussions = [
    {
      id: 1,
      title: "Palm Oil Sustainability Standards",
      author: "Sarah Chen",
      responses: 24,
      status: "Active",
      lastActivity: "10 minutes ago",
    },
    {
      id: 2,
      title: "Fair Labor Practices in Textiles",
      author: "Miguel Rodriguez",
      responses: 18,
      status: "Hot",
      lastActivity: "1 hour ago",
    },
    {
      id: 3,
      title: "Carbon Footprint Verification",
      author: "Emma Williams",
      responses: 31,
      status: "Expert",
      lastActivity: "2 hours ago",
    },
  ];

  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Guardian Forum™</h1>
        <p className="text-muted-foreground">
          Collaborate with ethical investigators worldwide
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Active Discussions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <div
                    key={discussion.id}
                    className="flex items-start gap-4 rounded-lg border p-4"
                  >
                    <div className="h-12 w-12 rounded-full bg-guardian-100 flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-guardian-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{discussion.title}</h4>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          discussion.status === "Hot"
                            ? "bg-orange-100 text-orange-600"
                            : discussion.status === "Expert"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-green-100 text-green-600"
                        }`}>
                          {discussion.status}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-4 text-sm text-muted-foreground">
                        <span>By {discussion.author}</span>
                        <span>{discussion.responses} responses</span>
                        <span>{discussion.lastActivity}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Join Discussion
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Start a Discussion</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Input placeholder="Discussion title" />
                <textarea
                  className="w-full min-h-[100px] rounded-md border bg-transparent px-3 py-2"
                  placeholder="Describe the ethical issue or topic..."
                />
                <div className="flex justify-end">
                  <Button>Create Discussion</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Online Experts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-blue-100" />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Dr. Lisa Chen</p>
                    <p className="text-xs text-muted-foreground">Supply Chain Expert</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-green-100" />
                    <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Mark Thompson</p>
                    <p className="text-xs text-muted-foreground">ESG Analyst</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Medal className="h-5 w-5" />
                Top Contributors
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-guardian-100 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-guardian-600" />
                    </div>
                    <span className="text-sm font-medium">Sarah Chen</span>
                  </div>
                  <span className="text-sm text-guardian-600">842 points</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-guardian-100 flex items-center justify-center">
                      <Sparkles className="h-4 w-4 text-guardian-600" />
                    </div>
                    <span className="text-sm font-medium">John Doe</span>
                  </div>
                  <span className="text-sm text-guardian-600">756 points</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GuardianForum;
