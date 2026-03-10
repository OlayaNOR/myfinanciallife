"use client";

import { User, LogOut } from "lucide-react";
import ThemeToggle from "@/components/ui/theme-toggle";

export default function DashboardHeader() {

  return (
    <header className="flex justify-between items-center p-6 border-b">

      {/* Left */}
      <h1 className="text-2xl font-bold">
        My Financial Life
      </h1>

      {/* Right */}
      <div className="flex items-center gap-6">

        <ThemeToggle />
        
        <div className="flex items-center gap-2 cursor-pointer">
          <User size={20} />
          <span>Profile</span>
        </div>

        <button className="flex items-center gap-2 text-red-500 hover:text-red-400 cursor-pointer">
          <LogOut size={18} />
          Logout
        </button>

      </div>

    </header>
  );
}