export default function LoginPage() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Dummy Login</h2>
      <p className="text-zinc-700">UI only page for external visual checks.</p>
      <form className="grid max-w-md gap-3 rounded-lg border border-zinc-200 bg-white p-5">
        <input
          className="rounded-md border border-zinc-300 px-3 py-2"
          type="email"
          placeholder="demo@surajung.com"
        />
        <input
          className="rounded-md border border-zinc-300 px-3 py-2"
          type="password"
          placeholder="********"
        />
        <button
          type="button"
          className="rounded-md bg-zinc-900 px-4 py-2 text-white"
        >
          Sign In
        </button>
      </form>
    </section>
  );
}
