import CheckInDateComponent from '@/components/common/checkInDateComponent';
import React from 'react';

const ItemCheckInComponent = () => {
  return (
    <>
      <CheckInDateComponent
        checkInDate="2024-01-01 (월)"
        CheckInTime="15:00"
        CheckOutDate="2024-01-02 (화)"
        CheckOutTime="11:00"
      />
    </>
  );
};

export default ItemCheckInComponent;
