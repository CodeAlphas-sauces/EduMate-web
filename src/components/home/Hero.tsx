
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BookOpen, Users } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white to-blue-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              <span className="gradient-text">AI-Powered</span> Learning
              <br />
              <span>Tailored For</span> 
              <span className="text-edtech-purple"> You</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Discover personalized learning paths, adaptive assessments, 
              and a supportive community to accelerate your educational journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/auth?mode=register">
                <Button className="bg-edtech-blue hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-xl">
                  Start Learning <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-gray-300 text-gray-700 px-8 py-6 text-lg rounded-xl">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Illustration/Graphics */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              {/* Main circular background */}
              <div className="absolute w-[500px] h-[500px] bg-blue-100 rounded-full -right-20 opacity-40"></div>
              
              {/* Floating elements with animations */}
              <div className="relative z-10">
                {/* Book element */}
                <div className="absolute -left-10 top-20 animate-float">
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <BookOpen className="h-12 w-12 text-edtech-blue" />
                    <p className="font-medium mt-2">Smart Courses</p>
                  </div>
                </div>
                
                {/* Brain/AI element */}
                <div className="absolute right-0 top-0 animate-float" style={{ animationDelay: "1s" }}>
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <Brain className="h-12 w-12 text-edtech-purple" />
                    <p className="font-medium mt-2">AI Learning</p>
                  </div>
                </div>
                
                {/* Community element */}
                <div className="absolute left-20 bottom-10 animate-float" style={{ animationDelay: "2s" }}>
                  <div className="bg-white p-4 rounded-2xl shadow-lg">
                    <Users className="h-12 w-12 text-edtech-green" />
                    <p className="font-medium mt-2">Community</p>
                  </div>
                </div>
                
                {/* Central Image - represented as a placeholder */}
                <div className="bg-white w-[300px] h-[300px] mx-auto rounded-full shadow-xl flex items-center justify-center overflow-hidden">
                  <img 
                    src="/placeholder.svg" 
                    alt="EdTech Learning Platform" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 mb-6">Trusted by educators and students across India</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse-slow"></div>
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse-slow" style={{ animationDelay: "0.5s" }}></div>
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse-slow" style={{ animationDelay: "1s" }}></div>
            <div className="h-8 w-32 bg-gray-200 rounded animate-pulse-slow" style={{ animationDelay: "1.5s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
