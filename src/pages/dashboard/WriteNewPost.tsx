
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AlertCircle, Bot, Link, Save } from "lucide-react";

const WriteNewPost = () => {
  return (
    <div className="container py-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Write New Post</h1>
        <p className="text-muted-foreground">
          Create a new investigation with AI assistance
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr,300px]">
        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <Input
                className="border-0 p-0 text-2xl font-bold focus-visible:ring-0"
                placeholder="Post title"
              />
              <div className="min-h-[500px] mt-4">
                <textarea
                  className="w-full h-full min-h-[500px] resize-none border-0 bg-transparent p-0 focus:outline-none"
                  placeholder="Start writing your investigation..."
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-end gap-2">
            <Button variant="outline">Save Draft</Button>
            <Button>Publish</Button>
          </div>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                AI Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg border p-4">
                <AlertCircle className="h-5 w-5 text-orange-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Supply Chain Risk Detected</h4>
                  <p className="text-sm text-muted-foreground">
                    Consider adding more context about the ethical implications.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border p-4">
                <Link className="h-5 w-5 text-blue-500 mt-0.5" />
                <div>
                  <h4 className="font-medium">Suggested Sources</h4>
                  <p className="text-sm text-muted-foreground">
                    Add verified sources to strengthen your investigation.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Save className="h-5 w-5" />
                Auto-saved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Last saved 2 minutes ago
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default WriteNewPost;
