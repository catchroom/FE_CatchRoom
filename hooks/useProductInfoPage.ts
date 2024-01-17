import { useRouter } from 'next/navigation';

/**
 * @function useProduct - 각 상품별 상세페이지로 넘어가기 위해 상품별 id값을 받아 페이지를 전환하는 커스텀훅 입니다.
 * @param roomId - 숙소상품의 id값을 url로 넘깁니다. `ex: /room-info=123`
 * @returns { pageHandler } - pageHandler는 컴포넌트 클릭 핸들러함수입니다. (useRouter 사용)
 * @example const { pageHandler } = useProduct();
 */

export const useProductInfoPage = () => {
  const router = useRouter();

  // 추후 api 연동 시 수정 예정!
  const pageHandler = (roomId?: string) => {
    if (!roomId) {
      router.push(`/room-info`);
      return;
    }
    router.push(`/room-info${roomId}`);
  };

  return { pageHandler };
};
