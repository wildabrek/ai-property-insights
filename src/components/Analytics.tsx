import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, LineChart, PieChart as PieChartIcon, TrendingUp } from "lucide-react";

const analyticsFeatures = [
  {
    icon: BarChart3,
    title: "Property Valuation",
    description: "Real-time property value estimates using AI and market data",
    stat: "98% accurate",
  },
  {
    icon: LineChart,
    title: "Market Trends",
    description: "Track price movements and forecast future market conditions",
    stat: "24/7 monitoring",
  },
  {
    icon: PieChartIcon,
    title: "Portfolio Analytics",
    description: "Comprehensive overview of your entire real estate portfolio",
    stat: "Instant insights",
  },
  {
    icon: TrendingUp,
    title: "ROI Calculator",
    description: "Calculate returns with precision including all costs and revenues",
    stat: "Smart predictions",
  },
];

export const Analytics = () => {
  return (
    <section id="analytics" className="py-16 md:py-24 lg:py-32 bg-muted/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4 animate-fade-in-up">
          <Badge variant="secondary" className="bg-secondary/10 text-secondary border-secondary/20">
            Advanced Analytics
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Data-Driven Investment
            <span className="block bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Decisions
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Leverage powerful analytics tools to make informed investment decisions backed by real data.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {analyticsFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className="border-2 hover:border-primary/50 transition-smooth hover:shadow-hover group bg-card/80 backdrop-blur-sm animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0 group-hover:scale-110 transition-smooth">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        {feature.title}
                      </h3>
                      <Badge variant="outline" className="text-xs">
                        {feature.stat}
                      </Badge>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
