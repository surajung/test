export default function MobileKeypadPage() {
  return (
    <main className="tile-parchment min-h-[100dvh]">
      <section className="mx-auto w-full max-w-2xl px-4 pb-32 pt-8 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Mobile Keypad Position Test
        </h2>
        <p className="mt-3 text-zinc-700">
          Scroll down and focus the numeric input near the end of dummy content.
          Verify input position and fixed CTA position when the keyboard appears.
        </p>

        <div className="mt-8 space-y-4">
          {Array.from({ length: 16 }).map((_, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-zinc-200 bg-white p-4"
            >
              <h3 className="text-base font-semibold">Dummy Content {idx + 1}</h3>
              <p className="mt-1 text-sm text-zinc-600">
                This block is intentionally repeated to create scroll depth for
                virtual keyboard positioning tests.
              </p>
            </article>
          ))}
        </div>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4">
          <label className="block text-sm font-medium text-zinc-700">
            Numeric Input (scroll bottom)
          </label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="Enter number"
            className="mt-2 h-12 w-full rounded-full border border-zinc-300 px-4 text-base"
          />
        </section>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-zinc-200 bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          <button className="h-12 w-full rounded-full bg-[var(--primary)] text-base font-medium text-white hover:bg-[var(--primary-focus)]">
            Continue
          </button>
        </div>
      </div>
    </main>
  );
}
