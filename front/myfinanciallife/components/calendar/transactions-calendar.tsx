"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

export default function TransactionsCalendar({ transactions }: any) {

  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const balanceTransactions = transactions.filter(
    (t: any) => t.type === "INCOME" || t.type === "EXPENSE"
  )

  const specialTransactions = transactions.filter(
    (t: any) => t.type === "INVESTMENT" || t.type === "DEBT"
  )

  const transactionsOfDay = selectedDate
    ? transactions.filter((t: any) => t.date.split("T")[0] === selectedDate)
    : []

  const balancesByDate = balanceTransactions.reduce((acc: any, t: any) => {

    const date = t.date.split("T")[0]

    if (!acc[date]) {
      acc[date] = 0
    }

    if (t.type === "INCOME") {
      acc[date] += t.amount
    } else{
      acc[date] -= t.amount
    }

    return acc

}, {})

  
  const balanceEvents = Object.entries(balancesByDate).map(([date, balance]: any) => ({
    title: `${balance > 0 ? "+" : ""}$${balance}`,
    date,
    color: balance > 0 ? "#16a34a" : "#dc2626"
  }))

  const specialEvents = specialTransactions.map((t: any) => ({
    title: `${t.type === "INVESTMENT" ? "📈" : "💳"} ${t.description}`,
    date: t.date.split("T")[0],
    color: t.type === "INVESTMENT" ? "#2563eb" : "#9333ea"
  }))

  const events = [...balanceEvents, ...specialEvents]

  return (
    <div className="border rounded-xl p-4">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay"
        }}
        events={events}
        eventClick={(info) => {
          setSelectedDate(info.event.startStr)
        }}
        height="auto"
      />
      <Dialog open={!!selectedDate} onOpenChange={() => setSelectedDate(null)}>
        <DialogContent>

          <DialogHeader>
            <DialogTitle>
              Transactions - {selectedDate}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3 mt-4">

            {transactionsOfDay.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No transactions this day
              </p>
            )}

            {transactionsOfDay.map((t: any) => (
              <div
                key={t.id}
                className="flex justify-between items-center border rounded-lg p-3"
              >
                <span>{t.description}</span>

                <span
                  className={
                    t.type === "INCOME"
                      ? "text-green-600 font-semibold"
                      : t.type === "EXPENSE"
                      ? "text-red-600 font-semibold"
                      : t.type === "INVESTMENT"
                      ? "text-blue-600 font-semibold"
                      : "text-purple-600 font-semibold"
                  }
                >
                  {t.type === "INCOME" && `+$${t.amount}`}
                  {t.type === "EXPENSE" && `-$${t.amount}`}
                  {t.type === "INVESTMENT" && `📈 $${t.amount}`}
                  {t.type === "DEBT" && `💳 $${t.amount}`}
                </span>
              </div>
            ))}

          </div>

        </DialogContent>
      </Dialog>
    </div>
  )
}