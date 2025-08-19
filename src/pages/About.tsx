import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const About = () => {
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
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <p className="text-xl text-muted-foreground">
                Learn more about my story and approach
              </p>
            </div>
            
            <div className="grid md:grid-cols-1 gap-8 items-center">
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">My Journey</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    With over a decade of experience in the beauty and fashion industry, 
                    I've dedicated my career to helping people discover their unique style 
                    and confidence. My approach combines traditional techniques with modern 
                    trends to create timeless looks that reflect each individual's personality.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">My Philosophy</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I believe that beauty is not about conforming to standards, but about 
                    enhancing what makes you uniquely beautiful. Every client is different, 
                    and I take pride in creating personalized experiences that celebrate 
                    individuality while achieving stunning results.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">What I Offer</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Personalized styling consultations</li>
                    <li>• Professional makeup artistry</li>
                    <li>• Wardrobe transformation services</li>
                    <li>• Special event preparation</li>
                    <li>• Ongoing style coaching</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
