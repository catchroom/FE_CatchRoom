import { test, expect } from '@playwright/test';

test('상세페이지 구매로직 테스트', async ({ page }) => {
  await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/home');
  await page.locator('.rounded-t-xl').first().click();
  await page.getByRole('button', { name: '채팅으로 문의하기' }).click();
  await page.getByRole('button', { name: '로그인 하기' }).click();
  await page.getByPlaceholder('이메일').click();
  await page.getByPlaceholder('이메일').fill('catch1@gmail.com');
  await page.getByPlaceholder('이메일').press('Tab');
  await page.getByPlaceholder('비밀번호').fill('catch1@');
  await page.getByRole('button', { name: '로그인' }).click();
  await page.getByPlaceholder('비밀번호').click();
  await page.getByPlaceholder('비밀번호').fill('catch1@g');
  await page.getByRole('button', { name: '로그인' }).click();
  await page.locator('li').filter({ hasText: '홈' }).click();

  await page.waitForLoadState();
  await page.getByRole('button', { name: '전체보기' }).click();

  await page.waitForLoadState();
  await page.getByRole('button', { name: '화' }).click();
  await page
    .locator('div:nth-child(10) > div > div > .relative > .object-cover')
    .click();

  await page.waitForLoadState();
  await page.getByRole('button', { name: '채팅으로 문의하기' }).click();

  await page.waitForLoadState();
  await page.waitForTimeout(3000);
  await page.getByRole('button', { name: '가격 제안하기' }).click();
  await page.getByPlaceholder('판매가의 10%까지 입력 가능').click();
  await page.getByPlaceholder('판매가의 10%까지 입력 가능').fill('60000');
  await page.getByTestId('sampleButton').click();

  await page.waitForLoadState();
  await page.locator('header').getByRole('img').click();
  await page.locator('li').filter({ hasText: '홈' }).click();

  await page.waitForLoadState();
  await page.getByRole('button', { name: '전체보기' }).click();

  await page.waitForLoadState();
  await page
    .locator('div')
    .filter({ hasText: /^2024년 1월$/ })
    .getByRole('button')
    .first()
    .click();
  await page.getByRole('button', { name: '전체보기' }).click();
  await page.locator('.object-cover').first().click();
  await page.getByRole('button', { name: '구매하기' }).click();
  await page.getByText('전체 동의').click();

  await page.waitForLoadState();
  await page.getByRole('button', { name: '원 결제하기' }).click();
  await page.getByRole('button', { name: '동의 후 결제' }).click();

  await page.waitForLoadState();
  await page.getByRole('button', { name: '상세보기' }).click();

  await page.waitForLoadState();
  await expect(
    page.getByRole('heading', { name: '상품 및 이용정보' }),
  ).toBeVisible();

  await expect(
    page.getByRole('heading', { name: '예약자 정보' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: '이용자 정보' }),
  ).toBeVisible();
  await expect(
    page.getByText(
      '캐치룸에서 구매한 상품은 야놀자 포함 모든 플랫폼에서 환불 불가합니다',
    ),
  ).toBeVisible();
});
