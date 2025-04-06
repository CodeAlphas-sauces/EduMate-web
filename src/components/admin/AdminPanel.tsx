
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Switch } from "@/components/ui/switch";
import { 
  BarChart, 
  Users, 
  BookOpen, 
  MessageSquare, 
  Settings,
  Search,
  PlusCircle,
  Trash2,
  Edit,
  Filter
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

// Mock data for students
const mockStudents = [
  { id: 1, name: "Aarav Sharma", email: "aarav.sharma@example.com", courses: 3, lastActive: "Today", status: "active" },
  { id: 2, name: "Priya Iyer", email: "priya.iyer@example.com", courses: 5, lastActive: "Yesterday", status: "active" },
  { id: 3, name: "Rohan Mehta", email: "rohan.mehta@example.com", courses: 2, lastActive: "3 days ago", status: "inactive" },
  { id: 4, name: "Ananya Reddy", email: "ananya.reddy@example.com", courses: 4, lastActive: "Today", status: "active" },
  { id: 5, name: "Karan Patel", email: "karan.patel@example.com", courses: 1, lastActive: "1 week ago", status: "inactive" },
];

// Mock data for courses
const mockCourses = [
  { id: 1, title: "Introduction to Machine Learning", students: 120, modules: 8, rating: 4.8, status: "published" },
  { id: 2, title: "Advanced Data Science", students: 85, modules: 12, rating: 4.5, status: "published" },
  { id: 3, title: "Web Development Fundamentals", students: 150, modules: 10, rating: 4.7, status: "published" },
  { id: 4, title: "Blockchain Technology", students: 60, modules: 6, rating: 4.2, status: "draft" },
];

// Mock analytics data
const analyticsData = {
  totalStudents: 415,
  activeCourses: 12,
  completionRate: 68,
  averageRating: 4.6,
  dailyActiveUsers: 208,
};

const AdminPanel = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");

  const handleDelete = (id: number, type: string) => {
    toast({
      title: "Item deleted",
      description: `${type} #${id} has been deleted.`,
    });
  };

  const handleStatusChange = (id: number, type: string, newStatus: boolean) => {
    toast({
      title: "Status updated",
      description: `${type} #${id} status changed to ${newStatus ? "active" : "inactive"}.`,
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-display">Admin Dashboard</CardTitle>
          <Badge className="bg-edtech-purple hover:bg-purple-600">Admin Access</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="analytics">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="courses">Courses</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Total Students</p>
                    <p className="text-2xl font-bold">{analyticsData.totalStudents}</p>
                  </div>
                  <Users className="h-10 w-10 text-edtech-blue opacity-80" />
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Active Courses</p>
                    <p className="text-2xl font-bold">{analyticsData.activeCourses}</p>
                  </div>
                  <BookOpen className="h-10 w-10 text-edtech-green opacity-80" />
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Completion Rate</p>
                    <p className="text-2xl font-bold">{analyticsData.completionRate}%</p>
                  </div>
                  <BarChart className="h-10 w-10 text-edtech-purple opacity-80" />
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Daily Active Users</p>
                    <p className="text-2xl font-bold">{analyticsData.dailyActiveUsers}</p>
                  </div>
                  <MessageSquare className="h-10 w-10 text-edtech-amber opacity-80" />
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">User Activity</CardTitle>
                </CardHeader>
                <CardContent className="h-56 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BarChart className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                    <p>User activity chart visualization would go here</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Course Engagement</CardTitle>
                </CardHeader>
                <CardContent className="h-56 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <BookOpen className="h-12 w-12 mx-auto mb-2 text-gray-400" />
                    <p>Course engagement visualization would go here</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="students">
            <div className="flex justify-between items-center mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search students..."
                  className="pl-8 w-full md:w-80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button className="bg-edtech-blue hover:bg-blue-600 text-white flex items-center">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Student
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Courses</TableHead>
                    <TableHead>Last Active</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockStudents.map((student) => (
                    <TableRow key={student.id}>
                      <TableCell className="font-medium">{student.name}</TableCell>
                      <TableCell>{student.email}</TableCell>
                      <TableCell>{student.courses}</TableCell>
                      <TableCell>{student.lastActive}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={student.status === "active"}
                            onCheckedChange={(checked) => 
                              handleStatusChange(student.id, "Student", checked)
                            }
                          />
                          <span className={`text-sm ${
                            student.status === "active" ? "text-green-600" : "text-gray-500"
                          }`}>
                            {student.status === "active" ? "Active" : "Inactive"}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4 text-edtech-blue" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            onClick={() => handleDelete(student.id, "Student")}
                          >
                            <Trash2 className="h-4 w-4 text-edtech-red" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="courses">
            <div className="flex justify-between items-center mb-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search courses..."
                  className="pl-8 w-full md:w-80"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline" className="flex items-center">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
                <Button className="bg-edtech-green hover:bg-green-600 text-white flex items-center">
                  <PlusCircle className="h-4 w-4 mr-2" />
                  Add Course
                </Button>
              </div>
            </div>
            
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Students</TableHead>
                    <TableHead>Modules</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCourses.map((course) => (
                    <TableRow key={course.id}>
                      <TableCell className="font-medium">{course.title}</TableCell>
                      <TableCell>{course.students}</TableCell>
                      <TableCell>{course.modules}</TableCell>
                      <TableCell>{course.rating}/5.0</TableCell>
                      <TableCell>
                        <Badge className={
                          course.status === "published" 
                            ? "bg-green-100 text-green-800 hover:bg-green-200" 
                            : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                        }>
                          {course.status === "published" ? "Published" : "Draft"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end space-x-2">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Edit className="h-4 w-4 text-edtech-blue" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-8 w-8 p-0"
                            onClick={() => handleDelete(course.id, "Course")}
                          >
                            <Trash2 className="h-4 w-4 text-edtech-red" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
          
          <TabsContent value="settings">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Platform Settings</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Enable AI Features</p>
                      <p className="text-sm text-gray-500">
                        Emotion tracking, focus detection, and personalized learning
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Community Discussion</p>
                      <p className="text-sm text-gray-500">
                        Allow students to engage in discussions and ask questions
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Gamification Features</p>
                      <p className="text-sm text-gray-500">
                        Enable badges, points, and rewards for achievements
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Data Collection Consent</p>
                      <p className="text-sm text-gray-500">
                        Collect anonymous usage data to improve the platform
                      </p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t">
                <h3 className="text-lg font-medium mb-4">Admin Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email Notifications
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-edtech-blue focus:ring focus:ring-edtech-blue focus:ring-opacity-50">
                      <option>All notifications</option>
                      <option>Important only</option>
                      <option>None</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dashboard View
                    </label>
                    <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-edtech-blue focus:ring focus:ring-edtech-blue focus:ring-opacity-50">
                      <option>Analytics first</option>
                      <option>Students first</option>
                      <option>Courses first</option>
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t flex justify-end space-x-3">
                <Button variant="outline" className="border-gray-300">
                  Cancel
                </Button>
                <Button className="bg-edtech-blue hover:bg-blue-600 text-white">
                  Save Settings
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default AdminPanel;
