import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MessageSquare,
  Languages,
  Sparkles,
  Zap,
  Shield,
  Search,
  Brain,
  Globe,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: MessageSquare,
      title: "Chat with Documents",
      description:
        "Ask questions about your documents and get instant, intelligent answers. Our AI understands context and provides accurate insights.",
      gradient: "from-blue-500 to-purple-500",
    },
    {
      icon: Languages,
      title: "Instant Translation",
      description:
        "Translate documents between 100+ languages instantly while preserving formatting and context with AI precision.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Smart Analysis",
      description:
        "Extract key insights, summaries, and actionable items from complex documents using advanced AI algorithms.",
      gradient: "from-pink-500 to-red-500",
    },
    {
      icon: Search,
      title: "Semantic Search",
      description:
        "Find information across all your documents using natural language queries, not just keyword matching.",
      gradient: "from-green-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Process documents in seconds, not minutes. Our optimized AI infrastructure delivers results at incredible speed.",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description:
        "Bank-level encryption and privacy controls ensure your sensitive documents remain secure and confidential.",
      gradient: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section id="features" className="py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Powerful Features
            </span>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="gradient-hero bg-clip-text text-transparent">
              Everything you need
            </span>
            <br />
            <span className="text-foreground">in one platform</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover how our AI-powered features transform the way you work with
            documents, making complex tasks effortless and intuitive.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="glass-card card-shadow hover:elevated-shadow transition-smooth hover:scale-105 group"
              >
                <CardHeader className="space-y-4">
                  <div
                    className={`p-3 w-fit rounded-xl bg-gradient-to-r ${feature.gradient} glow-shadow group-hover:scale-110 transition-bounce`}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-2xl card-shadow max-w-2xl mx-auto">
            <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Ready to transform your workflow?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of professionals who have revolutionized their
              document management with DocuMind AI.
            </p>
            <Button
              variant="default"
              className="px-8 py-3 rounded-lg font-semibold"
            >
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
