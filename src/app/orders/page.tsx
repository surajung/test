const rows = [
  { id: "ORD-1001", status: "Paid", amount: "$120.00" },
  { id: "ORD-1002", status: "Pending", amount: "$68.50" },
  { id: "ORD-1003", status: "Failed", amount: "$44.90" },
];

export default function OrdersPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Dummy Orders</h2>
      <p className="text-zinc-700">Simple table for API/UI connection tests.</p>
      <div className="overflow-hidden rounded-lg border border-zinc-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-100 text-zinc-700">
            <tr>
              <th className="px-4 py-3">Order ID</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-t border-zinc-200">
                <td className="px-4 py-3">{row.id}</td>
                <td className="px-4 py-3">{row.status}</td>
                <td className="px-4 py-3">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
