"use client";

import type { ReactNode } from "react";
import { LanguageToggle } from "@/components/survey/LanguageToggle";
import type { Language } from "@/types/survey";

type SurveyLayoutProps = {
  language: Language;
  onLanguageChange: (language: Language) => void;
  children: ReactNode;
  footer?: ReactNode;
  progress?: ReactNode;
};

export function SurveyLayout({
  language,
  onLanguageChange,
  children,
  footer,
  progress,
}: SurveyLayoutProps) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-oco-page text-oco-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,rgba(227,30,36,0.08),transparent_60%)] no-print"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -start-24 top-40 h-64 w-64 rounded-full bg-oco-red/5 blur-3xl no-print"
      />

      <div className="relative mx-auto flex min-h-dvh w-full max-w-2xl flex-col px-4 py-5 sm:px-6 sm:py-8 print:max-w-none print:px-0 print:py-0">
        <header className="mb-6 flex items-center justify-between gap-3 no-print">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-oco-red text-sm font-bold text-white shadow-sm">
              O
            </span>
            <span className="text-sm font-semibold tracking-wide text-oco-ink sm:text-base">
              OCO POS
            </span>
          </div>
          <LanguageToggle language={language} onChange={onLanguageChange} />
        </header>

        {progress && <div className="mb-6 no-print">{progress}</div>}

        <main className="flex flex-1 flex-col">{children}</main>

        {footer && (
          <footer className="sticky bottom-0 mt-8 bg-oco-page/90 pb-2 pt-4 backdrop-blur-sm no-print">
            {footer}
          </footer>
        )}
      </div>
    </div>
  );
}
