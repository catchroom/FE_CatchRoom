import BodyComponent from '@/components/roomInfo/body';
import FooterComponent from '@/components/roomInfo/footer';
import HeaderComponent from '@/components/roomInfo/header';
import React from 'react';

const Page = () => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (isLoading) {
  //   // 로딩 중에 보여줄 스켈레톤 UI
  //   // 추후 비동기 작업 시 작성 예정
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <div className="relative w-full  min-h-screen flex flex-col">
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </div>
    </>
  );
};

export default Page;
