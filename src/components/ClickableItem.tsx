import React from "react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useToast } from "@/components/ui/use-toast";

type Position = { top: string; left: string };

interface ClickableItemProps {
  label: string;
  src: string;
  alt: string;
  position: Position; // percentage-based positioning within relative container
  width?: string; // e.g., "18%"
  description?: string;
}

const ClickableItem: React.FC<ClickableItemProps> = ({ label, src, alt, position, width = "18%", description }) => {
  const { toast } = useToast();

  return (
    <div
      className="absolute"
      style={{ top: position.top, left: position.left, transform: "translate(-50%, -50%)", width }}
    >
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            type="button"
            aria-label={label}
            onClick={() => toast({ title: label, description: description ?? "" })}
            className="group relative block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
          >
            <img
              src={src}
              alt={alt}
              loading="lazy"
              className="w-full h-auto select-none pointer-events-none drop-shadow-md group-hover:scale-[1.02] transition-transform duration-200"
            />
            <span className="sr-only">{label}</span>
          </button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <div className="space-y-1">
            <p className="text-sm font-medium">{label}</p>
            {description && (
              <p className="text-xs text-muted-foreground max-w-[200px]">{description}</p>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default ClickableItem;
