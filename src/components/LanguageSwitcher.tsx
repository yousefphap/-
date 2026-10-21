import React from 'react';
import { Globe } from 'lucide-react';
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
      aria-label={tr(lang, 'اختيار اللغة', 'Select Language', 'زبان منتخب کریں')}
      className="inline-flex items-center gap-1 p-1 bg-white border border-[#D8CEB8] rounded-lg shadow-2xs"
    >
      <span
        className="inline-flex items-center gap-1 px-2 py-1 text-xs font-semibold text-[#9A7B34] select-none"
        aria-hidden="true"
      >
        <Globe className="w-3.5 h-3.5 text-[#9A7B34] shrink-0" />
      </span>

      {SUPPORTED_LANGUAGES.map((option) => {
        const isActive = lang === option.code;
        return (
          <button
            key={option.code}
            type="button"
            lang={option.code}
            dir={option.dir}
            aria-pressed={isActive}
            onClick={() => onSelectLang(option.code)}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
              isActive
                ? 'bg-[#141414] text-[#D1B46A] shadow-2xs'
                : 'text-[#4A463D] hover:text-[#141414] hover:bg-[#FAF8F5]'
            }`}
          >
            {option.labelNative}
          </button>
        );
      })}
    </div>
  );
};
