import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#F2C6B8]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>
          
          <div className="space-y-8">

          <div 
            className="absolute bottom-0 left-0 w-full" 
            style={{ 
              backgroundColor: "#A46352",
              height: "32%"
            }} 
          />
            
            {/* Main Wardrobe Image */}
            <div className="relative flex justify-center mb-12 z-[10]">
              <img 
                src="/lovable-uploads/wardrobe.svg" 
                alt="Wardrobe"
                className="w-[80%] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
