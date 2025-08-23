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
            
            <div className="relative flex justify-center mb-12 z-[10]">
              <img 
                src="/lovable-uploads/blog-page.svg" 
                alt="Blog Page"
                className="w-[90%] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
