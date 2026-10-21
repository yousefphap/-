import React, { useState, useEffect } from 'react';
import {
  Language,
  ActivePage,
  ClientEntityType,
  UrgencyLevel,
  ConsultationFormInput,
  ConsultationValidationErrors,
  ConsultationTicket,
  LEGAL_SERVICES,
  FIRM_CONTACT,
  SOCIAL_MEDIA_LINKS,
  SocialMediaPlatform,
  validateConsultationInput,
  createConsultationTicket,
  isRtl,
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
  prefilledForm: Partial<ConsultationFormInput> | null;
  onNavigatePage: (page: ActivePage) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  prefilledForm,
  onNavigatePage,
}) => {
  const [form, setForm] = useState<ConsultationFormInput>({
    fullName: '',
    phone: '',
    email: '',
    entityType: 'corporate',
    serviceId: 'legal-consultations',
    urgency: 'standard',
    summary: '',
  });

  const [errors, setErrors] = useState<ConsultationValidationErrors>({});
  const [tickets, setTickets] = useState<ConsultationTicket[]>(() => {
    try {
      const saved = localStorage.getItem('sami_alshareef_tickets');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [latestTicket, setLatestTicket] = useState<ConsultationTicket | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  useEffect(() => {
    if (prefilledForm) {
      setForm((prev) => ({
        ...prev,
        ...prefilledForm,
      }));
    }
  }, [prefilledForm]);

  useEffect(() => {
    try {
      localStorage.setItem('sami_alshareef_tickets', JSON.stringify(tickets));
    } catch {
      // Ignore storage quota errors
    }
  }, [tickets]);

  const handleCopy = (value: string, key: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(value).catch(() => {});
    }
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateConsultationInput(form, lang);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const newTicket = createConsultationTicket(form, 101 + tickets.length);
    setTickets((prev) => [newTicket, ...prev]);
    setLatestTicket(newTicket);
    setForm((prev) => ({
      ...prev,
      fullName: '',
      phone: '',
      email: '',
      summary: '',
    }));
  };

  const handleClearTickets = () => {
    setTickets([]);
    setLatestTicket(null);
  };

  const selectedServiceObj =
    LEGAL_SERVICES.find((s) => s.id === form.serviceId) || LEGAL_SERVICES[0];

  return (
    <section id="contact" className="py-20 bg-[#141414] text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold text-[#D1B46A] mb-2">
            {tr(
              lang,
              '06. التواصل وحجز الاستشارات · Contact & Consultation',
              '06. Contact & Consultation Booking · التواصل وحجز الاستشارات',
              '06. رابطہ اور مشاورت کی بکنگ · Contact & Consultation'
            )}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3"
            style={{ textWrap: 'balance' }}
          >
            {tr(
              lang,
              'تواصل مع شركة سامي الشريف للمحاماة والاستشارات القانونية',
              'Connect With Sami Al-Sharif Law Firm & Legal Consultations',
              'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز سے رابطہ کریں'
            )}
          </h2>
          <p className="text-sm md:text-base text-[#C2B69C] leading-relaxed">
            {tr(
              lang,
              'نسعد باستقبال طلبات الاستشارات القانونية والتمثيل القضائي لقطاع الأعمال، المستثمرين، والأفراد في مكة المكرمة وجدة وجميع مناطق المملكة العربية السعودية.',
              'Submit your legal consultation request or reach our offices directly in Makkah and Jeddah serving clients across Saudi Arabia.',
              'مکہ مکرمہ، جدہ اور مملکت کے تمام علاقوں میں کاروباری اداروں، سرمایہ کاروں اور افراد کے لیے قانونی مشاورت اور عدالتی نمائندگی کی درخواستیں جمع کرائیں۔'
            )}
          </p>
        </div>

        {/* Detailed Makkah & Jeddah Locations + Direct Channels Bar */}
        <div className="rounded-2xl bg-[#1C1B18] border border-[#B69648]/60 p-6 sm:p-8 mb-12">
          {/* Top Row: Detailed Makkah & Jeddah Presence */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8 mb-8 border-b border-white/10">
            {/* Makkah Office */}
            <div className="rounded-xl bg-[#141414] border border-[#B69648]/40 p-5 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#B69648]/15 border border-[#B69648]/40 text-[#D1B46A] flex items-center justify-center shrink-0">
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
              <div className="flex-1">
                <div className="text-xs font-bold text-[#D1B46A] mb-1">
                  {tr(
                    lang,
                    'المقر الرئيسي - مكة المكرمة',
                    'Main Office - Makkah Al-Mukarramah',
                    'مرکزی دفتر - مکہ مکرمہ'
                  )}
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {tr(
                    lang,
                    'مكة المكرمة · خدمة قطاع الأعمال، الأوقاف، والمحاكم',
                    'Makkah · Corporate, Endowments (Awqaf) & Litigation',
                    'مکہ مکرمہ · کاروباری شعبہ، اوقاف اور عدالتی نمائندگی'
                  )}
                </h3>
                <p className="text-xs text-[#C2B69C] leading-relaxed mb-3">
                  {tr(
                    lang,
                    'استقبال الموكلين، صياغة العقود، قضايا العقارات والأوقاف، والتمثيل أمام المحاكم العامة والتجارية والعمالية بمكة المكرمة.',
                    'Client consultations, contract drafting, real estate & endowment cases, and representation before Commercial, General, and Labor Courts in Makkah.',
                    'مکہ مکرمہ میں مؤکلین سے ملاقات، معاہدوں کی تیاری، جائیداد و اوقاف کے مقدمات اور تجارتی و عمومی عدالتوں میں نمائندگی۔'
                  )}
                </p>
                <a
                  href={FIRM_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D1B46A] hover:underline"
                >
                  <span>
                    {tr(
                      lang,
                      'فتح الموقع في خرائط قوقل (Google Maps) ←',
                      'Open Location in Google Maps →',
                      'گوگل میپس میں مقام کھولیں ←'
                    )}
                  </span>
                </a>
              </div>
            </div>

            {/* Jeddah Office */}
            <div className="rounded-xl bg-[#141414] border border-[#B69648]/40 p-5 flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#B69648]/15 border border-[#B69648]/40 text-[#D1B46A] flex items-center justify-center shrink-0">
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
              <div className="flex-1">
                <div className="text-xs font-bold text-[#D1B46A] mb-1">
                  {tr(
                    lang,
                    'نطاق التواجد والتمثيل - محافظة جدة',
                    'Commercial & Litigation Hub - Jeddah',
                    'تجارتی اور قانونی مرکز - جدہ'
                  )}
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {tr(
                    lang,
                    'جدة · الشركات، الاستثمار الأجنبي، والتحكيم التجاري',
                    'Jeddah · Corporate Law, Foreign Investment & Arbitration',
                    'جدہ · کمپنیز لا، غیر ملکی سرمایہ کاری اور تجارتی ثالثی'
                  )}
                </h3>
                <p className="text-xs text-[#C2B69C] leading-relaxed mb-3">
                  {tr(
                    lang,
                    'تأسيس الشركات، عقود الاستثمار، الاندماج والاستحواذ، وحوكمة المنشآت والتمثيل أمام المحاكم التجارية واللجان شبه القضائية بجدة.',
                    'Company incorporation, foreign investment licensing, M&A, corporate governance, and Commercial Court representation in Jeddah.',
                    'جدہ میں کمپنیوں کا قیام، غیر ملکی سرمایہ کاری، انضمام و استحواذ اور تجارتی عدالتوں و نیم عدالتی کمیٹیوں میں نمائندگی۔'
                  )}
                </p>
                <a
                  href={FIRM_CONTACT.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D1B46A] hover:underline"
                >
                  <span>
                    {tr(
                      lang,
                      'عرض الاتجاهات عبر خرائط قوقل ←',
                      'View Directions on Google Maps →',
                      'گوگل میپس پر راستہ دیکھیں ←'
                    )}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* 4 Direct Contact Channels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Location */}
            <div className="flex flex-col items-center text-center px-3">
              <div className="w-7 h-7 text-[#D1B46A] mb-2.5 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 stroke-current fill-none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="text-sm font-bold text-white mb-1">
                {tr(
                  lang,
                  'العنوان | Location',
                  'Location | العنوان',
                  'پتہ | Location'
                )}
              </div>
              <div className="text-sm text-[#D5CEBF] mb-2">
                {tr(
                  lang,
                  FIRM_CONTACT.locationAr,
                  FIRM_CONTACT.locationEn,
                  FIRM_CONTACT.locationUr
                )}
              </div>
              <a
                href={FIRM_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#B69648]/20 border border-[#B69648]/50 text-xs font-semibold text-[#D1B46A] hover:bg-[#B69648] hover:text-[#141414] transition-colors"
              >
                <span>
                  {tr(
                    lang,
                    'فتح في خرائط قوقل',
                    'Open in Google Maps',
                    'گوگل میپس میں کھولیں'
                  )}
                </span>
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center px-3">
              <div className="w-7 h-7 text-[#D1B46A] mb-2.5 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 stroke-current fill-none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div className="text-sm font-bold text-white mb-1">
                {tr(
                  lang,
                  'البريد الإلكتروني | Email',
                  'Email | البريد الإلكتروني',
                  'ای میل | Email'
                )}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${FIRM_CONTACT.email}`}
                  className="text-sm text-[#D5CEBF] hover:text-[#D1B46A] transition-colors font-mono-tabular"
                >
                  {FIRM_CONTACT.email}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(FIRM_CONTACT.email, 'email')}
                  aria-label={tr(
                    lang,
                    'نسخ البريد الإلكتروني',
                    'Copy email address',
                    'ای میل کاپی کریں'
                  )}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {copiedKey === 'email' ? (
                    <span className="text-[10px] font-bold">✓</span>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 stroke-current fill-none"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center px-3">
              <div className="w-7 h-7 text-[#D1B46A] mb-2.5 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 stroke-current fill-none"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div className="text-sm font-bold text-white mb-1">
                {tr(
                  lang,
                  'التواصل الهاتفي | Phone',
                  'Phone | التواصل',
                  'فون نمبر | Phone'
                )}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`tel:${FIRM_CONTACT.phoneInternational}`}
                  className="text-base font-bold text-white hover:text-[#D1B46A] transition-colors font-mono-tabular"
                >
                  {FIRM_CONTACT.phoneDisplay}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(FIRM_CONTACT.phoneDisplay, 'phone')}
                  aria-label={tr(
                    lang,
                    'نسخ رقم الهاتف',
                    'Copy phone number',
                    'فون نمبر کاپی کریں'
                  )}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {copiedKey === 'phone' ? (
                    <span className="text-[10px] font-bold">✓</span>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 stroke-current fill-none"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Consultation 0593500596 */}
            <div className="flex flex-col items-center text-center px-3">
              <div className="w-7 h-7 text-[#D1B46A] mb-2.5 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="text-sm font-bold text-white mb-1">
                {tr(
                  lang,
                  'واتساب الاستشارات | WhatsApp',
                  'WhatsApp Consultation',
                  'واٹس ایپ مشاورت | WhatsApp'
                )}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={FIRM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-white hover:text-[#D1B46A] transition-colors font-mono-tabular"
                >
                  {FIRM_CONTACT.whatsappDisplay}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(FIRM_CONTACT.whatsappDisplay, 'whatsapp')}
                  aria-label={tr(
                    lang,
                    'نسخ رقم الواتساب',
                    'Copy WhatsApp number',
                    'واٹس ایپ نمبر کاپی کریں'
                  )}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {copiedKey === 'whatsapp' ? (
                    <span className="text-[10px] font-bold">✓</span>
                  ) : (
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3.5 h-3.5 stroke-current fill-none"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Official Social Media Logos Only (Gold & White) */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center gap-4 flex-wrap">
            {SOCIAL_MEDIA_LINKS.map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                title={tr(lang, platform.nameAr, platform.nameEn, platform.nameUr)}
                aria-label={tr(lang, platform.nameAr, platform.nameEn, platform.nameUr)}
                className="w-12 h-12 rounded-xl bg-[#141414] border border-[#B69648]/60 text-[#D1B46A] hover:bg-[#B69648] hover:text-white hover:border-white transition-all flex items-center justify-center"
              >
                {renderSocialPlatformIcon(platform.id, 'w-5 h-5')}
              </a>
            ))}
          </div>
        </div>

        {/* Form & Submitted Requests Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Consultation Request Form (7 cols) - Mobile-First Optimized */}
          <div className="lg:col-span-7 bg-white text-[#141414] rounded-2xl p-6 sm:p-9 border-2 border-[#D8CEB8] shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <h3 className="text-xl sm:text-2xl font-bold text-[#141414]">
                {tr(
                  lang,
                  'نموذج حجز استشارة أو طلب خدمة قانونية',
                  'Legal Consultation & Service Booking Form',
                  'قانونی مشاورت یا خدمت کی بکنگ کا فارم'
                )}
              </h3>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#FAF8F5] border border-[#D8CEB8] text-[11px] font-bold text-[#9A7B34]">
                {tr(lang, 'رد سريع خلال ساعات العمل', 'Fast Response', 'فوری جواب')}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#5C564B] mb-5">
              {tr(
                lang,
                'صُمم هذا النموذج ليكون سريع وسهل التعبئة عبر الجوال. أدخل بياناتك ليقوم المستشار القانوني المختص بالتواصل معك.',
                'Mobile-friendly quick booking form. Enter your details for review by our specialized legal counsel.',
                'موبائل پر آسانی سے پُر کرنے کے لیے ڈیزائن کیا گیا فارم۔ اپنی تفصیلات درج کریں تاکہ ہمارے ماہر قانونی مشیر آپ سے رابطہ کر سکیں۔'
              )}
            </p>

            {/* Active Selected Service Indicator Banner */}
            {selectedServiceObj && (
              <div className="mb-6 p-3.5 rounded-xl bg-[#141414] text-white border border-[#B69648] flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="px-2 py-0.5 rounded bg-[#B69648] text-[#141414] font-mono-tabular text-xs font-bold">
                    {selectedServiceObj.index}
                  </span>
                  <div>
                    <div className="text-[11px] text-[#D1B46A]">
                      {tr(
                        lang,
                        'الخدمة المختارة حالياً في النموذج:',
                        'Currently Selected Legal Service:',
                        'فارم میں منتخب کردہ قانونی خدمت:'
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-white">
                      {tr(
                        lang,
                        selectedServiceObj.titleAr,
                        selectedServiceObj.titleEn,
                        selectedServiceObj.titleUr
                      )}
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-[#D1B46A] bg-white/5 px-2.5 py-1 rounded border border-white/10">
                  {tr(
                    lang,
                    selectedServiceObj.timeframeAr,
                    selectedServiceObj.timeframeEn,
                    selectedServiceObj.timeframeUr
                  )}
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="client-fullname"
                    className="block text-xs font-bold text-[#141414] mb-1.5"
                  >
                    {tr(
                      lang,
                      'الاسم الكامل / اسم المنشأة *',
                      'Full Name / Company Name *',
                      'مکمل نام / کمپنی کا نام *'
                    )}
                  </label>
                  <input
                    id="client-fullname"
                    type="text"
                    autoComplete="name"
                    value={form.fullName}
                    onChange={(e) => {
                      setForm({ ...form, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder={tr(
                      lang,
                      'مثال: شركة الرواد للتجارة / محمد العتيبي',
                      'e.g., Al-Rowad Trading Co. / Mohammed',
                      'مثال: الرواد ٹریڈنگ کمپنی / محمد العتیبی'
                    )}
                    className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border rounded-xl text-[#141414] focus:outline-none ${
                      errors.fullName
                        ? 'border-red-600 focus:border-red-600'
                        : 'border-[#D8CEB8] focus:border-[#B69648]'
                    }`}
                  />
                  {errors.fullName && (
                    <p
                      role="alert"
                      className="mt-1.5 text-xs text-red-700 flex items-center gap-1"
                    >
                      <span>!</span>
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="client-phone"
                    className="block text-xs font-bold text-[#141414] mb-1.5"
                  >
                    {tr(lang, 'رقم الجوال (للرد عبر الاتصال أو واتساب) *', 'Mobile Number *', 'موبائل نمبر *')}
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    dir="ltr"
                    value={form.phone}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="05XXXXXXXX"
                    className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border rounded-xl text-[#141414] font-mono-tabular focus:outline-none ${
                      isRtl(lang) ? 'text-right' : 'text-left'
                    } ${
                      errors.phone
                        ? 'border-red-600 focus:border-red-600'
                        : 'border-[#D8CEB8] focus:border-[#B69648]'
                    }`}
                  />
                  {errors.phone && (
                    <p
                      role="alert"
                      className="mt-1.5 text-xs text-red-700 flex items-center gap-1"
                    >
                      <span>!</span>
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="client-email"
                    className="block text-xs font-bold text-[#141414] mb-1.5"
                  >
                    {tr(lang, 'البريد الإلكتروني *', 'Email Address *', 'ای میل ایڈریس *')}
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    dir="ltr"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@company.sa"
                    className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border rounded-xl text-[#141414] focus:outline-none ${
                      isRtl(lang) ? 'text-right' : 'text-left'
                    } ${
                      errors.email
                        ? 'border-red-600 focus:border-red-600'
                        : 'border-[#D8CEB8] focus:border-[#B69648]'
                    }`}
                  />
                  {errors.email && (
                    <p
                      role="alert"
                      className="mt-1.5 text-xs text-red-700 flex items-center gap-1"
                    >
                      <span>!</span>
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Client Entity Type */}
                <div>
                  <label
                    htmlFor="client-entity-type"
                    className="block text-xs font-bold text-[#141414] mb-1.5"
                  >
                    {tr(lang, 'صفة الموكل', 'Client Type', 'مؤکل کی حیثیت')}
                  </label>
                  <select
                    id="client-entity-type"
                    value={form.entityType}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        entityType: e.target.value as ClientEntityType,
                      })
                    }
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-xl text-[#141414] focus:outline-none focus:border-[#B69648]"
                  >
                    <option value="corporate">
                      {tr(lang, 'شركة / مؤسسة تجارية', 'Corporate / Entity', 'کمپنی / تجارتی ادارہ')}
                    </option>
                    <option value="individual">
                      {tr(lang, 'فرد', 'Individual', 'فرد')}
                    </option>
                    <option value="foreign_investor">
                      {tr(lang, 'مستثمر أجنبي', 'Foreign Investor', 'غیر ملکی سرمایہ کار')}
                    </option>
                  </select>
                </div>
              </div>

              {/* Service Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="client-service"
                    className="block text-xs font-bold text-[#141414] mb-1.5"
                  >
                    {tr(
                      lang,
                      'الخدمة القانونية المطلوبة *',
                      'Required Legal Service *',
                      'مطلوبہ قانونی خدمت *'
                    )}
                  </label>
                  <select
                    id="client-service"
                    value={form.serviceId}
                    onChange={(e) => {
                      setForm({ ...form, serviceId: e.target.value });
                      if (errors.serviceId)
                        setErrors({ ...errors, serviceId: undefined });
                    }}
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-xl text-[#141414] font-semibold focus:outline-none focus:border-[#B69648]"
                  >
                    {LEGAL_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.index}. {tr(lang, srv.titleAr, srv.titleEn, srv.titleUr)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="client-urgency"
                    className="block text-xs font-bold text-[#141414] mb-1.5"
                  >
                    {tr(lang, 'مستوى الأولوية', 'Urgency Level', 'ترجیحی درجہ')}
                  </label>
                  <select
                    id="client-urgency"
                    value={form.urgency}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        urgency: e.target.value as UrgencyLevel,
                      })
                    }
                    className="w-full px-4 py-3 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-xl text-[#141414] focus:outline-none focus:border-[#B69648]"
                  >
                    <option value="standard">
                      {tr(lang, 'اعتيادي', 'Standard', 'معمول کے مطابق')}
                    </option>
                    <option value="priority">
                      {tr(
                        lang,
                        'عاجل (جلسة قريبة / صفقة فورية)',
                        'Priority / Urgent',
                        'ہنگامی (قریبی سماعت / فوری معاملہ)'
                      )}
                    </option>
                  </select>
                </div>
              </div>

              {/* Case Summary */}
              <div>
                <label
                  htmlFor="client-summary"
                  className="block text-xs font-bold text-[#141414] mb-1.5"
                >
                  {tr(
                    lang,
                    'ملخص الموضوع أو الاستشارة القانونية *',
                    'Brief Summary of Legal Matter *',
                    'قانونی معاملے یا مشاورت کا مختصر خلاصہ *'
                  )}
                </label>
                <textarea
                  id="client-summary"
                  rows={4}
                  value={form.summary}
                  onChange={(e) => {
                    setForm({ ...form, summary: e.target.value });
                    if (errors.summary) setErrors({ ...errors, summary: undefined });
                  }}
                  placeholder={tr(
                    lang,
                    'اكتب نبذة مختصرة عن طبيعة الاستشارة أو القضية أو العقد المراد دراسته...',
                    'Provide a concise overview of your legal consultation, contract, or dispute...',
                    'اپنی قانونی مشاورت، مقدمے یا زیرِ غور معاہدے کا مختصر خلاصہ تحریر کریں...'
                  )}
                  className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border rounded-xl text-[#141414] focus:outline-none ${
                    errors.summary
                      ? 'border-red-600 focus:border-red-600'
                      : 'border-[#D8CEB8] focus:border-[#B69648]'
                  }`}
                />
                {errors.summary && (
                  <p
                    role="alert"
                    className="mt-1.5 text-xs text-red-700 flex items-center gap-1"
                  >
                    <span>!</span>
                    <span>{errors.summary}</span>
                  </p>
                )}
              </div>

              {/* PDPL Privacy & Non-Retainer Terms Notice */}
              <div className="rounded-xl bg-[#FAF8F5] border border-[#E5DEC9] p-3.5 text-xs text-[#5C564B] leading-relaxed">
                {lang === 'ar' && (
                  <>
                    تُعالج بياناتكم بسرية تامة وفق{' '}
                    <button
                      type="button"
                      onClick={() => onNavigatePage('privacy')}
                      className="font-bold text-[#9A7B34] hover:underline cursor-pointer"
                    >
                      سياسة الخصوصية (نظام PDPL)
                    </button>
                    . وبموجب{' '}
                    <button
                      type="button"
                      onClick={() => onNavigatePage('terms')}
                      className="font-bold text-[#9A7B34] hover:underline cursor-pointer"
                    >
                      الشروط والأحكام
                    </button>{' '}
                    فإن إرسال الاستشارة الأولية الإلكترونية لا يُعد توكيلاً رسمياً إلا بعد توقيع عقد وكالة وسداد الأتعاب.
                  </>
                )}
                {lang === 'en' && (
                  <>
                    Your data is processed confidentially under our{' '}
                    <button
                      type="button"
                      onClick={() => onNavigatePage('privacy')}
                      className="font-bold text-[#9A7B34] hover:underline cursor-pointer"
                    >
                      Privacy Policy (Saudi PDPL)
                    </button>
                    . Per our{' '}
                    <button
                      type="button"
                      onClick={() => onNavigatePage('terms')}
                      className="font-bold text-[#9A7B34] hover:underline cursor-pointer"
                    >
                      Terms & Conditions
                    </button>
                    , initial electronic consultations do not constitute formal representation until a retainer contract is signed and fees are paid.
                  </>
                )}
                {lang === 'ur' && (
                  <>
                    آپ کے ڈیٹا کو ہماری{' '}
                    <button
                      type="button"
                      onClick={() => onNavigatePage('privacy')}
                      className="font-bold text-[#9A7B34] hover:underline cursor-pointer"
                    >
                      رازداری کی پالیسی (سعودی PDPL)
                    </button>{' '}
                    کے مطابق مکمل رازداری سے رکھا جاتا ہے۔{' '}
                    <button
                      type="button"
                      onClick={() => onNavigatePage('terms')}
                      className="font-bold text-[#9A7B34] hover:underline cursor-pointer"
                    >
                      شرائط و ضوابط
                    </button>{' '}
                    کے تحت ابتدائی آن لائن مشاورت باقاعدہ معاہدے پر دستخط اور فیس کی ادائیگی تک سرکاری وکالت نہیں سمجھی جائے گی۔
                  </>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <span className="text-xs text-[#5C564B]">
                  {tr(
                    lang,
                    'جميع الطلبات تعامل بسرية تامة وفق نظام المحاماة السعودي.',
                    'All submissions are strictly confidential.',
                    'تمام درخواستوں کو سعودی وکالت کے قانون کے مطابق مکمل رازداری میں رکھا جاتا ہے۔'
                  )}
                </span>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-xl transition-colors cursor-pointer whitespace-nowrap shrink-0 shadow-md"
                >
                  {tr(
                    lang,
                    'إرسال طلب الاستشارة القانونية ←',
                    'Submit Consultation Request →',
                    'قانونی مشاورت کی درخواست بھیجیں ←'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Confirmation / Active Requests & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {latestTicket && (
              <div
                role="status"
                aria-live="polite"
                className="rounded-2xl bg-[#1C1B18] border-2 border-[#B69648] p-6"
              >
                <div className="flex items-center gap-2.5 text-[#D1B46A] font-bold text-base mb-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 stroke-current fill-none shrink-0"
                    strokeWidth="2.2"
                    aria-hidden="true"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span>
                    {tr(
                      lang,
                      'تم تسجيل طلب الاستشارة بنجاح',
                      'Consultation Request Registered',
                      'مشاورت کی درخواست کامیابی سے درج ہو گئی'
                    )}
                  </span>
                </div>
                <p className="text-xs text-[#D5CEBF] leading-relaxed mb-4">
                  {tr(
                    lang,
                    'تم إصدار رقم مرجعي لطلبكم. سيتواصل معكم فريق شركة سامي الشريف للمحاماة عبر الجوال أو البريد الإلكتروني.',
                    'Your consultation reference code has been generated. Our legal team will contact you shortly.',
                    'آپ کی درخواست کا حوالہ نمبر جاری کر دیا گیا ہے۔ سامی الشریف لاء فرم کی ٹیم جلد آپ سے رابطہ کرے گی۔'
                  )}
                </p>

                <div className="bg-[#141414] rounded-lg p-4 border border-white/10 space-y-2 text-xs mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#C2B69C]">
                      {tr(lang, 'الرقم المرجعي:', 'Reference ID:', 'حوالہ نمبر:')}
                    </span>
                    <span className="font-mono-tabular font-bold text-[#D1B46A] text-sm">
                      {latestTicket.referenceId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C2B69C]">
                      {tr(lang, 'مقدم الطلب:', 'Client Name:', 'درخواست دہندہ:')}
                    </span>
                    <span className="font-semibold text-white">
                      {latestTicket.fullName}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C2B69C]">
                      {tr(lang, 'الخدمة:', 'Service:', 'خدمت:')}
                    </span>
                    <span className="font-semibold text-white">
                      {tr(
                        lang,
                        latestTicket.serviceTitleAr,
                        latestTicket.serviceTitleEn,
                        latestTicket.serviceTitleUr || latestTicket.serviceTitleAr
                      )}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/966593500596?text=${encodeURIComponent(
                      `السلام عليكم، طلب استشارة قانونية رقم (${latestTicket.referenceId})\nالاسم: ${latestTicket.fullName}\nالجوال: ${latestTicket.phone}\nالخدمة: ${latestTicket.serviceTitleAr}\nالملخص:\n${latestTicket.summary}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#D1B46A] text-[#141414] rounded-lg hover:bg-white transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>
                      {tr(
                        lang,
                        `إرسال عبر الواتساب (${FIRM_CONTACT.whatsappDisplay})`,
                        `Send via WhatsApp (${FIRM_CONTACT.whatsappDisplay})`,
                        `واٹس ایپ کے ذریعے بھیجیں (${FIRM_CONTACT.whatsappDisplay})`
                      )}
                    </span>
                  </a>

                  <a
                    href={`mailto:${FIRM_CONTACT.email}?subject=${encodeURIComponent(
                      `طلب استشارة قانونية (${latestTicket.referenceId}) - ${latestTicket.fullName}`
                    )}&body=${encodeURIComponent(
                      `الاسم: ${latestTicket.fullName}\nالجوال: ${latestTicket.phone}\nالخدمة: ${latestTicket.serviceTitleAr}\nالملخص:\n${latestTicket.summary}`
                    )}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#B69648] text-[#141414] rounded-lg hover:bg-[#D1B46A] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>
                      {tr(
                        lang,
                        'إرسال نسخة عبر البريد الرسمي',
                        'Send Copy via Official Email',
                        'سرکاری ای میل کے ذریعے نقل بھیجیں'
                      )}
                    </span>
                  </a>
                </div>
              </div>
            )}

            {/* Direct WhatsApp Consultation Card (0593500596) */}
            <div className="rounded-2xl bg-[#1C1B18] border border-[#B69648]/60 p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="inline-block text-xs font-semibold text-[#D1B46A] mb-1">
                    {tr(
                      lang,
                      'استشارة قانونية مباشرة عبر الواتساب',
                      'Direct WhatsApp Legal Consultation',
                      'واٹس ایپ پر براہِ راست قانونی مشاورت'
                    )}
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-white">
                    {tr(
                      lang,
                      'تواصل مباشرة مع مستشار مختص عبر واتساب',
                      'Speak Directly with a Legal Counselor on WhatsApp',
                      'واٹس ایپ پر براہِ راست ماہر قانونی مشیر سے رابطہ کریں'
                    )}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#B69648]/20 text-[#D1B46A] flex items-center justify-center shrink-0">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5 fill-current"
                    aria-hidden="true"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                  </svg>
                </div>
              </div>

              <p className="text-xs text-[#D5CEBF] leading-relaxed mb-4">
                {tr(
                  lang,
                  'يمكنكم مراسلتنا مباشرة عبر الواتساب لحجز موعد أو الحصول على استشارة قانونية سريعة على الرقم المخصص للاستشارات:',
                  'Message our legal counselors directly on WhatsApp to book an appointment or get a consultation on our dedicated number:',
                  'وقت بک کرنے یا فوری قانونی مشورہ حاصل کرنے کے لیے ہمارے مخصوص واٹس ایپ نمبر پر براہِ راست رابطہ کریں:'
                )}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                <span className="font-mono-tabular text-lg font-bold text-white">
                  {FIRM_CONTACT.whatsappDisplay}
                </span>
                <a
                  href={FIRM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-bold text-[#141414] bg-[#D1B46A] hover:bg-white rounded-lg transition-colors whitespace-nowrap shrink-0"
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
                      'احصل على استشارة عبر الواتساب',
                      'Get WhatsApp Consultation',
                      'واٹس ایپ پر مشورہ حاصل کریں'
                    )}
                  </span>
                </a>
              </div>
            </div>

            {/* Saved Requests History */}
            <div className="rounded-2xl bg-[#1C1B18] border border-white/10 p-6">
              <div className="flex items-center justify-between gap-2 mb-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <span>
                    {tr(
                      lang,
                      `سجل طلبات الاستشارة (${tickets.length})`,
                      `Submitted Requests (${tickets.length})`,
                      `درج شدہ مشاورتی درخواستیں (${tickets.length})`
                    )}
                  </span>
                </h4>

                {tickets.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearTickets}
                    className="inline-flex items-center gap-1 text-xs text-[#C2B69C] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>{tr(lang, 'مسح السجل', 'Clear', 'ریکارڈ صاف کریں')}</span>
                  </button>
                )}
              </div>

              {tickets.length === 0 ? (
                <p className="text-xs text-[#9E9585] leading-relaxed">
                  {tr(
                    lang,
                    'لم تقم بإرسال أي طلب استشارة في هذه الجلسة بعد. عند إرسال النموذج سيظهر الرقم المرجعي وتفاصيل الطلب هنا.',
                    'No consultation requests submitted in this session yet. Submitted tickets and reference IDs will appear here.',
                    'اس سیشن میں ابھی تک کوئی مشاورتی درخواست جمع نہیں کرائی گئی۔ فارم جمع کرانے پر حوالہ نمبر اور تفصیلات یہاں ظاہر ہوں گی۔'
                  )}
                </p>
              ) : (
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {tickets.map((t) => (
                    <div
                      key={t.referenceId}
                      className="p-3.5 rounded-lg bg-[#141414] border border-white/10 text-xs"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-mono-tabular font-bold text-[#D1B46A]">
                          {t.referenceId}
                        </span>
                        <span className="text-[#9E9585] tabular-nums">
                          {t.phone}
                        </span>
                      </div>
                      <div className="font-semibold text-white mb-0.5">
                        {t.fullName} ·{' '}
                        {tr(
                          lang,
                          t.serviceTitleAr,
                          t.serviceTitleEn,
                          t.serviceTitleUr || t.serviceTitleAr
                        )}
                      </div>
                      <p className="text-[#C2B69C] line-clamp-2">{t.summary}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Official Brand Stamp & Google Maps Location Card */}
            <div className="rounded-2xl bg-[#1C1B18] border border-[#B69648]/50 p-7 text-center sm:text-right">
              <div className="font-calligraphy text-xl text-[#D1B46A] leading-snug">
                {lang === 'ur' ? FIRM_CONTACT.firmNameUr : FIRM_CONTACT.firmNameAr}
              </div>
              <div className="text-[11px] tracking-[0.12em] text-[#C2B69C] mt-1 font-medium">
                SAMI ALSHAREEF LAWFIRM AND LEGAL CONSULTATIONS
              </div>
              <div className="text-xs text-[#9E9585] mt-2 mb-4">
                {tr(
                  lang,
                  'المملكة العربية السعودية · مكة المكرمة - جدة',
                  'Kingdom of Saudi Arabia · Makkah - Jeddah',
                  'مملکتِ سعودی عرب · مکہ مکرمہ - جدہ'
                )}
              </div>
              <a
                href={FIRM_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#B69648] hover:bg-[#D1B46A] text-[#141414] text-xs md:text-sm font-bold transition-colors"
              >
                <span>
                  {tr(
                    lang,
                    'موقعنا على خرائط قوقل (Google Maps) ←',
                    'View Our Location on Google Maps →',
                    'گوگل میپس پر ہمارا مقام دیکھیں (Google Maps) ←'
                  )}
                </span>
              </a>

              {/* Social Media Logos Only inside Stamp Card (Gold & White) */}
              <div className="mt-5 pt-5 border-t border-white/10 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                {SOCIAL_MEDIA_LINKS.map((platform) => (
                  <a
                    key={platform.id}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={tr(lang, platform.nameAr, platform.nameEn, platform.nameUr)}
                    aria-label={tr(lang, platform.nameAr, platform.nameEn, platform.nameUr)}
                    className="w-10 h-10 rounded-lg bg-[#141414] border border-[#B69648]/60 text-white hover:bg-[#B69648] hover:text-[#141414] hover:border-white transition-colors flex items-center justify-center"
                  >
                    {renderSocialPlatformIcon(platform.id, 'w-4 h-4')}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
