"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardCards from "@/components/dashboard/DashboardCards";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import DashboardFooter from "@/components/dashboard/DashboardFooter";

export default function DashboardPage() {

  const user = {
    name: "Nicolas"
  };

  return (
    <main className="min-h-screen flex flex-col">

      <DashboardHeader />

      <div className="max-w-6xl mx-auto w-full px-6">

        <h1 className="text-3xl font-bold mt-8">
          Hello {user.name}
        </h1>

        <DashboardCards />

        <TransactionsTable />

      </div>

      <DashboardFooter />

    </main>
  );
}