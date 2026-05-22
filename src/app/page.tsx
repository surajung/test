const tiles = [
  {
    title: "External Test Landing",
    body: "A photography-first verification surface for checking domain routing, authentication prompts, and endpoint reliability.",
    kind: "tile-light",
  },
  {
    title: "Health Endpoint",
    body: "Use /api/health to confirm tunnel status and backend reachability from external networks.",
    kind: "tile-parchment",
  },
  {
    title: "Mock Flows",
    body: "Login and order APIs are available to validate request handling from clients and QA tools.",
    kind: "tile-dark",
  },
];

export default function Home() {
  return (
    <main>
      {tiles.map((tile) => (
        <section key={tile.title} className={`apple-tile ${tile.kind}`}>
          <div className="mx-auto w-full max-w-6xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {tile.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 opacity-90 sm:text-2xl sm:leading-10">
              {tile.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/api/health"
                className={`apple-pill text-base ${tile.kind === "tile-dark" ? "apple-link-dark" : "apple-link"}`}
              >
                Health API
              </a>
              <a
                href="/orders"
                className={`apple-pill text-base ${tile.kind === "tile-dark" ? "apple-link-dark" : "apple-link"}`}
              >
                View Orders
              </a>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
