import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MapPin, Phone, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero opacity-90 -z-10"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }}></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-16 animate-slide-up text-white">
          <h2 className="font-display text-5xl md:text-6xl font-bold mb-6">Let's Connect</h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            I'm always interested in discussing data science opportunities, collaborations, 
            or innovative projects
          </p>
        </div>

        <Card className="p-10 md:p-14 shadow-elevated backdrop-blur-lg bg-white/98 animate-scale-in relative overflow-hidden">
          {/* Card decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary/10 to-transparent rounded-tr-full"></div>
          
          <div className="relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <a 
                href="mailto:atul@seattleu.edu"
                className="group flex items-center gap-4 p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300 border-2 border-transparent hover:border-primary/20"
              >
                <div className="p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-glow group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg mb-1">Email</p>
                  <p className="text-sm text-muted-foreground">atul@seattleu.edu</p>
                </div>
              </a>

              <a 
                href="tel:+12066094655"
                className="group flex items-center gap-4 p-6 rounded-2xl hover:bg-secondary/5 transition-all duration-300 border-2 border-transparent hover:border-secondary/20"
              >
                <div className="p-4 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl shadow-glow group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg mb-1">Phone</p>
                  <p className="text-sm text-muted-foreground">+1 (206) 609-4655</p>
                </div>
              </a>

              <div className="group flex items-center gap-4 p-6 rounded-2xl border-2 border-border/50">
                <div className="p-4 bg-gradient-to-br from-accent to-accent/80 rounded-2xl">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg mb-1">Location</p>
                  <p className="text-sm text-muted-foreground">Seattle, Washington</p>
                </div>
              </div>

              <a 
                href="https://linkedin.com/in/atul1000"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 rounded-2xl hover:bg-primary/5 transition-all duration-300 border-2 border-transparent hover:border-primary/20"
              >
                <div className="p-4 bg-gradient-to-br from-primary to-primary/80 rounded-2xl shadow-glow group-hover:scale-110 transition-transform">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-lg mb-1">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/atul1000</p>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-border/30">
              <a href="mailto:atul@seattleu.edu">
                <Button size="lg" className="w-full sm:w-auto shadow-glow bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary px-8 py-6 text-base font-semibold rounded-full">
                  <Send className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
              </a>
              
              <a href="https://github.com/4uatul" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 px-8 py-6 text-base font-semibold rounded-full hover:bg-muted/50">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </Button>
              </a>
            </div>
          </div>
        </Card>

        <div className="mt-12 text-white/70 text-sm font-light">
          <p>© 2025 FNU Atul • Built with passion for data science and innovation</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
