"use client";

import { useState } from "react";

export default function MobileKeypadSheetPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="tile-parchment min-h-[100dvh]">
      <section className="mx-auto w-full max-w-2xl px-4 pb-32 pt-8 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          모바일 바텀시트 키패드 테스트
        </h2>
        <p className="mt-3 text-zinc-700">
          하단 버튼으로 바텀시트를 열고 숫자 인풋에 포커스하세요. 키패드가
          올라왔을 때 인풋과 CTA 위치를 확인하는 테스트입니다.
        </p>

        <div className="mt-8 space-y-4">
          {Array.from({ length: 16 }).map((_, idx) => (
            <article
              key={idx}
              className="rounded-2xl border border-zinc-200 bg-white p-4"
            >
              <h3 className="text-base font-semibold">더미 컨텐츠 {idx + 1}</h3>
              <p className="mt-1 text-sm text-zinc-600">
                뷰포트 및 키패드 동작 테스트를 위한 반복 컨텐츠입니다.
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
            바텀시트 열기
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
              <h3 className="text-lg font-semibold text-zinc-900">바텀시트 폼</h3>
              <p className="mt-1 text-sm text-zinc-600">
                숫자 인풋에 포커스해 키패드 겹침 여부를 확인하세요.
              </p>

              <label className="mt-4 block text-sm font-medium text-zinc-700">
                숫자 입력
              </label>
              <input
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                enterKeyHint="done"
                name="sandbox_sheet_numeric_input"
                placeholder="숫자를 입력하세요"
                className="mt-2 h-12 w-full rounded-full border border-zinc-300 px-4 text-base"
              />

              <button className="mt-4 h-12 w-full rounded-full bg-[var(--primary)] text-base font-medium text-white hover:bg-[var(--primary-focus)]">
                계속
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  );
}
