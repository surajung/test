export default function LoginPage() {
  return (
    <main className="apple-tile tile-parchment">
      <section className="mx-auto w-full max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">Sign in</h2>
        <p className="mt-4 text-lg leading-8 text-zinc-700 sm:text-2xl">
          Dummy access screen for external UI and auth prompt checks.
        </p>
        <form className="mx-auto mt-10 grid w-full max-w-md gap-3 rounded-2xl border border-[var(--hairline)] bg-white p-5 text-left sm:p-6">
          <input
            className="h-11 rounded-full border border-zinc-300 px-4"
            type="email"
            placeholder="demo@surajung.com"
          />
          <input
            className="h-11 rounded-full border border-zinc-300 px-4"
            type="password"
            placeholder="password123"
          />
          <button
            type="button"
            className="h-11 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-focus)]"
          >
            Continue
          </button>
        </form>
      </section>
    </main>
  );
}
