"use client";

import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardCards from "@/components/dashboard/DashboardCards";
import TransactionsTable from "@/components/dashboard/TransactionsTable";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import { useEffect, useState } from "react";
import { getCurrentUser } from "@/services/userService";
import { getDashboardMetrics, getExpensesByCategory, getLastTransactions } from "@/services/dashboardService";
import IncomeExpenseChart from "@/components/dashboard/IncomeExpenseChart";
import ExpensesByCategoryChart from "@/components/dashboard/ExpensesByCategoryChart";

export default function DashboardPage() {

  const [user, setUser] = useState<any>(null);
  const [metrics, setMetrics] = useState<any>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [expensesByCategory, setExpensesByCategory] = useState<any[]>([]);

  useEffect(() => {

    async function loadData() {

      const userData = await getCurrentUser();
      const dashboardData = await getDashboardMetrics();
      const transactionsData = await getLastTransactions();
      const categoryData = await getExpensesByCategory();

      setExpensesByCategory(categoryData);
      setUser(userData);
      setMetrics(dashboardData);
      setTransactions(transactionsData);

    }

    loadData();

  }, []);

  if (!user || !metrics) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading dashboard...
      </div>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">

      <DashboardHeader />

      <div className="max-w-6xl mx-auto w-full px-6">

        <h1 className="text-3xl font-bold mt-8">
          Hello {user.name}!!
        </h1>

        <DashboardCards metrics={metrics}/>

        <IncomeExpenseChart
          incomes={metrics.totalIncome}
          expenses={metrics.totalExpense}
        />
        
        <ExpensesByCategoryChart
          data={expensesByCategory}
        />

        <TransactionsTable transactions={transactions}/>

      </div>

      <DashboardFooter />

    </main>
  );
}