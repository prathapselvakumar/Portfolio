
import { useState } from "react";
import { cn } from "@/lib/utils";

type ExperienceItem = {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    id: "csq-swe",
    title: "Software Engineer",
    company: "C-Square Info Solutions (Subsidiary  of Reliance Retail)",
    period: "AUG-2024 to MAY-2025",
    description: [
      "Working with React.js and Node.js to develop full-stack web applications",
      "Collaborating with cross-functional teams to deliver high-quality software solutions",
      "Implementing responsive designs and ensuring optimal performance across devices"
    ],
    technologies: ["React.js", "JavaScript", "HTML/CSS", "Git"],
  },
  {
    id: "qentelli-intern",
    title: "AI/ML Project Intern",
    company: "Qentelli Solutions",
    period: "FEB-2024 to APR-2024",
    description: [
      "Participated in AI/ML projects focused on predictive analytics",
      "Assisted in developing machine learning models for business applications",
      "Gained hands-on experience with machine learning frameworks and tools"
    ],
    technologies: ["Python", "Machine Learning", "Predictive Analytics", "Data Science"],
  },
  {
    id: "NUS Academic -Intern",
    title: "Big Data Analytics using Deep Learning - Academic Internship ",
    company: "National University of Singapore",
    period: "DEC-2023 to JAN-2025",
    description: [
      "Applied deep learning techniques to analyze large datasets",
      "Worked on research projects involving pattern recognition in data",
      "Collaborated with academic researchers on cutting-edge deep learning approaches"
    ],
    technologies: ["Python", "TensorFlow", "Deep Learning", "Big Data Analytics"],
  },
  {
    id: "csq-intern",
    title: "Python Developer Intern",
    company: "C-Square Info Solutions",
    period: "SEP-2023 TO NOV-2023",
    description: [
      "Developed Python scripts for automation and data processing",
      "Worked on internal tools to improve team productivity",
      "Gained experience with database operations and API integration"
    ],
    technologies: ["Python", "SQL","Data Processing", "MongoDB"],
  },
  
  
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(experiences[0].id);

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            Work <span className="highlight-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            My professional journey and internship experiences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Tabs for larger screens */}
          <div className="hidden lg:flex lg:col-span-4 flex-col border-r border-border pr-4">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => setActiveTab(exp.id)}
                className={cn(
                  "text-left py-4 px-3 transition-colors border-l-2",
                  activeTab === exp.id
                    ? "border-l-primary font-medium text-primary bg-primary/5"
                    : "border-l-transparent hover:border-l-primary/50 hover:bg-secondary"
                )}
              >
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">{exp.company}</p>
              </button>
            ))}
          </div>
          
          {/* Tabbed content */}
          <div className="lg:col-span-8 lg:pl-6">
            {/* Mobile tabs */}
            <div className="lg:hidden mb-6 overflow-x-auto flex gap-2 pb-2">
              {experiences.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => setActiveTab(exp.id)}
                  className={cn(
                    "px-4 py-2 whitespace-nowrap text-sm rounded-full transition-colors",
                    activeTab === exp.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary hover:bg-secondary/80"
                  )}
                >
                  {exp.title}
                </button>
              ))}
            </div>
            
            {/* Content */}
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className={cn(
                  "transition-all duration-300",
                  activeTab === exp.id ? "animate-fade-in" : "hidden"
                )}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                </div>
                
                <ul className="space-y-2 mb-8">
                  {exp.description.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div>
                  <h4 className="text-sm font-semibold mb-2">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-secondary rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
