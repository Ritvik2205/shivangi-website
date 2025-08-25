import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { imageCache } from "@/utils/imageCache";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  details: {
    style: string;
    color: string;
    occasion: string;
  };
}

const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  title,
  description,
  imageSrc,
  imageAlt,
  details
}) => {
  const [cachedImageSrc, setCachedImageSrc] = useState<string>(imageSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [isCached, setIsCached] = useState(false);

  // Load cached image when popup opens
  useEffect(() => {
    if (isOpen && imageSrc) {
      let isMounted = true;

      const loadCachedImage = async () => {
        try {
          setIsLoading(true);

          // Check if image is already cached
          if (imageCache.isCached(imageSrc)) {
            const cachedSrc = imageCache.getCachedImage(imageSrc);
            if (cachedSrc && isMounted) {
              setCachedImageSrc(cachedSrc);
              setIsCached(true);
              setIsLoading(false);
              return;
            }
          }

          // Load and cache the image
          const dataUrl = await imageCache.preloadImage(imageSrc);
          if (isMounted) {
            setCachedImageSrc(dataUrl);
            setIsCached(false);
            setIsLoading(false);
          }
        } catch (error) {
          console.warn(`Failed to load cached image: ${imageSrc}`, error);
          if (isMounted) {
            setIsLoading(false);
          }
        }
      };

      loadCachedImage();

      return () => {
        isMounted = false;
      };
    }
  }, [isOpen, imageSrc]);

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
          {/* Image */}
          <div className="flex justify-center mb-6">
            {isLoading && (
              <div className="w-[60%] h-32 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
            
            <img 
              src={cachedImageSrc} 
              alt={imageAlt}
              className={`w-[60%] h-auto object-contain transition-opacity duration-300 ${
                isCached ? 'cached-image' : ''
              }`}
              style={{ 
                opacity: isLoading ? 0 : 1,
                display: isLoading ? 'none' : 'block'
              }}
            />
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            {title}
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 mb-6 text-center leading-relaxed">
            {description}
          </p>

          {/* Details */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Details</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Style:</span>
                <span className="text-gray-600">{details.style}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Color:</span>
                <span className="text-gray-600">{details.color}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-700">Occasion:</span>
                <span className="text-gray-600">{details.occasion}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
