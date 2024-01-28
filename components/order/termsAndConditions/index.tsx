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

const TermsAndConditions = ({ productName }: { productName: string }) => {
  const [selectedTerms, setSelectedTerms] = useRecoilState(selectedTermsState);
  const [isAllSelected, setIsAllSelected] = useState(false);

  const termsOptions: TermOption[] = [
    {
      id: 'serviceTerms',
      text: '서비스 이용 및 취소/환불규정 동의 (필수)',
      detailLink: '/mypage/dashboard/conditions/consent-refund',
    },
    {
      id: 'personalInfo',
      text: '개인정보 수집 및 이용 동의 (필수)',
      detailLink: '/mypage/dashboard/conditions/consent-essential',
    },
    {
      id: 'thirdParty',
      text: '개인정보 제3자 제공 동의 (필수)',
      detailLink: `/mypage/dashboard/conditions/consent-third?${
        productName ? `productName=${productName}` : 'hello'
      }`,
    },
  ];

  useEffect(() => {
    if (isAllSelected) {
      setSelectedTerms(termsOptions.map((option) => option.id));
    } else {
      setSelectedTerms([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTerms]);

  return (
    <div className="flex-col space-y-4 py-5 mt-6 mb-16">
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
            isLabelTextBold={false}
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
