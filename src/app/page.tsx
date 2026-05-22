const highlights = [
  {
    title: "외부 접속 확인",
    body: "도메인 매핑, 터널 연결, 브라우저 렌더링 상태를 한 화면에서 점검할 수 있습니다.",
  },
  {
    title: "더미 사용자 흐름",
    body: "로그인, 대시보드, 주문, 설정 화면을 통해 FE 라우팅과 레이아웃을 검증합니다.",
  },
  {
    title: "간단한 헬스 체크",
    body: "`/api/health` 엔드포인트로 서비스 도달 가능 여부를 빠르게 확인할 수 있습니다.",
  },
];

const quickLinks = [
  { href: "/login", label: "로그인 화면" },
  { href: "/dashboard", label: "대시보드" },
  { href: "/orders", label: "주문 목록" },
  { href: "/settings", label: "설정" },
  { href: "/api/health", label: "헬스 체크" },
];

export default function Home() {
  return (
    <main>
      <section className="apple-tile tile-light">
        <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--primary)]">
              테스트용 더미 사이트
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">
              한국어 기반 데모 프론트엔드
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700 sm:text-2xl sm:leading-10">
              외부 도메인 매핑, 로컬 배포, 브라우저 확인을 위해 만든 확인용 페이지입니다.
              실제 서비스처럼 보이도록 핵심 화면과 흐름을 간단히 구성했습니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/login" className="apple-pill bg-[var(--primary)] text-white hover:bg-[var(--primary-focus)]">
                로그인 화면 보기
              </a>
              <a href="/dashboard" className="apple-pill border border-[var(--hairline)] bg-white text-[var(--ink)]">
                대시보드 보기
              </a>
            </div>
          </div>

          <aside className="rounded-[2rem] border border-[var(--hairline)] bg-[var(--canvas-parchment)] p-6 shadow-sm">
            <p className="text-sm font-medium text-zinc-500">빠른 확인 항목</p>
            <ul className="mt-5 space-y-4">
              <li>
                <span className="block text-sm text-zinc-500">도메인</span>
                <span className="text-lg font-semibold">test.surajung.com</span>
              </li>
              <li>
                <span className="block text-sm text-zinc-500">배포 방식</span>
                <span className="text-lg font-semibold">npm run deploy:local</span>
              </li>
              <li>
                <span className="block text-sm text-zinc-500">검증 포인트</span>
                <span className="text-lg font-semibold">라우팅 · 렌더링 · API 연결</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="apple-tile tile-parchment">
        <div className="mx-auto w-full max-w-6xl">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">구성 포인트</h2>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {highlights.map((item) => (
              <article key={item.title} className="rounded-[2rem] border border-[var(--hairline)] bg-white p-6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-700">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="apple-tile tile-dark">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.3em] text-[var(--primary-on-dark)]">
                바로가기
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                주요 더미 화면으로 이동
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg">
              화면별로 역할을 나누어 두었기 때문에, 외부 브라우저에서 라우팅과 스타일을 빠르게 확인할 수 있습니다.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-lg font-medium text-white transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
