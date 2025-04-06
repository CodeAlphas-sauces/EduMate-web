
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { BookOpen, Users, Clock, ArrowRight } from "lucide-react";

interface CourseCardProps {
  id: string;
  title: string;
  category: string;
  description: string;
  instructor: string;
  students: number;
  duration: string;
  progress?: number;
  image?: string;
}

const CourseCard = ({
  id,
  title,
  category,
  description,
  instructor,
  students,
  duration,
  progress = 0,
  image = "/placeholder.svg"
}: CourseCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-edtech-purple hover:bg-purple-600">{category}</Badge>
        </div>
      </div>
      
      <CardHeader>
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <div className="text-sm text-gray-500">Instructor: {instructor}</div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
          <div className="flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{students} students</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        
        {progress > 0 && (
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-medium text-gray-700">Progress</span>
              <span className="text-xs font-medium text-gray-700">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </CardContent>
      
      <CardFooter>
        <Link to={`/course/${id}`} className="w-full">
          <Button className="w-full bg-edtech-blue hover:bg-blue-600 text-white">
            {progress > 0 ? "Continue Learning" : "Start Course"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
