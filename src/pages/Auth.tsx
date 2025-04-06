
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AuthForm from "@/components/auth/AuthForm";
import { Book } from "lucide-react";

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50">
        <div className="w-full max-w-md mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex justify-center mb-6">
              <Link to="/" className="flex items-center space-x-2">
                <Book className="h-8 w-8 text-edtech-blue" />
                <span className="text-2xl font-display font-bold gradient-text">EduMate</span>
              </Link>
            </div>
            
            <h1 className="text-2xl font-display font-bold text-center mb-8">
              Welcome to the Future of Learning
            </h1>
            
            <AuthForm />
          </div>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>By signing up, you agree to our Terms of Service and Privacy Policy.</p>
            <p className="mt-4">
              Need help? <Link to="#" className="text-edtech-blue hover:text-blue-700">Contact Support</Link>
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Auth;
