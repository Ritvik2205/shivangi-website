import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NotificationProps {
  elementToClick: string;
  contentToView: string;
  onDismiss?: () => void;
}

const Notification: React.FC<NotificationProps> = ({ 
  elementToClick, 
  contentToView, 
  onDismiss 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 8000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div className="fixed w-[20vw] h-[15vh] top-4 right-4 z-50 animate-in slide-in-from-right duration-300">
      <div className="bg-white/95 backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg p-4 w-full h-full">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <p className="text-lg text-gray-700 leading-relaxed text-center mt-5">
              💡 Try clicking the <span className="font-semibold text-purple-600">{elementToClick}</span> to view {contentToView}
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            // onClick={handleDismiss}
            className="flex-shrink-0 h-6 w-6 p-0 hover:bg-gray-100"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Notification;
