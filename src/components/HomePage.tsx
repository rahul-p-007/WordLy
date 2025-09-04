import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Play,
  Sparkles,
  FileText,
  MessageSquare,
  Languages,
  Zap,
  Shield,
  Search,
  Brain,
  Globe,
} from "lucide-react";

const HomePage = () => {
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
    <div className="min-h-screen bg-[#0d0e11] ">
      {" "}
      {/* Ensure text color is set */}
      {/* Navigation */}
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full ">
                <Sparkles className="h-4 w-4 text-white" />
                <span className="text-sm  underline text-white">
                  AI-Powered Document Intelligence
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="gradient-hero text-white">Transform</span>
                  <br />
                  <span className="text-white">Your Documents</span>
                  <br />
                  <span className="text-white text-3xl lg:text-4xl">
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
                  <MessageSquare className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">
                    Chat with Documents
                  </span>
                </div>
                <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-full">
                  <Languages className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">
                    Instant Translation
                  </span>
                </div>
                <div className="flex items-center space-x-2 glass-card px-3 py-2 rounded-full">
                  <FileText className="h-4 w-4 text-white" />
                  <span className="text-sm text-white">Smart Analysis</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="default"
                  className="text-lg px-8 py-4"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>

                <Button
                  size="lg"
                  variant="default"
                  className="text-lg px-8 py-4"
                >
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
                  <div className="text-lg font-semibold text-white">Notion</div>
                  <div className="text-lg font-semibold text-white">
                    Microsoft
                  </div>
                  <div className="text-lg font-semibold text-white">Google</div>
                  <div className="text-lg font-semibold text-white">OpenAI</div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative z-10">
                <img
                  src="https://gratisography.com/wp-content/uploads/2025/01/gratisography-tv-head-1170x780.jpg"
                  alt="AI-powered document workspace showing translation and chat features"
                  className="w-full h-auto rounded-2xl card-shadow animate-pulse"
                  style={{ animationDuration: "3s" }}
                />

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4  p-4 rounded-xl  bg-black m-auto ">
                  <MessageSquare className="h-10 w-10 text-white " />
                </div>

                <div className="absolute -bottom-4 -right-4 bg-black p-4 rounded-xl animate-float">
                  <Languages className="h-10 w-10 text-white " />
                </div>
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 opacity-40 blur-3xl rounded-2xl z-0"></div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section id="features" className="py-24 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm text-muted-foreground">
                Powerful Features
              </span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white">
              <span className="text-white">Everything you need</span>
              <br />
              <span className="text-white">in one platform</span>
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how our AI-powered features transform the way you work
              with documents, making complex tasks effortless and intuitive.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="rounded-2xl bg-black/80 backdrop-blur-md shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 group"
                >
                  <CardHeader className="space-y-4">
                    <div
                      className={`p-3 w-fit rounded-xl bg-gradient-to-r ${feature.gradient} glow-shadow group-hover:scale-110 transition-bounce`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white">
                      {feature.title}
                    </CardTitle>
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
              <Globe className="h-12 w-12  mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-4">
                Ready to transform your workflow?
              </h3>
              <p className="text-white mb-6">
                Join thousands of professionals who have revolutionized their
                document management with wordLy AI.
              </p>
              <Button
                variant="gradient"
                className="px-8 py-3 rounded-lg font-semibold"
              >
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
