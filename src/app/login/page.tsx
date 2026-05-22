export default function LoginPage() {
  return (
    <main className="apple-tile tile-parchment">
      <section className="mx-auto w-full max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">로그인</h2>
        <p className="mt-4 text-lg leading-8 text-zinc-700 sm:text-2xl">
          외부 UI와 인증 흐름을 점검하기 위한 더미 접근 화면입니다.
        </p>
        <form className="mx-auto mt-10 grid w-full max-w-md gap-3 rounded-2xl border border-[var(--hairline)] bg-white p-5 text-left sm:p-6">
          <label className="grid gap-2 text-sm font-medium text-zinc-700">
            이메일
          <input
            className="h-11 rounded-full border border-zinc-300 px-4"
            type="email"
            placeholder="demo@surajung.com"
          />
          </label>
          <label className="grid gap-2 text-sm font-medium text-zinc-700">
            비밀번호
          <input
            className="h-11 rounded-full border border-zinc-300 px-4"
            type="password"
            placeholder="password123"
          />
          </label>
          <button
            type="button"
            className="h-11 rounded-full bg-[var(--primary)] text-white hover:bg-[var(--primary-focus)]"
          >
            계속하기
          </button>
        </form>
      </section>
    </main>
  );
}
