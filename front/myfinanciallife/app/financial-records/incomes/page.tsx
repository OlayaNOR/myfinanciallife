"use client"

import RecordForm from "@/components/financial-records/record-form"
import RecordsTable from "@/components/financial-records/records-table"
import { getIncomes } from "@/services/financialRecordsService"
import { useEffect, useState } from "react"


export default function IncomesPage() {

  const [transactions, setTransactions] = useState([])

  async function loadData() {
    const data = await getIncomes()
    setTransactions(data)
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <div className="space-y-6">

      <RecordForm type="INCOME" />

      <RecordsTable records={transactions} />

    </div>
  )
}