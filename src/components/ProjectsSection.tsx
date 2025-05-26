
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useRef, useState, useEffect } from "react";

type Project = {
  id: number;
  title: string;
  description: string;
  type: string;
  technologies: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Full Stack Web Application",
    description: "Developed responsive web applications using React.js and Node.js at C-Square Info Solutions.",
    type: "Professional Work",
    technologies: ["React.js", "Node.js", "JavaScript", "HTML/CSS"],
  },
  {
    id: 2,
    title: "Python",
    description: "Created Python scripts for automation and data processing during internship at C-Square Info Solutions.",
    type: "Internship Project",
    technologies: ["Python", "SQL", "API Integration"],
  },
  {
    id: 3,
    title: "Big Data Analatics Using Deep Learning",
    description: "Applied deep learning techniques to analyze large datasets at National University of Singapore.",
    type: "Research Internship",
    technologies: ["Python", "TensorFlow", "Deep Learning"],
  },
  {
    id: 4,
    title: "Predictive Analytics Models",
    description: "Developed machine learning models for predictive analytics at Qentelli Solutions.",
    type: "ML/AI Project",
    technologies: ["Python", "Machine Learning", "Data Science"],
  },
];

const certifications = [
  {
    title: "Big Data Analatics Using Deep Learning",
    issuer: "National University of Singapore",
    date: "2023",
  },
  {
    title: "AWS Certified – SageMaker",
    issuer: "Amazon Web Services",
    date: "2023",
  }
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const projectCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const certCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  
  // Handle mouse move effect on project cards for 3D tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, ref: HTMLDivElement) => {
    const rect = ref.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    ref.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };
  
  const handleMouseLeave = (ref: HTMLDivElement) => {
    ref.style.transition = 'transform 0.5s ease';
    ref.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    
    setTimeout(() => {
      ref.style.transition = '';
    }, 500);
  };

  // Parallax effect for background elements
  const handleSectionScroll = () => {
    if (!sectionRef.current) return;
    
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollPosition = window.scrollY;
    const sectionTop = rect.top + scrollPosition;
    const offset = scrollPosition - sectionTop;
    
    // Apply parallax to background elements
    const backgroundElements = sectionRef.current.querySelectorAll('.parallax-bg');
    backgroundElements.forEach((element, index) => {
      const speed = index % 2 === 0 ? 0.05 : 0.08;
      const yPos = offset * speed;
      (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
    });
  };
  
  // Intersection observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Add scroll listener for parallax effect
    window.addEventListener('scroll', handleSectionScroll);
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleSectionScroll);
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="projects" className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Enhanced animated background elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-circuit-pattern opacity-5"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl animate-pulse-slow parallax-bg"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl animate-pulse-slow delay-700 parallax-bg"></div>
        
        {/* Dynamic grid lines with parallax */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-horizontal-bounce parallax-bg"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-wave parallax-bg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 text-center">
          <h2 className={cn(
            "text-3xl md:text-4xl font-bold mb-4",
            isVisible ? "animate-text-reveal" : "opacity-0"
          )}>
            Projects & <span className="highlight-text">Certifications</span>
          </h2>
          <p className={cn(
            "text-muted-foreground max-w-2xl mx-auto",
            isVisible ? "animate-text-reveal" : "opacity-0"
          )} style={{ animationDelay: "100ms" }}>
            Showcasing my work experience, projects, and industry certifications.
          </p>
        </div>
        
        {/* Projects Grid with enhanced 3D animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12" ref={cardsRef}>
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              ref={el => projectCardRefs.current[index] = el}
              className={cn(
                "tech-card card-hover group tilt-card",
                index % 2 === 0 ? "border-t-4 border-t-primary" : "border-t-4 border-t-accent",
                isVisible ? "animate-fade-in" : "opacity-0"
              )} 
              style={{ 
                animationDelay: `${index * 150}ms`,
                transition: 'transform 0.1s ease'
              }}
              onMouseMove={(e) => {
                const card = projectCardRefs.current[index];
                if (card) handleMouseMove(e, card);
              }}
              onMouseLeave={() => {
                const card = projectCardRefs.current[index];
                if (card) handleMouseLeave(card);
              }}
            >
              {/* Enhanced animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              {/* Floating accent elements that appear on hover */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-bl-3xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-top-right"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-tr-3xl scale-0 group-hover:scale-100 transition-transform duration-500 origin-bottom-left delay-100"></div>
              
              <CardHeader className="relative z-10">
                <CardTitle className="transition-transform duration-300 group-hover:-translate-y-1">{project.title}</CardTitle>
                <CardDescription className="transition-all duration-300 group-hover:text-primary">{project.type}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-foreground/80 mb-4 transition-all duration-300 group-hover:text-foreground">{project.description}</p>
              </CardContent>
              <CardFooter className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge 
                      key={i} 
                      variant="secondary" 
                      className="transition-all duration-500 hover:bg-primary hover:text-primary-foreground"
                      style={{ 
                        transitionDelay: `${i * 50}ms`,
                        transform: `translateY(${isVisible ? '0' : '10px'})`,
                        opacity: isVisible ? 1 : 0
                      }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Certifications with enhanced animations */}
        <div>
          <h3 className={cn(
            "text-2xl font-bold mb-6 text-center",
            isVisible ? "animate-text-reveal" : "opacity-0"
          )} style={{ animationDelay: "300ms" }}>
            Certifications
          </h3>
          <div className="max-w-2xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                ref={el => certCardRefs.current[index] = el}
                className={cn(
                  "mb-4 tech-card card-hover border-l-4 border-l-accent group tilt-card",
                  isVisible ? "animate-fade-in" : "opacity-0"
                )}
                style={{ 
                  animationDelay: `${400 + index * 150}ms`,
                  transition: 'transform 0.1s ease' 
                }}
                onMouseMove={(e) => {
                  const card = certCardRefs.current[index];
                  if (card) handleMouseMove(e, card);
                }}
                onMouseLeave={() => {
                  const card = certCardRefs.current[index];
                  if (card) handleMouseLeave(card);
                }}
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <CardHeader className="relative z-10">
                  <CardTitle className="transition-transform duration-300 group-hover:-translate-y-1">{cert.title}</CardTitle>
                  <CardDescription className="transition-all duration-300 group-hover:text-accent">{cert.issuer} • {cert.date}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
