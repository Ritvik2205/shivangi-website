import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Gallery = () => {
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
              <h1 className="text-4xl font-bold mb-4">Gallery</h1>
              <p className="text-xl text-muted-foreground">
                Signature looks and transformations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Sample gallery items - you can replace with actual images */}
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/center_mannequin.svg" 
                  alt="Pink layered gown on dress form"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold">Evening Elegance</h3>
                    <p className="text-sm">Formal event styling</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/placeholder.svg" 
                  alt="Casual chic transformation"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold">Casual Chic</h3>
                    <p className="text-sm">Everyday style transformation</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/placeholder.svg" 
                  alt="Bridal beauty"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold">Bridal Beauty</h3>
                    <p className="text-sm">Wedding day perfection</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/placeholder.svg" 
                  alt="Professional makeover"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold">Professional Glow</h3>
                    <p className="text-sm">Workplace confidence</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/placeholder.svg" 
                  alt="Color transformation"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold">Color Magic</h3>
                    <p className="text-sm">Hair and makeup transformation</p>
                  </div>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/placeholder.svg" 
                  alt="Seasonal style"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center text-white p-4">
                    <h3 className="font-semibold">Seasonal Style</h3>
                    <p className="text-sm">Trend-focused transformations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted-foreground">
                Each transformation tells a unique story. Ready to create yours?
              </p>
              <Link to="/contact">
                <Button className="mt-4">Book Your Session</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
