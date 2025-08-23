import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scissors, Palette, Camera, Star, Users, Sparkles } from "lucide-react";
import PopupItem from "@/components/PopupItem";
import Popup from "@/components/ui/popup";

const Extracurriculars = () => {
  const [popupData, setPopupData] = useState<{
    isOpen: boolean;
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    details: { style: string; color: string; occasion: string };
  }>({
    isOpen: false,
    title: "",
    description: "",
    imageSrc: "",
    imageAlt: "",
    details: { style: "", color: "", occasion: "" }
  });

  const openPopup = (data: {
    title: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    details: { style: string; color: string; occasion: string };
  }) => {
    setPopupData({
      isOpen: true,
      ...data
    });
  };

  const closePopup = () => {
    setPopupData(prev => ({ ...prev, isOpen: false }));
  };

  const services = [
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Personal Styling",
      description: "Complete wardrobe transformation and personal style development tailored to your lifestyle and preferences.",
      features: ["Wardrobe audit", "Personal shopping", "Style consultation", "Outfit coordination"],
      price: "From $150"
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Makeup Artistry",
      description: "Professional makeup services for special occasions, photoshoots, and everyday glamour.",
      features: ["Bridal makeup", "Event makeup", "Photoshoot makeup", "Makeup lessons"],
      price: "From $100"
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: "Photo Styling",
      description: "Complete styling and makeup for professional photoshoots, social media content, and portfolios.",
      features: ["Outfit selection", "Hair and makeup", "Pose guidance", "Location coordination"],
      price: "From $200"
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Special Events",
      description: "Comprehensive beauty and styling services for weddings, parties, and important life moments.",
      features: ["Wedding styling", "Party preparation", "VIP events", "Celebrity styling"],
      price: "From $300"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Group Sessions",
      description: "Styling and makeup services for bridal parties, corporate events, and group celebrations.",
      features: ["Bridal party styling", "Corporate events", "Group consultations", "Team building"],
      price: "From $75/person"
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: "Ongoing Coaching",
      description: "Long-term style development and beauty coaching to help you maintain confidence and style.",
      features: ["Monthly check-ins", "Style updates", "Trend guidance", "Confidence building"],
      price: "From $75/month"
    }
  ];

  return (
    <div className="min-h-screen bg-[#5B4444]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>

          <div className="relative flex justify-center mb-12 z-[10] top-[10%] w-full h-full">
            <div className="w-full h-[90%]">
              <img 
                src="/lovable-uploads/shelf.svg" 
                alt="Extracurriculars Page"
                className="w-full h-[90%]"
              />
              
              {/* Clickable Extracurricular Items positioned over the shelf */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Row 1 - Top Shelf */}
                <PopupItem
                  label="Writing"
                  src="/lovable-uploads/extracurricular_shelf/writing.svg"
                  alt="Writing"
                  position={{ top: "27%", right: "6%", transform: true }}
                  width="12%"
                  height="12%"
                  description="Creative writing and storytelling"
                  onOpenPopup={() => openPopup({
                    title: "Creative Writing",
                    description: "Passionate about storytelling and creative expression through writing. I enjoy crafting narratives, poetry, and exploring different writing styles to communicate ideas effectively.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/writing.svg",
                    imageAlt: "Writing",
                    details: {
                      style: "Creative Expression",
                      color: "Multi-color",
                      occasion: "Personal Development"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Chess"
                  src="/lovable-uploads/extracurricular_shelf/chess.svg"
                  alt="Chess"
                  position={{ top: "10%", left: "63%", transform: true }}
                  width="12%"
                  height="12%"
                  description="Strategic thinking and chess"
                  onOpenPopup={() => openPopup({
                    title: "Chess Strategy",
                    description: "Dedicated chess player who enjoys the strategic depth and mental challenges of the game. Chess has taught me patience, planning, and the importance of thinking several moves ahead.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/chess.svg",
                    imageAlt: "Chess",
                    details: {
                      style: "Strategic Game",
                      color: "Multi-color",
                      occasion: "Mental Exercise"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Basketball"
                  src="/lovable-uploads/extracurricular_shelf/basketball.svg"
                  alt="Basketball"
                  position={{ top: "14%", left: "25.5%", transform: true }}
                  width="12%"
                  height="12%"
                  description="Team sports and basketball"
                  onOpenPopup={() => openPopup({
                    title: "Basketball",
                    description: "Active basketball player who values teamwork, coordination, and physical fitness. The sport has helped me develop leadership skills and the ability to work effectively in team environments.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/basketball.svg",
                    imageAlt: "Basketball",
                    details: {
                      style: "Team Sport",
                      color: "Multi-color",
                      occasion: "Physical Activity"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Cooking"
                  src="/lovable-uploads/extracurricular_shelf/cooking.svg"
                  alt="Cooking"
                  position={{ bottom: "18%", right: "11%", transform: true }}
                  width="12%"
                  height="12%"
                  description="Culinary arts and cooking"
                  onOpenPopup={() => openPopup({
                    title: "Culinary Arts",
                    description: "Passionate home chef who loves experimenting with flavors and techniques. Cooking is both a creative outlet and a way to bring people together through shared meals and experiences.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/cooking.svg",
                    imageAlt: "Cooking",
                    details: {
                      style: "Culinary Art",
                      color: "Multi-color",
                      occasion: "Creative Expression"
                    }
                  })}
                  zIndex={20}
                />
                
                {/* Row 2 - Middle Shelf */}
                <PopupItem
                  label="Debate"
                  src="/lovable-uploads/extracurricular_shelf/debate.svg"
                  alt="Debate"
                  position={{ top: "29%", left: "17.5%", transform: true }}
                  width="12%"
                  height="12%"
                  description="Public speaking and debate"
                  onOpenPopup={() => openPopup({
                    title: "Public Speaking & Debate",
                    description: "Experienced debater and public speaker who enjoys engaging in intellectual discourse and presenting compelling arguments. This activity has sharpened my critical thinking and communication skills.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/debate.svg",
                    imageAlt: "Debate",
                    details: {
                      style: "Intellectual Discourse",
                      color: "Multi-color",
                      occasion: "Academic Development"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Crafts"
                  src="/lovable-uploads/extracurricular_shelf/crafts.svg"
                  alt="Crafts"
                  position={{ top: "45%", right: "6.5%", transform: true }}
                  width="13%"
                  height="13%"
                  description="Arts and crafts"
                  onOpenPopup={() => openPopup({
                    title: "Arts & Crafts",
                    description: "Creative artist who enjoys working with various materials and techniques. From painting to DIY projects, crafting allows me to express creativity and create unique, handmade pieces.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/crafts.svg",
                    imageAlt: "Crafts",
                    details: {
                      style: "Handmade Art",
                      color: "Multi-color",
                      occasion: "Creative Hobby"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Travel"
                  src="/lovable-uploads/extracurricular_shelf/travel.svg"
                  alt="Travel"
                  position={{ top: "25%", left: "46.5%", transform: true }}
                  width="11%"
                  height="11%"
                  description="Travel and exploration"
                  onOpenPopup={() => openPopup({
                    title: "Travel & Exploration",
                    description: "Avid traveler who loves exploring new cultures, landscapes, and experiences. Travel has broadened my perspective and taught me adaptability, cultural sensitivity, and appreciation for diversity.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/travel.svg",
                    imageAlt: "Travel",
                    details: {
                      style: "Cultural Exploration",
                      color: "Multi-color",
                      occasion: "Personal Growth"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Hiking"
                  src="/lovable-uploads/extracurricular_shelf/hiking.svg"
                  alt="Hiking"
                  position={{ top: "47%", left: "57.5%", transform: true }}
                  width="12%"
                  height="12%"
                  description="Outdoor adventures and hiking"
                  onOpenPopup={() => openPopup({
                    title: "Hiking & Outdoor Adventures",
                    description: "Nature enthusiast who finds peace and challenge in outdoor activities. Hiking has taught me perseverance, appreciation for nature, and the importance of physical and mental resilience.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/hiking.svg",
                    imageAlt: "Hiking",
                    details: {
                      style: "Outdoor Activity",
                      color: "Multi-color",
                      occasion: "Nature Exploration"
                    }
                  })}
                  zIndex={20}
                />
                
                {/* Row 3 - Bottom Shelf */}
                <PopupItem
                  label="Company"
                  src="/lovable-uploads/extracurricular_shelf/company.svg"
                  alt="Company"
                  position={{ bottom: "32%", left: "19.5%", transform: true }}
                  width="13%"
                  height="13%"
                  description="Business and entrepreneurship"
                  onOpenPopup={() => openPopup({
                    title: "Entrepreneurship & Business",
                    description: "Entrepreneurial spirit with experience in business development and leadership. I enjoy building connections, solving problems, and creating value through innovative business solutions.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/company.svg",
                    imageAlt: "Company",
                    details: {
                      style: "Business Development",
                      color: "Multi-color",
                      occasion: "Professional Growth"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Trophy"
                  src="/lovable-uploads/extracurricular_shelf/trophy.svg"
                  alt="Trophy"
                  position={{ top: "67%", left: "38%", transform: true }}
                  width="11%"
                  height="11%"
                  description="Achievements and awards"
                  onOpenPopup={() => openPopup({
                    title: "Achievements & Awards",
                    description: "Proud recipient of various awards and recognitions for academic excellence, leadership, and community contributions. These achievements reflect my commitment to continuous improvement and making a positive impact.",
                    imageSrc: "/lovable-uploads/extracurricular_shelf/trophy.svg",
                    imageAlt: "Trophy",
                    details: {
                      style: "Recognition",
                      color: "Multi-color",
                      occasion: "Achievement Celebration"
                    }
                  })}
                  zIndex={20}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Popup Component */}
      <Popup
        isOpen={popupData.isOpen}
        onClose={closePopup}
        title={popupData.title}
        description={popupData.description}
        imageSrc={popupData.imageSrc}
        imageAlt={popupData.imageAlt}
        details={popupData.details}
      />
    </div>
  );
};

export default Extracurriculars;
