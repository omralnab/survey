import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { getDb, isFirebaseConfigured } from "@/lib/firebase";
import type { Language, SurveyAnswers } from "@/types/survey";

const COLLECTION_NAME = "pos_survey_responses";
const SESSION_SUBMITTED_KEY = "oco_pos_survey_submitted";

export function hasSubmittedInSession(): boolean {
  if (typeof window === "undefined") return false;
  return sessionStorage.getItem(SESSION_SUBMITTED_KEY) === "1";
}

export function markSubmittedInSession(): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(SESSION_SUBMITTED_KEY, "1");
}

export async function submitSurveyResponse(
  answers: SurveyAnswers,
  language: Language,
): Promise<void> {
  if (!isFirebaseConfigured()) {
    throw new Error("FIREBASE_NOT_CONFIGURED");
  }

  if (hasSubmittedInSession()) {
    throw new Error("ALREADY_SUBMITTED");
  }

  const db = getDb();

  await addDoc(collection(db, COLLECTION_NAME), {
    createdAt: serverTimestamp(),
    language,
    currentPos: answers.currentPos,
    currentPosOther: answers.currentPosOther.trim(),
    satisfaction: answers.satisfaction,
    currentProblems: answers.currentProblems,
    currentProblemsOther: answers.currentProblemsOther.trim(),
    importantFeatures: answers.importantFeatures,
    dashboardMetrics: answers.dashboardMetrics,
    switchingReasons: answers.switchingReasons,
    mainImprovement: answers.mainImprovement,
    mainImprovementOther: answers.mainImprovementOther.trim(),
    loyaltyMethod: answers.loyaltyMethod,
    loyaltyMethodOther: answers.loyaltyMethodOther.trim(),
    repeatCustomerKnowledge: answers.repeatCustomerKnowledge,
    customerDatabase: answers.customerDatabase,
    integrationCapability: answers.integrationCapability,
    pickupOrders: answers.pickupOrders,
    orderManagementChannels: answers.orderManagementChannels,
    orderManagementOther: answers.orderManagementOther.trim(),
    loyaltyExperience: answers.loyaltyExperience,
    promotionChannels: answers.promotionChannels,
    promotionChannelsOther: answers.promotionChannelsOther.trim(),
    giftCardImportance: answers.giftCardImportance,
    willingnessToPayFor: answers.willingnessToPayFor,
    additionalComment: answers.additionalComment.trim(),
  });

  markSubmittedInSession();
}
