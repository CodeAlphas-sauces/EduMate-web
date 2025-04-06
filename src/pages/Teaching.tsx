
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Presentation, Users, BarChart, CheckCircle, Clock, GraduationCap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Teaching = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Transform Your Teaching</h1>
              <p className="text-xl text-blue-100 mb-8">
                Empower your students with personalized learning experiences powered by 
                EduMate's AI-driven educational platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  Get Started for Free
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Why Educators Choose EduMate</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                    <BarChart className="text-edtech-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Data-Driven Insights</h3>
                  <p className="text-gray-700">
                    Access detailed analytics on student performance, engagement, and learning 
                    patterns. Identify areas where students need additional support.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                    <BookOpen className="text-edtech-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Adaptive Content</h3>
                  <p className="text-gray-700">
                    Our platform automatically adjusts content difficulty and format to each 
                    student's needs, saving you time while improving outcomes.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-sm">
                <CardContent className="pt-6">
                  <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                    <Clock className="text-edtech-blue" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Save Time</h3>
                  <p className="text-gray-700">
                    Automated grading, progress tracking, and remediation suggestions free up 
                    your time to focus on providing meaningful guidance to your students.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* How It Works */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">How EduMate Works for Teachers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="space-y-8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-edtech-blue rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Create Your Class</h3>
                      <p className="text-gray-700">
                        Set up your virtual classroom in minutes, invite students, and select from 
                        our extensive content library or upload your own materials.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-edtech-blue rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Customize Learning Paths</h3>
                      <p className="text-gray-700">
                        Tailor learning experiences to your curriculum needs or let our AI recommend 
                        personalized paths based on each student's progress.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-edtech-blue rounded-full flex items-center justify-center text-white font-bold">3</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Monitor & Intervene</h3>
                      <p className="text-gray-700">
                        View real-time data on student progress and engagement. Get alerted when students 
                        struggle so you can provide timely support.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-edtech-blue rounded-full flex items-center justify-center text-white font-bold">4</div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Assess & Improve</h3>
                      <p className="text-gray-700">
                        Use our adaptive assessment tools to measure progress, then leverage insights 
                        to continuously refine your teaching approach.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center">
                <Presentation size={64} className="text-gray-400" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-4">
              Powerful Tools for Educators
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              EduMate provides everything you need to create engaging, effective learning experiences 
              while saving you valuable time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: <GraduationCap size={24} />,
                  title: "Content Library",
                  description: "Access thousands of ready-to-use lessons, activities, and assessments aligned to standards."
                },
                {
                  icon: <Users size={24} />,
                  title: "Collaborative Learning",
                  description: "Create group projects and facilitate peer-to-peer learning with built-in collaboration tools."
                },
                {
                  icon: <BarChart size={24} />,
                  title: "Advanced Analytics",
                  description: "Get detailed insights into individual and class-wide performance across all subjects."
                },
                {
                  icon: <CheckCircle size={24} />,
                  title: "Automated Remediation",
                  description: "Our system identifies knowledge gaps and suggests targeted remediation activities."
                },
                {
                  icon: <CheckCircle size={24} />,
                  title: "Customizable Assessments",
                  description: "Create adaptive quizzes and tests that adjust to each student's level."
                },
                {
                  icon: <CheckCircle size={24} />,
                  title: "Parent Communication",
                  description: "Keep parents informed with automated progress reports and updates."
                },
                {
                  icon: <CheckCircle size={24} />,
                  title: "Integration Capabilities",
                  description: "Seamlessly connect with your existing LMS and other educational tools."
                },
                {
                  icon: <CheckCircle size={24} />,
                  title: "Professional Development",
                  description: "Access training resources to maximize your effectiveness with EduMate."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="text-edtech-blue mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              What Educators Are Saying
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "EduMate has transformed my classroom. I can now provide truly personalized instruction to each student while actually reducing my prep time.",
                  author: "Karan Patel",
                  role: "High School Science Teacher"
                },
                {
                  quote: "The analytics dashboard gives me insights I never had before. I can see exactly where students are struggling and intervene before they fall behind.",
                  author: "Aarav Sharma",
                  role: "Middle School Math Teacher"
                },
                {
                  quote: "My students are more engaged than ever since we started using EduMate. The adaptive content keeps them challenged without overwhelming them.",
                  author: "Meera Joshi",
                  role: "Elementary School Teacher"
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Ready to Transform Your Teaching?</h2>
            <p className="text-blue-100 mb-8">
              Join thousands of educators who are using EduMate to create more effective, 
              engaging learning experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Sign Up for Free
              </Button>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Request a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Teaching;
