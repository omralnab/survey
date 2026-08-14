import type { Language, LocalizedString } from "@/types/survey";

export const uiCopy = {
  brand: "OCO POS",
  languageAr: "العربية",
  languageEn: "English",
  introTitle: {
    ar: "ساعدنا نبني POS أفضل للمطاعم",
    en: "Help us build a better POS for restaurants",
  },
  introBody: {
    ar: "نعمل حاليًا على تطوير نظام OCO POS ونريد أن نبنيه بناءً على احتياجات المطاعم الفعلية.",
    en: "We are currently developing OCO POS and want to build it around what restaurants actually need.",
  },
  introMeta: {
    ar: "الاستبيان بسيط ويستغرق تقريبًا 2–3 دقائق.",
    en: "This survey takes around 2–3 minutes.",
  },
  startSurvey: {
    ar: "ابدأ الاستبيان",
    en: "Start Survey",
  },
  previous: {
    ar: "السابق",
    en: "Previous",
  },
  next: {
    ar: "التالي",
    en: "Next",
  },
  submit: {
    ar: "إرسال الإجابات",
    en: "Submit Responses",
  },
  submitting: {
    ar: "جاري الإرسال...",
    en: "Submitting...",
  },
  questionOf: {
    ar: "سؤال {current} من {total}",
    en: "Question {current} of {total}",
  },
  requiredError: {
    ar: "يرجى الإجابة للمتابعة",
    en: "Please answer this question to continue",
  },
  maxSelectionsError: {
    ar: "يمكنك اختيار حتى {max} خيارات فقط",
    en: "You can select up to {max} options only",
  },
  successTitle: {
    ar: "شكرًا لمشاركتكم 🤝",
    en: "Thank you for your feedback 🤝",
  },
  successBody: {
    ar: "إجاباتكم ستساعدنا في بناء OCO POS بناءً على احتياجات المطاعم الفعلية.",
    en: "Your answers will help us build OCO POS around what restaurants actually need.",
  },
  optional: {
    ar: "اختياري",
    en: "Optional",
  },
  reviewTitle: {
    ar: "مراجعة الإجابات",
    en: "Review Your Answers",
  },
  surveySummary: {
    ar: "ملخص الاستبيان",
    en: "Survey Summary",
  },
  editAnswers: {
    ar: "تعديل الإجابات",
    en: "Edit Answers",
  },
  saveAsPdf: {
    ar: "حفظ كـ PDF",
    en: "Save as PDF",
  },
  finishSurvey: {
    ar: "إنهاء الاستبيان",
    en: "Finish Survey",
  },
  startNewSurvey: {
    ar: "بدء استبيان جديد",
    en: "Start New Survey",
  },
} as const;

export function t(value: LocalizedString, language: Language): string {
  return value[language];
}

export function formatCopy(
  template: LocalizedString,
  language: Language,
  vars: Record<string, string | number>,
): string {
  return Object.entries(vars).reduce(
    (result, [key, value]) => result.replace(`{${key}}`, String(value)),
    t(template, language),
  );
}
