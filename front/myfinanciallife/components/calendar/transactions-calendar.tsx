"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin from "@fullcalendar/interaction"
import { addDays, addMonths, format } from "date-fns"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"

export default function TransactionsCalendar({ transactions }: any) {

  const [selectedDate, setSelectedDate] = useState<string | null>(null)

  const normalizeDate = (d: string) => d.split("T")[0]

  // --------------------------
  // BALANCE (income / expense)
  // --------------------------

  const balanceTransactions = transactions.filter(
    (t: any) => t.type === "INCOME" || t.type === "EXPENSE"
  )

  const balancesByDate = balanceTransactions.reduce((acc: any, t: any) => {

    const date = normalizeDate(t.date)

    if (!acc[date]) acc[date] = 0

    if (t.type === "INCOME") acc[date] += t.amount
    else acc[date] -= t.amount

    return acc

  }, {})

  const balanceEvents = Object.entries(balancesByDate).map(([date, balance]: any) => ({
    title: `${balance > 0 ? "+" : ""}$${balance}`,
    start: date,
    color: balance > 0 ? "#16a34a" : "#dc2626"
  }))

  // --------------------------
  // INVESTMENT / DEBT markers
  // --------------------------

  const specialTransactions = transactions.filter(
    (t: any) => t.type === "INVESTMENT" || t.type === "DEBT"
  )

  const specialEvents = specialTransactions.map((t: any) => ({
    title: `${t.type === "INVESTMENT" ? "📈" : "💳"} ${t.description}`,
    start: normalizeDate(t.date),
    color: t.type === "INVESTMENT" ? "#2563eb" : "#9333ea"
  }))

  // --------------------------
  // INVESTMENT END EVENTS
  // --------------------------

  const investmentEvents = transactions
    .filter((t: any) => t.type === "INVESTMENT")
    .map((inv: any) => {

      const startDate = new Date(inv.date)
      const endDate = addDays(startDate, inv.days || 0)

      return {
        title: `End of ${inv.description} investment`,
        start: format(endDate, "yyyy-MM-dd"),
        type: "INVESTMENT_END"
      }
    })

  // --------------------------
  // DEBT PAYMENTS
  // --------------------------

  const debtEvents = transactions
    .filter((t: any) => t.type === "DEBT")
    .flatMap((debt: any) => {

      const startDate = new Date(debt.date)

      return Array.from({ length: debt.paymentPeriod || 0 }, (_, i) => {

        const paymentDate = addMonths(startDate, i + 1)

        return {
          title: `Payment for ${debt.description}`,
          start: format(paymentDate, "yyyy-MM-dd"),
          type: "DEBT_PAYMENT"
        }

      })
    })

  const calendarEvents = [
    ...balanceEvents,
    ...specialEvents,
    ...investmentEvents,
    ...debtEvents
  ]

  // --------------------------
  // EVENTS FOR DIALOG
  // --------------------------

  const transactionsOfDay = selectedDate
    ? transactions.filter((t: any) => normalizeDate(t.date) === selectedDate)
    : []

  const derivedEventsOfDay = selectedDate
    ? [...investmentEvents, ...debtEvents].filter(
        (e: any) => e.start === selectedDate
      )
    : []

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
        events={calendarEvents}

        dateClick={(info) => {
          setSelectedDate(info.dateStr)
        }}

        eventClick={(info) => {
          setSelectedDate(info.event.startStr)
        }}

        height="auto"
      />

      <Dialog open={!!selectedDate} onOpenChange={() => setSelectedDate(null)}>

        <DialogContent>

          <DialogHeader>
            <DialogTitle>
              Events - {selectedDate}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-3 mt-4">

            {transactionsOfDay.length === 0 && derivedEventsOfDay.length === 0 && (
              <p className="text-sm text-muted-foreground">
                No events this day
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

            {derivedEventsOfDay.map((e: any, i: number) => (

              <div
                key={i}
                className={
                  e.type === "INVESTMENT_END"
                    ? "border rounded-lg p-3 text-blue-600 bg-blue-50"
                    : "border rounded-lg p-3 text-purple-600 bg-purple-50"
                }
              >
                {e.title}
              </div>

            ))}

          </div>

        </DialogContent>

      </Dialog>

    </div>
  )
}