"use client";

import { formatCopy, uiCopy } from "@/i18n/ui";
import type { Language } from "@/types/survey";

type ProgressBarProps = {
  current: number;
  total: number;
  language: Language;
};

export function ProgressBar({ current, total, language }: ProgressBarProps) {
  const percent = Math.min(100, Math.round((current / total) * 100));

  return (
    <div className="w-full">
      <div className="mb-2 flex items-center justify-between gap-3 text-sm text-oco-muted">
        <span>
          {formatCopy(uiCopy.questionOf, language, { current, total })}
        </span>
        <span>{percent}%</span>
      </div>
      <div
        className="h-1.5 w-full overflow-hidden rounded-full bg-oco-border/70"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={1}
        aria-valuemax={total}
      >
        <div
          className="h-full rounded-full bg-oco-red transition-all duration-300 ease-out"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
