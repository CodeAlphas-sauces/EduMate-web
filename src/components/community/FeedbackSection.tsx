
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageSquare, ThumbsUp, ThumbsDown, Heart, Share } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for community questions/feedback
const communityQuestions = [
  {
    id: 1,
    author: "Diya Thakur",
    avatar: "/placeholder.svg",
    initials: "SJ",
    question: "How do you approach the concept mapping exercise in Module 3? I'm struggling with connecting the neural network concepts.",
    time: "2 hours ago",
    likes: 24,
    responses: 8,
  },
  {
    id: 2,
    author: "Manav Singh",
    avatar: "/placeholder.svg",
    initials: "MC",
    question: "Is anyone else finding the adaptive assessment in the Machine Learning track to be surprisingly difficult? Looking for study tips.",
    time: "Yesterday",
    likes: 19,
    responses: 12,
  },
  {
    id: 3,
    author: "Nikhil Dubey",
    avatar: "/placeholder.svg",
    initials: "ER",
    question: "What resources are you using to supplement the course material for the data visualization section? Any recommendations?",
    time: "2 days ago",
    likes: 32,
    responses: 15,
  }
];

const communityInsights = [
  {
    id: 1,
    author: "Devansh Bansal",
    avatar: "/placeholder.svg",
    initials: "DK",
    role: "AI Engineer",
    insight: "For those struggling with backpropagation concepts, I found it helpful to work through the calculations manually first before trying to implement them in code. This built my intuition significantly.",
    time: "1 day ago",
    likes: 47,
    saved: 18,
  },
  {
    id: 2,
    author: "Priya Patel",
    avatar: "/placeholder.svg",
    initials: "PP",
    role: "Data Scientist",
    insight: "The recommendation algorithms section clicked for me when I started thinking about them in terms of user experience rather than just mathematical formulas. Consider the human aspect of recommendations!",
    time: "3 days ago",
    likes: 36,
    saved: 22,
  }
];

const FeedbackSection = () => {
  const { toast } = useToast();
  const [newQuestion, setNewQuestion] = useState("");

  const handleSubmitQuestion = () => {
    if (newQuestion.trim() === "") {
      toast({
        title: "Empty question",
        description: "Please enter your question before submitting.",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would be posted to an API
    toast({
      title: "Question submitted",
      description: "Your question has been posted to the community.",
    });
    
    setNewQuestion("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-display">Community & Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="questions">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="questions">Student Questions</TabsTrigger>
            <TabsTrigger value="insights">Expert Insights</TabsTrigger>
          </TabsList>
          
          <TabsContent value="questions">
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-sm font-medium mb-2">Ask the Community</h3>
                <Textarea
                  placeholder="What would you like to ask other students?"
                  className="mb-3"
                  value={newQuestion}
                  onChange={(e) => setNewQuestion(e.target.value)}
                />
                <div className="flex justify-end">
                  <Button 
                    className="bg-edtech-blue hover:bg-blue-600 text-white"
                    onClick={handleSubmitQuestion}
                  >
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Post Question
                  </Button>
                </div>
              </div>
              
              <div className="space-y-4">
                {communityQuestions.map((question) => (
                  <div key={question.id} className="border rounded-lg p-4 hover:border-edtech-blue transition-colors">
                    <div className="flex items-start">
                      <Avatar className="h-10 w-10 mr-3">
                        <AvatarImage src={question.avatar} alt={question.author} />
                        <AvatarFallback>{question.initials}</AvatarFallback>
                      </Avatar>
                      <div className="flex-grow">
                        <div className="flex justify-between">
                          <span className="font-medium">{question.author}</span>
                          <span className="text-sm text-gray-500">{question.time}</span>
                        </div>
                        <p className="my-2">{question.question}</p>
                        <div className="flex items-center space-x-4">
                          <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {question.likes}
                          </button>
                          <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            {question.responses}
                          </button>
                          <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                            <Share className="h-4 w-4 mr-1" />
                            Share
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="insights">
            <div className="space-y-4">
              {communityInsights.map((insight) => (
                <div key={insight.id} className="border rounded-lg p-4 bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="flex items-start">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={insight.avatar} alt={insight.author} />
                      <AvatarFallback>{insight.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div>
                          <span className="font-medium">{insight.author}</span>
                          <span className="ml-2 px-2 py-0.5 bg-edtech-blue bg-opacity-10 text-edtech-blue rounded text-xs">
                            {insight.role}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500">{insight.time}</span>
                      </div>
                      <p className="my-2">{insight.insight}</p>
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                          <ThumbsUp className="h-4 w-4 mr-1" />
                          {insight.likes}
                        </button>
                        <button className="flex items-center text-sm text-gray-500 hover:text-red-500">
                          <Heart className="h-4 w-4 mr-1" />
                          Save
                        </button>
                        <button className="flex items-center text-sm text-gray-500 hover:text-edtech-blue">
                          <Share className="h-4 w-4 mr-1" />
                          Share
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="text-center mt-4">
                <Button variant="outline" className="border-edtech-blue text-edtech-blue">
                  View More Insights
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default FeedbackSection;
