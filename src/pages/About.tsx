import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PopupItem from "@/components/PopupItem";
import Popup from "@/components/ui/popup";

const About = () => {
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

  return (
    <div className="min-h-screen bg-[#F2C6B8]">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>

          <div 
            className="absolute bottom-0 left-0 w-full" 
            style={{ 
              backgroundColor: "#A46352",
              height: "32%"
            }} 
          />
          
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">About Me</h1>
              <p className="text-xl text-muted-foreground">
                Learn more about my story and approach
              </p>
            </div>
            
            <div className="relative flex justify-center mb-12 z-[10]">
              <img 
                src="/lovable-uploads/blog-page.svg" 
                alt="Blog Page"
                className="w-full h-auto"
                style={{
                  border: "5px solid white",
                  borderRadius: "28px"
                }}
              />
              
              {/* Clickable Blog Icons positioned over the blog page in a 3x2 grid */}
              <div className="absolute top-0 left-0 w-full h-full">
                {/* Row 1 */}
                <PopupItem
                  label="Blog Post 1"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 1"
                  position={{ top: "30%", left: "20%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Design Trends 2024",
                    description: "Exploring the latest design trends and how they're shaping the future of digital experiences. From minimalist aesthetics to bold color palettes, discover what's driving innovation in design.",
                    imageSrc: "/lovable-uploads/blog-icon.svg",
                    imageAlt: "Blog Icon 1",
                    details: {
                      style: "Design Article",
                      color: "Multi-color",
                      occasion: "Industry Insights"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 2"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 2"
                  position={{ top: "30%", left: "50%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Development Best Practices",
                    description: "A comprehensive guide to modern development practices, covering everything from code organization to performance optimization. Learn the techniques that make projects scalable and maintainable.",
                    imageSrc: "/lovable-uploads/blog-icon.svg",
                    imageAlt: "Blog Icon 2",
                    details: {
                      style: "Technical Guide",
                      color: "Multi-color",
                      occasion: "Learning & Development"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 3"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 3"
                  position={{ top: "30%", left: "80%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Creative Process Deep Dive",
                    description: "Behind the scenes of my creative process - from initial concept to final execution. Discover how I approach problem-solving and bring ideas to life through design and development.",
                    imageSrc: "/lovable-uploads/blog-icon.svg",
                    imageAlt: "Blog Icon 3",
                    details: {
                      style: "Process Article",
                      color: "Multi-color",
                      occasion: "Creative Insights"
                    }
                  })}
                  zIndex={20}
                />
                
                {/* Row 2 */}
                <PopupItem
                  label="Blog Post 4"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 4"
                  position={{ top: "70%", left: "20%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "User Experience Fundamentals",
                    description: "Understanding the core principles of user experience design and how they impact user engagement. Learn how to create intuitive, accessible, and delightful digital experiences.",
                    imageSrc: "/lovable-uploads/blog-icon.svg",
                    imageAlt: "Blog Icon 4",
                    details: {
                      style: "UX Article",
                      color: "Multi-color",
                      occasion: "User Experience"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 5"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 5"
                  position={{ top: "70%", left: "50%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Project Showcase",
                    description: "A detailed look at some of my favorite projects, including the challenges faced, solutions implemented, and lessons learned. See how theory translates into practice.",
                    imageSrc: "/lovable-uploads/blog-icon.svg",
                    imageAlt: "Blog Icon 5",
                    details: {
                      style: "Case Study",
                      color: "Multi-color",
                      occasion: "Project Portfolio"
                    }
                  })}
                  zIndex={20}
                />
                
                <PopupItem
                  label="Blog Post 6"
                  src="/lovable-uploads/blog-icon.svg"
                  alt="Blog Icon 6"
                  position={{ top: "70%", left: "80%", transform: true }}
                  width="20%"
                  height="20%"
                  description="Read my latest blog posts and insights"
                  onOpenPopup={() => openPopup({
                    title: "Future of Web Development",
                    description: "Exploring emerging technologies and trends that are shaping the future of web development. From AI integration to new frameworks, discover what's next in the digital landscape.",
                    imageSrc: "/lovable-uploads/blog-icon.svg",
                    imageAlt: "Blog Icon 6",
                    details: {
                      style: "Future Trends",
                      color: "Multi-color",
                      occasion: "Technology Insights"
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

export default About;
