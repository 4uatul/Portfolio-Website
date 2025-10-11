import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Cloud, BarChart3 } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming Languages",
    skills: ["Python", "SQL", "R", "JavaScript", "Node.js", "C++", "Java", "HTML", "LaTeX", "Linux"],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: BarChart3,
    title: "Machine Learning & AI",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Clustering", "Time-Series Analysis", "Forecasting"],
    color: "from-secondary/20 to-secondary/5"
  },
  {
    icon: Database,
    title: "Data Analytics & Visualization",
    skills: ["Tableau", "Power BI", "D3.js", "Matplotlib", "Seaborn", "Plotly"],
    color: "from-accent/20 to-accent/5"
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "HQL", "Amazon DynamoDB", "CosmosDB", "Access Database"],
    color: "from-primary/20 to-primary/5"
  },
  {
    icon: Cloud,
    title: "Cloud & Big Data Tools",
    skills: ["AWS (EC2/EMR, Lambda, S3)", "Azure", "Hadoop", "Hive", "Spark", "SharePoint", "Jira"],
    color: "from-secondary/20 to-secondary/5"
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-slide-up">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Technical Skills
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            A comprehensive toolkit for data science, machine learning, and cloud engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="group p-8 shadow-card hover:shadow-elevated transition-all duration-500 animate-scale-in hover:scale-[1.03] relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-glow">
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="font-display text-2xl font-bold">{category.title}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default shadow-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
