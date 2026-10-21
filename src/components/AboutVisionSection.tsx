import React from 'react';
import {
  Language,
  FIRM_VALUES,
  FIRM_GOALS,
  WHY_CHOOSE_US_ITEMS,
  tr,
} from '../utils/lawFirmLogic';

interface AboutVisionSectionProps {
  lang: Language;
}

export const AboutVisionSection: React.FC<AboutVisionSectionProps> = ({ lang }) => {
  const renderValueIcon = (iconKey: string) => {
    switch (iconKey) {
      case 'scale':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-[#D1B46A]"
            aria-hidden="true"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        );
      case 'zap':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-[#D1B46A]"
            aria-hidden="true"
          >
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
          </svg>
        );
      case 'user-check':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-[#D1B46A]"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
          </svg>
        );
      case 'lightbulb':
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-[#D1B46A]"
            aria-hidden="true"
          >
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6" />
            <path d="M10 22h4" />
          </svg>
        );
      case 'users':
      default:
        return (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6 text-[#D1B46A]"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
    }
  };

  return (
    <section id="about" className="py-20 bg-[#FAF8F5] border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        {/* Section Header: About Us */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold text-[#9A7B34] mb-2">
              {tr(
                lang,
                '01. من نحن · الرؤية والرسالة',
                '01. About Us · Vision & Mission',
                '01. ہمارے بارے میں · وژن اور مشن'
              )}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug"
              style={{ textWrap: 'balance' }}
            >
              {tr(
                lang,
                'شراكة قانونية موثوقة لقطاع الأعمال والمستثمرين والأفراد',
                'A Trusted Legal Partner for Business Sectors, Investors & Individuals',
                'کاروباری شعبوں، سرمایہ کاروں اور افراد کے لیے قابلِ اعتماد قانونی شراکت دار'
              )}
            </h2>
          </div>

          <div className="lg:col-span-7 bg-white rounded-2xl p-6 md:p-8 border border-[#E5DEC9]">
            <p className="text-base md:text-lg text-[#2C2821] leading-relaxed mb-3">
              {tr(
                lang,
                'تأسست شركة سامي الشريف للمحاماة والاستشارات القانونية لتكون الذراع القانوني المأمون للشركات والمؤسسات والأفراد في مكة المكرمة وجدة وجميع أنحاء المملكة العربية السعودية.',
                'Sami Al-Sharif Law Firm & Legal Consultations was established as the trusted legal arm for corporations, institutions, and individuals across Makkah, Jeddah, and Saudi Arabia.',
                'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز مکہ مکرمہ، جدہ اور پوری مملکتِ سعودی عرب میں کمپنیوں، اداروں اور افراد کے لیے ایک قابلِ اعتماد قانونی بازو کے طور پر قائم کی گئی ہے۔'
              )}
            </p>
            <p className="text-sm text-[#5C564B] leading-relaxed">
              {tr(
                lang,
                'نجمع بين التأصيل الشرعي والنظامي العميق في الأنظمة السعودية وبين المرونة والابتكار في صياغة الحلول القانونية الوقائية والعلاجية التي تحمي الأصول وتحسم المنازعات.',
                'We combine deep statutory mastery of Saudi Arabian regulations with agile, innovative legal strategies that protect assets and resolve complex disputes.',
                'ہم سعودی قوانین اور شرعی اصولوں میں گہری مہارت کو جدید اور فعال قانونی حکمتِ عملی کے ساتھ یکجا کرتے ہیں تاکہ اثاثوں کا تحفظ اور تنازعات کا حل ممکن ہو سکے۔'
              )}
            </p>
          </div>
        </div>

        {/* Unified, Non-Redundant Vision & Mission Cards (3 Modern Concise Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          {/* Card 1: Our Vision */}
          <div className="rounded-2xl bg-[#141414] text-white p-7 border border-[#B69648]/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-md bg-[#B69648]/20 text-xs font-bold text-[#D1B46A]">
                  {tr(lang, 'رؤيتنا · Vision', 'Our Vision', 'ہمارا وژن')}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-[#D1B46A]"
                  aria-hidden="true"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2.5">
                {tr(
                  lang,
                  'المرجع الأول للخدمات القانونية التخصصية',
                  'Benchmark for Specialized Legal Excellence',
                  'خصوصی قانونی خدمات کا اولین مرکز'
                )}
              </h3>
              <p className="text-sm text-[#D5CEBF] leading-relaxed">
                {tr(
                  lang,
                  'أن نكون عنواناً للخدمات والاستشارات القانونية الاحترافية بطرق مبتكرة وغير تقليدية لكسب ثقة العملاء وتحقيق رضاهم وتجاوز توقعاتهم.',
                  'To be the premier address for professional and specialized legal services through innovative approaches that earn lasting client trust.',
                  'جدید اور منفرد طریقوں سے پیشہ ورانہ قانونی خدمات و مشاورت کا اولین مرکز بننا اور مؤکلین کا مکمل اعتماد حاصل کرنا۔'
                )}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-white/10 text-xs text-[#D1B46A] font-semibold">
              {tr(
                lang,
                'ابتكار قانوني · ثقة مستدامة',
                'Legal Innovation · Enduring Trust',
                'قانونی جدت · پائیدار اعتماد'
              )}
            </div>
          </div>

          {/* Card 2: Mission Pillar 1 */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5DEC9] hover:border-[#B69648] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-md bg-[#FAF8F5] border border-[#E5DEC9] text-xs font-bold text-[#9A7B34]">
                  {tr(lang, 'رسالتنا · 01', 'Our Mission · 01', 'ہمارا مشن · 01')}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-[#9A7B34]"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="8" r="6" />
                  <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#141414] mb-2.5">
                {tr(
                  lang,
                  'الصدارة والسمعة المرموقة',
                  'Leadership & Prestigious Reputation',
                  'قیادت اور باوقار ساکھ'
                )}
              </h3>
              <p className="text-sm text-[#4A463D] leading-relaxed">
                {tr(
                  lang,
                  'البقاء في صدارة مكاتب المحاماة محلياً وإقليمياً ودولياً عبر التوظيف الأمثل للخبرات القانونية المتراكمة في خدمة الموكلين.',
                  'Remaining at the forefront of law firms locally, regionally, and internationally through optimal deployment of deep legal expertise.',
                  'وسیع قانونی تجربے کے بہترین استعمال کے ذریعے مقامی، علاقائی اور بین الاقوامی سطح پر سرِفہرست لاء فرمز میں شامل رہنا۔'
                )}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#F0ECE1] text-xs text-[#6E675B] font-medium">
              {tr(
                lang,
                'تمثيل قانوني محلي وإقليمي ودولي',
                'Local · Regional · International Presence',
                'مقامی، علاقائی اور بین الاقوامی قانونی نمائندگی'
              )}
            </div>
          </div>

          {/* Card 3: Mission Pillar 2 */}
          <div className="bg-white rounded-2xl p-7 border border-[#E5DEC9] hover:border-[#B69648] transition-colors flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded-md bg-[#FAF8F5] border border-[#E5DEC9] text-xs font-bold text-[#9A7B34]">
                  {tr(lang, 'رسالتنا · 02', 'Our Mission · 02', 'ہمارا مشن · 02')}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6 text-[#9A7B34]"
                  aria-hidden="true"
                >
                  <rect width="16" height="16" x="4" y="4" rx="2" />
                  <rect width="6" height="6" x="9" y="9" rx="1" />
                  <path d="M15 2v2" />
                  <path d="M15 20v2" />
                  <path d="M2 15h2" />
                  <path d="M2 9h2" />
                  <path d="M20 15h2" />
                  <path d="M20 9h2" />
                  <path d="M9 2v2" />
                  <path d="M9 20v2" />
                </svg>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-[#141414] mb-2.5">
                {tr(
                  lang,
                  'التقنية الحديثة والجودة العالية',
                  'Modern LegalTech & High Quality',
                  'جدید ٹیکنالوجی اور اعلیٰ معیار'
                )}
              </h3>
              <p className="text-sm text-[#4A463D] leading-relaxed">
                {tr(
                  lang,
                  'توفير تمثيل ورعاية قانونية راقية وفق أعلى المستويات وأفضل الممارسات الدولية باستعمال التقنيات القانونية الحديثة.',
                  'Delivering top-tier legal representation and care adhering to international best practices and modern legal technologies.',
                  'جدید قانونی ٹیکنالوجی اور اعلیٰ ترین بین الاقوامی معیارات کے مطابق بہترین قانونی نمائندگی فراہم کرنا۔'
                )}
              </p>
            </div>
            <div className="pt-4 mt-6 border-t border-[#F0ECE1] text-xs text-[#6E675B] font-medium">
              {tr(
                lang,
                'أفضل الممارسات الدولية والتقنيات الحديثة',
                'International Standards · Modern LegalTech',
                'بین الاقوامی معیارات اور جدید لیگل ٹیک'
              )}
            </div>
          </div>
        </div>

        {/* NEW SECTION: لماذا تختار شركة سامي الشريف؟ (Unique Selling Propositions - USPs) */}
        <div className="mb-16 rounded-2xl bg-[#141414] text-white p-7 md:p-10 border border-[#B69648]/50 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#967832] via-[#D1B46A] to-[#967832]"
          />
          <div className="max-w-3xl mb-8">
            <div className="text-xs font-bold text-[#D1B46A] mb-2">
              {tr(
                lang,
                'مزايا تنافسية حاسمة · Why Choose Us',
                'Key Differentiators · لماذا تختارنا',
                'ہمیں کیوں منتخب کریں · Why Choose Us'
              )}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
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
                className="rounded-xl bg-[#1C1B18] border border-white/10 hover:border-[#B69648] transition-colors p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-tabular text-xs font-bold px-2.5 py-1 rounded bg-[#B69648]/20 text-[#D1B46A] border border-[#B69648]/40">
                      {usp.index}
                    </span>
                    <span className="text-[11px] font-semibold text-[#D1B46A]">
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

        {/* Our Values (5 Obsidian Cards with Clean Inline Gold SVGs) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold text-[#9A7B34] mb-1.5">
                {tr(
                  lang,
                  'قيمنا الجوهرية · Our Values',
                  'Core Values · قيمنا',
                  'ہماری بنیادی اقدار · Our Values'
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141414]">
                {tr(
                  lang,
                  'المبادئ الخمسة الحاكمة لأعمالنا القانونية',
                  'Five Guiding Principles of Our Legal Practice',
                  'ہماری قانونی خدمات کے پانچ بنیادی اصول'
                )}
              </h3>
            </div>
            <p className="text-xs md:text-sm text-[#5C564B]">
              {tr(
                lang,
                'الشفافية · السرعة والدقة · الاحترافية · الابتكار · روح الفريق',
                'Transparency · Speed & Accuracy · Professionalism · Innovation · Teamwork',
                'شفافیت · تیز رفتاری اور درستگی · پیشہ ورانہ مہارت · جدت · ٹیم ورک'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {FIRM_VALUES.map((val) => (
              <div
                key={val.id}
                className="bg-[#141414] text-white rounded-xl p-6 border border-[#2C2821] hover:border-[#B69648] transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="mb-4">{renderValueIcon(val.iconKey)}</div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {tr(lang, val.titleAr, val.titleEn, val.titleUr)}
                  </h4>
                  <p className="text-xs text-[#C2B69C] leading-relaxed">
                    {tr(lang, val.descAr, val.descEn, val.descUr)}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[#D1B46A]">
                  {lang === 'en' ? val.titleAr : val.titleEn}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Goals (4 Structured Cards) */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-semibold text-[#9A7B34] mb-1.5">
              {tr(
                lang,
                'أهدافنا الاستراتيجية · Our Goals',
                'Strategic Goals · أهدافنا',
                'ہمارے اسٹریٹجک اہداف · Our Goals'
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#141414]">
              {tr(
                lang,
                'التزام راسخ بحماية المصالح وصون الخصوصية',
                'Steadfast Commitment to Client Protection & Excellence',
                'مؤکلین کے مفادات کے تحفظ اور رازداری کا پختہ عزم'
              )}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {FIRM_GOALS.map((goal) => (
              <div
                key={goal.id}
                className="bg-white rounded-xl p-6 border border-[#E5DEC9] flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF8F5] border border-[#E5DEC9] flex items-center justify-center shrink-0 text-[#9A7B34] font-mono-tabular font-bold text-sm">
                  {goal.index}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h4 className="text-base font-bold text-[#141414]">
                      {tr(lang, goal.titleAr, goal.titleEn, goal.titleUr)}
                    </h4>
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-4 h-4 text-[#9A7B34] shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                      <polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </div>
                  <p className="text-xs md:text-sm text-[#4A463D] leading-relaxed">
                    {tr(lang, goal.descAr, goal.descEn, goal.descUr)}
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
