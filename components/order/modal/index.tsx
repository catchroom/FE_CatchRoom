import React from 'react';
import ActionButton from './actionButton';
import { ModalProps } from '@/types/order/modal/type';
import BookingDetails from './bookingDetails';
import Disclaimer from './disclaimer';

const Modal = ({ isOpen, onClose, onConfirm }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0  bg-gray-1000 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white w-full max-w-md m-auto">
        <div className="p-5">
          <BookingDetails
            accommodationName="제주신라호텔"
            roomName="스탠다드 더블 / 1박"
            CheckInDate="12월 25일 (월)"
            CheckOutDate="12월 26일 (화)"
            normalCapacity={2}
            maxCapacity={4}
            imageUrl="room_image_url.jpg"
          />
          <Disclaimer />
          <div className="flex justify-center space-x-4 mt-4">
            <ActionButton
              action={onClose}
              label="취소"
              colorClass=" text-gray-700 border border-gray-1000"
            />
            <ActionButton
              action={onConfirm}
              label="동의 후 결제"
              colorClass="bg-gray-1000 hover:bg-gray-900 text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;
