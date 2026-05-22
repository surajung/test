const cards = [
  { label: "전체 사용자", value: "1,024명" },
  { label: "오늘 요청 수", value: "8,441건" },
  { label: "오류율", value: "0.12%" },
];

export default function DashboardPage() {
  return (
    <main className="apple-tile tile-light">
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          대시보드
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-zinc-700 sm:text-2xl">
          외부 렌더링과 지연 시간 확인을 위한 정적 모니터링 화면입니다.
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
