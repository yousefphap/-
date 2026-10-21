import React from 'react';
import {
  Award,
  Cpu,
  Scale,
  Zap,
  UserCheck,
  Lightbulb,
  Users,
  Eye,
  CheckCircle2,
} from 'lucide-react';
import {
  Language,
  FIRM_VALUES,
  FIRM_GOALS,
  tr,
} from '../utils/lawFirmLogic';

interface AboutVisionSectionProps {
  lang: Language;
}

export const AboutVisionSection: React.FC<AboutVisionSectionProps> = ({ lang }) => {
  const renderValueIcon = (iconKey: string) => {
    switch (iconKey) {
      case 'scale':
        return <Scale className="w-6 h-6 text-[#D1B46A]" />;
      case 'zap':
        return <Zap className="w-6 h-6 text-[#D1B46A]" />;
      case 'user-check':
        return <UserCheck className="w-6 h-6 text-[#D1B46A]" />;
      case 'lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#D1B46A]" />;
      case 'users':
      default:
        return <Users className="w-6 h-6 text-[#D1B46A]" />;
    }
  };

  return (
    <section id="about" className="py-20 bg-[#FAF8F5] border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header: About Us (Slide 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold text-[#9A7B34] mb-2">
              {tr(
                lang,
                '01. من نحن · About Us',
                '01. About Us · من نحن',
                '01. ہمارے بارے میں · About Us'
              )}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug"
              style={{ textWrap: 'balance' }}
            >
              {tr(
                lang,
                'شراكة قانونية موثوقة لقطاع الأعمال والمؤسسات والأفراد',
                'A Trusted Legal Partner for Business Sectors, Entities & Individuals',
                'کاروباری شعبوں، اداروں اور افراد کے لیے ایک قابلِ اعتماد قانونی شراکت دار'
              )}
            </h2>
          </div>

          <div className="lg:col-span-7 bg-white rounded-xl p-7 md:p-8 border border-[#E5DEC9]">
            <p className="text-base md:text-lg text-[#2C2821] leading-relaxed mb-4">
              {tr(
                lang,
                'نتشرف في شركة سامي الشريف للمحاماة والاستشارات القانونية بتقديم خدمات واستشارات قانونية شاملة وموثوقة، تلبي الاحتياجات المتجددة لقطاع الأعمال والمؤسسات والأفراد.',
                'At Sami Al-Sharif Law Firm & Legal Consultations, we are honored to deliver comprehensive and trusted legal services tailored to the evolving needs of business sectors, entities, and individuals.',
                'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز میں ہمیں کاروباری اداروں، کمپنیوں اور افراد کی بدلتی ہوئی ضروریات کو پورا کرنے کے لیے جامع اور قابلِ اعتماد قانونی خدمات و مشاورت فراہم کرنے کا شرف حاصل ہے۔'
              )}
            </p>
            <p className="text-sm text-[#5C564B] leading-relaxed">
              {tr(
                lang,
                'نجمع بين التأصيل الشرعي والنظامي العميق في أنظمة المملكة العربية السعودية وبين المرونة والابتكار في صياغة الحلول القانونية الوقائية والعلاجية.',
                'We combine deep statutory mastery of Saudi Arabian regulations with agile, innovative legal strategies that protect assets and resolve complex disputes.',
                'ہم مملکتِ سعودی عرب کے قوانین اور شرعی اصولوں میں گہری مہارت کو جدید اور لچکدار قانونی حکمتِ عملی کے ساتھ یکجا کرتے ہیں تاکہ اثاثوں کا تحفظ اور پیچیدہ تنازعات کا حل ممکن ہو سکے۔'
              )}
            </p>
          </div>
        </div>

        {/* Our Vision Banner (Slide 4 & 13 Gold Showcase) & Our Mission (Slide 5 & 14) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-stretch">
          {/* Vision Card in Signature Regal Gold (#B69648) */}
          <div className="lg:col-span-5 rounded-xl bg-[#B69648] text-white p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-white/90">
                {tr(
                  lang,
                  'رؤيتنا · Our Vision',
                  'Our Vision · رؤيتنا',
                  'ہمارا وژن · Our Vision'
                )}
              </span>
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
                {tr(
                  lang,
                  'المرجع الأول للخدمات القانونية الاحترافية والتخصصية',
                  'The Benchmark for Specialized Legal Excellence',
                  'پیشہ ورانہ اور خصوصی قانونی خدمات کا اولین مرکز'
                )}
              </h3>
              <p className="text-sm md:text-base text-white/95 leading-relaxed">
                {tr(
                  lang,
                  'أن نكون عنواناً للخدمات والاستشارات القانونية الاحترافية والتخصصية بطرق مبتكرة وغير تقليدية لكسب ثقة العملاء والتركيز على تحقيق رضاهم وتجاوز توقعاتهم.',
                  'To be the benchmark for professional and specialized legal services through innovative and unconventional approaches, earning client trust and exceeding expectations.',
                  'جدید اور منفرد طریقوں سے پیشہ ورانہ اور خصوصی قانونی خدمات و مشاورت کا اولین مرکز بننا، تاکہ مؤکلین کا اعتماد حاصل کیا جا سکے اور ان کی توقعات سے بڑھ کر اطمینان یقینی بنایا جا سکے۔'
                )}
              </p>
            </div>
          </div>

          {/* Our Mission (Slide 5 & 14 - Two Pillars) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Mission 1: الصدارة والسمعة المرموقة */}
            <div className="bg-white rounded-xl p-7 border border-[#E5DEC9] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-[#9A7B34]">
                    {tr(lang, 'رسالتنا · 01', 'Our Mission · 01', 'ہمارا مشن · 01')}
                  </span>
                  <Award className="w-6 h-6 text-[#9A7B34]" />
                </div>
                <h3 className="text-lg font-bold text-[#141414] mb-2.5">
                  {tr(
                    lang,
                    'الصدارة والسمعة المرموقة',
                    'Leadership & Reputation',
                    'قیادت اور باوقار ساکھ'
                  )}
                </h3>
                <p className="text-sm text-[#4A463D] leading-relaxed">
                  {tr(
                    lang,
                    'نحرص على المحافظة على سمعتنا المرموقة والبقاء في صدارة مكاتب المحاماة محلياً وإقليمياً ودولياً، عبر التوظيف الأمثل للخبرات الطويلة.',
                    'Maintaining our prestigious reputation and leading law firms locally, regionally, and internationally through optimal deployment of extensive expertise.',
                    'طویل تجربے کے بہترین استعمال کے ذریعے اپنی باوقار ساکھ کو برقرار رکھنا اور مقامی، علاقائی اور بین الاقوامی سطح پر سرِفہرست لاء فرمز میں شامل رہنا۔'
                  )}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0ECE1] text-xs text-[#6E675B]">
                {tr(
                  lang,
                  'تمثيل قانوني محلي وإقليمي ودولي',
                  'Local · Regional · International Presence',
                  'مقامی، علاقائی اور بین الاقوامی قانونی نمائندگی'
                )}
              </div>
            </div>

            {/* Mission 2: التقنية والجودة العالية */}
            <div className="bg-white rounded-xl p-7 border border-[#E5DEC9] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-[#9A7B34]">
                    {tr(lang, 'رسالتنا · 02', 'Our Mission · 02', 'ہمارا مشن · 02')}
                  </span>
                  <Cpu className="w-6 h-6 text-[#9A7B34]" />
                </div>
                <h3 className="text-lg font-bold text-[#141414] mb-2.5">
                  {tr(
                    lang,
                    'التقنية والجودة العالية',
                    'Technology & High Quality',
                    'جدید ٹیکنالوجی اور اعلیٰ معیار'
                  )}
                </h3>
                <p className="text-sm text-[#4A463D] leading-relaxed">
                  {tr(
                    lang,
                    'نسعى للريادة عبر توفير تمثيل ورعاية قانونية راقية وفقاً لأعلى المستويات وأفضل الممارسات الدولية، باستعمال التقنيات الحديثة.',
                    'Providing top-tier legal representation and care adhering to the highest international practices and modern legal technologies.',
                    'جدید قانونی ٹیکنالوجی کے استعمال اور اعلیٰ ترین بین الاقوامی معیارات کے مطابق بہترین قانونی نمائندگی اور معاونت فراہم کرنا۔'
                  )}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0ECE1] text-xs text-[#6E675B]">
                {tr(
                  lang,
                  'أفضل الممارسات الدولية والتقنيات الحديثة',
                  'International Standards · Modern LegalTech',
                  'بین الاقوامی معیارات اور جدید لیگل ٹیک'
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Our Values (Slide 6 & 15 - 5 Obsidian Cards with Gold Icons) */}
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

        {/* Our Goals (Slide 7 & 16 - 4 Structured Cards) */}
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
                    <CheckCircle2 className="w-4 h-4 text-[#9A7B34] shrink-0" />
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
