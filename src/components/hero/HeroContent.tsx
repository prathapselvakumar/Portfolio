import { RefObject } from 'react';

interface HeroContentProps {
  contentRef: RefObject<HTMLDivElement>;
}

export default function HeroContent({ contentRef }: HeroContentProps) {
  return (
    <div ref={contentRef} className="w-full md:w-3/5 text-center md:text-left order-1 md:order-2 transition-transform duration-300">
      <div className="space-y-5 max-w-lg mx-auto md:mx-0">
        {/* Simple "Hi" greeting */}
        <div className="mb-4 h-16">
          <div className="text-3xl md:text-4xl font-bold text-primary animate-text-reveal">
            <span className="inline-block transform transition-all duration-500 text-4xl md:text-5xl">
              Hi,
            </span>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-text-reveal">
          I'm <span className="highlight-text">Prathap Selva Kumar</span>
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium text-muted-foreground animate-text-reveal" style={{ animationDelay: "150ms" }}>
          AI Enthusiast | Software Engineer
        </h2>
        
        <p className="text-lg text-foreground/80 animate-text-reveal" style={{ animationDelay: "300ms" }}>
          Pioneering intelligent systems that bridge the gap between hardware and software.
        </p>
        
        <div className="pt-6 flex flex-wrap gap-4 justify-center md:justify-start stagger-fade-in">
          <a 
            href="#about" 
            className="btn-primary group relative overflow-hidden tilt-card"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
            Discover More
          </a>
          <a 
            href="https://www.linkedin.com/in/prathapselvakumar/"  
            className="btn-secondary group relative overflow-hidden tilt-card"
             target="_blank" 
              
          >
            <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/40 to-secondary/0 opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000"></span>
            Linkedin 
          </a>
        </div>
      </div>
    </div>
  );
}