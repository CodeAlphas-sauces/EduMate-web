
import React, { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const AuthForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialMode = searchParams.get("mode") === "login" ? "login" : "register";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student" // Default role
  });

  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState(initialMode);
  
  // Check for existing auth
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for authenticated user on mount
  useEffect(() => {
    // Check local storage for auth token
    const authToken = localStorage.getItem('EduMate-auth-token');
    
    if (authToken) {
      setIsAuthenticated(true);
      // Redirect if already authenticated
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate form data
    if (activeTab === "register") {
      if (formData.password !== formData.confirmPassword) {
        toast({
          title: "Passwords don't match",
          description: "Please ensure both passwords match",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
      
      if (formData.password.length < 8) {
        toast({
          title: "Password too short",
          description: "Password must be at least 8 characters long",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store auth data in localStorage
      const userData = {
        id: 'user-' + Date.now(),
        name: formData.name || 'User',
        email: formData.email,
        role: formData.role
      };
      
      // Generate token and store auth data
      const mockToken = 'token-' + Math.random().toString(36).substring(2);
      localStorage.setItem('EduMate-auth-token', mockToken);
      localStorage.setItem('EduMate-user-data', JSON.stringify(userData));
      
      // Simulate successful auth
      toast({
        title: activeTab === "login" ? "Welcome back!" : "Account created successfully!",
        description: activeTab === "login" 
          ? "You have been logged in successfully." 
          : "Your account has been created. You can now access all features.",
        variant: "default",
      });
      
      // Update auth state
      setIsAuthenticated(true);
      
      // Redirect to dashboard
      navigate("/dashboard");
    } catch (error) {
      toast({
        title: "Authentication failed",
        description: "Please check your credentials and try again",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // If already authenticated, don't show the form
  if (isAuthenticated) {
    return (
      <div className="text-center">
        <p className="mb-4">You are already signed in!</p>
        <Button onClick={() => navigate('/dashboard')}>
          Go to Dashboard
        </Button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-6">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="focus-ring"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="focus-ring"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-edtech-blue focus:ring-edtech-blue border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <a href="#" className="text-sm font-medium text-edtech-blue hover:text-blue-700">
                Forgot password?
              </a>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-edtech-blue hover:bg-blue-600 text-white" 
              disabled={isLoading}
            >
              {isLoading ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </TabsContent>

        <TabsContent value="register">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Smith"
                required
                className="focus-ring"
              />
            </div>

            <div>
              <label htmlFor="register-email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <Input
                id="register-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className="focus-ring"
              />
            </div>

            <div>
              <label htmlFor="register-password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="register-password"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="focus-ring"
              />
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters long
              </p>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
                className="focus-ring"
              />
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus-ring"
                required
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="parent">Parent</option>
              </select>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                required
                className="h-4 w-4 text-edtech-blue focus:ring-edtech-blue border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="text-edtech-blue hover:text-blue-700">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-edtech-blue hover:text-blue-700">
                  Privacy Policy
                </a>
              </label>
            </div>

            <Button 
              type="submit" 
              className="w-full bg-edtech-blue hover:bg-blue-600 text-white" 
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>
        </TabsContent>
      </Tabs>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          {activeTab === "login" ? "Don't have an account? " : "Already have an account? "}
          <button
            className="text-edtech-blue hover:text-blue-700 font-medium"
            onClick={() => setActiveTab(activeTab === "login" ? "register" : "login")}
          >
            {activeTab === "login" ? "Sign up" : "Sign in"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
