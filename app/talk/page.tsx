// import { cookies } from 'next/headers';
import React from 'react';
import LoginButton from './LoginButton';

export type ChatRoom = {
  chatRoomNumber: string;
  buyerId: number;
  sellerId: number;
  productId: number;
  loginUserIdentity: string;
};

// const fetchChatRoom = async () => {
//   const accessToken = cookies().get('accessToken')?.value;
//   const data = await fetch('https://catchroom.xyz/v1/chat/room/list', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: `Bearer ${accessToken}`,
//     },
//   });

//   const result = await data.json();

//   return result.data;
// };

const page = async () => {
  // const result = await fetchChatRoom();

  return (
    <div className="w-full h-full p-5">
      <LoginButton />
      <p>안녕 반가워</p>
      {/* <div className="w-full h-full bg-white p-5">
        {result &&
          result.map((room: ChatRoom, index: number) => {
            return (
              <div key={index}>
                <div>
                  <p>{room.chatRoomNumber}</p>
                </div>
              </div>
            );
          })}
      </div> */}
    </div>
  );
};

export default page;
