import React from 'react';
import { ShieldCheck, FileText, AlertTriangle, Scale } from 'lucide-react';
import {
  Language,
  ActivePage,
  LEGAL_DISCLAIMER,
  FIRM_CONTACT,
  tr,
} from '../utils/lawFirmLogic';

interface SiteFooterProps {
  lang: Language;
  activePage: ActivePage;
  onNavigatePage: (page: ActivePage, sectionId?: string) => void;
}

export const SiteFooter: React.FC<SiteFooterProps> = ({
  lang,
  activePage,
  onNavigatePage,
}) => {
  return (
    <footer className="bg-[#141414] text-white border-t border-[#B69648]/40">
      <div className="max-w-[1280px] mx-auto px-6 py-12">
        {/* Legal Disclaimer Box in Footer (Required across all pages) */}
        <div className="rounded-2xl bg-[#1C1B18] border border-[#B69648]/40 p-6 mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[#D1B46A] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs md:text-sm font-bold text-[#D1B46A] mb-1.5">
                {tr(
                  lang,
                  `${LEGAL_DISCLAIMER.titleAr} · ${LEGAL_DISCLAIMER.titleEn}`,
                  `${LEGAL_DISCLAIMER.titleEn} · ${LEGAL_DISCLAIMER.titleAr}`,
                  LEGAL_DISCLAIMER.titleUr
                )}
              </div>
              <p className="text-xs md:text-sm text-[#D5CEBF] leading-relaxed">
                {tr(
                  lang,
                  LEGAL_DISCLAIMER.shortTextAr,
                  LEGAL_DISCLAIMER.shortTextEn,
                  LEGAL_DISCLAIMER.shortTextUr
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Main Columns: Brand Info, Quick Sections, and Legal Pages Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Col 1: Firm Identity (5 cols) */}
          <div className="md:col-span-5">
            <div className="font-calligraphy text-2xl text-[#D1B46A] mb-1.5">
              {lang === 'ur' ? FIRM_CONTACT.firmNameUr : FIRM_CONTACT.firmNameAr}
            </div>
            <div className="text-[11px] tracking-[0.14em] text-[#C2B69C] font-medium mb-3">
              SAMI ALSHAREEF LAWFIRM AND LEGAL CONSULTATIONS
            </div>
            <p className="text-xs text-[#9E9585] leading-relaxed max-w-md">
              {tr(
                lang,
                'شركة محاماة واستشارات قانونية مرخصة في المملكة العربية السعودية (مكة المكرمة - جدة)، نقدم خدمات التمثيل القضائي والاستشارات القانونية وفق أعلى المعايير المهنية.',
                'Licensed Law Firm & Legal Consultations in the Kingdom of Saudi Arabia (Makkah - Jeddah), delivering judicial representation and specialized corporate advisory.',
                'مملکتِ سعودی عرب (مکہ مکرمہ - جدہ) میں لائسنس یافتہ لاء فرم اور قانونی مشاورتی ادارہ، جو اعلیٰ ترین پیشہ ورانہ معیارات کے مطابق عدالتی نمائندگی اور کارپوریٹ مشاورت فراہم کرتا ہے۔'
              )}
            </p>
          </div>

          {/* Col 2: Main Website Sections (3 cols) */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold text-[#D1B46A] mb-3">
              {tr(lang, 'أقسام الموقع', 'Website Sections', 'ویب سائٹ کے حصے')}
            </div>
            <ul className="space-y-2 text-xs text-[#D5CEBF]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'top')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {tr(lang, 'الصفحة الرئيسية', 'Home', 'مرکزی صفحہ')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'about')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {tr(lang, 'من نحن ورؤيتنا', 'About & Vision', 'ہمارے بارے میں اور وژن')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'services')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {tr(lang, 'خدمات', 'Services', 'خدمات')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'estimator')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {tr(lang, 'تقييم المسار القانوني', 'Legal Scope Estimator', 'قانونی دائرہ کار کا تخمینہ')}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'contact')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {tr(lang, 'التواصل وحجز استشارة', 'Contact & Consultation', 'رابطہ اور مشاورت کی بکنگ')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Pages & Policies (4 cols) */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold text-[#D1B46A] mb-3">
              {tr(
                lang,
                'الصفحات والبنود القانونية',
                'Legal Pages & Policies',
                'قانونی صفحات اور ضوابط'
              )}
            </div>
            <div className="flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => onNavigatePage('privacy')}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer text-right ${
                  activePage === 'privacy'
                    ? 'bg-[#B69648] text-[#141414] border-[#B69648]'
                    : 'bg-[#1C1B18] text-white border-white/10 hover:border-[#B69648]'
                }`}
              >
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#D1B46A]" />
                <span>
                  {tr(
                    lang,
                    'سياسة الخصوصية وحماية البيانات (PDPL)',
                    'Privacy Policy (Saudi PDPL)',
                    'رازداری کی پالیسی (سعودی PDPL)'
                  )}
                </span>
              </button>

              <button
                type="button"
                onClick={() => onNavigatePage('terms')}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer text-right ${
                  activePage === 'terms'
                    ? 'bg-[#B69648] text-[#141414] border-[#B69648]'
                    : 'bg-[#1C1B18] text-white border-white/10 hover:border-[#B69648]'
                }`}
              >
                <FileText className="w-4 h-4 shrink-0 text-[#D1B46A]" />
                <span>
                  {tr(
                    lang,
                    'الشروط والأحكام وضوابط التوكيل',
                    'Terms & Conditions',
                    'شرائط و ضوابط اور وکالت کے اصول'
                  )}
                </span>
              </button>

              <button
                type="button"
                onClick={() => onNavigatePage('disclaimer')}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl border text-xs font-semibold transition-colors cursor-pointer text-right ${
                  activePage === 'disclaimer'
                    ? 'bg-[#B69648] text-[#141414] border-[#B69648]'
                    : 'bg-[#1C1B18] text-white border-white/10 hover:border-[#B69648]'
                }`}
              >
                <Scale className="w-4 h-4 shrink-0 text-[#D1B46A]" />
                <span>
                  {tr(
                    lang,
                    'إخلاء المسؤولية القانونية',
                    'Legal Disclaimer',
                    'قانونی دستبرداری (Legal Disclaimer)'
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Direct Policy Links Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9585]">
          <div>
            {tr(
              lang,
              'جميع الحقوق محفوظة © شركة سامي الشريف للمحاماة والاستشارات القانونية',
              'All Rights Reserved © Sami Al-Sharif Law Firm & Legal Consultations',
              'جملہ حقوق محفوظ ہیں © سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز'
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigatePage('privacy')}
              className="hover:text-[#D1B46A] underline-offset-4 hover:underline transition-colors cursor-pointer font-semibold text-[#D5CEBF]"
            >
              {tr(lang, 'سياسة الخصوصية', 'Privacy Policy', 'رازداری کی پالیسی')}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigatePage('terms')}
              className="hover:text-[#D1B46A] underline-offset-4 hover:underline transition-colors cursor-pointer font-semibold text-[#D5CEBF]"
            >
              {tr(lang, 'الشروط والأحكام', 'Terms & Conditions', 'شرائط و ضوابط')}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigatePage('disclaimer')}
              className="hover:text-[#D1B46A] underline-offset-4 hover:underline transition-colors cursor-pointer font-semibold text-[#D5CEBF]"
            >
              {tr(lang, 'إخلاء المسؤولية القانونية', 'Legal Disclaimer', 'قانونی دستبرداری')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
