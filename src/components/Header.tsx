import React, { useState, useEffect } from 'react';
import {
  Language,
  ActivePage,
  FIRM_CONTACT,
  tr,
} from '../utils/lawFirmLogic';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  lang: Language;
  activePage: ActivePage;
  onSelectLang?: (lang: Language) => void;
  onNavigatePage: (page: ActivePage, sectionId?: string) => void;
  onBookClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  activePage,
  onSelectLang,
  onNavigatePage,
  onBookClick,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const isLightHeader = activePage !== 'home' || isScrolled;

  const handleNavClick = (page: ActivePage, sectionId?: string) => {
    setIsMobileMenuOpen(false);
    onNavigatePage(page, sectionId);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-200 ${
        isLightHeader
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DEC9] text-[#141414] shadow-xs'
          : 'bg-[#0C1612]/95 backdrop-blur-md border-b border-white/15 text-white'
      }`}
    >
      <div className="max-w-[1280px] mx-auto min-h-[68px] sm:h-20 px-3.5 sm:px-6 py-2 sm:py-0 flex items-center justify-between gap-2 sm:gap-4 lg:gap-6">
        {/* Zone 1: Brand Title (Responsive for mobile & desktop) */}
        <a
          href="index.html"
          onClick={(e) => {
            setIsMobileMenuOpen(false);
            if (!window.location.pathname.endsWith('calculators.html')) {
              e.preventDefault();
              onNavigatePage('home', 'top');
            }
          }}
          className={`font-calligraphy font-bold text-xs sm:text-base lg:text-lg xl:text-xl leading-snug transition-colors cursor-pointer min-w-0 flex-1 lg:flex-initial ${
            isLightHeader
              ? 'text-[#141414] hover:text-[#1B4332]'
              : 'text-white hover:text-[#C69C47]'
          }`}
        >
          <span className="block sm:inline truncate">
            {tr(
              lang,
              'شركة سامي الشريف للمحاماة والاستشارات القانونية',
              'Sami Al-Sharif Law Firm',
              'سامی الشریف لاء فرم'
            )}
          </span>
        </a>

        {/* Zone 2: Desktop Navigation Links (Visible on lg+) */}
        <nav
          aria-label={tr(
            lang,
            'التنقل الرئيسي',
            'Primary Navigation',
            'مرکزی نیویگیشن'
          )}
          className={`hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium ${
            isLightHeader ? 'text-[#4A463D]' : 'text-white/85'
          }`}
        >
          <button
            type="button"
            onClick={() => handleNavClick('home', 'about')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isLightHeader ? 'hover:text-[#1B4332]' : 'hover:text-[#C69C47]'
            }`}
          >
            {tr(lang, 'من نحن', 'About Us', 'ہمارے بارے میں')}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('home', 'services')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isLightHeader ? 'hover:text-[#1B4332]' : 'hover:text-[#C69C47]'
            }`}
          >
            {tr(lang, 'خدمات', 'Services', 'خدمات')}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('home', 'methodology')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isLightHeader ? 'hover:text-[#1B4332]' : 'hover:text-[#C69C47]'
            }`}
          >
            {tr(lang, 'كيف نعمل', 'How We Work', 'طریقہ کار')}
          </button>
          <button
            type="button"
            onClick={() => handleNavClick('home', 'team')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isLightHeader ? 'hover:text-[#1B4332]' : 'hover:text-[#C69C47]'
            }`}
          >
            {tr(lang, 'فريق العمل', 'Our Team', 'ہماری ٹیم')}
          </button>
          <a
            href="calculators.html"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('calculators');
            }}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer font-bold ${
              activePage === 'calculators'
                ? 'text-[#C69C47] underline underline-offset-8'
                : isLightHeader
                ? 'text-[#1B4332] hover:text-[#C69C47]'
                : 'text-[#D8B467] hover:text-white'
            }`}
          >
            {tr(
              lang,
              'الحاسبات القانونية الذكية',
              'Legal Calculators',
              'قانونی کیلکولیٹرز'
            )}
          </a>
        </nav>

        {/* Zone 3: Language Dropdown + Primary Action + Mobile Menu Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          {onSelectLang && (
            <LanguageSwitcher
              lang={lang}
              onSelectLang={onSelectLang}
              variant={isLightHeader ? 'light' : 'dark'}
              compact
            />
          )}

          {activePage === 'calculators' ? (
            <a
              href="index.html"
              onClick={(e) => {
                setIsMobileMenuOpen(false);
                if (!window.location.pathname.endsWith('calculators.html')) {
                  e.preventDefault();
                  onNavigatePage('home', 'top');
                }
              }}
              className="hidden sm:inline-flex items-center justify-center px-3.5 sm:px-4 py-2 text-xs md:text-sm font-bold text-[#141414] bg-[#C69C47] hover:bg-[#B68B36] rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px]"
            >
              {tr(lang, 'العودة للرئيسية', 'Back to Home', 'مرکزی صفحہ')}
            </a>
          ) : (
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className={`hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 text-xs md:text-sm font-bold rounded-xl transition-colors whitespace-nowrap shrink-0 cursor-pointer min-h-[38px] ${
                isLightHeader
                  ? 'text-white bg-[#1B4332] hover:bg-[#143325]'
                  : 'text-[#141414] bg-[#C69C47] hover:bg-[#D8B467]'
              }`}
            >
              {tr(lang, 'احجز استشارة', 'Book Consultation', 'مشاورت بک کریں')}
            </button>
          )}

          {/* Mobile Menu Toggle Button (< lg) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={tr(
              lang,
              isMobileMenuOpen ? 'إغلاق القائمة' : 'فتح قائمة التنقل',
              isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu',
              isMobileMenuOpen ? 'مینو بند کریں' : 'مینو کھولیں'
            )}
            data-testid="mobile-menu-toggle"
            className={`lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl border transition-colors cursor-pointer shrink-0 ${
              isLightHeader
                ? 'bg-[#FAF8F5] text-[#141414] border-[#D8CEB8] hover:border-[#1B4332]'
                : 'bg-white/10 text-white border-white/20 hover:border-[#C69C47]'
            }`}
          >
            {isMobileMenuOpen ? (
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-current fill-none"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 stroke-current fill-none"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile & Tablet Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          data-testid="mobile-navigation-drawer"
          className={`lg:hidden border-t px-4 pt-3 pb-5 space-y-3 shadow-xl ${
            isLightHeader
              ? 'bg-[#FAF8F5] border-[#E5DEC9] text-[#141414]'
              : 'bg-[#0C1612] border-white/15 text-white'
          }`}
        >
          <nav
            aria-label={tr(
              lang,
              'قائمة الجوال',
              'Mobile Navigation',
              'موبائل نیویگیشن'
            )}
            className="grid grid-cols-1 gap-1.5"
          >
            <button
              type="button"
              onClick={() => handleNavClick('home', 'about')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-start transition-colors cursor-pointer ${
                isLightHeader
                  ? 'hover:bg-[#EFEAD8] text-[#141414]'
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              <span>{tr(lang, 'من نحن', 'About Us', 'ہمارے بارے میں')}</span>
              <span aria-hidden="true" className="text-[#C69C47]">
                ←
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'services')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-start transition-colors cursor-pointer ${
                isLightHeader
                  ? 'hover:bg-[#EFEAD8] text-[#141414]'
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              <span>{tr(lang, 'خدمات', 'Services', 'خدمات')}</span>
              <span aria-hidden="true" className="text-[#C69C47]">
                ←
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'methodology')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-start transition-colors cursor-pointer ${
                isLightHeader
                  ? 'hover:bg-[#EFEAD8] text-[#141414]'
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              <span>{tr(lang, 'كيف نعمل', 'How We Work', 'طریقہ کار')}</span>
              <span aria-hidden="true" className="text-[#C69C47]">
                ←
              </span>
            </button>

            <button
              type="button"
              onClick={() => handleNavClick('home', 'team')}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-start transition-colors cursor-pointer ${
                isLightHeader
                  ? 'hover:bg-[#EFEAD8] text-[#141414]'
                  : 'hover:bg-white/10 text-white'
              }`}
            >
              <span>{tr(lang, 'فريق العمل', 'Our Team', 'ہماری ٹیم')}</span>
              <span aria-hidden="true" className="text-[#C69C47]">
                ←
              </span>
            </button>

            <a
              href="calculators.html"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('calculators');
              }}
              className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-start transition-colors cursor-pointer border ${
                activePage === 'calculators'
                  ? 'bg-[#C69C47]/20 border-[#C69C47] text-[#C69C47]'
                  : isLightHeader
                  ? 'bg-white border-[#D8CEB8] text-[#1B4332] hover:border-[#C69C47]'
                  : 'bg-white/5 border-white/15 text-[#D8B467] hover:border-[#C69C47]'
              }`}
            >
              <span>
                {tr(
                  lang,
                  'الحاسبات القانونية الذكية',
                  'Smart Legal Calculators',
                  'ذہین قانونی کیلکولیٹرز'
                )}
              </span>
              <span aria-hidden="true">←</span>
            </a>
          </nav>

          {/* Mobile Drawer Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-[#C69C47]/25">
            {activePage === 'calculators' ? (
              <a
                href="index.html"
                onClick={(e) => {
                  setIsMobileMenuOpen(false);
                  if (!window.location.pathname.endsWith('calculators.html')) {
                    e.preventDefault();
                    onNavigatePage('home', 'top');
                  }
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#C69C47] text-[#141414] font-bold text-xs cursor-pointer"
              >
                <span>
                  {tr(lang, 'العودة إلى الصفحة الرئيسية', 'Back to Home', 'مرکزی صفحہ')}
                </span>
              </a>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#C69C47] text-[#141414] font-bold text-xs cursor-pointer"
              >
                <span>
                  {tr(
                    lang,
                    'احجز استشارتك القانونية الآن',
                    'Book Your Legal Consultation',
                    'ابھی قانونی مشاورت بک کریں'
                  )}
                </span>
              </button>
            )}

            <a
              href={FIRM_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#1B4332] text-white border border-[#C69C47]/50 font-bold text-xs cursor-pointer"
            >
              <span>
                {tr(
                  lang,
                  `واتساب مباشر: ${FIRM_CONTACT.whatsappDisplay}`,
                  `Direct WhatsApp: ${FIRM_CONTACT.whatsappDisplay}`,
                  `واٹس ایپ: ${FIRM_CONTACT.whatsappDisplay}`
                )}
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
