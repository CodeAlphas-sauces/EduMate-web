
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Brain } from "lucide-react";

interface PathNode {
  id: string;
  title: string;
  isCompleted: boolean;
  courseId: string;
}

interface LearningPathProps {
  title: string;
  description: string;
  progress: number;
  nodes: PathNode[];
  currentNodeId?: string;
}

const LearningPath = ({
  title,
  description,
  progress,
  nodes,
  currentNodeId
}: LearningPathProps) => {
  return (
    <Card className="border-2 border-gray-100">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl font-display mb-1">{title}</CardTitle>
            <p className="text-gray-600">{description}</p>
          </div>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
            <Brain className="h-6 w-6 text-edtech-blue" />
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-sm font-medium text-gray-700">
              Overall Progress: {progress}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div 
              className="bg-edtech-green h-3 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        
        <div className="mt-8">
          <h4 className="font-medium text-gray-900 mb-4">Your Learning Path:</h4>
          <div className="space-y-4">
            {nodes.map((node, index) => {
              const isActive = node.id === currentNodeId;
              const isLocked = !node.isCompleted && index > 0 && !nodes[index - 1].isCompleted;
              
              return (
                <div key={node.id} className="relative">
                  {/* Connection line */}
                  {index < nodes.length - 1 && (
                    <div className="absolute top-7 left-3 h-full w-0.5 bg-gray-200"></div>
                  )}
                  
                  <div className="flex items-start">
                    {/* Status indicator */}
                    <div className={`flex-shrink-0 z-10 h-6 w-6 rounded-full flex items-center justify-center ${
                      node.isCompleted 
                        ? "bg-edtech-green text-white" 
                        : isActive 
                          ? "bg-edtech-blue text-white" 
                          : isLocked 
                            ? "bg-gray-200 text-gray-400"
                            : "bg-gray-100 text-gray-500"
                    }`}>
                      {node.isCompleted ? (
                        <Check className="h-3 w-3" />
                      ) : (
                        <span className="text-xs">{index + 1}</span>
                      )}
                    </div>
                    
                    <div className="ml-4 flex-grow pb-8">
                      <div className={`font-medium ${
                        isActive 
                          ? "text-edtech-blue" 
                          : isLocked 
                            ? "text-gray-400"
                            : "text-gray-800"
                      }`}>
                        {node.title}
                      </div>
                      
                      <div className="mt-2">
                        <Link to={`/course/${node.courseId}`}>
                          <Button 
                            variant={isActive ? "default" : "outline"} 
                            className={`text-sm ${
                              isActive 
                                ? "bg-edtech-blue hover:bg-blue-600" 
                                : isLocked 
                                  ? "opacity-50 cursor-not-allowed"
                                  : ""
                            }`}
                            disabled={isLocked}
                          >
                            {node.isCompleted 
                              ? "Review" 
                              : isActive 
                                ? "Continue" 
                                : "Start"}
                            {!isLocked && <ArrowRight className="ml-1 h-4 w-4" />}
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LearningPath;
