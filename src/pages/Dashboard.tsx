
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/dashboard/CourseCard";
import LearningPath from "@/components/dashboard/LearningPath";
import EmotionTracker from "@/components/focus/EmotionTracker";
import FeedbackSection from "@/components/community/FeedbackSection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Filter, Book, Bookmark } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Mock enrolled courses
const enrolledCourses = [
  {
    id: "1",
    title: "Machine Learning Fundamentals",
    category: "AI & Data Science",
    description: "Learn the foundations of machine learning with hands-on projects and personalized feedback.",
    instructor: "Dr. Rajesh Sharma",
    students: 1250,
    duration: "8 weeks",
    progress: 65,
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
    progress: 32,
    image: "/placeholder.svg",
  },
];

// Mock recommended courses
const recommendedCourses = [
  {
    id: "3",
    title: "Data Analysis with Python",
    category: "Data Science",
    description: "Learn to analyze and visualize complex datasets using Python and popular libraries.",
    instructor: "Neha Singh",
    students: 845,
    duration: "6 weeks",
    image: "/placeholder.svg",
  },
  {
    id: "4",
    title: "Advanced Deep Learning",
    category: "AI & Data Science",
    description: "Explore advanced neural network architectures and cutting-edge AI research applications.",
    instructor: "Dr. Vikram Kumar",
    students: 620,
    duration: "12 weeks",
    image: "/placeholder.svg",
  },
  {
    id: "5",
    title: "Cloud Computing Essentials",
    category: "DevOps",
    description: "Master cloud infrastructure and deployment strategies for scalable applications.",
    instructor: "Pooja Mehta",
    students: 730,
    duration: "8 weeks",
    image: "/placeholder.svg",
  },
];

// Mock learning path
const personalizedPath = {
  title: "AI & Machine Learning Path",
  description: "Personalized to accelerate your machine learning career",
  progress: 45,
  nodes: [
    {
      id: "path1",
      title: "Intro to Machine Learning Algorithms",
      isCompleted: true,
      courseId: "1",
    },
    {
      id: "path2",
      title: "Supervised Learning & Regression",
      isCompleted: true,
      courseId: "1",
    },
    {
      id: "path3",
      title: "Neural Networks Fundamentals",
      isCompleted: false,
      courseId: "1",
    },
    {
      id: "path4",
      title: "Deep Learning with TensorFlow",
      isCompleted: false,
      courseId: "4",
    },
    {
      id: "path5",
      title: "Advanced Model Deployment",
      isCompleted: false,
      courseId: "4",
    },
  ],
  currentNodeId: "path3",
};

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = React.useState("");

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Welcome Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold mb-2">Welcome back, Priya!</h1>
              <p className="text-gray-600">Continue your learning journey where you left off.</p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center">
              <div className="relative mr-2">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search courses..."
                  className="pl-8 w-full md:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Courses */}
            <div className="lg:col-span-2">
              <Tabs defaultValue="enrolled">
                <TabsList className="mb-6">
                  <TabsTrigger value="enrolled" className="flex items-center">
                    <Book className="h-4 w-4 mr-2" />
                    My Courses
                  </TabsTrigger>
                  <TabsTrigger value="recommended" className="flex items-center">
                    <Bookmark className="h-4 w-4 mr-2" />
                    Recommended
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="enrolled">
                  <h2 className="text-xl font-display font-medium mb-4">Your Enrolled Courses</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {enrolledCourses.map((course) => (
                      <CourseCard 
                        key={course.id}
                        id={course.id}
                        title={course.title}
                        category={course.category}
                        description={course.description}
                        instructor={course.instructor}
                        students={course.students}
                        duration={course.duration}
                        progress={course.progress}
                        image={course.image}
                      />
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="recommended">
                  <h2 className="text-xl font-display font-medium mb-4">Recommended For You</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {recommendedCourses.map((course) => (
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
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Right Column - Learning Path, Focus Tracker */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-display font-medium mb-4">Your Learning Path</h2>
                <LearningPath 
                  title={personalizedPath.title}
                  description={personalizedPath.description}
                  progress={personalizedPath.progress}
                  nodes={personalizedPath.nodes}
                  currentNodeId={personalizedPath.currentNodeId}
                />
              </div>
              
              <div>
                <h2 className="text-xl font-display font-medium mb-4">Focus Analytics</h2>
                <EmotionTracker />
              </div>
              
              <div>
                <h2 className="text-xl font-display font-medium mb-4">Community</h2>
                <FeedbackSection />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
