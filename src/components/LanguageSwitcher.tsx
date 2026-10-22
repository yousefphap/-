import React, { useState, useRef, useEffect } from 'react';
import {
  Language,
  SUPPORTED_LANGUAGES,
  isRtl,
  tr,
} from '../utils/lawFirmLogic';

interface LanguageSwitcherProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
  variant?: 'light' | 'dark';
  compact?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  lang,
  onSelectLang,
  variant = 'light',
  compact = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const currentOption =
    SUPPORTED_LANGUAGES.find((item) => item.code === lang) ||
    SUPPORTED_LANGUAGES[0];
  const rtl = isRtl(lang);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const isDark = variant === 'dark';

  return (
    <div
      ref={containerRef}
      className="relative inline-block text-start shrink-0"
      data-testid="language-dropdown-container"
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={tr(
          lang,
          'خانة اختيار اللغة',
          'Language Selection',
          'زبان کا انتخاب'
        )}
        data-testid="language-dropdown-trigger"
        className={`inline-flex items-center justify-between gap-1.5 sm:gap-2 rounded-xl border font-bold transition-all cursor-pointer select-none ${
          compact
            ? 'px-2.5 py-2 text-xs min-h-[38px]'
            : 'px-3 py-2 text-xs sm:text-sm min-h-[40px]'
        } ${
          isDark
            ? 'bg-white/10 hover:bg-white/15 text-white border-white/20 hover:border-[#C69C47]'
            : 'bg-[#FAF8F5] hover:bg-white text-[#141414] border-[#D8CEB8] hover:border-[#9A7B34] shadow-2xs'
        }`}
      >
        <span className="inline-flex items-center gap-1.5">
          <svg
            viewBox="0 0 24 24"
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current fill-none shrink-0 ${
              isDark ? 'text-[#C69C47]' : 'text-[#9A7B34]'
            }`}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2 12h20" />
          </svg>
          {!compact && (
            <span
              className={`hidden sm:inline text-[11px] font-semibold ${
                isDark ? 'text-white/75' : 'text-[#6E6556]'
              }`}
            >
              {tr(lang, 'اللغة:', 'Lang:', 'زبان:')}
            </span>
          )}
          <span className="whitespace-nowrap">{currentOption.labelNative}</span>
        </span>

        <svg
          viewBox="0 0 24 24"
          className={`w-3.5 h-3.5 stroke-current fill-none shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          } ${isDark ? 'text-[#C69C47]' : 'text-[#9A7B34]'}`}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label={tr(
            lang,
            'قائمة اللغات المتاحة',
            'Available Languages',
            'دستیاب زبانیں'
          )}
          data-testid="language-dropdown-menu"
          className={`absolute z-50 mt-2 w-44 rounded-xl border border-[#C69C47]/40 bg-[#141414] text-white shadow-xl py-1.5 overflow-hidden ${
            rtl ? 'left-0' : 'right-0'
          }`}
        >
          {SUPPORTED_LANGUAGES.map((item) => {
            const isSelected = lang === item.code;
            return (
              <button
                key={item.code}
                type="button"
                role="option"
                aria-selected={isSelected}
                data-testid={`language-option-${item.code}`}
                onClick={() => {
                  onSelectLang(item.code);
                  setIsOpen(false);
                }}
                className={`w-full px-3.5 py-2.5 text-xs sm:text-sm flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-[#1B4332] text-[#C69C47] font-bold'
                    : 'text-white/90 hover:bg-white/10 hover:text-white font-medium'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span>{item.labelNative}</span>
                  <span className="text-[11px] text-white/50">
                    ({item.labelEn})
                  </span>
                </span>
                {isSelected && (
                  <svg
                    viewBox="0 0 24 24"
                    className="w-4 h-4 stroke-current fill-none text-[#C69C47] shrink-0"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
