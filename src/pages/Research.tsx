
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { FileText, Download, ExternalLink, BookOpen, PenTool, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Research = () => {
  // Sample research papers
  const researchPapers = [
    {
      id: 1,
      title: "Adaptive Learning Systems and Their Impact on Student Performance",
      authors: "Morgan, A., Chen, J., & Rodriguez, S.",
      date: "March 2025",
      journal: "Journal of Educational Technology",
      abstract: "This study examines the effectiveness of adaptive learning systems in improving student performance across different subjects and age groups. The results indicate a significant improvement in learning outcomes when using personalized learning paths.",
      keywords: ["adaptive learning", "personalization", "student outcomes"]
    },
    {
      id: 2,
      title: "Ethical Implications of Emotion Detection in Educational Technology",
      authors: "Kim, T., Rodriguez, S., & Morgan, A.",
      date: "January 2025",
      journal: "Education and Ethics Review",
      abstract: "This paper explores the ethical considerations surrounding the use of emotion detection technology in educational settings, with a focus on privacy concerns, informed consent, and the appropriate use of collected data.",
      keywords: ["ethics", "emotion detection", "privacy", "educational technology"]
    },
    {
      id: 3,
      title: "Community-Based Learning: A Framework for Knowledge Sharing",
      authors: "Rodriguez, S., Chen, J., & Kim, T.",
      date: "December 2024",
      journal: "Collaborative Learning Research",
      abstract: "This research presents a framework for leveraging community experiences in educational platforms. The study demonstrates how shared insights can enhance learning outcomes and create more engaging educational experiences.",
      keywords: ["community learning", "knowledge sharing", "collaborative education"]
    },
    {
      id: 4,
      title: "AI-Powered Concept Remediation: Identifying and Addressing Knowledge Gaps",
      authors: "Chen, J., Morgan, A., & Kim, T.",
      date: "October 2024",
      journal: "International Journal of AI in Education",
      abstract: "This paper describes a novel approach to automatically identifying and addressing conceptual misunderstandings in learners. The system uses natural language processing and knowledge graphs to provide targeted remediation.",
      keywords: ["concept remediation", "knowledge gaps", "AI in education", "NLP"]
    }
  ];

  // Sample case studies
  const caseStudies = [
    {
      id: 1,
      title: "Implementation of EduMate Platform in Higher Education",
      organization: "University of Technology",
      date: "February 2025",
      summary: "This case study examines the implementation of the EduMate platform across undergraduate computer science courses, resulting in a 27% improvement in course completion rates and a 35% increase in student satisfaction."
    },
    {
      id: 2,
      title: "K-12 Adaptive Learning: A Year-Long Study",
      organization: "Westside School District",
      date: "December 2024",
      summary: "Following the implementation of EduMate's adaptive learning system across 12 schools, this study documents improvements in standardized test scores and significant reductions in achievement gaps between student demographics."
    },
    {
      id: 3,
      title: "Professional Development and Continuous Learning",
      organization: "Global Tech Corporation",
      date: "November 2024",
      summary: "This case study explores how a Fortune 500 company used EduMate's platform to deliver technical training and professional development, resulting in improved employee knowledge retention and satisfaction."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white pt-16 pb-12 border-b">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-display font-bold mb-4">Research & Innovation</h1>
              <p className="text-xl text-gray-700 mb-8">
                Exploring the frontiers of educational technology through rigorous research 
                and evidence-based innovation.
              </p>
              <div className="flex gap-4">
                <Button className="bg-edtech-blue hover:bg-blue-600 text-white">
                  View Latest Papers
                </Button>
                <Button variant="outline" className="border-gray-300">
                  Research Partnerships
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Research Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold mb-12">Our Research Areas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                  <BookOpen className="text-edtech-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Adaptive Learning Systems</h3>
                <p className="text-gray-700 mb-4">
                  Our research explores how AI can create truly personalized learning 
                  experiences that adapt to individual learning styles, knowledge levels, 
                  and educational goals.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Personalization algorithms</li>
                  <li>Content adaptation</li>
                  <li>Learning pathway optimization</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                  <PenTool className="text-edtech-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Ethical AI in Education</h3>
                <p className="text-gray-700 mb-4">
                  We investigate the ethical implications of AI in educational settings, 
                  developing frameworks and best practices for responsible and transparent use.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Privacy-preserving techniques</li>
                  <li>Bias detection and mitigation</li>
                  <li>Ethical guidelines development</li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full mb-6">
                  <GraduationCap className="text-edtech-blue" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-4">Learning Outcomes</h3>
                <p className="text-gray-700 mb-4">
                  Our studies measure the effectiveness of various educational approaches and 
                  technologies on learning outcomes across different subjects and student populations.
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Outcome measurement methodologies</li>
                  <li>Comparative effectiveness studies</li>
                  <li>Long-term retention analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* Research Papers and Case Studies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold mb-12 text-center">Publications & Case Studies</h2>
            
            <Tabs defaultValue="papers" className="w-full max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="papers">Research Papers</TabsTrigger>
                <TabsTrigger value="cases">Case Studies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="papers" className="space-y-6">
                {researchPapers.map((paper) => (
                  <div key={paper.id} className="border rounded-lg p-6 hover:border-edtech-blue transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>
                        <p className="text-gray-600 mb-1">{paper.authors}</p>
                        <p className="text-gray-500 text-sm mb-4">{paper.journal} • {paper.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-edtech-blue">
                          <Download size={20} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-edtech-blue">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-4">
                      {paper.abstract}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {paper.keywords.map((keyword, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </TabsContent>
              
              <TabsContent value="cases" className="space-y-6">
                {caseStudies.map((study) => (
                  <div key={study.id} className="border rounded-lg p-6 hover:border-edtech-blue transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                        <p className="text-gray-600 mb-1">{study.organization}</p>
                        <p className="text-gray-500 text-sm mb-4">{study.date}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 text-gray-500 hover:text-edtech-blue">
                          <FileText size={20} />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-edtech-blue">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      {study.summary}
                    </p>
                  </div>
                ))}
              </TabsContent>
            </Tabs>
            
            <div className="text-center mt-12">
              <Button variant="outline" className="border-edtech-blue text-edtech-blue">
                View All Research
              </Button>
            </div>
          </div>
        </section>
        
        {/* Research Partnership */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-display font-bold mb-4">Research Partnerships</h2>
            <p className="text-blue-100 mb-8">
              We collaborate with universities, research institutions, and industry partners to 
              advance the science of learning and educational technology. 
              If you're interested in partnering with our research team, we'd love to hear from you.
            </p>
            <Button className="bg-white text-blue-700 hover:bg-blue-50">
              Contact Our Research Team
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Research;
