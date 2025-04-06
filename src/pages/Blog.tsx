
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "How AI is Revolutionizing Personalized Learning",
      excerpt: "Discover how artificial intelligence is transforming education by creating truly adaptive learning experiences.",
      author: "Arjun Sharma",
      date: "April 2, 2025",
      category: "AI in Education",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485"
    },
    {
      id: 2,
      title: "The Science Behind Emotion Detection in Learning",
      excerpt: "Understanding how emotional states affect learning outcomes and how technology can help students stay engaged.",
      author: "Priya Patel",
      date: "March 28, 2025",
      category: "Educational Psychology",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad"
    },
    {
      id: 3,
      title: "Community-Based Learning: The Power of Shared Experiences",
      excerpt: "How learning from others' experiences can accelerate your educational journey and deepen understanding.",
      author: "Rahul Singh",
      date: "March 21, 2025",
      category: "Community",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
    },
    {
      id: 4,
      title: "Ethical Considerations in Educational AI",
      excerpt: "Exploring the balance between leveraging AI for improved learning outcomes and ensuring privacy and ethical use.",
      author: "Kavita Desai",
      date: "March 15, 2025",
      category: "Ethics",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4"
    },
    {
      id: 5,
      title: "The Future of Assessments: Beyond Traditional Testing",
      excerpt: "How gamified adaptive tests are providing more accurate measures of knowledge while reducing test anxiety.",
      author: "Arjun Sharma",
      date: "March 10, 2025",
      category: "Assessment",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
    },
    {
      id: 6,
      title: "Bridging Knowledge Gaps with Automatic Concept Remediation",
      excerpt: "How intelligent systems can identify and address conceptual misunderstandings in real-time.",
      author: "Priya Patel",
      date: "March 5, 2025",
      category: "Learning Technology",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644"
    }
  ];

  // Sample blog categories
  const categories = [
    "AI in Education",
    "Educational Psychology",
    "Learning Technology",
    "Community",
    "Assessment",
    "Ethics",
    "Research"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow bg-gray-50">
        {/* Hero Section */}
        <section className="bg-white pt-16 pb-12 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="w-full md:w-2/3">
                <h1 className="text-4xl font-display font-bold mb-4">EduMate Blog</h1>
                <p className="text-xl text-gray-700 mb-8">
                  Insights, research, and stories from the intersection of education and technology.
                </p>
                <div className="relative">
                  <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                  <Input 
                    placeholder="Search articles..." 
                    className="pl-10 pr-4 py-6 rounded-md w-full md:w-3/4"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/3 bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Popular Categories</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <Link 
                      key={index}
                      to="#" 
                      className="bg-white px-4 py-2 rounded-full text-sm border hover:border-edtech-blue hover:text-edtech-blue transition-colors"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Latest Articles */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-display font-bold mb-12">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm transition-transform hover:shadow-md hover:-translate-y-1">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute bottom-0 left-0 bg-edtech-blue text-white text-xs font-medium px-3 py-1">
                      {post.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      <Link to="#" className="hover:text-edtech-blue transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-700 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <div className="flex items-center mr-4">
                        <User size={16} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {post.date}
                      </div>
                    </div>
                    <Link 
                      to="#" 
                      className="inline-flex items-center text-edtech-blue hover:text-blue-700 font-medium"
                    >
                      Read more
                      <ArrowRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button variant="outline" className="border-edtech-blue text-edtech-blue">
                Load more articles
              </Button>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-display font-bold mb-4">Stay Updated</h2>
              <p className="text-blue-100 mb-8">
                Subscribe to our newsletter to receive the latest insights and updates from our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Your email address" 
                  type="email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200"
                />
                <Button className="bg-white text-blue-700 hover:bg-blue-50">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
