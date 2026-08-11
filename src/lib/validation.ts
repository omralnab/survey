import {
  additionalCommentQuestion,
  surveyQuestions,
} from "@/data/surveyQuestions";
import type { SurveyAnswers, SurveyQuestion } from "@/types/survey";

export function getAllSteps(): SurveyQuestion[] {
  return [...surveyQuestions, additionalCommentQuestion];
}

export function isQuestionAnswered(
  question: SurveyQuestion,
  answers: SurveyAnswers,
): boolean {
  if (!question.required) return true;

  const value = answers[question.id];

  if (question.type === "single") {
    return typeof value === "string" && value.length > 0;
  }

  if (question.type === "multiple") {
    return Array.isArray(value) && value.length > 0;
  }

  return true;
}

export function showsOtherInput(
  question: SurveyQuestion,
  answers: SurveyAnswers,
): boolean {
  if (!question.otherField || !question.options) return false;

  const value = answers[question.id];
  const otherOption = question.options.find((option) => option.allowsOther);
  if (!otherOption) return false;

  if (question.type === "single") {
    return value === otherOption.key;
  }

  if (question.type === "multiple" && Array.isArray(value)) {
    return value.includes(otherOption.key);
  }

  return false;
}
