import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden gradient-hero pt-24 md:pt-28">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up text-center lg:text-left">
            <Badge 
              variant="secondary" 
              className="bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 transition-smooth"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              New: AI-Powered Insights - Just shipped v2.0
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AI-Powered
              </span>
              <br />
              Real Estate Intelligence
            </h1>
            
            <p className="text-base md:text-xl text-muted-foreground max-w-xl leading-relaxed mx-auto lg:mx-0">
              Transform raw property data into actionable insights. Make smarter investment 
              decisions with AI-driven analytics, automated due diligence, and comprehensive 
              market intelligence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-medium hover:shadow-hover transition-smooth group"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-card transition-smooth"
              >
                View Dashboard →
              </Button>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative h-[300px] md:h-[400px] lg:h-[600px] animate-fade-in order-first lg:order-last" style={{ animationDelay: "0.2s" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-2xl blur-3xl opacity-50" />
            <img 
              src={heroDashboard}
              alt="Real Estate Dashboard showing AI-powered analytics and property insights"
              className="relative rounded-2xl shadow-hover w-full h-full object-cover border border-border/50"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
