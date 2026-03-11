"use client"

import { useState } from "react"

export default function RecordForm({ type }: any) {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const [date, setDate] = useState("")
  const [category, setCategory] = useState("")

  const handleSubmit = (e: any) => {
    e.preventDefault()

    const payload = {
      description,
      amount,
      date,
      category,
      type
    }

    console.log(payload)
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

      <button className="bg-primary text-white px-4 py-2 rounded-md">
        Create
      </button>

    </form>
  )
}