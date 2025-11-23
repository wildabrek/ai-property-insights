import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Building2, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Analytics", href: "#analytics" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setMobileOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div
        className={`
          backdrop-blur-xl bg-card/80 border-2 border-border/50
          rounded-full px-4 md:px-6 py-3 shadow-soft
          transition-all duration-300
          ${isScrolled ? "shadow-medium border-border/80" : ""}
        `}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
              <Building2 className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-base md:text-lg hidden sm:block">
              AI Real Estate
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth rounded-full hover:bg-muted/50"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="gradient-accent text-accent-foreground rounded-full shadow-soft hover:shadow-medium transition-smooth"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-muted/50"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] rounded-l-3xl">
              <div className="flex flex-col gap-6 mt-8">
                {/* Mobile Logo */}
                <div className="flex items-center gap-2 pb-4 border-b border-border">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <span className="font-bold text-lg">AI Real Estate</span>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.label}
                      onClick={() => scrollToSection(link.href)}
                      className="px-4 py-3 text-left font-medium hover:bg-muted/50 rounded-xl transition-smooth"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <Button
                  size="lg"
                  className="gradient-accent text-accent-foreground rounded-full shadow-medium w-full"
                >
                  Get Started
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
