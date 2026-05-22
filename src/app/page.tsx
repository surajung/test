const tiles = [
  {
    title: "외부 테스트 랜딩",
    body: "도메인 라우팅, 인증 노출, API 상태를 외부 네트워크에서 확인하기 위한 검증 페이지입니다.",
    kind: "tile-light",
  },
  {
    title: "헬스 체크 엔드포인트",
    body: "/api/health 호출로 터널 연결 상태와 백엔드 도달 여부를 확인할 수 있습니다.",
    kind: "tile-parchment",
  },
  {
    title: "목업 플로우",
    body: "로그인/주문 API를 사용해 클라이언트 요청 처리 및 화면 연동 테스트를 수행합니다.",
    kind: "tile-dark",
  },
];

export default function Home() {
  return (
    <main>
      {tiles.map((tile) => (
        <section key={tile.title} className={`apple-tile ${tile.kind}`}>
          <div className="mx-auto w-full max-w-6xl text-center">
            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {tile.title}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 opacity-90 sm:text-2xl sm:leading-10">
              {tile.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/api/health"
                className={`apple-pill text-base ${tile.kind === "tile-dark" ? "apple-link-dark" : "apple-link"}`}
              >
                헬스 API 확인
              </a>
              <a
                href="/orders"
                className={`apple-pill text-base ${tile.kind === "tile-dark" ? "apple-link-dark" : "apple-link"}`}
              >
                주문 화면 보기
              </a>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
