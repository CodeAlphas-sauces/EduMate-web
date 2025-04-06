
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AdminPanel from "@/components/admin/AdminPanel";

const Admin = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-display font-bold mb-8">
            Admin Dashboard
          </h1>
          
          <AdminPanel />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;
