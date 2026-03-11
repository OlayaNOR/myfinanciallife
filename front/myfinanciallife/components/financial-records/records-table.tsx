export default function RecordsTable({ records }: any) {

  return (
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
            <tr key={r.id} className="border-b">

              <td className="p-2">{r.description}</td>
              <td className="p-2">${r.amount}</td>
              <td className="p-2">{r.date}</td>
              <td className="p-2">{r.category}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}