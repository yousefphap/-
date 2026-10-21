export type Language = 'ar' | 'en' | 'ur';
export type ServiceCategory = 'all' | 'advisory' | 'representation';
export type ClientEntityType = 'corporate' | 'individual' | 'foreign_investor';
export type UrgencyLevel = 'standard' | 'priority';

export interface LanguageOption {
  code: Language;
  labelNative: string;
  labelAr: string;
  labelEn: string;
  dir: 'rtl' | 'ltr';
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  {
    code: 'ar',
    labelNative: 'العربية',
    labelAr: 'العربية',
    labelEn: 'Arabic',
    dir: 'rtl',
  },
  {
    code: 'en',
    labelNative: 'English',
    labelAr: 'الإنجليزية',
    labelEn: 'English',
    dir: 'ltr',
  },
  {
    code: 'ur',
    labelNative: 'اردو',
    labelAr: 'الأوردو',
    labelEn: 'Urdu',
    dir: 'rtl',
  },
];

export function isRtl(lang: Language): boolean {
  return lang === 'ar' || lang === 'ur';
}

export function tr<T>(lang: Language, ar: T, en: T, ur: T): T {
  if (lang === 'ur') return ur;
  if (lang === 'en') return en;
  return ar;
}

export interface LegalService {
  id: string;
  index: string;
  category: 'advisory' | 'representation';
  titleAr: string;
  titleEn: string;
  titleUr: string;
  summaryAr: string;
  summaryEn: string;
  summaryUr: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
  deliverablesUr: string[];
  requiredDocsAr: string[];
  requiredDocsEn: string[];
  requiredDocsUr: string[];
  typicalTimelineAr: string;
  typicalTimelineEn: string;
  typicalTimelineUr: string;
  iconKey: string;
}

export interface FirmValue {
  id: string;
  titleAr: string;
  titleEn: string;
  titleUr: string;
  descAr: string;
  descEn: string;
  descUr: string;
  iconKey: string;
}

export interface FirmGoal {
  id: string;
  index: string;
  titleAr: string;
  titleEn: string;
  titleUr: string;
  descAr: string;
  descEn: string;
  descUr: string;
}

export interface TeamPillar {
  id: string;
  titleAr: string;
  titleEn: string;
  titleUr: string;
  roleAr: string;
  roleEn: string;
  roleUr: string;
  descAr: string;
  descEn: string;
  descUr: string;
  specialtiesAr: string[];
  specialtiesEn: string[];
  specialtiesUr: string[];
}

export interface ConsultationFormInput {
  fullName: string;
  phone: string;
  email: string;
  entityType: ClientEntityType;
  serviceId: string;
  urgency: UrgencyLevel;
  summary: string;
}

export interface ConsultationValidationErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  serviceId?: string;
  summary?: string;
}

export interface ConsultationTicket extends ConsultationFormInput {
  referenceId: string;
  createdAt: string;
  serviceTitleAr: string;
  serviceTitleEn: string;
  serviceTitleUr: string;
}

export interface ScopeEstimateResult {
  engagementModelAr: string;
  engagementModelEn: string;
  engagementModelUr: string;
  initialReviewDays: number;
  executionPhasesAr: string[];
  executionPhasesEn: string[];
  executionPhasesUr: string[];
  checklistAr: string[];
  checklistEn: string[];
  checklistUr: string[];
  recommendedCategory: 'advisory' | 'representation';
}

export interface SocialMediaPlatform {
  id: 'x' | 'instagram' | 'snapchat' | 'facebook' | 'tiktok' | 'whatsapp';
  nameAr: string;
  nameEn: string;
  nameUr: string;
  url: string;
}

export const FIRM_CONTACT = {
  phoneDisplay: '0569888100',
  phoneInternational: '+966569888100',
  whatsappDisplay: '0593500596',
  whatsappInternational: '+966593500596',
  whatsappUrl:
    'https://wa.me/966593500596?text=' +
    encodeURIComponent(
      'السلام عليكم ورحمة الله وبركاته، أرغب في الحصول على استشارة قانونية لدى شركة سامي الشريف للمحاماة والاستشارات القانونية.'
    ),
  email: 'alshareeflawyer@gmail.com',
  locationAr: 'المملكة العربية السعودية - مكة المكرمة - جدة',
  locationEn: 'Kingdom of Saudi Arabia · Makkah · Jeddah',
  locationUr: 'مملکتِ سعودی عرب · مکہ مکرمہ - جدہ',
  googleMapsUrl: 'https://maps.app.goo.gl/H7iEQmXCky7TXZFy7',
  firmNameAr: 'شركة سامي الشريف للمحاماة والاستشارات القانونية',
  firmNameShortAr: 'سامي الشريف للمحاماة',
  firmNameEn: 'Sami Al-Sharif Law Firm & Legal Consultations',
  firmNameShortEn: 'Sami Al-Sharif Law Firm',
  firmNameUr: 'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز',
  firmNameShortUr: 'سامی الشریف لاء فرم',
};

export const SOCIAL_MEDIA_LINKS: SocialMediaPlatform[] = [
  {
    id: 'x',
    nameAr: 'منصة إكس',
    nameEn: 'X',
    nameUr: 'ایکس (X)',
    url: 'https://x.com/AlshareefLawyer',
  },
  {
    id: 'instagram',
    nameAr: 'إنستغرام',
    nameEn: 'Instagram',
    nameUr: 'انسٹاگرام',
    url: 'https://www.instagram.com/alshareef_lawyer',
  },
  {
    id: 'snapchat',
    nameAr: 'سناب شات',
    nameEn: 'Snapchat',
    nameUr: 'اسنیپ چیٹ',
    url: 'https://www.snapchat.com/@alshareeflawyer',
  },
  {
    id: 'facebook',
    nameAr: 'فيسبوك',
    nameEn: 'Facebook',
    nameUr: 'فیس بک',
    url: 'https://www.facebook.com/alshareeflawyer',
  },
  {
    id: 'tiktok',
    nameAr: 'تيك توك',
    nameEn: 'TikTok',
    nameUr: 'ٹک ٹاک',
    url: 'https://www.tiktok.com/@alshareeflawyer',
  },
  {
    id: 'whatsapp',
    nameAr: 'واتساب',
    nameEn: 'WhatsApp',
    nameUr: 'واٹس ایپ',
    url: FIRM_CONTACT.whatsappUrl,
  },
];

export const LEGAL_SERVICES: LegalService[] = [
  // Advisory Services (خدمات الاستشارات القانونية - Slide 9 & 18)
  {
    id: 'legal-consultations',
    index: '01',
    category: 'advisory',
    titleAr: 'تقديم الاستشارات القانونية',
    titleEn: 'Legal Consultations',
    titleUr: 'قانونی مشاورت کی فراہمی',
    summaryAr:
      'رأي قانوني مؤصل شرعاً ونظاماً يدعم اتخاذ القرار السليم لقطاع الأعمال والمؤسسات والأفراد في مختلف الأنظمة السعودية.',
    summaryEn:
      'Rigorous legal opinions grounded in Saudi regulations to support sound decision-making for businesses, institutions, and individuals.',
    summaryUr:
      'سعودی قوانین اور شرعی اصولوں پر مبنی مستند قانونی رائے جو کاروباری اداروں، کمپنیوں اور افراد کو درست فیصلے کرنے میں مدد فراہم کرتی ہے۔',
    deliverablesAr: [
      'مذكرة رأي قانوني مكتوبة ومؤصلة بالأنظمة واللوائح السارية',
      'تقييم الموقف النظامي والبدائل المتاحة لتقليل المخاطر',
      'جلسة مناقشة استشارية مباشرة أو مرئية مع مستشار مختص',
    ],
    deliverablesEn: [
      'Written legal opinion memorandum grounded in active Saudi laws',
      'Statutory position assessment and risk-mitigation alternatives',
      'Direct or virtual advisory session with a specialized counsel',
    ],
    deliverablesUr: [
      'نافذ العمل سعودی قوانین اور ضوابط پر مبنی تحریری قانونی رائے کا یادداشت نامہ',
      'قانونی حیثیت کا جائزہ اور خطرات کو کم کرنے کے لیے دستیاب متبادل حل',
      'ماہر قانونی مشیر کے ساتھ براہِ راست یا آن لائن مشاورتی نشست',
    ],
    requiredDocsAr: [
      'ملخص الوقائع والتسلسل الزمني للموضوع',
      'نسخ العقود أو المراسلات ذات الصلة',
      'بيانات الهوية أو السجل التجاري للمنشأة',
    ],
    requiredDocsEn: [
      'Chronological summary of facts and background',
      'Copies of relevant contracts or official correspondence',
      'National ID or Commercial Registration (CR) copy',
    ],
    requiredDocsUr: [
      'واقعات کا خلاصہ اور معاملے کی ترتیب وار تفصیل',
      'متعلقہ معاہدوں یا سرکاری خط و کتابت کی نقول',
      'قومی شناختی کارڈ/اقامہ یا تجارتی رجسٹریشن (CR) کی نقل',
    ],
    typicalTimelineAr: '1 - 3 أيام عمل',
    typicalTimelineEn: '1 - 3 Business Days',
    typicalTimelineUr: '1 تا 3 کاروباری دن',
    iconKey: 'message-square',
  },
  {
    id: 'contract-drafting',
    index: '02',
    category: 'advisory',
    titleAr: 'صياغة العقود ومراجعتها',
    titleEn: 'Contract Drafting & Review',
    titleUr: 'معاہدوں کی تیاری اور نظرثانی',
    summaryAr:
      'إعداد وصياغة ومراجعة الاتفاقيات والعقود التجارية والمدنية والعمالية باللغتين العربية والإنجليزية لحماية حقوق الأطراف ومنع النزاعات.',
    summaryEn:
      'Bilingual drafting and meticulous review of commercial, civil, and employment contracts to safeguard rights and prevent disputes.',
    summaryUr:
      'فریقین کے حقوق کے تحفظ اور تنازعات سے بچاؤ کے لیے تجارتی، دیوانی اور ملازمتی معاہدوں کی عربی اور انگریزی زبان میں تیاری اور باریک بینی سے جانچ پڑتال۔',
    deliverablesAr: [
      'مسودة عقد محكمة الصياغة متوافقة مع نظام المعاملات المدنية والتجارية',
      'تقرير ملاحظات قانونية وتعديلات مقترحة على بنود الالتزامات والجزاءات',
      'صياغة ملاحق العقود واتفاقيات عدم الإفصاح ومذكرات التفاهم',
    ],
    deliverablesEn: [
      'Precision-drafted agreement aligned with Saudi Civil & Commercial Laws',
      'Redline review report highlighting liability and penalty clauses',
      'Contract addenda, NDAs, and Memoranda of Understanding (MoUs)',
    ],
    deliverablesUr: [
      'سعودی دیوانی اور تجارتی قوانین کے مطابق جامع اور مستند معاہدے کا مسودہ',
      'ذمہ داریوں اور جرمانے کی شقوں پر قانونی ملاحظات اور تجویز کردہ ترامیم کی رپورٹ',
      'ضمیمہ معاہدے، رازداری کے معاہدے (NDA) اور مفاہمتی یادداشتیں (MoU)',
    ],
    requiredDocsAr: [
      'مسودة العقد المراد مراجعته أو بيانات الاتفاق الأساسية',
      'السجل التجاري وعقد التأسيس لأطراف التعاقد',
      'النطاق المالي والجدول الزمني للتنفيذ',
    ],
    requiredDocsEn: [
      'Draft contract or core commercial terms sheet',
      'Commercial Registration and Articles of Association of parties',
      'Financial scope and execution timeline',
    ],
    requiredDocsUr: [
      'زیرِ غور معاہدے کا مسودہ یا بنیادی تجارتی شرائط کی تفصیل',
      'معاہدے کے فریقین کی تجارتی رجسٹریشن اور عقدِ تاسیس',
      'مالیاتی دائرہ کار اور عملدرآمد کا ٹائم ٹیبل',
    ],
    typicalTimelineAr: '2 - 4 أيام عمل',
    typicalTimelineEn: '2 - 4 Business Days',
    typicalTimelineUr: '2 تا 4 کاروباری دن',
    iconKey: 'file-signature',
  },
  {
    id: 'business-risk-analysis',
    index: '03',
    category: 'advisory',
    titleAr: 'تحليل مخاطر الأعمال',
    titleEn: 'Business Risk Analysis',
    titleUr: 'کاروباری خطرات کا قانونی تجزیہ',
    summaryAr:
      'رصد وتقييم المخاطر النظامية والتعاقدية المحتملة في المشاريع والعمليات التجارية ووضع خطط استباقية للوقاية القانونية.',
    summaryEn:
      'Identifying and evaluating regulatory and contractual risks across business operations with proactive legal mitigation strategies.',
    summaryUr:
      'تجارتی منصوبوں اور آپریشنز میں ممکنہ قانونی اور معاہداتی خطرات کی نشاندہی اور پیشگی قانونی تحفظ کے لیے جامع حکمتِ عملی کی تیاری۔',
    deliverablesAr: [
      'مصفوفة تقييم المخاطر القانونية والتنظيمية للمنشأة أو المشروع',
      'خطة معالجة وقائية للثغرات التعاقدية والالتزامات النظامية',
      'توصيات الامتثال للأنظمة واللوائح القطاعية بالمملكة',
    ],
    deliverablesEn: [
      'Comprehensive legal & regulatory risk assessment matrix',
      'Preventive remediation plan for contractual vulnerabilities',
      'Sector-specific statutory compliance recommendations',
    ],
    deliverablesUr: [
      'ادارے یا منصوبے کے قانونی اور ریگولیٹری خطرات کی تشخیص کا جامع میٹرکس',
      'معاہداتی خامیوں اور قانونی ذمہ داریوں کے تدارک کا پیشگی پلان',
      'مملکت کے شعبہ جاتی قوانین اور ضوابط کی تعمیل کی سفارشات',
    ],
    requiredDocsAr: [
      'هيكل العمليات والعقود النموذجية المعتمدة في المنشأة',
      'التراخيص النظامية والسجلات التجارية السارية',
      'قائمة النزاعات أو المطالبات السابقة إن وجدت',
    ],
    requiredDocsEn: [
      'Operational structure and standard contract templates',
      'Active regulatory licenses and commercial registrations',
      'Record of prior claims or regulatory notices (if any)',
    ],
    requiredDocsUr: [
      'ادارے کا آپریشنل ڈھانچہ اور رائج معیاری معاہدوں کے نمونے',
      'فعال سرکاری لائسنس اور تجارتی رجسٹریشن اسناد',
      'سابقہ تنازعات یا قانونی مطالبات کی تفصیل (اگر کوئی ہو)',
    ],
    typicalTimelineAr: '3 - 5 أيام عمل',
    typicalTimelineEn: '3 - 5 Business Days',
    typicalTimelineUr: '3 تا 5 کاروباری دن',
    iconKey: 'shield-alert',
  },
  {
    id: 'transaction-due-diligence',
    index: '04',
    category: 'advisory',
    titleAr: 'دراسة مخرجات التعاملات',
    titleEn: 'Transaction Due Diligence',
    titleUr: 'تجارتی معاملات کی قانونی جانچ پڑتال',
    summaryAr:
      'فحص نافي للجهالة ودراسة متعمقة للآثار القانونية والمالية المترتبة على الصفقات التجارية والاندماجات والاستحواذات قبل إتمامها.',
    summaryEn:
      'In-depth legal due diligence and impact assessment of commercial transactions, mergers, and acquisitions prior to closing.',
    summaryUr:
      'تجارتی سودوں، انضمام اور حصول (M&A) کی تکمیل سے قبل ان کے قانونی اور مالیاتی اثرات کی گہری جانچ پڑتال (Legal Due Diligence)۔',
    deliverablesAr: [
      'تقرير الفحص القانوني النافي للجهالة (Legal Due Diligence)',
      'تحليل الالتزامات المستمرة وحقوق الملكية والديون المحتملة',
      'شروط الإقفال والضمانات التعاقدية اللازمة لإتمام الصفقة بأمان',
    ],
    deliverablesEn: [
      'Comprehensive Legal Due Diligence report',
      'Analysis of ongoing liabilities, title ownership, and contingent debts',
      'Closing conditions and contractual warranties for safe execution',
    ],
    deliverablesUr: [
      'جامع قانونی جانچ پڑتال (Legal Due Diligence) کی تفصیلی رپورٹ',
      'جاری ذمہ داریوں، ملکیت کے حقوق اور ممکنہ قرضوں کا تجزیہ',
      'سودے کی محفوظ تکمیل کے لیے اختتامی شرائط اور معاہداتی ضمانتیں',
    ],
    requiredDocsAr: [
      'مذكرة التفاهم أو خطاب النوايا الخاص بالصفقة',
      'القوائم والملفات القانونية والتعاقدية للكيان محل الدراسة',
      'شهادات الالتزام الزكوي والضريبي والتأمينات',
    ],
    requiredDocsEn: [
      'Transaction Letter of Intent (LoI) or Term Sheet',
      'Corporate, contractual, and regulatory files of target entity',
      'Zakat, tax, and GOSI compliance certificates',
    ],
    requiredDocsUr: [
      'معاملے سے متعلق مفاہمتی یادداشت (MoU) یا لیٹر آف انٹینٹ (LoI)',
      'متعلقہ کمپنی کی قانونی، معاہداتی اور ریگولیٹری فائلیں',
      'زکوٰۃ، ٹیکس اور سوشل انشورنس (GOSI) کی تعمیل کے سرٹیفکیٹس',
    ],
    typicalTimelineAr: '5 - 10 أيام عمل',
    typicalTimelineEn: '5 - 10 Business Days',
    typicalTimelineUr: '5 تا 10 کاروباری دن',
    iconKey: 'search-check',
  },
  {
    id: 'legal-dept-structuring',
    index: '05',
    category: 'advisory',
    titleAr: 'تأهيل الإدارات القانونية',
    titleEn: 'Legal Dept. Structuring',
    titleUr: 'قانونی شعبہ جات کی تشکیل و تربیت',
    summaryAr:
      'بناء وتطوير وتأهيل الإدارات القانونية الداخلية للشركات والمؤسسات وتزويدها بمنهجيات العمل والنماذج القياسية الحديثة.',
    summaryEn:
      'Building, structuring, and upgrading in-house legal departments with modern workflows, SOPs, and standardized contract libraries.',
    summaryUr:
      'کمپنیوں اور اداروں کے اندرونی قانونی شعبوں کی تشکیل، ترقی اور انہیں جدید طریقہ کار اور معیاری قانونی ٹیمپلیٹس سے آراستہ کرنا۔',
    deliverablesAr: [
      'الهيكل التنظيمي ودليل السياسات والإجراءات للإدارة القانونية',
      'مكتبة عقود ونماذج قانونية قياسية مخصصة لنشاط الشركة',
      'آليات حوكمة المراسلات القانونية وإدارة القضايا الداخلية',
    ],
    deliverablesEn: [
      'Organizational chart and Legal Department SOP manual',
      'Bespoke library of standardized contracts and legal templates',
      'Internal case management and legal correspondence protocols',
    ],
    deliverablesUr: [
      'قانونی شعبے کا تنظیمی ڈھانچہ اور پالیسیز و طریقہ کار (SOP) کا دستور العمل',
      'کمپنی کی سرگرمیوں کے مطابق معیاری معاہدوں اور قانونی فارمز کی لائبریری',
      'اندرونی مقدمات کے انتظام اور قانونی خط و کتابت کے ضوابط',
    ],
    requiredDocsAr: [
      'الهيكل الإداري الحالي للشركة ونطاق أعمالها',
      'النماذج واللوائح الداخلية المستخدمة حالياً',
      'أهداف التوسع التشغيلي للمنشأة',
    ],
    requiredDocsEn: [
      'Current corporate organizational chart and business scope',
      'Existing internal templates and policies',
      'Operational growth objectives',
    ],
    requiredDocsUr: [
      'کمپنی کا موجودہ انتظامی ڈھانچہ اور کاروباری دائرہ کار',
      'موجودہ اندرونی فارمز اور انتظامی ضوابط',
      'ادارے کے آپریشنل توسیعی اہداف',
    ],
    typicalTimelineAr: '7 - 14 يوم عمل',
    typicalTimelineEn: '7 - 14 Business Days',
    typicalTimelineUr: '7 تا 14 کاروباری دن',
    iconKey: 'network',
  },
  {
    id: 'corporate-governance',
    index: '06',
    category: 'advisory',
    titleAr: 'حوكمة الشركات',
    titleEn: 'Corporate Governance',
    titleUr: 'کارپوریٹ گورننس (کمپنیوں کا نظم و نسق)',
    summaryAr:
      'إعداد لوائح حوكمة الشركات وتنظيم العلاقة بين الشركاء ومجلس الإدارة والإدارة التنفيذية وفق نظام الشركات السعودي الحديث.',
    summaryEn:
      'Drafting corporate governance frameworks regulating shareholders, boards of directors, and executive management under Saudi Companies Law.',
    summaryUr:
      'جدید سعودی کمپنیز لاء کے تحت کارپوریٹ گورننس کے ضوابط کی تیاری اور شراکت داروں، بورڈ آف ڈائریکٹرز اور انتظامیہ کے درمیان تعلقات کی تنظیم۔',
    deliverablesAr: [
      'لائحة حوكمة الشركة وميثاق عمل مجلس الإدارة واللجان المنبثقة',
      'مصفوفة الصلاحيات والسلطات المالية والإدارية المعتمدة',
      'سياسات تعارض المصالح والإفصاح والشفافية وحماية حقوق المساهمين',
    ],
    deliverablesEn: [
      'Corporate Governance Manual and Board/Committee Charters',
      'Approved Authority and Financial Delegation Matrix (DoA)',
      'Conflict of interest, disclosure, and shareholder protection policies',
    ],
    deliverablesUr: [
      'کارپوریٹ گورننس مینوئل اور بورڈ آف ڈائریکٹرز و کمیٹیوں کا چارٹر',
      'منظور شدہ مالیاتی اور انتظامی اختیارات کا میٹرکس (DoA)',
      'مفادات کے ٹکراؤ سے بچاؤ، شفافیت اور شیئر ہولڈرز کے حقوق کے تحفظ کی پالیسیاں',
    ],
    requiredDocsAr: [
      'عقد التأسيس أو النظام الأساسي للشركة',
      'قرارات مجلس الإدارة أو جمعية الشركاء السابقة',
      'الهيكل التنظيمي للإدارة التنفيذية',
    ],
    requiredDocsEn: [
      'Articles of Association or Corporate Bylaws',
      'Previous Board or Shareholders Assembly resolutions',
      'Executive management organizational structure',
    ],
    requiredDocsUr: [
      'کمپنی کا عقدِ تاسیس یا بنیادی آئین (Bylaws)',
      'بورڈ آف ڈائریکٹرز یا شیئر ہولڈرز اسمبلی کی سابقہ قراردادیں',
      'ایگزیکٹو مینجمنٹ کا تنظیمی ڈھانچہ',
    ],
    typicalTimelineAr: '5 - 10 أيام عمل',
    typicalTimelineEn: '5 - 10 Business Days',
    typicalTimelineUr: '5 تا 10 کاروباری دن',
    iconKey: 'building-2',
  },

  // Legal Representation Services (خدمات التمثيل القانوني - Slide 10 & 19)
  {
    id: 'litigation-advocacy',
    index: '07',
    category: 'representation',
    titleAr: 'الترافع والتمثيل القضائي',
    titleEn: 'Litigation & Advocacy',
    titleUr: 'عدالتی پیروی اور قانونی نمائندگی',
    summaryAr:
      'تمثيل الموكلين والترافع أمام كافة المحاكم التجارية والعامة والعمالية والإدارية واللجان القضائية وشبه القضائية في جميع درجات التقاضي.',
    summaryEn:
      'Representing clients before Commercial, General, Labor, and Administrative courts and judicial committees across all litigation tiers.',
    summaryUr:
      'تجارتی، عمومی، لیبر اور انتظامی عدالتوں نیز تمام عدالتی و نیم عدالتی کمیٹیوں کے روبرو تمام درجات میں مؤکلین کی بھرپور پیروی اور نمائندگی۔',
    deliverablesAr: [
      'إعداد وتقديم صحائف الدعوى والمذكرات الجوابية والدفوع النظامية',
      'حضور الجلسات القضائية والمرافعة الشفوية والكتابية عبر ناجز وديوان المظالم',
      'إعداد لوائح الاعتراض بالاستئناف أو النقض أمام المحكمة العليا',
    ],
    deliverablesEn: [
      'Drafting statements of claim, defense briefs, and statutory pleadings',
      'Court appearances and advocacy via Najiz and Board of Grievances',
      'Appellate petitions and Supreme Court cassation briefs',
    ],
    deliverablesUr: [
      'دعویٰ جات، جوابی یادداشتوں اور قانونی دلائل کی تیاری اور جمع کرانا',
      'ناجز (Najiz) اور دیوانِ مظالم کے ذریعے عدالتی سماعتوں میں حاضری اور زبانی و تحریری بحث',
      'اپیل کورٹ اور سپریم کورٹ کے روبرو اپیل اور نظرثانی کی درخواستوں کی تیاری',
    ],
    requiredDocsAr: [
      'وكالة شرعية سارية المفعول تخول حق المرافعة والمدافعة',
      'كافة المستندات والبينات المثبتة للحق أو الدافعة للدعوى',
      'بيانات الدعوى المقيدة أو إخطار المطالبة السابق',
    ],
    requiredDocsEn: [
      'Valid Power of Attorney (PoA) authorizing litigation',
      'All evidentiary documents supporting the claim or defense',
      'Case registration details or prior formal notice of claim',
    ],
    requiredDocsUr: [
      'مقدمے کی پیروی اور دفاع کا اختیار رکھنے والا فعال شرعی وکالت نامہ (PoA)',
      'دعویٰ یا دفاع کی تائید کرنے والی تمام دستاویزات اور ثبوت',
      'درج شدہ مقدمے کی تفصیلات یا سابقہ قانونی نوٹس',
    ],
    typicalTimelineAr: 'حسب مواعيد الجلسات القضائية',
    typicalTimelineEn: 'Per Judicial Court Schedule',
    typicalTimelineUr: 'عدالتی سماعتوں کے شیڈول کے مطابق',
    iconKey: 'scale',
  },
  {
    id: 'arbitration-mediation',
    index: '08',
    category: 'representation',
    titleAr: 'التحكيم والوساطة',
    titleEn: 'Arbitration & Mediation',
    titleUr: 'ثالثی اور مصالحت (Arbitration & Mediation)',
    summaryAr:
      'تسوية المنازعات التجارية والمدنية عبر هيئات التحكيم المحلية والدولية ووسائل التسوية الودية والوساطة المعتمدة بسرعة وكفاءة.',
    summaryEn:
      'Resolving commercial and civil disputes through local and international arbitration tribunals and accredited mediation channels.',
    summaryUr:
      'مقامی اور بین الاقوامی ثالثی ٹربیونلز اور منظور شدہ مصالحتی ذرائع سے تجارتی اور دیوانی تنازعات کا تیز رفتار اور مؤثر تصفیہ۔',
    deliverablesAr: [
      'صياغة مشارطة التحكيم وتمثيل المحتكم أو المحتكم ضده أمام هيئة التحكيم',
      'إدارة مفاوضات التسوية الودية وصياغة محاضر الصلح الموثقة',
      'إجراءات إيداع وتنفيذ أحكام التحكيم أمام المحكمة المختصة',
    ],
    deliverablesEn: [
      'Drafting arbitration agreements and representing parties before tribunals',
      'Managing settlement negotiations and notarized conciliation minutes',
      'Filing and enforcing arbitral awards before competent Saudi courts',
    ],
    deliverablesUr: [
      'ثالثی کے معاہدوں کی تیاری اور ثالثی ٹربیونل کے روبرو فریقین کی نمائندگی',
      'مصالحتی مذاکرات کا انتظام اور مصدقہ صلح ناموں کی تیاری',
      'مجاز سعودی عدالتوں کے روبرو ثالثی فیصلوں کی جمع آوری اور نفاذ کی کارروائی',
    ],
    requiredDocsAr: [
      'العقد المتضمن شرط التحكيم أو مشارطة التحكيم المستقلة',
      'المراسلات والمستندات الفنية والمالية محل النزاع',
      'وكالة شرعية تتضمن صلاحية التحكيم والصلح',
    ],
    requiredDocsEn: [
      'Contract containing the arbitration clause or submission agreement',
      'Technical and financial correspondence subject to dispute',
      'Power of Attorney authorizing arbitration and conciliation',
    ],
    requiredDocsUr: [
      'ثالثی کی شق پر مشتمل معاہدہ یا الگ ثالثی اقرار نامہ',
      'تنازعہ سے متعلق تکنیکی اور مالیاتی خط و کتابت اور دستاویزات',
      'ثالثی اور صلح کا اختیار رکھنے والا شرعی وکالت نامہ',
    ],
    typicalTimelineAr: '30 - 90 يوماً (حسب إجراءات الهيئة)',
    typicalTimelineEn: '30 - 90 Days (Per Tribunal Rules)',
    typicalTimelineUr: '30 تا 90 دن (ٹربیونل کے قواعد کے مطابق)',
    iconKey: 'handshake',
  },
  {
    id: 'company-formation',
    index: '09',
    category: 'representation',
    titleAr: 'تأسيس الشركات',
    titleEn: 'Company Formation',
    titleUr: 'کمپنیوں کا قیام اور رجسٹریشن',
    summaryAr:
      'تأسيس كافة أنواع الشركات وتوثيق عقود التأسيس والأنظمة الأساسية وتحويل الكيانات القانونية واستخراج التراخيص التجارية.',
    summaryEn:
      'Incorporating all corporate legal structures, notarizing Articles of Association, entity conversions, and commercial licensing.',
    summaryUr:
      'ہر قسم کی کمپنیوں کا قیام، عقدِ تاسیس اور بنیادی آئین کی توثیق، قانونی حیثیت کی تبدیلی اور تجارتی لائسنس کا اجرا۔',
    deliverablesAr: [
      'صياغة وتوثيق عقد التأسيس أو النظام الأساسي لدى وزارة التجارة',
      'إصدار السجل التجاري والملفات النظامية لدى الجهات الحكومية ذات العلاقة',
      'تعديل عقود التأسيس ودخول وخروج الشركاء وزيادة أو تخفيض رأس المال',
    ],
    deliverablesEn: [
      'Drafting and notarizing Articles of Association with Ministry of Commerce',
      'Issuing Commercial Registration and statutory entity files',
      'Amending bylaws, shareholding transfers, and capital adjustments',
    ],
    deliverablesUr: [
      'وزارتِ تجارت کے پاس عقدِ تاسیس یا بنیادی آئین کی تیاری اور توثیق',
      'تجارتی رجسٹریشن (CR) اور متعلقہ سرکاری اداروں میں فائلوں کا اجرا',
      'عقدِ تاسیس میں ترمیم، شراکت داروں کا داخلہ و اخراج اور سرمائے میں اضافہ یا کمی',
    ],
    requiredDocsAr: [
      'بيانات الهوية الوطنية أو السجلات التجارية للشركاء المؤسسين',
      'تحديد نوع الكيان القانوني والنشاط التجاري ورأس المال',
      'الاسم التجاري المقترح وعنوان المركز الرئيسي',
    ],
    requiredDocsEn: [
      'National IDs or Commercial Registrations of founding partners',
      'Selection of legal structure, business activities, and capital',
      'Proposed trade name and registered head office address',
    ],
    requiredDocsUr: [
      'بانی شراکت داروں کے شناختی کارڈز یا تجارتی رجسٹریشن کی تفصیلات',
      'کمپنی کی قانونی قسم، تجارتی سرگرمی اور سرمائے کا تعین',
      'تجویز کردہ تجارتی نام اور مرکزی دفتر کا پتہ',
    ],
    typicalTimelineAr: '2 - 5 أيام عمل',
    typicalTimelineEn: '2 - 5 Business Days',
    typicalTimelineUr: '2 تا 5 کاروباری دن',
    iconKey: 'building',
  },
  {
    id: 'foreign-investment',
    index: '10',
    category: 'representation',
    titleAr: 'المستثمر الأجنبي',
    titleEn: 'Foreign Investment',
    titleUr: 'غیر ملکی سرمایہ کاری کی خدمات',
    summaryAr:
      'تقديم الرعاية القانونية المتكاملة للمستثمرين الأجانب وإصدار تراخيص وزارة الاستثمار وتأسيس الشركات الأجنبية والمختلطة بالمملكة.',
    summaryEn:
      'End-to-end legal onboarding for foreign investors, Ministry of Investment (MISA) licensing, and establishing foreign or joint-venture entities.',
    summaryUr:
      'غیر ملکی سرمایہ کاروں کے لیے مکمل قانونی معاونت، وزارتِ سرمایہ کاری (MISA) کے لائسنس کا اجرا اور مملکت میں غیر ملکی یا مشترکہ کمپنیوں کا قیام۔',
    deliverablesAr: [
      'إصدار الترخيص الاستثماري من وزارة الاستثمار (MISA) لمختلف الأنشطة',
      'تأسيس الشركة الأجنبية أو المختلطة واستكمال اشتراطات التوطين والامتثال',
      'صياغة اتفاقيات الشراكة الاستراتيجية ونقل التقنية والامتياز التجاري',
    ],
    deliverablesEn: [
      'Issuing Ministry of Investment (MISA) licenses across sectors',
      'Incorporating 100% foreign or JV entities with full compliance',
      'Drafting strategic JVs, technology transfer, and franchise agreements',
    ],
    deliverablesUr: [
      'مختلف سرگرمیوں کے لیے وزارتِ سرمایہ کاری (MISA) سے انویسٹمنٹ لائسنس کا اجرا',
      '100 فیصد غیر ملکی یا جوائنٹ وینچر کمپنی کا قیام اور قانونی شرائط کی تکمیل',
      'اسٹریٹجک شراکت داری، ٹیکنالوجی کی منتقلی اور فرنچائز معاہدوں کی تیاری',
    ],
    requiredDocsAr: [
      'السجل التجاري وعقد التأسيس للشركة الأم مصدقاً حسب الأصول',
      'القوائم المالية لآخر سنة مالية للشركة الأجنبية مصدقة',
      'وكالة رسمية مصدقة من السفارة السعودية ووزارة الخارجية',
    ],
    requiredDocsEn: [
      'Duly attested Commercial Registration and Bylaws of parent company',
      'Attested financial statements for the latest fiscal year',
      'Power of Attorney attested by the Saudi Embassy and MOFA',
    ],
    requiredDocsUr: [
      'مدر کمپنی کی باضابطہ تصدیق شدہ تجارتی رجسٹریشن اور عقدِ تاسیس',
      'غیر ملکی کمپنی کے آخری مالی سال کے تصدیق شدہ مالیاتی گوشوارے',
      'سعودی سفارت خانے اور وزارتِ خارجہ سے تصدیق شدہ سرکاری وکالت نامہ',
    ],
    typicalTimelineAr: '5 - 12 يوم عمل',
    typicalTimelineEn: '5 - 12 Business Days',
    typicalTimelineUr: '5 تا 12 کاروباری دن',
    iconKey: 'globe',
  },
  {
    id: 'intellectual-property',
    index: '11',
    category: 'representation',
    titleAr: 'الملكية الفكرية',
    titleEn: 'Intellectual Property',
    titleUr: 'دانشورانہ ملکیت (Intellectual Property)',
    summaryAr:
      'تسجيل وحماية العلامات التجارية وبراءات الاختراع وحقوق المؤلف والنماذج الصناعية والترافع في قضايا التعدي على الملكية الفكرية.',
    summaryEn:
      'Registering and protecting trademarks, patents, copyrights, and industrial designs, plus litigating IP infringement claims.',
    summaryUr:
      'ٹریڈ مارکس، پیٹنٹس، کاپی رائٹس اور صنعتی نمونوں کی رجسٹریشن و تحفظ، نیز دانشورانہ ملکیت کی خلاف ورزی کے مقدمات کی پیروی۔',
    deliverablesAr: [
      'تسجيل العلامات التجارية والمصنفات لدى الهيئة السعودية للملكية الفكرية (SAIP)',
      'تقديم الاعتراضات والرد عليها أمام لجان الملكية الفكرية',
      'ملاحقة حالات التقليد والتعدي التجاري والمطالبة بالتعويض',
    ],
    deliverablesEn: [
      'Trademark and copyright registration with SAIP',
      'Filing oppositions and responses before IP committees',
      'Prosecuting counterfeit and infringement claims for damages',
    ],
    deliverablesUr: [
      'سعودی اتھارٹی برائے دانشورانہ ملکیت (SAIP) میں ٹریڈ مارکس اور تخلیقات کی رجسٹریشن',
      'دانشورانہ ملکیت کی کمیٹیوں کے روبرو اعتراضات جمع کرانا اور ان کا جواب دینا',
      'تجارتی جعلسازی اور خلاف ورزی کے خلاف قانونی کارروائی اور ہرجانے کا مطالبہ',
    ],
    requiredDocsAr: [
      'صورة العلامة التجارية أو وصف المصنف/الاختراع بدقة عالية',
      'تحديد الفئات المطلوب حماية العلامة عليها وفق تصنيف نيس',
      'السجل التجاري أو الهوية الوطنية مع وكالة رسمية',
    ],
    requiredDocsEn: [
      'High-resolution trademark artwork or patent/work specification',
      'Target protection classes under the Nice Classification',
      'Commercial Registration or National ID with official PoA',
    ],
    requiredDocsUr: [
      'ٹریڈ مارک کی واضح تصویر یا ایجاد/تصنیف کی مکمل تفصیل',
      'نیس درجہ بندی (Nice Classification) کے مطابق مطلوبہ کلاسز کا تعین',
      'تجارتی رجسٹریشن یا قومی شناختی کارڈ بمع سرکاری وکالت نامہ',
    ],
    typicalTimelineAr: '3 - 7 أيام عمل لإيداع الطلب',
    typicalTimelineEn: '3 - 7 Business Days for Filing',
    typicalTimelineUr: 'درخواست جمع کرانے کے لیے 3 تا 7 کاروباری دن',
    iconKey: 'lightbulb',
  },
  {
    id: 'liquidation-estates',
    index: '12',
    category: 'representation',
    titleAr: 'تصفية التركات والشركات',
    titleEn: 'Liquidation & Estates',
    titleUr: 'ترکہ کی تقسیم اور کمپنیوں کا تصفیہ',
    summaryAr:
      'حصر وتقسيم وتصفية التركات العقارية والمالية والتجارية بين الورثة بالتراضي أو القضاء، وتصفية الشركات تصفية اختيارية أو قضائية.',
    summaryEn:
      'Inventorying, dividing, and liquidating real estate, financial, and commercial estates among heirs, alongside voluntary or judicial company liquidation.',
    summaryUr:
      'ورثاء کے درمیان باہمی رضامندی یا عدالت کے ذریعے جائیداد، مالیاتی اور تجارتی ترکہ کا شمار و تقسیم، نیز کمپنیوں کا اختیاری یا عدالتی تصفیہ۔',
    deliverablesAr: [
      'حصر أموال وأصول التركة الثابتة والمنقولة وسداد الديون وتنفيذ الوصايا',
      'إعداد مشاريع القسمة الرضائية وتوثيقها أو مباشرة دعاوى القسمة القضائية',
      'أعمال المصفي النظامي للشركات وإقفال السجلات والحسابات',
    ],
    deliverablesEn: [
      'Comprehensive asset inventory, debt settlement, and will execution',
      'Amicable estate division deeds or judicial partition proceedings',
      'Statutory corporate liquidation and final deregistration',
    ],
    deliverablesUr: [
      'منقولہ و غیر منقولہ ترکہ کے اثاثوں کا شمار، قرضوں کی ادائیگی اور وصیتوں پر عملدرآمد',
      'باہمی رضامندی سے تقسیم کے معاہدوں کی توثیق یا عدالتی تقسیم کے مقدمات کی پیروی',
      'کمپنیوں کے قانونی لیکویڈیٹر کے فرائض اور تجارتی ریکارڈز و کھاتوں کی بندش',
    ],
    requiredDocsAr: [
      'صك حصر الورثة والوصية الشرعية إن وجدت',
      'صكوك العقارات وبيانات الحسابات والأسهم والسجلات التجارية',
      'وكالات شرعية من الورثة أو قرار الشركاء بالتصفية',
    ],
    requiredDocsEn: [
      'Heirs Determination Deed (Hasr Al-Waratha) and Will (if any)',
      'Title deeds, equity portfolios, and commercial registrations',
      'Powers of Attorney from heirs or Partners Liquidation Resolution',
    ],
    requiredDocsUr: [
      'حصرِ ورثاء کی سند اور شرعی وصیت (اگر موجود ہو)',
      'جائیداد کی اسناد، بینک اکاؤنٹس، حصص اور تجارتی رجسٹریشن کی تفصیلات',
      'ورثاء کی جانب سے شرعی وکالت نامے یا شراکت داروں کی تصفیہ کی قرارداد',
    ],
    typicalTimelineAr: 'حسب حجم الأصول وإجراءات القسمة',
    typicalTimelineEn: 'Based on Asset Portfolio & Partition Scope',
    typicalTimelineUr: 'اثاثوں کے حجم اور تقسیم کے مراحل کے مطابق',
    iconKey: 'coins',
  },
  {
    id: 'endowments-bankruptcy',
    index: '13',
    category: 'representation',
    titleAr: 'الأوقاف والإفلاس',
    titleEn: 'Endowments & Bankruptcy',
    titleUr: 'اوقاف اور دیوالیہ پن کے معاملات',
    summaryAr:
      'صياغة وتوثيق صكوك الأوقاف ونظارتها وحوكمتها، وتقديم طلبات التسوية الوقائية وإعادة التنظيم المالي والتصفية وفق نظام الإفلاس.',
    summaryEn:
      'Drafting, notarizing, and governing Waqf endowments, alongside filing protective settlement, financial reorganization, and bankruptcy petitions.',
    summaryUr:
      'وقف کی اسناد کی تیاری، توثیق اور نظم و نسق، نیز سعودی دیوالیہ پن کے قانون کے تحت حفاظتی تصفیہ اور مالیاتی تنظیمِ نو کی درخواستیں۔',
    deliverablesAr: [
      'صياغة وثائق الوقف ولوائح النظارة واستخراج تراخيص الهيئة العامة للأوقاف',
      'إعداد ملفات افتتاج إجراءات التسوية الوقائية أو إعادة التنظيم المالي',
      'تمثيل المدينين أو الدائنين أمام الدوائر التجارية وأمناء الإفلاس',
    ],
    deliverablesEn: [
      'Waqf deed drafting, governance bylaws, and General Authority for Awqaf licensing',
      'Filing petitions for Protective Settlement or Financial Reorganization',
      'Representing debtors or creditors before Commercial Courts and trustees',
    ],
    deliverablesUr: [
      'وقف دستاویزات اور نظارت کے ضوابط کی تیاری اور جنرل اتھارٹی برائے اوقاف سے لائسنس کا اجرا',
      'حفاظتی تصفیہ یا مالیاتی تنظیمِ نو کی کارروائی شروع کرنے کی فائلیں تیار کرنا',
      'تجارتی عدالتوں اور دیوالیہ پن کے امینوں کے روبرو قرض خواہوں یا مقروضوں کی نمائندگی',
    ],
    requiredDocsAr: [
      'صكوك الأعيان المراد وقفها أو صك الوقف القائم',
      'القوائم المالية وقائمة الدائنين والمدينين والمركز المالي للمنشأة',
      'خطة مقترحة لاستمرار النشاط أو هيكلة الديون',
    ],
    requiredDocsEn: [
      'Property title deeds for endowment or existing Waqf deed',
      'Financial statements, creditor/debtor schedules, and balance sheet',
      'Proposed business continuity or debt restructuring plan',
    ],
    requiredDocsUr: [
      'وقف کی جانے والی جائیداد کی اسناد یا موجودہ وقف نامہ',
      'ادارے کے مالیاتی گوشوارے، قرض خواہوں اور مقروضوں کی فہرست اور بیلنس شیٹ',
      'کاروبار کے تسلسل یا قرضوں کی تنظیمِ نو کا مجوزہ پلان',
    ],
    typicalTimelineAr: '5 - 15 يوم عمل لإعداد الملف النظامي',
    typicalTimelineEn: '5 - 15 Business Days for Statutory Filing',
    typicalTimelineUr: 'قانونی فائل کی تیاری کے لیے 5 تا 15 کاروباری دن',
    iconKey: 'landmark',
  },
  {
    id: 'judgment-execution',
    index: '14',
    category: 'representation',
    titleAr: 'تحصيل وتنفيذ الأحكام',
    titleEn: 'Judgment Execution',
    titleUr: 'عدالتی فیصلوں کا نفاذ اور وصولی',
    summaryAr:
      'مباشرة إجراءات التنفيذ القضائي للأحكام النهائية والسندات التنفيذية والأوراق التجارية وتحصيل المديونيات المتعثرة بكافة الوسائل النظامية.',
    summaryEn:
      'Enforcing final judicial judgments, executive instruments, and commercial papers, and recovering distressed receivables through Enforcement Courts.',
    summaryUr:
      'حتمی عدالتی فیصلوں، ایگزیکٹو اسناد اور تجارتی کاغذات پر عملدرآمد اور نفاذ کی عدالتوں کے ذریعے واجب الادا قرضوں کی وصولی۔',
    deliverablesAr: [
      'تقديم طلبات التنفيذ للأحكام القضائية والسندات لأمر والشيكات والعقود الموثقة',
      'متابعة إجراءات الحجز والتنفيذ المباشر وإفصاح الأصول عبر محاكم التنفيذ',
      'إدارة خطط التسوية والجدولة الموثقة لتحصيل الحقوق المالية بأسرع وقت',
    ],
    deliverablesEn: [
      'Filing enforcement petitions for judgments, promissory notes, checks, and notarized contracts',
      'Pursuing asset disclosure, attachment, and direct enforcement remedies',
      'Managing notarized payment schedules for rapid debt recovery',
    ],
    deliverablesUr: [
      'عدالتی فیصلوں، پرومیری نوٹس (سند لامر)، چیک اور مصدقہ معاہدوں کے نفاذ کی درخواستیں',
      'نفاذ کی عدالتوں کے ذریعے اثاثوں کی قرقی، ضبطی اور براہِ راست وصولی کی کارروائی',
      'مالی حقوق کی جلد از جلد وصولی کے لیے مصدقہ ادائیگی کے شیڈول کا انتظام',
    ],
    requiredDocsAr: [
      'أصل السند التنفيذي (صك الحكم المذيل بالصيغة التنفيذية / سند لأمر / شيك)',
      'وكالة شرعية تتضمن صلاحية التنفيذ وقبض المبالغ أو طلب التحويل لحساب الموكل',
      'بيانات المنفذ ضده ورقم الهوية أو السجل التجاري',
    ],
    requiredDocsEn: [
      'Original Executive Instrument (Final Judgment Deed / Promissory Note / Check)',
      'Power of Attorney authorizing enforcement proceedings',
      'Debtor identification details (National ID or CR number)',
    ],
    requiredDocsUr: [
      'اصل ایگزیکٹو سند (حتمی عدالتی فیصلہ / سند لامر / چیک)',
      'نفاذ کی کارروائی اور مؤکل کے اکاؤنٹ میں رقم کی منتقلی کا اختیار رکھنے والا شرعی وکالت نامہ',
      'مدعی علیہ کی شناختی تفصیلات (قومی شناختی کارڈ یا تجارتی رجسٹریشن نمبر)',
    ],
    typicalTimelineAr: '1 - 2 يوم عمل لقيد طلب التنفيذ',
    typicalTimelineEn: '1 - 2 Business Days to File Enforcement',
    typicalTimelineUr: 'نفاذ کی درخواست جمع کرانے کے لیے 1 تا 2 کاروباری دن',
    iconKey: 'file-check',
  },
];

export const FIRM_VALUES: FirmValue[] = [
  {
    id: 'transparency',
    titleAr: 'الشفافية والنزاهة',
    titleEn: 'Transparency & Integrity',
    titleUr: 'شفافیت اور دیانتداری',
    descAr: 'وضوح تام في تقييم الموقف القانوني وتكاليف وإجراءات العمل منذ اللحظة الأولى.',
    descEn: 'Complete clarity in evaluating legal positions, procedures, and engagement terms from day one.',
    descUr: 'پہلے دن سے قانونی حیثیت، طریقہ کار اور اخراجات کے جائزے میں مکمل وضاحت اور شفافیت۔',
    iconKey: 'scale',
  },
  {
    id: 'speed-accuracy',
    titleAr: 'السرعة والدقة',
    titleEn: 'Speed & Accuracy',
    titleUr: 'تیز رفتاری اور درستگی',
    descAr: 'استجابة سريعة للمتطلبات القانونية مع دقة متناهية في الصياغة والتأصيل النظامي.',
    descEn: 'Rapid response to urgent legal matters paired with meticulous statutory precision.',
    descUr: 'قانونی تقاضوں پر فوری ردِعمل اور مسودہ سازی و قانونی استدلال میں انتہائی باریک بینی۔',
    iconKey: 'zap',
  },
  {
    id: 'professionalism',
    titleAr: 'المهنية والاحترافية',
    titleEn: 'Professionalism',
    titleUr: 'پیشہ ورانہ مہارت',
    descAr: 'ممارسة قانونية رفيعة تلتزم بأعلى معايير الأداء المهني المحلي والدولي.',
    descEn: 'Distinguished legal practice adhering to the highest local and international professional standards.',
    descUr: 'اعلیٰ ترین مقامی اور بین الاقوامی پیشہ ورانہ معیارات کے مطابق ممتاز قانونی خدمات۔',
    iconKey: 'user-check',
  },
  {
    id: 'innovation',
    titleAr: 'الإبداع والابتكار',
    titleEn: 'Innovation & Creativity',
    titleUr: 'جدت اور تخلیقی حل',
    descAr: 'ابتكار حلول قانونية واستثنائية غير تقليدية تتجاوز العقبات المعقدة.',
    descEn: 'Crafting innovative and unconventional legal solutions that overcome complex challenges.',
    descUr: 'پیچیدہ رکاوٹوں کو عبور کرنے کے لیے منفرد اور جدید قانونی حل تیار کرنا۔',
    iconKey: 'lightbulb',
  },
  {
    id: 'teamwork',
    titleAr: 'العمل بروح الفريق',
    titleEn: 'Teamwork',
    titleUr: 'اجتماعی ٹیم ورک',
    descAr: 'تكامل الخبرات بين المحامين والمستشارين لضمان دراسة كل قضية من كافة جوانبها.',
    descEn: 'Synergy across specialized lawyers and consultants to examine every case from all angles.',
    descUr: 'ہر مقدمے کا تمام پہلوؤں سے جائزہ لینے کے لیے ماہر وکلاء اور مشیروں کے تجربات کا اشتراک۔',
    iconKey: 'users',
  },
];

export const FIRM_GOALS: FirmGoal[] = [
  {
    id: 'goal-1',
    index: '01',
    titleAr: 'توفير أفضل الحلول القانونية للمستفيدين داخل وخارج المملكة',
    titleEn: 'Providing the Best Legal Solutions Inside & Outside the Kingdom',
    titleUr: 'مملکت کے اندر اور باہر مؤکلین کو بہترین قانونی حل فراہم کرنا',
    descAr: 'تقديم رعاية قانونية شاملة تواكب تطلعات المستثمرين والشركات والأفراد محلياً ودولياً.',
    descEn: 'Delivering comprehensive legal care matching the ambitions of investors, enterprises, and individuals.',
    descUr: 'مقامی اور بین الاقوامی سطح پر سرمایہ کاروں، کمپنیوں اور افراد کی توقعات کے مطابق جامع قانونی تحفظ فراہم کرنا۔',
  },
  {
    id: 'goal-2',
    index: '02',
    titleAr: 'التطوير المستمر والتحسين الدائم لمنهجيات العمل',
    titleEn: 'Continuous Development & Improvement of Workflows',
    titleUr: 'طریقہ کار میں مسلسل ترقی اور بہتری',
    descAr: 'توظيف أحدث التقنيات القانونية والمنهجيات الإدارية لرفع كفاءة وسرعة إنجاز المعاملات.',
    descEn: 'Leveraging modern legal technologies and structured workflows to maximize efficiency.',
    descUr: 'معاملات کی تکمیل میں رفتار اور معیار کو بڑھانے کے لیے جدید قانونی ٹیکنالوجی اور منظم طریقہ کار کا استعمال۔',
  },
  {
    id: 'goal-3',
    index: '03',
    titleAr: 'المحافظة على خصوصية العملاء وسرية بياناتهم',
    titleEn: 'Maintaining Client Confidentiality & Data Privacy',
    titleUr: 'مؤکلین کی رازداری اور ان کے ڈیٹا کا مکمل تحفظ',
    descAr: 'تطبيق أعلى معايير الأمان والسرية المهنية لحماية الوثائق والأسرار التجارية والخاصة.',
    descEn: 'Enforcing strict professional secrecy and security protocols for all client records.',
    descUr: 'دستاویزات اور تجارتی و نجی معلومات کے تحفظ کے لیے اعلیٰ ترین حفاظتی اور پیشہ ورانہ رازداری کے معیارات کا نفاذ۔',
  },
  {
    id: 'goal-4',
    index: '04',
    titleAr: 'الالتزام بالأخلاقيات السامية لمهنة المحاماة',
    titleEn: 'Adherence to the Highest Professional Ethics',
    titleUr: 'وکالت کے اعلیٰ پیشہ ورانہ اخلاقیات کی پاسداری',
    descAr: 'ترسيخ قيم العدالة والأمانة المهنية وفق نظام المحاماة السعودي وقواعد السلوك المهني.',
    descEn: 'Upholding justice and fiduciary duty in accordance with the Saudi Advocacy Law.',
    descUr: 'سعودی وکالت کے قانون اور پیشہ ورانہ ضابطہ اخلاق کے مطابق انصاف اور امانتداری کے اقدار کو فروغ دینا۔',
  },
];

export const TEAM_PILLARS: TeamPillar[] = [
  {
    id: 'legal-counselors',
    titleAr: 'المحامون',
    titleEn: 'Legal Counselors',
    titleUr: 'ماہر وکلاء (Legal Counselors)',
    roleAr: 'التمثيل القضائي والترافع',
    roleEn: 'Judicial Advocacy & Litigation',
    roleUr: 'عدالتی نمائندگی اور مقدمات کی پیروی',
    descAr:
      'نخبة من المحامين المرخصين ذوي الخبرة الواسعة في الترافع أمام المحاكم التجارية والعامة والإدارية والعمالية في كافة درجات التقاضي.',
    descEn:
      'Licensed trial lawyers with extensive courtroom advocacy before Commercial, General, Administrative, and Labor courts across all tiers.',
    descUr:
      'تجارتی، عمومی، انتظامی اور لیبر عدالتوں کے تمام درجات میں مقدمات کی پیروی کا وسیع تجربہ رکھنے والے لائسنس یافتہ وکلاء۔',
    specialtiesAr: ['المنازعات التجارية والشركات', 'القضايا الإدارية والعمالية', 'التنفيذ وتحصيل الحقوق'],
    specialtiesEn: ['Commercial & Corporate Disputes', 'Administrative & Labor Cases', 'Enforcement & Debt Recovery'],
    specialtiesUr: ['تجارتی اور کارپوریٹ تنازعات', 'انتظامی اور لیبر مقدمات', 'عدالتی نفاذ اور قرضوں کی وصولی'],
  },
  {
    id: 'arbitration-experts',
    titleAr: 'المستشارون القانونيون',
    titleEn: 'Arbitration & Legal Experts',
    titleUr: 'قانونی مشیر اور ماہرینِ ثالثی',
    roleAr: 'الاستشارات والتحكيم والعقود',
    roleEn: 'Advisory, Contracts & Arbitration',
    roleUr: 'مشاورت، معاہدہ جات اور ثالثی',
    descAr:
      'مستشارون متخصصون في صياغة العقود المعقدة، والتحكيم التجاري، والوساطة، وتقديم الدراسات والاستشارات الاستباقية لقطاع الأعمال.',
    descEn:
      'Senior legal advisors specializing in complex contract architecture, commercial arbitration, mediation, and proactive risk analysis.',
    descUr:
      'پیچیدہ معاہدوں کی تیاری، تجارتی ثالثی، مصالحت اور کاروباری شعبے کے لیے پیشگی قانونی مطالعات میں مہارت رکھنے والے سینئر مشیر۔',
    specialtiesAr: ['التحكيم والوساطة التجارية', 'صياغة ومراجعة العقود الدولية', 'دراسات الفحص النافي للجهالة'],
    specialtiesEn: ['Commercial Arbitration & Mediation', 'Bilingual Contract Architecture', 'Legal Due Diligence'],
    specialtiesUr: ['تجارتی ثالثی اور مصالحت', 'بین الاقوامی معاہدوں کی تیاری و نظرثانی', 'قانونی جانچ پڑتال (Due Diligence)'],
  },
  {
    id: 'corporate-specialists',
    titleAr: 'خبراء التأسيس والشركات',
    titleEn: 'Corporate Specialists',
    titleUr: 'کارپوریٹ اور کمپنی فارمیشن ماہرین',
    roleAr: 'حوكمة وتأسيس الكيانات والاستثمار',
    roleEn: 'Entity Formation, Governance & MISA',
    roleUr: 'کمپنیوں کا قیام، گورننس اور غیر ملکی سرمایہ کاری',
    descAr:
      'فريق متخصص في تأسيس الشركات الوطنية والأجنبية، وإعداد لوائح الحوكمة، وتأهيل الإدارات القانونية، وخدمات المستثمر الأجنبي والملكية الفكرية.',
    descEn:
      'Dedicated specialists in domestic and foreign company formation, corporate governance, legal department structuring, and IP protection.',
    descUr:
      'ملکی و غیر ملکی کمپنیوں کے قیام، کارپوریٹ گورننس، قانونی شعبوں کی تشکیل اور دانشورانہ ملکیت کے تحفظ کی ماہر ٹیم۔',
    specialtiesAr: ['تأسيس الشركات وتراخيص الاستثمار', 'حوكمة الشركات وتأهيل الإدارات', 'حماية الملكية الفكرية والأوقاف'],
    specialtiesEn: ['Company Formation & MISA Licensing', 'Corporate Governance & Structuring', 'Intellectual Property & Waqf'],
    specialtiesUr: ['کمپنیوں کا قیام اور سرمایہ کاری لائسنس', 'کارپوریٹ گورننس اور شعبہ جاتی تنظیم', 'دانشورانہ ملکیت اور اوقاف کا تحفظ'],
  },
];

export function filterServices(
  services: LegalService[],
  category: ServiceCategory,
  searchQuery: string
): LegalService[] {
  const normalizedQuery = searchQuery.trim().toLowerCase();
  return services.filter((service) => {
    const matchesCategory = category === 'all' || service.category === category;
    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const searchableText = [
      service.titleAr,
      service.titleEn,
      service.titleUr,
      service.summaryAr,
      service.summaryEn,
      service.summaryUr,
      ...service.deliverablesAr,
      ...service.deliverablesEn,
      ...service.deliverablesUr,
    ]
      .join(' ')
      .toLowerCase();

    return searchableText.includes(normalizedQuery);
  });
}

export function validateConsultationInput(
  input: ConsultationFormInput,
  lang: Language
): ConsultationValidationErrors {
  const errors: ConsultationValidationErrors = {};

  const trimmedName = input.fullName.trim();
  if (!trimmedName || trimmedName.length < 3) {
    errors.fullName = tr(
      lang,
      'يرجى إدخال الاسم الكامل أو اسم المنشأة (3 أحرف على الأقل).',
      'Please enter your full name or company name (at least 3 characters).',
      'براہِ کرم اپنا مکمل نام یا کمپنی کا نام درج کریں (کم از کم 3 حروف)۔'
    );
  }

  const cleanedPhone = input.phone.replace(/[\s\-()]/g, '');
  const phoneRegex = /^(\+?9665\d{8}|05\d{8}|\+?\d{8,15})$/;
  if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
    errors.phone = tr(
      lang,
      'يرجى إدخال رقم تواصل صحيح (مثال: 0569888100 أو +966569888100).',
      'Please enter a valid phone number (e.g., 0569888100 or +966569888100).',
      'براہِ کرم درست فون نمبر درج کریں (مثال: 0569888100 یا 966569888100+)۔'
    );
  }

  const trimmedEmail = input.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    errors.email = tr(
      lang,
      'يرجى إدخال بريد إلكتروني صحيح للتواصل الرسمي.',
      'Please enter a valid email address for official correspondence.',
      'براہِ کرم سرکاری خط و کتابت کے لیے درست ای میل ایڈریس درج کریں۔'
    );
  }

  if (!input.serviceId || !LEGAL_SERVICES.some((s) => s.id === input.serviceId)) {
    errors.serviceId = tr(
      lang,
      'يرجى اختيار نوع الخدمة القانونية المطلوبة.',
      'Please select the required legal service.',
      'براہِ کرم مطلوبہ قانونی خدمت منتخب کریں۔'
    );
  }

  const trimmedSummary = input.summary.trim();
  if (!trimmedSummary || trimmedSummary.length < 10) {
    errors.summary = tr(
      lang,
      'يرجى كتابة نبذة مختصرة عن الموضوع القانوني (10 أحرف على الأقل).',
      'Please provide a brief summary of your legal matter (at least 10 characters).',
      'براہِ کرم اپنے قانونی معاملے کا مختصر خلاصہ تحریر کریں (کم از کم 10 حروف)۔'
    );
  }

  return errors;
}

export function calculateScopeEstimate(params: {
  entityType: ClientEntityType;
  serviceId: string;
  urgency: UrgencyLevel;
}): ScopeEstimateResult {
  const service =
    LEGAL_SERVICES.find((s) => s.id === params.serviceId) || LEGAL_SERVICES[0];

  const baseDays =
    service.category === 'advisory'
      ? params.entityType === 'corporate'
        ? 3
        : 2
      : params.entityType === 'foreign_investor'
      ? 5
      : 3;

  const initialReviewDays = params.urgency === 'priority' ? Math.max(1, baseDays - 1) : baseDays;

  let engagementModelAr = 'عقد استشارة قانونية محددة النطاق';
  let engagementModelEn = 'Fixed-Scope Legal Advisory Engagement';
  let engagementModelUr = 'مخصوص دائرہ کار کا قانونی مشاورتی معاہدہ';

  if (service.category === 'representation') {
    engagementModelAr =
      params.entityType === 'corporate'
        ? 'عقد تمثيل قانوني وقضائي مرحلي للشركات'
        : 'عقد تمثيل وترافع قضائي مرتبط بمراحل الإنجاز';
    engagementModelEn =
      params.entityType === 'corporate'
        ? 'Corporate Stage-Based Representation & Advocacy Agreement'
        : 'Milestone-Based Judicial Representation Agreement';
    engagementModelUr =
      params.entityType === 'corporate'
        ? 'کمپنیوں کے لیے مرحلہ وار قانونی و عدالتی نمائندگی کا معاہدہ'
        : 'مراحل کی تکمیل سے منسلک عدالتی نمائندگی اور پیروی کا معاہدہ';
  } else if (params.entityType === 'corporate') {
    engagementModelAr = 'عقد رعاية واستشارات قانونية سنوي أو مرحلي للشركات';
    engagementModelEn = 'Corporate Retainer or Project-Based Advisory Agreement';
    engagementModelUr = 'کمپنیوں کے لیے سالانہ یا مرحلہ وار قانونی مشاورت کا معاہدہ';
  } else if (params.entityType === 'foreign_investor') {
    engagementModelAr = 'حزمة تأسيس ورعاية قانونية متكاملة للمستثمر الأجنبي';
    engagementModelEn = 'Comprehensive Foreign Investor Legal Onboarding Package';
    engagementModelUr = 'غیر ملکی سرمایہ کار کے لیے کمپنی کے قیام اور قانونی معاونت کا جامع پیکیج';
  }

  const entityDocAr =
    params.entityType === 'corporate'
      ? 'السجل التجاري وعقد التأسيس الساري للمنشأة'
      : params.entityType === 'foreign_investor'
      ? 'السجل التجاري للشركة الأم والقوائم المالية مصدقة من السفارة السعودية'
      : 'صورة الهوية الوطنية أو الإقامة السارية للمستفيد';

  const entityDocEn =
    params.entityType === 'corporate'
      ? 'Active Commercial Registration (CR) & Articles of Association'
      : params.entityType === 'foreign_investor'
      ? 'Parent company CR & financial statements attested by Saudi Embassy'
      : 'Valid National ID or Iqama copy of the client';

  const entityDocUr =
    params.entityType === 'corporate'
      ? 'ادارے کی فعال تجارتی رجسٹریشن (CR) اور عقدِ تاسیس'
      : params.entityType === 'foreign_investor'
      ? 'سعودی سفارت خانے سے تصدیق شدہ مدر کمپنی کی رجسٹریشن اور مالیاتی گوشوارے'
      : 'مستفید کنندہ کے فعال قومی شناختی کارڈ یا اقامہ کی نقل';

  const checklistAr = [entityDocAr, ...service.requiredDocsAr.slice(0, 2)];
  const checklistEn = [entityDocEn, ...service.requiredDocsEn.slice(0, 2)];
  const checklistUr = [entityDocUr, ...service.requiredDocsUr.slice(0, 2)];

  const executionPhasesAr =
    service.category === 'advisory'
      ? [
          'استلام المستندات ودراسة الوقائع والمركز النظامي',
          'إعداد المسودة أو الدراسة القانونية ومراجعتها مع فريق الاختصاص',
          'تسليم المخرجات النهائية وعقد جلسة شرح وتوصيات تنفيذية',
        ]
      : [
          'فحص أصل الحق والبينات وإصدار الوكالة الشرعية بصلاحيات التمثيل',
          'إعداد وقيد الطلبات أو اللوائح النظامية أمام الجهة المختصة',
          'مباشرة الجلسات والإجراءات النظامية وتقديم تقارير دورية للموكل',
        ];

  const executionPhasesEn =
    service.category === 'advisory'
      ? [
          'Document intake and statutory position evaluation',
          'Drafting legal opinion or contract architecture with specialist review',
          'Final deliverable handover and executive walkthrough session',
        ]
      : [
          'Evidentiary review and issuance of statutory Power of Attorney',
          'Drafting and filing formal petitions before the competent authority',
          'Active representation, hearings advocacy, and periodic status reporting',
        ];

  const executionPhasesUr =
    service.category === 'advisory'
      ? [
          'دستاویزات کی وصولی اور واقعات و قانونی حیثیت کا تفصیلی مطالعہ',
          'ماہر ٹیم کے ساتھ قانونی مسودے یا مشاورتی رپورٹ کی تیاری اور نظرثانی',
          'حتمی قانونی مخرجات کی حوالگی اور انتظامی سفارشات کی وضاحتی نشست',
        ]
      : [
          'ثبوتوں کی جانچ پڑتال اور نمائندگی کے اختیارات کے ساتھ شرعی وکالت نامے کا اجرا',
          'مجاز عدالت یا اتھارٹی کے روبرو قانونی درخواستوں اور دعویٰ جات کا اندراج',
          'عدالتی سماعتوں میں پیروی اور مؤکل کو باقاعدہ پیش رفت کی رپورٹس کی فراہمی',
        ];

  return {
    engagementModelAr,
    engagementModelEn,
    engagementModelUr,
    initialReviewDays,
    executionPhasesAr,
    executionPhasesEn,
    executionPhasesUr,
    checklistAr,
    checklistEn,
    checklistUr,
    recommendedCategory: service.category,
  };
}

export function createConsultationTicket(
  input: ConsultationFormInput,
  sequenceNumber = 101
): ConsultationTicket {
  const service =
    LEGAL_SERVICES.find((s) => s.id === input.serviceId) || LEGAL_SERVICES[0];

  const cleanPhone = input.phone.replace(/\D/g, '').slice(-4) || '8100';
  const referenceId = `SAS-${sequenceNumber}-${cleanPhone}`;

  return {
    ...input,
    fullName: input.fullName.trim(),
    phone: input.phone.trim(),
    email: input.email.trim(),
    summary: input.summary.trim(),
    referenceId,
    createdAt: new Date().toISOString(),
    serviceTitleAr: service.titleAr,
    serviceTitleEn: service.titleEn,
    serviceTitleUr: service.titleUr,
  };
}

export type ActivePage = 'home' | 'privacy' | 'terms' | 'disclaimer';

export interface LegalPolicySection {
  id: string;
  index: string;
  titleAr: string;
  titleEn: string;
  titleUr: string;
  contentAr: string;
  contentEn: string;
  contentUr: string;
  bulletsAr?: string[];
  bulletsEn?: string[];
  bulletsUr?: string[];
}

export const LEGAL_DISCLAIMER = {
  titleAr: 'إخلاء المسؤولية القانونية',
  titleEn: 'Legal Disclaimer',
  titleUr: 'قانونی دستبرداری (Legal Disclaimer)',
  shortTextAr:
    'إخلاء مسؤولية قانونية: المعلومات والمواد القانونية والتقديرات المقدمة في هذا الموقع هي لأغراض تثقيفية وتعريفية عامة فقط، ولا تغني عن الاستشارة القانونية الخاصة لكل حالة بحسب وقائعها ومستنداتها. كما أن الاستشارات الأولية الإلكترونية لا تعتبر توكيلاً رسمياً إلا بعد توقيع عقد وكالة وسداد الأتعاب المتفق عليها.',
  shortTextEn:
    'Legal Disclaimer: The information, materials, and estimates provided on this website are for general educational and informational purposes only and do not substitute for specific legal counsel. Initial electronic consultations do not constitute formal legal representation until a written retainer/power of attorney contract is signed and agreed fees are paid.',
  shortTextUr:
    'قانونی دستبرداری: اس ویب سائٹ پر فراہم کردہ معلومات، قانونی مواد اور تخمینے صرف عمومی آگاہی اور معلوماتی مقاصد کے لیے ہیں اور کسی مخصوص معاملے کے لیے باقاعدہ قانونی مشورے کا متبادل نہیں ہیں۔ نیز ابتدائی آن لائن مشاورت کو اس وقت تک باقاعدہ قانونی وکالت نہیں سمجھا جائے گا جب تک تحریری معاہدے پر دستخط اور طے شدہ فیس کی ادائیگی نہ ہو جائے۔',
};

export const PRIVACY_POLICY_SECTIONS: LegalPolicySection[] = [
  {
    id: 'pdpl-compliance',
    index: '01',
    titleAr: 'الالتزام بنظام حماية البيانات الشخصية السعودي (PDPL)',
    titleEn: 'Compliance with Saudi Personal Data Protection Law (PDPL)',
    titleUr: 'سعودی پرسنل ڈیٹا پروٹیکشن لاء (PDPL) کی پابندی',
    contentAr:
      'تلتزم شركة سامي الشريف للمحاماة والاستشارات القانونية بحماية خصوصية بيانات الموكلين وزوار الموقع الإلكتروني وفق أحكام نظام حماية البيانات الشخصية في المملكة العربية السعودية الصادر بالمرسوم الملكي رقم (م/19) وتعديلاته ولوائحه التنفيذية، ووفق واجبات السرية المهنية المنصوص عليها في نظام المحاماة السعودي.',
    contentEn:
      'Sami Al-Sharif Law Firm & Legal Consultations is committed to protecting the privacy of client and visitor data in strict accordance with the Saudi Personal Data Protection Law (PDPL) issued by Royal Decree No. (M/19) and its Implementing Regulations, as well as the statutory confidentiality duties under the Saudi Law Practice Code.',
    contentUr:
      'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز شاہی فرمان نمبر (م/19) کے تحت جاری کردہ سعودی پرسنل ڈیٹا پروٹیکشن لاء (PDPL) اور سعودی وکالت کے قانون میں درج پیشہ ورانہ رازداری کے تقاضوں کے عین مطابق مؤکلین اور ویب سائٹ کے زائرین کے ذاتی ڈیٹا کے تحفظ کی مکمل پابند ہے۔',
  },
  {
    id: 'data-collected',
    index: '02',
    titleAr: 'البيانات الشخصية التي يتم جمعها وطريقة تحصيلها',
    titleEn: 'Personal Data Collected & Collection Methods',
    titleUr: 'جمع کیا جانے والا ذاتی ڈیٹا اور اس کا طریقہ کار',
    contentAr:
      'نقتصر في جمع البيانات الشخصية على الحد الأدنى اللازم لتقديم خدماتنا القانونية والتواصل مع مقدم الطلب، ويتم جمعها مباشرة بموافقة صاحب البيانات عند تعبئة نموذج طلب الاستشارة أو التواصل عبر الواتساب أو البريد الإلكتروني الرسمي، وتشمل:',
    contentEn:
      'We limit personal data collection to the minimum necessary to process legal inquiries and communicate with applicants, collected directly with consent via our consultation form, WhatsApp, or official email:',
    contentUr:
      'ہم صرف وہی کم از کم ذاتی معلومات جمع کرتے ہیں جو قانونی خدمات کی فراہمی اور درخواست دہندہ سے رابطے کے لیے ضروری ہیں، اور یہ معلومات براہِ راست صارف کی رضامندی سے مشاورتی فارم، واٹس ایپ یا سرکاری ای میل کے ذریعے حاصل کی جاتی ہیں:',
    bulletsAr: [
      'بيانات الهوية والتعريف: الاسم الكامل أو اسم المنشأة وصفة مقدم الطلب (فرد، شركة، مستثمر أجنبي).',
      'بيانات التواصل: رقم الجوال وعنوان البريد الإلكتروني.',
      'بيانات الطلب القانوني: نوع الخدمة القانونية المطلوبة، مستوى الأولوية، وملخص الموضوع أو الاستشارة.',
    ],
    bulletsEn: [
      'Identification Data: Full name or entity name and client classification (individual, corporate, foreign investor).',
      'Contact Details: Mobile phone number and email address.',
      'Legal Inquiry Data: Selected legal service, urgency level, and brief summary of the legal matter.',
    ],
    bulletsUr: [
      'شناختی معلومات: مکمل نام یا کمپنی کا نام اور درخواست دہندہ کی حیثیت (فرد، کمپنی، غیر ملکی سرمایہ کار)۔',
      'رابطے کی تفصیلات: موبائل فون نمبر اور ای میل ایڈریس۔',
      'قانونی درخواست کی تفصیل: مطلوبہ قانونی خدمت کی قسم، ترجیحی درجہ اور معاملے کا مختصر خلاصہ۔',
    ],
  },
  {
    id: 'processing-purpose',
    index: '03',
    titleAr: 'أغراض معالجة البيانات واستخدامها',
    titleEn: 'Purposes of Data Processing & Use',
    titleUr: 'ڈیٹا کی پروسیسنگ اور استعمال کے مقاصد',
    contentAr:
      'تُعالج البيانات الشخصية حصراً للأغراض المشروعة المرتبطة بطلب المستفيد، ولا يتم استخدامها لأي أغراض تسويقية غير مصرح بها، وتتمثل أغراض المعالجة في:',
    contentEn:
      'Personal data is processed exclusively for legitimate purposes directly linked to the client request and is never used for unauthorized marketing:',
    contentUr:
      'ذاتی ڈیٹا کو صرف مؤکل کی درخواست سے وابستہ جائز قانونی مقاصد کے لیے استعمال کیا جاتا ہے اور اسے کسی غیر مجاز مارکیٹنگ کے لیے استعمال نہیں کیا جاتا:',
    bulletsAr: [
      'دراسة طلبات الاستشارات القانونية المبدئية وتحديد القسم المختص داخل الشركة.',
      'إجراء فحص عدم تعارض المصالح المهنية قبل قبول التمثيل أو تقديم الاستشارة.',
      'التواصل مع مقدم الطلب لتزويده بالرد المبدئي أو عرض الأتعاب أو تحديد موعد الجلسة الاستشارية.',
      'الوفاء بالمتطلبات النظامية والقضائية المقررة على شركات المحاماة المرخصة في المملكة.',
    ],
    bulletsEn: [
      'Reviewing initial legal consultation requests and assigning the appropriate specialist team.',
      'Conducting mandatory conflict-of-interest checks prior to formal engagement.',
      'Communicating with the applicant regarding initial assessments, fee proposals, or appointment scheduling.',
      'Fulfilling regulatory and statutory obligations applicable to licensed law firms in Saudi Arabia.',
    ],
    bulletsUr: [
      'ابتدائی قانونی مشاورت کی درخواستوں کا جائزہ لینا اور متعلقہ ماہر ٹیم کا تعین کرنا۔',
      'باقاعدہ وکالت یا مشاورت قبول کرنے سے قبل مفادات کے ٹکراؤ کی جانچ پڑتال کرنا۔',
      'ابتدائی رائے، فیس کی پیشکش یا مشاورتی ملاقات کے وقت کے تعین کے لیے درخواست دہندہ سے رابطہ کرنا۔',
      'مملکت میں لائسنس یافتہ لاء فرمز پر لاگو قانونی اور عدالتی تقاضوں کو پورا کرنا۔',
    ],
  },
  {
    id: 'consultation-confidentiality',
    index: '04',
    titleAr: 'سرية الاستشارات والمعلومات القانونية وعدم الإفصاح',
    titleEn: 'Confidentiality of Legal Consultations & Non-Disclosure',
    titleUr: 'قانونی مشاورت کی رازداری اور عدم افشا',
    contentAr:
      'تحاط كافة البيانات والمستندات والوقائع التي يشاركها العميل مع الشركة بسرية مهنية تامة، سواء أفضى التواصل إلى إبرام عقد تمثيل رسمي أم لم يُفضِ. ولا يجوز للشركة أو لأي من محاميها ومستشاريها إفشاء أي بيانات شخصية أو تفاصيل استشارة لأي طرف ثالث إلا في الحالات المنصوص عليها نظاماً في نظام حماية البيانات الشخصية (PDPL) ونظام المحاماة السعودي.',
    contentEn:
      'All data, documents, and facts shared with the firm are treated with strict professional confidentiality, regardless of whether a formal retainer is concluded. No personal data or consultation details are disclosed to third parties except as strictly mandated by the Saudi PDPL and the Saudi Law Practice Code.',
    contentUr:
      'مؤکل کی جانب سے شیئر کی گئی تمام معلومات، دستاویزات اور واقعات کو مکمل پیشہ ورانہ رازداری میں رکھا جاتا ہے، خواہ باقاعدہ وکالت کا معاہدہ طے پائے یا نہ پائے۔ سعودی PDPL اور وکالت کے قانون کی لازمی شرائط کے سوا کوئی بھی معلومات کسی تیسرے فریق کو ظاہر نہیں کی جاتیں۔',
  },
  {
    id: 'pdpl-rights',
    index: '05',
    titleAr: 'حقوق صاحب البيانات الشخصية وفق نظام (PDPL)',
    titleEn: 'Data Subject Rights under Saudi PDPL',
    titleUr: 'سعودی قانون (PDPL) کے تحت ڈیٹا کے مالک کے حقوق',
    contentAr:
      'يكفل نظام حماية البيانات الشخصية السعودي لصاحب البيانات ممارسة الحقوق النظامية التالية في أي وقت عبر التواصل مع قنواتنا الرسمية:',
    contentEn:
      'Under the Saudi Personal Data Protection Law (PDPL), data subjects have the right to exercise the following statutory rights at any time through our official channels:',
    contentUr:
      'سعودی پرسنل ڈیٹا پروٹیکشن لاء (PDPL) کے تحت ڈیٹا کے مالک کو ہمارے سرکاری ذرائع سے رابطہ کر کے درج ذیل قانونی حقوق استعمال کرنے کا پورا اختیار حاصل ہے:',
    bulletsAr: [
      'الحق في العلم: معرفة المسوغ النظامي والغرض من جمع بياناته الشخصية.',
      'الحق في الوصول والحصول على نسخة: الاطلاع على بياناته الشخصية المحفوظة لدى الشركة.',
      'الحق في التصحيح والتحديث: طلب تعديل أو استكمال أو تحديث أي بيانات شخصية غير دقيقة.',
      'الحق في طلب الإتلاف والمسح: طلب حذف بياناته الشخصية عند انتهاء الغرض من جمعها أو العدول عن الموافقة، ما لم يوجد مقتضى نظامي للاحتفاظ بها.',
    ],
    bulletsEn: [
      'Right to Know: Being informed of the legal basis and purpose of collecting personal data.',
      'Right of Access: Requesting access to and a readable copy of personal data held by the firm.',
      'Right to Rectification: Requesting correction, completion, or updating of inaccurate personal data.',
      'Right to Destruction: Requesting deletion/destruction of personal data when no longer needed or upon withdrawal of consent, subject to statutory retention rules.',
    ],
    bulletsUr: [
      'جاننے کا حق: ذاتی ڈیٹا جمع کرنے کی قانونی بنیاد اور مقصد کے بارے میں آگاہی۔',
      'رسائی اور نقل حاصل کرنے کا حق: فرم کے پاس محفوظ اپنے ذاتی ڈیٹا تک رسائی اور اس کی نقل حاصل کرنا۔',
      'تصحیح اور اپ ڈیٹ کا حق: کسی بھی غیر درست ذاتی معلومات کی تصحیح یا تکمیل کی درخواست کرنا۔',
      'ڈیٹا تلف کرنے کا حق: مقصد پورا ہونے یا رضامندی واپس لینے پر ذاتی ڈیٹا کو حذف کرنے کی درخواست کرنا (بشرطیکہ قانونی طور پر محفوظ رکھنا لازم نہ ہو)۔',
    ],
  },
  {
    id: 'security-storage',
    index: '06',
    titleAr: 'أمن البيانات وفترة الاحتفاظ بها والتواصل',
    titleEn: 'Data Security, Retention & Contact Officer',
    titleUr: 'ڈیٹا کی سیکیورٹی، مدتِ تحفظ اور رابطہ',
    contentAr:
      'تطبق الشركة التدابير الأمنية والتقنية والتنظيمية اللازمة لحماية البيانات من الفقد أو التلف أو الاختراق أو الوصول غير المصرح به. ولأي استفسار أو طلب يتعلق بحقوق حماية البيانات الشخصية، يمكنكم التواصل مباشرة عبر البريد الرسمي (alshareeflawyer@gmail.com) أو هاتف الشركة (0569888100).',
    contentEn:
      'We implement technical and organizational safeguards to protect personal data against unauthorized access, loss, or breach. For any requests regarding your PDPL rights, please contact us via official email (alshareeflawyer@gmail.com) or phone (0569888100).',
    contentUr:
      'فرم ڈیٹا کو غیر مجاز رسائی، ضیاع یا خلاف ورزی سے بچانے کے لیے تمام ضروری تکنیکی اور انتظامی حفاظتی اقدامات لاگو کرتی ہے۔ ذاتی ڈیٹا کے تحفظ سے متعلق کسی بھی سوال یا درخواست کے لیے آپ سرکاری ای میل (alshareeflawyer@gmail.com) یا فون نمبر (0569888100) پر رابطہ کر سکتے ہیں۔',
  },
];

export const TERMS_AND_CONDITIONS_SECTIONS: LegalPolicySection[] = [
  {
    id: 'terms-acceptance',
    index: '01',
    titleAr: 'نطاق التطبيق والقبول بالشروط والأحكام',
    titleEn: 'Scope of Application & Acceptance of Terms',
    titleUr: 'شرائط و ضوابط کا دائرہ کار اور منظوری',
    contentAr:
      'تُنظم هذه الشروط والأحكام ضوابط استخدام الموقع الإلكتروني الرسمي لشركة سامي الشريف للمحاماة والاستشارات القانونية وجميع خدماته الرقمية التفاعلية. ويُعد تصفحك للموقع أو إرسالك لأي نموذج استشارة إلكتروني إقراراً منك بالاطلاع على هذه الشروط والموافقة عليها.',
    contentEn:
      'These Terms & Conditions govern the use of the official website of Sami Al-Sharif Law Firm & Legal Consultations and its interactive tools. Accessing this website or submitting an electronic inquiry constitutes your full acceptance of these terms.',
    contentUr:
      'یہ شرائط و ضوابط سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز کی سرکاری ویب سائٹ اور اس کے ڈیجیٹل ٹولز کے استعمال کو منظم کرتے ہیں۔ ویب سائٹ کا استعمال یا آن لائن مشاورتی فارم جمع کرانا ان شرائط سے آپ کی مکمل رضامندی تصور کیا جائے گا۔',
  },
  {
    id: 'no-formal-retainer',
    index: '02',
    titleAr: 'طبيعة الاستشارات الأولية وشروط انعقاد التوكيل الرسمي',
    titleEn: 'Initial Electronic Consultations & Formal Representation Conditions',
    titleUr: 'ابتدائی آن لائن مشاورت کی نوعیت اور باقاعدہ وکالت کی شرائط',
    contentAr:
      'توضيح نظامي جوهري: إن إرسال طلب استشارة عبر الموقع الإلكتروني أو عبر تطبيق الواتساب أو البريد الإلكتروني، أو استخدام أداة تقييم النطاق القانوني، أو تلقي رد أولي من فريق الشركة، لا يُعتبر توكيلاً رسمياً ولا ينشئ علاقة تعاقدية أو وكالة قانونية ملزمة؛ ولا تنعقد صفة التمثيل القانوني أو التوكيل الرسمي إلا بعد استيفاء الشروط التالية مجتمعة:',
    contentEn:
      'Essential Legal Notice: Submitting a consultation request via the website, WhatsApp, or email, using the scope estimator, or receiving an initial response does NOT constitute formal legal representation or create a binding attorney-client relationship. Formal representation is established ONLY after fulfilling all of the following conditions:',
    contentUr:
      'اہم قانونی وضاحت: ویب سائٹ، واٹس ایپ یا ای میل کے ذریعے مشاورت کی درخواست بھیجنا، یا ابتدائی جواب موصول ہونا باقاعدہ قانونی وکالت (Power of Attorney) نہیں سمجھا جاتا اور نہ ہی اس سے کوئی پابند معاہداتی تعلق قائم ہوتا ہے۔ باقاعدہ قانونی نمائندگی صرف درج ذیل تمام شرائط پوری ہونے کے بعد قائم ہوتی ہے:',
    bulletsAr: [
      'مراجعة الشركة للطلب والتحقق النظامي من عدم وجود تعارض في المصالح.',
      'توقيع عقد أتعاب محاماة واستشارات قانونية رسمي ومكتوب ومعتمد من الطرفين يحدد نطاق العمل بدقة.',
      'إصدار وكالة شرعية / رسمية سارية المفعول عند تطلب الخدمة للتمثيل أمام الجهات القضائية أو الحكومية.',
      'سداد العميل للدفعة المستحقة من الأتعاب المتفق عليها في العقد المبرم.',
    ],
    bulletsEn: [
      'Completion of the firm’s internal review and statutory conflict-of-interest clearance.',
      'Execution of a formal, written legal engagement/retainer contract signed by both parties defining the exact scope of work.',
      'Issuance of a valid official Power of Attorney (where judicial or administrative representation is required).',
      'Payment of the agreed retainer fees in accordance with the signed engagement contract.',
    ],
    bulletsUr: [
      'فرم کی جانب سے درخواست کا جائزہ اور مفادات کے عدم ٹکراؤ کی قانونی تصدیق۔',
      'دونوں فریقین کے دستخط شدہ باقاعدہ تحریری وکالت و مشاورتی معاہدے کا انعقاد جس میں کام کا دائرہ کار واضح ہو۔',
      'عدالتی یا سرکاری اداروں کے روبرو نمائندگی کی صورت میں فعال شرعی/سرکاری وکالت نامے کا اجرا۔',
      'طے شدہ معاہدے کے مطابق واجب الادا فیس کی ادائیگی۔',
    ],
  },
  {
    id: 'educational-nature',
    index: '03',
    titleAr: 'الطبيعة التثقيفية للمحتوى وأداة تقييم النطاق',
    titleEn: 'Informational Nature of Content & Scope Estimator',
    titleUr: 'مواد اور قانونی تخمینہ ٹول کی معلوماتی نوعیت',
    contentAr:
      'جميع المعلومات القانونية، وتفاصيل المخرجات، والمدد الزمنية التقريبية المعروضة في الموقع وفي أداة تقييم المسار القانوني هي مؤشرات استرشادية وتثقيفية عامة فقط، وقد تختلف الإجراءات والمتطلبات الفعلية باختلاف وقائع كل قضية والأنظمة واللوائح المطبقة وقت دراسة الملف.',
    contentEn:
      'All legal information, deliverable descriptions, and timeline estimates displayed on the website and within the Legal Scope Estimator are indicative and for general informational purposes only. Actual legal procedures and timelines depend on the specific facts and documents of each case.',
    contentUr:
      'ویب سائٹ اور قانونی تخمینہ ٹول میں دکھائی گئی تمام قانونی معلومات، مخرجات اور متوقع مدت صرف عمومی رہنمائی اور آگاہی کے لیے ہیں؛ اصل قانونی کارروائی اور درکار وقت ہر مقدمے کے مخصوص واقعات اور دستاویزات پر منحصر ہوتا ہے۔',
  },
  {
    id: 'user-obligations',
    index: '04',
    titleAr: 'التزامات المستخدم وصحة البيانات المقدمة',
    titleEn: 'User Obligations & Accuracy of Submitted Data',
    titleUr: 'صارف کی ذمہ داریاں اور فراہم کردہ معلومات کی درستگی',
    contentAr:
      'يتعهد المستخدم بصحة ودقة البيانات التي يدخلها في نماذج طلب الاستشارة، وبأنه صاحب الصفة النظامية أو المفوض النظامي للتواصل بشأن الموضوع المطروح، مع الالتزام بعدم استخدام الموقع لأي غرض يخالف الأنظمة المرعية في المملكة العربية السعودية.',
    contentEn:
      'Users warrant that all information submitted through consultation forms is accurate and that they possess the legal capacity or authorization to inquire about the matter, strictly complying with applicable laws in the Kingdom of Saudi Arabia.',
    contentUr:
      'صارف اس بات کی ضمانت دیتا ہے کہ مشاورتی فارم میں درج کی گئی تمام معلومات درست ہیں اور وہ متعلقہ معاملے میں رابطہ کرنے کا قانونی اختیار رکھتا ہے، نیز وہ ویب سائٹ کو مملکتِ سعودی عرب کے قوانین کے خلاف کسی مقصد کے لیے استعمال نہیں کرے گا۔',
  },
  {
    id: 'intellectual-property',
    index: '05',
    titleAr: 'حقوق الملكية الفكرية وحقوق النشر',
    titleEn: 'Intellectual Property & Copyright',
    titleUr: 'دانشورانہ ملکیت اور کاپی رائٹ کے حقوق',
    contentAr:
      'جميع المحتويات النصية، والتصاميم، والهيكلية التنظيمية للخدمات المنشورة على هذا الموقع هي ملكية خالصة لشركة سامي الشريف للمحاماة والاستشارات القانونية، ويُحظر نسخها أو إعادة نشرها لأغراض تجارية دون إذن خطي مسبق.',
    contentEn:
      'All textual content, visual design, and structured service methodologies on this website are the exclusive intellectual property of Sami Al-Sharif Law Firm & Legal Consultations and may not be reproduced commercially without prior written consent.',
    contentUr:
      'اس ویب سائٹ پر شائع کردہ تمام تحریری مواد، ڈیزائن اور خدمات کی ساخت سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز کی خالص ملکیت ہیں، جنہیں پیشگی تحریری اجازت کے بغیر تجارتی مقاصد کے لیے نقل یا دوبارہ شائع کرنا ممنوع ہے۔',
  },
  {
    id: 'governing-law',
    index: '06',
    titleAr: 'النظام الواجب التطبيق والاختصاص المكاني',
    titleEn: 'Governing Law & Competent Jurisdiction',
    titleUr: 'قابلِ اطلاق قانون اور عدالتی دائرہ اختیار',
    contentAr:
      'تخضع هذه الشروط والأحكام وتُفسر وفقاً للأنظمة واللوائح السارية في المملكة العربية السعودية، وتختص المحاكم المختصة في المملكة العربية السعودية (مكة المكرمة / جدة) بالفصل في أي نزاع ينشأ عن استخدام الموقع.',
    contentEn:
      'These Terms & Conditions are governed by and construed in accordance with the laws and regulations of the Kingdom of Saudi Arabia, with exclusive jurisdiction vested in the competent courts of Saudi Arabia (Makkah / Jeddah).',
    contentUr:
      'یہ شرائط و ضوابط مملکتِ سعودی عرب کے نافذ العمل قوانین و ضوابط کے تابع ہیں اور ویب سائٹ کے استعمال سے پیدا ہونے والے کسی بھی تنازعے کے فیصلے کا اختیار سعودی عرب (مکہ مکرمہ / جدہ) کی مجاز عدالتوں کو حاصل ہے۔',
  },
];

export const DISCLAIMER_SECTIONS: LegalPolicySection[] = [
  {
    id: 'general-educational-purpose',
    index: '01',
    titleAr: 'الغرض التثقيفي والتعريفي العام للمحتوى',
    titleEn: 'General Educational & Informational Purpose',
    titleUr: 'مواد کا عمومی تعلیمی اور معلوماتی مقصد',
    contentAr:
      'إن كافة المواد والمعلومات والملخصات القانونية المنشورة عبر الموقع الإلكتروني لشركة سامي الشريف للمحاماة والاستشارات القانونية مُعدة لأغراض تثقيفية وتعريفية عامة فقط، ولا يُقصد بها تقديم فتوى أو رأي قانوني خاص أو استشارة نظامية نهائية يُعتمد عليها لاتخاذ قرار دون مراجعة محامٍ مختص.',
    contentEn:
      'All materials, summaries, and legal descriptions published on the website of Sami Al-Sharif Law Firm & Legal Consultations are prepared strictly for general educational and informational purposes and do not constitute formal legal opinions.',
    contentUr:
      'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز کی ویب سائٹ پر شائع کردہ تمام قانونی مواد اور خلاصے صرف عمومی آگاہی اور معلوماتی مقاصد کے لیے تیار کیے گئے ہیں اور انہیں کسی ماہر وکیل سے رجوع کیے بغیر حتمی قانونی رائے یا فتویٰ نہیں سمجھا جانا چاہیے۔',
  },
  {
    id: 'no-substitute-for-counsel',
    index: '02',
    titleAr: 'عدم الاستغناء عن الاستشارة القانونية الخاصة',
    titleEn: 'No Substitute for Specialized Legal Consultation',
    titleUr: 'مخصوص قانونی مشاورت کا متبادل نہ ہونا',
    contentAr:
      'نظراً لأن الأحكام والمراكز النظامية تختلف باختلاف الوقائع والوثائق والعقود الخاصة بكل حالة، فإن المعلومات الواردة في الموقع لا تغني بأي حال عن طلب الاستشارة القانونية المتخصصة المبنية على دراسة شاملة للمستندات والوقائع الفعلية.',
    contentEn:
      'Because legal positions vary significantly based on specific facts, contracts, and evidentiary documents, the content on this website is no substitute for obtaining specialized legal advice tailored to your individual situation.',
    contentUr:
      'چونکہ قانونی احکام اور حیثیت ہر معاملے کے مخصوص واقعات، دستاویزات اور معاہدوں کے لحاظ سے مختلف ہوتی ہے، اس لیے ویب سائٹ پر موجود معلومات کسی بھی صورت میں دستاویزات کے تفصیلی مطالعے پر مبنی مخصوص قانونی مشاورت کا متبادل نہیں ہیں۔',
  },
  {
    id: 'no-agency-without-contract',
    index: '03',
    titleAr: 'عدم انعقاد الوكالة بمجرد المراسلة الإلكترونية',
    titleEn: 'No Formal Agency Through Electronic Correspondence Alone',
    titleUr: 'محض الیکٹرانک خط و کتابت سے وکالت کا عدم انعقاد',
    contentAr:
      'لا يُنشئ إرسال الاستفسارات أو طلبات الاستشارة الأولية عبر الموقع الإلكتروني أو الواتساب أو البريد الإلكتروني علاقة توكيل رسمي، ولا تلتزم الشركة بمباشرة أي إجراء قضائي أو نظامي نيابة عن المرسل إلا بعد توقيع عقد وكالة وأتعاب رسمي وسداد الأتعاب المتفق عليها.',
    contentEn:
      'Sending inquiries or initial consultation requests via the website, WhatsApp, or email does not establish a formal agency relationship. The firm assumes no duty to act before any judicial or administrative body until a written retainer agreement is signed and agreed fees are paid.',
    contentUr:
      'ویب سائٹ، واٹس ایپ یا ای میل کے ذریعے سوالات یا ابتدائی مشاورت کی درخواست بھیجنے سے باقاعدہ وکالت کا تعلق قائم نہیں ہوتا، اور فرم اس وقت تک کسی عدالتی یا سرکاری کارروائی کی پابند نہیں جب تک باقاعدہ معاہدہ دستخط نہ ہو اور طے شدہ فیس ادا نہ کر دی جائے۔',
  },
  {
    id: 'limitation-of-liability',
    index: '04',
    titleAr: 'حدود المسؤولية عن القرارات الفردية',
    titleEn: 'Limitation of Liability',
    titleUr: 'انفرادی فیصلوں پر ذمہ داری کی حدود',
    contentAr:
      'تُخلي شركة سامي الشريف للمحاماة والاستشارات القانونية مسؤوليتها عن أي إجراءات أو تصرفات يتخذها زائر الموقع استناداً إلى الفهم العام للمحتوى التعريفي المنشور في الموقع دون الرجوع المباشر إلى مستشاري الشركة والحصول على دراسة قانونية مكتوبة ومعتمدة.',
    contentEn:
      'Sami Al-Sharif Law Firm & Legal Consultations disclaims liability for any actions taken by website visitors in reliance solely on general informational content without obtaining a formal, written legal assessment from our licensed counselors.',
    contentUr:
      'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز ایسے کسی بھی اقدام یا فیصلے کی ذمہ داری سے بری الذمہ ہے جو ویب سائٹ کے زائر نے فرم کے مستند مشیروں سے تحریری قانونی رائے حاصل کیے بغیر محض ویب سائٹ کے عمومی معلوماتی مواد کی بنیاد پر کیا ہو۔',
  },
];

export interface TrustBarItem {
  id: string;
  titleAr: string;
  titleEn: string;
  titleUr: string;
  descAr: string;
  descEn: string;
  descUr: string;
}

export const TRUST_BAR_ITEMS: TrustBarItem[] = [
  {
    id: 'moj-license',
    titleAr: 'مرخص من وزارة العدل السعودية',
    titleEn: 'Licensed by Saudi Ministry of Justice',
    titleUr: 'سعودی وزارتِ انصاف سے لائسنس یافتہ',
    descAr: 'مزاولة مهنة المحاماة والاستشارات الشرعية والنظامية بترخيص رسمي معتمد',
    descEn: 'Officially licensed to practice law, judicial advocacy, and legal consultations in KSA',
    descUr: 'مملکت میں وکالت اور قانونی مشاورت کا باضابطہ سرکاری لائسنس',
  },
  {
    id: 'sba-member',
    titleAr: 'عضوية الهيئة السعودية للمحامين',
    titleEn: 'Saudi Bar Association (SBA) Membership',
    titleUr: 'سعودی بار ایسوسی ایشن (SBA) کی رکنیت',
    descAr: 'التزام كامل بمعايير السلوك المهني وميثاق أخلاقيات مهنة المحاماة',
    descEn: 'Full adherence to professional conduct standards and legal ethics charter',
    descUr: 'پیشہ ورانہ ضابطہ اخلاق اور وکالت کے اعلیٰ معیارات کی مکمل پاسداری',
  },
  {
    id: 'pdpl-compliance',
    titleAr: 'الالتزام التام بنظام حماية البيانات الشخصية PDPL',
    titleEn: 'Strict Compliance with Saudi PDPL',
    titleUr: 'سعودی پرسنل ڈیٹا پروٹیکشن لاء (PDPL) کی مکمل پابندی',
    descAr: 'حماية صارمة لسرية بيانات الموكلين ووثائق الشركات والأسرار التجارية',
    descEn: 'Rigorous protection of client data, corporate records, and trade secrets',
    descUr: 'مؤکلین کے ذاتی ڈیٹا، کارپوریٹ ریکارڈز اور تجارتی رازوں کا مکمل تحفظ',
  },
];

export interface WhyChooseUsItem {
  id: string;
  index: string;
  titleAr: string;
  titleEn: string;
  titleUr: string;
  descAr: string;
  descEn: string;
  descUr: string;
  highlightAr: string;
  highlightEn: string;
  highlightUr: string;
}

export const WHY_CHOOSE_US_ITEMS: WhyChooseUsItem[] = [
  {
    id: 'strategic-presence',
    index: '01',
    titleAr: 'تواجد استراتيجي في مكة المكرمة وجدة وخدمة كافة مناطق المملكة',
    titleEn: 'Strategic Presence in Makkah & Jeddah Serving All Regions of KSA',
    titleUr: 'مکہ مکرمہ اور جدہ میں اسٹریٹجک موجودگی اور پوری مملکت میں خدمات',
    descAr:
      'موقع حيوي يمكّننا من مباشرة القضايا والمعاملات التجارية والعقارية والأوقاف والاستثمار في منطقة مكة المكرمة وجدة ومختلف محاكم وهيئات المملكة حضورياً وإلكترونياً.',
    descEn:
      'Direct on-the-ground representation in Makkah and Jeddah alongside seamless digital and physical advocacy before courts across all regions of Saudi Arabia.',
    descUr:
      'مکہ مکرمہ اور جدہ میں براہِ راست موجودگی کے ساتھ ساتھ مملکت کی تمام عدالتوں اور قانونی اداروں میں حضوری اور آن لائن پیروی۔',
    highlightAr: 'مكة المكرمة · جدة · جميع محاكم المملكة',
    highlightEn: 'Makkah · Jeddah · Nationwide Courts',
    highlightUr: 'مکہ مکرمہ · جدہ · تمام سعودی عدالتیں',
  },
  {
    id: 'clear-timelines',
    index: '02',
    titleAr: 'وضوح المدد الزمنية لإنجاز كل خدمة مسبقاً بشفافية تامة',
    titleEn: 'Upfront Clarity on Execution Timelines & Deliverables',
    titleUr: 'ہر خدمت کی تکمیل کے لیے مقررہ مدت اور مراحل کی پیشگی وضاحت',
    descAr:
      'نلتزم بتحديد الإطار الزمني المتوقع، والمستندات المطلوبة، والمخرجات القانونية المكتوبة لكل خدمة قبل البدء، مع تزويد الموكل بتقارير متابعة دورية.',
    descEn:
      'Every legal service features pre-defined review timeframes, clear document checklists, and structured written deliverables with periodic status updates.',
    descUr:
      'کام شروع کرنے سے قبل متوقع مدت، مطلوبہ دستاویزات اور تحریری قانونی مخرجات کی مکمل وضاحت اور باقاعدہ پیش رفت کی رپورٹس۔',
    highlightAr: 'جداول زمنية محددة · تقارير دورية للموكل',
    highlightEn: 'Defined SLAs · Periodic Client Reports',
    highlightUr: 'واضح نظام الاوقات · باقاعدہ رپورٹس',
  },
  {
    id: 'sharia-statutory-commercial',
    index: '03',
    titleAr: 'دمج التأصيل الشرعي والنظامي بالحلول التجارية المبتكرة',
    titleEn: 'Synthesizing Sharia & Statutory Mastery with Commercial Agility',
    titleUr: 'شرعی و قانونی مہارت اور جدید تجارتی حل کا بہترین امتزاج',
    descAr:
      'نجمع بين التمكن العميق من الأنظمة السعودية (المعاملات المدنية، الشركات، العمل، الإفلاس) وبين الفهم التجاري العميق الذي يحمي استمرارية الأعمال ونموها.',
    descEn:
      'Combining deep command of Saudi regulations (Civil Transactions, Companies, Labor, Bankruptcy) with practical commercial acumen that safeguards business growth.',
    descUr:
      'سعودی قوانین (دیوانی معاملات، کمپنیز، لیبر، دیوالیہ پن) میں گہری مہارت اور کاروباری ترقی کو محفوظ بنانے والی عملی حکمتِ عملی۔',
    highlightAr: 'حماية وقائية · حلول غير تقليدية',
    highlightEn: 'Preventive Protection · Innovative Strategy',
    highlightUr: 'پیشگی تحفظ · جدید قانونی حکمتِ عملی',
  },
];

export const FOUNDER_PROFILE = {
  nameAr: 'المحامي والمستشار القانوني سامي الشريف',
  nameEn: 'Sami Al-Sharif — Attorney at Law & Legal Counselor',
  nameUr: 'ایڈووکیٹ اینڈ لیگل کونسلر سامی الشریف',
  roleAr: 'المؤسس والمدير العام · شركة سامي الشريف للمحاماة والاستشارات القانونية',
  roleEn: 'Founder & Managing Partner · Sami Al-Sharif Law Firm & Legal Consultations',
  roleUr: 'بانی اور مینیجنگ پارٹنر · سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز',
  bioAr:
    'يقود المحامي والمستشار القانوني سامي الشريف منظومة العمل القانوني والقضائي في الشركة بخبرة قيادية راسخة في الأنظمة السعودية، وتمثيل كبار الموكلين من الشركات والمؤسسات والمستثمرين والأفراد أمام المحاكم التجارية والعامة والإدارية وهيئات التحكيم، مع إشراف مباشر على جودة المخرجات القانونية وصياغة الاستراتيجيات الوقائية والعلاجية.',
  bioEn:
    'Attorney and Legal Counselor Sami Al-Sharif leads the firm’s judicial and advisory practice with extensive leadership experience in Saudi laws, representing major corporations, investors, and individuals before Commercial, General, and Administrative courts and arbitration tribunals.',
  bioUr:
    'ایڈووکیٹ اور قانونی مشیر سامی الشریف سعودی قوانین میں وسیع قائدانہ تجربے کے ساتھ فرم کی عدالتی اور مشاورتی خدمات کی قیادت کرتے ہیں، اور تجارتی، عمومی و انتظامی عدالتوں اور ثالثی ٹربیونلز کے روبرو بڑی کمپنیوں، سرمایہ کاروں اور افراد کی نمائندگی کرتے ہیں۔',
  highlightsAr: [
    'مرخص من وزارة العدل السعودية وعضو الهيئة السعودية للمحامين',
    'خبرة قيادية في القضايا التجارية والشركات والأوقاف وتصفية التركات',
    'إشراف مباشر على صياغة العقود الكبرى والتحكيم وتأهيل الإدارات القانونية',
  ],
  highlightsEn: [
    'Licensed by the Saudi Ministry of Justice & Member of Saudi Bar Association',
    'Leadership in commercial litigation, corporate law, Waqf, and estate liquidation',
    'Direct supervision of high-value contracts, arbitration, and legal structuring',
  ],
  highlightsUr: [
    'سعودی وزارتِ انصاف سے لائسنس یافتہ اور سعودی بار ایسوسی ایشن کے رکن',
    'تجارتی مقدمات، کارپوریٹ لاء، اوقاف اور ترکہ کی تقسیم میں قائدانہ تجربہ',
    'بڑے معاہدوں، ثالثی اور قانونی شعبہ جات کی تشکیل کی براہِ راست نگرانی',
  ],
};

export interface FaqItem {
  id: string;
  questionAr: string;
  questionEn: string;
  questionUr: string;
  answerAr: string;
  answerEn: string;
  answerUr: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-confidentiality',
    questionAr: 'كيف تضمنون سرية بيانات شركتي ومستنداتي القانونية؟',
    questionEn: 'How do you guarantee the confidentiality of my company’s data and legal documents?',
    questionUr: 'آپ میری کمپنی کے ڈیٹا اور قانونی دستاویزات کی رازداری کی ضمانت کیسے دیتے ہیں؟',
    answerAr:
      'تخضع جميع المراسلات والمستندات والوقائع التي يشاركها الموكل لالتزام السرية المهنية الصارم بموجب نظام المحاماة السعودي ونظام حماية البيانات الشخصية السعودي (PDPL)، حتى في مرحلة الاستشارة الأولية. كما نلتزم بتوقيع اتفاقيات عدم إفصاح (NDA) إضافية للشركات والصفقات الاستثمارية الحساسة.',
    answerEn:
      'All communications, documents, and facts shared by clients are protected by strict statutory confidentiality under the Saudi Law Practice Code and the Saudi Personal Data Protection Law (PDPL), starting from the initial inquiry. We also execute formal Non-Disclosure Agreements (NDAs) for sensitive corporate transactions.',
    answerUr:
      'مؤکل کی جانب سے شیئر کی گئی تمام خط و کتابت اور دستاویزات کو سعودی وکالت کے قانون اور پرسنل ڈیٹا پروٹیکشن لاء (PDPL) کے تحت ابتدائی مشاورت کے مرحلے سے ہی مکمل رازداری حاصل ہوتی ہے، نیز حساس کاروباری معاملات کے لیے الگ رازداری کا معاہدہ (NDA) بھی کیا جاتا ہے۔',
  },
  {
    id: 'faq-fees',
    questionAr: 'كيف يتم تحديد أتعاب المحاماة والاستشارات القانونية؟',
    questionEn: 'How are legal consultation and representation fees determined?',
    questionUr: 'قانونی مشاورت اور وکالت کی فیس کا تعین کیسے کیا جاتا ہے؟',
    answerAr:
      'نعتمد مبدأ الشفافية التامة منذ اليوم الأول؛ حيث يتم دراسة ملخص الموضوع والمستندات المبدئية، ثم تقديم عرض أتعاب مكتوب ومفصل يوضح نطاق العمل والمخرجات والمدد الزمنية وآلية السداد (سواء كان عقداً مقطوعاً لخدمة محددة، أو أتعاباً مرحلية مرتبطة بالإنجاز القضائي، أو عقد رعاية سنوي).',
    answerEn:
      'We operate with 100% transparency from day one. After reviewing your case summary and initial documents, we provide a written fee proposal detailing the exact scope, deliverables, timeline, and payment structure (fixed-fee advisory, milestone-based litigation retainer, or annual corporate retainer).',
    answerUr:
      'ہم پہلے دن سے مکمل شفافیت کا اصول اپناتے ہیں؛ معاملے کے ابتدائی جائزے کے بعد ایک تحریری اور واضح فیس پروپوزل پیش کیا جاتا ہے جس میں کام کا دائرہ کار، مراحل اور ادائیگی کا طریقہ کار (مخصوص خدمت کی فیس، مرحلہ وار عدالتی فیس، یا سالانہ معاہدہ) درج ہوتا ہے۔',
  },
  {
    id: 'faq-annual-retainer',
    questionAr: 'هل تقدمون عقود رعاية واستشارات قانونية سنوية للشركات والمؤسسات؟',
    questionEn: 'Do you offer annual legal retainer agreements for companies and institutions?',
    questionUr: 'کیا آپ کمپنیوں اور اداروں کے لیے سالانہ قانونی مشاورتی معاہدے پیش کرتے ہیں؟',
    answerAr:
      'نعم، نقدم باقات عقود رعاية قانونية سنوية ومرحلية مخصصة للشركات والمؤسسات التجارية، تشمل الاستشارات اليومية، صياغة ومراجعة العقود، تمثيل المنشأة في القضايا العمالية والتجارية، وتأهيل الإدارات القانونية الداخلية وحوكمة الشركات.',
    answerEn:
      'Yes, we provide tailored annual and quarterly corporate legal retainer agreements covering ongoing advisory, bilingual contract drafting and review, labor and commercial dispute representation, corporate governance, and in-house legal department structuring.',
    answerUr:
      'جی ہاں، ہم کمپنیوں اور تجارتی اداروں کے لیے سالانہ اور مرحلہ وار قانونی مشاورتی معاہدے فراہم کرتے ہیں جن میں روزمرہ قانونی مشورے، معاہدوں کی تیاری، لیبر و تجارتی مقدمات کی پیروی اور کارپوریٹ گورننس شامل ہے۔',
  },
  {
    id: 'faq-initial-consultation',
    questionAr: 'هل تعتبر الاستشارة الأولية الإلكترونية توكيلاً رسمياً، وكيف يتم التعاقد؟',
    questionEn: 'Does an initial electronic consultation constitute a formal Power of Attorney?',
    questionUr: 'کیا ابتدائی آن لائن مشاورت باقاعدہ وکالت سمجھی جاتی ہے، اور معاہدہ کیسے ہوتا ہے؟',
    answerAr:
      'وفقاً لضوابط المهنة والشروط والأحكام، فإن الاستشارة الأولية عبر الموقع أو الواتساب مخصصة لتقييم الموقف النظامي المبدئي ولا تعتبر توكيلاً رسمياً. وينعقد التوكيل الرسمي فور انتفاء تعارض المصالح، وتوقيع عقد أتعاب مكتوب بين الطرفين، وإصدار الوكالة الشرعية عبر منصة ناجز وسداد الدفعة المتفق عليها.',
    answerEn:
      'In accordance with regulatory standards, an initial inquiry via the website or WhatsApp is for preliminary evaluation and does not constitute a formal retainer. Formal representation begins once conflict checks are cleared, a written retainer contract is signed, an official Najiz Power of Attorney is issued, and agreed fees are paid.',
    answerUr:
      'ویب سائٹ یا واٹس ایپ کے ذریعے ابتدائی مشاورت صرف ابتدائی قانونی جائزے کے لیے ہے اور اسے باقاعدہ وکالت نہیں سمجھا جاتا۔ باقاعدہ وکالت تحریری معاہدے پر دستخط، ناجز پورٹل سے شرعی وکالت نامے کے اجرا اور طے شدہ فیس کی ادائیگی کے بعد نافذ ہوتی ہے۔',
  },
  {
    id: 'faq-jurisdiction',
    questionAr: 'ما هي المدن والمحاكم التي تغطيها خدمات شركة سامي الشريف؟',
    questionEn: 'Which cities and courts are covered by Sami Al-Sharif Law Firm?',
    questionUr: 'سامی الشریف لاء فرم کی خدمات کن شہروں اور عدالتوں کا احاطہ کرتی ہیں؟',
    answerAr:
      'يتواجد فريقنا بشكل رئيسي في منطقة مكة المكرمة ومحافظة جدة، ونباشر الترافع والتمثيل القضائي وتقديم الخدمات القانونية أمام كافة المحاكم (التجارية، العامة، العمالية، الإدارية، التنفيذ، الأحوال الشخصية) واللجان القضائية وهيئات التحكيم في جميع مناطق المملكة العربية السعودية.',
    answerEn:
      'Headquartered in the Makkah and Jeddah region, our team represents clients before all Saudi courts (Commercial, General, Labor, Administrative, Enforcement, Personal Status), judicial committees, and arbitration centers across the entire Kingdom of Saudi Arabia.',
    answerUr:
      'ہمارے مرکزی دفاتر مکہ مکرمہ اور جدہ میں واقع ہیں، اور ہماری ٹیم مملکتِ سعودی عرب کے تمام علاقوں میں تمام عدالتوں (تجارتی، عمومی، لیبر، انتظامی، نفاذ) اور ثالثی مراکز کے روبرو مؤکلین کی نمائندگی کرتی ہے۔',
  },
];

export function buildServiceWhatsAppUrl(
  service: LegalService,
  lang: Language
): string {
  const text = tr(
    lang,
    `السلام عليكم ورحمة الله وبركاته، أرغب في طلب خدمة «${service.titleAr}» وحجز استشارة قانونية مع مستشار مختص لدى شركة سامي الشريف للمحاماة والاستشارات القانونية.`,
    `Hello, I would like to request the service "${service.titleEn}" (${service.titleAr}) and book a consultation with a specialized legal counselor at Sami Al-Sharif Law Firm.`,
    `السلام علیکم ورحمۃ اللہ وبرکاتہ، میں سامی الشریف لاء فرم میں «${service.titleUr}» (${service.titleAr}) کی خدمت حاصل کرنا اور ماہر قانونی مشیر سے مشاورت بک کرنا چاہتا ہوں۔`
  );
  return `https://wa.me/966593500596?text=${encodeURIComponent(text)}`;
}

export function buildScopeEstimateWhatsAppUrl(
  params: {
    entityType: ClientEntityType;
    serviceId: string;
    urgency: UrgencyLevel;
  },
  estimate: ScopeEstimateResult,
  lang: Language
): string {
  const service =
    LEGAL_SERVICES.find((s) => s.id === params.serviceId) || LEGAL_SERVICES[0];

  const entityAr =
    params.entityType === 'corporate'
      ? 'شركة / مؤسسة تجارية'
      : params.entityType === 'foreign_investor'
      ? 'مستثمر أجنبي / شركة دولية'
      : 'فرد / مستفيد خاص';

  const urgencyAr =
    params.urgency === 'priority' ? 'مسار عاجل (أولوية قصوى)' : 'مسار اعتيادي منظم';

  const message =
    lang === 'en'
      ? `Hello Sami Al-Sharif Law Firm,\nI would like to adopt this legal scope & start procedures now:\n• Client Type: ${params.entityType}\n• Service: ${service.titleEn} (${service.titleAr})\n• Priority: ${params.urgency}\n• Recommended Model: ${estimate.engagementModelEn}\n• Initial Review: ${estimate.initialReviewDays} Business Days`
      : `السلام عليكم ورحمة الله وبركاته،\nأرغب في اعتماد هذا المسار القانوني والبدء في الإجراءات الآن لدى شركة سامي الشريف للمحاماة:\n• صفة طالب الخدمة: ${entityAr}\n• الخدمة المطلوبة: ${service.titleAr}\n• مستوى الأولوية: ${urgencyAr}\n• نموذج التعاقد المقترح: ${estimate.engagementModelAr}\n• مدة الدراسة الأولية: ${estimate.initialReviewDays} أيام عمل`;

  return `https://wa.me/966593500596?text=${encodeURIComponent(message)}`;
}

