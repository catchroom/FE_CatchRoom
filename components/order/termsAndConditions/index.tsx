'use client';
import CheckBoxComponent from '@/components/common/checkBox';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedTermsState } from '@/atoms/order/termsAgreementAtom';

type TermOption = {
  id: string;
  text: string;
  detailLink: string;
};

const termsOptions: TermOption[] = [
  {
    id: 'serviceTerms',
    text: '서비스 이용 및 취소/환불규정 동의 (필수)',
    detailLink: '/mypage/dashboard/terms',
  },
  {
    id: 'personalInfo',
    text: '개인정보 수집 및 이용 동의 (필수)',
    detailLink: '/mypage/dashboard/terms',
  },
  {
    id: 'thirdParty',
    text: '개인정보 제3자 제공 동의 (필수)',
    detailLink: '/mypage/dashboard/terms',
  },
]; //페이지 생성 후 링크 수정 예정

const TermsAndConditions = () => {
  const [selectedTerms, setSelectedTerms] = useRecoilState(selectedTermsState);
  const [isAllSelected, setIsAllSelected] = useState(false);

  useEffect(() => {
    if (isAllSelected) {
      setSelectedTerms(termsOptions.map((option) => option.id));
    } else {
      setSelectedTerms([]);
    }
  }, [isAllSelected, setSelectedTerms]);

  const handleSelectTerm = (id: string) => {
    setSelectedTerms((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((term) => term !== id)
        : [...prevSelected, id],
    );
  };

  useEffect(() => {
    setIsAllSelected(
      termsOptions.every((option) => selectedTerms.includes(option.id)),
    );
  }, [selectedTerms]);

  return (
    <div className="flex-col space-y-4 py-5 mt-6 mb-[13rem]">
      <CheckBoxComponent
        id="selectAll"
        labelText="전체 동의"
        isBoxChecked={isAllSelected}
        isLabelTextBold={true}
        handleSelectState={() => setIsAllSelected(!isAllSelected)}
      />
      {termsOptions.map(({ id, text, detailLink }) => (
        <div key={id} className="flex justify-between items-center relative">
          <CheckBoxComponent
            id={id}
            labelText={text}
            isBoxChecked={selectedTerms.includes(id)}
            handleSelectState={() => handleSelectTerm(id)}
          />
          <Link
            href={detailLink}
            className="text-text-primary  absolute right-0 text-t2"
          >
            보기
          </Link>
        </div>
      ))}
    </div>
  );
};

export default TermsAndConditions;
