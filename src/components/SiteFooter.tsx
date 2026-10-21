import React from 'react';
import { ShieldCheck, FileText, AlertTriangle, Scale } from 'lucide-react';
import {
  Language,
  ActivePage,
  LEGAL_DISCLAIMER,
  FIRM_CONTACT,
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
                {lang === 'ar'
                  ? `${LEGAL_DISCLAIMER.titleAr} · ${LEGAL_DISCLAIMER.titleEn}`
                  : `${LEGAL_DISCLAIMER.titleEn} · ${LEGAL_DISCLAIMER.titleAr}`}
              </div>
              <p className="text-xs md:text-sm text-[#D5CEBF] leading-relaxed">
                {lang === 'ar'
                  ? LEGAL_DISCLAIMER.shortTextAr
                  : LEGAL_DISCLAIMER.shortTextEn}
              </p>
            </div>
          </div>
        </div>

        {/* Footer Main Columns: Brand Info, Quick Sections, and Legal Pages Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          {/* Col 1: Firm Identity (5 cols) */}
          <div className="md:col-span-5">
            <div className="font-calligraphy text-2xl text-[#D1B46A] mb-1.5">
              {FIRM_CONTACT.firmNameAr}
            </div>
            <div className="text-[11px] tracking-[0.14em] text-[#C2B69C] font-medium mb-3">
              SAMI ALSHAREEF LAWFIRM AND LEGAL CONSULTATIONS
            </div>
            <p className="text-xs text-[#9E9585] leading-relaxed max-w-md">
              {lang === 'ar'
                ? 'شركة محاماة واستشارات قانونية مرخصة في المملكة العربية السعودية (مكة المكرمة - جدة)، نقدم خدمات التمثيل القضائي والاستشارات القانونية وفق أعلى المعايير المهنية.'
                : 'Licensed Law Firm & Legal Consultations in the Kingdom of Saudi Arabia (Makkah - Jeddah), delivering judicial representation and specialized corporate advisory.'}
            </p>
          </div>

          {/* Col 2: Main Website Sections (3 cols) */}
          <div className="md:col-span-3">
            <div className="text-xs font-bold text-[#D1B46A] mb-3">
              {lang === 'ar' ? 'أقسام الموقع' : 'Website Sections'}
            </div>
            <ul className="space-y-2 text-xs text-[#D5CEBF]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'top')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'الصفحة الرئيسية' : 'Home'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'about')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'من نحن ورؤيتنا' : 'About & Vision'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'services')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'الخدمات القانونية (14)' : 'Legal Services (14)'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'estimator')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'تقييم المسار القانوني' : 'Legal Scope Estimator'}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigatePage('home', 'contact')}
                  className="hover:text-[#D1B46A] transition-colors cursor-pointer"
                >
                  {lang === 'ar' ? 'التواصل وحجز استشارة' : 'Contact & Consultation'}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal Pages & Policies (4 cols) */}
          <div className="md:col-span-4">
            <div className="text-xs font-bold text-[#D1B46A] mb-3">
              {lang === 'ar'
                ? 'الصفحات والبنود القانونية'
                : 'Legal Pages & Policies'}
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
                  {lang === 'ar'
                    ? 'سياسة الخصوصية وحماية البيانات (PDPL)'
                    : 'Privacy Policy (Saudi PDPL)'}
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
                  {lang === 'ar'
                    ? 'الشروط والأحكام وضوابط التوكيل'
                    : 'Terms & Conditions'}
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
                  {lang === 'ar'
                    ? 'إخلاء المسؤولية القانونية'
                    : 'Legal Disclaimer'}
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Direct Policy Links Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9E9585]">
          <div>
            {lang === 'ar'
              ? 'جميع الحقوق محفوظة © شركة سامي الشريف للمحاماة والاستشارات القانونية'
              : 'All Rights Reserved © Sami Al-Sharif Law Firm & Legal Consultations'}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => onNavigatePage('privacy')}
              className="hover:text-[#D1B46A] underline-offset-4 hover:underline transition-colors cursor-pointer font-semibold text-[#D5CEBF]"
            >
              {lang === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigatePage('terms')}
              className="hover:text-[#D1B46A] underline-offset-4 hover:underline transition-colors cursor-pointer font-semibold text-[#D5CEBF]"
            >
              {lang === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}
            </button>
            <span aria-hidden="true">·</span>
            <button
              type="button"
              onClick={() => onNavigatePage('disclaimer')}
              className="hover:text-[#D1B46A] underline-offset-4 hover:underline transition-colors cursor-pointer font-semibold text-[#D5CEBF]"
            >
              {lang === 'ar' ? 'إخلاء المسؤولية القانونية' : 'Legal Disclaimer'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
