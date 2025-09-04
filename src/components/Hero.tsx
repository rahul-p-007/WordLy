import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Sparkles,
  FileText,
  MessageSquare,
  Languages,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-muted-foreground">
                AI-Powered Document Intelligence
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="gradient-hero bg-clip-text text-transparent">
                  Transform
                </span>
                <br />
                <span className="text-foreground">Your Documents</span>
                <br />
                <span className="text-muted-foreground text-3xl lg:text-4xl">
                  with AI Magic
                </span>
              </h1>

              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Experience the future of document management. Chat with your
                files, translate instantly, and unlock insights with our
                intelligent AI assistant.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-full">
                <MessageSquare className="h-4 w-4 text-primary" />
                <span className="text-sm">Chat with Documents</span>
              </div>
              <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-full">
                <Languages className="h-4 w-4 text-primary" />
                <span className="text-sm">Instant Translation</span>
              </div>
              <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-full">
                <FileText className="h-4 w-4 text-primary" />
                <span className="text-sm">Smart Analysis</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                variant="gradient"
                className="text-lg px-8 py-4"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button size="lg" variant="glass" className="text-lg px-8 py-4">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8 border-t border-border/30">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted by 10,000+ professionals worldwide
              </p>
              <div className="flex items-center space-x-6 opacity-60">
                <div className="text-lg font-semibold">Notion</div>
                <div className="text-lg font-semibold">Microsoft</div>
                <div className="text-lg font-semibold">Google</div>
                <div className="text-lg font-semibold">OpenAI</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              {/* <img
                // src={heroImage}
                alt="AI-powered document workspace showing translation and chat features"
                className="w-full h-auto rounded-2xl card-shadow animate-float"
              /> */}

              {/* Floating Elements */}
              <div
                className="absolute -top-4 -left-4 glass-card p-4 rounded-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>

              <div
                className="absolute -bottom-4 -right-4 glass-card p-4 rounded-xl animate-float"
                style={{ animationDelay: "2s" }}
              >
                <Languages className="h-6 w-6 text-primary" />
              </div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 gradient-hero opacity-20 blur-3xl rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
