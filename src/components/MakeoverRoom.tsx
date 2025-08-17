import React from "react";
import ClickableItem from "@/components/ClickableItem";

const MakeoverRoom: React.FC = () => {
  return (
    <div
      className="relative w-full min-h-[100vh] mx-auto overflow-hidden"
      style={{
        backgroundImage: "url('/lovable-uploads/386e83b9-e99a-40f3-b739-5f8de5b0dec3.png')",
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
        src="/lovable-uploads/9f1b0fa2-f699-4bad-9cd1-faba16bc7231.png"
        alt="Vanity with ornate mirror"
        position={{ top: "58%", left: "18%" }}
        width="24%"
      />

      {/* Center dress (Gallery) */}
      <ClickableItem
        label="Gallery"
        description="Signature looks and transformations."
        src="/lovable-uploads/mannequin_div.svg"
        alt="Pink layered gown on dress form"
        position={{ top: "56%", left: "48%" }}
        width="50%"
      />

      {/* Mannequins (Projects) */}
      <ClickableItem
        label="Projects"
        description="Recent collaborations and highlights."
        src="/lovable-uploads/1e989d95-3a75-44ba-8870-bd6f60efe3b9.png"
        alt="Two mannequins with gowns"
        position={{ top: "60%", left: "62%" }}
        width="18%"
      />

      {/* Accessory shelf (Services) */}
      <ClickableItem
        label="Services"
        description="Styling, makeup and consultations."
        src="/lovable-uploads/da074ed4-4c66-4d8f-94ab-9fb9a8b5e60a.png"
        alt="Shelf with jewelry, handbag and heels"
        position={{ top: "36%", left: "82%" }}
        width="10%"
      />

      {/* Sofa + gifts (Contact / Quote) */}
      <ClickableItem
        label="Contact"
        description="Get in touch for bookings and quotes."
        src="/lovable-uploads/ded061bb-efb7-4dd0-b170-9ae276947301.png"
        alt="Sofa with table, flowers, gifts and heels"
        position={{ top: "76%", left: "74%" }}
        width="26%"
      />

      {/* Sofa corner (Testimonials) */}
      <ClickableItem
        label="Testimonials"
        description="Kind words from clients."
        src="/lovable-uploads/6abae027-e442-429f-a277-24fb1fae0b5c.png"
        alt="Sofa corner with cushion"
        position={{ top: "82%", left: "10%" }}
        width="12%"
      />
    </div>
  );
};

export default MakeoverRoom;
