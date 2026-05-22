export default function MobileKeypadPage() {
  return (
    <main className="tile-parchment min-h-[100dvh]">
      <section className="mx-auto w-full max-w-2xl px-4 pb-32 pt-8 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          모바일 키패드 위치 테스트
        </h2>
        <p className="mt-3 text-zinc-700">
          하단까지 스크롤한 뒤 숫자 인풋에 포커스하세요. 키패드가 올라왔을 때
          인풋과 고정 CTA 버튼 위치를 확인하는 목적입니다.
        </p>

        <div className="mt-8 space-y-4">
          {Array.from({ length: 16 }).map((_, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-zinc-200 bg-white p-4"
            >
              <h3 className="text-base font-semibold">더미 컨텐츠 {idx + 1}</h3>
              <p className="mt-1 text-sm text-zinc-600">
                키패드 노출 시 뷰포트 동작 테스트를 위해 스크롤 길이를 만드는
                반복 블록입니다.
              </p>
            </article>
          ))}
        </div>

        <section className="mt-6 rounded-2xl border border-zinc-200 bg-white p-4">
          <label className="block text-sm font-medium text-zinc-700">
            숫자 입력 (스크롤 하단)
          </label>
          <input
            type="number"
            inputMode="numeric"
            placeholder="숫자를 입력하세요"
            className="mt-2 h-12 w-full rounded-full border border-zinc-300 px-4 text-base"
          />
        </section>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-zinc-200 bg-white/95 px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur sm:px-6">
        <div className="mx-auto w-full max-w-2xl">
          <button className="h-12 w-full rounded-full bg-[var(--primary)] text-base font-medium text-white hover:bg-[var(--primary-focus)]">
            계속
          </button>
        </div>
      </div>
    </main>
  );
}
