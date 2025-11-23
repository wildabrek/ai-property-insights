import { Card, CardContent } from "@/components/ui/card";
import { 
  Brain, 
  TrendingUp, 
  FileCheck, 
  Shield, 
  MapPin, 
  PieChart 
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Get instant, intelligent property evaluations powered by advanced AI technology.",
  },
  {
    icon: TrendingUp,
    title: "Investment Analytics",
    description: "Calculate ROI, cap rates, and rental yields with precision and ease.",
  },
  {
    icon: FileCheck,
    title: "Due Diligence Reports",
    description: "Automated comprehensive reports covering legal, financial, and market risks.",
  },
  {
    icon: Shield,
    title: "Risk Assessment",
    description: "Identify potential issues before they become problems with AI-driven risk scoring.",
  },
  {
    icon: MapPin,
    title: "Market Insights",
    description: "Deep dive into neighborhood trends, comparable properties, and market dynamics.",
  },
  {
    icon: PieChart,
    title: "Portfolio Management",
    description: "Track and manage multiple properties with comprehensive analytics dashboard.",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4 animate-fade-in-up">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider">
            Everything you need
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Powerful features for smart investing
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Our platform combines cutting-edge AI technology with comprehensive analytics 
            to give you the insights you need to make informed real estate decisions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-2 hover:border-secondary/50 transition-smooth hover:shadow-medium group animate-fade-in-up bg-card/50 backdrop-blur-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center group-hover:scale-110 transition-smooth">
                  <feature.icon className="w-6 h-6 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-bold">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
