import Header from '@/components/common/header';
import FilterBar from '@/components/search-result/filterBar';
import React, { ReactNode } from 'react';

// const locations = ['서울', '제주'];
// const checkInDate = '12.1';
// const checkOutDate = '12.2';
// const accommodationType = '호텔';
// const adultsCount = 2;

// const dayOfWeekIn = '목';
// const dayOfWeekOut = '금';

// const locationLabel =
//   locations.length > 1
//     ? `${locations[0]} 외 ${locations.length - 1}건`
//     : locations[0];
// const datesLabel = `${checkInDate} ${dayOfWeekIn} ~ ${checkOutDate} ${dayOfWeekOut}`;
// const accommodationLabel = accommodationType;
// const guestsLabel = `성인 ${adultsCount}명`;

// const filters = [
//   { id: 'location', label: locationLabel },
//   { id: 'date', label: datesLabel },
//   { id: 'accommodation', label: accommodationLabel },
//   { id: 'guests', label: guestsLabel },
// ];

const Searchlayout = ({
  children,
}: {
  children: ReactNode;
  showProductListControls?: boolean;
}) => {
  return (
    <>
      <Header title="검색 결과" showBackButton showHomeButton />
      <FilterBar />
      <main className="w-full absolute h-full mt-20 ">{children}</main>
    </>
  );
};

export default Searchlayout;
