import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Zap } from "lucide-react";

const Clock = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Room
            </Button>
          </Link>
          
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Time is Money</h1>
              <p className="text-xl text-muted-foreground">
                Efficient styling services that respect your schedule
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="/lovable-uploads/clock.svg" 
                  alt="Clock"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Quick & Efficient Services</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    I understand that your time is valuable. That's why I offer 
                    streamlined services that deliver exceptional results without 
                    wasting your precious time.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Zap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Express Sessions</h3>
                      <p className="text-sm text-muted-foreground">Quick transformations in under 2 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Flexible Scheduling</h3>
                      <p className="text-sm text-muted-foreground">Appointments that work with your calendar</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Punctual Service</h3>
                      <p className="text-sm text-muted-foreground">Always on time, never overbooked</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/services">
                    <Button>View Services</Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline">Book Appointment</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
