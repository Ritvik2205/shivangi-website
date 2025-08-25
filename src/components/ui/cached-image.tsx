import React, { useState, useEffect } from "react";
import { imageCache } from "@/utils/imageCache";

interface CachedImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onError?: () => void;
  placeholder?: React.ReactNode;
}

const CachedImage: React.FC<CachedImageProps> = ({
  src,
  alt,
  className = "",
  fallbackSrc,
  onLoad,
  onError,
  placeholder
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isCached, setIsCached] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        // Check if image is already cached
        if (imageCache.isCached(src)) {
          const cachedSrc = imageCache.getCachedImage(src);
          if (cachedSrc && isMounted) {
            setImageSrc(cachedSrc);
            setIsCached(true);
            setIsLoading(false);
            onLoad?.();
            return;
          }
        }

        // Load and cache the image
        const dataUrl = await imageCache.preloadImage(src);
        if (isMounted) {
          setImageSrc(dataUrl);
          setIsCached(false);
          setIsLoading(false);
          onLoad?.();
        }
      } catch (error) {
        console.warn(`Failed to load cached image: ${src}`, error);
        if (isMounted) {
          setHasError(true);
          setIsLoading(false);
          onError?.();
        }
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [src, onLoad, onError]);

  if (isLoading && placeholder) {
    return <>{placeholder}</>;
  }

  if (hasError && fallbackSrc) {
    return (
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        onLoad={onLoad}
        onError={onError}
      />
    );
  }

  if (hasError) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={`${className} ${isCached ? 'cached-image' : ''}`}
      onLoad={onLoad}
      onError={onError}
      style={{ 
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.3s ease-in-out'
      }}
    />
  );
};

export default CachedImage;
