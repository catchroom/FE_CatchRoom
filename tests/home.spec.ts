import { test, expect } from '@playwright/test';

test.describe('홈화면 로직 테스트', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
    await page.getByPlaceholder('이메일').click();
    await page.getByPlaceholder('이메일').click();
    await page.getByPlaceholder('이메일').fill('catch1@gmail.com');
    await page.getByPlaceholder('이메일').press('Tab');
    await page.getByPlaceholder('비밀번호').fill('catch1@g');
    await page.getByRole('button', { name: '로그인' }).click();
    await page.locator('li').filter({ hasText: '홈' }).click();
  });

  test('상세페이지 물품 등록 프로세서 (1)', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^지역, 여행 일정, 숙소 유형으로 검색해보세요$/ })
      .click();
    await page.getByRole('button', { name: '모든 지역' }).click();
    await page.getByLabel('전체선택').check();
    await page.getByRole('button', { name: '대전' }).click();
    // 페이지에서 존재하는 첫번째 sampleButton 클릭
    await page.getByTestId('sampleButton').first().click();

    await page.getByRole('button', { name: '날짜 무관' }).click();
    await page.getByTestId('sampleButton').click();
    await page.getByRole('button', { name: '모든 숙소 유형' }).click();
    await page.getByRole('button', { name: '호텔' }).click();
    await page.getByRole('button', { name: '호텔' }).click();
    await page.getByLabel('전체선택').check();
    await page.getByRole('button', { name: '호텔' }).click();
    await page.getByTestId('sampleButton').click();

    await expect(page.getByText('검색하기')).toBeVisible();

    await page.getByRole('button', { name: '검색하기' }).click();

    // 검색결과 페이지 로딩 기다리기
    await page.waitForLoadState();

    // 검색결과 단어가 포함된 페이지 제목이 있는지 확인
    await expect(page.getByText('검색 결과')).toBeVisible();
  });

  test('홈화면 네비게이션 이동 테스트', async ({ page }) => {
    await page.locator('li').filter({ hasText: '채팅' }).click();
    await page.waitForLoadState();
    await page.waitForTimeout(5000);
    await page.locator('li').filter({ hasText: '내정보' }).click();
    await page.waitForLoadState();
    await page.locator('li').filter({ hasText: '홈' }).click();
    await page.waitForLoadState();

    await page.getByRole('button', { name: '전체보기' }).click();
    await page.getByRole('button', { name: '전체' }).click();
    await page.getByLabel('전체선택').check();
    await page.getByRole('button', { name: '경기' }).click();
    await page.getByTestId('sampleButton').click();
    await page.getByRole('button', { name: '할인율 높은순' }).click();
    await page.getByTestId('modalBg').getByText('할인율 높은순').click();
    await page.getByRole('button', { name: '할인율 높은순' }).click();
    await page.getByText('낮은 가격순').click();

    await page.waitForLoadState();

    await expect(page.getByText('경기')).toBeVisible();

    await page.getByRole('button', { name: '토 3' }).click();
  });

  test('이용후기 및 푸터, 배너 테스트', async ({ page }) => {
    await page
      .locator('div')
      .filter({ hasText: /^이용후기전체보기$/ })
      .locator('span')
      .click();
    await expect(page.getByText('이용후기')).toBeVisible();
    await page.goBack();

    await expect(page.getByText('호스팅서비스 제공자')).toBeVisible();
  });
});
