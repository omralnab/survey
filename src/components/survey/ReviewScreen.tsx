"use client";

import { FileDown, Pencil, CheckCircle2 } from "lucide-react";
import {
  formatSurveyDate,
  getReviewItems,
  type FormattedAnswer,
} from "@/lib/formatAnswers";
import { t, uiCopy } from "@/i18n/ui";
import type { Language, SurveyAnswers } from "@/types/survey";

type ReviewScreenProps = {
  language: Language;
  answers: SurveyAnswers;
  onEdit: () => void;
  onFinish: () => void;
};

function AnswerDisplay({ answer }: { answer: FormattedAnswer }) {
  if (answer.kind === "empty") {
    return <p className="review-answer text-oco-muted">—</p>;
  }

  if (answer.kind === "multiple") {
    return (
      <ul className="review-answer-list">
        {answer.items.map((item, index) => (
          <li key={`${index}-${item}`}>{item}</li>
        ))}
      </ul>
    );
  }

  return <p className="review-answer">{answer.text}</p>;
}

export function ReviewScreen({
  language,
  answers,
  onEdit,
  onFinish,
}: ReviewScreenProps) {
  const items = getReviewItems(answers, language);
  const dateLabel = formatSurveyDate(language);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="animate-fade-up flex flex-1 flex-col">
      <div className="review-document">
        <header className="review-document-header">
          <div className="review-logo-row">
            <span className="review-logo-mark" aria-hidden>
              O
            </span>
            <div>
              <p className="review-brand">{uiCopy.brand} Survey</p>
              <p className="review-summary">{t(uiCopy.surveySummary, language)}</p>
            </div>
          </div>
          <p className="review-date">{dateLabel}</p>
        </header>

        <h1 className="review-page-title screen-only">
          {t(uiCopy.reviewTitle, language)}
        </h1>

        <div className="review-items">
          {items.map((item) => (
            <article key={item.question.id} className="review-item">
              <h2 className="review-question">
                <span className="review-number">{item.number}.</span>{" "}
                {item.title}
              </h2>
              <AnswerDisplay answer={item.answer} />
            </article>
          ))}
        </div>
      </div>

      <div className="review-actions no-print mt-8 space-y-3">
        <button
          type="button"
          onClick={handlePrint}
          className="inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-2xl bg-oco-red px-5 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-oco-red-dark"
        >
          <FileDown className="h-5 w-5" />
          {t(uiCopy.saveAsPdf, language)}
        </button>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={onEdit}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-oco-border bg-white px-4 py-3 text-sm font-medium text-oco-ink transition hover:bg-oco-surface"
          >
            <Pencil className="h-4 w-4" />
            {t(uiCopy.editAnswers, language)}
          </button>

          <button
            type="button"
            onClick={onFinish}
            className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-2xl border border-oco-red/25 bg-oco-red-soft px-4 py-3 text-sm font-semibold text-oco-red transition hover:bg-[#ffe4e4]"
          >
            <CheckCircle2 className="h-4 w-4" />
            {t(uiCopy.finishSurvey, language)}
          </button>
        </div>
      </div>
    </section>
  );
}
