import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calculateSaudiLaborEntitlements,
  calculateSaudiJudicialCosts,
  calculateShariaInheritance,
  calculateCorporateComplianceScore,
  buildLaborWhatsAppMessage,
  buildLaborWhatsAppUrl,
  buildJudicialCostsWhatsAppMessage,
  buildJudicialCostsWhatsAppUrl,
  buildInheritanceWhatsAppMessage,
  buildInheritanceWhatsAppUrl,
  buildComplianceWhatsAppMessage,
  buildComplianceWhatsAppUrl,
} from './saudiLegalCalculators';

test('Saudi Labor Law: Article 84 full award for 7 years service with leave and overtime', () => {
  const res = calculateSaudiLaborEntitlements({
    contractType: 'fixed',
    terminationReason: 'expiry_or_mutual',
    totalWage: 12000,
    basicWage: 9000,
    durationMode: 'direct',
    years: 7,
    months: 0,
    days: 0,
    unusedLeaveDays: 15,
    overtimeHours: 10,
  });

  // First 5 years = 5 * 6000 = 30,000; Next 2 years = 2 * 12000 = 24,000 => 54,000
  assert.equal(res.endOfServiceAward, 54000);
  // Leave: 15 days * (12000 / 30 = 400) = 6,000
  assert.equal(res.unusedLeaveCompensation, 6000);
  // Overtime: 10 hrs * ((12000/240 = 50) + 0.5*(9000/240 = 18.75) = 68.75) = 687.5
  assert.equal(res.overtimeCompensation, 687.5);
  assert.equal(res.grandTotal, 60687.5);
});

test('Saudi Labor Law: Article 80 yields 0 EOSB but preserves accrued leave & overtime', () => {
  const res = calculateSaudiLaborEntitlements({
    contractType: 'unlimited',
    terminationReason: 'article_80',
    totalWage: 10000,
    basicWage: 8000,
    durationMode: 'direct',
    years: 6,
    months: 0,
    days: 0,
    unusedLeaveDays: 6,
    overtimeHours: 0,
  });

  assert.equal(res.isZeroArticle80, true);
  assert.equal(res.endOfServiceAward, 0);
  assert.equal(res.unusedLeaveCompensation, 2000);
  assert.equal(res.grandTotal, 2000);
});

test('Saudi Labor Law: Article 85 resignation tiers (<2 yrs = 0, 2-5 yrs = 1/3, 5-10 yrs = 2/3, 10+ = 1)', () => {
  const under2 = calculateSaudiLaborEntitlements({
    contractType: 'unlimited',
    terminationReason: 'worker_resignation',
    totalWage: 9000,
    basicWage: 9000,
    durationMode: 'direct',
    years: 1,
    months: 6,
    days: 0,
    unusedLeaveDays: 0,
    overtimeHours: 0,
  });
  assert.equal(under2.endOfServiceAward, 0);

  const threeYears = calculateSaudiLaborEntitlements({
    contractType: 'unlimited',
    terminationReason: 'worker_resignation',
    totalWage: 9000,
    basicWage: 9000,
    durationMode: 'direct',
    years: 3,
    months: 0,
    days: 0,
    unusedLeaveDays: 0,
    overtimeHours: 0,
  });
  // Full = 3 * 4500 = 13500; 1/3 = 4500
  assert.equal(threeYears.endOfServiceAward, 4500);

  const sixYears = calculateSaudiLaborEntitlements({
    contractType: 'unlimited',
    terminationReason: 'worker_resignation',
    totalWage: 9000,
    basicWage: 9000,
    durationMode: 'direct',
    years: 6,
    months: 0,
    days: 0,
    unusedLeaveDays: 0,
    overtimeHours: 0,
  });
  // Full = 5*4500 (22500) + 1*9000 (9000) = 31500; 2/3 = 21000
  assert.equal(sixYears.endOfServiceAward, 21000);

  const tenYears = calculateSaudiLaborEntitlements({
    contractType: 'unlimited',
    terminationReason: 'worker_resignation',
    totalWage: 9000,
    basicWage: 9000,
    durationMode: 'direct',
    years: 10,
    months: 0,
    days: 0,
    unusedLeaveDays: 0,
    overtimeHours: 0,
  });
  // Full = 5*4500 (22500) + 5*9000 (45000) = 67500; 100% = 67500
  assert.equal(tenYears.endOfServiceAward, 67500);
});

test('Saudi Judicial Costs Law: Progressive brackets, cap at 1M SAR, exemptions, and settlement discounts', () => {
  const claim200k = calculateSaudiJudicialCosts({
    caseType: 'financial_claim',
    claimAmount: 200000,
    settlementOption: 'none',
  });
  // 1st 100k @ 5% = 5,000; next 100k @ 4% = 4,000 => 9,000
  assert.equal(claim200k.baseCost, 9000);
  assert.equal(claim200k.netPayableCost, 9000);

  const settledAfter1st = calculateSaudiJudicialCosts({
    caseType: 'financial_claim',
    claimAmount: 200000,
    settlementOption: 'after_first_hearing',
  });
  // 75% discount -> pays 25% of 9000 = 2250
  assert.equal(settledAfter1st.discountPercent, 75);
  assert.equal(settledAfter1st.netPayableCost, 2250);

  const exemptLabor = calculateSaudiJudicialCosts({
    caseType: 'exempt_labor_worker',
    claimAmount: 500000,
    settlementOption: 'none',
  });
  assert.equal(exemptLabor.isExempt, true);
  assert.equal(exemptLabor.netPayableCost, 0);
});

test('Sharia Inheritance Calculator: Caps bequest at 1/3 after debts and distributes shares accurately', () => {
  const res = calculateShariaInheritance({
    grossEstateValue: 1000000,
    debtsAndFuneral: 100000,
    bequestAmount: 450000, // Exceeds 1/3 of 900,000 (300,000)
    spouseType: 'wife',
    wivesCount: 1,
    sonsCount: 1,
    daughtersCount: 1,
    hasFather: false,
    hasMother: false,
  });

  assert.equal(res.netAfterDebts, 900000);
  assert.equal(res.maxAllowedBequest, 300000);
  assert.equal(res.appliedBequest, 300000);
  assert.equal(res.bequestCappedWarning, true);
  assert.equal(res.distributableEstate, 600000);

  // Wife gets 1/8 of 600,000 = 75,000. Remainder = 525,000 split 2:1 between 1 son (350,000) and 1 daughter (175,000)
  const wife = res.heirs.find((h) => h.heirLabelAr === 'الزوجة');
  const son = res.heirs.find((h) => h.heirLabelAr === 'الابن');
  const daughter = res.heirs.find((h) => h.heirLabelAr === 'البنت');

  assert.equal(wife?.totalShareAmount, 75000);
  assert.equal(son?.totalShareAmount, 350000);
  assert.equal(daughter?.totalShareAmount, 175000);
});

test('Corporate Compliance Calculator computes score and risk level accurately', () => {
  const highCompliance = calculateCorporateComplianceScore([
    'companies_law_charter',
    'qiwa_labor_contracts',
    'commercial_contracts_protection',
    'pdpl_digital_compliance',
  ]);
  assert.equal(highCompliance.scorePercent, 80);
  assert.equal(highCompliance.riskLevel, 'low');
});

test('Dynamic WhatsApp builders generate pre-filled summaries for all 4 calculators targeting 0593500596', () => {
  // 1. Labor WhatsApp
  const laborInput = {
    contractType: 'fixed' as const,
    terminationReason: 'expiry_or_mutual' as const,
    totalWage: 12000,
    basicWage: 9000,
    durationMode: 'direct' as const,
    years: 7,
    months: 0,
    days: 0,
    unusedLeaveDays: 15,
    overtimeHours: 10,
  };
  const laborRes = calculateSaudiLaborEntitlements(laborInput);
  const laborMsg = buildLaborWhatsAppMessage(laborInput, laborRes);
  const laborUrl = buildLaborWhatsAppUrl(laborInput, laborRes);

  assert.ok(laborMsg.includes('0593500596'));
  assert.ok(laborMsg.includes('60,687.50'));
  assert.ok(laborUrl.startsWith('https://wa.me/966593500596?text='));

  // 2. Judicial Costs WhatsApp
  const judicialInput = {
    caseType: 'financial_claim' as const,
    claimAmount: 200000,
    settlementOption: 'after_first_hearing' as const,
  };
  const judicialRes = calculateSaudiJudicialCosts(judicialInput);
  const judicialMsg = buildJudicialCostsWhatsAppMessage(judicialInput, judicialRes);
  const judicialUrl = buildJudicialCostsWhatsAppUrl(judicialInput, judicialRes);

  assert.ok(judicialMsg.includes('0593500596'));
  assert.ok(judicialMsg.includes('2,250.00'));
  assert.ok(judicialUrl.startsWith('https://wa.me/966593500596?text='));

  // 3. Inheritance WhatsApp
  const inheritanceRes = calculateShariaInheritance({
    grossEstateValue: 1000000,
    debtsAndFuneral: 100000,
    bequestAmount: 300000,
    spouseType: 'wife',
    wivesCount: 1,
    sonsCount: 1,
    daughtersCount: 1,
    hasFather: false,
    hasMother: false,
  });
  const inheritanceMsg = buildInheritanceWhatsAppMessage(inheritanceRes);
  const inheritanceUrl = buildInheritanceWhatsAppUrl(inheritanceRes);

  assert.ok(inheritanceMsg.includes('0593500596'));
  assert.ok(inheritanceMsg.includes('600,000.00'));
  assert.ok(inheritanceUrl.startsWith('https://wa.me/966593500596?text='));

  // 4. Corporate Compliance WhatsApp
  const checked = ['companies_law_charter', 'qiwa_labor_contracts'];
  const complianceRes = calculateCorporateComplianceScore(checked);
  const complianceMsg = buildComplianceWhatsAppMessage(complianceRes, checked);
  const complianceUrl = buildComplianceWhatsAppUrl(complianceRes, checked);

  assert.ok(complianceMsg.includes('0593500596'));
  assert.ok(complianceMsg.includes('40%'));
  assert.ok(complianceUrl.startsWith('https://wa.me/966593500596?text='));
  assert.equal(inheritanceMsg.includes('التجهيز'), false);
  assert.ok(inheritanceMsg.includes('الديون والالتزامات المالية على التركة'));
});

test('Saudi Labor Law Article 77: Unlawful termination compensation for unlimited & fixed contracts with 2-month floor', () => {
  // Unlimited contract, 1 year service -> 15 days = 5,000, but 2-month floor = 20,000
  const unlimFloor = calculateSaudiLaborEntitlements({
    contractType: 'unlimited',
    terminationReason: 'employer_termination',
    totalWage: 10000,
    basicWage: 8000,
    durationMode: 'direct',
    years: 1,
    months: 0,
    days: 0,
    unusedLeaveDays: 0,
    overtimeHours: 0,
    includeArticle77Compensation: true,
  });
  assert.equal(unlimFloor.article77Compensation, 20000);

  // Fixed contract, 5 months remaining -> 5 * 10,000 = 50,000
  const fixedRem = calculateSaudiLaborEntitlements({
    contractType: 'fixed',
    terminationReason: 'employer_termination',
    totalWage: 10000,
    basicWage: 8000,
    durationMode: 'direct',
    years: 2,
    months: 0,
    days: 0,
    unusedLeaveDays: 0,
    overtimeHours: 0,
    includeArticle77Compensation: true,
    remainingContractMonths: 5,
  });
  assert.equal(fixedRem.article77Compensation, 50000);
  // EOSB for 2 yrs = 10,000 + Art 77 (50,000) = 60,000
  assert.equal(fixedRem.grandTotal, 60000);
});

test('Saudi Personal Status Law (M/73): Siblings blocking by father/son, mother 1/6 reduction, and Kalalah shares', () => {
  // 1. Father blocks brothers & sisters, but 2+ siblings reduce mother from 1/3 to 1/6 (Art. 209)
  const blockedByFather = calculateShariaInheritance({
    grossEstateValue: 600000,
    debtsAndFuneral: 0,
    bequestAmount: 0,
    spouseType: 'none',
    wivesCount: 1,
    sonsCount: 0,
    daughtersCount: 0,
    hasFather: true,
    hasMother: true,
    brothersCount: 2,
    sistersCount: 0,
  });
  const motherRow = blockedByFather.heirs.find((h) => h.heirLabelAr === 'الأم');
  const fatherRow = blockedByFather.heirs.find((h) => h.heirLabelAr === 'الأب');
  assert.equal(motherRow?.totalShareAmount, 100000); // 1/6 of 600,000
  assert.equal(fatherRow?.totalShareAmount, 500000); // Remainder 5/6
  assert.equal(blockedByFather.blockedHeirsNotesAr.length, 1);

  // 2. Kalalah: No father, no children, 1 mother (1/6 due to 2 siblings), 1 brother + 1 sister share remainder (5/6) 2:1
  const kalalah = calculateShariaInheritance({
    grossEstateValue: 180000,
    debtsAndFuneral: 0,
    bequestAmount: 0,
    spouseType: 'none',
    wivesCount: 1,
    sonsCount: 0,
    daughtersCount: 0,
    hasFather: false,
    hasMother: true,
    brothersCount: 1,
    sistersCount: 1,
  });
  const mKalalah = kalalah.heirs.find((h) => h.heirLabelAr === 'الأم');
  const broKalalah = kalalah.heirs.find((h) => h.heirLabelAr === 'الأخ الشقيق');
  const sisKalalah = kalalah.heirs.find((h) => h.heirLabelAr === 'الأخت الشقيقة');
  assert.equal(mKalalah?.totalShareAmount, 30000); // 1/6
  assert.equal(broKalalah?.totalShareAmount, 100000); // 2/3 of 150,000
  assert.equal(sisKalalah?.totalShareAmount, 50000); // 1/3 of 150,000
});


