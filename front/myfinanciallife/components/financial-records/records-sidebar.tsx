"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { name: "Incomes", href: "/financial-records/incomes" },
  { name: "Expenses", href: "/financial-records/expenses" },
  { name: "Investments", href: "/financial-records/investments" },
  { name: "Debts", href: "/financial-records/debts" },
]

export default function RecordsSidebar() {

  const pathname = usePathname()

  return (
    <div className="w-56 border-r p-4 space-y-2">

      {links.map((link) => (

        <Link
          key={link.href}
          href={link.href}
          className={`block px-3 py-2 rounded-md text-sm ${
            pathname === link.href
              ? "bg-primary text-white"
              : "hover:bg-muted"
          }`}
        >
          {link.name}
        </Link>

      ))}

    </div>
  )
}