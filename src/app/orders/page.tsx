const rows = [
  { id: "ORD-1001", status: "결제 완료", amount: "₩120,000" },
  { id: "ORD-1002", status: "대기 중", amount: "₩68,500" },
  { id: "ORD-1003", status: "실패", amount: "₩44,900" },
];

export default function OrdersPage() {
  return (
    <main className="apple-tile tile-dark">
      <section className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-4xl font-semibold tracking-tight sm:text-5xl">
          주문 목록
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-8 text-zinc-200 sm:text-2xl">
          테이블 렌더링과 API 연동을 확인하기 위한 더미 주문 스트림입니다.
        </p>
        <div className="mt-10 overflow-x-auto rounded-3xl border border-zinc-700 bg-zinc-900">
          <table className="min-w-[560px] w-full text-left text-sm text-zinc-100">
            <thead className="border-b border-zinc-700 text-zinc-300">
              <tr>
                <th className="px-5 py-4 font-medium">주문 번호</th>
                <th className="px-5 py-4 font-medium">상태</th>
                <th className="px-5 py-4 font-medium">금액</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-t border-zinc-800">
                  <td className="px-5 py-4">{row.id}</td>
                  <td className="px-5 py-4">{row.status}</td>
                  <td className="px-5 py-4">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
