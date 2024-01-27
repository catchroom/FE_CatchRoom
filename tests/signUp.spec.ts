import { test, expect } from '@playwright/test';

test.describe('회원가입 로직 테스트', () => {
  test('[야놀자 통합 회원가입] 버튼 클릭시 : [약관동의] 바텀시트 노출 (체크박스는 모두 해제된 상태)', async ({
    page,
  }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
    await page.getByText('야놀자 통합 회원가입').click();

    await expect(
      page.locator('div').filter({ hasText: /^약관 동의$/ }),
    ).toBeVisible();
  });

  test('[전체동의] 체크박스 비활성화 상태에서 클릭시 : [전체동의] 체크박스 활성화 및 하단 개별 약관 동의 체크박스 전체 활성화', async ({
    page,
  }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
    await page.getByText('야놀자 통합 회원가입').click();

    await page.getByLabel('전체동의').click();
    await expect(page.getByLabel('마케팅 정보 수신 동의 (선택)')).toHaveValue(
      'on',
    );
  });

  test('[전체동의] 체크박스 활성화 상태에서 클릭시 : [전체동의] 체크박스 비활성화 및 하단 개별 약관 동의 체크박스 전체 비활성화', async ({
    page,
  }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
    await page.getByText('야놀자 통합 회원가입').click();

    await page.getByLabel('전체동의').click();
    await page.getByLabel('전체동의').click();

    await expect(page.getByText('동의하고 계속하기')).toBeDisabled();
  });

  test('[전체동의] 체크박스 활성화 상태에서 활성화된 하단 개별 약관 동의 체크박스 클릭시 : [전체동의] 체크박스 비활성화 및 클릭한 개별 약관 동의 체크박스 비활성화', async ({
    page,
  }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
    await page.getByText('야놀자 통합 회원가입').click();

    await page.getByLabel('전체동의').click();
    await page.getByLabel('거래관련 필수 알림 수신 동의 (필수)').click();

    await expect(page.getByLabel('전체동의')).not.toBeChecked();
  });

  test('필수 약관 동의 항목(만 14세 이상, 서비스 이용 약관, 개인정보 수집 및 이용, 거래관련 필수 알림 수신 등 4개 항목) 체크박스 전체 활성화시 : [동의하고 계속하기] 버튼 활성화', async ({
    page,
  }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
    await page.getByText('야놀자 통합 회원가입').click();

    await page.getByLabel('만 14세 이상입니다. (필수)').click();
    await page.getByLabel('서비스 이용 약관 동의 (필수)').click();
    await page.getByLabel('개인정보 수집 및 이용 동의 (필수)').click();
    await page.getByLabel('거래관련 필수 알림 수신 동의 (필수)').click();

    await expect(page.getByText('동의하고 계속하기')).toBeEnabled();
  });

  //[동의하고 계속하기] 버튼 활성화 상태에서 클릭시 : [야놀자 통합 회원가입 (1/2)] 페이지로 이동
  test('[동의하고 계속하기] 버튼 활성화 상태에서 클릭시 : [야놀자 통합 회원가입 (1/2)] 페이지로 이동', async ({
    page,
  }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
    await page.getByText('야놀자 통합 회원가입').click();

    await page.getByLabel('만 14세 이상입니다. (필수)').click();
    await page.getByLabel('서비스 이용 약관 동의 (필수)').click();
    await page.getByLabel('개인정보 수집 및 이용 동의 (필수)').click();
    await page.getByLabel('거래관련 필수 알림 수신 동의 (필수)').click();

    await page.getByText('동의하고 계속하기').click();

    // 페이지로 이동했는지 확인
    await expect(
      page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/signup'),
    ).toBeTruthy();
  });
});

test.describe('회원가입 로직 테스트', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/login');
    await page.getByText('야놀자 통합 회원가입').click();
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/signup');
  });
  test('야놀자 통합 회원가입 (1/2)', async ({ page }) => {
    await page.getByPlaceholder('이메일').click();

    await page.getByPlaceholder('이메일').fill('a');

    // 텍스트박스 클릭(포커스) 시 : 보더 컬러 변경
    await expect(page.getByPlaceholder('이메일')).toHaveCSS(
      'border-color',
      'rgb(221, 51, 68)',
    );

    // [이메일 텍스트박스]에 올바르지 않은 이메일 형식 데이터값 입력시 : "올바르지 않은 이메일 형식입니다. 이메일을 다시 확인해주세요" 얼럿 문구 노출
    await expect(
      page.getByText(
        '올바르지 않은 이메일 형식입니다 이메일을 다시 확인해주세요.',
      ),
    ).toBeVisible();

    // 입력한 텍스트 노출, 텍스트 입력 커서 노출, X버튼 노출
    await expect(page.locator('circle')).toBeVisible();

    // (모든 텍스트박스 공통) 클릭 해제(포커스 아웃) 시 : 텍스트 입력 커서 미노출, X버튼 미노출
    await page.getByPlaceholder('이메일').press('Tab');
    await expect(page.locator('circle')).not.toBeVisible();

    await page.getByPlaceholder('이메일').click();
    await page.getByPlaceholder('이메일').fill('newsample@gmail.com');

    await page.getByText('중복확인', { exact: true }).click();

    // [중복확인] 버튼 클릭 시 : "사용 가능한 이메일입니다." 얼럿 문구 노출
    await expect(page.getByText('사용 가능한 이메일입니다.')).toBeVisible();

    await page.getByRole('button', { name: '확인' }).click();

    await expect(page.getByText('사용 가능한 이메일입니다.')).not.toBeVisible();
    await expect(
      page.getByText('이메일 형식을 확인해주세요'),
    ).not.toBeVisible();

    //[비밀번호 텍스트박스]에 텍스트 입력 및 유효하지 않은 비밀번호 양식인 경우 : "영문 + 숫자 + 특수문자 8-20자리 조합으로 설정해주세요" 얼럿 문구 노출
    await page.getByPlaceholder('비밀번호', { exact: true }).click();
    await page.getByPlaceholder('비밀번호', { exact: true }).fill('asdfasdf');
    await expect(
      page.getByText('영문 + 숫자 + 특수문자 8~20자리 조합으로 설정해주세요.'),
    ).toBeVisible();

    // 2글자 이하 입력시 : "비밀번호는 8자 이상 20자 이하로 입력해주세요." 얼럿 문구 노출
    await page.getByPlaceholder('비밀번호', { exact: true }).fill('a');
    await expect(
      page.getByText('영문 + 숫자 + 특수문자 8~20자리 조합으로 설정해주세요.'),
    ).toBeVisible();

    //[비밀번호 재입력 텍스트박스]에 텍스트 입력 및 [비밀번호 텍스트박스]에 입력된 값과 다를 경우 : 동일한 비밀번호를 입력해주세요" 얼럿 문구 노출
    await page.getByPlaceholder('비밀번호', { exact: true }).click();
    await page.getByPlaceholder('비밀번호', { exact: true }).fill('test1234!');

    await page.getByPlaceholder('비밀번호 재입력', { exact: true }).click();
    await page
      .getByPlaceholder('비밀번호 재입력', { exact: true })
      .fill('test1234@');

    await expect(
      page.getByText('동일한 비밀번호를 입력해주세요.'),
    ).toBeVisible();

    // [다음]버튼 활성화 조건 - 이메일 중복검사 진행 및 통과, 유효한 비밀번호 입력, 일치하는 비밀번호 재입력 - 달성시 : [다음] 버튼 활성화
    await page.getByPlaceholder('비밀번호 재입력', { exact: true }).click();
    await page
      .getByPlaceholder('비밀번호 재입력', { exact: true })
      .fill('test1234!');

    await expect(page.getByText('다음')).toBeEnabled();

    // [다음] 버튼 클릭 시 : [야놀자 통합 회원가입 (2/2)] 페이지로 이동
    await page.getByText('다음').click();
    await expect(
      page.getByRole('heading', { name: '야놀자 통합 회원가입(2/2)' }),
    ).toBeVisible();
  });

  test('야놀자 통합 회원가입 (2/2)', async ({ page }) => {
    await page.goto('https://dev.dhlbrqe2v28e4.amplifyapp.com/signup/next');

    // [닉네임 텍스트박스]에 올바른 이메일 데이터값 입력한 상태에서 중복확인 버튼 클릭시 - 중복검사 실행 - 중복된 닉네임의 경우 : "사용중인 닉네임입니다" 얼럿 문구 노출
    await page.getByPlaceholder('닉네임', { exact: true }).fill('홍길동');
    await page.getByText('중복확인', { exact: true }).click();

    await expect(page.getByText('사용중인 닉네임입니다.')).toBeVisible();

    // [다음] 버튼 활성화 조건 - 유효한 이름 입력, 유효한 휴대폰번호 입력, 유효한 닉네임 입력 및 중복검사 통과
    await page.getByPlaceholder('이름', { exact: true }).fill('홍길동');
    await page
      .getByPlaceholder('휴대폰번호', { exact: true })
      .fill('01012345678');

    await page
      .getByPlaceholder('닉네임', { exact: true })
      .fill(`테스트${Math.floor(Math.random() * 100)}`);

    await page.getByText('중복확인', { exact: true }).click();

    await expect(page.getByText('완료', { exact: true })).toBeEnabled();
  });
});
