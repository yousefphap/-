import React from 'react';
import {
  Language,
  FIRM_CONTACT,
  TRUST_BAR_ITEMS,
  isRtl,
  tr,
} from '../utils/lawFirmLogic';
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
  const rtl = isRtl(lang);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#E5DEC9] bg-gradient-to-b from-[#FAF8F5] to-[#F3EFE6]"
    >
      {/* Subtle architectural radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 20%, rgba(182, 150, 72, 0.16), transparent 48%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 pt-6 pb-12 lg:py-16 relative z-10">
        {/* Utility Sub-bar: Regional Trust Signal & Multi-Language Switcher (العربية | English | اردو) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E5DEC9]/90">
          <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm text-[#5C564B]">
            <span className="font-bold text-[#9A7B34]">
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
              className="inline-flex items-center gap-1.5 font-semibold text-[#141414] hover:text-[#9A7B34] hover:underline transition-colors"
            >
              {/* Clean Inline SVG MapPin */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-[#9A7B34] shrink-0"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
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
              className="inline-flex items-center gap-1 font-bold text-[#9A7B34] hover:underline tabular-nums"
            >
              <span>
                {tr(lang, 'واتساب الاستشارات:', 'WhatsApp:', 'واٹس ایپ مشاورت:')}
              </span>
              <span dir="ltr">{FIRM_CONTACT.whatsappDisplay}</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={onOpenProfileModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-[#141414] bg-white border border-[#D8CEB8] rounded-lg hover:border-[#B69648] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-3.5 h-3.5 text-[#9A7B34] shrink-0"
                aria-hidden="true"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Column 1: Value Proposition, High-Converting CTAs & Clear Metrics (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-1">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141414] text-[#D1B46A] text-xs font-bold mb-5 border border-[#B69648]/50">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>
                  {tr(
                    lang,
                    'شركة محاماة واستشارات قانونية مرخصة · مكة المكرمة وجدة وجميع أنحاء المملكة',
                    'Licensed Law Firm & Legal Consultations · Makkah, Jeddah & All KSA',
                    'لائسنس یافتہ لاء فرم اور قانونی مشاورت · مکہ مکرمہ، جدہ اور پوری مملکت'
                  )}
                </span>
              </div>

              <h1
                className={`text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#141414] leading-[1.24] mb-5 max-w-2xl ${
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

              <p className="text-base md:text-lg text-[#3D382F] leading-relaxed mb-8 max-w-2xl">
                {tr(
                  lang,
                  'نحمي مصالح قطاع الأعمال والمستثمرين والأفراد عبر حلول قانونية وقائية وتمثيل قضائي رفيع المستوى أمام كافة المحاكم واللجان القضائية وهيئات التحكيم في المملكة العربية السعودية، بالتزام تام بالسرية المهنية والمدد الزمنية المحددة.',
                  'Protecting the interests of corporations, investors, and individuals through preventive legal counsel and high-stakes judicial advocacy before all Saudi courts and arbitration tribunals.',
                  'مملکتِ سعودی عرب کی تمام عدالتوں، قانونی کمیٹیوں اور ثالثی مراکز کے روبرو کاروباری اداروں، سرمایہ کاروں اور افراد کے حقوق کا تحفظ اور اعلیٰ پیشہ ورانہ قانونی مشاورت۔'
                )}
              </p>

              {/* High-Conversion CTA Group */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm md:text-base font-bold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-xl transition-all duration-150 cursor-pointer shadow-md border border-[#141414]"
                >
                  <span>
                    {tr(
                      lang,
                      'احجز استشارتك القانونية الآن',
                      'Book Your Legal Consultation Now',
                      'ابھی اپنی قانونی مشاورت بک کریں'
                    )}
                  </span>
                  {/* Clean Inline Direction Arrow SVG */}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 shrink-0 text-[#D1B46A]"
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

                <a
                  href={FIRM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-4 text-sm md:text-base font-bold text-[#141414] bg-[#D1B46A] hover:bg-[#B69648] hover:text-white rounded-xl transition-all duration-150 shadow-sm border border-[#B69648]"
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
                      `تواصل مباشرة مع مستشار مختص عبر واتساب (${FIRM_CONTACT.whatsappDisplay})`,
                      `Chat Directly with a Legal Counselor (${FIRM_CONTACT.whatsappDisplay})`,
                      `واٹس ایپ پر ماہر مشیر سے براہِ راست رابطہ (${FIRM_CONTACT.whatsappDisplay})`
                    )}
                  </span>
                </a>
              </div>
            </div>

            {/* Key Statistical Proof Strip (+14, 3, +1000) with strong explanatory captions */}
            <div className="pt-6 border-t border-[#D8CEB8] grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="bg-white/80 rounded-xl p-4 border border-[#E5DEC9]">
                <div
                  dir="ltr"
                  className="text-2xl md:text-3xl font-bold text-[#9A7B34] font-mono-tabular inline-block"
                >
                  +14
                </div>
                <div className="text-xs md:text-sm font-bold text-[#141414] mt-1">
                  {tr(
                    lang,
                    'خدمة قانونية تخصصية',
                    'Specialized Legal Services',
                    'خصوصی قانونی خدمات'
                  )}
                </div>
                <div className="text-[11px] text-[#5C564B] mt-0.5">
                  {tr(
                    lang,
                    'استشارات، عقود، شركات، وترافع قضائي',
                    'Advisory, contracts, corporate & litigation',
                    'مشاورت، معاہدے، کمپنیاں اور عدالتی پیروی'
                  )}
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-[#E5DEC9]">
                <div
                  dir="ltr"
                  className="text-2xl md:text-3xl font-bold text-[#141414] font-mono-tabular inline-block"
                >
                  3
                </div>
                <div className="text-xs md:text-sm font-bold text-[#141414] mt-1">
                  {tr(
                    lang,
                    'لغات معتمدة لخدمة العملاء',
                    'Official Client Languages',
                    'مؤکلین کی خدمت کے لیے 3 زبانیں'
                  )}
                </div>
                <div className="text-[11px] text-[#5C564B] mt-0.5">
                  {tr(
                    lang,
                    'العربية · الإنجليزية · الأوردو',
                    'Arabic · English · Urdu',
                    'عربی · انگریزی · اردو'
                  )}
                </div>
              </div>

              <div className="bg-white/80 rounded-xl p-4 border border-[#E5DEC9]">
                <div
                  dir="ltr"
                  className="text-2xl md:text-3xl font-bold text-[#9A7B34] font-mono-tabular inline-block"
                >
                  +1000
                </div>
                <div className="text-xs md:text-sm font-bold text-[#141414] mt-1">
                  {tr(
                    lang,
                    'استشارة وقضية ناجحة',
                    'Successful Consultations & Cases',
                    'کامیاب قانونی مشاورت اور مقدمات'
                  )}
                </div>
                <div className="text-[11px] text-[#5C564B] mt-0.5">
                  {tr(
                    lang,
                    'سجل مهني حافل لقطاع الأعمال والأفراد',
                    'Proven track record for businesses & individuals',
                    'کاروباری اداروں اور افراد کے لیے کامیاب ریکارڈ'
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Official Brand Identity & Executive Credentials Card (5 cols) */}
          <div className="lg:col-span-5 flex">
            <div className="w-full rounded-2xl bg-[#141414] text-white p-7 md:p-9 flex flex-col justify-between border border-[#B69648]/50 relative overflow-hidden shadow-xl">
              {/* Subtle top gold hairline accent */}
              <div
                aria-hidden="true"
                className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#967832] via-[#D1B46A] to-[#967832]"
              />

              {/* Official Firm Title Lockup */}
              <div className="flex flex-col items-center text-center pt-2 pb-6 border-b border-white/10">
                <span className="inline-block px-3 py-1 rounded-full bg-[#B69648]/15 border border-[#B69648]/40 text-[11px] font-bold text-[#D1B46A] mb-3">
                  {tr(
                    lang,
                    'مكتب محاماة واستشارات مرخص بالمملكة',
                    'Licensed Saudi Law Firm',
                    'مملکت میں لائسنس یافتہ لاء فرم'
                  )}
                </span>
                <div className="font-calligraphy text-2xl md:text-3xl text-[#D1B46A] leading-relaxed mb-2">
                  {lang === 'ur' ? FIRM_CONTACT.firmNameUr : FIRM_CONTACT.firmNameAr}
                </div>
                <div className="text-[11px] tracking-[0.14em] text-[#C2B69C] font-medium">
                  SAMI ALSHAREEF LAWFIRM AND LEGAL CONSULTATIONS
                </div>
              </div>

              {/* Executive Practice Highlights (No duplicate Vision paragraph) */}
              <div className="my-6 space-y-3.5">
                <div className="text-xs font-bold text-[#D1B46A] mb-2">
                  {tr(
                    lang,
                    'نطاق التمثيل القانوني والاختصاص · Practice Scope',
                    'Practice Scope & Representation',
                    'قانونی نمائندگی اور دائرہ کار'
                  )}
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C1B18] border border-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#D1B46A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="M7 21h10" />
                    <path d="M12 3v18" />
                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                  </svg>
                  <div>
                    <div className="text-xs md:text-sm font-bold text-white">
                      {tr(
                        lang,
                        'الترافع أمام كافة المحاكم واللجان القضائية',
                        'Advocacy Before All Saudi Courts & Committees',
                        'تمام سعودی عدالتوں اور کمیٹیوں کے روبرو پیروی'
                      )}
                    </div>
                    <p className="text-xs text-[#C2B69C] mt-0.5 leading-relaxed">
                      {tr(
                        lang,
                        'المحاكم التجارية، العامة، العمالية، الإدارية (ديوان المظالم)، ومحاكم التنفيذ والأحوال الشخصية.',
                        'Commercial, General, Labor, Administrative Courts, Enforcement, and Personal Status.',
                        'تجارتی، عمومی، لیبر، انتظامی عدالتیں اور نفاذ کی عدالتیں۔'
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#1C1B18] border border-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5 text-[#D1B46A] shrink-0 mt-0.5"
                    aria-hidden="true"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M12 6h.01" />
                    <path d="M12 10h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 10h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 10h.01" />
                    <path d="M8 14h.01" />
                  </svg>
                  <div>
                    <div className="text-xs md:text-sm font-bold text-white">
                      {tr(
                        lang,
                        'رعاية قانونية شاملة للشركات والمستثمرين',
                        'Corporate Retainers & Foreign Investor Onboarding',
                        'کمپنیوں اور سرمایہ کاروں کے لیے جامع قانونی معاونت'
                      )}
                    </div>
                    <p className="text-xs text-[#C2B69C] mt-0.5 leading-relaxed">
                      {tr(
                        lang,
                        'تأسيس الشركات، تراخيص وزارة الاستثمار (MISA)، صياغة العقود، الحوكمة، وحماية الملكية الفكرية.',
                        'Company formation, MISA licensing, contract architecture, governance & IP protection.',
                        'کمپنیوں کا قیام، وزارتِ سرمایہ کاری کے لائسنس، معاہدے اور گورننس۔'
                      )}
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct Quick Contact Bar */}
              <div className="pt-5 border-t border-white/10 flex flex-col gap-3 text-xs text-[#D5CEBF]">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[#D1B46A] font-semibold mb-0.5">
                      {tr(
                        lang,
                        'خط الاستشارات المباشر عبر واتساب',
                        'Direct WhatsApp Consultation Line',
                        'واٹس ایپ براہِ راست مشاورتی لائن'
                      )}
                    </div>
                    <div
                      dir="ltr"
                      className="tabular-nums text-white font-bold text-sm inline-block"
                    >
                      {FIRM_CONTACT.whatsappDisplay}
                    </div>
                  </div>
                  <a
                    href={FIRM_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#D1B46A] text-[#141414] font-bold hover:bg-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 fill-current shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                    </svg>
                    <span>
                      {tr(lang, 'ابدأ المحادثة الآن', 'Start Chat', 'ابھی بات کریں')}
                    </span>
                  </a>
                </div>

                <div className="pt-2.5 border-t border-white/10 flex items-center justify-between gap-4">
                  <div className="tabular-nums text-white/80 font-medium">
                    <span dir="ltr">{FIRM_CONTACT.phoneDisplay}</span> ·{' '}
                    <span>{FIRM_CONTACT.email}</span>
                  </div>
                  <a
                    href={`tel:${FIRM_CONTACT.phoneInternational}`}
                    className="inline-flex items-center gap-1.5 text-[#D1B46A] hover:underline font-semibold whitespace-nowrap shrink-0"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <span>{tr(lang, 'اتصال مباشر', 'Direct Call', 'براہِ راست کال')}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Trust Bar (شريط الثقة والتراخيص الرسمية) */}
        <div
          aria-label={tr(
            lang,
            'الاعتمادات والتراخيص الرسمية',
            'Official Accreditations & Compliance',
            'سرکاری لائسنس اور منظوریاں'
          )}
          className="mt-10 rounded-2xl bg-[#141414] text-white border border-[#B69648]/60 p-5 md:p-6 shadow-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
            {TRUST_BAR_ITEMS.map((item, idx) => (
              <div
                key={item.id}
                className={`flex items-start gap-3.5 ${
                  idx > 0 ? 'pt-4 md:pt-0 md:px-4' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#B69648]/20 border border-[#B69648]/50 text-[#D1B46A] flex items-center justify-center shrink-0">
                  {item.id === 'moj-license' && (
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
                      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="M7 21h10" />
                      <path d="M12 3v18" />
                      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                    </svg>
                  )}
                  {item.id === 'sba-member' && (
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
                      <circle cx="12" cy="8" r="6" />
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                    </svg>
                  )}
                  {item.id === 'pdpl-compliance' && (
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
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  )}
                </div>
                <div>
                  <h2 className="text-xs md:text-sm font-bold text-[#D1B46A]">
                    {tr(lang, item.titleAr, item.titleEn, item.titleUr)}
                  </h2>
                  <p className="text-xs text-[#D5CEBF] mt-0.5 leading-relaxed">
                    {tr(lang, item.descAr, item.descEn, item.descUr)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
