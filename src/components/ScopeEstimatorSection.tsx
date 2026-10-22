import React, { useState } from 'react';
import {
  Language,
  ClientEntityType,
  UrgencyLevel,
  LEGAL_SERVICES,
  calculateScopeEstimate,
  buildScopeEstimateWhatsAppUrl,
  isRtl,
  tr,
} from '../utils/lawFirmLogic';

interface ScopeEstimatorSectionProps {
  lang: Language;
  onApplyEstimateToBooking: (params: {
    entityType: ClientEntityType;
    serviceId: string;
    urgency: UrgencyLevel;
  }) => void;
}

export const ScopeEstimatorSection: React.FC<ScopeEstimatorSectionProps> = ({
  lang,
  onApplyEstimateToBooking,
}) => {
  const [entityType, setEntityType] = useState<ClientEntityType>('corporate');
  const [serviceId, setServiceId] = useState<string>('contract-drafting');
  const [urgency, setUrgency] = useState<UrgencyLevel>('standard');

  const estimate = calculateScopeEstimate({ entityType, serviceId, urgency });
  const selectedService =
    LEGAL_SERVICES.find((s) => s.id === serviceId) || LEGAL_SERVICES[0];
  const rtl = isRtl(lang);

  const whatsappScopeUrl = buildScopeEstimateWhatsAppUrl(
    { entityType, serviceId, urgency },
    estimate,
    lang
  );

  const entityOptions: {
    id: ClientEntityType;
    labelAr: string;
    labelEn: string;
    labelUr: string;
  }[] = [
    {
      id: 'corporate',
      labelAr: 'شركة / مؤسسة تجارية',
      labelEn: 'Corporate / Business',
      labelUr: 'کمپنی / تجارتی ادارہ',
    },
    {
      id: 'individual',
      labelAr: 'فرد / مستفيد خاص',
      labelEn: 'Individual / Private Client',
      labelUr: 'فرد / نجی مؤکل',
    },
    {
      id: 'foreign_investor',
      labelAr: 'مستثمر أجنبي / شركة دولية',
      labelEn: 'Foreign Investor',
      labelUr: 'غیر ملکی سرمایہ کار',
    },
  ];

  return (
    <section id="estimator" className="py-20 bg-[#FAF8F5] border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-semibold text-[#9A7B34] mb-2">
            {tr(
              lang,
              '03. أداة تقييم المسار القانوني · Legal Scope Estimator',
              '03. Legal Scope & Readiness Estimator · تقييم المسار القانوني',
              '03. قانونی دائرہ کار کا تخمینہ · Legal Scope Estimator'
            )}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug mb-3"
            style={{ textWrap: 'balance' }}
          >
            {tr(
              lang,
              'حدد نطاق احتياجك القانوني وتعرف فوراً على المستندات ومراحل العمل',
              'Configure Your Legal Requirement & Preview Required Documents',
              'اپنی قانونی ضرورت کا تعین کریں اور مطلوبہ دستاویزات و مراحلِ کار جانیں'
            )}
          </h2>
          <p className="text-sm md:text-base text-[#4A463D]">
            {tr(
              lang,
              'أداة تفاعلية تساعد قطاع الأعمال والمستثمرين والأفراد على معرفة آلية التعاقد الأنسب والمسار الإجرائي قبل بدء الاستشارة.',
              'An interactive readiness guide to identify your optimal legal engagement structure, review timeframe, and required statutory documents.',
              'ایک انٹرایکٹو رہنما ٹول جو کاروباری اداروں، سرمایہ کاروں اور افراد کو مشاورت شروع کرنے سے قبل موزوں قانونی معاہدے اور طریقہ کار سے آگاہ کرتا ہے۔'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Controls Panel (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-6 md:p-8 border border-[#E5DEC9] flex flex-col justify-between shadow-2xs">
            <div className="space-y-6">
              {/* Step 1: Entity Type */}
              <div>
                <label className="block text-xs font-bold text-[#141414] mb-2.5">
                  {tr(
                    lang,
                    '1. صفة طالب الخدمة القانونية',
                    '1. Client Entity Classification',
                    '1. قانونی خدمت کے طالب کی حیثیت'
                  )}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {entityOptions.map((opt) => {
                    const active = entityType === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setEntityType(opt.id)}
                        className={`px-3.5 py-2.5 text-xs font-semibold rounded-lg border text-center transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                          active
                            ? 'bg-[#141414] text-white border-[#141414]'
                            : 'bg-[#FAF8F5] text-[#4A463D] border-[#D8CEB8] hover:border-[#141414]'
                        }`}
                      >
                        {tr(lang, opt.labelAr, opt.labelEn, opt.labelUr)}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Legal Service Selection */}
              <div>
                <label
                  htmlFor="estimator-service-select"
                  className="block text-xs font-bold text-[#141414] mb-2.5"
                >
                  {tr(
                    lang,
                    '2. نوع الخدمة القانونية أو القضائية',
                    '2. Target Legal or Judicial Service',
                    '2. قانونی یا عدالتی خدمت کی قسم'
                  )}
                </label>
                <select
                  id="estimator-service-select"
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-lg text-[#141414] font-medium focus:outline-none focus:border-[#B69648]"
                >
                  {LEGAL_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.index}. {tr(lang, srv.titleAr, srv.titleEn, srv.titleUr)}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Urgency Level */}
              <div>
                <label className="block text-xs font-bold text-[#141414] mb-2.5">
                  {tr(
                    lang,
                    '3. مستوى الأولوية الزمنية',
                    '3. Processing Priority',
                    '3. ترجیحی درجہ'
                  )}
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setUrgency('standard')}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      urgency === 'standard'
                        ? 'bg-[#141414] text-white border-[#141414]'
                        : 'bg-[#FAF8F5] text-[#4A463D] border-[#D8CEB8] hover:border-[#141414]'
                    }`}
                  >
                    {tr(lang, 'مسار اعتيادي منظم', 'Standard Schedule', 'معمول کا شیڈول')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('priority')}
                    className={`px-4 py-2.5 text-xs font-semibold rounded-lg border transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      urgency === 'priority'
                        ? 'bg-[#B69648] text-[#141414] border-[#B69648]'
                        : 'bg-[#FAF8F5] text-[#4A463D] border-[#D8CEB8] hover:border-[#B69648]'
                    }`}
                  >
                    {tr(
                      lang,
                      'مسار عاجل (أولوية قصوى)',
                      'Priority Fast-Track',
                      'ہنگامی / فوری ترجیح'
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#F0ECE1] flex flex-wrap items-center justify-between gap-4">
              <div className="text-xs text-[#5C564B]">
                {tr(lang, 'الخدمة المختارة:', 'Selected Service:', 'منتخب خدمت:')}{' '}
                <strong className="text-[#141414]">
                  {tr(
                    lang,
                    selectedService.titleAr,
                    selectedService.titleEn,
                    selectedService.titleUr
                  )}
                </strong>
              </div>
            </div>
          </div>

          {/* Right Output Summary Panel with Direct WhatsApp Scope Adoption Button (6 cols) */}
          <div className="lg:col-span-6 bg-[#141414] text-white rounded-2xl p-6 md:p-8 border border-[#B69648]/50 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
                <div>
                  <div className="text-xs text-[#D1B46A] font-semibold mb-1">
                    {tr(
                      lang,
                      'نموذج التعاقد القانوني المقترح',
                      'Recommended Legal Engagement Model',
                      'تجویز کردہ قانونی معاہدے کا ماڈل'
                    )}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {tr(
                      lang,
                      estimate.engagementModelAr,
                      estimate.engagementModelEn,
                      estimate.engagementModelUr
                    )}
                  </h3>
                </div>

                <div className="px-3.5 py-2 rounded-xl bg-[#1C1B18] border border-[#B69648]/40 text-right">
                  <div className="text-[11px] text-[#C2B69C]">
                    {tr(lang, 'الدراسة الأولية', 'Initial Review', 'ابتدائی جائزہ')}
                  </div>
                  <div className="text-lg font-bold text-[#D1B46A] tabular-nums">
                    {estimate.initialReviewDays}{' '}
                    {tr(lang, 'أيام عمل', 'Business Days', 'کاروباری دن')}
                  </div>
                </div>
              </div>

              {/* Execution Phases */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[#D1B46A] mb-3 flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>
                    {tr(
                      lang,
                      'مراحل العمل الإجرائية',
                      'Procedural Execution Stages',
                      'عملدرآمد کے مراحل'
                    )}
                  </span>
                </h4>
                <ol className="space-y-2.5 text-xs md:text-sm text-white/90">
                  {tr(
                    lang,
                    estimate.executionPhasesAr,
                    estimate.executionPhasesEn,
                    estimate.executionPhasesUr
                  ).map((phase, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="font-mono-tabular text-[#D1B46A] font-bold">
                        0{idx + 1}.
                      </span>
                      <span>{phase}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Document Checklist */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[#D1B46A] mb-3 flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="m9 15 2 2 4-4" />
                  </svg>
                  <span>
                    {tr(
                      lang,
                      'قائمة المستندات اللازمة لبدء الدراسة',
                      'Required Initial Document Checklist',
                      'ابتدائی مطالعے کے لیے مطلوبہ دستاویزات کی فہرست'
                    )}
                  </span>
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-[#D5CEBF]">
                  {tr(
                    lang,
                    estimate.checklistAr,
                    estimate.checklistEn,
                    estimate.checklistUr
                  ).map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#D1B46A]">•</span>
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct High-Conversion WhatsApp Action Button sending all selected options */}
              <a
                href={whatsappScopeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#D1B46A] hover:bg-white text-[#141414] font-bold text-xs sm:text-sm md:text-base transition-colors shadow-md"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 fill-current shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                </svg>
                <span>
                  {tr(
                    lang,
                    'اعتمد هذا المسار وابدأ الإجراءات الآن عبر واتساب',
                    'Adopt This Scope & Start Now via WhatsApp',
                    'اس قانونی مسار کو اپنائیں اور ابھی واٹس ایپ پر کارروائی شروع کریں'
                  )}
                </span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#C2B69C] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#D1B46A]">
                  {tr(
                    lang,
                    'إخلاء مسؤولية قانونية · السرية المهنية (PDPL)',
                    'Legal Disclaimer · Confidentiality (PDPL)',
                    'قانونی دستبرداری · پیشہ ورانہ رازداری (PDPL)'
                  )}
                </span>
                <span className="text-[#D1B46A] font-mono-tabular">KSA · JED</span>
              </div>
              <p className="leading-relaxed text-[#D5CEBF]">
                {tr(
                  lang,
                  'المعلومات والتقديرات المعروضة أعلاه هي لأغراض تثقيفية عامة فقط ولا تغني عن الاستشارة القانونية الخاصة، ولا تُعد توكيلاً رسمياً إلا بعد توقيع عقد وكالة وسداد الأتعاب.',
                  'Estimates above are for general educational purposes only, do not substitute for specific legal advice, and do not constitute formal representation until a retainer contract is signed and fees are paid.',
                  'مذکورہ بالا معلومات اور تخمینے صرف عمومی آگاہی کے لیے ہیں اور مخصوص قانونی مشورے کا متبادل نہیں ہیں، نیز باقاعدہ معاہدے پر دستخط اور فیس کی ادائیگی تک انہیں باضابطہ وکالت نہیں سمجھا جائے گا۔'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
