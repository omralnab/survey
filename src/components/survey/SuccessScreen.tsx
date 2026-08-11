"use client";

import { Check, RotateCcw } from "lucide-react";
import { t, uiCopy } from "@/i18n/ui";
import type { Language } from "@/types/survey";

type SuccessScreenProps = {
  language: Language;
  onStartNew: () => void;
};

export function SuccessScreen({ language, onStartNew }: SuccessScreenProps) {
  return (
    <section className="animate-fade-up flex flex-1 flex-col items-center justify-center text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-oco-red-soft text-oco-red">
        <Check className="h-8 w-8" strokeWidth={2.5} />
      </div>

      <div className="mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-oco-ink">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-oco-red text-[11px] font-bold text-white">
          O
        </span>
        {uiCopy.brand}
      </div>

      <h1 className="max-w-xl text-3xl font-bold leading-tight text-oco-ink sm:text-4xl">
        {t(uiCopy.successTitle, language)}
      </h1>

      <p className="mt-4 max-w-lg text-base leading-relaxed text-oco-muted sm:text-lg">
        {t(uiCopy.successBody, language)}
      </p>

      <button
        type="button"
        onClick={onStartNew}
        className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl border border-oco-border bg-white px-5 py-3 text-sm font-medium text-oco-ink transition hover:bg-oco-surface"
      >
        <RotateCcw className="h-4 w-4" />
        {t(uiCopy.startNewSurvey, language)}
      </button>
    </section>
  );
}
