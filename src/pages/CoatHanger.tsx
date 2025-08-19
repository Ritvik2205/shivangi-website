import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const CoatHanger = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>
          
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Wardrobe Essentials</h1>
              <p className="text-xl text-muted-foreground">
                Discover the foundation pieces for your perfect wardrobe
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/coat_hanger.svg" 
                  alt="Coat hanger"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Building Your Wardrobe</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Every great wardrobe starts with the right foundation pieces. 
                    From versatile basics to statement pieces, learn how to build 
                    a collection that works for your lifestyle and personal style.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    This section is currently under development. Check back soon 
                    for comprehensive wardrobe guides, styling tips, and essential 
                    pieces recommendations.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/services">
                    <Button>View Styling Services</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline">Get Wardrobe Consultation</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoatHanger;
