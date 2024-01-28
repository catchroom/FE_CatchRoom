import React from 'react';

const CompleteSkeletonUI = () => {
  return (
    <>
      <div className="flex flex-col container mx-auto w-full px-5 pt-16 bg-bg">
        <div className="flex flex-col justify-center items-center mb-8">
          <div className="flex gap-1 justify-center">
            <div className="h-6 bg-gray-200 rounded w-36"></div>
            <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="h-4 bg-gray-200 rounded w-full max-w-xs"></div>
            <div className="h-4 bg-gray-200 rounded w-full max-w-xs"></div>
            <div className="flex items-center gap-1">
              <div className="h-6 w-6 bg-gray-200 rounded"></div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col container p-5 bg-white">
          <div className="flex flex-col pb-5 border-b border-gray-200">
            <div className="flex flex-col gap-6">
              <div className="h-4 bg-gray-200 rounded w-48"></div>
              <section className="flex gap-5 mb-5">
                <div className="w-32 h-32 bg-gray-200 rounded-lg"></div>
                <div className="flex flex-col gap-2">
                  <div className="h-4 bg-gray-200 rounded w-48"></div>
                  <div className="h-4 bg-gray-200 rounded w-36"></div>
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
              </section>
            </div>
          </div>

          <div>
            <section className="flex flex-col gap-2 px-5 py-5 border-b border-gray-200">
              <div className="h-4 bg-gray-200 rounded w-48"></div>
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-36"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-36"></div>
            </section>
            <section className="flex flex-col gap-2 px-5 py-5 border-b border-gray-200">
              <div className="h-4 bg-gray-200 rounded w-48"></div>
              <div className="flex justify-between items-center">
                <div className="h-4 bg-gray-200 rounded w-24"></div>
                <div className="h-4 bg-gray-200 rounded w-36"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-4 bg-gray-200 rounded w-36"></div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
export default CompleteSkeletonUI;
