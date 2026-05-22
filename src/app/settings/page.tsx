export default function SettingsPage() {
  return (
    <main className="apple-tile tile-parchment">
      <section className="mx-auto w-full max-w-3xl">
        <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Settings
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-zinc-700 sm:text-2xl">
          Configurator-style controls for interaction and viewport verification.
        </p>
        <div className="mx-auto mt-10 grid w-full max-w-xl gap-4 rounded-3xl bg-white p-5 sm:p-6">
          <label className="grid gap-2 text-sm">
            <span className="font-medium">Environment Name</span>
            <input
              className="h-11 rounded-full border border-zinc-300 px-4"
              defaultValue="test-sandbox"
            />
          </label>
          <label className="grid gap-2 text-sm">
            <span className="font-medium">Region</span>
            <select className="h-11 rounded-full border border-zinc-300 px-4">
              <option>ap-northeast-2</option>
              <option>us-west-1</option>
            </select>
          </label>
          <button className="mt-2 h-11 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-focus)]">
            Save
          </button>
        </div>
      </section>
    </main>
  );
}
