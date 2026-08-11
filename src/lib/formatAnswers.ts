import { getAllSteps } from "@/lib/validation";
import { t } from "@/i18n/ui";
import type {
  Language,
  SurveyAnswers,
  SurveyQuestion,
} from "@/types/survey";

export type FormattedAnswer =
  | { kind: "single"; text: string }
  | { kind: "multiple"; items: string[] }
  | { kind: "text"; text: string }
  | { kind: "empty" };

export type ReviewItem = {
  number: number;
  question: SurveyQuestion;
  title: string;
  answer: FormattedAnswer;
};

function optionLabel(
  question: SurveyQuestion,
  key: string,
  language: Language,
  answers: SurveyAnswers,
): string {
  const option = question.options?.find((item) => item.key === key);
  if (!option) return key;

  if (option.allowsOther && question.otherField) {
    const otherText = String(answers[question.otherField] ?? "").trim();
    if (otherText) return otherText;
  }

  return t(option.label, language);
}

export function formatQuestionAnswer(
  question: SurveyQuestion,
  answers: SurveyAnswers,
  language: Language,
): FormattedAnswer {
  const value = answers[question.id];

  if (question.type === "single") {
    if (typeof value !== "string" || !value) return { kind: "empty" };
    return {
      kind: "single",
      text: optionLabel(question, value, language, answers),
    };
  }

  if (question.type === "multiple") {
    if (!Array.isArray(value) || value.length === 0) {
      return { kind: "empty" };
    }

    return {
      kind: "multiple",
      items: value.map((key) =>
        optionLabel(question, key, language, answers),
      ),
    };
  }

  if (typeof value === "string" && value.trim()) {
    return { kind: "text", text: value.trim() };
  }

  return { kind: "empty" };
}

export function getReviewItems(
  answers: SurveyAnswers,
  language: Language,
): ReviewItem[] {
  const steps = getAllSteps();
  const items: ReviewItem[] = [];

  steps.forEach((question, index) => {
    const answer = formatQuestionAnswer(question, answers, language);

    if (question.id === "additionalComment" && answer.kind === "empty") {
      return;
    }

    items.push({
      number: index + 1,
      question,
      title: t(question.title, language),
      answer,
    });
  });

  return items;
}

export function formatSurveyDate(language: Language, date = new Date()): string {
  return new Intl.DateTimeFormat(language === "ar" ? "ar-SA" : "en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
