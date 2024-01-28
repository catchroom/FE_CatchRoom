import { test, expect } from '@playwright/test';

test.describe('로그인 로직 테스트', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
  });

  test('로그인 INPUT, 로그인 버튼 클릭', async ({ page }) => {
    // 로그인 버튼 클릭 - 올바르지 않은 계정정보 : 로그인 실패 및 에러메시지 출력
    await page.getByPlaceholder('이메일').fill('notallowed@gmail.com');
    await page.getByPlaceholder('비밀번호').fill('notallowed1@');

    await page.getByText('로그인', { exact: true }).click();

    await expect(
      page.getByText('이메일 또는 비밀번호를 다시 확인해주세요.'),
    ).toBeVisible();

    await page.getByText('확인', { exact: true }).click();
    // 로그인 버튼 활성화 조건 : 이메일, 비밀번호에 각각 1자리 이상의 데이터값 입력
    await page.getByPlaceholder('이메일').fill('test777@gmail.com');

    await page.getByPlaceholder('비밀번호').fill('test777@');

    await expect(page.getByText('로그인', { exact: true })).toBeEnabled();

    // 로그인 버튼 클릭 - 올바른 계정정보 : 로그인 완료 및 Case에 따라 랜딩 (홈화면 or 마지막으로 본 상품 상세페이지)
    await page.getByText('로그인', { exact: true }).click();

    await page.waitForLoadState();
    await expect(page.getByText('나의 활동', { exact: true })).toBeVisible();
  });
});
