interface Props {
  metrics: any;
}

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { formatCurrency } from "@/lib/formatCurrency";

export default function DashboardCards({ metrics }: Props) {

  const cards = [
    { title: "My Incomes", value: metrics.totalIncome },
    { title: "My Expenses", value: metrics.totalExpense },
    { title: "Balance", value: metrics.balance },
    { title: "Transactions", value: metrics.totalTransactions },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">

      {cards.map((card, index) => (
        <div
          key={index}
          className="p-6 rounded-xl border bg-card shadow-sm"
        >
          <h3 className="text-sm text-muted-foreground flex items-center gap-2">

            {card.title}

            {card.title === "Balance" && (
              <TooltipProvider>
                <Tooltip>

                  <TooltipTrigger asChild>
                    <button className="text-xs border rounded-full w-5 h-5 flex items-center justify-center">
                      ?
                    </button>
                  </TooltipTrigger>

                  <TooltipContent>
                    Balance = Incomes - Expenses
                  </TooltipContent>

                </Tooltip>
              </TooltipProvider>
            )}

          </h3>
          <p className="text-2xl font-bold mt-2">
            {card.title === "Transactions" ? card.value : formatCurrency(card.value)}
          </p>
        </div>
      ))}

    </div>
  );
}