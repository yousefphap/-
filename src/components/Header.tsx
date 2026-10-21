import React from 'react';
import { Language, ActivePage, FIRM_CONTACT } from '../utils/lawFirmLogic';

interface HeaderProps {
  lang: Language;
  activePage: ActivePage;
  onNavigatePage: (page: ActivePage, sectionId?: string) => void;
  onBookClick: () => void;
}

/**
 * Strictly adheres to the 3-Zone Top Bar Contract:
 * [Brand title, one line] — [4-5 nav links, 1-2 word labels, single-line] — [1 primary action]
 */
export const Header: React.FC<HeaderProps> = ({
  lang,
  onNavigatePage,
  onBookClick,
}) => {
  const navItems =
    lang === 'ar'
      ? [
          { id: 'about', label: 'من نحن' },
          { id: 'services', label: 'خدماتنا' },
          { id: 'estimator', label: 'نطاق الخدمة' },
          { id: 'team', label: 'فريقنا' },
          { id: 'contact', label: 'التواصل' },
        ]
      : [
          { id: 'about', label: 'About' },
          { id: 'services', label: 'Services' },
          { id: 'estimator', label: 'Scope' },
          { id: 'team', label: 'Team' },
          { id: 'contact', label: 'Contact' },
        ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DEC9]">
      <div className="max-w-[1280px] mx-auto flex items-center justify-between gap-8 px-6 py-3.5">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            onNavigatePage('home', 'top');
          }}
          className="text-lg font-bold tracking-tight text-[#141414] hover:text-[#9A7B34] transition-colors whitespace-nowrap shrink-0"
        >
          {lang === 'ar' ? FIRM_CONTACT.firmNameShortAr : FIRM_CONTACT.firmNameShortEn}
        </a>

        {/* Zone 2: 5 clean single-line text navigation links */}
        <nav
          aria-label={lang === 'ar' ? 'التنقل الرئيسي' : 'Primary Navigation'}
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A463D]"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigatePage('home', item.id);
              }}
              className="hover:text-[#141414] underline-offset-8 hover:underline decoration-[#B69648] decoration-2 transition-colors whitespace-nowrap shrink-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onBookClick}
            className="px-5 py-2.5 text-xs md:text-sm font-semibold text-white bg-[#141414] hover:bg-[#9A7B34] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B69648]"
          >
            {lang === 'ar' ? 'طلب استشارة' : 'Book Consultation'}
          </button>
        </div>
      </div>
    </header>
  );
};
