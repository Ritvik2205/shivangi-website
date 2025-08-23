import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
            <img 
              src={imageSrc} 
              alt={imageAlt}
              className="w-[60%] h-auto object-contain"
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
