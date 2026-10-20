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
              {lang === 'ar' ? '01. من نحن · About Us' : '01. About Us · من نحن'}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'ar'
                ? 'شراكة قانونية موثوقة لقطاع الأعمال والمؤسسات والأفراد'
                : 'A Trusted Legal Partner for Business Sectors, Entities & Individuals'}
            </h2>
          </div>

          <div className="lg:col-span-7 bg-white rounded-xl p-7 md:p-8 border border-[#E5DEC9]">
            <p className="text-base md:text-lg text-[#2C2821] leading-relaxed mb-4">
              {lang === 'ar'
                ? 'نتشرف في شركة سامي الشريف للمحاماة والاستشارات القانونية بتقديم خدمات واستشارات قانونية شاملة وموثوقة، تلبي الاحتياجات المتجددة لقطاع الأعمال والمؤسسات والأفراد.'
                : 'At Sami Al-Sharif Law Firm & Legal Consultations, we are honored to deliver comprehensive and trusted legal services tailored to the evolving needs of business sectors, entities, and individuals.'}
            </p>
            <p className="text-sm text-[#5C564B] leading-relaxed">
              {lang === 'ar'
                ? 'نجمع بين التأصيل الشرعي والنظامي العميق في أنظمة المملكة العربية السعودية وبين المرونة والابتكار في صياغة الحلول القانونية الوقائية والعلاجية.'
                : 'We combine deep statutory mastery of Saudi Arabian regulations with agile, innovative legal strategies that protect assets and resolve complex disputes.'}
            </p>
          </div>
        </div>

        {/* Our Vision Banner (Slide 4 & 13 Gold Showcase) & Our Mission (Slide 5 & 14) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-16 items-stretch">
          {/* Vision Card in Signature Regal Gold (#B69648) */}
          <div className="lg:col-span-5 rounded-xl bg-[#B69648] text-white p-8 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold text-white/90">
                {lang === 'ar' ? 'رؤيتنا · Our Vision' : 'Our Vision · رؤيتنا'}
              </span>
              <Eye className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3 leading-snug">
                {lang === 'ar'
                  ? 'المرجع الأول للخدمات القانونية الاحترافية والتخصصية'
                  : 'The Benchmark for Specialized Legal Excellence'}
              </h3>
              <p className="text-sm md:text-base text-white/95 leading-relaxed">
                {lang === 'ar'
                  ? 'أن نكون عنواناً للخدمات والاستشارات القانونية الاحترافية والتخصصية بطرق مبتكرة وغير تقليدية لكسب ثقة العملاء والتركيز على تحقيق رضاهم وتجاوز توقعاتهم.'
                  : 'To be the benchmark for professional and specialized legal services through innovative and unconventional approaches, earning client trust and exceeding expectations.'}
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
                    {lang === 'ar' ? 'رسالتنا · 01' : 'Our Mission · 01'}
                  </span>
                  <Award className="w-6 h-6 text-[#9A7B34]" />
                </div>
                <h3 className="text-lg font-bold text-[#141414] mb-2.5">
                  {lang === 'ar'
                    ? 'الصدارة والسمعة المرموقة'
                    : 'Leadership & Reputation'}
                </h3>
                <p className="text-sm text-[#4A463D] leading-relaxed">
                  {lang === 'ar'
                    ? 'نحرص على المحافظة على سمعتنا المرموقة والبقاء في صدارة مكاتب المحاماة محلياً وإقليمياً ودولياً، عبر التوظيف الأمثل للخبرات الطويلة.'
                    : 'Maintaining our prestigious reputation and leading law firms locally, regionally, and internationally through optimal deployment of extensive expertise.'}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0ECE1] text-xs text-[#6E675B]">
                {lang === 'ar'
                  ? 'تمثيل قانوني محلي وإقليمي ودولي'
                  : 'Local · Regional · International Presence'}
              </div>
            </div>

            {/* Mission 2: التقنية والجودة العالية */}
            <div className="bg-white rounded-xl p-7 border border-[#E5DEC9] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-semibold text-[#9A7B34]">
                    {lang === 'ar' ? 'رسالتنا · 02' : 'Our Mission · 02'}
                  </span>
                  <Cpu className="w-6 h-6 text-[#9A7B34]" />
                </div>
                <h3 className="text-lg font-bold text-[#141414] mb-2.5">
                  {lang === 'ar'
                    ? 'التقنية والجودة العالية'
                    : 'Technology & High Quality'}
                </h3>
                <p className="text-sm text-[#4A463D] leading-relaxed">
                  {lang === 'ar'
                    ? 'نسعى للريادة عبر توفير تمثيل ورعاية قانونية راقية وفقاً لأعلى المستويات وأفضل الممارسات الدولية، باستعمال التقنيات الحديثة.'
                    : 'Providing top-tier legal representation and care adhering to the highest international practices and modern legal technologies.'}
                </p>
              </div>
              <div className="pt-4 mt-6 border-t border-[#F0ECE1] text-xs text-[#6E675B]">
                {lang === 'ar'
                  ? 'أفضل الممارسات الدولية والتقنيات الحديثة'
                  : 'International Standards · Modern LegalTech'}
              </div>
            </div>
          </div>
        </div>

        {/* Our Values (Slide 6 & 15 - 5 Obsidian Cards with Gold Icons) */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="text-xs font-semibold text-[#9A7B34] mb-1.5">
                {lang === 'ar' ? 'قيمنا الجوهرية · Our Values' : 'Core Values · قيمنا'}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141414]">
                {lang === 'ar'
                  ? 'المبادئ الخمسة الحاكمة لأعمالنا القانونية'
                  : 'Five Guiding Principles of Our Legal Practice'}
              </h3>
            </div>
            <p className="text-xs md:text-sm text-[#5C564B]">
              {lang === 'ar'
                ? 'الشفافية · السرعة والدقة · الاحترافية · الابتكار · روح الفريق'
                : 'Transparency · Speed & Accuracy · Professionalism · Innovation · Teamwork'}
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
                    {lang === 'ar' ? val.titleAr : val.titleEn}
                  </h4>
                  <p className="text-xs text-[#C2B69C] leading-relaxed">
                    {lang === 'ar' ? val.descAr : val.descEn}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 text-[11px] text-[#D1B46A]">
                  {lang === 'ar' ? val.titleEn : val.titleAr}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Goals (Slide 7 & 16 - 4 Structured Cards) */}
        <div>
          <div className="mb-8">
            <div className="text-xs font-semibold text-[#9A7B34] mb-1.5">
              {lang === 'ar' ? 'أهدافنا الاستراتيجية · Our Goals' : 'Strategic Goals · أهدافنا'}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#141414]">
              {lang === 'ar'
                ? 'التزام راسخ بحماية المصالح وصون الخصوصية'
                : 'Steadfast Commitment to Client Protection & Excellence'}
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
                      {lang === 'ar' ? goal.titleAr : goal.titleEn}
                    </h4>
                    <CheckCircle2 className="w-4 h-4 text-[#9A7B34] shrink-0" />
                  </div>
                  <p className="text-xs md:text-sm text-[#4A463D] leading-relaxed">
                    {lang === 'ar' ? goal.descAr : goal.descEn}
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
