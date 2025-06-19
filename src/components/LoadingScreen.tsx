import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Extended greetings list with more languages
const greetings = [
  { text: "Hello", lang: "English" },
  { text: "Hola", lang: "Spanish" },
  { text: "Bonjour", lang: "French" },
  { text: "Guten Tag", lang: "German" },
  { text: "Ciao", lang: "Italian" },
  { text: "Olá", lang: "Portuguese" },
  { text: "Привет", lang: "Russian" },
  { text: "你好", lang: "Chinese" },
  { text: "こんにちは", lang: "Japanese" },
  { text: "안녕하세요", lang: "Korean" },
  { text: "مرحبا", lang: "Arabic" },
  { text: "नमस्ते", lang: "Hindi" },
  { text: "வணக்கம்", lang: "Tamil" },
  { text: "Hej", lang: "Swedish" },
  { text: "Hallo", lang: "Dutch" },
  { text: "Γεια σας", lang: "Greek" },
  { text: "שלום", lang: "Hebrew" },
  { text: "สวัสดี", lang: "Thai" },
  { text: "Xin chào", lang: "Vietnamese" },
  { text: "Sawubona", lang: "Zulu" }
];

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [showFinalGreeting, setShowFinalGreeting] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Faster progress animation - complete in 5 seconds
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2; // Faster increment (2% every 50ms = 100% in 2.5 seconds)
      });
    }, 50); // Faster interval

    // Faster greeting rotation - show fewer greetings
    const selectedGreetings = greetings.slice(0, 8); // Show only 8 greetings instead of 20
    const greetingInterval = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev >= selectedGreetings.length - 1) {
          clearInterval(greetingInterval);
          setShowFinalGreeting(true);
          return prev;
        }
        return prev + 1;
      });
    }, 400); // Faster - 400ms between greetings

    // Complete loading after 5 seconds total
    const completeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Shorter fade out
    }, 5000); // Exactly 5 seconds

    return () => {
      clearInterval(progressInterval);
      clearInterval(greetingInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500",
        !isVisible && "opacity-0 pointer-events-none"
      )}
    >
      {/* Background with subtle animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow delay-700"></div>
        
        {/* Animated particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-accent/30 rounded-full animate-ping" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-ping" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        {/* Main greeting display with fixed height container */}
        <div className="mb-12">
          <div className="h-40 flex items-center justify-center">
            {showFinalGreeting ? (
              <div className="animate-fade-in">
                <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4 transition-all duration-1000">
                  Hello
                </h1>
                <p className="text-xl text-muted-foreground transition-all duration-1000 delay-300">
                  Welcome to Prathap's Portfolio
                </p>
              </div>
            ) : (
              <div 
                key={currentIndex}
                className="animate-fade-in transition-all duration-500"
              >
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-2 transition-all duration-500 min-h-[80px] flex items-center justify-center">
                  {greetings[currentIndex]?.text}
                </h1>
                <p className="text-lg text-muted-foreground transition-all duration-500 delay-200 min-h-[28px] flex items-center justify-center">
                  {greetings[currentIndex]?.lang}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Progress indicator with fixed width */}
        <div className="w-full max-w-md mx-auto">
          <div className="h-2 bg-secondary rounded-full overflow-hidden w-80 mx-auto">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-4 text-sm text-muted-foreground transition-all duration-300 min-h-[20px] flex items-center justify-center">
            {progress < 100 ? 'Loading...' : 'Ready!'}
          </div>
        </div>

        {/* Floating elements with faster animations */}
        <div className="absolute -top-10 -right-10 w-20 h-20 border border-primary/20 rounded-full animate-spin-slow"></div>
        <div className="absolute -bottom-10 -left-10 w-16 h-16 border border-accent/20 rounded-full animate-spin-reverse-slow"></div>
        
        {/* Tech badges floating around with faster movement */}
        <div className="absolute top-0 right-1/4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary text-xs font-bold animate-float-vertical" style={{ animationDelay: "0.5s", animationDuration: "4s" }}>
          AI
        </div>
        <div className="absolute bottom-0 left-1/4 w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center text-accent text-xs font-bold animate-float-vertical" style={{ animationDelay: "1.5s", animationDuration: "5s" }}>
          ML
        </div>
       
      </div>

      {/* Corner branding */}
      <div className="absolute bottom-8 left-8 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <span>Prathap SelvaKumar</span>
        </div>
      </div>

      {/* Version indicator */}
      <div className="absolute bottom-8 right-8 text-xs text-muted-foreground">

      </div>
    </div>
  );
}