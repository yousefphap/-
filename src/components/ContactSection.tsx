import React, { useState, useEffect } from 'react';
import {
  Language,
  ActivePage,
  FIRM_CONTACT,
  SOCIAL_MEDIA_LINKS,
  SocialMediaPlatform,
  tr,
} from '../utils/lawFirmLogic';

const renderSocialPlatformIcon = (
  id: SocialMediaPlatform['id'],
  className = 'w-5 h-5'
) => {
  switch (id) {
    case 'whatsapp':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
      );
    case 'x':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case 'instagram':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
          <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" />
        </svg>
      );
    case 'snapchat':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
          <path d="M12.065 2c3.226 0 5.568 2.27 5.776 5.468.067 1.023-.073 2.138-.18 2.863-.05.337.075.562.362.662.43.149.988.268 1.375.475.344.184.484.513.344.849-.166.397-.665.622-1.267.798-.463.135-.773.329-.873.68-.133.469.146.976.578 1.576.78 1.084 1.91 2.094 3.237 2.55.346.119.583.394.525.736-.082.487-.778.887-1.855 1.078-.74.131-1.089.383-1.264.946-.145.469-.462.712-.964.712-.45 0-.968-.165-1.644-.312-.775-.169-1.454-.216-2.185-.216-.73 0-1.41.047-2.185.216-.676.147-1.194.312-1.644.312-.502 0-.819-.243-.964-.712-.175-.563-.524-.815-1.264-.946-1.077-.191-1.773-.591-1.855-1.078-.058-.342.179-.617.525-.736 1.327-.456 2.457-1.466 3.237-2.55.432-.6.711-1.107.578-1.576-.1-.351-.41-.545-.873-.68-.602-.176-1.101-.401-1.267-.798-.14-.336 0-.665.344-.849.387-.207.945-.326 1.375-.475.287-.1.412-.325.362-.662-.107-.725-.247-1.84-.18-2.863C6.497 4.27 8.839 2 12.065 2z" />
        </svg>
      );
    case 'tiktok':
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
          <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z" />
        </svg>
      );
    case 'facebook':
    default:
      return (
        <svg viewBox="0 0 24 24" className={`${className} fill-current`} aria-hidden="true">
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
        </svg>
      );
  }
};

interface ContactSectionProps {
  lang: Language;
  onNavigatePage?: (page: ActivePage) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.removeItem('sami_alshareef_tickets');
    } catch {
      // Ignore storage errors
    }
  }, []);

  const handleCopy = (value: string, key: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-20 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="rounded-3xl bg-[#F3EFE6] border border-[#DFD7C4] p-6 sm:p-10 lg:p-12 shadow-xs">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <div className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold text-[#9A7B34] mb-3">
              <span className="w-6 h-[1.5px] bg-[#C69C47]" aria-hidden="true" />
              <span>
                {tr(lang, 'تواصل معنا', 'Contact Us', 'ہم سے رابطہ کریں')}
              </span>
              <span className="w-6 h-[1.5px] bg-[#C69C47]" aria-hidden="true" />
            </div>

            <h2
              className="text-2xl sm:text-4xl font-bold text-[#141414] leading-snug mb-3"
              style={{ textWrap: 'balance' }}
            >
              {lang === 'ar' ? (
                <>
                  ابدأ بحماية مصالحك مع{' '}
                  <span className="text-[#1B4332]">شركة سامي الشريف.</span>
                </>
              ) : lang === 'ur' ? (
                <>
                  اپنے قانونی مفادات کا تحفظ شروع کریں{' '}
                  <span className="text-[#1B4332]">سامی الشریف لاء فرم کے ساتھ۔</span>
                </>
              ) : (
                <>
                  Start Protecting Your Interests With{' '}
                  <span className="text-[#1B4332]">Sami Al-Sharif Law Firm.</span>
                </>
              )}
            </h2>

            <p className="text-sm sm:text-base text-[#5C564B] leading-relaxed">
              {tr(
                lang,
                'تواصل معنا مباشرة عبر القنوات الرسمية لطلب استشارة قانونية متخصصة أو تمثيل قضائي لقطاع الأعمال والأفراد في مكة المكرمة وجدة وجميع أنحاء المملكة.',
                'Reach out directly through our official channels for specialized legal consultation or judicial representation in Makkah, Jeddah, and across Saudi Arabia.',
                'مکہ مکرمہ، جدہ اور سعودی عرب بھر میں خصوصی قانونی مشاورت یا عدالتی نمائندگی کے لیے ہمارے سرکاری ذرائع سے براہِ راست رابطہ کریں۔'
              )}
            </p>
          </div>

          {/* 4 Official Direct Contact Cards in a 2x2 Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* 1. Direct Phone */}
            <div className="rounded-2xl bg-white p-5 border border-[#E5DEC9] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#1B4332]/8 text-[#1B4332] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 stroke-current fill-none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#6E675B]">
                    {tr(lang, 'الهاتف المباشر', 'Direct Phone', 'براہِ راست فون')}
                  </div>
                  <a
                    href={`tel:${FIRM_CONTACT.phoneInternational}`}
                    className="text-sm sm:text-base font-bold text-[#141414] hover:text-[#1B4332] font-mono-tabular"
                  >
                    {FIRM_CONTACT.phoneDisplay}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(FIRM_CONTACT.phoneDisplay, 'phone')}
                className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5DEC9] text-xs font-semibold text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-colors cursor-pointer shrink-0"
              >
                {copiedKey === 'phone' ? '✓' : tr(lang, 'نسخ', 'Copy', 'کاپی')}
              </button>
            </div>

            {/* 2. WhatsApp Consultation */}
            <div className="rounded-2xl bg-white p-5 border border-[#E5DEC9] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#1B4332]/8 text-[#1B4332] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#6E675B]">
                    {tr(
                      lang,
                      'واتساب الاستشارات المباشر',
                      'WhatsApp Consultation',
                      'براہِ راست واٹس ایپ مشاورت'
                    )}
                  </div>
                  <a
                    href={FIRM_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm sm:text-base font-bold text-[#141414] hover:text-[#1B4332] font-mono-tabular"
                  >
                    {FIRM_CONTACT.whatsappDisplay}
                  </a>
                </div>
              </div>
              <a
                href={FIRM_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#1B4332] text-white text-xs font-bold hover:bg-[#143325] transition-colors shrink-0"
              >
                {tr(lang, 'محادثة ←', 'Chat →', 'رابطہ ←')}
              </a>
            </div>

            {/* 3. Official Email */}
            <div className="rounded-2xl bg-white p-5 border border-[#E5DEC9] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="w-12 h-12 rounded-xl bg-[#1B4332]/8 text-[#1B4332] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 stroke-current fill-none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#6E675B]">
                    {tr(lang, 'البريد الإلكتروني', 'Official Email', 'سرکاری ای میل')}
                  </div>
                  <a
                    href={`mailto:${FIRM_CONTACT.email}`}
                    className="text-xs sm:text-sm font-bold text-[#141414] hover:text-[#1B4332] font-mono-tabular truncate block"
                  >
                    {FIRM_CONTACT.email}
                  </a>
                </div>
              </div>
              <button
                type="button"
                onClick={() => handleCopy(FIRM_CONTACT.email, 'email')}
                className="px-3 py-1.5 rounded-lg bg-[#FAF8F5] border border-[#E5DEC9] text-xs font-semibold text-[#1B4332] hover:bg-[#1B4332] hover:text-white transition-colors cursor-pointer shrink-0"
              >
                {copiedKey === 'email' ? '✓' : tr(lang, 'نسخ', 'Copy', 'کاپی')}
              </button>
            </div>

            {/* 4. Makkah & Jeddah Location + Google Maps Link */}
            <div className="rounded-2xl bg-white p-5 border border-[#E5DEC9] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#1B4332]/8 text-[#1B4332] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 stroke-current fill-none"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-[#6E675B]">
                    {tr(
                      lang,
                      'المقر الرئيسي والفروع',
                      'Main Office & Branches',
                      'مرکزی دفتر اور شاخیں'
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-[#141414]">
                    {tr(
                      lang,
                      FIRM_CONTACT.locationAr,
                      FIRM_CONTACT.locationEn,
                      FIRM_CONTACT.locationUr
                    )}
                  </div>
                </div>
              </div>
              <a
                href={FIRM_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-lg bg-[#C69C47]/20 text-[#9A7B34] hover:bg-[#C69C47] hover:text-[#141414] text-xs font-bold transition-colors whitespace-nowrap shrink-0"
              >
                {tr(lang, 'خرائط قوقل ←', 'Google Maps →', 'گوگل میپس ←')}
              </a>
            </div>
          </div>

          {/* Official Social Media Logos Card */}
          <div className="rounded-2xl bg-[#141414] p-6 border border-[#C69C47]/50">
            <div className="text-xs sm:text-sm font-semibold text-[#C69C47] mb-4 text-center">
              {tr(
                lang,
                'منصات التواصل الرسمية لشركة سامي الشريف للمحاماة',
                'Official Social Channels',
                'سامی الشریف لاء فرم کے سرکاری سوشل میڈیا اکاؤنٹس'
              )}
            </div>
            <div className="flex items-center justify-center gap-3.5 flex-wrap">
              {SOCIAL_MEDIA_LINKS.map((platform) => (
                <a
                  key={platform.id}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={tr(lang, platform.nameAr, platform.nameEn, platform.nameUr)}
                  aria-label={tr(lang, platform.nameAr, platform.nameEn, platform.nameUr)}
                  className="w-11 h-11 rounded-xl bg-[#1C1B18] border border-[#C69C47]/60 text-[#C69C47] hover:bg-[#C69C47] hover:text-white hover:border-white transition-all flex items-center justify-center"
                >
                  {renderSocialPlatformIcon(platform.id, 'w-5 h-5')}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
