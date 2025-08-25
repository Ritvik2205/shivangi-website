import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PopupItem from "@/components/PopupItem";
import Popup from "@/components/ui/popup";
import { imageCache } from "@/utils/imageCache";

const Gallery = () => {
  const [scale, setScale] = useState(1);
  const [popupData, setPopupData] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    details: { style: string; color: string; occasion: string };
  }>({
    isOpen: false,
    title: "",
    description: "",
    imageSrc: "",
    imageAlt: "",
    details: { style: "", color: "", occasion: "" }
  });

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

  const openPopup = (data: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    details: { style: string; color: string; occasion: string };
  }) => {
    setPopupData({
      isOpen: true,
      ...data
    });
  };

  const closePopup = () => {
    setPopupData(prev => ({ ...prev, isOpen: false }));
  };

  // Preload and cache critical images on component mount
  useEffect(() => {
    const criticalImages = [
      "/lovable-uploads/wardrobe.svg",
      "/lovable-uploads/wardrobe/dress_black.svg",
      "/lovable-uploads/wardrobe/dress_white.svg",
      "/lovable-uploads/wardrobe/coat_grey.svg",
      "/lovable-uploads/wardrobe/coat_blue.svg"
    ];

    // Preload images in background
    imageCache.preloadImages(criticalImages).then((results) => {
      console.log(`Cached ${results.size} images for Gallery page`);
    }).catch((error) => {
      console.warn('Failed to preload some images:', error);
    });
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
              
              {/* Clickable Coats and Dresses positioned over the wardrobe */}
              <div className="absolute top-[10%] left-1/2 transform -translate-x-1/2 w-[50%] h-[80%]">
                {/* Black Dress - Left Section */}
                <PopupItem
                  label="Black Dress"
                  src="/lovable-uploads/wardrobe/dress_black.svg"
                  alt="Black Dress"
                  position={{ top: "10%", left: "0" }}
                  width="28%"
                  height="50%"
                  description="Elegant black off-the-shoulder gown"
                  onOpenPopup={() => openPopup({
                    title: "Black Dress",
                    description: "Elegant black off-the-shoulder gown with a sweetheart neckline and high slit. Perfect for formal occasions and special events.",
                    imageSrc: "/lovable-uploads/wardrobe/dress_black.svg",
                    imageAlt: "Black Dress",
                    details: {
                      style: "Off-the-shoulder",
                      color: "Black",
                      occasion: "Formal Events"
                    }
                  })}
                  zIndex={20}
                />
                
                {/* White Dress - Left Section */}
                <PopupItem
                  label="White Dress"
                  src="/lovable-uploads/wardrobe/dress_white.svg"
                  alt="White Dress"
                  position={{ top: "13%", left: "11%" }}
                  width="28%"
                  height="50%"
                  description="Beautiful white halter-neck gown"
                  onOpenPopup={() => openPopup({
                    title: "White Dress",
                    description: "Beautiful white halter-neck gown with a subtle textured pattern on the bodice and high slit. Perfect for weddings and elegant celebrations.",
                    imageSrc: "/lovable-uploads/wardrobe/dress_white.svg",
                    imageAlt: "White Dress",
                    details: {
                      style: "Halter-neck",
                      color: "White",
                      occasion: "Weddings & Celebrations"
                    }
                  })}
                  zIndex={20}
                />
                
                {/* Grey Coat - Right Section */}
                <PopupItem
                  label="Grey Coat"
                  src="/lovable-uploads/wardrobe/coat_grey.svg"
                  alt="Grey Coat"
                  position={{ top: "7%", right: "7.5%" }}
                  width="28%"
                  height="50%"
                  description="Professional grey blazer"
                  onOpenPopup={() => openPopup({
                    title: "Grey Coat",
                    description: "Professional grey blazer with three buttons and a dark grey undershirt. Perfect for business meetings and formal office settings.",
                    imageSrc: "/lovable-uploads/wardrobe/coat_grey.svg",
                    imageAlt: "Grey Coat",
                    details: {
                      style: "Blazer",
                      color: "Grey",
                      occasion: "Business & Office"
                    }
                  })}
                  zIndex={20}
                />
                
                {/* Blue Coat - Right Section */}
                <PopupItem
                  label="Blue Coat"
                  src="/lovable-uploads/wardrobe/coat_blue.svg"
                  alt="Blue Coat"
                  position={{ top: "9%", right: "-1%" }}
                  width="25%"
                  height="50%"
                  description="Stylish blue blazer"
                  onOpenPopup={() => openPopup({
                    title: "Blue Coat",
                    description: "Stylish blue blazer with two buttons and a lighter blue undershirt. Perfect for semi-formal events and stylish business casual looks.",
                    imageSrc: "/lovable-uploads/wardrobe/coat_blue.svg",
                    imageAlt: "Blue Coat",
                    details: {
                      style: "Blazer",
                      color: "Blue",
                      occasion: "Semi-formal & Business Casual"
                    }
                  })}
                  zIndex={20}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Popup Component */}
      <Popup
        isOpen={popupData.isOpen}
        onClose={closePopup}
        title={popupData.title}
        description={popupData.description}
        imageSrc={popupData.imageSrc}
        imageAlt={popupData.imageAlt}
        details={popupData.details}
      />
    </div>
  );
};

export default Gallery;
