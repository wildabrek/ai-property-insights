import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for individual investors",
    features: [
      "10 property analyses per month",
      "Basic AI evaluations",
      "Market insights",
      "Email support",
      "Mobile app access",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$149",
    period: "/month",
    description: "For serious real estate investors",
    features: [
      "Unlimited property analyses",
      "Advanced AI evaluations",
      "Due diligence reports",
      "Risk assessment",
      "Portfolio management",
      "Priority support",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "Custom AI models",
      "Dedicated account manager",
      "White-label solution",
      "Custom integrations",
      "SLA guarantee",
      "Training & onboarding",
    ],
    popular: false,
  },
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 space-y-4 animate-fade-in-up">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Choose Your Plan
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground">
            Simple, transparent pricing for every stage of your investment journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`
                relative border-2 transition-smooth hover:shadow-hover animate-fade-in-up
                ${plan.popular 
                  ? "border-accent shadow-medium scale-105 bg-card" 
                  : "border-border hover:border-primary/30 bg-card/50 backdrop-blur-sm"
                }
              `}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="gradient-accent text-accent-foreground shadow-medium">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground mb-2">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-secondary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`
                    w-full transition-smooth
                    ${plan.popular 
                      ? "gradient-accent text-accent-foreground shadow-medium hover:shadow-hover" 
                      : "border-2"
                    }
                  `}
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
