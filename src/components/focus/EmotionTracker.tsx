import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Brain, Eye, BarChart } from "lucide-react";

// Mock data for the emotion and focus charts
const mockEmotionData = [
  { name: "Engaged", value: 70, color: "bg-edtech-green" },
  { name: "Confused", value: 15, color: "bg-edtech-amber" },
  { name: "Distracted", value: 10, color: "bg-edtech-red" },
  { name: "Neutral", value: 5, color: "bg-gray-300" }
];

const mockFocusHistory = [
  { day: "Mon", value: 85 },
  { day: "Tue", value: 70 },
  { day: "Wed", value: 90 },
  { day: "Thu", value: 65 },
  { day: "Fri", value: 75 },
  { day: "Sat", value: 80 },
  { day: "Sun", value: 85 }
];

const EmotionTracker = () => {
  const [focusScore, setFocusScore] = useState(78);
  const [isTracking, setIsTracking] = useState(false);

  // Simulate real-time focus tracking
  useEffect(() => {
    if (isTracking) {
      const interval = setInterval(() => {
        setFocusScore(prev => {
          // Random fluctuation between -5 and +5
          const change = Math.floor(Math.random() * 11) - 5;
          const newValue = prev + change;
          // Keep within 0-100 range
          return Math.min(100, Math.max(0, newValue));
        });
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isTracking]);

  const handleToggleTracking = () => {
    setIsTracking(!isTracking);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-display">Focus & Emotion Tracker</CardTitle>
          <button
            onClick={handleToggleTracking}
            className={`px-3 py-1 rounded-full text-sm ${
              isTracking 
                ? "bg-red-100 text-red-600" 
                : "bg-green-100 text-green-600"
            }`}
          >
            {isTracking ? "Stop Tracking" : "Start Tracking"}
          </button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="current">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="current">Current State</TabsTrigger>
            <TabsTrigger value="emotions">Emotion Analysis</TabsTrigger>
            <TabsTrigger value="history">Weekly History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="current">
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-4">
                <div className="absolute inset-0 rounded-full bg-blue-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-edtech-blue">{focusScore}%</div>
                    <div className="text-sm text-gray-500">Focus Score</div>
                  </div>
                </div>
                {/* Animated outline when tracking is active */}
                {isTracking && (
                  <div className="absolute inset-0 rounded-full border-4 border-edtech-blue opacity-30 animate-pulse"></div>
                )}
              </div>
              
              <div className="flex items-center space-x-2 mb-6">
                <Eye className="h-5 w-5 text-edtech-blue" />
                <span className="text-sm text-gray-600">
                  {isTracking ? "Tracking in real-time..." : "Tracking paused"}
                </span>
              </div>
              
              <div className="w-full space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Attention</span>
                    <span className="text-sm font-medium">
                      {Math.round(focusScore * 0.8)}%
                    </span>
                  </div>
                  <Progress value={focusScore * 0.8} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Engagement</span>
                    <span className="text-sm font-medium">
                      {Math.round(focusScore * 1.1 > 100 ? 100 : focusScore * 1.1)}%
                    </span>
                  </div>
                  <Progress 
                    value={focusScore * 1.1 > 100 ? 100 : focusScore * 1.1} 
                    className="h-2" 
                  />
                </div>
                
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Comprehension</span>
                    <span className="text-sm font-medium">
                      {Math.round(focusScore * 0.9)}%
                    </span>
                  </div>
                  <Progress value={focusScore * 0.9} className="h-2" />
                </div>
              </div>
              
              <div className="mt-6 text-center text-sm text-gray-500">
                <p>Focus tracking uses computer vision to analyze attention patterns.</p>
                <p className="mt-1">All data is processed locally for privacy.</p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="emotions">
            <div className="space-y-6">
              <div className="text-center mb-4">
                <Brain className="h-12 w-12 mx-auto text-edtech-purple mb-2" />
                <h3 className="text-lg font-medium">Emotional State Analysis</h3>
                <p className="text-sm text-gray-500">
                  Based on your recent learning sessions
                </p>
              </div>
              
              <div className="space-y-4">
                {mockEmotionData.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-sm font-medium">{item.value}%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5">
                      <div 
                        className={`${item.color} h-2.5 rounded-full`} 
                        style={{ width: `${item.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 rounded-lg p-4 mt-4">
                <h4 className="font-medium mb-2">Insights</h4>
                <p className="text-sm text-gray-600">
                  You're mostly engaged during your learning sessions, but occasionally show signs of confusion. Consider reviewing complex topics more frequently.
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history">
            <div>
              <div className="flex items-center justify-center mb-4">
                <BarChart className="h-6 w-6 text-edtech-blue mr-2" />
                <h3 className="text-lg font-medium">Weekly Focus Trends</h3>
              </div>
              
              <div className="flex items-end justify-between h-48 mb-2">
                {mockFocusHistory.map((day, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-8 bg-edtech-blue rounded-t-md transition-all duration-500" 
                      style={{ 
                        height: `${day.value * 0.4}%`,
                        opacity: index === mockFocusHistory.length - 1 ? 1 : 0.7
                      }}
                    ></div>
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between">
                {mockFocusHistory.map((day, index) => (
                  <div key={index} className="text-xs text-gray-500">{day.day}</div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm font-medium">Weekly Average: 79%</p>
                <p className="text-xs text-gray-500 mt-1">
                  Your focus is typically highest mid-week
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default EmotionTracker;
