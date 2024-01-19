import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CatchContainer from '.';
import { RecoilRoot, atom } from 'recoil';

describe('CatchContainer test', () => {
  it('물음표 버튼 클릭시 캐치특가 설명 컨테이너 보임', async () => {
    const user = userEvent.setup();
    render(
      <RecoilRoot>
        <CatchContainer price={13000} />
      </RecoilRoot>,
    );

    const questionmark = screen.getByTestId('question-mark');
    await user.click(questionmark);

    const catchDescribe = screen.getByTestId('catch-describe');

    await waitFor(() => {
      expect(catchDescribe).toBeInTheDocument();
    });
  });

  // 모의 Recoil 상태
  const mockCatchState = atom({
    key: 'mockCatchState',
    default: false,
  });

  it('캐치특가 토글 버튼 선택하면 가격,날짜를 선택할 수 있게 요소들이 보여야함 ', async () => {
    const user = userEvent.setup();

    render(
      <RecoilRoot initializeState={(snap) => snap.set(mockCatchState, false)}>
        <CatchContainer price={13000} />
      </RecoilRoot>,
    );

    const slideButton = screen.getByTestId('slideButton');
    await user.click(slideButton);

    await waitFor(() => {
      expect(screen.getByText('캐치특가 적용 가격')).toBeInTheDocument();
    });
  });
});
