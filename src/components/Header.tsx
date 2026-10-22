import React, { useState, useEffect } from 'react';
import { Language, ActivePage, tr } from '../utils/lawFirmLogic';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isLightHeader = activePage !== 'home' || isScrolled;

  return (
    <header
      className={`sticky top-0 z-40 h-20 transition-colors duration-200 ${
        isLightHeader
          ? 'bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E5DEC9] text-[#141414] shadow-xs'
          : 'bg-[#0C1612]/90 backdrop-blur-md border-b border-white/15 text-white'
      }`}
    >
      <div className="max-w-[1280px] mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-3 sm:gap-8">
        {/* Zone 1: Brand Title (Single text element wordmark) */}
        <a
          href="index.html"
          onClick={(e) => {
            if (!window.location.pathname.endsWith('calculators.html')) {
              e.preventDefault();
              onNavigatePage('home', 'top');
            }
          }}
          className={`font-calligraphy font-bold text-sm sm:text-xl transition-colors truncate cursor-pointer ${
            isLightHeader
              ? 'text-[#141414] hover:text-[#1B4332]'
              : 'text-white hover:text-[#C69C47]'
          }`}
        >
          {tr(
            lang,
            'شركة سامي الشريف للمحاماة والاستشارات القانونية',
            'Sami Al-Sharif Law Firm',
            'سامی الشریف لاء فرم'
          )}
        </a>

        {/* Zone 2: 5 Concise Single-Line Navigation Links */}
        <nav
          aria-label={tr(
            lang,
            'التنقل الرئيسي',
            'Primary Navigation',
            'مرکزی نیویگیشن'
          )}
          className={`hidden xl:flex items-center gap-7 text-sm font-medium ${
            isLightHeader ? 'text-[#4A463D]' : 'text-white/85'
          }`}
        >
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'about')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isLightHeader ? 'hover:text-[#1B4332]' : 'hover:text-[#C69C47]'
            }`}
          >
            {tr(lang, 'من نحن', 'About Us', 'ہمارے بارے میں')}
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'services')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isLightHeader ? 'hover:text-[#1B4332]' : 'hover:text-[#C69C47]'
            }`}
          >
            {tr(lang, 'خدمات', 'Services', 'خدمات')}
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'methodology')}
            className={`transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isLightHeader ? 'hover:text-[#1B4332]' : 'hover:text-[#C69C47]'
            }`}
          >
            {tr(lang, 'كيف نعمل', 'How We Work', 'طریقہ کار')}
          </button>
          <button
            type="button"
            onClick={() => onNavigatePage('home', 'team')}
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
              onNavigatePage('calculators');
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

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          {activePage === 'calculators' ? (
            <a
              href="index.html"
              onClick={(e) => {
                if (!window.location.pathname.endsWith('calculators.html')) {
                  e.preventDefault();
                  onNavigatePage('home', 'top');
                }
              }}
              className="px-4 py-2.5 text-xs md:text-sm font-bold text-[#141414] bg-[#C69C47] hover:bg-[#B68B36] rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              {tr(lang, 'العودة للرئيسية', 'Back to Home', 'مرکزی صفحہ')}
            </a>
          ) : (
            <button
              type="button"
              onClick={onBookClick}
              className={`px-5 py-2.5 text-xs md:text-sm font-bold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                isLightHeader
                  ? 'text-white bg-[#1B4332] hover:bg-[#143325]'
                  : 'text-[#141414] bg-[#C69C47] hover:bg-[#D8B467]'
              }`}
            >
              {tr(lang, 'احجز استشارة', 'Book Consultation', 'مشاورت بک کریں')}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

