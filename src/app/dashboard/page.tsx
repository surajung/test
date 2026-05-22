const cards = [
  { label: "Total Users", value: "1,024" },
  { label: "Requests Today", value: "8,441" },
  { label: "Error Rate", value: "0.12%" },
];

export default function DashboardPage() {
  return (
    <main className="apple-tile tile-light">
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Dashboard
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-zinc-700 sm:text-2xl">
          Static monitoring surface for external rendering and latency checks.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {cards.map((card, idx) => (
            <article
              key={card.label}
              className={`${idx % 2 === 0 ? "tile-parchment" : "tile-dark-2"} rounded-3xl p-6`}
            >
              <p className="text-sm opacity-80">{card.label}</p>
              <p className="mt-3 text-3xl font-semibold tracking-tight">{card.value}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
