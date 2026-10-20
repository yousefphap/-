import React, { useState } from 'react';
import {
  Search,
  Check,
  FileText,
  Clock,
  ArrowUpLeft,
  ArrowUpRight,
  X,
} from 'lucide-react';
import {
  Language,
  LegalService,
  ServiceCategory,
  LEGAL_SERVICES,
  filterServices,
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
  const ArrowIcon = lang === 'ar' ? ArrowUpLeft : ArrowUpRight;

  const filterButtons: { id: ServiceCategory; labelAr: string; labelEn: string; count: number }[] = [
    { id: 'all', labelAr: 'جميع الخدمات', labelEn: 'All Services', count: 14 },
    {
      id: 'advisory',
      labelAr: 'خدمات الاستشارات القانونية',
      labelEn: 'Legal Advisory',
      count: 6,
    },
    {
      id: 'representation',
      labelAr: 'خدمات التمثيل القانوني',
      labelEn: 'Legal Representation',
      count: 8,
    },
  ];

  return (
    <section id="services" className="py-20 bg-white border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header (Slide 8 & 17) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-[#9A7B34] mb-2">
              {lang === 'ar'
                ? '02. خدماتنا القانونية · Our Legal Services'
                : '02. Our Legal Services · خدماتنا القانونية'}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'ar'
                ? 'منظومة متكاملة من الاستشارات والتمثيل القضائي'
                : 'Integrated System of Legal Consultations & Judicial Representation'}
            </h2>
          </div>

          {/* Interactive Search Input */}
          <div className="relative w-full lg:w-80">
            <label htmlFor="service-search" className="sr-only">
              {lang === 'ar' ? 'ابحث في الخدمات القانونية' : 'Search legal services'}
            </label>
            <Search
              className={`w-4 h-4 text-[#6E675B] absolute top-1/2 -translate-y-1/2 ${
                lang === 'ar' ? 'right-3.5' : 'left-3.5'
              }`}
            />
            <input
              id="service-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'ar'
                  ? 'ابحث عن خدمة (مثل: عقود، تحكيم، شركات)...'
                  : 'Search services (e.g. contracts, arbitration)...'
              }
              className={`w-full py-2.5 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-lg text-[#141414] placeholder:text-[#7A7265] focus:outline-none focus:border-[#B69648] ${
                lang === 'ar' ? 'pr-10 pl-4' : 'pl-10 pr-4'
              }`}
            />
          </div>
        </div>

        {/* Interactive Filter Segmented Control */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#F0ECE1]">
          <div
            role="tablist"
            aria-label={lang === 'ar' ? 'تصنيف الخدمات القانونية' : 'Legal Services Filter'}
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
                  <span>{lang === 'ar' ? btn.labelAr : btn.labelEn}</span>
                  <span className="mx-1.5 opacity-60 tabular-nums">({btn.count})</span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-[#5C564B] tabular-nums">
            {lang === 'ar'
              ? `عرض ${filteredServices.length} من أصل ${LEGAL_SERVICES.length} خدمة قانونية`
              : `Showing ${filteredServices.length} of ${LEGAL_SERVICES.length} legal services`}
          </div>
        </div>

        {/* Services Grid */}
        {filteredServices.length === 0 ? (
          <div className="bg-[#FAF8F5] rounded-xl p-12 text-center border border-[#E5DEC9]">
            <p className="text-base font-semibold text-[#141414] mb-2">
              {lang === 'ar'
                ? 'لا توجد خدمات مطابقة لعبارة البحث'
                : 'No legal services match your search query'}
            </p>
            <p className="text-sm text-[#5C564B] mb-6">
              {lang === 'ar'
                ? 'جرب البحث بكلمات أخرى أو استعرض جميع الخدمات القانونية المتاحة.'
                : 'Try searching with a different keyword or reset the filter to view all services.'}
            </p>
            <button
              type="button"
              onClick={() => {
                setCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#141414] rounded-lg hover:bg-[#9A7B34] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {lang === 'ar' ? 'إعادة ضبط البحث' : 'Reset Search Filter'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const isRepresentation = service.category === 'representation';
              return (
                <article
                  key={service.id}
                  className={`rounded-xl p-7 border transition-colors flex flex-col justify-between ${
                    isRepresentation
                      ? 'bg-[#141414] text-white border-[#2C2821] hover:border-[#B69648]'
                      : 'bg-[#FAF8F5] text-[#141414] border-[#E5DEC9] hover:border-[#B69648]'
                  }`}
                >
                  <div>
                    {/* Quiet 1-line unboxed metadata with typographic separator */}
                    <div
                      className={`flex items-center justify-between gap-2 text-xs mb-4 ${
                        isRepresentation ? 'text-[#D1B46A]' : 'text-[#9A7B34]'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-medium">
                        <span className="font-mono-tabular font-bold">
                          {service.index}.
                        </span>
                        <span>
                          {service.category === 'advisory'
                            ? lang === 'ar'
                              ? 'خدمات الاستشارات'
                              : 'Legal Advisory'
                            : lang === 'ar'
                            ? 'التمثيل القانوني'
                            : 'Representation'}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">
                          {lang === 'ar'
                            ? service.typicalTimelineAr
                            : service.typicalTimelineEn}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-lg md:text-xl font-bold mb-2.5 ${
                        isRepresentation ? 'text-white' : 'text-[#141414]'
                      }`}
                    >
                      {lang === 'ar' ? service.titleAr : service.titleEn}
                    </h3>

                    {/* Summary */}
                    <p
                      className={`text-sm leading-relaxed mb-6 ${
                        isRepresentation ? 'text-[#D5CEBF]' : 'text-[#4A463D]'
                      }`}
                    >
                      {lang === 'ar' ? service.summaryAr : service.summaryEn}
                    </p>
                  </div>

                  {/* Card Footer Actions */}
                  <div
                    className={`pt-4 border-t flex items-center justify-between gap-3 ${
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
                      {lang === 'ar'
                        ? 'تفاصيل المخرجات والمتطلبات'
                        : 'Deliverables & Requirements'}
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectServiceForBooking(service.id)}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                        isRepresentation
                          ? 'bg-[#B69648] text-[#141414] hover:bg-[#D1B46A]'
                          : 'bg-[#141414] text-white hover:bg-[#9A7B34]'
                      }`}
                    >
                      <span>{lang === 'ar' ? 'طلب الخدمة' : 'Request Service'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        )}

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
                      ? lang === 'ar'
                        ? 'خدمات الاستشارات القانونية'
                        : 'Legal Advisory Services'
                      : lang === 'ar'
                      ? 'خدمات التمثيل القانوني'
                      : 'Legal Representation Services'}
                  </div>
                  <h3 id="service-modal-title" className="text-xl md:text-2xl font-bold">
                    {lang === 'ar' ? activeService.titleAr : activeService.titleEn}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveService(null)}
                  aria-label={lang === 'ar' ? 'إغلاق التفاصيل' : 'Close details'}
                  className="p-2 rounded-lg text-[#5C564B] hover:text-[#141414] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-sm md:text-base text-[#3D3930] leading-relaxed mb-6">
                {lang === 'ar' ? activeService.summaryAr : activeService.summaryEn}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Deliverables */}
                <div className="bg-[#FAF8F5] rounded-xl p-5 border border-[#E5DEC9]">
                  <h4 className="text-sm font-bold text-[#141414] mb-3 flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#9A7B34]" />
                    <span>
                      {lang === 'ar'
                        ? 'المخرجات ونطاق العمل'
                        : 'Key Legal Deliverables'}
                    </span>
                  </h4>
                  <ul className="space-y-2.5 text-xs md:text-sm text-[#4A463D]">
                    {(lang === 'ar'
                      ? activeService.deliverablesAr
                      : activeService.deliverablesEn
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
                    <FileText className="w-4 h-4 text-[#9A7B34]" />
                    <span>
                      {lang === 'ar'
                        ? 'المستندات الأساسية المطلوبة'
                        : 'Required Initial Documents'}
                    </span>
                  </h4>
                  <ul className="space-y-2.5 text-xs md:text-sm text-[#4A463D]">
                    {(lang === 'ar'
                      ? activeService.requiredDocsAr
                      : activeService.requiredDocsEn
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
                  <Clock className="w-4 h-4 text-[#9A7B34]" />
                  <span>
                    {lang === 'ar' ? 'الإطار الزمني المعتاد:' : 'Typical Timeline:'}{' '}
                    <strong className="text-[#141414]">
                      {lang === 'ar'
                        ? activeService.typicalTimelineAr
                        : activeService.typicalTimelineEn}
                    </strong>
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveService(null)}
                    className="px-4 py-2 text-xs font-semibold text-[#4A463D] bg-[#FAF8F5] hover:bg-[#E5DEC9] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {lang === 'ar' ? 'إغلاق' : 'Close'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      const id = activeService.id;
                      setActiveService(null);
                      onSelectServiceForBooking(id);
                    }}
                    className="px-5 py-2.5 text-xs font-semibold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                  >
                    {lang === 'ar'
                      ? 'اعتماد الخدمة وحجز استشارة'
                      : 'Book Consultation for This Service'}
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
