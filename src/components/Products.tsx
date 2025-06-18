
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Leaf, Shield, Zap } from "lucide-react";

export const Products = () => {
  const products = [
    {
      name: "OMC FC 16",
      title: "OMC Falcon 16",
      seats: "16 comfortable seats",
      description: "A compact, eco-friendly 16-seater bus designed for smaller groups and tight city spaces.",
      features: [
        "16 comfortable seats with modern interior",
        "Eco-conscious design with low emissions",
        "Ideal for private groups, tours, and city transport",
        "Compact size for easy urban navigation",
        "Reliable and energy-efficient performance"
      ],
      image: "/lovable-uploads/fad8b098-0217-4f13-8e3a-99e0af830eb5.png",
      color: "green"
    },
    {
      name: "OMC FC 32",
      title: "OMC Falcon 32",
      seats: "32 ergonomic seats",
      description: "The perfect mid-sized bus for those looking for a balance of comfort, efficiency, and sustainability.",
      features: [
        "32 ergonomic seats for optimal comfort",
        "Energy-efficient and eco-friendly design",
        "Perfect for city and intercity transport",
        "Modern and sleek interior with easy entry and exit",
        "Advanced safety systems for peace of mind"
      ],
      image: "/lovable-uploads/96f3257c-0cc3-4605-a690-a6f38e77588b.png",
      color: "blue"
    },
    {
      name: "OMC FC 54",
      title: "OMC Falcon 54",
      seats: "54 comfortable seats",
      description: "A powerful and sustainable 54-seater bus designed for large groups and long-distance travel.",
      features: [
        "54 comfortable seats with ample legroom",
        "Eco-friendly and energy-efficient design",
        "Designed for long-distance and group travel",
        "Advanced safety features",
        "Spacious interior with easy access"
      ],
      image: "/lovable-uploads/7db9d6e0-b08c-4ff0-93c4-983020eaafb4.png",
      color: "orange"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "green":
        return "bg-green-100 text-green-600";
      case "blue":
        return "bg-blue-100 text-blue-600";
      case "orange":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Product Fleet
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of eco-friendly vehicles designed to meet the dynamic needs 
            of modern commuters across Nigeria and Africa.
          </p>
        </div>

        <div className="space-y-12">
          {products.map((product, index) => (
            <Card key={product.name} className="overflow-hidden">
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={`aspect-video ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="space-y-6">
                    <div>
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getColorClasses(product.color)} mb-3`}>
                        <Users className="h-4 w-4 mr-2" />
                        {product.seats}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{product.title}</h3>
                      <p className="text-gray-600">{product.description}</p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900 flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-green-600" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {product.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <Button variant="outline">
                        Learn More
                      </Button>
                      <Button className="bg-green-600 hover:bg-green-700">
                        Request Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 border">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Prototypes</h3>
            <p className="text-gray-600 mb-6">
              Explore our innovative prototypes that showcase the future of Nigerian automotive engineering.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">The Oluseun Project</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">OMC Charlie</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">OMC Envy</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">EQ 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
