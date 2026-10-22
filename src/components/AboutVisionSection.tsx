import React from 'react';
import {
  Language,
  FIRM_CONTACT,
  WHY_CHOOSE_US_ITEMS,
  tr,
} from '../utils/lawFirmLogic';

interface AboutVisionSectionProps {
  lang: Language;
}

const SIX_CORE_VALUES = [
  { id: 'v-confidentiality', ar: 'السرية التامة', en: 'Confidentiality', ur: 'مکمل رازداری' },
  { id: 'v-professionalism', ar: 'الاحترافية', en: 'Professionalism', ur: 'پیشہ ورانہ مہارت' },
  { id: 'v-integrity', ar: 'النزاهة والشفافية', en: 'Integrity', ur: 'دیانتداری اور شفافیت' },
  { id: 'v-precision', ar: 'السرعة والدقة', en: 'Speed & Precision', ur: 'تیزی اور درستگی' },
  { id: 'v-trust', ar: 'الثقة المسؤولة', en: 'Trusted Counsel', ur: 'قابلِ اعتماد مشاورت' },
  { id: 'v-partnership', ar: 'الشراكة وروح الفريق', en: 'Partnership', ur: 'شراکت داری' },
];

export const AboutVisionSection: React.FC<AboutVisionSectionProps> = ({ lang }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-[#FAF8F5] border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Main 2-Column Split (Matches 00:09 - 00:10 of Reference Video) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch mb-20">
          {/* Right Column in RTL: Eyebrow, Title, Quote Box, Narrative & 6 Value Cards (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Eyebrow with gold lines */}
              <div className="inline-flex items-center gap-3 mb-4">
                <span aria-hidden="true" className="w-6 h-[2px] bg-[#C69C47]" />
                <span className="text-xs sm:text-sm font-bold text-[#9A7B34] tracking-wide">
                  {tr(lang, 'من نحن', 'About Us', 'ہمارے بارے میں')}
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl font-bold text-[#141414] leading-tight mb-6 font-calligraphy"
                style={{ textWrap: 'balance' }}
              >
                {tr(
                  lang,
                  'شراكة قانونية بثقة ومسؤولية',
                  'A Legal Partnership Built on Trust & Responsibility',
                  'اعتماد اور ذمہ داری پر مبنی قانونی شراکت داری'
                )}
              </h2>

              {/* Highlighted Callout Box (Clean all-around border & warm surface contrast) */}
              <div className="rounded-2xl bg-[#F2EDE2] border border-[#DFD4BC] p-5 sm:p-6 mb-6">
                <p className="text-sm sm:text-base font-bold text-[#1B4332] leading-relaxed">
                  {tr(
                    lang,
                    '«نؤمن بأن المحاماة ليست مجرد تمثيل نظامي، بل شراكة استراتيجية تبني الأمان القانوني وتدعم استدامة الطموح للأفراد وقطاع الأعمال في المملكة.»',
                    '“We believe legal practice is more than statutory representation—it is a strategic partnership that builds legal security and sustains ambition for individuals and businesses across the Kingdom.”',
                    '«ہمارا ایمان ہے کہ وکالت محض قانونی نمائندگی نہیں بلکہ ایک اسٹریٹجک شراکت داری ہے جو مملکت میں افراد اور کاروباری اداروں کو قانونی تحفظ اور پائیدار ترقی فراہم کرتی ہے۔»'
                  )}
                </p>
              </div>

              {/* Body Copy Paragraphs */}
              <p className="text-sm sm:text-base text-[#3D382F] leading-relaxed mb-4">
                {tr(
                  lang,
                  'تأسست شركة سامي الشريف للمحاماة والاستشارات القانونية لتقديم نموذج متقدم في العمل القانوني يجمع بين الأصالة والرصانة المهنية، والفهم العميق للتحولات التشريعية والاقتصادية المتسارعة في المملكة العربية السعودية.',
                  'Sami Al-Sharif Law Firm & Legal Consultations was founded to deliver an advanced model of legal practice combining deep statutory mastery with agile responsiveness to Saudi Arabia’s legislative and economic landscape.',
                  'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز کا قیام ایک ایسے جدید قانونی ماڈل کی فراہمی کے لیے عمل میں آیا جو پیشہ ورانہ پختگی اور مملکتِ سعودی عرب کے قانونی و معاشی نظام کی گہری سمجھ کو یکجا کرتا ہے۔'
                )}
              </p>

              <p className="text-sm sm:text-base text-[#5C564B] leading-relaxed mb-8">
                {tr(
                  lang,
                  'نعمل عن قرب مع عملائنا من الشركات والمستثمرين والأفراد في مكة المكرمة وجدة وجميع أنحاء المملكة؛ لنقدم لهم حلولاً قانونية استباقية تحمي مصالحهم، وتدعم قراراتهم، وتضمن توافق أعمالهم مع الأنظمة واللوائح السارية.',
                  'Working closely with corporations, foreign investors, and individuals in Makkah, Jeddah, and nationwide, we deliver proactive legal solutions that protect assets, support executive decisions, and ensure full regulatory compliance.',
                  'ہم مکہ مکرمہ، جدہ اور پوری مملکت میں کمپنیوں، سرمایہ کاروں اور افراد کے ساتھ مل کر کام کرتے ہیں تاکہ انہیں پیشگی قانونی تحفظ، مضبوط مشاورت اور مکمل قانونی تعمیل فراہم کی جا سکے۔'
                )}
              </p>
            </div>

            {/* 6 Core Value Cards Grid (Matches 00:10 of Video) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {SIX_CORE_VALUES.map((val) => (
                <div
                  key={val.id}
                  className="bg-white rounded-xl px-4 py-3.5 border border-[#E5DEC9] hover:border-[#C69C47] transition-colors flex items-center justify-between gap-2 shadow-2xs"
                >
                  <span className="text-xs sm:text-sm font-bold text-[#141414]">
                    {tr(lang, val.ar, val.en, val.ur)}
                  </span>
                  <span className="w-6 h-6 rounded-full bg-[#1B4332]/10 text-[#1B4332] flex items-center justify-center shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-3.5 h-3.5"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Left Column in RTL: Framed Executive Boardroom & Vision/Mission Showcase (6 cols) */}
          <div className="lg:col-span-6 flex">
            <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#0F241C] via-[#131C18] to-[#0A1410] text-white border border-[#C69C47]/45 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
              {/* Architectural Gold Frame Corner Accents (Matches 00:09 of Video) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute top-3 right-3 w-12 h-12 border-t-2 border-r-2 border-[#C69C47]/60 rounded-tr-lg"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute bottom-3 left-3 w-12 h-12 border-b-2 border-l-2 border-[#C69C47]/60 rounded-bl-lg"
              />

              {/* Executive Architectural Boardroom Visual Header */}
              <div className="relative rounded-xl overflow-hidden bg-[#162920] border border-white/10 p-6 mb-6">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-25"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 50% 0%, rgba(198,156,71,0.45), transparent 70%)',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center text-center py-4">
                  <div className="w-16 h-16 rounded-2xl bg-[#C69C47]/15 border border-[#C69C47]/50 text-[#C69C47] flex items-center justify-center mb-4">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-8 h-8"
                      aria-hidden="true"
                    >
                      <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                      <path d="M7 21h10" />
                      <path d="M12 3v18" />
                      <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                    </svg>
                  </div>
                  <div className="font-calligraphy text-2xl sm:text-3xl text-[#C69C47] mb-1.5">
                    {lang === 'ur' ? FIRM_CONTACT.firmNameUr : FIRM_CONTACT.firmNameAr}
                  </div>
                  <div className="text-[11px] tracking-[0.14em] text-white/70 font-medium">
                    SAMI ALSHAREEF LAWFIRM & LEGAL CONSULTATIONS
                  </div>
                </div>
              </div>

              {/* Concise Vision & Mission Cards Inside Executive Frame */}
              <div className="space-y-4 my-auto">
                <div className="rounded-xl bg-white/6 border border-white/12 p-5">
                  <div className="text-xs font-bold text-[#C69C47] mb-1.5">
                    {tr(lang, 'رؤيتنا الاستراتيجية · Our Vision', 'Our Vision', 'ہمارا وژن')}
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {tr(
                      lang,
                      'أن نكون عنواناً للخدمات والاستشارات القانونية الاحترافية بطرق مبتكرة وغير تقليدية لكسب ثقة العملاء وتحقيق رضاهم وتجاوز توقعاتهم.',
                      'To be the premier address for professional legal consultations through innovative, non-traditional approaches that earn lasting client trust.',
                      'جدید اور منفرد طریقوں سے پیشہ ورانہ قانونی خدمات و مشاورت کا اولین مرکز بننا اور مؤکلین کا مکمل اعتماد حاصل کرنا۔'
                    )}
                  </p>
                </div>

                <div className="rounded-xl bg-white/6 border border-white/12 p-5">
                  <div className="text-xs font-bold text-[#C69C47] mb-1.5">
                    {tr(lang, 'رسالتنا المهنية · Our Mission', 'Our Mission', 'ہمارا مشن')}
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                    {tr(
                      lang,
                      'توفير تمثيل ورعاية قانونية راقية محلياً وإقليمياً ودولياً وفق أعلى المعايير وأفضل الممارسات الدولية باستعمال التقنيات القانونية الحديثة.',
                      'Delivering top-tier legal representation locally, regionally, and internationally in accordance with global best practices and modern legal technology.',
                      'جدید قانونی ٹیکنالوجی اور اعلیٰ ترین بین الاقوامی معیارات کے مطابق مقامی و بین الاقوامی سطح پر بہترین قانونی نمائندگی فراہم کرنا۔'
                    )}
                  </p>
                </div>
              </div>

              {/* Floating Bottom Location Caption Badge (Matches 00:10 of Video) */}
              <div className="mt-6 rounded-xl bg-[#0A1410]/95 border border-[#C69C47]/40 p-4 flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold text-[#C69C47]">
                    {tr(
                      lang,
                      'المقر الرئيسي - مكة المكرمة وجدة',
                      'Headquarters — Makkah & Jeddah',
                      'مرکزی دفتر — مکہ مکرمہ اور جدہ'
                    )}
                  </div>
                  <div className="text-xs text-white/80 mt-0.5">
                    {tr(
                      lang,
                      'خدمة قطاع الأعمال والمستثمرين والأفراد في كافة محاكم المملكة',
                      'Serving businesses, investors & individuals across all Saudi courts',
                      'پوری مملکت کی عدالتوں میں کاروباری اداروں اور افراد کی نمائندگی'
                    )}
                  </div>
                </div>
                <a
                  href={FIRM_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-lg bg-[#C69C47] text-[#141414] text-xs font-bold hover:bg-[#D8B467] transition-colors whitespace-nowrap shrink-0"
                >
                  {tr(lang, 'الموقع على الخريطة', 'View Map', 'نقشہ دیکھیں')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Sami Al-Sharif Law Firm (3 Competitive Differentiators) */}
        <div className="rounded-2xl bg-[#141414] text-white p-7 md:p-10 border border-[#C69C47]/40">
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold text-[#C69C47] mb-2">
              {tr(
                lang,
                'مزايا تنافسية حاسمة · Why Choose Us',
                'Key Differentiators · لماذا تختارنا',
                'ہمیں کیوں منتخب کریں · Why Choose Us'
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug font-calligraphy">
              {tr(
                lang,
                'لماذا تختار شركة سامي الشريف للمحاماة والاستشارات القانونية؟',
                'Why Choose Sami Al-Sharif Law Firm & Legal Consultations?',
                'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز کا انتخاب کیوں کریں؟'
              )}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WHY_CHOOSE_US_ITEMS.map((usp) => (
              <div
                key={usp.id}
                className="rounded-xl bg-[#1C1B18] border border-white/10 hover:border-[#C69C47] transition-colors p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-tabular text-xs font-bold text-[#C69C47]">
                      {usp.index}.
                    </span>
                    <span className="text-[11px] font-semibold text-[#C69C47]">
                      {tr(lang, usp.highlightAr, usp.highlightEn, usp.highlightUr)}
                    </span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-white mb-2.5 leading-snug">
                    {tr(lang, usp.titleAr, usp.titleEn, usp.titleUr)}
                  </h4>
                  <p className="text-xs md:text-sm text-[#D5CEBF] leading-relaxed">
                    {tr(lang, usp.descAr, usp.descEn, usp.descUr)}
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

