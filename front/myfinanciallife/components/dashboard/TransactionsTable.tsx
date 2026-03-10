export default function TransactionsTable() {

  const transactions = [
    { id: 1, description: "Salary", amount: 3000, type: "Income" },
    { id: 2, description: "Groceries", amount: -120, type: "Expense" },
    { id: 3, description: "Stock investment", amount: -500, type: "Investment" }
  ];

  return (
    <div className="mt-10">

      <h2 className="text-xl font-semibold mb-4">
        My last transactions
      </h2>

      <div className="border rounded-xl overflow-hidden">

        <table className="w-full text-left">

          <thead className="border-b">
            <tr>
              <th className="p-4">Description</th>
              <th className="p-4">Type</th>
              <th className="p-4">Amount</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((t) => (
              <tr key={t.id} className="border-b">
                <td className="p-4">{t.description}</td>
                <td className="p-4">{t.type}</td>
                <td className="p-4">{t.amount}</td>
              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}