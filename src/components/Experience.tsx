import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Data Science Consultant",
    company: "Statistics Without Borders",
    location: "Seattle, WA",
    period: "Sep 2025 - Present",
    highlights: [
      "Analyzed 14+ large-scale survey datasets (n > 2,200) using Python and SQL; applied logistic regression, clustering, and factor analysis to uncover drivers of engagement and dropout in sports participation.",
      "Delivered executive-ready insights and visualizations that informed Women in Sport's senior management strategy, translating complex statistical findings into actionable recommendations.",
      "Led data quality reviews and mentoring sessions across 7 project teams, establishing reproducible workflows and strengthening team capabilities in statistical modeling and data storytelling."
    ]
  },
  {
    title: "Data & Service Operations Assistant",
    company: "Seattle University",
    location: "Seattle, WA",
    period: "Jun 2025 - Present",
    highlights: [
      "Analyzed guest parking data with Power BI and Python to identify seasonal peaks and low-demand periods; recommended reallocating staff during high-demand months, improving response times, and cutting guest-parking complaints by 80%.",
      "Applied GMM clustering on guest parking data, forming 5 departmental segments; used insights to tailor marketing and service education, increasing awareness of permit options and reducing unnecessary support requests.",
      "Designed SQL queries to extract records from Microsoft Access databases, eliminating error-prone manual entry; improved data accuracy from 85% to 100% and reduced staff workload by 30–40 hours per month.",
      "Partnered with IT, business, and external customers to troubleshoot issues, optimize workflows, and deliver timely solutions — demonstrating customer-facing and consultative mindset."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-4 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30 -z-10"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-primary/10 rounded-2xl">
              <Briefcase className="h-7 w-7 text-primary" />
            </div>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Experience
          </h2>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Building data-driven solutions and driving business impact through analytics
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="group p-8 md:p-10 shadow-card hover:shadow-elevated transition-all duration-500 animate-slide-in border-l-4 border-l-primary hover:scale-[1.02] relative overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <h3 className="font-display text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xl font-semibold text-primary mb-2">
                      {exp.company}
                    </p>
                    <p className="text-muted-foreground text-lg">
                      {exp.location}
                    </p>
                  </div>
                  <Badge variant="secondary" className="self-start text-sm px-5 py-2.5 rounded-full font-medium">
                    {exp.period}
                  </Badge>
                </div>
                
                <ul className="space-y-4 mt-8">
                  {exp.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="flex gap-4 text-foreground/90 leading-relaxed">
                      <span className="text-primary mt-1.5 flex-shrink-0 text-lg">▸</span>
                      <span className="text-base">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
