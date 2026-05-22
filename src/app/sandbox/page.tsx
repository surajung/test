import Link from "next/link";

const sandboxLinks = [
  {
    href: "/sandbox/mobile-keypad",
    title: "Mobile Keypad Test",
    description:
      "Focus numeric input and verify input/CTA position while mobile keyboard is visible.",
  },
  {
    href: "/sandbox/mobile-keypad-sheet",
    title: "Mobile Bottom Sheet Keypad Test",
    description:
      "Open bottom sheet and verify numeric input/CTA position with keyboard.",
  },
];

export default function SandboxHomePage() {
  return (
    <main className="apple-tile tile-light">
      <section className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          Sandbox Home
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-zinc-700 sm:text-2xl">
          Test-only pages are listed here.
        </p>

        <div className="mt-10 grid gap-4">
          {sandboxLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-3xl border border-zinc-200 bg-white p-5 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              <h3 className="text-xl font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-zinc-600">{item.description}</p>
              <p className="mt-3 text-sm text-[var(--primary)]">Open {item.href}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
