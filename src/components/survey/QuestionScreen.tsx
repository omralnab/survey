"use client";

import { MultipleChoice } from "@/components/survey/MultipleChoice";
import { OtherInput } from "@/components/survey/OtherInput";
import { SingleChoice } from "@/components/survey/SingleChoice";
import { t, uiCopy } from "@/i18n/ui";
import { showsOtherInput } from "@/lib/validation";
import type { Language, SurveyAnswers, SurveyQuestion } from "@/types/survey";

type QuestionScreenProps = {
  question: SurveyQuestion;
  answers: SurveyAnswers;
  language: Language;
  error?: string | null;
  onSingleChange: (value: string) => void;
  onMultipleChange: (value: string[]) => void;
  onOtherChange: (value: string) => void;
  onTextChange: (value: string) => void;
  onLimitReached: (max: number) => void;
};

export function QuestionScreen({
  question,
  answers,
  language,
  error,
  onSingleChange,
  onMultipleChange,
  onOtherChange,
  onTextChange,
  onLimitReached,
}: QuestionScreenProps) {
  const value = answers[question.id];
  const showOther = showsOtherInput(question, answers);
  const otherValue =
    question.otherField && typeof answers[question.otherField] === "string"
      ? (answers[question.otherField] as string)
      : "";

  return (
    <section className="animate-fade-up flex flex-1 flex-col">
      <div className="mb-6">
        <h2 className="text-2xl font-bold leading-snug tracking-tight text-oco-ink sm:text-[1.75rem]">
          {t(question.title, language)}
        </h2>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-sm text-oco-muted">
          {question.helper && <span>{t(question.helper, language)}</span>}
          {!question.required && (
            <span className="rounded-full bg-oco-surface px-2.5 py-1 text-xs">
              {t(uiCopy.optional, language)}
            </span>
          )}
        </div>
      </div>

      {question.type === "single" && question.options && (
        <SingleChoice
          options={question.options}
          value={typeof value === "string" ? value : ""}
          onChange={onSingleChange}
          language={language}
        />
      )}

      {question.type === "multiple" && question.options && (
        <MultipleChoice
          options={question.options}
          value={Array.isArray(value) ? value : []}
          onChange={onMultipleChange}
          language={language}
          maxSelections={question.maxSelections}
          onLimitReached={() =>
            question.maxSelections && onLimitReached(question.maxSelections)
          }
        />
      )}

      {question.type === "text" && (
        <textarea
          value={typeof value === "string" ? value : ""}
          onChange={(event) => onTextChange(event.target.value)}
          placeholder={
            question.placeholder ? t(question.placeholder, language) : undefined
          }
          rows={5}
          className="min-h-[160px] w-full resize-none rounded-2xl border border-oco-border bg-white px-4 py-3.5 text-base text-oco-ink outline-none transition placeholder:text-oco-muted/70 focus:border-oco-red focus:ring-2 focus:ring-oco-red/15"
        />
      )}

      {showOther && question.otherPlaceholder && (
        <div className="mt-3">
          <OtherInput
            value={otherValue}
            onChange={onOtherChange}
            placeholder={question.otherPlaceholder}
            language={language}
          />
        </div>
      )}

      {error && (
        <p className="mt-4 text-sm text-oco-red" role="alert">
          {error}
        </p>
      )}
    </section>
  );
}
