import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, ExternalLink, Sparkles } from "lucide-react";

const projects = [
  {
    title: "SmartStock – Automated Inventory & Ordering SaaS",
    status: "In Progress",
    period: "Sep 2025",
    description: "Cloud-native SaaS solution on Microsoft Azure for real-time inventory tracking and automatic reordering.",
    highlights: [
      "Architecting with Azure Functions, Cosmos DB, and App Service for real-time tracking",
      "Implementing microservice-based APIs for low-stock alerts and purchase-order workflows",
      "Building branch-level analytics dashboards in Power BI for sales trends and purchasing optimization"
    ],
    tags: ["Azure", "Microservices", "Power BI", "SaaS"],
    gradient: "from-primary/10 to-secondary/10"
  },
  {
    title: "Real-Time TF-IDF Search Engine",
    period: "Mar 2025",
    description: "Built a real-time search engine using Apache Spark on AWS infrastructure.",
    highlights: [
      "Developed using Apache Spark on AWS EMR, EC2, and Flask",
      "Utilized AWS S3 for data storage and DynamoDB for data management",
      "Implemented TF-IDF score computation in Python for document relevance"
    ],
    tags: ["AWS", "Apache Spark", "Python", "Big Data", "Flask"],
    gradient: "from-secondary/10 to-accent/10"
  },
  {
    title: "Heart Disease Predictor",
    period: "Sep 2024",
    description: "Machine learning system to predict heart disease from patient records.",
    highlights: [
      "Trained and compared 6 ML models using 304 patient records",
      "Optimized precision, recall, and F1 scores for healthcare decision support",
      "Published findings in IEEE Xplore"
    ],
    tags: ["Machine Learning", "Healthcare", "Python", "Scikit-learn"],
    link: "https://ieeexplore.ieee.org",
    gradient: "from-accent/10 to-primary/10"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-2xl shadow-glow">
              <Rocket className="h-7 w-7 text-white" />
            </div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Innovative solutions leveraging cloud computing, big data, and machine learning
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group p-8 md:p-10 shadow-card hover:shadow-elevated transition-all duration-500 animate-slide-in hover:scale-[1.01] relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-4">
                      <h3 className="font-display text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 transition-colors mt-1"
                        >
                          <ExternalLink className="h-6 w-6" />
                        </a>
                      )}
                    </div>
                    <p className="text-foreground/80 text-lg mb-4 font-light leading-relaxed">{project.description}</p>
                  </div>
                  <div className="flex gap-3">
                    <Badge variant="outline" className="self-start text-sm px-4 py-2 rounded-full">
                      {project.period}
                    </Badge>
                    {project.status && (
                      <Badge className="self-start bg-gradient-to-r from-primary to-secondary text-white shadow-sm px-4 py-2 rounded-full">
                        <Sparkles className="h-3 w-3 mr-1" />
                        {project.status}
                      </Badge>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {project.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-4 text-foreground/90 leading-relaxed">
                      <span className="text-primary mt-1 flex-shrink-0 text-lg">▸</span>
                      <span className="text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2.5 mt-6">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex} 
                      variant="secondary"
                      className="px-4 py-1.5 text-sm shadow-sm font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
