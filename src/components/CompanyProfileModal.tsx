import React from 'react';
import { X, Printer, Phone, Mail, MapPin } from 'lucide-react';
import {
  Language,
  FIRM_CONTACT,
  LEGAL_SERVICES,
  FIRM_VALUES,
  FIRM_GOALS,
  TEAM_PILLARS,
  tr,
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
              {tr(
                lang,
                'الملف التعريفي الرسمي',
                'Official Company Profile',
                'کمپنی کا سرکاری پروفائل'
              )}
            </span>
            <h2 id="profile-modal-title" className="text-base md:text-lg font-bold">
              {tr(
                lang,
                FIRM_CONTACT.firmNameAr,
                FIRM_CONTACT.firmNameEn,
                FIRM_CONTACT.firmNameUr
              )}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#B69648] text-[#141414] rounded-md hover:bg-[#D1B46A] transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>
                {tr(lang, 'طباعة / حفظ PDF', 'Print / Save PDF', 'پرنٹ / پی ڈی ایف محفوظ کریں')}
              </span>
            </button>
            <button
              type="button"
              onClick={onClose}
              aria-label={tr(
                lang,
                'إغلاق الملف التعريفي',
                'Close company profile',
                'کمپنی پروفائل بند کریں'
              )}
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
            <img
              src="/logo.png"
              alt={tr(
                lang,
                'شعار شركة سامي الشريف للمحاماة والاستشارات القانونية',
                'Sami Al-Sharif Law Firm Logo',
                'سامی الشریف لاء فرم لوگو'
              )}
              className="w-20 h-20 object-contain mx-auto mb-3"
            />
            <div className="font-calligraphy text-2xl md:text-3xl text-[#D1B46A] mb-2">
              {lang === 'ur' ? FIRM_CONTACT.firmNameUr : FIRM_CONTACT.firmNameAr}
            </div>
            <div className="text-xs tracking-[0.15em] text-[#C2B69C] mb-6">
              SAMI AL-SHARIF LAW FIRM & LEGAL CONSULTATIONS
            </div>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90 leading-relaxed">
              {tr(
                lang,
                'نتشرف في شركة سامي الشريف للمحاماة والاستشارات القانونية بتقديم خدمات واستشارات قانونية شاملة وموثوقة، تلبي الاحتياجات المتجددة لقطاع الأعمال والمؤسسات والأفراد.',
                'At Sami Al-Sharif Law Firm & Legal Consultations, we are honored to deliver comprehensive and trusted legal services tailored to the evolving needs of business sectors, entities, and individuals.',
                'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز میں ہمیں کاروباری شعبوں، اداروں اور افراد کی بدلتی ہوئی ضروریات کو پورا کرنے کے لیے جامع اور قابلِ اعتماد قانونی خدمات و مشاورت فراہم کرنے کا شرف حاصل ہے۔'
              )}
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#B69648] text-white rounded-xl p-6">
              <div className="text-xs font-semibold mb-2">
                {tr(
                  lang,
                  'رؤيتنا | Our Vision',
                  'Our Vision | رؤيتنا',
                  'ہمارا وژن | Our Vision'
                )}
              </div>
              <p className="text-sm leading-relaxed">
                {tr(
                  lang,
                  'أن نكون عنواناً للخدمات والاستشارات القانونية الاحترافية والتخصصية بطرق مبتكرة وغير تقليدية لكسب ثقة العملاء والتركيز على تحقيق رضاهم وتجاوز توقعاتهم.',
                  'To be the benchmark for professional and specialized legal services through innovative and unconventional approaches, earning client trust and exceeding expectations.',
                  'جدید اور منفرد طریقوں سے پیشہ ورانہ اور خصوصی قانونی خدمات و مشاورت کا اولین مرکز بننا، تاکہ مؤکلین کا اعتماد حاصل کیا جا سکے اور ان کی توقعات سے بڑھ کر اطمینان یقینی بنایا جا سکے۔'
                )}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <div className="text-xs font-semibold text-[#9A7B34] mb-2">
                {tr(lang, 'رسالتنا · 01', 'Our Mission · 01', 'ہمارا مشن · 01')}
              </div>
              <h3 className="text-base font-bold mb-2">
                {tr(
                  lang,
                  'الصدارة والسمعة المرموقة',
                  'Leadership & Reputation',
                  'قیادت اور باوقار ساکھ'
                )}
              </h3>
              <p className="text-xs text-[#4A463D] leading-relaxed">
                {tr(
                  lang,
                  'نحرص على المحافظة على سمعتنا المرموقة والبقاء في صدارة مكاتب المحاماة محلياً وإقليمياً ودولياً، عبر التوظيف الأمثل للخبرات الطويلة.',
                  'Maintaining our prestigious reputation and leading law firms locally and internationally.',
                  'اپنی باوقار ساکھ کو برقرار رکھنا اور مقامی و بین الاقوامی سطح پر سرِفہرست لاء فرمز میں شامل رہنا۔'
                )}
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <div className="text-xs font-semibold text-[#9A7B34] mb-2">
                {tr(lang, 'رسالتنا · 02', 'Our Mission · 02', 'ہمارا مشن · 02')}
              </div>
              <h3 className="text-base font-bold mb-2">
                {tr(
                  lang,
                  'التقنية والجودة العالية',
                  'Technology & High Quality',
                  'جدید ٹیکنالوجی اور اعلیٰ معیار'
                )}
              </h3>
              <p className="text-xs text-[#4A463D] leading-relaxed">
                {tr(
                  lang,
                  'نسعى للريادة عبر توفير تمثيل ورعاية قانونية راقية وفقاً لأعلى المستويات وأفضل الممارسات الدولية، باستعمال التقنيات الحديثة.',
                  'Providing top-tier legal representation adhering to the highest international practices.',
                  'جدید قانونی ٹیکنالوجی اور اعلیٰ ترین بین الاقوامی معیارات کے مطابق بہترین قانونی نمائندگی فراہم کرنا۔'
                )}
              </p>
            </div>
          </div>

          {/* Values & Goals */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <h3 className="text-base font-bold mb-3 text-[#141414]">
                {tr(
                  lang,
                  'قيمنا | Our Values',
                  'Our Values | قيمنا',
                  'ہماری اقدار | Our Values'
                )}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#4A463D]">
                {FIRM_VALUES.map((v) => (
                  <li key={v.id}>
                    <strong className="text-[#141414]">
                      {tr(lang, v.titleAr, v.titleEn, v.titleUr)}:
                    </strong>{' '}
                    {tr(lang, v.descAr, v.descEn, v.descUr)}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <h3 className="text-base font-bold mb-3 text-[#141414]">
                {tr(
                  lang,
                  'أهدافنا | Our Goals',
                  'Our Goals | أهدافنا',
                  'ہمارے اہداف | Our Goals'
                )}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#4A463D]">
                {FIRM_GOALS.map((g) => (
                  <li key={g.id}>
                    <strong className="text-[#9A7B34] font-mono-tabular">
                      {g.index}.
                    </strong>{' '}
                    {tr(lang, g.titleAr, g.titleEn, g.titleUr)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Services Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 border border-[#E5DEC9]">
              <h3 className="text-base font-bold mb-3 text-[#141414]">
                {tr(
                  lang,
                  `خدمات الاستشارات القانونية (${advisoryServices.length})`,
                  `Legal Advisory Services (${advisoryServices.length})`,
                  `قانونی مشاورتی خدمات (${advisoryServices.length})`
                )}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#4A463D]">
                {advisoryServices.map((s) => (
                  <li key={s.id}>
                    <span className="font-mono-tabular font-bold text-[#9A7B34]">
                      {s.index}.
                    </span>{' '}
                    <strong className="text-[#141414]">
                      {tr(lang, s.titleAr, s.titleEn, s.titleUr)}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#141414] text-white rounded-xl p-6">
              <h3 className="text-base font-bold mb-3 text-[#D1B46A]">
                {tr(
                  lang,
                  `خدمات التمثيل القانوني (${representationServices.length})`,
                  `Legal Representation Services (${representationServices.length})`,
                  `قانونی و عدالتی نمائندگی کی خدمات (${representationServices.length})`
                )}
              </h3>
              <ul className="space-y-2 text-xs md:text-sm text-[#D5CEBF]">
                {representationServices.map((s) => (
                  <li key={s.id}>
                    <span className="font-mono-tabular font-bold text-[#D1B46A]">
                      {s.index}.
                    </span>{' '}
                    <strong className="text-white">
                      {tr(lang, s.titleAr, s.titleEn, s.titleUr)}
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
                {tr(lang, 'فريق عملنا:', 'Our Team:', 'ہماری ٹیم:')}{' '}
                {TEAM_PILLARS.map((t) =>
                  tr(lang, t.titleAr, t.titleEn, t.titleUr)
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
                    {tr(
                      lang,
                      `${FIRM_CONTACT.locationAr} (خرائط قوقل)`,
                      `${FIRM_CONTACT.locationEn} (Google Maps)`,
                      `${FIRM_CONTACT.locationUr} (گوگل میپس)`
                    )}
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
                  <span>
                    {tr(lang, 'واتساب الاستشارات:', 'WhatsApp:', 'واٹس ایپ مشاورت:')}
                  </span>
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
              {tr(lang, 'إغلاق الملف التعريفي', 'Close Profile', 'پروفائل بند کریں')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
