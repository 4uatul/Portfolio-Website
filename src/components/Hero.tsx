import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, FileText, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 gradient-hero opacity-90 -z-10"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "4s" }}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20 -z-10"></div>
      
      <div className="max-w-6xl mx-auto text-center text-white animate-fade-in relative z-10">
        <div className="mb-8 inline-flex items-center gap-2">
          <Sparkles className="h-5 w-5 animate-pulse" />
          <span className="glass px-6 py-2.5 rounded-full text-sm font-medium tracking-wide">
            Data Science • Cloud Computing • AI/ML
          </span>
        </div>
        
        <h1 className="font-display text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-white/70">
            FNU ATUL
          </span>
        </h1>
        
        <p className="text-2xl md:text-3xl mb-6 text-white/95 font-light tracking-wide">
          Data Science Graduate Student & Cloud Solutions Developer
        </p>
        
        <p className="text-lg md:text-xl mb-12 text-white/85 max-w-3xl mx-auto leading-relaxed font-light">
          Transforming complex data into actionable insights with expertise in Machine Learning, 
          Cloud Architecture, and Big Data Analytics
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <a href="mailto:atul@seattleu.edu">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90 shadow-elevated hover:shadow-glow transition-all duration-300 px-8 py-6 text-base font-semibold rounded-full"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </a>
          
          <a href="https://linkedin.com/in/atul1000" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg"
              variant="outline"
              className="glass border-white/30 hover:bg-white/20 text-white backdrop-blur-md px-8 py-6 text-base font-semibold rounded-full"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
          </a>
          
          <a href="https://github.com/4uatul" target="_blank" rel="noopener noreferrer">
            <Button 
              size="lg"
              variant="outline"
              className="glass border-white/30 hover:bg-white/20 text-white backdrop-blur-md px-8 py-6 text-base font-semibold rounded-full"
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <MapPin className="h-4 w-4" />
            <span>Seattle, WA</span>
          </div>
          <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
            <FileText className="h-4 w-4" />
            <span>M.S. Computer Science (Data Science)</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
