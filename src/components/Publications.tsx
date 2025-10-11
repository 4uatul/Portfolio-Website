import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, ExternalLink } from "lucide-react";

const publications = [
  {
    title: "Evaluating ML Algorithms for Heart Disease Prediction",
    type: "Research Paper",
    tags: ["Machine Learning", "Healthcare"],
    publisher: "IEEE Xplore",
    link: "#"
  },
  {
    title: "Bidirectional LSTM for Toxic Comment Classification",
    type: "Research Paper",
    tags: ["Deep Learning", "NLP"],
    publisher: "EAI Journal",
    link: "#"
  }
];

const certifications = [
  {
    title: "AWS Cloud Practitioner 1-4",
    provider: "AWS Skill Center",
    status: "In Progress",
    expected: "Oct 2025"
  },
  {
    title: "AWS AI Practitioner 1-5",
    provider: "AWS Skill Center",
    status: "In Progress",
    expected: "Nov 2025"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30 -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-2xl shadow-glow">
              <BookOpen className="h-7 w-7 text-white" />
            </div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Publications & Certifications
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Contributing to research and continuing professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h3 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-xl">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              Publications
            </h3>
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card 
                  key={index} 
                  className="group p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-500 animate-slide-in hover:scale-[1.02] relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h4 className="text-xl font-bold text-foreground flex-1 leading-tight group-hover:text-primary transition-colors">
                        {pub.title}
                      </h4>
                      <a 
                        href={pub.link}
                        className="text-primary hover:text-primary/80 transition-colors flex-shrink-0"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-base">{pub.publisher}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="px-3 py-1">{pub.type}</Badge>
                      {pub.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
              <div className="p-2 bg-secondary/10 rounded-xl">
                <Award className="h-6 w-6 text-secondary" />
              </div>
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="group p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-500 animate-slide-in hover:scale-[1.02] relative overflow-hidden"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h4 className="text-xl font-bold text-foreground leading-tight">
                        {cert.title}
                      </h4>
                      <Badge className="self-start bg-gradient-to-r from-secondary to-accent text-white shadow-sm px-4 py-1.5 rounded-full">
                        {cert.status}
                      </Badge>
                    </div>
                    
                    <p className="text-muted-foreground mb-2 text-base">{cert.provider}</p>
                    <p className="text-sm text-primary font-medium">
                      Expected: {cert.expected}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Publications;
