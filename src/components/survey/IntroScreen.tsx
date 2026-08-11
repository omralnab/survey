"use client";

import { ArrowLeft, ArrowRight, Clock3 } from "lucide-react";
import { t, uiCopy } from "@/i18n/ui";
import type { Language } from "@/types/survey";

type IntroScreenProps = {
  language: Language;
  onStart: () => void;
};

export function IntroScreen({ language, onStart }: IntroScreenProps) {
  const isRtl = language === "ar";
  const StartIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section className="animate-fade-up flex flex-1 flex-col justify-center">
      <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-oco-border bg-white px-3 py-1.5 text-sm text-oco-muted shadow-sm">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-oco-red text-[11px] font-bold text-white">
          O
        </span>
        <span className="font-semibold tracking-wide text-oco-ink">
          {uiCopy.brand}
        </span>
      </div>

      <h1 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-oco-ink sm:text-4xl md:text-[2.75rem]">
        {t(uiCopy.introTitle, language)}
      </h1>

      <p className="mt-5 max-w-xl text-base leading-relaxed text-oco-muted sm:text-lg">
        {t(uiCopy.introBody, language)}
      </p>

      <p className="mt-4 inline-flex items-center gap-2 text-sm text-oco-muted sm:text-base">
        <Clock3 className="h-4 w-4 text-oco-red" />
        {t(uiCopy.introMeta, language)}
      </p>

      <div className="mt-10">
        <button
          type="button"
          onClick={onStart}
          className="inline-flex min-h-13 items-center gap-2 rounded-2xl bg-oco-red px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-oco-red-dark"
        >
          {t(uiCopy.startSurvey, language)}
          <StartIcon className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
