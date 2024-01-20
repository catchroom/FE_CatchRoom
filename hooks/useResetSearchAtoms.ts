'use client';
import {
  adultCountState,
  childCountState,
  isAllDayCheckedState,
  isRegionCheckedState,
  isRoomCheckedState,
  rangeDate,
  regionBooleanIndex,
  regionIndex,
  roomBooleanIndex,
  roomIndex,
} from '@/atoms/search-detail/searchStates';
import { useResetRecoilState } from 'recoil';

export const useResetSearchAtoms = () => {
  const resetIsRegionChecked = useResetRecoilState(isRegionCheckedState);
  const resetRegionIndex = useResetRecoilState(regionIndex);
  const resetRegionBooleanIndex = useResetRecoilState(regionBooleanIndex);

  const resetIsAllDayChecked = useResetRecoilState(isAllDayCheckedState);
  const resetRangeDate = useResetRecoilState(rangeDate);

  const resetIsRoomChecked = useResetRecoilState(isRoomCheckedState);
  const resetRoomIndex = useResetRecoilState(roomIndex);
  const resetRoomBooleanIndex = useResetRecoilState(roomBooleanIndex);

  const resetAdultCount = useResetRecoilState(adultCountState);
  const resetChildCount = useResetRecoilState(childCountState);

  const resetAllSearchAtoms = () => {
    resetIsRegionChecked();
    resetRegionIndex();
    resetRegionBooleanIndex();

    resetIsAllDayChecked();
    resetRangeDate();

    resetIsRoomChecked();
    resetRoomIndex();
    resetRoomBooleanIndex();

    resetAdultCount();
    resetChildCount();
  };

  return resetAllSearchAtoms;
};
