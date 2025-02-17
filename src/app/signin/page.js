import { Button } from "@/components/ui/button";
import React from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md border border-slate-200 h-80 w-80">
        <h2 className="text-2xl font-semibold text-center mb-16">Sign In</h2>
        <Button className="flex items-center justify-center w-full px-4 py-2 mb-10 text-white rounded-lg">
          <FaGoogle className="mr-2" /> Continue with Google
        </Button>
        <Button variant="outline" className="flex items-center justify-center w-full px-4 py-2  rounded-lg">
          <FaGithub className="mr-2" /> Continue with GitHub
        </Button>
      </div>
    </div>
  );
}

