
import React from "react";
import { Link } from "react-router-dom";
import { Book, Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Book className="h-8 w-8 text-edtech-blue" />
              <span className="text-2xl font-display font-bold gradient-text">EduMate</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Transforming education with AI-powered personalized learning paths and community-driven insights.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-edtech-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-edtech-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-edtech-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-edtech-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-display font-semibold text-lg mb-4">Learning</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  Progress Tracking
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  Expert Insights
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-display font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  Research
                </Link>
              </li>
              <li>
                <Link to="/teaching" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  Teaching
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-600 hover:text-edtech-blue transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-display font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail size={20} className="text-edtech-blue flex-shrink-0 mt-1" />
                <span className="text-gray-600">support@EduMate.in</span>
              </li>
              <li>
                <a 
                  href="#" 
                  className="inline-block px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200 transition-colors"
                >
                  Contact Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} EduMate. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-edtech-blue text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 hover:text-edtech-blue text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-edtech-blue text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
