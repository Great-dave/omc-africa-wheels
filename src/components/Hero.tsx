
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Shield, Leaf } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Outstanding automobiles like the{" "}
                <span className="text-green-600">people who own them</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                OMC Automobiles is a Nigerian automotive startup driving innovation in Africa's mobility space. 
                We design, engineer, and assemble eco-friendly vehicles built for the Nigerian and African terrain.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Explore Our Fleet <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Eco-Friendly</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Innovative</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <p className="text-sm font-medium text-gray-900">Reliable</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-green-200 to-blue-200 rounded-2xl flex items-center justify-center">
              <img 
                src="/lovable-uploads/8e92e7d7-04b5-48c3-9c80-e0fb89518c36.png" 
                alt="OMC Bus Manufacturing Facility" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
