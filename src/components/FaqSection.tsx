import React, { useState } from 'react';
import {
  Language,
  FAQ_ITEMS,
  FIRM_CONTACT,
  tr,
} from '../utils/lawFirmLogic';

interface FaqSectionProps {
  lang: Language;
  onBookConsultation: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  lang,
  onBookConsultation,
}) => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0]?.id || 'faq-confidentiality');

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-20 bg-[#FAF8F5] border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left/Right Column: Section Header & Direct Assurance Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold text-[#9A7B34] mb-2">
              {tr(
                lang,
                '05. أسئلة شائعة · Frequently Asked Questions',
                '05. Frequently Asked Questions · أسئلة شائعة',
                '05. عام پوچھے گئے سوالات · FAQ'
              )}
            </div>
            <h2
              className="text-2xl sm:text-3xl font-bold text-[#141414] leading-snug mb-4"
              style={{ textWrap: 'balance' }}
            >
              {tr(
                lang,
                'إجابات واضحة تطمئنك قبل التعاقد والبدء في الإجراءات القانونية',
                'Clear Answers Before Signing & Initiating Legal Proceedings',
                'معاہدے اور قانونی کارروائی شروع کرنے سے پہلے آپ کے اطمینان کے لیے واضح جوابات'
              )}
            </h2>
            <p className="text-sm sm:text-base text-[#4A463D] leading-relaxed mb-6">
              {tr(
                lang,
                'نؤمن بالشفافية المطلقة مع موكلينا من قطاع الأعمال والأفراد في مكة المكرمة وجدة وجميع أنحاء المملكة حول سرية البيانات، آلية تسعير الأتعاب، وعقود الرعاية السنوية.',
                'We believe in complete transparency with our corporate and individual clients across Makkah, Jeddah, and Saudi Arabia regarding data confidentiality, fee structures, and annual retainers.',
                'ہم مکہ مکرمہ، جدہ اور سعودی عرب بھر میں اپنے کاروباری اور انفرادی مؤکلین کے ساتھ ڈیٹا کی رازداری، فیس کے تعین اور سالانہ معاہدوں کے حوالے سے مکمل شفافیت پر یقین رکھتے ہیں۔'
              )}
            </p>

            {/* Quick CTA Card inside FAQ */}
            <div className="rounded-2xl bg-[#141414] text-white p-6 border border-[#B69648]">
              <div className="text-xs font-bold text-[#D1B46A] mb-1">
                {tr(
                  lang,
                  'هل لديك استفسار خاص بملفك القانوني؟',
                  'Have a Specific Question About Your Case?',
                  'کیا آپ کے قانونی معاملے سے متعلق کوئی خاص سوال ہے؟'
                )}
              </div>
              <p className="text-xs sm:text-sm text-[#D5CEBF] leading-relaxed mb-5">
                {tr(
                  lang,
                  'تواصل مباشرة مع مستشار قانوني مختص للحصول على إجابة دقيقة وتقييم أولي لموقفك النظامي.',
                  'Speak directly with a specialized legal counselor for an accurate answer and preliminary assessment.',
                  'درست جواب اور اپنی قانونی پوزیشن کے ابتدائی جائزے کے لیے براہِ راست ماہر قانونی مشیر سے رابطہ کریں۔'
                )}
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="px-4 py-2.5 rounded-lg bg-[#D1B46A] hover:bg-white text-[#141414] font-bold text-xs transition-colors cursor-pointer"
                >
                  {tr(
                    lang,
                    'احجز استشارتك الآن',
                    'Book Consultation Now',
                    'ابھی مشاورت بک کریں'
                  )}
                </button>
                <a
                  href={FIRM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#1C1B18] hover:bg-[#B69648] text-white hover:text-[#141414] border border-[#B69648]/60 font-semibold text-xs transition-colors"
                >
                  {tr(
                    lang,
                    `واتساب (${FIRM_CONTACT.whatsappDisplay})`,
                    `WhatsApp (${FIRM_CONTACT.whatsappDisplay})`,
                    `واٹس ایپ (${FIRM_CONTACT.whatsappDisplay})`
                  )}
                </a>
              </div>
            </div>
          </div>

          {/* Accordion List (7 cols) */}
          <div className="lg:col-span-7 space-y-3.5">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border transition-all ${
                    isOpen
                      ? 'bg-white border-[#B69648] shadow-sm'
                      : 'bg-white/80 border-[#D8CEB8] hover:border-[#B69648]'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-6 py-5 text-start flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="w-7 h-7 rounded-lg bg-[#FAF8F5] border border-[#E5DEC9] text-[#9A7B34] font-mono-tabular text-xs font-bold flex items-center justify-center shrink-0">
                        0{index + 1}
                      </span>
                      <span className="text-base font-bold text-[#141414] leading-snug">
                        {tr(lang, faq.questionAr, faq.questionEn, faq.questionUr)}
                      </span>
                    </div>

                    <span
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#141414] text-[#D1B46A]'
                          : 'bg-[#FAF8F5] text-[#141414]'
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className={`w-4 h-4 stroke-current fill-none transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-[#F0EAE0] text-sm text-[#4A463D] leading-relaxed">
                      {tr(lang, faq.answerAr, faq.answerEn, faq.answerUr)}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
