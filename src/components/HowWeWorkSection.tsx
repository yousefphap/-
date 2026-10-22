import React from 'react';
import { Language, METHODOLOGY_STEPS, tr } from '../utils/lawFirmLogic';

interface HowWeWorkSectionProps {
  lang: Language;
  onBookConsultation: () => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({
  lang,
  onBookConsultation,
}) => {
  return (
    <section
      id="methodology"
      className="py-20 bg-[#FAF8F5] border-b border-[#E5DEC9]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Centered Header matching Video 00:13 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-bold text-[#9A7B34] mb-3">
            <span className="w-6 h-[1.5px] bg-[#C69C47]" aria-hidden="true" />
            <span>{tr(lang, 'كيف نعمل', 'How We Work', 'ہمارا طریقہ کار')}</span>
            <span className="w-6 h-[1.5px] bg-[#C69C47]" aria-hidden="true" />
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold text-[#141414] leading-snug mb-3"
            style={{ textWrap: 'balance' }}
          >
            {tr(
              lang,
              'منهجية قانونية دقيقة ومحكمة',
              'A Rigorous & Structured Legal Methodology',
              'منظم اور مربوط قانونی طریقہ کار'
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#5C564B] leading-relaxed">
            {tr(
              lang,
              'نتبع خطوات عمل منهجية مدروسة في كل قضية أو استشارة لضمان أعلى درجات الدقة وحماية مصالح موكلينا في كافة المراحل.',
              'We follow a disciplined four-stage process on every case and consultation to safeguard our clients’ interests.',
              'ہم ہر مقدمے اور مشاورت میں مؤکلین کے مفادات کے تحفظ کے لیے چار مرحلہ وار منظم طریقہ کار اپناتے ہیں۔'
            )}
          </p>
        </div>

        {/* 4 Connected Methodology Cards with Top Circular Gold-Bordered Badges (Video 00:13) */}
        <div className="relative">
          {/* Horizontal Connector Line on Desktop */}
          <div
            className="hidden lg:block absolute top-7 right-16 left-16 h-[1.5px] bg-[#DFD7C4]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {METHODOLOGY_STEPS.map((item, idx) => (
              <div
                key={item.id}
                className="flex flex-col items-center text-center group"
              >
                {/* Circular Step Badge */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center font-mono-tabular text-base font-bold border-2 mb-6 transition-all shadow-sm ${
                    idx === 0
                      ? 'bg-[#1B4332] text-[#C69C47] border-[#C69C47]'
                      : 'bg-white text-[#1B4332] border-[#C69C47] group-hover:bg-[#1B4332] group-hover:text-[#C69C47]'
                  }`}
                >
                  {item.number}
                </div>

                {/* Step Card */}
                <div className="w-full flex-1 rounded-2xl bg-white p-6 sm:p-7 border border-[#E5DEC9] hover:border-[#C69C47] transition-all shadow-xs flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#141414] mb-2.5">
                      {tr(lang, item.titleAr, item.titleEn, item.titleUr)}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#5C564B] leading-relaxed">
                      {tr(lang, item.descAr, item.descEn, item.descUr)}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-[#F0ECE1] flex items-center justify-between text-[11px] font-bold text-[#9A7B34]">
                    <span>
                      {tr(
                        lang,
                        `المرحلة ${item.number}`,
                        `Stage ${item.number}`,
                        `مرحلہ ${item.number}`
                      )}
                    </span>
                    <button
                      type="button"
                      onClick={onBookConsultation}
                      className="text-[#1B4332] hover:text-[#9A7B34] transition-colors cursor-pointer"
                    >
                      {tr(lang, 'ابدأ الآن ←', 'Start Now →', 'ابھی شروع کریں ←')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
