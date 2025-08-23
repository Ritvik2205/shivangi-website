import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Gallery = () => {
  const [scale, setScale] = useState(1);

  // Base design resolution (keeps relative layout consistent)
  const BASE_WIDTH = 1670;
  const BASE_HEIGHT = 1000;

  // Update scale on resize
  useEffect(() => {
    const handleResize = () => {
      const s = Math.min(window.innerWidth / BASE_WIDTH, window.innerHeight / BASE_HEIGHT);
      setScale(s);
    };

    window.addEventListener('resize', handleResize);
    // initialize once
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#F2C6B8]">
              <div className="container mx-auto px-4 py-8 relative">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="relative z-[100]">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Room
              </Button>
            </Link>
            
            {/* Fixed-design scene wrapper that scales uniformly */}
            <div
              className="relative"
              style={{
                width: `${BASE_WIDTH}px`,
                height: `${BASE_HEIGHT}px`,
                position: "absolute",
                top: 0,
                left: "50%",
                transform: `translateX(-50%) scale(${scale})`,
                transformOrigin: "top center",
                zIndex: 1,
              }}
            >

          <div 
            className="absolute bottom-0 left-0 w-full" 
            style={{ 
              backgroundColor: "#A46352",
              height: "32%"
            }} 
          />
            
            {/* Main Wardrobe Image */}
            <div className="relative flex justify-center mb-12 z-[10] top-[10%]">
              <img 
                src="/lovable-uploads/wardrobe.svg" 
                alt="Wardrobe"
                className="w-[50%] h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
