"use client"

import { getLastTransactions } from "@/services/dashboardService"
import { createFinancialRecord } from "@/services/financialRecordsService"
import { useState } from "react"

export default function RecordForm({ type }: any) {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [profitRate, setProfitRate] = useState("")
  const [paymentPeriod, setPaymentPeriod] = useState("")
  const [days, setDays] = useState("")

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    const payload: any = {
      description,
      amount: Number(amount),
      date,
      type,
      category
    }

    if (type === "INVESTMENT") {
      payload.profitRate = Number(profitRate)
      payload.days = Number(days)
    }

    if (type === "DEBT") {
      payload.interestRate = Number(interestRate)
      payload.paymentPeriod = Number(paymentPeriod)
    }

    try {

      await createFinancialRecord(payload)
      window.location.reload()
      alert("Transaction created")
      

    } catch (error) {

      console.error(error)
      alert("Error creating transaction")

    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border rounded-xl p-6 space-y-4 max-w-lg"
    >

      <h2 className="text-lg font-semibold">
        Create {type}
      </h2>

      <input
        placeholder="Description"
        className="w-full border rounded-md px-3 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        className="w-full border rounded-md px-3 py-2"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <input
        type="date"
        className="w-full border rounded-md px-3 py-2"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <input
        placeholder="Category"
        className="w-full border rounded-md px-3 py-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      {type === "DEBT" && (
        <>
          <input
            type="number"
            placeholder="Interest Rate"
            className="w-full border rounded-md px-3 py-2"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
          />

          <input
            type="number"
            placeholder="Payment Period"
            className="w-full border rounded-md px-3 py-2"
            value={paymentPeriod}
            onChange={(e) => setPaymentPeriod(e.target.value)}
          />
        </>
      )}

      {type === "INVESTMENT" && (
        <>
          <input
            type="number"
            placeholder="Profit Rate"
            className="w-full border rounded-md px-3 py-2"
            value={profitRate}
            onChange={(e) => setProfitRate(e.target.value)}
          />

          <input
            type="number"
            placeholder="Days"
            className="w-full border rounded-md px-3 py-2"
            value={days}
            onChange={(e) => setDays(e.target.value)}
          />
        </>
      )}
      <br />
      <button className="bg-primary text-white px-4 py-2 rounded-md">
        Create
      </button>

    </form>
  )
}