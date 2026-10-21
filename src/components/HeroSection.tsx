import React from 'react';
import { FileText, ArrowUpLeft, ArrowUpRight, PhoneCall, MapPin } from 'lucide-react';
import { Language, FIRM_CONTACT, isRtl, tr } from '../utils/lawFirmLogic';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeroSectionProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenProfileModal: () => void;
  onBookConsultation: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onSelectLang,
  onOpenProfileModal,
  onBookConsultation,
}) => {
  const ArrowIcon = isRtl(lang) ? ArrowUpLeft : ArrowUpRight;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#E5DEC9] bg-gradient-to-b from-[#FAF8F5] to-[#F3EFE6]"
    >
      {/* Subtle architectural grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(182, 150, 72, 0.14), transparent 45%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 pt-8 pb-16 lg:py-20 relative z-10">
        {/* Utility Sub-bar: Regional Trust Signal & Multi-Language Switcher (العربية | English | اردو) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-[#E5DEC9]/80">
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#5C564B]">
            <span className="font-semibold text-[#9A7B34]">
              {tr(
                lang,
                'المملكة العربية السعودية',
                'Kingdom of Saudi Arabia',
                'مملکتِ سعودی عرب'
              )}
            </span>
            <span aria-hidden="true">·</span>
            <a
              href={FIRM_CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-[#141414] hover:text-[#9A7B34] hover:underline transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#9A7B34]" />
              <span>
                {tr(
                  lang,
                  'مكة المكرمة - جدة (خرائط قوقل)',
                  'Makkah - Jeddah (Google Maps)',
                  'مکہ مکرمہ - جدہ (گوگل میپس)'
                )}
              </span>
            </a>
            <span aria-hidden="true">·</span>
            <a
              href={FIRM_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-[#9A7B34] hover:underline tabular-nums"
            >
              <span>
                {tr(lang, 'واتساب الاستشارات:', 'WhatsApp:', 'واٹس ایپ مشاورت:')}
              </span>
              <span>{FIRM_CONTACT.whatsappDisplay}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenProfileModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-[#141414] bg-white border border-[#D8CEB8] rounded-lg hover:border-[#B69648] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#9A7B34]" />
              <span>
                {tr(
                  lang,
                  'الملف التعريفي للشركة',
                  'Company Profile',
                  'کمپنی پروفائل'
                )}
              </span>
            </button>

            <LanguageSwitcher lang={lang} onSelectLang={onSelectLang} />
          </div>
        </div>

        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Column 1: Proposition & Primary Action (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-2">
            <div>
              <p className="text-xs md:text-sm font-semibold text-[#9A7B34] mb-4">
                {tr(
                  lang,
                  'شركة محاماة واستشارات قانونية مرخصة · تمثيل قضائي واستشارات تخصصية',
                  'Licensed Law Firm & Legal Consultations · Judicial Advocacy & Corporate Advisory',
                  'لائسنس یافتہ لاء فرم اور قانونی مشاورت · عدالتی پیروی اور کارپوریٹ مشاورت'
                )}
              </p>

              <h1
                className={`text-3xl sm:text-4xl lg:text-[46px] font-bold text-[#141414] leading-[1.22] mb-6 max-w-2xl ${
                  lang === 'en' ? 'font-en-display tracking-tight' : ''
                }`}
                style={{ textWrap: 'balance' }}
              >
                {tr(
                  lang,
                  FIRM_CONTACT.firmNameAr,
                  FIRM_CONTACT.firmNameEn,
                  FIRM_CONTACT.firmNameUr
                )}
              </h1>

              <p className="text-base md:text-lg text-[#433E35] leading-relaxed mb-8 max-w-2xl">
                {tr(
                  lang,
                  'نتشرف في شركة سامي الشريف للمحاماة والاستشارات القانونية بتقديم خدمات واستشارات قانونية شاملة وموثوقة، تلبي الاحتياجات المتجددة لقطاع الأعمال والمؤسسات والأفراد وفق أعلى المعايير المهنية وأفضل الممارسات الدولية.',
                  'At Sami Al-Sharif Law Firm & Legal Consultations, we are honored to deliver comprehensive and trusted legal services tailored to the evolving needs of business sectors, entities, and individuals.',
                  'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز میں ہمیں اعلیٰ ترین پیشہ ورانہ معیارات اور بہترین بین الاقوامی طریقوں کے مطابق کاروباری شعبوں، اداروں اور افراد کی بدلتی ہوئی ضروریات کو پورا کرنے کے لیے جامع اور قابلِ اعتماد قانونی خدمات فراہم کرنے کا شرف حاصل ہے۔'
                )}
              </p>

              {/* CTA Group: Primary Booking + WhatsApp Consultation + Secondary Link */}
              <div className="flex flex-wrap items-center gap-3.5 mb-10">
                <a
                  href={FIRM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm md:text-base font-semibold text-[#141414] bg-[#D1B46A] hover:bg-[#B69648] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 shadow-sm"
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
                      `تواصل عبر الواتساب واحصل على استشارة · ${FIRM_CONTACT.whatsappDisplay}`,
                      `WhatsApp Consultation · ${FIRM_CONTACT.whatsappDisplay}`,
                      `واٹس ایپ کے ذریعے قانونی مشاورت · ${FIRM_CONTACT.whatsappDisplay}`
                    )}
                  </span>
                </a>

                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm md:text-base font-semibold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-sm"
                >
                  <span>
                    {tr(
                      lang,
                      'طلب استشارة عبر النموذج',
                      'Book Consultation Form',
                      'فارم کے ذریعے مشاورت کی درخواست'
                    )}
                  </span>
                  <ArrowIcon className="w-4 h-4" />
                </button>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-sm md:text-base font-semibold text-[#141414] bg-white border border-[#D8CEB8] hover:border-[#141414] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0"
                >
                  <span>
                    {tr(
                      lang,
                      'استعراض الخدمات القانونية',
                      'Explore Legal Services',
                      'قانونی خدمات دیکھیں'
                    )}
                  </span>
                </a>
              </div>
            </div>

            {/* Quiet Unboxed Key Facts Strip */}
            <div className="pt-6 border-t border-[#E5DEC9] grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#141414] tabular-nums">
                  14
                </div>
                <div className="text-xs md:text-sm text-[#5C564B] mt-1 leading-snug">
                  {tr(
                    lang,
                    'خدمة استشارية وقضائية',
                    'Legal & Judicial Services',
                    'مشاورتی اور عدالتی خدمات'
                  )}
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#141414] tabular-nums">
                  3
                </div>
                <div className="text-xs md:text-sm text-[#5C564B] mt-1 leading-snug">
                  {tr(
                    lang,
                    'ركائز تخصصية محترفة',
                    'Specialist Practice Pillars',
                    'مخصوص پیشہ ورانہ شعبے'
                  )}
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-[#9A7B34] tabular-nums">
                  100%
                </div>
                <div className="text-xs md:text-sm text-[#5C564B] mt-1 leading-snug">
                  {tr(
                    lang,
                    'التزام بالسرية المهنية',
                    'Client Confidentiality',
                    'پیشہ ورانہ رازداری کا عزم'
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Official Brand Identity & Vision Showcase Card (5 cols) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl bg-[#141414] text-white p-8 md:p-10 flex flex-col justify-between border border-[#B69648]/40 relative overflow-hidden">
              {/* Subtle top gold hairline accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#967832] via-[#D1B46A] to-[#967832]"
              />

              {/* Official Firm Title Lockup */}
              <div className="flex flex-col items-center text-center pt-2 pb-6 border-b border-white/10">
                <div className="font-calligraphy text-2xl md:text-3xl text-[#D1B46A] leading-relaxed mb-2">
                  {lang === 'ur' ? FIRM_CONTACT.firmNameUr : FIRM_CONTACT.firmNameAr}
                </div>
                <div className="text-[11px] tracking-[0.14em] text-[#C2B69C] font-medium">
                  SAMI ALSHAREEF LAWFIRM AND LEGAL CONSULTATIONS
                </div>
              </div>

              {/* Vision Statement from Slide 4 & 13 */}
              <div className="my-6">
                <div className="text-xs font-semibold text-[#D1B46A] mb-2">
                  {tr(
                    lang,
                    'رؤيتنا · Our Vision',
                    'Our Vision · رؤيتنا',
                    'ہمارا وژن · Our Vision'
                  )}
                </div>
                <p className="text-sm md:text-base text-white/90 leading-relaxed">
                  {tr(
                    lang,
                    '«أن نكون عنواناً للخدمات والاستشارات القانونية الاحترافية والتخصصية بطرق مبتكرة وغير تقليدية لكسب ثقة العملاء والتركيز على تحقيق رضاهم وتجاوز توقعاتهم.»',
                    '“To be the benchmark for professional and specialized legal services through innovative and unconventional approaches, earning client trust and exceeding expectations.”',
                    '«جدید اور منفرد طریقوں سے پیشہ ورانہ اور خصوصی قانونی خدمات و مشاورت کا اولین مرکز بننا، تاکہ مؤکلین کا اعتماد حاصل کیا جا سکے اور ان کی توقعات سے بڑھ کر اطمینان یقینی بنایا جا سکے۔»'
                  )}
                </p>
              </div>

              {/* Direct Quick Contact Bar */}
              <div className="pt-5 border-t border-white/10 flex flex-col gap-3 text-xs text-[#D5CEBF]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[#D1B46A] font-semibold mb-0.5">
                      {tr(
                        lang,
                        'احصل على استشارة عبر الواتساب',
                        'WhatsApp Legal Consultation',
                        'واٹس ایپ پر قانونی مشاورت حاصل کریں'
                      )}
                    </div>
                    <div className="tabular-nums text-white font-bold text-sm">
                      {FIRM_CONTACT.whatsappDisplay}
                    </div>
                  </div>
                  <a
                    href={FIRM_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md bg-[#B69648] text-[#141414] font-semibold hover:bg-[#D1B46A] transition-colors whitespace-nowrap shrink-0"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 fill-current shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                    </svg>
                    <span>{tr(lang, 'تواصل واتساب', 'WhatsApp', 'واٹس ایپ رابطہ')}</span>
                  </a>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="tabular-nums text-white/80 font-medium">
                    {FIRM_CONTACT.phoneDisplay} · {FIRM_CONTACT.email}
                  </div>
                  <a
                    href={`tel:${FIRM_CONTACT.phoneInternational}`}
                    className="inline-flex items-center gap-1.5 text-[#D1B46A] hover:underline font-semibold whitespace-nowrap shrink-0"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>{tr(lang, 'اتصال هاتفي', 'Call', 'فون کال')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
