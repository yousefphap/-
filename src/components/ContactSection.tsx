import React, { useState, useEffect } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Copy,
  Check,
  AlertCircle,
  MessageSquare,
  Trash2,
} from 'lucide-react';
import {
  Language,
  ClientEntityType,
  UrgencyLevel,
  ConsultationFormInput,
  ConsultationValidationErrors,
  ConsultationTicket,
  LEGAL_SERVICES,
  FIRM_CONTACT,
  validateConsultationInput,
  createConsultationTicket,
} from '../utils/lawFirmLogic';

interface ContactSectionProps {
  lang: Language;
  prefilledForm: Partial<ConsultationFormInput> | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  prefilledForm,
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

  return (
    <section id="contact" className="py-20 bg-[#141414] text-white">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-semibold text-[#D1B46A] mb-2">
            {lang === 'ar'
              ? '05. التواصل وحجز الاستشارات · Contact & Consultation'
              : '05. Contact & Consultation Booking · التواصل وحجز الاستشارات'}
          </div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-3"
            style={{ textWrap: 'balance' }}
          >
            {lang === 'ar'
              ? 'تواصل مع شركة سامي الشريف للمحاماة والاستشارات القانونية'
              : 'Connect With Sami Al-Sharif Law Firm & Legal Consultations'}
          </h2>
          <p className="text-sm md:text-base text-[#C2B69C]">
            {lang === 'ar'
              ? 'نسعد باستقبال طلبات الاستشارات القانونية والتمثيل القضائي لقطاع الأعمال والأفراد في مكة المكرمة وجدة وجميع مناطق المملكة.'
              : 'Submit your legal consultation request or reach our office directly in Makkah and Jeddah.'}
          </p>
        </div>

        {/* Official Contact Information Bar (4 Channels including WhatsApp Consultation) */}
        <div className="rounded-2xl bg-[#1C1B18] border border-[#B69648]/60 p-8 mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Location */}
            <div className="flex flex-col items-center text-center px-3">
              <MapPin className="w-7 h-7 text-[#D1B46A] mb-3" />
              <div className="text-sm font-bold text-white mb-1">
                {lang === 'ar' ? 'العنوان | Location' : 'Location | العنوان'}
              </div>
              <div className="text-sm text-[#D5CEBF] mb-2">
                {lang === 'ar'
                  ? FIRM_CONTACT.locationAr
                  : FIRM_CONTACT.locationEn}
              </div>
              <a
                href={FIRM_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#B69648]/20 border border-[#B69648]/50 text-xs font-semibold text-[#D1B46A] hover:bg-[#B69648] hover:text-[#141414] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>
                  {lang === 'ar' ? 'فتح في خرائط قوقل' : 'Open in Google Maps'}
                </span>
              </a>
            </div>

            {/* Email */}
            <div className="flex flex-col items-center text-center px-3">
              <Mail className="w-7 h-7 text-[#D1B46A] mb-3" />
              <div className="text-sm font-bold text-white mb-1">
                {lang === 'ar'
                  ? 'البريد الإلكتروني | Email'
                  : 'Email | البريد الإلكتروني'}
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
                  aria-label={
                    lang === 'ar' ? 'نسخ البريد الإلكتروني' : 'Copy email address'
                  }
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {copiedKey === 'email' ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-center text-center px-3">
              <Phone className="w-7 h-7 text-[#D1B46A] mb-3" />
              <div className="text-sm font-bold text-white mb-1">
                {lang === 'ar' ? 'التواصل الهاتفي | Phone' : 'Phone | التواصل'}
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
                  aria-label={lang === 'ar' ? 'نسخ رقم الهاتف' : 'Copy phone number'}
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {copiedKey === 'phone' ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* WhatsApp Consultation 0593500596 */}
            <div className="flex flex-col items-center text-center px-3">
              <div className="w-7 h-7 text-[#22C55E] mb-3 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-7 h-7 fill-current"
                  aria-hidden="true"
                >
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                </svg>
              </div>
              <div className="text-sm font-bold text-white mb-1">
                {lang === 'ar'
                  ? 'واتساب الاستشارات | WhatsApp'
                  : 'WhatsApp Consultation'}
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={FIRM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-[#22C55E] hover:underline transition-colors font-mono-tabular"
                >
                  {FIRM_CONTACT.whatsappDisplay}
                </a>
                <button
                  type="button"
                  onClick={() => handleCopy(FIRM_CONTACT.whatsappDisplay, 'whatsapp')}
                  aria-label={
                    lang === 'ar' ? 'نسخ رقم الواتساب' : 'Copy WhatsApp number'
                  }
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {copiedKey === 'whatsapp' ? (
                    <Check className="w-3.5 h-3.5" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Form & Submitted Requests Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Consultation Request Form (7 cols) */}
          <div className="lg:col-span-7 bg-white text-[#141414] rounded-2xl p-7 md:p-9 border border-[#E5DEC9]">
            <h3 className="text-xl font-bold text-[#141414] mb-2">
              {lang === 'ar'
                ? 'نموذج طلب استشارة أو تمثيل قانوني'
                : 'Legal Consultation & Representation Request Form'}
            </h3>
            <p className="text-xs md:text-sm text-[#5C564B] mb-6">
              {lang === 'ar'
                ? 'أدخل بيانات التواصل وتفاصيل الموضوع القانوني ليقوم المستشار المختص بمراجعتها والتواصل معكم.'
                : 'Fill in your contact details and legal summary for review by our specialized legal counsel.'}
            </p>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label
                    htmlFor="client-fullname"
                    className="block text-xs font-bold text-[#141414] mb-1.5"
                  >
                    {lang === 'ar'
                      ? 'الاسم الكامل / اسم المنشأة *'
                      : 'Full Name / Company Name *'}
                  </label>
                  <input
                    id="client-fullname"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => {
                      setForm({ ...form, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder={
                      lang === 'ar'
                        ? 'مثال: شركة الرواد للتجارة / محمد العتيبي'
                        : 'e.g., Al-Rowad Trading Co. / Mohammed'
                    }
                    className={`w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border rounded-lg text-[#141414] focus:outline-none ${
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
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
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
                    {lang === 'ar' ? 'رقم الجوال *' : 'Mobile Number *'}
                  </label>
                  <input
                    id="client-phone"
                    type="tel"
                    dir="ltr"
                    value={form.phone}
                    onChange={(e) => {
                      setForm({ ...form, phone: e.target.value });
                      if (errors.phone) setErrors({ ...errors, phone: undefined });
                    }}
                    placeholder="0569888100"
                    className={`w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border rounded-lg text-[#141414] font-mono-tabular focus:outline-none ${
                      lang === 'ar' ? 'text-right' : 'text-left'
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
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
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
                    {lang === 'ar' ? 'البريد الإلكتروني *' : 'Email Address *'}
                  </label>
                  <input
                    id="client-email"
                    type="email"
                    dir="ltr"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="name@company.sa"
                    className={`w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border rounded-lg text-[#141414] focus:outline-none ${
                      lang === 'ar' ? 'text-right' : 'text-left'
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
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
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
                    {lang === 'ar' ? 'صفة الموكل' : 'Client Type'}
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
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-lg text-[#141414] focus:outline-none focus:border-[#B69648]"
                  >
                    <option value="corporate">
                      {lang === 'ar' ? 'شركة / مؤسسة تجارية' : 'Corporate / Entity'}
                    </option>
                    <option value="individual">
                      {lang === 'ar' ? 'فرد' : 'Individual'}
                    </option>
                    <option value="foreign_investor">
                      {lang === 'ar' ? 'مستثمر أجنبي' : 'Foreign Investor'}
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
                    {lang === 'ar'
                      ? 'الخدمة القانونية المطلوبة *'
                      : 'Required Legal Service *'}
                  </label>
                  <select
                    id="client-service"
                    value={form.serviceId}
                    onChange={(e) => {
                      setForm({ ...form, serviceId: e.target.value });
                      if (errors.serviceId)
                        setErrors({ ...errors, serviceId: undefined });
                    }}
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-lg text-[#141414] focus:outline-none focus:border-[#B69648]"
                  >
                    {LEGAL_SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.index}. {lang === 'ar' ? srv.titleAr : srv.titleEn}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="client-urgency"
                    className="block text-xs font-bold text-[#141414] mb-1.5"
                  >
                    {lang === 'ar' ? 'مستوى الأولوية' : 'Urgency Level'}
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
                    className="w-full px-4 py-2.5 text-sm bg-[#FAF8F5] border border-[#D8CEB8] rounded-lg text-[#141414] focus:outline-none focus:border-[#B69648]"
                  >
                    <option value="standard">
                      {lang === 'ar' ? 'اعتيادي' : 'Standard'}
                    </option>
                    <option value="priority">
                      {lang === 'ar' ? 'عاجل (جلسة قريبة / صفقة فورية)' : 'Priority / Urgent'}
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
                  {lang === 'ar'
                    ? 'ملخص الموضوع أو الاستشارة القانونية *'
                    : 'Brief Summary of Legal Matter *'}
                </label>
                <textarea
                  id="client-summary"
                  rows={4}
                  value={form.summary}
                  onChange={(e) => {
                    setForm({ ...form, summary: e.target.value });
                    if (errors.summary) setErrors({ ...errors, summary: undefined });
                  }}
                  placeholder={
                    lang === 'ar'
                      ? 'اكتب نبذة مختصرة عن طبيعة الاستشارة أو القضية أو العقد المراد دراسته...'
                      : 'Provide a concise overview of your legal consultation, contract, or dispute...'
                  }
                  className={`w-full px-4 py-3 text-sm bg-[#FAF8F5] border rounded-lg text-[#141414] focus:outline-none ${
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
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.summary}</span>
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#5C564B]">
                  {lang === 'ar'
                    ? 'جميع الطلبات تعامل بسرية تامة وفق نظام المحاماة.'
                    : 'All submissions are strictly confidential.'}
                </span>

                <button
                  type="submit"
                  className="px-7 py-3 text-sm font-bold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
                >
                  {lang === 'ar'
                    ? 'إرسال طلب الاستشارة القانونية'
                    : 'Submit Consultation Request'}
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
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    {lang === 'ar'
                      ? 'تم تسجيل طلب الاستشارة بنجاح'
                      : 'Consultation Request Registered'}
                  </span>
                </div>
                <p className="text-xs text-[#D5CEBF] leading-relaxed mb-4">
                  {lang === 'ar'
                    ? 'تم إصدار رقم مرجعي لطلبكم. سيتواصل معكم فريق شركة سامي الشريف للمحاماة عبر الجوال أو البريد الإلكتروني.'
                    : 'Your consultation reference code has been generated. Our legal team will contact you shortly.'}
                </p>

                <div className="bg-[#141414] rounded-lg p-4 border border-white/10 space-y-2 text-xs mb-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[#C2B69C]">
                      {lang === 'ar' ? 'الرقم المرجعي:' : 'Reference ID:'}
                    </span>
                    <span className="font-mono-tabular font-bold text-[#D1B46A] text-sm">
                      {latestTicket.referenceId}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C2B69C]">
                      {lang === 'ar' ? 'مقدم الطلب:' : 'Client Name:'}
                    </span>
                    <span className="font-semibold text-white">
                      {latestTicket.fullName}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#C2B69C]">
                      {lang === 'ar' ? 'الخدمة:' : 'Service:'}
                    </span>
                    <span className="font-semibold text-white">
                      {lang === 'ar'
                        ? latestTicket.serviceTitleAr
                        : latestTicket.serviceTitleEn}
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold bg-[#15803D] text-white rounded-lg hover:bg-[#166534] transition-colors whitespace-nowrap shrink-0"
                  >
                    <span>
                      {lang === 'ar'
                        ? `إرسال عبر الواتساب (${FIRM_CONTACT.whatsappDisplay})`
                        : `Send via WhatsApp (${FIRM_CONTACT.whatsappDisplay})`}
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
                    <Mail className="w-3.5 h-3.5" />
                    <span>
                      {lang === 'ar'
                        ? 'إرسال نسخة عبر البريد الرسمي'
                        : 'Send Copy via Official Email'}
                    </span>
                  </a>
                </div>
              </div>
            )}

            {/* Direct WhatsApp Consultation Card (0593500596) */}
            <div className="rounded-2xl bg-[#1C1B18] border border-[#22C55E]/40 p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <span className="inline-block text-xs font-semibold text-[#22C55E] mb-1">
                    {lang === 'ar'
                      ? 'استشارة قانونية مباشرة عبر الواتساب'
                      : 'Direct WhatsApp Legal Consultation'}
                  </span>
                  <h4 className="text-base md:text-lg font-bold text-white">
                    {lang === 'ar'
                      ? 'تواصل عن طريق الواتساب واحصل على استشارة'
                      : 'Contact via WhatsApp & Get a Legal Consultation'}
                  </h4>
                </div>
                <div className="w-10 h-10 rounded-xl bg-[#15803D]/20 text-[#22C55E] flex items-center justify-center shrink-0">
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
                {lang === 'ar'
                  ? 'يمكنكم مراسلتنا مباشرة عبر الواتساب لحجز موعد أو الحصول على استشارة قانونية سريعة على الرقم المخصص للاستشارات:'
                  : 'Message our legal counselors directly on WhatsApp to book an appointment or get a consultation on our dedicated number:'}
              </p>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-white/10">
                <span className="font-mono-tabular text-lg font-bold text-white">
                  {FIRM_CONTACT.whatsappDisplay}
                </span>
                <a
                  href={FIRM_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-bold text-white bg-[#15803D] hover:bg-[#166534] rounded-lg transition-colors whitespace-nowrap shrink-0"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 fill-current shrink-0"
                    aria-hidden="true"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
                  </svg>
                  <span>
                    {lang === 'ar'
                      ? 'احصل على استشارة عبر الواتساب'
                      : 'Get WhatsApp Consultation'}
                  </span>
                </a>
              </div>
            </div>

            {/* Saved Requests History */}
            <div className="rounded-2xl bg-[#1C1B18] border border-white/10 p-6">
              <div className="flex items-center justify-between gap-2 mb-4">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-[#D1B46A]" />
                  <span>
                    {lang === 'ar'
                      ? `سجل طلبات الاستشارة (${tickets.length})`
                      : `Submitted Requests (${tickets.length})`}
                  </span>
                </h4>

                {tickets.length > 0 && (
                  <button
                    type="button"
                    onClick={handleClearTickets}
                    className="inline-flex items-center gap-1 text-xs text-[#C2B69C] hover:text-white transition-colors cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'مسح السجل' : 'Clear'}</span>
                  </button>
                )}
              </div>

              {tickets.length === 0 ? (
                <p className="text-xs text-[#9E9585] leading-relaxed">
                  {lang === 'ar'
                    ? 'لم تقم بإرسال أي طلب استشارة في هذه الجلسة بعد. عند إرسال النموذج سيظهر الرقم المرجعي وتفاصيل الطلب هنا.'
                    : 'No consultation requests submitted in this session yet. Submitted tickets and reference IDs will appear here.'}
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
                        {lang === 'ar' ? t.serviceTitleAr : t.serviceTitleEn}
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
                شركة سامي الشريف للمحاماة والاستشارات القانونية
              </div>
              <div className="text-[11px] tracking-[0.12em] text-[#C2B69C] mt-1 font-medium">
                SAMI ALSHAREEF LAWFIRM AND LEGAL CONSULTATIONS
              </div>
              <div className="text-xs text-[#9E9585] mt-2 mb-4">
                {lang === 'ar'
                  ? 'المملكة العربية السعودية · مكة المكرمة - جدة'
                  : 'Kingdom of Saudi Arabia · Makkah - Jeddah'}
              </div>
              <a
                href={FIRM_CONTACT.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 rounded-lg bg-[#B69648] hover:bg-[#D1B46A] text-[#141414] text-xs md:text-sm font-bold transition-colors"
              >
                <MapPin className="w-4 h-4 shrink-0" />
                <span>
                  {lang === 'ar'
                    ? 'موقعنا على خرائط قوقل (Google Maps)'
                    : 'View Our Location on Google Maps'}
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Footer (Slide 12 & 21) */}
        <footer className="mt-20 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9585]">
          <div>
            {lang === 'ar'
              ? 'جميع الحقوق محفوظة © شركة سامي الشريف للمحاماة والاستشارات القانونية'
              : 'All Rights Reserved © Sami Al-Sharif Law Firm & Legal Consultations'}
          </div>
          <div className="flex items-center gap-4">
            <a href="#about" className="hover:text-white transition-colors">
              {lang === 'ar' ? 'من نحن' : 'About'}
            </a>
            <span>·</span>
            <a href="#services" className="hover:text-white transition-colors">
              {lang === 'ar' ? 'الخدمات القانونية' : 'Legal Services'}
            </a>
            <span>·</span>
            <a href="#team" className="hover:text-white transition-colors">
              {lang === 'ar' ? 'فريق العمل' : 'Our Team'}
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};
