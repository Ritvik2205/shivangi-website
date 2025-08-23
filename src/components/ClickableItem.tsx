import React from "react";
import { useNavigate } from "react-router-dom";

type Position = { top?: string; left?: string; right?: string; bottom?: string; transform?: boolean };

interface ClickableItemProps {
  label: string;
  src: string;
  alt: string;
  position: Position; // percentage-based positioning within relative container
  width?: string; // e.g., "18%"
  height?: string; // e.g., "18%"
  description?: string;
  route: string; // route to navigate to when clicked
  disableDropShadow?: boolean; // disable drop shadow on the image
  zIndex?: number; // custom z-index for layering
  disabled?: boolean; // make the component non-clickable
}

const ClickableItem: React.FC<ClickableItemProps> = ({ label, src, alt, position, width = "18%", height = "18%", description, route, disableDropShadow = false, zIndex, disabled = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate(route);
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
        className={`w-full h-full group relative block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-transform duration-200 ${
          disabled 
            ? 'cursor-default' 
            : 'hover:scale-[1.02]'
        }`}
        title={disabled ? undefined : description}
      >
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={`w-full h-auto select-none pointer-events-none ${!disableDropShadow ? 'drop-shadow-md' : ''}`}
        />
        <span className="sr-only">{label}</span>
      </button>
    </div>
  );
};

export default ClickableItem;
