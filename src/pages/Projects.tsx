import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Projects = () => {
  return (
    <div className="min-h-screen bg-[#A87E5E]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>

          <div 
            className="absolute bottom-0 left-0 w-full" 
            style={{ 
              backgroundColor: "#75482B",
              height: "32%"
            }} 
          />

          <div className="relative flex justify-center mb-12 z-[10] top-[20%]">
              <img 
                src="/lovable-uploads/desktop.svg" 
                alt="Projects Page"
                className="w-[85%] h-auto"
              />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
