import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BankForm from '.';
import { mockAnimationsApi } from 'jsdom-testing-mocks';

mockAnimationsApi();

describe('bankForm test', () => {
  it('모든 input을 입력하지 않고 submit button을 눌렀을 때 경고 표시 활성화 되는 지 테스트', async () => {
    // 1. 테스트 환경 구성
    const user = userEvent.setup();
    render(<BankForm />);

    // 2. 테스트할 요소 찾기
    const submitButton = screen.getByText('등록하기');

    // 3. action
    await user.click(submitButton);

    // 4. result
    await waitFor(() => {
      const bankError = screen.getByText('은행을 선택해주세요.');
      const accountError = screen.getByText('계좌번호를 입력해주세요.');
      const accountNameError = screen.getByText('이름을 입력해주세요.');

      // expect로 테스트를 진행
      // 결과는 눈에 보이는 결과물로!!
      expect(bankError).toBeInTheDocument();
      expect(accountError).toBeInTheDocument();
      expect(accountNameError).toBeInTheDocument();
    });
  });

  it('은행명 선택하면 모달이 열리는 지 테스트', async () => {
    const user = userEvent.setup();
    render(<BankForm />);

    const bankInput = screen.getByText('은행명 선택');
    await user.click(bankInput);

    await waitFor(() => {
      const modal = screen.getByText('국민은행');
      expect(modal).toBeInTheDocument();
    });
  });

  it('은행명 선택하면 모달이 열리고, 모달에서 은행을 선택하면 은행명이 입력되는 지 테스트', async () => {
    const user = userEvent.setup();
    render(<BankForm />);

    const bankInput = screen.getByText('은행명 선택');
    await user.click(bankInput);

    const bank = screen.getByText('국민은행');
    await user.click(bank);

    await waitFor(() => {
      expect(bankInput).toHaveTextContent('은행명');
      expect(bankInput).toHaveTextContent('국민은행');
    });
  });

  it('은행명 선택을 누르고 모달을 누르고 선택 완료 버튼을 누르면 모달이 닫히는 지 테스트', async () => {
    const user = userEvent.setup();
    render(<BankForm />);

    const bankInput = screen.getByText('은행명 선택');
    await user.click(bankInput);

    const bank = screen.getByText('국민은행');
    await user.click(bank);

    const completeButton = screen.getByText('선택완료');
    await user.click(completeButton);

    await waitFor(() => {
      expect(completeButton).not.toBeInTheDocument();
      expect(bankInput).toHaveTextContent('국민은행');
    });
  });

  it('통합 테스트', async () => {
    const user = userEvent.setup();
    render(<BankForm />);

    // 은행 선택 모달 들어가기
    const bankInput = screen.getByText('은행명 선택');
    await user.click(bankInput);

    // 은행 선택
    const bank = screen.getByText('국민은행');
    await user.click(bank);

    // 모달 닫기
    const completeButton = screen.getByText('선택완료');
    await user.click(completeButton);

    // 계좌번호 입력
    const accountInput = screen.getByPlaceholderText('계좌번호 입력');
    await user.type(accountInput, '1234567890123456');

    // 예금주명 입력
    const accountNameInput = screen.getByPlaceholderText('예금주명');
    await user.type(accountNameInput, '홍길동');

    // submit button 클릭
    const submitButton = screen.getByText('등록하기');
    await user.click(submitButton);

    // 모달이 닫히고, 입력한 값이 입력되는 지 테스트
    await waitFor(() => {
      expect(completeButton).not.toBeInTheDocument();
      expect(bankInput).toHaveTextContent('국민은행');
      expect(accountInput).toHaveValue('1234567890123456');
      expect(accountNameInput).toHaveValue('홍길동');
    });
  });
});
