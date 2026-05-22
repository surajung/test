export default function Home() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">External Test Landing</h2>
      <p className="text-zinc-700">
        This page is used to verify external access, DNS routing, and simple UI
        rendering from outside network.
      </p>
      <div className="rounded-lg border border-zinc-200 bg-white p-5">
        <h3 className="font-semibold">Verification Checklist</h3>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
          <li>Domain: test.surajung.com</li>
          <li>Status endpoint: /api/health</li>
          <li>Mock login API: /api/mock/login</li>
        </ul>
      </div>
    </section>
  );
}
