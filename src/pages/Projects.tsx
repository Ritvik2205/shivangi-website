import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>
          
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Projects</h1>
              <p className="text-xl text-muted-foreground">
                Recent collaborations and highlights
              </p>
            </div>
            
            <div className="space-y-12">
              {/* Project 1 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/lovable-uploads/side_mannequins.svg" 
                    alt="Two mannequins with gowns"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Fashion Week Collaboration</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Partnered with emerging designers for New York Fashion Week, 
                    creating stunning runway looks that captured the essence of 
                    each collection while highlighting the models' natural beauty.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Runway</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Fashion Week</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Collaboration</span>
                  </div>
                </div>
              </div>
              
              {/* Project 2 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <img 
                    src="/lovable-uploads/placeholder.svg" 
                    alt="Bridal collection"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 md:order-1">
                  <h2 className="text-2xl font-semibold">Bridal Collection Launch</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Created a complete bridal beauty experience for a luxury 
                    wedding dress designer, including makeup looks, hair styling, 
                    and accessory coordination for their seasonal collection.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Bridal</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Luxury</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Collection</span>
                  </div>
                </div>
              </div>
              
              {/* Project 3 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="/lovable-uploads/placeholder.svg" 
                    alt="Editorial shoot"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-2xl font-semibold">Editorial Magazine Feature</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Styled and created makeup looks for a major fashion editorial 
                    featuring sustainable fashion brands, showcasing how beauty 
                    and fashion can work together for positive change.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Editorial</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Sustainable</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Magazine</span>
                  </div>
                </div>
              </div>
              
              {/* Project 4 */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-2">
                  <img 
                    src="/lovable-uploads/placeholder.svg" 
                    alt="Celebrity event"
                    className="w-full rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-4 md:order-1">
                  <h2 className="text-2xl font-semibold">Celebrity Red Carpet Event</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Provided styling and makeup services for a high-profile 
                    awards ceremony, working with celebrities to create 
                    memorable red carpet moments that garnered media attention.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Celebrity</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Red Carpet</span>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Awards</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Interested in collaborating on your next project?
              </p>
              <Link to="/contact">
                <Button className="mt-4">Let's Work Together</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
