
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <nav className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home" className="text-xl md:text-2xl font-bold font-poppins">
            <span className="highlight-text">Prathap</span>
            <span className="ml-1 text-foreground">SK</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8 items-center">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-primary animated-underline py-1"
            >
              {item.name}
            </a>
          ))}
          <div className="ml-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            className="text-foreground"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-full bg-background/95 backdrop-blur-lg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border transform transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-bold font-poppins">
              <span className="highlight-text">Prathap</span>
              <span className="ml-1 text-foreground">SK</span>
            </a>
            <Button
              variant="ghost"
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-10 flow-root">
            <div className="space-y-6 py-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-poppins text-base font-medium text-foreground hover:text-primary py-2"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
