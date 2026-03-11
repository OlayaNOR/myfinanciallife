"use client"

import RecordForm from "@/components/financial-records/record-form"
import RecordsTable from "@/components/financial-records/records-table"
import { getDebts } from "@/services/financialRecordsService"
import { useState } from "react"


export default function IncomesPage() {

  const [transactions, setTransactions] = useState([])

  async function loadData() {
    const data = await getDebts()
    setTransactions(data)
  }

  loadData();
  return (
    <div className="space-y-6">

      <RecordForm type="DEBT" />

      <RecordsTable records={transactions} />

    </div>
  )
}