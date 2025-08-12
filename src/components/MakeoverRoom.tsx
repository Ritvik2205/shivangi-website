import React from "react";
import Hotspot from "@/components/Hotspot";

const MakeoverRoom: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-elegant">
      <img
        src="/lovable-uploads/386e83b9-e99a-40f3-b739-5f8de5b0dec3.png"
        alt="Makeover room illustration used as interactive navigation for the portfolio"
        loading="eager"
        className="w-full h-auto block"
      />

      {/* Left vanity + mirror */}
      <Hotspot label="About Me" anchor="about" position={{ top: "48%", left: "17%" }} description="Learn more about my story and approach." />
      <Hotspot label="Skills" anchor="skills" position={{ top: "35%", left: "23%" }} description="Techniques, tools and specialties." />

      {/* Center window + dress */}
      <Hotspot label="Gallery" anchor="gallery" position={{ top: "56%", left: "50%" }} description="Signature looks and case studies." />
      <Hotspot label="Testimonials" anchor="testimonials" position={{ top: "78%", left: "50%" }} description="What my clients say." />

      {/* Right shelf + mannequins + sofa */}
      <Hotspot label="Services" anchor="services" position={{ top: "44%", left: "77%" }} description="Styling, makeup and consultations." />
      <Hotspot label="Projects" anchor="projects" position={{ top: "60%", left: "86%" }} description="Recent collaborations." />
      <Hotspot label="Contact" anchor="contact" position={{ top: "72%", left: "74%" }} description="Get in touch for bookings." />
      <Hotspot label="Quote" anchor="contact" position={{ top: "86%", left: "74%" }} description="Request a quote or package." />

      {/* Ceiling and lights */}
      <Hotspot label="Blog" anchor="blog" position={{ top: "10%", left: "50%" }} description="Thoughts and tips." />
      <Hotspot label="Lighting" anchor="services" position={{ top: "22%", left: "35%" }} />
      <Hotspot label="Lighting" anchor="services" position={{ top: "22%", left: "64%" }} />
      <Hotspot label="Chandelier" anchor="gallery" position={{ top: "10%", left: "12%" }} />
      <Hotspot label="Chandelier" anchor="gallery" position={{ top: "10%", left: "88%" }} />
    </div>
  );
};

export default MakeoverRoom;
