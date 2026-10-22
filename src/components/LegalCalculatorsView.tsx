import React, { useState } from 'react';
import {
  Language,
  ActivePage,
  FIRM_CONTACT,
  LEGAL_DISCLAIMER,
  tr,
} from '../utils/lawFirmLogic';
import {
  LaborContractType,
  TerminationReason,
  calculateSaudiLaborEntitlements,
  JudicialCaseType,
  SettlementOption,
  calculateSaudiJudicialCosts,
  SpouseType,
  calculateShariaInheritance,
  CORPORATE_COMPLIANCE_ITEMS,
  calculateCorporateComplianceScore,
  formatCurrencySAR,
  OFFICE_WHATSAPP_LOCAL,
  buildLaborWhatsAppMessage,
  buildLaborWhatsAppUrl,
  buildJudicialCostsWhatsAppMessage,
  buildJudicialCostsWhatsAppUrl,
  buildInheritanceWhatsAppMessage,
  buildInheritanceWhatsAppUrl,
  buildComplianceWhatsAppMessage,
  buildComplianceWhatsAppUrl,
} from '../utils/saudiLegalCalculators';

interface LegalCalculatorsViewProps {
  lang: Language;
  onNavigateHome: () => void;
  onNavigatePage: (page: ActivePage, sectionId?: string) => void;
}

type CalculatorTab = 'labor' | 'judicial' | 'inheritance' | 'compliance';

export const LegalCalculatorsView: React.FC<LegalCalculatorsViewProps> = ({
  lang,
  onNavigateHome,
  onNavigatePage,
}) => {
  const [activeTab, setActiveTab] = useState<CalculatorTab>('labor');
  const [copiedTab, setCopiedTab] = useState<CalculatorTab | null>(null);

  const handleCopyMessage = (tab: CalculatorTab, text: string) => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).catch(() => {});
    }
    setCopiedTab(tab);
    setTimeout(() => {
      setCopiedTab((prev) => (prev === tab ? null : prev));
    }, 2500);
  };

  // -------------------------------------------------------------------------
  // State for Tool 1: Saudi Labor Calculator
  // -------------------------------------------------------------------------
  const [contractType, setContractType] = useState<LaborContractType>('fixed');
  const [terminationReason, setTerminationReason] =
    useState<TerminationReason>('expiry_or_mutual');
  const [totalWage, setTotalWage] = useState<number>(12000);
  const [basicWage, setBasicWage] = useState<number>(9000);
  const [durationMode, setDurationMode] = useState<'direct' | 'dates'>('direct');
  const [years, setYears] = useState<number>(6);
  const [months, setMonths] = useState<number>(6);
  const [days, setDays] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>('2019-01-01');
  const [endDate, setEndDate] = useState<string>('2025-07-01');
  const [unusedLeaveDays, setUnusedLeaveDays] = useState<number>(15);
  const [overtimeHours, setOvertimeHours] = useState<number>(12);
  const [includeArticle77Compensation, setIncludeArticle77Compensation] =
    useState<boolean>(false);
  const [remainingContractMonths, setRemainingContractMonths] =
    useState<number>(6);

  const laborResult = calculateSaudiLaborEntitlements({
    contractType,
    terminationReason,
    totalWage,
    basicWage,
    durationMode,
    years,
    months,
    days,
    startDate,
    endDate,
    unusedLeaveDays,
    overtimeHours,
    includeArticle77Compensation,
    remainingContractMonths,
  });

  // -------------------------------------------------------------------------
  // State for Tool 2: Saudi Judicial Costs Calculator
  // -------------------------------------------------------------------------
  const [caseType, setCaseType] = useState<JudicialCaseType>('financial_claim');
  const [claimAmount, setClaimAmount] = useState<number>(250000);
  const [settlementOption, setSettlementOption] =
    useState<SettlementOption>('none');

  const judicialResult = calculateSaudiJudicialCosts({
    caseType,
    claimAmount,
    settlementOption,
  });

  // -------------------------------------------------------------------------
  // State for Tool 3: Sharia Estate & Inheritance Calculator
  // -------------------------------------------------------------------------
  const [grossEstateValue, setGrossEstateValue] = useState<number>(1200000);
  const [debtsAndFuneral, setDebtsAndFuneral] = useState<number>(50000);
  const [bequestAmount, setBequestAmount] = useState<number>(100000);
  const [spouseType, setSpouseType] = useState<SpouseType>('wife');
  const [wivesCount, setWivesCount] = useState<number>(1);
  const [sonsCount, setSonsCount] = useState<number>(2);
  const [daughtersCount, setDaughtersCount] = useState<number>(2);
  const [hasFather, setHasFather] = useState<boolean>(true);
  const [hasMother, setHasMother] = useState<boolean>(true);
  const [brothersCount, setBrothersCount] = useState<number>(0);
  const [sistersCount, setSistersCount] = useState<number>(0);

  const inheritanceResult = calculateShariaInheritance({
    grossEstateValue,
    debtsAndFuneral,
    bequestAmount,
    spouseType,
    wivesCount,
    sonsCount,
    daughtersCount,
    hasFather,
    hasMother,
    brothersCount,
    sistersCount,
  });

  // -------------------------------------------------------------------------
  // State for Tool 4: Corporate Legal Compliance Self-Audit
  // -------------------------------------------------------------------------
  const [checkedComplianceIds, setCheckedComplianceIds] = useState<string[]>([
    'companies_law_charter',
    'qiwa_labor_contracts',
  ]);

  const toggleComplianceItem = (id: string) => {
    setCheckedComplianceIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const complianceResult = calculateCorporateComplianceScore(
    checkedComplianceIds
  );

  // Dynamic WhatsApp pre-filled messages & URLs for all 4 calculators (to 0593500596)
  const laborInputObj = {
    contractType,
    terminationReason,
    totalWage,
    basicWage,
    durationMode,
    years,
    months,
    days,
    startDate,
    endDate,
    unusedLeaveDays,
    overtimeHours,
    includeArticle77Compensation,
    remainingContractMonths,
  };
  const laborWhatsAppMessage = buildLaborWhatsAppMessage(
    laborInputObj,
    laborResult
  );
  const laborWhatsAppUrl = buildLaborWhatsAppUrl(laborInputObj, laborResult);

  const judicialInputObj = {
    caseType,
    claimAmount,
    settlementOption,
  };
  const judicialWhatsAppMessage = buildJudicialCostsWhatsAppMessage(
    judicialInputObj,
    judicialResult
  );
  const judicialWhatsAppUrl = buildJudicialCostsWhatsAppUrl(
    judicialInputObj,
    judicialResult
  );

  const inheritanceWhatsAppMessage =
    buildInheritanceWhatsAppMessage(inheritanceResult);
  const inheritanceWhatsAppUrl = buildInheritanceWhatsAppUrl(inheritanceResult);

  const complianceWhatsAppMessage = buildComplianceWhatsAppMessage(
    complianceResult,
    checkedComplianceIds
  );
  const complianceWhatsAppUrl = buildComplianceWhatsAppUrl(
    complianceResult,
    checkedComplianceIds
  );

  return (
    <div className="bg-[#FAF8F5] text-[#141414]">
      {/* Hero Banner for Legal Calculators Page */}
      <section className="bg-[#141414] text-white border-b border-[#B69648]/40 py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <a
              href="index.html"
              onClick={(e) => {
                // If inside SPA on index.html, prevent reload and switch state smoothly
                if (
                  !window.location.pathname.endsWith('calculators.html')
                ) {
                  e.preventDefault();
                  onNavigateHome();
                }
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-[#D1B46A] text-white hover:text-[#141414] text-xs sm:text-sm font-bold border border-[#D1B46A]/40 transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4 fill-none stroke-current stroke-2"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
              <span>
                {tr(
                  lang,
                  'العودة إلى الصفحة الرئيسية (index.html)',
                  'Back to Home Page (index.html)',
                  'مرکزی صفحہ پر واپس جائیں (index.html)'
                )}
              </span>
            </a>

            <div className="text-xs font-semibold text-[#D1B46A] tracking-wide">
              {tr(
                lang,
                'أنظمة المملكة العربية السعودية · تحديثات الأنظمة العدلية والعمالية',
                'Saudi Legal Systems · Labor, Judicial Costs & Sharia Inheritance',
                'مملکتِ سعودی عرب کے قوانین · لیبر، عدالتی اخراجات اور وراثت'
              )}
            </div>
          </div>

          <div className="max-w-3xl">
            <h1
              className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-4"
              style={{ textWrap: 'balance' }}
            >
              {tr(
                lang,
                'الحاسبات والأدوات القانونية الذكية',
                'Smart Saudi Legal Calculators & Assessment Tools',
                'ذہین سعودی قانونی کیلکولیٹرز اور تشخیصی ٹولز'
              )}
            </h1>
            <p className="text-sm sm:text-base text-[#D5CEBF] leading-relaxed">
              {tr(
                lang,
                'منظومة أدوات رقمية تفاعلية مصممة وفق أحدث مواد نظام العمل السعودي، ونظام التكاليف القضائية ولائحته التنفيذية، وأحكام المواريث الشرعية، وضوابط امتثال الشركات في المملكة العربية السعودية.',
                'Interactive statutory calculators engineered in accordance with the Saudi Labor Law, Judicial Costs Law & Executive Regulations, Sharia Inheritance rules, and Corporate Compliance standards.',
                'سعودی لیبر لاء، عدالتی اخراجات کے قانون، شرعی وراثت کے احکام اور کارپوریٹ تعمیل کے معیارات کے مطابق تیار کردہ انٹرایکٹو قانونی ٹولز۔'
              )}
            </p>
          </div>

          {/* Interactive Tabs Bar */}
          <div
            role="tablist"
            aria-label="الحاسبات القانونية"
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'labor'}
              onClick={() => setActiveTab('labor')}
              className={`flex items-center justify-between gap-3 p-4 rounded-xl border text-start transition-colors cursor-pointer ${
                activeTab === 'labor'
                  ? 'bg-[#D1B46A] text-[#141414] border-[#D1B46A] font-bold shadow-md'
                  : 'bg-[#1C1B18] text-white border-white/15 hover:border-[#D1B46A]/60'
              }`}
            >
              <div>
                <div className="text-[11px] opacity-80 mb-0.5">الأداة 01</div>
                <div className="text-xs sm:text-sm font-bold">
                  الحاسبة العمالية ومكافأة نهاية الخدمة
                </div>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 shrink-0 fill-none stroke-current stroke-2"
                aria-hidden="true"
              >
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
              </svg>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'judicial'}
              onClick={() => setActiveTab('judicial')}
              className={`flex items-center justify-between gap-3 p-4 rounded-xl border text-start transition-colors cursor-pointer ${
                activeTab === 'judicial'
                  ? 'bg-[#D1B46A] text-[#141414] border-[#D1B46A] font-bold shadow-md'
                  : 'bg-[#1C1B18] text-white border-white/15 hover:border-[#D1B46A]/60'
              }`}
            >
              <div>
                <div className="text-[11px] opacity-80 mb-0.5">الأداة 02</div>
                <div className="text-xs sm:text-sm font-bold">
                  حاسبة التكاليف القضائية والصلح
                </div>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 shrink-0 fill-none stroke-current stroke-2"
                aria-hidden="true"
              >
                <path d="M12 3v18M5 8l7-5 7 5M5 8l-3 7h6l-3-7zm14 0l-3 7h6l-3-7z" />
              </svg>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'inheritance'}
              onClick={() => setActiveTab('inheritance')}
              className={`flex items-center justify-between gap-3 p-4 rounded-xl border text-start transition-colors cursor-pointer ${
                activeTab === 'inheritance'
                  ? 'bg-[#D1B46A] text-[#141414] border-[#D1B46A] font-bold shadow-md'
                  : 'bg-[#1C1B18] text-white border-white/15 hover:border-[#D1B46A]/60'
              }`}
            >
              <div>
                <div className="text-[11px] opacity-80 mb-0.5">الأداة 03</div>
                <div className="text-xs sm:text-sm font-bold">
                  حاسبة تقسيم التركات والمواريث
                </div>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 shrink-0 fill-none stroke-current stroke-2"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'compliance'}
              onClick={() => setActiveTab('compliance')}
              className={`flex items-center justify-between gap-3 p-4 rounded-xl border text-start transition-colors cursor-pointer ${
                activeTab === 'compliance'
                  ? 'bg-[#D1B46A] text-[#141414] border-[#D1B46A] font-bold shadow-md'
                  : 'bg-[#1C1B18] text-white border-white/15 hover:border-[#D1B46A]/60'
              }`}
            >
              <div>
                <div className="text-[11px] opacity-80 mb-0.5">الأداة 04</div>
                <div className="text-xs sm:text-sm font-bold">
                  فحص الامتثال القانوني للشركات
                </div>
              </div>
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 shrink-0 fill-none stroke-current stroke-2"
                aria-hidden="true"
              >
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0 1 12 2.944a11.955 11.955 0 0 1-8.618 3.04A12.02 12.02 0 0 0 3 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Main Calculator Content Area */}
      <section className="py-12 lg:py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          {/* ============================================================== */}
          {/* TAB 1: SAUDI LABOR LAW & END OF SERVICE CALCULATOR             */}
          {/* ============================================================== */}
          {activeTab === 'labor' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs Column (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5DEC9] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-[#EFEAD8] pb-4">
                  <div className="text-xs font-bold text-[#9A7B34] mb-1">
                    وفق مواد نظام العمل السعودي (80، 81، 84، 85، 87، 107)
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#141414]">
                    الحاسبة العمالية الشاملة ومكافأة نهاية الخدمة
                  </h2>
                </div>

                {/* 1. Contract Type */}
                <div>
                  <label className="block text-xs font-bold text-[#2C2A26] mb-2">
                    1. نوع عقد العمل
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setContractType('fixed')}
                      className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                        contractType === 'fixed'
                          ? 'bg-[#141414] text-[#D1B46A] border-[#141414]'
                          : 'bg-[#FAF8F5] text-[#4A463D] border-[#DFD8C5] hover:border-[#9A7B34]'
                      }`}
                    >
                      عقد محدد المدة
                    </button>
                    <button
                      type="button"
                      onClick={() => setContractType('unlimited')}
                      className={`py-3 px-4 rounded-xl border text-xs sm:text-sm font-bold transition-colors cursor-pointer ${
                        contractType === 'unlimited'
                          ? 'bg-[#141414] text-[#D1B46A] border-[#141414]'
                          : 'bg-[#FAF8F5] text-[#4A463D] border-[#DFD8C5] hover:border-[#9A7B34]'
                      }`}
                    >
                      عقد غير محدد المدة
                    </button>
                  </div>
                </div>

                {/* 2. Termination Reason */}
                <div>
                  <label
                    htmlFor="termination-reason"
                    className="block text-xs font-bold text-[#2C2A26] mb-2"
                  >
                    2. سبب انتهاء العلاقة العمالية
                  </label>
                  <select
                    id="termination-reason"
                    value={terminationReason}
                    onChange={(e) =>
                      setTerminationReason(e.target.value as TerminationReason)
                    }
                    className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-4 py-3 text-xs sm:text-sm font-medium text-[#141414] focus:outline-none focus:border-[#9A7B34]"
                  >
                    <option value="expiry_or_mutual">
                      انتهاء مدة العقد أو باتفاق الطرفين (استحقاق كامل - المادة 84)
                    </option>
                    <option value="employer_termination">
                      فسخ العقد من قبل صاحب العمل لغير حالات المادة 80 (استحقاق كامل)
                    </option>
                    <option value="worker_resignation">
                      استقالة العامل (تطبق معادلة المادة 85: أقل من سنتين 0، 2-5 الثلث، 5-10 الثلثان، 10+ كامل)
                    </option>
                    <option value="article_81_or_force_majeure">
                      ترك العامل للعمل بموجب المادة (81) أو القوة القاهرة (استحقاق كامل)
                    </option>
                    <option value="female_marriage_maternity_87">
                      استقالة العاملة خلال 6 أشهر من الزواج أو 3 أشهر من الوضع (المادة 87 - استحقاق كامل)
                    </option>
                    <option value="article_80">
                      فسخ العقد من قبل صاحب العمل بموجب المادة (80) (0 ريال مكافأة نهاية خدمة)
                    </option>
                  </select>

                  {terminationReason === 'employer_termination' && (
                    <div className="mt-3 p-4 rounded-xl bg-[#FAF8F5] border border-[#D1B46A]/60 space-y-3">
                      <label className="flex items-start gap-2.5 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={includeArticle77Compensation}
                          onChange={(e) =>
                            setIncludeArticle77Compensation(e.target.checked)
                          }
                          className="mt-1 w-4 h-4 accent-[#141414]"
                        />
                        <span className="text-xs font-bold text-[#141414] leading-relaxed">
                          احتساب تعويض الفصل لسبب غير مشروع وفق المادة (77) من نظام العمل السعودي (بحد أدنى أجر شهرين)
                        </span>
                      </label>
                      {includeArticle77Compensation &&
                        contractType === 'fixed' && (
                          <div>
                            <label
                              htmlFor="remaining-contract-months"
                              className="block text-[11px] font-bold text-[#4A463D] mb-1"
                            >
                              المدة المتبقية من العقد محدد المدة (بالأشهر)
                            </label>
                            <input
                              id="remaining-contract-months"
                              type="number"
                              min={0}
                              max={60}
                              value={remainingContractMonths}
                              onChange={(e) =>
                                setRemainingContractMonths(
                                  Math.max(0, Number(e.target.value))
                                )
                              }
                              className="w-40 rounded-xl bg-white border border-[#DFD8C5] px-3 py-2 text-sm font-bold text-[#141414] font-mono-tabular"
                            />
                          </div>
                        )}
                    </div>
                  )}
                </div>

                {/* 3. Wages (Total & Basic) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                  <div>
                    <label
                      htmlFor="total-wage"
                      className="block text-xs font-bold text-[#2C2A26] mb-1.5"
                    >
                      3. الأجر الفعلي الشامل (الأساسي + البدلات الثابتة بالريال)
                    </label>
                    <input
                      id="total-wage"
                      type="number"
                      min={0}
                      step={500}
                      value={totalWage}
                      onChange={(e) =>
                        setTotalWage(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-4 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular focus:outline-none focus:border-[#9A7B34]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="basic-wage"
                      className="block text-xs font-bold text-[#2C2A26] mb-1.5"
                    >
                      الأجر الأساسي فقط (لحساب الساعة الإضافية وفق المادة 107)
                    </label>
                    <input
                      id="basic-wage"
                      type="number"
                      min={0}
                      step={500}
                      value={basicWage}
                      onChange={(e) =>
                        setBasicWage(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-4 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular focus:outline-none focus:border-[#9A7B34]"
                    />
                  </div>
                </div>

                {/* 4. Service Duration Mode */}
                <div className="pt-2 border-t border-[#EFEAD8]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <label className="text-xs font-bold text-[#2C2A26]">
                      4. مدة الخدمة الدقيقة
                    </label>
                    <div className="inline-flex rounded-lg bg-[#FAF8F5] p-1 border border-[#DFD8C5]">
                      <button
                        type="button"
                        onClick={() => setDurationMode('direct')}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                          durationMode === 'direct'
                            ? 'bg-[#141414] text-[#D1B46A]'
                            : 'text-[#5A5347]'
                        }`}
                      >
                        إدخال السنوات والأشهر والأيام
                      </button>
                      <button
                        type="button"
                        onClick={() => setDurationMode('dates')}
                        className={`px-3 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                          durationMode === 'dates'
                            ? 'bg-[#141414] text-[#D1B46A]'
                            : 'text-[#5A5347]'
                        }`}
                      >
                        إدخال تاريخ المباشرة والنهاية
                      </button>
                    </div>
                  </div>

                  {durationMode === 'direct' ? (
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label
                          htmlFor="labor-years"
                          className="block text-[11px] font-semibold text-[#5A5347] mb-1"
                        >
                          عدد السنوات
                        </label>
                        <input
                          id="labor-years"
                          type="number"
                          min={0}
                          max={60}
                          value={years}
                          onChange={(e) =>
                            setYears(Math.max(0, Number(e.target.value)))
                          }
                          className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="labor-months"
                          className="block text-[11px] font-semibold text-[#5A5347] mb-1"
                        >
                          عدد الأشهر (0 - 11)
                        </label>
                        <input
                          id="labor-months"
                          type="number"
                          min={0}
                          max={11}
                          value={months}
                          onChange={(e) =>
                            setMonths(Math.max(0, Number(e.target.value)))
                          }
                          className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="labor-days"
                          className="block text-[11px] font-semibold text-[#5A5347] mb-1"
                        >
                          عدد الأيام (0 - 29)
                        </label>
                        <input
                          id="labor-days"
                          type="number"
                          min={0}
                          max={29}
                          value={days}
                          onChange={(e) =>
                            setDays(Math.max(0, Number(e.target.value)))
                          }
                          className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="labor-start-date"
                          className="block text-[11px] font-semibold text-[#5A5347] mb-1"
                        >
                          تاريخ المباشرة
                        </label>
                        <input
                          id="labor-start-date"
                          type="date"
                          value={startDate}
                          onChange={(e) => setStartDate(e.target.value)}
                          className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="labor-end-date"
                          className="block text-[11px] font-semibold text-[#5A5347] mb-1"
                        >
                          تاريخ انتهاء العلاقة العمالية
                        </label>
                        <input
                          id="labor-end-date"
                          type="date"
                          value={endDate}
                          onChange={(e) => setEndDate(e.target.value)}
                          className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. Leave Balance & Overtime */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end pt-2 border-t border-[#EFEAD8]">
                  <div>
                    <label
                      htmlFor="unused-leave"
                      className="block text-xs font-bold text-[#2C2A26] mb-1.5"
                    >
                      5. رصيد الإجازات غير المستنفدة (بالأيام)
                    </label>
                    <input
                      id="unused-leave"
                      type="number"
                      min={0}
                      value={unusedLeaveDays}
                      onChange={(e) =>
                        setUnusedLeaveDays(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-4 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="overtime-hours"
                      className="block text-xs font-bold text-[#2C2A26] mb-1.5"
                    >
                      6. ساعات العمل الإضافي غير المسددة (المادة 107)
                    </label>
                    <input
                      id="overtime-hours"
                      type="number"
                      min={0}
                      value={overtimeHours}
                      onChange={(e) =>
                        setOvertimeHours(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-4 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                    />
                  </div>
                </div>
              </div>

              {/* Output Summary Column (5 cols) */}
              <div className="lg:col-span-5 bg-[#141414] text-white rounded-2xl border border-[#B69648]/50 p-6 sm:p-8 shadow-md space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs font-semibold text-[#D1B46A]">
                      تقرير الحساب الفوري · نظام العمل السعودي
                    </div>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      ملخص المستحقات العمالية التقديرية
                    </h3>
                  </div>
                  <span className="text-xs font-mono-tabular text-[#D1B46A] bg-white/5 px-3 py-1.5 rounded-lg border border-white/10">
                    {laborResult.formattedDurationAr}
                  </span>
                </div>

                {/* Alert when Article 80 is selected */}
                {laborResult.isZeroArticle80 && (
                  <div className="rounded-xl bg-[#2A1818] border border-red-400/40 p-4 text-xs text-red-200 leading-relaxed">
                    <strong className="block text-red-300 mb-1">
                      تنبيه نظامي (المادة 80 من نظام العمل):
                    </strong>
                    عند فسخ العقد لأحد الأسباب المشروعة الواردة حصراً في المادة (80)، يسقط الحق في مكافأة نهاية الخدمة (0 ريال)، مع بقاء حق العامل في أجر الإجازات المكتسبة وساعات العمل الإضافية الفعلية. إذا كان الفصل غير مستند لتحقيق نظامي، يحق للعامل المطالبة بالمكافأة الكاملة والتعويض وفق المادة (77).
                  </div>
                )}

                {/* Breakdown Cards */}
                <div className="space-y-3">
                  <div className="rounded-xl bg-[#1C1B18] border border-white/10 p-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-[#C2B69C]">
                        صافي مكافأة نهاية الخدمة المستحقة
                      </div>
                      <div className="text-[11px] text-[#D1B46A] mt-0.5">
                        {laborResult.entitlementPercentText}
                      </div>
                    </div>
                    <div className="text-lg font-bold text-white font-mono-tabular whitespace-nowrap">
                      {formatCurrencySAR(laborResult.endOfServiceAward)} ريال
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#1C1B18] border border-white/10 p-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-[#C2B69C]">
                        تعويض رصيد الإجازات ({unusedLeaveDays} يوم)
                      </div>
                      <div className="text-[11px] text-[#9E9585] mt-0.5">
                        يُحتسب على أساس الأجر الفعلي الشامل (المادة 111)
                      </div>
                    </div>
                    <div className="text-base font-bold text-white font-mono-tabular whitespace-nowrap">
                      {formatCurrencySAR(laborResult.unusedLeaveCompensation)} ريال
                    </div>
                  </div>

                  <div className="rounded-xl bg-[#1C1B18] border border-white/10 p-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs text-[#C2B69C]">
                        أجر ساعات العمل الإضافي ({overtimeHours} ساعة)
                      </div>
                      <div className="text-[11px] text-[#9E9585] mt-0.5">
                        أجر الساعة الفعلي + 50% من الأساسي (المادة 107)
                      </div>
                    </div>
                    <div className="text-base font-bold text-white font-mono-tabular whitespace-nowrap">
                      {formatCurrencySAR(laborResult.overtimeCompensation)} ريال
                    </div>
                  </div>

                  {laborResult.article77Compensation > 0 && (
                    <div className="rounded-xl bg-[#2B2412] border border-[#D1B46A]/50 p-4 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-xs font-bold text-[#D1B46A]">
                          تعويض الإنهاء غير المشروع (المادة 77)
                        </div>
                        <div className="text-[11px] text-[#E5DEC9] mt-0.5">
                          {contractType === 'unlimited'
                            ? 'أجر 15 يوماً عن كل سنة خدمة (بحد أدنى شهرين)'
                            : `أجر المدة المتبقية (${remainingContractMonths} شهر - بحد أدنى شهرين)`}
                        </div>
                      </div>
                      <div className="text-base font-bold text-[#D1B46A] font-mono-tabular whitespace-nowrap">
                        {formatCurrencySAR(laborResult.article77Compensation)} ريال
                      </div>
                    </div>
                  )}
                </div>

                {/* Grand Total Box */}
                <div className="rounded-xl bg-[#9A7B34]/20 border-2 border-[#D1B46A] p-5">
                  <div className="text-xs font-bold text-[#D1B46A] mb-1">
                    الإجمالي الكلي للمستحقات العمالية التقديرية
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono-tabular">
                    {formatCurrencySAR(laborResult.grandTotal)}{' '}
                    <span className="text-sm font-normal text-[#D1B46A]">
                      ريال سعودي
                    </span>
                  </div>
                </div>

                {/* Statutory Basis Box */}
                <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-xs text-[#D5CEBF] leading-relaxed">
                  <span className="font-bold text-[#D1B46A] block mb-1">
                    السند النظامي للتقدير:
                  </span>
                  {laborResult.legalBasisAr}
                </div>

                {/* Dynamic Pre-filled WhatsApp Summary & Action CTAs */}
                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="rounded-xl bg-[#1C1B18] border border-[#D1B46A]/40 p-3.5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#D1B46A]">
                        ملخص الرسالة النصية الجاهزة للإرسال عبر واتساب ({OFFICE_WHATSAPP_LOCAL})
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyMessage('labor', laborWhatsAppMessage)
                        }
                        className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D1B46A] text-white hover:text-[#141414] text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        {copiedTab === 'labor' ? 'تم نسخ الملخص ✓' : 'نسخ النص'}
                      </button>
                    </div>
                    <div
                      data-testid="whatsapp-preview-labor"
                      className="text-[11px] text-[#E5DEC9] whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto bg-black/30 rounded-lg p-3 border border-white/5"
                    >
                      {laborWhatsAppMessage}
                    </div>
                  </div>

                  <a
                    href={laborWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="whatsapp-cta-labor"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#D1B46A] hover:bg-[#B69648] text-[#141414] font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.447 5.601-1.469c1.908 1.258 4.191 1.989 6.647 1.989 6.627 0 12-5.373 12-12s-5.373-12-12.04-12z" />
                    </svg>
                    <span>
                      إرسال ملخص الحاسبة العمالية عبر واتساب ({OFFICE_WHATSAPP_LOCAL})
                    </span>
                    <span aria-hidden="true">←</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold border border-white/15 transition-colors cursor-pointer"
                  >
                    طباعة / حفظ التقرير بصيغة PDF
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 2: SAUDI JUDICIAL COSTS CALCULATOR                         */}
          {/* ============================================================== */}
          {activeTab === 'judicial' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs Column */}
              <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5DEC9] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-[#EFEAD8] pb-4">
                  <div className="text-xs font-bold text-[#9A7B34] mb-1">
                    وفق نظام التكاليف القضائية ولائحته التنفيذية (المواد 3، 7، 13، 14، 15)
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#141414]">
                    حاسبة التكاليف القضائية وحالات الإعفاء والصلح
                  </h2>
                </div>

                {/* 1. Case / Request Classification */}
                <div>
                  <label
                    htmlFor="judicial-case-type"
                    className="block text-xs font-bold text-[#2C2A26] mb-2"
                  >
                    1. نوع الدعوى أو الطلب القضائي
                  </label>
                  <select
                    id="judicial-case-type"
                    value={caseType}
                    onChange={(e) =>
                      setCaseType(e.target.value as JudicialCaseType)
                    }
                    className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-4 py-3 text-xs sm:text-sm font-medium text-[#141414] focus:outline-none focus:border-[#9A7B34]"
                  >
                    <optgroup label="الدعاوى المالية والتجارية والعامة الخاضعة للنظام">
                      <option value="financial_claim">
                        دعوى مطالبة مالية / تجارية / عقارية / مدنية محددة القيمة
                      </option>
                    </optgroup>
                    <optgroup label="الدعاوى المعفاة نظاماً (المادتان 14 و 15)">
                      <option value="exempt_labor_worker">
                        دعوى عمالية مرفوعة من العامل أو المستحقين عنه (معفاة - المادة 15)
                      </option>
                      <option value="exempt_personal_status">
                        دعوى أحوال شخصية (نفقات، حضانة، فسخ نكاح - معفاة - المادة 14)
                      </option>
                      <option value="exempt_estate_division">
                        دعوى قسمة تركة (معفاة نظاماً - المادة 14)
                      </option>
                      <option value="exempt_bankruptcy">
                        دعوى أو طلب خاضع لنظام الإفلاس (معفاة - المادة 14)
                      </option>
                      <option value="exempt_criminal">
                        دعوى جزائية عامة (معفاة - المادة 14)
                      </option>
                    </optgroup>
                    <optgroup label="الطلبات القضائية المستقلة والاعتراضات (المادتان 7 و 8)">
                      <option value="request_appeal">
                        طلب استئناف حكم ابتدائي
                      </option>
                      <option value="request_cassation">
                        طلب نقض أمام المحكمة العليا
                      </option>
                      <option value="request_reconsideration">
                        طلب التماس إعادة النظر
                      </option>
                      <option value="request_incidental">
                        طلب عارض / طلب إدخال أو تدخل في الدعوى
                      </option>
                    </optgroup>
                  </select>
                </div>

                {/* 2. Financial Claim Amount */}
                <div>
                  <label
                    htmlFor="claim-amount"
                    className="block text-xs font-bold text-[#2C2A26] mb-2"
                  >
                    2. قيمة المطالبة المالية بالريال السعودي (الحد الأقصى للتكاليف مليون ريال)
                  </label>
                  <input
                    id="claim-amount"
                    type="number"
                    min={0}
                    step={10000}
                    value={claimAmount}
                    onChange={(e) =>
                      setClaimAmount(Math.max(0, Number(e.target.value)))
                    }
                    disabled={caseType !== 'financial_claim'}
                    className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-4 py-3 text-base font-bold text-[#141414] font-mono-tabular disabled:opacity-50"
                  />
                  {caseType === 'financial_claim' && (
                    <div className="flex flex-wrap gap-2 mt-2.5">
                      {[50000, 200000, 500000, 1000000, 5000000].map(
                        (preset) => (
                          <button
                            key={preset}
                            type="button"
                            onClick={() => setClaimAmount(preset)}
                            className="px-3 py-1 rounded-lg bg-[#FAF8F5] hover:bg-[#EFEAD8] border border-[#DFD8C5] text-xs font-semibold text-[#4A463D] font-mono-tabular cursor-pointer"
                          >
                            {preset.toLocaleString('en-US')} ريال
                          </button>
                        )
                      )}
                    </div>
                  )}
                </div>

                {/* 3. Settlement & Reconciliation Discounts (Art. 13) */}
                <div>
                  <label className="block text-xs font-bold text-[#2C2A26] mb-2">
                    3. تخفيضات وإعفاءات الصلح وإنهاء الخصومة (المادة 13)
                  </label>
                  <div className="space-y-2.5">
                    {[
                      {
                        id: 'none' as SettlementOption,
                        title: 'استمرار السير في الدعوى حتى صدور الحكم الابتدائي',
                        subtitle: 'تستحق التكاليف القضائية المقررة كاملة على المحكوم عليه',
                      },
                      {
                        id: 'before_first_hearing' as SettlementOption,
                        title:
                          'انتهاء الدعوى بالصلح أو ترك الخصومة قبل انعقاد الجلسة الأولى (إعفاء 100%)',
                        subtitle: 'لا تفرض تكاليف قضائية وترد كاملة إن سُددت',
                      },
                      {
                        id: 'after_first_hearing' as SettlementOption,
                        title:
                          'انتهاء الدعوى بالصلح بعد الجلسة الأولى وقبل الحكم الابتدائي (خصم 75%)',
                        subtitle:
                          'تخفض التكاليف القضائية إلى الربع (25% فقط من الرسم الأساسي)',
                      },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSettlementOption(opt.id)}
                        className={`w-full p-3.5 rounded-xl border text-start transition-colors cursor-pointer ${
                          settlementOption === opt.id
                            ? 'bg-[#141414] text-white border-[#141414]'
                            : 'bg-[#FAF8F5] text-[#2C2A26] border-[#DFD8C5] hover:border-[#9A7B34]'
                        }`}
                      >
                        <div className="text-xs sm:text-sm font-bold">
                          {opt.title}
                        </div>
                        <div
                          className={`text-[11px] mt-0.5 ${
                            settlementOption === opt.id
                              ? 'text-[#D1B46A]'
                              : 'text-[#6E6658]'
                          }`}
                        >
                          {opt.subtitle}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Output Summary Column */}
              <div className="lg:col-span-5 bg-[#141414] text-white rounded-2xl border border-[#B69648]/50 p-6 sm:p-8 shadow-md space-y-6">
                <div className="border-b border-white/10 pb-4">
                  <div className="text-xs font-semibold text-[#D1B46A]">
                    تقدير الرسوم القضائية · وزارة العدل (ناجز)
                  </div>
                  <h3 className="text-lg font-bold text-white mt-0.5">
                    نتيجة حساب التكاليف القضائية
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="rounded-xl bg-[#1C1B18] border border-white/10 p-4 flex items-center justify-between">
                    <span className="text-xs text-[#C2B69C]">
                      التكلفة القضائية الأساسية قبل الإعفاء/الصلح
                    </span>
                    <span className="text-base font-bold text-white font-mono-tabular">
                      {formatCurrencySAR(judicialResult.baseCost)} ريال
                    </span>
                  </div>

                  <div className="rounded-xl bg-[#1C1B18] border border-white/10 p-4 flex items-center justify-between">
                    <span className="text-xs text-[#C2B69C]">
                      خصم الصلح / الإعفاء النظامي ({judicialResult.discountPercent}%)
                    </span>
                    <span className="text-base font-bold text-[#D1B46A] font-mono-tabular">
                      - {formatCurrencySAR(judicialResult.discountAmount)} ريال
                    </span>
                  </div>
                </div>

                <div className="rounded-xl bg-[#9A7B34]/20 border-2 border-[#D1B46A] p-5">
                  <div className="text-xs font-bold text-[#D1B46A] mb-1">
                    صافي التكاليف القضائية المستحقة السداد
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold text-white font-mono-tabular">
                    {formatCurrencySAR(judicialResult.netPayableCost)}{' '}
                    <span className="text-sm font-normal text-[#D1B46A]">
                      ريال سعودي
                    </span>
                  </div>
                  <div className="text-xs text-[#E5DEC9] mt-2">
                    {judicialResult.bracketBreakdownAr}
                  </div>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-4 text-xs text-[#D5CEBF] leading-relaxed">
                  <span className="font-bold text-[#D1B46A] block mb-1">
                    السند النظامي (نظام التكاليف القضائية):
                  </span>
                  {judicialResult.legalBasisAr}
                </div>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="rounded-xl bg-[#1C1B18] border border-[#D1B46A]/40 p-3.5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#D1B46A]">
                        ملخص الرسالة النصية الجاهزة للإرسال عبر واتساب ({OFFICE_WHATSAPP_LOCAL})
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyMessage('judicial', judicialWhatsAppMessage)
                        }
                        className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D1B46A] text-white hover:text-[#141414] text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        {copiedTab === 'judicial' ? 'تم نسخ الملخص ✓' : 'نسخ النص'}
                      </button>
                    </div>
                    <div
                      data-testid="whatsapp-preview-judicial"
                      className="text-[11px] text-[#E5DEC9] whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto bg-black/30 rounded-lg p-3 border border-white/5"
                    >
                      {judicialWhatsAppMessage}
                    </div>
                  </div>

                  <a
                    href={judicialWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="whatsapp-cta-judicial"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#D1B46A] hover:bg-[#B69648] text-[#141414] font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.447 5.601-1.469c1.908 1.258 4.191 1.989 6.647 1.989 6.627 0 12-5.373 12-12s-5.373-12-12.04-12z" />
                    </svg>
                    <span>
                      إرسال ملخص التكاليف القضائية عبر واتساب ({OFFICE_WHATSAPP_LOCAL})
                    </span>
                    <span aria-hidden="true">←</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 3: SHARIA ESTATE & INHERITANCE CALCULATOR                  */}
          {/* ============================================================== */}
          {activeTab === 'inheritance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Inputs Column */}
              <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E5DEC9] p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-[#EFEAD8] pb-4">
                  <div className="text-xs font-bold text-[#9A7B34] mb-1">
                    وفق أحكام الشريعة الإسلامية ونظام الأحوال الشخصية السعودي
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#141414]">
                    حاسبة تقسيم التركات والمواريث الشرعية التقديرية
                  </h2>
                </div>

                {/* Estate Financial Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                  <div className="flex flex-col justify-end">
                    <label
                      htmlFor="gross-estate"
                      className="block text-xs font-bold text-[#2C2A26] mb-1.5"
                    >
                      إجمالي قيمة التركة (ريال)
                    </label>
                    <input
                      id="gross-estate"
                      type="number"
                      min={0}
                      step={50000}
                      value={grossEstateValue}
                      onChange={(e) =>
                        setGrossEstateValue(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                    />
                  </div>
                  <div className="flex flex-col justify-end">
                    <label
                      htmlFor="estate-debts"
                      className="block text-xs font-bold text-[#2C2A26] mb-1.5"
                    >
                      الديون والالتزامات المالية على التركة
                    </label>
                    <input
                      id="estate-debts"
                      type="number"
                      min={0}
                      step={5000}
                      value={debtsAndFuneral}
                      onChange={(e) =>
                        setDebtsAndFuneral(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                    />
                  </div>
                  <div className="flex flex-col justify-end">
                    <label
                      htmlFor="estate-bequest"
                      className="block text-xs font-bold text-[#2C2A26] mb-1.5"
                    >
                      الوصية (بحد أقصى الثلث 1/3)
                    </label>
                    <input
                      id="estate-bequest"
                      type="number"
                      min={0}
                      step={10000}
                      value={bequestAmount}
                      onChange={(e) =>
                        setBequestAmount(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2.5 text-sm font-bold text-[#141414] font-mono-tabular"
                    />
                  </div>
                </div>

                {/* Spouse Selection */}
                <div className="pt-2 border-t border-[#EFEAD8]">
                  <label className="block text-xs font-bold text-[#2C2A26] mb-2">
                    أصحاب الفروض من الزوجين
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'none' as SpouseType, label: 'لا يوجد زوج/زوجة' },
                      { id: 'husband' as SpouseType, label: 'الزوج (توفيت الزوجة)' },
                      { id: 'wife' as SpouseType, label: 'الزوجة (توفي الزوج)' },
                    ].map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setSpouseType(s.id)}
                        className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-colors cursor-pointer ${
                          spouseType === s.id
                            ? 'bg-[#141414] text-[#D1B46A] border-[#141414]'
                            : 'bg-[#FAF8F5] text-[#4A463D] border-[#DFD8C5]'
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>

                  {spouseType === 'wife' && (
                    <div className="mt-3">
                      <label
                        htmlFor="wives-count"
                        className="block text-xs font-semibold text-[#5A5347] mb-1"
                      >
                        عدد الزوجات الوارثات (1 إلى 4)
                      </label>
                      <input
                        id="wives-count"
                        type="number"
                        min={1}
                        max={4}
                        value={wivesCount}
                        onChange={(e) =>
                          setWivesCount(
                            Math.min(4, Math.max(1, Number(e.target.value)))
                          )
                        }
                        className="w-32 rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2 text-sm font-bold text-[#141414] font-mono-tabular"
                      />
                    </div>
                  )}
                </div>

                {/* Parents & Children */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#EFEAD8]">
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#2C2A26]">
                      الأبوان (الأصول المباشرون)
                    </div>
                    <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasFather}
                        onChange={(e) => setHasFather(e.target.checked)}
                        className="w-4 h-4 accent-[#141414]"
                      />
                      <span className="text-xs font-bold text-[#141414]">
                        الأب على قيد الحياة
                      </span>
                    </label>
                    <label className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={hasMother}
                        onChange={(e) => setHasMother(e.target.checked)}
                        className="w-4 h-4 accent-[#141414]"
                      />
                      <span className="text-xs font-bold text-[#141414]">
                        الأم على قيد الحياة
                      </span>
                    </label>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label
                        htmlFor="sons-count"
                        className="block text-xs font-bold text-[#2C2A26] mb-1"
                      >
                        عدد الأبناء الذكور
                      </label>
                      <input
                        id="sons-count"
                        type="number"
                        min={0}
                        max={30}
                        value={sonsCount}
                        onChange={(e) =>
                          setSonsCount(Math.max(0, Number(e.target.value)))
                        }
                        className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2 text-sm font-bold text-[#141414] font-mono-tabular"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="daughters-count"
                        className="block text-xs font-bold text-[#2C2A26] mb-1"
                      >
                        عدد البنات
                      </label>
                      <input
                        id="daughters-count"
                        type="number"
                        min={0}
                        max={30}
                        value={daughtersCount}
                        onChange={(e) =>
                          setDaughtersCount(Math.max(0, Number(e.target.value)))
                        }
                        className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2 text-sm font-bold text-[#141414] font-mono-tabular"
                      />
                    </div>
                  </div>
                </div>

                {/* Siblings (الإخوة والأخوات الأشقاء وفق نظام الأحوال الشخصية م/73) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-[#EFEAD8]">
                  <div>
                    <label
                      htmlFor="brothers-count"
                      className="block text-xs font-bold text-[#2C2A26] mb-1"
                    >
                      عدد الإخوة الأشقاء (الحواشي)
                    </label>
                    <input
                      id="brothers-count"
                      type="number"
                      min={0}
                      max={30}
                      value={brothersCount}
                      onChange={(e) =>
                        setBrothersCount(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2 text-sm font-bold text-[#141414] font-mono-tabular"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="sisters-count"
                      className="block text-xs font-bold text-[#2C2A26] mb-1"
                    >
                      عدد الأخوات الشقيقات
                    </label>
                    <input
                      id="sisters-count"
                      type="number"
                      min={0}
                      max={30}
                      value={sistersCount}
                      onChange={(e) =>
                        setSistersCount(Math.max(0, Number(e.target.value)))
                      }
                      className="w-full rounded-xl bg-[#FAF8F5] border border-[#DFD8C5] px-3 py-2 text-sm font-bold text-[#141414] font-mono-tabular"
                    />
                  </div>
                </div>
              </div>

              {/* Output Distribution Table Column */}
              <div className="lg:col-span-6 bg-[#141414] text-white rounded-2xl border border-[#B69648]/50 p-6 sm:p-8 shadow-md space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <div className="text-xs font-semibold text-[#D1B46A]">
                      جدول الفريضة الشرعية التقديري · نظام الأحوال الشخصية السعودي (م/73)
                    </div>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      صافي التركة القابل للقسمة:{' '}
                      <span className="text-[#D1B46A] font-mono-tabular">
                        {formatCurrencySAR(inheritanceResult.distributableEstate)} ريال
                      </span>
                    </h3>
                  </div>
                </div>

                {inheritanceResult.bequestCappedWarning && (
                  <div className="rounded-xl bg-[#2B2412] border border-[#D1B46A] p-3.5 text-xs text-[#F3E5AB] leading-relaxed">
                    <strong>تنبيه شرعي ونظامي (المادة 189):</strong> الوصية المدخلة تتجاوز ثلث التركة بعد سداد الديون؛ تم تخفيض الوصية تلقائياً إلى الحد الأعلى الجائز شرعاً دون إجازة الورثة وهو الثلث ({formatCurrencySAR(inheritanceResult.maxAllowedBequest)} ريال).
                  </div>
                )}

                {inheritanceResult.blockedHeirsNotesAr.length > 0 && (
                  <div className="rounded-xl bg-white/5 border border-[#D1B46A]/40 p-3.5 text-xs text-[#E5DEC9] leading-relaxed space-y-1">
                    <strong className="block text-[#D1B46A]">
                      قواعد الحجب المطبقة في المسألة:
                    </strong>
                    {inheritanceResult.blockedHeirsNotesAr.map((note, i) => (
                      <div key={i}>• {note}</div>
                    ))}
                  </div>
                )}

                {/* Heirs Breakdown Table */}
                <div className="overflow-x-auto rounded-xl border border-white/10">
                  <table className="w-full text-start text-xs">
                    <thead className="bg-[#1C1B18] text-[#D1B46A] border-b border-white/10">
                      <tr>
                        <th className="py-3 px-3 text-start">الوارث</th>
                        <th className="py-3 px-3 text-start">الفرض / التعصيب</th>
                        <th className="py-3 px-3 text-start">النسبة</th>
                        <th className="py-3 px-3 text-start">نصيب الفرد (ريال)</th>
                        <th className="py-3 px-3 text-start">إجمالي الفئة</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {inheritanceResult.heirs.map((row, idx) => (
                        <tr key={idx} className="bg-[#141414]/60">
                          <td className="py-3 px-3 font-bold text-white whitespace-nowrap">
                            {row.heirLabelAr}
                          </td>
                          <td className="py-3 px-3 text-[#D5CEBF]">
                            {row.shareFractionLabelAr}
                          </td>
                          <td className="py-3 px-3 font-mono-tabular text-[#D1B46A]">
                            {row.percentageOfNet}%
                          </td>
                          <td className="py-3 px-3 font-mono-tabular text-white whitespace-nowrap">
                            {formatCurrencySAR(row.perPersonAmount)}
                          </td>
                          <td className="py-3 px-3 font-mono-tabular font-bold text-[#D1B46A] whitespace-nowrap">
                            {formatCurrencySAR(row.totalShareAmount)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="rounded-xl bg-white/5 border border-white/10 p-3.5 text-xs text-[#D5CEBF] leading-relaxed">
                  <span className="font-bold text-[#D1B46A] block mb-1">
                    السند النظامي للفريضة:
                  </span>
                  {inheritanceResult.legalBasisAr}
                </div>

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="rounded-xl bg-[#1C1B18] border border-[#D1B46A]/40 p-3.5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#D1B46A]">
                        ملخص الرسالة النصية الجاهزة للإرسال عبر واتساب ({OFFICE_WHATSAPP_LOCAL})
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyMessage(
                            'inheritance',
                            inheritanceWhatsAppMessage
                          )
                        }
                        className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D1B46A] text-white hover:text-[#141414] text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        {copiedTab === 'inheritance'
                          ? 'تم نسخ الملخص ✓'
                          : 'نسخ النص'}
                      </button>
                    </div>
                    <div
                      data-testid="whatsapp-preview-inheritance"
                      className="text-[11px] text-[#E5DEC9] whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto bg-black/30 rounded-lg p-3 border border-white/5"
                    >
                      {inheritanceWhatsAppMessage}
                    </div>
                  </div>

                  <a
                    href={inheritanceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="whatsapp-cta-inheritance"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#D1B46A] hover:bg-[#B69648] text-[#141414] font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.447 5.601-1.469c1.908 1.258 4.191 1.989 6.647 1.989 6.627 0 12-5.373 12-12s-5.373-12-12.04-12z" />
                    </svg>
                    <span>
                      إرسال ملخص قسمة التركة عبر واتساب ({OFFICE_WHATSAPP_LOCAL})
                    </span>
                    <span aria-hidden="true">←</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ============================================================== */}
          {/* TAB 4: CORPORATE LEGAL COMPLIANCE SELF-ASSESSMENT              */}
          {/* ============================================================== */}
          {activeTab === 'compliance' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E5DEC9] p-6 sm:p-8 shadow-sm space-y-5">
                <div className="border-b border-[#EFEAD8] pb-4">
                  <div className="text-xs font-bold text-[#9A7B34] mb-1">
                    أداة التشخيص القانوني الوقائي للمنشآت التجارية
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-[#141414]">
                    فحص الامتثال والجاهزية النظامية للشركات في المملكة
                  </h2>
                </div>

                <div className="space-y-3">
                  {CORPORATE_COMPLIANCE_ITEMS.map((item) => {
                    const isChecked = checkedComplianceIds.includes(item.id);
                    return (
                      <label
                        key={item.id}
                        className={`flex items-start gap-3.5 p-4 rounded-xl border transition-colors cursor-pointer ${
                          isChecked
                            ? 'bg-[#FAF8F5] border-[#9A7B34]'
                            : 'bg-white border-[#E5DEC9] hover:border-[#B69648]'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => toggleComplianceItem(item.id)}
                          className="mt-1 w-4 h-4 accent-[#141414] shrink-0"
                        />
                        <div className="flex-1">
                          <div className="text-xs font-bold text-[#9A7B34] mb-0.5">
                            {item.pillarAr} · {item.statutoryRefAr}
                          </div>
                          <div className="text-xs sm:text-sm font-bold text-[#141414] leading-snug">
                            {item.questionAr}
                          </div>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#141414] text-white rounded-2xl border border-[#B69648]/50 p-6 sm:p-8 shadow-md space-y-6">
                <div className="border-b border-white/10 pb-4 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-[#D1B46A]">
                      مؤشر الامتثال والحوكمة القانونية
                    </div>
                    <h3 className="text-lg font-bold text-white mt-0.5">
                      نتيجة الفحص الذاتي للمنشأة
                    </h3>
                  </div>
                  <div className="text-3xl font-bold text-[#D1B46A] font-mono-tabular">
                    {complianceResult.scorePercent}%
                  </div>
                </div>

                <div className="rounded-xl bg-[#1C1B18] border border-white/10 p-4">
                  <div className="text-xs font-bold text-[#D1B46A] mb-1">
                    التقييم النظامي العام ({complianceResult.completedCount} من{' '}
                    {complianceResult.totalCount} معايير مستوفاة):
                  </div>
                  <div className="text-sm font-bold text-white">
                    {complianceResult.statusLabelAr}
                  </div>
                </div>

                {complianceResult.missingRecommendationsAr.length > 0 && (
                  <div className="space-y-2">
                    <div className="text-xs font-bold text-[#D1B46A]">
                      التوصيات القانونية العاجلة لسد الفجوات النظامية:
                    </div>
                    <ul className="space-y-2 text-xs text-[#D5CEBF]">
                      {complianceResult.missingRecommendationsAr.map(
                        (rec, index) => (
                          <li
                            key={index}
                            className="p-3 rounded-lg bg-white/5 border border-white/10 leading-relaxed"
                          >
                            • {rec}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                )}

                <div className="space-y-3 pt-2 border-t border-white/10">
                  <div className="rounded-xl bg-[#1C1B18] border border-[#D1B46A]/40 p-3.5">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[11px] font-bold text-[#D1B46A]">
                        ملخص الرسالة النصية الجاهزة للإرسال عبر واتساب ({OFFICE_WHATSAPP_LOCAL})
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopyMessage(
                            'compliance',
                            complianceWhatsAppMessage
                          )
                        }
                        className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-[#D1B46A] text-white hover:text-[#141414] text-[11px] font-bold transition-colors cursor-pointer"
                      >
                        {copiedTab === 'compliance'
                          ? 'تم نسخ الملخص ✓'
                          : 'نسخ النص'}
                      </button>
                    </div>
                    <div
                      data-testid="whatsapp-preview-compliance"
                      className="text-[11px] text-[#E5DEC9] whitespace-pre-wrap leading-relaxed max-h-40 overflow-y-auto bg-black/30 rounded-lg p-3 border border-white/5"
                    >
                      {complianceWhatsAppMessage}
                    </div>
                  </div>

                  <a
                    href={complianceWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="whatsapp-cta-compliance"
                    className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl bg-[#D1B46A] hover:bg-[#B69648] text-[#141414] font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-sm"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.447 5.601-1.469c1.908 1.258 4.191 1.989 6.647 1.989 6.627 0 12-5.373 12-12s-5.373-12-12.04-12z" />
                    </svg>
                    <span>
                      إرسال نتيجة فحص الامتثال عبر واتساب ({OFFICE_WHATSAPP_LOCAL})
                    </span>
                    <span aria-hidden="true">←</span>
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Mandatory Statutory Disclaimer Box inside Calculators View */}
          <div className="mt-10 rounded-2xl bg-white border border-[#D8CEB8] p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-bold text-[#9A7B34] mb-1">
                {LEGAL_DISCLAIMER.titleAr} — تنويه نظامي خاص بالحاسبات القانونية
              </div>
              <p className="text-xs text-[#4A463D] leading-relaxed max-w-4xl">
                جميع النتائج والأرقام الصادرة عن هذه الحاسبات القانونية الذكية هي تقديرات حسابية استرشادية أولية مبنية على المدخلات الرقمية للمستخدم وفق القواعد العامة للأنظمة السعودية، ولا تعتبر فتوى أو رأياً قانونياً ملزماً أو حكماً قضائياً، كما لا تغني عن دراسة المستندات والعقود الخاصة بكل حالة من قبل محامٍ مرخص.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigatePage('terms')}
              className="px-4 py-2.5 rounded-xl bg-[#141414] hover:bg-[#9A7B34] text-white text-xs font-bold whitespace-nowrap shrink-0 transition-colors cursor-pointer"
            >
              الشروط والأحكام وضوابط التوكيل
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
