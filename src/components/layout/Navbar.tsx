
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Book, 
  Users, 
  BarChart, 
  MessageSquare, 
  Settings,
  Menu,
  X
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Simulated authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Temporary login function for demonstration
  const handleLoginToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <nav className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <Book className="h-8 w-8 text-edtech-blue" />
          <span className="text-2xl font-display font-bold gradient-text">EduMate</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-edtech-blue font-medium">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-edtech-blue font-medium">
            About
          </Link>
          <Link to="/blog" className="text-gray-700 hover:text-edtech-blue font-medium">
            Blog
          </Link>
          <Link to="/dashboard" className="text-gray-700 hover:text-edtech-blue font-medium">
            Courses
          </Link>
          <Link to="/community" className="text-gray-700 hover:text-edtech-blue font-medium">
            Community
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" className="border-edtech-blue text-edtech-blue">
                  Dashboard
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                className="text-gray-700"
                onClick={handleLoginToggle}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/auth?mode=login">
                <Button 
                  variant="ghost" 
                  className="text-gray-700"
                  onClick={handleLoginToggle}
                >
                  Sign In
                </Button>
              </Link>
              <Link to="/auth?mode=register">
                <Button className="bg-edtech-blue hover:bg-blue-600 text-white">
                  Get Started
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-edtech-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-edtech-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-edtech-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              to="/dashboard" 
              className="text-gray-700 hover:text-edtech-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/community" 
              className="text-gray-700 hover:text-edtech-blue font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </Link>
            
            <div className="pt-4 border-t">
              {isLoggedIn ? (
                <>
                  <Link 
                    to="/dashboard" 
                    className="block w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button variant="outline" className="w-full border-edtech-blue text-edtech-blue">
                      Dashboard
                    </Button>
                  </Link>
                  <div className="h-2"></div>
                  <Button 
                    variant="ghost" 
                    className="w-full text-gray-700"
                    onClick={() => {
                      handleLoginToggle();
                      setIsMenuOpen(false);
                    }}
                  >
                    Sign Out
                  </Button>
                </>
              ) : (
                <>
                  <Link 
                    to="/auth?mode=login" 
                    className="block w-full"
                    onClick={() => {
                      handleLoginToggle();
                      setIsMenuOpen(false);
                    }}
                  >
                    <Button variant="ghost" className="w-full text-gray-700">
                      Sign In
                    </Button>
                  </Link>
                  <div className="h-2"></div>
                  <Link 
                    to="/auth?mode=register" 
                    className="block w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-edtech-blue hover:bg-blue-600 text-white">
                      Get Started
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
