import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';
import { ALERT_COLORS } from '@vapor-core/src/components/Alert/Alert.constants';

const PAGE = '/iframe/vapor-core/alert';

test.describe('Alert', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(PAGE);
        await page.waitForSelector('[data-test-id="livedemo-preview"]');
    });
    ALERT_COLORS.forEach((color) => {
        test(`접근성 테스트 - Color: ${color}`, async ({ page }, testInfo) => {
            // 색상 선택
            await page.getByRole('button', { name: 'COLOR' }).click();
            await page.locator('a').filter({ hasText: color }).click();

            // 접근성 스캔 실행
            const a11yScanResult = await new AxeBuilder({ page })
                .include('[data-test-id="livedemo-preview"]')
                .analyze();

            await testInfo.attach('accessibility-scan-results', {
                body: JSON.stringify(a11yScanResult.violations, null, 2),
                contentType: 'application/json',
            });

            expect(a11yScanResult.violations).toEqual([]);
        });
    });

    test('role="alert" 속성이 존재해야 합니다.', ({ page }) => {
        const alert = page.locator(
            '[data-test-id="livedemo-preview"] [role="alert"]',
        );
        expect(alert).not.toBeNull();
    });
});
