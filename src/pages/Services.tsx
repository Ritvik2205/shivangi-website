import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Scissors, Palette, Camera, Star, Users, Sparkles } from "lucide-react";

const Services = () => {
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
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>
          
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Services</h1>
              <p className="text-xl text-muted-foreground">
                Styling, makeup and consultations
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg mr-3">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-primary">{service.price}</span>
                    <Link to="/contact">
                      <Button size="sm">Book Now</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-card border rounded-lg p-8 text-center">
              <h2 className="text-2xl font-semibold mb-4">Custom Packages</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Don't see exactly what you're looking for? I offer custom packages 
                tailored to your specific needs. Whether it's a combination of services 
                or something completely unique, let's create the perfect experience for you.
              </p>
              <Link to="/contact">
                <Button size="lg">Request Custom Quote</Button>
              </Link>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground">
                Ready to transform your style and boost your confidence?
              </p>
              <Link to="/contact">
                <Button className="mt-4">Get Started Today</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
