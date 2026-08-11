"use client";

import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { t, uiCopy } from "@/i18n/ui";
import type { Language } from "@/types/survey";

type NavigationButtonsProps = {
  language: Language;
  onPrevious?: () => void;
  onNext?: () => void;
  showPrevious: boolean;
  isLast: boolean;
  isSubmitting?: boolean;
  disableNext?: boolean;
};

export function NavigationButtons({
  language,
  onPrevious,
  onNext,
  showPrevious,
  isLast,
  isSubmitting = false,
  disableNext = false,
}: NavigationButtonsProps) {
  const isRtl = language === "ar";
  const PrevIcon = isRtl ? ArrowRight : ArrowLeft;
  const NextIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <div className="flex items-center justify-between gap-3 pt-2">
      {showPrevious ? (
        <button
          type="button"
          onClick={onPrevious}
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center gap-2 rounded-2xl border border-oco-border bg-white px-4 py-3 text-sm font-medium text-oco-ink transition hover:bg-oco-surface disabled:opacity-50"
        >
          <PrevIcon className="h-4 w-4" />
          {t(uiCopy.previous, language)}
        </button>
      ) : (
        <span />
      )}

      <button
        type="button"
        onClick={onNext}
        disabled={isSubmitting || disableNext}
        className="inline-flex min-h-12 min-w-[140px] items-center justify-center gap-2 rounded-2xl bg-oco-red px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-oco-red-dark disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t(uiCopy.submitting, language)}
          </>
        ) : (
          <>
            {isLast ? t(uiCopy.submit, language) : t(uiCopy.next, language)}
            {!isLast && <NextIcon className="h-4 w-4" />}
          </>
        )}
      </button>
    </div>
  );
}
