export type Language = "ar" | "en";

export type LocalizedString = {
  ar: string;
  en: string;
};

export type QuestionType = "single" | "multiple" | "text";

export type SurveyOption = {
  key: string;
  label: LocalizedString;
  allowsOther?: boolean;
};

export type SurveyQuestion = {
  id: keyof SurveyAnswers;
  type: QuestionType;
  title: LocalizedString;
  helper?: LocalizedString;
  options?: SurveyOption[];
  maxSelections?: number;
  required?: boolean;
  otherField?: keyof SurveyAnswers;
  otherPlaceholder?: LocalizedString;
  placeholder?: LocalizedString;
};

export type SurveyAnswers = {
  currentPos: string;
  currentPosOther: string;
  satisfaction: string;
  currentProblems: string[];
  currentProblemsOther: string;
  importantFeatures: string[];
  dashboardMetrics: string[];
  switchingReasons: string[];
  mainImprovement: string;
  mainImprovementOther: string;
  loyaltyMethod: string;
  loyaltyMethodOther: string;
  repeatCustomerKnowledge: string;
  customerDatabase: string;
  integrationCapability: string;
  pickupOrders: string;
  orderManagementChannels: string[];
  orderManagementOther: string;
  loyaltyExperience: string;
  promotionChannels: string[];
  promotionChannelsOther: string;
  giftCardImportance: string;
  willingnessToPayFor: string[];
  additionalComment: string;
};

export type SurveyResponsePayload = {
  createdAt: unknown;
  language: Language;
  currentPos: string;
  currentPosOther: string;
  satisfaction: string;
  currentProblems: string[];
  currentProblemsOther: string;
  importantFeatures: string[];
  dashboardMetrics: string[];
  switchingReasons: string[];
  mainImprovement: string;
  mainImprovementOther: string;
  loyaltyMethod: string;
  loyaltyMethodOther: string;
  repeatCustomerKnowledge: string;
  customerDatabase: string;
  integrationCapability: string;
  pickupOrders: string;
  orderManagementChannels: string[];
  orderManagementOther: string;
  loyaltyExperience: string;
  promotionChannels: string[];
  promotionChannelsOther: string;
  giftCardImportance: string;
  willingnessToPayFor: string[];
  additionalComment: string;
};

export type SurveyStep = "intro" | "questions" | "review" | "success";

export const EMPTY_ANSWERS: SurveyAnswers = {
  currentPos: "",
  currentPosOther: "",
  satisfaction: "",
  currentProblems: [],
  currentProblemsOther: "",
  importantFeatures: [],
  dashboardMetrics: [],
  switchingReasons: [],
  mainImprovement: "",
  mainImprovementOther: "",
  loyaltyMethod: "",
  loyaltyMethodOther: "",
  repeatCustomerKnowledge: "",
  customerDatabase: "",
  integrationCapability: "",
  pickupOrders: "",
  orderManagementChannels: [],
  orderManagementOther: "",
  loyaltyExperience: "",
  promotionChannels: [],
  promotionChannelsOther: "",
  giftCardImportance: "",
  willingnessToPayFor: [],
  additionalComment: "",
};
