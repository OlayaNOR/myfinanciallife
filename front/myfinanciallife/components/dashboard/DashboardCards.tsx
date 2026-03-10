import { title } from "process";

export default function DashboardCards() {

  const cards = [
    { title: "My Incomes", value: "$0" },
    { title: "My Expenses", value: "$0" },
    { title: "My Investments", value: "$0" },
    { title: "My Debts", value: "$0" },
    { title: "Balance", value: "$0" },
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
            {card.value}
          </p>
        </div>
      ))}

    </div>
  );
}