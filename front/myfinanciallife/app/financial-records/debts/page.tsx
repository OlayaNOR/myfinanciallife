"use client"

import RecordForm from "@/components/financial-records/record-form"
import RecordsTable from "@/components/financial-records/records-table"
import { getDebts } from "@/services/financialRecordsService"
import { useEffect, useState } from "react"

export default function DebtsPage() {

  const [records, setRecords] = useState<any[]>([])

  async function loadData() {
    try {
      const data = await getDebts()
      setRecords(data)
    } catch (error) {
      console.error("Error loading debts:", error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className="space-y-6">

      <RecordForm
        type="DEBT"
        onSuccess={loadData}
      />

      <RecordsTable
        records={records}
        type="DEBT"
      />

    </div>
  )
}