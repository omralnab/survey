import type { SurveyQuestion } from "@/types/survey";

export const TOTAL_QUESTIONS = 17;

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: "currentPos",
    type: "single",
    required: true,
    title: {
      ar: "ما هو نظام الـ POS الذي تستخدمونه حاليًا؟",
      en: "Which POS system do you currently use?",
    },
    otherField: "currentPosOther",
    otherPlaceholder: {
      ar: "اكتب اسم النظام",
      en: "Enter the system name",
    },
    options: [
      { key: "foodics", label: { ar: "Foodics", en: "Foodics" } },
      { key: "fascano", label: { ar: "Fascano", en: "Fascano" } },
      { key: "oracle_micros", label: { ar: "Oracle / Micros", en: "Oracle / Micros" } },
      { key: "square", label: { ar: "Square", en: "Square" } },
      { key: "lightspeed", label: { ar: "Lightspeed", en: "Lightspeed" } },
      { key: "toast", label: { ar: "Toast", en: "Toast" } },
      {
        key: "other",
        label: { ar: "نظام آخر", en: "Other" },
        allowsOther: true,
      },
      {
        key: "none",
        label: { ar: "لا نستخدم POS حاليًا", en: "We currently don't use a POS" },
      },
    ],
  },
  {
    id: "satisfaction",
    type: "single",
    required: true,
    title: {
      ar: "ما مدى رضاكم عن نظام الـ POS الحالي؟",
      en: "How satisfied are you with your current POS?",
    },
    options: [
      { key: "very_satisfied", label: { ar: "راضٍ جدًا", en: "Very satisfied" } },
      { key: "satisfied", label: { ar: "راضٍ", en: "Satisfied" } },
      { key: "neutral", label: { ar: "محايد", en: "Neutral" } },
      { key: "unsatisfied", label: { ar: "غير راضٍ", en: "Unsatisfied" } },
      {
        key: "very_unsatisfied",
        label: { ar: "غير راضٍ جدًا", en: "Very unsatisfied" },
      },
    ],
  },
  {
    id: "currentProblems",
    type: "multiple",
    required: true,
    maxSelections: 3,
    title: {
      ar: "ما أكبر المشاكل التي تواجهونها مع الـ POS الحالي؟",
      en: "What are the biggest problems with your current POS?",
    },
    helper: {
      ar: "اختر حتى 3 خيارات",
      en: "Choose up to 3 options",
    },
    otherField: "currentProblemsOther",
    otherPlaceholder: {
      ar: "اكتب المشكلة",
      en: "Describe the problem",
    },
    options: [
      {
        key: "slow_unreliable",
        label: { ar: "النظام بطيء أو غير مستقر", en: "Slow or unreliable" },
      },
      {
        key: "hard_for_staff",
        label: {
          ar: "صعب على الموظفين استخدامه",
          en: "Difficult for employees to use",
        },
      },
      {
        key: "poor_support",
        label: { ar: "الدعم الفني ضعيف", en: "Poor customer support" },
      },
      {
        key: "too_expensive",
        label: { ar: "السعر مرتفع", en: "Too expensive" },
      },
      {
        key: "weak_sales_reports",
        label: { ar: "تقارير المبيعات ضعيفة", en: "Weak sales reports" },
      },
      {
        key: "weak_inventory",
        label: { ar: "إدارة المخزون ضعيفة", en: "Weak inventory management" },
      },
      {
        key: "difficult_menu",
        label: { ar: "إدارة المنيو صعبة", en: "Difficult menu management" },
      },
      {
        key: "difficult_orders",
        label: { ar: "إدارة الطلبات صعبة", en: "Difficult order management" },
      },
      {
        key: "hard_to_see_profit",
        label: {
          ar: "صعب معرفة الأرباح الفعلية",
          en: "Difficult to understand actual profit",
        },
      },
      {
        key: "limited_integrations",
        label: { ar: "الـ Integrations محدودة", en: "Limited integrations" },
      },
      {
        key: "no_major_problems",
        label: { ar: "لا توجد مشاكل كبيرة", en: "No major problems" },
      },
      {
        key: "other",
        label: { ar: "مشكلة أخرى", en: "Other" },
        allowsOther: true,
      },
    ],
  },
  {
    id: "importantFeatures",
    type: "multiple",
    required: true,
    maxSelections: 5,
    title: {
      ar: "ما أهم الـ Features بالنسبة لكم عند اختيار POS؟",
      en: "Which POS features are most important to you?",
    },
    helper: {
      ar: "اختر حتى 5 خيارات",
      en: "Choose up to 5 options",
    },
    options: [
      {
        key: "fast_order_management",
        label: {
          ar: "إدارة الطلبات بسرعة وسهولة",
          en: "Fast and simple order management",
        },
      },
      {
        key: "menu_management",
        label: { ar: "Menu Management", en: "Menu management" },
      },
      {
        key: "inventory_management",
        label: { ar: "Inventory Management", en: "Inventory management" },
      },
      {
        key: "ingredient_tracking",
        label: { ar: "Ingredient Tracking", en: "Ingredient tracking" },
      },
      {
        key: "sales_reports",
        label: { ar: "Sales Reports", en: "Sales reports" },
      },
      {
        key: "profit_margin_reports",
        label: { ar: "Profit & Margin Reports", en: "Profit and margin reports" },
      },
      {
        key: "product_performance",
        label: { ar: "Product Performance", en: "Product performance" },
      },
      {
        key: "customer_analytics",
        label: { ar: "Customer Analytics", en: "Customer analytics" },
      },
      {
        key: "kds",
        label: {
          ar: "Kitchen Display System",
          en: "Kitchen Display System",
        },
      },
      {
        key: "qr_ordering",
        label: { ar: "QR Ordering", en: "QR ordering" },
      },
      {
        key: "multi_branch",
        label: {
          ar: "Multi-Branch Management",
          en: "Multi-branch management",
        },
      },
      {
        key: "discounts_promotions",
        label: {
          ar: "Discounts & Promotions",
          en: "Discounts and promotions",
        },
      },
      {
        key: "online_order_integration",
        label: {
          ar: "Online Order Integration",
          en: "Online order integration",
        },
      },
      {
        key: "payment_integration",
        label: { ar: "Payment Integration", en: "Payment integration" },
      },
      {
        key: "local_support",
        label: { ar: "دعم فني محلي", en: "Local customer support" },
      },
      {
        key: "offline_mode",
        label: { ar: "Offline Mode", en: "Offline mode" },
      },
    ],
  },
  {
    id: "dashboardMetrics",
    type: "multiple",
    required: true,
    maxSelections: 5,
    title: {
      ar: "ما أهم المعلومات التي تريدون رؤيتها في الـ POS Dashboard؟",
      en: "What information would you most like to see in your POS dashboard?",
    },
    helper: {
      ar: "اختر حتى 5 خيارات",
      en: "Choose up to 5 options",
    },
    options: [
      {
        key: "daily_sales",
        label: { ar: "المبيعات اليومية", en: "Daily sales" },
      },
      {
        key: "number_of_orders",
        label: { ar: "عدد الطلبات", en: "Number of orders" },
      },
      {
        key: "average_order_value",
        label: { ar: "Average Order Value", en: "Average order value" },
      },
      {
        key: "gross_profit",
        label: { ar: "Gross Profit", en: "Gross profit" },
      },
      {
        key: "product_profit_margins",
        label: { ar: "Product Profit Margins", en: "Product profit margins" },
      },
      {
        key: "best_selling",
        label: { ar: "أفضل المنتجات مبيعًا", en: "Best-selling products" },
      },
      {
        key: "most_profitable",
        label: {
          ar: "أكثر المنتجات ربحية",
          en: "Most profitable products",
        },
      },
      {
        key: "low_performing",
        label: {
          ar: "المنتجات ضعيفة الأداء",
          en: "Low-performing products",
        },
      },
      {
        key: "peak_hours",
        label: { ar: "Peak Hours", en: "Peak hours" },
      },
      {
        key: "quiet_hours",
        label: { ar: "Quiet Hours", en: "Quiet hours" },
      },
      {
        key: "discounts",
        label: { ar: "Discounts", en: "Discounts" },
      },
      {
        key: "inventory_levels",
        label: { ar: "Inventory Levels", en: "Inventory levels" },
      },
      {
        key: "wastage",
        label: { ar: "Wastage", en: "Wastage" },
      },
      {
        key: "customer_return_rate",
        label: { ar: "Customer Return Rate", en: "Customer return rate" },
      },
    ],
  },
  {
    id: "switchingReasons",
    type: "multiple",
    required: true,
    maxSelections: 3,
    title: {
      ar: "ما أكثر الأشياء التي قد تجعلكم تغيرون الـ POS الحالي؟",
      en: "What would most make you switch from your current POS?",
    },
    helper: {
      ar: "اختر حتى 3 خيارات",
      en: "Choose up to 3 options",
    },
    options: [
      {
        key: "better_price",
        label: { ar: "سعر أفضل", en: "Better price" },
      },
      {
        key: "easier_to_use",
        label: { ar: "أسهل في الاستخدام", en: "Easier to use" },
      },
      {
        key: "more_stable",
        label: { ar: "أكثر استقرارًا", en: "More stable" },
      },
      {
        key: "better_support",
        label: { ar: "دعم فني أفضل", en: "Better customer support" },
      },
      {
        key: "better_inventory",
        label: { ar: "Inventory أفضل", en: "Better inventory" },
      },
      {
        key: "better_reports",
        label: {
          ar: "Reports & Analytics أفضل",
          en: "Better reports & analytics",
        },
      },
      {
        key: "better_profitability",
        label: {
          ar: "Profitability Tracking أفضل",
          en: "Better profitability tracking",
        },
      },
      {
        key: "more_integrations",
        label: { ar: "Integrations أكثر", en: "More integrations" },
      },
      {
        key: "better_order_management",
        label: {
          ar: "Order Management أفضل",
          en: "Better order management",
        },
      },
      {
        key: "better_menu_management",
        label: {
          ar: "Menu Management أفضل",
          en: "Better menu management",
        },
      },
      {
        key: "better_loyalty_customers",
        label: {
          ar: "Loyalty وCustomer Management أفضل",
          en: "Better loyalty & customer management",
        },
      },
      {
        key: "not_considering_switch",
        label: {
          ar: "لا أفكر في تغيير النظام الحالي",
          en: "I'm not considering switching",
        },
      },
    ],
  },
  {
    id: "mainImprovement",
    type: "single",
    required: true,
    title: {
      ar: "لو تقدرون تحسنون شيء واحد فقط في الـ POS الحالي، ماذا تختارون؟",
      en: "If you could improve only one thing in your current POS, what would it be?",
    },
    otherField: "mainImprovementOther",
    otherPlaceholder: {
      ar: "ما هو؟",
      en: "What is it?",
    },
    options: [
      {
        key: "speed_stability",
        label: { ar: "السرعة والاستقرار", en: "Speed and stability" },
      },
      {
        key: "ease_of_use",
        label: { ar: "سهولة الاستخدام", en: "Ease of use" },
      },
      {
        key: "order_management",
        label: { ar: "إدارة الطلبات", en: "Order management" },
      },
      {
        key: "menu_management",
        label: { ar: "إدارة المنيو", en: "Menu management" },
      },
      {
        key: "inventory",
        label: { ar: "إدارة المخزون", en: "Inventory management" },
      },
      {
        key: "reports_analytics",
        label: { ar: "التقارير والتحليلات", en: "Reports and analytics" },
      },
      {
        key: "profit_visibility",
        label: {
          ar: "معرفة الأرباح بشكل أفضل",
          en: "Better profit visibility",
        },
      },
      { key: "loyalty", label: { ar: "Loyalty", en: "Loyalty" } },
      {
        key: "customer_database",
        label: { ar: "Customer Database", en: "Customer Database" },
      },
      { key: "promotions", label: { ar: "Promotions", en: "Promotions" } },
      {
        key: "integrations",
        label: { ar: "Integrations", en: "Integrations" },
      },
      {
        key: "support",
        label: { ar: "الدعم الفني", en: "Customer support" },
      },
      { key: "price", label: { ar: "السعر", en: "Price" } },
      {
        key: "other",
        label: { ar: "شيء آخر", en: "Something else" },
        allowsOther: true,
      },
    ],
  },
  {
    id: "loyaltyMethod",
    type: "single",
    required: true,
    title: {
      ar: "كيف تديرون الـ Loyalty حاليًا؟",
      en: "How do you currently manage loyalty?",
    },
    otherField: "loyaltyMethodOther",
    otherPlaceholder: {
      ar: "اكتب الطريقة",
      en: "Describe your method",
    },
    options: [
      {
        key: "loyalty_in_pos",
        label: { ar: "Loyalty داخل الـ POS", en: "Loyalty inside the POS" },
      },
      {
        key: "separate_loyalty",
        label: {
          ar: "نظام Loyalty منفصل",
          en: "A separate loyalty system",
        },
      },
      {
        key: "own_app",
        label: { ar: "تطبيق خاص بنا", en: "Our own app" },
      },
      {
        key: "manual_stamps",
        label: {
          ar: "نقاط أو Stamp Card يدوي",
          en: "Manual points or stamp card",
        },
      },
      {
        key: "whatsapp_phone",
        label: { ar: "WhatsApp / رقم الهاتف", en: "WhatsApp / phone number" },
      },
      {
        key: "no_loyalty",
        label: {
          ar: "لا يوجد لدينا Loyalty Program حاليًا",
          en: "We don't have a loyalty program currently",
        },
      },
      {
        key: "other",
        label: { ar: "طريقة أخرى", en: "Other" },
        allowsOther: true,
      },
    ],
  },
  {
    id: "repeatCustomerKnowledge",
    type: "single",
    required: true,
    title: {
      ar: "هل تعرفون من هم عملاؤكم المتكررون؟",
      en: "Do you know who your repeat customers are?",
    },
    options: [
      {
        key: "yes_clearly",
        label: { ar: "نعم، بشكل واضح", en: "Yes, clearly" },
      },
      {
        key: "know_some",
        label: { ar: "نعرف بعضهم فقط", en: "We know some of them" },
      },
      {
        key: "have_data_unused",
        label: {
          ar: "لدينا بيانات ولكن لا نستخدمها جيدًا",
          en: "We have the data but don't use it effectively",
        },
      },
      { key: "no", label: { ar: "لا", en: "No" } },
    ],
  },
  {
    id: "customerDatabase",
    type: "single",
    required: true,
    title: {
      ar: "هل لديكم Customer Database حاليًا؟",
      en: "Do you currently have a customer database?",
    },
    options: [
      {
        key: "yes_effective",
        label: {
          ar: "نعم ونستخدمها بشكل فعّال",
          en: "Yes, and we use it effectively",
        },
      },
      {
        key: "yes_limited",
        label: {
          ar: "نعم ولكن استخدامها محدود",
          en: "Yes, but usage is limited",
        },
      },
      {
        key: "only_in_pos",
        label: {
          ar: "البيانات موجودة داخل الـ POS فقط",
          en: "Data exists only inside the POS",
        },
      },
      {
        key: "no_database",
        label: {
          ar: "لا توجد لدينا Customer Database",
          en: "We don't have a customer database",
        },
      },
      {
        key: "dont_know",
        label: { ar: "لا أعرف", en: "I don't know" },
      },
    ],
  },
  {
    id: "integrationCapability",
    type: "single",
    required: true,
    title: {
      ar: "هل يمكن ربط نظام إضافي بجانب الـ POS الحالي؟",
      en: "Can an additional system be integrated with your current POS?",
    },
    options: [
      {
        key: "yes_easily",
        label: { ar: "نعم، بسهولة", en: "Yes, easily" },
      },
      {
        key: "yes_needs_integration",
        label: {
          ar: "نعم، ولكن يحتاج Integration",
          en: "Yes, but requires an integration",
        },
      },
      { key: "difficult", label: { ar: "صعب", en: "Difficult" } },
      { key: "no", label: { ar: "لا", en: "No" } },
      {
        key: "dont_know",
        label: { ar: "لا أعرف", en: "I don't know" },
      },
    ],
  },
  {
    id: "pickupOrders",
    type: "single",
    required: true,
    title: {
      ar: "كم Pickup Order يجيكم تقريبًا؟",
      en: "About how many pickup orders do you get?",
    },
    helper: {
      ar: "تقدير تقريبي يكفي",
      en: "An estimate is fine",
    },
    options: [
      {
        key: "no_pickup",
        label: { ar: "لا يوجد Pickup", en: "No pickup orders" },
      },
      {
        key: "under_10",
        label: { ar: "أقل من 10 يوميًا", en: "Fewer than 10 per day" },
      },
      {
        key: "10_30",
        label: { ar: "10–30 يوميًا", en: "10–30 per day" },
      },
      {
        key: "31_60",
        label: { ar: "31–60 يوميًا", en: "31–60 per day" },
      },
      {
        key: "61_100",
        label: { ar: "61–100 يوميًا", en: "61–100 per day" },
      },
      {
        key: "over_100",
        label: { ar: "أكثر من 100 يوميًا", en: "More than 100 per day" },
      },
      {
        key: "dont_know",
        label: { ar: "لا أعرف العدد", en: "I don't know the number" },
      },
    ],
  },
  {
    id: "orderManagementChannels",
    type: "multiple",
    required: true,
    title: {
      ar: "كيف تديرون الطلبات حاليًا؟",
      en: "How do you currently manage orders?",
    },
    helper: {
      ar: "يمكن اختيار أكثر من خيار",
      en: "Select all that apply",
    },
    otherField: "orderManagementOther",
    otherPlaceholder: {
      ar: "اكتب الطريقة",
      en: "Describe your method",
    },
    options: [
      {
        key: "directly_from_pos",
        label: { ar: "مباشرة من الـ POS", en: "Directly from the POS" },
      },
      {
        key: "dine_in",
        label: { ar: "الطلبات داخل المطعم", en: "In-restaurant orders" },
      },
      { key: "whatsapp", label: { ar: "WhatsApp", en: "WhatsApp" } },
      {
        key: "phone_call",
        label: { ar: "اتصال هاتفي", en: "Phone call" },
      },
      { key: "website", label: { ar: "Website", en: "Website" } },
      {
        key: "qr_ordering",
        label: { ar: "QR Ordering", en: "QR Ordering" },
      },
      {
        key: "delivery_apps",
        label: { ar: "Delivery Apps", en: "Delivery apps" },
      },
      {
        key: "own_app",
        label: { ar: "تطبيق خاص بنا", en: "Our own app" },
      },
      {
        key: "multiple_separate",
        label: {
          ar: "أكثر من نظام منفصل",
          en: "Multiple separate systems",
        },
      },
      {
        key: "other",
        label: { ar: "طريقة أخرى", en: "Other" },
        allowsOther: true,
      },
    ],
  },
  {
    id: "loyaltyExperience",
    type: "single",
    required: true,
    title: {
      ar: "هل استخدمتم Loyalty Program سابقًا؟",
      en: "Have you used a loyalty program before?",
    },
    options: [
      {
        key: "yes_currently",
        label: {
          ar: "نعم ونستخدمه حاليًا",
          en: "Yes, and we currently use one",
        },
      },
      {
        key: "yes_stopped",
        label: {
          ar: "نعم ولكن توقفنا عن استخدامه",
          en: "Yes, but we stopped using it",
        },
      },
      {
        key: "tried_not_effective",
        label: {
          ar: "جربناه ولم يكن فعالًا",
          en: "We tried it and it wasn't effective",
        },
      },
      {
        key: "never_tried",
        label: {
          ar: "لا، لم نجرب Loyalty من قبل",
          en: "No, we've never tried loyalty before",
        },
      },
    ],
  },
  {
    id: "promotionChannels",
    type: "multiple",
    required: true,
    title: {
      ar: "كيف ترسلون Promotions للعملاء حاليًا؟",
      en: "How do you currently send promotions to customers?",
    },
    helper: {
      ar: "يمكن اختيار أكثر من خيار",
      en: "Select all that apply",
    },
    otherField: "promotionChannelsOther",
    otherPlaceholder: {
      ar: "اكتب الطريقة",
      en: "Describe your method",
    },
    options: [
      { key: "whatsapp", label: { ar: "WhatsApp", en: "WhatsApp" } },
      { key: "sms", label: { ar: "SMS", en: "SMS" } },
      {
        key: "instagram_social",
        label: {
          ar: "Instagram / Social Media",
          en: "Instagram / Social Media",
        },
      },
      { key: "email", label: { ar: "Email", en: "Email" } },
      {
        key: "through_pos",
        label: { ar: "من خلال الـ POS", en: "Through the POS" },
      },
      {
        key: "through_loyalty",
        label: {
          ar: "من خلال Loyalty System",
          en: "Through a loyalty system",
        },
      },
      {
        key: "push_notifications",
        label: { ar: "Push Notifications", en: "Push notifications" },
      },
      {
        key: "no_promotions",
        label: {
          ar: "لا نرسل Promotions حاليًا",
          en: "We don't send promotions currently",
        },
      },
      {
        key: "other",
        label: { ar: "طريقة أخرى", en: "Other" },
        allowsOther: true,
      },
    ],
  },
  {
    id: "giftCardImportance",
    type: "single",
    required: true,
    title: {
      ar: "هل Gift Cards مهمة لكم؟",
      en: "Are gift cards important to you?",
    },
    options: [
      {
        key: "very_important",
        label: { ar: "مهمة جدًا", en: "Very important" },
      },
      { key: "important", label: { ar: "مهمة", en: "Important" } },
      {
        key: "could_be_useful",
        label: { ar: "قد تكون مفيدة", en: "Could be useful" },
      },
      {
        key: "not_important",
        label: { ar: "غير مهمة", en: "Not important" },
      },
      {
        key: "not_considered",
        label: {
          ar: "لم نفكر فيها من قبل",
          en: "We haven't considered them before",
        },
      },
    ],
  },
  {
    id: "willingnessToPayFor",
    type: "multiple",
    required: true,
    maxSelections: 3,
    title: {
      ar: "ما أكثر شيء ممكن تدفعون مقابله في نظام POS جديد؟",
      en: "What would you most pay for in a new POS system?",
    },
    helper: {
      ar: "اختر حتى 3 خيارات",
      en: "Choose up to 3 options",
    },
    options: [
      {
        key: "faster_more_stable",
        label: {
          ar: "نظام أسرع وأكثر استقرارًا",
          en: "A faster and more stable system",
        },
      },
      {
        key: "local_support",
        label: {
          ar: "دعم فني سريع ومحلي",
          en: "Fast local customer support",
        },
      },
      {
        key: "strong_inventory",
        label: {
          ar: "Inventory Management قوي",
          en: "Strong inventory management",
        },
      },
      {
        key: "advanced_analytics",
        label: { ar: "Advanced Analytics", en: "Advanced analytics" },
      },
      {
        key: "accurate_profit_margin",
        label: {
          ar: "معرفة Profit & Margin بشكل دقيق",
          en: "Accurate profit & margin visibility",
        },
      },
      {
        key: "customer_database",
        label: { ar: "Customer Database", en: "Customer Database" },
      },
      {
        key: "loyalty_system",
        label: { ar: "Loyalty System", en: "Loyalty System" },
      },
      {
        key: "promotions_marketing",
        label: {
          ar: "Promotions & Marketing Tools",
          en: "Promotions & marketing tools",
        },
      },
      {
        key: "online_ordering",
        label: { ar: "Online Ordering", en: "Online ordering" },
      },
      {
        key: "qr_ordering",
        label: { ar: "QR Ordering", en: "QR Ordering" },
      },
      {
        key: "kds",
        label: {
          ar: "Kitchen Display System",
          en: "Kitchen Display System",
        },
      },
      {
        key: "multi_branch",
        label: {
          ar: "Multi-Branch Management",
          en: "Multi-branch management",
        },
      },
      {
        key: "delivery_integrations",
        label: {
          ar: "Delivery Integrations",
          en: "Delivery integrations",
        },
      },
      {
        key: "payment_integrations",
        label: {
          ar: "Payment Integrations",
          en: "Payment integrations",
        },
      },
      {
        key: "automation",
        label: {
          ar: "Automation وتقليل العمل اليدوي",
          en: "Automation and less manual work",
        },
      },
      {
        key: "wont_pay_extra",
        label: {
          ar: "لن أدفع مبلغ إضافي مقابل Features",
          en: "I wouldn't pay extra for features",
        },
      },
    ],
  },
];

export const additionalCommentQuestion: SurveyQuestion = {
  id: "additionalComment",
  type: "text",
  required: false,
  title: {
    ar: "هل هناك شيء مهم في الـ POS لم نسأل عنه؟",
    en: "Is there anything important about POS systems that we didn't ask?",
  },
  placeholder: {
    ar: "اكتب أي فكرة أو مشكلة تواجهونها...",
    en: "Tell us about any feature or problem we missed...",
  },
};
