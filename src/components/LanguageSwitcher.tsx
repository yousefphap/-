import React from 'react';
import {
  Language,
  SUPPORTED_LANGUAGES,
  tr,
} from '../utils/lawFirmLogic';

interface LanguageSwitcherProps {
  lang: Language;
  onSelectLang: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  lang,
  onSelectLang,
}) => {
  return (
    <div
      role="group"
      aria-label={tr(
        lang,
        'خانة اختيار اللغة',
        'Language Selection',
        'زبان کا انتخاب'
      )}
      className="inline-flex items-center gap-2 rounded-xl bg-[#FAF8F5] border border-[#D8CEB8] p-1 shadow-xs"
    >
      <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-[#9A7B34] border-e border-[#E5DEC9]">
        <svg
          viewBox="0 0 24 24"
          className="w-3.5 h-3.5 stroke-current fill-none shrink-0"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
        <span>
          {tr(lang, 'اللغة', 'Language', 'زبان')}
        </span>
      </div>

      <div className="flex items-center gap-1">
        {SUPPORTED_LANGUAGES.map((item) => {
          const isActive = lang === item.code;
          return (
            <button
              key={item.code}
              type="button"
              onClick={() => onSelectLang(item.code)}
              aria-pressed={isActive}
              title={item.title}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#141414] text-[#D1B46A] shadow-xs border border-[#B69648]'
                  : 'text-[#4A463D] hover:text-[#141414] hover:bg-white/70 border border-transparent'
              }`}
            >
              {item.nativeLabel}
            </button>
          );
        })}
      </div>
    </div>
  );
};
