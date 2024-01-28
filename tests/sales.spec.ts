import { test, expect } from '@playwright/test';

test.describe('판매 로직 테스트', () => {
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

  test('상세페이지 물품 등록 프로세서', async ({ page }) => {
    await page.getByRole('button', { name: '숙박권 판매' }).click();

    // 회원이 판매 종료일 설정란 클릭시 : 일/시간 설정이 가능한 캘린더 형식의 바텀시트 노출
    await expect(page.getByText('판매할 숙박권을 선택해주세요.')).toBeVisible();

    // 첫번째 라디오 버튼 클릭
    await page.locator('input[type="radio"]').first().click();
    await page.getByRole('button', { name: '확인', exact: true }).click();

    await expect(page.getByText('판매하기')).toBeVisible();

    await page.getByText('판매가를 선택해주세요', { exact: true }).click();

    // 회원이 판매가 설정 드롭다운 버튼 클릭시 : "판매가를 선택해주세요" 바텀시트 노출
    await expect(page.getByText('판매가를 선택해주세요.')).toBeVisible();

    // 회원이 캐치특가 자동 설정 툴팁 클릭시 : "자동으로 메인상단에 노출되어..." 플로팅 정보 노출
    await page.getByTestId('modalBg').getByText('50% 할인한 금액').click();
    await expect(page.getByText('캐치특가란?')).toBeVisible();

    // 회원이 판매가를 캐치특가로 설정했을 경우 : 거래 수수료율 0% 로 결산
    await expect(page.getByText('- 0원')).toBeVisible();

    await page.getByTestId('priceButton').click();
    await page.getByTestId('modalBg').getByText('10% 할인한 금액').click();

    // 회원이 판매가를 일반매물로 설정했을 경우 : 거래 수수료율 5%로 결산
    await expect(page.getByText('- 0원')).not.toBeVisible();
    await page.getByTestId('priceButton').click();

    await page.getByTestId('modalBg').getByText('60% 할인한 금액').click();

    // 회원이 캐치특가 자동 설정 토글을 ON 했을시 : 캐치특가 판매가 및 캐치특가 적용날짜 디폴트값 노출
    await page.locator('label > .relative').first().click();
    await expect(page.getByText('70% 할인한 금액')).toBeVisible();

    // 회원이 약관 전체 동의 체크박스 체크시 : 하위 약관 전체 체크된 상태로 노출
    // 페이지 아래로 스크롤
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight);
    });

    await page.getByLabel('전체동의', { exact: true }).click();
    await expect(page.getByLabel('[필수] 개인정보 수집 및 이용')).toHaveValue(
      'on',
    );

    await page.getByTestId('validationButton').click();
    await expect(page.getByText('판매자 한마디')).toBeVisible();
  });
});
