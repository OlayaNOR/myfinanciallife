interface Props {
  metrics: any;
}

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
          <h3 className="text-sm text-muted-foreground">
            {card.title}
          </h3>
          <p className="text-2xl font-bold mt-2">
            {card.title === "Transactions" ? card.value : `$${card.value}`}
          </p>
        </div>
      ))}

    </div>
  );
}