import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageFolder: string; // Folder identifier (e.g., "wardrobe", "extracurricular_shelf", "blog")
  imageAlt: string;
}

// Predefined image mappings for different folders
const IMAGE_FOLDERS: Record<string, string[]> = {
  wardrobe: [
    "/lovable-uploads/wardrobe/dress_black.svg",
    "/lovable-uploads/wardrobe/dress_white.svg",
    "/lovable-uploads/wardrobe/coat_grey.svg",
    "/lovable-uploads/wardrobe/coat_blue.svg"
  ],
  extracurricular_shelf: [
    "/lovable-uploads/extracurricular_shelf/writing.svg",
    "/lovable-uploads/extracurricular_shelf/trophy.svg",
    "/lovable-uploads/extracurricular_shelf/travel.svg",
    "/lovable-uploads/extracurricular_shelf/hiking.svg",
    "/lovable-uploads/extracurricular_shelf/debate.svg",
    "/lovable-uploads/extracurricular_shelf/crafts.svg",
    "/lovable-uploads/extracurricular_shelf/cooking.svg",
    "/lovable-uploads/extracurricular_shelf/company.svg",
    "/lovable-uploads/extracurricular_shelf/chess.svg",
    "/lovable-uploads/extracurricular_shelf/basketball.svg"
  ],
  blog: [
    "/lovable-uploads/blog-page.svg",
    "/lovable-uploads/blog-icon.svg"
  ],
  dummy: [
    "/lovable-uploads/placeholder.svg",
    "/lovable-uploads/room_bg.svg",
    "/lovable-uploads/clock.svg",
    "/lovable-uploads/rug.svg",
    "/lovable-uploads/chair.svg",
    "/lovable-uploads/coat_hanger.svg"
  ]
};

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageFolder,
  imageAlt
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState<string[]>([]);

  // Load images from the folder
  useEffect(() => {
    if (isOpen && imageFolder) {
      const folderImages = IMAGE_FOLDERS[imageFolder] || [];
      setImages(folderImages);
      setCurrentImageIndex(0); // Reset to first image when popup opens
    }
  }, [isOpen, imageFolder]);

  // Close popup on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      // Prevent body scroll when popup is open
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup Content */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 hover:bg-gray-100"
        >
          <X className="h-5 w-5" />
        </Button>

        {/* Content */}
        <div className="p-8">
          {/* Image Carousel */}
          {images.length > 0 && (
            <div className="relative mb-6">
              <div className="flex justify-center items-center">
                <img 
                  src={images[currentImageIndex]} 
                  alt={`${imageAlt} ${currentImageIndex + 1}`}
                  className="w-full h-64 object-contain rounded-lg"
                />
              </div>
              
              {/* Carousel Navigation */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                  
                  {/* Image Indicators */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex 
                            ? 'bg-blue-600' 
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            {title}
          </h2>

          {/* Description Text Block */}
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
