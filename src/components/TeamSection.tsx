import React from 'react';
import {
  Language,
  FOUNDER_PROFILE,
  TEAM_PILLARS,
  FIRM_CONTACT,
  tr,
} from '../utils/lawFirmLogic';

interface TeamSectionProps {
  lang: Language;
  onBookConsultation?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  lang,
  onBookConsultation,
}) => {
  const renderPillarIcon = (id: string) => {
    switch (id) {
      case 'legal-counselors':
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 stroke-current text-[#9A7B34] fill-none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <polyline points="16 11 18 13 22 9" />
          </svg>
        );
      case 'arbitration-experts':
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 stroke-current text-[#9A7B34] fill-none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 3v18" />
            <path d="M5 7h14" />
            <path d="M5 7l-3 6h6l-3-6z" />
            <path d="M19 7l-3 6h6l-3-6z" />
            <path d="M8 21h8" />
          </svg>
        );
      case 'corporate-specialists':
      default:
        return (
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 stroke-current text-[#9A7B34] fill-none"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18" />
            <path d="M14 8h3" />
            <path d="M14 12h3" />
            <path d="M14 16h3" />
          </svg>
        );
    }
  };

  return (
    <section id="team" className="py-20 bg-white border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#9A7B34] mb-2">
            {tr(
              lang,
              '04. القيادة وفريق عملنا · Leadership & Legal Team',
              '04. Leadership & Legal Team · القيادة وفريق عملنا',
              '04. قیادت اور ہماری قانونی ٹیم · Leadership & Team'
            )}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug mb-4"
            style={{ textWrap: 'balance' }}
          >
            {tr(
              lang,
              'قيادة قانونية راسخة ونخبة مختارة من المحامين والمستشارين المختصين',
              'Seasoned Legal Leadership & Selected Lawyers and Specialists',
              'مضبوط قانونی قیادت اور اعلیٰ قابلیت رکھنے والے منتخب وکلاء اور ماہرین'
            )}
          </h2>
          <p className="text-base text-[#4A463D] leading-relaxed">
            {tr(
              lang,
              'نفتخر بطاقمنا المحترف بقيادة المحامي والمستشار القانوني سامي الشريف، المكون من نخبة مختارة من المحامين والمختصين القانونيين ذوي المؤهلات الأكاديمية العالية والخبرات المتراكمة.',
              'Led by Attorney & Legal Counselor Sami Al-Sharif, our firm brings together elite lawyers and legal specialists with high academic qualifications and deep courtroom and corporate experience.',
              'ایڈووکیٹ اور قانونی مشیر سامی الشریف کی قیادت میں ہماری فرم اعلیٰ تعلیمی قابلیت اور وسیع عملی تجربہ رکھنے والے منتخب وکلاء اور قانونی ماہرین پر مشتمل ہے۔'
            )}
          </p>
        </div>

        {/* Flagship Founder Card: Attorney & Legal Counselor Sami Al-Sharif */}
        <div className="mb-10 rounded-2xl bg-[#141414] text-white border-2 border-[#B69648] p-7 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Founder Identity Seal & Badge Column (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center text-center bg-[#1C1B18] border border-[#B69648]/50 rounded-2xl p-6">
              <div className="w-20 h-20 rounded-2xl bg-[#B69648]/15 border-2 border-[#D1B46A] flex items-center justify-center text-[#D1B46A] mb-4">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 stroke-current fill-none"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3v18" />
                  <path d="M5 7h14" />
                  <path d="M5 7l-3 6h6l-3-6z" />
                  <path d="M19 7l-3 6h6l-3-6z" />
                  <path d="M8 21h8" />
                </svg>
              </div>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#B69648]/20 border border-[#B69648]/50 text-[#D1B46A] text-xs font-bold mb-2">
                {tr(
                  lang,
                  FOUNDER_PROFILE.roleAr,
                  FOUNDER_PROFILE.roleEn,
                  FOUNDER_PROFILE.roleUr
                )}
              </span>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {tr(
                  lang,
                  FOUNDER_PROFILE.nameAr,
                  FOUNDER_PROFILE.nameEn,
                  FOUNDER_PROFILE.nameUr
                )}
              </h3>

              <div className="text-xs text-[#C2B69C] font-medium mb-5">
                {tr(
                  lang,
                  FOUNDER_PROFILE.credentialsAr,
                  FOUNDER_PROFILE.credentialsEn,
                  FOUNDER_PROFILE.credentialsUr
                )}
              </div>

              <div className="w-full pt-4 border-t border-white/10 flex flex-col gap-2.5">
                {onBookConsultation && (
                  <button
                    type="button"
                    onClick={onBookConsultation}
                    className="w-full py-2.5 px-4 rounded-lg bg-[#D1B46A] hover:bg-white text-[#141414] font-bold text-xs transition-colors cursor-pointer"
                  >
                    {tr(
                      lang,
                      'احجز استشارة مع مكتب المؤسس',
                      'Book Consultation with Founder Office',
                      'بانی کے دفتر کے ساتھ مشاورت بک کریں'
                    )}
                  </button>
                )}
                <a
                  href={FIRM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#141414] hover:bg-[#B69648] text-white hover:text-[#141414] border border-[#B69648]/70 font-semibold text-xs transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>
                    {tr(
                      lang,
                      `تواصل مباشر عبر واتساب (${FIRM_CONTACT.whatsappDisplay})`,
                      `Direct WhatsApp (${FIRM_CONTACT.whatsappDisplay})`,
                      `براہِ راست واٹس ایپ (${FIRM_CONTACT.whatsappDisplay})`
                    )}
                  </span>
                </a>
              </div>
            </div>

            {/* Founder Executive Bio & Highlights Column (8 cols) */}
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-[#D1B46A] uppercase tracking-wider mb-2">
                <span className="w-2 h-2 rounded-full bg-[#D1B46A]" />
                <span>
                  {tr(
                    lang,
                    'كلمة وخبرة المؤسس القيادية',
                    'Founder Leadership & Legal Authority',
                    'بانی کی قائدانہ مہارت اور قانونی تجربہ'
                  )}
                </span>
              </div>

              <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug mb-4">
                {tr(
                  lang,
                  'خبرة قيادية راسخة في الأنظمة السعودية، التقاضي التجاري، وحوكمة الشركات',
                  'Extensive Leadership in Saudi Regulations, Commercial Litigation & Corporate Governance',
                  'سعودی قوانین، تجارتی مقدمات اور کارپوریٹ گورننس میں وسیع قائدانہ تجربہ'
                )}
              </h4>

              <p className="text-sm sm:text-base text-[#EAE3D2] leading-relaxed mb-6">
                {tr(
                  lang,
                  FOUNDER_PROFILE.bioAr,
                  FOUNDER_PROFILE.bioEn,
                  FOUNDER_PROFILE.bioUr
                )}
              </p>

              {/* Key Leadership Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tr(
                  lang,
                  FOUNDER_PROFILE.highlightsAr,
                  FOUNDER_PROFILE.highlightsEn,
                  FOUNDER_PROFILE.highlightsUr
                ).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#1C1B18] border border-white/10"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-[#D1B46A] stroke-current fill-none shrink-0 mt-0.5"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span className="text-xs sm:text-sm text-white font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Specialized Team Pillars: Lawyers, Legal Counselors, Corporate Formation Experts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TEAM_PILLARS.map((pillar, index) => (
            <div
              key={pillar.id}
              className="rounded-xl bg-[#FAF8F5] p-8 border border-[#D8CEB8] hover:border-[#B69648] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E5DEC9] flex items-center justify-center">
                    {renderPillarIcon(pillar.id)}
                  </div>
                  <span className="text-xs font-mono-tabular font-bold text-[#9A7B34]">
                    0{index + 1}
                  </span>
                </div>

                <div className="text-xs font-semibold text-[#9A7B34] mb-1">
                  {tr(lang, pillar.roleAr, pillar.roleEn, pillar.roleUr)}
                </div>
                <h3 className="text-xl font-bold text-[#141414] mb-3">
                  {tr(lang, pillar.titleAr, pillar.titleEn, pillar.titleUr)}
                </h3>
                <p className="text-sm text-[#4A463D] leading-relaxed mb-6">
                  {tr(lang, pillar.descAr, pillar.descEn, pillar.descUr)}
                </p>
              </div>

              <div className="pt-5 border-t border-[#E5DEC9]">
                <div className="text-xs font-semibold text-[#141414] mb-2">
                  {tr(
                    lang,
                    'مجالات التركيز الدقيق:',
                    'Core Focus Areas:',
                    'مرکزی مہارت کے شعبے:'
                  )}
                </div>
                <div className="text-xs text-[#5C564B] leading-relaxed">
                  {tr(
                    lang,
                    pillar.specialtiesAr,
                    pillar.specialtiesEn,
                    pillar.specialtiesUr
                  ).join(' · ')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
