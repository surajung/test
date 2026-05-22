import Link from "next/link";

const sandboxLinks = [
  {
    href: "/sandbox/mobile-keypad",
    title: "모바일 키패드 테스트",
    description: "숫자 인풋 포커스 시 키패드와 CTA 위치를 확인합니다.",
  },
  {
    href: "/sandbox/mobile-keypad-sheet",
    title: "바텀시트 키패드 테스트",
    description: "바텀시트 내부 숫자 인풋/CTA 위치를 확인합니다.",
  },
];

export default function SandboxHomePage() {
  return (
    <main className="apple-tile tile-light">
      <section className="mx-auto w-full max-w-5xl">
        <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          샌드박스 홈
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-zinc-700 sm:text-2xl">
          테스트 전용 페이지 목록입니다.
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
              <p className="mt-3 text-sm text-[var(--primary)]">열기 {item.href}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
