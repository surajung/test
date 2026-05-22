"use client";

import { useState } from "react";

export default function MobileKeypadSheetPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="tile-parchment min-h-[100dvh]">
      <section className="mx-auto w-full max-w-2xl px-4 pb-32 pt-8 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Mobile Bottom Sheet Keypad Test
        </h2>
        <p className="mt-3 text-zinc-700">
          Open the bottom sheet, focus numeric input, and verify input plus CTA
          positioning when the keyboard appears.
        </p>

        <div className="mt-8 space-y-4">
          {Array.from({ length: 16 }).map((_, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-zinc-200 bg-white p-4"
            >
              <h3 className="text-base font-semibold">Dummy Content {idx + 1}</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Repeated blocks create scroll depth for viewport and keyboard
                behavior testing.
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-zinc-200 bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          <button
            onClick={() => setOpen(true)}
            className="h-12 w-full rounded-full bg-[var(--primary)] text-base font-medium text-white hover:bg-[var(--primary-focus)]"
          >
            Open Bottom Sheet
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-white px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-4 sm:px-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mx-auto w-full max-w-2xl">
              <div className="mx-auto mb-3 h-1.5 w-12 rounded-full bg-zinc-300" />
              <h3 className="text-lg font-semibold text-zinc-900">Bottom Sheet Form</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Focus the numeric input to test keyboard overlap behavior.
              </p>

              <label className="mt-4 block text-sm font-medium text-zinc-700">
                Numeric Input
              </label>
              <input
                type="number"
                inputMode="numeric"
                placeholder="Enter number"
                className="mt-2 h-12 w-full rounded-full border border-zinc-300 px-4 text-base"
              />

              <button className="mt-4 h-12 w-full rounded-full bg-[var(--primary)] text-base font-medium text-white hover:bg-[var(--primary-focus)]">
                Continue
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
