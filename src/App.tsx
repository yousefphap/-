/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Language,
  ActivePage,
  ClientEntityType,
  UrgencyLevel,
  ConsultationFormInput,
  FIRM_CONTACT,
  isRtl,
  tr,
} from './utils/lawFirmLogic';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutVisionSection } from './components/AboutVisionSection';
import { ServicesSection } from './components/ServicesSection';
import { ScopeEstimatorSection } from './components/ScopeEstimatorSection';
import { TeamSection } from './components/TeamSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { LegalPagesView } from './components/LegalPagesView';
import { SiteFooter } from './components/SiteFooter';
import { CompanyProfileModal } from './components/CompanyProfileModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [prefilledForm, setPrefilledForm] =
    useState<Partial<ConsultationFormInput> | null>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl(lang) ? 'rtl' : 'ltr';
  }, [lang]);

  const handleNavigatePage = (page: ActivePage, sectionId?: string) => {
    setActivePage(page);
    if (page === 'home') {
      setTimeout(() => {
        if (sectionId && sectionId !== 'top') {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 30);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    handleNavigatePage('home', 'contact');
  };

  const handleSelectServiceForBooking = (serviceId: string) => {
    setPrefilledForm({ serviceId });
    scrollToContact();
  };

  const handleApplyEstimateToBooking = (params: {
    entityType: ClientEntityType;
    serviceId: string;
    urgency: UrgencyLevel;
  }) => {
    setPrefilledForm(params);
    scrollToContact();
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141414]">
      <Header
        lang={lang}
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
        onBookClick={scrollToContact}
      />

      <main className="flex-1">
        {activePage === 'home' ? (
          <>
            <HeroSection
              lang={lang}
              onSelectLang={setLang}
              onOpenProfileModal={() => setIsProfileOpen(true)}
              onBookConsultation={scrollToContact}
            />

            <AboutVisionSection lang={lang} />

            <ServicesSection
              lang={lang}
              onSelectServiceForBooking={handleSelectServiceForBooking}
            />

            <ScopeEstimatorSection
              lang={lang}
              onApplyEstimateToBooking={handleApplyEstimateToBooking}
            />

            <TeamSection
              lang={lang}
              onBookConsultation={scrollToContact}
            />

            <FaqSection
              lang={lang}
              onBookConsultation={scrollToContact}
            />

            <ContactSection
              lang={lang}
              prefilledForm={prefilledForm}
              onNavigatePage={(page) => handleNavigatePage(page)}
            />
          </>
        ) : (
          <LegalPagesView
            lang={lang}
            activePage={activePage}
            onSelectLang={setLang}
            onNavigatePage={handleNavigatePage}
          />
        )}
      </main>

      {/* Shared Footer with Legal Disclaimer & Policy Links across ALL pages */}
      <SiteFooter
        lang={lang}
        activePage={activePage}
        onNavigatePage={handleNavigatePage}
      />

      {/* Floating WhatsApp Consultation Button (0593500596) in Gold & White */}
      <a
        href={FIRM_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={tr(
          lang,
          `تواصل مباشرة مع مستشار مختص عبر واتساب ${FIRM_CONTACT.whatsappDisplay}`,
          `WhatsApp Consultation ${FIRM_CONTACT.whatsappDisplay}`,
          `واٹس ایپ کے ذریعے قانونی مشاورت حاصل کریں ${FIRM_CONTACT.whatsappDisplay}`
        )}
        className={`fixed bottom-5 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[#141414] hover:bg-[#9A7B34] text-white font-bold text-xs md:text-sm shadow-lg border border-[#B69648] transition-colors ${
          isRtl(lang) ? 'left-5' : 'right-5'
        }`}
      >
        <svg
          viewBox="0 0 24 24"
          className="w-5 h-5 fill-current text-[#D1B46A] shrink-0"
          aria-hidden="true"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.625.846 5.059 2.284 7.033l-1.492 5.451 5.581-1.464c1.908 1.253 4.19 1.98 6.627 1.98 6.627 0 12-5.373 12-12s-5.373-12-12-12z" />
        </svg>
        <span>
          {tr(
            lang,
            `تواصل مع مستشار عبر واتساب · ${FIRM_CONTACT.whatsappDisplay}`,
            `WhatsApp Consultation · ${FIRM_CONTACT.whatsappDisplay}`,
            `واٹس ایپ کے ذریعے قانونی مشاورت · ${FIRM_CONTACT.whatsappDisplay}`
          )}
        </span>
      </a>

      <CompanyProfileModal
        isOpen={isProfileOpen}
        lang={lang}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
}
