import { useEffect, useState } from "react";

const stats = [
  { label: "Properties Analyzed", value: 10000, suffix: "+" },
  { label: "AI Evaluations", value: 50000, suffix: "+" },
  { label: "Active Users", value: 1000, suffix: "+" },
  { label: "Accuracy Rate", value: 95, suffix: "%" },
];

export const Stats = () => {
  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem 
              key={stat.label} 
              {...stat} 
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  label: string;
  value: number;
  suffix: string;
  delay: number;
}

const StatItem = ({ label, value, suffix, delay }: StatItemProps) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [value]);
  
  return (
    <div 
      className="text-center animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl lg:text-5xl font-bold bg-gradient-to-br from-primary to-secondary bg-clip-text text-transparent mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm lg:text-base text-muted-foreground font-medium">
        {label}
      </div>
    </div>
  );
};
