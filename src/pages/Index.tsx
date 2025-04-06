
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import CourseCard from "@/components/dashboard/CourseCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Mock featured courses
const featuredCourses = [
  {
    id: "1",
    title: "Machine Learning Fundamentals",
    category: "AI & Data Science",
    description: "Learn the foundations of machine learning with hands-on projects and personalized feedback.",
    instructor: "Dr. Rajesh Sharma",
    students: 1250,
    duration: "8 weeks",
    image: "/placeholder.svg",
  },
  {
    id: "2",
    title: "Full Stack Web Development",
    category: "Programming",
    description: "Master both frontend and backend development with modern frameworks and tools.",
    instructor: "Ananya Patel",
    students: 980,
    duration: "10 weeks",
    image: "/placeholder.svg",
  },
  {
    id: "3",
    title: "Data Analysis with Python",
    category: "Data Science",
    description: "Learn to analyze and visualize complex datasets using Python and popular libraries.",
    instructor: "Neha Singh",
    students: 845,
    duration: "6 weeks",
    image: "/placeholder.svg",
  }
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Featured Courses */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold">
                Featured <span className="text-edtech-blue">Courses</span>
              </h2>
              <Link to="/dashboard">
                <Button variant="ghost" className="text-edtech-blue hover:text-blue-700">
                  View All Courses <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredCourses.map((course) => (
                <CourseCard 
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  category={course.category}
                  description={course.description}
                  instructor={course.instructor}
                  students={course.students}
                  duration={course.duration}
                  image={course.image}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-edtech-blue to-edtech-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Transform Your Learning Experience?
            </h2>
            <p className="text-xl max-w-2xl mx-auto mb-8 opacity-90">
              Join thousands of students discovering the power of AI-enhanced personalized education.
            </p>
            <Link to="/auth?mode=register">
              <Button className="bg-white text-edtech-blue hover:bg-gray-100 px-8 py-6 text-lg rounded-xl">
                Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-12">
              What Our Students Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">Vikram Rao</h4>
                    <p className="text-sm text-gray-500">Data Science Student</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The personalized learning path identified gaps in my knowledge that I wasn't even aware of. The adaptive tests helped me focus my studying, and I've seen a massive improvement in my skills."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">Priya Patel</h4>
                    <p className="text-sm text-gray-500">Web Development Student</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I love how the platform adjusts to my learning style. The focus tracking feature helped me realize when I was getting distracted, and the community section provided great resources when I got stuck."
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-medium">Ravi Singh</h4>
                    <p className="text-sm text-gray-500">AI Engineering Student</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The gamified tests made learning complex concepts actually enjoyable. I was able to track my progress and see my improvement over time, which kept me motivated throughout the course."
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
