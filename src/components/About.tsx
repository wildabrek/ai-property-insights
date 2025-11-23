import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Target } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To democratize real estate intelligence and empower investors with AI-driven insights.",
  },
  {
    icon: Users,
    title: "Our Team",
    description: "Industry experts combining real estate knowledge with cutting-edge AI technology.",
  },
  {
    icon: Award,
    title: "Our Promise",
    description: "Accurate, reliable, and actionable insights to help you make confident decisions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-card relative overflow-hidden">
      {/* Floating animated shapes */}
      <div className="absolute top-10 left-[10%] w-20 h-20 border-2 border-secondary/20 rounded-lg rotate-12 animate-pulse" />
      <div className="absolute bottom-20 right-[15%] w-16 h-16 border-2 border-primary/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute top-1/2 right-[5%] w-24 h-24 border-2 border-accent/20 rounded-lg -rotate-12 animate-pulse" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              About Us
            </Badge>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Transforming Real Estate
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                with Artificial Intelligence
              </span>
            </h2>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              We're a team of real estate professionals and AI experts on a mission to make 
              property investment data accessible, understandable, and actionable for everyone.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Our platform has analyzed over 10,000 properties, helping investors make 
              informed decisions backed by data and AI-powered insights.
            </p>

            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">2020</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-secondary">1K+</div>
                <div className="text-sm text-muted-foreground">Active Users</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-accent">50K+</div>
                <div className="text-sm text-muted-foreground">Analyses</div>
              </div>
            </div>
          </div>

          {/* Right Values */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="flex gap-4 p-6 rounded-2xl bg-background/50 border border-border/50 hover:border-primary/30 transition-smooth hover:shadow-soft animate-fade-in-up"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <value.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg md:text-xl font-bold">{value.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
