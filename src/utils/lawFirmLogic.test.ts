import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LEGAL_SERVICES,
  FIRM_VALUES,
  FIRM_GOALS,
  TEAM_PILLARS,
  TRUST_BAR_ITEMS,
  WHY_CHOOSE_US_ITEMS,
  FOUNDER_PROFILE,
  FAQ_ITEMS,
  PRIVACY_POLICY_SECTIONS,
  TERMS_AND_CONDITIONS_SECTIONS,
  DISCLAIMER_SECTIONS,
  LEGAL_DISCLAIMER,
  filterServices,
  validateConsultationInput,
  calculateScopeEstimate,
  createConsultationTicket,
  buildServiceWhatsAppUrl,
  buildScopeEstimateWhatsAppUrl,
} from './lawFirmLogic.ts';

test('company profile dataset contains all 14 services, trust bar, USPs, founder, and 5 FAQs', () => {
  assert.equal(LEGAL_SERVICES.length, 14);
  const advisory = filterServices(LEGAL_SERVICES, 'advisory', '');
  const representation = filterServices(LEGAL_SERVICES, 'representation', '');
  assert.equal(advisory.length, 6);
  assert.equal(representation.length, 8);
  assert.equal(FIRM_VALUES.length, 5);
  assert.equal(FIRM_GOALS.length, 4);
  assert.equal(TEAM_PILLARS.length, 3);
  assert.equal(TRUST_BAR_ITEMS.length, 3);
  assert.equal(WHY_CHOOSE_US_ITEMS.length, 3);
  assert.equal(FAQ_ITEMS.length, 5);
  assert.ok(FOUNDER_PROFILE.nameAr.includes('سامي الشريف'));
  assert.equal(PRIVACY_POLICY_SECTIONS.length, 6);
  assert.equal(TERMS_AND_CONDITIONS_SECTIONS.length, 6);
  assert.equal(DISCLAIMER_SECTIONS.length, 4);
  assert.ok(LEGAL_DISCLAIMER.shortTextAr.includes('تثقيفية'));
});

test('filterServices filters accurately by Arabic, English, and Urdu search queries', () => {
  const arbitrationAr = filterServices(LEGAL_SERVICES, 'all', 'التحكيم');
  assert.equal(arbitrationAr.length, 1);
  assert.equal(arbitrationAr[0].id, 'arbitration-mediation');

  const governanceEn = filterServices(LEGAL_SERVICES, 'advisory', 'Governance');
  assert.equal(governanceEn.length, 1);
  assert.equal(governanceEn[0].id, 'corporate-governance');

  const arbitrationUr = filterServices(LEGAL_SERVICES, 'all', 'ثالثی');
  assert.equal(arbitrationUr.length, 1);
  assert.equal(arbitrationUr[0].id, 'arbitration-mediation');
});

test('validateConsultationInput catches empty and invalid fields and passes valid Saudi inputs', () => {
  const emptyErrors = validateConsultationInput(
    {
      fullName: '',
      phone: '123',
      email: 'invalid-email',
      entityType: 'corporate',
      serviceId: '',
      urgency: 'standard',
      summary: 'short',
    },
    'ar'
  );

  assert.ok(emptyErrors.fullName);
  assert.ok(emptyErrors.phone);
  assert.ok(emptyErrors.email);
  assert.ok(emptyErrors.serviceId);
  assert.ok(emptyErrors.summary);

  const validErrors = validateConsultationInput(
    {
      fullName: 'شركة الآفاق للتجارة',
      phone: '0569888100',
      email: 'client@example.sa',
      entityType: 'corporate',
      serviceId: 'contract-drafting',
      urgency: 'priority',
      summary: 'نرغب في صياغة ومراجعة عقد توريد وتوزيع حصري داخل المملكة.',
    },
    'ar'
  );

  assert.equal(Object.keys(validErrors).length, 0);
});

test('calculateScopeEstimate, createConsultationTicket, and WhatsApp URL builders return structured outputs', () => {
  const estimate = calculateScopeEstimate({
    entityType: 'foreign_investor',
    serviceId: 'foreign-investment',
    urgency: 'priority',
  });

  assert.equal(estimate.recommendedCategory, 'representation');
  assert.equal(estimate.initialReviewDays, 4);
  assert.equal(estimate.checklistAr.length, 3);

  const serviceWaUrl = buildServiceWhatsAppUrl(LEGAL_SERVICES[0], 'ar');
  assert.ok(serviceWaUrl.startsWith('https://wa.me/966593500596?text='));

  const estimateWaUrl = buildScopeEstimateWhatsAppUrl(
    {
      entityType: 'corporate',
      serviceId: 'corporate-governance',
      urgency: 'priority',
      estimate,
    },
    'ar'
  );
  assert.ok(estimateWaUrl.startsWith('https://wa.me/966593500596?text='));

  const ticket = createConsultationTicket(
    {
      fullName: 'سامي العتيبي',
      phone: '0569888100',
      email: 'sami@example.com',
      entityType: 'individual',
      serviceId: 'litigation-advocacy',
      urgency: 'standard',
      summary: 'تمثيل قضائي في دعوى تجارية مقامة في مدينة جدة.',
    },
    205
  );

  assert.equal(ticket.referenceId, 'SAS-205-8100');
  assert.equal(ticket.serviceTitleAr, 'الترافع والتمثيل القضائي');
});
