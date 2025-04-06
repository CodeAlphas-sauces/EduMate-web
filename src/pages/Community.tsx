
import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MessageSquare, 
  Users, 
  Award, 
  ThumbsUp, 
  ThumbsDown, 
  Heart, 
  Share,
  PlusCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock community questions
const communityQuestions = [
  {
    id: 1,
    author: "Sneha Verma",
    avatar: "/placeholder.svg",
    initials: "SV",
    role: "Student",
    question: "How do you approach the concept mapping exercise in Module 3? I'm struggling with connecting the neural network concepts.",
    details: "I've completed the exercises on neural network architectures, but I'm finding it difficult to understand how the different layers interact. Has anyone found a good visual explanation or alternative approach?",
    time: "2 hours ago",
    likes: 24,
    responses: 8,
    tags: ["Machine Learning", "Neural Networks", "Study Tips"]
  },
  {
    id: 2,
    author: "Aditya Gupta",
    avatar: "/placeholder.svg",
    initials: "AG",
    role: "Student",
    question: "Is anyone else finding the adaptive assessment in the Machine Learning track to be surprisingly difficult? Looking for study tips.",
    details: "I've been working through the ML track and the adaptive tests seem to be getting exponentially harder. I'm looking for advice on how to prepare for these assessments effectively.",
    time: "Yesterday",
    likes: 19,
    responses: 12,
    tags: ["Machine Learning", "Assessments", "Study Tips"]
  },
  {
    id: 3,
    author: "Divya Sharma",
    avatar: "/placeholder.svg",
    initials: "DS",
    role: "Student",
    question: "What resources are you using to supplement the course material for the data visualization section? Any recommendations?",
    details: "I find that I learn better with multiple sources. The course material is good, but I'd like to see some alternative explanations, especially for the more complex visualization techniques.",
    time: "2 days ago",
    likes: 32,
    responses: 15,
    tags: ["Data Science", "Visualization", "Resources"]
  }
];

// Mock expert insights
const expertInsights = [
  {
    id: 1,
    author: "Dr. Vikram Mehta",
    avatar: "/placeholder.svg",
    initials: "VM",
    role: "AI Engineer",
    insight: "For those struggling with backpropagation concepts, I found it helpful to work through the calculations manually first before trying to implement them in code. This built my intuition significantly.",
    details: "Backpropagation is one of those concepts that seems complicated but becomes intuitive once you understand the core principles. I recommend starting with simple network architectures and working out the math on paper, visualizing how errors propagate through the network. Once you have that intuition, implementing the algorithm becomes much more straightforward.",
    time: "1 day ago",
    likes: 47,
    saved: 18,
    tags: ["Neural Networks", "Backpropagation", "Learning Techniques"]
  },
  {
    id: 2,
    author: "Dr. Priya Patel",
    avatar: "/placeholder.svg",
    initials: "PP",
    role: "Data Scientist",
    insight: "The recommendation algorithms section clicked for me when I started thinking about them in terms of user experience rather than just mathematical formulas. Consider the human aspect of recommendations!",
    details: "When studying recommendation systems, it's easy to get lost in the mathematics of collaborative filtering, content-based filtering, and hybrid approaches. What helped me understand these concepts was thinking about the user's perspective and how different algorithms translate to different user experiences. This approach not only helped me understand the algorithms better but also made me a more effective data scientist when implementing them.",
    time: "3 days ago",
    likes: 36,
    saved: 22,
    tags: ["Recommendation Systems", "UX", "Data Science"]
  }
];

// Mock learning tips
const learningTips = [
  {
    id: 1,
    author: "Arjun Kumar",
    avatar: "/placeholder.svg",
    initials: "AK",
    role: "Student",
    course: "Machine Learning Fundamentals",
    tip: "Create flashcards for key concepts and review them before starting each practice session.",
    time: "4 days ago",
    likes: 28,
    tags: ["Study Techniques", "Machine Learning"]
  },
  {
    id: 2,
    author: "Meera Singh",
    avatar: "/placeholder.svg",
    initials: "MS",
    role: "Student",
    course: "Data Analysis with Python",
    tip: "I found it helpful to build a small project applying each concept right after learning it, instead of waiting until the end of the module.",
    time: "1 week ago",
    likes: 34,
    tags: ["Project-Based Learning", "Python", "Data Analysis"]
  },
  {
    id: 3,
    author: "Rohan Tiwari",
    avatar: "/placeholder.svg",
    initials: "RT",
    role: "Student",
    course: "Full Stack Web Development",
    tip: "Use the Pomodoro technique (25 min focus, 5 min break) when coding. It helps maintain concentration and prevents burnout.",
    time: "2 weeks ago",
    likes: 42,
    tags: ["Focus Techniques", "Web Development", "Productivity"]
  }
];

const Community = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [isCreatingPost, setIsCreatingPost] = useState(false);

  const handleCreatePost = () => {
    if (newPostTitle.trim() === "" || newPostContent.trim() === "") {
      toast({
        title: "Incomplete post",
        description: "Please provide both a title and content for your post.",
        variant: "destructive",
      });
      return;
    }

    // Simulate posting to API
    toast({
      title: "Post created",
      description: "Your post has been published to the community.",
    });
    
    setNewPostTitle("");
    setNewPostContent("");
    setIsCreatingPost(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Community & Knowledge Sharing
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect with fellow learners, share insights, and learn from the collective wisdom of our community.
            </p>
          </div>
          
          {/* Search and Create */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="relative mb-4 md:mb-0 w-full md:w-auto">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search community posts..."
                className="pl-8 w-full md:w-80"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <Button 
              className="bg-edtech-purple hover:bg-purple-600 text-white w-full md:w-auto"
              onClick={() => setIsCreatingPost(true)}
            >
              <PlusCircle className="h-4 w-4 mr-2" />
              Create Post
            </Button>
          </div>
          
          {/* Create Post Form (conditionally rendered) */}
          {isCreatingPost && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">Create a New Post</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="post-title" className="block text-sm font-medium text-gray-700 mb-1">
                      Title
                    </label>
                    <Input
                      id="post-title"
                      placeholder="Enter a clear, specific title for your post"
                      value={newPostTitle}
                      onChange={(e) => setNewPostTitle(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="post-content" className="block text-sm font-medium text-gray-700 mb-1">
                      Content
                    </label>
                    <Textarea
                      id="post-content"
                      placeholder="Describe your question or share your insight in detail"
                      className="min-h-[150px]"
                      value={newPostContent}
                      onChange={(e) => setNewPostContent(e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="post-tags" className="block text-sm font-medium text-gray-700 mb-1">
                      Tags (optional)
                    </label>
                    <Input
                      id="post-tags"
                      placeholder="Add tags separated by commas (e.g., Machine Learning, Study Tips)"
                    />
                  </div>
                  
                  <div className="flex justify-end space-x-3 pt-2">
                    <Button 
                      variant="outline" 
                      onClick={() => setIsCreatingPost(false)}
                    >
                      Cancel
                    </Button>
                    <Button 
                      className="bg-edtech-purple hover:bg-purple-600 text-white"
                      onClick={handleCreatePost}
                    >
                      Post to Community
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          
          {/* Community Content */}
          <Tabs defaultValue="discussions">
            <TabsList className="w-full mb-8">
              <TabsTrigger value="discussions" className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                Discussions
              </TabsTrigger>
              <TabsTrigger value="insights" className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                Expert Insights
              </TabsTrigger>
              <TabsTrigger value="tips" className="flex items-center">
                <Award className="h-4 w-4 mr-2" />
                Learning Tips
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="discussions">
              <div className="space-y-6">
                {communityQuestions.map((question) => (
                  <Card key={question.id} className="hover:border-edtech-blue transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={question.avatar} alt={question.author} />
                          <AvatarFallback>{question.initials}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-display font-medium text-lg">{question.question}</h3>
                              <div className="flex items-center mt-1">
                                <span className="font-medium text-sm">{question.author}</span>
                                <span className="mx-2 text-gray-400">•</span>
                                <Badge variant="outline" className="font-normal text-xs">
                                  {question.role}
                                </Badge>
                                <span className="mx-2 text-gray-400">•</span>
                                <span className="text-sm text-gray-500">{question.time}</span>
                              </div>
                            </div>
                          </div>
                          
                          <p className="my-4 text-gray-600">{question.details}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {question.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="font-normal">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 border-t pt-4">
                            <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span>{question.likes}</span>
                            </button>
                            <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span>{question.responses} Responses</span>
                            </button>
                            <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                              <Share className="h-4 w-4 mr-1" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="insights">
              <div className="space-y-6">
                {expertInsights.map((insight) => (
                  <Card key={insight.id} className="hover:border-edtech-purple transition-colors bg-blue-50">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={insight.avatar} alt={insight.author} />
                          <AvatarFallback>{insight.initials}</AvatarFallback>
                        </Avatar>
                        
                        <div className="flex-grow">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="flex items-center">
                                <h3 className="font-display font-medium text-lg">{insight.author}</h3>
                                <Badge className="ml-2 bg-edtech-purple">{insight.role}</Badge>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">{insight.time}</p>
                            </div>
                          </div>
                          
                          <p className="mt-4 mb-2 font-medium">{insight.insight}</p>
                          <p className="mb-4 text-gray-600">{insight.details}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {insight.tags.map((tag, index) => (
                              <Badge key={index} variant="secondary" className="font-normal">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center space-x-4 border-t pt-4">
                            <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span>{insight.likes}</span>
                            </button>
                            <button className="flex items-center text-sm text-gray-500 hover:text-red-500">
                              <Heart className="h-4 w-4 mr-1" />
                              <span>Save</span>
                            </button>
                            <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                              <Share className="h-4 w-4 mr-1" />
                              <span>Share</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tips">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {learningTips.map((tip) => (
                  <Card key={tip.id} className="hover:border-edtech-green transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-start mb-4">
                        <Avatar className="h-8 w-8 mr-3">
                          <AvatarImage src={tip.avatar} alt={tip.author} />
                          <AvatarFallback>{tip.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{tip.author}</p>
                          <p className="text-xs text-gray-500">
                            {tip.course} • {tip.time}
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg mb-4">
                        <p className="text-gray-700">{tip.tip}</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-3">
                        {tip.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="font-normal text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <button className="flex items-center text-sm text-gray-500 hover:text-edtech-green">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          <span>{tip.likes}</span>
                        </button>
                        <button className="text-xs text-edtech-green">
                          Try This Tip
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
