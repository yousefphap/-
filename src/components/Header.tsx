import React from 'react';
import { Language, ActivePage, FIRM_CONTACT, tr } from '../utils/lawFirmLogic';

interface HeaderProps {
  lang: Language;
  activePage: ActivePage;
  onNavigatePage: (page: ActivePage, sectionId?: string) => void;
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  activePage,
  onNavigatePage,
  onBookClick,
}) => {
  return (
    <header className="sticky top-0 z-40 h-20 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto h-full px-6 flex items-center justify-between gap-4">
        {/* Brand Name */}
        <button
          type="button"
          onClick={() => onNavigatePage('home', 'top')}
          className="flex flex-col text-start group cursor-pointer"
        >
          <span className="font-bold text-base sm:text-lg text-[#141414] leading-tight">
            {tr(
              lang,
              'شركة سامي الشريف للمحاماة والاستشارات القانونية',
              'Sami Al-Sharif Law Firm & Legal Consultations',
              'سامی الشریف لاء فرم اینڈ لیگل کنسلٹیشنز'
            )}
          </span>
          <span className="text-[10px] tracking-[0.08em] uppercase text-[#8A6D2B] font-semibold">
            SAMI ALSHAREEF LAWFIRM AND LEGAL CONSULTATIONS
          </span>
        </button>

        {/* Primary Navigation Links */}
        <nav
          aria-label={tr(
            lang,
            'التنقل الرئيسي',
            'Primary Navigation',
            'مرکزی نیویگیشن'
          )}
          className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#4A463D]"
        >
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'about')}
            className="hover:text-[#141414] transition-colors cursor-pointer"
          >
            {tr(lang, 'نبذة عنا ولماذا نحن', 'About & Why Us', 'ہمارے بارے میں')}
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'services')}
            className="hover:text-[#141414] transition-colors cursor-pointer"
          >
            {tr(lang, 'خدمات', 'Services', 'خدمات')}
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'estimator')}
            className="hover:text-[#141414] transition-colors cursor-pointer"
          >
            {tr(lang, 'تقييم المسار القانوني', 'Scope Estimator', 'قانونی تخمینہ کار')}
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'team')}
            className="hover:text-[#141414] transition-colors cursor-pointer"
          >
            {tr(lang, 'القيادة وفريقنا', 'Leadership & Team', 'قیادت اور ٹیم')}
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'faq')}
            className="hover:text-[#141414] transition-colors cursor-pointer"
          >
            {tr(lang, 'الأسئلة الشائعة', 'FAQ', 'عام سوالات')}
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('privacy')}
            className={`transition-colors cursor-pointer ${
              activePage === 'privacy'
                ? 'text-[#9A7B34] font-bold'
                : 'hover:text-[#141414]'
            }`}
          >
            {tr(lang, 'سياسة الخصوصية', 'Privacy Policy', 'رازداری کی پالیسی')}
          </button>
        </nav>

        {/* Actions: Direct WhatsApp + Book Consultation CTA */}
        <div className="flex items-center gap-2.5">
          <a
            href={FIRM_CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2.5 text-xs font-bold text-[#141414] bg-[#D1B46A] hover:bg-[#B69648] rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 fill-current shrink-0"
              aria-hidden="true"
            >
              <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
            </svg>
            <span className="font-mono-tabular">{FIRM_CONTACT.whatsappDisplay}</span>
          </a>

          <button
            type="button"
            onClick={onBookClick}
            className="px-4 py-2.5 text-xs md:text-sm font-bold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            {tr(
              lang,
              'احجز استشارتك الآن',
              'Book Consultation Now',
              'ابھی مشاورت بک کریں'
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
