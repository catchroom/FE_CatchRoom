'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import BackIcon from '@/public/svg/chevron-left.svg';
import CloseIcon from '@/public/svg/ph_x.svg';
import MoreIcon from '@/public/svg/dots-vertical.svg';
import HomeIcon from '@/public/svg/home.svg';
import { HeaderProps } from '@/types/common/header/types';
import Modal from '../modal';
import { useRecoilValue } from 'recoil';
import { isHeaderSate } from '@/atoms/sale/headerAtom';
import { useSearchParams } from 'next/navigation';
import { isProductState } from '@/atoms/sale/productAtom';
import { mypageRoutingAtom } from '@/atoms/mypage/mypageRoutingAtom';

const Header = ({
  title,
  showBackButton = false,
  showCloseButton = false,
  showMoreButton = false,
  showBorder = false,
  showHomeButton = false,
  closeButtonRedirectPath = '',
  isSale = false,
}: HeaderProps) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);
  const ref = useSearchParams();
  const refString = ref?.get('ref');
  const params = useSearchParams();
  const id = params?.get('id');

  const mypageRouting = useRecoilValue(mypageRoutingAtom);
  const isProduct = useRecoilValue(isProductState);

  const headerUnVisible = useRecoilValue(isHeaderSate);

  const headerClass = `w-full max-w-[480px] fixed top-0 grid grid-cols-3 items-center px-4 py-3 bg-bg ${
    showBorder ? 'border-b border-gray-300' : ''
  } ${headerUnVisible ? 'z-0' : 'z-20'} `;

  const handleCloseBtn = () => {
    if (closeButtonRedirectPath) {
      router.push(closeButtonRedirectPath);
    } else {
      router.back();
    }
  };

  const handleBackBtn = () => {
    if (isSale) {
      setModalOpen(true);
    } else if (refString === 'info') {
      router.push('/');
    } else {
      router.back();
      console.log('이동');
    }
  };

  const onConfirm = () => {
    handleModalOpen();
    if (mypageRouting) {
      router.push('/mypage/dashboard/sales');
    } else if (isProduct && id !== undefined && id !== null) {
      window.location.href = `/room-info/${+id}`;
    } else window.location.href = '/';
  };

  const onCancel = () => {
    handleModalOpen();
  };

  const handleModalOpen = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      {modalOpen && (
        <Modal
          title="나가시겠습니까?"
          content="작성된 내용은 저장되지 않습니다."
          showConfirmButton={true}
          showCancelButton={true}
          onConfirm={onConfirm}
          onCancel={onCancel}
          confirmString="나가기"
        />
      )}
      <header className={headerClass}>
        {showBackButton ? (
          <button onClick={handleBackBtn} className="justify-self-start">
            <BackIcon />
          </button>
        ) : showCloseButton ? (
          <button onClick={handleCloseBtn} className="justify-self-start">
            <CloseIcon />
          </button>
        ) : (
          <div />
        )}
        <h1 className="justify-self-center text-t1 whitespace-nowrap font-semibold px-5">
          {title}
        </h1>
        <div className="justify-self-end mt-1">
          {showHomeButton && (
            <button onClick={() => router.push('/home')}>
              <HomeIcon />
            </button>
          )}
          {showMoreButton && (
            <button>
              <MoreIcon />
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
