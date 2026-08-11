"use client";

import type { Language } from "@/types/survey";
import { uiCopy } from "@/i18n/ui";

type LanguageToggleProps = {
  language: Language;
  onChange: (language: Language) => void;
};

export function LanguageToggle({ language, onChange }: LanguageToggleProps) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-oco-border bg-white p-1 text-sm shadow-sm"
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => onChange("ar")}
        className={`rounded-full px-3 py-1.5 transition ${
          language === "ar"
            ? "bg-oco-red text-white"
            : "text-oco-muted hover:text-oco-ink"
        }`}
        aria-pressed={language === "ar"}
      >
        {uiCopy.languageAr}
      </button>
      <button
        type="button"
        onClick={() => onChange("en")}
        className={`rounded-full px-3 py-1.5 transition ${
          language === "en"
            ? "bg-oco-red text-white"
            : "text-oco-muted hover:text-oco-ink"
        }`}
        aria-pressed={language === "en"}
      >
        {uiCopy.languageEn}
      </button>
    </div>
  );
}
