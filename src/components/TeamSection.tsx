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
  const executiveCards = [
    {
      id: 'founder-sami',
      isFounder: true,
      badgeAr: 'المؤسس والمدير العام',
      badgeEn: 'Founder & Managing Director',
      badgeUr: 'بانی اور مینیجنگ ڈائریکٹر',
      nameAr: FOUNDER_PROFILE.nameAr,
      nameEn: FOUNDER_PROFILE.nameEn,
      nameUr: FOUNDER_PROFILE.nameUr,
      specialtyAr: 'القضايا التجارية والشركات والتحكيم',
      specialtyEn: 'Commercial Litigation, Corporate & Arbitration',
      specialtyUr: 'تجارتی مقدمات، کمپنیاں اور ثالثی',
      bioAr:
        'خبرة راسخة في الترافع أمام المحاكم التجارية والعامة واللجان القضائية، وتأسيس وحوكمة الشركات وصياغة العقود الكبرى في مكة المكرمة وجدة.',
      bioEn:
        'Extensive experience in commercial litigation, corporate governance, and high-value contract structuring across Makkah, Jeddah, and the Kingdom.',
      bioUr:
        'مکہ مکرمہ اور جدہ میں تجارتی عدالتوں میں پیروی، کمپنیوں کے قیام اور بڑے معاہدوں کی تیاری کا وسیع تجربہ۔',
      metaAr: FOUNDER_PROFILE.credentialsAr,
      metaEn: FOUNDER_PROFILE.credentialsEn,
      metaUr: FOUNDER_PROFILE.credentialsUr,
    },
    {
      id: 'litigation-unit',
      isFounder: false,
      badgeAr: TEAM_PILLARS[0].roleAr,
      badgeEn: TEAM_PILLARS[0].roleEn,
      badgeUr: TEAM_PILLARS[0].roleUr,
      nameAr: TEAM_PILLARS[0].titleAr,
      nameEn: TEAM_PILLARS[0].titleEn,
      nameUr: TEAM_PILLARS[0].titleUr,
      specialtyAr: 'المرافعات القضائية، العقارات، والأحوال الشخصية',
      specialtyEn: 'Judicial Pleadings, Real Estate & Family Law',
      specialtyUr: 'عدالتی مرافعات، جائیداد اور عائلی قوانین',
      bioAr: TEAM_PILLARS[0].descAr,
      bioEn: TEAM_PILLARS[0].descEn,
      bioUr: TEAM_PILLARS[0].descUr,
      metaAr: TEAM_PILLARS[0].specialtiesAr.join(' · '),
      metaEn: TEAM_PILLARS[0].specialtiesEn.join(' · '),
      metaUr: TEAM_PILLARS[0].specialtiesUr.join(' · '),
    },
    {
      id: 'corporate-unit',
      isFounder: false,
      badgeAr: TEAM_PILLARS[1].roleAr,
      badgeEn: TEAM_PILLARS[1].roleEn,
      badgeUr: TEAM_PILLARS[1].roleUr,
      nameAr: TEAM_PILLARS[1].titleAr,
      nameEn: TEAM_PILLARS[1].titleEn,
      nameUr: TEAM_PILLARS[1].titleUr,
      specialtyAr: 'تأسيس الشركات، العقود، والامتثال النظامي',
      specialtyEn: 'Corporate Formation, Contracts & Compliance',
      specialtyUr: 'کمپنیوں کا قیام، معاہدات اور قانونی تعمیل',
      bioAr: TEAM_PILLARS[1].descAr,
      bioEn: TEAM_PILLARS[1].descEn,
      bioUr: TEAM_PILLARS[1].descUr,
      metaAr: TEAM_PILLARS[1].specialtiesAr.join(' · '),
      metaEn: TEAM_PILLARS[1].specialtiesEn.join(' · '),
      metaUr: TEAM_PILLARS[1].specialtiesUr.join(' · '),
    },
  ];

  return (
    <section id="team" className="py-20 bg-white border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Centered Section Header matching Video 00:14 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-bold text-[#9A7B34] mb-3">
            <span className="w-6 h-[1.5px] bg-[#C69C47]" aria-hidden="true" />
            <span>
              {tr(
                lang,
                'فريق العمل',
                'Our Legal Team',
                'ہماری قانونی ٹیم'
              )}
            </span>
            <span className="w-6 h-[1.5px] bg-[#C69C47]" aria-hidden="true" />
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold text-[#141414] leading-snug mb-3"
            style={{ textWrap: 'balance' }}
          >
            {tr(
              lang,
              'نخب قانونية بخبرات رائدة',
              'Distinguished Legal Minds With Leading Expertise',
              'قیادت اور وسیع تجربہ رکھنے والے منتخب قانونی ماہرین'
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#5C564B] leading-relaxed">
            {tr(
              lang,
              'نفتخر بطاقمنا المحترف بقيادة المحامي والمستشار القانوني سامي الشريف، المكون من نخبة مختارة من المحامين والمختصين القانونيين ذوي المؤهلات العالية.',
              'Led by Attorney & Legal Counselor Sami Al-Sharif, our firm brings together elite lawyers and legal specialists.',
              'ایڈووکیٹ اور قانونی مشیر سامی الشریف کی قیادت میں ہماری فرم اعلیٰ تعلیمی قابلیت اور وسیع عملی تجربہ رکھنے والے وکلاء پر مشتمل ہے۔'
            )}
          </p>
        </div>

        {/* 3 Vertical Portrait Cards matching Video 00:14-00:15 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-12">
          {executiveCards.map((card, idx) => (
            <article
              key={card.id}
              className={`rounded-2xl overflow-hidden border transition-all flex flex-col justify-between bg-[#FAF8F5] ${
                card.isFounder
                  ? 'border-[#C69C47] shadow-lg'
                  : 'border-[#E5DEC9] hover:border-[#C69C47] shadow-xs'
              }`}
            >
              <div>
                {/* Dark Studio Portrait Visual Header with Overlapping Role Badge */}
                <div
                  className="relative h-64 overflow-hidden flex items-center justify-center"
                  style={{
                    background: card.isFounder
                      ? 'radial-gradient(circle at 50% 32%, rgba(198,156,71,0.28) 0%, rgba(27,67,50,0.88) 48%, #0B1912 100%)'
                      : idx === 1
                      ? 'radial-gradient(circle at 50% 32%, rgba(27,67,50,0.45) 0%, #141D19 65%, #0B110E 100%)'
                      : 'radial-gradient(circle at 50% 32%, rgba(198,156,71,0.2) 0%, #171B19 65%, #0D100F 100%)',
                  }}
                >
                  {/* Subtle Architectural Grid Lines */}
                  <div
                    className="absolute inset-0 opacity-15 pointer-events-none"
                    style={{
                      backgroundImage:
                        'linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.12) 1px, transparent 1px)',
                      backgroundSize: '32px 32px',
                    }}
                    aria-hidden="true"
                  />

                  {/* Stylized Executive Silhouette / Emblem */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className={`w-24 h-24 rounded-full flex items-center justify-center border-2 shadow-xl ${
                        card.isFounder
                          ? 'bg-[#141414]/80 border-[#C69C47] text-[#C69C47]'
                          : 'bg-[#141414]/70 border-white/20 text-[#E2ECE7]'
                      }`}
                    >
                      {card.isFounder ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-11 h-11 stroke-current fill-none"
                          strokeWidth="1.6"
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
                      ) : idx === 1 ? (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-11 h-11 stroke-current fill-none"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <polyline points="16 11 18 13 22 9" />
                        </svg>
                      ) : (
                        <svg
                          viewBox="0 0 24 24"
                          className="w-11 h-11 stroke-current fill-none"
                          strokeWidth="1.6"
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
                      )}
                    </div>
                  </div>

                  {/* Bottom Gradient Scrim */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Overlapping Role Badge inside Bottom of Portrait Header (Video 00:14) */}
                  <div className="absolute bottom-4 right-5 left-5 flex items-center justify-between">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-bold shadow-sm ${
                        card.isFounder
                          ? 'bg-[#C69C47] text-[#141414]'
                          : 'bg-[#1B4332] text-white border border-white/15'
                      }`}
                    >
                      {tr(lang, card.badgeAr, card.badgeEn, card.badgeUr)}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-bold text-[#141414] mb-1">
                    {tr(lang, card.nameAr, card.nameEn, card.nameUr)}
                  </h3>
                  <div className="text-xs font-bold text-[#1B4332] mb-3.5">
                    {tr(lang, card.specialtyAr, card.specialtyEn, card.specialtyUr)}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C564B] leading-relaxed mb-5">
                    {tr(lang, card.bioAr, card.bioEn, card.bioUr)}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 sm:px-7 pb-6 pt-4 border-t border-[#E5DEC9] flex items-center justify-between gap-2">
                <span className="text-[11px] font-semibold text-[#6E675B] truncate">
                  {tr(lang, card.metaAr, card.metaEn, card.metaUr)}
                </span>
                {onBookConsultation && (
                  <button
                    type="button"
                    onClick={onBookConsultation}
                    className="text-xs font-bold text-[#1B4332] hover:text-[#9A7B34] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    {tr(lang, 'حجز موعد ←', 'Book →', 'وقت بک کریں ←')}
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Founder Leadership Highlights Banner */}
        <div className="rounded-2xl bg-[#1B4332] text-white border border-[#C69C47]/50 p-6 sm:p-8 shadow-md">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <div className="text-xs font-bold text-[#C69C47] mb-1.5">
                {tr(
                  lang,
                  'إشراف قانوني مباشر · مكتب المحامي والمستشار سامي الشريف',
                  'Direct Legal Supervision · Office of Counselor Sami Al-Sharif',
                  'براہِ راست قانونی نگرانی · دفتر ایڈووکیٹ و مشیر سامی الشریف'
                )}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {tr(
                  lang,
                  'تخضع كافة القضايا والعقود لمراجعة منهجية دقيقة لضمان أعلى معايير الحماية النظامية',
                  'All cases and contracts undergo rigorous legal review to ensure maximum statutory protection',
                  'تمام مقدمات اور معاہدے اعلیٰ ترین قانونی تحفظ کو یقینی بنانے کے لیے مکمل جانچ پڑتال سے گزرتے ہیں'
                )}
              </h3>
              <div className="flex flex-wrap gap-2 mt-3">
                {tr(
                  lang,
                  FOUNDER_PROFILE.highlightsAr,
                  FOUNDER_PROFILE.highlightsEn,
                  FOUNDER_PROFILE.highlightsUr
                ).map((item, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/10 text-xs text-[#E2ECE7]"
                  >
                    <span className="text-[#C69C47]">✓</span>
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {onBookConsultation && (
                <button
                  type="button"
                  onClick={onBookConsultation}
                  className="px-5 py-3 rounded-xl bg-[#C69C47] hover:bg-[#D4AF37] text-[#141414] font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  {tr(
                    lang,
                    'احجز استشارة مع مكتب المؤسس',
                    'Book with Founder Office',
                    'بانی کے دفتر کے ساتھ مشاورت بک کریں'
                  )}
                </button>
              )}
              <a
                href={FIRM_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold text-xs sm:text-sm transition-colors"
              >
                {tr(
                  lang,
                  `واتساب مباشر (${FIRM_CONTACT.whatsappDisplay})`,
                  `WhatsApp (${FIRM_CONTACT.whatsappDisplay})`,
                  `براہِ راست واٹس ایپ (${FIRM_CONTACT.whatsappDisplay})`
                )}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
