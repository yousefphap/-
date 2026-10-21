import React from 'react';
import { X, Printer, Phone, Mail, MapPin } from 'lucide-react';
import {
  Language,
  FIRM_CONTACT,
  LEGAL_SERVICES,
  FIRM_VALUES,
  FIRM_GOALS,
  TEAM_PILLARS,
} from '../utils/lawFirmLogic';

interface CompanyProfileModalProps {
  isOpen: boolean;
  lang: Language;
  onClose: () => void;
}

export const CompanyProfileModal: React.FC<CompanyProfileModalProps> = ({
  isOpen,
  lang,
  onClose,
}) => {
  if (!isOpen) return null;

  const advisoryServices = LEGAL_SERVICES.filter((s) => s.category === 'advisory');
  const representationServices = LEGAL_SERVICES.filter(
    (s) => s.category === 'representation'
  );

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="profile-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="bg-[#FAF8F5] text-[#141414] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-[#B69648] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Sticky Header */}
        <div className="sticky top-0 z-10 bg-[#141414] text-white px-6 py-4 flex items-center justify-between border-b border-[#B69648]/40">
          <div>
            <span className="text-xs text-[#D1B46A] font-semibold block">
              {lang === 'ar' ? 'الملف التعريفي الرسمي' : 'Official Company Profile'}
            </span>
            <h2 id="profile-modal-title" className="text-base md:text-lg font-bold">
              {lang === 'ar' ? FIRM_CONTACT.firmNameAr : FIRM_CONTACT.firmNameEn}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#B69648] text-[#141414] rounded-md hover:bg-[#D1B46A] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'طباعة / حفظ PDF' : 'Print / Save PDF'}</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={lang === 'ar' ? 'إغلاق الملف التعريفي' : 'Close company profile'}
              className="p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Complete Structured Summary of the 21-Page Profile */}
        <div className="p-6 md:p-10 space-y-10">
          {/* Cover Header */}
          <div className="bg-[#141414] text-white rounded-2xl p-8 text-center border border-[#B69648]/40">
            <div className="font-calligraphy text-2xl md:text-3xl text-[#D1B46A] mb-2">
              شركة سامي الشريف للمحاماة والاستشارات القانونية
            </div>
            <div className="text-xs tracking-[0.15em] text-[#C2B69C] mb-6">
              SAMI AL-SHARIF LAW FIRM & LEGAL CONSULTATIONS
            </div>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90 leading-relaxed">
              {lang === 'ar'
                ? 'نتشرف في شركة سامي الشريف للمحاماة والاستشارات القانونية بتقديم خدمات واستشارات قانونية شاملة وموثوقة، تلبي الاحتياجات المتجددة لقطاع الأعمال والمؤسسات والأفراد.'
                : 'At Sami Al-Sharif Law Firm & Legal Consultations, we are honored to deliver comprehensive and trusted legal services tailored to the evolving needs of business sectors, entities, and individuals.'}
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#B69648] text-white rounded-xl p-6">
              <div className="text-xs font-semibold mb-2">
                {lang === 'ar' ? 'رؤيتنا | Our Vision' : 'Our Vision | رؤيتنا'}
              </div>
              <p className="text-sm leading-relaxed">
                {lang === 'ar'
                  ? 'أن نكون عنواناً للخدمات والاستشارات القانونية الاحترافية والتخصصية بطرق مبتكرة وغير تقليدية لكسب ثقة العملاء والتركيز على تحقيق رضاهم وتجاوز توقعاتهم.'
                  : 'To be the benchmark for professional and specialized legal services through innovative and unconventional approaches, earning client trust and exceeding expectations.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <div className="text-xs font-semibold text-[#9A7B34] mb-2">
                {lang === 'ar' ? 'رسالتنا · 01' : 'Our Mission · 01'}
              </div>
              <h3 className="text-base font-bold mb-2">
                {lang === 'ar' ? 'الصدارة والسمعة المرموقة' : 'Leadership & Reputation'}
              </h3>
              <p className="text-xs text-[#4A463D] leading-relaxed">
                {lang === 'ar'
                  ? 'نحرص على المحافظة على سمعتنا المرموقة والبقاء في صدارة مكاتب المحاماة محلياً وإقليمياً ودولياً، عبر التوظيف الأمثل للخبرات الطويلة.'
                  : 'Maintaining our prestigious reputation and leading law firms locally and internationally.'}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <div className="text-xs font-semibold text-[#9A7B34] mb-2">
                {lang === 'ar' ? 'رسالتنا · 02' : 'Our Mission · 02'}
              </div>
              <h3 className="text-base font-bold mb-2">
                {lang === 'ar' ? 'التقنية والجودة العالية' : 'Technology & High Quality'}
              </h3>
              <p className="text-xs text-[#4A463D] leading-relaxed">
                {lang === 'ar'
                  ? 'نسعى للريادة عبر توفير تمثيل ورعاية قانونية راقية وفقاً لأعلى المستويات وأفضل الممارسات الدولية، باستعمال التقنيات الحديثة.'
                  : 'Providing top-tier legal representation adhering to the highest international practices.'}
              </p>
            </div>
          </div>

          {/* Values & Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <h3 className="text-base font-bold mb-3 text-[#141414]">
                {lang === 'ar' ? 'قيمنا | Our Values' : 'Our Values | قيمنا'}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#4A463D]">
                {FIRM_VALUES.map((v) => (
                  <li key={v.id}>
                    <strong className="text-[#141414]">
                      {lang === 'ar' ? v.titleAr : v.titleEn}:
                    </strong>{' '}
                    {lang === 'ar' ? v.descAr : v.descEn}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <h3 className="text-base font-bold mb-3 text-[#141414]">
                {lang === 'ar' ? 'أهدافنا | Our Goals' : 'Our Goals | أهدافنا'}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#4A463D]">
                {FIRM_GOALS.map((g) => (
                  <li key={g.id}>
                    <strong className="text-[#9A7B34] font-mono-tabular">
                      {g.index}.
                    </strong>{' '}
                    {lang === 'ar' ? g.titleAr : g.titleEn}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <h3 className="text-base font-bold mb-3 text-[#141414]">
                {lang === 'ar'
                  ? 'خدمات الاستشارات القانونية (6)'
                  : 'Legal Advisory Services (6)'}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#4A463D]">
                {advisoryServices.map((s) => (
                  <li key={s.id}>
                    <span className="font-mono-tabular font-bold text-[#9A7B34]">
                      {s.index}.
                    </span>{' '}
                    <strong className="text-[#141414]">
                      {lang === 'ar' ? s.titleAr : s.titleEn}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#141414] text-white rounded-xl p-6">
              <h3 className="text-base font-bold mb-3 text-[#D1B46A]">
                {lang === 'ar'
                  ? 'خدمات التمثيل القانوني (8)'
                  : 'Legal Representation Services (8)'}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#D5CEBF]">
                {representationServices.map((s) => (
                  <li key={s.id}>
                    <span className="font-mono-tabular font-bold text-[#D1B46A]">
                      {s.index}.
                    </span>{' '}
                    <strong className="text-white">
                      {lang === 'ar' ? s.titleAr : s.titleEn}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Team & Contact Footer */}
          <div className="bg-white rounded-xl p-6 border border-[#E5DEC9] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
            <div>
              <div className="font-bold text-[#141414] mb-1">
                {lang === 'ar' ? 'فريق عملنا:' : 'Our Team:'}{' '}
                {TEAM_PILLARS.map((t) =>
                  lang === 'ar' ? t.titleAr : t.titleEn
                ).join(' · ')}
              </div>
              <div className="text-[#5C564B] flex flex-wrap items-center gap-4 mt-2">
                <a
                  href={FIRM_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-[#141414] hover:text-[#9A7B34] hover:underline"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#9A7B34]" />
                  <span>
                    {lang === 'ar'
                      ? `${FIRM_CONTACT.locationAr} (خرائط قوقل)`
                      : `${FIRM_CONTACT.locationEn} (Google Maps)`}
                  </span>
                </a>
                <span className="inline-flex items-center gap-1 font-mono-tabular">
                  <Phone className="w-3.5 h-3.5 text-[#9A7B34]" />
                  {FIRM_CONTACT.phoneDisplay}
                </span>
                <a
                  href={FIRM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-mono-tabular font-semibold text-[#9A7B34] hover:underline"
                >
                  <span>{lang === 'ar' ? 'واتساب الاستشارات:' : 'WhatsApp:'}</span>
                  <span>{FIRM_CONTACT.whatsappDisplay}</span>
                </a>
                <span className="inline-flex items-center gap-1 font-mono-tabular">
                  <Mail className="w-3.5 h-3.5 text-[#9A7B34]" />
                  {FIRM_CONTACT.email}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#141414] rounded-lg hover:bg-[#9A7B34] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              {lang === 'ar' ? 'إغلاق الملف التعريفي' : 'Close Profile'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
