import React from 'react';
import {
  ShieldCheck,
  FileText,
  Scale,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Printer,
} from 'lucide-react';
import {
  Language,
  ActivePage,
  PRIVACY_POLICY_SECTIONS,
  TERMS_AND_CONDITIONS_SECTIONS,
  DISCLAIMER_SECTIONS,
  LEGAL_DISCLAIMER,
  FIRM_CONTACT,
  isRtl,
  tr,
} from '../utils/lawFirmLogic';
import { LanguageSwitcher } from './LanguageSwitcher';

interface LegalPagesViewProps {
  lang: Language;
  activePage: 'privacy' | 'terms' | 'disclaimer';
  onSelectLang: (lang: Language) => void;
  onNavigatePage: (page: ActivePage, sectionId?: string) => void;
}

export const LegalPagesView: React.FC<LegalPagesViewProps> = ({
  lang,
  activePage,
  onSelectLang,
  onNavigatePage,
}) => {
  const BackArrow = isRtl(lang) ? ArrowRight : ArrowLeft;

  const pageMeta = {
    privacy: {
      badgeAr: 'متوافق مع نظام حماية البيانات الشخصية السعودي (PDPL)',
      badgeEn: 'Compliant with Saudi Personal Data Protection Law (PDPL)',
      badgeUr: 'سعودی پرسنل ڈیٹا پروٹیکشن لاء (PDPL) کے مطابق',
      titleAr: 'سياسة الخصوصية وحماية البيانات الشخصية',
      titleEn: 'Privacy Policy & Personal Data Protection (PDPL)',
      titleUr: 'رازداری کی پالیسی اور ذاتی ڈیٹا کا تحفظ (PDPL)',
      subtitleAr:
        'توضح هذه السياسة كيفية جمع ومعالجة وحماية البيانات الشخصية للعملاء والزوار، والتزامات السرية المهنية التامة للاستشارات القانونية وفق الأنظمة المرعية في المملكة العربية السعودية.',
      subtitleEn:
        'This policy outlines how client and visitor personal data is collected, processed, and protected, alongside our strict statutory commitment to consultation confidentiality under Saudi law.',
      subtitleUr:
        'یہ پالیسی سعودی عرب کے نافذ العمل قوانین کے مطابق مؤکلین اور زائرین کے ذاتی ڈیٹا کو جمع کرنے، استعمال کرنے اور محفوظ رکھنے کے طریقہ کار اور پیشہ ورانہ رازداری کی وضاحت کرتی ہے۔',
      highlightTitleAr: 'ضمان السرية المهنية وحماية بيانات الموكلين (PDPL)',
      highlightTitleEn: 'Statutory Confidentiality & Saudi PDPL Protection',
      highlightTitleUr: 'پیشہ ورانہ رازداری اور مؤکلین کے ڈیٹا کے تحفظ کی ضمانت (PDPL)',
      highlightTextAr:
        'تُعامل جميع البيانات الشخصية وتفاصيل الاستشارات والمستندات المرسلة إلى شركة سامي الشريف للمحاماة والاستشارات القانونية بسرية تامة وفق نظام حماية البيانات الشخصية السعودي (PDPL) ونظام المحاماة، ولا يتم مشاركتها مع أي جهة خارجية دون مسوغ نظامي أو موافقة صريحة.',
      highlightTextEn:
        'All personal data, consultation summaries, and documents submitted to Sami Al-Sharif Law Firm & Legal Consultations are strictly confidential under the Saudi PDPL and the Saudi Law Practice Code.',
      highlightTextUr:
        'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز کو بھیجے گئے تمام ذاتی ڈیٹا، مشاورت کی تفصیلات اور دستاویزات کو سعودی PDPL اور وکالت کے قانون کے تحت مکمل رازداری میں رکھا جاتا ہے اور قانونی جواز یا واضح اجازت کے بغیر کسی تیسرے فریق کے ساتھ شیئر نہیں کیا جاتا۔',
      sections: PRIVACY_POLICY_SECTIONS,
    },
    terms: {
      badgeAr: 'ضوابط استخدام الموقع وشروط التوكيل الرسمي',
      badgeEn: 'Website Terms of Use & Formal Representation Rules',
      badgeUr: 'ویب سائٹ کے استعمال کے ضوابط اور باقاعدہ وکالت کی شرائط',
      titleAr: 'الشروط والأحكام',
      titleEn: 'Terms & Conditions',
      titleUr: 'شرائط و ضوابط (Terms & Conditions)',
      subtitleAr:
        'تُنظم هذه الشروط والأحكام استخدام الموقع الإلكتروني، وتوضح الضوابط النظامية للاستشارات الأولية الإلكترونية وشروط انعقاد التوكيل الرسمي.',
      subtitleEn:
        'These Terms & Conditions govern the use of our website and clarify the legal status of initial electronic consultations and formal engagement requirements.',
      subtitleUr:
        'یہ شرائط و ضوابط ویب سائٹ کے استعمال کو منظم کرتے ہیں اور ابتدائی آن لائن مشاورت کی قانونی حیثیت اور باقاعدہ وکالت کے انعقاد کی شرائط واضح کرتے ہیں۔',
      highlightTitleAr:
        'توضيح هام بشأن الاستشارات الأولية الإلكترونية والتوكيل الرسمي',
      highlightTitleEn:
        'Important Notice on Initial Electronic Consultations & Formal Retainer',
      highlightTitleUr:
        'ابتدائی آن لائن مشاورت اور باقاعدہ وکالت سے متعلق اہم وضاحت',
      highlightTextAr:
        'إن تقديم طلب استشارة أولية عبر الموقع الإلكتروني أو عبر الواتساب أو البريد الإلكتروني لا يُعتبر توكيلاً رسمياً ولا ينشئ التزاماً بالتمثيل القانوني أو القضائي إلا بعد انتفاء تعارض المصالح، وتوقيع عقد وكالة / أتعاب رسمي مكتوب بين الطرفين، وسداد الأتعاب المتفق عليها.',
      highlightTextEn:
        'Submitting an initial consultation request via the website, WhatsApp, or email does NOT constitute a formal Power of Attorney or legal representation until a written retainer agreement is signed by both parties and agreed fees are paid.',
      highlightTextUr:
        'ویب سائٹ، واٹس ایپ یا ای میل کے ذریعے ابتدائی مشاورت کی درخواست جمع کرانا اس وقت تک باقاعدہ وکالت نہیں سمجھا جائے گا اور نہ ہی قانونی نمائندگی کی ذمہ داری عائد ہو گی جب تک دونوں فریقین کے درمیان تحریری معاہدے پر دستخط اور طے شدہ فیس کی ادائیگی نہ ہو جائے۔',
      sections: TERMS_AND_CONDITIONS_SECTIONS,
    },
    disclaimer: {
      badgeAr: 'إيضاح نظامي للمحتوى المنشور في الموقع',
      badgeEn: 'Statutory Notice Regarding Website Content',
      badgeUr: 'ویب سائٹ پر شائع کردہ مواد سے متعلق قانونی وضاحت',
      titleAr: 'إخلاء المسؤولية القانونية',
      titleEn: 'Legal Disclaimer',
      titleUr: 'قانونی دستبرداری (Legal Disclaimer)',
      subtitleAr:
        'يوضح هذا البيان الطبيعة التثقيفية والتعريفية العامة للمحتوى المنشور في الموقع الإلكتروني وحدود المسؤولية القانونية.',
      subtitleEn:
        'This statement clarifies the general educational nature of the information published on this website and the applicable limitation of liability.',
      subtitleUr:
        'یہ بیان ویب سائٹ پر شائع کردہ معلومات کی عمومی معلوماتی نوعیت اور قانونی ذمہ داری کی حدود کو واضح کرتا ہے۔',
      highlightTitleAr: 'المعلومات المنشورة لأغراض تثقيفية عامة فقط',
      highlightTitleEn: 'Content Provided for General Educational Purposes Only',
      highlightTitleUr: 'شائع کردہ معلومات صرف عمومی آگاہی اور معلوماتی مقاصد کے لیے ہیں',
      highlightTextAr: LEGAL_DISCLAIMER.shortTextAr,
      highlightTextEn: LEGAL_DISCLAIMER.shortTextEn,
      highlightTextUr: LEGAL_DISCLAIMER.shortTextUr,
      sections: DISCLAIMER_SECTIONS,
    },
  }[activePage];

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] min-h-[75vh]">
      <div className="max-w-[1100px] mx-auto px-6">
        {/* Top Navigation & Language / Print Utility Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E5DEC9]">
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'top')}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-bold text-[#141414] bg-white border border-[#D8CEB8] hover:border-[#B69648] rounded-lg transition-colors cursor-pointer"
          >
            <BackArrow className="w-4 h-4 text-[#9A7B34]" />
            <span>
              {tr(
                lang,
                'العودة إلى الصفحة الرئيسية',
                'Back to Home Page',
                'مرکزی صفحے پر واپس جائیں'
              )}
            </span>
          </button>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#141414] bg-white border border-[#D8CEB8] hover:border-[#B69648] rounded-lg transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5 text-[#9A7B34]" />
              <span>{tr(lang, 'طباعة الصفحة', 'Print Page', 'صفحہ پرنٹ کریں')}</span>
            </button>

            <LanguageSwitcher lang={lang} onSelectLang={onSelectLang} />
          </div>
        </div>

        {/* Legal Pages Switcher Tabs */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <button
            type="button"
            onClick={() => onNavigatePage('privacy')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-colors cursor-pointer border ${
              activePage === 'privacy'
                ? 'bg-[#141414] text-[#D1B46A] border-[#141414] shadow-xs'
                : 'bg-white text-[#4A463D] border-[#D8CEB8] hover:border-[#141414]'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>
              {tr(
                lang,
                '1. سياسة الخصوصية (PDPL)',
                '1. Privacy Policy (PDPL)',
                '1. رازداری کی پالیسی (PDPL)'
              )}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigatePage('terms')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-colors cursor-pointer border ${
              activePage === 'terms'
                ? 'bg-[#141414] text-[#D1B46A] border-[#141414] shadow-xs'
                : 'bg-white text-[#4A463D] border-[#D8CEB8] hover:border-[#141414]'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>
              {tr(lang, '2. الشروط والأحكام', '2. Terms & Conditions', '2. شرائط و ضوابط')}
            </span>
          </button>

          <button
            type="button"
            onClick={() => onNavigatePage('disclaimer')}
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs md:text-sm font-bold transition-colors cursor-pointer border ${
              activePage === 'disclaimer'
                ? 'bg-[#141414] text-[#D1B46A] border-[#141414] shadow-xs'
                : 'bg-white text-[#4A463D] border-[#D8CEB8] hover:border-[#141414]'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>
              {tr(
                lang,
                '3. إخلاء المسؤولية القانونية',
                '3. Legal Disclaimer',
                '3. قانونی دستبرداری'
              )}
            </span>
          </button>
        </div>

        {/* Hero Banner Card of the Active Legal Page */}
        <div className="rounded-2xl bg-[#141414] text-white p-8 md:p-10 mb-8 border border-[#B69648]/50 relative overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#967832] via-[#D1B46A] to-[#967832]"
          />
          <div className="text-xs font-semibold text-[#D1B46A] mb-2">
            {tr(lang, pageMeta.badgeAr, pageMeta.badgeEn, pageMeta.badgeUr)}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            {tr(lang, pageMeta.titleAr, pageMeta.titleEn, pageMeta.titleUr)}
          </h1>
          <p className="text-sm md:text-base text-[#D5CEBF] leading-relaxed max-w-3xl">
            {tr(lang, pageMeta.subtitleAr, pageMeta.subtitleEn, pageMeta.subtitleUr)}
          </p>

          {/* Highlighted Statutory Callout */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <div className="rounded-xl bg-[#1C1B18] border border-[#B69648]/60 p-5">
              <div className="text-xs md:text-sm font-bold text-[#D1B46A] mb-1.5 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>
                  {tr(
                    lang,
                    pageMeta.highlightTitleAr,
                    pageMeta.highlightTitleEn,
                    pageMeta.highlightTitleUr
                  )}
                </span>
              </div>
              <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                {tr(
                  lang,
                  pageMeta.highlightTextAr,
                  pageMeta.highlightTextEn,
                  pageMeta.highlightTextUr
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Policy Clauses Grid */}
        <div className="space-y-5 mb-12">
          {pageMeta.sections.map((sec) => {
            const bullets = tr(
              lang,
              sec.bulletsAr,
              sec.bulletsEn,
              sec.bulletsUr
            );
            return (
              <article
                key={sec.id}
                className="rounded-2xl bg-white p-6 md:p-8 border border-[#D8CEB8] hover:border-[#B69648] transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono-tabular text-xs font-bold px-2.5 py-1 rounded bg-[#FAF8F5] border border-[#D8CEB8] text-[#9A7B34]">
                    {sec.index}
                  </span>
                  <h2 className="text-lg md:text-xl font-bold text-[#141414]">
                    {tr(lang, sec.titleAr, sec.titleEn, sec.titleUr)}
                  </h2>
                </div>

                <p className="text-sm md:text-base text-[#4A463D] leading-relaxed">
                  {tr(lang, sec.contentAr, sec.contentEn, sec.contentUr)}
                </p>

                {bullets && (
                  <ul className="mt-4 pt-4 border-t border-[#E5DEC9] space-y-2.5">
                    {bullets.map((bullet, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs md:text-sm text-[#141414]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#9A7B34] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>

        {/* Bottom Action & Contact Strip inside Content Page */}
        <div className="rounded-2xl bg-[#F3EFE6] border border-[#D8CEB8] p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-[#141414] mb-1">
              {tr(
                lang,
                'هل لديك استفسار حول البنود القانونية أو ترغب في توقيع عقد تمثيل رسمي؟',
                'Have a question regarding our legal terms or wish to sign a formal retainer?',
                'کیا آپ کو قانونی شرائط سے متعلق کوئی استفسار ہے یا باقاعدہ وکالت کا معاہدہ کرنا چاہتے ہیں؟'
              )}
            </h3>
            <p className="text-xs md:text-sm text-[#5C564B]">
              {tr(
                lang,
                `تواصل معنا مباشرة عبر البريد الرسمي (${FIRM_CONTACT.email}) أو واتساب الاستشارات (${FIRM_CONTACT.whatsappDisplay}).`,
                `Contact us via official email (${FIRM_CONTACT.email}) or WhatsApp (${FIRM_CONTACT.whatsappDisplay}).`,
                `ہماری سرکاری ای میل (${FIRM_CONTACT.email}) یا واٹس ایپ مشاورت (${FIRM_CONTACT.whatsappDisplay}) پر براہِ راست رابطہ کریں۔`
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigatePage('home', 'contact')}
            className="px-6 py-3 text-xs md:text-sm font-bold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {tr(
              lang,
              'الانتقال إلى قسم التواصل',
              'Go to Contact Section',
              'رابطہ سیکشن پر جائیں'
            )}
          </button>
        </div>
      </div>
    </section>
  );
};
