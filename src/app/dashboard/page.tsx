const cards = [
  { label: "Total Users", value: "1,024" },
  { label: "Requests Today", value: "8,441" },
  { label: "Error Rate", value: "0.12%" },
];

export default function DashboardPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Dummy Dashboard</h2>
      <p className="text-zinc-700">Static metrics for test rendering.</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card) => (
          <article
            key={card.label}
            className="rounded-lg border border-zinc-200 bg-white p-4"
          >
            <p className="text-sm text-zinc-600">{card.label}</p>
            <p className="mt-2 text-2xl font-semibold">{card.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
