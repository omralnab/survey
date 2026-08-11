"use client";

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { IntroScreen } from "@/components/survey/IntroScreen";
import { NavigationButtons } from "@/components/survey/NavigationButtons";
import { ProgressBar } from "@/components/survey/ProgressBar";
import { QuestionScreen } from "@/components/survey/QuestionScreen";
import { ReviewScreen } from "@/components/survey/ReviewScreen";
import { SuccessScreen } from "@/components/survey/SuccessScreen";
import { SurveyLayout } from "@/components/survey/SurveyLayout";
import { TOTAL_QUESTIONS } from "@/data/surveyQuestions";
import { formatCopy, t, uiCopy } from "@/i18n/ui";
import {
  clearSurveyState,
  cloneAnswers,
  getServerSurveySnapshot,
  getSurveySnapshot,
  saveSurveyState,
  subscribeSurveyStorage,
  type StoredSurveyState,
} from "@/lib/surveyStorage";
import { getAllSteps, isQuestionAnswered } from "@/lib/validation";
import type { Language, SurveyAnswers } from "@/types/survey";

export function SurveyApp() {
  const steps = useMemo(() => getAllSteps(), []);
  const state = useSyncExternalStore(
    subscribeSurveyStorage,
    getSurveySnapshot,
    getServerSurveySnapshot,
  );

  const language = state.language;
  const step = state.step;
  const questionIndex = Math.min(
    state.questionIndex,
    Math.max(steps.length - 1, 0),
  );
  const answers = state.answers;
  const [error, setError] = useState<string | null>(null);
  const [animationKey, setAnimationKey] = useState(0);

  const currentQuestion = steps[questionIndex];
  const isLastQuestion = questionIndex === steps.length - 1;

  const commit = useCallback((next: StoredSurveyState) => {
    saveSurveyState(next);
  }, []);

  const patch = useCallback(
    (partial: Partial<StoredSurveyState>) => {
      const current = getSurveySnapshot();
      commit({ ...current, ...partial });
    },
    [commit],
  );

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  const bumpAnimation = useCallback(() => {
    setAnimationKey((value) => value + 1);
  }, []);

  const setLanguage = useCallback(
    (nextLanguage: Language) => {
      patch({ language: nextLanguage });
    },
    [patch],
  );

  const updateAnswer = useCallback(
    <K extends keyof SurveyAnswers>(key: K, value: SurveyAnswers[K]) => {
      const current = getSurveySnapshot();
      commit({
        ...current,
        answers: { ...current.answers, [key]: value },
      });
      setError(null);
    },
    [commit],
  );

  const validateCurrent = useCallback(() => {
    if (!currentQuestion) return false;

    if (!isQuestionAnswered(currentQuestion, answers)) {
      setError(t(uiCopy.requiredError, language));
      return false;
    }

    return true;
  }, [answers, currentQuestion, language]);

  const goNext = useCallback(() => {
    if (!validateCurrent()) return;

    if (!isLastQuestion) {
      patch({ questionIndex: questionIndex + 1 });
      setError(null);
      bumpAnimation();
      return;
    }

    setError(null);
    patch({ step: "review" });
    bumpAnimation();
  }, [
    bumpAnimation,
    isLastQuestion,
    patch,
    questionIndex,
    validateCurrent,
  ]);

  const goPrevious = useCallback(() => {
    if (questionIndex === 0) {
      patch({ step: "intro" });
      bumpAnimation();
      return;
    }

    patch({ questionIndex: Math.max(0, questionIndex - 1) });
    setError(null);
    bumpAnimation();
  }, [bumpAnimation, patch, questionIndex]);

  const startNewSurvey = useCallback(() => {
    clearSurveyState();
    commit({
      answers: cloneAnswers(),
      language,
      questionIndex: 0,
      step: "intro",
    });
    setError(null);
    bumpAnimation();
  }, [bumpAnimation, commit, language]);

  useEffect(() => {
    if (step !== "questions") return;

    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const tag = target?.tagName.toLowerCase();
      const isTyping =
        tag === "input" || tag === "textarea" || target?.isContentEditable;

      if (event.key === "Enter" && !event.shiftKey && !isTyping) {
        event.preventDefault();
        goNext();
      }

      if (event.key === "ArrowLeft") {
        if (language === "ar") {
          goNext();
        } else {
          goPrevious();
        }
      }

      if (event.key === "ArrowRight") {
        if (language === "ar") {
          goPrevious();
        } else {
          goNext();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrevious, language, step]);

  const handleLimitReached = (max: number) => {
    setError(formatCopy(uiCopy.maxSelectionsError, language, { max }));
  };

  if (step === "success") {
    return (
      <SurveyLayout language={language} onLanguageChange={setLanguage}>
        <div key={animationKey}>
          <SuccessScreen language={language} onStartNew={startNewSurvey} />
        </div>
      </SurveyLayout>
    );
  }

  if (step === "intro") {
    return (
      <SurveyLayout language={language} onLanguageChange={setLanguage}>
        <div key={animationKey}>
          <IntroScreen
            language={language}
            onStart={() => {
              patch({ step: "questions", questionIndex: 0 });
              bumpAnimation();
            }}
          />
        </div>
      </SurveyLayout>
    );
  }

  if (step === "review") {
    return (
      <SurveyLayout language={language} onLanguageChange={setLanguage}>
        <div key={animationKey}>
          <ReviewScreen
            language={language}
            answers={answers}
            onEdit={() => {
              patch({ step: "questions", questionIndex: 0 });
              bumpAnimation();
            }}
            onFinish={() => {
              patch({ step: "success" });
              bumpAnimation();
            }}
          />
        </div>
      </SurveyLayout>
    );
  }

  return (
    <SurveyLayout
      language={language}
      onLanguageChange={setLanguage}
      progress={
        questionIndex < TOTAL_QUESTIONS ? (
          <ProgressBar
            current={questionIndex + 1}
            total={TOTAL_QUESTIONS}
            language={language}
          />
        ) : undefined
      }
      footer={
        <NavigationButtons
          language={language}
          showPrevious
          isLast={false}
          onPrevious={goPrevious}
          onNext={goNext}
        />
      }
    >
      <div key={animationKey}>
        <QuestionScreen
          question={currentQuestion}
          answers={answers}
          language={language}
          error={error}
          onSingleChange={(value) =>
            updateAnswer(currentQuestion.id, value as never)
          }
          onMultipleChange={(value) =>
            updateAnswer(currentQuestion.id, value as never)
          }
          onOtherChange={(value) => {
            if (currentQuestion.otherField) {
              updateAnswer(currentQuestion.otherField, value as never);
            }
          }}
          onTextChange={(value) =>
            updateAnswer(currentQuestion.id, value as never)
          }
          onLimitReached={handleLimitReached}
        />
      </div>
    </SurveyLayout>
  );
}
