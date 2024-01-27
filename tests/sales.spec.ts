import { test } from '@playwright/test';

test.describe('회원가입 로직 테스트', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
    await page.getByText('야놀자 통합 회원가입').click();
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/signup');
  });
});
