import React, { useState } from 'react';
import {
  Language,
  LegalBlogArticle,
  LEGAL_BLOG_ARTICLES,
  isRtl,
  tr,
} from '../utils/lawFirmLogic';

interface LegalBlogSectionProps {
  lang: Language;
  onSelectServiceForBooking: (serviceId: string) => void;
}

export const LegalBlogSection: React.FC<LegalBlogSectionProps> = ({
  lang,
  onSelectServiceForBooking,
}) => {
  const [selectedArticle, setSelectedArticle] =
    useState<LegalBlogArticle | null>(null);
  const rtl = isRtl(lang);

  return (
    <section
      id="blog"
      className="py-20 bg-[#F7F4EE] border-b border-[#E5DEC9]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Centered Header matching Video 00:15-00:16 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-bold text-[#9A7B34] mb-3">
            <span className="w-6 h-[1.5px] bg-[#C69C47]" aria-hidden="true" />
            <span>
              {tr(lang, 'المدونة القانونية', 'Legal Insights Blog', 'قانونی بلاگ')}
            </span>
            <span className="w-6 h-[1.5px] bg-[#C69C47]" aria-hidden="true" />
          </div>
          <h2
            className="text-2xl sm:text-4xl font-bold text-[#141414] leading-snug mb-3"
            style={{ textWrap: 'balance' }}
          >
            {tr(
              lang,
              'رؤى وقراءات نظامية معاصرة',
              'Contemporary Saudi Legal Insights & Readings',
              'معاصر سعودی قانونی بصیرت اور مضامین'
            )}
          </h2>
          <p className="text-sm sm:text-base text-[#5C564B] leading-relaxed">
            {tr(
              lang,
              'مقالات وإضاءات قانونية يعدها مستشارو شركة سامي الشريف للمحاماة حول أحدث الأنظمة والتشريعات السعودية.',
              'Legal articles and regulatory analyses prepared by Sami Al-Sharif Law Firm counselors on Saudi legislation.',
              'سعودی قوانین اور ضوابط پر سامی الشریف لاء فرم کے مشیروں کے تیار کردہ قانونی مضامین اور تجزیے۔'
            )}
          </p>
        </div>

        {/* 3 Article Cards Grid matching Video 00:15-00:16 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEGAL_BLOG_ARTICLES.map((article) => (
            <article
              key={article.id}
              className="rounded-2xl bg-white p-7 border border-[#E5DEC9] hover:border-[#C69C47] transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Category & Date Metadata */}
                <div className="flex items-center gap-2 text-xs font-bold text-[#9A7B34] mb-3">
                  <span>
                    {tr(
                      lang,
                      article.categoryAr,
                      article.categoryEn,
                      article.categoryUr
                    )}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#6E675B] font-medium">
                    {tr(lang, article.dateAr, article.dateEn, article.dateUr)}
                  </span>
                </div>

                {/* Article Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#141414] leading-snug mb-3">
                  {tr(lang, article.titleAr, article.titleEn, article.titleUr)}
                </h3>

                {/* Excerpt */}
                <p className="text-xs sm:text-sm text-[#5C564B] leading-relaxed mb-6">
                  {tr(
                    lang,
                    article.excerptAr,
                    article.excerptEn,
                    article.excerptUr
                  )}
                </p>
              </div>

              {/* Footer Read More Button */}
              <div className="pt-4 border-t border-[#F0ECE1] flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(article)}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1B4332] hover:text-[#9A7B34] transition-colors cursor-pointer"
                >
                  <span>
                    {tr(lang, 'اقرأ المقال كاملاً', 'Read Full Article', 'مکمل مضمون پڑھیں')}
                  </span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  >
                    {rtl ? (
                      <>
                        <path d="M19 12H5" />
                        <path d="m12 19-7-7 7-7" />
                      </>
                    ) : (
                      <>
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </>
                    )}
                  </svg>
                </button>

                <span className="text-[11px] font-semibold text-[#7A7265]">
                  {tr(lang, 'إضاءة نظامية', 'Legal Brief', 'قانونی خلاصہ')}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="blog-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
            onClick={() => setSelectedArticle(null)}
          >
            <div
              className="bg-white text-[#141414] rounded-2xl max-w-2xl w-full p-6 sm:p-8 border border-[#E5DEC9] shadow-xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 pb-5 mb-6 border-b border-[#E5DEC9]">
                <div>
                  <div className="text-xs font-bold text-[#9A7B34] mb-1.5">
                    {tr(
                      lang,
                      selectedArticle.categoryAr,
                      selectedArticle.categoryEn,
                      selectedArticle.categoryUr
                    )}{' '}
                    ·{' '}
                    {tr(
                      lang,
                      selectedArticle.dateAr,
                      selectedArticle.dateEn,
                      selectedArticle.dateUr
                    )}
                  </div>
                  <h3
                    id="blog-modal-title"
                    className="text-xl sm:text-2xl font-bold text-[#141414] leading-snug"
                  >
                    {tr(
                      lang,
                      selectedArticle.titleAr,
                      selectedArticle.titleEn,
                      selectedArticle.titleUr
                    )}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  aria-label={tr(lang, 'إغلاق المقال', 'Close article', 'مضمون بند کریں')}
                  className="p-2 rounded-lg text-[#5C564B] hover:text-[#141414] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>

              <p className="text-sm sm:text-base text-[#3D3930] leading-relaxed mb-6">
                {tr(
                  lang,
                  selectedArticle.excerptAr,
                  selectedArticle.excerptEn,
                  selectedArticle.excerptUr
                )}
              </p>

              <div className="rounded-xl bg-[#FAF8F5] p-5 border border-[#E5DEC9] mb-6">
                <h4 className="text-sm font-bold text-[#1B4332] mb-3">
                  {tr(
                    lang,
                    'أبرز النقاط والتوصيات النظامية:',
                    'Key Regulatory Takeaways:',
                    'اہم قانونی نکات اور سفارشات:'
                  )}
                </h4>
                <ul className="space-y-2.5">
                  {tr(
                    lang,
                    selectedArticle.keyTakeawaysAr,
                    selectedArticle.keyTakeawaysEn,
                    selectedArticle.keyTakeawaysUr
                  ).map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C2821]"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="w-4 h-4 text-[#1B4332] stroke-current fill-none shrink-0 mt-0.5"
                        strokeWidth="2.2"
                        aria-hidden="true"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#E5DEC9]">
                <span className="text-xs text-[#6E675B]">
                  {tr(
                    lang,
                    'مادة تثقيفية عامة لا تغني عن الاستشارة القانونية المختصة.',
                    'For general informational purposes; does not replace tailored legal advice.',
                    'یہ معلومات صرف عمومی آگاہی کے لیے ہیں اور خصوصی قانونی مشورے کا متبادل نہیں ہیں۔'
                  )}
                </span>

                <button
                  type="button"
                  onClick={() => {
                    const srvId = selectedArticle.relatedServiceId;
                    setSelectedArticle(null);
                    onSelectServiceForBooking(srvId);
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#1B4332] hover:bg-[#143325] text-white text-xs font-bold transition-colors cursor-pointer"
                >
                  {tr(
                    lang,
                    'احجز استشارة في هذا الاختصاص ←',
                    'Book Consultation in This Area →',
                    'اس شعبے میں مشاورت بک کریں ←'
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
