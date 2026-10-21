import React, { useState } from 'react';
import {
  Language,
  LegalService,
  ServiceCategory,
  LEGAL_SERVICES,
  filterServices,
  buildServiceWhatsAppUrl,
  isRtl,
  tr,
} from '../utils/lawFirmLogic';

interface ServicesSectionProps {
  lang: Language;
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  lang,
  onSelectServiceForBooking,
}) => {
  const [category, setCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeService, setActiveService] = useState<LegalService | null>(null);

  const filteredServices = filterServices(LEGAL_SERVICES, category, searchQuery);
  const rtl = isRtl(lang);

  const filterButtons: {
    id: ServiceCategory;
    labelAr: string;
    labelEn: string;
    labelUr: string;
    count: number;
  }[] = [
    {
      id: 'all',
      labelAr: 'جميع الخدمات',
      labelEn: 'All Services',
      labelUr: 'تمام خدمات',
      count: 14,
    },
    {
      id: 'advisory',
      labelAr: 'خدمات الاستشارات القانونية',
      labelEn: 'Legal Advisory',
      labelUr: 'قانونی مشاورتی خدمات',
      count: 6,
    },
    {
      id: 'representation',
      labelAr: 'خدمات التمثيل القانوني',
      labelEn: 'Legal Representation',
      labelUr: 'قانونی و عدالتی نمائندگی',
      count: 8,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#9A7B34] mb-2">
              {tr(
                lang,
                '02. خدماتنا القانونية · Our Legal Services',
                '02. Our Legal Services · خدماتنا القانونية',
                '02. ہماری قانونی خدمات · Our Legal Services'
              )}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug"
              style={{ textWrap: 'balance' }}
            >
              {tr(
                lang,
                'منظومة متكاملة من الاستشارات القانونية والتمثيل القضائي',
                'Integrated System of Legal Consultations & Judicial Representation',
                'قانونی مشاورت اور عدالتی نمائندگی کا مکمل نظام'
              )}
            </h2>
          </div>

          {/* Interactive Search Input with Clean Inline SVG */}
          <div className="relative w-full lg:w-80">
            <label htmlFor="service-search" className="sr-only">
              {tr(
                lang,
                'ابحث في الخدمات القانونية',
                'Search legal services',
                'قانونی خدمات تلاش کریں'
              )}
            </label>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`w-4 h-4 text-[#6E675B] absolute top-1/2 -translate-y-1/2 ${
                rtl ? 'right-3.5' : 'left-3.5'
              }`}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              id="service-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={tr(
                lang,
                'ابحث عن خدمة (مثل: عقود، تحكيم، شركات)...',
                'Search services (e.g. contracts, arbitration)...',
                'خدمت تلاش کریں (مثلاً: معاہدے، ثالثی، کمپنیاں)...'
              )}
              className={`w-full py-2.5 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-lg text-[#141414] placeholder:text-[#7A7265] focus:outline-none focus:border-[#B69648] ${
                rtl ? 'pr-10 pl-4' : 'pl-10 pr-4'
              }`}
            />
          </div>
        </div>

        {/* Interactive Filter Segmented Control */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#F0ECE1]">
          <div
            role="tablist"
            aria-label={tr(
              lang,
              'تصنيف الخدمات القانونية',
              'Legal Services Filter',
              'قانونی خدمات کی درجہ بندی'
            )}
            className="inline-flex flex-wrap items-center gap-1.5 p-1.5 bg-[#FAF8F5] border border-[#E5DEC9] rounded-lg"
          >
            {filterButtons.map((btn) => {
              const isActive = category === btn.id;
              return (
                <button
                  key={btn.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setCategory(btn.id)}
                  className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#141414] text-white shadow-xs'
                      : 'text-[#4A463D] hover:text-[#141414]'
                  }`}
                >
                  <span>{tr(lang, btn.labelAr, btn.labelEn, btn.labelUr)}</span>
                  <span className="mx-1.5 opacity-60 tabular-nums">({btn.count})</span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#5C564B] tabular-nums">
            {tr(
              lang,
              `عرض ${filteredServices.length} من أصل ${LEGAL_SERVICES.length} خدمة قانونية`,
              `Showing ${filteredServices.length} of ${LEGAL_SERVICES.length} legal services`,
              `کل ${LEGAL_SERVICES.length} میں سے ${filteredServices.length} قانونی خدمات دکھائی جا رہی ہیں`
            )}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-[#FAF8F5] rounded-xl p-12 text-center border border-[#E5DEC9]">
            <p className="text-base font-semibold text-[#141414] mb-2">
              {tr(
                lang,
                'لا توجد خدمات مطابقة لعبارة البحث',
                'No legal services match your search query',
                'آپ کی تلاش کے مطابق کوئی قانونی خدمت نہیں ملی'
              )}
            </p>
            <p className="text-sm text-[#5C564B] mb-6">
              {tr(
                lang,
                'جرب البحث بكلمات أخرى أو استعرض جميع الخدمات القانونية المتاحة.',
                'Try searching with a different keyword or reset the filter to view all services.',
                'مختلف الفاظ کے ساتھ تلاش کریں یا تمام قانونی خدمات دیکھنے کے لیے فلٹر ری سیٹ کریں۔'
              )}
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#141414] rounded-lg hover:bg-[#9A7B34] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {tr(lang, 'إعادة ضبط البحث', 'Reset Search Filter', 'تلاش ری سیٹ کریں')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const isRepresentation = service.category === 'representation';
              return (
                <article
                  key={service.id}
                  className={`rounded-2xl p-6 md:p-7 border transition-all flex flex-col justify-between ${
                    isRepresentation
                      ? 'bg-[#141414] text-white border-[#2C2821] hover:border-[#B69648]'
                      : 'bg-[#FAF8F5] text-[#141414] border-[#E5DEC9] hover:border-[#B69648]'
                  }`}
                >
                  <div>
                    {/* Top Row: Category Index + Distinct Duration Badge (شارة المدة الزمنية) */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                      <div
                        className={`flex items-center gap-1.5 text-xs font-bold ${
                          isRepresentation ? 'text-[#D1B46A]' : 'text-[#9A7B34]'
                        }`}
                      >
                        <span className="font-mono-tabular">{service.index}.</span>
                        <span>
                          {service.category === 'advisory'
                            ? tr(
                                lang,
                                'استشارات قانونية',
                                'Legal Advisory',
                                'قانونی مشاورت'
                              )
                            : tr(
                                lang,
                                'تمثيل قضائي',
                                'Representation',
                                'قانونی نمائندگی'
                              )}
                        </span>
                      </div>

                      {/* Distinct Timeframe Badge */}
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold tabular-nums border ${
                          isRepresentation
                            ? 'bg-[#1C1B18] text-[#D1B46A] border-[#B69648]/40'
                            : 'bg-white text-[#141414] border-[#D8CEB8]'
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3 h-3 text-[#9A7B34] shrink-0"
                          aria-hidden="true"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span>
                          {tr(
                            lang,
                            service.typicalTimelineAr,
                            service.typicalTimelineEn,
                            service.typicalTimelineUr
                          )}
                        </span>
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg md:text-xl font-bold mb-2.5 ${
                        isRepresentation ? 'text-white' : 'text-[#141414]'
                      }`}
                    >
                      {tr(lang, service.titleAr, service.titleEn, service.titleUr)}
                    </h3>

                    {/* Summary */}
                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        isRepresentation ? 'text-[#D5CEBF]' : 'text-[#4A463D]'
                      }`}
                    >
                      {tr(lang, service.summaryAr, service.summaryEn, service.summaryUr)}
                    </p>
                  </div>

                  {/* Card Footer Actions: Details + Pre-filled WhatsApp + Pre-filled Form Booking with Clear Arrow ← */}
                  <div
                    className={`pt-4 border-t flex flex-wrap items-center justify-between gap-2.5 ${
                      isRepresentation ? 'border-white/10' : 'border-[#E5DEC9]'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveService(service)}
                      className={`text-xs font-semibold underline-offset-4 hover:underline cursor-pointer whitespace-nowrap shrink-0 ${
                        isRepresentation
                          ? 'text-[#D1B46A] hover:text-white'
                          : 'text-[#9A7B34] hover:text-[#141414]'
                      }`}
                    >
                      {tr(
                        lang,
                        'تفاصيل المخرجات والمتطلبات',
                        'Deliverables & Docs',
                        'مخرجات اور دستاویزات'
                      )}
                    </button>

                    <div className="flex items-center gap-2">
                      {/* Direct WhatsApp link with pre-filled service message */}
                      <a
                        href={buildServiceWhatsAppUrl(service, lang)}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={tr(
                          lang,
                          `طلب خدمة ${service.titleAr} عبر واتساب`,
                          `Request ${service.titleEn} via WhatsApp`,
                          `واٹس ایپ کے ذریعے ${service.titleUr} کی درخواست`
                        )}
                        aria-label={tr(
                          lang,
                          `طلب خدمة ${service.titleAr} عبر واتساب`,
                          `Request ${service.titleEn} via WhatsApp`,
                          `واٹس ایپ کے ذریعے ${service.titleUr} کی درخواست`
                        )}
                        className={`p-2 rounded-lg border transition-colors flex items-center justify-center ${
                          isRepresentation
                            ? 'bg-[#1C1B18] border-[#B69648]/50 text-[#D1B46A] hover:bg-[#B69648] hover:text-[#141414]'
                            : 'bg-white border-[#D8CEB8] text-[#9A7B34] hover:border-[#141414] hover:text-[#141414]'
                        }`}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="w-4 h-4 fill-current"
                          aria-hidden="true"
                        >
                          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                        </svg>
                      </a>

                      {/* Request Service Button with Clean Inline Directional Arrow SVG (←) */}
                      <button
                        type="button"
                        onClick={() => onSelectServiceForBooking(service.id)}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                          isRepresentation
                            ? 'bg-[#B69648] text-[#141414] hover:bg-[#D1B46A]'
                            : 'bg-[#141414] text-white hover:bg-[#9A7B34]'
                        }`}
                      >
                        <span>
                          {tr(lang, 'طلب الخدمة', 'Request Service', 'خدمت حاصل کریں')}
                        </span>
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="w-3.5 h-3.5 shrink-0"
                          aria-hidden="true"
                        >
                          {rtl ? (
                            <>
                              <path d="M19 12H5" />
                              <path d="m12 19-7-7 7-7" />
                            </>
                          ) : (
                            <>
                              <path d="M5 12h14" />
                              <path d="m12 5 7 7-7 7" />
                            </>
                          )}
                        </svg>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* Inline Content Legal Disclaimer Notice */}
        <div className="mt-10 rounded-xl bg-[#FAF8F5] border border-[#D8CEB8] p-4 md:p-5 text-xs text-[#5C564B] leading-relaxed">
          <strong className="text-[#9A7B34]">
            {tr(
              lang,
              'إخلاء مسؤولية قانونية: ',
              'Legal Disclaimer: ',
              'قانونی دستبرداری: '
            )}
          </strong>
          {tr(
            lang,
            'المعلومات وتفاصيل الخدمات المقدمة في هذه الصفحة هي لأغراض تثقيفية وتعريفية عامة فقط ولا تغني عن الاستشارة القانونية الخاصة لكل حالة بحسب وقائعها ومستنداتها.',
            'The service descriptions and information provided on this page are for general educational purposes only and do not substitute for specialized legal counsel tailored to your specific case.',
            'اس صفحے پر فراہم کردہ خدمات کی تفصیلات اور معلومات صرف عمومی آگاہی اور معلوماتی مقاصد کے لیے ہیں اور ہر مقدمے کے مخصوص واقعات اور دستاویزات کے مطابق باقاعدہ قانونی مشورے کا متبادل نہیں ہیں۔'
          )}
        </div>

        {/* Service Details Modal Dialog */}
        {activeService && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setActiveService(null)}
          >
            <div
              className="bg-white text-[#141414] rounded-2xl max-w-2xl w-full p-6 md:p-8 border border-[#E5DEC9] shadow-xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 pb-5 mb-6 border-b border-[#E5DEC9]">
                <div>
                  <div className="text-xs font-semibold text-[#9A7B34] mb-1">
                    {activeService.index} ·{' '}
                    {activeService.category === 'advisory'
                      ? tr(
                          lang,
                          'خدمات الاستشارات القانونية',
                          'Legal Advisory Services',
                          'قانونی مشاورتی خدمات'
                        )
                      : tr(
                          lang,
                          'خدمات التمثيل القانوني',
                          'Legal Representation Services',
                          'قانونی و عدالتی نمائندگی کی خدمات'
                        )}
                  </div>
                  <h3 id="service-modal-title" className="text-xl md:text-2xl font-bold">
                    {tr(
                      lang,
                      activeService.titleAr,
                      activeService.titleEn,
                      activeService.titleUr
                    )}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  aria-label={tr(
                    lang,
                    'إغلاق التفاصيل',
                    'Close details',
                    'تفصیلات بند کریں'
                  )}
                  className="p-2 rounded-lg text-[#5C564B] hover:text-[#141414] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <p className="text-sm md:text-base text-[#3D3930] leading-relaxed mb-6">
                {tr(
                  lang,
                  activeService.summaryAr,
                  activeService.summaryEn,
                  activeService.summaryUr
                )}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Deliverables */}
                <div className="bg-[#FAF8F5] rounded-xl p-5 border border-[#E5DEC9]">
                  <h4 className="text-sm font-bold text-[#141414] mb-3 flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-[#9A7B34]"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>
                      {tr(
                        lang,
                        'المخرجات ونطاق العمل',
                        'Key Legal Deliverables',
                        'قانونی مخرجات اور کام کا دائرہ کار'
                      )}
                    </span>
                  </h4>
                  <ul className="space-y-2.5 text-xs md:text-sm text-[#4A463D]">
                    {tr(
                      lang,
                      activeService.deliverablesAr,
                      activeService.deliverablesEn,
                      activeService.deliverablesUr
                    ).map((item, idx) => (
                      <li key={idx} className="leading-relaxed">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Required Documents */}
                <div className="bg-[#FAF8F5] rounded-xl p-5 border border-[#E5DEC9]">
                  <h4 className="text-sm font-bold text-[#141414] mb-3 flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-[#9A7B34]"
                      aria-hidden="true"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                    </svg>
                    <span>
                      {tr(
                        lang,
                        'المستندات الأساسية المطلوبة',
                        'Required Initial Documents',
                        'مطلوبہ بنیادی دستاویزات'
                      )}
                    </span>
                  </h4>
                  <ul className="space-y-2.5 text-xs md:text-sm text-[#4A463D]">
                    {tr(
                      lang,
                      activeService.requiredDocsAr,
                      activeService.requiredDocsEn,
                      activeService.requiredDocsUr
                    ).map((doc, idx) => (
                      <li key={idx} className="leading-relaxed">
                        • {doc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E5DEC9]">
                <div className="flex items-center gap-2 text-xs text-[#5C564B]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 text-[#9A7B34]"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>
                    {tr(
                      lang,
                      'الإطار الزمني المعتاد:',
                      'Typical Timeline:',
                      'متوقع مدت:'
                    )}{' '}
                    <strong className="text-[#141414]">
                      {tr(
                        lang,
                        activeService.typicalTimelineAr,
                        activeService.typicalTimelineEn,
                        activeService.typicalTimelineUr
                      )}
                    </strong>
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  <a
                    href={buildServiceWhatsAppUrl(activeService, lang)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-[#141414] bg-[#D1B46A] hover:bg-[#B69648] rounded-lg transition-colors whitespace-nowrap shrink-0"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                    </svg>
                    <span>
                      {tr(
                        lang,
                        'اطلب هذه الخدمة عبر واتساب',
                        'Request via WhatsApp',
                        'واٹس ایپ پر درخواست کریں'
                      )}
                    </span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      const id = activeService.id;
                      setActiveService(null);
                      onSelectServiceForBooking(id);
                    }}
                    className="px-5 py-2.5 text-xs font-bold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {tr(
                      lang,
                      'تعبئة نموذج الحجز لهذه الخدمة ←',
                      'Fill Booking Form →',
                      'بکنگ فارم پُر کریں ←'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
