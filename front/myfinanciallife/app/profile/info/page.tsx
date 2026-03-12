"use client";

import { useEffect, useState } from "react";
import { getCurrentUser } from "@/services/userService";
import TransactionsCalendar from "@/components/calendar/transactions-calendar"
import { getMyTransactions } from "@/services/financialRecordsService"

export default function ProfileInfoPage() {

  const [user, setUser] = useState<any>(null);
  const [transactions, setTransactions] = useState([])


  useEffect(() => {
    async function loadUser() {
    const data = await getCurrentUser();
    setUser(data);
  }

  async function loadData() {
    const data = await getMyTransactions()
    setTransactions(data)
  }

    loadUser();
    loadData();
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="space-y-6">

      {/* Card de información */}
      <div className="max-w-md border rounded-xl p-6">

        <div className="flex items-center gap-4 mb-4">

          <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center font-bold">
            {user.name[0]}
          </div>

          <div>
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <p className="text-sm text-muted-foreground">
              Member since: {user.signDate}
            </p>
          </div>

        </div>

      </div>

      {/* Calendario */}
      <TransactionsCalendar transactions={transactions} />

    </div>
  );
}