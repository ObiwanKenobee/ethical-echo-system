
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, Cpu, ChartBar, Users } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const Index = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [whyRef, whyInView] = useInView({ triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className={cn(
          "min-h-screen flex flex-col items-center justify-center text-center px-4 py-20",
          "opacity-0",
          heroInView && "animate-fade-up"
        )}
      >
        <div className="space-y-6 max-w-4xl">
          <div className="inline-flex items-center rounded-full px-4 py-1 text-sm font-medium bg-guardian-100 text-guardian-800">
            Introducing Guardian-IO
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
            Truth. Verified. Actionable.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            The First AI & Blockchain-Powered Blogging System for Ethical Supply Chains & Wildlife Conservation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="bg-guardian-600 hover:bg-guardian-700 text-white"
            >
              Start Writing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-guardian-200 hover:bg-guardian-50"
            >
              Explore Reports
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        ref={featuresRef}
        className={cn(
          "py-20 px-4",
          "opacity-0",
          featuresInView && "animate-fade-up"
        )}
      >
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 backdrop-blur-sm bg-white/50 border-guardian-100 hover:border-guardian-200 transition-all duration-300">
              <Cpu className="w-12 h-12 text-guardian-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Ethical Reporting</h3>
              <p className="text-muted-foreground">
                Guardian-IO's AI scans supply chains, detects violations, and auto-generates real-time compliance insights.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-white/50 border-guardian-100 hover:border-guardian-200 transition-all duration-300">
              <Shield className="w-12 h-12 text-guardian-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Blockchain-Verified Blogging</h3>
              <p className="text-muted-foreground">
                Every story is stamped onto a decentralized ledger—ensuring no misinformation, only verifiable truth.
              </p>
            </Card>
            <Card className="p-6 backdrop-blur-sm bg-white/50 border-guardian-100 hover:border-guardian-200 transition-all duration-300">
              <ChartBar className="w-12 h-12 text-guardian-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Impact-Based Monetization</h3>
              <p className="text-muted-foreground">
                Writers and ethical businesses earn Guardian-IO Credits when they drive transparency.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why This Matters Section */}
      <section
        ref={whyRef}
        className={cn(
          "py-20 px-4 bg-guardian-50",
          "opacity-0",
          whyInView && "animate-fade-up"
        )}
      >
        <div className="container max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Why This Matters
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-none shadow-lg bg-white">
              <Users className="w-8 h-8 text-guardian-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">For Businesses</h3>
              <p className="text-muted-foreground">
                Stay compliant, showcase ethical leadership, and connect with ethical suppliers.
              </p>
            </Card>
            <Card className="p-6 border-none shadow-lg bg-white">
              <Shield className="w-8 h-8 text-guardian-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">For Journalists & Activists</h3>
              <p className="text-muted-foreground">
                Get rewarded for truth-driven reporting & uncover hidden supply chain violations.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        ref={ctaRef}
        className={cn(
          "py-20 px-4",
          "opacity-0",
          ctaInView && "animate-fade-up"
        )}
      >
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Ethical Revolution
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be part of the movement towards transparent and ethical supply chains.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-guardian-600 hover:bg-guardian-700 text-white"
            >
              Start Writing
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-guardian-200 hover:bg-guardian-50"
            >
              Explore Reports
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-guardian-100">
        <div className="container max-w-6xl text-center text-sm text-muted-foreground">
          <p>© 2024 Guardian-IO. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
