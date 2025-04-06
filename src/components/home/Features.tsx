
import React from "react";
import { 
  BookOpen, 
  Brain, 
  Award, 
  Users, 
  BarChart,
  MessageSquare
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm card-hover">
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${color} mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-display font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Brain className="h-6 w-6 text-white" />,
      title: "Personalized Learning Paths",
      description: "AI-powered system creates custom learning journeys based on your goals, strengths, and areas for improvement.",
      color: "bg-edtech-purple"
    },
    {
      icon: <BookOpen className="h-6 w-6 text-white" />,
      title: "Concept Remediation",
      description: "Automatically identifies knowledge gaps and provides targeted content to strengthen your understanding.",
      color: "bg-edtech-blue"
    },
    {
      icon: <Award className="h-6 w-6 text-white" />,
      title: "Gamified Adaptive Tests",
      description: "Engaging assessments that adjust difficulty based on your performance, keeping you challenged but not overwhelmed.",
      color: "bg-edtech-green"
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: "Community Learning",
      description: "Learn from peers' experiences and collaborate with others following similar learning paths.",
      color: "bg-edtech-amber"
    },
    {
      icon: <BarChart className="h-6 w-6 text-white" />,
      title: "Progress Analytics",
      description: "Detailed insights into your learning journey with actionable recommendations to improve outcomes.",
      color: "bg-edtech-blue"
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-white" />,
      title: "Expert Feedback",
      description: "Receive guidance from instructors and AI-assisted evaluations on your assignments and projects.",
      color: "bg-edtech-purple"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Features That Transform How You Learn
          </h2>
          <p className="text-lg text-gray-600">
            Our platform combines AI technology with proven educational methodologies 
            to deliver a personalized, effective learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              color={feature.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
