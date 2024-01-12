import Header from '@/components/common/header';
import CatchContainer from '@/components/sale/catch/catchContainer';
import CheckboxContainer from '@/components/sale/checkboxContainer';
import Line from '@/components/sale/line';
import SaleEndContainer from '@/components/sale/saleEndContainer';
import SaleInfoContainer from '@/components/sale/saleInfoContainer';
import SellingPriceContainer from '@/components/sale/sellingPrice/sellingPriceContainer';
import React from 'react';

const Sale = () => {
  // const [open, setOpen] = useState(false);
  // const router = useRouter();
  // const handleModalOpen = () => {
  //   setOpen((prev) => !prev);
  // };
  // const onCancle = () => {
  //   handleModalOpen();
  // };
  // const onConfirm = () => {
  //   handleModalOpen();
  //   router.push('/login');
  // };
  return (
    <div>
      <Header title="판매하기" showBackButton={true} />
      <div className="p-5">
        <SaleInfoContainer />
        <Line />
        <SaleEndContainer />
        <Line />
        <SellingPriceContainer price={132000} />
        <Line />
        <CatchContainer price={132000} />
        <Line />
        <CheckboxContainer />
      </div>
      {/* 모달 사용 예시 */}
      {/* {open && (
        <Modal
          title="로그인 요청"
          content="로그인이 필요한 서비스입니다."
          showConfirmButton={true}
          showCancelButton={true}
          onCancel={onCancle}
          onConfirm={onConfirm}
          confirmString="로그인하기"
        />
      )} */}
    </div>
  );
};

export default Sale;
