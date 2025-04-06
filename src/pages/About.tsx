
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Star, Lightbulb, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">About EduMate</h1>
              <p className="text-xl text-gray-700 mb-8">
                We're on a mission to transform education through AI-powered personalized learning
                and community-driven insights.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  EduMate was founded in 2023 by a team of educators, technologists, and lifelong learners who believed that education could be more effective, engaging, and accessible.
                </p>
                <p className="text-gray-700 mb-4">
                  We recognized that traditional one-size-fits-all approaches to education were leaving many learners behind, while advances in AI and data science offered the potential to personalize learning in ways never before possible.
                </p>
                <p className="text-gray-700">
                  Today, EduMate serves learners across India and beyond, helping them achieve their educational goals through adaptive learning paths, emotion and focus detection, and a supportive community.
                </p>
              </div>
              <div className="bg-gray-100 rounded-xl p-8">
                <div className="flex flex-col space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-edtech-blue p-3 rounded-full text-white">
                      <Target size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Mission</h3>
                      <p className="text-gray-700">To make personalized education accessible to everyone across India and beyond.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-edtech-blue p-3 rounded-full text-white">
                      <Lightbulb size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Vision</h3>
                      <p className="text-gray-700">A world where every learner reaches their full potential through education tailored to their unique needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-edtech-blue p-3 rounded-full text-white">
                      <Star size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Values</h3>
                      <p className="text-gray-700">Innovation, inclusivity, empathy, and continuous improvement are at the heart of everything we do.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What Sets Us Apart */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">What Sets Us Apart</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                  <BookOpen className="text-edtech-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Hyper-Personalized Learning</h3>
                <p className="text-gray-700">
                  Our AI algorithms create truly personalized learning paths that adapt to your strengths, weaknesses, and learning style in real-time.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                  <Award className="text-edtech-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ethical AI Integration</h3>
                <p className="text-gray-700">
                  Our emotion and focus detection is built with privacy and ethics at its core, helping you learn more effectively without compromising your data.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                  <Users className="text-edtech-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Community-Driven Learning</h3>
                <p className="text-gray-700">
                  We believe in the power of shared experiences. Our platform helps you learn from the collective wisdom of our entire learning community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Our Leadership Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  name: "Arjun Sharma",
                  title: "CEO & Co-Founder",
                  bio: "Former educator with 15 years of experience and a passion for educational technology."
                },
                {
                  name: "Priya Patel",
                  title: "CTO & Co-Founder",
                  bio: "AI researcher with expertise in machine learning applications in education."
                },
                {
                  name: "Rahul Singh",
                  title: "Chief Learning Officer",
                  bio: "PhD in Educational Psychology with a focus on adaptive learning methodologies."
                },
                {
                  name: "Kavita Desai",
                  title: "Chief Product Officer",
                  bio: "Experienced product leader who's built EdTech solutions used by millions of learners."
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-40 h-40 bg-gray-200 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-edtech-blue font-medium mb-2">{member.title}</p>
                  <p className="text-gray-700 px-4">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
