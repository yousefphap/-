import React from 'react';
import { UserCheck, Scale, Cpu } from 'lucide-react';
import { Language, TEAM_PILLARS } from '../utils/lawFirmLogic';

interface TeamSectionProps {
  lang: Language;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ lang }) => {
  const renderPillarIcon = (id: string) => {
    switch (id) {
      case 'legal-counselors':
        return <UserCheck className="w-7 h-7 text-[#9A7B34]" />;
      case 'arbitration-experts':
        return <Scale className="w-7 h-7 text-[#9A7B34]" />;
      case 'corporate-specialists':
      default:
        return <Cpu className="w-7 h-7 text-[#9A7B34]" />;
    }
  };

  return (
    <section id="team" className="py-20 bg-white border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header (Slide 11 & 20) */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#9A7B34] mb-2">
            {lang === 'ar' ? '04. فريق عملنا · Our Team' : '04. Our Team · فريق عملنا'}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug mb-4"
            style={{ textWrap: 'balance' }}
          >
            {lang === 'ar'
              ? 'نخبة مختارة من المحامين والمختصين القانونيين ذوي المؤهلات الأكاديمية العالية'
              : 'Selected Lawyers & Legal Specialists with High Academic Qualifications'}
          </h2>
          <p className="text-base text-[#4A463D] leading-relaxed">
            {lang === 'ar'
              ? 'نفتخر بطاقمنا المحترف المكون من نخبة مختارة من المحامين والمختصين القانونيين، ذوي المؤهلات الأكاديمية العالية والخبرات المتراكمة.'
              : 'We take pride in our professional team of selected lawyers and legal specialists with high academic qualifications and accumulated experience.'}
          </p>
        </div>

        {/* 3 Core Team Pillars matching Slide 11 & 20 */}
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
                  {lang === 'ar' ? pillar.roleAr : pillar.roleEn}
                </div>
                <h3 className="text-xl font-bold text-[#141414] mb-3">
                  {lang === 'ar' ? pillar.titleAr : pillar.titleEn}
                </h3>
                <p className="text-sm text-[#4A463D] leading-relaxed mb-6">
                  {lang === 'ar' ? pillar.descAr : pillar.descEn}
                </p>
              </div>

              <div className="pt-5 border-t border-[#E5DEC9]">
                <div className="text-xs font-semibold text-[#141414] mb-2">
                  {lang === 'ar' ? 'مجالات التركيز الدقيق:' : 'Core Focus Areas:'}
                </div>
                <div className="text-xs text-[#5C564B] leading-relaxed">
                  {(lang === 'ar' ? pillar.specialtiesAr : pillar.specialtiesEn).join(
                    ' · '
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
