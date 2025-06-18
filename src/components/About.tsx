
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Award, Target } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About OMC Automobiles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since launching our first prototype in 2019, we have expanded our portfolio with multiple models 
            and a vision to make Nigerian-made cars globally celebrated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Design Engineering</h3>
              <p className="text-gray-600 text-sm">
                Innovative automobile design engineering for African terrain
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Sustainable Mobility</h3>
              <p className="text-gray-600 text-sm">
                Converting petrol engines to CNG for eco-friendly transportation
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Talent</h3>
              <p className="text-gray-600 text-sm">
                Building an ecosystem for local talent to thrive and lead
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardContent className="p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600 text-sm">
                Driving innovation through sustainable transportation solutions
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Driving Nigeria into the Future
              </h3>
              <p className="text-gray-600 mb-6">
                OMC Automobiles is not just building cars. We're driving Nigeria into the future; 
                one locally made vehicle at a time. Our three flagship models are designed to meet 
                the dynamic needs of modern commuters, delivering a seamless blend of comfort, 
                reliability, and eco-friendly technology.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  OMC Mini-Bus (16 seaters)
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  OMC City-Bus (32 seaters)
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  OMC Inter-City Bus (54 seaters)
                </div>
              </div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-green-200 to-blue-200 rounded-xl">
              <img 
                src="https://images.unsplash.com/photo-1570125909517-53cb21c89ff2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80" 
                alt="OMC Manufacturing" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
