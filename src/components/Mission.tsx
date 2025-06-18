
import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Globe, Star } from "lucide-react";

export const Mission = () => {
  return (
    <section id="mission" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driving Nigeria and Africa towards sustainable mobility and automotive excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 border-green-200 bg-green-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-green-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Eye className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To become Africa's leading automotive brand, championing sustainable mobility 
                and advancing industrialization through innovation in design, manufacturing, 
                and product development.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200 bg-blue-50">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To inspire a new identity for every Nigerian through locally designed and 
                engineered vehicles. We envision a future where Made-in-Nigeria cars are 
                globally recognised and Nigeria rises as Africa's automotive powerhouse.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Why Choose OMC Automobiles?</h3>
            <p className="text-green-100 max-w-2xl mx-auto">
              We're not just building vehicles; we're building the future of African mobility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Global Standards</h4>
              <p className="text-green-100 text-sm">
                Built to international quality standards while addressing local needs
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Local Innovation</h4>
              <p className="text-green-100 text-sm">
                Designed and engineered by Nigerian talent for African terrain
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Sustainable Future</h4>
              <p className="text-green-100 text-sm">
                Eco-friendly solutions driving towards a sustainable transportation ecosystem
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
