import React from 'react';

const MItemSkeleton = () => {
  return (
    <div className="w-full px-5 py-3 flex flex-col gap-3 animate-pulse">
      <div id="container" className="w-full flex flex-col ">
        <div className="flex w-full gap-4">
          <div className="relative w-[120px] h-[120px] flex-shrink-0 bg-gray-300 rounded-md"></div>
          <div className="flex flex-col justify-between grow">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1 text-gray-300">
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="w-36 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
              <div className="text-gray-300">
                <h3 className="w-24 h-4 bg-gray-300 rounded"></h3>
                <p className="w-16 h-4 bg-gray-300 rounded"></p>
              </div>
            </div>
            <div className="flex gap-2 w-24 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-10 bg-gray-300 rounded"></div>

      <div id="container" className="w-full flex flex-col ">
        <div className="flex w-full gap-4">
          <div className="relative w-[120px] h-[120px] flex-shrink-0 bg-gray-300 rounded-md"></div>
          <div className="flex flex-col justify-between grow">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1 text-gray-300">
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="w-36 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
              <div className="text-gray-300">
                <h3 className="w-24 h-4 bg-gray-300 rounded"></h3>
                <p className="w-16 h-4 bg-gray-300 rounded"></p>
              </div>
            </div>
            <div className="flex gap-2 w-24 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-10 bg-gray-300 rounded"></div>

      <div id="container" className="w-full flex flex-col ">
        <div className="flex w-full gap-4">
          <div className="relative w-[120px] h-[120px] flex-shrink-0 bg-gray-300 rounded-md"></div>
          <div className="flex flex-col justify-between grow">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1 text-gray-300">
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="w-36 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
              <div className="text-gray-300">
                <h3 className="w-24 h-4 bg-gray-300 rounded"></h3>
                <p className="w-16 h-4 bg-gray-300 rounded"></p>
              </div>
            </div>
            <div className="flex gap-2 w-24 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-10 bg-gray-300 rounded"></div>

      <div id="container" className="w-full flex flex-col ">
        <div className="flex w-full gap-4">
          <div className="relative w-[120px] h-[120px] flex-shrink-0 bg-gray-300 rounded-md"></div>
          <div className="flex flex-col justify-between grow">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1 text-gray-300">
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="w-36 h-4 bg-gray-300 rounded"></div>
                </div>
                <div className="w-6 h-6 bg-gray-300 rounded"></div>
              </div>
              <div className="text-gray-300">
                <h3 className="w-24 h-4 bg-gray-300 rounded"></h3>
                <p className="w-16 h-4 bg-gray-300 rounded"></p>
              </div>
            </div>
            <div className="flex gap-2 w-24 h-4 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-10 bg-gray-300 rounded"></div>
    </div>
  );
};

export default MItemSkeleton;
