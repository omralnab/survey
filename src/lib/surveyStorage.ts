import {
  EMPTY_ANSWERS,
  type Language,
  type SurveyAnswers,
  type SurveyStep,
} from "@/types/survey";

export const SURVEY_STORAGE_KEY = "oco_pos_survey_answers";
export const SURVEY_SYNC_EVENT = "oco_pos_survey_sync";

export type StoredSurveyState = {
  answers: SurveyAnswers;
  language: Language;
  questionIndex: number;
  step: SurveyStep;
};

export const DEFAULT_SURVEY_STATE: StoredSurveyState = {
  answers: EMPTY_ANSWERS,
  language: "ar",
  questionIndex: 0,
  step: "intro",
};

function isLanguage(value: unknown): value is Language {
  return value === "ar" || value === "en";
}

function isSurveyStep(value: unknown): value is SurveyStep {
  return (
    value === "intro" ||
    value === "questions" ||
    value === "review" ||
    value === "success"
  );
}

function normalizeAnswers(raw: unknown): SurveyAnswers {
  if (!raw || typeof raw !== "object") {
    return { ...EMPTY_ANSWERS };
  }

  const data = raw as Partial<SurveyAnswers>;

  return {
    ...EMPTY_ANSWERS,
    ...data,
    currentProblems: Array.isArray(data.currentProblems)
      ? data.currentProblems
      : [],
    importantFeatures: Array.isArray(data.importantFeatures)
      ? data.importantFeatures
      : [],
    dashboardMetrics: Array.isArray(data.dashboardMetrics)
      ? data.dashboardMetrics
      : [],
    switchingReasons: Array.isArray(data.switchingReasons)
      ? data.switchingReasons
      : [],
    orderManagementChannels: Array.isArray(data.orderManagementChannels)
      ? data.orderManagementChannels
      : [],
    promotionChannels: Array.isArray(data.promotionChannels)
      ? data.promotionChannels
      : [],
    willingnessToPayFor: Array.isArray(data.willingnessToPayFor)
      ? data.willingnessToPayFor
      : [],
    currentPosOther:
      typeof data.currentPosOther === "string" ? data.currentPosOther : "",
    currentProblemsOther:
      typeof data.currentProblemsOther === "string"
        ? data.currentProblemsOther
        : "",
    mainImprovementOther:
      typeof data.mainImprovementOther === "string"
        ? data.mainImprovementOther
        : "",
    loyaltyMethodOther:
      typeof data.loyaltyMethodOther === "string"
        ? data.loyaltyMethodOther
        : "",
    orderManagementOther:
      typeof data.orderManagementOther === "string"
        ? data.orderManagementOther
        : "",
    promotionChannelsOther:
      typeof data.promotionChannelsOther === "string"
        ? data.promotionChannelsOther
        : "",
    additionalComment:
      typeof data.additionalComment === "string" ? data.additionalComment : "",
    respondentName:
      typeof data.respondentName === "string" ? data.respondentName : "",
    shopName: typeof data.shopName === "string" ? data.shopName : "",
  };
}

function parseStoredState(raw: string): StoredSurveyState | null {
  try {
    const parsed = JSON.parse(raw) as Partial<StoredSurveyState>;
    if (!isLanguage(parsed.language) || !isSurveyStep(parsed.step)) {
      return null;
    }

    const questionIndex =
      typeof parsed.questionIndex === "number" && parsed.questionIndex >= 0
        ? parsed.questionIndex
        : 0;

    return {
      answers: normalizeAnswers(parsed.answers),
      language: parsed.language,
      questionIndex,
      step: parsed.step,
    };
  } catch {
    return null;
  }
}

export function cloneAnswers(
  answers: SurveyAnswers = EMPTY_ANSWERS,
): SurveyAnswers {
  return {
    ...answers,
    currentProblems: [...answers.currentProblems],
    importantFeatures: [...answers.importantFeatures],
    dashboardMetrics: [...answers.dashboardMetrics],
    switchingReasons: [...answers.switchingReasons],
    orderManagementChannels: [...answers.orderManagementChannels],
    promotionChannels: [...answers.promotionChannels],
    willingnessToPayFor: [...answers.willingnessToPayFor],
  };
}

/** Cached for useSyncExternalStore — getSnapshot must return a stable reference. */
let cachedRaw: string | null | undefined;
let cachedState: StoredSurveyState = DEFAULT_SURVEY_STATE;

function readRaw(): string | null {
  if (typeof window === "undefined") return null;
  try {
    return window.localStorage.getItem(SURVEY_STORAGE_KEY);
  } catch {
    return null;
  }
}

export function getSurveySnapshot(): StoredSurveyState {
  const raw = readRaw();
  if (raw === cachedRaw) {
    return cachedState;
  }

  cachedRaw = raw;
  cachedState = raw ? (parseStoredState(raw) ?? DEFAULT_SURVEY_STATE) : DEFAULT_SURVEY_STATE;
  return cachedState;
}

export function getServerSurveySnapshot(): StoredSurveyState {
  return DEFAULT_SURVEY_STATE;
}

export function subscribeSurveyStorage(onStoreChange: () => void) {
  if (typeof window === "undefined") return () => {};

  const onStorage = (event: StorageEvent) => {
    if (event.key === null || event.key === SURVEY_STORAGE_KEY) {
      cachedRaw = undefined;
      onStoreChange();
    }
  };

  window.addEventListener("storage", onStorage);
  window.addEventListener(SURVEY_SYNC_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStorage);
    window.removeEventListener(SURVEY_SYNC_EVENT, onStoreChange);
  };
}

export function saveSurveyState(state: StoredSurveyState): void {
  if (typeof window === "undefined") return;

  try {
    const raw = JSON.stringify(state);
    window.localStorage.setItem(SURVEY_STORAGE_KEY, raw);
    cachedRaw = raw;
    cachedState = state;
    window.dispatchEvent(new Event(SURVEY_SYNC_EVENT));
  } catch {
    // Ignore quota / private mode errors.
  }
}

export function clearSurveyState(): void {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.removeItem(SURVEY_STORAGE_KEY);
    cachedRaw = null;
    cachedState = DEFAULT_SURVEY_STATE;
    window.dispatchEvent(new Event(SURVEY_SYNC_EVENT));
  } catch {
    // Ignore storage errors.
  }
}

export function loadSurveyState(): StoredSurveyState | null {
  const raw = readRaw();
  if (!raw) return null;
  return parseStoredState(raw);
}
