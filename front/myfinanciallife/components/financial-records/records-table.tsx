"use client"

import { useState } from "react"
import { getInvestmentDetails, getDebtDetails } from "@/services/financialRecordsService"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

export default function RecordsTable({ records }: any) {

  const [selectedRecord, setSelectedRecord] = useState<any>(null)
  const [details, setDetails] = useState<any>(null)
  const [dialogOpen, setDialogOpen] = useState(false)

  const handleOpenDialog = async (record: any) => {

    setDetails(null)
    setSelectedRecord(record)
    setDialogOpen(true)

    try {

      let data

      if (record.type === "INVESTMENT") {
        data = await getInvestmentDetails(record.id)
      } 
      else if (record.type === "DEBT") {
        data = await getDebtDetails(record.id)
      } 
      else if (record.type === "INCOME" || record.type === "EXPENSE") {
        data = record
      }

      setDetails(data)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <div className="border rounded-xl p-4 mt-6">

        <table className="w-full text-sm">

          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Description</th>
              <th className="text-left p-2">Amount</th>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Category</th>
            </tr>
          </thead>

          <tbody>

            {records.map((r: any) => (
              <tr
                key={r.id}
                className="cursor-pointer hover:bg-muted"
                onClick={() => handleOpenDialog(r)}
              >

                <td className="p-2">{r.description}</td>
                <td className="p-2">${r.amount}</td>
                <td className="p-2">{r.date}</td>
                <td className="p-2">{r.category}</td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>

        <DialogContent aria-describedby={undefined}>

          <DialogHeader>
            <DialogTitle>
              {selectedRecord?.description}
            </DialogTitle>
          </DialogHeader>

          {details ? (

            <div className="space-y-3 text-sm">

              {selectedRecord?.type === "INCOME" || selectedRecord?.type === "EXPENSE" && details && (

                <div className="space-y-3">

                  <div className="flex justify-between">
                    <span>Description</span>
                    <span>{details.description}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Amount</span>
                    <span className="text-green-600 font-semibold">
                      +${details.amount}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Date</span>
                    <span>{details.date}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Category</span>
                    <span>{details.category}</span>
                  </div>

                </div>

              )}

              {selectedRecord?.type === "DEBT" && details && (

                <div className="space-y-3">

                  <div className="flex justify-between">
                    <span>Principal</span>
                    <span>${details.amount}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Interest rate</span>
                    <span>{details.interestRate}%</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Payment Period</span>
                    <span>{details.paymentPeriod}</span>
                  </div>

                  <div className="flex justify-between font-semibold text-red-600">
                    <span>Monthly Payment</span>
                    <span>${details.monthlyPayment}</span>
                  </div>

                  <div className="flex justify-between font-semibold text-red-600">
                    <span>Total to pay</span>
                    <span>${details.totalPayment}</span>
                  </div>

                </div>

              )}

              {selectedRecord?.type === "INVESTMENT" && details && (

                <div className="space-y-3">

                  <div className="flex justify-between">
                    <span>Amount invested</span>
                    <span>${details.amount}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Profit rate</span>
                    <span>{details.profitRate}%</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Days</span>
                    <span>{details.days}</span>
                  </div>

                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Profit</span>
                    <span>${details.totalProfit}</span>
                  </div>

                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Profit Rate</span>
                    <span>${details.profitRate}</span>
                  </div>

                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Total Amount</span>
                    <span>${details.totalAmount}</span>
                  </div>

                </div>

              )}

            </div>

          ) : (

            <p className="text-sm text-muted-foreground">
              Loading calculation...
            </p>

          )}

        </DialogContent>

      </Dialog>
    </>
  )
}