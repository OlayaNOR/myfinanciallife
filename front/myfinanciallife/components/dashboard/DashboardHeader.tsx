"use client";

import { User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ui/theme-toggle";
import Link from "next/link";

export default function DashboardHeader() {

  const router = useRouter();

  const backToLogin = async () => {
        router.push("/login");
    };

  return (
    <header className="flex justify-between items-center p-6 border-b">

      {/* Left side */}
      <div className="flex items-center gap-8">

        <h1 className="text-2xl font-bold">
          My Financial Life
        </h1>

        <nav className="flex gap-6 text-sm">

          <Link
            href="/dashboard"
            className="hover:text-primary"
          >
            Dashboard
          </Link>

          <Link
            href="/financial-records"
            className="hover:text-primary"
          >
            Financial Records
          </Link>

        </nav>

      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">

        <ThemeToggle />

        <div className="flex items-center gap-2 cursor-pointer">
          <User size={20}/>
          <span>Profile</span>
        </div>

        <button className="flex items-center gap-2 text-red-500">
          <LogOut size={18}/>
          Logout
        </button>

      </div>

    </header>
  );
}