// import AxeBuilder from '@axe-core/playwright';
// import { expect, test } from '@playwright/test';
// import { COLOR_OPTIONS } from '@vapor-core/src/components/Badge/Badge.constants';

// const PAGE = '/iframe/vapor-core/badge';

// test.describe('Badge', () => {
//     test.beforeEach(async ({ page }) => {
//         await page.goto(PAGE);
//         await page.waitForSelector('[data-test-id="livedemo-preview"]');
//     });
//     COLOR_OPTIONS.forEach((color) => {
//         test(`접근성 테스트 - Color: ${color}`, async ({ page }, testInfo) => {
//             // 색상 선택
//             await page.getByRole('button', { name: 'COLOR' }).click();
//             await page.locator('a').filter({ hasText: color }).click();

//             // 접근성 스캔 실행
//             const a11yScanResult = await new AxeBuilder({ page })
//                 .include('[data-test-id="livedemo-preview"]')
//                 .analyze();

//             await testInfo.attach('accessibility-scan-results', {
//                 body: JSON.stringify(a11yScanResult.violations, null, 2),
//                 contentType: 'application/json',
//             });

//             expect(a11yScanResult.violations).toEqual([]);
//         });
//     });
// });
