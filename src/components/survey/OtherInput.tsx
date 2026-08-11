"use client";

import { t } from "@/i18n/ui";
import type { Language, LocalizedString } from "@/types/survey";

type OtherInputProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: LocalizedString;
  language: Language;
  id?: string;
};

export function OtherInput({
  value,
  onChange,
  placeholder,
  language,
  id = "other-input",
}: OtherInputProps) {
  return (
    <div className="animate-fade-in pt-1">
      <label htmlFor={id} className="sr-only">
        {t(placeholder, language)}
      </label>
      <input
        id={id}
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={t(placeholder, language)}
        className="w-full rounded-2xl border border-oco-border bg-white px-4 py-3.5 text-base text-oco-ink outline-none transition placeholder:text-oco-muted/70 focus:border-oco-red focus:ring-2 focus:ring-oco-red/15"
      />
    </div>
  );
}
