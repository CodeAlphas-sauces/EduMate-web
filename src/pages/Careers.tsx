
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Briefcase, Clock, CheckCircle, Users, Heart, Brain, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Careers = () => {
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Bengaluru, India",
      type: "Full-Time",
      description: "Join our AI team to develop cutting-edge machine learning models for personalized learning and emotion detection.",
      requirements: [
        "5+ years of experience in machine learning and AI",
        "Experience with TensorFlow or PyTorch",
        "Background in NLP and computer vision",
        "Strong Python programming skills",
        "Experience with cloud-based ML infrastructure"
      ]
    },
    {
      id: 2,
      title: "Learning Experience Designer",
      department: "Product",
      location: "Remote, India",
      type: "Full-Time",
      description: "Design engaging, effective learning experiences that leverage our adaptive learning technology.",
      requirements: [
        "3+ years of experience in instructional design",
        "Understanding of educational psychology and learning theory",
        "Experience designing digital learning experiences",
        "Excellent communication and collaboration skills",
        "Background in education a plus"
      ]
    },
    {
      id: 3,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-Time",
      description: "Build robust, scalable features for our educational platform that serves millions of learners.",
      requirements: [
        "5+ years of experience in full stack development",
        "Proficiency in React, Node.js, and modern JavaScript",
        "Experience with cloud services (AWS, GCP, or Azure)",
        "Understanding of database design and optimization",
        "Experience with real-time applications a plus"
      ]
    },
    {
      id: 4,
      title: "Data Scientist",
      department: "Data",
      location: "Remote, India",
      type: "Full-Time",
      description: "Analyze learning patterns and user behavior to improve our adaptive learning algorithms.",
      requirements: [
        "3+ years of experience in data science",
        "Strong statistical analysis skills",
        "Experience with Python data science stack",
        "Background in educational data mining a plus",
        "Excellent communication skills"
      ]
    },
    {
      id: 5,
      title: "Educational Content Specialist",
      department: "Content",
      location: "New Delhi, India",
      type: "Full-Time",
      description: "Create high-quality educational content that integrates seamlessly with our adaptive learning platform.",
      requirements: [
        "3+ years of experience in educational content development",
        "Experience with curriculum design and assessment creation",
        "Subject matter expertise in K-12 or higher education",
        "Understanding of adaptive learning principles",
        "Excellent writing and editing skills"
      ]
    }
  ];

  // Sample values
  const values = [
    {
      icon: <Brain className="text-edtech-blue" size={28} />,
      title: "Continuous Learning",
      description: "We're lifelong learners who embrace growth, curiosity, and the pursuit of knowledge."
    },
    {
      icon: <Heart className="text-edtech-blue" size={28} />,
      title: "Empathy First",
      description: "We put ourselves in the shoes of learners, educators, and colleagues to create better experiences."
    },
    {
      icon: <Zap className="text-edtech-blue" size={28} />,
      title: "Innovation",
      description: "We challenge conventions and embrace creative solutions to transform education."
    },
    {
      icon: <Users className="text-edtech-blue" size={28} />,
      title: "Inclusivity",
      description: "We believe in creating educational opportunities that work for everyone across India."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Join Our Mission</h1>
              <p className="text-xl text-blue-100 mb-8">
                Help us transform education through technology. We're looking for passionate 
                individuals who want to make a lasting impact on how India learns.
              </p>
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                View Open Positions
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Working Here */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-display font-bold mb-6">
                  Why Work at EduMate?
                </h2>
                <p className="text-gray-700 mb-6">
                  At EduMate, we're reimagining education for the digital age. We combine cutting-edge 
                  AI technology with evidence-based learning science to create experiences that truly 
                  adapt to each learner's needs.
                </p>
                <p className="text-gray-700 mb-6">
                  Our team consists of educators, engineers, designers, and researchers united by a 
                  shared passion for improving how people learn. We value diversity of thought, 
                  experience, and background, as we believe it leads to better outcomes for our users.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Work on projects that impact millions of learners across India</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Collaborate with experts across education and technology</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Grow your skills through continuous learning opportunities</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={20} />
                    <p className="text-gray-700">Enjoy a flexible, supportive work environment</p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-200 rounded-lg h-48"></div>
                <div className="bg-gray-200 rounded-lg h-48"></div>
                <div className="bg-gray-200 rounded-lg h-48"></div>
                <div className="bg-gray-200 rounded-lg h-48"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-sm text-center">
                  <CardContent className="pt-6">
                    <div className="mx-auto mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-4">
              Benefits & Perks
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              We believe in taking care of our team so they can focus on making a difference.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Health & Wellness</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Comprehensive health, dental, and vision insurance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Mental health resources and support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Wellness stipend for gym memberships or yoga classes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Ergonomic work setup</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Work-Life Balance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Flexible work arrangements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Generous PTO policy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Paid parental leave</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Company-wide wellness days</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-6">Growth & Development</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Professional development budget</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Continued education support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Mentorship opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                    <span className="text-gray-700">Internal mobility</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Open Positions */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold text-center mb-12">Open Positions</h2>
            
            <div className="mb-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="border-edtech-blue text-edtech-blue">All Departments</Button>
              <Button variant="outline" className="border-gray-200">Engineering</Button>
              <Button variant="outline" className="border-gray-200">Product</Button>
              <Button variant="outline" className="border-gray-200">Education</Button>
            </div>
            
            <div className="space-y-4">
              {jobs.map((job) => (
                <div key={job.id} className="border rounded-lg hover:border-edtech-blue transition-colors">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                        <span className="bg-blue-100 text-edtech-blue text-sm px-3 py-1 rounded-full flex items-center">
                          <Briefcase size={14} className="mr-1" />
                          {job.department}
                        </span>
                        <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </span>
                        <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full flex items-center">
                          <Clock size={14} className="mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value={`item-${job.id}`}>
                        <AccordionTrigger className="text-edtech-blue">View Requirements</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 py-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={16} />
                                <span className="text-gray-700">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                    <div className="mt-6">
                      <Button className="bg-edtech-blue hover:bg-blue-600 text-white">Apply Now</Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-700 mb-4">
                Don't see a position that matches your skills?
              </p>
              <Button variant="outline" className="border-edtech-blue text-edtech-blue">
                Send us your resume
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Careers;
