import React, { useState, useEffect } from "react";
import ClickableItem from "@/components/ClickableItem";

const MakeoverRoom: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const toggleBackground = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Update viewport height on resize
  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const backgroundImage = isDarkMode 
    ? "url('/lovable-uploads/sv_bg_dark.svg')" 
    : "url('/lovable-uploads/room_bg.svg')";

  // Calculate responsive sizes based on viewport height
  const getResponsiveSize = (baseSize: string, isHeight: boolean = false) => {
    const baseValue = parseFloat(baseSize);
    const heightRatio = viewportHeight / 900; // 900px as baseline height
    
    if (isHeight) {
      // For height, scale more aggressively
      const adjustedValue = baseValue * Math.min(heightRatio, 1.5);
      return `${adjustedValue}%`;
    } else {
      // For width, scale more conservatively
      const adjustedValue = baseValue * Math.min(heightRatio, 1.3);
      return `${adjustedValue}%`;
    }
  };

  return (
    <div
      className="relative w-full min-h-[100vh] mx-auto overflow-hidden"
      style={{
        backgroundImage: backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: `${viewportHeight}px`,
      }}
      aria-label="Interactive makeover room backdrop"
    >
      {/* Vanity & mirror (About) */}
      <ClickableItem
        label="About Me"
        description="Learn more about my story and approach."
        src="/lovable-uploads/vanity_div.svg"
        alt="Vanity with ornate mirror"
        position={{ top: "20%", left: "0" }}
        width={getResponsiveSize("23%")}
        height={getResponsiveSize("23%", true)}
        route="/about"
      />

      <ClickableItem
        label="Wardrobe Essentials"
        description="Discover the foundation pieces for your perfect wardrobe"
        src="/lovable-uploads/coat_hanger.svg"
        alt="Coat hanger"
        position={{ top: "23%", left: "25%" }}
        width={getResponsiveSize("8%")}
        height={getResponsiveSize("8%", true)}
        route="/coat-hanger"
      />

      {/* Center dress (Gallery) */}
      <ClickableItem
        label="Gallery"
        description="Signature looks and transformations."
        src="/lovable-uploads/center_mannequin.svg"
        alt="Pink layered gown on dress form"
        position={{ top: "33%", left: "50%", transform: true }}
        width={getResponsiveSize("27%")}
        height={getResponsiveSize("27%", true)}
        route="/gallery"
      />

      {/* Clock - Background Toggle */}
      <div
        className="absolute"
        style={{ 
          top: "6%", 
          left: "50%", 
          width: getResponsiveSize("10%"), 
          height: getResponsiveSize("10%", true), 
          transform: "translate(-50%, -50%)" 
        }}
      >
        <button
          type="button"
          aria-label="Toggle background theme"
          onClick={toggleBackground}
          className="w-full h-full group relative block rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 hover:scale-[1.02] transition-transform duration-200 flex items-center justify-center"
          title={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          <img
            src="/lovable-uploads/clock.svg"
            alt="Clock"
            loading="lazy"
            className="w-full h-full object-contain select-none pointer-events-none drop-shadow-md"
          />
          <span className="sr-only">Toggle background theme</span>
        </button>
      </div>

      <ClickableItem
        label="Bouquet"
        description="bouquet"
        src="/lovable-uploads/bouquet.svg"
        alt="Bouquet"
        position={{ top: "15%", left: "50%", transform: true }}
        width={getResponsiveSize("6%")}
        height={getResponsiveSize("6%", true)}
        route="/"
      />

      {/* Mannequins (Projects) */}
      <ClickableItem
        label="Projects"
        description="Recent collaborations and highlights."
        src="/lovable-uploads/side_mannequins.svg"
        alt="Two mannequins with gowns"
        position={{ top: "22%", right: "0" }}
        width={getResponsiveSize("25%")}
        height={getResponsiveSize("25%", true)}
        route="/projects"
      />

      {/* Accessory shelf (Services) */}
      <ClickableItem
        label="Services"
        description="Styling, makeup and consultations."
        src="/lovable-uploads/cabinet.svg"
        alt="Shelf with jewelry, handbag and heels"
        position={{ top: "22%", right: "23%" }}
        width={getResponsiveSize("9%")}
        height={getResponsiveSize("9%", true)}
        route="/services"
      />

      {/* Sofa + gifts (Contact / Quote) */}
      <ClickableItem
        label="Contact"
        description="Get in touch for bookings and quotes."
        src="/lovable-uploads/sofa.svg"
        alt="Sofa with table, flowers, gifts and heels"
        position={{ top: "45%", right: "0" }}
        width={getResponsiveSize("28%")}
        height={getResponsiveSize("28%", true)}
        route="/contact"
      />

      {/* Sofa corner (Testimonials) */}
      <ClickableItem
        label="Testimonials"
        description="Kind words from clients."
        src="/lovable-uploads/chair.svg"
        alt="Sofa corner with cushion"
        position={{ top: "62%", left: "0" }}
        width={getResponsiveSize("13%")}
        height={getResponsiveSize("13%", true)}
        route="/testimonials"
      />

      {/* Rug (Rug Pull) */}
      <ClickableItem
        label="Reveal Treasures"
        description="Discover hidden gems and exclusive offers"
        src="/lovable-uploads/rug.svg"
        alt="Rug with hidden treasures"
        position={{ top: "90%", left: "50%", transform: true }}
        width={getResponsiveSize("30%")}
        height={getResponsiveSize("30%", true)}
        route="/rug-pull"
      />
    </div>
  );
};

export default MakeoverRoom;
