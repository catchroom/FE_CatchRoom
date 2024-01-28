import { test, expect } from '@playwright/test';

test.describe('마이페이지 로직 테스트', () => {
  test('마이페이지 로직 테스트', async ({ page }) => {
    await page.locator('html').click();
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/home');
    await page.getByRole('navigation').click();
    await page.locator('li').filter({ hasText: '내정보' }).click();
    await page.getByPlaceholder('이메일').click();
    await page.getByPlaceholder('이메일').fill('catch1@gmail.com');
    await page.getByPlaceholder('이메일').press('Tab');
    await page.getByPlaceholder('비밀번호').fill('catch1@g');
    await page.getByRole('button', { name: '로그인' }).click();

    await page.waitForLoadState();
    await page.getByRole('button', { name: '설정' }).click();
    await page.getByRole('heading', { name: '개인정보' }).click();
    await expect(
      page
        .locator('div')
        .filter({ hasText: /^아이디catch1@gmail\.com$/ })
        .locator('span'),
    ).toBeVisible();
    await page.locator('header').getByRole('img').click();

    await page.waitForLoadState();
    await page.locator('.w-4').click();

    await page.waitForLoadState();
    await page.getByText('삭제하기').click();

    await page.waitForLoadState();
    await page.getByRole('button', { name: '등록' }).click();
    await page.getByTestId('inputButton').click();
    await page.getByRole('button', { name: 'IBK기업은행' }).click();
    await page.getByPlaceholder('계좌번호 입력').click();
    await page.getByPlaceholder('계좌번호 입력').fill('82803587261454');
    await page.getByPlaceholder('예금주명').click();
    await page.getByPlaceholder('예금주명').fill('박건우');
    await page.getByTestId('sampleButton').click();

    await page.waitForLoadState();
    await page.waitForTimeout(3000);
    await page
      .locator('div')
      .filter({ hasText: /^예치금 출금$/ })
      .first()
      .click();

    await page.waitForLoadState();
    await page.getByPlaceholder('출금 금액을 입력해주세요').click();
    await page.getByPlaceholder('출금 금액을 입력해주세요').fill('20');
    await page.getByTestId('sampleButton').click();
    await expect(
      page.getByRole('button', { name: '마이페이지로 이동' }),
    ).toBeVisible();

    await page.getByRole('button', { name: '마이페이지로 이동' }).click();

    await page.waitForLoadState();
    await page.getByText('예치금 내역').click();

    await page.waitForLoadState();
    await expect(page.getByText('- 20원').first()).toBeVisible();
    await page.getByRole('img').first().click();

    await page.waitForLoadState();
    await page.getByRole('link', { name: '판매 내역' }).click();
    await page.getByRole('button', { name: '게시만료' }).click();
    await page.getByRole('button', { name: '게시중' }).click();
    await page.locator('header').getByRole('img').click();

    await page.waitForLoadState();
    await page.getByRole('link', { name: '구매 내역' }).click();
    await page.getByRole('img').first().click();

    await page.waitForLoadState();
    await page.getByRole('link', { name: '찜목록' }).click();
    await page.getByRole('img').first().click();

    await page.waitForLoadState();
    await page.getByRole('link', { name: '이용약관', exact: true }).click();
    await page.getByRole('img').first().click();

    await page.waitForLoadState();
    await page
      .locator('div')
      .filter({ hasText: /^개인정보 처리방침$/ })
      .getByRole('link')
      .click();
    await expect(
      page.getByRole('heading', { name: '캐치룸 개인정보처리방침' }),
    ).toBeVisible();

    await expect(page.getByText('캐치룸은 개인정보보호법 제30')).toBeVisible();
    await page.getByRole('img').first().click();

    await page.waitForLoadState();
    await page.locator('.w-4').click();

    await page.waitForLoadState();
    await page.getByText('삭제하기').click();

    await page.waitForLoadState();
    await page.getByText('예치금 출금').click();
    await page
      .getByTestId('modal')
      .getByRole('button', { name: '등록' })
      .click();
    await expect(page.getByText('내 계좌')).toBeVisible();

    await page.getByPlaceholder('계좌번호 입력').click();
    await page.locator('header').getByRole('img').click();
    await page.waitForLoadState();

    await page.getByRole('link', { name: '판매 내역' }).click();

    await page.waitForLoadState();
    await page.waitForTimeout(3000);
    await page.locator('.rounded-md').first().click();

    await page.waitForLoadState();
    await page.waitForTimeout(3000);
    await page.locator('button').first().click();

    await page.waitForLoadState();
    await page.waitForTimeout(3000);
    await page.getByRole('button', { name: '게시만료' }).click();

    await page.waitForLoadState();
    await page.waitForTimeout(3000);
    await page.getByText('기한 수정').click();

    await page.waitForLoadState();
    await page.getByTestId('validationButton').click();
    await page.getByRole('button', { name: '등록하기' }).click();
    await page.getByRole('button', { name: '홈으로 이동' }).click();
    await page.waitForLoadState();

    await page.locator('li').filter({ hasText: '내정보' }).click();

    await page.waitForLoadState();
    await expect(page.getByRole('heading', { name: '캐치룸' })).toBeVisible();
    await expect(
      page.getByText('주소 서울특별시 강남구 테헤란로 108길'),
    ).toBeVisible();
    await expect(page.getByText('호스팅서비스 제공자')).toBeVisible();
    await expect(
      page.getByText('호스팅서비스 제공자 (주)야놀자'),
    ).toBeVisible();
    await expect(
      page.getByText('고객센터 02-4989-4989 평일, 주말 09:'),
    ).toBeVisible();

    await page.getByRole('button', { name: '등록' }).click();
    await page.getByPlaceholder('계좌번호 입력').click();
    await page.getByPlaceholder('계좌번호 입력').fill('zzzzz');
    await expect(
      page.getByText('계좌번호는 숫자만 입력 가능합니다.'),
    ).toBeVisible();

    await page.locator('header').getByRole('img').first().click();

    await page.waitForLoadState();
    await expect(page.getByText('캐캐캐캐치')).toBeVisible();

    await page.getByText('로그아웃').click();
    await page.waitForLoadState();
    await expect(page.getByText('로그아웃 하시겠어요?')).toBeVisible();

    await page.getByRole('button', { name: '예', exact: true }).click();
  });
});
