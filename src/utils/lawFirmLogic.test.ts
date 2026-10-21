import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LEGAL_SERVICES,
  FIRM_VALUES,
  FIRM_GOALS,
  TEAM_PILLARS,
  PRIVACY_POLICY_SECTIONS,
  TERMS_AND_CONDITIONS_SECTIONS,
  DISCLAIMER_SECTIONS,
  LEGAL_DISCLAIMER,
  filterServices,
  validateConsultationInput,
  calculateScopeEstimate,
  createConsultationTicket,
} from './lawFirmLogic.ts';

test('company profile dataset contains all 14 services across advisory and representation', () => {
  assert.equal(LEGAL_SERVICES.length, 14);
  const advisory = filterServices(LEGAL_SERVICES, 'advisory', '');
  const representation = filterServices(LEGAL_SERVICES, 'representation', '');
  assert.equal(advisory.length, 6);
  assert.equal(representation.length, 8);
  assert.equal(FIRM_VALUES.length, 5);
  assert.equal(FIRM_GOALS.length, 4);
  assert.equal(TEAM_PILLARS.length, 3);
  assert.equal(PRIVACY_POLICY_SECTIONS.length, 6);
  assert.equal(TERMS_AND_CONDITIONS_SECTIONS.length, 6);
  assert.equal(DISCLAIMER_SECTIONS.length, 4);
  assert.ok(LEGAL_DISCLAIMER.shortTextAr.includes('تثقيفية'));
});

test('filterServices filters accurately by Arabic and English search queries', () => {
  const arbitrationAr = filterServices(LEGAL_SERVICES, 'all', 'التحكيم');
  assert.equal(arbitrationAr.length, 1);
  assert.equal(arbitrationAr[0].id, 'arbitration-mediation');

  const governanceEn = filterServices(LEGAL_SERVICES, 'advisory', 'Governance');
  assert.equal(governanceEn.length, 1);
  assert.equal(governanceEn[0].id, 'corporate-governance');
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

test('calculateScopeEstimate and createConsultationTicket return structured outputs', () => {
  const estimate = calculateScopeEstimate({
    entityType: 'foreign_investor',
    serviceId: 'foreign-investment',
    urgency: 'priority',
  });

  assert.equal(estimate.recommendedCategory, 'representation');
  assert.equal(estimate.initialReviewDays, 4);
  assert.equal(estimate.checklistAr.length, 3);

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
