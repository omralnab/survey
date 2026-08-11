"use client";

import { Check } from "lucide-react";
import { t } from "@/i18n/ui";
import type { Language, SurveyOption } from "@/types/survey";

type SingleChoiceProps = {
  options: SurveyOption[];
  value: string;
  onChange: (value: string) => void;
  language: Language;
};

export function SingleChoice({
  options,
  value,
  onChange,
  language,
}: SingleChoiceProps) {
  return (
    <div className="grid gap-3" role="radiogroup">
      {options.map((option) => {
        const selected = value === option.key;

        return (
          <button
            key={option.key}
            type="button"
            role="radio"
            aria-checked={selected}
            onClick={() => onChange(option.key)}
            className={`group flex min-h-[56px] w-full items-center justify-between gap-3 rounded-2xl border px-4 py-3.5 text-start text-base transition duration-200 ${
              selected
                ? "border-oco-red bg-oco-red-soft text-oco-ink shadow-sm"
                : "border-oco-border bg-white text-oco-ink hover:border-oco-red/40 hover:bg-oco-red-soft/40"
            }`}
          >
            <span className="leading-snug">{t(option.label, language)}</span>
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition ${
                selected
                  ? "border-oco-red bg-oco-red text-white"
                  : "border-oco-border bg-white text-transparent"
              }`}
              aria-hidden
            >
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
          </button>
        );
      })}
    </div>
  );
}
