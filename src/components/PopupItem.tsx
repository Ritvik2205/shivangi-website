import React, { useState, useEffect } from "react";
import { imageCache } from "@/utils/imageCache";

type Position = { top?: string; left?: string; right?: string; bottom?: string; transform?: boolean };

interface PopupItemProps {
  label: string;
  src: string;
  alt: string;
  position: Position; // percentage-based positioning within relative container
  width?: string; // e.g., "18%"
  height?: string; // e.g., "18%"
  description?: string;
  onOpenPopup: () => void; // callback to open popup
  disableDropShadow?: boolean; // disable drop shadow on the image
  zIndex?: number; // custom z-index for layering
  disabled?: boolean; // make the component non-clickable
}

const PopupItem: React.FC<PopupItemProps> = ({ 
  label, 
  src, 
  alt, 
  position, 
  width = "18%", 
  height = "18%", 
  description, 
  onOpenPopup, 
  disableDropShadow = false, 
  zIndex, 
  disabled = false 
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadCachedImage = async () => {
      try {
        // Check if image is already cached
        if (imageCache.isCached(src)) {
          const cachedSrc = imageCache.getCachedImage(src);
          if (cachedSrc && isMounted) {
            setImageSrc(cachedSrc);
            setIsCached(true);
            setIsLoading(false);
            return;
          }
        }

        // Load and cache the image
        const dataUrl = await imageCache.preloadImage(src);
        if (isMounted) {
          setImageSrc(dataUrl);
          setIsCached(false);
          setIsLoading(false);
        }
      } catch (error) {
        console.warn(`Failed to load cached image: ${src}`, error);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadCachedImage();

    return () => {
      isMounted = false;
    };
  }, [src]);

  const handleClick = () => {
    if (!disabled) {
      onOpenPopup();
    }
  };

  return (
    <div
      className="absolute"
      style={{ 
        top: position.top, 
        left: position.left, 
        right: position.right, 
        bottom: position.bottom, 
        width, 
        height, 
        transform: position.transform ? "translate(-50%, -50%)" : "none",
        zIndex: zIndex
      }}
    >
      <button
        type="button"
        aria-label={label}
        onClick={handleClick}
        disabled={disabled}
        className={`w-full h-full group relative block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-transform duration-200 flex items-center justify-center ${
          disabled 
            ? 'cursor-default' 
            : 'hover:scale-[1.02]'
        }`}
        title={disabled ? undefined : description}
      >
        {isLoading && (
          <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          className={`w-full h-auto select-none pointer-events-none transition-opacity duration-300 ${
            !disableDropShadow ? 'drop-shadow-md' : ''
          } ${isCached ? 'cached-image' : ''}`}
          style={{ 
            opacity: isLoading ? 0 : 1,
            display: isLoading ? 'none' : 'block'
          }}
        />
        <span className="sr-only">{label}</span>
      </button>
    </div>
  );
};

export default PopupItem;
