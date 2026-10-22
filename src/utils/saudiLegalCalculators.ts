export type LaborContractType = 'fixed' | 'unlimited';

export type TerminationReason =
  | 'expiry_or_mutual'
  | 'employer_termination'
  | 'article_80'
  | 'article_81_or_force_majeure'
  | 'worker_resignation'
  | 'female_marriage_maternity_87';

export interface LaborCalculationInput {
  contractType: LaborContractType;
  terminationReason: TerminationReason;
  totalWage: number;
  basicWage: number;
  durationMode: 'direct' | 'dates';
  years: number;
  months: number;
  days: number;
  startDate?: string;
  endDate?: string;
  unusedLeaveDays: number;
  overtimeHours: number;
  includeArticle77Compensation?: boolean;
  remainingContractMonths?: number;
}

export interface LaborCalculationResult {
  totalYearsDecimal: number;
  formattedDurationAr: string;
  fullAwardBeforeRatio: number;
  entitlementRatio: number;
  entitlementPercentText: string;
  endOfServiceAward: number;
  unusedLeaveCompensation: number;
  overtimeCompensation: number;
  article77Compensation: number;
  article77BasisAr: string;
  grandTotal: number;
  legalBasisAr: string;
  isZeroArticle80: boolean;
}

export function computeDurationFromDates(
  startDateStr?: string,
  endDateStr?: string
): { years: number; months: number; days: number; totalYearsDecimal: number } {
  if (!startDateStr || !endDateStr) {
    return { years: 0, months: 0, days: 0, totalYearsDecimal: 0 };
  }
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  if (isNaN(start.getTime()) || isNaN(end.getTime()) || end <= start) {
    return { years: 0, months: 0, days: 0, totalYearsDecimal: 0 };
  }

  const diffMs = end.getTime() - start.getTime();
  const totalDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const years = Math.floor(totalDays / 365);
  const remainingAfterYears = totalDays % 365;
  const months = Math.floor(remainingAfterYears / 30);
  const days = remainingAfterYears % 30;
  const totalYearsDecimal = totalDays / 365;

  return { years, months, days, totalYearsDecimal };
}

export function calculateSaudiLaborEntitlements(
  input: LaborCalculationInput
): LaborCalculationResult {
  const safeTotalWage = Math.max(0, Number(input.totalWage) || 0);
  const safeBasicWage =
    Number(input.basicWage) > 0
      ? Math.max(0, Number(input.basicWage))
      : safeTotalWage;

  let years = Math.max(0, Math.floor(Number(input.years) || 0));
  let months = Math.max(0, Math.floor(Number(input.months) || 0));
  let days = Math.max(0, Math.floor(Number(input.days) || 0));
  let totalYearsDecimal = years + months / 12 + days / 365;

  if (input.durationMode === 'dates') {
    const parsed = computeDurationFromDates(input.startDate, input.endDate);
    years = parsed.years;
    months = parsed.months;
    days = parsed.days;
    totalYearsDecimal = parsed.totalYearsDecimal;
  }

  const firstFiveYears = Math.min(totalYearsDecimal, 5);
  const remainingYears = Math.max(0, totalYearsDecimal - 5);

  const fullAwardBeforeRatio =
    firstFiveYears * (safeTotalWage * 0.5) + remainingYears * safeTotalWage;

  let entitlementRatio = 1;
  let entitlementPercentText = '100% (مكافأة كاملة)';
  let legalBasisAr =
    'المادة (84) من نظام العمل السعودي (م/51): نصف أجر شهر عن كل سنة من السنوات الخمس الأولى، وأجر شهر كامل عن كل سنة تليها، ويُتخذ الأجر الأخير أساساً لحساب المكافأة مع احتساب أجزاء السنة بنسبة ما قضاه العامل في العمل.';
  let isZeroArticle80 = false;

  switch (input.terminationReason) {
    case 'article_80':
      entitlementRatio = 0;
      entitlementPercentText = '0% (عدم استحقاق مكافأة نهاية الخدمة)';
      legalBasisAr =
        'المادة (80) من نظام العمل السعودي: يجوز لصاحب العمل فسخ العقد دون مكافأة نهاية خدمة أو إشعار أو تعويض في الحالات المشروعة الواردة حصراً في المادة (80) بشرط إتاحة الفرصة للعامل لإبداء أسبابه.';
      isZeroArticle80 = true;
      break;

    case 'article_81_or_force_majeure':
      entitlementRatio = 1;
      entitlementPercentText = '100% (استحقاق كامل)';
      legalBasisAr =
        'المادة (81) والمادة (87) من نظام العمل السعودي: يستحق العامل مكافأة نهاية الخدمة كاملة عند ترك العمل لأحد الأسباب الواردة في المادة (81) أو بسبب قوة قاهرة خارجة عن إرادته.';
      break;

    case 'female_marriage_maternity_87':
      entitlementRatio = 1;
      entitlementPercentText = '100% (استحقاق كامل - المادة 87)';
      legalBasisAr =
        'المادة (87) من نظام العمل السعودي: تستحق العاملة المكافأة كاملة إذا أنهت العقد خلال (6) أشهر من تاريخ عقد زواجها أو (3) أشهر من تاريخ الوضع.';
      break;

    case 'worker_resignation':
      if (totalYearsDecimal < 2) {
        entitlementRatio = 0;
        entitlementPercentText = '0% (أقل من سنتين في حالة الاستقالة)';
        legalBasisAr =
          'المادة (85) من نظام العمل السعودي: إذا كان انتهاء علاقة العمل بسبب استقالة العامل وكانت خدمته أقل من سنتين فلا يستحق مكافأة نهاية خدمة.';
      } else if (totalYearsDecimal < 5) {
        entitlementRatio = 1 / 3;
        entitlementPercentText =
          '33.33% (ثلث المكافأة - خدمة من 2 إلى أقل من 5 سنوات)';
        legalBasisAr =
          'المادة (85) من نظام العمل السعودي: يستحق العامل المستقيل ثلث المكافأة بعد خدمة لا تقل عن سنتين متتاليتين ولا تزيد على خمس سنوات.';
      } else if (totalYearsDecimal < 10) {
        entitlementRatio = 2 / 3;
        entitlementPercentText =
          '66.67% (ثلثا المكافأة - خدمة من 5 إلى أقل من 10 سنوات)';
        legalBasisAr =
          'المادة (85) من نظام العمل السعودي: يستحق العامل المستقيل ثلثي المكافأة إذا زادت مدة خدمته على خمس سنوات متتالية ولم تبلغ عشر سنوات.';
      } else {
        entitlementRatio = 1;
        entitlementPercentText = '100% (المكافأة كاملة - خدمة 10 سنوات فأكثر)';
        legalBasisAr =
          'المادة (85) من نظام العمل السعودي: يستحق العامل المستقيل المكافأة كاملة إذا بلغت مدة خدمته عشر سنوات فأكثر.';
      }
      break;

    case 'employer_termination':
    case 'expiry_or_mutual':
    default:
      entitlementRatio = 1;
      entitlementPercentText = '100% (استحقاق كامل - المادة 84)';
      legalBasisAr =
        'المادة (84) من نظام العمل السعودي: يستحق العامل مكافأة نهاية الخدمة كاملة عند انتهاء مدة العقد أو باتفاق الطرفين أو بفسخ العقد من صاحب العمل لغير حالات المادة (80).';
      break;
  }

  const endOfServiceAward =
    Math.round(fullAwardBeforeRatio * entitlementRatio * 100) / 100;

  const dailyWage = safeTotalWage / 30;
  const unusedLeaveDays = Math.max(0, Number(input.unusedLeaveDays) || 0);
  const unusedLeaveCompensation =
    Math.round(unusedLeaveDays * dailyWage * 100) / 100;

  // Article 107: Hourly actual wage + 50% of basic hourly wage (240 hours/month standard)
  const actualHourly = safeTotalWage / 240;
  const basicHourly = safeBasicWage / 240;
  const overtimeRatePerHour = actualHourly + 0.5 * basicHourly;
  const overtimeHours = Math.max(0, Number(input.overtimeHours) || 0);
  const overtimeCompensation =
    Math.round(overtimeHours * overtimeRatePerHour * 100) / 100;

  // Article 77: Compensation for unlawful termination (ما لم يتضمن العقد تعويضاً محدداً)
  let article77Compensation = 0;
  let article77BasisAr = '';
  if (
    input.terminationReason === 'employer_termination' &&
    input.includeArticle77Compensation
  ) {
    const minTwoMonthsFloor = safeTotalWage * 2;
    if (input.contractType === 'unlimited') {
      const rawArt77 = totalYearsDecimal * (safeTotalWage * 0.5);
      article77Compensation =
        Math.round(Math.max(minTwoMonthsFloor, rawArt77) * 100) / 100;
      article77BasisAr =
        'المادة (77) من نظام العمل السعودي (عقد غير محدد المدة): أجر (15) يوماً عن كل سنة من سنوات خدمة العامل، وبحد أدنى لا يقل عن أجر شهرين.';
    } else {
      const remMonths = Math.max(0, Number(input.remainingContractMonths) || 0);
      const rawArt77 = remMonths * safeTotalWage;
      article77Compensation =
        Math.round(Math.max(minTwoMonthsFloor, rawArt77) * 100) / 100;
      article77BasisAr =
        'المادة (77) من نظام العمل السعودي (عقد محدد المدة): أجر المدة الباقية من العقد، وبحد أدنى لا يقل عن أجر شهرين.';
    }
    legalBasisAr += ` كما شمل الحساب تعويض الإنهاء لسبب غير مشروع وفق ${article77BasisAr}`;
  }

  const grandTotal =
    Math.round(
      (endOfServiceAward +
        unusedLeaveCompensation +
        overtimeCompensation +
        article77Compensation) *
        100
    ) / 100;

  const formattedDurationAr = `${years} سنة، ${months} شهر، ${days} يوم`;

  return {
    totalYearsDecimal: Math.round(totalYearsDecimal * 100) / 100,
    formattedDurationAr,
    fullAwardBeforeRatio: Math.round(fullAwardBeforeRatio * 100) / 100,
    entitlementRatio,
    entitlementPercentText,
    endOfServiceAward,
    unusedLeaveCompensation,
    overtimeCompensation,
    article77Compensation,
    article77BasisAr,
    grandTotal,
    legalBasisAr,
    isZeroArticle80,
  };
}

// ============================================================================
// Tool 2: Saudi Judicial Costs Calculator (نظام التكاليف القضائية ولائحته التنفيذية)
// ============================================================================

export type JudicialCaseType =
  | 'financial_claim'
  | 'exempt_personal_status'
  | 'exempt_criminal'
  | 'exempt_labor_worker'
  | 'exempt_estate_division'
  | 'exempt_bankruptcy'
  | 'request_appeal'
  | 'request_cassation'
  | 'request_reconsideration'
  | 'request_incidental';

export type SettlementOption =
  | 'none'
  | 'after_first_hearing'
  | 'before_first_hearing';

export interface JudicialCostsInput {
  caseType: JudicialCaseType;
  claimAmount: number;
  settlementOption: SettlementOption;
}

export interface JudicialCostsResult {
  isExempt: boolean;
  baseCost: number;
  discountAmount: number;
  discountPercent: number;
  netPayableCost: number;
  legalBasisAr: string;
  bracketBreakdownAr: string;
}

export function calculateSaudiJudicialCosts(
  input: JudicialCostsInput
): JudicialCostsResult {
  const claim = Math.max(0, Number(input.claimAmount) || 0);

  // Exempt cases under Articles 14 & 15 of the Judicial Costs Law (Royal Decree M/16)
  const exemptMap: Record<string, string> = {
    exempt_personal_status:
      'معفاة نظاماً (0 ريال) — بموجب المادة (14) من نظام التكاليف القضائية (م/16)، لا يسري النظام على دعاوى الأحوال الشخصية.',
    exempt_criminal:
      'معفاة نظاماً (0 ريال) — بموجب المادة (14) من نظام التكاليف القضائية (م/16)، لا يسري النظام على الدعاوى الجزائية العامة والدعاوى التأديبية وما يرتبط بها.',
    exempt_labor_worker:
      'معفاة نظاماً (0 ريال) — بموجب المادة (15) من نظام التكاليف القضائية (م/16)، يُعفى العمال ومن في حكمهم والمستحقون عنهم من التكاليف القضائية للمطالبات العمالية.',
    exempt_estate_division:
      'معفاة نظاماً (0 ريال) — بموجب المادة (14) من نظام التكاليف القضائية (م/16)، لا تفرض تكاليف قضائية على دعاوى قسمة التركات (ما لم تتضمن نزاعاً مستقلاً غير معفى).',
    exempt_bankruptcy:
      'معفاة نظاماً (0 ريال) — بموجب المادة (14) من نظام التكاليف القضائية (م/16)، الدعاوى والطلبات الخاضعة لنظام الإفلاس معفاة من التكاليف القضائية.',
  };

  if (input.caseType in exemptMap) {
    return {
      isExempt: true,
      baseCost: 0,
      discountAmount: 0,
      discountPercent: 0,
      netPayableCost: 0,
      legalBasisAr: exemptMap[input.caseType],
      bracketBreakdownAr: 'دعوى معفاة بنص النظام (0 ريال).',
    };
  }

  let baseCost = 0;
  let legalBasisAr = '';
  let bracketBreakdownAr = '';

  if (input.caseType === 'request_appeal') {
    baseCost = 2000;
    legalBasisAr =
      'المادة (7) واللائحة التنفيذية لنظام التكاليف القضائية (م/16): رسم مقطوع تقديري لطلبات الاستئناف في الدعاوى الخاضعة للنظام.';
    bracketBreakdownAr = 'رسم مقطوع لطلب الاستئناف (2,000 ريال).';
  } else if (input.caseType === 'request_cassation') {
    baseCost = 7000;
    legalBasisAr =
      'المادة (7) واللائحة التنفيذية لنظام التكاليف القضائية (م/16): رسم مقطوع تقديري لطلب النقض أمام المحكمة العليا.';
    bracketBreakdownAr = 'رسم مقطوع لطلب النقض (7,000 ريال).';
  } else if (input.caseType === 'request_reconsideration') {
    baseCost = 10000;
    legalBasisAr =
      'المادة (7) من نظام التكاليف القضائية (م/16): تفرض على طلب التماس إعادة النظر تكاليف قضائية بمبلغ لا يزيد على (10,000) ريال.';
    bracketBreakdownAr = 'رسم مقطوع لطلب التماس إعادة النظر (10,000 ريال).';
  } else if (input.caseType === 'request_incidental') {
    baseCost = 1000;
    legalBasisAr =
      'المادة (8) واللائحة التنفيذية لنظام التكاليف القضائية (م/16): رسم مقطوع تقديري للطلبات العارضة وطلبات الإدخال والتدخل.';
    bracketBreakdownAr = 'رسم مقطوع للطلبات العارضة (1,000 ريال).';
  } else {
    // Progressive slice calculation per Executive Regulations of the Judicial Costs Law (max 1,000,000 SAR per Art. 3)
    const slice1 = Math.min(claim, 100000);
    const slice2 = Math.max(0, Math.min(claim - 100000, 400000)); // 100k -> 500k
    const slice3 = Math.max(0, Math.min(claim - 500000, 500000)); // 500k -> 1M
    const slice4 = Math.max(0, claim - 1000000); // > 1M

    const rawCost =
      slice1 * 0.05 + slice2 * 0.04 + slice3 * 0.03 + slice4 * 0.02;

    baseCost = Math.min(1000000, Math.round(rawCost * 100) / 100);
    legalBasisAr =
      'المادة (3) والمادة (12) من نظام التكاليف القضائية (م/16) ولائحته التنفيذية: تحتسب التكاليف بنسب متدرجة على شرائح المطالبة (5% لأول 100 ألف، 4% لما زاد حتى 500 ألف، 3% لما زاد حتى مليون، 2% لما زاد على مليون) وبحد أقصى لا يتجاوز (1,000,000) ريال سعودي، ويتحمل المحكوم عليه التكاليف بقدر ما حُكم به عليه.';
    bracketBreakdownAr =
      rawCost > 1000000
        ? 'تم تطبيق الحد الأعلى النظامي للتكاليف القضائية (1,000,000 ريال) وفق المادة (3).'
        : 'تم احتساب التكاليف وفق الشرائح التنازلية للائحة التنفيذية لنظام التكاليف القضائية.';
  }

  let discountPercent = 0;
  if (input.settlementOption === 'before_first_hearing') {
    discountPercent = 100;
    legalBasisAr +=
      ' وبموجب المادة (13) تعفى الدعوى من التكاليف إذا انتهت بالصلح أو ترك الخصومة قبل انعقاد الجلسة الأولى.';
  } else if (input.settlementOption === 'after_first_hearing') {
    discountPercent = 75;
    legalBasisAr +=
      ' وبموجب المادة (13) تخفض التكاليف إلى الربع (خصم 75%) عند انتهاء الدعوى بالصلح أمام المحكمة بعد الجلسة الأولى وقبل الحكم الابتدائي.';
  }

  const discountAmount =
    Math.round(baseCost * (discountPercent / 100) * 100) / 100;
  const netPayableCost = Math.round((baseCost - discountAmount) * 100) / 100;

  return {
    isExempt: false,
    baseCost,
    discountAmount,
    discountPercent,
    netPayableCost,
    legalBasisAr,
    bracketBreakdownAr,
  };
}

// ============================================================================
// Tool 3: Sharia Estate & Inheritance Calculator (نظام الأحوال الشخصية السعودي م/73)
// ============================================================================

export type SpouseType = 'none' | 'husband' | 'wife';

export interface InheritanceInput {
  grossEstateValue: number;
  debtsAndFuneral: number;
  bequestAmount: number;
  spouseType: SpouseType;
  wivesCount: number;
  sonsCount: number;
  daughtersCount: number;
  hasFather: boolean;
  hasMother: boolean;
  brothersCount?: number;
  sistersCount?: number;
}

export interface HeirShareRow {
  heirLabelAr: string;
  count: number;
  shareFractionLabelAr: string;
  totalShareAmount: number;
  perPersonAmount: number;
  percentageOfNet: number;
}

export interface InheritanceResult {
  grossEstateValue: number;
  debtsAndFuneral: number;
  netAfterDebts: number;
  maxAllowedBequest: number;
  appliedBequest: number;
  bequestCappedWarning: boolean;
  distributableEstate: number;
  heirs: HeirShareRow[];
  blockedHeirsNotesAr: string[];
  legalBasisAr: string;
  unallocatedRemainder: number;
}

export function calculateShariaInheritance(
  input: InheritanceInput
): InheritanceResult {
  const gross = Math.max(0, Number(input.grossEstateValue) || 0);
  const debts = Math.min(gross, Math.max(0, Number(input.debtsAndFuneral) || 0));
  const netAfterDebts = Math.max(0, gross - debts);

  // Islamic Will (وصية) cap is 1/3 of net estate after debts (المادة 189 من نظام الأحوال الشخصية)
  const maxAllowedBequest = Math.round((netAfterDebts / 3) * 100) / 100;
  const requestedBequest = Math.max(0, Number(input.bequestAmount) || 0);
  const bequestCappedWarning = requestedBequest > maxAllowedBequest;
  const appliedBequest = Math.min(requestedBequest, maxAllowedBequest);

  const distributableEstate = Math.max(0, netAfterDebts - appliedBequest);

  const sons = Math.max(0, Math.floor(Number(input.sonsCount) || 0));
  const daughters = Math.max(0, Math.floor(Number(input.daughtersCount) || 0));
  const brothers = Math.max(0, Math.floor(Number(input.brothersCount) || 0));
  const sisters = Math.max(0, Math.floor(Number(input.sistersCount) || 0));
  const totalSiblings = brothers + sisters;

  const hasDescendants = sons > 0 || daughters > 0;
  const hasMultipleSiblings = totalSiblings >= 2;
  const wivesCount = Math.min(
    4,
    Math.max(1, Math.floor(Number(input.wivesCount) || 1))
  );

  const blockedHeirsNotesAr: string[] = [];
  if (totalSiblings > 0 && (input.hasFather || sons > 0)) {
    const blockerName =
      input.hasFather && sons > 0
        ? 'الأب والفرع الوارث الذكر (الابن)'
        : input.hasFather
          ? 'الأب (الأصل الوارث الذكر)'
          : 'الابن (الفرع الوارث الذكر)';
    blockedHeirsNotesAr.push(
      `حُجب الإخوة والأخوات الأشقاء (${totalSiblings}) حجب حرمان لوجود ${blockerName} وفق المواد (224 - 228) من نظام الأحوال الشخصية السعودي.`
    );
  }

  // Fixed shares (أصحاب الفروض وفق المواد 206 - 215 من نظام الأحوال الشخصية السعودي)
  let spouseWeight = 0;
  let spouseFractionLabel = '';
  if (input.spouseType === 'husband') {
    spouseWeight = hasDescendants ? 1 / 4 : 1 / 2;
    spouseFractionLabel = hasDescendants
      ? 'الربع (1/4) فرضاً لوجود الفرع الوارث (م/207)'
      : 'النصف (1/2) فرضاً لعدم وجود الفرع الوارث (م/207)';
  } else if (input.spouseType === 'wife') {
    spouseWeight = hasDescendants ? 1 / 8 : 1 / 4;
    spouseFractionLabel = hasDescendants
      ? 'الثمن (1/8) فرضاً لوجود الفرع الوارث (م/208)'
      : 'الربع (1/4) فرضاً لعدم وجود الفرع الوارث (م/208)';
  }

  let motherWeight = 0;
  let motherFractionLabel = '';
  if (input.hasMother) {
    if (hasDescendants) {
      motherWeight = 1 / 6;
      motherFractionLabel = 'السدس (1/6) فرضاً لوجود الفرع الوارث (م/209)';
    } else if (hasMultipleSiblings) {
      motherWeight = 1 / 6;
      motherFractionLabel =
        'السدس (1/6) فرضاً لوجود جمع من الإخوة (اثنان فأكثر - م/209)';
    } else if (
      input.hasFather &&
      (input.spouseType === 'husband' || input.spouseType === 'wife')
    ) {
      // المسألتان العمريتان (المادة 209/2 من نظام الأحوال الشخصية السعودي)
      motherWeight = (1 - spouseWeight) / 3;
      motherFractionLabel = 'ثلث الباقي بعد فرض أحد الزوجين (المسألة العمرية - م/209)';
    } else {
      motherWeight = 1 / 3;
      motherFractionLabel =
        'الثلث (1/3) فرضاً لعدم الفرع الوارث وعدم جمع من الإخوة (م/209)';
    }
  }

  let fatherFixedWeight = 0;
  let fatherFractionLabel = '';
  if (input.hasFather) {
    if (sons > 0) {
      fatherFixedWeight = 1 / 6;
      fatherFractionLabel =
        'السدس (1/6) فرضاً لوجود الفرع الوارث الذكر (م/210)';
    } else if (daughters > 0) {
      fatherFixedWeight = 1 / 6;
      fatherFractionLabel =
        'السدس (1/6) فرضاً + الباقي تعصيباً لوجود الفرع الوارث الأنثى (م/210)';
    } else {
      fatherFixedWeight = 0;
      fatherFractionLabel = 'الباقي تعصيباً بالنفس لعدم الفرع الوارث (م/210)';
    }
  }

  let daughtersFixedWeight = 0;
  let daughtersFractionLabel = '';
  if (sons === 0 && daughters > 0) {
    if (daughters === 1) {
      daughtersFixedWeight = 1 / 2;
      daughtersFractionLabel =
        'النصف (1/2) فرضاً لانفرادها وعدم وجود معصب (م/211)';
    } else {
      daughtersFixedWeight = 2 / 3;
      daughtersFractionLabel =
        'الثلثان (2/3) فرضاً لتعددهن وعدم وجود معصب (م/211)';
    }
  }

  // Sisters fixed share in Kalalah (كلالة: لا أب ولا فرع وارث ولا أخ شقيق ذكر) per Art. 212
  const siblingsNotBlocked = !input.hasFather && sons === 0;
  let sistersFixedWeight = 0;
  let sistersFractionLabel = '';
  if (
    siblingsNotBlocked &&
    brothers === 0 &&
    sisters > 0 &&
    daughters === 0
  ) {
    if (sisters === 1) {
      sistersFixedWeight = 1 / 2;
      sistersFractionLabel =
        'النصف (1/2) فرضاً لانفرادها وعدم الفرع والأصل الذكر والمعصب (م/212)';
    } else {
      sistersFixedWeight = 2 / 3;
      sistersFractionLabel =
        'الثلثان (2/3) فرضاً لتعددهن وعدم الفرع والأصل الذكر والمعصب (م/212)';
    }
  }

  // Sum of fixed weights before residuary (تعصيب) and Awl (عول - م/236)
  const totalFixedWeight =
    spouseWeight +
    motherWeight +
    fatherFixedWeight +
    daughtersFixedWeight +
    sistersFixedWeight;

  // Handle Awl (العول - المادة 236 من نظام الأحوال الشخصية) if fixed shares exceed 1
  const isAwlApplied = totalFixedWeight > 1 + 1e-9;
  const scaleFactor = isAwlApplied ? 1 / totalFixedWeight : 1;

  const adjustedSpouseShare = spouseWeight * scaleFactor;
  let adjustedMotherShare = motherWeight * scaleFactor;
  let adjustedFatherShare = fatherFixedWeight * scaleFactor;
  let adjustedDaughtersShare = daughtersFixedWeight * scaleFactor;
  let adjustedSistersShare = sistersFixedWeight * scaleFactor;
  let adjustedSonsShare = 0;
  let adjustedBrothersShare = 0;

  if (isAwlApplied) {
    if (spouseWeight > 0) spouseFractionLabel += ' (بعد العول - م/236)';
    if (motherWeight > 0) motherFractionLabel += ' (بعد العول - م/236)';
    if (fatherFixedWeight > 0) fatherFractionLabel += ' (بعد العول - م/236)';
    if (daughtersFixedWeight > 0)
      daughtersFractionLabel += ' (بعد العول - م/236)';
    if (sistersFixedWeight > 0) sistersFractionLabel += ' (بعد العول - م/236)';
  }

  const remainderWeight = Math.max(0, 1 - totalFixedWeight);

  if (remainderWeight > 0) {
    if (sons > 0) {
      // Sons and daughters share the remainder 2:1 (للذكر مثل حظ الأنثيين - م/219)
      const totalParts = sons * 2 + daughters;
      adjustedSonsShare = remainderWeight * ((sons * 2) / totalParts);
      adjustedDaughtersShare = remainderWeight * (daughters / totalParts);
      daughtersFractionLabel =
        'تعصيباً بالغير مع الأبناء (للذكر مثل حظ الأنثيين - م/219)';
    } else if (input.hasFather) {
      // Father takes the remainder by Ta'sib (م/210)
      adjustedFatherShare += remainderWeight;
    } else if (siblingsNotBlocked && brothers > 0) {
      // Full brothers (and sisters if any) share remainder 2:1 (م/219)
      const siblingParts = brothers * 2 + sisters;
      adjustedBrothersShare = remainderWeight * ((brothers * 2) / siblingParts);
      adjustedSistersShare = remainderWeight * (sisters / siblingParts);
      sistersFractionLabel =
        'تعصيباً بالغير مع الإخوة الأشقاء (للذكر مثل حظ الأنثيين - م/219)';
    } else if (siblingsNotBlocked && brothers === 0 && sisters > 0 && daughters > 0) {
      // Sisters with daughters become عصبة مع الغير (المادة 220 من نظام الأحوال الشخصية)
      adjustedSistersShare = remainderWeight;
      sistersFractionLabel = 'الباقي تعصيباً مع الغير لوجود البنات (م/220)';
    } else {
      // Radd (الرد - المادة 237 من نظام الأحوال الشخصية) on eligible fixed-share heirs (excluding spouse)
      const raddBase =
        adjustedMotherShare + adjustedDaughtersShare + adjustedSistersShare;
      if (raddBase > 0) {
        adjustedMotherShare +=
          remainderWeight * (adjustedMotherShare / raddBase);
        adjustedDaughtersShare +=
          remainderWeight * (adjustedDaughtersShare / raddBase);
        adjustedSistersShare +=
          remainderWeight * (adjustedSistersShare / raddBase);
        if (daughters > 0) {
          daughtersFractionLabel += ' + الرد (م/237)';
        }
        if (input.hasMother) {
          motherFractionLabel += ' + الرد (م/237)';
        }
        if (sisters > 0) {
          sistersFractionLabel += ' + الرد (م/237)';
        }
      } else if (adjustedSpouseShare > 0) {
        // المادة 237/2: يرد باقي التركة على أحد الزوجين إذا لم يوجد عصبة ولا أحد من أصحاب الفروض النسبية أو ذوي الأرحام
        // Note: kept as unallocated remainder or noted in legalBasisAr unless no other heirs exist
      }
    }
  }

  const heirs: HeirShareRow[] = [];

  if (input.spouseType === 'husband' && adjustedSpouseShare > 0) {
    const amount =
      Math.round(distributableEstate * adjustedSpouseShare * 100) / 100;
    heirs.push({
      heirLabelAr: 'الزوج',
      count: 1,
      shareFractionLabelAr: spouseFractionLabel,
      totalShareAmount: amount,
      perPersonAmount: amount,
      percentageOfNet: Math.round(adjustedSpouseShare * 10000) / 100,
    });
  } else if (input.spouseType === 'wife' && adjustedSpouseShare > 0) {
    const amount =
      Math.round(distributableEstate * adjustedSpouseShare * 100) / 100;
    heirs.push({
      heirLabelAr: wivesCount > 1 ? `الزوجات (${wivesCount})` : 'الزوجة',
      count: wivesCount,
      shareFractionLabelAr: spouseFractionLabel,
      totalShareAmount: amount,
      perPersonAmount: Math.round((amount / wivesCount) * 100) / 100,
      percentageOfNet: Math.round(adjustedSpouseShare * 10000) / 100,
    });
  }

  if (input.hasFather && adjustedFatherShare > 0) {
    const amount =
      Math.round(distributableEstate * adjustedFatherShare * 100) / 100;
    heirs.push({
      heirLabelAr: 'الأب',
      count: 1,
      shareFractionLabelAr: fatherFractionLabel,
      totalShareAmount: amount,
      perPersonAmount: amount,
      percentageOfNet: Math.round(adjustedFatherShare * 10000) / 100,
    });
  }

  if (input.hasMother && adjustedMotherShare > 0) {
    const amount =
      Math.round(distributableEstate * adjustedMotherShare * 100) / 100;
    heirs.push({
      heirLabelAr: 'الأم',
      count: 1,
      shareFractionLabelAr: motherFractionLabel,
      totalShareAmount: amount,
      perPersonAmount: amount,
      percentageOfNet: Math.round(adjustedMotherShare * 10000) / 100,
    });
  }

  if (sons > 0 && adjustedSonsShare > 0) {
    const amount =
      Math.round(distributableEstate * adjustedSonsShare * 100) / 100;
    heirs.push({
      heirLabelAr: sons > 1 ? `الأبناء الذكور (${sons})` : 'الابن',
      count: sons,
      shareFractionLabelAr:
        daughters > 0
          ? 'الباقي تعصيباً مع البنات (للذكر مثل حظ الأنثيين - م/219)'
          : 'الباقي تعصيباً بالنفس بعد أصحاب الفروض (م/218)',
      totalShareAmount: amount,
      perPersonAmount: Math.round((amount / sons) * 100) / 100,
      percentageOfNet: Math.round(adjustedSonsShare * 10000) / 100,
    });
  }

  if (daughters > 0 && adjustedDaughtersShare > 0) {
    const amount =
      Math.round(distributableEstate * adjustedDaughtersShare * 100) / 100;
    heirs.push({
      heirLabelAr: daughters > 1 ? `البنات (${daughters})` : 'البنت',
      count: daughters,
      shareFractionLabelAr: daughtersFractionLabel,
      totalShareAmount: amount,
      perPersonAmount: Math.round((amount / daughters) * 100) / 100,
      percentageOfNet: Math.round(adjustedDaughtersShare * 10000) / 100,
    });
  }

  if (siblingsNotBlocked && brothers > 0 && adjustedBrothersShare > 0) {
    const amount =
      Math.round(distributableEstate * adjustedBrothersShare * 100) / 100;
    heirs.push({
      heirLabelAr:
        brothers > 1 ? `الإخوة الأشقاء (${brothers})` : 'الأخ الشقيق',
      count: brothers,
      shareFractionLabelAr:
        sisters > 0
          ? 'الباقي تعصيباً مع الأخوات الشقيقات (للذكر مثل حظ الأنثيين - م/219)'
          : 'الباقي تعصيباً بالنفس بعد أصحاب الفروض (م/218)',
      totalShareAmount: amount,
      perPersonAmount: Math.round((amount / brothers) * 100) / 100,
      percentageOfNet: Math.round(adjustedBrothersShare * 10000) / 100,
    });
  }

  if (siblingsNotBlocked && sisters > 0 && adjustedSistersShare > 0) {
    const amount =
      Math.round(distributableEstate * adjustedSistersShare * 100) / 100;
    heirs.push({
      heirLabelAr:
        sisters > 1 ? `الأخوات الشقيقات (${sisters})` : 'الأخت الشقيقة',
      count: sisters,
      shareFractionLabelAr: sistersFractionLabel,
      totalShareAmount: amount,
      perPersonAmount: Math.round((amount / sisters) * 100) / 100,
      percentageOfNet: Math.round(adjustedSistersShare * 10000) / 100,
    });
  }

  const allocatedSum = heirs.reduce((acc, h) => acc + h.totalShareAmount, 0);
  const unallocatedRemainder = Math.max(
    0,
    Math.round((distributableEstate - allocatedSum) * 100) / 100
  );

  const legalBasisAr =
    'نظام الأحوال الشخصية السعودي الصادر بالمرسوم الملكي رقم (م/73) — الباب السابع (أحكام التركات والإرث، المواد 197 إلى 251): تسدد الديون والالتزامات المالية أولاً، ثم تنفذ الوصية بما لا يتجاوز ثلث الباقي (م/189)، ثم يوزع الصافي على أصحاب الفروض والعصبات مع مراعاة قواعد الحجب والعول (م/236) والرد (م/237).';

  return {
    grossEstateValue: gross,
    debtsAndFuneral: debts,
    netAfterDebts,
    maxAllowedBequest,
    appliedBequest,
    bequestCappedWarning,
    distributableEstate,
    heirs,
    blockedHeirsNotesAr,
    legalBasisAr,
    unallocatedRemainder,
  };
}

// ============================================================================
// Tool 4: Corporate Legal Compliance & Readiness Self-Assessment (فحص الامتثال النظامي للشركات)
// ============================================================================

export interface ComplianceCheckItem {
  id: string;
  pillarAr: string;
  questionAr: string;
  statutoryRefAr: string;
  recommendationAr: string;
  weight: number;
}

export const CORPORATE_COMPLIANCE_ITEMS: ComplianceCheckItem[] = [
  {
    id: 'companies_law_charter',
    pillarAr: 'نظام الشركات والحوكمة',
    questionAr:
      'هل تم تحديث عقد التأسيس أو النظام الأساسي للمنشأة ليتوافق مع نظام الشركات السعودي الجديد ولوائحه التنفيذية؟',
    statutoryRefAr: 'نظام الشركات السعودي الصادر بالمرسوم الملكي رقم (م/132)',
    recommendationAr:
      'تعديل وتوثيق عقد التأسيس والنظام الأساسي عبر منصة المركز السعودي للأعمال وضبط صلاحيات المديرين ومجلس الإدارة.',
    weight: 20,
  },
  {
    id: 'qiwa_labor_contracts',
    pillarAr: 'نظام العمل ومنصة قوى',
    questionAr:
      'هل جميع عقود العاملين موثقة إلكترونياً عبر منصة (قوى) ومعتمدة مع لائحة تنظيم عمل داخلية مفعّلة ونظام حماية الأجور؟',
    statutoryRefAr: 'نظام العمل السعودي (م/51) وضوابط وزارة الموارد البشرية',
    recommendationAr:
      'توثيق كافة العقود في منصة قوى واعتماد لائحة تنظيم العمل الداخلية لتفادي غرامات التفتيش والمنازعات العمالية.',
    weight: 20,
  },
  {
    id: 'commercial_contracts_protection',
    pillarAr: 'العقود التجارية وحماية الديون',
    questionAr:
      'هل تعتمد المنشأة عقوداً مكتوبة ومصاغة قانونياً مع الموردين والعملاء تتضمن شروط الاختصاص القضائي وضمانات السداد؟',
    statutoryRefAr:
      'نظام المعاملات المدنية (م/191) ونظام المحاكم التجارية (م/93)',
    recommendationAr:
      'صياغة ومراجعة نماذج العقود التجارية واتفاقيات مستوى الخدمة (SLA) وتفعيل السندات التنفيذية لحماية التدفقات المالية.',
    weight: 20,
  },
  {
    id: 'pdpl_digital_compliance',
    pillarAr: 'حماية البيانات الشخصية (PDPL)',
    questionAr:
      'هل تمتلك المنشأة سياسة خصوصية وشروط استخدام وضوابط معالجة بيانات متوافقة مع نظام حماية البيانات الشخصية السعودي (PDPL)؟',
    statutoryRefAr:
      'نظام حماية البيانات الشخصية (م/19) ونظام التجارة الإلكترونية (م/126)',
    recommendationAr:
      'تأهيل المنصات الرقمية وقواعد بيانات العملاء وإعداد سياسات الخصوصية وسجلات معالجة البيانات وفق متطلبات (سدايا).',
    weight: 20,
  },
  {
    id: 'regulatory_licenses_ip',
    pillarAr: 'التراخيص والملكية الفكرية',
    questionAr:
      'هل العلامة التجارية مسجلة رسمياً لدى (الهيئة السعودية للملكية الفكرية) وجميع التراخيص والسجلات التجارية سارية مع تأكيد البيانات السنوي؟',
    statutoryRefAr: 'نظام السجل التجاري الجديد ونظام العلامات التجارية',
    recommendationAr:
      'تسجيل العلامة التجارية لحمايتها من التقليد والاعتداء، وإجراء تدقيق وقائي دوري على التراخيص والالتزامات النظامية.',
    weight: 20,
  },
];

export interface CorporateComplianceResult {
  scorePercent: number;
  completedCount: number;
  totalCount: number;
  statusLabelAr: string;
  riskLevel: 'low' | 'medium' | 'high';
  missingRecommendationsAr: string[];
}

export function calculateCorporateComplianceScore(
  checkedIds: string[]
): CorporateComplianceResult {
  const checkedSet = new Set(checkedIds);
  let earnedWeight = 0;
  const missingRecommendationsAr: string[] = [];

  for (const item of CORPORATE_COMPLIANCE_ITEMS) {
    if (checkedSet.has(item.id)) {
      earnedWeight += item.weight;
    } else {
      missingRecommendationsAr.push(item.recommendationAr);
    }
  }

  const scorePercent = Math.min(100, Math.max(0, earnedWeight));
  const completedCount = CORPORATE_COMPLIANCE_ITEMS.filter((i) =>
    checkedSet.has(i.id)
  ).length;

  let statusLabelAr = '';
  let riskLevel: 'low' | 'medium' | 'high' = 'high';

  if (scorePercent >= 80) {
    statusLabelAr = 'امتثال نظامي متقدم — جاهزية قانونية عالية';
    riskLevel = 'low';
  } else if (scorePercent >= 50) {
    statusLabelAr = 'امتثال جزئي — توجد فجوات تعاقدية ونظامية تستوجب المعالجة';
    riskLevel = 'medium';
  } else {
    statusLabelAr =
      'مخاطر نظامية مرتفعة — نوصي بتدقيق قانوني عاجل وهيكلة عقود المنشأة';
    riskLevel = 'high';
  }

  return {
    scorePercent,
    completedCount,
    totalCount: CORPORATE_COMPLIANCE_ITEMS.length,
    statusLabelAr,
    riskLevel,
    missingRecommendationsAr,
  };
}

// ============================================================================
// WhatsApp Direct Consultation Message & Link Builders (Office: 0593500596)
// ============================================================================

export const OFFICE_WHATSAPP_LOCAL = '0593500596';
export const OFFICE_WHATSAPP_INTL = '966593500596';

export function formatCurrencySAR(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

const TERMINATION_REASON_LABELS_AR: Record<TerminationReason, string> = {
  expiry_or_mutual: 'انتهاء مدة العقد أو باتفاق الطرفين (المادة 84)',
  employer_termination: 'فسخ العقد من قبل صاحب العمل لغير حالات المادة 80',
  worker_resignation: 'استقالة العامل (المادة 85)',
  article_81_or_force_majeure:
    'ترك العامل للعمل بموجب المادة (81) أو القوة القاهرة',
  female_marriage_maternity_87: 'استقالة العاملة لزواج أو وضع (المادة 87)',
  article_80: 'فسخ العقد من قبل صاحب العمل بموجب المادة (80)',
};

const JUDICIAL_CASE_TYPE_LABELS_AR: Record<JudicialCaseType, string> = {
  financial_claim: 'دعوى مطالبة مالية / تجارية / عقارية / مدنية محددة القيمة',
  exempt_labor_worker:
    'دعوى عمالية مرفوعة من العامل أو المستحقين عنه (معفاة - المادة 15)',
  exempt_personal_status: 'دعوى أحوال شخصية (معفاة - المادة 14)',
  exempt_estate_division: 'دعوى قسمة تركة (معفاة - المادة 14)',
  exempt_bankruptcy: 'دعوى أو طلب خاضع لنظام الإفلاس (معفاة - المادة 14)',
  exempt_criminal: 'دعوى جزائية عامة (معفاة - المادة 14)',
  request_appeal: 'طلب استئناف حكم ابتدائي (المادة 7)',
  request_cassation: 'طلب نقض أمام المحكمة العليا (المادة 7)',
  request_reconsideration: 'طلب التماس إعادة النظر (المادة 7)',
  request_incidental: 'طلب عارض / طلب إدخال أو تدخل (المادة 8)',
};

const SETTLEMENT_OPTION_LABELS_AR: Record<SettlementOption, string> = {
  none: 'استمرار السير في الدعوى حتى صدور الحكم الابتدائي (بدون خصم صلح)',
  before_first_hearing:
    'انتهاء الدعوى بالصلح أو ترك الخصومة قبل الجلسة الأولى (إعفاء 100%)',
  after_first_hearing:
    'انتهاء الدعوى بالصلح بعد الجلسة الأولى وقبل الحكم الابتدائي (خصم 75%)',
};

export function buildLaborWhatsAppMessage(
  input: LaborCalculationInput,
  result: LaborCalculationResult
): string {
  const contractLabel =
    input.contractType === 'fixed' ? 'عقد محدد المدة' : 'عقد غير محدد المدة';
  const reasonLabel =
    TERMINATION_REASON_LABELS_AR[input.terminationReason] ||
    input.terminationReason;

  return [
    'السلام عليكم ورحمة الله وبركاته،',
    `أرغب في طلب استشارة قانونية عمالية لدى شركة سامي الشريف للمحاماة (${OFFICE_WHATSAPP_LOCAL}) بناءً على ملخص نتائج الحاسبة العمالية:`,
    '',
    '*أولاً: بيانات العلاقة العمالية:*',
    `• نوع العقد: ${contractLabel}`,
    `• سبب انتهاء العلاقة: ${reasonLabel}`,
    `• مدة الخدمة الفعلية: ${result.formattedDurationAr}`,
    `• الأجر الفعلي الشامل: ${formatCurrencySAR(input.totalWage)} ريال`,
    `• الأجر الأساسي: ${formatCurrencySAR(input.basicWage)} ريال`,
    '',
    '*ثانياً: ملخص المستحقات العمالية التقديرية:*',
    `• صافي مكافأة نهاية الخدمة: ${formatCurrencySAR(result.endOfServiceAward)} ريال (${result.entitlementPercentText})`,
    `• تعويض رصيد الإجازات (${input.unusedLeaveDays} يوم): ${formatCurrencySAR(result.unusedLeaveCompensation)} ريال`,
    `• أجر الساعات الإضافية (${input.overtimeHours} ساعة): ${formatCurrencySAR(result.overtimeCompensation)} ريال`,
    ...(result.article77Compensation > 0
      ? [
          `• تعويض الفصل غير المشروع (المادة 77): ${formatCurrencySAR(result.article77Compensation)} ريال`,
        ]
      : []),
    `• *الإجمالي الكلي التقديري: ${formatCurrencySAR(result.grandTotal)} ريال سعودي*`,
    '',
    `السند النظامي: ${result.legalBasisAr}`,
  ].join('\n');
}

export function buildLaborWhatsAppUrl(
  input: LaborCalculationInput,
  result: LaborCalculationResult
): string {
  const msg = buildLaborWhatsAppMessage(input, result);
  return `https://wa.me/${OFFICE_WHATSAPP_INTL}?text=${encodeURIComponent(msg)}`;
}

export function buildJudicialCostsWhatsAppMessage(
  input: JudicialCostsInput,
  result: JudicialCostsResult
): string {
  const caseLabel =
    JUDICIAL_CASE_TYPE_LABELS_AR[input.caseType] || input.caseType;
  const settlementLabel =
    SETTLEMENT_OPTION_LABELS_AR[input.settlementOption] ||
    input.settlementOption;

  return [
    'السلام عليكم ورحمة الله وبركاته،',
    `أرغب في طلب استشارة وتمثيل قضائي لدى شركة سامي الشريف للمحاماة (${OFFICE_WHATSAPP_LOCAL}) بناءً على ملخص نتائج حاسبة التكاليف القضائية:`,
    '',
    '*أولاً: بيانات الدعوى / الطلب القضائي:*',
    `• نوع الدعوى أو الطلب: ${caseLabel}`,
    ...(input.caseType === 'financial_claim'
      ? [`• قيمة المطالبة المالية: ${formatCurrencySAR(input.claimAmount)} ريال`]
      : []),
    `• حالة الصلح / السير في الدعوى: ${settlementLabel}`,
    '',
    '*ثانياً: ملخص التكاليف القضائية التقديرية:*',
    `• التكلفة القضائية الأساسية: ${formatCurrencySAR(result.baseCost)} ريال`,
    `• خصم الصلح / الإعفاء النظامي (${result.discountPercent}%): ${formatCurrencySAR(result.discountAmount)} ريال`,
    `• *صافي التكاليف القضائية المستحقة: ${formatCurrencySAR(result.netPayableCost)} ريال سعودي*`,
    '',
    `السند النظامي: ${result.legalBasisAr}`,
  ].join('\n');
}

export function buildJudicialCostsWhatsAppUrl(
  input: JudicialCostsInput,
  result: JudicialCostsResult
): string {
  const msg = buildJudicialCostsWhatsAppMessage(input, result);
  return `https://wa.me/${OFFICE_WHATSAPP_INTL}?text=${encodeURIComponent(msg)}`;
}

export function buildInheritanceWhatsAppMessage(
  result: InheritanceResult
): string {
  const heirsLines =
    result.heirs.length > 0
      ? result.heirs.map(
          (h) =>
            `  - ${h.heirLabelAr}: ${formatCurrencySAR(h.totalShareAmount)} ريال (${h.shareFractionLabelAr} | النسبة: ${h.percentageOfNet}% | نصيب الفرد: ${formatCurrencySAR(h.perPersonAmount)} ريال)`
        )
      : ['  - تحتاج المسألة إلى دراسة تفصيلية للورثة والعصبات'];

  const blockedLines =
    result.blockedHeirsNotesAr && result.blockedHeirsNotesAr.length > 0
      ? ['', '*ملاحظات الحجب الشرعي والنظامي:*', ...result.blockedHeirsNotesAr.map((n) => `  • ${n}`)]
      : [];

  return [
    'السلام عليكم ورحمة الله وبركاته،',
    `أرغب في طلب استشارة قانونية لتصفية وقسمة تركة لدى شركة سامي الشريف للمحاماة (${OFFICE_WHATSAPP_LOCAL}) بناءً على ملخص نتائج حاسبة المواريث الشرعية:`,
    '',
    '*أولاً: ملخص التركة والحقوق المقدمة عليها:*',
    `• إجمالي قيمة التركة: ${formatCurrencySAR(result.grossEstateValue)} ريال`,
    `• الديون والالتزامات المالية على التركة: ${formatCurrencySAR(result.debtsAndFuneral)} ريال`,
    `• الوصية المنفذة شرعاً: ${formatCurrencySAR(result.appliedBequest)} ريال${
      result.bequestCappedWarning
        ? ' (تم تطبيق الحد الشرعي الأقصى للوصية وهو الثلث 1/3 وفق المادة 189)'
        : ''
    }`,
    `• *صافي التركة القابل للقسمة الشرعية: ${formatCurrencySAR(result.distributableEstate)} ريال سعودي*`,
    '',
    '*ثانياً: جدول توزيع أنصبة الورثة التقديري (وفق نظام الأحوال الشخصية م/73):*',
    ...heirsLines,
    ...blockedLines,
  ].join('\n');
}

export function buildInheritanceWhatsAppUrl(
  result: InheritanceResult
): string {
  const msg = buildInheritanceWhatsAppMessage(result);
  return `https://wa.me/${OFFICE_WHATSAPP_INTL}?text=${encodeURIComponent(msg)}`;
}

export function buildComplianceWhatsAppMessage(
  result: CorporateComplianceResult,
  checkedIds?: string[]
): string {
  const checkedSet = new Set(checkedIds || []);
  const fulfilledPillars = CORPORATE_COMPLIANCE_ITEMS.filter((item) =>
    checkedSet.has(item.id)
  ).map((item) => `  - (مستوفى) ${item.pillarAr}`);

  const missingLines =
    result.missingRecommendationsAr.length > 0
      ? result.missingRecommendationsAr.map((rec) => `  • ${rec}`)
      : [
          '  • جميع المعايير الأساسية مستوفاة، نرغب في عقد رعاية قانونية سنوية مستمرة.',
        ];

  return [
    'السلام عليكم ورحمة الله وبركاته،',
    `أرغب في طلب استشارة لتأهيل وامتثال المنشأة (باقات الرعاية القانونية للشركات) لدى شركة سامي الشريف للمحاماة (${OFFICE_WHATSAPP_LOCAL}) بناءً على نتائج فحص الامتثال:`,
    '',
    '*أولاً: ملخص نتيجة الفحص الذاتي للمنشأة:*',
    `• مؤشر الامتثال والحوكمة القانونية: ${result.scorePercent}% (${result.completedCount} من ${result.totalCount} معايير مستوفاة)`,
    `• التقييم النظامي العام: ${result.statusLabelAr}`,
    ...(fulfilledPillars.length > 0
      ? ['', '*ثانياً: الجوانب النظامية المستوفاة:*', ...fulfilledPillars]
      : []),
    '',
    '*ثالثاً: التوصيات القانونية المطلوبة لسد الفجوات النظامية:*',
    ...missingLines,
  ].join('\n');
}

export function buildComplianceWhatsAppUrl(
  result: CorporateComplianceResult,
  checkedIds?: string[]
): string {
  const msg = buildComplianceWhatsAppMessage(result, checkedIds);
  return `https://wa.me/${OFFICE_WHATSAPP_INTL}?text=${encodeURIComponent(msg)}`;
}
