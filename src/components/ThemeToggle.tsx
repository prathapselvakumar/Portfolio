import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Initialize theme - always default to light
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    
    // Always default to light theme, even if user had dark theme before
    if (storedTheme === "dark") {
      setTheme("dark");
    } else {
      setTheme("light");
      // Ensure light theme is set in localStorage
      localStorage.setItem("theme", "light");
    }
  }, []);

  // Update DOM when theme changes
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button 
      onClick={toggleTheme} 
      variant="ghost" 
      size="icon" 
      className="rounded-full w-10 h-10 bg-secondary/50 text-foreground"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
    </Button>
  );
}

export default ThemeToggle;