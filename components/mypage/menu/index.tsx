'use client';

import React from 'react';
import { useRecoilState } from 'recoil';
import { menuAtom } from '@/atoms/mypage/menuAtom';
import { MENU_BUTTON } from '@/constants/mypage';

const changeStyle = (menu: string, value: string) =>
  menu === value
    ? 'bg-gray-500 border-border-secondary'
    : 'bg-gray-300 opacity-20';

const Menu = () => {
  const [menu, setMenu] = useRecoilState(menuAtom);

  return (
    <div className="w-full flex">
      {MENU_BUTTON.map((item) => {
        return (
          <button
            key={item.name}
            onClick={() => setMenu(item.value)}
            className={`w-1/2 flex justify-center border-t-[1px] p-3 text-black items-center transition-all duration-300 ${changeStyle(
              menu,
              item.value,
            )}`}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
};

export default Menu;
