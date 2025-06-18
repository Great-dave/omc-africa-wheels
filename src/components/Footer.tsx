
import { Car, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-green-500" />
              <span className="text-xl font-bold">OMC Automobiles</span>
            </div>
            <p className="text-gray-400 text-sm">
              Driving Nigeria into the future with outstanding automobiles 
              built for the people who own them.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-green-500 cursor-pointer" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-green-500">OMC Falcon 16</a></li>
              <li><a href="#" className="hover:text-green-500">OMC Falcon 32</a></li>
              <li><a href="#" className="hover:text-green-500">OMC Falcon 54</a></li>
              <li><a href="#" className="hover:text-green-500">Prototypes</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-green-500">About Us</a></li>
              <li><a href="#mission" className="hover:text-green-500">Mission & Vision</a></li>
              <li><a href="#" className="hover:text-green-500">Careers</a></li>
              <li><a href="#" className="hover:text-green-500">News</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>info@omcautomobiles.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+234 (0) 800 OMC AUTO</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Lagos, Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} OMC Automobiles. All rights reserved. Made in Nigeria with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};
