import { test, expect } from '@playwright/test';

test.describe('채팅 로직 테스트', () => {
  test('채팅 구매자 프로세스', async ({ page }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/chat');
    await expect(
      page.getByText('채팅 기능은 로그인 후 이용할 수 있어요'),
    ).toBeVisible();

    await page.locator('span').filter({ hasText: '로그인' }).click();
    await page.waitForLoadState();
    await expect(page.getByText('야놀자 회원 로그인')).toBeVisible();

    // login
    await page.getByPlaceholder('이메일').click();
    await page.getByPlaceholder('이메일').fill('catch1@gmail.com');
    await page.getByPlaceholder('이메일').press('Tab');
    await page.getByPlaceholder('비밀번호').fill('catch1@g');
    await page.getByRole('button', { name: '로그인' }).click();

    await page.waitForLoadState();
    await page.locator('li').filter({ hasText: '홈' }).click();
    await page.getByRole('button', { name: '전체보기' }).click();

    await page.waitForLoadState();
    await page.getByRole('button', { name: '금 2' }).click();

    await page.waitForLoadState();
    await page
      .locator('div:nth-child(9) > div > div > .relative > .object-cover')
      .click();

    await page.waitForLoadState();
    await page.getByRole('button', { name: '채팅으로 문의하기' }).click();

    await page.waitForLoadState();
    await page.getByPlaceholder('메세지를 입력하세요').click();
    await page.getByPlaceholder('메세지를 입력하세요').fill('안녕하세요\n');

    await page.waitForLoadState();
    await page.getByRole('button', { name: '가격 제안하기' }).click();

    await page.waitForLoadState();
    await page.getByPlaceholder('판매가의 10%까지 입력 가능').click();
    await page.getByPlaceholder('판매가의 10%까지 입력 가능').fill('60000');
    await page.getByTestId('sampleButton').click();

    await page.waitForLoadState();
    await page.getByPlaceholder('메세지를 입력하세요').click();
    await page.getByPlaceholder('메세지를 입력하세요').fill('안녕하세요');

    await expect(page.getByText('가격을 제안했어요').first()).toBeVisible();
  });

  test('채팅 기능 판매자 프로세스', async ({ page }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/chat');
    await expect(
      page.getByText('채팅 기능은 로그인 후 이용할 수 있어요'),
    ).toBeVisible();

    await page.locator('span').filter({ hasText: '로그인' }).click();
    await page.waitForLoadState();
    await expect(page.getByText('야놀자 회원 로그인')).toBeVisible();

    // login
    await page.getByPlaceholder('이메일').click();
    await page.getByPlaceholder('이메일').fill('catch1@gmail.com');
    await page.getByPlaceholder('이메일').press('Tab');
    await page.getByPlaceholder('비밀번호').fill('catch1@g');
    await page.getByRole('button', { name: '로그인' }).click();

    await page.waitForLoadState();
    await page.locator('li').filter({ hasText: '홈' }).click();

    await page.waitForLoadState();
    await page.locator('li').filter({ hasText: '채팅' }).click();

    await page.waitForLoadState();

    // 지금 몇시라는 텍스트가 있는 div 클릭
    await page.locator('p').filter({ hasText: '제안 거절' }).first().click();

    await page.waitForLoadState();
    await expect(page.getByText('가격을 제안했어요')).toBeVisible();

    await page.waitForLoadState();
    await page.getByRole('button', { name: '승인하기' }).click();
    await page.getByRole('button', { name: '거절하기' }).click();

    await page.waitForLoadState();
    await expect(page.getByText('제안을 승인했어요').first()).toBeVisible();
    await expect(page.getByText('제안을 거절했어요').first()).toBeVisible();
  });
});
