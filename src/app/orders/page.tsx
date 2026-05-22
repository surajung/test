const rows = [
  { id: "ORD-1001", status: "Paid", amount: "$120.00" },
  { id: "ORD-1002", status: "Pending", amount: "$68.50" },
  { id: "ORD-1003", status: "Failed", amount: "$44.90" },
];

export default function OrdersPage() {
  return (
    <main className="apple-tile tile-dark">
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Orders
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-zinc-200 sm:text-2xl">
          Mock order stream used to validate table rendering and API handshake.
        </p>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-zinc-700 bg-zinc-900">
          <table className="min-w-[560px] w-full text-left text-sm text-zinc-100">
            <thead className="border-b border-zinc-700 text-zinc-300">
              <tr>
                <th className="px-5 py-4 font-medium">Order ID</th>
                <th className="px-5 py-4 font-medium">Status</th>
                <th className="px-5 py-4 font-medium">Amount</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-zinc-800">
                  <td className="px-5 py-4">{row.id}</td>
                  <td className="px-5 py-4">{row.status}</td>
                  <td className="px-5 py-4">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
