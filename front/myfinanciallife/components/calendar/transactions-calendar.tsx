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
  const balancesByDate = transactions.reduce((acc: any, t: any) => {
    const date = t.date.split("T")[0]

    if (!acc[date]) {
      acc[date] = 0
    }

    if (t.type === "INCOME") {
      acc[date] += t.amount
    } else {
      acc[date] -= t.amount
    }

    return acc

  }, {})

  const transactionsOfDay = transactions.filter((t: any) => {
    return t.date.split("T")[0] === selectedDate
  })

  const events = Object.entries(balancesByDate).map(([date, balance]: any) => ({
    title: `${balance > 0 ? "+" : ""}$${balance.toLocaleString()}`,
    date,
    color: balance > 0 ? "#16a34a" : "#dc2626"
  }))

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
        height="auto"
        eventClick={(info) => {
          setSelectedDate(info.event.startStr)
        }}
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
                      : "text-red-600 font-semibold"
                  }
                >
                  {t.type === "INCOME" ? "+" : "-"}${t.amount}
                </span>
              </div>
            ))}

          </div>

        </DialogContent>
      </Dialog>
    </div>
  )
}