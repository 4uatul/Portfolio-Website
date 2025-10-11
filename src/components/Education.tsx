import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award as AwardIcon } from "lucide-react";

const education = [
  {
    degree: "Master of Science in Computer Science",
    specialization: "Data Science Specialization",
    school: "Seattle University",
    location: "Seattle, WA",
    period: "Expected March 2026",
    courses: [
      "Artificial Intelligence",
      "Machine Learning",
      "Data Science",
      "Distributed Systems",
      "Big Data Analytics",
      "Visual Analytics"
    ]
  },
  {
    degree: "Bachelor of Technology",
    specialization: "Computer Science Engineering",
    school: "Maharshi Dayanand University",
    location: "Haryana, India",
    period: "Sep 2020 - May 2024",
    courses: []
  }
];

const Education = () => {
  return (
    <section id="education" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-glow">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Education
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Building a strong foundation in computer science and data science
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="group p-8 md:p-10 shadow-card hover:shadow-elevated transition-all duration-500 animate-scale-in hover:scale-[1.03] relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative z-10">
                <Badge variant="secondary" className="mb-6 px-4 py-2 rounded-full font-medium">
                  {edu.period}
                </Badge>
                
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 leading-tight">
                  {edu.degree}
                </h3>
                
                {edu.specialization && (
                  <p className="text-xl text-primary font-semibold mb-4">
                    {edu.specialization}
                  </p>
                )}
                
                <p className="text-lg font-medium mb-1">{edu.school}</p>
                <p className="text-muted-foreground mb-6">{edu.location}</p>
                
                {edu.courses.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-border/50">
                    <p className="text-sm font-semibold mb-3 text-muted-foreground flex items-center gap-2">
                      <AwardIcon className="h-4 w-4" />
                      Relevant Courses:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <Badge 
                          key={courseIndex} 
                          variant="outline"
                          className="text-xs px-3 py-1"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
