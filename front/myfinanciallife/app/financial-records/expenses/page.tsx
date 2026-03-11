"use client"

import RecordForm from "@/components/financial-records/record-form"
import RecordsTable from "@/components/financial-records/records-table"
import { getExpenses } from "@/services/financialRecordsService"
import { useEffect, useState } from "react"


export default function IncomesPage() {

  const [transactions, setTransactions] = useState([])

  async function loadData() {
    const data = await getExpenses()
    setTransactions(data)
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <div className="space-y-6">

      <RecordForm type="EXPENSE" />

      <RecordsTable records={transactions} />

    </div>
  )
}