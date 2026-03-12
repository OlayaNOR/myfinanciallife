"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import ProfileSideBar from "../../components/financial-records/records-sidebar";

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <main className="min-h-screen flex flex-col">

      <DashboardHeader />

      <div className="flex flex-1">

        <ProfileSideBar />

        <div className="flex-1 p-8">
          {children}
        </div>

      </div>

    </main>
  );
}