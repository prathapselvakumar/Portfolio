
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in">
            About <span className="highlight-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in">
            Get to know more about my background, education, and career goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Bio Section */}
          <Card className={cn(
            "tech-card card-hover animate-fade-in",
            "border-l-4 border-l-primary"
          )}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Personal Bio</h3>
              <p className="mb-4 text-foreground/80">
                I am Prathap SelvaKumar, Software Engineer I am passionate about the intersection of robotics and artificial intelligence.
              </p>
              <p className="text-foreground/80">
                With a solid background in computer science and practical industry experience, I aspire to work on cutting-edge technologies that shape the future.
              </p>
            </CardContent>
          </Card>
          
          {/* Education Section */}
          <Card className={cn(
            "tech-card card-hover animate-fade-in animation-delay-100",
            "border-l-4 border-l-accent"
          )}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Education</h3>
              <div className="space-y-2">
                <h4 className="font-semibold">B.Tech in Computer Science and Engineering</h4>
                <p className="text-foreground/80">SRM Institute of Science and Technology</p>
                <p className="text-sm text-muted-foreground">CGPA: 8.49</p>
              </div>
            </CardContent>
          </Card>
          
          {/* Career Goals */}
          <Card className={cn(
            "tech-card card-hover animate-fade-in animation-delay-200 md:col-span-2",
            "border-l-4 border-l-primary/70"
          )}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">Career Goals</h3>
              <p className="text-foreground/80">
                I am actively seeking opportunities for higher education abroad to deepen my knowledge in the fields of Artificial Intelligence and Robotics. My ultimate goal is to contribute to groundbreaking research and development in these fields, creating intelligent systems that can solve real-world problems and improve people's lives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
