import { test, expect } from '@playwright/test';

test('구매 로직 테스트', async ({ page }) => {
  await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
  await page.getByPlaceholder('이메일').click();
  await page.getByPlaceholder('이메일').fill('catch1@gmail.com');
  await page.getByPlaceholder('이메일').press('Tab');
  await page.getByPlaceholder('비밀번호').fill('catch1@g');
  await page.getByRole('button', { name: '로그인' }).click();
  await page.locator('li').filter({ hasText: '홈' }).click();
  await page
    .locator('div')
    .filter({ hasText: /^지역, 여행 일정, 숙소 유형으로 검색해보세요$/ })
    .click();

  await page.waitForLoadState();
  await page.getByRole('button', { name: '모든 지역' }).click();
  await expect(page.getByLabel('전체선택')).toHaveValue('on');
  await page.getByTestId('sampleButton').click();
  await page.getByRole('button', { name: '날짜 무관' }).click();
  await page.getByTestId('sampleButton').click();
  await page.getByRole('button', { name: '모든 숙소 유형' }).click();
  await page.getByTestId('sampleButton').click();
  await page.getByRole('button', { name: '성인 2명' }).click();
  await page.getByTestId('sampleButton').click();
  await page.getByRole('button', { name: '모든 지역' }).click();
  await page.getByText('전체선택').click();
  await page.getByRole('button', { name: '경기' }).click();
  await page.getByTestId('sampleButton').click();
  await page.getByRole('button', { name: '검색하기' }).click();
  await page.getByRole('button', { name: '할인율 높은순' }).click();
  await page.getByTestId('modalBg').getByText('할인율 높은순').click();
  await page.getByText('총 51건할인율 높은순').click();
  await page.getByRole('button', { name: '할인율 높은순' }).click();
  await page.waitForLoadState();
  await page.waitForTimeout(3000);
  await page.getByText('낮은 가격순').click();
  await page.getByRole('button', { name: '낮은 가격순' }).click();
  await page.waitForLoadState();
  await page.waitForTimeout(3000);
  await page.getByText('체크인 임박순').click();
  await page.getByRole('button', { name: '체크인 임박순' }).click();
  await page.waitForLoadState();
  await page.waitForTimeout(3000);
  await page.getByText('낮은 가격순').click();
  await page.waitForLoadState();
  await page.waitForTimeout(3000);
  await page
    .locator('div:nth-child(2) > div > div > .relative > .object-cover')
    .click();

  await page.waitForLoadState();
  await page.waitForTimeout(3000);
  await page.locator('button').first().click();
  await page.getByRole('button', { name: '경기' }).click();
  await page.getByTestId('sampleButton').click();
  await page.getByRole('button', { name: '날짜 무관' }).click();
  await page.getByTestId('sampleButton').click();
  await page.getByRole('button', { name: '모든 타입' }).click();
  await page.getByRole('button', { name: '리조트' }).click();
  await page
    .getByTestId('modalBg')
    .getByRole('button', { name: '펜션' })
    .click();
  await page
    .getByTestId('modalBg')
    .getByRole('button', { name: '모텔' })
    .click();
  await page
    .getByTestId('modalBg')
    .getByRole('button', { name: '기타' })
    .click();
  await page.getByTestId('sampleButton').click();

  await expect(page.getByText('지도로 보기')).toBeVisible();
});
