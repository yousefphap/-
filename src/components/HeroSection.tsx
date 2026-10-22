import React, { useRef, useEffect } from 'react';
import {
  Language,
  FIRM_CONTACT,
  TRUST_BAR_ITEMS,
  HERO_STATS_COUNTER,
  isRtl,
  tr,
} from '../utils/lawFirmLogic';

interface HeroSectionProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  onOpenProfileModal: () => void;
  onBookConsultation: () => void;
  onOpenCalculators?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onSelectLang,
  onOpenProfileModal,
  onBookConsultation,
  onOpenCalculators,
}) => {
  const rtl = isRtl(lang);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;
    const handleLoaded = () => {
      try {
        vid.currentTime = 0.25;
      } catch {
        // Ignore seek error before metadata
      }
    };
    const handleTimeUpdate = () => {
      // Loop strictly within the 0.25s - 6.3s hero scene before the recording scrolls
      if (vid.currentTime >= 6.3) {
        vid.currentTime = 0.25;
      }
    };
    vid.addEventListener('loadedmetadata', handleLoaded);
    vid.addEventListener('timeupdate', handleTimeUpdate);
    return () => {
      vid.removeEventListener('loadedmetadata', handleLoaded);
      vid.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative">
      {/* PART 1: Full-Viewport Cinematic Dark Hero (Matches 00:00 - 00:07 of Reference Video) */}
      <div className="relative min-h-[88vh] flex flex-col justify-between overflow-hidden bg-[#0A1410] text-white">
        {/* Background Video Layer (Clamped to 0.25s-6.3s luxury corridor & skyline scene) */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <video
            ref={videoRef}
            src="/assets/aistudio/WhatsApp_Video_2026-10-22_at_9.40.05_AM_f2533854.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="w-full h-full object-cover object-left scale-[1.22] opacity-65"
          />

          {/* Directional Scrim Mask: Completely covers the right-side & top/bottom areas of the raw video while revealing the left-side luxury corridor & window scene */}
          <div
            className="absolute inset-0"
            style={{
              background: rtl
                ? 'linear-gradient(90deg, rgba(10,20,16,0.38) 0%, rgba(10,20,16,0.72) 36%, rgba(10,20,16,1) 50%, rgba(10,20,16,1) 100%)'
                : 'linear-gradient(270deg, rgba(10,20,16,0.38) 0%, rgba(10,20,16,0.72) 36%, rgba(10,20,16,1) 50%, rgba(10,20,16,1) 100%)',
            }}
          />
          {/* Top and Bottom Cinematic Vignettes */}
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0A1410] via-[#0A1410]/90 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0A1410] via-[#0A1410]/90 to-transparent" />
          {/* Subtle Warm Gold Ambient Glow */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                'radial-gradient(circle at 75% 35%, rgba(198, 156, 71, 0.22), transparent 52%)',
            }}
          />
        </div>

        {/* Top Utility Bar Inside Hero: Languages, Smart Calculators & Company Profile */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/12">
            <div className="flex flex-wrap items-center gap-2.5 text-xs text-white/80">
              <span className="font-bold text-[#C69C47]">
                {tr(
                  lang,
                  'مرخص من وزارة العدل السعودية · عضوية الهيئة السعودية للمحامين',
                  'Licensed by Saudi Ministry of Justice · SBA Member',
                  'سعودی وزارتِ انصاف سے لائسنس یافتہ · سعودی بار ایسوسی ایشن'
                )}
              </span>
              <span aria-hidden="true" className="text-white/30">
                ·
              </span>
              <a
                href={FIRM_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-white hover:text-[#C69C47] transition-colors tabular-nums"
              >
                <span>{tr(lang, 'واتساب مباشر:', 'WhatsApp:', 'واٹس ایپ:')}</span>
                <span dir="ltr" className="text-[#C69C47]">
                  {FIRM_CONTACT.whatsappDisplay}
                </span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {onOpenCalculators && (
                <a
                  href="calculators.html"
                  onClick={(e) => {
                    e.preventDefault();
                    onOpenCalculators();
                  }}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-[#141414] bg-[#C69C47] hover:bg-[#D8B467] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-3.5 h-3.5 shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="4" y="2" width="16" height="20" rx="2" />
                    <line x1="8" y1="6" x2="16" y2="6" />
                    <line x1="8" y1="10" x2="16" y2="10" />
                    <line x1="8" y1="14" x2="12" y2="14" />
                  </svg>
                  <span>
                    {tr(
                      lang,
                      'الحاسبات القانونية الذكية',
                      'Smart Legal Calculators',
                      'ذہین قانونی کیلکولیٹرز'
                    )}
                  </span>
                </a>
              )}

              <button
                type="button"
                onClick={onOpenProfileModal}
                className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-white/10 border border-white/20 rounded-lg hover:border-[#C69C47] hover:text-[#C69C47] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5 text-[#C69C47] shrink-0"
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
            </div>
          </div>
        </div>

        {/* Center Hero Proposition (Exact Typography & Layout from 00:00 - 00:07 of Video) */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 py-14 lg:py-20">
          <div className="max-w-2xl">
            {/* Gold Horizontal Line + Firm Eyebrow */}
            <div className="inline-flex items-center gap-3 mb-6">
              <span
                aria-hidden="true"
                className="w-8 h-[2px] bg-[#C69C47] inline-block shrink-0"
              />
              <span className="text-sm sm:text-base font-bold text-[#C69C47] tracking-wide">
                {tr(
                  lang,
                  FIRM_CONTACT.firmNameAr,
                  FIRM_CONTACT.firmNameEn,
                  FIRM_CONTACT.firmNameUr
                )}
              </span>
            </div>

            {/* 2-Line Dramatic Headline: White First Line + Warm Gold Second Line */}
            <h1
              className={`text-4xl sm:text-6xl lg:text-[68px] font-bold leading-[1.14] mb-6 ${
                lang === 'en' ? 'font-en-display tracking-tight' : 'font-calligraphy'
              }`}
              style={{ textWrap: 'balance' }}
            >
              <span className="block text-white">
                {tr(lang, 'خبرة قانونية', 'Legal Expertise', 'قانونی مہارت جو')}
              </span>
              <span className="block text-[#C69C47] mt-2">
                {tr(
                  lang,
                  'تحمي مصالحك.',
                  'That Protects Your Interests.',
                  'آپ کے مفادات کا تحفظ کرے۔'
                )}
              </span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-10 max-w-xl">
              {tr(
                lang,
                'حلول قانونية واستشارات استراتيجية للأفراد وقطاع الأعمال والمستثمرين، ترتكز على الخبرة، الكفاءة، والفهم العميق للبيئة القانونية في المملكة العربية السعودية.',
                'Strategic legal solutions and judicial representation for individuals, businesses, and investors—built on deep mastery of the legal environment in Saudi Arabia.',
                'افراد، کاروباری اداروں اور سرمایہ کاروں کے لیے اسٹریٹجک قانونی حل اور مشاورت، جو مملکتِ سعودی عرب کے قانونی ماحول کی گہری سمجھ اور مہارت پر مبنی ہے۔'
              )}
            </p>

            {/* Primary & Secondary Action Buttons (Matches Video + WhatsApp Direct Line) */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookConsultation}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-sm sm:text-base font-bold text-[#141414] bg-[#C69C47] hover:bg-[#D8B467] rounded-lg transition-all duration-150 cursor-pointer shadow-lg"
              >
                <span>
                  {tr(
                    lang,
                    'احجز استشارتك القانونية الآن',
                    'Book Consultation Now',
                    'ابھی قانونی مشاورت بک کریں'
                  )}
                </span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 shrink-0"
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

              <button
                type="button"
                onClick={scrollToServices}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-sm sm:text-base font-bold text-white bg-white/8 hover:bg-white/15 border border-white/25 hover:border-[#C69C47] rounded-lg transition-all duration-150 cursor-pointer backdrop-blur-xs"
              >
                <span>
                  {tr(lang, 'استكشف خدماتنا', 'Explore Our Services', 'ہماری خدمات دیکھیں')}
                </span>
              </button>

              <a
                href={FIRM_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-xs sm:text-sm font-bold text-[#C69C47] hover:text-white bg-[#141414]/80 hover:bg-[#1B4332] border border-[#C69C47]/40 rounded-lg transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current shrink-0"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                </svg>
                <span>
                  {tr(
                    lang,
                    `تواصل مباشرة عبر واتساب (${FIRM_CONTACT.whatsappDisplay})`,
                    `WhatsApp (${FIRM_CONTACT.whatsappDisplay})`,
                    `واٹس ایپ (${FIRM_CONTACT.whatsappDisplay})`
                  )}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Hero Bar: Location/License on Right + Scroll Discovery on Left (Matches 00:05 of Video) */}
        <div className="relative z-10 max-w-[1280px] w-full mx-auto px-4 sm:px-6 pb-7">
          <div className="pt-5 border-t border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs text-white/75">
            <a
              href={FIRM_CONTACT.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#C69C47] transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 text-[#C69C47] shrink-0"
                aria-hidden="true"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                {tr(
                  lang,
                  'مكة المكرمة - جدة، المملكة العربية السعودية · ترخيص معتمد',
                  'Makkah - Jeddah, Kingdom of Saudi Arabia · Officially Licensed',
                  'مکہ مکرمہ - جدہ، مملکتِ سعودی عرب · باضابطہ لائسنس یافتہ'
                )}
              </span>
            </a>

            <button
              type="button"
              onClick={() => {
                const aboutEl = document.getElementById('about');
                if (aboutEl) aboutEl.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2.5 text-white/75 hover:text-[#C69C47] transition-colors cursor-pointer"
            >
              <span>{tr(lang, 'اكتشف المزيد', 'Discover More', 'مزید جانیے')}</span>
              <span
                aria-hidden="true"
                className="w-[1px] h-5 bg-gradient-to-b from-[#C69C47] to-transparent inline-block"
              />
            </button>
          </div>
        </div>
      </div>

      {/* PART 2: 4-Column Stats Counter Strip on Warm Cream (Matches 00:08 of Reference Video) */}
      <div className="bg-[#F7F4EE] border-b border-[#E5DEC9]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {HERO_STATS_COUNTER.map((stat) => (
              <div
                key={stat.id}
                className="flex items-center justify-between gap-4 bg-white/85 rounded-2xl p-5 border border-[#E5DEC9] shadow-2xs"
              >
                <div>
                  <div
                    dir="ltr"
                    className="text-3xl sm:text-4xl font-bold text-[#141414] font-mono-tabular inline-block"
                  >
                    {stat.value}
                  </div>
                  <div className="text-sm font-bold text-[#1B4332] mt-1">
                    {tr(lang, stat.labelAr, stat.labelEn, stat.labelUr)}
                  </div>
                  <div className="text-xs text-[#6E675B] mt-0.5">
                    {tr(lang, stat.sublabelAr, stat.sublabelEn, stat.sublabelUr)}
                  </div>
                </div>

                {/* Soft Emerald Icon Badge (Matches 00:08 of Video) */}
                <div className="w-11 h-11 rounded-xl bg-[#1B4332]/10 border border-[#1B4332]/20 text-[#1B4332] flex items-center justify-center shrink-0">
                  {stat.iconKey === 'clients' && (
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
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {stat.iconKey === 'consultations' && (
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
                  {stat.iconKey === 'cases' && (
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
                  {stat.iconKey === 'experience' && (
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
                </div>
              </div>
            ))}
          </div>

          {/* Official Trust Bar (شريط الثقة والتراخيص الرسمية) */}
          <div
            aria-label={tr(
              lang,
              'الاعتمادات والتراخيص الرسمية',
              'Official Accreditations & Compliance',
              'سرکاری لائسنس اور منظوریاں'
            )}
            className="mt-6 rounded-2xl bg-[#141414] text-white border border-[#C69C47]/40 p-5 md:p-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 divide-y md:divide-y-0 md:divide-x md:divide-x-reverse divide-white/10">
              {TRUST_BAR_ITEMS.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex items-start gap-3.5 ${
                    idx > 0 ? 'pt-4 md:pt-0 md:px-4' : ''
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1B4332] border border-[#C69C47]/50 text-[#C69C47] flex items-center justify-center shrink-0">
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
                    <h2 className="text-xs md:text-sm font-bold text-[#C69C47]">
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
      </div>
    </section>
  );
};

