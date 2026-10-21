import React, { useState } from 'react';
import { CheckCircle2, FileCheck2, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import {
  Language,
  ClientEntityType,
  UrgencyLevel,
  LEGAL_SERVICES,
  calculateScopeEstimate,
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
  const ArrowIcon = lang === 'ar' ? ArrowUpLeft : ArrowUpRight;

  const entityOptions: { id: ClientEntityType; labelAr: string; labelEn: string }[] = [
    { id: 'corporate', labelAr: 'شركة / مؤسسة تجارية', labelEn: 'Corporate / Business' },
    { id: 'individual', labelAr: 'فرد / مستفيد خاص', labelEn: 'Individual / Private Client' },
    { id: 'foreign_investor', labelAr: 'مستثمر أجنبي / شركة دولية', labelEn: 'Foreign Investor' },
  ];

  return (
    <section id="estimator" className="py-20 bg-[#FAF8F5] border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-semibold text-[#9A7B34] mb-2">
            {lang === 'ar'
              ? '03. أداة تقييم المسار القانوني · Legal Scope Estimator'
              : '03. Legal Scope & Readiness Estimator · تقييم المسار القانوني'}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug mb-3"
            style={{ textWrap: 'balance' }}
          >
            {lang === 'ar'
              ? 'حدد نطاق احتياجك القانوني وتعرف فوراً على المستندات ومراحل العمل'
              : 'Configure Your Legal Requirement & Preview Required Documents'}
          </h2>
          <p className="text-sm md:text-base text-[#4A463D]">
            {lang === 'ar'
              ? 'أداة تفاعلية تساعد قطاع الأعمال والمستثمرين والأفراد على معرفة آلية التعاقد الأنسب والمسار الإجرائي قبل بدء الاستشارة.'
              : 'An interactive readiness guide to identify your optimal legal engagement structure, review timeframe, and required statutory documents.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Controls Panel (6 cols) */}
          <div className="lg:col-span-6 bg-white rounded-xl p-7 md:p-8 border border-[#E5DEC9] flex flex-col justify-between">
            <div className="space-y-6">
              {/* Step 1: Entity Type */}
              <div>
                <label className="block text-xs font-bold text-[#141414] mb-2.5">
                  {lang === 'ar'
                    ? '1. صفة طالب الخدمة القانونية'
                    : '1. Client Entity Classification'}
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
                        {lang === 'ar' ? opt.labelAr : opt.labelEn}
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
                  {lang === 'ar'
                    ? '2. نوع الخدمة القانونية أو القضائية'
                    : '2. Target Legal or Judicial Service'}
                </label>
                <select
                  id="estimator-service-select"
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-lg text-[#141414] font-medium focus:outline-none focus:border-[#B69648]"
                >
                  {LEGAL_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.index}. {lang === 'ar' ? srv.titleAr : srv.titleEn}
                    </option>
                  ))}
                </select>
              </div>

              {/* Step 3: Urgency Level */}
              <div>
                <label className="block text-xs font-bold text-[#141414] mb-2.5">
                  {lang === 'ar'
                    ? '3. مستوى الأولوية الزمنية'
                    : '3. Processing Priority'}
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
                    {lang === 'ar' ? 'مسار اعتيادي منظم' : 'Standard Schedule'}
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
                    {lang === 'ar' ? 'مسار عاجل (أولوية قصوى)' : 'Priority Fast-Track'}
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#F0ECE1] flex items-center justify-between gap-4">
              <div className="text-xs text-[#5C564B]">
                {lang === 'ar' ? 'الخدمة المختارة:' : 'Selected Service:'}{' '}
                <strong className="text-[#141414]">
                  {lang === 'ar' ? selectedService.titleAr : selectedService.titleEn}
                </strong>
              </div>
              <button
                type="button"
                onClick={() =>
                  onApplyEstimateToBooking({ entityType, serviceId, urgency })
                }
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>
                  {lang === 'ar'
                    ? 'متابعة حجز هذه الاستشارة'
                    : 'Proceed with This Scope'}
                </span>
                <ArrowIcon className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Output Summary Panel (6 cols) */}
          <div className="lg:col-span-6 bg-[#141414] text-white rounded-xl p-7 md:p-8 border border-[#2C2821] flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-white/10">
                <div>
                  <div className="text-xs text-[#D1B46A] font-semibold mb-1">
                    {lang === 'ar'
                      ? 'نموذج التعاقد القانوني المقترح'
                      : 'Recommended Legal Engagement Model'}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {lang === 'ar'
                      ? estimate.engagementModelAr
                      : estimate.engagementModelEn}
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-xs text-[#C2B69C]">
                    {lang === 'ar' ? 'الدارسة الأولية' : 'Initial Review'}
                  </div>
                  <div className="text-xl font-bold text-[#D1B46A] tabular-nums">
                    {estimate.initialReviewDays}{' '}
                    {lang === 'ar' ? 'أيام عمل' : 'Business Days'}
                  </div>
                </div>
              </div>

              {/* Execution Phases */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-[#D1B46A] mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>
                    {lang === 'ar'
                      ? 'مراحل العمل الإجرائية'
                      : 'Procedural Execution Stages'}
                  </span>
                </h4>
                <ol className="space-y-2.5 text-xs md:text-sm text-white/90">
                  {(lang === 'ar'
                    ? estimate.executionPhasesAr
                    : estimate.executionPhasesEn
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
              <div>
                <h4 className="text-xs font-semibold text-[#D1B46A] mb-3 flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4" />
                  <span>
                    {lang === 'ar'
                      ? 'قائمة المستندات اللازمة لبدء الدراسة'
                      : 'Required Initial Document Checklist'}
                  </span>
                </h4>
                <ul className="space-y-2 text-xs md:text-sm text-[#D5CEBF]">
                  {(lang === 'ar' ? estimate.checklistAr : estimate.checklistEn).map(
                    (doc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#D1B46A]">•</span>
                        <span>{doc}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-xs text-[#C2B69C] space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-[#D1B46A]">
                  {lang === 'ar'
                    ? 'إخلاء مسؤولية قانونية · السرية المهنية (PDPL)'
                    : 'Legal Disclaimer · Confidentiality (PDPL)'}
                </span>
                <span className="text-[#D1B46A] font-mono-tabular">KSA · JED</span>
              </div>
              <p className="leading-relaxed text-[#D5CEBF]">
                {lang === 'ar'
                  ? 'المعلومات والتقديرات المعروضة أعلاه هي لأغراض تثقيفية عامة فقط ولا تغني عن الاستشارة القانونية الخاصة، ولا تُعد توكيلاً رسمياً إلا بعد توقيع عقد وكالة وسداد الأتعاب.'
                  : 'Estimates above are for general educational purposes only, do not substitute for specific legal advice, and do not constitute formal representation until a retainer contract is signed and fees are paid.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
