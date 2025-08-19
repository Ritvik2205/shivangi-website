import React from "react";
import ClickableItem from "@/components/ClickableItem";

const MakeoverRoom: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-[100vh] mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/room_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      aria-label="Interactive makeover room backdrop"
    >
      {/* Vanity & mirror (About) */}
      <ClickableItem
        label="About Me"
        description="Learn more about my story and approach."
        src="/lovable-uploads/vanity_div.svg"
        alt="Vanity with ornate mirror"
        position={{ top: "20%", left: "2%" }}
        width="25%"
        height="25%"
        route="/about"
      />

      <ClickableItem
        label="Wardrobe Essentials"
        description="Discover the foundation pieces for your perfect wardrobe"
        src="/lovable-uploads/coat_hanger.svg"
        alt="Coat hanger"
        position={{ top: "27%", left: "26%" }}
        width="8%"
        height="8%"
        route="/coat-hanger"
      />

      {/* Center dress (Gallery) */}
      <ClickableItem
        label="Gallery"
        description="Signature looks and transformations."
        src="/lovable-uploads/center_mannequin.svg"
        alt="Pink layered gown on dress form"
        position={{ top: "35%", left: "50%", transform: true }}
        width="30%"
        height="30%"
        route="/gallery"
      />

      <ClickableItem
        label="Time is Money"
        description="Efficient styling services that respect your schedule"
        src="/lovable-uploads/clock.svg"
        alt="Clock"
        position={{ top: "5%", left: "50%", transform: true }}
        width="6%"
        height="6%"
        route="/"
      />

      {/* Mannequins (Projects) */}
      <ClickableItem
        label="Projects"
        description="Recent collaborations and highlights."
        src="/lovable-uploads/side_mannequins.svg"
        alt="Two mannequins with gowns"
        position={{ top: "22%", right: "0" }}
        width="28%"
        height="28%"
        route="/projects"
      />

      {/* Accessory shelf (Services) */}
      <ClickableItem
        label="Services"
        description="Styling, makeup and consultations."
        src="/lovable-uploads/cabinet.svg"
        alt="Shelf with jewelry, handbag and heels"
        position={{ top: "22%", right: "23%" }}
        width="10%"
        route="/services"
      />

      {/* Sofa + gifts (Contact / Quote) */}
      <ClickableItem
        label="Contact"
        description="Get in touch for bookings and quotes."
        src="/lovable-uploads/sofa.svg"
        alt="Sofa with table, flowers, gifts and heels"
        position={{ top: "45%", right: "0" }}
        width="32%"
        route="/contact"
      />

      {/* Sofa corner (Testimonials) */}
      <ClickableItem
        label="Testimonials"
        description="Kind words from clients."
        src="/lovable-uploads/chair.svg"
        alt="Sofa corner with cushion"
        position={{ top: "62%", left: "0" }}
        width="15%"
        route="/testimonials"
      />

      <ClickableItem
        label="Reveal Treasures"
        description="Discover hidden gems and exclusive offers"
        src="/lovable-uploads/rug.svg"
        alt="Rug with hidden treasures"
        position={{ top: "90%", left: "50%", transform: true }}
        width="35%"
        route="/rug-pull"
      />
    </div>
  );
};

export default MakeoverRoom;
