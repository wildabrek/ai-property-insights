import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-primary opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Join 1,000+ Smart Investors</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
            Ready to transform your
            <br />
            <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
              real estate investments?
            </span>
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of investors who are making smarter decisions with 
            AI-powered insights.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="gradient-accent text-accent-foreground shadow-medium hover:shadow-hover transition-smooth group text-lg px-8"
            >
              Start Analyzing Properties
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 hover:bg-card transition-smooth text-lg px-8"
            >
              Learn more →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
