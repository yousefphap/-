export type Language = 'ar' | 'en';
export type ServiceCategory = 'all' | 'advisory' | 'representation';
export type ClientEntityType = 'corporate' | 'individual' | 'foreign_investor';
export type UrgencyLevel = 'standard' | 'priority';

export interface LegalService {
  id: string;
  index: string;
  category: 'advisory' | 'representation';
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  deliverablesAr: string[];
  deliverablesEn: string[];
  requiredDocsAr: string[];
  requiredDocsEn: string[];
  typicalTimelineAr: string;
  typicalTimelineEn: string;
  iconKey: string;
}

export interface FirmValue {
  id: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  iconKey: string;
}

export interface FirmGoal {
  id: string;
  index: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
}

export interface TeamPillar {
  id: string;
  titleAr: string;
  titleEn: string;
  roleAr: string;
  roleEn: string;
  descAr: string;
  descEn: string;
  specialtiesAr: string[];
  specialtiesEn: string[];
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
}

export interface ScopeEstimateResult {
  engagementModelAr: string;
  engagementModelEn: string;
  initialReviewDays: number;
  executionPhasesAr: string[];
  executionPhasesEn: string[];
  checklistAr: string[];
  checklistEn: string[];
  recommendedCategory: 'advisory' | 'representation';
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
  googleMapsUrl: 'https://maps.app.goo.gl/H7iEQmXCky7TXZFy7',
  firmNameAr: 'شركة سامي الشريف للمحاماة والاستشارات القانونية',
  firmNameShortAr: 'سامي الشريف للمحاماة',
  firmNameEn: 'Sami Al-Sharif Law Firm & Legal Consultations',
  firmNameShortEn: 'Sami Al-Sharif Law Firm',
};

export const LEGAL_SERVICES: LegalService[] = [
  // Advisory Services (خدمات الاستشارات القانونية - Slide 9 & 18)
  {
    id: 'legal-consultations',
    index: '01',
    category: 'advisory',
    titleAr: 'تقديم الاستشارات القانونية',
    titleEn: 'Legal Consultations',
    summaryAr:
      'رأي قانوني مؤصل شرعاً ونظاماً يدعم اتخاذ القرار السليم لقطاع الأعمال والمؤسسات والأفراد في مختلف الأنظمة السعودية.',
    summaryEn:
      'Rigorous legal opinions grounded in Saudi regulations to support sound decision-making for businesses, institutions, and individuals.',
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
    typicalTimelineAr: '1 - 3 أيام عمل',
    typicalTimelineEn: '1 - 3 Business Days',
    iconKey: 'message-square',
  },
  {
    id: 'contract-drafting',
    index: '02',
    category: 'advisory',
    titleAr: 'صياغة العقود ومراجعتها',
    titleEn: 'Contract Drafting & Review',
    summaryAr:
      'إعداد وصياغة ومراجعة الاتفاقيات والعقود التجارية والمدنية والعمالية باللغتين العربية والإنجليزية لحماية حقوق الأطراف ومنع النزاعات.',
    summaryEn:
      'Bilingual drafting and meticulous review of commercial, civil, and employment contracts to safeguard rights and prevent disputes.',
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
    typicalTimelineAr: '2 - 4 أيام عمل',
    typicalTimelineEn: '2 - 4 Business Days',
    iconKey: 'file-signature',
  },
  {
    id: 'business-risk-analysis',
    index: '03',
    category: 'advisory',
    titleAr: 'تحليل مخاطر الأعمال',
    titleEn: 'Business Risk Analysis',
    summaryAr:
      'رصد وتقييم المخاطر النظامية والتعاقدية المحتملة في المشاريع والعمليات التجارية ووضع خطط استباقية للوقاية القانونية.',
    summaryEn:
      'Identifying and evaluating regulatory and contractual risks across business operations with proactive legal mitigation strategies.',
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
    typicalTimelineAr: '3 - 5 أيام عمل',
    typicalTimelineEn: '3 - 5 Business Days',
    iconKey: 'shield-alert',
  },
  {
    id: 'transaction-due-diligence',
    index: '04',
    category: 'advisory',
    titleAr: 'دراسة مخرجات التعاملات',
    titleEn: 'Transaction Due Diligence',
    summaryAr:
      'فحص نافي للجهالة ودراسة متعمقة للآثار القانونية والمالية المترتبة على الصفقات التجارية والاندماجات والاستحواذات قبل إتمامها.',
    summaryEn:
      'In-depth legal due diligence and impact assessment of commercial transactions, mergers, and acquisitions prior to closing.',
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
    typicalTimelineAr: '5 - 10 أيام عمل',
    typicalTimelineEn: '5 - 10 Business Days',
    iconKey: 'search-check',
  },
  {
    id: 'legal-dept-structuring',
    index: '05',
    category: 'advisory',
    titleAr: 'تأهيل الإدارات القانونية',
    titleEn: 'Legal Dept. Structuring',
    summaryAr:
      'بناء وتطوير وتأهيل الإدارات القانونية الداخلية للشركات والمؤسسات وتزويدها بمنهجيات العمل والنماذج القياسية الحديثة.',
    summaryEn:
      'Building, structuring, and upgrading in-house legal departments with modern workflows, SOPs, and standardized contract libraries.',
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
    typicalTimelineAr: '7 - 14 يوم عمل',
    typicalTimelineEn: '7 - 14 Business Days',
    iconKey: 'network',
  },
  {
    id: 'corporate-governance',
    index: '06',
    category: 'advisory',
    titleAr: 'حوكمة الشركات',
    titleEn: 'Corporate Governance',
    summaryAr:
      'إعداد لوائح حوكمة الشركات وتنظيم العلاقة بين الشركاء ومجلس الإدارة والإدارة التنفيذية وفق نظام الشركات السعودي الحديث.',
    summaryEn:
      'Drafting corporate governance frameworks regulating shareholders, boards of directors, and executive management under Saudi Companies Law.',
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
    typicalTimelineAr: '5 - 10 أيام عمل',
    typicalTimelineEn: '5 - 10 Business Days',
    iconKey: 'building-2',
  },

  // Legal Representation Services (خدمات التمثيل القانوني - Slide 10 & 19)
  {
    id: 'litigation-advocacy',
    index: '07',
    category: 'representation',
    titleAr: 'الترافع والتمثيل القضائي',
    titleEn: 'Litigation & Advocacy',
    summaryAr:
      'تمثيل الموكلين والترافع أمام كافة المحاكم التجارية والعامة والعمالية والإدارية واللجان القضائية وشبه القضائية في جميع درجات التقاضي.',
    summaryEn:
      'Representing clients before Commercial, General, Labor, and Administrative courts and judicial committees across all litigation tiers.',
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
    typicalTimelineAr: 'حسب مواعيد الجلسات القضائية',
    typicalTimelineEn: 'Per Judicial Court Schedule',
    iconKey: 'scale',
  },
  {
    id: 'arbitration-mediation',
    index: '08',
    category: 'representation',
    titleAr: 'التحكيم والوساطة',
    titleEn: 'Arbitration & Mediation',
    summaryAr:
      'تسوية المنازعات التجارية والمدنية عبر هيئات التحكيم المحلية والدولية ووسائل التسوية الودية والوساطة المعتمدة بسرعة وكفاءة.',
    summaryEn:
      'Resolving commercial and civil disputes through local and international arbitration tribunals and accredited mediation channels.',
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
    typicalTimelineAr: '30 - 90 يوماً (حسب إجراءات الهيئة)',
    typicalTimelineEn: '30 - 90 Days (Per Tribunal Rules)',
    iconKey: 'handshake',
  },
  {
    id: 'company-formation',
    index: '09',
    category: 'representation',
    titleAr: 'تأسيس الشركات',
    titleEn: 'Company Formation',
    summaryAr:
      'تأسيس كافة أنواع الشركات وتوثيق عقود التأسيس والأنظمة الأساسية وتحويل الكيانات القانونية واستخراج التراخيص التجارية.',
    summaryEn:
      'Incorporating all corporate legal structures, notarizing Articles of Association, entity conversions, and commercial licensing.',
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
    typicalTimelineAr: '2 - 5 أيام عمل',
    typicalTimelineEn: '2 - 5 Business Days',
    iconKey: 'building',
  },
  {
    id: 'foreign-investment',
    index: '10',
    category: 'representation',
    titleAr: 'المستثمر الأجنبي',
    titleEn: 'Foreign Investment',
    summaryAr:
      'تقديم الرعاية القانونية المتكاملة للمستثمرين الأجانب وإصدار تراخيص وزارة الاستثمار وتأسيس الشركات الأجنبية والمختلطة بالمملكة.',
    summaryEn:
      'End-to-end legal onboarding for foreign investors, Ministry of Investment (MISA) licensing, and establishing foreign or joint-venture entities.',
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
    typicalTimelineAr: '5 - 12 يوم عمل',
    typicalTimelineEn: '5 - 12 Business Days',
    iconKey: 'globe',
  },
  {
    id: 'intellectual-property',
    index: '11',
    category: 'representation',
    titleAr: 'الملكية الفكرية',
    titleEn: 'Intellectual Property',
    summaryAr:
      'تسجيل وحماية العلامات التجارية وبراءات الاختراع وحقوق المؤلف والنماذج الصناعية والترافع في قضايا التعدي على الملكية الفكرية.',
    summaryEn:
      'Registering and protecting trademarks, patents, copyrights, and industrial designs, plus litigating IP infringement claims.',
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
    typicalTimelineAr: '3 - 7 أيام عمل لإيداع الطلب',
    typicalTimelineEn: '3 - 7 Business Days for Filing',
    iconKey: 'lightbulb',
  },
  {
    id: 'liquidation-estates',
    index: '12',
    category: 'representation',
    titleAr: 'تصفية التركات والشركات',
    titleEn: 'Liquidation & Estates',
    summaryAr:
      'حصر وتقسيم وتصفية التركات العقارية والمالية والتجارية بين الورثة بالتراضي أو القضاء، وتصفية الشركات تصفية اختيارية أو قضائية.',
    summaryEn:
      'Inventorying, dividing, and liquidating real estate, financial, and commercial estates among heirs, alongside voluntary or judicial company liquidation.',
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
    typicalTimelineAr: 'حسب حجم الأصول وإجراءات القسمة',
    typicalTimelineEn: 'Based on Asset Portfolio & Partition Scope',
    iconKey: 'coins',
  },
  {
    id: 'endowments-bankruptcy',
    index: '13',
    category: 'representation',
    titleAr: 'الأوقاف والإفلاس',
    titleEn: 'Endowments & Bankruptcy',
    summaryAr:
      'صياغة وتوثيق صكوك الأوقاف ونظارتها وحوكمتها، وتقديم طلبات التسوية الوقائية وإعادة التنظيم المالي والتصفية وفق نظام الإفلاس.',
    summaryEn:
      'Drafting, notarizing, and governing Waqf endowments, alongside filing protective settlement, financial reorganization, and bankruptcy petitions.',
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
    typicalTimelineAr: '5 - 15 يوم عمل لإعداد الملف النظامي',
    typicalTimelineEn: '5 - 15 Business Days for Statutory Filing',
    iconKey: 'landmark',
  },
  {
    id: 'judgment-execution',
    index: '14',
    category: 'representation',
    titleAr: 'تحصيل وتنفيذ الأحكام',
    titleEn: 'Judgment Execution',
    summaryAr:
      'مباشرة إجراءات التنفيذ القضائي للأحكام النهائية والسندات التنفيذية والأوراق التجارية وتحصيل المديونيات المتعثرة بكافة الوسائل النظامية.',
    summaryEn:
      'Enforcing final judicial judgments, executive instruments, and commercial papers, and recovering distressed receivables through Enforcement Courts.',
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
    typicalTimelineAr: '1 - 2 يوم عمل لقيد طلب التنفيذ',
    typicalTimelineEn: '1 - 2 Business Days to File Enforcement',
    iconKey: 'file-check',
  },
];

export const FIRM_VALUES: FirmValue[] = [
  {
    id: 'transparency',
    titleAr: 'الشفافية والنزاهة',
    titleEn: 'Transparency & Integrity',
    descAr: 'وضوح تام في تقييم الموقف القانوني وتكاليف وإجراءات العمل منذ اللحظة الأولى.',
    descEn: 'Complete clarity in evaluating legal positions, procedures, and engagement terms from day one.',
    iconKey: 'scale',
  },
  {
    id: 'speed-accuracy',
    titleAr: 'السرعة والدقة',
    titleEn: 'Speed & Accuracy',
    descAr: 'استجابة سريعة للمتطلبات القانونية مع دقة متناهية في الصياغة والتأصيل النظامي.',
    descEn: 'Rapid response to urgent legal matters paired with meticulous statutory precision.',
    iconKey: 'zap',
  },
  {
    id: 'professionalism',
    titleAr: 'المهنية والاحترافية',
    titleEn: 'Professionalism',
    descAr: 'ممارسة قانونية رفيعة تلتزم بأعلى معايير الأداء المهني المحلي والدولي.',
    descEn: 'Distinguished legal practice adhering to the highest local and international professional standards.',
    iconKey: 'user-check',
  },
  {
    id: 'innovation',
    titleAr: 'الإبداع والابتكار',
    titleEn: 'Innovation & Creativity',
    descAr: 'ابتكار حلول قانونية واستثنائية غير تقليدية تتجاوز العقبات المعقدة.',
    descEn: 'Crafting innovative and unconventional legal solutions that overcome complex challenges.',
    iconKey: 'lightbulb',
  },
  {
    id: 'teamwork',
    titleAr: 'العمل بروح الفريق',
    titleEn: 'Teamwork',
    descAr: 'تكامل الخبرات بين المحامين والمستشارين لضمان دراسة كل قضية من كافة جوانبها.',
    descEn: 'Synergy across specialized lawyers and consultants to examine every case from all angles.',
    iconKey: 'users',
  },
];

export const FIRM_GOALS: FirmGoal[] = [
  {
    id: 'goal-1',
    index: '01',
    titleAr: 'توفير أفضل الحلول القانونية للمستفيدين داخل وخارج المملكة',
    titleEn: 'Providing the Best Legal Solutions Inside & Outside the Kingdom',
    descAr: 'تقديم رعاية قانونية شاملة تواكب تطلعات المستثمرين والشركات والأفراد محلياً ودولياً.',
    descEn: 'Delivering comprehensive legal care matching the ambitions of investors, enterprises, and individuals.',
  },
  {
    id: 'goal-2',
    index: '02',
    titleAr: 'التطوير المستمر والتحسين الدائم لمنهجيات العمل',
    titleEn: 'Continuous Development & Improvement of Workflows',
    descAr: 'توظيف أحدث التقنيات القانونية والمنهجيات الإدارية لرفع كفاءة وسرعة إنجاز المعاملات.',
    descEn: 'Leveraging modern legal technologies and structured workflows to maximize efficiency.',
  },
  {
    id: 'goal-3',
    index: '03',
    titleAr: 'المحافظة على خصوصية العملاء وسرية بياناتهم',
    titleEn: 'Maintaining Client Confidentiality & Data Privacy',
    descAr: 'تطبيق أعلى معايير الأمان والسرية المهنية لحماية الوثائق والأسرار التجارية والخاصة.',
    descEn: 'Enforcing strict professional secrecy and security protocols for all client records.',
  },
  {
    id: 'goal-4',
    index: '04',
    titleAr: 'الالتزام بالأخلاقيات السامية لمهنة المحاماة',
    titleEn: 'Adherence to the Highest Professional Ethics',
    descAr: 'ترسيخ قيم العدالة والأمانة المهنية وفق نظام المحاماة السعودي وقواعد السلوك المهني.',
    descEn: 'Upholding justice and fiduciary duty in accordance with the Saudi Advocacy Law.',
  },
];

export const TEAM_PILLARS: TeamPillar[] = [
  {
    id: 'legal-counselors',
    titleAr: 'المحامون',
    titleEn: 'Legal Counselors',
    roleAr: 'التمثيل القضائي والترافع',
    roleEn: 'Judicial Advocacy & Litigation',
    descAr:
      'نخبة من المحامين المرخصين ذوي الخبرة الواسعة في الترافع أمام المحاكم التجارية والعامة والإدارية والعمالية في كافة درجات التقاضي.',
    descEn:
      'Licensed trial lawyers with extensive courtroom advocacy before Commercial, General, Administrative, and Labor courts across all tiers.',
    specialtiesAr: ['المنازعات التجارية والشركات', 'القضايا الإدارية والعمالية', 'التنفيذ وتحصيل الحقوق'],
    specialtiesEn: ['Commercial & Corporate Disputes', 'Administrative & Labor Cases', 'Enforcement & Debt Recovery'],
  },
  {
    id: 'arbitration-experts',
    titleAr: 'المستشارون القانونيون',
    titleEn: 'Arbitration & Legal Experts',
    roleAr: 'الاستشارات والتحكيم والعقود',
    roleEn: 'Advisory, Contracts & Arbitration',
    descAr:
      'مستشارون متخصصون في صياغة العقود المعقدة، والتحكيم التجاري، والوساطة، وتقديم الدراسات والاستشارات الاستباقية لقطاع الأعمال.',
    descEn:
      'Senior legal advisors specializing in complex contract architecture, commercial arbitration, mediation, and proactive risk analysis.',
    specialtiesAr: ['التحكيم والوساطة التجارية', 'صياغة ومراجعة العقود الدولية', 'دراسات الفحص النافي للجهالة'],
    specialtiesEn: ['Commercial Arbitration & Mediation', 'Bilingual Contract Architecture', 'Legal Due Diligence'],
  },
  {
    id: 'corporate-specialists',
    titleAr: 'خبراء التأسيس والشركات',
    titleEn: 'Corporate Specialists',
    roleAr: 'حوكمة وتأسيس الكيانات والاستثمار',
    roleEn: 'Entity Formation, Governance & MISA',
    descAr:
      'فريق متخصص في تأسيس الشركات الوطنية والأجنبية، وإعداد لوائح الحوكمة، وتأهيل الإدارات القانونية، وخدمات المستثمر الأجنبي والملكية الفكرية.',
    descEn:
      'Dedicated specialists in domestic and foreign company formation, corporate governance, legal department structuring, and IP protection.',
    specialtiesAr: ['تأسيس الشركات وتراخيص الاستثمار', 'حوكمة الشركات وتأهيل الإدارات', 'حماية الملكية الفكرية والأوقاف'],
    specialtiesEn: ['Company Formation & MISA Licensing', 'Corporate Governance & Structuring', 'Intellectual Property & Waqf'],
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
      service.summaryAr,
      service.summaryEn,
      ...service.deliverablesAr,
      ...service.deliverablesEn,
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
    errors.fullName =
      lang === 'ar'
        ? 'يرجى إدخال الاسم الكامل أو اسم المنشأة (3 أحرف على الأقل).'
        : 'Please enter your full name or company name (at least 3 characters).';
  }

  const cleanedPhone = input.phone.replace(/[\s\-()]/g, '');
  const phoneRegex = /^(\+?9665\d{8}|05\d{8}|\+?\d{8,15})$/;
  if (!cleanedPhone || !phoneRegex.test(cleanedPhone)) {
    errors.phone =
      lang === 'ar'
        ? 'يرجى إدخال رقم تواصل صحيح (مثال: 0569888100 أو +966569888100).'
        : 'Please enter a valid phone number (e.g., 0569888100 or +966569888100).';
  }

  const trimmedEmail = input.email.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
    errors.email =
      lang === 'ar'
        ? 'يرجى إدخال بريد إلكتروني صحيح للتواصل الرسمي.'
        : 'Please enter a valid email address for official correspondence.';
  }

  if (!input.serviceId || !LEGAL_SERVICES.some((s) => s.id === input.serviceId)) {
    errors.serviceId =
      lang === 'ar'
        ? 'يرجى اختيار نوع الخدمة القانونية المطلوبة.'
        : 'Please select the required legal service.';
  }

  const trimmedSummary = input.summary.trim();
  if (!trimmedSummary || trimmedSummary.length < 10) {
    errors.summary =
      lang === 'ar'
        ? 'يرجى كتابة نبذة مختصرة عن الموضوع القانوني (10 أحرف على الأقل).'
        : 'Please provide a brief summary of your legal matter (at least 10 characters).';
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

  if (service.category === 'representation') {
    engagementModelAr =
      params.entityType === 'corporate'
        ? 'عقد تمثيل قانوني وقضائي مرحلي للشركات'
        : 'عقد تمثيل وترافع قضائي مرتبط بمراحل الإنجاز';
    engagementModelEn =
      params.entityType === 'corporate'
        ? 'Corporate Stage-Based Representation & Advocacy Agreement'
        : 'Milestone-Based Judicial Representation Agreement';
  } else if (params.entityType === 'corporate') {
    engagementModelAr = 'عقد رعاية واستشارات قانونية سنوي أو مرحلي للشركات';
    engagementModelEn = 'Corporate Retainer or Project-Based Advisory Agreement';
  } else if (params.entityType === 'foreign_investor') {
    engagementModelAr = 'حزمة تأسيس ورعاية قانونية متكاملة للمستثمر الأجنبي';
    engagementModelEn = 'Comprehensive Foreign Investor Legal Onboarding Package';
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

  const checklistAr = [entityDocAr, ...service.requiredDocsAr.slice(0, 2)];
  const checklistEn = [entityDocEn, ...service.requiredDocsEn.slice(0, 2)];

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

  return {
    engagementModelAr,
    engagementModelEn,
    initialReviewDays,
    executionPhasesAr,
    executionPhasesEn,
    checklistAr,
    checklistEn,
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
  };
}
