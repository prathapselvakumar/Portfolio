
import { useState, useEffect } from 'react';

// Multi-language greetings in their native scripts
export const greetings = [
  { text: "Hi", lang: "English" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "Ciao", lang: "Italian" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "你好", lang: "Chinese" },
  { text: "مرحبا", lang: "Arabic" },
  { text: "Guten Tag", lang: "German" },
  { text: "வணக்கம்", lang: "Tamil" }
];

export default function GreetingRotator() {
  const [currentGreeting, setCurrentGreeting] = useState(0);
  
  // Rotate through greetings
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(prev => (prev + 1) % greetings.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="mb-4 h-16">
      <div className="text-3xl md:text-4xl font-bold text-primary animate-text-reveal relative">
        <div className="flex flex-col items-center md:items-start">
          <span 
            className="inline-block transform transition-all duration-500 text-4xl md:text-5xl" 
            style={{ opacity: 1, transform: 'translateY(0)' }}
          >
            {greetings[currentGreeting].text}
          </span>
          <span className="text-xs text-muted-foreground">
            [{greetings[currentGreeting].lang}]
          </span>
        </div>
      </div>
    </div>
  );
}
