'use client';
// import { inView } from 'framer-motion';
import React, { useState } from 'react';
import LeftButton from './leftButton';
import HeartButtonComponent from './rightButton';
import { useSetRecoilState } from 'recoil';
import BottomSheetsWithoutCloseBtn from '@/components/common/bottomSheetsWithOutCloseBtn';
import { outerMoreBottomSheetsControl } from '@/atoms/commons/outerBottomSheetsControl';
import Modal from '@/components/common/modal';
import { useParams, useRouter } from 'next/navigation';
import { useMutationDeleteSaleProduct } from '@/api/sale/query';
import { isProductState } from '@/atoms/sale/productAtom';
import { UseParamsType } from '@/types/room-info/types';
import { useRoomItem } from '@/api/room-info/query';
import { useToastAlert } from '@/hooks/useToastAlert';

const HeaderComponent = () => {
  const setMoreBottomSheetOpen = useSetRecoilState(
    outerMoreBottomSheetsControl,
  );
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { id } = useParams() as UseParamsType;
  const { data } = useRoomItem(id);
  const { alertOpenHandler } = useToastAlert('게시글을 삭제했어요.');

  const mutation = useMutationDeleteSaleProduct();
  const setIsProduct = useSetRecoilState(isProductState);

  const handleEditBtnClick = () => {
    setMoreBottomSheetOpen(false);
    setIsProduct(true);
    router.push(`/sale?id=${id}`);
  };

  const handleDeleteBtnClick = () => {
    setMoreBottomSheetOpen(false);
    handleModalOpen();
  };

  const onConfirm = () => {
    mutation.mutate(+id, {
      onSuccess: handleMutationSucess,
      onError: handleMutationError,
    });
  };

  const handleMutationSucess = () => {
    handleModalOpen();
    alertOpenHandler();
    router.push('/mypage/dashboard/sales?ref=info');
  };

  const handleMutationError = () => {
    handleModalOpen();
  };

  const onCancel = () => {
    handleModalOpen();
  };

  const handleModalOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <div className="fixed top-0 flex justify-between w-full max-w-[480px] bg-bg p-4 z-20">
        <LeftButton />
        {/* 스크롤에 따라 숙소이름 뜨게 하려는 용도..
        {titleHidden && <div className="text-h5 font-extrabold">123</div>} */}

        {data?.userIdentity === 'SELLER' ? (
          <button className="flex items-center justify-center w-[1.75rem] h-[1.75rem] ">
            {/* <MoreIcon /> */}
            <BottomSheetsWithoutCloseBtn
              buttonSelect="more"
              outerControlAtom="more"
              outerControl={true}
            >
              <div className="flex flex-col gap-7 w-full py-3 text-t1 font-bold">
                <div onClick={handleEditBtnClick}>수정하기</div>
                <div onClick={handleDeleteBtnClick}>삭제하기</div>
              </div>
            </BottomSheetsWithoutCloseBtn>
          </button>
        ) : data?.userIdentity === 'BUYER' ? (
          <HeartButtonComponent />
        ) : (
          <></>
        )}
      </div>

      {open && (
        <Modal
          title="게시물 삭제"
          content="마켓에서 게시글이 삭제됩니다. 삭제된 매물은 &#13;&#10;내역에서도 확인하실 수 &#13;&#10; 없습니다."
          showConfirmButton={true}
          showCancelButton={true}
          confirmString="삭제하기"
          onConfirm={onConfirm}
          onCancel={onCancel}
        />
      )}
    </>
  );
};

export default HeaderComponent;
